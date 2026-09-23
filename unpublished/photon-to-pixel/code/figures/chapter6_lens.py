"""Figures for Chapter 6 — undoing the lens.

Generates:
  vignette-correction.png  a flat gray field through the kit lens,
                           before and after the falloff division
  ca-registration.png      a corner point light at 8x: through a
                           CA-only lens, after registration, and
                           through the perfect lens. Prints centroid
                           offsets for the prose.
  lens-payoff.png          the grid through the kit lens: pipeline
                           without corrections, with all three, and
                           the perfect-lens reference. Prints PSNR
                           of both against the reference.
"""

import math
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from pxp import Image, colormatrix, demosaic, illuminant, lens, \
    lenscorrect, rawproc, scene, whitebalance, write_png
from pxp.color import srgb_encode, xyz_to_linear_srgb
from pxp.sensor import Sensor

OUT = os.path.normpath(os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    "..", "..", "assets", "figures"))

D65 = illuminant.daylight()


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


def gray_panel(mosaic, factor=2):
    height, width = len(mosaic), len(mosaic[0])
    img = Image(width * factor, height * factor)
    for y in range(img.height):
        for x in range(img.width):
            v = srgb_encode(min(1.0, max(
                0.0, mosaic[y // factor][x // factor])))
            img.set(x, y, [v, v, v])
    return img


def vignette_figure():
    from pxp.reflectance import patch
    gray = scene.Scene(lambda x, y: patch(lambda w: 0.4), D65)
    kit = lens.kit_lens()
    sensor = Sensor(160, 107, seed=81)
    exposure = sensor.expose_for(gray, kit)
    mosaic = rawproc.linearize(sensor.capture(gray, kit, exposure))
    fixed = lenscorrect.unvignette(mosaic, kit)
    write_png(side_by_side([gray_panel(mosaic), gray_panel(fixed)]),
              os.path.join(OUT, "vignette-correction.png"))


def ca_figure(size=128):
    fringing = lens.Lens("ca-only", ca=0.06)
    sc = scene.point_lights(D65, radius=0.02)
    probe = Sensor(size, size, seed=1)

    def analytic(through):
        img = Image(size, size, channels=3)
        for y in range(size):
            for x in range(size):
                spectrum = through.look(sc, (x + 0.5) / size,
                                        (y + 0.5) / size)
                img.set(x, y, [probe.photosite_signal(spectrum, c)
                               for c in range(3)])
        return img

    raw = analytic(fringing)
    corrected = lenscorrect.correct_ca(raw, fringing)
    perfect = analytic(lens.perfect())

    peak = max(perfect.get(x, y)[1] for y in range(size)
               for x in range(size))

    def crop(img, x0=112, y0=3, span=16, factor=8):
        out = Image(span * factor, span * factor)
        for y in range(out.height):
            for x in range(out.width):
                pixel = img.get(x0 + x // factor, y0 + y // factor)
                out.set(x, y, [srgb_encode(min(1.0, max(
                    0.0, v / peak))) for v in pixel])
        return out

    def centroid(img, channel):
        sx, sy, sw = 0.0, 0.0, 0.0
        for y in range(4, 20):
            for x in range(112, 128):
                w = img.get(x, y)[channel]
                sx += w * x
                sy += w * y
                sw += w
        return sx / sw, sy / sw

    for name, img in (("raw", raw), ("corrected", corrected)):
        gx, gy = centroid(img, 1)
        gaps = []
        for c in (0, 2):
            cx, cy = centroid(img, c)
            gaps.append(math.hypot(cx - gx, cy - gy))
        print(f"  {name}: centroid offsets R-G {gaps[0]:.3f} px, "
              f"B-G {gaps[1]:.3f} px")
    write_png(side_by_side([crop(raw), crop(corrected),
                            crop(perfect)]),
              os.path.join(OUT, "ca-registration.png"))


def full_pipeline(sc, through, size, seed, correct, exposure):
    sensor = Sensor(size, int(size / 1.5), seed=seed)
    mosaic = rawproc.linearize(sensor.capture(sc, through, exposure))
    if correct:
        mosaic = lenscorrect.unvignette(mosaic, through)
    gains = whitebalance.reference_gains(D65)
    image = demosaic.gradient(whitebalance.apply_gains(mosaic, gains))
    if correct:
        image = lenscorrect.correct_ca(image, through)
        image = lenscorrect.correct_distortion(image, through)
    matrix = colormatrix.derive_matrix(D65)
    out = colormatrix.apply_matrix(image, matrix)
    for y in range(out.height):
        for x in range(out.width):
            out.set(x, y, [srgb_encode(min(1.0, max(0.0, v)))
                           for v in xyz_to_linear_srgb(out.get(x, y))])
    return out


def payoff_figure(size=192):
    sc = scene.grid_target(D65, thickness=0.012)
    kit = lens.kit_lens()
    # one exposure for all three captures — the photographer sets it
    # once; a coarse meter grid can miss thin lines entirely, so the
    # scan must not be repeated per lens
    meter = Sensor(size, int(size / 1.5), seed=83)
    exposure = meter.expose_for(scene.chart(D65), lens.perfect())
    reference = full_pipeline(sc, lens.perfect(), size, 83,
                              correct=False, exposure=exposure)
    warped = full_pipeline(sc, kit, size, 83, correct=False,
                           exposure=exposure)
    corrected = full_pipeline(sc, kit, size, 83, correct=True,
                              exposure=exposure)

    def psnr(image):
        total, count = 0.0, 0
        for y in range(image.height):
            for x in range(image.width):
                for c in range(3):
                    total += (image.get(x, y)[c]
                              - reference.get(x, y)[c]) ** 2
                    count += 1
        return 10 * math.log10(1.0 / (total / count))

    print(f"  vs perfect-lens reference: uncorrected "
          f"{psnr(warped):.2f} dB, corrected {psnr(corrected):.2f} dB")
    write_png(side_by_side([warped, corrected, reference]),
              os.path.join(OUT, "lens-payoff.png"))


def main():
    os.makedirs(OUT, exist_ok=True)
    vignette_figure()
    ca_figure()
    payoff_figure()
    print("chapter6_lens: vignette-correction.png, "
          "ca-registration.png, lens-payoff.png")


if __name__ == "__main__":
    main()
