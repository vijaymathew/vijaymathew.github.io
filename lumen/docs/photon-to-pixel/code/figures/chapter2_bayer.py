"""Figures for Chapter 2, section 2.4 — why the Bayer pattern.

Generates:
  bayer-sites.png  the same capture with only the green photosites
                   lit (left) and only the red ones (right): green
                   samples the image twice as densely, which is the
                   entire argument of the pattern
"""

import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from pxp import Image, illuminant, lens, rawproc, scene, write_png
from pxp import color
from pxp.sensor import Sensor, cfa_channel

OUT = os.path.normpath(os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    "..", "..", "assets", "figures"))


def sites_panel(mosaic, channel, factor=10, x0=8, y0=6, size=24):
    tint = [[1.0, 0.25, 0.25], [0.3, 1.0, 0.3], [0.4, 0.4, 1.0]][channel]
    img = Image(size * factor, size * factor)
    for y in range(img.height):
        for x in range(img.width):
            px, py = x0 + x // factor, y0 + y // factor
            if cfa_channel(px, py) == channel:
                v = color.srgb_encode(min(1.0, max(0.0, mosaic[py][px])))
                img.set(x, y, [v * t for t in tint])
            else:
                img.set(x, y, [0.04, 0.04, 0.045])
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
    sc = scene.chart(illuminant.daylight())
    sensor = Sensor(48, 32, seed=23)
    ideal = lens.perfect()
    exposure = sensor.expose_for(sc, ideal)
    mosaic = rawproc.linearize(sensor.capture(sc, ideal, exposure))

    panel = side_by_side([sites_panel(mosaic, 1),
                          sites_panel(mosaic, 0)])
    write_png(panel, os.path.join(OUT, "bayer-sites.png"))
    print("chapter2_bayer: bayer-sites.png")


if __name__ == "__main__":
    main()
