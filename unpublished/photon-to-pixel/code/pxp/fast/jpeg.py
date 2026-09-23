"""JPEG — pipeline tier. Twin of pxp.jpeg's block mathematics.

Color, subsampling, the DCT and quantization are whole-array
arithmetic here, in the reference tier's accumulation order. The
bitstream itself is not twinned — entropy coding is inherently one
symbol after another — so this tier hands its integer blocks to
the reference serializer, and the test asserts the resulting FILES
are identical, byte for byte.
"""

import numpy as np

from ..jpeg import COSINES, HALF_C, ZIGZAG, quality_tables, \
    serialize


def rgb_to_ycbcr(pixels):
    scaled = 255.0 * np.clip(pixels, 0.0, 1.0)
    r = scaled[:, :, 0]
    g = scaled[:, :, 1]
    b = scaled[:, :, 2]
    luma = 0.299 * r + 0.587 * g + 0.114 * b
    cb = 128.0 - 0.168736 * r - 0.331264 * g + 0.5 * b
    cr = 128.0 + 0.5 * r - 0.418688 * g - 0.081312 * b
    return luma, cb, cr


def subsample(plane):
    return (plane[0::2, 0::2] + plane[0::2, 1::2]
            + plane[1::2, 0::2] + plane[1::2, 1::2]) * 0.25


def pad(plane, multiple):
    height, width = plane.shape
    wide = -(-width // multiple) * multiple
    tall = -(-height // multiple) * multiple
    return np.pad(plane, ((0, tall - height), (0, wide - width)),
                  mode="edge")


def dct_blocks(blocks):
    """blocks: (..., 8, 8) level-shifted samples. Two separable
    passes, each accumulating its eight taps in reference order."""
    rows = np.zeros_like(blocks)
    for u in range(8):
        total = np.zeros(blocks.shape[:-1])
        for x in range(8):
            total = total + blocks[..., x] * COSINES[u][x]
        rows[..., u] = HALF_C[u] * total
    out = np.zeros_like(blocks)
    for v in range(8):
        total = np.zeros(blocks.shape[:-2] + (8,))
        for y in range(8):
            total = total + rows[..., y, :] * COSINES[v][y]
        out[..., v, :] = HALF_C[v] * total
    return out


def component_blocks(plane, table):
    tall, wide = plane.shape
    blocks = plane.reshape(tall // 8, 8, wide // 8, 8) \
        .transpose(0, 2, 1, 3) - 128.0
    flat = dct_blocks(blocks).reshape(tall // 8, wide // 8, 64)
    quantized = np.floor(flat / np.asarray(table) + 0.5).astype(int)
    return quantized[:, :, ZIGZAG]


def encode(pixels, quality=90):
    height, width = pixels.shape[:2]
    luma, cb, cr = rgb_to_ycbcr(pixels)
    luma = pad(luma, 16)
    cb = subsample(pad(cb, 16))
    cr = subsample(pad(cr, 16))
    luma_table, chroma_table = quality_tables(quality)
    return serialize(
        width, height, quality,
        component_blocks(luma, luma_table).tolist(),
        component_blocks(cb, chroma_table).tolist(),
        component_blocks(cr, chroma_table).tolist())
