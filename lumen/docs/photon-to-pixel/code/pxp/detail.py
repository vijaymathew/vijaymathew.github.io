"""Detail and noise: the two jobs that pull against each other.

Sharpening amplifies local differences; noise *is* local difference.
Every operation in this module lives with that tension, and the
chapter measures where each one falls. All of them work on single
planes — callers decide whether that plane is a channel or a
luminance, and the chapter discusses when each is right.
"""

import math

from .image import Image


def _at(plane, x, y):
    x = min(len(plane[0]) - 1, max(0, x))
    y = min(len(plane) - 1, max(0, y))
    return plane[y][x]


def gaussian_kernel(radius, sigma):
    """The classic bell, tabulated over a (2r+1)^2 window and
    normalized to sum to one — so filtering a flat region returns it
    unchanged, to the last bit."""
    weights = {}
    total = 0.0
    for dy in range(-radius, radius + 1):
        for dx in range(-radius, radius + 1):
            weight = math.exp(-(dx * dx + dy * dy)
                              / (2.0 * sigma * sigma))
            weights[(dx, dy)] = weight
            total += weight
    return {offset: weight / total
            for offset, weight in weights.items()}


def gaussian_blur(plane, radius=2, sigma=1.2):
    """Weighted average under the bell: the plain blur. As a
    denoiser it treats edges and noise identically, which is exactly
    its problem."""
    height, width = len(plane), len(plane[0])
    kernel = gaussian_kernel(radius, sigma)
    out = []
    for y in range(height):
        row = []
        for x in range(width):
            total = 0.0
            for dy in range(-radius, radius + 1):
                for dx in range(-radius, radius + 1):
                    total += kernel[(dx, dy)] \
                        * _at(plane, x + dx, y + dy)
            row.append(total)
        out.append(row)
    return out


def median_filter(plane, radius=1):
    """Each pixel replaced by its neighborhood's middle value.

    No averaging at all — the output is always a value that actually
    occurred nearby — which is why the median annihilates salt-and-
    pepper outliers that would smear through any weighted mean, and
    why it keeps a clean step edge bit-exact: the middle value on
    either side of the edge is the side's own value."""
    height, width = len(plane), len(plane[0])
    out = []
    for y in range(height):
        row = []
        for x in range(width):
            neighborhood = []
            for dy in range(-radius, radius + 1):
                for dx in range(-radius, radius + 1):
                    neighborhood.append(_at(plane, x + dx, y + dy))
            neighborhood.sort()
            row.append(neighborhood[len(neighborhood) // 2])
        out.append(row)
    return out


def _luminance_planes(image):
    from .tone import luminance
    bright = [[luminance(image.get(x, y))
               for x in range(image.width)]
              for y in range(image.height)]
    return bright


def _rescale_luminance(image, old, new):
    out = Image(image.width, image.height, channels=3)
    for y in range(image.height):
        for x in range(image.width):
            if old[y][x] <= 0.0:
                out.set(x, y, [0.0, 0.0, 0.0])
                continue
            scale = new[y][x] / old[y][x]
            out.set(x, y, [value * scale
                           for value in image.get(x, y)])
    return out


def unsharp_mask(image, amount=0.8, radius=2, sigma=1.2):
    """The oldest sharpener, from the darkroom via 1930s
    lithography: subtract a blurred copy to isolate the detail, then
    add the detail back in, scaled. Nothing about resolution
    changes; edges gain overshoot, the eye reads the overshoot as
    crispness, and past a sane amount the overshoot reads as a halo.
    Applied to luminance, so color stays put while edges bite."""
    bright = _luminance_planes(image)
    blurred = gaussian_blur(bright, radius, sigma)
    sharpened = [[bright[y][x] + amount * (bright[y][x]
                                           - blurred[y][x])
                  for x in range(image.width)]
                 for y in range(image.height)]
    return _rescale_luminance(image, bright, sharpened)


def richardson_lucy(plane, radius=2, sigma=1.2, iterations=10):
    """Deconvolution: undo a blur you can name.

    Unsharp masking fakes sharpness; Richardson-Lucy pursues the
    real thing. Given the point-spread function that blurred the
    image, iteratively find the plane that, blurred by that PSF,
    best explains what was observed — each pass blurs the current
    estimate, compares against the observation, and corrects. The
    catch is the noise: it was not produced by the PSF, but every
    iteration explains it harder anyway, so the iteration count is a
    sharpness/noise dial with no free setting."""
    height, width = len(plane), len(plane[0])
    floor = 1e-6
    estimate = [row[:] for row in plane]
    for _ in range(iterations):
        blurred = gaussian_blur(estimate, radius, sigma)
        ratio = [[plane[y][x] / max(blurred[y][x], floor)
                  for x in range(width)] for y in range(height)]
        correction = gaussian_blur(ratio, radius, sigma)
        estimate = [[estimate[y][x] * correction[y][x]
                     for x in range(width)] for y in range(height)]
    return estimate


def nlm(plane, patch_radius=1, search_radius=5, strength=0.1):
    """Non-Local Means (Buades, Coll & Morel 2005), from scratch.

    The bilateral asked 'does this neighbor's value resemble mine?'.
    NLM asks the deeper question: 'does this neighbor's whole
    *neighborhood* resemble mine?' — comparing patches, not pixels,
    so a noisy sample still finds its true peers by the texture it
    sits in. Every pixel in the search window votes, weighted by how
    alike the patches are; on repetitive structure (and images are
    full of it) many far-flung witnesses agree, and the average of
    many witnesses is Chapter 2's square-root law working for us.
    The patch-difference weighting uses a rational falloff rather
    than the paper's exponential — disclosed, as with the bilateral,
    for exact agreement between the code tiers."""
    height, width = len(plane), len(plane[0])
    patch = range(-patch_radius, patch_radius + 1)
    out = []
    for y in range(height):
        row = []
        for x in range(width):
            total, norm = 0.0, 0.0
            for dy in range(-search_radius, search_radius + 1):
                for dx in range(-search_radius, search_radius + 1):
                    distance = 0.0
                    for py in patch:
                        for px in patch:
                            gap = (_at(plane, x + px, y + py)
                                   - _at(plane, x + dx + px,
                                         y + dy + py))
                            distance += gap * gap
                    similarity = distance / (strength * strength)
                    weight = 1.0 / (1.0 + similarity)
                    total += weight * _at(plane, x + dx, y + dy)
                    norm += weight
            row.append(total / norm)
        out.append(row)
    return out


def per_channel(image, filter_fn):
    """Run a plane filter on each channel of an image."""
    planes = []
    for c in range(3):
        plane = [[image.get(x, y)[c] for x in range(image.width)]
                 for y in range(image.height)]
        planes.append(filter_fn(plane))
    out = Image(image.width, image.height, channels=3)
    for y in range(image.height):
        for x in range(image.width):
            out.set(x, y, [planes[c][y][x] for c in range(3)])
    return out
