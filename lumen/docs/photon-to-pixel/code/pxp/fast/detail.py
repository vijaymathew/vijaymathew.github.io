"""Detail and noise — pipeline tier. Twins of pxp.detail.

NLM is the second reason (with AHD) that this tier exists: the
reference implementation compares a patch against every patch in an
11x11 search window for every pixel, which at 24 megapixels is not
an overnight job but close. Here the search-offset loop stays in
Python and everything inside it is whole-array arithmetic, in the
reference tier's exact accumulation order.
"""

import numpy as np

from ..detail import gaussian_kernel


def _clamped(plane, xx, yy):
    height, width = plane.shape
    return plane[np.clip(yy, 0, height - 1),
                 np.clip(xx, 0, width - 1)]


def _grids(plane):
    height, width = plane.shape
    yy, xx = np.mgrid[0:height, 0:width]
    return xx, yy


def gaussian_blur(plane, radius=2, sigma=1.2):
    kernel = gaussian_kernel(radius, sigma)
    xx, yy = _grids(plane)
    total = np.zeros_like(plane)
    for dy in range(-radius, radius + 1):
        for dx in range(-radius, radius + 1):
            total = total + kernel[(dx, dy)] \
                * _clamped(plane, xx + dx, yy + dy)
    return total


def median_filter(plane, radius=1):
    xx, yy = _grids(plane)
    stack = np.stack([_clamped(plane, xx + dx, yy + dy)
                      for dy in range(-radius, radius + 1)
                      for dx in range(-radius, radius + 1)])
    stack.sort(axis=0)
    return stack[stack.shape[0] // 2]


def unsharp_mask(pixels, amount=0.8, radius=2, sigma=1.2):
    from .tone import _luminance
    bright = _luminance(pixels)
    blurred = gaussian_blur(bright, radius, sigma)
    sharpened = bright + amount * (bright - blurred)
    positive = bright > 0.0
    scale = np.where(positive,
                     sharpened / np.where(positive, bright, 1.0),
                     0.0)
    return pixels * scale[:, :, None]


def richardson_lucy(plane, radius=2, sigma=1.2, iterations=10):
    floor = 1e-6
    estimate = plane.copy()
    for _ in range(iterations):
        blurred = gaussian_blur(estimate, radius, sigma)
        ratio = plane / np.maximum(blurred, floor)
        correction = gaussian_blur(ratio, radius, sigma)
        estimate = estimate * correction
    return estimate


def nlm(plane, patch_radius=1, search_radius=5, strength=0.1):
    xx, yy = _grids(plane)
    patch = range(-patch_radius, patch_radius + 1)
    total = np.zeros_like(plane)
    norm = np.zeros_like(plane)
    for dy in range(-search_radius, search_radius + 1):
        for dx in range(-search_radius, search_radius + 1):
            distance = np.zeros_like(plane)
            for py in patch:
                for px in patch:
                    gap = (_clamped(plane, xx + px, yy + py)
                           - _clamped(plane, xx + dx + px,
                                      yy + dy + py))
                    distance = distance + gap * gap
            similarity = distance / (strength * strength)
            weight = 1.0 / (1.0 + similarity)
            total = total + weight * _clamped(plane, xx + dx, yy + dy)
            norm = norm + weight
    return total / norm


def per_channel(pixels, filter_fn):
    return np.stack([filter_fn(pixels[:, :, c]) for c in range(3)],
                    axis=-1)
