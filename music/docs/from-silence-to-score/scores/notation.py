#!/usr/bin/env python3
"""Compact music notation -> MusicXML.

Every engraved figure in *From Silence to Score* is generated from a
short, readable spec rather than hand-written MusicXML, so the source
of a figure is legible and the figure is reproducible. MuseScore does
the actual engraving (see make_figures.py); this module only produces
the MusicXML it eats.

The spec is a list of *measures*, each a string of whitespace-separated
tokens:

    token   := pitch-or-rest duration
    pitch   := STEP [ '#' | 'b' | 'n' ] OCTAVE          e.g. C4, F#4, Bb3
    chord   := pitch ('+' pitch)*                        e.g. C4+E4+G4
    rest    := 'r'
    duration:= ':' ('w'|'h'|'q'|'e'|'s') '.'?            (':q', ':h.', ':e')

Example — a C-major scale over two 4/4 bars:

    build_musicxml(
        ["C4:q D4:q E4:q F4:q", "G4:q A4:q B4:q C5:q"],
        clef="treble", fifths=0, beats=4, beat_type=4)

Supported: single staff, one voice, chords, ties are not modeled (keep
figures inside a bar). This is deliberately just enough for the
notation this book prints.
"""

# quarter == 4 divisions; everything else follows.
_DUR = {
    "w": (16, "whole"),
    "h": (8, "half"),
    "q": (4, "quarter"),
    "e": (2, "eighth"),
    "s": (1, "16th"),
}
_STEP_ALTER = {"#": 1, "b": -1, "n": 0}
_ALTER_ACCIDENTAL = {1: "sharp", -1: "flat", 0: "natural"}
# The order sharps and flats are added by a key signature.
_SHARP_ORDER = ["F", "C", "G", "D", "A", "E", "B"]
_FLAT_ORDER = ["B", "E", "A", "D", "G", "C", "F"]
_CLEF = {
    "treble": ("G", 2, 0),
    "bass": ("F", 4, 0),
    "alto": ("C", 3, 0),
    "tenor": ("C", 4, 0),
    "treble8vb": ("G", 2, -1),
}


def _duration(code):
    dotted = code.endswith(".")
    base = code[:-1] if dotted else code
    if base not in _DUR:
        raise ValueError(f"unknown duration {code!r}")
    divs, typ = _DUR[base]
    if dotted:
        divs = divs * 3 // 2
    return divs, typ, dotted


def _key_alters(fifths):
    """The step -> alter map a key signature applies, e.g. {'F': 1} for G major."""
    if fifths > 0:
        return {s: 1 for s in _SHARP_ORDER[:fifths]}
    if fifths < 0:
        return {s: -1 for s in _FLAT_ORDER[:-fifths]}
    return {}


def _pitch_xml(pitch, key_alters):
    """MusicXML pitch is absolute: the sounding alteration must be stated
    explicitly. An unmarked letter inherits the key signature's alteration
    and prints no accidental; a #/b/n marker overrides the key and prints."""
    step = pitch[0].upper()
    rest = pitch[1:]
    explicit = None
    if rest and rest[0] in _STEP_ALTER:
        explicit = _STEP_ALTER[rest[0]]
        rest = rest[1:]
    octave = int(rest)

    alter = explicit if explicit is not None else key_alters.get(step, 0)
    out = [f"<step>{step}</step>"]
    if alter != 0:
        out.append(f"<alter>{alter}</alter>")
    out.append(f"<octave>{octave}</octave>")
    accidental = (f"<accidental>{_ALTER_ACCIDENTAL[explicit]}</accidental>"
                  if explicit is not None else "")
    return "<pitch>" + "".join(out) + "</pitch>", accidental


def _note_xml(token, key_alters):
    head, _, dur = token.partition(":")
    if not dur:
        raise ValueError(f"token {token!r} has no :duration")
    divs, typ, dotted = _duration(dur)
    dot = "<dot/>" if dotted else ""

    if head == "r":
        return (f"<note><rest/><duration>{divs}</duration>"
                f"<type>{typ}</type>{dot}</note>")

    notes = head.split("+")
    out = []
    for i, p in enumerate(notes):
        pitch_xml, accidental = _pitch_xml(p, key_alters)
        chord = "<chord/>" if i > 0 else ""
        out.append(f"<note>{chord}{pitch_xml}<duration>{divs}</duration>"
                   f"<type>{typ}</type>{dot}{accidental}</note>")
    return "".join(out)


def build_musicxml(measures, clef="treble", fifths=0, beats=4, beat_type=4,
                   show_time=True):
    """Return a complete MusicXML document string for one staff part."""
    key_alters = _key_alters(fifths)
    sign, line, octave_change = _CLEF[clef]
    clef_xml = f"<sign>{sign}</sign><line>{line}</line>"
    if octave_change:
        clef_xml += f"<clef-octave-change>{octave_change}</clef-octave-change>"
    time_xml = (f"<time><beats>{beats}</beats>"
                f"<beat-type>{beat_type}</beat-type></time>"
                if show_time else "<time print-object='no'>"
                f"<beats>{beats}</beats><beat-type>{beat_type}</beat-type>"
                "</time>")

    body = []
    for n, measure in enumerate(measures, start=1):
        if n == 1:
            attrs = (f"<attributes><divisions>4</divisions>"
                     f"<key><fifths>{fifths}</fifths></key>"
                     f"{time_xml}"
                     f"<clef>{clef_xml}</clef></attributes>")
        else:
            attrs = ""
        notes = "".join(_note_xml(tok, key_alters) for tok in measure.split())
        body.append(f'<measure number="{n}">{attrs}{notes}</measure>')

    return (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<!DOCTYPE score-partwise PUBLIC '
        '"-//Recordare//DTD MusicXML 4.0 Partwise//EN" '
        '"http://www.musicxml.org/dtds/partwise.dtd">\n'
        '<score-partwise version="4.0">\n'
        '<part-list><score-part id="P1"><part-name/></score-part>'
        '</part-list>\n'
        '<part id="P1">\n' + "\n".join(body) + "\n</part>\n"
        '</score-partwise>\n')
