"""The book's raw container: the least file format that could work.

A raw file, stripped of every vendor flourish, is a header saying how
to read the numbers, then the numbers. Ours is exactly that: a magic
string, six small header fields, the CFA arrangement, and the sensor
values row by row as big-endian 16-bit integers. Section 1.5 compares
this honestly against real DNG.
"""

import struct

MAGIC = b"PXRAW"
VERSION = 1


class RawImage:
    """One frame off the sensor: integer values, one per pixel, plus
    the facts needed to interpret them."""

    def __init__(self, width, height, values, bit_depth=12,
                 black_level=64, cfa="RGGB"):
        self.width = width
        self.height = height
        self.values = values                 # values[y][x], ints
        self.bit_depth = bit_depth
        self.black_level = black_level
        self.white_level = 2 ** bit_depth - 1
        self.cfa = cfa


def save(raw, path):
    header = struct.pack(">5sBHHBH4s", MAGIC, VERSION,
                         raw.width, raw.height,
                         raw.bit_depth, raw.black_level,
                         raw.cfa.encode("ascii"))
    with open(path, "wb") as f:
        f.write(header)
        for row in raw.values:
            f.write(struct.pack(f">{raw.width}H", *row))


def load(path):
    with open(path, "rb") as f:
        magic, version, width, height, bit_depth, black, cfa = (
            struct.unpack(">5sBHHBH4s", f.read(17)))
        if magic != MAGIC or version != VERSION:
            raise ValueError("not a PXRAW version-1 file")
        values = [list(struct.unpack(f">{width}H", f.read(width * 2)))
                  for _ in range(height)]
    return RawImage(width, height, values, bit_depth=bit_depth,
                    black_level=black, cfa=cfa.decode("ascii"))
