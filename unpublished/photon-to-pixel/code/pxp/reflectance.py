"""The book's surfaces: parametric reflectance spectra.

Real color-chart patches are measured; ours are *designed*, from two
smooth shapes — a step that turns on above some wavelength, and a
bump centered on one. That keeps every patch printable as a one-line
formula, keeps the whole chart original, and still produces the
behaviors that matter: metamerism, out-of-gamut saturation, and
surfaces that look different under different lights.
"""

import math

from .spectrum import Spectrum


def step(wavelength, center, width):
    """Rises smoothly from 0 to 1 as wavelength passes center."""
    return 1.0 / (1.0 + math.exp(-(wavelength - center) / width))


def bump(wavelength, center, width):
    """A smooth peak of height 1 at center, falling off on both sides."""
    return math.exp(-((wavelength - center) / width) ** 2)


def patch(fn):
    """A reflectance from a formula, verified to stay physical."""
    spectrum = Spectrum.from_function(fn)
    for value in spectrum.samples:
        if not 0.0 <= value <= 1.0:
            raise ValueError("reflectance must stay within [0, 1]")
    return spectrum


def color_chart():
    """The book's twelve-patch chart: name -> reflectance.

    Neutrals down the first column, then the strong colors, then two
    softer 'real world' surfaces. Every worked example about color in
    this book photographs these patches.
    """
    return [
        ("white",      patch(lambda w: 0.92)),
        ("gray-60",    patch(lambda w: 0.60)),
        ("gray-30",    patch(lambda w: 0.30)),
        ("black",      patch(lambda w: 0.04)),
        ("red",        patch(lambda w: 0.03 + 0.82 * step(w, 600, 12))),
        ("orange",     patch(lambda w: 0.04 + 0.80 * step(w, 575, 15))),
        ("yellow",     patch(lambda w: 0.05 + 0.83 * step(w, 540, 15))),
        ("leaf-green", patch(lambda w: 0.04 + 0.48 * bump(w, 540, 45))),
        ("cyan",       patch(lambda w: 0.05 + 0.72 * (1 - step(w, 555, 15)))),
        ("blue",       patch(lambda w: 0.04 + 0.60 * bump(w, 455, 35))),
        ("magenta",    patch(lambda w: 0.80 - 0.68 * bump(w, 540, 50))),
        ("skin",       patch(lambda w: 0.22 + 0.33 * step(w, 570, 25))),
    ]
