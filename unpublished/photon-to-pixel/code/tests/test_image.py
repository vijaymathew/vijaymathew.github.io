"""The Image type and PNG writer behave as the book claims."""

import os
import struct
import sys
import tempfile
import unittest
import zlib

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from pxp import Image, write_png


class TestImage(unittest.TestCase):
    def test_dimensions_and_fill(self):
        img = Image(4, 3, channels=3, fill=0.25)
        self.assertEqual(len(img.pixels), 3)
        self.assertEqual(len(img.pixels[0]), 4)
        self.assertEqual(img.get(3, 2), [0.25, 0.25, 0.25])

    def test_set_copies_values(self):
        img = Image(2, 2)
        values = [0.1, 0.2, 0.3]
        img.set(0, 1, values)
        values[0] = 9.9
        self.assertEqual(img.get(0, 1), [0.1, 0.2, 0.3])


class TestWritePng(unittest.TestCase):
    def _write(self, img):
        fd, path = tempfile.mkstemp(suffix=".png")
        os.close(fd)
        try:
            write_png(img, path)
            with open(path, "rb") as f:
                return f.read()
        finally:
            os.unlink(path)

    def test_signature_and_header(self):
        img = Image(5, 7)
        data = self._write(img)
        self.assertTrue(data.startswith(b"\x89PNG\r\n\x1a\n"))
        width, height = struct.unpack(">II", data[16:24])
        self.assertEqual((width, height), (5, 7))

    def test_pixels_roundtrip_with_clipping(self):
        img = Image(2, 1)
        img.set(0, 0, [0.0, 0.5, 1.0])
        img.set(1, 0, [-0.5, 2.0, 0.25])   # out of range: must clip
        data = self._write(img)
        idat = data[data.index(b"IDAT") + 4:data.index(b"IEND") - 8]
        raw = zlib.decompress(idat)
        # one row: filter byte + 2 pixels * 3 channels
        self.assertEqual(list(raw), [0, 0, 128, 255, 0, 255, 64])


if __name__ == "__main__":
    unittest.main()
