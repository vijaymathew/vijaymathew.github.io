"""Chapter 3's claims, held to account: the estimators land near the
known-true gains on the scenes they're built for, manual WB agrees
with ground truth by construction, the applied stage is tier-
identical — and white balance before demosaicing beats white balance
after, measured against ground truth. The last test IS the chapter's
thesis."""

import os
import sys
import unittest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from pxp import illuminant, lens, rawproc, scene, whitebalance
from pxp.demosaic import demosaic_preview
from pxp.reflectance import patch
from pxp.sensor import Sensor

try:
    import numpy as np
    import pxp.fast.whitebalance
    HAVE_NUMPY = True
except ImportError:
    HAVE_NUMPY = False

TUNGSTEN = illuminant.incandescent()


def captured_mosaic(sc, width=64, height=48, seed=31):
    ideal = lens.perfect()
    sensor = Sensor(width, height, seed=seed)
    exposure = sensor.expose_for(sc, ideal)
    return rawproc.linearize(sensor.capture(sc, ideal, exposure)), \
        sensor, exposure


def gains_close(test, got, expected, tolerance):
    for g, e in zip(got, expected):
        test.assertAlmostEqual(g / e, 1.0, delta=tolerance)


class TestEstimators(unittest.TestCase):
    def test_gray_world_on_a_gray_scene_finds_the_truth(self):
        gray = scene.Scene(lambda x, y: patch(lambda w: 0.4), TUNGSTEN)
        mosaic, _, _ = captured_mosaic(gray)
        gains_close(self, whitebalance.gray_world(mosaic),
                    whitebalance.reference_gains(TUNGSTEN), 0.02)

    def test_white_patch_on_the_chart_finds_the_truth(self):
        mosaic, _, _ = captured_mosaic(scene.chart(TUNGSTEN))
        gains_close(self, whitebalance.white_patch(mosaic),
                    whitebalance.reference_gains(TUNGSTEN), 0.05)

    def test_manual_2856k_is_exactly_illuminant_a(self):
        self.assertEqual(whitebalance.gains_for_temperature(2856.0),
                         whitebalance.reference_gains(TUNGSTEN))

    def test_true_gains_neutralize_a_neutral(self):
        gains = whitebalance.reference_gains(TUNGSTEN)
        neutral = whitebalance.neutral_response(TUNGSTEN)
        balanced = [n * g for n, g in zip(neutral, gains)]
        self.assertAlmostEqual(balanced[0], balanced[1], places=12)
        self.assertAlmostEqual(balanced[2], balanced[1], places=12)


@unittest.skipUnless(HAVE_NUMPY, "pipeline tier requires NumPy")
class TestTwoTierWhiteBalance(unittest.TestCase):
    def test_apply_gains_tiers_identical(self):
        mosaic, _, _ = captured_mosaic(scene.chart(TUNGSTEN))
        gains = whitebalance.reference_gains(TUNGSTEN)
        reference = whitebalance.apply_gains(mosaic, gains)
        pipeline = pxp.fast.whitebalance.apply_gains(
            np.asarray(mosaic), gains)
        self.assertEqual(reference, pipeline.tolist())


class TestDemosaicPreview(unittest.TestCase):
    def test_flat_mosaic_reconstructs_exactly_flat(self):
        mosaic = [[0.375] * 12 for _ in range(10)]
        image = demosaic_preview(mosaic)
        for y in range(10):
            for x in range(12):
                for value in image.get(x, y):
                    self.assertAlmostEqual(value, 0.375, places=12)


class TestOrderMatters(unittest.TestCase):
    """Section 3.4 as a unit test: the same tungsten capture,
    demosaiced with white balance before versus after. Before must
    measure closer to ground truth."""

    def test_wb_before_demosaic_beats_wb_after(self):
        sc = scene.starburst(TUNGSTEN)
        ideal = lens.perfect()
        mosaic, sensor, exposure = captured_mosaic(sc, 64, 64, seed=37)
        gains = whitebalance.reference_gains(TUNGSTEN)

        before = demosaic_preview(
            whitebalance.apply_gains(mosaic, gains))
        after = demosaic_preview(mosaic)
        for y in range(after.height):
            for x in range(after.width):
                after.set(x, y, [v * g for v, g
                                 in zip(after.get(x, y), gains)])

        def rmse(image):
            total, count = 0.0, 0
            for y in range(image.height):
                for x in range(image.width):
                    spectrum = ideal.look(sc, (x + 0.5) / image.width,
                                          (y + 0.5) / image.height)
                    for c in range(3):
                        truth = (sensor.photosite_signal(spectrum, c)
                                 * exposure / sensor.full_well
                                 * gains[c])
                        total += (image.get(x, y)[c] - truth) ** 2
                        count += 1
            return (total / count) ** 0.5

        self.assertLess(rmse(before), rmse(after))


if __name__ == "__main__":
    unittest.main()
