"""Figures for Chapter 5 — color.

Generates:
  sensitivities.png    the sensor's three filter curves beside the
                       CIE 1931 observer curves, peak-normalized:
                       similar shapes, different curves — the whole
                       chapter in one comparison
  matrix-payoff.png    the chart under D65 three ways: camera RGB
                       mislabeled as sRGB, through the fitted
                       matrix, and the spectral truth. Prints the
                       per-patch Delta-E table for the prose.
  camera-metamers.png  two surfaces built to give identical camera
                       RGB under D65 while being different colors:
                       truth pair on top (distinct), pipeline pair
                       below (indistinguishable). Prints the pair's
                       Delta-E numbers.
"""

import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from pxp import Image, color, colormatrix, illuminant, linalg, \
    whitebalance, write_png
from pxp.data import cie
from pxp.reflectance import bump, color_chart, patch
from pxp.spectrum import Spectrum, WAVELENGTHS
from _plot import Plot

OUT = os.path.normpath(os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    "..", "..", "assets", "figures"))

D65 = illuminant.daylight()

RED = [0.72, 0.28, 0.28]
GREEN = [0.24, 0.55, 0.32]
BLUE = [0.30, 0.36, 0.72]


def normalized(samples):
    peak = max(samples)
    return [s / peak for s in samples]


def curve_panel(curves):
    plot = Plot(470, 300, (380, 730), (0.0, 1.06))
    plot.axes(x_ticks=[400, 500, 600, 700], y_ticks=[0, 0.5, 1])
    for samples, tint in curves:
        plot.polyline(list(zip(WAVELENGTHS, normalized(samples))),
                      color=tint)
    return plot.image()


def sensitivities_figure():
    from pxp.sensor import SENSITIVITIES
    left = curve_panel([(SENSITIVITIES[0].samples, RED),
                        (SENSITIVITIES[1].samples, GREEN),
                        (SENSITIVITIES[2].samples, BLUE)])
    right = curve_panel([(cie.X_BAR, RED),
                         (cie.Y_BAR, GREEN),
                         (cie.Z_BAR, BLUE)])
    write_png(side_by_side([left, right]),
              os.path.join(OUT, "sensitivities.png"))


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


def encode(rgb):
    return [color.srgb_encode(min(1.0, max(0.0, v))) for v in rgb]


def grid_view(patch_colors, surround_color, patch_w=104, patch_h=84,
              gap=8, margin=14, columns=4):
    rows = (len(patch_colors) + columns - 1) // columns
    out_w = margin * 2 + columns * patch_w + (columns - 1) * gap
    out_h = margin * 2 + rows * patch_h + (rows - 1) * gap
    view = Image(out_w, out_h)
    for y in range(out_h):
        for x in range(out_w):
            view.set(x, y, surround_color)
    for index, patch_color in enumerate(patch_colors):
        col, row = index % columns, index // columns
        x0 = margin + col * (patch_w + gap)
        y0 = margin + row * (patch_h + gap)
        for y in range(y0, y0 + patch_h):
            for x in range(x0, x0 + patch_w):
                view.set(x, y, patch_color)
    return view


def pipeline_color(reflectance, light, matrix):
    """A patch through the analytic pipeline: sensor response,
    white balance, matrix, display encode."""
    gains = whitebalance.reference_gains(light)
    camera_white = whitebalance.neutral_response(light)[1] * gains[1]
    response = whitebalance.neutral_response(reflectance.lit_by(light))
    camera = [r * g / camera_white for r, g in zip(response, gains)]
    xyz = [matrix[t][0] * camera[0] + matrix[t][1] * camera[1]
           + matrix[t][2] * camera[2] for t in range(3)]
    return camera, encode(color.xyz_to_linear_srgb(xyz))


def payoff_figure():
    matrix = colormatrix.derive_matrix(D65)
    white = [v / color.xyz(D65)[1] for v in color.xyz(D65)]
    surround = patch(lambda w: 0.13)
    panels = {"mislabel": [], "matrixed": [], "truth": []}
    print("  patch        matrix-dE")
    for name, refl in color_chart():
        camera, matrixed = pipeline_color(refl, D65, matrix)
        panels["mislabel"].append(encode(camera))
        panels["matrixed"].append(matrixed)
        panels["truth"].append(color.swatch(refl, D65))
        truth_xyz = [v / color.xyz(D65)[1]
                     for v in color.xyz(refl.lit_by(D65))]
        est_xyz = [sum(matrix[t][i] * camera[i] for i in range(3))
                   for t in range(3)]
        de = color.delta_e(color.xyz_to_lab(est_xyz, white),
                           color.xyz_to_lab(truth_xyz, white))
        print(f"  {name:12s} {de:6.2f}")

    cam_surround, matrixed_surround = pipeline_color(surround, D65,
                                                     matrix)
    grids = [grid_view(panels["mislabel"], encode(cam_surround)),
             grid_view(panels["matrixed"], matrixed_surround),
             grid_view(panels["truth"], color.swatch(surround, D65))]
    write_png(side_by_side(grids), os.path.join(OUT,
                                                "matrix-payoff.png"))


def metamer_pair():
    """Two reflectances the camera cannot tell apart under D65.

    The difference spectrum is built from four narrow bumps, with
    three coefficients solved so the camera's D65 response to the
    difference is zero in all three channels — the fourth bump's
    coefficient is the free scale."""
    centers = (455.0, 510.0, 585.0, 660.0)
    bumps = [Spectrum.from_function(
        lambda w, c=c: bump(w, c, 25.0)) for c in centers]
    responses = [whitebalance.neutral_response(b.lit_by(D65))
                 for b in bumps]
    system = [[responses[j][channel] for j in range(3)]
              for channel in range(3)]
    rhs = [-responses[3][channel] for channel in range(3)]
    coefficients = linalg.solve(system, rhs) + [1.0]

    base = patch(lambda w: 0.22 + 0.33 * bump(w, 560, 90))
    delta = [sum(c * b.samples[i] for c, b in zip(coefficients, bumps))
             for i in range(len(WAVELENGTHS))]
    limit = min(min((0.98 - bs) / d if d > 0 else (0.02 - bs) / d
                    for bs, d in zip(base.samples, delta) if d != 0),
                1e9)
    scale = 0.95 * limit
    other = Spectrum([bs + scale * d
                      for bs, d in zip(base.samples, delta)])
    for value in other.samples:
        assert 0.0 <= value <= 1.0
    return base, other


def metamers_figure():
    base, other = metamer_pair()
    matrix = colormatrix.derive_matrix(D65)
    white = [v / color.xyz(D65)[1] for v in color.xyz(D65)]

    def truth_lab(refl):
        xyz = [v / color.xyz(D65)[1]
               for v in color.xyz(refl.lit_by(D65))]
        return color.xyz_to_lab(xyz, white)

    truth_de = color.delta_e(truth_lab(base), truth_lab(other))
    cam_a, out_a = pipeline_color(base, D65, matrix)
    cam_b, out_b = pipeline_color(other, D65, matrix)
    camera_gap = max(abs(a - b) for a, b in zip(cam_a, cam_b))
    print(f"  metamer pair: truth dE {truth_de:.1f}, camera RGB "
          f"differs by {camera_gap:.2e}")

    tile_w, tile_h, gap, margin = 150, 110, 8, 14
    view = Image(margin * 2 + 2 * tile_w + gap,
                 margin * 2 + 2 * tile_h + gap, fill=1.0)
    tiles = {(0, 0): color.swatch(base, D65),
             (1, 0): color.swatch(other, D65),
             (0, 1): out_a, (1, 1): out_b}
    for (col, row), tile_color in tiles.items():
        x0 = margin + col * (tile_w + gap)
        y0 = margin + row * (tile_h + gap)
        for y in range(y0, y0 + tile_h):
            for x in range(x0, x0 + tile_w):
                view.set(x, y, tile_color)
    write_png(view, os.path.join(OUT, "camera-metamers.png"))


def main():
    os.makedirs(OUT, exist_ok=True)
    sensitivities_figure()
    payoff_figure()
    metamers_figure()
    print("chapter5_color: sensitivities.png, matrix-payoff.png, "
          "camera-metamers.png")


if __name__ == "__main__":
    main()
