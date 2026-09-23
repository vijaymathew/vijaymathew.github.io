"""Figures for Chapter 8 — detail and noise.

Generates:
  sharpen-usm.png     a genuinely soft crop (kit lens, both warps):
                      as-is, sharpened sanely, sharpened absurdly
  deconvolve-halo.png Chapter 6's corrected CA dot, then per-channel
                      Richardson-Lucy at 4, 12 and 40 iterations,
                      then the perfect-lens dot: the iteration dial
  denoise-ladder.png  a starved, gain-boosted capture: noisy, plain
                      blur, median, bilateral, NLM — with global and
                      flat-region PSNR against the noiseless truth
                      printed
"""

import math
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from pxp import Image, colormatrix, demosaic, detail, illuminant, \
    lens, lenscorrect, rawproc, scene, tone, whitebalance, write_png
from pxp.color import xyz_to_linear_srgb
from pxp.sensor import Sensor

OUT = os.path.normpath(os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    "..", "..", "assets", "figures"))

D65 = illuminant.daylight()
DISPLAY = tone.bake_curve(tone.display_curve())


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


def crop(image, x0, y0, span, factor):
    out = Image(span * factor, span * factor)
    for y in range(out.height):
        for x in range(out.width):
            out.set(x, y, [min(1.0, max(0.0, v)) for v in
                           image.get(x0 + x // factor,
                                     y0 + y // factor)])
    return out


def to_display(mosaic, light=D65):
    gains = whitebalance.reference_gains(light)
    image = demosaic.gradient(whitebalance.apply_gains(mosaic, gains))
    matrix = colormatrix.derive_matrix(light)
    xyz = colormatrix.apply_matrix(image, matrix)
    linear = Image(xyz.width, xyz.height, channels=3)
    for y in range(xyz.height):
        for x in range(xyz.width):
            linear.set(x, y, xyz_to_linear_srgb(xyz.get(x, y)))
    return tone.apply_lut(linear, DISPLAY)


def usm_figure(size=200):
    sc = scene.starburst(D65)
    kit = lens.kit_lens()
    sensor = Sensor(size, size, seed=101)
    exposure = sensor.expose_for(sc, kit)
    mosaic = rawproc.linearize(sensor.capture(sc, kit, exposure))
    mosaic = lenscorrect.unvignette(mosaic, kit)
    gains = whitebalance.reference_gains(D65)
    image = demosaic.gradient(whitebalance.apply_gains(mosaic, gains))
    image = lenscorrect.correct_ca(image, kit)
    image = lenscorrect.correct_distortion(image, kit)
    matrix = colormatrix.derive_matrix(D65)
    xyz = colormatrix.apply_matrix(image, matrix)
    linear = Image(size, size, channels=3)
    for y in range(size):
        for x in range(size):
            linear.set(x, y, xyz_to_linear_srgb(xyz.get(x, y)))
    soft = tone.apply_lut(linear, DISPLAY)
    sane = detail.unsharp_mask(soft, amount=0.9)
    absurd = detail.unsharp_mask(soft, amount=3.5)
    panels = [crop(img, 116, 60, 64, 3)
              for img in (soft, sane, absurd)]
    write_png(side_by_side(panels), os.path.join(OUT,
                                                 "sharpen-usm.png"))


def halo_figure(size=128):
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

    registered = lenscorrect.correct_ca(analytic(fringing), fringing)
    perfect = analytic(lens.perfect())

    peak = max(perfect.get(x, y)[1] for y in range(size)
               for x in range(size))
    from pxp.color import srgb_encode

    def dot_crop(img, x0=112, y0=3, span=16, factor=8):
        out = Image(span * factor, span * factor)
        for y in range(out.height):
            for x in range(out.width):
                pixel = img.get(x0 + x // factor, y0 + y // factor)
                out.set(x, y, [srgb_encode(min(1.0, max(
                    0.0, v / peak))) for v in pixel])
        return out

    panels = [dot_crop(registered)]
    for iterations in (4, 12, 40):
        panels.append(dot_crop(detail.per_channel(
            registered, lambda plane: detail.richardson_lucy(
                plane, radius=3, sigma=0.9,
                iterations=iterations))))
    panels.append(dot_crop(perfect))
    write_png(side_by_side(panels),
              os.path.join(OUT, "deconvolve-halo.png"))


def denoise_figure(width=160, height=107):
    sc = scene.chart(D65)
    ideal = lens.perfect()
    sensor = Sensor(width, height, seed=103)
    exposure = sensor.expose_for(sc, ideal)
    starved = rawproc.linearize(sensor.capture(sc, ideal,
                                               exposure / 10,
                                               iso_gain=10.0))
    noisy = to_display(starved)

    truth = Image(width, height, channels=3)
    gains = whitebalance.reference_gains(D65)
    matrix = colormatrix.derive_matrix(D65)
    for y in range(height):
        for x in range(width):
            spectrum = ideal.look(sc, (x + 0.5) / width,
                                  (y + 0.5) / height)
            camera = [sensor.photosite_signal(spectrum, c)
                      * exposure / sensor.full_well * gains[c]
                      for c in range(3)]
            xyz = [sum(matrix[t][i] * camera[i] for i in range(3))
                   for t in range(3)]
            truth.set(x, y, xyz_to_linear_srgb(xyz))
    truth = tone.apply_lut(truth, DISPLAY)

    ladder = [("noisy", noisy)]
    ladder.append(("gaussian", detail.per_channel(
        noisy, lambda p: detail.gaussian_blur(p))))
    ladder.append(("median", detail.per_channel(
        noisy, lambda p: detail.median_filter(p))))
    ladder.append(("bilateral", detail.per_channel(
        noisy, lambda p: tone.bilateral(p, radius=3,
                                        range_sigma=0.12))))
    ladder.append(("nlm", detail.per_channel(
        noisy, lambda p: detail.nlm(p, strength=0.08))))

    def is_flat(x, y):
        # away from the chart's edges: the truth barely changes
        # between the pixel's neighbors in every channel
        for c in range(3):
            left = truth.get(max(0, x - 1), y)[c]
            right = truth.get(min(width - 1, x + 1), y)[c]
            up = truth.get(x, max(0, y - 1))[c]
            down = truth.get(x, min(height - 1, y + 1))[c]
            if abs(down - up) + abs(right - left) >= 0.02:
                return False
        return True

    flat = [(x, y) for y in range(height) for x in range(width)
            if is_flat(x, y)]

    def psnr(image, pixels):
        total, count = 0.0, 0
        for x, y in pixels:
            for c in range(3):
                total += (min(1.0, max(0.0, image.get(x, y)[c]))
                          - truth.get(x, y)[c]) ** 2
                count += 1
        return 10 * math.log10(1.0 / (total / count))

    everywhere = [(x, y) for y in range(height)
                  for x in range(width)]
    panels = []
    for name, image in ladder:
        print(f"  {name:9s} PSNR {psnr(image, everywhere):.2f} dB"
              f"   flat regions {psnr(image, flat):.2f} dB")
        panels.append(crop(image, 8, 32, 56, 3))
    write_png(side_by_side(panels),
              os.path.join(OUT, "denoise-ladder.png"))


def main():
    os.makedirs(OUT, exist_ok=True)
    usm_figure()
    halo_figure()
    denoise_figure()
    print("chapter8_detail: sharpen-usm.png, deconvolve-halo.png, "
          "denoise-ladder.png")


if __name__ == "__main__":
    main()
