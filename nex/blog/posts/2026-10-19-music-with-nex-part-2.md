---
title: Music with Nex, Part 2 — Duration and Meter
tags: [design, contracts]
summary: Modelling musical time with contracts.
---

[Part 1](music-with-nex-part-1.html) of this series gave us `Pitch`: how high a note sounds. This part covers how long it lasts. By the end we will have three classes: `Duration`, `Meter` and `Bar`. We will also hear a bar of triplets played correctly.

Look again at the `play` function from [Part 1](music-with-nex-part-1.html):

```nex
  let ticks_per_beat := 4
  let ticks := beats_each * ticks_per_beat
```

Length there is a count of MIDI ticks, and that count already means two things at once. MIDI's "beat" is always a quarter note, whatever the time signature says. In 6/8 the beat a musician counts is a dotted quarter, but MIDI still counts quarters. On top of that, a tick count depends on a resolution that the composer doesn't care about: a quarter note is 4 ticks at one resolution and 480 at another.

Musicians don't think in ticks. They think in fractions of a whole note: a quarter, an eighth, a dotted half, a triplet eighth. So that is how we will store duration. Ticks come back only at the edge, when we hand the music to the audio library.

## A helper with a contract of its own

Fractions need a greatest common divisor, so we start with a free function:

```nex
function gcd(a, b: Integer): Integer
require
  positive: a > 0 and b > 0
do
  let x := a
  let y := b
  from until y = 0 do
    let r := x % y
    x := y
    y := r
  end
  result := x
ensure
  positive_result: result > 0
  divides_both: a % result = 0 and b % result = 0
end
```

The precondition is narrower than it needs to be: `gcd` is perfectly well defined for zero and negative numbers. We narrow it on purpose. Durations are always positive, so no caller in this program needs anything else. If a later part needs `gcd(0, n)`, we will widen it then, and every caller written so far stays correct, because a wider precondition accepts everything the narrower one did.

The postcondition is good enough but incomplete. It says the result is *a* common divisor, not the *greatest* one. Hold on to that until one of the exercises at the end revisits it.

## Duration: an exact fraction of a whole note

```nex
class Duration
  note "A length of time as an exact fraction of a whole note."
inherit Comparable

feature
  WHOLE = create Duration.fraction(1, 1)
  HALF = create Duration.fraction(1, 2)
  QUARTER = create Duration.fraction(1, 4)
  EIGHTH = create Duration.fraction(1, 8)
  SIXTEENTH = create Duration.fraction(1, 16)

  once numerator: Integer
  once denominator: Integer

create
  fraction(n, d: Integer)
  require
    positive_numerator: n > 0
    positive_denominator: d > 0
  do
    let g := gcd(n, d)
    numerator := n / g
    denominator := d / g
  ensure
    same_value: numerator * d = n * denominator
  end
  
feature
  plus(other: Duration): Duration
  alias "+"
  do
    result := create Duration.fraction(numerator * other.denominator + other.numerator * denominator,
      denominator * other.denominator)
  ensure
    longer_than_both: this < result and other < result
  end

  minus(other: Duration): Duration
  alias "-"
  require
    leaves_something: other < this
  do
    result := create Duration.fraction(numerator * other.denominator - other.numerator * denominator,
      denominator * other.denominator)
  ensure
    adds_back: result + other = this
  end

  times(k: Integer): Duration
  alias "*"
  require
    positive_factor: k > 0
  do
    result := create Duration.fraction(numerator * k, denominator)
  ensure
    not_shorter: this <= result
  end

  halved: Duration
  do
    result := create Duration.fraction(numerator, denominator * 2)
  ensure
    doubles_back: result * 2 = this
  end

  -- Half as long again: a dotted quarter is 3/8.
  dotted: Duration
  do
    result := create Duration.fraction(numerator * 3, denominator * 2)
  ensure
    half_again: result = this + halved
  end

  -- COUNT notes in the space of SPACE: a triplet is tuplet(3, 2).
  tuplet(count, space: Integer): Duration
  require
    at_least_two: count >= 2
    some_space: space >= 1
  do
    result := create Duration.fraction(numerator * space, denominator * count)
  ensure
    fills_the_space: result * count = this * space
  end

  compare(other: Any): Integer
  do
    if convert other to d: Duration then
      let mine := numerator * d.denominator
      let theirs := d.numerator * denominator
      if mine < theirs then
        result := -1
      elseif mine > theirs then
        result := 1
      else
        result := 0
      end
    end
  end

  to_string: String do
    result := "" + numerator + "/" + denominator
  end

invariant
  positive: numerator > 0 and denominator > 0
  lowest_terms: gcd(numerator, denominator) = 1
end
```

Four things in this class are worth a closer look.

**The `lowest_terms` invariant is what makes `=` correct.** [Part 1](music-with-nex-part-1.html) relied on Nex's default equality, which compares objects field by field. For fractions that is only safe if every value has exactly one representation. Without the invariant, `2/8` and `1/4` would be different objects with different fields, and `=` would call them unequal. The constructor reduces every fraction, and the invariant promises that no `Duration` anywhere has escaped the reduction. So the default `equals` is right, and we never had to write our own.

```nex
> print(create Duration.fraction(2, 8))
1/4
> create Duration.fraction(2, 8) = Duration.QUARTER
true
```

**There is no zero duration, and `minus` has to respect that.** A note that lasts no time is not a note. The `positive` invariant rules it out, and that turns subtraction into a partial operation. `QUARTER - HALF` has no answer among durations, so `minus` says so up front:

```nex
> print(Duration.QUARTER - Duration.HALF)
Error: Precondition violation: leaves_something
```

Notice what the precondition does not say. It does not say "the result must be positive". It speaks in terms the caller can check before calling: the thing you take away must be shorter than what you start with.

**Postconditions describe; they don't restate.** `plus` could have promised the exact sum, but that would just copy the body into the `ensure`. `longer_than_both` is a weaker promise that would still catch the bugs we are likely to make: a sign error, a swapped numerator, multiplying where we meant to add. `minus` goes further and ties itself to `plus`: whatever it returns, adding `other` back must give the original. We used the same trick with `interval_to` and `transposed` in [Part 1](music-with-nex-part-1.html).

**`tuplet` is defined by what musicians mean by it.** "Three in the space of two" is the postcondition, almost word for word: three of the result take as long as two of the original.

```nex
> let trip := Duration.EIGHTH.tuplet(3, 2)
> print(trip)
1/12
> trip * 3 = Duration.EIGHTH * 2
true
> Duration.QUARTER + Duration.EIGHTH = Duration.QUARTER.dotted
true
```

## Meter: a time signature, not a fraction

A time signature looks like a fraction, and it is tempting to store it as a `Duration`. It isn't one.

```nex
class Meter
  note "A time signature: how many beats fill a bar, and which note value is one beat."

feature
  FOUR_FOUR = create Meter.make(4, 4)
  THREE_FOUR = create Meter.make(3, 4)
  SIX_EIGHT = create Meter.make(6, 8)

  once beats: Integer
  once beat_unit: Integer

create
  make(b, unit: Integer)
  require
    some_beats: b >= 1 and b <= 32
    power_of_two_unit: unit = 1 or unit = 2 or unit = 4 or unit = 8 or unit = 16 or unit = 32
  do
    beats := b
    beat_unit := unit
  end

feature
  beat: Duration
  do
    result := create Duration.fraction(1, beat_unit)
  end

  bar_length: Duration
  do
    result := create Duration.fraction(beats, beat_unit)
  ensure
    beats_fill_the_bar: result = beat * beats
  end

  to_string: String do
    result := "" + beats + "/" + beat_unit
  end

invariant
  some_beats: beats >= 1 and beats <= 32
  power_of_two_unit: beat_unit = 1 or beat_unit = 2 or beat_unit = 4 or beat_unit = 8 or beat_unit = 16 or beat_unit = 32
end
```

Here is the difference:

```nex
> Meter.SIX_EIGHT.bar_length = Meter.THREE_FOUR.bar_length
true
> Meter.SIX_EIGHT = Meter.THREE_FOUR
false
```

A bar of 6/8 lasts exactly as long as a bar of 3/4, but they are different meters. 6/8 is two groups of three eighths; 3/4 is three quarters. They sound different, and composers choose between them deliberately. So `Meter` keeps `beats` and `beat_unit` exactly as given, with no reduction, and the default equality tells them apart.

That makes two classes that look alike and make opposite choices. `Duration` normalises because `2/8` and `1/4` are the same length of time. `Meter` must not normalise, because `6/8` and `3/4` are not the same meter. Which values to normalise is a design decision, not a detail of the code, and each class's invariant writes that decision down where readers can find it.

## Bar: always exactly full

A bar is a run of note values that fills one meter. This version is pure rhythm: no pitches and no rests yet. [Part 4](music-with-nex-part-4.html) puts pitches on it.

First, a small free function to add up a list of durations. Since there is no zero duration, an empty list has no total, and the precondition says so:

```nex
function total_length(durations: Array[Duration]): Duration
require
  not_empty: durations.length > 0
do
  result := durations.get(0)
  from let k := 1 until k = durations.length do
    result := result + durations.get(k)
    k := k + 1
  end
end
```

Now the class:

```nex
class Bar
  note "One bar of rhythm: note values that exactly fill a meter."

feature
  once meter: Meter

private feature
  once rhythm: Array[Duration]

create
  make(m: Meter, durations: Array[Duration])
  require
    not_empty: durations.length > 0
    fills_the_bar: total_length(durations) = m.bar_length
  do
    meter := m
    rhythm := durations.slice(0, durations.length)
  end

feature
  count: Integer
  do
    result := rhythm.length
  end

  item(i: Integer): Duration
  require
    valid_index: i >= 0 and i < count
  do
    result := rhythm.get(i)
  end

  total: Duration
  do
    result := total_length(rhythm)
  end

invariant
  not_empty: count > 0
  full: total = meter.bar_length
end
```

```nex
> let waltz := create Bar.make(Meter.THREE_FOUR, [Duration.HALF, Duration.QUARTER])
> let jig := create Bar.make(Meter.SIX_EIGHT, [Duration.QUARTER.dotted, Duration.EIGHTH, Duration.EIGHTH, Duration.EIGHTH])
> create Bar.make(Meter.THREE_FOUR, [Duration.HALF, Duration.HALF])
Error: Precondition violation: fills_the_bar
```

As in [Part 1](music-with-nex-part-1.html), the precondition and the invariant say the same thing. The precondition tells the caller what to provide, and the invariant promises that it stays true. But the invariant only holds because of two small details that are easy to skip past: `rhythm` is private, and the constructor stores a *copy* of the array it was given.

Here is what happens without them. Suppose `make` kept the caller's array instead (`rhythm := durations`):

```nex
> let pattern := [Duration.QUARTER, Duration.QUARTER, Duration.HALF]
> let bar := create Bar.make(Meter.FOUR_FOUR, pattern)
> pattern.add(Duration.QUARTER)
> bar.count
Error: Class invariant violation: full
```

Nothing is wrong with `count`, and nothing was wrong when the bar was created. The bar was changed from outside, through an array it shared with its creator, and nobody told it. Nex checks invariants on the way out of every qualified call, so the damage is reported at the next call on the bar, which can be far from the line that did it. `once` doesn't help here: it stops `rhythm` from being reassigned, but it doesn't stop anyone from changing what is inside it.

The rule this teaches is one of the most important in object-oriented design: **an invariant can only protect state that the class owns.** If others can reach a class's insides, they can break its promises. `slice` gives the bar its own array, so changing `pattern` afterwards no longer reaches it. `private feature` closes the other door: if `rhythm` were public, any client could write `bar.rhythm.add(...)` and break the bar directly. Clients read the rhythm one note at a time through `item`, which hands out `Duration` values. Those can't be changed, so sharing them is safe.

## Back to ticks, and the bug a test suite would miss

Eventually the audio library needs integers. Here is the obvious conversion, added to `Duration`:

```nex
  to_ticks(ticks_per_quarter: Integer): Integer
  do
    result := numerator * ticks_per_quarter * 4 / denominator
  end
```

A whole note is four quarters, so this scales the fraction up and divides. Let's test it the way most people would, at 4 ticks per quarter:

| Duration | Fraction | Ticks at 4 per quarter |
| --- | --- | --- |
| Quarter | 1/4 | 4 |
| Eighth | 1/8 | 2 |
| Dotted quarter | 3/8 | 6 |
| Half | 1/2 | 8 |
| Sixteenth | 1/16 | 1 |

Every value is right, and every 4/4 bar built from them adds up to 16 ticks. The suite passes.

Now a bar of triplet eighths. The triplet is 1/12 of a whole note, and 1 × 4 × 4 / 12 is 16/12, which integer division turns into 1. Twelve triplets come to 12 ticks, not 16. The `Bar` is still full: its invariant holds, because the model is right. It is the conversion that loses time, and it does so silently. Every bar of triplets ends four ticks early, so the next bar starts early. After four bars of triplets, the music is a whole bar ahead of where it should be. Nothing fails. You just hear rushed triplets and wonder about your ears.

A test suite misses this because tests check examples, and this bug only shows up for examples nobody thought of. It needs a denominator that doesn't divide `4 × ticks_per_quarter`. Anyone who thought to write that test would have found the bug while writing the code. A contract doesn't need anyone to think of the case. It states the rule for every case at once:

```nex
  to_ticks(ticks_per_quarter: Integer): Integer
  require
    positive_resolution: ticks_per_quarter > 0
    exact_in_ticks: (numerator * ticks_per_quarter * 4) % denominator = 0
  do
    result := numerator * ticks_per_quarter * 4 / denominator
  ensure
    no_rounding: result * denominator = numerator * ticks_per_quarter * 4
  end
```

Why a precondition and not just the postcondition? Ask who is at fault. The routine can't do better: there is no whole number of ticks that equals a triplet at 4 per quarter. The caller picked a resolution that is too coarse for the music, so the caller is the one who should hear about it, at the call. The postcondition stays as the client-facing promise: whatever you get back was not rounded.

What resolution is enough? It depends on the music, which is exactly why it should be checked rather than guessed. 12 per quarter covers triplets and straight sixteenths. 480, a common choice in sequencers, also covers quintuplets and thirty-seconds. But 480 still fails for septuplets, because 1920 is not divisible by 28. The contract tells you so the first time a septuplet turns up.

## Making it sound

To hear a bar, we play each note value as a drum hit, accenting the first note of every bar. The playback loop is the one from [Part 1](music-with-nex-part-1.html):

```nex
intern audio/Midi_Song

function play_bars(bars: Array[Bar], ticks_per_quarter: Integer)
require
  something_to_play: bars.length > 0
  positive_resolution: ticks_per_quarter > 0
do
  let score := create Midi_Score.make(ticks_per_quarter)
  let tick := 0
  across bars as bar do
    from let k := 0 until k = bar.count do
      let ticks := bar.item(k).to_ticks(ticks_per_quarter)
      let velocity := when k = 0 then 120 else 80 end
      score.add_note(Midi.DRUM_CHANNEL, Midi.COWBELL, velocity, tick, ticks)
      tick := tick + ticks
      k := k + 1
    end
  end
  let song := create Midi_Song.from_score(score)
  song.play()
  from until song.is_stopped() do
    song.update()
    sleep(20)
  end
  song.close()
end

let straight := create Bar.make(Meter.FOUR_FOUR,
  [Duration.QUARTER, Duration.EIGHTH, Duration.EIGHTH, Duration.HALF])

let trip := Duration.EIGHTH.tuplet(3, 2)
let triplets: Array[Duration] := []
repeat 12 do
  triplets.add(trip)
end
let rolling := create Bar.make(Meter.FOUR_FOUR, triplets)

play_bars([straight, rolling, straight, rolling], 4)
```

Run it at 4 ticks per quarter and it stops before playing a note:

```
Error: Precondition violation: exact_in_ticks
```

Change the last line to `play_bars([straight, rolling, straight, rolling], 12)` and the triplets roll evenly, every bar the same length.

The failure is the program working as intended. The precondition turned a subtle timing bug into a one-line error message, before a single wrong note was played.

## What the contracts bought us

- **An invariant can justify a shortcut.** `lowest_terms` is the reason we could use Nex's default equality for `Duration` without writing our own.
- **Invariants record design decisions.** `Duration` normalises and `Meter` doesn't, and each class says so in a place readers will look.
- **An invariant only protects what the class owns.** `Bar` keeps its promise because its rhythm is private and copied in. Shared, mutable state is how invariants get broken from the outside.
- **Contracts cover the cases nobody thought to test.** `exact_in_ticks` is a rule about every duration, not an example of one, and it names the caller who chose the wrong resolution.

## Next: Scale and Chord

We have pitches, and we have time. [Part 3](music-with-nex-part-3.html) builds harmony on top of `Pitch` and `Interval`: a `Scale` as a set of steps from a tonic, a `Chord` whose tones are checked against it, and the payoff for the bug we fixed in `Interval.simple` in [Part 1](music-with-nex-part-1.html).

### Try it yourself

1. `gcd`'s postcondition is satisfied by `result := 1`. Replace the body with exactly that and see what happens to `Duration`. Does any contract fail? Then write a postcondition that rules the fake body out. (Hint: what is true of `a / result` and `b / result` when `result` really is the greatest common divisor?)
2. Write `smallest_resolution(bars: Array[Bar]): Integer`, the least number of ticks per quarter that renders every note in `bars` exactly. What should its postcondition promise, in terms of `to_ticks`?
3. Add `Meter.is_compound` (true for 6/8, 9/8 and 12/8) and a `beat_group: Duration` that returns a dotted quarter for compound meters and the plain beat otherwise. Which contract connects `beat_group` to `bar_length`?
