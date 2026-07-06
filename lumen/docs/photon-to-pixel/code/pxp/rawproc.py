"""The first pipeline stages: from ADC integers to an honest mosaic.

Everything Chapter 1 built runs downhill: scene to lens to sensor to
file. This module is where the climb back starts. Its input is a
RawImage of quantized values; its output is the mosaic as linear
floats — black level gone, defective photosites repaired, scale
normalized — ready for white balance in Chapter 3.

A mosaic here is the plainest thing that works: a 2D list of floats,
mosaic[y][x], one number per photosite.
"""

from .sensor import cfa_channel


def linearize(raw):
    """Subtract the black level and scale so that 0.0 means no light
    and 1.0 means full scale.

    Deliberately does NOT clip at zero: read noise puts honest
    negative values around true black, and cutting them off would
    bias every dark-region average upward. Negative samples are
    data. They stay until output encoding.
    """
    scale = raw.white_level - raw.black_level
    return [[(value - raw.black_level) / scale for value in row]
            for row in raw.values]


def find_defects(dark, flat, hot_threshold=0.04, dead_fraction=0.5):
    """Locate defective photosites from two calibration frames,
    both already linearized.

    dark: a frame exposed to no light. Healthy sites read near 0;
    hot sites glow above the threshold.
    flat: a frame of a featureless mid-gray. Healthy sites read near
    their channel's typical level; dead sites fall far below it.
    """
    height, width = len(dark), len(dark[0])
    channel_mean = [0.0, 0.0, 0.0]
    channel_count = [0, 0, 0]
    for y in range(height):
        for x in range(width):
            channel = cfa_channel(x, y)
            channel_mean[channel] += flat[y][x]
            channel_count[channel] += 1
    for channel in range(3):
        channel_mean[channel] /= channel_count[channel]

    defects = set()
    for y in range(height):
        for x in range(width):
            if dark[y][x] > hot_threshold:
                defects.add((x, y))
            elif flat[y][x] < dead_fraction * channel_mean[cfa_channel(x, y)]:
                defects.add((x, y))
    return defects


def fix_defects(mosaic, defects):
    """Replace each defective photosite with the mean of its nearest
    same-filter neighbors.

    On a Bayer mosaic the neighbor two steps away in x or y is
    guaranteed to sit under the same color filter — so the repair
    never mixes channels. Interpolation proper starts in Chapter 4;
    this is triage.
    """
    height, width = len(mosaic), len(mosaic[0])
    fixed = [row[:] for row in mosaic]
    for x, y in defects:
        neighbors = []
        for dx, dy in ((-2, 0), (2, 0), (0, -2), (0, 2)):
            nx, ny = x + dx, y + dy
            if (0 <= nx < width and 0 <= ny < height
                    and (nx, ny) not in defects):
                neighbors.append(mosaic[ny][nx])
        if neighbors:
            total = 0.0
            for value in neighbors:
                total += value
            fixed[y][x] = total / len(neighbors)
    return fixed
