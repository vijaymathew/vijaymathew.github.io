# Chapter 6: Good Enough Answers — Probabilistic Data Structures

---

There is a question that appears, in various forms, across almost every large-scale system ever built.

*Is this thing in this set?*

Is this URL one we have already crawled? Is this password one that has been compromised in a known data breach? Is this credit card number on the fraud watchlist? Is this IP address blocked? Is this word in the dictionary? Is this user ID one we have seen today?

For small sets the answer is trivial — load the set into a hash table, check membership in O(1). For large sets the answer becomes uncomfortable. A billion crawled URLs, stored as strings averaging 60 bytes each, requires 60GB of memory for the hash table alone. A database of 600 million compromised passwords, as in the Have I Been Pwned dataset, cannot be loaded into the RAM of a single machine without displacing everything else.

The brute-force answer — more memory, larger machines, distributed hash tables — works but is expensive. There is a better question to ask first: *how much accuracy do we actually need?*

For many applications, the answer is surprising. A web crawler that occasionally recrawls a URL it has already seen wastes a little bandwidth but causes no serious harm. A fraud detection system that occasionally checks the database for a card number it has already cleared wastes a little latency but causes no transaction failures. A cache that occasionally fetches a value it already has wastes a little compute but returns the correct result.

In these cases, a small probability of error is acceptable. And if a small probability of error is acceptable, the memory requirements drop by orders of magnitude.

This is the domain of probabilistic data structures — structures that trade a controlled, bounded probability of error for dramatic reductions in memory, time, or both. They are not approximations born of laziness or ignorance. They are precise engineering choices with well-understood error characteristics. The error is not random noise — it is a specific kind of error, in a specific direction, with a specific probability that you set when you build the structure.

This chapter covers three: the bloom filter, which answers set membership queries with no false negatives and a tunable false positive rate; the count-min sketch, which estimates frequencies with bounded overestimation; and HyperLogLog, which counts distinct elements using a fixed amount of memory regardless of how many elements there are.

Each one appears in production systems you use every day.

---

## 6.1 The Philosophy of Approximate Answers

Before the structures, the mindset.

Classical data structures are exact. A hash table either contains a key or it does not. A B-tree either finds a value or returns nil. A sort either produces sorted output or it does not. Exactness is the implicit contract, and we rarely question it.

Probabilistic data structures break this contract deliberately, in exchange for something valuable. The exchange is always explicit — you choose the error rate when you build the structure — and the error is always bounded. "Bounded" is the crucial word. These structures do not produce unpredictably wrong answers. They produce answers that are wrong in a specific, quantifiable way, with a probability you control.

There are two kinds of error worth distinguishing.

A **false positive** is reporting that something is in the set when it is not. The structure says "yes" when the true answer is "no." Bloom filters have false positives. A bloom filter might tell a web crawler that it has already seen a URL when it has not — causing the crawler to skip a URL it should crawl. This is an error, but a recoverable one.

A **false negative** is reporting that something is not in the set when it is. The structure says "no" when the true answer is "yes." Bloom filters have no false negatives. If a bloom filter says "not in the set," it is definitely not in the set. This asymmetry is not accidental — it is a design choice that makes bloom filters useful for exactly the applications where false negatives would be catastrophic (a fraud watchlist that misses a fraud is far worse than one that occasionally double-checks a clean card).

Count-min sketch errors are one-sided: frequency estimates are always greater than or equal to the true frequency, never less. HyperLogLog errors are symmetric but bounded by a standard error that decreases as you allocate more memory.

Understanding the direction and probability of error is not optional. A structure whose error characteristics you do not understand is not a useful approximation — it is noise. The structures in this chapter have been analysed rigorously, and their error properties are not empirical observations but mathematical proofs. We will derive the key results, not just quote them.

---

## 6.2 Bloom Filters

### The Problem

You are building a web crawler. Before fetching a URL, you want to know whether you have already fetched it. Your crawl history contains ten billion URLs. You have 8GB of RAM available for this check.

A hash set of ten billion 60-byte strings requires at least 600GB. A disk-based lookup adds tens of milliseconds of latency to every URL check, and you are checking millions of URLs per minute. Neither is acceptable.

You can tolerate a 1% chance of skipping a URL you have not yet crawled. The crawler will re-encounter those URLs later through other links, and crawling them twice would have been wasteful anyway. You cannot tolerate any chance of crawling a URL you have definitely already crawled and finding it has not changed — that would violate your freshness guarantees.

In other words: false positives are acceptable, false negatives are not.

This is exactly the bloom filter's contract.

### The Structure

A bloom filter is a bit array of m bits, all initialised to zero, and k independent hash functions, each of which maps an element to a position in the bit array.

**Adding an element:** apply all k hash functions to the element, obtain k positions in the bit array, and set all k bits to 1.

**Querying an element:** apply all k hash functions, check all k positions. If all k bits are 1, report "possibly in set." If any bit is 0, report "definitely not in set."

The asymmetry of error falls directly from this structure. A false negative — reporting "not in set" for something that was added — is impossible: adding an element always sets its k bits to 1, and checking those same bits will always find them set. A false positive — reporting "possibly in set" for something never added — is possible when the k positions of a queried element happen to all be set by other elements that were added previously.

```
class Bloom_Filter
  create
    with_capacity(expected_elements: Integer, false_positive_rate: Real)
      require
        positive_elements: expected_elements > 0
        valid_rate: false_positive_rate > 0.0 and false_positive_rate < 1.0
      do
        -- Optimal bit array size
        this.m := optimal_m(expected_elements, false_positive_rate)
        -- Optimal number of hash functions
        this.k := optimal_k(this.m, expected_elements)
        this.bits := Array.filled(this.m, false)
        this.count := 0
      end

    from_bytes(data: Array[Integer])
      do
        -- Reconstruct from serialised form (for SSTable loading)
        this.m := bytes_to_int(data, 0)
        this.k := bytes_to_int(data, 4)
        this.count := bytes_to_int(data, 8)
        this.bits := Array.filled(this.m, false)
        from
          let i: Integer := 0
        until
          i >= this.m
        do
          let byte_index: Integer := 12 + (i / 8)
          let bit_index: Integer := i % 8
          this.bits.set(i, data.get(byte_index).bitwise_right_shift(bit_index).bitwise_and(1) = 1)
          i := i + 1
        end
      end

  feature
    m: Integer          -- bit array size
    k: Integer          -- number of hash functions
    bits: Array[Boolean]
    count: Integer      -- number of elements added (approximate)

    add(element: String)
      do
        across hash_positions(element) as pos do
          bits.set(pos, true)
        end
        count := count + 1
      ensure
        might_contain_after: might_contain(element)
      end

    might_contain(element: String): Boolean do
      across hash_positions(element) as pos do
        if not bits.get(pos) then
          result := false
          return
        end
      end
      result := true
    end

    -- Serialise for storage in SSTable footer
    to_bytes(): Array[Integer] do
      let data: Array[Integer] := []
      int_to_bytes(m, data, 0)
      int_to_bytes(k, data, 4)
      int_to_bytes(count, data, 8)

      -- Pack bits into bytes
      let num_bytes: Integer := (m + 7) / 8
      from
        let byte_i: Integer := 0
      until
        byte_i >= num_bytes
      do
        let byte_val: Integer := 0
        from
          let bit_i: Integer := 0
        until
          bit_i >= 8
        do
          let pos: Integer := byte_i * 8 + bit_i
          if pos < m and bits.get(pos) then
            byte_val := byte_val.bitwise_or((1).bitwise_left_shift(bit_i))
          end
          bit_i := bit_i + 1
        end
        data.add(byte_val)
        byte_i := byte_i + 1
      end

      result := data
    end

    current_false_positive_rate(): Real do
      -- (1 - e^(-k*n/m))^k where n is count
      let exponent: Real := (-1.0 * k.to_real() * count.to_real()) /
                             m.to_real()
      result := (1.0 - exp(exponent)) ^ k.to_real()
    end

  invariant
    positive_m: m > 0
    positive_k: k > 0
    bits_correct_size: bits.length = m
    non_negative_count: count >= 0
end
```

The hash positions are generated using double hashing — a technique that simulates k independent hash functions using only two underlying hash functions, avoiding the cost of computing k truly independent hashes:

```
function hash_positions(element: String): Array[Integer] do
  let h1: Integer := murmur_hash3(element, 0)
  let h2: Integer := murmur_hash3(element, h1)
  let positions: Array[Integer] := []
  from
    let i: Integer := 0
  until
    i >= k
  do
    -- Kirsch-Mitzenmacher technique: h1 + i*h2 gives k positions
    -- with the same error properties as k independent hash functions
    let pos: Integer := ((h1 + i * h2) % m + m) % m
    positions.add(pos)
    i := i + 1
  end
  result := positions
end
```

The Kirsch-Mitzenmacher technique is not an approximation — it is proven to achieve the same asymptotic false positive rate as k truly independent hash functions, which would be expensive to compute. Using two underlying hash functions and combining them linearly is both faster and theoretically equivalent.

### Optimal Parameters

Two parameters control a bloom filter's behaviour: the bit array size m and the number of hash functions k. Given a desired false positive rate p and an expected number of elements n, the optimal values are derived from calculus — minimising the false positive rate with respect to m and k simultaneously.

The false positive probability for a bloom filter with m bits, k hash functions, and n elements is:

```
p ≈ (1 - e^(-kn/m))^k
```

Taking the derivative with respect to k and setting it to zero gives the optimal k:

```
k_optimal = (m/n) * ln(2)
```

Substituting back and solving for m given a target false positive rate p:

```
m_optimal = -n * ln(p) / (ln(2))^2
```

In Nex:

```
function optimal_m(n: Integer, p: Real): Integer do
  result := ((-1.0 * n.to_real() * ln(p)) /
              (ln(2.0) ^ 2.0)).ceiling().to_integer()
end

function optimal_k(m: Integer, n: Integer): Integer do
  result := ((m.to_real() / n.to_real()) * ln(2.0)).round().to_integer()
            .max(1)
end
```

Let us compute the concrete numbers for the web crawler problem. Ten billion URLs, 1% false positive rate:

- m = -(10,000,000,000 × ln(0.01)) / (ln(2))² ≈ 95.9 billion bits ≈ 11.5GB
- k = (95.9 billion / 10 billion) × ln(2) ≈ 6.6, rounded to 7

11.5GB for 1% false positive rate over ten billion URLs. Still too large for the scenario as stated. Reduce to 0.1% false positive rate and memory triples to 34GB. But accept 2% false positive rate and memory drops to 9.6GB — within the 8GB constraint if we are willing to accept 2% recrawl rate.

This is the engineering conversation a probabilistic data structure enables. Not "how much memory do we need?" but "how much accuracy can we afford, and what does accuracy cost?" The bloom filter makes that tradeoff explicit and tunable.

### What Bloom Filters Cannot Do

Bloom filters do not support deletion. Setting k bits when adding an element cannot be undone — clearing one of those bits might clear a bit that is also set by a different element. A counting bloom filter addresses this by storing a small integer at each position rather than a single bit, and decrementing on deletion — but at a factor of 4-8x memory increase, which often defeats the purpose.

Bloom filters are also one-shot: once built, the bit array cannot be resized without rebuilding from scratch. If the actual number of elements significantly exceeds the expected count, the false positive rate rises above the design target. For dynamic sets, this requires periodic rebuilding or the use of scalable bloom filter variants that add new bit arrays as the set grows.

---

## 6.3 The Count-Min Sketch

### The Problem

You operate a content delivery network. At any moment, you want to know approximately how many times each URL has been requested in the last hour — not for billing, where exactness matters, but for cache eviction decisions: which URLs are hot enough to keep cached?

There are a hundred million distinct URLs in your system. Storing an exact count for each requires several gigabytes of memory in a hash map. But you do not need exact counts — you need to know, with reasonable accuracy, which URLs are being requested most frequently. If a URL has been requested 10,000 times, knowing it was requested 10,200 times instead of 9,800 times makes no difference to your cache eviction decision.

A bloom filter answers set membership but not counting. You need something different: a frequency estimator that works in bounded memory.

The count-min sketch is that structure.

### The Structure

A count-min sketch is a two-dimensional array of integers: d rows and w columns, all initialised to zero. It has d hash functions, one per row, each mapping elements to positions in [0, w).

**Incrementing the count of an element:** apply each of the d hash functions to the element, obtaining d positions (one per row), and increment the integer at each position.

**Querying the estimated count of an element:** apply the same d hash functions, look up all d values, and return the minimum.

```
class Count_Min_Sketch
  create
    with_parameters(width: Integer, depth: Integer)
      require
        positive_width: width > 0
        positive_depth: depth > 0
      do
        this.w := width
        this.d := depth
        this.table := Array.filled(depth, Array.filled(width, 0))
        this.seeds := generate_seeds(depth)
        this.total := 0
      end

    with_error_bounds(epsilon: Real, delta: Real)
      require
        valid_epsilon: epsilon > 0.0 and epsilon < 1.0
        valid_delta: delta > 0.0 and delta < 1.0
      do
        -- Width and depth derived from error bounds:
        -- w = ceil(e / epsilon), d = ceil(ln(1 / delta))
        this.w := (euler.to_real() / epsilon).ceiling().to_integer()
        this.d := (ln(1.0 / delta)).ceiling().to_integer()
        this.table := Array.filled(this.d, Array.filled(this.w, 0))
        this.seeds := generate_seeds(this.d)
        this.total := 0
      end

  feature
    w: Integer
    d: Integer
    table: Array[Array[Integer]]
    seeds: Array[Integer]
    total: Integer

    increment(element: String) do
      increment_by(element, 1)
    end

    increment_by(element: String, count: Integer)
      require
        positive_count: count > 0
      do
        from
          let row: Integer := 0
        until
          row >= d
        do
          let col: Integer := hash_for_row(element, row)
          table.get(row).set(col, table.get(row).get(col) + count)
          row := row + 1
        end
        total := total + count
      end

    estimate(element: String): Integer do
      let min_val: Integer := 2147483647
      from
        let row: Integer := 0
      until
        row >= d
      do
        let col: Integer := hash_for_row(element, row)
        let val: Integer := table.get(row).get(col)
        if val < min_val then
          min_val := val
        end
        row := row + 1
      end
      result := min_val
    end

    -- Merge another sketch into this one (for distributed aggregation)
    merge(other: Count_Min_Sketch)
      require
        compatible: other.w = w and other.d = d
      do
        from
          let row: Integer := 0
        until
          row >= d
        do
          from
            let col: Integer := 0
          until
            col >= w
          do
            table.get(row).set(col,
              table.get(row).get(col) + other.table.get(row).get(col))
            col := col + 1
          end
          row := row + 1
        end
        total := total + other.total
      end

  invariant
    positive_w: w > 0
    positive_d: d > 0
    non_negative_total: total >= 0
end

function hash_for_row(element: String, row: Integer): Integer do
  result := murmur_hash3(element, seeds.get(row)) % w
end

function generate_seeds(count: Integer): Array[Integer] do
  let seeds: Array[Integer] := []
  from
    let i: Integer := 0
  until
    i >= count
  do
    seeds.add(random_integer())
    i := i + 1
  end
  result := seeds
end
```

### Why the Minimum Is a Good Estimate

The sketch can only overestimate, never underestimate. Here is why.

When you increment element X, you add 1 to d positions — one per row. Each of those positions may also be incremented by other elements that hash to the same position in that row (collisions). So the value at any given position is the true count of X plus the counts of all other elements that collided with X in that row.

The true count is a lower bound on any individual cell's value. The minimum across all d rows is the best estimate — it is most likely to have fewest collisions. The more rows you have, the less likely all rows have their minimum position contaminated.

This one-sided error has a useful consequence: `estimate(element) >= true_count(element)` always. You can rely on this. A count-min sketch that tells you a URL has been requested 5,000 times means the true count is at most 5,000 — possibly less, but never more. For cache eviction — where underestimates are dangerous (you might evict something hot) but overestimates are harmless — this is exactly the right error direction.

### Error Bounds

With width w = ⌈e/ε⌉ and depth d = ⌈ln(1/δ)⌉, the count-min sketch guarantees:

```
P(estimate(x) ≤ true_count(x) + ε * total) ≥ 1 - δ
```

Where total is the sum of all counts ever added. In plain English: with probability at least 1-δ, the estimated count for any element is at most the true count plus ε times the total count.

For our CDN example: if we want error no greater than 0.1% of total requests (ε = 0.001) with probability 99% (δ = 0.01):

- w = ⌈e / 0.001⌉ = ⌈2718⌉ = 2718 columns
- d = ⌈ln(100)⌉ = ⌈4.6⌉ = 5 rows

Memory: 2718 × 5 × 4 bytes (32-bit integers) = 54,360 bytes ≈ 53KB.

Fifty-three kilobytes to estimate request frequencies for a hundred million distinct URLs with 99% accuracy within 0.1% of total traffic. A hash map of exact counts for a hundred million URLs would require several gigabytes. This is the magnitude of the gain.

### Heavy Hitters

A natural application of the count-min sketch is finding heavy hitters — elements whose frequency exceeds some threshold, like the top 100 most-requested URLs. The sketch alone does not identify heavy hitters; it only estimates frequency for a given element. But combined with a small heap of candidates, it does:

```
class Heavy_Hitter_Tracker
  create
    make(sketch: Count_Min_Sketch, threshold_fraction: Real) do
      this.sketch := sketch
      this.threshold_fraction := threshold_fraction
      this.candidates := create Min_Heap[Integer, String].empty()
      this.candidate_set := create Skip_List[String, Boolean].empty()
    end

  feature
    sketch: Count_Min_Sketch
    threshold_fraction: Real
    candidates: Min_Heap[Integer, String]
    candidate_set: Skip_List[String, Boolean]

    observe(element: String) do
      sketch.increment(element)
      let estimated: Integer := sketch.estimate(element)
      let threshold: Integer := (threshold_fraction *
                                  sketch.total.to_real()).to_integer()

      if estimated >= threshold and not candidate_set.contains(element) then
        candidates.insert([estimated, element])
        candidate_set.put(element, true)
      end
    end

    top_k(k: Integer): Array[Any] do
      let results: Array[Any] := []
      let temp: Array[Any] := []

      from until candidates.is_empty() or temp.length >= k do
        let entry: Array := candidates.extract_max()
        let element: String := entry.get(1)
        let estimated: Integer := sketch.estimate(element)
        temp.add([element, estimated])
      end

      result := temp
    end
end
```

This pattern — sketch for frequency estimation, small heap for tracking candidates — appears in network monitoring (finding elephant flows), database query optimisation (finding common query patterns), and recommendation systems (finding trending items).

---

## 6.4 HyperLogLog

### The Problem

You are a product analyst. Every day, you need to know how many distinct users visited the site. Your site receives a billion page views per day, from perhaps 200 million distinct users. The naive approach — store all user IDs in a set, count the set — requires storing up to 200 million IDs, perhaps 1.6GB for 8-byte IDs.

You need the answer within a few percent accuracy. You do not need to know which users visited, just how many distinct ones. Can you do this in a few kilobytes?

HyperLogLog can.

### The Intuition

HyperLogLog is based on an observation about random bit patterns. If you hash each element to a random bit string, and you look at the position of the first 1-bit in each hash value, the maximum first-1-bit position you observe tells you something about how many distinct elements you have seen.

Here is the intuition. A random bit string has a 1 in the first position with probability 1/2, a 0 followed by a 1 with probability 1/4, two zeros followed by a 1 with probability 1/8, and so on. If you have seen n distinct elements, you would expect to have seen at least one element whose hash has a leading 1-bit pattern of length about log₂(n) before the first 1. So the maximum leading zero count you observe is approximately log₂(n).

If the maximum leading zeros you have seen is R, your estimate of distinct elements is 2^R.

This estimate is crude. But with a simple improvement — maintaining m separate registers rather than one, using the first few bits of the hash to select which register each element goes into, and combining the estimates from all registers using a harmonic mean — HyperLogLog achieves a standard error of approximately 1.04 / √m.

With m = 2048 registers, standard error is about 2.3%. With m = 4096, it is 1.6%. With m = 16384, it is 0.8%.

### The Structure

```
class HyperLogLog
  create
    with_precision(precision: Integer)
      require
        valid_precision: precision >= 4 and precision <= 18
      do
        -- precision p gives m = 2^p registers
        -- Standard error ≈ 1.04 / sqrt(m)
        this.p := precision
        this.m := (1).bitwise_left_shift(precision)  -- 2^precision registers
        this.registers := Array.filled(this.m, 0)
        this.alpha := compute_alpha(this.m)
      end

  feature
    p: Integer
    m: Integer
    registers: Array[Integer]
    alpha: Real

    add(element: String) do
      let hash: Integer64 := hash_64(element)

      -- Use first p bits to select register
      let register_index: Integer :=
        hash.bitwise_right_shift(64 - p).to_integer().bitwise_and(m - 1)

      -- Count leading zeros in remaining bits + 1
      let remaining: Integer64 := hash.bitwise_left_shift(p)
      let leading_zeros: Integer := count_leading_zeros(remaining) + 1

      -- Update register with maximum
      if leading_zeros > registers.get(register_index) then
        registers.set(register_index, leading_zeros)
      end
    end

    count(): Integer64 do
      -- Compute harmonic mean of 2^register values
      let sum: Real := 0.0
      across registers as reg do
        sum := sum + (1.0 / ((1).bitwise_left_shift(reg)).to_real())
      end

      let estimate: Real := alpha * m.to_real() * m.to_real() / sum

      -- Small range correction
      if estimate <= 2.5 * m.to_real() then
        let zeros: Integer := count_zero_registers()
        if zeros > 0 then
          -- Linear counting for small estimates
          estimate := m.to_real() * ln(m.to_real() / zeros.to_real())
        end
      end

      -- Large range correction
      -- (2^32 limit for 32-bit hashes; for 64-bit hashes this
      --  correction is rarely needed in practice)

      result := estimate.round().to_integer64()
    end

    -- Merge two HyperLogLog structures for distributed counting
    merge(other: HyperLogLog)
      require
        same_precision: other.p = p
      do
        from
          let i: Integer := 0
        until
          i >= m
        do
          if other.registers.get(i) > registers.get(i) then
            registers.set(i, other.registers.get(i))
          end
          i := i + 1
        end
      end

    -- Estimate memory usage in bytes
    memory_bytes(): Integer do
      result := m  -- one byte per register (registers fit in 0..64)
    end

  invariant
    valid_p: p >= 4 and p <= 18
    correct_m: m = (1).bitwise_left_shift(p)
    registers_correct_size: registers.length = m
end

function count_leading_zeros(value: Integer64): Integer do
  if value = 0 then
    result := 64
    return
  end
  let count: Integer := 0
  let v: Integer64 := value
  from until v.bitwise_and((1).bitwise_left_shift(63)) /= 0 do
    count := count + 1
    v := v.bitwise_left_shift(1)
  end
  result := count
end

function compute_alpha(m: Integer): Real do
  -- Bias correction constant, derived analytically
  case m of
    16 then result := 0.673
    32 then result := 0.697
    64 then result := 0.709
    else result := 0.7213 / (1.0 + 1.079 / m.to_real())
  end
end
```

### Correctness of the Merge Operation

The merge operation is worth examining carefully, because it is what makes HyperLogLog useful in distributed systems.

The merge takes the element-wise maximum of two register arrays. This is correct because each register stores the maximum leading-zero count seen for all elements that hashed to that register's index. If machine A has seen elements that pushed register 7 to value 12, and machine B has seen elements that pushed register 7 to value 15, the merged register 7 should be 15 — the maximum either machine has seen. Taking the element-wise maximum of all registers gives exactly the register state that would result from processing all elements on a single machine.

This is not obvious. Most data structures cannot be merged — you cannot merge two hash sets without examining every element of both sets. HyperLogLog's register-maximum merge is O(m), completely independent of the number of elements observed. For distributed counting — one HyperLogLog per machine, merged at query time — this is invaluable.

### Memory vs Accuracy

The concrete numbers for HyperLogLog are striking:

With precision p = 12 (m = 4096 registers, each one byte): 4KB of memory, standard error 1.6%.

With precision p = 14 (m = 16384 registers): 16KB, standard error 0.8%.

With precision p = 16 (m = 65536 registers): 64KB, standard error 0.4%.

For the product analytics problem — 200 million distinct users, 2% accuracy acceptable — precision p = 12 requires 4KB. The hash set storing all user IDs requires 1.6GB. HyperLogLog uses 0.00025% of that memory.

The error is not degradation under load — it is a fixed statistical property of the algorithm that holds regardless of how many elements are added, as long as the number of distinct elements is large relative to the number of registers. For small cardinalities, HyperLogLog switches to linear counting — the small range correction in the implementation above — which is exact for very small sets and smoothly transitions to the probabilistic estimate as cardinality grows.

---

## 6.5 Combining the Structures

These three structures are not isolated tools. They appear together, often in the same system, each solving a different subproblem.

In Chapter 5, bloom filters appeared as a first-class component of LSM trees. Each SSTable has a bloom filter in its footer, loaded into memory when the SSTable is opened. Before performing a disk read to check whether a key is present in an SSTable, the bloom filter is consulted. A "definitely not present" answer saves a disk read. A "possibly present" answer triggers the disk read. With a 1% false positive rate, 99% of absent-key lookups in any given SSTable are resolved without disk I/O.

Now consider adding a count-min sketch and HyperLogLog to the same system. The count-min sketch tracks access frequency for cache management — which keys are accessed most often and should be kept in a memory cache in front of the LSM tree. The HyperLogLog tracks distinct key count — how many unique keys the system has stored, a useful metric for capacity planning and bloom filter sizing.

Together, the three structures give you:
- Membership testing without loading the full dataset (bloom filter)
- Frequency estimation without tracking per-key counts (count-min sketch)  
- Cardinality estimation without storing the elements (HyperLogLog)

All three from a few megabytes of memory, regardless of dataset size.

---

## 6.6 A Unified Interface

Since all three structures answer different questions about a stream of elements, wrapping them in a unified stream analyser makes their complementary nature visible:

```
class Stream_Analyser
  create
    make(expected_elements: Integer,
         fp_rate: Real,
         freq_epsilon: Real,
         freq_delta: Real,
         hll_precision: Integer) do
      this.membership := create Bloom_Filter.with_capacity(
        expected_elements, fp_rate)
      this.frequency := create Count_Min_Sketch.with_error_bounds(
        freq_epsilon, freq_delta)
      this.cardinality := create HyperLogLog.with_precision(hll_precision)
    end

  feature
    membership: Bloom_Filter
    frequency: Count_Min_Sketch
    cardinality: HyperLogLog

    observe(element: String) do
      membership.add(element)
      frequency.increment(element)
      cardinality.add(element)
    end

    seen_before(element: String): Boolean do
      result := membership.might_contain(element)
    end

    estimated_frequency(element: String): Integer do
      result := frequency.estimate(element)
    end

    estimated_distinct_count(): Integer64 do
      result := cardinality.count()
    end

    memory_bytes(): Integer do
      result := membership.m / 8 +
                frequency.w * frequency.d * 4 +
                cardinality.m
    end
end
```

Using it:

```
-- CDN request analyser: track 10M expected URLs,
-- 1% false positive rate, 0.1% frequency error with 99% confidence,
-- 1.6% cardinality error
let analyser: Stream_Analyser := create Stream_Analyser.make(
  10000000, 0.01, 0.001, 0.01, 14)

-- Process requests
analyser.observe("https://cdn.example.com/video/1042.mp4")
analyser.observe("https://cdn.example.com/image/logo.png")
-- ... billions more ...

-- Query
print(analyser.seen_before("https://cdn.example.com/video/9999.mp4"))
print(analyser.estimated_frequency("https://cdn.example.com/video/1042.mp4"))
print(analyser.estimated_distinct_count())
print("Memory used: " + analyser.memory_bytes().to_string() + " bytes")
```

The memory usage of this analyser for ten million expected URLs: the bloom filter takes about 11.5MB, the count-min sketch takes about 53KB, the HyperLogLog takes 16KB. Approximately 12MB total to answer three categories of questions about a stream of billions of requests.

---

## 6.7 Error Budget Thinking

Probabilistic data structures introduce a discipline that is valuable beyond the specific structures themselves: error budget thinking.

Every probabilistic structure has parameters that control its error. The bloom filter has a false positive rate. The count-min sketch has ε and δ. HyperLogLog has precision p. These parameters are not set-and-forgotten configuration values — they are explicit statements about how much inaccuracy your application can tolerate.

Before choosing parameters, you must answer: what does an error cost? A bloom filter false positive in a web crawler costs one redundant HTTP request. A bloom filter false positive in a fraud detection system might cost a customer declined transaction — far more expensive. A count-min sketch overestimate in a cache eviction system keeps a cache entry longer than necessary — cheap. A count-min sketch overestimate in a billing system charges a customer more than they owe — catastrophic.

The error budget is a conversation between the data structure's mathematical properties and the application's cost model. That conversation should happen explicitly, before deploying any probabilistic structure. The structures themselves are precise tools. Using them wisely requires being equally precise about the consequences of their errors.

---

## 6.8 Where This Lives in the Wild

**Bloom filters** are pervasive. Google's Bigtable uses bloom filters per SSTable for exactly the same purpose as our LSM tree in Chapter 5. PostgreSQL's query planner uses bloom indexes to speed up WHERE clause evaluation for low-selectivity predicates. Chrome uses a bloom filter for its Safe Browsing feature — when you visit a URL, Chrome checks a locally-stored bloom filter of known malicious URLs before querying Google's servers, reducing network requests while maintaining near-perfect safety coverage. Akamai uses bloom filters to decide what to cache — a page that has been requested at least twice is almost certainly worth caching.

**Count-min sketch** appears wherever frequency estimation matters at scale. Apache Flink and Apache Spark both include count-min sketch implementations for streaming analytics. Twitter uses it for trending topic detection. Cloudflare uses it for DDoS detection — a sudden spike in request frequency for a particular IP or URL pattern triggers investigation. Redis has a `CMS.INCRBY` and `CMS.QUERY` command for count-min sketch operations built into the database.

**HyperLogLog** is perhaps the most widely deployed of the three, because distinct count is such a universal analytics primitive. Redis implements HyperLogLog natively via the `PFADD` and `PFCOUNT` commands — the `PF` prefix honours Philippe Flajolet, who with Éric Fusy, Olivier Gandouet, and Frédéric Meunier published the HyperLogLog paper in 2007. Google's BigQuery uses HyperLogLog++ (an improved variant) for its `APPROX_COUNT_DISTINCT` function. Amazon Redshift, Apache Spark, and Presto all implement HyperLogLog for scalable distinct counting. Every time you query "how many unique users visited this page last month?" in any major analytics platform, there is a good chance HyperLogLog is doing the counting.

---

## Summary

Probabilistic data structures are not a concession to imprecision. They are a precise engineering choice: trade a controlled, bounded, well-understood probability of error for dramatic reductions in memory and time. The error is not random — it is specific in direction and probability, chosen when the structure is built.

The bloom filter answers "is this in the set?" with no false negatives and a tunable false positive rate. Its memory cost is determined by the false positive rate and the number of expected elements, derived analytically from the optimal bit array size and hash function count. It is the structure that makes LSM tree reads practical by eliminating unnecessary disk I/O.

The count-min sketch estimates "how often has this been seen?" using a two-dimensional counter array, returning the minimum across rows as the frequency estimate. It can only overestimate, never underestimate, and its error is bounded by ε × total with probability 1-δ, where ε and δ are chosen at construction time.

HyperLogLog answers "how many distinct elements have been seen?" using a few kilobytes of memory regardless of cardinality, by tracking the maximum leading-zero count in hashed values across m registers. Its standard error is 1.04 / √m, controllable by choosing the precision parameter. It merges in O(m) time, making it ideal for distributed distinct counting.

Together, these three structures solve three different questions about large data streams — membership, frequency, cardinality — from a few megabytes of memory. They appear throughout production systems precisely because the questions they answer arise constantly and the exact answers are too expensive to maintain.

The next chapter begins Part III, where we turn from storing and finding data to the specific and rich world of algorithms on strings — which is where working programmers spend far more time than most algorithms books acknowledge.
