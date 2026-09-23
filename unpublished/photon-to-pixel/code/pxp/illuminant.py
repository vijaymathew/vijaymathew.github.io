"""The book's light sources.

Three illuminants carry the whole book, plus one reference. All are
relative spectra normalized to 1.0 at 560 nm (the CIE's own
convention, scaled down from 100), except the fluorescent, whose
spiky shape makes a mid-spectrum anchor meaningless — it is
normalized to its strongest line instead.
"""

import math

from .data import cie
from .spectrum import Spectrum


def daylight():
    """CIE standard illuminant D65: average northern-sky daylight,
    tabulated by the CIE. The reference light of the sRGB world and
    this book's default sun."""
    return Spectrum([v / 100.0 for v in cie.D65])


def incandescent(temperature_k=2856.0):
    """A glowing filament, from physics rather than a table: Planck's
    law gives the emission of a hot body at each wavelength. At 2856 K
    this is CIE standard illuminant A — warm, orange, and entirely
    computable from one formula."""
    c2 = 1.4388e-2                    # second radiation constant, m*K

    def planck(wavelength_nm):
        wl = wavelength_nm * 1e-9     # to meters
        return wl ** -5 / (math.exp(c2 / (wl * temperature_k)) - 1.0)

    anchor = planck(560.0)
    return Spectrum.from_function(lambda w: planck(w) / anchor)


def fluorescent():
    """A deliberately awkward light: a dim continuum with three sharp
    emission lines, in the style of a cheap triphosphor tube. Kept
    around to cause trouble in the color chapters — two
    surfaces that match under this light can disagree under daylight.
    """
    lines = [(436.0, 6.0, 0.9),       # (center nm, width nm, strength)
             (546.0, 6.0, 1.0),
             (611.0, 8.0, 0.8)]

    def emission(wavelength_nm):
        power = 0.12                  # weak phosphor continuum
        for center, width, strength in lines:
            power += strength * math.exp(
                -((wavelength_nm - center) / width) ** 2)
        return power

    peak = max(Spectrum.from_function(emission).samples)
    return Spectrum.from_function(lambda w: emission(w) / peak)


def equal_energy():
    """The same power at every wavelength — physically dull,
    colorimetrically precious: its chromaticity is exactly the center
    of the diagram, which makes it a good test of our arithmetic."""
    return Spectrum.from_function(lambda w: 1.0)
