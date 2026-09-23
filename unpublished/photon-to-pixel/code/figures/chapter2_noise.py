"""Figures for Chapter 2, section 2.2 — noise.

Generates:
  noise-transfer.png  variance of a flat patch against its mean
                      signal: a straight line whose slope is the
                      shot-noise gain and whose intercept is the
                      read noise — the photon transfer curve
  iso-comparison.png  the chart exposed properly (left) and given
                      1/8th the light with 8x the gain (right):
                      same brightness, very different noise
"""

import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from pxp import Image, illuminant, lens, scene, write_png
from pxp import color
from pxp.reflectance import patch
from pxp.sensor import Sensor, cfa_channel
from _plot import Plot, REFERENCE

OUT = os.path.normpath(os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    "..", "..", "assets", "figures"))


def green_stats(frame):
    values = [frame.values[y][x] - frame.black_level
              for y in range(frame.height)
              for x in range(frame.width) if cfa_channel(x, y) == 1]
    mean = sum(values) / len(values)
    variance = sum((v - mean) ** 2 for v in values) / (len(values) - 1)
    return mean, variance


def transfer_curve():
    gray = scene.Scene(lambda x, y: patch(lambda w: 0.4),
                       illuminant.daylight())
    ideal = lens.perfect()
    sensor = Sensor(64, 48, seed=13)
    clip_exposure = sensor.expose_for(gray, ideal, highlight=1.0)

    points = []
    for i in range(1, 13):
        frame = sensor.capture(gray, ideal, clip_exposure * i / 14)
        points.append(green_stats(frame))

    plot = Plot(660, 360, (0.0, 3000), (0.0, 1200))
    plot.axes(x_ticks=[0, 1000, 2000, 3000],
              y_ticks=[0, 400, 800, 1200])
    # least-squares line through the measured points
    n = len(points)
    sx = sum(m for m, _ in points)
    sy = sum(v for _, v in points)
    sxx = sum(m * m for m, _ in points)
    sxy = sum(m * v for m, v in points)
    slope = (n * sxy - sx * sy) / (n * sxx - sx * sx)
    intercept = (sy - slope * sx) / n
    plot.polyline([(0, intercept), (3000, intercept + slope * 3000)],
                  color=REFERENCE, thickness=1)
    plot.scatter(points)
    write_png(plot.image(), os.path.join(OUT, "noise-transfer.png"))


def gray_panel(frame, factor=2, boost=1.0):
    img = Image(frame.width * factor, frame.height * factor)
    scale = frame.white_level - frame.black_level
    for y in range(img.height):
        for x in range(img.width):
            value = frame.values[y // factor][x // factor]
            v = color.srgb_encode(min(1.0, max(
                0.0, (value - frame.black_level) * boost / scale)))
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


def iso_comparison():
    sc = scene.chart(illuminant.daylight())
    ideal = lens.perfect()
    sensor = Sensor(160, 107, seed=17)
    exposure = sensor.expose_for(sc, ideal)
    proper = sensor.capture(sc, ideal, exposure)
    starved = sensor.capture(sc, ideal, exposure / 8, iso_gain=8.0)
    panel = side_by_side([gray_panel(proper), gray_panel(starved)])
    write_png(panel, os.path.join(OUT, "iso-comparison.png"))


def main():
    os.makedirs(OUT, exist_ok=True)
    transfer_curve()
    iso_comparison()
    print("chapter2_noise: noise-transfer.png, iso-comparison.png")


if __name__ == "__main__":
    main()
