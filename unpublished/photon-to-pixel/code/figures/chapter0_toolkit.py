"""Figures for Chapter 0 — Setup.

Generates:
  first-light.png     the first image made entirely with our own toolkit
  exposure-stops.png  the same scene at -1, 0, and +1 stops

Everything here is deterministic: same code, same bytes, every run.
"""

import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from pxp import Image, write_png
from pxp.tone import exposure

OUT = os.path.normpath(os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    "..", "..", "assets", "figures"))


def first_light(width=960, height=300):
    """A gray ramp over a row of primary and secondary patches."""
    img = Image(width, height)
    ramp_h = height // 2
    for y in range(ramp_h):
        for x in range(width):
            v = x / (width - 1)
            img.set(x, y, [v, v, v])
    patches = [
        [0.0, 0.0, 0.0], [1.0, 0.0, 0.0], [0.0, 1.0, 0.0],
        [0.0, 0.0, 1.0], [0.0, 1.0, 1.0], [1.0, 0.0, 1.0],
        [1.0, 1.0, 0.0], [1.0, 1.0, 1.0],
    ]
    patch_w = width // len(patches)
    for y in range(ramp_h, height):
        for x in range(width):
            img.set(x, y, patches[min(x // patch_w, len(patches) - 1)])
    return img


def triptych(images, gap=8):
    """Lay images out side by side, separated by white gaps."""
    height = images[0].height
    width = sum(im.width for im in images) + gap * (len(images) - 1)
    out = Image(width, height, fill=1.0)
    offset = 0
    for im in images:
        for y in range(height):
            for x in range(im.width):
                out.set(offset + x, y, im.get(x, y))
        offset += im.width + gap
    return out


def main():
    os.makedirs(OUT, exist_ok=True)

    scene = first_light()
    write_png(scene, os.path.join(OUT, "first-light.png"))

    small = first_light(width=316, height=200)
    stops = triptych([exposure(small, -1), small, exposure(small, +1)])
    write_png(stops, os.path.join(OUT, "exposure-stops.png"))

    print("chapter0_toolkit: first-light.png, exposure-stops.png")


if __name__ == "__main__":
    main()
