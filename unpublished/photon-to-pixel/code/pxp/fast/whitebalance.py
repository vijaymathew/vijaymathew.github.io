"""White balance — pipeline tier. Twin of pxp.whitebalance.

Only the pixel-touching stage lives here. The estimators produce
three numbers, run once per image, and are cheap enough in plain
Python that there is nothing worth twinning.
"""

import numpy as np


def apply_gains(mosaic, gains):
    """The same multiply, phrased as a tiled gain map: one 2x2 RGGB
    cell of gains, repeated across the frame."""
    height, width = mosaic.shape
    gain_map = np.empty((height, width), dtype=np.float64)
    gain_map[0::2, 0::2] = gains[0]
    gain_map[0::2, 1::2] = gains[1]
    gain_map[1::2, 0::2] = gains[1]
    gain_map[1::2, 1::2] = gains[2]
    return mosaic * gain_map
