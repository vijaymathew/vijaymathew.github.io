"""Raw preprocessing — pipeline tier. Twin of pxp.rawproc."""

import numpy as np


def linearize(raw):
    """Black subtraction and scaling as one array expression.
    Same arithmetic as the reference tier; negatives kept."""
    values = np.asarray(raw.values, dtype=np.float64)
    return (values - raw.black_level) / (raw.white_level - raw.black_level)


def fix_defects(mosaic, defects):
    """Same triage as the reference tier: mean of same-filter
    neighbors two steps away. The loop runs over the (few) defects,
    not the (many) pixels, so plain iteration is already fast."""
    height, width = mosaic.shape
    fixed = mosaic.copy()
    for x, y in defects:
        neighbors = []
        for dx, dy in ((-2, 0), (2, 0), (0, -2), (0, 2)):
            nx, ny = x + dx, y + dy
            if (0 <= nx < width and 0 <= ny < height
                    and (nx, ny) not in defects):
                neighbors.append(mosaic[ny, nx])
        if neighbors:
            total = 0.0
            for value in neighbors:
                total += value
            fixed[y, x] = total / len(neighbors)
    return fixed
