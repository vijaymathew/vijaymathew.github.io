"""Figures for Chapter 3 — white balance.

Generates:
  wb-casts.png       swatch views measured off the tungsten mosaic:
                     raw camera RGB (left) and after the known-true
                     gains (right)
  wb-estimators.png  a red-dominated scene corrected by gray-world
                     (fooled) and by white-patch (rescued by the one
                     white square)
  wb-order.png       the 3.4 experiment: ground truth, WB before
                     demosaic, WB after — same capture, same gains,
                     same algorithm, under deep (2000 K) tungsten.
                     Prints the RMSE of both orders.
  wb-flips.png       the mechanism: every photosite where channel
                     imbalance flipped the green interpolator's
                     direction decision, marked in violet. Prints
                     the flip percentage.
"""

import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from pxp import Image, illuminant, lens, rawproc, scene, whitebalance, write_png
from pxp.color import srgb_encode
from pxp.demosaic import demosaic_preview
from pxp.reflectance import color_chart, patch, step
from pxp.sensor import Sensor, cfa_channel

OUT = os.path.normpath(os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    "..", "..", "assets", "figures"))

TUNGSTEN = illuminant.incandescent()


def capture(sc, width, height, seed):
    ideal = lens.perfect()
    sensor = Sensor(width, height, seed=seed)
    exposure = sensor.expose_for(sc, ideal)
    mosaic = rawproc.linearize(sensor.capture(sc, ideal, exposure))
    return mosaic, sensor, exposure, ideal


def encode(rgb):
    return [srgb_encode(min(1.0, max(0.0, v))) for v in rgb]


def region_mean(mosaic, x0, y0, x1, y1):
    """Per-channel means of the photosites inside a pixel rectangle."""
    totals, counts = [0.0] * 3, [0] * 3
    for y in range(y0, y1):
        for x in range(x0, x1):
            c = cfa_channel(x, y)
            totals[c] += mosaic[y][x]
            counts[c] += 1
    return [totals[c] / counts[c] for c in range(3)]


def swatch_view(mosaic, patch_w=104, patch_h=84, gap=8, margin=14,
                columns=4, rows=3):
    """The chart's geometry repainted with colors *measured off the
    mosaic* — camera RGB shown as if it were sRGB, no demosaic
    needed because the patches are flat."""
    height, width = len(mosaic), len(mosaic[0])
    cell_w = (1 - 0.14 - (columns - 1) * 0.02) / columns
    cell_h = (1 - 0.14 - (rows - 1) * 0.02) / rows

    surround = encode(region_mean(
        mosaic, 0, 0, width, int(0.05 * height)))
    out_w = margin * 2 + columns * patch_w + (columns - 1) * gap
    out_h = margin * 2 + rows * patch_h + (rows - 1) * gap
    view = Image(out_w, out_h)
    for y in range(out_h):
        for x in range(out_w):
            view.set(x, y, surround)
    for row in range(rows):
        for col in range(columns):
            px0 = 0.07 + col * (cell_w + 0.02)
            py0 = 0.07 + row * (cell_h + 0.02)
            inset_x, inset_y = 0.2 * cell_w, 0.2 * cell_h
            color = encode(region_mean(
                mosaic,
                int((px0 + inset_x) * width),
                int((py0 + inset_y) * height),
                int((px0 + cell_w - inset_x) * width),
                int((py0 + cell_h - inset_y) * height)))
            x0 = margin + col * (patch_w + gap)
            y0 = margin + row * (patch_h + gap)
            for y in range(y0, y0 + patch_h):
                for x in range(x0, x0 + patch_w):
                    view.set(x, y, color)
    return view


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


def casts_figure():
    mosaic, _, _, _ = capture(scene.chart(TUNGSTEN), 96, 64, seed=41)
    gains = whitebalance.reference_gains(TUNGSTEN)
    balanced = whitebalance.apply_gains(mosaic, gains)
    panel = side_by_side([swatch_view(mosaic), swatch_view(balanced)])
    write_png(panel, os.path.join(OUT, "wb-casts.png"))


def estimators_figure():
    chart = dict(color_chart())
    brick = patch(lambda w: 0.05 + 0.65 * step(w, 590, 18))
    patches = [brick, chart["red"], brick, chart["orange"],
               chart["red"], brick, chart["red"], brick,
               brick, chart["gray-30"], chart["white"], brick]
    sc = scene.chart(TUNGSTEN, patches=patches)
    mosaic, _, _, _ = capture(sc, 96, 64, seed=43)
    fooled = whitebalance.apply_gains(
        mosaic, whitebalance.gray_world(mosaic))
    rescued = whitebalance.apply_gains(
        mosaic, whitebalance.white_patch(mosaic))
    panel = side_by_side([swatch_view(fooled), swatch_view(rescued)])
    write_png(panel, os.path.join(OUT, "wb-estimators.png"))


def scale_channels(image, gains):
    for y in range(image.height):
        for x in range(image.width):
            image.set(x, y, [v * g for v, g
                             in zip(image.get(x, y), gains)])
    return image


def crop_encoded(image, x0, y0, size, factor):
    out = Image(size * factor, size * factor)
    for y in range(out.height):
        for x in range(out.width):
            out.set(x, y, encode(
                image.get(x0 + x // factor, y0 + y // factor)))
    return out


def order_figure(size=160):
    deep_tungsten = illuminant.incandescent(2000.0)
    sc = scene.starburst(deep_tungsten)
    mosaic, sensor, exposure, ideal = capture(sc, size, size, seed=47)
    gains = whitebalance.reference_gains(deep_tungsten)

    before = demosaic_preview(whitebalance.apply_gains(mosaic, gains))
    after = scale_channels(demosaic_preview(mosaic), gains)

    truth = Image(size, size, channels=3)
    total = [0.0, 0.0]
    for y in range(size):
        for x in range(size):
            spectrum = ideal.look(sc, (x + 0.5) / size, (y + 0.5) / size)
            pixel = [sensor.photosite_signal(spectrum, c)
                     * exposure / sensor.full_well * gains[c]
                     for c in range(3)]
            truth.set(x, y, pixel)
            for i, image in enumerate((before, after)):
                for c in range(3):
                    total[i] += (image.get(x, y)[c] - pixel[c]) ** 2
    n = size * size * 3
    print(f"  RMSE vs truth — WB before: {(total[0] / n) ** 0.5:.4f}, "
          f"WB after: {(total[1] / n) ** 0.5:.4f}")

    x0 = y0 = size // 2 + 6
    panels = [crop_encoded(img, x0, y0, 52, 4)
              for img in (truth, before, after)]
    write_png(side_by_side(panels), os.path.join(OUT, "wb-order.png"))
    return mosaic, whitebalance.apply_gains(mosaic, gains)


def green_directions(mosaic):
    """The interpolator's horizontal/vertical/flat choice at every
    red and blue site — recomputed here so the flip map interrogates
    exactly the arithmetic interpolate_green uses."""
    size = len(mosaic)

    def at(x, y):
        return mosaic[min(size - 1, max(0, y))][min(size - 1, max(0, x))]

    choices = {}
    for y in range(size):
        for x in range(size):
            if cfa_channel(x, y) == 1:
                continue
            value = mosaic[y][x]
            bump_h = abs(at(x - 1, y) - at(x + 1, y)) \
                + abs(2 * value - at(x - 2, y) - at(x + 2, y))
            bump_v = abs(at(x, y - 1) - at(x, y + 1)) \
                + abs(2 * value - at(x, y - 2) - at(x, y + 2))
            choices[(x, y)] = (0 if bump_h < bump_v
                               else 1 if bump_v < bump_h else 2)
    return choices


def flips_figure(raw_mosaic, balanced_mosaic, factor=2):
    size = len(raw_mosaic)
    with_wb = green_directions(balanced_mosaic)
    without_wb = green_directions(raw_mosaic)
    flipped = {site for site in with_wb
               if with_wb[site] != without_wb[site]}
    print(f"  direction decisions flipped by imbalance: "
          f"{len(flipped)}/{len(with_wb)} = "
          f"{100 * len(flipped) / len(with_wb):.1f}%")

    violet = [0x5b / 255, 0x4b / 255, 0xc8 / 255]
    view = Image(size * factor, size * factor)
    for y in range(view.height):
        for x in range(view.width):
            px, py = x // factor, y // factor
            if (px, py) in flipped:
                view.set(x, y, violet)
            else:
                v = 0.35 * srgb_encode(min(1.0, max(
                    0.0, balanced_mosaic[py][px])))
                view.set(x, y, [v, v, v])
    write_png(view, os.path.join(OUT, "wb-flips.png"))


def main():
    os.makedirs(OUT, exist_ok=True)
    casts_figure()
    estimators_figure()
    raw_mosaic, balanced_mosaic = order_figure()
    flips_figure(raw_mosaic, balanced_mosaic)
    print("chapter3_whitebalance: wb-casts.png, wb-estimators.png, "
          "wb-order.png, wb-flips.png")


if __name__ == "__main__":
    main()
