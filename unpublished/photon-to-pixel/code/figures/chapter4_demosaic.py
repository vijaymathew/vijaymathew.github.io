"""Figures for Chapter 4 — demosaicing.

Generates:
  demosaic-ladder.png  the same starburst crop: ground truth, then
                       nearest, bilinear, gradient, AHD. Prints the
                       full-frame PSNR of each method for the
                       chapter's table.
  demosaic-zipper.png  a color edge from the chart at 8x: truth,
                       bilinear (zipper and fringe), AHD
"""

import math
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from pxp import Image, demosaic, illuminant, lens, rawproc, scene, \
    whitebalance, write_png
from pxp.color import srgb_encode
from pxp.sensor import Sensor

OUT = os.path.normpath(os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    "..", "..", "assets", "figures"))

LIGHT = illuminant.daylight()
METHODS = ("nearest", "bilinear", "gradient", "ahd")


def balanced_capture(sc, width, height, seed):
    ideal = lens.perfect()
    sensor = Sensor(width, height, seed=seed)
    exposure = sensor.expose_for(sc, ideal)
    mosaic = rawproc.linearize(sensor.capture(sc, ideal, exposure))
    gains = whitebalance.reference_gains(LIGHT)
    return (whitebalance.apply_gains(mosaic, gains),
            sensor, exposure, ideal, gains)


def truth_image(sc, sensor, exposure, ideal, gains, width, height):
    truth = Image(width, height, channels=3)
    for y in range(height):
        for x in range(width):
            spectrum = ideal.look(sc, (x + 0.5) / width,
                                  (y + 0.5) / height)
            truth.set(x, y, [sensor.photosite_signal(spectrum, c)
                             * exposure / sensor.full_well * gains[c]
                             for c in range(3)])
    return truth


def crop_encoded(image, x0, y0, size, factor):
    out = Image(size * factor, size * factor)
    for y in range(out.height):
        for x in range(out.width):
            out.set(x, y, [srgb_encode(min(1.0, max(0.0, v)))
                           for v in image.get(x0 + x // factor,
                                              y0 + y // factor)])
    return out


def side_by_side(panels, gap=8):
    height = max(p.height for p in panels)
    width = sum(p.width for p in panels) + gap * (len(panels) - 1)
    out = Image(width, height, fill=1.0)
    offset = 0
    for panel in panels:
        for y in range(panel.height):
            for x in range(panel.width):
                out.set(offset + x, y, panel.get(x, y))
        offset += panel.width + gap
    return out


def psnr(image, truth):
    total, count = 0.0, 0
    for y in range(truth.height):
        for x in range(truth.width):
            for c in range(3):
                total += (image.get(x, y)[c] - truth.get(x, y)[c]) ** 2
                count += 1
    return 10 * math.log10(1.0 / (total / count))


def ladder_figure(size=160):
    sc = scene.starburst(LIGHT)
    mosaic, sensor, exposure, ideal, gains = \
        balanced_capture(sc, size, size, seed=61)
    truth = truth_image(sc, sensor, exposure, ideal, gains, size, size)

    panels = [crop_encoded(truth, 88, 88, 48, 4)]
    for name in METHODS:
        image = getattr(demosaic, name)(mosaic)
        print(f"  {name:9s} PSNR {psnr(image, truth):.2f} dB")
        panels.append(crop_encoded(image, 88, 88, 48, 4))
    write_png(side_by_side(panels),
              os.path.join(OUT, "demosaic-ladder.png"))


def zipper_figure(width=160, height=107):
    sc = scene.chart(LIGHT)
    mosaic, sensor, exposure, ideal, gains = \
        balanced_capture(sc, width, height, seed=67)
    truth = truth_image(sc, sensor, exposure, ideal, gains,
                        width, height)
    # a vertical color edge: yellow patch meets its dark surround
    x0, y0, size, factor = 100, 44, 22, 8
    panels = [crop_encoded(truth, x0, y0, size, factor),
              crop_encoded(demosaic.bilinear(mosaic), x0, y0,
                           size, factor),
              crop_encoded(demosaic.ahd(mosaic), x0, y0,
                           size, factor)]
    write_png(side_by_side(panels),
              os.path.join(OUT, "demosaic-zipper.png"))


def main():
    os.makedirs(OUT, exist_ok=True)
    ladder_figure()
    zipper_figure()
    print("chapter4_demosaic: demosaic-ladder.png, demosaic-zipper.png")


if __name__ == "__main__":
    main()
