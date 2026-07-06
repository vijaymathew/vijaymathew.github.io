"""Tone operations — reference tier.

Part 7 fills this module out. For now it holds the book's very first
pipeline operation, used in Part 0 to demonstrate the two-tier code
contract.
"""

from .image import Image


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
