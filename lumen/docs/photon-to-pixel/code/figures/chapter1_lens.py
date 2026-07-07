"""Figures for Chapter 1, section 1.2 — the lens.

Generates:
  lens-flaws.png  the grid target through the perfect lens and
                  through the kit lens: barrel distortion bows the
                  lines, vignetting darkens the corners
  lens-ca.png     the point-light array through a lens with strong
                  lateral CA: clean dots at center, color-fringed
                  dots in the corner (4x enlargement)
"""

import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from pxp import Image, write_png
from pxp import color, illuminant, lens, scene

OUT = os.path.normpath(os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    "..", "..", "assets", "figures"))


def render(sc, through, width, height):
    """The scene as this lens delivers it, in display color."""
    white_y = color.xyz(sc.light)[1]
    img = Image(width, height)
    for y in range(height):
        for x in range(width):
            spectrum = through.look(sc, (x + 0.5) / width,
                                    (y + 0.5) / height)
            img.set(x, y, color.display(spectrum, white_y))
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


def enlarge(img, x0, y0, size, factor):
    """A square crop, blown up with hard pixel edges."""
    out = Image(size * factor, size * factor)
    for y in range(size * factor):
        for x in range(size * factor):
            out.set(x, y, img.get(x0 + x // factor, y0 + y // factor))
    return out


def main():
    os.makedirs(OUT, exist_ok=True)
    light = illuminant.daylight()

    grid = scene.grid_target(light)
    flaws = side_by_side([render(grid, lens.perfect(), 300, 200),
                          render(grid, lens.kit_lens(), 300, 200)])
    write_png(flaws, os.path.join(OUT, "lens-flaws.png"))

    fringing = lens.Lens("pxp 28mm, CA exaggerated",
                         distortion=0.06, vignetting=0.35, ca=0.06)
    dots = render(scene.point_lights(light), fringing, 300, 200)
    center = enlarge(dots, 125, 75, 50, 4)
    corner = enlarge(dots, 245, 3, 50, 4)
    ca = side_by_side([dots, center, corner])
    write_png(ca, os.path.join(OUT, "lens-ca.png"))

    print("chapter1_lens: lens-flaws.png, lens-ca.png")


if __name__ == "__main__":
    main()
