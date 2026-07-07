"""Figures for Chapter 9 — output encoding.

Generates:
  resample-up.png      one starburst crop upscaled 8x: nearest,
                       bilinear, lanczos — blocks, blur, ringing
  downscale-alias.png  a starburst shrunk 4x: nearest (moire) against
                       lanczos (clean), pixels shown 4x
  dct-basis.png        the 64 cosine patterns every 8x8 block is
                       described in
  chroma-subsample.png the chart with chroma at quarter resolution
                       (invisible) and luma at quarter resolution
                       (ruinous), PSNR printed
  jpeg-ladder.png      the chart through our encoder at quality
                       90 / 50 / 10, decoded by Pillow, with file
                       sizes and PSNR printed

Also prints the sharpen-order measurement quoted in the prose.
"""

import io
import math
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

import PIL.Image

from pxp import Image, colormatrix, demosaic, detail, illuminant, \
    jpeg, lens, rawproc, resample, scene, tone, whitebalance, \
    write_png
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


def planes_of(image):
    return [[[image.get(x, y)[c] for x in range(image.width)]
             for y in range(image.height)] for c in range(3)]


def image_of(planes):
    height, width = len(planes[0]), len(planes[0][0])
    out = Image(width, height, channels=3)
    for y in range(height):
        for x in range(width):
            out.set(x, y, [planes[c][y][x] for c in range(3)])
    return out


def resize(image, width, height, method):
    return image_of([resample.resample(p, width, height, method)
                     for p in planes_of(image)])


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


def render_starburst(size=320):
    sc = scene.starburst(D65)
    ideal = lens.perfect()
    sensor = Sensor(size, size, seed=91)
    exposure = sensor.expose_for(sc, ideal)
    mosaic = rawproc.linearize(sensor.capture(sc, ideal, exposure))
    return to_display(mosaic)


def analytic_render(sc, width, height, x0=0, y0=0,
                    full_width=None, full_height=None):
    full_width = full_width or width
    full_height = full_height or height
    ideal = lens.perfect()
    probe = Sensor(full_width, full_height, seed=1)
    exposure = probe.expose_for(sc, ideal)
    gains = whitebalance.reference_gains(D65)
    matrix = colormatrix.derive_matrix(D65)
    out = Image(width, height, channels=3)
    for y in range(height):
        for x in range(width):
            spectrum = ideal.look(sc,
                                  (x0 + x + 0.5) / full_width,
                                  (y0 + y + 0.5) / full_height)
            camera = [probe.photosite_signal(spectrum, c)
                      * exposure / probe.full_well * gains[c]
                      for c in range(3)]
            xyz = [sum(matrix[t][i] * camera[i] for i in range(3))
                   for t in range(3)]
            out.set(x, y, xyz_to_linear_srgb(xyz))
    return tone.apply_lut(out, DISPLAY)


def analytic_chart(width=160, height=107):
    return analytic_render(scene.chart(D65), width, height)


def psnr(image, other):
    total, count = 0.0, 0
    for y in range(image.height):
        for x in range(image.width):
            a = image.get(x, y)
            b = other.get(x, y)
            for c in range(3):
                gap = (min(1.0, max(0.0, a[c]))
                       - min(1.0, max(0.0, b[c])))
                total += gap * gap
                count += 1
    return 10 * math.log10(1.0 / (total / count))


def upscale_figure(big):
    small = resize(big, 80, 80, "lanczos")
    piece = crop(small, 10, 10, 24, 1)
    panels = [resize(piece, 192, 192, method)
              for method in ("nearest", "bilinear", "lanczos")]
    write_png(side_by_side(panels),
              os.path.join(OUT, "resample-up.png"))


def alias_figure(big):
    panels = []
    for method in ("nearest", "lanczos"):
        small = resize(big, 80, 80, method)
        panels.append(crop(small, 0, 0, 80, 4))
    write_png(side_by_side(panels),
              os.path.join(OUT, "downscale-alias.png"))


def sharpen_order_measure(big):
    def bite(image):
        total, count = 0.0, 0
        for y in range(image.height):
            for x in range(image.width - 1):
                total += abs(tone.luminance(image.get(x + 1, y))
                             - tone.luminance(image.get(x, y)))
                count += 1
        return total / count

    plain = resize(big, 80, 80, "lanczos")
    after = detail.unsharp_mask(plain, amount=0.8)
    before = resize(detail.unsharp_mask(big, amount=0.8),
                    80, 80, "lanczos")
    print(f"  edge bite at 80px: plain {bite(plain):.4f}, "
          f"sharpen-then-shrink {bite(before):.4f}, "
          f"shrink-then-sharpen {bite(after):.4f}")


def dct_basis_figure(cell=40, gap=4):
    span = 8 * cell + 7 * gap
    out = Image(span, span, channels=1, fill=1.0)
    for v in range(8):
        for u in range(8):
            for y in range(cell):
                for x in range(cell):
                    value = 0.5 + 0.5 \
                        * jpeg.COSINES[u][x * 8 // cell] \
                        * jpeg.COSINES[v][y * 8 // cell]
                    out.set(u * (cell + gap) + x,
                            v * (cell + gap) + y, [value])
    write_png(out, os.path.join(OUT, "dct-basis.png"))


def chroma_figure(chart):
    width, height = chart.width, chart.height
    luma, cb, cr = jpeg.rgb_to_ycbcr(chart)

    def quarter(plane):
        small = jpeg.subsample(jpeg.pad(plane, 2))
        return resample.resample(small, width, height, "bilinear")

    chroma_down = jpeg.ycbcr_to_rgb(luma, quarter(cb), quarter(cr))
    luma_down = jpeg.ycbcr_to_rgb(quarter(luma), cb, cr)
    print(f"  chroma at quarter resolution: PSNR "
          f"{psnr(chart, chroma_down):.2f} dB")
    print(f"  luma at quarter resolution:   PSNR "
          f"{psnr(chart, luma_down):.2f} dB")
    panels = [crop(img, 8, 32, 56, 3)
              for img in (chart, chroma_down, luma_down)]
    write_png(side_by_side(panels),
              os.path.join(OUT, "chroma-subsample.png"))


def jpeg_ladder_figure(source):
    raw_bytes = source.width * source.height * 3
    print(f"  uncompressed: {raw_bytes} bytes")
    panels = [crop(source, 8, 32, 56, 3)]
    for quality in (90, 50, 10):
        data = jpeg.encode(source, quality)
        decoded = PIL.Image.open(io.BytesIO(data))
        back = Image(source.width, source.height, channels=3)
        for y in range(source.height):
            for x in range(source.width):
                back.set(x, y, [v / 255.0
                                for v in decoded.getpixel((x, y))])
        print(f"  quality {quality:2d}: {len(data):6d} bytes "
              f"({raw_bytes / len(data):5.1f}:1), "
              f"PSNR {psnr(source, back):.2f} dB")
        panels.append(crop(back, 8, 32, 56, 3))
    write_png(side_by_side(panels),
              os.path.join(OUT, "jpeg-ladder.png"))


def main():
    os.makedirs(OUT, exist_ok=True)
    chart = analytic_chart()
    big = render_starburst()
    upscale_figure(big)
    alias_figure(big)
    sharpen_order_measure(big)
    dct_basis_figure()
    chroma_figure(chart)
    jpeg_ladder_figure(chart)
    print("chapter9_encoding: resample-up.png, downscale-alias.png,"
          " dct-basis.png, chroma-subsample.png, jpeg-ladder.png")


if __name__ == "__main__":
    main()
