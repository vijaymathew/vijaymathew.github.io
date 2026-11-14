---
title: "Characters, not code units: Strings and Chars in Nex"
tags: [unicode, internals]
summary: How Nex Strings count Unicode characters without slowing down ordinary text.
---

How long is `"😀"`? Ask Java or JavaScript and you get 2. Rust's `len` and Go's `len` say 4. Python says 1, and so does Swift. Each language is counting something different: UTF-16 code units, UTF-8 bytes, code points and grapheme clusters, in that order.

In Nex a `Char` is a Unicode code point, and a `String` is a sequence of `Char`s ([Appendix B.3](../docs/definition-of-nex/appendix-basis.html#sec-B.3)). So the answer is 1. Up to version 0.7.2, Nex Strings were Java Strings, and `"😀".length` came back as 2. An emoji could not be stored in a `Char` at all, and `across` split it into two halves, neither of which is a character. This post discusses the changes in release 0.7.3 that bring Nex strings closer to Unicode conformance, and the work in 0.7.4 that made them faster.

## How Nex sees characters

Lengths, positions and iteration count characters:

```
nex> "a😀b".length
3
nex> "a😀b".char_at(1)
#😀
nex> "a😀b".index_of("b")
2
nex> "a😀b".substring(1, 3)
"😀b"
nex> across "a😀b" as c do print(c) end
#a
#😀
#b
nex> "a😀b".map(fn (x) => x.to_integer)
[97, 128512, 98]
```

`across "a😀b" as c do ... end` runs three times, and `c` is one whole character each time. `map`, `filter`, `fold` and the other functional methods also visit one character at a time.

A `Char` can hold any code point from `0` to `1114111` (`0x10FFFF`). A `Char` literal is the character itself or its code point after `#`. `to_char` turns an integer into a `Char`, and `to_integer` gives the integer back. Inside a string, the escape `\u{...}` takes the code point in hexadecimal:

```
nex> #😀 = #128512
true
nex> #😀.to_integer
128512
nex> 128512.to_char
#😀
nex> "\u{1F600}" = "😀"
true
```

The encoding shows up in only one place, which is converting to and from bytes. That conversion uses UTF-8:

```
nex> "😀".to_bytes
[240, 159, 152, 128]
nex> create String.from_bytes("😀".to_bytes)
"😀"
nex> "こんにちは".length
5
nex> "こんにちは".to_bytes.length
15
```

## Code points vs characters

A code point is not always what a reader thinks of as one character. An accented letter can be stored as a single code point, or as a base letter followed by a combining mark. A flag is two "regional indicator" code points. A family emoji is three people joined by two invisible joiners:

```
nex> "é".length
1
nex> "e\u{301}"
"é"
nex> "e\u{301}".length
2
nex> "é" = "e\u{301}"
false
nex> "🇮🇳".length
2
nex> "👨‍👩‍👧".length
5
```

Nex does not normalize text. The two spellings of `é` above print the same, but they are different strings. Case changes can also change the length, which is why `Char.to_upper` returns a `String`:

```
nex> #ß.to_upper
"SS"
```

We stop at code points on purpose. A code point is a fixed integer: `U+1F600` is 😀 in every Unicode version. Grapheme clusters, the units a reader sees, are found with segmentation rules and data tables that change with each Unicode version. If `length` counted grapheme clusters, the same string could get a different length after a Unicode upgrade. Libraries can provide grapheme clusters and normalization on top of code points.

## Inside: two forms of String

Nex runs on the JVM, where `java.lang.String` is a sequence of UTF-16 code units. Every character in the Basic Multilingual Plane (BMP), `U+0000` to `U+FFFF`, takes one unit. The characters beyond it take two, called a *surrogate pair*. These include emoji, some rare CJK ideographs, historic scripts and mathematical letters. Without surrogate pairs, unit `i` is character `i`. With them, finding character `i` means counting from the start.

There were a few ways to build code-point strings on the JVM:

- **Store an `int` per character.** Every string would take two to four times as much memory. Every call into Java would also need a conversion, and Nex calls into Java a lot: files, regex, the network and every library.
- **Store UTF-8 bytes.** This has the same conversion problem, and finding character `i` still takes a scan.
- **Keep `java.lang.String` and scan.** This is simple, but `char_at` and `length` would take time proportional to the string's length. A loop over the characters would take quadratic time.

Nex uses a different approach. In almost all text, no character needs a surrogate pair, and for that text UTF-16 indexing already counts characters. So a Nex String has two runtime forms, and the text decides which one it gets:

- A **plain `java.lang.String`** when the text has no surrogates. `length` and `char_at` are Java's own constant-time operations, so nothing changes for this text.
- A **`NexWideString`** when it has any. It keeps the same Java String along with its length in characters, a small index and a cursor.

```clojure
(deftype NexWideString [^String s ^int n ^ints crumbs ^AtomicLong cursor]
  Object
  (toString [_] s)
  (equals [_ o] (and (instance? NexWideString o) (.equals s (.-s ^NexWideString o))))
  (hashCode [_] (.hashCode s))
  ...
  ;; The UTF-16 view, for Java APIs that take a CharSequence.
  CharSequence
  (length [_] (.length s))
  (charAt [_ i] (.charAt s i))
  ...)
```

### Breadcrumbs

Take `"ab😀cd😀ef"`. It has 8 characters but 10 UTF-16 units, because each 😀 takes two:

```
character index:  0   1   2       3   4   5       6   7
character:        a   b   😀      c   d   😀      e   f
UTF-16 offset:    0   1   2  3    4   5   6  7    8   9
```

`char_at(6)` should give `e`, which starts at offset 8. Java's `charAt(6)` gives the unit at offset 6, the first half of the second 😀. The only way to get from a character index to an offset is to walk from the start, adding 1 for each ordinary character and 2 for each 😀. On a long string, `char_at` near the end would take as many steps as there are characters. A loop calling it for every character would take time proportional to the square of the length.

A `NexWideString` avoids the long walk with an index called breadcrumbs. Building the string already means walking it once to count its characters. During that walk the runtime writes down where every 32nd character starts.

To keep the example small, suppose it wrote down every 4th character instead:

```
crumbs[0] = 0    -- character 0, a, starts at offset 0
crumbs[1] = 5    -- character 4, d, starts at offset 5
```

Now `char_at(6)` takes three steps:

1. Pick the crumb at or before character 6: 6 ÷ 4 = 1, so `crumbs[1]`. Character 4 starts at offset 5.
2. Work out how many characters are left to walk: 6 mod 4 = 2.
3. Walk 2 characters from offset 5. Stepping over `d` (one unit) reaches offset 6, and stepping over 😀 (two units) reaches offset 8, where `e` starts.

The walk is never more than 3 characters long, because the nearest crumb is never more than 3 characters back. With the real spacing of 32 the walk is at most 31 characters, however long the string is. Because 32 is 2⁵, the division and remainder become bit operations, `i >> 5` and `i & 31`. Leaving out the two shortcuts described below, the lookup is:

```clojure
(defn- wide-offset [^NexWideString w ^long i]
  (if (>= i (.-n w))
    (long (.length ^String (.-s w)))
    (let [^String s (.-s w)
          k (bit-shift-right i crumb-shift)]          ; crumb-shift = 5
      (loop [off (long (aget ^ints (.-crumbs w) k))
             left (bit-and i crumb-mask)]             ; crumb-mask = 31
        (if (zero? left)
          off
          (recur (+ off (Character/charCount (.codePointAt s (int off)))) (dec left)))))))
```

So `char_at` and `substring` take a short, bounded number of steps on a wide string, however long it is.

### Skipping the walk

A short walk still costs something on every call. Release 0.7.4 added two shortcuts that avoid most walks.

**Blocks without surrogate pairs.** The crumbs divide the string into blocks of 32 characters. A block that holds no surrogate pair spans exactly 32 UTF-16 units, so the next crumb is 32 units after its own. In such a block, character `i` is at its crumb's offset plus `i & 31`, with no walk at all. Text with an occasional emoji is mostly blocks like that. Only the block that holds the emoji needs a walk.

**A cursor.** Most loops ask for character `i`, then `i + 1`, then `i + 2`. Each lookup would walk from the same crumb as the one before, over the same characters. So a wide string remembers the last character it found and its offset. When the next character asked for is in the same block and not before the cursor, the walk starts at the cursor. In the example, after `char_at(6)` has found offset 8, `char_at(7)` takes one step from there instead of three from `crumbs[1]`. A loop over every character then takes one step per character.

A Nex String is immutable, but the cursor changes, and two threads can use the same string at once. The cursor is therefore one `long`, the character in the high 32 bits and the offset in the low 32, read and written as a single value through an `AtomicLong`. A thread may see a cursor that another thread just moved, but it always sees a character together with its own offset, and since the text never changes, any such pair is correct. The accesses use the `AtomicLong`'s opaque mode, which guarantees exactly that and adds no memory fence.

`index_of` needs the reverse direction. It searches with Java's `indexOf` and gets back a UTF-16 offset that must become a character index. Suppose, in the example, Java reports offset 8:

1. Find the last crumb at or before offset 8. That is `crumbs[1]`: offset 5, character 4. The crumbs are in increasing order, so a binary search finds the right one.
2. Count the characters from offset 5 up to offset 8. There are two, `d` and 😀.
3. Add them to the crumb's character: 4 + 2 = 6.

The index costs one `int` for every 32 characters and one `AtomicLong` for the cursor, and only strings that contain a surrogate have them.

The "breadcrumbs" idea is borrowed from Swift's standard library, which has [`_StringBreadcrumbs`](https://github.com/swiftlang/swift/blob/main/stdlib/public/core/StringBreadcrumbs.swift) with a binary search for the reverse lookup. Swift places a crumb every 64 characters. Nex started with 64 too, and moved to 32 in 0.7.4 because it made random access about a quarter faster, at the cost of twice as many crumbs: one `int` per 32 characters instead of one per 64. Swift's crumbs also work in the other direction from ours. Swift strings are stored as UTF-8, and the crumbs make UTF-16 offsets fast for Objective-C APIs. PyPy stores its strings as UTF-8 and keeps an [index of character positions](https://github.com/pypy/pypy/blob/main/rpython/rlib/rutf8.py). It skips the index entirely for ASCII text, just as Nex leaves strings without surrogates alone.

### One form per text

The form depends only on the text. Every string that enters Nex goes through one function, `->nex-string`, and that rule holds for strings returned from Java, read from files and the console, received over HTTP, matched by a regex, parsed from JSON or decoded by `from_bytes`. The function checks for surrogates and wraps the string only when it finds one. Strings produced by a wide string's own methods go through the same function. That is why `equals` and `hashCode` above never have to compare a plain string with a wide one. Two equal texts always have the same form, so a wide string can be a `Map` key or a `Set` element without special cases.

The rule also gives two shortcuts:

- **Concatenation.** Joining two plain strings needs no scan, because neither has a surrogate, so the result cannot have one either.
- **Substrings.** A piece of a wide string that happens to have no surrogates goes back through `->nex-string` and comes out as a plain string again.

The rule only holds if no string gets past `->nex-string`. A host string with a surrogate that skipped it would stay a plain Java String. It would count UTF-16 units, as before 0.7.3, and it would not be equal to the wide string with the same text, so as a `Map` key or `Set` element it would not be found. That is why the compiler routes every crossing from Java through the same function, as described below.

### How Chars are represented

At run time a `Char` is a `NexChar`, a small object around an `int` code point. One instance for each code point below 256 is created in advance, because most characters a program handles are ASCII or Latin-1.

Compiled code stores a `Char` as a JVM `int`, not a JVM `char`. A JVM `char` has 16 bits and cannot hold `0x1F600`. When a `Char` is passed to or returned from a typed method, it is boxed as a `NexChar`. An `int` parameter would be ambiguous there, because a parameter typed `I` already means `Integer32`.

The compiled code gives a Nex String the JVM type `Object`, since it is one of two classes. A string literal without surrogates is an ordinary `ldc` constant. A literal with surrogates is a `ConstantDynamic`, which calls `->nex-string` the first time it is used. After that the JVM keeps the `NexWideString`, so the breadcrumbs are built once per class, not on every use of the literal.

The compiler handles each crossing into Java:

- **A String into Java.** The Java method receives the plain `java.lang.String` text.
- **A String back from Java.** The returned string goes through `->nex-string`.
- **A Char into a Java `char` parameter.** The Char must fit in 16 bits. Passing `#😀` to `Character.isSurrogate`, which takes only a `char`, is a type error. For a Java method that takes a code point as an `int`, pass `c.to_integer`.

Callbacks work too. A Nex class can implement `java.io.FilenameFilter`, for example, and the file names Java passes to it arrive as Nex Strings, emoji included.

### Unpaired surrogates

Java text can contain half of a surrogate pair with no partner. This is usually a bug in some other program, but it does happen. Nex counts an unpaired surrogate as one character, so indexing still works. Converting it to UTF-8 is an error:

```
nex> "a\u{D800}b".length
3
nex> "a\u{D800}b".to_bytes
Error: String.to_bytes: the text holds an unpaired surrogate, which is not a character
```

Before 0.7.3, `to_bytes` wrote a `?` for the unpaired surrogate and the original text was lost. Now `to_bytes` raises a `Conversion_Error` instead, as `from_bytes` does on bytes that are not UTF-8. As a result, `create String.from_bytes(s.to_bytes)` always gives back `s`.

## What it costs

Plain strings use Java's own `length` and `charAt`. Since 0.7.4, compiled code calls `char_at` through a small helper that takes and returns primitive values, and `Char.to_integer` compiles to a single JVM instruction, because a compiled `Char` is already an `int`. Wide strings pay for a shortcut or a short walk on each `char_at`.

To measure it, the [`char_at` and `char_at_wide` benchmarks](https://github.com/vijaymathew/nex/tree/main/benchmarks) build a 9,000-character string and sum its code points with `char_at` 10,000 times, which is 90 million calls. One string has only ASCII characters. The other has 😀 in every ninth position, so every 32-character block holds a surrogate pair and needs a walk. These are the times of the loop alone, the median of 5 runs of compiled code with Nex 0.7.4 on an Intel Core i5-10400F with OpenJDK 25:

| string | Nex | Java | Python |
|---|--:|--:|--:|
| ASCII | 238 ms (2.6 ns per call) | 70 ms | 5.37 s |
| 😀 in every ninth position | 1.34 s (15 ns per call) | 23 ms | 6.01 s |

Java has no constant-time indexing by code point, so its version of the second benchmark copies the code points into an `int` array first and indexes that. It shows what plain array access costs, not another way to store strings. Python indexes by code point natively.

The cursor keeps the wide loop at 15 ns, because each call walks one character. Visiting the same string in a scattered order, where the cursor can't help, took about 49 ns per call in a separate run: the cost of the average walk of 15 characters. A string that was ASCII except for one emoji took about 11 ns, since all but one of its blocks skip the walk. A program that does any other work in its loop will notice these differences less, and text without characters beyond the BMP pays nothing.

## What's not done yet

**String order is UTF-16 order.** `compare` and sorting order Strings as Java does, by code unit. `Char`s are ordered by code point. The two orders differ only when a character above `U+FFFF` meets one between `U+E000` and `U+FFFF`. Here 😀 is `U+1F600` and ｡ is the halfwidth full stop `U+FF61`:

```
nex> "😀".compare("｡")
-1
nex> #😀.compare(#｡)
1
```

I kept Java's order so that Nex sorts strings the same way as the Java libraries it calls.

**Grapheme clusters and normalization.** As explained above, these belong in a library.

To summarize: a `Char` is a code point, a `String` counts code points, and text with no characters beyond the BMP is still a plain Java String.