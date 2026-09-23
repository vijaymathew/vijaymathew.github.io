"""Demosaicing — pipeline tier. Twins of pxp.demosaic.

The same stencils, phrased as shifted array views over an edge-
padded mosaic. Order of every addition mirrors the reference tier
exactly — the equality tests hold all four algorithms bit-identical,
and AHD is the reason the fast tier exists at all: at 24 megapixels
the reference implementation is a coffee break per candidate image.
"""

import numpy as np


def _sites(height, width):
    yy, xx = np.mgrid[0:height, 0:width]
    return np.where(yy % 2 == 0,
                    np.where(xx % 2 == 0, 0, 1),
                    np.where(xx % 2 == 0, 1, 2))


def _shifter(plane, reach):
    padded = np.pad(plane, reach, mode="edge")
    height, width = plane.shape

    def shift(dx, dy):
        return padded[reach + dy:reach + dy + height,
                      reach + dx:reach + dx + width]
    return shift


def nearest(mosaic):
    height, width = mosaic.shape
    site = _sites(height, width)
    yy, xx = np.mgrid[0:height, 0:width]
    gx = np.where(xx % 2 == 0, np.minimum(xx + 1, width - 1),
                  xx - 1)
    green = np.where(site == 1, mosaic, mosaic[yy, gx])
    red = mosaic[yy - yy % 2, xx - xx % 2]
    bx = np.where(xx % 2 == 1, xx, np.minimum(xx + 1, width - 1))
    by = np.where(yy % 2 == 1, yy, np.minimum(yy + 1, height - 1))
    blue = mosaic[by, bx]
    return np.stack([red, green, blue], axis=-1)


def _cross_average(mosaic, channel, site, parity_rows):
    """Red/blue bilinear stencil: axis pair at green sites, four
    diagonals at the opposite site."""
    s = _shifter(mosaic, 1)
    row_pair = (s(-1, 0) + s(1, 0)) / 2
    col_pair = (s(0, -1) + s(0, 1)) / 2
    diag = (s(-1, -1) + s(1, -1) + s(-1, 1) + s(1, 1)) / 4
    yy = np.arange(mosaic.shape[0])[:, None]
    axis = np.where((yy % 2 == 0) == parity_rows, row_pair, col_pair)
    out = np.where(site == 1, axis, diag)
    return np.where(site == channel, mosaic, out)


def bilinear(mosaic):
    height, width = mosaic.shape
    site = _sites(height, width)
    s = _shifter(mosaic, 1)
    green = np.where(site == 1, mosaic,
                     (s(-1, 0) + s(1, 0) + s(0, -1) + s(0, 1)) / 4)
    red = _cross_average(mosaic, 0, site, True)
    blue = _cross_average(mosaic, 2, site, False)
    return np.stack([red, green, blue], axis=-1)


def interpolate_green(mosaic):
    height, width = mosaic.shape
    site = _sites(height, width)
    s = _shifter(mosaic, 2)
    left, right = s(-1, 0), s(1, 0)
    up, down = s(0, -1), s(0, 1)
    left2, right2 = s(-2, 0), s(2, 0)
    up2, down2 = s(0, -2), s(0, 2)
    bump_h = np.abs(left - right) + np.abs(2 * mosaic - left2 - right2)
    bump_v = np.abs(up - down) + np.abs(2 * mosaic - up2 - down2)
    est_h = (left + right) / 2 + (2 * mosaic - left2 - right2) / 4
    est_v = (up + down) / 2 + (2 * mosaic - up2 - down2) / 4
    est_flat = (left + right + up + down) / 4
    estimate = np.where(bump_h < bump_v, est_h,
                        np.where(bump_v < bump_h, est_v, est_flat))
    return np.where(site == 1, mosaic, estimate)


def _rb_as_differences(mosaic, green, site):
    diff = mosaic - green
    s = _shifter(diff, 1)
    row_pair = (s(-1, 0) + s(1, 0)) / 2
    col_pair = (s(0, -1) + s(0, 1)) / 2
    diag = (s(-1, -1) + s(1, -1) + s(-1, 1) + s(1, 1)) / 4
    yy = np.arange(mosaic.shape[0])[:, None]
    planes = []
    for channel, parity_rows in ((0, True), (2, False)):
        axis = np.where((yy % 2 == 0) == parity_rows,
                        row_pair, col_pair)
        estimate = np.where(site == 1, axis, diag)
        planes.append(np.where(site == channel, mosaic,
                               green + estimate))
    return planes


def gradient(mosaic):
    site = _sites(*mosaic.shape)
    green = interpolate_green(mosaic)
    red, blue = _rb_as_differences(mosaic, green, site)
    return np.stack([red, green, blue], axis=-1)


def _directional_green(mosaic, site, horizontal):
    s = _shifter(mosaic, 2)
    if horizontal:
        near = (s(-1, 0), s(1, 0))
        far = (s(-2, 0), s(2, 0))
    else:
        near = (s(0, -1), s(0, 1))
        far = (s(0, -2), s(0, 2))
    estimate = (near[0] + near[1]) / 2 \
        + (2 * mosaic - far[0] - far[1]) / 4
    return np.where(site == 1, mosaic, estimate)


def ahd(mosaic):
    height, width = mosaic.shape
    site = _sites(height, width)
    candidates, lum, chrom_a, chrom_b = [], [], [], []
    for horizontal in (True, False):
        green = _directional_green(mosaic, site, horizontal)
        red, blue = _rb_as_differences(mosaic, green, site)
        candidates.append((red, green, blue))
        lum.append((red + 2 * green + blue) / 4)
        chrom_a.append(red - green)
        chrom_b.append(blue - green)

    directions = ((-1, 0), (1, 0), (0, -1), (0, 1))
    lum_diff, chrom_diff = [], []
    for cand in (0, 1):
        sl = _shifter(lum[cand], 1)
        sa = _shifter(chrom_a[cand], 1)
        sb = _shifter(chrom_b[cand], 1)
        lum_diff.append([np.abs(lum[cand] - sl(dx, dy))
                         for dx, dy in directions])
        chrom_diff.append([])
        for dx, dy in directions:
            da = chrom_a[cand] - sa(dx, dy)
            db = chrom_b[cand] - sb(dx, dy)
            chrom_diff[cand].append(da * da + db * db)

    eps_lum = np.minimum(np.maximum(lum_diff[0][0], lum_diff[0][1]),
                         np.maximum(lum_diff[1][2], lum_diff[1][3]))
    eps_chrom = np.minimum(
        np.maximum(chrom_diff[0][0], chrom_diff[0][1]),
        np.maximum(chrom_diff[1][2], chrom_diff[1][3]))

    votes = []
    for cand in (0, 1):
        score = np.zeros((height, width), dtype=np.int64)
        for k in range(4):
            score += ((lum_diff[cand][k] <= eps_lum)
                      & (chrom_diff[cand][k] <= eps_chrom))
        sv = _shifter(score, 1)
        smoothed = np.zeros((height, width), dtype=np.int64)
        for dy in (-1, 0, 1):
            for dx in (-1, 0, 1):
                smoothed += sv(dx, dy)
        votes.append(smoothed)

    channels = []
    for c in range(3):
        h_plane, v_plane = candidates[0][c], candidates[1][c]
        channels.append(np.where(
            votes[0] > votes[1], h_plane,
            np.where(votes[1] > votes[0], v_plane,
                     (h_plane + v_plane) / 2)))
    return np.stack(channels, axis=-1)
