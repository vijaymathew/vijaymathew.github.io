---
title: "Characters, not code units: Strings and Chars in Nex"
tags: [unicode, internals]
summary: Since 0.7.3 a Nex Char is a Unicode code point and a String is a sequence of them, so an emoji counts as one character. Here is what that means in a program, and how the runtime does it while plain text stays as fast as a Java String.
draft: true
---

How long is `"😀"`? Ask Java or JavaScript and you get 2. Rust's `len` and Go's `len` say 4. Python says 1, and so does Swift. Each language is counting something different: UTF-16 code units, UTF-8 bytes, code points and grapheme clusters, in that order.

In Nex a `Char` is a Unicode code point, and a `String` is a sequence of `Char`s ([Appendix B.3](../docs/definition-of-nex/appendix-basis.html#sec-B.3)). So the answer is 1. Until version 0.7.2 Nex Strings were Java Strings, and `"😀".length` came back as 2. An emoji could not be stored in a `Char` at all, and `across` split it into two halves, neither of which is a character. This post discusses the changes in release 0.7.3 that brings Nex strings closer to Unicode conformance.

## How Nex sees characters

Lengths, positions and iteration count characters:

```
nex> "a😀b".length
3
nex> "a😀b".char_at(1)
#😀
nex> "a😀b".chars
[#a, #😀, #b]
nex> "a😀b".index_of("b")
2
nex> "a😀b".substring(1, 3)
"😀b"
```

`across "a😀b" as c do ... end` runs three times, and `c` is one whole character each time. `map`, `filter`, `fold` and the other functional methods also visit one character at a time.

A `Char` can hold any code point from `0` to `1114111` (`0x10FFFF`). There are three ways to write one. A literal can be the character itself or its code point after `#`. `to_char` turns an integer into a `Char`, and `to_integer` gives the integer back. A string escape `\u{...}` takes the code point in hexadecimal:

```
nex> #😀 = #128512
true
nex> #😀.to_integer
128512
nex> (128512).to_char
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

We stop at code points on purpose. Finding grapheme clusters, the units a reader sees, needs Unicode's segmentation rules and data tables. Those change with each Unicode version. A code point is a fixed integer that never changes. Libraries can work with grapheme clusters and normalization on top of code points, but they could not build code points on top of UTF-16 units.

## Inside: two forms of String

Nex runs on the JVM, where `java.lang.String` is a sequence of UTF-16 code units. Every character in the Basic Multilingual Plane (BMP), `U+0000` to `U+FFFF`, takes one unit. The characters beyond it take two, called a *surrogate pair*. These include emoji, some rare CJK ideographs, historic scripts and mathematical letters. Without surrogate pairs, unit `i` is character `i`. With them, finding character `i` means counting from the start.

There were a few ways to build code-point strings on the JVM:

- **Store an `int` per character.** Every string would take two to four times as much memory. Every call into Java would also need a conversion, and Nex calls into Java a lot: files, regex, the network and every library.
- **Store UTF-8 bytes.** This has the same conversion problem, and finding character `i` still takes a scan.
- **Keep `java.lang.String` and scan.** This is simple, but `char_at` and `length` would take time proportional to the string's length. A loop over the characters would take quadratic time.

Nex uses a different approach. In almost all text, no character needs a surrogate pair, and for that text UTF-16 indexing already counts characters. So a Nex String has two runtime forms, and the text decides which one it gets:

- A **plain `java.lang.String`** when the text has no surrogates. `length` and `char_at` are Java's own constant-time operations, so nothing changes for this text.
- A **`NexWideString`** when it has any. It keeps the same Java String along with its length in characters and a small index.

```clojure
(deftype NexWideString [^String s ^int n ^ints crumbs]
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

A `NexWideString` avoids the long walk with an index called breadcrumbs. Building the string already means walking it once to count its characters. During that walk the runtime writes down where every 64th character starts.

To keep the example small, suppose it wrote down every 4th character instead:

```
crumbs[0] = 0    -- character 0, a, starts at offset 0
crumbs[1] = 5    -- character 4, d, starts at offset 5
```

Now `char_at(6)` takes three steps:

1. Pick the crumb at or before character 6: 6 ÷ 4 = 1, so `crumbs[1]`. Character 4 starts at offset 5.
2. Work out how many characters are left to walk: 6 mod 4 = 2.
3. Walk 2 characters from offset 5. Stepping over `d` (one unit) reaches offset 6, and stepping over 😀 (two units) reaches offset 8, where `e` starts.

The walk is never more than 3 characters long, because the nearest crumb is never more than 3 characters back. With the real spacing of 64 the walk is at most 63 characters, however long the string is. Because 64 is 2⁶, the division and remainder become bit operations, `i >> 6` and `i & 63`:

```clojure
(defn- wide-offset [^NexWideString w ^long i]
  (if (>= i (.-n w))
    (long (.length ^String (.-s w)))
    (let [^String s (.-s w)
          k (bit-shift-right i crumb-shift)]          ; crumb-shift = 6
      (loop [off (long (aget ^ints (.-crumbs w) k))
             left (bit-and i crumb-mask)]             ; crumb-mask = 63
        (if (zero? left)
          off
          (recur (+ off (Character/charCount (.codePointAt s (int off)))) (dec left)))))))
```

So `char_at` and `substring` take a short, bounded number of steps on a wide string, however long it is.

`index_of` needs the reverse direction. It searches with Java's `indexOf` and gets back a UTF-16 offset that must become a character index. Suppose, in the example, Java reports offset 8:

1. Find the last crumb at or before offset 8. That is `crumbs[1]`: offset 5, character 4. The crumbs are in increasing order, so a binary search finds the right one.
2. Count the characters from offset 5 up to offset 8. There are two, `d` and 😀.
3. Add them to the crumb's character: 4 + 2 = 6.

The index costs one `int` for every 64 characters, and only strings that contain a surrogate have one.

Neither the idea nor the name is ours. Swift's standard library has [`_StringBreadcrumbs`](https://github.com/swiftlang/swift/blob/main/stdlib/public/core/StringBreadcrumbs.swift), which also uses a spacing of 64 and a binary search for the reverse lookup. It works in the other direction from ours. Swift strings are stored as UTF-8, and the crumbs make UTF-16 offsets fast for Objective-C APIs. PyPy stores its strings as UTF-8 and keeps an [index of character positions](https://github.com/pypy/pypy/blob/main/rpython/rlib/rutf8.py). It skips the index entirely for ASCII text, just as Nex leaves strings without surrogates alone.

### One form per text

The form depends only on the text. Every string that enters Nex goes through one function, `->nex-string`, and that rule holds for strings returned from Java, read from files and the console, received over HTTP, matched by a regex, parsed from JSON or decoded by `from_bytes`. The function checks for surrogates and wraps the string only when it finds one. Strings produced by a wide string's own methods go through the same function. That is why `equals` and `hashCode` above never have to compare a plain string with a wide one. Two equal texts always have the same form, so a wide string can be a `Map` key or a `Set` element without special cases.

The rule also gives a few shortcuts:

- **Concatenation.** Joining two plain strings needs no scan, because neither has a surrogate, so the result cannot have one either.
- **Substrings.** A piece of a wide string that happens to have no surrogates goes back through `->nex-string` and comes out as a plain string again.
- **Missed boundaries.** If a host string ever reaches Nex without passing through `->nex-string`, nothing crashes. That one string just behaves as it did before 0.7.3, counting UTF-16 units.

### Chars in the compiler

At run time a `Char` is a `NexChar`, a small object around an `int` code point. One instance for each code point below 256 is created in advance, because most characters a program handles are ASCII or Latin-1.

Compiled code stores a `Char` as a JVM `int`, not a JVM `char`. A JVM `char` has 16 bits and cannot hold `0x1F600`. When a `Char` is passed to or returned from a typed method, it is boxed as a `NexChar`. An `int` parameter would be ambiguous there, because a parameter typed `I` already means `Integer32`.

The compiled code gives a Nex String the JVM type `Object`, since it is one of two classes. A string literal without surrogates is an ordinary `ldc` constant. A literal with surrogates is a `ConstantDynamic`, which calls `make-nex-string` the first time it is used. After that the JVM keeps the `NexWideString`, so the breadcrumbs are built once per class, not on every use of the literal.

The compiler handles each crossing into Java:

- **A String into Java.** The Java method receives the plain `java.lang.String` text.
- **A String back from Java.** The returned string goes through `make-nex-string`.
- **A Char into a Java `char` parameter.** The Char must fit in 16 bits. Passing `#😀` to `Character.isSurrogate`, which takes only a `char`, is a type error. For a Java method that takes a code point as an `int`, pass `c.to_integer`.

Callbacks work in both directions. A Nex class can implement `java.io.FilenameFilter`, for example, and the file names Java passes to it arrive as Nex Strings, emoji included.

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

Plain strings still use Java's own `length` and `charAt`, behind one type check. Wide strings pay for a short walk on each `char_at`. To measure it, I built a 9,000-character string and summed its code points with `char_at` 10,000 times, which is 90 million calls. One version of the string had only ASCII characters and the other had an emoji in every ninth position. With startup subtracted, each turn of the ASCII loop took about 33 ns and each turn of the emoji loop about 89 ns. So a loop that does nothing but index a wide string runs at less than half speed. A program that does any other work in its loop will notice the difference less, and text without characters beyond the BMP pays nothing.

One trap turned up during the work. In Clojure 1.11, `(long c)` on a primitive `char` compiles to a reflective call, because Clojure has no `long` cast that takes a `char`. Each call takes about 5 µs, more than a hundred times the cost of a whole turn of the loop above. That one cast slowed `char_at` loops badly until it was changed to `(long (int c))`, which takes a few nanoseconds. The fix now has a comment next to it in the runtime.

## What's not done yet

**String order is UTF-16 order.** `compare` and sorting order Strings as Java does, by code unit. `Char`s are ordered by code point. The two orders differ only when a character above `U+FFFF` meets one between `U+E000` and `U+FFFF`. Here 😀 is `U+1F600` and ｡ is the halfwidth full stop `U+FF61`:

```
nex> "😀".compare("｡")
-1
nex> #😀.compare(#｡)
1
```

We kept Java's order so that Nex sorts strings the same way as the Java libraries it calls.

**Grapheme clusters and normalization.** As explained above, these belong in a library.

To summarize: a `Char` is a code point, a `String` counts code points, and text with no characters beyond the BMP is still a plain Java String. The tests in [`test/nex/unicode_string_test.clj`](https://github.com/vijaymathew/nex/blob/main/test/nex/unicode_string_test.clj) check that the two forms never show in a program, on both backends.
