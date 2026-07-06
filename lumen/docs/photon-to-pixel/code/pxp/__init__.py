"""pxp — the companion package for *The Long Way from Light to JPEG*.

Everything the book builds lives here: the Image type, the simulated
camera, and every pipeline stage, each in two forms — a plain-Python
reference implementation (the one the book explains, line by line) and
a vectorized pipeline implementation (the one fast enough to run on a
real raw file). A test asserts the two forms agree.
"""

from .image import Image, write_png
