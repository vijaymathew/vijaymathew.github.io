"""The Image type and PNG output — the whole toolkit of Part 0.

An Image is nothing more than a grid of pixels, and a pixel is nothing
more than a short list of numbers. Every algorithm in the book reads
and writes pixels through this one type, so there is never a question
of what is really happening to the data.
"""

import struct
import zlib


class Image:
    """A picture: a grid of pixels, each a list of channel values.

    Values are floats. In a linear-light image, 0.0 is no light and
    1.0 is the brightest value we intend to represent; nothing stops
    a value from going above 1.0 or below 0.0 mid-pipeline, and that
    freedom is deliberate — clipping is a decision, made explicitly,
    at the moment we encode for output.
    """

    def __init__(self, width, height, channels=3, fill=0.0):
        self.width = width
        self.height = height
        self.channels = channels
        self.pixels = [
            [[fill] * channels for _ in range(width)]
            for _ in range(height)
        ]

    def get(self, x, y):
        """The pixel at column x, row y: a list of channel values."""
        return self.pixels[y][x]

    def set(self, x, y, values):
        """Replace the pixel at column x, row y."""
        self.pixels[y][x] = list(values)


def write_png(image, path):
    """Save an Image as an 8-bit PNG, from scratch.

    No imaging library: a PNG is a signature, a header chunk, the
    pixel rows compressed with zlib, and an end marker. Channel
    values are clipped to [0, 1] here — output encoding is exactly
    the place where clipping is honest — and scaled to 0..255.
    """
    grayscale = image.channels == 1
    rows = []
    for y in range(image.height):
        row = bytearray([0])          # 0 = "no filter" for this row
        for x in range(image.width):
            for value in image.get(x, y):
                clipped = min(1.0, max(0.0, value))
                row.append(round(clipped * 255))
        rows.append(bytes(row))
    raw = b"".join(rows)

    def chunk(tag, data):
        return (struct.pack(">I", len(data)) + tag + data
                + struct.pack(">I", zlib.crc32(tag + data)))

    header = struct.pack(">IIBBBBB", image.width, image.height,
                         8,                       # bits per channel
                         0 if grayscale else 2,   # color type
                         0, 0, 0)
    with open(path, "wb") as f:
        f.write(b"\x89PNG\r\n\x1a\n")
        f.write(chunk(b"IHDR", header))
        f.write(chunk(b"IDAT", zlib.compress(raw, 9)))
        f.write(chunk(b"IEND", b""))
