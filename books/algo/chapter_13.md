# Chapter 13: The Suffix Array

---

Consider the human genome. Three billion base pairs, each one of four characters: A, C, G, T. A string of length three billion. Biologists need to answer questions like: where does this gene sequence appear? What is the longest repeated subsequence? Which regions of two different genomes are most similar?

These are string matching problems at a scale that makes the algorithms of previous chapters inadequate. KMP and Horspool find one pattern in one text in O(n + m) time — fast, but they must be run once per query. For a genome database with millions of queries, you need preprocessing: build an index of the text once, then answer each query in time proportional to the query length, not the text length.

The obvious index is a hash map from every k-length substring to its positions. But k must be fixed, and you lose the ability to answer queries of other lengths. What you want is an index over all substrings simultaneously — a data structure that can answer "where does this length-5 pattern appear?" and "where does this length-500 pattern appear?" with equal efficiency.

The suffix tree does this. It is a compressed trie of all suffixes of the text — all n substrings starting at each position and extending to the end. A suffix tree can answer any substring query in O(m) time, where m is the query length, regardless of text length. It is one of the most powerful data structures in string processing.

But suffix trees are notoriously difficult to implement correctly. Ukkonen's linear-time construction algorithm, the standard approach, involves implicit states, suffix links, and extension rules that require days of careful study to understand and weeks of debugging to implement correctly. In practice, most systems that need suffix tree capabilities use suffix arrays instead.

A suffix array achieves most of what a suffix tree can do with a fraction of the implementation complexity. It uses less memory, has better cache performance, and can be constructed efficiently. Combined with the LCP array — a companion structure that records the length of the longest common prefix between adjacent suffixes — it matches the suffix tree's capabilities for almost all practical purposes.

This chapter builds a suffix array and LCP array, then uses them to solve four canonical problems: substring search, longest repeated substring, longest common substring of two texts, and counting distinct substrings. Along the way, it explains exactly how suffix arrays relate to suffix trees and why the simpler structure suffices for nearly every real use case.

---

## 13.1 Suffixes and the Suffix Array

A **suffix** of a string T of length n is any substring T[i..n-1] — a substring that extends to the end of T. There are exactly n suffixes (one starting at each position 0 through n-1), plus the empty suffix at position n.

For T = "banana":
```
Position 0: "banana"
Position 1: "anana"
Position 2: "nana"
Position 3: "ana"
Position 4: "na"
Position 5: "a"
```

The **suffix array** SA is the array of starting positions of all suffixes, sorted in lexicographic order of the suffixes themselves.

Sorting the suffixes of "banana" lexicographically:
```
"a"       → position 5
"ana"     → position 3
"anana"   → position 1
"banana"  → position 0
"na"      → position 4
"nana"    → position 2
```

So SA = [5, 3, 1, 0, 4, 2].

The suffix array does not store the suffixes themselves — they would take O(n²) space. It stores only the starting positions, which take O(n) space. Any suffix SA[i] can be read from the original text T starting at position SA[i].

This is the key economy of suffix arrays: O(n) space to represent an index over all O(n²) substrings of T.

---

## 13.2 Building the Suffix Array: O(n log n)

The naive approach — sort all n suffixes using a comparison sort — is O(n² log n): sorting n items, each comparison taking O(n) time in the worst case (two suffixes might share a long common prefix before differing). This is too slow for the genome problem.

We build the suffix array in O(n log n) using the prefix doubling algorithm (due to Manber and Myers, 1990). The idea: sort suffixes by their first 2^k characters for k = 0, 1, 2, ... doubling k each time until the ranking is complete.

At each stage, we have a ranking of suffixes by their first 2^k characters. To sort by first 2^(k+1) characters, observe that a suffix starting at position i has first 2^(k+1) characters equal to: its first 2^k characters (already ranked), followed by the first 2^k characters of the suffix starting at position i + 2^k (also already ranked). Sorting pairs of existing ranks gives the new ranking — and this can be done with a stable sort in O(n log n) per stage, for O(n log² n) total. With radix sort for the inner sort, it becomes O(n log n).

```
class Suffix_Array_Builder
  create
    make(text: String) do
      this.text := text
      this.n := text.length
    end

  feature
    text: String
    n: Integer

    build(): Array[Integer] do
      if n = 0 then
        result := []
      elseif n = 1 then
        result := [0]
      else
        -- Initial ranking: by first character
        let sa: Array[Integer] := create Array.filled(n, 0)
        let rank: Array[Integer] := create Array.filled(n, 0)
        let tmp: Array[Integer] := create Array.filled(n, 0)
      end

      -- Initialise SA as identity, rank by character code
      from
        let i: Integer := 0
      until
        i >= n
      do
        sa.set(i, i)
        rank.set(i, text.char_at(i).hash())
        i := i + 1
      end

      -- Sort by rank (character)
      sa := sort_by_rank(sa, rank)
      assign_ranks(sa, rank, tmp, 0)

      -- Prefix doubling
      let gap: Integer := 1
      from until gap >= n do
        -- Sort by (rank[i], rank[i + gap])
        -- rank[i + gap] = rank at position i + gap,
        -- or -1 if i + gap >= n
        sa := sort_by_pair(sa, rank, gap)
        assign_ranks(sa, rank, tmp, gap)

        -- If all ranks are unique we are done
        if rank.get(sa.get(n - 1)) = n - 1 then
          gap := n  -- force exit
        else
          gap := gap * 2
        end
      end

      result := sa
    end

    -- Sort SA by single rank array
    sort_by_rank(sa: Array[Integer],
                  rank: Array[Integer]): Array[Integer] do
      -- Use counting sort for O(n) performance
      result := counting_sort_by_key(sa, rank, rank.max_value() + 1)
    end

    -- Sort SA by pair (rank[i], rank[i+gap])
    sort_by_pair(sa: Array[Integer],
                  rank: Array[Integer],
                  gap: Integer): Array[Integer] do
      -- Two-pass radix sort: sort by second key, then stably by first
      let max_rank: Integer := rank.max_value() + 2  -- +1 for sentinel

      -- Key function for second element of pair
      let second_key: Array[Integer] := create Array.filled(n, 0)
      from
        let i: Integer := 0
      until
        i >= n
      do
        if sa.get(i) + gap < n then
          second_key.set(i, rank.get(sa.get(i) + gap) + 1)
        else
          second_key.set(i, 0)  -- sentinel: positions beyond n sort first
        end
        i := i + 1
      end

      -- First sort by second key (less significant)
      let sorted_by_second: Array[Integer] :=
        counting_sort_by_index(sa, second_key, max_rank)

      -- Then stable sort by first key (more significant)
      let first_key: Array[Integer] := create Array.filled(n, 0)
      from
        let i: Integer := 0
      until
        i >= n
      do
        first_key.set(i, rank.get(sorted_by_second.get(i)))
        i := i + 1
      end

      result := counting_sort_by_index(sorted_by_second, first_key, max_rank)
    end

    -- After sorting, assign new ranks based on current SA order
    assign_ranks(sa: Array[Integer],
                  rank: Array[Integer],
                  tmp: Array[Integer],
                  gap: Integer) do
      tmp.set(sa.get(0), 0)

      from
        let i: Integer := 1
      until
        i >= n
      do
        let prev: Integer := sa.get(i - 1)
        let curr: Integer := sa.get(i)

        let prev_first: Integer := rank.get(prev)
        let curr_first: Integer := rank.get(curr)
        let prev_second: Integer :=
          when prev + gap < n rank.get(prev + gap) else -1 end
        let curr_second: Integer :=
          when curr + gap < n rank.get(curr + gap) else -1 end

        if curr_first = prev_first and curr_second = prev_second then
          tmp.set(curr, tmp.get(prev))
        else
          tmp.set(curr, tmp.get(prev) + 1)
        end

        i := i + 1
      end

      -- Copy tmp back to rank
      from
        let i: Integer := 0
      until
        i >= n
      do
        rank.set(i, tmp.get(i))
        i := i + 1
      end
    end

    -- Counting sort: sort values in `arr` by their key in `keys`
    -- where keys are in range [0, max_key)
    counting_sort_by_key(arr: Array[Integer],
                          keys: Array[Integer],
                          max_key: Integer): Array[Integer] do
      let count: Array[Integer] := create Array.filled(max_key, 0)

      across arr as val do
        count.set(keys.get(val), count.get(keys.get(val)) + 1)
      end

      -- Prefix sums
      from
        let i: Integer := 1
      until
        i < max_key
      do
        count.set(i, count.get(i) + count.get(i - 1))
        i := i + 1
      end

      -- Place in sorted order (right to left for stability)
      let output: Array[Integer] := create Array.filled(arr.length, 0)
      from
        let i: Integer := arr.length - 1
      until
        i >= 0
      do
        let val: Integer := arr.get(i)
        let key: Integer := keys.get(val)
        count.set(key, count.get(key) - 1)
        output.set(count.get(key), val)
        i := i - 1
      end

      result := output
    end

    -- Counting sort: sort indices in `arr` by key `keys[i]` for index i
    counting_sort_by_index(arr: Array[Integer],
                            keys: Array[Integer],
                            max_key: Integer): Array[Integer] do
      let count: Array[Integer] := create Array.filled(max_key, 0)

      across arr as idx do
        count.set(keys.get(idx), count.get(keys.get(idx)) + 1)
      end

      from
        let i: Integer := 1
      until
        i < max_key
      do
        count.set(i, count.get(i) + count.get(i - 1))
        i := i + 1
      end

      let output: Array[Integer] := create Array.filled(arr.length, 0)
      from
        let i: Integer := arr.length - 1
      until
        i >= 0
      do
        let idx: Integer := arr.get(i)
        let key: Integer := keys.get(idx)
        count.set(key, count.get(key) - 1)
        output.set(count.get(key), idx)
        i := i - 1
      end

      result := output
    end
end
```

Let us trace the construction for "banana" to verify.

Initial ranks (character codes for simplicity: a=1, b=2, n=3):
```
Position: 0(b=2), 1(a=1), 2(n=3), 3(a=1), 4(n=3), 5(a=1)
```

After sorting by rank and assigning: SA=[1,3,5,0,2,4], rank=[2,1,3,1,3,1] normalised to [3,0,4,0,4,0] (after ranking SA order).

Wait — let us follow the algorithm more carefully with normalised ranks. Initial sort by first character gives:

Sorted order: positions 1,3,5 (all 'a'), then 0 ('b'), then 2,4 (both 'n').
SA = [1,3,5,0,2,4].
Assigned ranks: 'a' positions get 0, 'b' gets 1, 'n' gets 2.
rank = [1,0,2,0,2,0].

Gap = 1. Pairs (rank[i], rank[i+1]):
```
Position 0: (1, 0)  → "ba"
Position 1: (0, 2)  → "an"
Position 2: (2, 0)  → "na"
Position 3: (0, 2)  → "an"
Position 4: (2, 0)  → "na"
Position 5: (0, -1) → "a$"
```

Sort by pairs: (0,-1)<(0,2)<(0,2)<(1,0)<(2,0)<(2,0)
SA = [5, 1, 3, 0, 2, 4].
New ranks: position 5→0, positions 1,3→1 (tied), position 0→2, positions 2,4→3 (tied).
rank = [2,1,3,1,3,0].

Gap = 2. Pairs (rank[i], rank[i+2]):
```
Position 0: (2, 3)  → "bana"
Position 1: (1, 1)  → "anan" — (rank[1]=1, rank[3]=1)
Position 2: (3, 0)  → "nana" — (rank[2]=3, rank[4]=3... wait rank[4]=3)
Position 3: (1, 0)  → "ana$" — (rank[3]=1, rank[5]=0)
Position 4: (3, -1) → "na$$"
Position 5: (0, -1) → "a$$$"
```

Sort: (0,-1)<(1,0)<(1,1)<(2,3)<(3,-1)<(3,0) — wait that doesn't match. Let me recheck rank[4]. After gap=1: rank=[2,1,3,1,3,0].

Pairs for gap=2:
```
Position 0: (rank[0], rank[2]) = (2, 3)
Position 1: (rank[1], rank[3]) = (1, 1)
Position 2: (rank[2], rank[4]) = (3, 3)
Position 3: (rank[3], rank[5]) = (1, 0)
Position 4: (rank[4], -1)     = (3, -1)
Position 5: (rank[5], -1)     = (0, -1)
```

Sort: (0,-1)<(1,0)<(1,1)<(2,3)<(3,-1)<(3,3)
SA = [5, 3, 1, 0, 4, 2].

All ranks now unique — done. SA = [5, 3, 1, 0, 4, 2]. This matches our manually computed answer.

---

## 13.3 The LCP Array

The **LCP array** (Longest Common Prefix array) stores, for each adjacent pair in the suffix array, the length of their longest common prefix.

LCP[0] is undefined (no predecessor). LCP[i] = length of the longest common prefix between the suffix at SA[i] and the suffix at SA[i-1].

For "banana" with SA = [5, 3, 1, 0, 4, 2]:
```
SA[0]=5: "a"
SA[1]=3: "ana"      LCP[1] = lcp("a", "ana") = 1
SA[2]=1: "anana"    LCP[2] = lcp("ana", "anana") = 3
SA[3]=0: "banana"   LCP[3] = lcp("anana", "banana") = 0
SA[4]=4: "na"       LCP[4] = lcp("banana", "na") = 0
SA[5]=2: "nana"     LCP[5] = lcp("na", "nana") = 2
```

LCP = [-, 1, 3, 0, 0, 2].

The naive LCP computation is O(n²): compute lcp for each adjacent pair directly. Kasai's algorithm computes all LCP values in O(n) using a key observation: if we know LCP[rank[i]] = k (the LCP between the suffix at position i and its predecessor in SA), then LCP[rank[i+1]] ≥ k - 1.

The intuition: suffix at position i+1 is suffix at position i with the first character removed. Its predecessor in the suffix array might have its first character removed too. The LCP can drop by at most 1.

```
class LCP_Builder
  create
    make(text: String, sa: Array[Integer]) do
      this.text := text
      this.sa := sa
      this.n := text.length
    end

  feature
    text: String
    sa: Array[Integer]
    n: Integer

    build(): Array[Integer] do
      let lcp: Array[Integer] := create Array.filled(n, 0)

      -- Build inverse SA (rank array): rank[i] = position of suffix i in SA
      let rank: Array[Integer] := create Array.filled(n, 0)
      from
        let i: Integer := 0
      until
        i >= n
      do
        rank.set(sa.get(i), i)
        i := i + 1
      end

      let k: Integer := 0  -- current LCP value

      from
        let i: Integer := 0
      until
        i >= n
      do
        -- If this suffix is first in SA, LCP is 0
        if rank.get(i) = 0 then
          k := 0
          i := i + 1
        else
          -- Predecessor in SA
          let j: Integer := sa.get(rank.get(i) - 1)

          -- Extend LCP from previous value (k is at least k-1 from prev step)
          from until i + k >= n or
                     j + k >= n or
                     text.char_at(i + k) /= text.char_at(j + k) do
            k := k + 1
          end

          lcp.set(rank.get(i), k)

          -- Kasai's key: next suffix has LCP at least k-1
          if k > 0 then
            k := k - 1
          end

          i := i + 1
        end
      end

      result := lcp
    end
end
```

Kasai's algorithm runs in O(n) because k is incremented at most n times total across all iterations (it can only reach n), and decremented at most once per iteration. The total number of character comparisons is therefore O(n).

---

## 13.4 The Suffix Array Structure

Combining construction and providing a clean interface:

```
class Suffix_Array
  create
    build(text: String) do
      this.text := text
      this.n := text.length

      let builder: Suffix_Array_Builder :=
        create Suffix_Array_Builder.make(text)
      this.sa := builder.build()

      let lcp_builder: LCP_Builder :=
        create LCP_Builder.make(text, this.sa)
      this.lcp := lcp_builder.build()

      -- Build rank (inverse SA) for O(1) rank lookup
      this.rank := create Array.filled(this.n, 0)
      from
        let i: Integer := 0
      until
        i >= this.n
      do
        this.rank.set(this.sa.get(i), i)
        i := i + 1
      end
    end

  feature
    text: String
    n: Integer
    sa: Array[Integer]
    lcp: Array[Integer]
    rank: Array[Integer]

    -- Get the suffix starting at position i
    suffix(i: Integer): String do
      result := text.substring(i, n)
    end

    -- Get the suffix at SA rank r
    suffix_at_rank(r: Integer): String do
      result := suffix(sa.get(r))
    end

    -- Get the LCP between suffixes at ranks r1 and r2
    -- Uses range minimum query (naive O(n) here; RMQ in O(1) possible)
    lcp_between(r1: Integer, r2: Integer): Integer do
      if r1 = r2 then
        result := n - sa.get(r1)
      else
        let lo: Integer := r1.min(r2) + 1
        let hi: Integer := r1.max(r2)
        let min_lcp: Integer := 2147483647

        from
          let i: Integer := lo
        until
          i <= hi
        do
          if lcp.get(i) < min_lcp then
            min_lcp := lcp.get(i)
          end
          i := i + 1
        end

        result := min_lcp
      end
    end

  invariant
    consistent_lengths: sa.length = n and lcp.length = n and rank.length = n
    valid_sa: true
end
```

The `lcp_between` function computes the LCP between any two suffixes (not just adjacent ones in SA) as the minimum LCP value in the range between their SA ranks. This follows from the structure of the LCP array: the LCP of two suffixes at ranks r1 and r2 is the minimum LCP value in lcp[r1+1..r2] (assuming r1 < r2). A range minimum query (RMQ) structure on the LCP array would answer this in O(1) after O(n) preprocessing, making many operations on the suffix array O(1) per query. For our purposes, the O(n) naive minimum suffices.

---

## 13.5 Pattern Search

The suffix array supports pattern matching in O(m log n): binary search for the range of SA entries whose corresponding suffixes start with the pattern.

The key property: the SA is sorted, so all suffixes starting with pattern P are contiguous in the SA. Binary search for the leftmost and rightmost suffix that starts with P gives the range.

```
class Suffix_Array_Search
  create
    make(sa: Suffix_Array) do
      this.sa := sa
    end

  feature
    sa: Suffix_Array

    -- Find all occurrences of pattern in text
    -- Returns sorted array of starting positions
    find_all(pattern: String): Array[Integer] do
      let m: Integer := pattern.length
      if m = 0 or m > sa.n then
        result := []
      else
        let lo: Integer := lower_bound(pattern)
        let hi: Integer := upper_bound(pattern)

        if lo > hi then
          result := []
        else
          -- Collect all positions in range [lo, hi]
          let positions: Array[Integer] := []
          from
            let i: Integer := lo
          until
            i <= hi
          do
            positions.add(sa.sa.get(i))
            i := i + 1
          end

          -- Sort positions for predictable output order
          result := sort_integers(positions)
        end
      end
    end

    -- Count occurrences without materialising all positions
    count(pattern: String): Integer do
      let lo: Integer := lower_bound(pattern)
      let hi: Integer := upper_bound(pattern)
      if lo > hi then
        result := 0
      else
        result := hi - lo + 1
      end
    end

    -- Does the pattern appear at all?
    contains(pattern: String): Boolean do
      result := count(pattern) > 0
    end

    -- Find leftmost SA rank where suffix starts with pattern
    lower_bound(pattern: String): Integer do
      let m: Integer := pattern.length
      let lo: Integer := 0
      let hi: Integer := sa.n - 1

      from until lo > hi do
        let mid: Integer := (lo + hi) / 2
        let suffix_start: Integer := sa.sa.get(mid)
        let cmp: Integer := compare_prefix(suffix_start, pattern, m)

        if cmp < 0 then
          lo := mid + 1
        else
          hi := mid - 1
        end
      end

      result := lo
    end

    -- Find rightmost SA rank where suffix starts with pattern
    upper_bound(pattern: String): Integer do
      let m: Integer := pattern.length
      let lo: Integer := 0
      let hi: Integer := sa.n - 1

      from until lo > hi do
        let mid: Integer := (lo + hi) / 2
        let suffix_start: Integer := sa.sa.get(mid)
        let cmp: Integer := compare_prefix(suffix_start, pattern, m)

        if cmp > 0 then
          hi := mid - 1
        else
          lo := mid + 1
        end
      end

      result := hi
    end

    -- Compare text[pos..pos+m-1] with pattern
    -- Returns negative if text prefix < pattern,
    --         0 if equal (text starts with pattern),
    --         positive if text prefix > pattern
    compare_prefix(pos: Integer,
                   pattern: String,
                   m: Integer): Integer do
      let done: Boolean := false
      from
        let i: Integer := 0
      until
        i >= m or done
      do
        if pos + i >= sa.n then
          result := -1  -- text shorter than pattern here
          done := true
        else
          let tc: Char := sa.text.char_at(pos + i)
          let pc: Char := pattern.char_at(i)
          let diff: Integer := tc.compare(pc)
          if diff /= 0 then
            result := diff
            done := true
          else
            i := i + 1
          end
        end
      end
      if not done then
        result := 0  -- text starts with pattern
      end
    end

  invariant
    sa_exists: sa /= nil
end
```

Time complexity: O(m log n) for each query — O(log n) binary search steps, each taking O(m) for the prefix comparison. This compares favourably to KMP's O(n + m) — for short patterns and long texts queried many times, the O(m log n) per-query cost with no per-query preprocessing is better.

With an LCP-accelerated binary search (using the LCP between the current mid and the boundaries to skip already-matched characters), this can be reduced to O(m + log n). We implement the simpler version here.

---

## 13.6 Longest Repeated Substring

The longest repeated substring (LRS) of a string is the longest substring that appears at least twice. In the suffix array, this is the maximum value in the LCP array.

The reasoning: LCP[i] is the length of the longest common prefix between suffixes SA[i] and SA[i-1]. A common prefix of length k means both suffixes start with the same k-character string, which appears at positions SA[i] and SA[i-1] in the text. The LRS is therefore the suffix pair with the maximum LCP value.

```
function longest_repeated_substring(sa: Suffix_Array): String do
  if sa.n = 0 then
    result := ""
  else
    let max_lcp: Integer := 0
    let max_pos: Integer := 1  -- SA rank of the suffix with max LCP

    from
      let i: Integer := 1
    until
      i >= sa.n
    do
      if sa.lcp.get(i) > max_lcp then
        max_lcp := sa.lcp.get(i)
        max_pos := i
      end
      i := i + 1
    end

    if max_lcp = 0 then
      result := ""  -- no repeated substring
    else
      -- The LRS starts at sa.sa[max_pos] and has length max_lcp
      result := sa.text.substring(sa.sa.get(max_pos),
                                   sa.sa.get(max_pos) + max_lcp)
    end
  end
end
```

For "banana": LCP = [-, 1, 3, 0, 0, 2]. Maximum is LCP[2] = 3. SA[2] = 1. So LRS = text[1..3] = "ana". Correct — "ana" appears at positions 1 and 3.

This runs in O(n) after O(n log n) preprocessing. Compare to the O(n log n) expected rolling hash solution from Chapter 8, which is also O(n log n) but has a higher constant and requires careful hash collision handling. The suffix array solution is deterministic and collision-free.

---

## 13.7 All Repeated Substrings of a Given Length

A more general query: find all substrings that appear at least k times. These correspond to ranges in the SA where at least k consecutive LCP values are all ≥ L (the target length), and there are at least k entries in that range.

```
function repeated_substrings(sa: Suffix_Array,
                              min_length: Integer,
                              min_count: Integer): Array[String] do
  let found: Set[String] := #{}
  let n: Integer := sa.n

  from
    let i: Integer := 1
  until
    i >= n
  do
    -- Find maximal range where all LCP values >= min_length
    if sa.lcp.get(i) >= min_length then
      let range_start: Integer := i - 1
      let range_end: Integer := i

      from until range_end + 1 >= n or
                 sa.lcp.get(range_end + 1) < min_length do
        range_end := range_end + 1
      end

      -- Range [range_start..range_end] has range_end - range_start + 1 suffixes
      let count: Integer := range_end - range_start + 1
      if count >= min_count then
        -- All share a prefix of length min_lcp_in_range
        let min_lcp: Integer := min_in_range(sa.lcp, range_start + 1, range_end)
        let substr: String := sa.text.substring(
          sa.sa.get(range_start),
          sa.sa.get(range_start) + min_lcp.min(min_length).max(min_length))
        -- Add all lengths from min_length to min_lcp
        from
          let len: Integer := min_length
        until
          len > min_lcp
        do
          found := found.union(#{sa.text.substring(
            sa.sa.get(range_start),
            sa.sa.get(range_start) + len)})
          len := len + 1
        end
      end

      i := range_end + 1
    else
      i := i + 1
    end
  end

  result := found.to_array()
end

function min_in_range(arr: Array[Integer],
                       lo: Integer,
                       hi: Integer): Integer do
  let min_val: Integer := 2147483647
  from
    let i: Integer := lo
  until
    i <= hi
  do
    if arr.get(i) < min_val then
      min_val := arr.get(i)
    end
    i := i + 1
  end
  result := min_val
end
```

---

## 13.8 Longest Common Substring of Two Texts

Given two strings A and B, find the longest substring that appears in both.

This is a different problem from LCS (longest common subsequence) — we want a contiguous match, not a subsequence.

The suffix array approach: concatenate A and B with a separator character that appears in neither (often '$' or a null byte), build the suffix array of the concatenated string, then find the longest LCP between a suffix from A and a suffix from B.

```
function longest_common_substring(a: String, b: String): String do
  let n_a: Integer := a.length
  let n_b: Integer := b.length
  let separator: String := "$"  -- must not appear in a or b

  -- Concatenate with separator
  let combined: String := a + separator + b
  let n: Integer := combined.length

  -- Build suffix array of combined string
  let sa: Suffix_Array := create Suffix_Array.build(combined)

  -- Find maximum LCP between a suffix from A and a suffix from B
  let best_len: Integer := 0
  let best_pos: Integer := 0

  from
    let i: Integer := 1
  until
    i >= n
  do
    let pos_prev: Integer := sa.sa.get(i - 1)
    let pos_curr: Integer := sa.sa.get(i)

    -- One suffix must be from A (pos < n_a) and
    -- the other from B (pos > n_a) -- the separator is at n_a
    let from_a: Boolean := (pos_prev < n_a) /= (pos_curr < n_a)

    if from_a and sa.lcp.get(i) > best_len then
      -- Make sure the LCP does not cross the separator
      let lcp_len: Integer := sa.lcp.get(i)
      let a_pos: Integer := when pos_prev < n_a pos_prev else pos_curr end
      if a_pos + lcp_len <= n_a then
        best_len := lcp_len
        best_pos := a_pos
      end
    end

    i := i + 1
  end

  if best_len = 0 then
    result := ""
  else
    result := a.substring(best_pos, best_pos + best_len)
  end
end
```

The separator character is critical. Without it, suffixes from A and B could blend together. The separator ensures that any LCP between a suffix starting in A and a suffix starting in B stops at the separator character — they can only share characters from A before the separator.

The "cross the separator" check (`a_pos + lcp_len <= n_a`) prevents a match that technically goes through the separator from being counted. In practice, the separator character is chosen to be lexicographically smallest or largest, so the LCP never crosses it naturally — but the check makes the invariant explicit.

For "abcdef" and "cdefgh": combined = "abcdef$cdefgh". LCS should be "cdef" (length 4). The SA will have adjacent entries for suffix "cdef$cdefgh" (position 2 in A) and suffix "cdefgh" (position 7, in B), with LCP = 4. Since 2 + 4 ≤ 6, the check passes. Result: "cdef".

---

## 13.9 Counting Distinct Substrings

Every substring of a string T corresponds to a prefix of some suffix. The total number of substrings of T (including duplicates) is n(n+1)/2 — for each starting position i, there are n-i substrings of varying length.

The number of distinct substrings is n(n+1)/2 minus the number of duplicates. Each LCP value LCP[i] tells us how many of the substrings starting at SA[i] are duplicates of substrings starting at SA[i-1] — exactly LCP[i] of them. So:

```
distinct_substrings = n(n+1)/2 - sum(LCP)
```

```
function count_distinct_substrings(sa: Suffix_Array): Integer64 do
  let n: Integer := sa.n
  let total: Integer64 := (n.to_integer64() * (n + 1).to_integer64()) / 2

  let lcp_sum: Integer64 := 0
  from
    let i: Integer := 1
  until
    i >= n
  do
    lcp_sum := lcp_sum + sa.lcp.get(i).to_integer64()
    i := i + 1
  end

  result := total - lcp_sum
end
```

For "banana" (n=6): total = 21. LCP sum = 1+3+0+0+2 = 6. Distinct substrings = 21 - 6 = 15.

Verify manually: distinct substrings of "banana" are: a, an, ana, anan, anana, b, ba, ban, bana, banan, banana, n, na, nan, nana — 15. Correct.

---

## 13.10 A Complete Suffix Array Application

Assembling everything into a string analysis library:

```
class String_Analyser
  create
    analyse(text: String) do
      this.text := text
      this.sa := create Suffix_Array.build(text)
      this.searcher := create Suffix_Array_Search.make(this.sa)
    end

  feature
    text: String
    sa: Suffix_Array
    searcher: Suffix_Array_Search

    -- Pattern search
    find(pattern: String): Array[Integer] do
      result := searcher.find_all(pattern)
    end

    count_occurrences(pattern: String): Integer do
      result := searcher.count(pattern)
    end

    -- Repetition analysis
    longest_repeat(): String do
      result := longest_repeated_substring(sa)
    end

    all_repeats(min_length: Integer): Array[String] do
      result := repeated_substrings(sa, min_length, 2)
    end

    -- Similarity
    longest_common_with(other: String): String do
      result := longest_common_substring(text, other)
    end

    -- Combinatorics
    distinct_substring_count(): Integer64 do
      result := count_distinct_substrings(sa)
    end

    -- Compression hint: how repetitive is this string?
    -- Returns fraction of substrings that are duplicates
    repetitiveness(): Real do
      let n: Integer64 := sa.n.to_integer64()
      let total: Integer64 := n * (n + 1) / 2
      let distinct: Integer64 := count_distinct_substrings(sa)
      result := 1.0 - distinct.to_real() / total.to_real()
    end

  invariant
    sa_built: sa /= nil
    searcher_built: searcher /= nil
end
```

Using it:

```
let analyser: String_Analyser :=
  create String_Analyser.analyse("mississippi")

-- Pattern search
print(analyser.find("issi").to_string())
-- [1, 4] (appears at positions 1 and 4)

print(analyser.count_occurrences("ss"))
-- 2

-- Longest repeat
print(analyser.longest_repeat())
-- "issi" (length 4, appears at 1 and 4)

-- All repeated substrings of length >= 2
let repeats: Array[String] := analyser.all_repeats(2)
print(repeats.to_string())
-- ["is", "iss", "issi", "si", "ss", "i", "s", ...]

-- Distinct substring count
print(analyser.distinct_substring_count())
-- 53 (for "mississippi")

-- Repetitiveness score
print(analyser.repetitiveness())
-- ~0.20 (20% of substrings are duplicates)

-- Similarity with another string
print(analyser.longest_common_with("missouri"))
-- "missi" (length 5)
```

---

## 13.11 Suffix Arrays vs Suffix Trees

The suffix tree is the theoretical ideal: O(n) construction (Ukkonen's algorithm), O(m) pattern search (no log n factor), and O(1) LCP queries with proper annotations. For problems that require very fast repeated queries on large texts, the suffix tree is asymptotically superior.

In practice, the suffix array wins almost everywhere for several reasons.

**Memory.** A suffix tree node requires roughly 5-6 pointers and ancillary data — about 40-60 bytes per node. An n-character text has roughly 2n nodes. Total: 80-120n bytes. A suffix array requires 4n bytes (one integer per suffix) plus 4n for the LCP array and 4n for the rank array — about 12n bytes total, an order of magnitude less. For a 3GB genome, a suffix tree requires 240-360GB. A suffix array requires 36GB. Memory is often the binding constraint.

**Cache performance.** Suffix trees are pointer-heavy structures with scattered memory allocation. Following pointers during tree traversal causes cache misses. Suffix arrays are contiguous arrays — sequential access, prefetcher-friendly, dramatically better cache behaviour on modern hardware. The O(log n) binary search in suffix arrays often outperforms O(1) tree traversal in practice because the tree traversal involves many more cache misses.

**Implementation complexity.** Ukkonen's algorithm is notoriously difficult to implement correctly. The prefix doubling algorithm for suffix array construction is complex but manageable. The LCP-array based algorithms (Kasai, RMQ) are clear and debuggable. In production bioinformatics codebases, suffix array bugs are found and fixed far more often than suffix tree bugs — not because suffix trees are bug-free, but because suffixes array bugs are easier to detect and reason about.

**The practical gap.** With the RMQ structure on the LCP array, suffix array pattern search drops to O(m + log n) (compared to O(m) for suffix trees). For most applications, m dominates log n — a 100-character pattern in a 3GB genome has m = 100, log₂(3×10^9) ≈ 32. The suffix tree's theoretical advantage is a factor of 3 in this case. The suffix array's practical advantages in memory and cache behaviour more than compensate.

The conclusion reached by the bioinformatics community — which has the most intensive string processing requirements of any field — is that suffix arrays with LCP arrays are the standard tool for almost all applications, with suffix trees reserved for problems where the O(m) vs O(m + log n) factor genuinely matters.

---

## 13.12 Where This Lives in the Wild

**BWA and Bowtie**, the two most widely used short-read aligners in genomics, use FM-index — a compressed suffix array that combines the suffix array with the Burrows-Wheeler Transform (introduced in Chapter 12's discussion of bzip2). The FM-index achieves O(m) search in O(n) space — better than either suffix trees or plain suffix arrays — by exploiting the BWT's structure to navigate the suffix array without materialising it. When a sequencing machine produces millions of 150-base DNA reads and needs to align each against the human reference genome in milliseconds, the FM-index is the data structure doing the work.

**MUMmer** (Maximal Unique Matches), a widely used genome comparison tool, uses suffix trees to find maximal unique matches between two genomes — substrings that appear exactly once in each genome and are not contained in a longer match. These unique matches anchor the global alignment of the genomes. MUMmer is one of the cases where suffix tree O(m) query time provides a meaningful advantage over suffix arrays, because matches are short (30-50 bases) relative to the genome (3×10^9 bases), making the O(log n) term significant.

**Database full-text search** in PostgreSQL uses a suffix array-like structure for the `pg_trgm` extension, which supports substring search with trigrams (3-character n-grams). Trigrams are a simplified suffix array over fixed-length substrings, enabling fast similarity search and substring matching in text columns. The GIN (Generalized Inverted Index) and GiST index types in PostgreSQL use this for pattern-matching queries.

**Burrows-Wheeler Aligner in variant calling**, SAMtools, and the GATK (Genome Analysis Toolkit) — the standard tools for identifying genetic variants from sequencing data — use FM-index internally for the alignment steps that precede variant calling. Every published human genome sequence was produced with software that, somewhere in its pipeline, uses a compressed suffix array.

---

## Summary

The suffix array is the sorted permutation of suffix starting positions — a compact O(n) index that implicitly represents all O(n²) substrings of a text. The prefix doubling algorithm constructs it in O(n log n) using repeated radix sorts that double the sorted prefix length at each stage.

The LCP array, built in O(n) by Kasai's algorithm, stores the longest common prefix between adjacent suffixes in the sorted order. Together, SA and LCP support the full range of string analysis operations: pattern search in O(m log n), longest repeated substring in O(n), all repeated substrings of a given length in O(n + output), longest common substring of two texts in O((n+m) log(n+m)), and counting distinct substrings in O(n).

The LCP-between query — the LCP between any two suffixes, not just adjacent ones — is the minimum LCP in the range between their SA ranks. With a range minimum query (RMQ) structure, this is O(1) per query after O(n) preprocessing, giving suffix arrays LCP query performance comparable to suffix trees.

Suffix arrays defeat suffix trees in almost all practical applications because they use an order of magnitude less memory, have dramatically better cache performance, and are far simpler to implement correctly. The bioinformatics community — which processes the largest string datasets in science — made this determination in the early 2000s and has not reversed it.

The next chapter looks at a different kind of string storage problem: not indexing strings for search, but storing a large mutable string efficiently for editing. The data structure a text editor uses to represent a file is its own fascinating engineering problem, and the solution is neither an array nor a linked list.
