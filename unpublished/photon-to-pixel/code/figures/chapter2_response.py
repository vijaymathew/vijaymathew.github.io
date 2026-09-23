"""Figures for Chapter 2, section 2.1 — the sensor response curve.

Generates:
  response-curve.png  mean green-site value against exposure: a dead
                      straight line into a hard ceiling. The gray
                      line continues the linear fit past clipping.
"""

import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from pxp import illuminant, lens, scene, write_png
from pxp.reflectance import patch
from pxp.sensor import Sensor, cfa_channel
from _plot import Plot, REFERENCE

OUT = os.path.normpath(os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    "..", "..", "assets", "figures"))


def green_mean(frame):
    total, count = 0.0, 0
    for y in range(frame.height):
        for x in range(frame.width):
            if cfa_channel(x, y) == 1:
                total += frame.values[y][x]
                count += 1
    return total / count


def main():
    os.makedirs(OUT, exist_ok=True)
    gray = scene.Scene(lambda x, y: patch(lambda w: 0.4),
                       illuminant.daylight())
    ideal = lens.perfect()
    sensor = Sensor(48, 32, seed=11)
    clip_exposure = sensor.expose_for(gray, ideal, highlight=1.0)

    factors = [i / 10 for i in range(15)]           # 0.0 .. 1.4
    means = [green_mean(sensor.capture(gray, ideal, f * clip_exposure))
             for f in factors]

    plot = Plot(660, 360, (0.0, 1.4), (0.0, 4400))
    plot.axes(x_ticks=[0, 0.5, 1], y_ticks=[0, 1000, 2000, 3000, 4000])
    # the line the sensor would follow if the well were bottomless
    slope = (means[10] - means[0]) / 1.0
    plot.polyline([(0, means[0]), (1.4, means[0] + slope * 1.4)],
                  color=REFERENCE, thickness=1)
    plot.polyline(list(zip(factors, means)))
    plot.scatter(list(zip(factors, means)))
    write_png(plot.image(), os.path.join(OUT, "response-curve.png"))
    print("chapter2_response: response-curve.png")


if __name__ == "__main__":
    main()
