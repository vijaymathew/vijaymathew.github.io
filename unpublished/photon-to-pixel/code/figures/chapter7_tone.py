"""Figures for Chapter 7 — tone.

Generates:
  transfer-curves.png    the sRGB transfer function against a plain
                         1/2.2 power: near-twins except at the toe
  linear-looks-wrong.png a five-stop scene shown raw-linear and
                         through the display curve
  filmic-curve.png       display value against stops above black:
                         the sRGB curve and the filmic S on the axis
                         where the S is visible
  global-tone.png        neutral curve, filmic per-channel, filmic
                         on luminance only — the saturation trade
  highlight-recovery.png an overexposed scene: the magenta
                         plateau, reconstructed, and a reference
                         exposure
  local-tone.png         a six-stop scene: global filmic alone, and
                         base-compressed with detail kept
  hdr-stack.png          a deep-shadow crop, single exposure versus
                         a three-bracket merge, pushed equally
"""

import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from pxp import Image, colormatrix, demosaic, illuminant, lens, \
    rawproc, scene, tone, whitebalance, write_png
from pxp.color import srgb_encode, xyz_to_linear_srgb
from pxp.sensor import Sensor
from _plot import Plot, REFERENCE

OUT = os.path.normpath(os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    "..", "..", "assets", "figures"))

D65 = illuminant.daylight()
W, H = 160, 107


def sweep(stops):
    return lambda x, y: 2.0 ** (stops * (x - 0.5))


def capture(sc, exposure_boost=1.0, seed=91, light=D65,
            reconstruct=False):
    sensor = Sensor(W, H, seed=seed)
    exposure = sensor.expose_for(sc, lens.perfect()) * exposure_boost
    mosaic = rawproc.linearize(sensor.capture(sc, lens.perfect(),
                                              exposure))
    gains = whitebalance.reference_gains(light)
    balanced = whitebalance.apply_gains(mosaic, gains)
    image = demosaic.gradient(balanced)
    if reconstruct:
        image = tone.reconstruct_highlights(image, gains)
    matrix = colormatrix.derive_matrix(light)
    xyz = colormatrix.apply_matrix(image, matrix)
    out = Image(xyz.width, xyz.height, channels=3)
    for y in range(xyz.height):
        for x in range(xyz.width):
            out.set(x, y, xyz_to_linear_srgb(xyz.get(x, y)))
    return out


def clamp_panel(image, factor=1):
    out = Image(image.width * factor, image.height * factor)
    for y in range(out.height):
        for x in range(out.width):
            out.set(x, y, [min(1.0, max(0.0, v))
                           for v in image.get(x // factor,
                                              y // factor)])
    return out


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


def curves_figure():
    plot = Plot(660, 340, (0.0, 1.0), (0.0, 1.02))
    plot.axes(x_ticks=[0, 0.5, 1], y_ticks=[0, 0.5, 1])
    points = [i / 300 for i in range(301)]
    plot.polyline([(v, v ** (1 / 2.2)) for v in points],
                  color=REFERENCE, thickness=1)
    plot.polyline([(v, srgb_encode(v)) for v in points])
    write_png(plot.image(), os.path.join(OUT, "transfer-curves.png"))


def linear_wrong_figure():
    sc = scene.chart(D65, brightness_at=sweep(5.0))
    linear = capture(sc)
    encoded = tone.apply_lut(linear,
                             tone.bake_curve(tone.display_curve()))
    write_png(side_by_side([clamp_panel(linear, 2),
                            clamp_panel(encoded, 2)]),
              os.path.join(OUT, "linear-looks-wrong.png"))


def filmic_plot():
    display = tone.display_curve()
    filmic = tone.filmic_curve()
    plot = Plot(660, 340, (-8.0, 0.0), (0.0, 1.02))
    plot.axes(x_ticks=[-8, -6, -4, -2, 0], y_ticks=[0, 0.5, 1])
    stops = [-8 + i / 40 for i in range(321)]
    plot.polyline([(s, display(2.0 ** s)) for s in stops],
                  color=REFERENCE, thickness=1)
    plot.polyline([(s, filmic(2.0 ** s)) for s in stops])
    write_png(plot.image(), os.path.join(OUT, "filmic-curve.png"))


def global_tone_figure():
    sc = scene.chart(D65, brightness_at=sweep(4.0))
    linear = capture(sc)
    neutral = tone.bake_curve(tone.display_curve())
    filmic = tone.bake_curve(tone.filmic_curve())
    panels = [tone.apply_lut(linear, neutral),
              tone.apply_lut(linear, filmic),
              tone.apply_lut_luminance(linear, filmic)]
    write_png(side_by_side([clamp_panel(p) for p in panels]),
              os.path.join(OUT, "global-tone.png"))


def highlight_figure():
    boost = 2.0
    sc = scene.chart(D65, brightness_at=sweep(3.0))
    blown = capture(sc, exposure_boost=2.0 ** boost)
    recovered = capture(sc, exposure_boost=2.0 ** boost,
                        reconstruct=True)
    reference = capture(sc)
    table = tone.bake_curve(tone.display_curve())
    panels = []
    for image, pull in ((blown, -boost), (recovered, -boost),
                        (reference, 0.0)):
        pulled = tone.exposure(image, pull)
        panels.append(clamp_panel(tone.apply_lut(pulled, table)))
    write_png(side_by_side(panels),
              os.path.join(OUT, "highlight-recovery.png"))


def local_tone_figure():
    sc = scene.chart(D65, brightness_at=sweep(6.0))
    linear = capture(sc)
    filmic = tone.bake_curve(tone.filmic_curve())
    global_only = tone.apply_lut(linear, filmic)
    compressed = tone.local_contrast(linear, filmic, base_gain=0.45,
                                     detail_gain=1.0)
    clarity = tone.local_contrast(linear, filmic, base_gain=1.0,
                                  detail_gain=2.2)
    write_png(side_by_side([clamp_panel(global_only),
                            clamp_panel(compressed),
                            clamp_panel(clarity)]),
              os.path.join(OUT, "local-tone.png"))


def merge_exposures(mosaics, exposures, clip=0.97):
    """Bracketed captures into one scene-referred frame.

    Each mosaic value is (scene radiance x its exposure) plus noise,
    so summing every bracket where the photosite did not clip and
    dividing by the summed exposures recovers the radiance with all
    the gathered photons voting at once. The long exposures know the
    shadows best — they collected the most light there — and the
    short one is the only surviving witness to the highlights.
    """
    height, width = len(mosaics[0]), len(mosaics[0][0])
    merged = []
    for y in range(height):
        row = []
        for x in range(width):
            total, weight = 0.0, 0.0
            for mosaic, exposure in zip(mosaics, exposures):
                value = mosaic[y][x]
                if value < clip:
                    total += value
                    weight += exposure
            row.append(total / weight if weight else
                       mosaics[0][y][x] / exposures[0])
        merged.append(row)
    return merged


def hdr_figure():
    sc = scene.chart(D65, brightness_at=sweep(7.0))
    sensor = Sensor(W, H, seed=97)
    base = sensor.expose_for(sc, lens.perfect())
    brackets, exposures = [], []
    for stops in (0.0, 2.0, 4.0):
        mosaic = rawproc.linearize(sensor.capture(
            sc, lens.perfect(), base * 2.0 ** stops))
        brackets.append(mosaic)
        exposures.append(2.0 ** stops)
    single = brackets[0]
    merged = merge_exposures(brackets, exposures)

    def spread(mosaic):
        # green sites only, one narrow vertical strip inside the
        # dark-side white patch: the sweep runs horizontally, so a
        # strip isolates noise from both structure and gradient
        values = [mosaic[y][x] for y in range(12, 30, 2)
                  for x in (15,)]
        mean = sum(values) / len(values)
        return (sum((v - mean) ** 2 for v in values)
                / len(values)) ** 0.5 / mean
    print(f"  shadow noise (relative): single "
          f"{spread(single):.3f}, merged {spread(merged):.3f}")

    def shadow_crop(mosaic, push_stops, x0=6, y0=40, span=40,
                    factor=4):
        out = Image(span * factor, span * factor)
        for y in range(out.height):
            for x in range(out.width):
                v = mosaic[y0 + y // factor][x0 + x // factor] \
                    * 2.0 ** push_stops
                e = srgb_encode(min(1.0, max(0.0, v)))
                out.set(x, y, [e, e, e])
        return out

    write_png(side_by_side([shadow_crop(single, 3.2),
                            shadow_crop(merged, 3.2)]),
              os.path.join(OUT, "hdr-stack.png"))


def main():
    os.makedirs(OUT, exist_ok=True)
    curves_figure()
    linear_wrong_figure()
    filmic_plot()
    global_tone_figure()
    highlight_figure()
    local_tone_figure()
    hdr_figure()
    print("chapter7_tone: transfer-curves, linear-looks-wrong, "
          "filmic-curve, global-tone, highlight-recovery, "
          "local-tone, hdr-stack")


if __name__ == "__main__":
    main()
