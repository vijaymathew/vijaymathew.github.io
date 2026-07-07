"""Chapter 7's machinery holds its promises: curves are monotone and
pinned at middle gray, the baked table matches the formula it baked,
highlight repair recovers stagger and neutralizes total loss, the
bilateral smooths without crossing edges — and all five pixel stages
are tier-identical."""

import os
import random
import sys
import unittest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from pxp import tone
from pxp.color import srgb_encode
from pxp.image import Image

try:
    import numpy as np
    import pxp.fast.tone
    HAVE_NUMPY = True
except ImportError:
    HAVE_NUMPY = False


def textured_image(width=24, height=18, seed=5):
    rng = random.Random(seed)
    img = Image(width, height, channels=3)
    for y in range(height):
        for x in range(width):
            base = 0.15 + 0.6 * (x / width)
            img.set(x, y, [max(0.0, base + rng.gauss(0, 0.05) + c * 0.02)
                           for c in range(3)])
    return img


class TestCurves(unittest.TestCase):
    def test_filmic_is_monotone_and_anchored(self):
        curve = tone.filmic_curve()
        self.assertEqual(curve(0.0), 0.0)
        self.assertAlmostEqual(curve(1.0), 1.0, places=12)
        self.assertAlmostEqual(curve(0.18), srgb_encode(0.18),
                               places=12)
        samples = [curve(i / 500) for i in range(501)]
        self.assertEqual(samples, sorted(samples))

    def test_baked_table_matches_its_formula(self):
        # linear interpolation over 4096 entries costs ~1e-5 where
        # the curve bends hardest — a twentieth of one 12-bit step
        table = tone.bake_curve(tone.display_curve())
        for i in range(999):
            value = i / 998
            self.assertAlmostEqual(tone._look_up(table, value),
                                   srgb_encode(value), delta=3e-5)


class TestHighlights(unittest.TestCase):
    CLIPS = [0.857, 1.0, 1.07]      # post-WB clip levels, r g b

    def test_staggered_clipping_recovers_structure(self):
        img = Image(1, 1, channels=3)
        img.set(0, 0, [0.857, 0.95, 0.95])   # red frozen, rest rising
        fixed = tone.reconstruct_highlights(img, self.CLIPS)
        self.assertAlmostEqual(fixed.get(0, 0)[0], 0.95, places=12)

    def test_total_clipping_is_forced_neutral(self):
        img = Image(1, 1, channels=3)
        img.set(0, 0, [0.857, 1.0, 1.07])    # the magenta plateau
        fixed = tone.reconstruct_highlights(img, self.CLIPS)
        r, g, b = fixed.get(0, 0)
        self.assertEqual(r, g)
        self.assertEqual(g, b)
        self.assertAlmostEqual(r, 1.07, places=12)

    def test_unclipped_pixels_pass_untouched(self):
        img = Image(1, 1, channels=3)
        img.set(0, 0, [0.5, 0.3, 0.2])
        fixed = tone.reconstruct_highlights(img, self.CLIPS)
        self.assertEqual(fixed.get(0, 0), [0.5, 0.3, 0.2])


class TestBilateral(unittest.TestCase):
    def test_smooths_within_regions_but_keeps_the_edge(self):
        rng = random.Random(9)
        width, height = 30, 12
        plane = [[(0.2 if x < 15 else 0.8) + rng.gauss(0, 0.02)
                  for x in range(width)] for y in range(height)]
        smooth = tone.bilateral(plane, radius=3, range_sigma=0.1)

        def spread(rows, x0, x1):
            values = [rows[y][x] for y in range(height)
                      for x in range(x0, x1)]
            mean = sum(values) / len(values)
            return sum((v - mean) ** 2 for v in values) / len(values)

        self.assertLess(spread(smooth, 2, 12),
                        0.3 * spread(plane, 2, 12))
        jump_before = (sum(plane[y][18] for y in range(height))
                       - sum(plane[y][11] for y in range(height)))
        jump_after = (sum(smooth[y][18] for y in range(height))
                      - sum(smooth[y][11] for y in range(height)))
        self.assertGreater(jump_after, 0.9 * jump_before)


@unittest.skipUnless(HAVE_NUMPY, "pipeline tier requires NumPy")
class TestTwoTierTone(unittest.TestCase):
    def setUp(self):
        self.image = textured_image()
        self.pixels = np.asarray(self.image.pixels)
        self.table = tone.bake_curve(tone.filmic_curve())

    def as_lists(self, image):
        return [[image.get(x, y) for x in range(image.width)]
                for y in range(image.height)]

    def test_apply_lut_tiers_identical(self):
        reference = tone.apply_lut(self.image, self.table)
        pipeline = pxp.fast.tone.apply_lut(self.pixels, self.table)
        self.assertEqual(self.as_lists(reference), pipeline.tolist())

    def test_apply_lut_luminance_tiers_identical(self):
        reference = tone.apply_lut_luminance(self.image, self.table)
        pipeline = pxp.fast.tone.apply_lut_luminance(self.pixels,
                                                     self.table)
        self.assertEqual(self.as_lists(reference), pipeline.tolist())

    def test_reconstruct_highlights_tiers_identical(self):
        clips = [0.857, 1.0, 1.07]
        boosted = Image(self.image.width, self.image.height,
                        channels=3)
        for y in range(self.image.height):
            for x in range(self.image.width):
                boosted.set(x, y, [min(v * 2.2, clips[c]) for c, v
                                   in enumerate(self.image.get(x, y))])
        reference = tone.reconstruct_highlights(boosted, clips)
        pipeline = pxp.fast.tone.reconstruct_highlights(
            np.asarray(boosted.pixels), clips)
        self.assertEqual(self.as_lists(reference), pipeline.tolist())

    def test_bilateral_tiers_identical(self):
        plane = [[self.image.get(x, y)[1]
                  for x in range(self.image.width)]
                 for y in range(self.image.height)]
        reference = tone.bilateral(plane, radius=3)
        pipeline = pxp.fast.tone.bilateral(np.asarray(plane),
                                           radius=3)
        self.assertEqual(reference, pipeline.tolist())

    def test_local_contrast_tiers_identical(self):
        reference = tone.local_contrast(self.image, self.table,
                                        base_gain=0.6,
                                        detail_gain=1.5, radius=3)
        pipeline = pxp.fast.tone.local_contrast(self.pixels,
                                                self.table,
                                                base_gain=0.6,
                                                detail_gain=1.5,
                                                radius=3)
        self.assertEqual(self.as_lists(reference), pipeline.tolist())


if __name__ == "__main__":
    unittest.main()
