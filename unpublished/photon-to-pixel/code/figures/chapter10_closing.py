"""Figures for Chapter 10 — closing the loop on a real raw file.

Needs rawpy, Pillow, and the sample NEF (a public-domain NASA
photograph of an aurora from the ISS, the file rawpy itself tests
against). The NEF is fetched into code/data/ on first run.

Generates:
  closing-arrival.png  the mosaic as the file delivers it: the
                       whole frame's raw values as brightness, and
                       an enlarged crop in filter colors — Chapter
                       1's final figure, photographed by a real
                       camera this time
  closing-render.png   our develop() against the rendering the
                       file carries (dcraw's, in the embedded
                       preview), full frame
  closing-crops.png    three regions at 1:1 — aurora curtains, the
                       crimson band with stars, the station
                       structure — ours over dcraw's

Prints the numbers quoted in the prose: estimator gains vs the
camera's, the out-of-gamut census, sizes and timing.
"""

import io
import math
import os
import sys
import time
import urllib.request

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

import numpy as np
import PIL.Image
import rawpy

from pxp import write_png
from pxp.color import XYZ_TO_LINEAR_SRGB
from pxp.colormatrix import matrix_from_profile
from pxp.fast import colormatrix, demosaic, develop, resample, \
    whitebalance
from pxp.fast.convert import from_array

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.normpath(os.path.join(HERE, "..", "..", "assets",
                                    "figures"))
DATA = os.path.normpath(os.path.join(HERE, "..", "data"))
NEF = os.path.join(DATA, "iss030e122639.NEF")
NEF_URL = ("https://github.com/letmaik/rawpy/raw/main/test/"
           "iss030e122639.NEF")


def fetch():
    if not os.path.exists(NEF):
        os.makedirs(DATA, exist_ok=True)
        print(f"  fetching sample NEF from {NEF_URL}")
        urllib.request.urlretrieve(NEF_URL, NEF)


def save(array, name):
    write_png(from_array(np.clip(array, 0.0, 1.0)),
              os.path.join(OUT, name))


def shrink(array, width):
    height = round(array.shape[0] * width / array.shape[1])
    return np.stack([resample.resample(array[:, :, c], width,
                                       height)
                     for c in range(3)], axis=-1)


def beside(panels, gap=10):
    height = max(p.shape[0] for p in panels)
    width = sum(p.shape[1] for p in panels) + gap * (len(panels) - 1)
    out = np.ones((height, width, 3))
    x = 0
    for panel in panels:
        out[:panel.shape[0], x:x + panel.shape[1]] = panel
        x += panel.shape[1] + gap
    return out


def stack(rows, gap=10):
    width = max(r.shape[1] for r in rows)
    height = sum(r.shape[0] for r in rows) + gap * (len(rows) - 1)
    out = np.ones((height, width, 3))
    y = 0
    for row in rows:
        out[y:y + row.shape[0], :row.shape[1]] = row
        y += row.shape[0] + gap
    return out


def arrival_figure(mosaic):
    boosted = np.clip(mosaic * 6.0, 0.0, 1.0)
    small = resample.resample(boosted, 560, 372)
    left = np.stack([small] * 3, axis=-1)

    # a crop at the aurora's edge, each photosite in its filter's
    # color, 14x
    x0, y0, span, factor = 200, 1212, 26, 14
    tile = np.zeros((span * factor, span * factor, 3))
    for y in range(span * factor):
        for x in range(span * factor):
            sy, sx = y0 + y // factor, x0 + x // factor
            value = boosted[sy, sx]
            channel = 1 if (sy % 2) != (sx % 2) else (0 if sy % 2
                                                      == 0 else 2)
            tile[y, x, channel] = value
    save(beside([left, tile]), "closing-arrival.png")


def compare_figures(ours, theirs):
    save(beside([shrink(ours, 420), shrink(theirs, 420)]),
         "closing-render.png")

    regions = [(2600, 1250), (2000, 1800), (2000, 2560)]
    span = 272
    offset = (14, 6)
    top, bottom = [], []
    for x, y in regions:
        top.append(ours[y:y + span, x:x + span])
        bottom.append(theirs[y - offset[1]:y - offset[1] + span,
                             x - offset[0]:x - offset[0] + span])
    save(stack([beside(top), beside(bottom)]), "closing-crops.png")


def report_numbers(mosaic, gains, profile):
    r = mosaic[0::2, 0::2].mean()
    g = (mosaic[0::2, 1::2].mean() + mosaic[1::2, 0::2].mean()) / 2
    b = mosaic[1::2, 1::2].mean()
    print(f"  camera gains      ({gains[0]:.2f}, 1.00, "
          f"{gains[2]:.2f})")
    print(f"  gray-world gains  ({g / r:.2f}, 1.00, {g / b:.2f})")
    rp = np.percentile(mosaic[0::2, 0::2], 99.9)
    gp = (np.percentile(mosaic[0::2, 1::2], 99.9)
          + np.percentile(mosaic[1::2, 0::2], 99.9)) / 2
    bp = np.percentile(mosaic[1::2, 1::2], 99.9)
    print(f"  white-patch gains ({gp / rp:.2f}, 1.00, "
          f"{gp / bp:.2f})")

    balanced = whitebalance.apply_gains(mosaic, gains)
    image = demosaic.gradient(balanced)
    xyz = colormatrix.apply_matrix(image,
                                   matrix_from_profile(profile))
    linear = colormatrix.apply_matrix(xyz, XYZ_TO_LINEAR_SRGB)
    any_negative = (linear < 0.0).any(axis=-1).mean() * 100
    out_of_gamut = (linear < -0.002).any(axis=-1).mean() * 100
    print(f"  pixels with a negative channel: {any_negative:.1f}%"
          f"   beyond noise (< -0.002): {out_of_gamut:.2f}%"
          f"   deepest: {linear.min():.2f}")


def main():
    os.makedirs(OUT, exist_ok=True)
    fetch()
    mosaic, gains, profile = develop.load(NEF)
    report_numbers(mosaic, gains, profile)
    arrival_figure(mosaic)

    start = time.perf_counter()
    data = develop.develop(NEF, stops=1.5)
    elapsed = time.perf_counter() - start
    ours = np.asarray(PIL.Image.open(io.BytesIO(data)),
                      dtype=float) / 255.0
    thumb = rawpy.imread(NEF).extract_thumb()
    theirs = np.asarray(PIL.Image.open(io.BytesIO(thumb.data)),
                        dtype=float) / 255.0
    print(f"  develop(): {elapsed:.0f} s for "
          f"{ours.shape[1]}x{ours.shape[0]}, "
          f"{len(data):,} bytes (embedded render: "
          f"{len(thumb.data):,} bytes)")
    compare_figures(ours, theirs)
    print("chapter10_closing: closing-arrival.png, "
          "closing-render.png, closing-crops.png")


if __name__ == "__main__":
    main()
