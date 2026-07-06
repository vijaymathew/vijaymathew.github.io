"""From spectra to numbers a display understands.

This module is used by Chapter 1 to *show* ground-truth scenes, and
explained properly in Chapter 5. The path is always the same: a light
spectrum is integrated against the CIE observer curves to get XYZ,
and XYZ is mapped to sRGB for display.
"""

from .data import cie
from .spectrum import Spectrum, WAVELENGTH_STEP


def xyz(light):
    """CIE XYZ of a light spectrum: at each wavelength, weight the
    power by the observer's three matching curves, and sum."""
    total = [0.0, 0.0, 0.0]
    for i, power in enumerate(light.samples):
        total[0] += power * cie.X_BAR[i]
        total[1] += power * cie.Y_BAR[i]
        total[2] += power * cie.Z_BAR[i]
    return [t * WAVELENGTH_STEP for t in total]


def chromaticity(xyz_values):
    """The (x, y) chromaticity: color with brightness divided out."""
    x, y, z = xyz_values
    total = x + y + z
    return (x / total, y / total)


# sRGB primaries, D65 white point (IEC 61966-2-1). Derived in Chapter 5;
# used on faith until then.
XYZ_TO_LINEAR_SRGB = [
    [3.2406, -1.5372, -0.4986],
    [-0.9689, 1.8758, 0.0415],
    [0.0557, -0.2040, 1.0570],
]


def xyz_to_linear_srgb(xyz_values):
    out = []
    for row in XYZ_TO_LINEAR_SRGB:
        out.append(row[0] * xyz_values[0]
                   + row[1] * xyz_values[1]
                   + row[2] * xyz_values[2])
    return out


def srgb_encode(value):
    """The sRGB transfer curve: linear light in, display value out.
    Explained (at length) in Chapter 7."""
    if value <= 0.0031308:
        return 12.92 * value
    return 1.055 * value ** (1 / 2.4) - 0.055


def display(radiance, white_luminance):
    """A light spectrum as a displayable sRGB triple, brightness
    normalized so that a spectrum of luminance `white_luminance`
    renders as display white. Values outside sRGB's gamut are
    clipped, plainly and without apology; gamut mapping gets its own
    treatment in Chapter 5."""
    x, y, z = [v / white_luminance for v in xyz(radiance)]
    linear = xyz_to_linear_srgb([x, y, z])
    return [srgb_encode(min(1.0, max(0.0, channel)))
            for channel in linear]


def swatch(reflectance, light):
    """Display color of a surface under a light — the ground-truth
    answer to 'what color is this patch, really?'. A perfect white
    surface renders as display white."""
    return display(reflectance.lit_by(light), xyz(light)[1])
