You can now get notes onto a staff. Everything *else* MuseScore does — adding a key signature, softening a phrase, choosing a sound, pressing play — happens through four surfaces docked around the score. Learn where each lives and what it is for, and the program stops being a wall of buttons and becomes four drawers you open as needed. This chapter opens each one.

## 3.1 Palettes: the catalogue of symbols

Music notation has a large vocabulary of symbols — clefs, key and time signatures, dynamics, articulations, repeat barlines, tempo marks — and the **Palettes** panel is where they all live, sorted into labelled drawers. Show it with <kbd>F9</kbd> (or *View ▸ Palettes*).

{{shot ms-palettes | The Palettes panel. Each row — Clefs, Key signatures, Time signatures, Tempo, Dynamics, Articulations, and the rest — expands to reveal its symbols. To apply one, select a note or measure in the score, then double-click the symbol. The **Add palettes** button and the search field at the top reach anything not shown by default.}}

The workflow is always the same two steps: **select the target in the score, then double-click the symbol in the palette.** Select a note and double-click a *forte* from Dynamics and the marking attaches to that note; select a measure and double-click a time signature and it takes effect there. If a drawer you need is missing, the search field at the top of {{fig ms-palettes}} finds any symbol by name and drops it in — faster, once you know a symbol's name, than hunting through the drawers.

## 3.2 Properties: adjusting what you selected

Where a palette *adds* things, the **Properties** panel *adjusts* the thing you have already selected. Click a note and open Properties (it shares the left dock with Palettes — click its tab, or *View ▸ Properties*), and the panel fills with every attribute of that note.

{{shot ms-properties | The Properties panel with a single note selected. The **General** section governs whether the note is visible, plays back, and auto-places; below it, **Note** exposes the notehead — its shape, size, and parentheses — with Head / Stem / Beam tabs for the rest. The panel is context-sensitive: select a different object and it shows that object's properties instead.}}

The panel is entirely **context-sensitive** — it always reflects the current selection, so it looks different depending on what you have clicked. Select a barline and it offers barline types; select a bit of text and it offers font controls. You will not need most of what {{fig ms-properties}} shows for a long while, and that is fine: Properties is a panel you *reach into* when you want to change one specific thing, not one you keep memorized. Knowing it exists, and that it follows your selection, is enough for now.

## 3.3 The Mixer: choosing and balancing sounds

Playback needs *sounds*, and the **Mixer** is where each staff is assigned an instrument and balanced against the others. Open it with <kbd>F10</kbd> (or *View ▸ Mixer*).

{{shot ms-mixer | The Mixer. Each vertical strip is one channel — here the Piano, the Metronome, and the Master that sums them. Per channel: the **Sound** slot (the instrument, "MS Basic" being MuseScore's built-in set), an **Aux sends** knob for reverb, a **Pan** control, a volume fader with a level meter, and the **M** / **S** buttons that mute or solo the channel.}}

Two controls in {{fig ms-mixer}} earn their keep early. **Mute** (M) and **Solo** (S) let you isolate one staff — solo the bass line to check it alone, or mute the melody to hear the accompaniment underneath. That is how you *audit* a texture rather than just play it. The **Sound** slot is the other: click it to swap MuseScore's basic sounds for the richer **MuseSounds** instruments if you have downloaded them. Volume and pan you can leave at their defaults until you are arranging for more than one instrument, in Part 5.

## 3.4 Playback: hearing the score

The point of all of it is to hear the music, and the **playback toolbar** — up in the top toolbar row, always visible — is the transport.

{{shot ms-playback-toolbar | The playback controls. Rewind to the start, **play / pause**, loop a selected passage, and the metronome and count-in toggles, with a settings gear at the right. The readouts show the elapsed time, the current bar and beat, and the **tempo** (♩ = 120). The Speed slider below plays the score slower or faster without changing its pitch.}}

The one key to keep under a finger is <kbd>Space</kbd> — it starts and stops playback from wherever you last clicked, no toolbar needed. Playback begins at the current selection, so click a note to start there, or press <kbd>Ctrl</kbd>+<kbd>Home</kbd> to jump to the top first. The **metronome** toggle in {{fig ms-playback-toolbar}} adds an audible click, invaluable when you are checking a tricky rhythm, and the **Speed** slider slows a fast passage down so you can hear whether it actually works — both are switched off in the final result but on constantly while you compose.

## 3.5 The four drawers

That is the whole console. Adding a symbol is Palettes; adjusting a selected object is Properties; assigning and balancing sounds is the Mixer; hearing the result is playback. Every instruction later in this book that begins "open the Dynamics palette" or "solo the cello" or "press play" is pointing at one of these four surfaces you have now met. From here on the book will name them without re-explaining them — so if a step ever refers to a panel you have lost, this chapter is the map back.
