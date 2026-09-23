"""Color matrix — pipeline tier. Twin of pxp.colormatrix.

Only the pixel-touching stage is twinned. The derivation runs once
per camera-and-light, on twelve patches; there is nothing to speed
up. Each output channel is written as the same three products and
two additions as the reference loop, so the tiers stay bit-identical.
"""

import numpy as np


def apply_matrix(pixels, matrix):
    """pixels is (H, W, 3) white-balanced camera RGB; returns XYZ."""
    r = pixels[:, :, 0]
    g = pixels[:, :, 1]
    b = pixels[:, :, 2]
    channels = [matrix[t][0] * r + matrix[t][1] * g + matrix[t][2] * b
                for t in range(3)]
    return np.stack(channels, axis=-1)
