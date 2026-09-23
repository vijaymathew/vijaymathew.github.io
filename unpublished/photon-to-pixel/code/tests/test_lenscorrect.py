"""Chapter 6's corrections do what they claim: the falloff division
round-trips, the fixed point actually inverts the magnification,
fringes shrink, straightened geometry measures closer to the perfect
lens — and every correction is tier-identical."""

import os
import sys
import unittest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from pxp import demosaic, illuminant, lens, lenscorrect, rawproc, \
    scene, whitebalance
from pxp.image import Image
from pxp.lenscorrect import _magnification, effective_wavelength
from pxp.sensor import Sensor

try:
    import numpy as np
    import pxp.fast.lenscorrect
    HAVE_NUMPY = True
except ImportError:
    HAVE_NUMPY = False

D65 = illuminant.daylight()


def pipeline_to_rgb(sc, through, size=48, seed=71):
    ideal_meter = Sensor(size, size, seed=seed)
    exposure = ideal_meter.expose_for(sc, through)
    mosaic = rawproc.linearize(ideal_meter.capture(sc, through,
                                                   exposure))
    gains = whitebalance.reference_gains(D65)
    return demosaic.gradient(whitebalance.apply_gains(mosaic, gains))


class TestUnvignette(unittest.TestCase):
    def test_division_round_trips_the_model(self):
        shady = lens.Lens("v", vignetting=0.4)
        width, height = 16, 12
        flat = [[0.5 * shady.falloff((x + 0.5) / width,
                                     (y + 0.5) / height)
                 for x in range(width)] for y in range(height)]
        fixed = lenscorrect.unvignette(flat, shady)
        for row in fixed:
            for value in row:
                self.assertAlmostEqual(value, 0.5, places=12)


class TestFixedPoint(unittest.TestCase):
    def test_eight_iterations_invert_the_magnification(self):
        kit = lens.kit_lens()
        green = effective_wavelength(1)
        for r2 in (0.0, 0.3, 0.7, 1.0):
            scale = 1.0
            for _ in range(8):
                scale = 1.0 / _magnification(kit, scale * scale * r2,
                                             green)
            # the source point, pushed back through the lens, must
            # land on the output point: scale * m(scale^2 r2) = 1;
            # 1e-8 here is one part in ten thousand of a 12-bit step
            round_trip = scale * _magnification(kit, scale * scale * r2,
                                                green)
            self.assertAlmostEqual(round_trip, 1.0, places=8)


def channel_centroid(image, channel):
    """Brightness-weighted center of one channel — the registration
    probe: on a single bright dot, misaligned channels have
    misaligned centroids."""
    sx, sy, sw = 0.0, 0.0, 0.0
    for y in range(image.height):
        for x in range(image.width):
            weight = image.get(x, y)[channel]
            sx += weight * x
            sy += weight * y
            sw += weight
    return sx / sw, sy / sw


class TestCorrectCa(unittest.TestCase):
    def test_channels_register_onto_green(self):
        """CA correction's actual job is registration: after it, the
        red and blue centroids of a corner point light sit on top of
        green's. (The chromatic *smear within* each filter band is
        not correctable by any warp — the chapter measures and says
        so.)"""
        size = 96
        fringing = lens.Lens("ca-only", ca=0.06)
        sc = scene.point_lights(D65, radius=0.02)
        probe = Sensor(size, size, seed=1)
        full = Image(size, size, channels=3)
        for y in range(size):       # analytic: no mosaic, no noise
            for x in range(size):
                spectrum = fringing.look(sc, (x + 0.5) / size,
                                         (y + 0.5) / size)
                full.set(x, y, [probe.photosite_signal(spectrum, c)
                                for c in range(3)])
        corrected = lenscorrect.correct_ca(full, fringing)

        def offsets(img):
            # a tight window holding only the corner dot — one dot,
            # or the centroids average over neighbors and lie
            window = Image(11, 13, channels=3)
            for y in range(13):
                for x in range(11):
                    window.set(x, y, img.get(85 + x, 2 + y))
            gx, gy = channel_centroid(window, 1)
            out = []
            for c in (0, 2):
                cx, cy = channel_centroid(window, c)
                out.append(((cx - gx) ** 2 + (cy - gy) ** 2) ** 0.5)
            return out

        before = offsets(full)
        after = offsets(corrected)
        self.assertGreater(max(before), 0.05)     # there was CA
        # red registers ~50x better; blue keeps a ~0.1 px residual
        # from the single-wavelength stand-in for its band
        for b, a in zip(before, after):
            self.assertLess(a, 0.4 * b)


class TestCorrectDistortion(unittest.TestCase):
    def test_straightened_image_measures_closer_to_perfect(self):
        # the chart, not the grid: its patch edges move a solid two
        # pixels under this barrel at this size, while the grid's
        # sub-pixel lines alias into noise no correction can match
        barrel = lens.Lens("d-only", distortion=0.08)
        sc = scene.chart(D65)
        reference = pipeline_to_rgb(sc, lens.perfect(), size=64)
        warped = pipeline_to_rgb(sc, barrel, size=64)
        corrected = lenscorrect.correct_distortion(warped, barrel)

        def rmse(image):
            total = 0.0
            for y in range(image.height):
                for x in range(image.width):
                    for c in range(3):
                        total += (image.get(x, y)[c]
                                  - reference.get(x, y)[c]) ** 2
            return (total / (image.width * image.height * 3)) ** 0.5

        self.assertLess(rmse(corrected), 0.7 * rmse(warped))


@unittest.skipUnless(HAVE_NUMPY, "pipeline tier requires NumPy")
class TestTwoTierLensCorrect(unittest.TestCase):
    def setUp(self):
        self.kit = lens.kit_lens()
        self.image = pipeline_to_rgb(scene.chart(D65), self.kit,
                                     size=32, seed=73)
        self.pixels = np.asarray(self.image.pixels)

    def test_unvignette_tiers_identical(self):
        mosaic = [[(x * 7 + y * 3) % 50 / 50 for x in range(20)]
                  for y in range(14)]
        reference = lenscorrect.unvignette(mosaic, self.kit)
        pipeline = pxp.fast.lenscorrect.unvignette(
            np.asarray(mosaic), self.kit)
        self.assertEqual(reference, pipeline.tolist())

    def test_correct_ca_tiers_identical(self):
        reference = lenscorrect.correct_ca(self.image, self.kit)
        pipeline = pxp.fast.lenscorrect.correct_ca(self.pixels,
                                                   self.kit)
        expected = [[reference.get(x, y) for x in range(32)]
                    for y in range(32)]
        self.assertEqual(expected, pipeline.tolist())

    def test_correct_distortion_tiers_identical(self):
        reference = lenscorrect.correct_distortion(self.image,
                                                   self.kit)
        pipeline = pxp.fast.lenscorrect.correct_distortion(
            self.pixels, self.kit)
        expected = [[reference.get(x, y) for x in range(32)]
                    for y in range(32)]
        self.assertEqual(expected, pipeline.tolist())


if __name__ == "__main__":
    unittest.main()
