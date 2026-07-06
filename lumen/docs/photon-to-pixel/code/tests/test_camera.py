"""The simulated camera behaves as Part 1 claims: the perfect lens
is invisible, each flaw acts in its documented direction, and the
sensor is deterministic, mosaiced, and honest about noise."""

import math
import os
import sys
import tempfile
import unittest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from pxp import illuminant, lens, raw, scene
from pxp.sensor import Sensor, cfa_channel
from pxp.spectrum import WAVELENGTHS


def chart_scene():
    return scene.chart(illuminant.daylight())


class TestScene(unittest.TestCase):
    def test_chart_center_of_first_patch_is_white(self):
        sc = chart_scene()
        # first patch (white, reflectance 0.92) vs surround (0.13)
        white = sc.spectrum_at(0.18, 0.22).samples
        surround = sc.spectrum_at(0.02, 0.02).samples
        for w, s in zip(white, surround):
            self.assertGreater(w, s * 4)

    def test_queries_outside_frame_are_clamped(self):
        sc = chart_scene()
        self.assertEqual(sc.spectrum_at(-0.5, 0.5).samples,
                         sc.spectrum_at(0.0, 0.5).samples)


class TestLens(unittest.TestCase):
    def test_perfect_lens_is_invisible(self):
        sc = chart_scene()
        ideal = lens.perfect()
        for x, y in [(0.5, 0.5), (0.1, 0.9), (0.97, 0.03)]:
            self.assertEqual(ideal.look(sc, x, y).samples,
                             sc.spectrum_at(x, y).samples)

    def test_vignetting_dims_corners_not_center(self):
        flawed = lens.Lens("v", vignetting=0.5)
        self.assertAlmostEqual(flawed.falloff(0.5, 0.5), 1.0)
        self.assertLess(flawed.falloff(0.99, 0.01), 0.5)

    def test_barrel_distortion_looks_outward_at_edges(self):
        flawed = lens.Lens("d", distortion=0.1)
        sx, sy = flawed.source_position(0.9, 0.5, 560.0)
        self.assertGreater(sx, 0.9)          # fetches beyond the pixel
        cx, cy = flawed.source_position(0.5, 0.5, 560.0)
        self.assertAlmostEqual(cx, 0.5)      # center is fixed

    def test_ca_separates_wavelengths_off_center_only(self):
        flawed = lens.Lens("ca", ca=0.05)
        blue_x, _ = flawed.source_position(0.9, 0.5, WAVELENGTHS[0])
        red_x, _ = flawed.source_position(0.9, 0.5, WAVELENGTHS[-1])
        self.assertNotAlmostEqual(blue_x, red_x, places=4)
        blue_c, _ = flawed.source_position(0.5, 0.5, WAVELENGTHS[0])
        red_c, _ = flawed.source_position(0.5, 0.5, WAVELENGTHS[-1])
        self.assertAlmostEqual(blue_c, red_c, places=9)


class TestSensor(unittest.TestCase):
    def capture_small(self, seed=7):
        sc = chart_scene()
        ideal = lens.perfect()
        sensor = Sensor(16, 12, seed=seed)
        exposure = sensor.expose_for(sc, ideal)
        return sensor.capture(sc, ideal, exposure)

    def test_cfa_is_rggb(self):
        self.assertEqual([cfa_channel(0, 0), cfa_channel(1, 0),
                          cfa_channel(0, 1), cfa_channel(1, 1)],
                         [0, 1, 1, 2])

    def test_capture_is_deterministic(self):
        a, b = self.capture_small(), self.capture_small()
        self.assertEqual(a.values, b.values)
        c = self.capture_small(seed=8)
        self.assertNotEqual(a.values, c.values)

    def test_values_respect_adc_range(self):
        frame = self.capture_small()
        flat = [v for row in frame.values for v in row]
        self.assertGreaterEqual(min(flat), 0)
        self.assertLessEqual(max(flat), frame.white_level)

    def test_dark_frame_sits_at_black_level_with_read_noise(self):
        dark = scene.Scene(lambda x, y: scene.NEAR_BLACK,
                           illuminant.daylight().scaled(0.0))
        sensor = Sensor(24, 24, seed=3)
        frame = sensor.capture(dark, lens.perfect(), exposure=1000.0)
        flat = [v for row in frame.values for v in row]
        mean = sum(flat) / len(flat)
        self.assertAlmostEqual(mean, sensor.black_level, delta=1.0)
        spread = math.sqrt(sum((v - mean) ** 2
                               for v in flat) / len(flat))
        self.assertGreater(spread, 0.1)      # noise exists
        self.assertLess(spread, 5.0)         # but only read noise

    def test_container_roundtrip(self):
        frame = self.capture_small()
        fd, path = tempfile.mkstemp(suffix=".pxraw")
        os.close(fd)
        try:
            raw.save(frame, path)
            loaded = raw.load(path)
        finally:
            os.unlink(path)
        self.assertEqual(loaded.values, frame.values)
        self.assertEqual((loaded.width, loaded.height, loaded.cfa,
                          loaded.black_level, loaded.bit_depth),
                         (frame.width, frame.height, frame.cfa,
                          frame.black_level, frame.bit_depth))


if __name__ == "__main__":
    unittest.main()
