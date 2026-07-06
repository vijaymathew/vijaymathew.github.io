"""Tone operations — pipeline tier. Twin of pxp.tone."""

import numpy as np


def exposure(pixels, stops):
    """Exposure as one array multiplication.

    Identical arithmetic to the reference tier's three nested loops:
    every value, times two-to-the-stops. NumPy applies the multiply
    to the whole (H, W, C) array in one sweep.
    """
    return pixels * np.float64(2.0 ** stops)
