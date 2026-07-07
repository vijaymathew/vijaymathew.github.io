"""The JPEG encoder's promises: the transform is lossless until
quantization, the zigzag is a permutation that front-loads energy,
the file has the right skeleton, both tiers emit identical bytes —
and (when Pillow is present to act as an independent decoder) the
files actually decode, close to what was encoded."""

import io
import math
import os
import random
import sys
import unittest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from pxp import jpeg
from pxp.image import Image

try:
    import numpy as np
    import pxp.fast.jpeg
    HAVE_NUMPY = True
except ImportError:
    HAVE_NUMPY = False

try:
    import PIL.Image
    HAVE_PIL = True
except ImportError:
    HAVE_PIL = False


def gradient_image(width=40, height=24, seed=17):
    rng = random.Random(seed)
    img = Image(width, height, channels=3)
    for y in range(height):
        for x in range(width):
            base = x / (width - 1)
            img.set(x, y, [min(1.0, base + 0.1 * rng.random()),
                           base * 0.8,
                           1.0 - base])
    return img


class TestTransform(unittest.TestCase):
    def test_flat_block_is_dc_only(self):
        block = [[60.0] * 8 for _ in range(8)]
        coefficients = jpeg.dct_block(block)
        self.assertAlmostEqual(coefficients[0][0], 8 * 60.0,
                               places=9)
        for v in range(8):
            for u in range(8):
                if (u, v) != (0, 0):
                    self.assertAlmostEqual(coefficients[v][u], 0.0,
                                           places=9)

    def test_dct_preserves_energy(self):
        rng = random.Random(3)
        block = [[rng.uniform(-128, 127) for _ in range(8)]
                 for _ in range(8)]
        coefficients = jpeg.dct_block(block)
        pixels = sum(v * v for row in block for v in row)
        freqs = sum(v * v for row in coefficients for v in row)
        self.assertAlmostEqual(pixels, freqs, places=6)

    def test_zigzag_is_a_permutation_starting_low(self):
        order = jpeg.zigzag_order()
        self.assertEqual(sorted(order), list(range(64)))
        self.assertEqual(order[:10],
                         [0, 1, 8, 16, 9, 2, 3, 10, 17, 24])

    def test_quality_50_is_the_standard_table(self):
        luma, chroma = jpeg.quality_tables(50)
        self.assertEqual(luma, jpeg.QUANT_LUMA)
        self.assertEqual(chroma, jpeg.QUANT_CHROMA)

    def test_quality_dial_scales_the_loss(self):
        low_luma, _ = jpeg.quality_tables(10)
        high_luma, _ = jpeg.quality_tables(95)
        self.assertGreater(low_luma[63], jpeg.QUANT_LUMA[63])
        self.assertLess(high_luma[63], jpeg.QUANT_LUMA[63])


class TestBitstream(unittest.TestCase):
    def test_huffman_codes_are_prefix_free(self):
        for bits, values in ((jpeg.AC_LUMA_BITS,
                              jpeg.AC_LUMA_VALUES),
                             (jpeg.AC_CHROMA_BITS,
                              jpeg.AC_CHROMA_VALUES)):
            codes = jpeg.huffman_codes(bits, values)
            self.assertEqual(len(codes), 162)
            strings = sorted(format(c, f"0{n}b")
                             for c, n in codes.values())
            for a, b in zip(strings, strings[1:]):
                self.assertFalse(b.startswith(a))

    def test_every_ac_symbol_has_a_code(self):
        codes = jpeg.huffman_codes(jpeg.AC_LUMA_BITS,
                                   jpeg.AC_LUMA_VALUES)
        for run in range(16):
            for size in range(1, 11):
                self.assertIn(run * 16 + size, codes)
        self.assertIn(0x00, codes)
        self.assertIn(0xF0, codes)

    def test_writer_stuffs_after_ff(self):
        writer = jpeg.BitWriter()
        writer.write(0xFF, 8)
        writer.write(0xA5, 8)
        self.assertEqual(bytes(writer.data), b"\xff\x00\xa5")

    def test_file_skeleton(self):
        data = jpeg.encode(gradient_image(), quality=75)
        self.assertEqual(data[:2], b"\xff\xd8")
        self.assertEqual(data[-2:], b"\xff\xd9")
        for marker in (b"\xff\xe0", b"\xff\xdb", b"\xff\xc0",
                       b"\xff\xc4", b"\xff\xda"):
            self.assertIn(marker, data)


@unittest.skipUnless(HAVE_NUMPY, "pipeline tier requires NumPy")
class TestTwoTierJpeg(unittest.TestCase):
    def test_tiers_emit_identical_files(self):
        img = gradient_image()
        pixels = np.asarray(img.pixels)
        for quality in (25, 75, 95):
            self.assertEqual(jpeg.encode(img, quality),
                             pxp.fast.jpeg.encode(pixels, quality),
                             msg=f"quality {quality}")


@unittest.skipUnless(HAVE_PIL, "round trip needs an independent "
                     "decoder (Pillow)")
class TestRoundTrip(unittest.TestCase):
    def psnr(self, img, decoded):
        total, count = 0.0, 0
        for y in range(img.height):
            for x in range(img.width):
                got = decoded.getpixel((x, y))
                for c in range(3):
                    want = min(1.0, max(0.0, img.get(x, y)[c]))
                    total += (want - got[c] / 255.0) ** 2
                    count += 1
        return 10 * math.log10(1.0 / (total / count))

    def test_a_real_decoder_reads_our_file_faithfully(self):
        img = gradient_image()
        decoded = PIL.Image.open(io.BytesIO(jpeg.encode(img, 90)))
        self.assertEqual(decoded.size, (img.width, img.height))
        self.assertGreater(self.psnr(img, decoded), 30.0)

    def test_quality_ninety_beats_quality_ten(self):
        img = gradient_image()
        good = PIL.Image.open(io.BytesIO(jpeg.encode(img, 90)))
        rough = PIL.Image.open(io.BytesIO(jpeg.encode(img, 10)))
        self.assertGreater(self.psnr(img, good),
                           self.psnr(img, rough) + 3.0)

    def test_odd_sizes_survive(self):
        img = gradient_image(width=33, height=19)
        decoded = PIL.Image.open(io.BytesIO(jpeg.encode(img, 90)))
        self.assertEqual(decoded.size, (33, 19))
        self.assertGreater(self.psnr(img, decoded), 28.0)


if __name__ == "__main__":
    unittest.main()
