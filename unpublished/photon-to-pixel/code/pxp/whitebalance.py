"""White balance: undoing the light, before anything else touches
the mosaic.

The sensor never sees surfaces — it sees surfaces times illumination,
`lit_by`, from Chapter 1. White balance is the attempt to divide the
illumination back out, and because the sensor collapsed every
spectrum to three numbers, the attempt is necessarily crude: one
multiplier per channel, chosen so that whatever the light did to a
*neutral* surface is undone. Colored surfaces are corrected only
approximately; finishing the job is Chapter 5's matrix.

Everything here works on the CFA mosaic, before demosaicing.
Section 3.3 is the argument for that order; section 3.4 is the proof.
"""

from .illuminant import incandescent
from .sensor import SENSITIVITIES, cfa_channel
from .spectrum import SAMPLE_COUNT


def neutral_response(light):
    """What the sensor reads on a perfect white surface under this
    light: one value per channel. This is the camera's 'color of the
    illuminant' — the thing every estimator below is trying to
    guess, and the thing our simulator can simply compute."""
    response = []
    for channel in range(3):
        filter_curve = SENSITIVITIES[channel].samples
        total = 0.0
        for band in range(SAMPLE_COUNT):
            total += light.samples[band] * filter_curve[band]
        response.append(total / SAMPLE_COUNT)
    return response


def gains_from_neutral(neutral):
    """Per-channel multipliers that map that neutral onto gray.
    Green is the anchor (gain 1.0), red and blue are scaled to meet
    it — the von Kries recipe every camera uses."""
    return [neutral[1] / neutral[0], 1.0, neutral[1] / neutral[2]]


def reference_gains(light):
    """Ground truth, by simulator privilege: the exactly correct
    gains for a light we know spectrally. Real cameras never have
    this; every estimator below is judged against it."""
    return gains_from_neutral(neutral_response(light))


def gains_for_temperature(kelvin):
    """Manual white balance: the photographer names the light.

    The Kelvin slider in every raw editor is this function: assume
    the illuminant is a glowing body at the stated temperature,
    compute what it would do to a neutral, and undo that. It is only
    as right as the assumption — and for daylight or fluorescents a
    filament is the wrong shape of spectrum entirely."""
    return reference_gains(incandescent(kelvin))


def gray_world(mosaic):
    """Estimator one: assume the scene, averaged over everything in
    it, is gray. Then the average of each channel's photosites *is*
    a reading of the illuminant, and we can undo it directly.
    Startlingly effective on busy scenes; catastrophically wrong on
    scenes with a dominant color, which is exactly what the figure
    shows."""
    totals = [0.0, 0.0, 0.0]
    counts = [0, 0, 0]
    for y in range(len(mosaic)):
        for x in range(len(mosaic[0])):
            channel = cfa_channel(x, y)
            totals[channel] += mosaic[y][x]
            counts[channel] += 1
    means = [totals[c] / counts[c] for c in range(3)]
    return gains_from_neutral(means)


def white_patch(mosaic, keep=0.999):
    """Estimator two: assume the brightest thing in the scene is
    white. Each channel's near-maximum (the 99.9th percentile, so a
    single hot pixel can't vote) is then a reading of the
    illuminant. Works when a highlight or white surface exists;
    fooled when the brightest thing is genuinely colored — or
    clipped."""
    per_channel = [[], [], []]
    for y in range(len(mosaic)):
        for x in range(len(mosaic[0])):
            per_channel[cfa_channel(x, y)].append(mosaic[y][x])
    brightest = []
    for values in per_channel:
        values.sort()
        brightest.append(values[int(keep * (len(values) - 1))])
    return gains_from_neutral(brightest)


def apply_gains(mosaic, gains):
    """The stage itself, and it is almost nothing: every photosite
    multiplied by its own channel's gain. Three numbers, applied to
    the mosaic — this is the entire white-balance operation. All the
    difficulty lives in choosing the three numbers."""
    height, width = len(mosaic), len(mosaic[0])
    balanced = []
    for y in range(height):
        row = []
        for x in range(width):
            row.append(mosaic[y][x] * gains[cfa_channel(x, y)])
        balanced.append(row)
    return balanced
