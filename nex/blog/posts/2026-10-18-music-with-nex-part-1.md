---
title: Music with Nex, Part 1 — Pitch and Interval
tags: [design, contracts]
summary: The first part of a series that builds a small music sequencer from scratch in Nex.
---

The goal of this series is to build a small music sequencer from scratch in Nex. By the last part it will let you sketch phrases on a piano roll, generate melodies, and play them back. But the real aim is to show you the Nex way of writing object-oriented code where every class states what it promises, and Nex checks the promises while the program runs.

Music is a good test bed for this. It is full of rules that are easy to state and easy to break. For instance, a bar must add up to its time signature and a transposed melody must stay inside the instrument's range. As we build the sequencer in small steps, we will see how contracts help up express these facts in a clear and enforceable way.

Nex already ships an audio library with a General MIDI synthesizer, a score you can fill note by note, and a player. So we will not write a single line of sound plumbing. Our job is the layer above it: the musical ideas captured as classes with contracts.

We start with two basic musical ideas: the **pitch** and **interval**. A **pitch** is how high a note sounds. An **interval** is the distance between two pitches. By the end of this part you will have two small classes, `Pitch` and `Interval`, and a C major scale playing through your speakers.

## The trouble with raw integers

Here is how the audio library wants a note:

```nex
intern audio/Midi_Song

let score := create Midi_Score.make(4)      -- 4 ticks to a beat
score.add_note(0, 60, 90, 0, 4)            -- channel, pitch, velocity, start, length
```

That call is already guarded by contracts. `add_note` requires the channel to be in 0..15, the pitch and velocity in 0..127, the start not negative and the length positive. Break any of those and you get a precondition violation naming the rule.

But look at what the guard cannot see. Every argument is an `Integer`. Swap the pitch and the velocity and the call still passes every check:

```nex
score.add_note(0, 90, 60, 0, 4)            -- meant middle C at velocity 90
```

That plays the F# two and a half octaves above middle C, quietly. Nothing complains, because 90 is a perfectly good pitch and 60 an equally good velocity.

The second problem is distance. Suppose a melody is stored as integers and we transpose it up an octave by adding 12. A note at 120 becomes 132. Nothing notices until rendering, when `add_note` rejects it, far from the line that made the mistake. The error names `add_note`, not the transposition.

Both problems have the same cure: give the idea its own class. A `Pitch` cannot be passed where a velocity is expected, and a `Pitch` that would leave the MIDI range cannot be created. The check moves from the edge of the program to the moment the mistake is made.

## Pitch: a value that cannot be wrong

A pitch is a value, like a number or a colour. Two middle Cs are the same pitch, and a pitch never changes once it exists. Here is the whole class. Read the contracts first; then the bodies.

```nex
class Pitch
  note "How high a note sounds: one of the 128 MIDI pitches, middle C = 60."
inherit Comparable

feature
  LOWEST = 0
  HIGHEST = 127
  LETTER_STEPS = {"C": 0, "D": 2, "E": 4, "F": 5, "G": 7, "A": 9, "B": 11}
  SHARP_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
  
  once midi: Integer

create
  from_midi(n: Integer)
  require
    in_midi_range: n >= LOWEST and n <= HIGHEST
  do
    midi := n
  end
  
  -- Scientific pitch notation: middle C is ("C", 0, 4).
  -- accidental counts sharps (+) or flats (-).
  named(letter: String, accidental, oct: Integer)
  require
    one_letter: letter.length = 1 and "CDEFGAB".contains(letter)
    plain_accidental: accidental >= -2 and accidental <= 2
    octave_in_range: oct >= -1 and oct <= 9
    not_below_c_minus_1: oct > -1 or LETTER_STEPS.get(letter) + accidental >= 0
    not_above_g9: oct < 9 or LETTER_STEPS.get(letter) + accidental <= 7
  do
    this.from_midi((oct + 1) * 12 + LETTER_STEPS.get(letter) + accidental)
  end
  
feature
  -- Which of the twelve notes this is, C = 0 up to B = 11.
  pitch_class: Integer
  do
    result := midi % 12
  ensure
    one_of_twelve: result >= 0 and result <= 11
  end
  
  octave: Integer
  do
    result := midi / 12 - 1
  ensure
    rebuilds_midi: (result + 1) * 12 + pitch_class() = midi
  end
  
  name: String
  do
    result := SHARP_NAMES.get(pitch_class()) + octave()
  end
  
  -- Equal temperament, tuned to A4 = 440 Hz.
  frequency: Real
  do
    result := 440.0 * 2.0 ^ ((midi - 69).to_real / 12.0)
  ensure
    positive: result > 0.0
  end
  
  compare(other: Any): Integer
  do
    if convert other to p: Pitch then
      if midi < p.midi then
        result := -1
      elseif midi > p.midi then
        result := 1
      else
        result := 0
      end
    end
  end

  to_string: String do
    result := name()
  end

invariant
  in_midi_range: midi >= LOWEST and midi <= HIGHEST
end
```

A few things are worth slowing down for.

**The invariant and the precondition say the same thing, on purpose.** The invariant is the class's promise: no `Pitch` anywhere in the program is outside 0..127. The precondition on `from_midi` is the caller's side of that bargain: don't ask for one that is. If a caller breaks the rule, the error blames the caller, right at the call site:

```nex
> create Pitch.from_midi(128)
Error: Precondition violation: in_midi_range
```

**`named` speaks the musician's language and checks it in the musician's terms.** The range rule becomes three clauses about octaves: an octave must be -1..9, nothing goes below C-1, and nothing goes above G9. Each clause has a name, so a failure tells you which rule you broke, not just that some arithmetic went out of bounds. Note `one_letter`: `"CDEFGAB".contains("")` is true, so without the length check an empty string would slip through.

**Postconditions document the arithmetic.** `octave` uses integer division, and its postcondition says exactly what that division must get right: put the octave and the pitch class back together and you get the MIDI number again. A reader who doubts `midi / 12 - 1` does not have to work it out. The class checks it every time.

**`Comparable` buys ordering.** Inheriting it and defining `compare` gives `<`, `<=`, `>` and `>=` on pitches. We will lean on that when we check that a melody stays inside an instrument's range.

Try it:

```nex
> let c4 := create Pitch.named("C", 0, 4)
> c4.midi
60
> let a4 := create Pitch.named("A", 0, 4)
> a4.frequency
440.0
> c4 < a4
true
> c4 = create Pitch.from_midi(60)
true
```

## Interval: distance and direction

An interval is a signed number of semitones. Up a fifth is +7; down a minor third is -3. Like `Pitch`, it is a value.

```nex
class Interval
  note "A signed distance between two pitches, in semitones."
inherit Comparable

feature
  once semitones: Integer

create
  make(n: Integer)
    require
      within_midi_span: n >= -127 and n <= 127
    do
      semitones := n
    end

feature
  UNISON = create Interval.make(0)
  MINOR_SECOND = create Interval.make(1)
  MAJOR_SECOND = create Interval.make(2)
  MINOR_THIRD = create Interval.make(3)
  MAJOR_THIRD = create Interval.make(4)
  PERFECT_FOURTH = create Interval.make(5)
  PERFECT_FIFTH = create Interval.make(7)
  OCTAVE = create Interval.make(12)

  is_ascending(): Boolean do result := semitones > 0 end
  is_descending(): Boolean do result := semitones < 0 end

  -- The same distance in the other direction.
  reversed(): Interval
  do
    result := create Interval.make(-semitones)
  ensure
    opposite: result.semitones = -semitones
  end

  plus(other: Interval): Interval
  alias "+"
  require
    stays_in_span: (semitones + other.semitones).abs <= 127
  do
    result := create Interval.make(semitones + other.semitones)
  ensure
    adds_up: result.semitones = semitones + other.semitones
  end

  -- Folded into one octave, as an upward step of 0..11 semitones.
  -- A tenth (16) folds to a major third (4).
  simple: Interval
  do
    result := create Interval.make(semitones % 12)
  ensure
    within_octave: result.semitones >= 0 and result.semitones <= 11
    same_class: (semitones - result.semitones) % 12 = 0
  end
  
  compare(other: Any): Integer
  do
    if convert other to i: Interval then
      if semitones < i.semitones then
        result := -1
      elseif semitones > i.semitones then
        result := 1
      else
        result := 0
      end
    end
  end

  to_string: String
  do
    result := "Interval(" + semitones + ")"
  end
end
```

`plus` is bound to `+` with `alias`, so `Interval.OCTAVE + Interval.PERFECT_FIFTH` reads like music theory and is still exactly a call to `plus`, precondition and all.

If you look carefully at `simple` you might see a problem: when we ask whether a note belongs to a chord, we care about the interval from the root folded into one octave. The body `semitones % 12` looks right, and for upward intervals it is. Try a downward one:

```nex
> let tenth := create Interval.of(16)
> tenth.simple
Interval(4)
> let down := create Interval.of(-15)
> down.simple
Error: Postcondition violation: within_octave
```

Nex's `%` keeps the sign of the dividend, as Java does, so `-15 % 12` is `-3`, not `9`. Without the postcondition, `simple` would quietly return `Interval(-3)`, and the chord check two posts from now would decide that a perfectly good chord tone was wrong. With it, the routine that broke its promise is named at the moment it breaks it. The fix is one line:

```nex
      result := create Interval.make((semitones % 12 + 12) % 12)
```

The `same_class` clause is as important as `within_octave`. A body that returned `Interval.UNISON` every time would satisfy the range check. `same_class` rules that out: the folded interval must differ from the original by whole octaves.

### Pitch meets Interval

Now let's add two methods to `Pitch` to tie it together with `Interval`:

```nex
  transposed(by: Interval): Pitch
  require
    stays_in_range: midi + by.semitones >= LOWEST
      and midi + by.semitones <= HIGHEST
  do
    result := create Pitch.from_midi(midi + by.semitones)
  ensure
    moved_by: result.midi - midi = by.semitones
  end

  interval_to(other: Pitch): Interval
  do
    result := create Interval.make(other.midi - midi)
  ensure
    lands_on_other: transposed(result) = other
  end
```

The precondition on `transposed` is the cure for the second problem from the start of the post. Transposing a melody past the top of the range now fails on the line that transposes, not inside the renderer:

```nex
> let top_c := create Pitch.named("C", 0, 9)
> top_c.transposed(Interval.OCTAVE)
Error: Precondition violation: stays_in_range
```

The postcondition on `interval_to` is a different kind of promise. It does not restate the body; it ties two features together. Whatever `interval_to` returns, `transposed` must undo it. If either routine changes later, this one line keeps them in sync.

### Why not a mutable `transpose`?

It is tempting to write a command instead, one that changes the pitch in place:

```nex
  transpose(by: Interval)
  require
    stays_in_range: midi + by.semitones >= LOWEST
      and midi + by.semitones <= HIGHEST
  do
    midi := midi + by.semitones
  ensure
    moved_by: midi = old midi + by.semitones
  end
```

The contract is fine; `old midi` is exactly the right tool for a command. Nex rejects the class anyway, because `midi` is a `once` field. This is a deliberate design choice. If pitches could change, then a `Phrase` holding the same `Pitch` object in two places would have both notes move when you transpose one. Values that cannot change can be shared freely, and that will make every collection class later in the series simpler. We will have appropriate use for `old` later when we implement `Phrase` and `Voice` which are things that do change.

## Making it sound

A major scale is a pattern of steps: whole, whole, half, whole, whole, whole, half. In our terms that is a list of intervals, and building the scale is a walk from the tonic:

```nex
let whole := Interval.MAJOR_SECOND
let half := Interval.MINOR_SECOND
let major_steps: Array[Interval] := [whole, whole, half, whole, whole, whole, half]

let scale: Array[Pitch] := [create Pitch.named("C", 0, 4)]
across major_steps as step do
  scale.add(scale.get(scale.length - 1).transposed(step))
end

across scale as p do print(p.name) end
-- C4 D4 E4 F4 G4 A4 B4 C5
```

To hear it, we hand the pitches to the audio library. This is the only place in this part where a `Pitch` turns back into an `Integer`, and it does so at the last possible moment, inside one small function:

```nex
intern audio/Midi_Song

function play(pitches: Array[Pitch], beats_each: Integer)
require
  something_to_play: pitches.length > 0
  positive_length: beats_each > 0
do
  let ticks_per_beat := 4
  let ticks := beats_each * ticks_per_beat
  let score := create Midi_Score.make(ticks_per_beat)
  score.set_instrument(0, Midi.PIANO, 0)
  from let k := 0 until k = pitches.length do
    score.add_note(0, pitches.get(k).midi, 90, k * ticks, ticks)
    k := k + 1
  end
  let song := create Midi_Song.from_score(score)
  song.play()
  from until song.is_stopped() do
    song.update()
    sleep(20)
  end
  song.close()
end

play(scale, 1)
```

Notice what can no longer go wrong at the `add_note` call. The pitch argument comes from a `Pitch`, so it is in range by the class invariant; `add_note`'s own `valid_pitch` check can never fire from here. The velocity and pitch can still be swapped by hand in this one function, but there is now exactly one place to look. In a later part of the series we will replace this function with a proper `Renderer` class and a contract that checks the score against the model.

No speakers, or running on a server? Set `NEX_AUDIO=off`. The library plays silently and the contracts are checked all the same.

## What the contracts bought us

Two small classes, and already three kinds of protection:

- **Types keep ideas apart.** A `Pitch` cannot be passed where a velocity or a channel is expected. No contract could catch the swapped arguments from the start of this post; a class does it for free.
- **Preconditions put the blame at the call.** An out-of-range pitch or transposition fails on the line that asked for it, with a rule name that says what was wrong.
- **Postconditions catch the code we were sure of.** `simple` was one line, it looked right, and it was wrong for every descending interval. The postcondition found it the first time a descending interval came through.

So the take away is: types say what a thing *is*; contracts say what must be *true* of it. Each catches what the other cannot.

## Next: Duration and Meter

Pitch is half of a note. Part 2 adds the other half: how long it lasts. We will represent durations as exact fractions of a whole note rather than MIDI ticks, give `Meter` an invariant that every bar is full, and meet the first contract that a test suite would almost certainly miss.

### Try it yourself

1. Add `Pitch.named_flat` that spells pitches with flats (Db rather than C#). What should its postcondition promise about `midi`?
2. Give `Interval` a `name` query that returns "M3", "P5" and so on for simple intervals. Which precondition does it need, and could `simple` remove the need for one?
3. Remove the `same_class` clause from `simple` and write a wrong body that still passes `within_octave`. How many tests would you need to catch it instead?
