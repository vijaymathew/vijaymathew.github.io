"""Tone operations — reference tier.

Chapter 0 put `exposure` here to demonstrate the two-tier contract;
Chapter 7 fills in the rest. The pipeline arrives with linear values
proportional to photon counts; everything in this module is about
spending a display's bounded brightness on them — globally with
curves, locally with a base/detail split, and at the top end by
reconstructing what clipping destroyed.

Curves are baked into lookup tables before use, because that is how
every camera and raw processor ships them, and because a table plus
linear interpolation is the same arithmetic in both tiers.
"""

import math

from .image import Image

# how much each linear-sRGB channel contributes to luminance —
# the Y row of the sRGB matrix from Chapter 5, rounded as published
LUMINANCE_WEIGHTS = (0.2126, 0.7152, 0.0722)


def luminance(pixel):
    return (pixel[0] * LUMINANCE_WEIGHTS[0]
            + pixel[1] * LUMINANCE_WEIGHTS[1]
            + pixel[2] * LUMINANCE_WEIGHTS[2])


def exposure(image, stops):
    """Brighten or darken an image by whole photographic stops.

    One stop is a doubling: +1 doubles every channel value, -1
    halves it. In linear light that is the entire story — exposure
    is a single multiplication applied uniformly to every value.
    """
    gain = 2.0 ** stops
    out = Image(image.width, image.height, image.channels)
    for y in range(image.height):
        for x in range(image.width):
            pixel = image.get(x, y)
            out.set(x, y, [value * gain for value in pixel])
    return out


def bake_curve(curve, size=4096):
    """A tone curve, tabulated: 4096 samples over [0, 1].

    Real pipelines do exactly this — curves are designed in floating
    point and shipped as tables — and the book follows suit for its
    own reason too: reading a table with linear interpolation is the
    same arithmetic in both code tiers, where a formula full of logs
    and powers is not guaranteed to round identically."""
    return [curve(i / (size - 1)) for i in range(size)]


def _look_up(table, value):
    position = min(1.0, max(0.0, value)) * (len(table) - 1)
    index = min(int(position), len(table) - 2)
    fraction = position - index
    return (table[index] * (1 - fraction)
            + table[index + 1] * fraction)


def apply_lut(image, table):
    """The stage itself: every channel of every pixel through the
    table. Input linear, output display-referred — after this, the
    numbers mean 'brightness on screen,' not 'photons.'"""
    out = Image(image.width, image.height, channels=3)
    for y in range(image.height):
        for x in range(image.width):
            out.set(x, y, [_look_up(table, value)
                           for value in image.get(x, y)])
    return out


def apply_lut_luminance(image, table):
    """The same curve, applied to luminance only: each pixel keeps
    its channel ratios and takes its new brightness from the curved
    luminance. Color holds; punch is lost — section 7.2 shows the
    trade both ways."""
    out = Image(image.width, image.height, channels=3)
    for y in range(image.height):
        for x in range(image.width):
            pixel = image.get(x, y)
            bright = luminance(pixel)
            if bright <= 0.0:
                out.set(x, y, [0.0, 0.0, 0.0])
                continue
            scale = _look_up(table, bright) / bright
            out.set(x, y, [value * scale for value in pixel])
    return out


def display_curve():
    """The neutral rendering: the sRGB transfer function and nothing
    else. Correct, and famously flat-looking — the baseline every
    other curve is judged against."""
    from .color import srgb_encode
    return lambda value: srgb_encode(min(1.0, max(0.0, value)))


def filmic_curve(contrast=2.0, black_stops=8.0):
    """An S-curve on the axis film actually responded to: stops.

    Position each value by how many stops it sits above a chosen
    black floor, then bend that axis with a toe (shadows compressed
    smoothly to black), a straight-ish middle whose slope is the
    contrast, and a shoulder (highlights rolled off, never slammed).
    Middle gray (18%) is pinned to the brightness the plain sRGB
    curve gives it, so the look changes and the exposure does not.
    The shoulder needs contrast > 1.75 to roll off smoothly; the toe
    is forgiving."""
    pivot_t = (math.log2(0.18) + black_stops) / black_stops
    pivot_y = display_curve()(0.18)
    toe_power = contrast * pivot_t / pivot_y
    shoulder_power = contrast * (1 - pivot_t) / (1 - pivot_y)

    def curve(value):
        if value <= 2.0 ** -black_stops:
            return 0.0
        t = min(1.0, (math.log2(value) + black_stops) / black_stops)
        if t <= pivot_t:
            return pivot_y * (t / pivot_t) ** toe_power
        return 1.0 - (1.0 - pivot_y) * (
            (1.0 - t) / (1.0 - pivot_t)) ** shoulder_power

    return curve


def reconstruct_highlights(image, clip_levels, margin=0.97):
    """Rebuild clipped channels from unclipped neighbors-in-color.

    After white balance the channels clip at different levels — the
    gains saw to that — so a highlight often loses one channel while
    the others still carry structure. Where that happens, assume the
    highlight is neutral (post white balance, a defensible default)
    and give the clipped channel the mean of the survivors. Where
    all three channels are gone, no structure survives — but the
    color is known to be a lie (it is the white-balance gains
    themselves, the magenta of every blown highlight), so the pixel
    is at least forced neutral at its brightest channel. This is the
    simplest member of a family of guesses; commercial tools ship
    smarter, proprietary ones, and every member is a guess."""
    thresholds = [level * margin for level in clip_levels]
    out = Image(image.width, image.height, channels=3)
    for y in range(image.height):
        for x in range(image.width):
            pixel = list(image.get(x, y))
            clipped = [c for c in range(3)
                       if pixel[c] >= thresholds[c]]
            if 0 < len(clipped) < 3:
                survivors = [pixel[c] for c in range(3)
                             if c not in clipped]
                total = 0.0
                for value in survivors:
                    total += value
                estimate = total / len(survivors)
                for c in clipped:
                    if estimate > pixel[c]:
                        pixel[c] = estimate
            elif len(clipped) == 3:
                top = max(pixel)
                pixel = [top, top, top]
            out.set(x, y, pixel)
    return out


def bilateral(plane, radius=4, range_sigma=0.15):
    """The edge-preserving average: each pixel becomes a weighted
    mean of its neighborhood, where a neighbor's weight falls with
    spatial distance (a Gaussian) and with *difference in value* (a
    rational falloff). Similar neighbors count; neighbors across an
    edge barely do — so smooth regions smooth further and edges
    survive. The rational range kernel is a disclosed swap for the
    usual Gaussian: same shape where it matters, and made of
    arithmetic that rounds identically in both code tiers."""
    height, width = len(plane), len(plane[0])
    spatial = {}
    for dy in range(-radius, radius + 1):
        for dx in range(-radius, radius + 1):
            spatial[(dx, dy)] = math.exp(
                -(dx * dx + dy * dy) / (2.0 * (radius / 2.0) ** 2))
    out = []
    for y in range(height):
        row = []
        for x in range(width):
            center = plane[y][x]
            total, norm = 0.0, 0.0
            for dy in range(-radius, radius + 1):
                for dx in range(-radius, radius + 1):
                    nx = min(width - 1, max(0, x + dx))
                    ny = min(height - 1, max(0, y + dy))
                    value = plane[ny][nx]
                    closeness = (value - center) / range_sigma
                    weight = spatial[(dx, dy)] \
                        / (1.0 + closeness * closeness)
                    total += weight * value
                    norm += weight
            row.append(total / norm)
        out.append(row)
    return out


def local_contrast(image, table, base_gain=1.0, detail_gain=1.0,
                   radius=4, range_sigma=0.15):
    """Tone mapping's local move: split brightness into a smooth
    base and the detail riding on it, then treat them differently.

    base_gain < 1 compresses the lighting (the Durand-Dorsey move:
    shrink the range, keep the texture); detail_gain > 1 is the
    slider marked 'clarity' (keep the lighting, push the texture).
    The split runs on display-referred luminance — a disclosed
    simplification; the original operates on log luminance, and at
    these strengths the two agree closely."""
    encoded = apply_lut(image, table)
    bright = [[luminance(encoded.get(x, y))
               for x in range(image.width)]
              for y in range(image.height)]
    base = bilateral(bright, radius=radius, range_sigma=range_sigma)
    pivot_total = 0.0
    for row in base:
        for value in row:
            pivot_total += value
    pivot = pivot_total / (image.width * image.height)
    out = Image(image.width, image.height, channels=3)
    for y in range(image.height):
        for x in range(image.width):
            old = bright[y][x]
            if old <= 0.0:
                out.set(x, y, [0.0, 0.0, 0.0])
                continue
            detail = old - base[y][x]
            new = (pivot + (base[y][x] - pivot) * base_gain
                   + detail * detail_gain)
            scale = new / old
            out.set(x, y, [value * scale
                           for value in encoded.get(x, y)])
    return out
