"""Undoing the lens.

Chapter 1's lens commits three sins with three known coefficients;
this module inverts them. Each correction also has a *place* in the
pipeline, and the placements matter as much as the arithmetic:

  vignetting   on the mosaic, before white balance — so the
               estimators never mistake dark corners for scene
               content, and so the fix is one multiply per photosite
  CA           per channel, right after demosaicing and before the
               color matrix — the matrix mixes R, G and B at each
               pixel, and mixing misaligned channels would bake the
               fringes into every output channel forever
  distortion   after CA, once the channels agree about geometry

CA and distortion are both radial warps, so they share one engine:
resample each plane at a radius-dependent source position, reading
between pixels with bilinear interpolation. That interpolation is
the book's first resampling decision, and Chapter 9 returns to it.
"""

from .image import Image
from .sensor import SENSITIVITIES
from .spectrum import SAMPLE_COUNT, WAVELENGTHS


def unvignette(mosaic, lens):
    """Divide the falloff back out, photosite by photosite.

    Exact by construction — we know the model. The cost is not
    accuracy but noise: the corners get their brightness back and
    their noise amplified by the same factor, which for the kit lens
    is 1.8x (almost a stop) at the extreme corner. Vignetting
    correction is always a trade against corner noise; some
    processors deliberately correct only partway."""
    height, width = len(mosaic), len(mosaic[0])
    out = []
    for y in range(height):
        row = []
        for x in range(width):
            gain = 1.0 / lens.falloff((x + 0.5) / width,
                                      (y + 0.5) / height)
            row.append(mosaic[y][x] * gain)
        out.append(row)
    return out


def effective_wavelength(channel):
    """One wavelength standing in for a whole filter band: the
    response-weighted mean. The lens smeared each channel across its
    band; a single-wavelength correction is therefore an
    approximation of our own forward model, and the residual it
    leaves is measured in the chapter."""
    response = SENSITIVITIES[channel].samples
    weighted, total = 0.0, 0.0
    for band in range(SAMPLE_COUNT):
        weighted += WAVELENGTHS[band] * response[band]
        total += response[band]
    return weighted / total


def _magnification(lens, r2, wavelength):
    """Where the lens looked, as a scale factor: Chapter 1's model,
    factored out of source_position."""
    return ((1.0 + lens.distortion * r2)
            * (1.0 + lens.ca * (wavelength - 560.0) / 560.0))


def _sample_bilinear(plane, x, y):
    """Read a plane between its pixels: mix the four neighbors by
    coverage. Soft but stable — the workhorse kernel of every
    geometry correction shipped, and the reason corrected images
    are very slightly blurrier than uncorrected ones."""
    height, width = len(plane), len(plane[0])
    x0 = int(x // 1)
    y0 = int(y // 1)
    fx, fy = x - x0, y - y0
    xa = min(width - 1, max(0, x0))
    xb = min(width - 1, max(0, x0 + 1))
    ya = min(height - 1, max(0, y0))
    yb = min(height - 1, max(0, y0 + 1))
    top = plane[ya][xa] * (1 - fx) + plane[ya][xb] * fx
    bottom = plane[yb][xa] * (1 - fx) + plane[yb][xb] * fx
    return top * (1 - fy) + bottom * fy


def _resample_radial(plane, source_scale):
    """The shared engine: each output pixel fetches its value from
    a radially scaled source position. source_scale(r2) answers
    'for an output pixel at (scaled) radius-squared r2, how far out
    did the lens actually put this content?'."""
    height, width = len(plane), len(plane[0])
    out = []
    for y in range(height):
        row = []
        for x in range(width):
            u = 2.0 * (x + 0.5) / width - 1.0
            v = 2.0 * (y + 0.5) / height - 1.0
            r2 = (u * u + v * v) / 2.0
            scale = source_scale(r2)
            sx = ((u * scale) + 1.0) / 2.0 * width - 0.5
            sy = ((v * scale) + 1.0) / 2.0 * height - 0.5
            row.append(_sample_bilinear(plane, sx, sy))
        out.append(row)
    return out


def correct_ca(image, lens):
    """Align red and blue to green.

    For an output pixel at radius r, green's content came from
    r times m_green; we want the red plane's value for that same
    scene point, which red recorded at r times m_red of its own
    source radius. The scale solving that is a fixed point;
    eight iterations pin it far below quantization for any sane
    lens.
    Green is untouched: CA correction moves two channels to meet
    the third, not three channels to meet the truth — that is
    distortion correction's job, next."""
    green_wl = effective_wavelength(1)
    planes = [[[image.get(x, y)[c] for x in range(image.width)]
               for y in range(image.height)] for c in range(3)]
    for channel in (0, 2):
        wavelength = effective_wavelength(channel)

        def source_scale(r2, wavelength=wavelength):
            scale = 1.0
            for _ in range(8):
                scale = (_magnification(lens, r2, green_wl)
                         / _magnification(lens, scale * scale * r2,
                                          wavelength))
            return scale

        planes[channel] = _resample_radial(planes[channel],
                                           source_scale)
    out = Image(image.width, image.height, channels=3)
    for y in range(image.height):
        for x in range(image.width):
            out.set(x, y, [planes[c][y][x] for c in range(3)])
    return out


def correct_distortion(image, lens):
    """Straighten the geometry: every channel warped by the inverse
    of green's magnification. The inverse has no closed form — the
    magnification depends on the radius we are solving for — but the
    same eight-iteration fixed point settles it."""
    green_wl = effective_wavelength(1)

    def source_scale(r2):
        scale = 1.0
        for _ in range(8):
            scale = 1.0 / _magnification(lens, scale * scale * r2,
                                         green_wl)
        return scale

    out = Image(image.width, image.height, channels=3)
    planes = []
    for c in range(3):
        plane = [[image.get(x, y)[c] for x in range(image.width)]
                 for y in range(image.height)]
        planes.append(_resample_radial(plane, source_scale))
    for y in range(image.height):
        for x in range(image.width):
            out.set(x, y, [planes[c][y][x] for c in range(3)])
    return out
