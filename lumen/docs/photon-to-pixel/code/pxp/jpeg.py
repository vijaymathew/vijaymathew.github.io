"""A baseline JPEG encoder, from scratch.

Every stage of the book funnels into this file: display-referred
RGB goes in, and the bytes of a .jpg file — readable by any decoder
on earth — come out. The machinery is 1992's: separate brightness
from color, throw away half the color, carve the rest into 8x8
blocks, describe each block in frequencies, round the frequencies
nobody can see, and entropy-code what survives. Baseline sequential
JPEG only: the patents on all of it expired long ago.
"""

import math
import struct


# ---------------------------------------------------------------
# color: brightness and color part ways

def rgb_to_ycbcr(image):
    """JFIF's change of basis, on 0..255 values: Y is the luma
    weighting of Chapter 7's luminance idea (computed on encoded
    values, as video always has), Cb and Cr are 'how blue minus
    luma' and 'how red minus luma', centered on 128. Nothing is
    lost here; the point is to gather what the eye tracks sharply
    into one plane so the next step can be rough with the other
    two."""
    luma, cb, cr = [], [], []
    for y in range(image.height):
        row_y, row_cb, row_cr = [], [], []
        for x in range(image.width):
            r, g, b = [255.0 * min(1.0, max(0.0, v))
                       for v in image.get(x, y)]
            row_y.append(0.299 * r + 0.587 * g + 0.114 * b)
            row_cb.append(128.0 - 0.168736 * r - 0.331264 * g
                          + 0.5 * b)
            row_cr.append(128.0 + 0.5 * r - 0.418688 * g
                          - 0.081312 * b)
        luma.append(row_y)
        cb.append(row_cb)
        cr.append(row_cr)
    return luma, cb, cr


def ycbcr_to_rgb(luma, cb, cr):
    """The way back, for measuring what a round trip cost."""
    from .image import Image
    height, width = len(luma), len(luma[0])
    out = Image(width, height, channels=3)
    for y in range(height):
        for x in range(width):
            yy = luma[y][x]
            u = cb[y][x] - 128.0
            v = cr[y][x] - 128.0
            out.set(x, y, [(yy + 1.402 * v) / 255.0,
                           (yy - 0.344136 * u - 0.714136 * v)
                           / 255.0,
                           (yy + 1.772 * u) / 255.0])
    return out


def subsample(plane):
    """4:2:0's whole mechanism: average each 2x2 quad to one value.
    Run on the chroma planes it discards three quarters of the
    color numbers, and Chapter 9's figure shows how little that
    matters — the eye's own chroma resolution is the lossy step
    this one hides behind."""
    out = []
    for y in range(0, len(plane), 2):
        row = []
        for x in range(0, len(plane[0]), 2):
            row.append((plane[y][x] + plane[y][x + 1]
                        + plane[y + 1][x]
                        + plane[y + 1][x + 1]) * 0.25)
        out.append(row)
    return out


def pad(plane, multiple):
    """Extend a plane to a multiple of the block size by repeating
    the last row and column — the padding is never shown, but it
    must exist for the block grid to be whole."""
    height, width = len(plane), len(plane[0])
    wide = -(-width // multiple) * multiple
    tall = -(-height // multiple) * multiple
    out = [row + [row[-1]] * (wide - width) for row in plane]
    for _ in range(tall - height):
        out.append(out[-1][:])
    return out


# ---------------------------------------------------------------
# the transform: a block described in frequencies

COSINES = [[math.cos((2 * x + 1) * u * math.pi / 16.0)
            for x in range(8)] for u in range(8)]
HALF_C = [0.5 / math.sqrt(2.0)] + [0.5] * 7


def dct8(vector):
    """One row of the DCT-II: eight samples in, eight frequency
    amounts out. Each output asks 'how much of this cosine is in
    the signal?' — the zeroth cosine is flat, so the first answer
    is the block's average, and every later one is a finer
    ripple."""
    out = []
    for u in range(8):
        total = 0.0
        for x in range(8):
            total += vector[x] * COSINES[u][x]
        out.append(HALF_C[u] * total)
    return out


def dct_block(block):
    """The 2D transform, separably: dct8 on every row, then dct8 on
    every column of the result. Sixty-four pixels become sixty-four
    coefficients; no information is lost yet — this is a rotation
    of the data, done because the *next* step is about to be lossy
    and frequencies are where human vision will not notice."""
    rows = [dct8(row) for row in block]
    out = [[0.0] * 8 for _ in range(8)]
    for u in range(8):
        column = dct8([rows[y][u] for y in range(8)])
        for v in range(8):
            out[v][u] = column[v]
    return out


# ---------------------------------------------------------------
# quantization: the loss, here and nowhere else

QUANT_LUMA = [
    16, 11, 10, 16, 24, 40, 51, 61,
    12, 12, 14, 19, 26, 58, 60, 55,
    14, 13, 16, 24, 40, 57, 69, 56,
    14, 17, 22, 29, 51, 87, 80, 62,
    18, 22, 37, 56, 68, 109, 103, 77,
    24, 35, 55, 64, 81, 104, 113, 92,
    49, 64, 78, 87, 103, 121, 120, 101,
    72, 92, 95, 98, 112, 100, 103, 99,
]

QUANT_CHROMA = [
    17, 18, 24, 47, 99, 99, 99, 99,
    18, 21, 26, 66, 99, 99, 99, 99,
    24, 26, 56, 99, 99, 99, 99, 99,
    47, 66, 99, 99, 99, 99, 99, 99,
    99, 99, 99, 99, 99, 99, 99, 99,
    99, 99, 99, 99, 99, 99, 99, 99,
    99, 99, 99, 99, 99, 99, 99, 99,
    99, 99, 99, 99, 99, 99, 99, 99,
]


def quality_tables(quality):
    """The standard's example tables — measured from how visible
    each frequency's error is — scaled by the famous 1..100 quality
    knob (the Independent JPEG Group's formula, inherited by every
    tool since). The numbers are
    divisors: at quality 50, a luma block's highest frequency is
    divided by 121 and rounded, and that rounding is the entire
    loss in a JPEG."""
    quality = min(100, max(1, quality))
    if quality < 50:
        scale = 5000 // quality
    else:
        scale = 200 - 2 * quality
    tables = []
    for base in (QUANT_LUMA, QUANT_CHROMA):
        tables.append([min(255, max(1, (value * scale + 50) // 100))
                       for value in base])
    return tables


def zigzag_order():
    """Walk the 8x8 grid by anti-diagonals, alternating direction:
    lowest frequencies first, so a typical block's many rounded-to-
    zero high frequencies pool into one long run at the end — which
    the entropy coder will spend a single symbol on."""
    order = []
    for diagonal in range(15):
        ys = range(max(0, diagonal - 7), min(7, diagonal) + 1)
        if diagonal % 2 == 0:
            ys = reversed(ys)
        for y in ys:
            order.append(y * 8 + (diagonal - y))
    return order


ZIGZAG = zigzag_order()


def quantized_block(plane, bx, by, table):
    """One 8x8 tile: level-shift to center on zero, transform,
    divide by the quantization table, round — then read out in
    zigzag order. These 64 small integers are all that survives of
    the tile."""
    block = [[plane[by * 8 + y][bx * 8 + x] - 128.0
              for x in range(8)] for y in range(8)]
    coefficients = dct_block(block)
    flat = [coefficients[i // 8][i % 8] for i in range(64)]
    return [int(math.floor(flat[i] / table[i] + 0.5))
            for i in ZIGZAG]


# ---------------------------------------------------------------
# entropy coding: spending bits where the numbers are

DC_LUMA_BITS = [0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
DC_LUMA_VALUES = list(range(12))
DC_CHROMA_BITS = [0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
DC_CHROMA_VALUES = list(range(12))

AC_LUMA_BITS = [0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125]
AC_LUMA_VALUES = [
    0x01, 0x02, 0x03, 0x00, 0x04, 0x11, 0x05, 0x12,
    0x21, 0x31, 0x41, 0x06, 0x13, 0x51, 0x61, 0x07,
    0x22, 0x71, 0x14, 0x32, 0x81, 0x91, 0xA1, 0x08,
    0x23, 0x42, 0xB1, 0xC1, 0x15, 0x52, 0xD1, 0xF0,
    0x24, 0x33, 0x62, 0x72, 0x82, 0x09, 0x0A, 0x16,
    0x17, 0x18, 0x19, 0x1A, 0x25, 0x26, 0x27, 0x28,
    0x29, 0x2A, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39,
    0x3A, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49,
    0x4A, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58, 0x59,
    0x5A, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69,
    0x6A, 0x73, 0x74, 0x75, 0x76, 0x77, 0x78, 0x79,
    0x7A, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89,
    0x8A, 0x92, 0x93, 0x94, 0x95, 0x96, 0x97, 0x98,
    0x99, 0x9A, 0xA2, 0xA3, 0xA4, 0xA5, 0xA6, 0xA7,
    0xA8, 0xA9, 0xAA, 0xB2, 0xB3, 0xB4, 0xB5, 0xB6,
    0xB7, 0xB8, 0xB9, 0xBA, 0xC2, 0xC3, 0xC4, 0xC5,
    0xC6, 0xC7, 0xC8, 0xC9, 0xCA, 0xD2, 0xD3, 0xD4,
    0xD5, 0xD6, 0xD7, 0xD8, 0xD9, 0xDA, 0xE1, 0xE2,
    0xE3, 0xE4, 0xE5, 0xE6, 0xE7, 0xE8, 0xE9, 0xEA,
    0xF1, 0xF2, 0xF3, 0xF4, 0xF5, 0xF6, 0xF7, 0xF8,
    0xF9, 0xFA,
]
AC_CHROMA_BITS = [0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119]
AC_CHROMA_VALUES = [
    0x00, 0x01, 0x02, 0x03, 0x11, 0x04, 0x05, 0x21,
    0x31, 0x06, 0x12, 0x41, 0x51, 0x07, 0x61, 0x71,
    0x13, 0x22, 0x32, 0x81, 0x08, 0x14, 0x42, 0x91,
    0xA1, 0xB1, 0xC1, 0x09, 0x23, 0x33, 0x52, 0xF0,
    0x15, 0x62, 0x72, 0xD1, 0x0A, 0x16, 0x24, 0x34,
    0xE1, 0x25, 0xF1, 0x17, 0x18, 0x19, 0x1A, 0x26,
    0x27, 0x28, 0x29, 0x2A, 0x35, 0x36, 0x37, 0x38,
    0x39, 0x3A, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48,
    0x49, 0x4A, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58,
    0x59, 0x5A, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68,
    0x69, 0x6A, 0x73, 0x74, 0x75, 0x76, 0x77, 0x78,
    0x79, 0x7A, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87,
    0x88, 0x89, 0x8A, 0x92, 0x93, 0x94, 0x95, 0x96,
    0x97, 0x98, 0x99, 0x9A, 0xA2, 0xA3, 0xA4, 0xA5,
    0xA6, 0xA7, 0xA8, 0xA9, 0xAA, 0xB2, 0xB3, 0xB4,
    0xB5, 0xB6, 0xB7, 0xB8, 0xB9, 0xBA, 0xC2, 0xC3,
    0xC4, 0xC5, 0xC6, 0xC7, 0xC8, 0xC9, 0xCA, 0xD2,
    0xD3, 0xD4, 0xD5, 0xD6, 0xD7, 0xD8, 0xD9, 0xDA,
    0xE2, 0xE3, 0xE4, 0xE5, 0xE6, 0xE7, 0xE8, 0xE9,
    0xEA, 0xF2, 0xF3, 0xF4, 0xF5, 0xF6, 0xF7, 0xF8,
    0xF9, 0xFA,
]


def huffman_codes(bits, values):
    """The standard's canonical construction: shorter codes first,
    counting up within a length, doubling at each length boundary.
    The tables above say only how many codes of each length exist
    and which symbols get them, in order — that is enough to
    rebuild every code, which is why a JPEG file ships its Huffman
    tables in under 200 bytes each."""
    codes = {}
    code = 0
    index = 0
    for length in range(1, 17):
        for _ in range(bits[length - 1]):
            codes[values[index]] = (code, length)
            code += 1
            index += 1
        code <<= 1
    return codes


class BitWriter:
    """Codes are bit strings of odd lengths; files are bytes. This
    accumulates bits most-significant first and — a JPEG oddity —
    stuffs a zero byte after every 0xFF it emits, so no code
    sequence can impersonate a marker."""

    def __init__(self):
        self.data = bytearray()
        self.accumulator = 0
        self.count = 0

    def write(self, value, length):
        self.accumulator = (self.accumulator << length) \
            | (value & ((1 << length) - 1))
        self.count += length
        while self.count >= 8:
            self.count -= 8
            byte = (self.accumulator >> self.count) & 0xFF
            self.data.append(byte)
            if byte == 0xFF:
                self.data.append(0x00)

    def flush(self):
        if self.count:
            self.write(0xFF, 8 - self.count)   # pad with 1s


def _bit_length(value):
    magnitude = abs(value)
    length = 0
    while magnitude:
        magnitude >>= 1
        length += 1
    return length


def encode_block(zigzagged, predicted_dc, dc_codes, ac_codes,
                 writer):
    """One block into the bitstream. The DC coefficient is coded as
    a difference from the previous block's (neighboring averages
    are alike — one last exploitation of image structure); each AC
    symbol is (zeros skipped, size of what follows); a special
    symbol ends the block early, and on most blocks it arrives
    early indeed. Negative values are sent as their bit pattern
    minus one, so the size field alone tells the decoder the
    sign."""
    difference = zigzagged[0] - predicted_dc
    size = _bit_length(difference)
    code, length = dc_codes[size]
    writer.write(code, length)
    if size:
        amplitude = difference if difference > 0 \
            else difference + (1 << size) - 1
        writer.write(amplitude, size)

    run = 0
    for value in zigzagged[1:]:
        if value == 0:
            run += 1
            continue
        while run > 15:
            code, length = ac_codes[0xF0]     # sixteen zeros
            writer.write(code, length)
            run -= 16
        size = _bit_length(value)
        code, length = ac_codes[run * 16 + size]
        writer.write(code, length)
        amplitude = value if value > 0 else value + (1 << size) - 1
        writer.write(amplitude, size)
        run = 0
    if run:
        code, length = ac_codes[0x00]         # end of block
        writer.write(code, length)
    return zigzagged[0]


# ---------------------------------------------------------------
# the file

def _segment(marker, payload):
    return bytes([0xFF, marker]) + struct.pack(">H",
                                               len(payload) + 2) \
        + payload


def _headers(width, height, luma_table, chroma_table):
    app0 = b"JFIF\x00" + bytes([1, 1, 0]) \
        + struct.pack(">HH", 1, 1) + bytes([0, 0])
    dqt = bytes([0]) + bytes(luma_table[i] for i in ZIGZAG) \
        + bytes([1]) + bytes(chroma_table[i] for i in ZIGZAG)
    sof = bytes([8]) + struct.pack(">HH", height, width) \
        + bytes([3,
                 1, 0x22, 0,      # Y: 2x2 sampling, table 0
                 2, 0x11, 1,      # Cb: 1x1, table 1
                 3, 0x11, 1])     # Cr: 1x1, table 1
    dht = b""
    for table_id, bits, values in (
            (0x00, DC_LUMA_BITS, DC_LUMA_VALUES),
            (0x10, AC_LUMA_BITS, AC_LUMA_VALUES),
            (0x01, DC_CHROMA_BITS, DC_CHROMA_VALUES),
            (0x11, AC_CHROMA_BITS, AC_CHROMA_VALUES)):
        dht += bytes([table_id]) + bytes(bits) + bytes(values)
    sos = bytes([3, 1, 0x00, 2, 0x11, 3, 0x11, 0, 63, 0])
    return (b"\xFF\xD8" + _segment(0xE0, app0)
            + _segment(0xDB, dqt) + _segment(0xC0, sof)
            + _segment(0xC4, dht) + _segment(0xDA, sos))


def serialize(width, height, quality, luma_blocks, cb_blocks,
              cr_blocks):
    """Assemble the file: markers, then the interleaved scan — for
    each 16x16 region, four luma blocks and the region's one Cb and
    one Cr block, every component predicting its DC from its own
    previous block."""
    luma_table, chroma_table = quality_tables(quality)
    dc_luma = huffman_codes(DC_LUMA_BITS, DC_LUMA_VALUES)
    ac_luma = huffman_codes(AC_LUMA_BITS, AC_LUMA_VALUES)
    dc_chroma = huffman_codes(DC_CHROMA_BITS, DC_CHROMA_VALUES)
    ac_chroma = huffman_codes(AC_CHROMA_BITS, AC_CHROMA_VALUES)

    writer = BitWriter()
    predicted = [0, 0, 0]
    mcus_tall = len(cb_blocks)
    mcus_wide = len(cb_blocks[0])
    for my in range(mcus_tall):
        for mx in range(mcus_wide):
            for by, bx in ((0, 0), (0, 1), (1, 0), (1, 1)):
                predicted[0] = encode_block(
                    luma_blocks[my * 2 + by][mx * 2 + bx],
                    predicted[0], dc_luma, ac_luma, writer)
            predicted[1] = encode_block(cb_blocks[my][mx],
                                        predicted[1], dc_chroma,
                                        ac_chroma, writer)
            predicted[2] = encode_block(cr_blocks[my][mx],
                                        predicted[2], dc_chroma,
                                        ac_chroma, writer)
    writer.flush()
    return (_headers(width, height, luma_table, chroma_table)
            + bytes(writer.data) + b"\xFF\xD9")


def component_blocks(plane, table):
    """Every 8x8 tile of a padded plane, quantized and zigzagged."""
    return [[quantized_block(plane, bx, by, table)
             for bx in range(len(plane[0]) // 8)]
            for by in range(len(plane) // 8)]


def encode(image, quality=90):
    """Display-referred RGB in, .jpg bytes out — the last function
    of the pipeline."""
    luma, cb, cr = rgb_to_ycbcr(image)
    luma = pad(luma, 16)
    cb = subsample(pad(cb, 16))
    cr = subsample(pad(cr, 16))
    luma_table, chroma_table = quality_tables(quality)
    return serialize(image.width, image.height, quality,
                     component_blocks(luma, luma_table),
                     component_blocks(cb, chroma_table),
                     component_blocks(cr, chroma_table))
