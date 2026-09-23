"""Chapter 8's operators do what they claim: blur leaves flat fields
alone, the median annihilates impulses and keeps steps bit-exact,
deconvolution provably un-blurs a known blur, NLM beats the plain
blur on the same noise — and every operator is tier-identical."""

import math
import os
import random
import sys
import unittest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from pxp import detail

try:
    import numpy as np
    import pxp.fast.detail
    HAVE_NUMPY = True
except ImportError:
    HAVE_NUMPY = False


def noisy_step(width=40, height=24, seed=11, sigma=0.05):
    rng = random.Random(seed)
    return [[(0.25 if x < width // 2 else 0.75) + rng.gauss(0, sigma)
             for x in range(width)] for y in range(height)]


def mse_to_step(plane):
    height, width = len(plane), len(plane[0])
    total = 0.0
    for y in range(height):
        for x in range(width):
            truth = 0.25 if x < width // 2 else 0.75
            total += (plane[y][x] - truth) ** 2
    return total / (width * height)


class TestBaselines(unittest.TestCase):
    def test_blur_is_exact_on_a_flat_field(self):
        flat = [[0.37] * 12 for _ in range(9)]
        for value_row in detail.gaussian_blur(flat):
            for value in value_row:
                self.assertAlmostEqual(value, 0.37, places=12)

    def test_median_removes_an_impulse_and_keeps_the_step(self):
        plane = [[0.2 if x < 6 else 0.8 for x in range(12)]
                 for _ in range(9)]
        plane[4][3] = 1.0                       # hot pixel
        fixed = detail.median_filter(plane)
        self.assertEqual(fixed[4][3], 0.2)
        for y in range(1, 8):                   # step survives exactly
            self.assertEqual(fixed[y][4], 0.2)
            self.assertEqual(fixed[y][7], 0.8)


class TestSharpen(unittest.TestCase):
    def test_unsharp_steepens_an_edge_and_leaves_flat_alone(self):
        from pxp.image import Image
        img = Image(16, 10, channels=3)
        for y in range(10):
            for x in range(16):
                v = 0.3 if x < 8 else 0.7
                img.set(x, y, [v, v, v])
        sharp = detail.unsharp_mask(img, amount=1.0)
        self.assertAlmostEqual(sharp.get(2, 5)[1], 0.3, places=9)
        jump_before = img.get(9, 5)[1] - img.get(6, 5)[1]
        jump_after = sharp.get(9, 5)[1] - sharp.get(6, 5)[1]
        self.assertGreater(jump_after, jump_before * 1.1)

    def test_richardson_lucy_undoes_a_known_blur(self):
        # RL converges slowly on a hard step — the measurable claims
        # are a solid MSE improvement and a much steeper edge, not
        # perfection
        clean = [[0.2 if x < 10 else 0.8 for x in range(20)]
                 for _ in range(14)]
        blurred = detail.gaussian_blur(clean, radius=2, sigma=1.2)
        restored = detail.richardson_lucy(blurred, radius=2,
                                          sigma=1.2, iterations=20)

        def mse(plane):
            return sum((plane[y][x] - clean[y][x]) ** 2
                       for y in range(14) for x in range(20)) / 280

        self.assertLess(mse(restored), 0.65 * mse(blurred))
        blurred_jump = blurred[7][10] - blurred[7][9]
        restored_jump = restored[7][10] - restored[7][9]
        self.assertGreater(restored_jump, 1.5 * blurred_jump)


class TestNlm(unittest.TestCase):
    def test_nlm_beats_the_plain_blur_on_the_same_noise(self):
        noisy = noisy_step()
        self.assertLess(mse_to_step(detail.nlm(noisy, strength=0.15)),
                        mse_to_step(detail.gaussian_blur(noisy)))
        self.assertLess(mse_to_step(detail.nlm(noisy, strength=0.15)),
                        0.4 * mse_to_step(noisy))


@unittest.skipUnless(HAVE_NUMPY, "pipeline tier requires NumPy")
class TestTwoTierDetail(unittest.TestCase):
    def setUp(self):
        self.plane = noisy_step(width=26, height=16)
        self.array = np.asarray(self.plane)

    def test_gaussian_blur_tiers_identical(self):
        self.assertEqual(detail.gaussian_blur(self.plane),
                         pxp.fast.detail.gaussian_blur(
                             self.array).tolist())

    def test_median_tiers_identical(self):
        self.assertEqual(detail.median_filter(self.plane),
                         pxp.fast.detail.median_filter(
                             self.array).tolist())

    def test_richardson_lucy_tiers_identical(self):
        self.assertEqual(
            detail.richardson_lucy(self.plane, iterations=4),
            pxp.fast.detail.richardson_lucy(self.array,
                                            iterations=4).tolist())

    def test_nlm_tiers_identical(self):
        self.assertEqual(
            detail.nlm(self.plane, search_radius=3),
            pxp.fast.detail.nlm(self.array, search_radius=3).tolist())

    def test_unsharp_tiers_identical(self):
        from pxp.image import Image
        img = Image(14, 10, channels=3)
        rng = random.Random(3)
        for y in range(10):
            for x in range(14):
                img.set(x, y, [0.2 + 0.5 * rng.random()
                               for _ in range(3)])
        reference = detail.unsharp_mask(img)
        pipeline = pxp.fast.detail.unsharp_mask(
            np.asarray(img.pixels))
        expected = [[reference.get(x, y) for x in range(14)]
                    for y in range(10)]
        self.assertEqual(expected, pipeline.tolist())


if __name__ == "__main__":
    unittest.main()
