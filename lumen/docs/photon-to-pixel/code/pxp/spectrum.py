"""The Spectrum type — how the simulated world describes light.

A scene in this book is not made of RGB values. It is made of spectra:
how much power (for a light) or how much reflection (for a surface)
there is at each visible wavelength. RGB appears only later, when a
sensor with three filters looks at these spectra and collapses them.

The book samples the visible range from 380 to 730 nanometers in
10 nm steps — 36 numbers per spectrum. Fine enough for serious
colorimetry, small enough to print on a page and loop over by hand.
"""

WAVELENGTH_START = 380
WAVELENGTH_END = 730
WAVELENGTH_STEP = 10
SAMPLE_COUNT = (WAVELENGTH_END - WAVELENGTH_START) // WAVELENGTH_STEP + 1

WAVELENGTHS = [WAVELENGTH_START + i * WAVELENGTH_STEP
               for i in range(SAMPLE_COUNT)]


class Spectrum:
    """36 samples across the visible range, one per grid wavelength.

    The same type serves two roles. As a *light*, samples are relative
    power. As a *reflectance*, samples are the fraction of light a
    surface returns at that wavelength, between 0 and 1.
    """

    def __init__(self, samples):
        if len(samples) != SAMPLE_COUNT:
            raise ValueError(f"a Spectrum has {SAMPLE_COUNT} samples, "
                             f"got {len(samples)}")
        self.samples = list(samples)

    @classmethod
    def from_function(cls, fn):
        """Sample fn(wavelength_nm) across the grid."""
        return cls([fn(w) for w in WAVELENGTHS])

    def lit_by(self, light):
        """The light leaving a surface: reflectance times illumination,
        wavelength by wavelength. self is the reflectance."""
        return Spectrum([r * l for r, l
                         in zip(self.samples, light.samples)])

    def scaled(self, factor):
        return Spectrum([s * factor for s in self.samples])
