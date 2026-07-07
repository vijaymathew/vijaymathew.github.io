"""A tiny plotting helper for the book's figure scripts.

Not part of the pipeline and not printed in the book — but held to
the same rule as everything else: pure Python, every pixel set by
arithmetic you can read. Draws single-series line/scatter plots with
numeric tick labels from a 5x7 bitmap font.

Style follows the book's plates: paper background, violet data
series, gray for reference lines, recessive grid, ink-toned labels.
"""

import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from pxp import Image

PAPER = [0.984, 0.984, 0.988]
GRID = [0.902, 0.902, 0.918]
AXIS = [0.42, 0.42, 0.435]
INK = [0.24, 0.24, 0.25]
SERIES = [0x5b / 255, 0x4b / 255, 0xc8 / 255]
REFERENCE = [0.63, 0.63, 0.655]

FONT = {                       # 5x7, rows top-down, '#' = ink
    "0": ["#####", "#...#", "#...#", "#...#", "#...#", "#...#", "#####"],
    "1": ["..#..", ".##..", "..#..", "..#..", "..#..", "..#..", ".###."],
    "2": ["#####", "....#", "....#", "#####", "#....", "#....", "#####"],
    "3": ["#####", "....#", "....#", ".####", "....#", "....#", "#####"],
    "4": ["#...#", "#...#", "#...#", "#####", "....#", "....#", "....#"],
    "5": ["#####", "#....", "#....", "#####", "....#", "....#", "#####"],
    "6": ["#####", "#....", "#....", "#####", "#...#", "#...#", "#####"],
    "7": ["#####", "....#", "...#.", "..#..", "..#..", "..#..", "..#.."],
    "8": ["#####", "#...#", "#...#", "#####", "#...#", "#...#", "#####"],
    "9": ["#####", "#...#", "#...#", "#####", "....#", "....#", "#####"],
    ".": [".....", ".....", ".....", ".....", ".....", ".##..", ".##.."],
    "-": [".....", ".....", ".....", "####.", ".....", ".....", "....."],
    "k": ["#....", "#....", "#..#.", "#.#..", "##...", "#.#..", "#..#."],
}


def draw_text(img, x, y, text, color, scale=2):
    for ch in text:
        glyph = FONT.get(ch)
        if glyph:
            for gy, row in enumerate(glyph):
                for gx, cell in enumerate(row):
                    if cell == "#":
                        for sy in range(scale):
                            for sx in range(scale):
                                px = x + gx * scale + sx
                                py = y + gy * scale + sy
                                if 0 <= px < img.width and 0 <= py < img.height:
                                    img.set(px, py, color)
        x += 6 * scale


def label(value):
    if value >= 1000 and value == int(value) and value % 1000 == 0:
        return f"{int(value) // 1000}k"
    if value == int(value):
        return str(int(value))
    return f"{value:g}"


class Plot:
    """One panel: fixed margins, linear axes, y gridlines."""

    LEFT, RIGHT, TOP, BOTTOM = 64, 16, 14, 38

    def __init__(self, width, height, x_range, y_range):
        self.img = Image(width, height, fill=0.0)
        for y in range(height):
            for x in range(width):
                self.img.set(x, y, PAPER)
        self.x0, self.x1 = x_range
        self.y0, self.y1 = y_range
        self.px0, self.px1 = self.LEFT, width - self.RIGHT
        self.py0, self.py1 = height - self.BOTTOM, self.TOP

    def to_px(self, x, y):
        fx = (x - self.x0) / (self.x1 - self.x0)
        fy = (y - self.y0) / (self.y1 - self.y0)
        return (self.px0 + fx * (self.px1 - self.px0),
                self.py0 + fy * (self.py1 - self.py0))

    def _dot(self, cx, cy, half, color):
        for py in range(int(cy - half), int(cy + half) + 1):
            for px in range(int(cx - half), int(cx + half) + 1):
                if (self.px0 - 8 <= px <= self.px1 + 8
                        and 0 <= py < self.img.height):
                    self.img.set(px, py, color)

    def axes(self, x_ticks, y_ticks):
        for value in y_ticks:
            _, py = self.to_px(self.x0, value)
            for px in range(self.px0, self.px1 + 1):
                self.img.set(px, int(py), GRID)
        for px in range(self.px0, self.px1 + 1):        # x axis
            self.img.set(px, self.py0, AXIS)
        for py in range(self.py1, self.py0 + 1):        # y axis
            self.img.set(self.px0, py, AXIS)
        for value in x_ticks:
            px, _ = self.to_px(value, self.y0)
            for py in range(self.py0, self.py0 + 4):
                self.img.set(int(px), py, AXIS)
            text = label(value)
            draw_text(self.img, int(px) - 6 * len(text), self.py0 + 9,
                      text, INK)
        for value in y_ticks:
            _, py = self.to_px(self.x0, value)
            text = label(value)
            draw_text(self.img, self.px0 - 10 - 12 * len(text),
                      int(py) - 7, text, INK)

    def polyline(self, points, color=SERIES, thickness=2):
        pixels = [self.to_px(x, y) for x, y in points]
        for (ax, ay), (bx, by) in zip(pixels, pixels[1:]):
            steps = max(2, int(max(abs(bx - ax), abs(by - ay))) * 2)
            for i in range(steps + 1):
                t = i / steps
                self._dot(ax + t * (bx - ax), ay + t * (by - ay),
                          thickness / 2, color)

    def scatter(self, points, color=SERIES, size=8):
        for x, y in points:
            px, py = self.to_px(x, y)
            self._dot(px, py, size / 2, color)

    def image(self):
        return self.img
