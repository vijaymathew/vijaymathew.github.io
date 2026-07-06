"""The color matrix: from camera RGB to CIE XYZ.

White balance made neutrals neutral; this stage makes colors mean
something. Camera RGB and human vision weigh the spectrum with
different curves, so no reshuffling of camera values reproduces what
an observer saw — but a 3x3 matrix can come close, and this module
derives that matrix the way a profiling lab would: photograph a
chart whose true colors are known, then solve for the matrix that
maps the camera's readings onto the truth with least squared error.

Our simulator supplies both sides of that equation from Chapter 1's
spectra. The derivation is therefore a genuine estimation with a
genuine residual — the chapter measures it — not a lookup of the
answer we typed in.
"""

from . import color, linalg, whitebalance
from .reflectance import color_chart


def training_pairs(light):
    """One (camera RGB, true XYZ) pair per chart patch, both sides
    anchored to a perfect white under the same light: the camera
    side is white-balanced and scaled so a perfect reflector reads
    green = 1, the XYZ side scaled so it reads Y = 1."""
    gains = whitebalance.reference_gains(light)
    camera_white = whitebalance.neutral_response(light)[1] * gains[1]
    xyz_white = color.xyz(light)[1]
    pairs = []
    for _, reflectance in color_chart():
        radiance = reflectance.lit_by(light)
        response = whitebalance.neutral_response(radiance)
        camera = [r * g / camera_white
                  for r, g in zip(response, gains)]
        truth = [v / xyz_white for v in color.xyz(radiance)]
        pairs.append((camera, truth))
    return pairs


def derive_matrix(light):
    """Fit the 3x3 camera-to-XYZ matrix by least squares over the
    chart: three independent fits, one per XYZ component, each a
    three-unknown normal-equations system for our tiny solver.

    Twelve patches, nine unknowns — an overdetermined fit whose
    leftover error is the subject of section 5.2: no 3x3 can be
    exact, because the camera and the eye disagree about which
    spectra match."""
    pairs = training_pairs(light)
    normal = [[0.0] * 3 for _ in range(3)]
    moments = [[0.0] * 3 for _ in range(3)]      # one row per X/Y/Z
    for camera, truth in pairs:
        for i in range(3):
            for j in range(3):
                normal[i][j] += camera[i] * camera[j]
            for t in range(3):
                moments[t][i] += camera[i] * truth[t]
    return [linalg.solve(normal, moments[t]) for t in range(3)]


def apply_matrix(image, matrix):
    """The stage itself: every pixel through the same 3x3. Input is
    white-balanced camera RGB (Chapters 3-4); output is CIE XYZ,
    ready for the display transform of section 5.3."""
    from .image import Image
    out = Image(image.width, image.height, channels=3)
    for y in range(image.height):
        for x in range(image.width):
            r, g, b = image.get(x, y)
            out.set(x, y, [matrix[0][0] * r + matrix[0][1] * g
                           + matrix[0][2] * b,
                           matrix[1][0] * r + matrix[1][1] * g
                           + matrix[1][2] * b,
                           matrix[2][0] * r + matrix[2][1] * g
                           + matrix[2][2] * b])
    return out


# sRGB primaries and white, as chromaticities (IEC 61966-2-1)
SRGB_PRIMARIES = [(0.64, 0.33), (0.30, 0.60), (0.15, 0.06)]
SRGB_WHITE = (0.3127, 0.3290)


def derive_srgb_matrix():
    """The XYZ-to-linear-sRGB matrix, from first principles.

    The sRGB standard defines its three primaries and its white
    point as chromaticities. That is enough: each primary's XYZ is
    its chromaticity times an unknown brightness, and the three
    brightnesses are pinned by requiring the primaries to sum to the
    white point. One small solve, one matrix inversion — and the
    constant used on faith since Chapter 1 stops being on faith.
    """
    columns = [(x / y, 1.0, (1 - x - y) / y)
               for x, y in SRGB_PRIMARIES]
    white = (SRGB_WHITE[0] / SRGB_WHITE[1], 1.0,
             (1 - SRGB_WHITE[0] - SRGB_WHITE[1]) / SRGB_WHITE[1])
    rgb_to_xyz_rows = [[columns[j][i] for j in range(3)]
                       for i in range(3)]
    scales = linalg.solve(rgb_to_xyz_rows, list(white))
    scaled = [[rgb_to_xyz_rows[i][j] * scales[j] for j in range(3)]
              for i in range(3)]
    # invert by solving against the identity, column by column
    inverse_columns = [linalg.solve(scaled, [1.0 if i == c else 0.0
                                             for i in range(3)])
                       for c in range(3)]
    return [[inverse_columns[c][r] for c in range(3)]
            for r in range(3)]
