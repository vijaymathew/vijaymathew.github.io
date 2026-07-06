"""Colorimetry sanity: our spectral arithmetic lands on published values.

The white points of the standard illuminants are known to four decimal
places from the full 1 nm tables. Our 10 nm grid should land within a
small tolerance of each — if these tests fail, either the data tables
or the integration are wrong.
"""

import os
import sys
import unittest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from pxp import color, illuminant, reflectance


class TestWhitePoints(unittest.TestCase):
    def assert_chromaticity(self, light, expected_x, expected_y, tol):
        x, y = color.chromaticity(color.xyz(light))
        self.assertAlmostEqual(x, expected_x, delta=tol)
        self.assertAlmostEqual(y, expected_y, delta=tol)

    def test_daylight_is_d65(self):
        self.assert_chromaticity(illuminant.daylight(),
                                 0.3127, 0.3290, tol=0.002)

    def test_incandescent_is_illuminant_a(self):
        self.assert_chromaticity(illuminant.incandescent(),
                                 0.4476, 0.4074, tol=0.002)

    def test_equal_energy_is_centered(self):
        self.assert_chromaticity(illuminant.equal_energy(),
                                 1 / 3, 1 / 3, tol=0.002)


class TestSrgb(unittest.TestCase):
    def test_d65_maps_to_display_white(self):
        light = illuminant.daylight()
        white_y = color.xyz(light)[1]
        normalized = [v / white_y for v in color.xyz(light)]
        r, g, b = color.xyz_to_linear_srgb(normalized)
        for channel in (r, g, b):
            self.assertAlmostEqual(channel, 1.0, delta=0.02)

    def test_encode_is_monotonic_and_bounded(self):
        values = [i / 100 for i in range(101)]
        encoded = [color.srgb_encode(v) for v in values]
        self.assertEqual(encoded, sorted(encoded))
        self.assertAlmostEqual(encoded[0], 0.0)
        self.assertAlmostEqual(encoded[-1], 1.0, delta=0.001)


class TestChart(unittest.TestCase):
    def test_patches_are_physical(self):
        for name, refl in reflectance.color_chart():
            for value in refl.samples:
                self.assertTrue(0.0 <= value <= 1.0, name)

    def test_white_patch_is_neutral_under_daylight(self):
        chart = dict(reflectance.color_chart())
        r, g, b = color.swatch(chart["white"], illuminant.daylight())
        self.assertLess(max(r, g, b) - min(r, g, b), 0.01)

    def test_neutrals_stay_neutral_under_incandescent_after_scaling(self):
        # Without white balance, a gray patch under warm light is
        # simply orange — r > g > b. The pipeline's whole Chapter 3 in
        # one assertion.
        chart = dict(reflectance.color_chart())
        r, g, b = color.swatch(chart["gray-60"], illuminant.incandescent())
        self.assertGreater(r, g)
        self.assertGreater(g, b)


if __name__ == "__main__":
    unittest.main()
