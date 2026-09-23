"""The two-tier contract: reference and pipeline implementations agree.

Every pipeline stage in the book exists twice — plain loops in pxp,
vectorized in pxp.fast. These tests assert the two tiers produce
identical output on the same input. Not close: identical.
"""

import os
import sys
import unittest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from pxp import Image
import pxp.tone

try:
    import pxp.fast
    HAVE_NUMPY = True
except ImportError:
    HAVE_NUMPY = False


def checker_image(width=17, height=13):
    """A small image with varied, awkward values in every channel."""
    img = Image(width, height)
    for y in range(height):
        for x in range(width):
            img.set(x, y, [
                (x * 31 + y * 7) % 256 / 255.0,
                (x * 13 + y * 29) % 256 / 255.0,
                (x * 3 + y * 111) % 256 / 255.0,
            ])
    return img


@unittest.skipUnless(HAVE_NUMPY, "pipeline tier requires NumPy")
class TestTwoTierExposure(unittest.TestCase):
    def test_exposure_tiers_identical(self):
        img = checker_image()
        for stops in (-2.0, -0.5, 0.0, 1.0, 1.7):
            reference = pxp.tone.exposure(img, stops)
            pipeline = pxp.fast.from_array(
                pxp.fast.exposure(pxp.fast.to_array(img), stops))
            self.assertEqual(reference.pixels, pipeline.pixels,
                             f"tiers diverge at stops={stops}")


if __name__ == "__main__":
    unittest.main()
