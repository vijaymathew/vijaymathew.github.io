"""Chapter 5's claims, pinned: the solver solves, the fitted matrix
sends neutrals to the white point and beats the mislabeling by an
order of magnitude, the sRGB constant survives derivation from first
principles, and the applied stage is tier-identical."""

import os
import sys
import unittest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from pxp import color, colormatrix, illuminant, linalg
from pxp.image import Image

try:
    import numpy as np
    import pxp.fast.colormatrix
    HAVE_NUMPY = True
except ImportError:
    HAVE_NUMPY = False

D65 = illuminant.daylight()


def delta_es(light, matrix):
    """Per-patch (matrix error, mislabel error) in CIELAB, where the
    mislabel treats camera RGB as if it were linear sRGB."""
    white = [v / color.xyz(light)[1] for v in color.xyz(light)]
    out = []
    for camera, truth in colormatrix.training_pairs(light):
        est = [matrix[t][0] * camera[0] + matrix[t][1] * camera[1]
               + matrix[t][2] * camera[2] for t in range(3)]
        mislabel = linalg.solve(color.XYZ_TO_LINEAR_SRGB, camera)
        truth_lab = color.xyz_to_lab(truth, white)
        out.append((color.delta_e(color.xyz_to_lab(est, white),
                                  truth_lab),
                    color.delta_e(color.xyz_to_lab(mislabel, white),
                                  truth_lab)))
    return out


class TestSolver(unittest.TestCase):
    def test_solves_a_known_system(self):
        x = linalg.solve([[2.0, 1.0, -1.0],
                          [-3.0, -1.0, 2.0],
                          [-2.0, 1.0, 2.0]], [8.0, -11.0, -3.0])
        for got, want in zip(x, [2.0, 3.0, -1.0]):
            self.assertAlmostEqual(got, want, places=12)


class TestDerivedMatrix(unittest.TestCase):
    def test_neutral_lands_on_the_white_point(self):
        matrix = colormatrix.derive_matrix(D65)
        white = [v / color.xyz(D65)[1] for v in color.xyz(D65)]
        for t in range(3):
            self.assertAlmostEqual(sum(matrix[t]), white[t],
                                   delta=0.005)

    def test_fit_quality_on_the_training_light(self):
        matrix = colormatrix.derive_matrix(D65)
        errors = delta_es(D65, matrix)
        mean = sum(e for e, _ in errors) / len(errors)
        self.assertLess(mean, 2.0)
        self.assertLess(max(e for e, _ in errors), 6.0)

    def test_matrix_beats_the_mislabel_by_an_order_of_magnitude(self):
        matrix = colormatrix.derive_matrix(D65)
        errors = delta_es(D65, matrix)
        mean_matrix = sum(e for e, _ in errors) / len(errors)
        mean_mislabel = sum(m for _, m in errors) / len(errors)
        self.assertGreater(mean_mislabel, 8 * mean_matrix)

    def test_each_light_gets_its_own_matrix(self):
        tungsten = illuminant.incandescent()
        matrix = colormatrix.derive_matrix(tungsten)
        errors = delta_es(tungsten, matrix)
        self.assertLess(sum(e for e, _ in errors) / len(errors), 3.0)
        d65_matrix = colormatrix.derive_matrix(D65)
        difference = max(abs(matrix[i][j] - d65_matrix[i][j])
                         for i in range(3) for j in range(3))
        self.assertGreater(difference, 0.02)


class TestSrgbDerivation(unittest.TestCase):
    def test_first_principles_match_the_published_constant(self):
        derived = colormatrix.derive_srgb_matrix()
        for i in range(3):
            for j in range(3):
                self.assertAlmostEqual(
                    derived[i][j], color.XYZ_TO_LINEAR_SRGB[i][j],
                    delta=1e-3)


@unittest.skipUnless(HAVE_NUMPY, "pipeline tier requires NumPy")
class TestTwoTierColorMatrix(unittest.TestCase):
    def test_apply_matrix_tiers_identical(self):
        matrix = colormatrix.derive_matrix(D65)
        image = Image(9, 7, channels=3)
        for y in range(7):
            for x in range(9):
                image.set(x, y, [(x * 13 + y * 5 + c * 29) % 97 / 96
                                 for c in range(3)])
        reference = colormatrix.apply_matrix(image, matrix)
        pixels = np.asarray(image.pixels)
        pipeline = pxp.fast.colormatrix.apply_matrix(pixels, matrix)
        expected = [[reference.get(x, y) for x in range(9)]
                    for y in range(7)]
        self.assertEqual(expected, pipeline.tolist())


if __name__ == "__main__":
    unittest.main()
