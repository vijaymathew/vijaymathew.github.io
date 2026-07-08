#!/usr/bin/env python3
"""Compact music notation -> MusicXML.

Every engraved figure in *From Silence to Score* is generated from a
short, readable spec rather than hand-written MusicXML, so the source
of a figure is legible and the figure is reproducible. MuseScore does
the actual engraving (see make_figures.py); this module only produces
the MusicXML it eats.

The spec is a list of *measures*, each a string of whitespace-separated
tokens:

    token   := note | direction
    note    := (pitch | chord | rest) duration flags*
    pitch   := STEP [ '#' | 'b' | 'n' ] OCTAVE          e.g. C4, F#4, Bb3
    chord   := pitch ('+' pitch)*                        e.g. C4+E4+G4
    rest    := 'r'
    duration:= ':' ('w'|'h'|'q'|'e'|'s') '.'?            (':q', ':h.', ':e')
    flags   := articulation/slur/tie chars after the duration:
                 !  staccato   >  accent   ^  marcato   _  tenuto
                 ;  fermata    (  slur start   )  slur stop
                 ~  tie into the next (same-pitch) note
    direction := '@' marking, standing between notes (no duration):
                 @p @pp @mp @mf @f @ff @sf @sfz @fp   dynamics
                 @<  crescendo hairpin start   @>  diminuendo start
                 @|  hairpin stop
                 @q=NN  metronome mark (quarter = NN)
                 @rit @accel @atempo   tempo words
    harmony   := '$' chord symbol, attached to the note that follows:
                 $C  $Cm  $C7  $Cmaj7  $Cm7  $Cdim  $Caug   (root+quality)
                 $Bb  $F#m   (root may carry # or b)
                 $C/E  $G/B   (slash bass for inversions)

Example — a C-major scale over two 4/4 bars:

    build_musicxml(
        ["C4:q D4:q E4:q F4:q", "G4:q A4:q B4:q C5:q"],
        clef="treble", fifths=0, beats=4, beat_type=4)

Example — a slurred phrase that grows from p to f:

    build_musicxml(["@p C5:q( D5:q @< E5:q G5:q", "@f @| C6:h A5:h)"])

Supported: single staff, one voice, chords, articulations, slurs, and
directions. Ties are not modeled (keep figures inside a bar). This is
deliberately just enough for the notation this book prints.
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


_ARTICULATIONS = {"!": "staccato", ">": "accent",
                  "^": "strong-accent", "_": "tenuto"}
_DYNAMICS = {"pp", "ppp", "p", "mp", "mf", "f", "ff", "fff",
             "sf", "sfz", "fp", "fz"}
_TEMPO_WORDS = {"rit": "rit.", "accel": "accel.", "atempo": "a tempo"}


def _direction_xml(token):
    """A '@' token -> a MusicXML <direction> (dynamic, hairpin, or tempo)."""
    body = token[1:]
    if body in _DYNAMICS:
        return ('<direction placement="below"><direction-type><dynamics>'
                f"<{body}/></dynamics></direction-type></direction>")
    wedge = {"<": "crescendo", ">": "diminuendo", "|": "stop"}.get(body)
    if wedge:
        return ('<direction placement="below"><direction-type>'
                f'<wedge type="{wedge}"/></direction-type></direction>')
    if body.startswith("q="):
        bpm = body[2:]
        return ('<direction placement="above"><direction-type><metronome>'
                f"<beat-unit>quarter</beat-unit><per-minute>{bpm}</per-minute>"
                f'</metronome></direction-type><sound tempo="{bpm}"/></direction>')
    if body in _TEMPO_WORDS:
        return ('<direction placement="above"><direction-type><words>'
                f"{_TEMPO_WORDS[body]}</words></direction-type></direction>")
    raise ValueError(f"unknown direction {token!r}")


_KIND = {
    "": "major", "m": "minor", "7": "dominant",
    "maj7": "major-seventh", "m7": "minor-seventh",
    "dim": "diminished", "aug": "augmented", "m7b5": "half-diminished",
}


def _root_xml(text, tag):
    """Parse a chord root/bass letter (+optional #/b) into MusicXML."""
    step = text[0].upper()
    rest = text[1:]
    out = f"<{tag}-step>{step}</{tag}-step>"
    if rest[:1] in _STEP_ALTER and rest[:1] != "n":
        out += f"<{tag}-alter>{_STEP_ALTER[rest[0]]}</{tag}-alter>"
        rest = rest[1:]
    return out, rest


def _harmony_xml(token):
    """A '$' token -> a MusicXML <harmony> chord symbol."""
    body = token[1:]
    chord, _, bass = body.partition("/")
    root_xml, quality = _root_xml(chord, "root")
    if quality not in _KIND:
        raise ValueError(f"unknown chord quality {quality!r} in {token!r}")
    parts = [f"<root>{root_xml}</root>", f"<kind>{_KIND[quality]}</kind>"]
    if bass:
        bass_xml, extra = _root_xml(bass, "bass")
        if extra:
            raise ValueError(f"bad bass note in {token!r}")
        parts.append(f"<bass>{bass_xml}</bass>")
    return "<harmony>" + "".join(parts) + "</harmony>"


def _notations_inner(flags, token):
    """Turn articulation/slur flag chars into the inside of <notations>."""
    arts, extra = [], []
    for c in flags:
        if c in _ARTICULATIONS:
            arts.append(_ARTICULATIONS[c])
        elif c == ";":
            extra.append("<fermata/>")
        elif c == "(":
            extra.append('<slur type="start" number="1"/>')
        elif c == ")":
            extra.append('<slur type="stop" number="1"/>')
        else:
            raise ValueError(f"unknown articulation flag {c!r} in {token!r}")
    inner = ""
    if arts:
        inner += "<articulations>" + "".join(f"<{a}/>" for a in arts) \
                 + "</articulations>"
    return inner + "".join(extra)


def _tie_xml(start, stop):
    """Return (sound elements, notation elements) for a note's ties."""
    snd = ('<tie type="stop"/>' if stop else "") \
        + ('<tie type="start"/>' if start else "")
    tied = ('<tied type="stop"/>' if stop else "") \
        + ('<tied type="start"/>' if start else "")
    return snd, tied


def _parse_note(token, tie_state):
    """Split a note token into its rendered pieces (shared by both builders).

    Returns (head, divs, typ, dot, tie_snd, notations) where head is the
    pitch/chord/'r', or None for a @direction / $harmony token whose XML is
    returned as notations with the other fields None."""
    if token.startswith("@"):
        return None, None, None, None, None, _direction_xml(token)
    if token.startswith("$"):
        return None, None, None, None, None, _harmony_xml(token)

    head, _, dur = token.partition(":")
    if not dur:
        raise ValueError(f"token {token!r} has no :duration")
    split = 2 if len(dur) >= 2 and dur[1] == "." else 1
    durcode, flags = dur[:split], dur[split:]
    tie_start = "~" in flags
    flags = flags.replace("~", "")
    divs, typ, dotted = _duration(durcode)
    dot = "<dot/>" if dotted else ""

    tie_stop = bool(tie_state and tie_state.get("pending"))
    if tie_state is not None:
        tie_state["pending"] = tie_start
    tie_snd, tied = _tie_xml(tie_start, tie_stop)
    inner = tied + _notations_inner(flags, token)
    notations = f"<notations>{inner}</notations>" if inner else ""
    return head, divs, typ, dot, tie_snd, notations


def _note_xml(token, key_alters, tie_state=None):
    head, divs, typ, dot, tie_snd, notations = _parse_note(token, tie_state)
    if head is None:            # a @direction or $harmony token
        return notations

    if head == "r":
        return (f"<note><rest/><duration>{divs}</duration>"
                f"<type>{typ}</type>{dot}{notations}</note>")

    notes = head.split("+")
    out = []
    for i, p in enumerate(notes):
        pitch_xml, accidental = _pitch_xml(p, key_alters)
        chord = "<chord/>" if i > 0 else ""
        note_notations = notations if i == 0 else ""
        out.append(f"<note>{chord}{pitch_xml}<duration>{divs}</duration>"
                   f"{tie_snd}<type>{typ}</type>{dot}{accidental}"
                   f"{note_notations}</note>")
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
    tie_state = {"pending": False}
    for n, measure in enumerate(measures, start=1):
        if n == 1:
            attrs = (f"<attributes><divisions>4</divisions>"
                     f"<key><fifths>{fifths}</fifths></key>"
                     f"{time_xml}"
                     f"<clef>{clef_xml}</clef></attributes>")
        else:
            attrs = ""
        notes = "".join(_note_xml(tok, key_alters, tie_state)
                        for tok in measure.split())
        body.append(f'<measure number="{n}">{attrs}{notes}</measure>')

    return _document(body)


def _document(body):
    """Wrap a list of <measure> strings into a one-part MusicXML document."""
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


def _voice_measure(tokens, voice, staff, stem, key_alters, tie_state):
    """One monophonic voice's notes for a measure, tagged with voice/staff/stem.

    Returns (xml, total_divisions)."""
    out, total = [], 0
    for tok in tokens.split():
        head, divs, typ, dot, tie_snd, notations = _parse_note(tok, tie_state)
        if head == "r":
            out.append(f"<note><rest/><duration>{divs}</duration>"
                       f"<voice>{voice}</voice><type>{typ}</type>{dot}"
                       f"<staff>{staff}</staff>{notations}</note>")
        else:
            pitch_xml, accidental = _pitch_xml(head, key_alters)
            out.append(f"<note>{pitch_xml}<duration>{divs}</duration>"
                       f"{tie_snd}<voice>{voice}</voice><type>{typ}</type>{dot}"
                       f"{accidental}<stem>{stem}</stem><staff>{staff}</staff>"
                       f"{notations}</note>")
        total += divs
    return "".join(out), total


def build_satb(soprano, alto, tenor, bass, fifths=0, beats=4, beat_type=4,
               show_time=True):
    """Four-voice chorale on a grand staff: S & A (treble), T & B (bass).

    Each of the four arguments is a list of measure token-strings, one
    monophonic voice. All four must have the same number of measures."""
    key_alters = _key_alters(fifths)
    time_xml = (f"<time><beats>{beats}</beats>"
                f"<beat-type>{beat_type}</beat-type></time>"
                if show_time else "<time print-object='no'>"
                f"<beats>{beats}</beats><beat-type>{beat_type}</beat-type>"
                "</time>")
    # (voice-lines, voice#, staff#, stem, tie_state) — SA on staff 1, TB on 2.
    layout = [(soprano, 1, 1, "up", {"pending": False}),
              (alto, 2, 1, "down", {"pending": False}),
              (tenor, 3, 2, "up", {"pending": False}),
              (bass, 4, 2, "down", {"pending": False})]

    body = []
    for mi in range(len(soprano)):
        if mi == 0:
            parts = [f"<attributes><divisions>4</divisions>"
                     f"<key><fifths>{fifths}</fifths></key>{time_xml}"
                     f"<staves>2</staves>"
                     f'<clef number="1"><sign>G</sign><line>2</line></clef>'
                     f'<clef number="2"><sign>F</sign><line>4</line></clef>'
                     f"</attributes>"]
        else:
            parts = []
        prev_total = 0
        for i, (lines, voice, staff, stem, tie_state) in enumerate(layout):
            if i > 0:
                parts.append(f"<backup><duration>{prev_total}</duration></backup>")
            notes, prev_total = _voice_measure(lines[mi], voice, staff, stem,
                                                key_alters, tie_state)
            parts.append(notes)
        body.append(f'<measure number="{mi + 1}">{"".join(parts)}</measure>')

    return _document(body)
