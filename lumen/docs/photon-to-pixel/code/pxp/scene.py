"""Spatial scenes: spectral radiance as a function of position.

A scene here is procedural — not a stored grid of pixels but a rule
that answers, for any position and any wavelength band, "how much
light leaves this point?". That costs nothing in memory, needs no
resolution decision up front, and lets the lens in the next section
ask about *exactly* the point it bends toward, with no interpolation
muddying the ground truth.

Positions are (x, y) in [0, 1] x [0, 1], top-left origin. Queries
outside the frame are clamped: the world continues at its edge value.
"""

import math

from .reflectance import color_chart, patch
from .spectrum import Spectrum


class Scene:
    """A rule mapping position to reflectance, under one light.

    ``sample(x, y, band)`` is the workhorse the lens and sensor call:
    the radiance leaving position (x, y) in one wavelength band —
    reflectance times illumination, as always. ``spectrum_at`` gives
    the whole spectrum when we want to look at ground truth.
    """

    def __init__(self, reflectance_at, light):
        self.reflectance_at = reflectance_at
        self.light = light

    def _clamped(self, x, y):
        return (min(1.0, max(0.0, x)), min(1.0, max(0.0, y)))

    def sample(self, x, y, band):
        x, y = self._clamped(x, y)
        return (self.reflectance_at(x, y).samples[band]
                * self.light.samples[band])

    def spectrum_at(self, x, y):
        x, y = self._clamped(x, y)
        return self.reflectance_at(x, y).lit_by(self.light)


SURROUND = patch(lambda w: 0.13)
LINE_WHITE = patch(lambda w: 0.92)
NEAR_BLACK = patch(lambda w: 0.02)


def chart(light, columns=4, rows=3, margin=0.07, gap=0.02,
          patches=None):
    """The twelve-patch chart of 1.1, laid out in space. A custom
    patch list swaps in other surfaces on the same geometry."""
    if patches is None:
        patches = [refl for _, refl in color_chart()]

    def reflectance_at(x, y):
        cell_w = (1.0 - 2 * margin - (columns - 1) * gap) / columns
        cell_h = (1.0 - 2 * margin - (rows - 1) * gap) / rows
        col = int((x - margin) // (cell_w + gap))
        row = int((y - margin) // (cell_h + gap))
        if 0 <= col < columns and 0 <= row < rows:
            in_x = (x - margin) - col * (cell_w + gap)
            in_y = (y - margin) - row * (cell_h + gap)
            if in_x <= cell_w and in_y <= cell_h:
                return patches[row * columns + col]
        return SURROUND

    return Scene(reflectance_at, light)


def grid_target(light, spacing=1 / 12, thickness=0.006):
    """Straight white lines on a dark field. Straight lines are the
    sharpest possible witness against a lens: any bending it does is
    immediately visible."""

    def near_line(coord):
        offset = coord % spacing
        return min(offset, spacing - offset) <= thickness / 2

    def reflectance_at(x, y):
        if near_line(x) or near_line(y):
            return LINE_WHITE
        return SURROUND

    return Scene(reflectance_at, light)


def starburst(light, spokes=36):
    """Wedges of white and dark radiating from the center — every
    orientation at once, and spatial frequency rising without limit
    toward the middle. The classic stress target for anything that
    reconstructs detail: if an algorithm is going to alias, fringe,
    or zipper, it will do it here."""

    def reflectance_at(x, y):
        angle = math.atan2(y - 0.5, x - 0.5)
        if math.sin(spokes * angle) > 0:
            return LINE_WHITE
        return SURROUND

    return Scene(reflectance_at, light)


def point_lights(light, columns=9, rows=6, radius=0.006):
    """An array of small bright dots on near-black — the classic
    target for chromatic aberration and (later) defocus, because a
    point smeared is a point that shows you the whole smear."""

    def reflectance_at(x, y):
        cx = (round(x * columns - 0.5) + 0.5) / columns
        cy = (round(y * rows - 0.5) + 0.5) / rows
        if (x - cx) ** 2 + (y - cy) ** 2 <= radius ** 2:
            return LINE_WHITE
        return NEAR_BLACK

    return Scene(reflectance_at, light)
