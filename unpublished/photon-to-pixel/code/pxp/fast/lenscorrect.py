"""Lens corrections — pipeline tier. Twins of pxp.lenscorrect.

The gain map and the radial warps as array expressions. The fixed-
point iterations run vectorized over the whole radius grid, in the
same order as the reference loops, and the bilinear gather mirrors
the reference kernel term by term — the equality tests hold every
correction bit-identical.
"""

import numpy as np

from ..lenscorrect import _magnification, effective_wavelength


def _grid(height, width):
    yy, xx = np.mgrid[0:height, 0:width]
    u = 2.0 * (xx + 0.5) / width - 1.0
    v = 2.0 * (yy + 0.5) / height - 1.0
    return u, v, (u * u + v * v) / 2.0


def unvignette(mosaic, lens):
    height, width = mosaic.shape
    _, _, r2 = _grid(height, width)
    gain = 1.0 / (1.0 / (1.0 + lens.vignetting * r2) ** 2)
    return mosaic * gain


def _sample_bilinear(plane, x, y):
    height, width = plane.shape
    x0 = np.floor(x).astype(np.int64)
    y0 = np.floor(y).astype(np.int64)
    fx, fy = x - x0, y - y0
    xa = np.clip(x0, 0, width - 1)
    xb = np.clip(x0 + 1, 0, width - 1)
    ya = np.clip(y0, 0, height - 1)
    yb = np.clip(y0 + 1, 0, height - 1)
    top = plane[ya, xa] * (1 - fx) + plane[ya, xb] * fx
    bottom = plane[yb, xa] * (1 - fx) + plane[yb, xb] * fx
    return top * (1 - fy) + bottom * fy


def _resample_radial(plane, scale):
    height, width = plane.shape
    u, v, _ = _grid(height, width)
    sx = ((u * scale) + 1.0) / 2.0 * width - 0.5
    sy = ((v * scale) + 1.0) / 2.0 * height - 0.5
    return _sample_bilinear(plane, sx, sy)


def correct_ca(pixels, lens):
    height, width = pixels.shape[:2]
    _, _, r2 = _grid(height, width)
    green_wl = effective_wavelength(1)
    channels = [pixels[:, :, c] for c in range(3)]
    out = [None, channels[1], None]
    for channel in (0, 2):
        wavelength = effective_wavelength(channel)
        scale = np.ones_like(r2)
        for _ in range(8):
            scale = (_magnification(lens, r2, green_wl)
                     / _magnification(lens, scale * scale * r2,
                                      wavelength))
        out[channel] = _resample_radial(channels[channel], scale)
    return np.stack(out, axis=-1)


def correct_distortion(pixels, lens):
    height, width = pixels.shape[:2]
    _, _, r2 = _grid(height, width)
    green_wl = effective_wavelength(1)
    scale = np.ones_like(r2)
    for _ in range(8):
        scale = 1.0 / _magnification(lens, scale * scale * r2,
                                     green_wl)
    return np.stack([_resample_radial(pixels[:, :, c], scale)
                     for c in range(3)], axis=-1)
