"""Demosaicing: turning one number per pixel back into three.

Chapter 3 pulled `interpolate_green` and `demosaic_preview` forward
as instruments; Chapter 4 owns this module. Four algorithms, in
rising order of care:

  nearest    copy the closest photosite of each color. The honest
             floor: fast, terrible, and instructive about why.
  bilinear   average the neighboring photosites of each color. The
             classic baseline every paper measures against.
  gradient   green by the edge-directed Hamilton–Adams step, red and
             blue as interpolated color *differences* riding on the
             reconstructed green.
  ahd        Adaptive Homogeneity-Directed (Hirakawa & Parks 2005):
             build one full image committed to horizontal
             interpolation and one committed to vertical, then keep,
             pixel by pixel, whichever is locally more homogeneous.

All four assume a white-balanced RGGB mosaic (Chapter 3) and return
camera RGB. Every one is measured against ground truth in the
chapter; the pipeline-tier twins live in pxp.fast.demosaic.
"""

from .image import Image
from .sensor import cfa_channel


def _at(mosaic, x, y):
    """Clamped read: the frame continues at its edge value."""
    x = min(len(mosaic[0]) - 1, max(0, x))
    y = min(len(mosaic) - 1, max(0, y))
    return mosaic[y][x]


def interpolate_green(mosaic):
    """The green plane, gradient-directed.

    At each red or blue site, green must be guessed from its four
    green neighbors. Averaging all four blurs across edges; instead,
    measure how bumpy the mosaic is horizontally and vertically —
    using the same-color neighbors two steps out as a correction
    term — and interpolate along the *smoother* direction. This
    direction decision is the sensitivity that section 3.4 exploits:
    it reads raw mosaic values across channels, so it sees channel
    imbalance as spurious bumpiness.
    """
    height, width = len(mosaic), len(mosaic[0])
    green = []
    for y in range(height):
        row = []
        for x in range(width):
            value = mosaic[y][x]
            if cfa_channel(x, y) == 1:
                row.append(value)
                continue
            left, right = _at(mosaic, x - 1, y), _at(mosaic, x + 1, y)
            up, down = _at(mosaic, x, y - 1), _at(mosaic, x, y + 1)
            left2, right2 = _at(mosaic, x - 2, y), _at(mosaic, x + 2, y)
            up2, down2 = _at(mosaic, x, y - 2), _at(mosaic, x, y + 2)
            bump_h = abs(left - right) + abs(2 * value - left2 - right2)
            bump_v = abs(up - down) + abs(2 * value - up2 - down2)
            if bump_h < bump_v:
                estimate = (left + right) / 2 \
                    + (2 * value - left2 - right2) / 4
            elif bump_v < bump_h:
                estimate = (up + down) / 2 \
                    + (2 * value - up2 - down2) / 4
            else:
                estimate = (left + right + up + down) / 4
            row.append(estimate)
        green.append(row)
    return green


def nearest(mosaic):
    """Copy each missing value from the nearest photosite of that
    color. No arithmetic at all — which is exactly what makes its
    failures so legible: every 2x2 cell of the output wears one red
    and one blue value whole, so edges land in different places in
    different channels and fringe accordingly."""
    height, width = len(mosaic), len(mosaic[0])
    out = Image(width, height, channels=3)
    for y in range(height):
        for x in range(width):
            gx = x + 1 if x % 2 == 0 else x - 1
            green = mosaic[y][x] if cfa_channel(x, y) == 1 \
                else _at(mosaic, gx, y)
            red = _at(mosaic, x - x % 2, y - y % 2)
            blue = _at(mosaic,
                       x if x % 2 == 1 else x + 1,
                       y if y % 2 == 1 else y + 1)
            out.set(x, y, [red, green, blue])
    return out


def bilinear(mosaic):
    """Average the neighboring photosites of each color — the
    baseline against which every demosaicing paper measures itself.
    Smooth regions come out perfect; edges, which are the entire
    problem, get averaged straight across."""
    height, width = len(mosaic), len(mosaic[0])
    out = Image(width, height, channels=3)
    for y in range(height):
        for x in range(width):
            value = mosaic[y][x]
            site = cfa_channel(x, y)
            if site == 1:
                green = value
            else:
                green = (_at(mosaic, x - 1, y) + _at(mosaic, x + 1, y)
                         + _at(mosaic, x, y - 1)
                         + _at(mosaic, x, y + 1)) / 4
            red = value if site == 0 \
                else _cross_average(mosaic, x, y, 0)
            blue = value if site == 2 \
                else _cross_average(mosaic, x, y, 2)
            out.set(x, y, [red, green, blue])
    return out


def _cross_average(mosaic, x, y, channel):
    """The bilinear stencil for red or blue at a pixel that isn't
    one: two same-row or same-column photosites when they exist
    (at green sites), four diagonal ones otherwise."""
    site = cfa_channel(x, y)
    # Which axis holds the wanted channel depends only on parity:
    # in an RGGB cell, red shares rows with even y, blue with odd.
    if site == 1:
        if (channel == 0) == (y % 2 == 0):
            return (_at(mosaic, x - 1, y) + _at(mosaic, x + 1, y)) / 2
        return (_at(mosaic, x, y - 1) + _at(mosaic, x, y + 1)) / 2
    return (_at(mosaic, x - 1, y - 1) + _at(mosaic, x + 1, y - 1)
            + _at(mosaic, x - 1, y + 1)
            + _at(mosaic, x + 1, y + 1)) / 4


def _rb_as_differences(mosaic, green):
    """Red and blue planes, interpolated as color differences.

    The trick that separates good demosaics from bilinear: don't
    interpolate red itself, interpolate red *minus green* — the
    difference varies far more slowly than either channel alone,
    because most edges are luminance edges that red and green cross
    together. Ride the interpolated difference on the already-
    reconstructed green plane and sharp edges survive in all three
    channels."""
    height, width = len(mosaic), len(mosaic[0])

    def diff_at(x, y):
        x = min(width - 1, max(0, x))
        y = min(height - 1, max(0, y))
        return mosaic[y][x] - green[y][x]

    planes = []
    for channel in (0, 2):
        plane = []
        for y in range(height):
            row = []
            for x in range(width):
                site = cfa_channel(x, y)
                if site == channel:
                    row.append(mosaic[y][x])
                    continue
                if site == 1:
                    if (channel == 0) == (y % 2 == 0):
                        estimate = (diff_at(x - 1, y)
                                    + diff_at(x + 1, y)) / 2
                    else:
                        estimate = (diff_at(x, y - 1)
                                    + diff_at(x, y + 1)) / 2
                else:
                    estimate = (diff_at(x - 1, y - 1)
                                + diff_at(x + 1, y - 1)
                                + diff_at(x - 1, y + 1)
                                + diff_at(x + 1, y + 1)) / 4
                row.append(green[y][x] + estimate)
            plane.append(row)
        planes.append(plane)
    return planes


def gradient(mosaic):
    """The Chapter 3 preview, finished: Hamilton–Adams green, then
    red and blue as color differences riding on it."""
    height, width = len(mosaic), len(mosaic[0])
    green = interpolate_green(mosaic)
    red, blue = _rb_as_differences(mosaic, green)
    out = Image(width, height, channels=3)
    for y in range(height):
        for x in range(width):
            out.set(x, y, [red[y][x], green[y][x], blue[y][x]])
    return out


def _directional_green(mosaic, horizontal):
    """Green interpolated with *no* direction decision: every pixel
    committed to one axis, Laplacian correction included. AHD builds
    one image this way for each axis and chooses between them
    afterwards, which is the whole idea — defer the decision until
    both answers exist and can be judged."""
    height, width = len(mosaic), len(mosaic[0])
    green = []
    for y in range(height):
        row = []
        for x in range(width):
            value = mosaic[y][x]
            if cfa_channel(x, y) == 1:
                row.append(value)
                continue
            if horizontal:
                near = (_at(mosaic, x - 1, y), _at(mosaic, x + 1, y))
                far = (_at(mosaic, x - 2, y), _at(mosaic, x + 2, y))
            else:
                near = (_at(mosaic, x, y - 1), _at(mosaic, x, y + 1))
                far = (_at(mosaic, x, y - 2), _at(mosaic, x, y + 2))
            row.append((near[0] + near[1]) / 2
                       + (2 * value - far[0] - far[1]) / 4)
        green.append(row)
    return green


def ahd(mosaic):
    """Adaptive Homogeneity-Directed demosaicing, from scratch.

    Hirakawa & Parks (2005): interpolate the whole image twice —
    once committed to horizontal, once to vertical — and at every
    pixel keep the candidate whose neighborhood is more
    *homogeneous*: more neighbors within an adaptive luminance and
    chrominance tolerance. Direction mistakes show up as local
    color/brightness churn, so homogeneity is a proxy for "which
    guess was right" that needs no ground truth.

    One disclosed deviation: the paper measures homogeneity in
    CIELAB, but our pipeline has no colorimetric transform until
    Chapter 5, so luminance and chrominance are proxied as
    (R + 2G + B)/4 and the (R-G, B-G) difference pair. The mechanism
    is unchanged. The paper's optional median-filter cleanup pass is
    discussed, not implemented.
    """
    height, width = len(mosaic), len(mosaic[0])
    candidates = []                     # [(red, green, blue), ...]
    lum, chrom_a, chrom_b = [], [], []
    for horizontal in (True, False):
        green = _directional_green(mosaic, horizontal)
        red, blue = _rb_as_differences(mosaic, green)
        candidates.append((red, green, blue))
        lum.append([[(red[y][x] + 2 * green[y][x] + blue[y][x]) / 4
                     for x in range(width)] for y in range(height)])
        chrom_a.append([[red[y][x] - green[y][x]
                         for x in range(width)] for y in range(height)])
        chrom_b.append([[blue[y][x] - green[y][x]
                         for x in range(width)] for y in range(height)])

    def clamped(plane, x, y):
        return plane[min(height - 1, max(0, y))][min(width - 1, max(0, x))]

    # left, right, up, down — the order matters to the epsilons below
    directions = ((-1, 0), (1, 0), (0, -1), (0, 1))
    homogeneity = [[[0] * width for _ in range(height)],
                   [[0] * width for _ in range(height)]]
    for y in range(height):
        for x in range(width):
            lum_diff = [[], []]
            chrom_diff = [[], []]
            for cand in (0, 1):
                for dx, dy in directions:
                    lum_diff[cand].append(
                        abs(lum[cand][y][x]
                            - clamped(lum[cand], x + dx, y + dy)))
                    da = chrom_a[cand][y][x] \
                        - clamped(chrom_a[cand], x + dx, y + dy)
                    db = chrom_b[cand][y][x] \
                        - clamped(chrom_b[cand], x + dx, y + dy)
                    chrom_diff[cand].append(da * da + db * db)
            # adaptive tolerances: as tight as the *easy* axis of
            # each candidate — horizontal differences for the H
            # image, vertical for the V — so flat regions demand
            # near-agreement and busy regions get slack
            eps_lum = min(max(lum_diff[0][0], lum_diff[0][1]),
                          max(lum_diff[1][2], lum_diff[1][3]))
            eps_chrom = min(max(chrom_diff[0][0], chrom_diff[0][1]),
                            max(chrom_diff[1][2], chrom_diff[1][3]))
            for cand in (0, 1):
                score = 0
                for k in range(4):
                    if (lum_diff[cand][k] <= eps_lum
                            and chrom_diff[cand][k] <= eps_chrom):
                        score += 1
                homogeneity[cand][y][x] = score

    out = Image(width, height, channels=3)
    for y in range(height):
        for x in range(width):
            votes = [0, 0]
            for cand in (0, 1):        # 3x3 smoothing of the maps
                for dy in (-1, 0, 1):
                    for dx in (-1, 0, 1):
                        votes[cand] += clamped(homogeneity[cand],
                                               x + dx, y + dy)
            if votes[0] > votes[1]:
                chosen = [candidates[0][c][y][x] for c in range(3)]
            elif votes[1] > votes[0]:
                chosen = [candidates[1][c][y][x] for c in range(3)]
            else:
                chosen = [(candidates[0][c][y][x]
                           + candidates[1][c][y][x]) / 2
                          for c in range(3)]
            out.set(x, y, chosen)
    return out


def demosaic_preview(mosaic):
    """Full color, minimally: gradient-directed green, neighbor-
    averaged red and blue. Returns an Image in camera RGB."""
    height, width = len(mosaic), len(mosaic[0])
    green = interpolate_green(mosaic)
    out = Image(width, height, channels=3)
    for y in range(height):
        for x in range(width):
            pixel = [0.0, green[y][x], 0.0]
            for channel in (0, 2):
                if cfa_channel(x, y) == channel:
                    pixel[channel] = mosaic[y][x]
                    continue
                total, count = 0.0, 0
                for dy in (-1, 0, 1):
                    for dx in (-1, 0, 1):
                        nx, ny = x + dx, y + dy
                        if ((dx or dy) and 0 <= nx < width
                                and 0 <= ny < height
                                and cfa_channel(nx, ny) == channel):
                            total += mosaic[ny][nx]
                            count += 1
                pixel[channel] = total / count
            out.set(x, y, pixel)
    return out
