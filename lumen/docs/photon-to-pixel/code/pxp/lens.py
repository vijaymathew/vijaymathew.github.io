"""The book's lenses: fictional glass with precisely known sins.

A real lens bends light imperfectly in ways that cost real money to
reduce. Ours commit the same three sins, each controlled by one
number we choose — which means Part 6 can *invert* them exactly and
then discuss, honestly, what changes when (as with real lenses) you
only have a fitted approximation.

The model answers one question: for the sensor position (x, y), where
in the scene does this lens actually look, and how much light does it
lose on the way? Positions are measured from the frame center for the
optics (r = 0 at center, r = 1 at the corner of a square frame).
"""

import math

from .spectrum import Spectrum, WAVELENGTHS


class Lens:
    """Three flaws, three coefficients.

    distortion   radial: positive bows straight lines outward at the
                 edges (barrel), negative pinches them in (pincushion).
    vignetting   light falloff toward the corners.
    ca           lateral chromatic aberration: magnification that
                 drifts with wavelength, so the color channels of an
                 off-center point land at slightly different radii.
    """

    def __init__(self, name, distortion=0.0, vignetting=0.0, ca=0.0):
        self.name = name
        self.distortion = distortion
        self.vignetting = vignetting
        self.ca = ca

    def source_position(self, x, y, wavelength):
        """Where in the scene the lens looks, for sensor position
        (x, y), at one wavelength."""
        u, v = 2.0 * x - 1.0, 2.0 * y - 1.0        # centered coords
        r2 = (u * u + v * v) / 2.0                  # 1.0 at corners
        magnification = ((1.0 + self.distortion * r2)
                         * (1.0 + self.ca * (wavelength - 560.0) / 560.0))
        su, sv = u * magnification, v * magnification
        return ((su + 1.0) / 2.0, (sv + 1.0) / 2.0)

    def falloff(self, x, y):
        """The fraction of light that survives to (x, y): 1 at the
        center, less toward the corners."""
        u, v = 2.0 * x - 1.0, 2.0 * y - 1.0
        r2 = (u * u + v * v) / 2.0
        return 1.0 / (1.0 + self.vignetting * r2) ** 2

    def look(self, scene, x, y):
        """The spectrum this lens delivers to sensor position (x, y):
        each wavelength fetched from its own (slightly different)
        scene position, all dimmed by the falloff."""
        dimming = self.falloff(x, y)
        samples = []
        for band, wavelength in enumerate(WAVELENGTHS):
            sx, sy = self.source_position(x, y, wavelength)
            samples.append(scene.sample(sx, sy, band) * dimming)
        return Spectrum(samples)


def perfect():
    """The lens that isn't there: identity geometry, no falloff.
    Every flawed render in this book has this as its control."""
    return Lens("perfect")


def kit_lens():
    """The book's everyday lens: visible barrel distortion, corners
    about a stop down, and enough lateral CA to fringe a point light.
    Numbers chosen to be obvious in figures, not subtle."""
    return Lens("pxp 28mm f/2.8",
                distortion=0.06, vignetting=0.35, ca=0.025)
