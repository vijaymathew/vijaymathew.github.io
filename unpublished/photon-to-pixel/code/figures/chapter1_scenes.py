"""Figures for Chapter 1 — The Simulated Camera System.

Generates:
  chart-illuminants.png  the twelve-patch chart rendered under D65
                         daylight (left) and a 2856 K filament (right),
                         no white balance — the ground truth a real
                         photographer never gets to see
"""

import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from pxp import Image, write_png
from pxp import color, illuminant, reflectance

OUT = os.path.normpath(os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    "..", "..", "assets", "figures"))

PATCH_W, PATCH_H, GAP, MARGIN = 104, 84, 8, 14
COLUMNS, ROWS = 4, 3
SURROUND = 0.13          # dark neutral chart body, linear


def render_chart(light):
    """The chart as a swatch grid under one light. The dark surround
    is itself a surface — it warms under warm light like everything
    else in the scene."""
    width = MARGIN * 2 + COLUMNS * PATCH_W + (COLUMNS - 1) * GAP
    height = MARGIN * 2 + ROWS * PATCH_H + (ROWS - 1) * GAP
    body = color.swatch(reflectance.patch(lambda w: SURROUND), light)
    img = Image(width, height, channels=3, fill=0.0)
    for y in range(height):
        for x in range(width):
            img.set(x, y, body)
    for index, (name, refl) in enumerate(reflectance.color_chart()):
        col, row = index % COLUMNS, index // COLUMNS
        x0 = MARGIN + col * (PATCH_W + GAP)
        y0 = MARGIN + row * (PATCH_H + GAP)
        swatch = color.swatch(refl, light)
        for y in range(y0, y0 + PATCH_H):
            for x in range(x0, x0 + PATCH_W):
                img.set(x, y, swatch)
    return img


def side_by_side(left, right, gap=12):
    out = Image(left.width + gap + right.width,
                max(left.height, right.height), fill=1.0)
    for img, offset in ((left, 0), (right, left.width + gap)):
        for y in range(img.height):
            for x in range(img.width):
                out.set(offset + x, y, img.get(x, y))
    return out


def main():
    os.makedirs(OUT, exist_ok=True)
    charts = side_by_side(render_chart(illuminant.daylight()),
                          render_chart(illuminant.incandescent()))
    write_png(charts, os.path.join(OUT, "chart-illuminants.png"))
    print("chapter1_scenes: chart-illuminants.png")


if __name__ == "__main__":
    main()
