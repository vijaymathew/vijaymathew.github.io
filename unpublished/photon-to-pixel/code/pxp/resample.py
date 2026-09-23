"""Resampling: changing how many pixels an image has.

Between the samples there is no image — only a claim about what the
samples imply. Every resampling kernel is one such claim: nearest
says "nothing changes until the next sample", the tent says "values
ramp linearly", Lanczos says "the image contains no frequencies the
samples could not represent". The chapter measures what each claim
costs. All functions work on single planes; callers decide what a
plane is.
"""

import math


def tent(x):
    """Bilinear's kernel: a straight ramp down over one pixel.
    Interpolates without overshoot, and blurs without apology."""
    x = abs(x)
    return 1.0 - x if x < 1.0 else 0.0


def catmull_rom(x):
    """Bicubic's kernel (the Catmull-Rom member of the cubic
    family, a = -0.5): two pixels wide, with a negative lobe — the
    first kernel here that can overshoot, which is both its added
    crispness and its ringing."""
    x = abs(x)
    if x < 1.0:
        return (1.5 * x - 2.5) * x * x + 1.0
    if x < 2.0:
        return ((-0.5 * x + 2.5) * x - 4.0) * x + 2.0
    return 0.0


def lanczos(x, lobes=3):
    """The windowed sinc: the ideal reconstruction filter of
    sampling theory, cut off after three lobes so it fits in a
    program. The strongest negative lobes of the family — the most
    detail preserved, the most ringing risked."""
    x = abs(x)
    if x >= lobes:
        return 0.0
    if x == 0.0:
        return 1.0
    px = math.pi * x
    return lobes * math.sin(px) * math.sin(px / lobes) / (px * px)


KERNELS = {
    "bilinear": (tent, 1),
    "bicubic": (catmull_rom, 2),
    "lanczos": (lanczos, 3),
}


def axis_weights(src, dst, kernel, support):
    """Tap start and normalized weights for every output position
    along one axis.

    The one subtlety of resampling lives here: when shrinking, the
    kernel is stretched by the shrink factor, so each output pixel
    drinks from the whole span of source pixels it replaces. Skip
    that and every kernel aliases like nearest. The pipeline tier
    imports this function as-is — the weights are the algorithm."""
    scale = src / dst
    stretch = max(1.0, scale)
    taps = int(math.ceil(support * stretch)) * 2
    table = []
    for o in range(dst):
        center = (o + 0.5) * scale - 0.5
        start = int(math.floor(center)) - taps // 2 + 1
        weights = [kernel((center - (start + k)) / stretch)
                   for k in range(taps)]
        total = 0.0
        for weight in weights:
            total += weight
        table.append((start, [weight / total for weight in weights]))
    return table


def resample(plane, width, height, method="lanczos"):
    """Resize a plane to width x height: a horizontal pass, then a
    vertical pass, because every kernel here is separable and one
    axis at a time is both cheaper and easier to believe."""
    src_h, src_w = len(plane), len(plane[0])
    if method == "nearest":
        out = []
        for y in range(height):
            sy = min(src_h - 1, int((y + 0.5) * src_h / height))
            row = []
            for x in range(width):
                sx = min(src_w - 1, int((x + 0.5) * src_w / width))
                row.append(plane[sy][sx])
            out.append(row)
        return out

    kernel, support = KERNELS[method]
    across = axis_weights(src_w, width, kernel, support)
    mid = []
    for y in range(src_h):
        row = []
        for x in range(width):
            start, weights = across[x]
            total = 0.0
            for k, weight in enumerate(weights):
                i = min(src_w - 1, max(0, start + k))
                total += weight * plane[y][i]
            row.append(total)
        mid.append(row)

    down = axis_weights(src_h, height, kernel, support)
    out = []
    for y in range(height):
        start, weights = down[y]
        row = []
        for x in range(width):
            total = 0.0
            for k, weight in enumerate(weights):
                i = min(src_h - 1, max(0, start + k))
                total += weight * mid[i][x]
            row.append(total)
        out.append(row)
    return out
