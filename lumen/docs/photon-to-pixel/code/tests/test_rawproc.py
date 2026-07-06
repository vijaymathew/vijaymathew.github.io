"""Chapter 2's stages do what the chapter claims: linearization keeps
honest negatives, calibration frames recover the exact defect map,
repairs land near the truth — and the two tiers agree, identically."""

import os
import sys
import unittest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from pxp import defects, illuminant, lens, rawproc, scene
from pxp.reflectance import patch
from pxp.sensor import Sensor

try:
    import pxp.fast.rawproc
    HAVE_NUMPY = True
except ImportError:
    HAVE_NUMPY = False

W, H = 48, 32
DEFECT_SEED = 101


def rig():
    ideal = lens.perfect()
    sensor = Sensor(W, H, seed=5)
    photo_scene = scene.chart(illuminant.daylight())
    exposure = sensor.expose_for(photo_scene, ideal)
    return ideal, sensor, photo_scene, exposure


def calibration_frames(sensor, ideal, exposure):
    darkness = scene.Scene(lambda x, y: scene.NEAR_BLACK,
                           illuminant.daylight().scaled(0.0))
    gray = scene.Scene(lambda x, y: patch(lambda w: 0.4),
                       illuminant.daylight())
    dark = sensor.capture(darkness, ideal, exposure)
    flat = sensor.capture(gray, ideal, exposure)
    return dark, flat


class TestLinearize(unittest.TestCase):
    def test_dark_frame_centers_on_zero_with_negatives(self):
        ideal, sensor, _, exposure = rig()
        dark, _ = calibration_frames(sensor, ideal, exposure)
        mosaic = rawproc.linearize(dark)
        flat_list = [v for row in mosaic for v in row]
        mean = sum(flat_list) / len(flat_list)
        self.assertAlmostEqual(mean, 0.0, delta=0.001)
        self.assertTrue(any(v < 0 for v in flat_list),
                        "clipped negatives would bias dark regions")


class TestDefects(unittest.TestCase):
    def test_calibration_recovers_the_exact_defect_map(self):
        ideal, sensor, _, exposure = rig()
        dark, flat = calibration_frames(sensor, ideal, exposure)
        _, truth = defects.afflict(dark, DEFECT_SEED)
        _, _ = defects.afflict(flat, DEFECT_SEED)
        found = rawproc.find_defects(rawproc.linearize(dark),
                                     rawproc.linearize(flat))
        self.assertEqual(found, truth)

    def test_repair_lands_near_the_healthy_value(self):
        ideal, sensor, photo_scene, exposure = rig()
        healthy = rawproc.linearize(
            sensor.capture(photo_scene, ideal, exposure))
        damaged_raw = sensor.capture(photo_scene, ideal, exposure)
        _, positions = defects.afflict(damaged_raw, DEFECT_SEED)
        fixed = rawproc.fix_defects(rawproc.linearize(damaged_raw),
                                    positions)
        for x, y in positions:
            # a defect on a patch border interpolates across the
            # edge; triage promises "plausible", not "exact"
            self.assertAlmostEqual(fixed[y][x], healthy[y][x],
                                   delta=0.25)


@unittest.skipUnless(HAVE_NUMPY, "pipeline tier requires NumPy")
class TestTwoTierRawproc(unittest.TestCase):
    def test_linearize_tiers_identical(self):
        ideal, sensor, photo_scene, exposure = rig()
        frame = sensor.capture(photo_scene, ideal, exposure)
        reference = rawproc.linearize(frame)
        pipeline = pxp.fast.rawproc.linearize(frame)
        self.assertEqual(reference, pipeline.tolist())

    def test_fix_defects_tiers_identical(self):
        import numpy as np
        ideal, sensor, photo_scene, exposure = rig()
        frame = sensor.capture(photo_scene, ideal, exposure)
        _, positions = defects.afflict(frame, DEFECT_SEED)
        reference = rawproc.fix_defects(rawproc.linearize(frame),
                                        positions)
        pipeline = pxp.fast.rawproc.fix_defects(
            np.asarray(rawproc.linearize(frame)), positions)
        self.assertEqual(reference, pipeline.tolist())


if __name__ == "__main__":
    unittest.main()
