"""Aging the sensor: hot and dead photosites.

Real sensors accumulate defective pixels — photosites whose dark
current is so high they read bright regardless of the scene (hot),
and photosites that no longer respond at all (dead). The positions
are fixed per physical sensor, which is exactly what makes them
correctable: they can be found once, from calibration frames, and
fixed in every subsequent shot.

The simulator inflicts them the way age does — on the finished
frame, at positions fixed by the sensor's seed. (A disclosed
simplification: real hot pixels also carry their own shot noise and
scale with exposure time; ours are a constant surplus. Chapter 2
needs their *fixedness*, not their thermodynamics.)
"""

import random


def afflict(raw, seed, hot=14, dead=5):
    """Return the frame with defects burned in, plus the positions
    (which the caller must then pretend not to know — the pipeline
    has to *find* them)."""
    rng = random.Random(seed)
    positions = set()
    while len(positions) < hot + dead:
        positions.add((rng.randrange(raw.width),
                       rng.randrange(raw.height)))
    ordered = sorted(positions)
    hot_sites = set(ordered[:hot])
    surplus = int(0.55 * (raw.white_level - raw.black_level))
    for x, y in ordered:
        if (x, y) in hot_sites:
            raw.values[y][x] = min(raw.white_level,
                                   raw.values[y][x] + surplus)
        else:
            raw.values[y][x] = raw.black_level
    return raw, positions
