# Chapter 7: Does This File Contain That Word? — Exact String Matching

---

Open a terminal. Type `grep "error" application.log`. Press enter.

In milliseconds, grep has scanned a file that might contain millions of lines and returned every line containing the word "error." You have done this hundreds of times. It has always been fast. You have probably never wondered why.

The naive approach to this problem — check every position in the text to see if the pattern starts there — is O(nm), where n is the length of the text and m is the length of the pattern. For a 100MB log file and a 5-character pattern, that is roughly 500 million character comparisons. At a billion comparisons per second, that is half a second. Not terrible, but grep is faster than that, often by an order of magnitude.

The reason grep is fast is that it does not check every position naively. It uses algorithms that skip large portions of the text based on information gathered either from the pattern itself or from mismatches during search. Understanding how and why those skips are valid is the subject of this chapter.

We will build three algorithms: the naive algorithm as the baseline and the lens through which we understand what improvement means; Knuth-Morris-Pratt (KMP), which skips based on the structure of the pattern; and Boyer-Moore-Horspool, which skips based on characters in the text. They represent two fundamentally different ways of thinking about the string matching problem, and understanding both changes how you see any text processing problem you encounter.

---

## 7.1 The Problem, Precisely

Given a text T of length n and a pattern P of length m, find all positions i in T such that T[i..i+m-1] = P[0..m-1].

A position is a zero-based index into T. We want all positions, not just the first, because a log file might contain the word "error" ten thousand times and you want to know where each occurrence is.

The problem sounds simple, and in some sense it is — the brute-force solution is straightforward to implement correctly. The challenge is doing it efficiently for the cases that actually arise in practice: patterns that are substrings of repetitive text, patterns with repeated characters, patterns that almost-but-not-quite match at many positions.

We fix some notation. T[i] is the character at position i in the text. P[j] is the character at position j in the pattern. A match at position i means T[i+j] = P[j] for all j from 0 to m-1. We call position i a candidate position during the search.

---

## 7.2 The Naive Algorithm

The naive algorithm is the direct translation of the definition.

```
function naive_search(text: String, pattern: String): Array[Integer]
  require
    non_empty_pattern: pattern.length > 0
  do
    let n: Integer := text.length
    let m: Integer := pattern.length
    let positions: Array[Integer] := []

    from
      let i: Integer := 0
    until
      i > n - m
    do
      let j: Integer := 0
      from until j >= m or text.char_at(i + j) /= pattern.char_at(j) do
        j := j + 1
      end
      if j = m then
        positions.add(i)
      end
      i := i + 1
    end

    result := positions
  end
```

For each of the n - m + 1 candidate positions, we compare up to m characters. Worst case is O(nm).

The worst case is not just theoretical. It arises with repetitive patterns and texts. Searching for "aaab" in "aaaaaaaaaaaaaaaa" (all a's): at each position, we compare three a's successfully and then find there is no b, so we shift by one and repeat. Nearly m comparisons per position, nm total.

Natural language text behaves differently. Searching for "error" in English prose: at most positions, the first character comparison fails (most characters are not 'e'), so most positions cost exactly one comparison. The naive algorithm performs acceptably on natural text — grep uses Boyer-Moore-Horspool precisely because real log files are neither natural language nor worst-case repetitive, but something in between.

The naive algorithm is also correct, complete, and easy to verify. We keep it as our reference implementation: if the output of a faster algorithm differs from the naive algorithm on any input, the faster algorithm has a bug.

---

## 7.3 What Improvement Looks Like

Before presenting KMP or Boyer-Moore-Horspool, it is worth being precise about what "improvement" means and where the opportunity lies.

Every string matching algorithm must examine each matching position — you cannot report a match without verifying it. The opportunity for improvement is in what you do after a mismatch.

The naive algorithm throws away all information from a mismatch. It shifts the pattern one position to the right and restarts comparison from the beginning of the pattern. This is wasteful: the comparisons performed before the mismatch revealed something about the text. If we matched three characters before failing on the fourth, we know exactly what those three characters are. A smarter algorithm uses that knowledge to skip ahead.

Two different sources of information lead to two different families of algorithms.

**Pattern information:** if the pattern has internal structure — repeated substrings, prefixes that appear later in the pattern — we can sometimes determine from a mismatch that several candidate positions can be skipped without even looking at the corresponding text characters. KMP exploits this.

**Text information:** the character that caused the mismatch is part of the text. If that character does not appear in the pattern at all, no pattern position that aligns with it can possibly match. We can skip the pattern past that character. Boyer-Moore and its variant Horspool exploit this.

Both approaches are correct. Neither is universally faster. Real implementations — including grep — often use heuristics to switch between them based on pattern properties.

---

## 7.4 Knuth-Morris-Pratt

### The Failure Function

KMP was published in 1977 by Donald Knuth, James Morris, and Vaughan Pratt. Its key insight is that when a mismatch occurs at position j in the pattern, you do not need to restart comparison from position 0. The characters T[i..i+j-1] = P[0..j-1] have already been matched — you know them. If some proper prefix of P[0..j-1] is also a suffix of P[0..j-1], you can continue matching from the end of that prefix rather than from the beginning of the pattern.

This requires preprocessing the pattern to compute, for each position j, the longest proper prefix of P[0..j-1] that is also a suffix of P[0..j-1]. This is the failure function (sometimes called the partial match table or the prefix function), and it is the heart of KMP.

Define failure[j] as the length of the longest proper prefix of P[0..j-1] that is also a suffix of P[0..j-1]. "Proper" means strictly shorter than the string itself — the whole string does not count.

Example: P = "abcabd"

- failure[0] = 0 (empty prefix, by convention)
- failure[1] = 0 (P[0..0] = "a", no proper prefix that is also a suffix)
- failure[2] = 0 (P[0..1] = "ab", no match)
- failure[3] = 1 (P[0..2] = "abc", prefix "a" = suffix "a")
- failure[4] = 2 (P[0..3] = "abca", prefix "ab" = suffix "ab")
- failure[5] = 3 (P[0..4] = "abcab", prefix "abc" = suffix "abc")

Wait — let us verify that last one. P[0..4] = "abcab". Proper prefixes of length 1,2,3,4: "a","ab","abc","abca". Proper suffixes of length 1,2,3,4: "b","ab","cab","bcab". Longest proper prefix that is also a suffix: "ab" (length 2), not "abc". Let us recompute.

failure[5]: P[0..4] = "abcab". Suffixes: "b","ab","cab","bcab". Prefixes: "a","ab","abc","abca". Match: "ab" (length 2). So failure[5] = 2.

And failure[6]: P[0..5] = "abcabd". Suffixes: "d","bd","abd","cabd","bcabd". Prefixes: "a","ab","abc","abca","abcab". No match. failure[6] = 0.

Building the failure function:

```
function build_failure(pattern: String): Array[Integer]
  require
    non_empty: pattern.length > 0
  do
    let m: Integer := pattern.length
    let failure: Array[Integer] := Array.filled(m, 0)
    -- failure[0] is always 0 by definition

    let k: Integer := 0  -- length of current matching prefix
    from
      let j: Integer := 1
    until
      j >= m
    do
      -- failure[j]: longest proper prefix of pattern[0..j-1]
      -- that is also a suffix
      from until k = 0 or pattern.char_at(k) = pattern.char_at(j) do
        k := failure.get(k - 1)
      end
      if pattern.char_at(k) = pattern.char_at(j) then
        k := k + 1
      end
      failure.set(j, k)
      j := j + 1
    end

    result := failure
  end
```

The failure function is computed in O(m) time. The inner loop looks like it might be O(m²) due to the `from until` that decrements k, but amortised analysis shows k can decrease at most as many times total as it increases, and k increases at most m times, so the total work is O(m).

### The Search

With the failure function in hand, the search is a single pass through the text:

```
function kmp_search(text: String, pattern: String): Array[Integer]
  require
    non_empty_pattern: pattern.length > 0
  do
    let n: Integer := text.length
    let m: Integer := pattern.length
    let failure: Array[Integer] := build_failure(pattern)
    let positions: Array[Integer] := []
    let j: Integer := 0  -- number of characters matched

    from
      let i: Integer := 0
    until
      i >= n
    do
      -- Try to extend the current match
      from until j = 0 or text.char_at(i) = pattern.char_at(j) do
        j := failure.get(j - 1)
      end

      if text.char_at(i) = pattern.char_at(j) then
        j := j + 1
      end

      if j = m then
        -- Found a match ending at position i
        positions.add(i - m + 1)
        -- Use failure function to find next possible match
        j := failure.get(j - 1)
      end

      i := i + 1
    end

    result := positions
  end
```

The key invariant: before examining T[i], we know that T[i-j..i-1] = P[0..j-1]. j is the length of the longest prefix of the pattern that matches a suffix of the text we have seen so far.

When T[i] ≠ P[j], we use the failure function to find the next longest prefix that could still match. We set j := failure[j-1], which tells us: "the longest proper prefix of P[0..j-1] that is also a suffix has length failure[j-1]; try matching P[failure[j-1]] against T[i] instead."

When T[i] = P[j], we extend the match and advance.

When j = m, we have matched the entire pattern. We record the position and reset j using the failure function, because the matched region might overlap with the next match — the last failure[m-1] characters of this match could be the beginning of the next match.

### Analysis

KMP is O(n + m): O(m) to build the failure function, O(n) to search (each character T[i] is examined once, and the total number of decrements of j is bounded by the total number of increments, which is at most n).

This is a worst-case guarantee, not an average case. On repetitive text — "aaab" in "aaaaaa..." — KMP performs in O(n) where naive performs in O(nm). On natural language text with short patterns, the difference is small because naive already performs nearly O(n) (most comparisons fail at the first character).

### What the Failure Function Reveals

The failure function is not just a performance tool. It reveals the internal structure of the pattern in a way that has applications beyond string searching — it answers the question "what is the longest string that is both a prefix and a suffix of this pattern?" which appears in problems from data compression to periodic string analysis.

A pattern is periodic if it has a period of length p, meaning P[i] = P[i+p] for all valid i. The failure function tells you: the pattern has period m - failure[m-1]. "abcabc" has failure[5] = 3, so period = 6 - 3 = 3, which is correct — "abc" repeats.

This kind of structural insight — an algorithm revealing something deep about its input — is a recurring theme in string algorithms, and KMP is its clearest example.

---

## 7.5 Boyer-Moore-Horspool

### A Different Philosophy

KMP preprocesses the pattern and uses mismatch information to avoid restarting from position 0. Boyer-Moore takes a completely different approach: instead of scanning the text left-to-right, it scans the pattern right-to-left, and uses the character in the text that caused the mismatch to skip the pattern forward by potentially large amounts.

The intuition is elegant. Align the pattern with the text. Compare the last character of the pattern to the character aligned with it in the text. If they match, compare the second-to-last, and so on. If at any point they do not match, look at the text character that caused the mismatch and ask: does this character appear anywhere in the pattern to the left of the current alignment? If not, shift the pattern completely past the mismatch character — you know that no alignment that puts this text character under any part of the pattern can succeed, because the character is not in the pattern at all. If yes, shift the pattern to align its rightmost occurrence of the mismatch character with the mismatch position.

The Boyer-Moore-Horspool variant (Horspool, 1980) simplifies the original Boyer-Moore algorithm by using only the bad character heuristic applied to the last character of the pattern window, not the character that caused the mismatch. This simplification loses a small amount of theoretical performance but is easier to implement, cache-friendly, and faster in practice for most inputs.

### The Bad Character Table

Preprocess the pattern to build a skip table: for each possible character c, what is the rightmost occurrence of c in the pattern (not counting the last character of the pattern), and how far can we shift the pattern if c is the character aligned with the last position of the pattern window?

```
function build_skip_table(pattern: String): Map[Char, Integer]
  require
    non_empty: pattern.length > 0
  do
    let m: Integer := pattern.length
    let skip: Map[Char, Integer] := {}

    -- For any character not in the table, skip by m (full pattern length)
    -- For character at position i (0-indexed, not including last position),
    -- skip by m - 1 - i

    from
      let i: Integer := 0
    until
      i < m - 1
    do
      skip.put(pattern.char_at(i), m - 1 - i)
      i := i + 1
    end

    result := skip
  end

function get_skip(table: Map[Char, Integer],
                  c: Char,
                  pattern_length: Integer): Integer do
  let val: ?Integer := table.get(c)
  if val = nil then
    result := pattern_length
  else
    result := val
  end
end
```

Note: we do not include the last character of the pattern in the skip table computation (the loop goes up to `m - 1`, exclusive). If we included it, we might get a skip of 0, which would cause an infinite loop. The last character is excluded because we always look at the character aligned with the last position of the pattern window, and that character is what we use to determine the skip — including it in the table would be circular.

### The Search

```
function horspool_search(text: String, pattern: String): Array[Integer]
  require
    non_empty_pattern: pattern.length > 0
  do
    let n: Integer := text.length
    let m: Integer := pattern.length
    let skip: Map[Char, Integer] := build_skip_table(pattern)
    let positions: Array[Integer] := []

    from
      let i: Integer := 0
    until
      i > n - m
    do
      -- Compare pattern right-to-left
      let j: Integer := m - 1
      from until j < 0 or text.char_at(i + j) /= pattern.char_at(j) do
        j := j - 1
      end

      if j < 0 then
        -- Full match
        positions.add(i)
        i := i + 1  -- shift by 1 after a match to find overlapping matches
      else
        -- Mismatch: use the character aligned with the last pattern position
        let last_text_char: Char := text.char_at(i + m - 1)
        i := i + get_skip(skip, last_text_char, m)
      end
    end

    result := positions
  end
```

Trace through an example. Pattern = "FIND", text = "THERE IS A SIMPLE EXAMPLE HERE".

The skip table for "FIND": F→3, I→2, N→1. Any other character → 4 (the full pattern length).

Align pattern at position 0: text[0..3] = "THER". Check text[3] = 'R' against pattern[3] = 'D'. Mismatch. text[i + m - 1] = text[3] = 'R'. 'R' is not in the skip table. Skip by 4. i = 4.

Align at position 4: text[4..7] = "E IS". Check text[7] = 'S' against 'D'. Mismatch. 'S' not in table. Skip by 4. i = 8.

Align at position 8: text[8..11] = "A SI". Check text[11] = 'I' against 'D'. Mismatch. 'I' → skip 2. i = 10.

Align at position 10: text[10..13] = "SIMP". Check text[13] = 'P' against 'D'. Mismatch. 'P' not in table. Skip by 4. i = 14.

And so on. Notice that at position 8, the character 'I' in the text caused a skip of only 2 because 'I' appears in "FIND" — specifically at position 1, which is m - 1 - 1 = 2 positions from the right. The algorithm shifts the pattern to align the 'I' in the pattern with the 'I' in the text.

### Analysis

Horspool's worst case is O(nm) — the same as naive. This occurs with highly repetitive patterns and texts, like "aaaa" in "aaaaaaaaaa". However, its best case is O(n/m) — examining only every mth character — which arises when the last character of the pattern is rare in the text. For patterns with m = 5 and a last character that does not appear in the text, Horspool makes n/5 comparisons, a 5x speedup over the O(n) minimum that KMP achieves.

In practice, on natural text and typical log file patterns, Horspool is faster than KMP because natural text has sufficient character diversity to make large skips common. This is why real grep implementations prefer Boyer-Moore-based approaches for typical inputs.

---

## 7.6 A Complete Implementation with Testing

Any string matching implementation must be tested against the naive algorithm to verify correctness. The contract here is not just preconditions and postconditions on individual functions — it is a cross-implementation consistency check:

```
class String_Matcher
  create
    make() do end

  feature
    -- Find all occurrences of pattern in text
    find_all(text: String, pattern: String,
             algorithm: String): Array[Integer]
      require
        non_empty_pattern: pattern.length > 0
        valid_algorithm: algorithm = "naive" or
                         algorithm = "kmp" or
                         algorithm = "horspool"
      do
        case algorithm of
          "naive"    then result := naive_search(text, pattern)
          "kmp"      then result := kmp_search(text, pattern)
          "horspool" then result := horspool_search(text, pattern)
        end
      end

    -- Verify two algorithms agree on all test cases
    verify(text: String, pattern: String): Boolean do
      let naive_result: Array[Integer] :=
        naive_search(text, pattern)
      let kmp_result: Array[Integer] :=
        kmp_search(text, pattern)
      let horspool_result: Array[Integer] :=
        horspool_search(text, pattern)

      result := arrays_equal(naive_result, kmp_result) and
                arrays_equal(naive_result, horspool_result)
    end

    -- Count occurrences (useful for high-frequency queries)
    count(text: String, pattern: String): Integer do
      result := horspool_search(text, pattern).length
    end

    -- Find first occurrence only
    find_first(text: String, pattern: String): Integer do
      let positions: Array[Integer] := horspool_search(text, pattern)
      if positions.is_empty() then
        result := -1
      else
        result := positions.get(0)
      end
    end

    -- Find last occurrence only
    find_last(text: String, pattern: String): Integer do
      let positions: Array[Integer] := horspool_search(text, pattern)
      if positions.is_empty() then
        result := -1
      else
        result := positions.get(positions.length - 1)
      end
    end

    -- Check containment
    contains(text: String, pattern: String): Boolean do
      result := find_first(text, pattern) /= -1
    end
end
```

A test suite that covers the cases where naive algorithms typically fail:

```
function run_correctness_tests(): Boolean do
  let matcher: String_Matcher := create String_Matcher.make()
  let all_passed: Boolean := true

  -- Basic match
  all_passed := all_passed and
    matcher.verify("hello world", "world")

  -- No match
  all_passed := all_passed and
    matcher.verify("hello world", "xyz")

  -- Pattern at start
  all_passed := all_passed and
    matcher.verify("hello world", "hello")

  -- Pattern is entire text
  all_passed := all_passed and
    matcher.verify("hello", "hello")

  -- Pattern longer than text
  all_passed := all_passed and
    matcher.verify("hi", "hello")

  -- Multiple occurrences
  all_passed := all_passed and
    matcher.verify("ababab", "ab")

  -- Overlapping occurrences
  all_passed := all_passed and
    matcher.verify("aaa", "aa")

  -- Worst case for naive: repetitive pattern and text
  let repetitive_text: String := "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  let repetitive_pattern: String := "aaaaaaaaaa"
  all_passed := all_passed and
    matcher.verify(repetitive_text, repetitive_pattern)

  -- KMP worst case: pattern with long proper prefix-suffix
  all_passed := all_passed and
    matcher.verify("abcabcabcabd", "abcabd")

  -- Horspool worst case: all same characters
  all_passed := all_passed and
    matcher.verify("aaaaaaaaaa", "aaaa")

  -- Pattern with repeated characters
  all_passed := all_passed and
    matcher.verify("mississippi", "issi")

  -- Single character pattern
  all_passed := all_passed and
    matcher.verify("hello world", "l")

  -- Single character text
  all_passed := all_passed and
    matcher.verify("a", "a")

  result := all_passed
end
```

Running both KMP and Horspool against the naive algorithm on every test case is not optional. These algorithms have subtle bugs in almost every student implementation — off-by-one errors in the failure function, incorrect handling of overlapping matches, wrong skip table computation for patterns with repeated characters. The only reliable way to catch them is cross-validation against a known-correct reference.

---

## 7.7 Benchmarking: When Each Algorithm Wins

The theoretical analysis tells us when each algorithm is asymptotically better. Benchmarking tells us when each is practically faster for the inputs we actually have.

```
function benchmark(text: String, pattern: String) do
  let matcher: String_Matcher := create String_Matcher.make()
  let iterations: Integer := 100

  let naive_start: Integer64 := current_time_ms()
  repeat iterations do
    matcher.find_all(text, pattern, "naive")
  end
  let naive_time: Integer64 := current_time_ms() - naive_start

  let kmp_start: Integer64 := current_time_ms()
  repeat iterations do
    matcher.find_all(text, pattern, "kmp")
  end
  let kmp_time: Integer64 := current_time_ms() - kmp_start

  let horspool_start: Integer64 := current_time_ms()
  repeat iterations do
    matcher.find_all(text, pattern, "horspool")
  end
  let horspool_time: Integer64 := current_time_ms() - horspool_start

  print("Pattern length: " + pattern.length.to_string())
  print("Text length: " + text.length.to_string())
  print("Naive: " + naive_time.to_string() + "ms")
  print("KMP: " + kmp_time.to_string() + "ms")
  print("Horspool: " + horspool_time.to_string() + "ms")
end
```

Running this benchmark across different scenarios reveals a consistent pattern:

**Natural language text, short patterns (2-8 characters):** Horspool wins significantly. The character diversity of English means the skip table typically skips 3-6 positions per step. KMP is marginally faster than naive, but both trail Horspool.

**Binary or repetitive text, periodic patterns:** KMP wins. The failure function handles repetitive patterns gracefully. Horspool degrades toward naive because the skip table values are small when the pattern characters all appear frequently in the text.

**Very long patterns (100+ characters):** Horspool wins dramatically. The skip table skips by up to m = 100 characters per step on a mismatch, examining only n/100 positions in the best case. KMP examines every position.

**Patterns with long common prefix-suffix:** KMP wins. If the pattern is "aaaaab" (five a's then b), the failure function allows KMP to avoid restarting from the beginning on each mismatch. Horspool, checking only the last character, might skip past positions that contain "aaaaab" if the last text character is 'b' but the preceding characters do not spell "aaaaa".

The practical conclusion: for the "grep a log file" use case that opened this chapter, Horspool is the right default. It is fast on natural text, simple to implement correctly, and predictably good on the patterns that programmers actually search for. KMP is the right choice when the pattern is known to be periodic or highly repetitive, or when worst-case guarantees matter more than average-case performance.

---

## 7.8 The Connection to Automata

Both KMP and Horspool can be understood as finite automata over the text.

KMP's failure function defines a deterministic finite automaton (DFA) whose states are the number of characters of the pattern currently matched. The DFA has m+1 states (0 through m). State m is the accepting state — pattern found. Transitions on matching characters go from state j to j+1. Transitions on mismatching characters follow the failure function to find the next state.

This connection is not merely theoretical. The finite automaton view of string matching leads directly to the algorithm for multiple pattern search (Aho-Corasick, which combines multiple KMP failure functions into a single trie-based automaton) and to the NFA construction for regular expression matching (Thompson's construction, covered in Chapter 11).

The failure function is, in this light, a compression of the transition table of the DFA — instead of storing all transitions for all characters at all states (m × |alphabet| entries), it stores only the "fall back" transition for mismatches (m entries), and the "advance" transition is implied by the matching character. This compressed representation is what makes the O(m) preprocessing practical.

Understanding KMP as an automaton transforms the failure function from a clever trick into an instance of a general principle: preprocess the pattern into a state machine, then drive the state machine through the text.

Chapter 11, on regular expressions, will make this connection explicit and build a general NFA construction from scratch. The KMP DFA is a special case — the simplest possible NFA, one that recognises exactly one string.

---

## 7.9 Choosing an Algorithm

Three algorithms, one recommendation with two qualifications.

**Default: Horspool.** For the typical use case — searching a large text for a pattern of moderate length — Horspool is fast, simple, and predictably good. Its implementation is short enough to be verified by inspection, its preprocessing is O(m) and very fast in practice, and its average-case performance on natural text is the best of the three.

**Qualification 1: use KMP when patterns are periodic.** If your application searches for patterns with many repeated characters — DNA sequences of ACGT, binary patterns, URLs with repeated structure — KMP's linear worst-case guarantee matters. Horspool can degrade on these inputs.

**Qualification 2: use KMP when you cannot afford preprocessing.** If you are searching for many different patterns and cannot afford to build a skip table for each, KMP's preprocessing is faster and the search is still O(n). For one-shot searches with a single pattern, this rarely matters.

**Never default to naive.** The naive algorithm is useful only as a reference implementation for testing. For any text of non-trivial size, either KMP or Horspool will be faster, and often dramatically so.

One more consideration: the algorithms in this chapter search for a single pattern. Chapter 8 addresses searching for multiple patterns simultaneously using rolling hashes. Chapter 11 addresses the general case of searching for patterns described by regular expressions. If your application uses either of those, the single-pattern algorithms here are the wrong tool — but they are the conceptual foundation that makes the more general algorithms understandable.

---

## 7.10 Where This Lives in the Wild

**GNU grep** uses a variant of Boyer-Moore as its primary algorithm, with several heuristic improvements that real-world performance has motivated over decades of use. When grep is invoked with the `-F` flag (fixed strings, no regex), it uses an implementation close to Boyer-Moore-Horspool. When patterns are short (less than a few characters), it falls back to simpler approaches because the skip table overhead is not worth it.

**The Linux kernel** uses a KMP implementation in its `lib/textsearch.c` for network packet inspection — matching packets against patterns for firewall rules and intrusion detection. The kernel's choice of KMP over Boyer-Moore reflects the kernel's priority of worst-case predictability over average-case performance, since a firewall that becomes slow on adversarially crafted traffic is a security vulnerability.

**Java's String.indexOf** uses neither KMP nor Boyer-Moore in the HotSpot JVM's implementation — it uses a modified naive algorithm with a first-character filter (only enter the inner loop when the first character matches) that is fast enough for the typical use cases (short patterns, short texts) and avoids the preprocessing overhead of more complex algorithms. For longer patterns, JVM intrinsics may kick in using vectorised instructions.

**Python's str.find** uses a two-way algorithm, a more sophisticated approach that provides O(nm/m) = O(n) worst-case performance with O(1) preprocessing, outperforming both KMP (O(n+m) preprocessing) and Boyer-Moore in certain theoretical measures. In practice it is fast for Python's typical use case of short patterns in short strings.

**Elasticsearch** uses Apache Lucene's string matching infrastructure, which combines multiple algorithms — using different strategies for different query types and index types, falling back to Boyer-Moore-style algorithms for full-text scanning and using index lookups for common terms.

The diversity of implementations in production systems reflects the diversity of real workloads. No single algorithm is universally best, and the "right" choice depends on pattern length, alphabet size, text characteristics, and whether worst-case or average-case performance matters more. Understanding all three algorithms in this chapter gives you the vocabulary to make that choice deliberately.

---

## Summary

Exact string matching is the foundation of grep, text editors, network intrusion detection, and any system that searches for fixed patterns in text. The naive O(nm) algorithm, while correct and simple, leaves significant performance on the table.

KMP preprocesses the pattern into a failure function — an array recording the longest proper prefix of each prefix of the pattern that is also a suffix. This allows the search to never move backward in the text, achieving O(n + m) worst-case time. KMP is optimal for repetitive patterns and provides linear guarantees regardless of input.

Boyer-Moore-Horspool preprocesses the pattern into a skip table — recording, for each character, how far the pattern can shift when that character appears at the end of the current alignment window. Searching right-to-left within the pattern window allows large skips on mismatches, achieving O(n/m) average-case performance on natural text. Horspool is the practical champion for typical grep-like workloads.

Both algorithms are correct; both are worth understanding. KMP reveals the internal structure of the pattern through its failure function, connecting to automata theory and the foundations of Chapter 11. Horspool reveals the power of using text information — the character under the pattern window — to skip efficiently, connecting to the broader Boyer-Moore family of algorithms.

The next chapter extends string matching to a harder problem: finding all repeated substrings, searching for multiple patterns simultaneously, and detecting similarity between documents. Rolling hashes, the subject of Chapter 8, are the key.
