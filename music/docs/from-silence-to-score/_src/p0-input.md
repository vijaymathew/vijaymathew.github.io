A blank staff is not composing; it is a waiting room. The first real skill is getting a note out of your head and onto the page, quickly enough that the idea survives the trip. MuseScore gives you three ways to do it, and they are not equal. This chapter shows all three and then argues, firmly, for the one you should learn first.

## 2.1 Three ways in

**By mouse.** You can click notes onto the staff — pick a duration in the toolbar, then click where the note goes. It feels natural for exactly ten minutes and then becomes the slowest possible method, because every note is a small act of aiming. Reach for the mouse to *drag* and *select*, rarely to *enter*.

**By MIDI keyboard.** If you own a MIDI keyboard, plug it in (USB is plug-and-play on all three operating systems) and MuseScore will accept notes played on it. This is wonderful for capturing a chord voicing you can play but cannot yet spell, and we will use it later. But it needs hardware, and it needs you to already play a little piano, so it is not the foundation.

**By computer keyboard.** You type the *letter name* of each pitch — literally press <kbd>C</kbd> for a C — after setting a duration with the number keys. No aiming, no hardware, both hands on the keys you already have. This is the method to learn first and the method this book assumes. Everything below is about it.

## 2.2 Note input mode

Entering notes is a distinct *mode*. Outside it, the letter keys select and navigate; inside it, they place pitches. You toggle the mode with a single key.

Press <kbd>N</kbd>. The **note-input toolbar** activates, and this strip of controls is your dashboard for everything you are about to type.

{{shot ms-note-input-toolbar | The note-input toolbar, live. At the far left, the highlighted pencil is the note-input toggle. Then the row of **durations** — from a 64th note up to a whole note — with the quarter note currently selected. Past those: the dot for dotted rhythms, the rest button, the five accidentals, tie and slur, the articulation marks, tuplets, and at the right the **voice** selector.}}

You do not need every button in {{fig ms-note-input-toolbar}} yet — most belong to later chapters. Four regions matter now, left to right: the **durations** (choose how long the next note lasts), the **accidentals** (sharp, flat, natural), the **rest** button, and the **voices** at the far right, which we leave on Voice 1. The durations are the ones your fingers will find blind, because they map to the number row.

## 2.3 Duration first, then pitch

The order is the thing to internalize, because it is backwards from how you might guess: **you set the duration, and only then type the pitch.** The duration is a mode that persists — set it to a quarter note and every note you type is a quarter until you change it. So the rhythm of typing is: press a number to choose a length, press letters to lay down notes of that length, press another number when the length changes.

The number keys are:

| Key | Duration |
|---|---|
| <kbd>1</kbd> | 64th note |
| <kbd>2</kbd> | 32nd note |
| <kbd>3</kbd> | 16th note |
| <kbd>4</kbd> | eighth note |
| <kbd>5</kbd> | quarter note |
| <kbd>6</kbd> | half note |
| <kbd>7</kbd> | whole note |

(They run short-to-long as the numbers climb — <kbd>5</kbd> is the everyday quarter note and worth memorizing first. What these durations *mean* rhythmically is Chapter 6; here we only need them to make notes appear.) A period, <kbd>.</kbd>, dots the current duration; <kbd>0</kbd> enters a rest of the current length.

With a duration chosen, type a letter <kbd>A</kbd>–<kbd>G</kbd> and the note appears. MuseScore places it at the octave *nearest the previous note*, so a melody that never leaps more than a few steps needs no octave management at all — you just type the letters. When it does leap far, nudge it: <kbd>Ctrl</kbd>+<kbd>↑</kbd> and <kbd>Ctrl</kbd>+<kbd>↓</kbd> move the selected note by a whole octave, and the plain <kbd>↑</kbd>/<kbd>↓</kbd> arrows move it by a half step.

## 2.4 The input cursor

While you are in note-input mode, a blue marker shows where the next note will land. Watch it, not the toolbar — it is the cursor, and it tells you your place in time.

{{shot ms-note-input-cursor | Mid-entry. Three notes have been typed into the treble staff; the highlighted blue notehead is the input cursor, sitting on the beat where the next keystroke will place a pitch. Type a letter and it fills; the cursor advances by one duration.}}

Each note you enter fills the cursor's position and advances it by the current duration, as in {{fig ms-note-input-cursor}}. When a measure fills, the cursor jumps to the next one; MuseScore will not let you overfill a bar. If you type a wrong pitch, it is already selected — just press <kbd>↑</kbd>/<kbd>↓</kbd> to fix it, or the correct letter to overwrite, without leaving the mode. To back up, press <kbd>Backspace</kbd>, which deletes the last note and returns the cursor to it.

When you are done, press <kbd>N</kbd> again — or <kbd>Esc</kbd> — to leave note-input mode. Now the letters navigate again, and <kbd>Space</kbd> plays the score back so you can hear what you typed.

## 2.5 A first line

Put it together. From a new or open score, press <kbd>N</kbd>, then <kbd>5</kbd> for quarter notes, then type:

<kbd>C</kbd> <kbd>D</kbd> <kbd>E</kbd> <kbd>F</kbd> <kbd>G</kbd> <kbd>A</kbd> <kbd>B</kbd> <kbd>C</kbd>

Eight quarter notes climb the staff. Press <kbd>Esc</kbd> to leave the mode and <kbd>Space</kbd> to hear them. That rising line is a C-major scale — the raw material of Chapter 7 — and you entered it with fifteen keystrokes and no mouse. This is the whole loom on which the rest of the book is woven: *duration, then letters, then listen.* Everything else is elaboration.
