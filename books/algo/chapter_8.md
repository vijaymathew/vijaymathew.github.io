# Chapter 8: The Repeating Pattern — Rabin-Karp and Rolling Hashes

---

In 1997, a student submitted an essay to a university. The essay was flagged by her professor as suspiciously similar to a paper published three years earlier. The professor could not prove it by reading — the sentences were different, the words were rearranged, the structure was altered. But the ideas, the examples, the unusual phrasings — they were the same. The professor submitted both papers to a nascent plagiarism detection service. The service confirmed it within seconds.

That service was doing something that Chapter 7's algorithms cannot do. KMP and Horspool find exact occurrences of a fixed pattern in a text. They answer the question "is this exact string here?" The plagiarism problem asks a different question: "are there significant substrings that appear in both documents?" There is no fixed pattern, no advance knowledge of what to search for. You are looking for similarity in the structure of the text itself, not for a predetermined string.

This chapter is about the algorithm that made that plagiarism detection possible, and the idea at its heart — the rolling hash — which turns out to be one of the most useful primitives in all of string processing.

---

## 8.1 Three Problems, One Idea

Rolling hashes are the tool for a cluster of related problems that naive approaches handle badly.

**Problem one: multi-pattern search.** You have a dictionary of ten thousand forbidden strings — spam phrases, known malware signatures, banned content — and you want to find which of them appear in an incoming document. Running KMP or Horspool ten thousand times is ten thousand preprocessing steps and ten thousand passes through the document. There is a better way.

**Problem two: document similarity.** Two documents are "similar" if they share many substrings of length k. No single substring is the pattern — you are looking for any substring that appears in both. The set of all k-length substrings of a document might contain millions of entries. Comparing them naively is quadratic.

**Problem three: longest repeated substring.** What is the longest string that appears at least twice in a document? This matters for compression (repeated substrings can be encoded as back-references, as LZ77 does in Chapter 12) and for biological sequence analysis (repeated subsequences in DNA have functional significance).

All three problems share a structure: you want to compare many substrings efficiently without examining each one character by character. The rolling hash is the primitive that makes this efficient — it lets you compute the hash of any length-k substring of a text in O(1) time, after O(n) preprocessing, by updating the hash of one window to get the hash of the next using only the character entering and the character leaving the window.

---

## 8.2 The Naive Approach and Its Cost

Consider the document similarity problem concretely. You have two documents, A and B, each of length n. You want to know whether they share any k-length substring.

The naive approach: enumerate all k-length substrings of A, put them in a hash set, then enumerate all k-length substrings of B and check each against the set.

There are n - k + 1 substrings of length k in a document of length n. For n = 100,000 and k = 50, that is about 100,000 substrings per document. Inserting each into a hash set requires hashing it, which takes O(k) = O(50) time. Total cost: O(nk) per document.

For n = 1,000,000 and k = 50, O(nk) = O(50,000,000) character operations per document. Two documents means 100 million operations, just to build the hash set. For a plagiarism detection service checking thousands of documents against thousands of others, this is completely infeasible.

The rolling hash reduces the cost of computing each substring hash from O(k) to O(1) — after computing the first hash. The total cost for all n - k + 1 substrings drops from O(nk) to O(n + k), which is O(n) for any fixed k.

That is the improvement. The mechanism is the Rabin fingerprint.

---

## 8.3 The Rabin Fingerprint

A Rabin fingerprint treats a string of characters as the coefficients of a polynomial evaluated at a chosen base, modulo a large prime. Given a string S = s₀s₁...s_{k-1}:

```
hash(S) = (s₀ * b^(k-1) + s₁ * b^(k-2) + ... + s_{k-1} * b^0) mod p
```

Where b is the base (a small prime, typically 31 or 37 for lowercase text) and p is a large prime (typically close to 2^61 - 1 or 2^31 - 1).

This is a polynomial hash. It has a crucial property: given hash(S[i..i+k-1]), you can compute hash(S[i+1..i+k]) in O(1):

```
hash(S[i+1..i+k]) = (hash(S[i..i+k-1]) - s_i * b^(k-1)) * b + s_{i+k}  (mod p)
```

In words: subtract the contribution of the character leaving the window (s_i, at the highest power), multiply the whole thing by b (shifting every remaining character up one power), and add the character entering the window (s_{i+k}, at power 0).

This is the rolling update. It requires one subtraction, one multiplication, and one addition — all modulo p — regardless of k.

```
class Rolling_Hash
  create
    make(base: Integer, modulus: Integer64) do
      this.b := base
      this.p := modulus
      this.current_hash := 0
      this.window_size := 0
      this.high_power := 1  -- b^(window_size-1) mod p
    end

    for_window(text: String, k: Integer,
               base: Integer, modulus: Integer64) do
      this.b := base
      this.p := modulus
      this.window_size := k
      this.current_hash := 0

      -- Compute b^(k-1) mod p
      this.high_power := 1
      repeat k - 1 do
        this.high_power := (this.high_power * base) % modulus
      end

      -- Hash the first window
      from
        let i: Integer := 0
      until
        i >= k
      do
        this.current_hash := (this.current_hash * base +
                               text.char_at(i).hash()) % modulus
        i := i + 1
      end
    end

  feature
    b: Integer
    p: Integer64
    current_hash: Integer64
    window_size: Integer
    high_power: Integer64  -- b^(window_size-1) mod p

    hash(): Integer64 do
      result := current_hash
    end

    -- Roll: remove outgoing character, add incoming character
    roll(outgoing: Char, incoming: Char)
      require
        window_initialised: window_size > 0
      do
        -- Remove contribution of outgoing character
        current_hash := (current_hash -
                         outgoing.hash() * high_power % p + p) % p
        -- Shift and add incoming character
        current_hash := (current_hash * b +
                         incoming.hash()) % p
      end

    -- Reset and compute hash from scratch for a new string
    compute(s: String): Integer64
      require
        correct_length: s.length = window_size
      do
        let h: Integer64 := 0
        across s as c do
          h := (h * b + c.hash()) % p
        end
        result := h
      end

  invariant
    positive_base: b > 0
    positive_modulus: p > 0
    non_negative_hash: current_hash >= 0
    hash_in_range: current_hash < p
end
```

The `+ p` before the final `% p` in the roll operation is not optional. Integer subtraction can produce a negative result. In modular arithmetic, -x mod p should be p - x, not a negative number. Adding p before taking the modulus ensures the result is always non-negative.

---

## 8.4 Hash Collisions and False Positives

A hash collision occurs when two different strings have the same hash value. With a prime modulus of roughly 2^31, the probability of a collision between two specific strings is about 1 in 2 billion — negligible for a single comparison. But when searching n substrings against m patterns, the total number of hash comparisons is O(nm), and collision probability accumulates.

This creates false positives: the hash comparison says "match," but the actual strings differ. The solution is the same as for bloom filters — treat a hash match as a candidate and verify by direct string comparison.

This is Rabin-Karp's fundamental structure: hash comparison to find candidates cheaply, character-by-character comparison to eliminate false positives. The key insight is that false positives are rare enough (1 in 2 billion per comparison with a good modulus) that the verification step costs O(k) time only occasionally, not for every position. The expected total cost remains O(n + k) for a single pattern search.

For extra safety, double hashing — using two independent hash functions simultaneously and requiring both to match before verifying — reduces the false positive probability to about 1 in 4 × 10^18 for 64-bit combined hashes. The cost is computing two rolling hashes per step instead of one, but this is still O(1) per step.

---

## 8.5 Rabin-Karp: Single Pattern Search

Before tackling multi-pattern search, let us implement Rabin-Karp for a single pattern and compare it to KMP and Horspool.

```
function rabin_karp_search(text: String, pattern: String): Array[Integer]
  require
    non_empty_pattern: pattern.length > 0
  do
    let n: Integer := text.length
    let m: Integer := pattern.length
    let positions: Array[Integer] := []

    if m > n then
      result := positions
    else
      let base: Integer := 31
      let modulus: Integer64 := 1000000007  -- large prime

      -- Compute pattern hash
      let rh: Rolling_Hash := create Rolling_Hash.for_window(
        pattern, m, base, modulus)
      let pattern_hash: Integer64 := rh.hash()

      -- Compute hash of first text window
      let text_rh: Rolling_Hash := create Rolling_Hash.for_window(
        text, m, base, modulus)

      -- Slide the window
      from
        let i: Integer := 0
      until
        i > n - m
      do
        if text_rh.hash() = pattern_hash then
          -- Hash match: verify by direct comparison
          if text.substring(i, i + m) = pattern then
            positions.add(i)
          end
        end

        -- Roll to next window
        if i < n - m then
          text_rh.roll(text.char_at(i), text.char_at(i + m))
        end

        i := i + 1
      end

      result := positions
    end
  end
```

For a single pattern, Rabin-Karp is not faster than KMP or Horspool. Its worst case is O(nm) (if every window produces a hash match, which happens with a poor hash function or adversarial input), and its expected case is O(n + m), similar to KMP. Horspool is typically faster on natural text due to its larger skips.

Rabin-Karp's advantage emerges with multiple patterns.

---

## 8.6 Multi-Pattern Search

You have a set of k patterns P₁, P₂, ..., Pₖ, all of the same length m, and you want to find all occurrences of any of them in a text T.

With KMP or Horspool, you need k separate searches: k preprocessings and k passes through the text. Total cost: O(k(n + m)).

With Rabin-Karp: precompute all k pattern hashes and store them in a hash set. Slide one window through the text. At each position, compute the window hash in O(1) using the rolling update. Check membership in the hash set in O(1). If a match is found, verify by direct comparison in O(m). Total cost: O(n + km) for the preprocessing, O(n) for the search, O(m) for each verification. For large k, this is dramatically faster.

```
function rabin_karp_multi_search(text: String,
                                  patterns: Array[String]): Map[String, Array[Integer]]
  require
    non_empty_patterns: patterns.length > 0
    same_length: all_same_length(patterns)
  do
    let n: Integer := text.length
    let m: Integer := patterns.get(0).length
    let base: Integer := 31
    let mod1: Integer64 := 1000000007
    let mod2: Integer64 := 998244353  -- second modulus for double hashing

    -- Build hash set of pattern hashes (double-hashed for safety)
    let pattern_hashes: Map[Integer64, Array[String]] := {}
    let results: Map[String, Array[Integer]] := {}

    across patterns as p do
      let rh1: Rolling_Hash := create Rolling_Hash.for_window(p, m, base, mod1)
      let rh2: Rolling_Hash := create Rolling_Hash.for_window(p, m, base, mod2)
      let combined: Integer64 := rh1.hash() * mod2 + rh2.hash()

      if pattern_hashes.try_get(combined, []) = [] then
        pattern_hashes.put(combined, [])
      end
      pattern_hashes.get(combined).add(p)
      results.put(p, [])
    end

    if m > n then
      result := results
    else
      -- Initialise rolling hashes for text window
      let text_rh1: Rolling_Hash := create Rolling_Hash.for_window(
        text, m, base, mod1)
      let text_rh2: Rolling_Hash := create Rolling_Hash.for_window(
        text, m, base, mod2)

      from
        let i: Integer := 0
      until
        i > n - m
      do
        let combined: Integer64 := text_rh1.hash() * mod2 + text_rh2.hash()
        let candidates: Array[String] := pattern_hashes.try_get(combined, [])

        if candidates.length > 0 then
          -- Hash match: verify each candidate
          let window: String := text.substring(i, i + m)
          across candidates as p do
            if window = p then
              results.get(p).add(i)
            end
          end
        end

        if i < n - m then
          text_rh1.roll(text.char_at(i), text.char_at(i + m))
          text_rh2.roll(text.char_at(i), text.char_at(i + m))
        end

        i := i + 1
      end

      result := results
    end
  end

function all_same_length(patterns: Array[String]): Boolean do
  if patterns.is_empty() then
    result := true
  else
    let len: Integer := patterns.get(0).length
    let same: Boolean := true
    across patterns as p do
      if p.length /= len then
        same := false
      end
    end
    result := same
  end
end
```

The double hashing reduces the probability of any false positive across the entire search to negligible levels, so the verification step for non-matching candidates happens extremely rarely. The dominant cost is the O(n) sliding window computation plus O(km) pattern preprocessing.

For patterns of different lengths, run one pass per distinct length. If your k patterns have L distinct lengths, you need L passes — still O(Ln) total rather than O(kn).

---

## 8.7 The Plagiarism Detector

The document similarity problem — finding shared substrings between two documents — is now straightforward to implement using the multi-pattern approach.

Two documents are k-similar if they share at least one k-length substring. The fraction of k-length substrings of document A that also appear in document B is a measure of similarity. This is the core of many plagiarism detection algorithms, including the Winnowing algorithm used by Stanford's MOSS (Measures of Software Similarity) system.

```
class Plagiarism_Detector
  create
    make(window_size: Integer, similarity_threshold: Real) do
      this.k := window_size
      this.threshold := similarity_threshold
      this.base := 31
      this.mod1 := 1000000007
      this.mod2 := 998244353
    end

  feature
    k: Integer
    threshold: Real
    base: Integer
    mod1: Integer64
    mod2: Integer64

    -- Compute fingerprints: set of hashes of all k-substrings
    fingerprints(doc: String): Set[Integer64] do
      let n: Integer := doc.length
      let hashes: Set[Integer64] := #{}

      if n < k then
        result := hashes
      else
        let rh1: Rolling_Hash := create Rolling_Hash.for_window(
          doc, k, base, mod1)
        let rh2: Rolling_Hash := create Rolling_Hash.for_window(
          doc, k, base, mod2)

        from
          let i: Integer := 0
        until
          i > n - k
        do
          let combined: Integer64 := rh1.hash() * mod2 + rh2.hash()
          hashes := hashes.union(#{combined})

          if i < n - k then
            rh1.roll(doc.char_at(i), doc.char_at(i + k))
            rh2.roll(doc.char_at(i), doc.char_at(i + k))
          end

          i := i + 1
        end

        result := hashes
      end
    end

    -- Jaccard similarity: |A ∩ B| / |A ∪ B|
    similarity(doc_a: String, doc_b: String): Real do
      let fp_a: Set[Integer64] := fingerprints(doc_a)
      let fp_b: Set[Integer64] := fingerprints(doc_b)

      let intersection_size: Integer := fp_a.intersection(fp_b).size()
      let union_size: Integer := fp_a.union(fp_b).size()

      if union_size = 0 then
        result := 0.0
      else
        result := intersection_size.to_real() / union_size.to_real()
      end
    end

    is_suspicious(doc_a: String, doc_b: String): Boolean do
      result := similarity(doc_a, doc_b) >= threshold
    end

    -- Return the actual shared substrings (for reporting)
    shared_substrings(doc_a: String,
                       doc_b: String): Array[String] do
      let fp_a: Set[Integer64] := fingerprints(doc_a)
      let fp_b: Set[Integer64] := fingerprints(doc_b)
      let shared_hashes: Set[Integer64] := fp_a.intersection(fp_b)
      let found: Array[String] := []
      let seen: Set[Integer64] := #{}
      let n: Integer := doc_a.length

      if n < k then
        result := found
      else
        let rh1: Rolling_Hash := create Rolling_Hash.for_window(
          doc_a, k, base, mod1)
        let rh2: Rolling_Hash := create Rolling_Hash.for_window(
          doc_a, k, base, mod2)

        from
          let i: Integer := 0
        until
          i > n - k
        do
          let combined: Integer64 := rh1.hash() * mod2 + rh2.hash()
          if shared_hashes.contains(combined) and
             not seen.contains(combined) then
            found.add(doc_a.substring(i, i + k))
            seen := seen.union(#{combined})
          end

          if i < n - k then
            rh1.roll(doc_a.char_at(i), doc_a.char_at(i + k))
            rh2.roll(doc_a.char_at(i), doc_a.char_at(i + k))
          end

          i := i + 1
        end

        result := found
      end
    end

  invariant
    positive_window: k > 0
    valid_threshold: threshold >= 0.0 and threshold <= 1.0
end
```

The Jaccard similarity measure — intersection over union — is a standard way to quantify set overlap. A value of 0 means no shared substrings. A value of 1 means identical fingerprint sets (which, for long documents with k = 50, means the documents are essentially identical). Values above 0.3-0.5 typically warrant investigation.

Choosing k is a design decision. Small k (say k = 5) produces many shared substrings even for completely independent documents — common words and phrases are short. Large k (say k = 100) misses significant but slightly paraphrased similarities. For academic plagiarism detection, k = 50-100 is typical. For code plagiarism detection, where identifiers are variable-length tokens, a token-based approach (treating each token as a unit, then hashing sequences of tokens) is more effective. The rolling hash mechanism is identical — the "characters" are just tokens instead of bytes.

---

## 8.8 Winnowing: Selecting Representative Fingerprints

The naive fingerprinting approach has a problem: for a document of length n and window size k, you get n - k + 1 fingerprints. Two documents each generating a million fingerprints, compared pairwise, requires a million-entry hash set comparison. For a corpus of thousands of documents, this becomes expensive.

Winnowing, introduced by Schleimer, Wilkerson, and Aiken in 2003, reduces the number of fingerprints while preserving detection accuracy. The idea: instead of using all n - k + 1 fingerprints, use only the minimum hash in each sliding window of size w. This reduces the fingerprint count by a factor of roughly w while guaranteeing that any shared substring of length k + w - 1 will produce at least one shared fingerprint.

```
function winnow(doc: String, k: Integer, w: Integer): Set[Integer64] do
  let fingerprints: Set[Integer64] := #{}
  let hashes: Array[Integer64] := []

  -- Compute all k-gram hashes
  let n: Integer := doc.length
  if n < k then
    result := fingerprints
  else
    let rh1: Rolling_Hash := create Rolling_Hash.for_window(
      doc, k, 31, 1000000007)
    let rh2: Rolling_Hash := create Rolling_Hash.for_window(
      doc, k, 31, 998244353)

    from
      let i: Integer := 0
    until
      i > n - k
    do
      hashes.add(rh1.hash() * 998244353 + rh2.hash())
      if i < n - k then
        rh1.roll(doc.char_at(i), doc.char_at(i + k))
        rh2.roll(doc.char_at(i), doc.char_at(i + k))
      end
      i := i + 1
    end

    -- Slide window of size w, select minimum hash in each window
    let prev_min_pos: Integer := -1
    from
      let i: Integer := 0
    until
      i > hashes.length - w
    do
      -- Find minimum in window [i, i+w)
      let min_hash: Integer64 := hashes.get(i)
      let min_pos: Integer := i
      from
        let j: Integer := i + 1
      until
        j >= i + w
      do
        if hashes.get(j) < min_hash then
          min_hash := hashes.get(j)
          min_pos := j
        end
        j := j + 1
      end

      -- Add to fingerprints if not already added
      if min_pos /= prev_min_pos then
        fingerprints := fingerprints.union(#{min_hash})
        prev_min_pos := min_pos
      end

      i := i + 1
    end

    result := fingerprints
  end
end
```

With winnowing, a 100,000-character document with k = 50 and w = 10 produces roughly 10,000 fingerprints instead of 100,000. The detection guarantee: any two documents that share a substring of length at least k + w - 1 = 59 characters will share at least one fingerprint. Short similarities may be missed, but they are also more likely to be coincidental.

MOSS, Stanford's plagiarism detection system, uses winnowing for exactly this reason — it allows comparing thousands of student submissions efficiently while maintaining meaningful detection accuracy.

---

## 8.9 Longest Repeated Substring

The longest repeated substring problem asks: what is the longest string that appears at least twice in a document? This has direct applications in compression (LZ77 and its descendants search for repeated substrings to encode as back-references) and in bioinformatics (repeated sequences in DNA are biologically significant).

Chapter 13 covers suffix arrays, which solve this problem optimally in O(n log n) time. But rolling hashes provide an elegant O(n log n) solution through binary search on the answer length, which is instructive and simpler to implement.

**The key insight:** if a repeated substring of length L exists, then a repeated substring of length L - 1 also exists (just take one character less). If no repeated substring of length L exists, then no repeated substring of length L + 1 exists either. The answer is monotone: there is a threshold where repeated substrings exist below it and do not exist above it. Binary search finds the threshold.

```
function longest_repeated_substring(text: String): String do
  let n: Integer := text.length
  if n = 0 then
    result := ""
  else
    let low: Integer := 1
    let high: Integer := n / 2
    let best: String := ""

    from until low > high do
      let mid: Integer := (low + high) / 2
      let repeated: ?String := find_repeated_of_length(text, mid)

      if repeated /= nil then
        if convert repeated to repeated_text: String then
          best := repeated_text
        end
        low := mid + 1
      else
        high := mid - 1
      end
    end

    result := best
  end
end

function find_repeated_of_length(text: String, k: Integer): ?String do
  let n: Integer := text.length
  if k = 0 or k > n then
    result := nil
  else
    let seen: Map[Integer64, Array[Integer]] := {}
    let found: ?String := nil
    let rh1: Rolling_Hash := create Rolling_Hash.for_window(
      text, k, 31, 1000000007)
    let rh2: Rolling_Hash := create Rolling_Hash.for_window(
      text, k, 31, 998244353)

    from
      let i: Integer := 0
    until
      i > n - k
    do
      let combined: Integer64 := rh1.hash() * 998244353 + rh2.hash()
      let existing: Array[Integer] := seen.try_get(combined, [])

      if existing.length > 0 then
        -- Hash collision or genuine match: verify
        let candidate: String := text.substring(i, i + k)
        across existing as prev_pos do
          if found = nil and
             text.substring(prev_pos, prev_pos + k) = candidate then
            found := candidate
          end
        end
        existing.add(i)
      else
        seen.put(combined, [i])
      end

      if i < n - k then
        rh1.roll(text.char_at(i), text.char_at(i + k))
        rh2.roll(text.char_at(i), text.char_at(i + k))
      end

      i := i + 1
    end

    result := found
  end
end
```

The `find_repeated_of_length` function is O(n) expected time — O(n) to slide the window, O(k) verification only on hash collisions. The outer binary search calls it O(log n) times. Total: O(n log n) expected.

The `seen` map stores, for each hash value, the list of starting positions that produced that hash. On a hash match, we verify against all previous positions with that hash. For a well-chosen hash function, the expected number of positions per hash bucket is O(1), so verification is O(k) per genuine match found.

For the text "mississippi":

```
let text: String := "mississippi"
let lrs: String := longest_repeated_substring(text)
print(lrs)  -- "issi" (appears at positions 1 and 4)
```

---

## 8.10 The Rolling Hash as a General Primitive

Rolling hashes appear in contexts far beyond string matching. Anywhere you need to hash a sliding window over a sequence, the rolling hash applies.

**Content-defined chunking.** Cloud storage systems like Dropbox and rsync use rolling hashes to split files into variable-sized chunks for deduplication. Rather than splitting at fixed byte boundaries — which makes a one-byte insertion at the start change every chunk — they split at positions where the rolling hash of the last k bytes has a specific bit pattern (say, the last 12 bits are all zero). This means insertions and deletions only affect the chunks they fall within; all other chunks remain identical and need not be reuploaded. This is a clever application of rolling hashes to a storage problem rather than a string search problem.

**Approximate string matching in bioinformatics.** Sequence aligners like BWA and Bowtie use rolling hashes to quickly identify candidate positions in the genome where a read might align, before performing the expensive exact alignment. The approach is the same as Rabin-Karp multi-pattern search: hash all k-mers of the read, hash all k-mers of the genome, find positions where hashes match.

**Network intrusion detection.** Snort and other network intrusion detection systems use rolling hashes to search packet payloads for known attack signatures. The multi-pattern Rabin-Karp approach allows thousands of signatures to be checked in a single pass through each packet.

**Locality-sensitive hashing.** More advanced hashing schemes — MinHash and SimHash — extend the rolling hash idea to approximate similarity search, where you want to find documents that are similar but not necessarily sharing exact substrings. These are the algorithms behind "related articles" recommendations and near-duplicate detection in search engines.

---

## 8.11 Choosing Hash Parameters

The choice of base and modulus significantly affects both performance and correctness.

**Modulus:** use a prime close to 2^31 - 1 or 2^61 - 1. A prime modulus makes the hash function behave more uniformly across the output range. Non-prime moduli can create systematic collisions — inputs that differ by a multiple of the modulus produce the same hash — which an adversary could exploit. For competitive programming contexts where adversarial inputs are possible, double hashing with two different primes is essential.

**Base:** use a prime larger than the alphabet size. For ASCII text (256 characters), a base of 257 or larger ensures that different single-character strings hash differently. Common choices are 31 (for lowercase ASCII), 37 (for all ASCII), or 131 (for general byte sequences). The base should not be too large, or intermediate products in the polynomial evaluation overflow before the modular reduction.

**Overflow:** polynomial hash computation involves products like `current_hash * base`. For a modulus of 10^9 + 7 (≈ 2^30) and a base of 31, the product `(10^9) * 31 ≈ 3 × 10^10`, which fits in a 64-bit integer. For larger moduli (like 2^61 - 1), the product of two values near the modulus approaches 2^122, which overflows 64-bit integers. In such cases, 128-bit arithmetic or Montgomery multiplication is required.

For practical applications in Nex, the moduli 10^9 + 7 and 998244353 with base 31 provide a comfortable margin with standard 64-bit arithmetic:

```
let PRIME_1: Integer64 := 1000000007  -- 10^9 + 7
let PRIME_2: Integer64 := 998244353   -- safe prime, good for NTT
let BASE: Integer := 31

-- For 64-bit products: max value is (10^9)^2 ≈ 10^18, fits in Int64
-- max Int64 ≈ 9.2 × 10^18, so products stay in range
```

---

## 8.12 Complete Rabin-Karp Suite in Nex

Assembling everything into a clean, reusable module:

```
class Rabin_Karp
  create
    make() do
      this.base := 31
      this.mod1 := 1000000007
      this.mod2 := 998244353
    end

    with_parameters(base: Integer, mod1: Integer64, mod2: Integer64)
      require
        positive_base: base > 0
        prime_mod1: mod1 > 0
        prime_mod2: mod2 > 0
      do
        this.base := base
        this.mod1 := mod1
        this.mod2 := mod2
      end

  feature
    base: Integer
    mod1: Integer64
    mod2: Integer64

    -- Single pattern search
    search(text: String, pattern: String): Array[Integer] do
      result := rabin_karp_search(text, pattern)
    end

    -- Multi-pattern search (all patterns same length)
    search_many(text: String,
                patterns: Array[String]): Map[String, Array[Integer]] do
      result := rabin_karp_multi_search(text, patterns)
    end

    -- Document similarity
    similarity(doc_a: String, doc_b: String, k: Integer): Real do
      let detector: Plagiarism_Detector :=
        create Plagiarism_Detector.make(k, 0.0)
      result := detector.similarity(doc_a, doc_b)
    end

    -- Longest repeated substring
    longest_repeat(text: String): String do
      result := longest_repeated_substring(text)
    end

    -- All k-gram fingerprints (full set)
    fingerprints(doc: String, k: Integer): Set[Integer64] do
      let detector: Plagiarism_Detector :=
        create Plagiarism_Detector.make(k, 0.0)
      result := detector.fingerprints(doc)
    end

    -- Winnowed fingerprints (reduced set)
    winnowed_fingerprints(doc: String,
                           k: Integer, w: Integer): Set[Integer64] do
      result := winnow(doc, k, w)
    end

    -- Verify Rabin-Karp against naive for testing
    verify(text: String, pattern: String): Boolean do
      let rk_result: Array[Integer] := search(text, pattern)
      let naive_result: Array[Integer] := []
      let n: Integer := text.length
      let m: Integer := pattern.length

      if m > 0 and m <= n then
        from
          let i: Integer := 0
        until
          i > n - m
        do
          if text.substring(i, i + m) = pattern then
            naive_result.add(i)
          end
          i := i + 1
        end
      end

      result := rk_result.to_string() = naive_result.to_string()
    end

  invariant
    positive_base: base > 0
    positive_mod1: mod1 > 0
    positive_mod2: mod2 > 0
end
```

A test that connects the algorithms:

```
function demonstrate_rabin_karp() do
  let rk: Rabin_Karp := create Rabin_Karp.make()

  -- Basic search
  let text: String := "the rain in spain stays mainly in the plain"
  let pattern: String := "ain"
  let positions: Array[Integer] := rk.search(text, pattern)
  print("'" + pattern + "' found at: " + positions.to_string())
  -- [5, 14, 28, 36]

  -- Multi-pattern
  let patterns: Array[String] := ["the", "ain", "in "]
  let multi: Map[String, Array[Integer]] := rk.search_many(text, patterns)
  across patterns as p do
    print(p + ": " + multi.get(p).to_string())
  end

  -- Similarity
  let essay1: String := "The quick brown fox jumps over the lazy dog " +
    "and the dog did not mind at all because it was a very lazy dog"
  let essay2: String := "A quick brown fox leaped over a lazy dog " +
    "and the lazy dog did not care at all because it was quite lazy"
  let sim: Real := rk.similarity(essay1, essay2, 10)
  print("Similarity: " + (sim * 100.0).to_string() + "%")

  -- Longest repeat
  let dna: String := "ATCGATCGATCG"
  print("Longest repeat: " + rk.longest_repeat(dna))  -- "ATCGATCG"

  -- Verification
  print("Single search verified: " + rk.verify(text, pattern).to_string())
end
```

---

## 8.13 Where This Lives in the Wild

**MOSS (Measures of Software Similarity)** is Stanford's academic plagiarism detection system, in use at universities worldwide since 1994. It uses a variant of winnowing to fingerprint student code submissions and compare them against a corpus. When a professor runs MOSS on a set of programming assignments, it computes k-gram fingerprints of each submission and reports pairs with high fingerprint overlap, along with the specific code regions that contributed to the similarity.

**rsync** uses a rolling hash to find matching blocks between a local file and a remote file, minimising the data transferred during synchronisation. The Rsync algorithm, designed by Andrew Tridgell and Paul Mackerras, computes a rolling Adler-32 checksum (a weaker but faster variant of the Rabin fingerprint) over each 512-byte block of the remote file, then slides a window over the local file looking for matching checksums. When a match is found (and verified with a stronger MD5 hash), that block does not need to be transmitted. This allows rsync to synchronise large files with tiny diffs in a fraction of the time a naive copy would take.

**Dropbox and many other cloud storage systems** use content-defined chunking (CDC) with rolling hashes for deduplication. When a file is uploaded, it is split into variable-sized chunks at positions where the rolling hash of the previous k bytes meets a specific criterion. Identical chunks from different files — or different versions of the same file — are stored only once. A one-line change to a 100MB document causes only one or two chunks to change, rather than the entire file. Dropbox's Brisk paper describes a rolling hash-based CDC system that handles petabytes of data.

**Apache Cassandra and other distributed databases** use rolling hashes in their anti-entropy repair process (Merkle trees). Each partition of a database table is hashed, and ranges are recursively subdivided and hashed until a tree of hashes (a Merkle tree) covers the entire dataset. Two nodes that disagree on data can identify exactly which ranges differ by comparing Merkle tree nodes from the root down, using rolling hash computations at each level.

**Git** uses a content-addressable object store where every object — blob, tree, commit — is identified by its SHA-1 (now SHA-256) hash. While not a rolling hash in the strict sense, the pack file format that git uses for efficient storage uses a sliding window delta compression that relies on finding matching 16-byte sequences between a new object and a recently seen object, using a rolling hash to locate candidate matches quickly.

---

## Summary

The rolling hash is one of the most versatile primitives in string processing. It converts the O(k) cost of hashing a length-k substring to O(1) by maintaining a running hash that can be updated as the window slides — subtracting the contribution of the character leaving and adding the contribution of the character entering.

Rabin-Karp builds on the rolling hash to achieve O(n + km) multi-pattern search: hash all k patterns into a set, then slide one window through the text, checking membership in O(1) per position and verifying in O(k) only on hash matches. For large k, this dramatically outperforms running KMP or Horspool once per pattern.

The plagiarism detector uses rolling hashes to fingerprint all k-length substrings of a document, then compares fingerprint sets between documents using Jaccard similarity. Winnowing reduces the fingerprint count by a factor of w while maintaining guarantees about which similarities will be detected.

Longest repeated substring becomes O(n log n) through binary search combined with rolling hash duplicate detection — a clean example of a general technique: if a problem has a monotone structure over some parameter, binary search over that parameter and check feasibility at each midpoint.

Rolling hashes appear beyond string matching wherever sliding window hashing is needed: content-defined chunking in storage systems, k-mer matching in bioinformatics, anti-entropy repair in distributed databases. The pattern is always the same — maintain a hash of a fixed-size window, update it in O(1) as the window moves, exploit the cheap hash updates to do something useful with each window position.

The next chapter turns from exact matching and similarity to approximate matching — the case where the pattern and the text are allowed to differ by a bounded number of edits. Edit distance and dynamic programming are the tools, and spell checkers, diff utilities, and DNA sequence alignment are the applications.
