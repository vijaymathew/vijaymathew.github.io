"""Closing the loop — a real raw file through the book's pipeline.

Every function called here is the pipeline tier of a stage built,
explained and twin-tested in an earlier chapter; this module only
holds them in order. What is new is what is *missing*: no spectra,
no known lens, no ground truth. Chapter 10 is about developing a
photograph when every certainty the simulator granted must be
replaced by a profile, an estimate, or a choice — and about which
is which.

Requires rawpy (libraw's Python binding) to read the maker's
container; everything after `load` is the book's own code.
"""

import numpy as np
import rawpy

from ..color import XYZ_TO_LINEAR_SRGB
from ..colormatrix import matrix_from_profile
from ..tone import bake_curve, filmic_curve
from . import colormatrix, demosaic, detail, jpeg, resample, \
    tone, whitebalance


def load(path, crop=None):
    """Open a raw file and return what the chapters need: the
    mosaic as floats on the 0..1 scale (Chapter 2's linearize, with
    the maker's black and white levels standing in for ours), the
    camera's own white-balance gains (Chapter 3's competitor, read
    from metadata instead of estimated), and the profile matrix
    (Chapter 5's sidebar, made load-bearing).

    One hard requirement: the pipeline speaks RGGB. Files whose
    visible mosaic starts on a different letter are refused rather
    than silently miscolored. An optional crop (x, y, width,
    height), snapped to even coordinates, develops a region instead
    of the frame."""
    raw = rawpy.imread(path)
    letters = raw.color_desc.decode()
    top = raw.sizes.top_margin
    left = raw.sizes.left_margin
    pattern = [[letters[raw.raw_pattern[(top + y) % 2]
                        [(left + x) % 2]] for x in range(2)]
               for y in range(2)]
    if pattern != [["R", "G"], ["G", "B"]]:
        raise ValueError(f"mosaic is {pattern}, pipeline speaks "
                         "RGGB")

    mosaic = raw.raw_image_visible.astype(float)
    if crop:
        x, y, wide, tall = (value - value % 2 for value in crop)
        mosaic = mosaic[y:y + tall, x:x + wide]
    height = mosaic.shape[0] - mosaic.shape[0] % 2
    width = mosaic.shape[1] - mosaic.shape[1] % 2
    mosaic = mosaic[:height, :width]
    blacks = np.array(
        [[raw.black_level_per_channel[raw.raw_pattern[(top + y) % 2]
                                      [(left + x) % 2]]
          for x in range(2)] for y in range(2)], dtype=float)
    black = np.tile(blacks, (height // 2, width // 2))
    mosaic = (mosaic - black) / (raw.white_level - black)

    red, green, blue = raw.camera_whitebalance[:3]
    gains = (red / green, 1.0, blue / green)
    profile = [list(row) for row in raw.rgb_xyz_matrix[:3]]
    return mosaic, gains, profile


def develop(path, stops=0.0, sharpen=0.6, quality=90,
            method="ahd", out_width=None, crop=None):
    """The book, in one function: a raw file in, a JPEG out, every
    line a chapter."""
    mosaic, gains, profile = load(path, crop)          # chs. 1-2
    balanced = whitebalance.apply_gains(mosaic, gains)   # ch. 3
    image = getattr(demosaic, method)(balanced)          # ch. 4
    image = tone.reconstruct_highlights(image, gains)    # ch. 7
    xyz = colormatrix.apply_matrix(
        image, matrix_from_profile(profile))             # ch. 5
    linear = colormatrix.apply_matrix(xyz, XYZ_TO_LINEAR_SRGB)
    linear = tone.exposure(linear, stops)                # ch. 0
    display = tone.apply_lut(linear,
                             bake_curve(filmic_curve()))  # ch. 7
    if sharpen:
        display = detail.unsharp_mask(display, amount=sharpen)
    if out_width:                                        # ch. 9
        out_height = round(display.shape[0]
                           * out_width / display.shape[1])
        display = np.stack(
            [resample.resample(display[:, :, c], out_width,
                               out_height)
             for c in range(3)], axis=-1)
    return jpeg.encode(display, quality)                 # ch. 9
