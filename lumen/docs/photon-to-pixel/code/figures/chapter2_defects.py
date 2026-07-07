"""Figures for Chapter 2, section 2.3 — defective pixels.

Generates:
  defect-repair.png  three views of an aging sensor, enlarged:
                     the dark calibration frame with hot pixels
                     glowing; a flat gray frame with both hot and
                     dead sites visible; the same frame after
                     find_defects + fix_defects
"""

import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from pxp import Image, defects, illuminant, lens, rawproc, scene, write_png
from pxp import color
from pxp.reflectance import patch

OUT = os.path.normpath(os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    "..", "..", "assets", "figures"))

W, H, SEED = 48, 32, 101


def mosaic_panel(mosaic, factor=6):
    img = Image(W * factor, H * factor)
    for y in range(H * factor):
        for x in range(W * factor):
            v = color.srgb_encode(min(1.0, max(
                0.0, mosaic[y // factor][x // factor])))
            img.set(x, y, [v, v, v])
    return img


def side_by_side(panels, gap=10):
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


def main():
    os.makedirs(OUT, exist_ok=True)
    from pxp.sensor import Sensor
    ideal = lens.perfect()
    sensor = Sensor(W, H, seed=19)
    gray = scene.Scene(lambda x, y: patch(lambda w: 0.4),
                       illuminant.daylight())
    darkness = scene.Scene(lambda x, y: scene.NEAR_BLACK,
                           illuminant.daylight().scaled(0.0))
    exposure = sensor.expose_for(gray, ideal)

    dark, _ = defects.afflict(
        sensor.capture(darkness, ideal, exposure), SEED)
    flat, _ = defects.afflict(
        sensor.capture(gray, ideal, exposure), SEED)
    dark_mosaic = rawproc.linearize(dark)
    flat_mosaic = rawproc.linearize(flat)

    found = rawproc.find_defects(dark_mosaic, flat_mosaic)
    repaired = rawproc.fix_defects(flat_mosaic, found)

    panel = side_by_side([mosaic_panel(dark_mosaic),
                          mosaic_panel(flat_mosaic),
                          mosaic_panel(repaired)])
    write_png(panel, os.path.join(OUT, "defect-repair.png"))
    print("chapter2_defects: defect-repair.png")


if __name__ == "__main__":
    main()
