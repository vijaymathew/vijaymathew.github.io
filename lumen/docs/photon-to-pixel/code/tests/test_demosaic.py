"""Chapter 4's algorithms behave as claimed: exact on flat fields,
strictly ordered in accuracy on the torture target, and bit-
identical across the two tiers — including AHD, the most intricate
twin pair in the book."""

import os
import sys
import unittest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from pxp import demosaic, illuminant, lens, rawproc, scene, whitebalance
from pxp.sensor import Sensor

try:
    import numpy as np
    import pxp.fast.demosaic
    HAVE_NUMPY = True
except ImportError:
    HAVE_NUMPY = False

METHODS = ("nearest", "bilinear", "gradient", "ahd")


def balanced_capture(sc, light, size=64, seed=53):
    ideal = lens.perfect()
    sensor = Sensor(size, size, seed=seed)
    exposure = sensor.expose_for(sc, ideal)
    mosaic = rawproc.linearize(sensor.capture(sc, ideal, exposure))
    gains = whitebalance.reference_gains(light)
    return (whitebalance.apply_gains(mosaic, gains),
            sensor, exposure, ideal, gains)


class TestFlatField(unittest.TestCase):
    def test_every_method_is_exact_on_a_flat_mosaic(self):
        mosaic = [[0.42] * 14 for _ in range(12)]
        for name in METHODS:
            image = getattr(demosaic, name)(mosaic)
            for y in range(12):
                for x in range(14):
                    for value in image.get(x, y):
                        self.assertAlmostEqual(value, 0.42, places=12,
                                               msg=name)


class TestAccuracyLadder(unittest.TestCase):
    def test_psnr_improves_with_algorithmic_care(self):
        light = illuminant.daylight()
        sc = scene.starburst(light)
        mosaic, sensor, exposure, ideal, gains = \
            balanced_capture(sc, light)
        size = len(mosaic)

        truth = []
        for y in range(size):
            row = []
            for x in range(size):
                spectrum = ideal.look(sc, (x + 0.5) / size,
                                      (y + 0.5) / size)
                row.append([sensor.photosite_signal(spectrum, c)
                            * exposure / sensor.full_well * gains[c]
                            for c in range(3)])
            truth.append(row)

        def mse(image):
            total = 0.0
            for y in range(size):
                for x in range(size):
                    for c in range(3):
                        total += (image.get(x, y)[c]
                                  - truth[y][x][c]) ** 2
            return total / (size * size * 3)

        errors = [mse(getattr(demosaic, name)(mosaic))
                  for name in METHODS]
        for worse, better in zip(errors, errors[1:]):
            self.assertLess(better, worse)


@unittest.skipUnless(HAVE_NUMPY, "pipeline tier requires NumPy")
class TestTwoTierDemosaic(unittest.TestCase):
    def test_all_methods_tier_identical(self):
        light = illuminant.daylight()
        mosaic, *_ = balanced_capture(scene.starburst(light), light,
                                      size=32, seed=59)
        array = np.asarray(mosaic)
        for name in METHODS:
            reference = getattr(demosaic, name)(mosaic)
            pipeline = getattr(pxp.fast.demosaic, name)(array)
            expected = [[reference.get(x, y)
                         for x in range(reference.width)]
                        for y in range(reference.height)]
            self.assertEqual(expected, pipeline.tolist(), name)


if __name__ == "__main__":
    unittest.main()
