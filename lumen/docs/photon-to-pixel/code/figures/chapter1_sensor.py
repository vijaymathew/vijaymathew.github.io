"""Figures for Chapter 1, section 1.3 — the sensor.

Generates:
  sensor-mosaic.png  the chart as the sensor records it: the full
                     raw frame (left, normalized to gray) and a 16x16
                     pixel crop straddling the white and red patches,
                     enlarged with each value tinted by its CFA
                     filter (right)
"""

import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from pxp import Image, write_png
from pxp import color, illuminant, lens, scene
from pxp.sensor import Sensor, cfa_channel

OUT = os.path.normpath(os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    "..", "..", "assets", "figures"))

W, H = 192, 128


def normalized(raw_frame, x, y):
    value = raw_frame.values[y][x] - raw_frame.black_level
    return value / (raw_frame.white_level - raw_frame.black_level)


def gray_frame(raw_frame, factor=2):
    """The raw values as brightness, nothing else: what the file
    actually holds, before anyone tells you which pixel was behind
    which filter."""
    img = Image(raw_frame.width * factor, raw_frame.height * factor)
    for y in range(img.height):
        for x in range(img.width):
            v = color.srgb_encode(max(0.0, normalized(
                raw_frame, x // factor, y // factor)))
            img.set(x, y, [v, v, v])
    return img


def tinted_crop(raw_frame, x0, y0, size=16, factor=16):
    """The same values with the mosaic made visible: each pixel shown
    in the color of the filter that produced it."""
    img = Image(size * factor, size * factor)
    for y in range(img.height):
        for x in range(img.width):
            px, py = x0 + x // factor, y0 + y // factor
            v = color.srgb_encode(max(0.0, normalized(raw_frame, px, py)))
            pixel = [0.0, 0.0, 0.0]
            pixel[cfa_channel(px, py)] = v
            img.set(x, y, pixel)
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
    ideal = lens.perfect()
    sensor = Sensor(W, H, seed=7)
    exposure = sensor.expose_for(sc, ideal)
    frame = sensor.capture(sc, ideal, exposure)

    # crop straddles the white patch (top) and red patch (bottom)
    panel = side_by_side([gray_frame(frame),
                          tinted_crop(frame, x0=26, y0=32)])
    write_png(panel, os.path.join(OUT, "sensor-mosaic.png"))
    print("chapter1_sensor: sensor-mosaic.png")


if __name__ == "__main__":
    main()
