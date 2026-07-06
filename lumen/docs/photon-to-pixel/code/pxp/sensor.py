"""The sensor: where spectra die and numbers are born.

Everything before this module is a continuum — power at every
wavelength, radiance at every position. The sensor ends that. It
samples the image on a pixel grid, collapses each pixel's spectrum
to a single number through one of three colored filters arranged in
a Bayer mosaic, adds the noise physics insists on, and quantizes the
result to integers. What comes out is a raw frame: the starting
point of every chapter after this one.

The noise model is introduced here and dissected in Chapter 2:
photon shot noise (the light itself arrives in grains), read noise
(the electronics whisper), and fixed-pattern noise (each column's
amplifier is a slightly different individual).
"""

import math
import random

from .raw import RawImage
from .spectrum import Spectrum, SAMPLE_COUNT


def _response(center, width, peak):
    def shape(wavelength):
        return peak * math.exp(-((wavelength - center) / width) ** 2)
    return shape


# The pxp sensor's three color filters. Fictional, but shaped like
# real CMOS dyes: broad, overlapping, and deliberately NOT the human
# observer curves — the gap between these and the eye is exactly what
# Chapter 5's color matrix exists to bridge. The red filter leaks a
# little blue, as real red dyes do; that leak is why the matrix will
# have off-diagonal terms worth talking about.
_RED_LEAK = _response(425.0, 20.0, 0.06)
SENSITIVITIES = [
    Spectrum.from_function(lambda w: _response(608.0, 52.0, 0.85)(w)
                           + _RED_LEAK(w)),                     # R
    Spectrum.from_function(_response(537.0, 48.0, 1.00)),       # G
    Spectrum.from_function(_response(462.0, 43.0, 0.90)),       # B
]

CFA_PATTERN = "RGGB"


def cfa_channel(x, y):
    """Which filter sits over pixel (x, y): 0=R, 1=G, 2=B, in the
    RGGB arrangement — red on even/even, blue on odd/odd, green on
    the other two corners of every 2x2 cell."""
    if y % 2 == 0:
        return 0 if x % 2 == 0 else 1
    return 1 if x % 2 == 0 else 2


class Sensor:
    """A small, honest CMOS stand-in.

    full_well    electrons a pixel can hold before it clips
    read_noise   electrons of Gaussian noise added by readout
    fpn          fixed-pattern noise: per-column gain spread (fraction)
    bit_depth    ADC resolution; black_level is the offset the ADC
                 adds so that noise around zero is not cut in half
    seed         every sensor is deterministic: same sensor, same
                 scene, same frame — bit for bit
    """

    def __init__(self, width, height, seed=7, bit_depth=12,
                 black_level=64, full_well=12000.0, read_noise=4.0,
                 fpn=0.004):
        self.width = width
        self.height = height
        self.bit_depth = bit_depth
        self.black_level = black_level
        self.white_level = 2 ** bit_depth - 1
        self.full_well = full_well
        self.read_noise = read_noise
        self.seed = seed
        rng = random.Random(seed)
        self.column_gain = [rng.gauss(1.0, fpn) for _ in range(width)]

    def photosite_signal(self, spectrum, channel):
        """One pixel's catch, before noise: the incoming spectrum
        weighed by that pixel's filter, summed. A fraction of the
        full well, in [0, ~1]."""
        response = SENSITIVITIES[channel].samples
        total = 0.0
        for band in range(SAMPLE_COUNT):
            total += spectrum.samples[band] * response[band]
        return total / SAMPLE_COUNT

    def expose_for(self, scene, lens, highlight=0.85):
        """A crude raw-aware light meter: scan a coarse grid, find
        the brightest signal any photosite type would record, and
        choose the exposure that places it at `highlight` of the
        full well. All three channels are checked because the
        brightest one depends on the light — under a warm source
        the red sites saturate long before the green ones."""
        brightest = 0.0
        for gy in range(12):
            for gx in range(16):
                x, y = (gx + 0.5) / 16, (gy + 0.5) / 12
                spectrum = lens.look(scene, x, y)
                for channel in range(3):
                    brightest = max(brightest,
                                    self.photosite_signal(spectrum,
                                                          channel))
        return highlight * self.full_well / brightest

    def capture(self, scene, lens, exposure, iso_gain=1.0):
        """Take the picture. Returns a RawImage of quantized values,
        one per pixel, each seen through its own CFA filter."""
        rng = random.Random((self.seed, exposure, iso_gain).__repr__())
        gain = (self.white_level - self.black_level) / self.full_well
        values = []
        for y in range(self.height):
            row = []
            for x in range(self.width):
                spectrum = lens.look(scene, (x + 0.5) / self.width,
                                     (y + 0.5) / self.height)
                channel = cfa_channel(x, y)
                electrons = (self.photosite_signal(spectrum, channel)
                             * exposure * self.column_gain[x])
                electrons = min(electrons, self.full_well)
                if electrons > 0.0:                    # shot noise
                    electrons += rng.gauss(0.0, math.sqrt(electrons))
                    electrons = min(max(electrons, 0.0), self.full_well)
                # read noise happens in the readout wiring, after the
                # well: it can and does swing below true black, which
                # is the whole reason the black_level offset exists
                signal = electrons + rng.gauss(0.0, self.read_noise)
                value = self.black_level + signal * gain * iso_gain
                row.append(min(self.white_level, max(0, round(value))))
            values.append(row)
        return RawImage(self.width, self.height, values,
                        bit_depth=self.bit_depth,
                        black_level=self.black_level,
                        cfa=CFA_PATTERN)
