#!/usr/bin/env python3
"""Render every engraved figure in the book, deterministically.

Notation figures are described compactly (see notation.py), turned into
MusicXML, and engraved by MuseScore 4 in a single batch job. A few
diagram figures (the piano keyboard) are drawn directly with Pillow.
Output lands in ../assets/figures/<id>.png and is committed.

    python3 make_figures.py            # render everything
    python3 make_figures.py p1-staff   # only figures whose id starts so

Requires: MuseScore4.AppImage on PATH, Pillow.
"""

import json
import os
import subprocess
import sys
import tempfile

import notation

HERE = os.path.dirname(os.path.abspath(__file__))
FIGS = os.path.normpath(os.path.join(HERE, "..", "assets", "figures"))
MUSESCORE = "MuseScore4.AppImage"
DPI = 300
TRIM = 12  # px margin MuseScore leaves around trimmed content


# --- notation figures -------------------------------------------------
# id -> kwargs for notation.build_musicxml
NOTATION = {
    # Preface — the book's running example, referenced again in Parts 2-7.
    "hero-phrase": dict(measures=[
        "C4:q E4:q G4:q A4:q", "G4:h E4:h",
        "F4:q E4:q D4:q B3:q", "C4:w"]),

    # Ch. 5 — Staff, Clef, and Pitch
    "treble-lines": dict(measures=["E4:q G4:q B4:q D5:q F5:q"],
                         beats=5, show_time=False),
    "treble-spaces": dict(measures=["F4:q A4:q C5:q E5:q"],
                          beats=4, show_time=False),
    "bass-lines": dict(measures=["G2:q B2:q D3:q F3:q A3:q"],
                       clef="bass", beats=5, show_time=False),
    "bass-spaces": dict(measures=["A2:q C3:q E3:q G3:q"],
                        clef="bass", beats=4, show_time=False),
    "mc-treble": dict(measures=["C4:w"], show_time=False),
    "mc-bass": dict(measures=["C4:w"], clef="bass", show_time=False),
    "ledger-below": dict(measures=["D4:q C4:q B3:q A3:q"],
                         beats=4, show_time=False),
    "ledger-above": dict(measures=["G5:q A5:q B5:q C6:q"],
                         beats=4, show_time=False),
    "octave-cs": dict(measures=["C4:q C5:q C6:q"], beats=3, show_time=False),

    # Ch. 6 — Rhythm and Meter
    "note-values": dict(measures=[
        "C5:w",
        "C5:h C5:h",
        "C5:q C5:q C5:q C5:q",
        "C5:e C5:e C5:e C5:e C5:e C5:e C5:e C5:e",
        "C5:s C5:s C5:s C5:s C5:s C5:s C5:s C5:s "
        "C5:s C5:s C5:s C5:s C5:s C5:s C5:s C5:s"]),
    "rests": dict(measures=["r:w", "r:h r:q r:e r:e"]),
    "dotted-notes": dict(measures=["C5:h. C5:q", "C5:q. C5:e C5:h"]),
    "meter-34": dict(measures=["G4:q C5:q C5:q", "A4:q G4:h"],
                     beats=3, beat_type=4),
    "meter-68": dict(measures=[
        "C5:e D5:e E5:e F5:e G5:e A5:e",
        "G5:e E5:e C5:e G4:q. "],
        beats=6, beat_type=8),

    # Ch. 7 — Scales
    "steps": dict(measures=["C4:h D4:h", "E4:h F4:h"],
                  beats=2, beat_type=4, show_time=False),
    "c-major-scale": dict(measures=[
        "C4:q D4:q E4:q F4:q G4:q A4:q B4:q C5:q"],
        beats=8, show_time=False),
    "a-minor-scale": dict(measures=[
        "A4:q B4:q C5:q D5:q E5:q F5:q G5:q A5:q"],
        beats=8, show_time=False),
    "harmonic-minor": dict(measures=[
        "A4:q B4:q C5:q D5:q E5:q F5:q G#5:q A5:q"],
        beats=8, show_time=False),
    "melodic-minor": dict(measures=[
        "A4:q B4:q C5:q D5:q E5:q F#5:q G#5:q A5:q",
        "A5:q G5:q F5:q E5:q D5:q C5:q B4:q A4:q"],
        beats=8, show_time=False),

    # Ch. 8 — Key Signatures and the Circle of Fifths
    # Plain letters; the key signature supplies the accidentals.
    "g-major-keysig": dict(measures=[
        "G4:q A4:q B4:q C5:q D5:q E5:q F5:q G5:q"],
        fifths=1, beats=8, show_time=False),
    "f-major-keysig": dict(measures=[
        "F4:q G4:q A4:q B4:q C5:q D5:q E5:q F5:q"],
        fifths=-1, beats=8, show_time=False),
}


def render_notation(select):
    ids = [i for i in NOTATION if i.startswith(select)]
    if not ids:
        return []
    tmp = tempfile.mkdtemp(prefix="fss-fig-")
    job = []
    for fid in ids:
        xml = notation.build_musicxml(**NOTATION[fid])
        src = os.path.join(tmp, fid + ".musicxml")
        with open(src, "w") as f:
            f.write(xml)
        job.append({"in": src, "out": os.path.join(tmp, fid + ".png")})
    job_path = os.path.join(tmp, "job.json")
    with open(job_path, "w") as f:
        json.dump(job, f)

    env = dict(os.environ, QT_QPA_PLATFORM="offscreen")
    subprocess.run([MUSESCORE, "-r", str(DPI), "-T", str(TRIM),
                    "-j", job_path], env=env,
                   stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
                   check=True)

    written = []
    os.makedirs(FIGS, exist_ok=True)
    for fid in ids:
        # MuseScore appends the page number before the extension.
        page1 = os.path.join(tmp, fid + "-1.png")
        if not os.path.exists(page1):
            sys.exit(f"make_figures: MuseScore produced no output for {fid!r}")
        dest = os.path.join(FIGS, fid + ".png")
        os.replace(page1, dest)
        written.append(fid)
    return written


# --- diagram figures (Pillow) -----------------------------------------

def draw_keyboard(select):
    """One octave of a piano keyboard, C4 to C5, with the C's labelled."""
    if not "keyboard-octave".startswith(select):
        return []
    from PIL import Image, ImageDraw, ImageFont

    scale = 3  # supersample, then downscale for crisp edges
    W, H = 720 * scale, 200 * scale
    white_w = W // 8            # 8 white keys: C D E F G A B C
    black_w = int(white_w * 0.58)
    black_h = int(H * 0.62)
    ink = (36, 28, 16)

    img = Image.new("RGB", (W, H), (250, 246, 236))
    d = ImageDraw.Draw(img)

    # white keys
    for i in range(8):
        x0 = i * white_w
        d.rectangle([x0, 0, x0 + white_w, H - 1], fill=(255, 255, 255),
                    outline=ink, width=scale)
    # black keys sit after white indices 0,1,3,4,5 (C# D# F# G# A#)
    for i in (0, 1, 3, 4, 5):
        cx = (i + 1) * white_w
        d.rectangle([cx - black_w // 2, 0, cx + black_w // 2, black_h],
                    fill=(26, 22, 16), outline=ink, width=scale)

    # label the two C's
    try:
        font = ImageFont.truetype(
            "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 26 * scale)
    except OSError:
        font = ImageFont.load_default()
    for i, label in ((0, "C4"), (7, "C5")):
        x0 = i * white_w
        tb = d.textbbox((0, 0), label, font=font)
        tw = tb[2] - tb[0]
        d.text((x0 + (white_w - tw) / 2, H - 40 * scale), label,
               fill=ink, font=font)

    img = img.resize((W // scale, H // scale), Image.LANCZOS)
    os.makedirs(FIGS, exist_ok=True)
    img.save(os.path.join(FIGS, "keyboard-octave.png"))
    return ["keyboard-octave"]


def draw_circle_of_fifths(select):
    """The circle of fifths: majors outer, relative minors inner, with
    the accidental count at each of the twelve positions."""
    if not "circle-of-fifths".startswith(select):
        return []
    import math
    from PIL import Image, ImageDraw, ImageFont

    scale = 3
    S = 900 * scale
    cx = cy = S // 2
    ink = (36, 28, 16)
    faint = (168, 158, 146)
    accent = (138, 47, 62)  # the book's burgundy

    majors = ["C", "G", "D", "A", "E", "B",
              "F♯/G♭", "D♭", "A♭", "E♭",
              "B♭", "F"]
    minors = ["Am", "Em", "Bm", "F♯m", "C♯m", "G♯m",
              "E♭m", "B♭m", "Fm", "Cm", "Gm", "Dm"]
    counts = ["—", "1♯", "2♯", "3♯", "4♯", "5♯",
              "6♯/6♭", "5♭", "4♭", "3♭", "2♭",
              "1♭"]

    def font(sz, bold=False):
        path = ("/usr/share/fonts/truetype/dejavu/DejaVuSans%s.ttf"
                % ("-Bold" if bold else ""))
        try:
            return ImageFont.truetype(path, sz)
        except OSError:
            return ImageFont.load_default()

    f_major = font(50 * scale, bold=True)
    f_minor = font(32 * scale)
    f_count = font(26 * scale)

    R_count = S * 0.455
    R_major = S * 0.365
    R_minor = S * 0.235
    ring_out = S * 0.425
    ring_in = S * 0.300

    img = Image.new("RGB", (S, S), (255, 255, 255))
    d = ImageDraw.Draw(img)

    for r in (ring_out, ring_in):
        d.ellipse([cx - r, cy - r, cx + r, cy + r], outline=faint, width=scale)
    # spokes at segment boundaries
    for i in range(12):
        a = math.radians(-90 + (i + 0.5) * 30)
        d.line([cx + ring_in * math.cos(a), cy + ring_in * math.sin(a),
                cx + ring_out * math.cos(a), cy + ring_out * math.sin(a)],
               fill=faint, width=scale)

    def place(text, radius, angle_deg, fnt, fill):
        a = math.radians(angle_deg)
        x = cx + radius * math.cos(a)
        y = cy + radius * math.sin(a)
        tb = d.textbbox((0, 0), text, font=fnt)
        d.text((x - (tb[2] - tb[0]) / 2 - tb[0],
                y - (tb[3] - tb[1]) / 2 - tb[1]), text, font=fnt, fill=fill)

    for i in range(12):
        angle = -90 + i * 30  # clockwise (screen y grows downward)
        place(majors[i], R_major, angle, f_major, accent if i == 0 else ink)
        place(minors[i], R_minor, angle, f_minor, ink)
        place(counts[i], R_count, angle, f_count, faint)

    img = img.resize((S // scale, S // scale), Image.LANCZOS)
    os.makedirs(FIGS, exist_ok=True)
    img.save(os.path.join(FIGS, "circle-of-fifths.png"))
    return ["circle-of-fifths"]


def main():
    select = sys.argv[1] if len(sys.argv) > 1 else ""
    written = (render_notation(select) + draw_keyboard(select)
               + draw_circle_of_fifths(select))
    if written:
        print(f"Rendered {len(written)} figure(s): {', '.join(sorted(written))}")
    else:
        print(f"No figures matched {select!r}.")


if __name__ == "__main__":
    main()
