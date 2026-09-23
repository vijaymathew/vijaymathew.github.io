"""Chapter 9's resampling claims, checked: every kernel is exact on
a flat field and an unchanged size, bilinear reproduces ramps and
never overshoots, the sharp kernels ring on a step, minification
without a stretched kernel aliases — and the tiers agree to the
bit."""

import os
import random
import sys
import unittest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from pxp import resample

try:
    import numpy as np
    import pxp.fast.resample
    HAVE_NUMPY = True
except ImportError:
    HAVE_NUMPY = False

METHODS = ("nearest", "bilinear", "bicubic", "lanczos")


def noisy_plane(width=31, height=22, seed=5):
    rng = random.Random(seed)
    return [[rng.random() for _ in range(width)]
            for _ in range(height)]


class TestKernelContracts(unittest.TestCase):
    def test_same_size_is_identity(self):
        plane = noisy_plane()
        for method in METHODS:
            out = resample.resample(plane, 31, 22, method)
            for y in range(22):
                for x in range(31):
                    self.assertAlmostEqual(out[y][x], plane[y][x],
                                           places=12, msg=method)

    def test_flat_field_survives_any_resize(self):
        flat = [[0.42] * 20 for _ in range(14)]
        for method in METHODS:
            for size in ((37, 9), (10, 7)):
                out = resample.resample(flat, *size, method)
                for row in out:
                    for value in row:
                        self.assertAlmostEqual(value, 0.42,
                                               places=12, msg=method)

    def test_bilinear_reproduces_a_ramp(self):
        ramp = [[x / 15.0 for x in range(16)] for _ in range(6)]
        out = resample.resample(ramp, 31, 6, "bilinear")
        for x in range(2, 29):   # interior: still a straight line
            step = out[3][x + 1] - out[3][x]
            self.assertAlmostEqual(step, out[3][2] - out[3][1],
                                   places=10)

    def test_sharp_kernels_ring_and_bilinear_does_not(self):
        step = [[0.2 if x < 8 else 0.8 for x in range(16)]
                for _ in range(6)]
        for method, rings in (("bilinear", False),
                              ("bicubic", True), ("lanczos", True)):
            out = resample.resample(step, 64, 6, method)
            overshoot = max(max(row) for row in out) - 0.8
            if rings:
                self.assertGreater(overshoot, 0.01, msg=method)
            else:
                self.assertLess(overshoot, 1e-9, msg=method)

    def test_stretched_kernel_averages_what_nearest_aliases(self):
        # columns alternating 0/1 at the pixel scale, shrunk 4x: the
        # true content is a 0.5 field. Nearest picks single
        # survivors (here all from the same phase — maximal
        # aliasing); the stretched lanczos reports the mean
        stripes = [[float(x % 2) for x in range(64)]
                   for _ in range(16)]
        picked = resample.resample(stripes, 16, 4, "nearest")
        averaged = resample.resample(stripes, 16, 4, "lanczos")
        for row in picked:
            for value in row:
                self.assertEqual(abs(value - 0.5), 0.5)
        for row in averaged:
            for value in row:
                self.assertLess(abs(value - 0.5), 0.08)


@unittest.skipUnless(HAVE_NUMPY, "pipeline tier requires NumPy")
class TestTwoTierResample(unittest.TestCase):
    def test_tiers_identical_all_methods_both_directions(self):
        plane = noisy_plane()
        array = np.asarray(plane)
        for method in METHODS:
            for size in ((47, 30), (13, 9)):
                self.assertEqual(
                    resample.resample(plane, *size, method),
                    pxp.fast.resample.resample(
                        array, *size, method).tolist(),
                    msg=f"{method} {size}")


if __name__ == "__main__":
    unittest.main()
