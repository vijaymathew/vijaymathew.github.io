"""Chapter 10's claims: a real maker's profile matrix, adapted by
dcraw's recipe, keeps white-balanced neutrals neutral and lands
them on the D65 white point; and (when rawpy and the sample NEF
are present) the whole pipeline develops a real raw file into a
JPEG an independent decoder reads back at the right size."""

import io
import os
import sys
import unittest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from pxp import colormatrix

NEF = os.path.join(os.path.dirname(__file__), "..", "data",
                   "iss030e122639.NEF")

try:
    import numpy as np
    import rawpy
    import pxp.fast.develop
    HAVE_RAWPY = True
except ImportError:
    HAVE_RAWPY = False

try:
    import PIL.Image
    HAVE_PIL = True
except ImportError:
    HAVE_PIL = False

# the Nikon D3S profile, as libraw surfaces it (XYZ -> camera)
D3S = [[0.8828, -0.2406, -0.0694],
       [-0.4874, 1.2603, 0.2541],
       [-0.0660, 0.1509, 0.7587]]


class TestProfileMatrix(unittest.TestCase):
    def test_neutral_lands_on_the_d65_white_point(self):
        matrix = colormatrix.matrix_from_profile(D3S)
        white = [sum(row) for row in matrix]
        self.assertAlmostEqual(white[0], 0.9505, places=3)
        self.assertAlmostEqual(white[1], 1.0000, places=3)
        self.assertAlmostEqual(white[2], 1.0891, places=3)

    def test_matrix_is_near_the_simulator_scale(self):
        # a real camera's matrix should be the same kind of object
        # Chapter 5 fitted: diagonal-dominant, entries of order one
        matrix = colormatrix.matrix_from_profile(D3S)
        for r in range(3):
            for c in range(3):
                self.assertLess(abs(matrix[r][c]), 2.5)
        self.assertGreater(matrix[0][0], abs(matrix[0][2]))
        self.assertGreater(matrix[2][2], abs(matrix[2][0]))


@unittest.skipUnless(HAVE_RAWPY and os.path.exists(NEF),
                     "needs rawpy and the sample NEF")
class TestRealRawFile(unittest.TestCase):
    def test_load_scales_and_reads_metadata(self):
        mosaic, gains, profile = pxp.fast.develop.load(
            NEF, crop=(1024, 1024, 256, 256))
        self.assertEqual(mosaic.shape, (256, 256))
        self.assertGreaterEqual(mosaic.min(), 0.0)
        self.assertLessEqual(mosaic.max(), 1.0)
        self.assertAlmostEqual(gains[0], 2.25, places=2)
        self.assertEqual(gains[1], 1.0)
        self.assertAlmostEqual(gains[2], 1.6875, places=2)
        self.assertEqual(len(profile), 3)

    @unittest.skipUnless(HAVE_PIL, "verification needs a decoder")
    def test_develop_produces_a_decodable_jpeg(self):
        data = pxp.fast.develop.develop(
            NEF, stops=1.5, crop=(2000, 1200, 512, 384))
        self.assertEqual(data[:2], b"\xff\xd8")
        self.assertEqual(data[-2:], b"\xff\xd9")
        decoded = PIL.Image.open(io.BytesIO(data))
        self.assertEqual(decoded.size, (512, 384))


if __name__ == "__main__":
    unittest.main()
