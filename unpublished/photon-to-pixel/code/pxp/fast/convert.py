"""Bridging the two tiers: Image <-> NumPy array.

The pipeline tier works on arrays of shape (height, width, channels),
dtype float64 — the same numbers as an Image, in a container NumPy
can sweep over in bulk.
"""

import numpy as np

from ..image import Image


def to_array(image):
    """An Image's pixels as an (H, W, C) float64 array."""
    return np.asarray(image.pixels, dtype=np.float64)


def from_array(array):
    """An (H, W, C) array back into an Image, values copied as-is."""
    height, width, channels = array.shape
    image = Image(width, height, channels)
    image.pixels = array.tolist()
    return image
