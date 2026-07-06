"""Tone operations — pipeline tier. Twin of pxp.tone.

The LUT trick pays off here: curves baked to tables in the reference
tier apply as a gather-and-lerp in this one, identical to the bit.
The bilateral runs its offset loop at Python level with whole-array
arithmetic inside, in the reference tier's exact order.
"""

import math

import numpy as np

from ..tone import LUMINANCE_WEIGHTS


def exposure(pixels, stops):
    """Exposure as one array multiplication.

    Identical arithmetic to the reference tier's three nested loops:
    every value, times two-to-the-stops. NumPy applies the multiply
    to the whole (H, W, C) array in one sweep.
    """
    return pixels * np.float64(2.0 ** stops)


def _luminance(pixels):
    return (pixels[:, :, 0] * LUMINANCE_WEIGHTS[0]
            + pixels[:, :, 1] * LUMINANCE_WEIGHTS[1]
            + pixels[:, :, 2] * LUMINANCE_WEIGHTS[2])


def _look_up(table, values):
    position = np.clip(values, 0.0, 1.0) * (len(table) - 1)
    index = np.minimum(position.astype(np.int64), len(table) - 2)
    fraction = position - index
    return (table[index] * (1 - fraction)
            + table[index + 1] * fraction)


def apply_lut(pixels, table):
    return _look_up(np.asarray(table), pixels)


def apply_lut_luminance(pixels, table):
    bright = _luminance(pixels)
    positive = bright > 0.0
    safe = np.where(positive, bright, 1.0)
    scale = np.where(positive,
                     _look_up(np.asarray(table), bright) / safe, 0.0)
    return pixels * scale[:, :, None]


def reconstruct_highlights(pixels, clip_levels, margin=0.97):
    clipped = [pixels[:, :, c] >= clip_levels[c] * margin
               for c in range(3)]
    count = (clipped[0].astype(np.int64) + clipped[1]
             + clipped[2])
    active = (count > 0) & (count < 3)
    total = np.zeros(pixels.shape[:2])
    for c in range(3):                     # channel order, like the
        total = total + np.where(clipped[c], 0.0,
                                 pixels[:, :, c])   # reference loop
    survivors = 3 - count
    estimate = total / np.where(survivors > 0, survivors, 1)
    all_gone = count == 3
    top = np.maximum(np.maximum(pixels[:, :, 0], pixels[:, :, 1]),
                     pixels[:, :, 2])
    channels = []
    for c in range(3):
        raise_it = active & clipped[c] & (estimate > pixels[:, :, c])
        channel = np.where(raise_it, estimate, pixels[:, :, c])
        channels.append(np.where(all_gone, top, channel))
    return np.stack(channels, axis=-1)


def bilateral(plane, radius=4, range_sigma=0.15):
    height, width = plane.shape
    yy, xx = np.mgrid[0:height, 0:width]
    total = np.zeros_like(plane)
    norm = np.zeros_like(plane)
    for dy in range(-radius, radius + 1):
        for dx in range(-radius, radius + 1):
            spatial = math.exp(
                -(dx * dx + dy * dy) / (2.0 * (radius / 2.0) ** 2))
            value = plane[np.clip(yy + dy, 0, height - 1),
                          np.clip(xx + dx, 0, width - 1)]
            closeness = (value - plane) / range_sigma
            weight = spatial / (1.0 + closeness * closeness)
            total = total + weight * value
            norm = norm + weight
    return total / norm


def local_contrast(pixels, table, base_gain=1.0, detail_gain=1.0,
                   radius=4, range_sigma=0.15):
    encoded = apply_lut(pixels, table)
    bright = _luminance(encoded)
    base = bilateral(bright, radius=radius, range_sigma=range_sigma)
    pivot = 0.0
    for value in base.ravel():             # sequential, like the
        pivot += value                     # reference — np.sum pairs
    pivot /= base.size
    detail = bright - base
    new = pivot + (base - pivot) * base_gain + detail * detail_gain
    positive = bright > 0.0
    scale = np.where(positive, new / np.where(positive, bright, 1.0),
                     0.0)
    return encoded * scale[:, :, None]
