# Part 0 screenshot shot list

MuseScore *interface* screenshots can't be captured headlessly here
(automated capture grabs the real desktop), so Part 0's shots are taken
by hand. This is the plan.

## Setup, once

1. Launch with the demo score loaded:
   ```
   MuseScore4.AppImage scores/demo-score.musicxml &
   ```
2. In **Edit ▸ Preferences ▸ Appearance**, set the theme to **Light**
   so screenshots match the book's warm-white pages.
3. Save each capture as a PNG into `assets/figures/<id>.png` using the
   exact `<id>` below. Crop tightly to the described region; a little
   surrounding chrome is fine (the book frames shots with a thin
   border). Then they get referenced with `{{shot <id> | caption}}`.

## Chapter 1 — Installing MuseScore 4  (`p0-install`)

| id | what to show | how |
|---|---|---|
| `ms-first-launch` | the Home/Start screen on launch | fresh launch, before opening a score (optional if your install skips it) |
| `ms-workspace` | the whole editing window, demo score open | the anchor "tour" image — full window, default panels |

## Chapter 2 — Getting Notes In  (`p0-input`)

| id | what to show | how |
|---|---|---|
| `ms-note-input-toolbar` | the note-input toolbar row | press <kbd>N</kbd>; capture the toolbar strip (the N button + duration buttons) |
| `ms-note-input-cursor` | score mid-entry with the blue input cursor | <kbd>N</kbd>, enter 2–3 notes, capture the score area showing the blue cursor |

## Chapter 3 — Navigating the Score  (`p0-navigating`)

| id | what to show | how |
|---|---|---|
| `ms-palettes` | the Palettes panel (left) | <kbd>F9</kbd> to show it; capture the panel |
| `ms-properties` | the Properties panel (right) with a note selected | click a note, open Properties; capture the panel |
| `ms-mixer` | the Mixer | <kbd>F10</kbd>; capture the mixer window |
| `ms-playback-toolbar` | the playback controls | capture the transport strip (play, rewind, metronome, loop) |

## Chapter 4 — Saving and Exporting  (`p0-files`)

| id | what to show | how |
|---|---|---|
| `ms-export-dialog` | the Export dialog with format list | **File ▸ Export…**; capture the dialog showing PDF / MusicXML / audio |
| `ms-save-dialog` | the Save dialog (optional) | **File ▸ Save As…**; capture the dialog |

Once the PNGs are in `assets/figures/`, I'll write the Part 0 prose
around them and wire in the `{{shot}}` references.
