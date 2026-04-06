# Chapter 15: Quicksort — The Practical Champion

---

In 1959, Tony Hoare was a twenty-five-year-old working on a machine translation project in Moscow. He needed to sort a list of Russian words so that their translations could be looked up efficiently. He knew about insertion sort and bubble sort — the standard methods of the time — but they were too slow for his purposes. On a bus ride, he thought of a different approach. He called it quicksort.

Hoare's algorithm is still the dominant general-purpose sorting algorithm sixty-five years later. Java's `Arrays.sort` uses it for primitive types. C's `qsort` is typically a variant of it. Python's `sorted` uses Timsort, a hybrid that includes insertion sort, but Timsort's performance characteristics were derived by studying quicksort's behavior. Rust's `sort_unstable` uses pattern-defeating quicksort. The algorithm that appeared to a young researcher on a Moscow bus is in the standard library of virtually every mainstream programming language in existence.

Why? Not because quicksort is theoretically optimal — merge sort achieves the same O(n log n) average case with a better worst case. Not because it is the simplest to implement — insertion sort is simpler. Quicksort dominates because it is fast in practice, in the way that matters most: on real hardware, on real data, in real memory.

This chapter explains why quicksort wins in practice, how its simple idea degrades catastrophically on certain inputs, how decades of engineering have addressed those degradations, and what the resulting standard library implementations actually look like. By the end, you will understand not just quicksort but the engineering discipline of taking a theoretically imperfect algorithm and making it reliably fast.

---

## 15.1 The Core Idea

Quicksort is a divide-and-conquer algorithm. Its central operation is partitioning: rearrange the array so that all elements smaller than some chosen pivot are to the left, all elements larger are to the right, and the pivot is in its final sorted position. Then recursively sort the left and right partitions.

The elegance is in what partitioning achieves: without knowing anything about where elements belong in the final sorted order, it places one element — the pivot — exactly where it belongs. Every call to partition makes permanent progress.

Contrast with merge sort: merge sort divides the array in half, sorts each half recursively, then merges. The merge step does useful work, but it requires extra memory proportional to the array size. Quicksort partitions in place — it rearranges elements within the existing array using O(1) extra memory, just a few temporary variables for swapping.

This in-place property is why quicksort has better cache behavior than merge sort. Merge sort's merge step reads from one buffer and writes to another, accessing two distinct memory regions alternately. Quicksort's partition step scans the array from both ends toward the center, accessing a single contiguous region in a predictable pattern. On modern hardware, where a cache miss to main memory costs 100-300x a cache hit, this difference is decisive.

---

## 15.2 Partitioning: Lomuto and Hoare

There are two main partitioning schemes, with meaningfully different properties.

### Lomuto Partitioning

Lomuto's scheme (attributed to Nico Lomuto, popularised by Sedgewick) uses a single scanning pointer. The pivot is chosen as the last element. A boundary pointer `i` tracks the boundary between elements known to be smaller than the pivot (left of `i`) and unexamined elements. A scanning pointer `j` walks left to right; when it finds an element smaller than the pivot, that element is swapped to position `i` and `i` advances.

```
function lomuto_partition(arr: Array[Integer],
                           low: Integer,
                           high: Integer): Integer
  require
    valid_range: low >= 0 and high < arr.length and low <= high
  do
    let pivot: Integer := arr.get(high)
    let i: Integer := low - 1  -- boundary: all arr[low..i] < pivot

    from
      let j: Integer := low
    until
      j >= high
    do
      if arr.get(j) <= pivot then
        i := i + 1
        swap(arr, i, j)
      end
      j := j + 1
    end

    -- Place pivot in its final position
    swap(arr, i + 1, high)
    result := i + 1  -- pivot's final position
  end
```

Lomuto is simple and correct. Its weakness: when many elements equal the pivot, many unnecessary swaps occur. On an array of all equal elements, Lomuto performs O(n²) swaps.

### Hoare Partitioning

Hoare's original scheme uses two pointers scanning from opposite ends. The left pointer advances until it finds an element ≥ pivot. The right pointer retreats until it finds an element ≤ pivot. The two elements are swapped. Repeat until the pointers cross.

```
function hoare_partition(arr: Array[Integer],
                          low: Integer,
                          high: Integer): Integer
  require
    valid_range: low >= 0 and high < arr.length and low <= high
  do
    let pivot: Integer := arr.get(low + (high - low) / 2)
    let i: Integer := low - 1
    let j: Integer := high + 1

    from until false do
      -- Advance i until arr[i] >= pivot
      from
        i := i + 1
      until
        arr.get(i) >= pivot
      do
      end

      -- Retreat j until arr[j] <= pivot
      from
        j := j - 1
      until
        arr.get(j) <= pivot
      do
      end

      -- If pointers have crossed, partitioning is complete
      if i >= j then
        result := j
        return
      end

      swap(arr, i, j)
    end
  end
```

Hoare's scheme performs fewer swaps than Lomuto on typical inputs — about three times fewer — and handles equal elements better. The pivot ends up somewhere in the middle of the array (not necessarily at exactly j or j+1), and both partitions are non-empty as long as the array has at least two elements. Hoare's partition is the basis of most practical quicksort implementations.

### Swap

```
function swap(arr: Array[Integer], i: Integer, j: Integer)
  require
    valid_i: i >= 0 and i < arr.length
    valid_j: j >= 0 and j < arr.length
  do
    let temp: Integer := arr.get(i)
    arr.set(i, arr.get(j))
    arr.set(j, temp)
  end
```

---

## 15.3 The Basic Quicksort

```
function quicksort(arr: Array[Integer],
                   low: Integer,
                   high: Integer) do
  if low < high then
    let p: Integer := hoare_partition(arr, low, high)
    quicksort(arr, low, p)
    quicksort(arr, p + 1, high)
  end
end

function sort(arr: Array[Integer]) do
  if arr.length > 1 then
    quicksort(arr, 0, arr.length - 1)
  end
end
```

This is correct. On random input, it runs in O(n log n) expected time. It sorts in place using O(log n) stack space for recursion.

Now let us understand exactly why it sometimes fails catastrophically, and how to fix each failure mode.

---

## 15.4 The Pivot Choice Problem

Quicksort's performance depends entirely on how well the pivot splits the array. A perfect pivot — the median of the array — splits it exactly in half every time, giving O(n log n) recursion depth. A catastrophic pivot — the minimum or maximum — splits into partitions of size 0 and n-1, giving O(n²) total work and O(n) recursion depth.

The basic implementation above chooses the middle element as pivot. On random data, this is essentially random, which works well in expectation. On structured data — already sorted, reverse sorted, or containing many duplicates — it can be catastrophic.

**Already sorted input.** If the array is [1, 2, 3, 4, 5, ..., n] and we pick the middle element as pivot, partition gives roughly equal splits. But many real-world quicksort implementations pick the first or last element as pivot. Then sorted input gives the worst case: every partition produces one empty partition and one of size n-1.

**Nearly sorted input.** Real data is often nearly sorted — logs are timestamp-ordered, names are nearly alphabetical, files are already somewhat organised. The basic quicksort degrades badly on this very common case.

**All equal elements.** An array of identical values causes both Lomuto and basic Hoare to produce maximally unbalanced partitions. O(n²) even on trivial input.

### Solution: Randomised Pivot

The simplest fix: choose the pivot randomly. A random element is unlikely to be near the minimum or maximum, so a random pivot gives expected O(n log n) regardless of input order.

```
function randomised_partition(arr: Array[Integer],
                               low: Integer,
                               high: Integer): Integer do
  let pivot_index: Integer := low + random_integer() % (high - low + 1)
  swap(arr, pivot_index, low + (high - low) / 2)
  result := hoare_partition(arr, low, high)
end
```

Randomised quicksort has expected O(n log n) time for any input. The adversary cannot craft a worst-case input because they do not know which element will be chosen as pivot. This is essentially the same principle as skip lists — internal randomness defeats adversarial inputs.

### Solution: Median-of-Three

A deterministic alternative: choose the median of the first, middle, and last elements as pivot. This costs three comparisons but avoids the common worst cases without the unpredictability of true randomness.

```
function median_of_three(arr: Array[Integer],
                          low: Integer,
                          high: Integer): Integer do
  let mid: Integer := low + (high - low) / 2

  -- Sort low, mid, high into order
  if arr.get(low) > arr.get(mid) then
    swap(arr, low, mid)
  end
  if arr.get(low) > arr.get(high) then
    swap(arr, low, high)
  end
  if arr.get(mid) > arr.get(high) then
    swap(arr, mid, high)
  end

  -- arr[low] <= arr[mid] <= arr[high]
  -- Use arr[mid] as pivot, move it to high-1 for Lomuto-style
  swap(arr, mid, high - 1)
  result := high - 1  -- index of pivot
end
```

Median-of-three eliminates the sorted and reverse-sorted worst cases. It does not fully solve the all-equal-elements case — that requires a different partitioning scheme.

---

## 15.5 The Equal Elements Problem: Three-Way Partitioning

Consider sorting an array where 90% of elements have the same value. Basic quicksort, even with good pivot selection, still processes all equal elements at every level of recursion. Djikstra's three-way partitioning (also called Dutch National Flag partitioning, named after Dijkstra's famous problem) solves this.

Three-way partitioning divides the array into three sections: elements less than pivot, elements equal to pivot, elements greater than pivot. Equal elements are excluded from both recursive calls — they are already in their final positions.

```
-- Three-way partition: returns [lt, gt] where
-- arr[low..lt-1] < pivot
-- arr[lt..gt] = pivot
-- arr[gt+1..high] > pivot
function three_way_partition(arr: Array[Integer],
                              low: Integer,
                              high: Integer): Array[Integer]
  require
    valid_range: low >= 0 and high < arr.length and low <= high
  do
    let pivot: Integer := arr.get(low + (high - low) / 2)
    let lt: Integer := low     -- arr[low..lt-1] < pivot
    let gt: Integer := high    -- arr[gt+1..high] > pivot
    let i: Integer := low      -- arr[lt..i-1] = pivot, arr[i..gt] unexamined

    from until i > gt do
      if arr.get(i) < pivot then
        swap(arr, lt, i)
        lt := lt + 1
        i := i + 1
      elseif arr.get(i) > pivot then
        swap(arr, i, gt)
        gt := gt - 1
        -- Do not advance i: arr[gt] just moved to arr[i] and is unexamined
      else
        i := i + 1
      end
    end

    result := [lt, gt]
  end

function three_way_quicksort(arr: Array[Integer],
                              low: Integer,
                              high: Integer) do
  if low >= high then return end

  let bounds: Array[Integer] := three_way_partition(arr, low, high)
  let lt: Integer := bounds.get(0)
  let gt: Integer := bounds.get(1)

  three_way_quicksort(arr, low, lt - 1)
  three_way_quicksort(arr, gt + 1, high)
  -- No recursive call for arr[lt..gt] — all equal to pivot, already sorted
end
```

On an array of all equal elements, three-way partitioning produces lt = low and gt = high after one pass, making zero recursive calls. O(n) total work. On general inputs, three-way quicksort matches standard quicksort's O(n log n) performance while achieving O(n) on inputs with many equal elements.

Three-way quicksort is also theoretically optimal in an information-theoretic sense: it performs O(n × H) comparisons where H is the entropy of the input's value distribution. When values are uniformly distributed, H = log₂(n) and we get O(n log n). When values are highly repeated, H is small and we get closer to O(n). This is the optimal behavior — you cannot do better without additional assumptions about the input.

---

## 15.6 The Small Partition Problem: Insertion Sort Cutoff

Recursive algorithms have overhead: function call setup, stack frame allocation, bookkeeping. For large n, this overhead is negligible. For small n — say, n < 16 — the overhead of recursive calls exceeds the actual sorting work.

Insertion sort is O(n²) in general but has low overhead and good cache behavior for small arrays. It also exploits near-sortedness: for an array that is almost sorted, insertion sort runs in nearly O(n). After several levels of quicksort partitioning, each partition tends to be nearly sorted (elements are roughly in the right region), making insertion sort efficient for the final cleanup.

The standard optimisation: use insertion sort for partitions of size below some threshold (typically 8-32 elements) and quicksort for larger partitions.

```
let INSERTION_SORT_THRESHOLD: Integer := 16

function insertion_sort(arr: Array[Integer],
                         low: Integer,
                         high: Integer) do
  from
    let i: Integer := low + 1
  until
    i <= high
  do
    let key: Integer := arr.get(i)
    let j: Integer := i - 1
    from until j < low or arr.get(j) <= key do
      arr.set(j + 1, arr.get(j))
      j := j - 1
    end
    arr.set(j + 1, key)
    i := i + 1
  end
end

function hybrid_quicksort(arr: Array[Integer],
                           low: Integer,
                           high: Integer) do
  from until high - low < INSERTION_SORT_THRESHOLD do
    let bounds: Array[Integer] := three_way_partition(arr, low, high)
    let lt: Integer := bounds.get(0)
    let gt: Integer := bounds.get(1)

    -- Tail call optimisation: recurse on smaller partition,
    -- iterate on larger
    if lt - 1 - low < high - gt - 1 then
      hybrid_quicksort(arr, low, lt - 1)
      low := gt + 1
    else
      hybrid_quicksort(arr, gt + 1, high)
      high := lt - 1
    end
  end

  insertion_sort(arr, low, high)
end
```

The tail call optimisation deserves explanation. Quicksort's two recursive calls are not symmetric — one is larger than the other (or they are equal). If we always recurse on both, the maximum recursion depth is O(n) in the worst case (even with good pivot selection, a sequence of slightly unbalanced splits can exhaust the stack). The fix: always recurse on the smaller partition and iterate (tail-call optimise) on the larger. This bounds recursion depth at O(log n), preventing stack overflow even on adversarial inputs.

---

## 15.7 Introsort: The Real World Solution

The hybrid quicksort above handles most cases well. But there remains a theoretical vulnerability: even with median-of-three pivot selection and randomisation, it is possible (though unlikely) for quicksort to degrade to O(n²). For a general-purpose library sort, "unlikely" is not good enough. A standard library sort must handle every input correctly.

Introsort (introspective sort), invented by David Musser in 1997, solves this by combining three algorithms:

1. **Quicksort** for the general case (fast in practice)
2. **Heapsort** as a fallback when recursion depth exceeds 2 log₂(n) (guarantees O(n log n) worst case)
3. **Insertion sort** for small partitions (fast for small n)

The key insight: when quicksort's recursion depth exceeds a threshold, it is making poor pivot choices and heading toward O(n²) behavior. Switch to heapsort — O(n log n) guaranteed — for the remainder of the sort.

Heapsort is slower than quicksort on typical inputs (worse cache behavior) but has a guaranteed O(n log n) worst case. By using heapsort only as a fallback, introsort gets quicksort's typical speed with heapsort's worst-case guarantee.

```
class Introsort
  create
    make() do end

  feature
    max_depth_factor(): Real do
      result := 2.0
    end

    sort(arr: Array[Integer]) do
      if arr.length <= 1 then return end
      let max_depth: Integer :=
        (arr.length.to_real().log2() * max_depth_factor()).to_integer()
      introsort(arr, 0, arr.length - 1, max_depth)
    end

    introsort(arr: Array[Integer],
              low: Integer,
              high: Integer,
              depth_limit: Integer) do
      let size: Integer := high - low + 1

      if size <= INSERTION_SORT_THRESHOLD then
        insertion_sort(arr, low, high)
        return
      end

      if depth_limit = 0 then
        -- Depth limit exceeded: fall back to heapsort
        heapsort(arr, low, high)
        return
      end

      -- Choose pivot using median-of-three
      let pivot_idx: Integer := median_of_three_index(arr, low, high)
      swap(arr, pivot_idx, high)

      -- Lomuto partition (simpler with pivot at high)
      let p: Integer := lomuto_partition(arr, low, high)

      introsort(arr, low, p - 1, depth_limit - 1)
      introsort(arr, p + 1, high, depth_limit - 1)
    end

    median_of_three_index(arr: Array[Integer],
                           low: Integer,
                           high: Integer): Integer do
      let mid: Integer := low + (high - low) / 2

      if arr.get(low) > arr.get(mid) then
        if arr.get(mid) > arr.get(high) then
          result := mid
        elseif arr.get(low) > arr.get(high) then
          result := high
        else
          result := low
        end
      else
        if arr.get(low) > arr.get(high) then
          result := low
        elseif arr.get(mid) > arr.get(high) then
          result := high
        else
          result := mid
        end
      end
    end

    -- Heapsort for fallback: O(n log n) guaranteed
    heapsort(arr: Array[Integer],
             low: Integer,
             high: Integer) do
      let n: Integer := high - low + 1

      -- Build max-heap
      from
        let i: Integer := n / 2 - 1
      until
        i >= 0
      do
        sift_down(arr, low, i, n)
        i := i - 1
      end

      -- Extract elements one by one
      from
        let i: Integer := n - 1
      until
        i > 0
      do
        swap(arr, low, low + i)
        sift_down(arr, low, 0, i)
        i := i - 1
      end
    end

    sift_down(arr: Array[Integer],
              base: Integer,
              root: Integer,
              size: Integer) do
      from until true do
        let largest: Integer := root
        let left: Integer := 2 * root + 1
        let right: Integer := 2 * root + 2

        if left < size and arr.get(base + left) > arr.get(base + largest) then
          largest := left
        end

        if right < size and arr.get(base + right) > arr.get(base + largest) then
          largest := right
        end

        if largest = root then
          return
        end

        swap(arr, base + root, base + largest)
        root := largest
      end
    end

  invariant
    stateless_sorter: true
end
```

Introsort's guarantees:
- O(n log n) worst case (heapsort fallback)
- O(n log n) average case (quicksort dominates)
- O(n) for nearly sorted input with insertion sort for small partitions
- O(log n) stack space (tail call optimisation prevents deep recursion)

This is why introsort is the algorithm standard libraries ship. It is not theoretically perfect — merge sort has a better worst case and is stable — but it is the right tradeoff for a general-purpose sort that must be fast on all inputs without requiring extra memory.

---

## 15.8 Stability and When It Matters

Introsort, like all variants of quicksort, is **unstable**: equal elements may appear in any order in the output, not necessarily the order they appeared in the input.

Stability matters when you sort by one key and want a previous sort by another key to be preserved. Example: sort a list of employees by department, then sort the result by salary. A stable sort preserves department order within each salary tier. An unstable sort scrambles the department order.

For primitive types (integers, floating point), stability is irrelevant — equal elements are indistinguishable. This is why Java uses introsort for primitive type arrays (`Arrays.sort(int[])`) but uses a stable merge sort for object arrays (`Arrays.sort(Object[])`).

If you need a stable sort for integers or simple records, merge sort is the right choice. If you are sorting objects and need stability, either use merge sort or implement a stable variant of quicksort using an auxiliary array for the partition step (which loses the in-place property).

---

## 15.9 A Generic Introsort in Nex

The implementations above sort integers. A practical sort must handle any type with a comparison function.

```
class Generic_Introsort [T]
  create
    make(compare: Function[T, T, Integer]) do
      this.compare := compare
    end

  feature
    compare: Function[T, T, Integer]
    -- compare(a, b) returns negative if a < b, 0 if a = b, positive if a > b

    sort(arr: Array[T]) do
      if arr.length <= 1 then return end
      let max_depth: Integer :=
        (arr.length.to_real().log2() * 2.0).to_integer()
      do_introsort(arr, 0, arr.length - 1, max_depth)
    end

    do_introsort(arr: Array[T],
                 low: Integer,
                 high: Integer,
                 depth_limit: Integer) do
      from until high - low < INSERTION_SORT_THRESHOLD do
        if depth_limit = 0 then
          do_heapsort(arr, low, high)
          return
        end

        -- Median-of-three pivot selection
        let mid: Integer := low + (high - low) / 2
        sort_three(arr, low, mid, high)
        -- arr[low] <= arr[mid] <= arr[high]
        -- Use arr[mid] as pivot
        swap(arr, mid, high - 1)
        let pivot: T := arr.get(high - 1)

        -- Three-way partition
        let lt: Integer := low
        let gt: Integer := high - 1
        let i: Integer := low

        from until i > gt do
          let cmp: Integer := compare(arr.get(i), pivot)
          if cmp < 0 then
            swap(arr, lt, i)
            lt := lt + 1
            i := i + 1
          elseif cmp > 0 then
            swap(arr, i, gt)
            gt := gt - 1
          else
            i := i + 1
          end
        end

        -- Restore pivot
        swap(arr, gt, high - 1)

        -- Tail call optimise: iterate on larger partition
        depth_limit := depth_limit - 1
        if lt - low < high - gt then
          do_introsort(arr, low, lt - 1, depth_limit)
          low := gt + 1
        else
          do_introsort(arr, gt + 1, high, depth_limit)
          high := lt - 1
        end
      end

      do_insertion_sort(arr, low, high)
    end

    sort_three(arr: Array[T], a: Integer, b: Integer, c: Integer) do
      if compare(arr.get(a), arr.get(b)) > 0 then swap(arr, a, b) end
      if compare(arr.get(a), arr.get(c)) > 0 then swap(arr, a, c) end
      if compare(arr.get(b), arr.get(c)) > 0 then swap(arr, b, c) end
    end

    do_insertion_sort(arr: Array[T], low: Integer, high: Integer) do
      from
        let i: Integer := low + 1
      until
        i <= high
      do
        let key: T := arr.get(i)
        let j: Integer := i - 1
        from until j < low or compare(arr.get(j), key) <= 0 do
          arr.set(j + 1, arr.get(j))
          j := j - 1
        end
        arr.set(j + 1, key)
        i := i + 1
      end
    end

    do_heapsort(arr: Array[T], low: Integer, high: Integer) do
      let n: Integer := high - low + 1
      from
        let i: Integer := n / 2 - 1
      until
        i >= 0
      do
        do_sift_down(arr, low, i, n)
        i := i - 1
      end
      from
        let i: Integer := n - 1
      until
        i > 0
      do
        swap(arr, low, low + i)
        do_sift_down(arr, low, 0, i)
        i := i - 1
      end
    end

    do_sift_down(arr: Array[T],
                 base: Integer,
                 root: Integer,
                 size: Integer) do
      from until true do
        let largest: Integer := root
        let left: Integer := 2 * root + 1
        let right: Integer := 2 * root + 2
        if left < size and
           compare(arr.get(base + left), arr.get(base + largest)) > 0 then
          largest := left
        end
        if right < size and
           compare(arr.get(base + right), arr.get(base + largest)) > 0 then
          largest := right
        end
        if largest = root then return end
        swap(arr, base + root, base + largest)
        root := largest
      end
    end

    swap(arr: Array[T], i: Integer, j: Integer) do
      let temp: T := arr.get(i)
      arr.set(i, arr.get(j))
      arr.set(j, temp)
    end

  invariant
    compare_exists: compare /= nil
end
```

Using the generic sort:

```
-- Sort integers
let int_sorter: Generic_Introsort[Integer] :=
  create Generic_Introsort[Integer].make(
    fn(a: Integer, b: Integer): Integer do result := a - b end)

let nums: Array[Integer] := [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
int_sorter.sort(nums)
print(nums.to_string())  -- [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

-- Sort strings
let str_sorter: Generic_Introsort[String] :=
  create Generic_Introsort[String].make(
    fn(a: String, b: String): Integer do result := a.compare_to(b) end)

let words: Array[String] := ["banana", "apple", "cherry", "date"]
str_sorter.sort(words)
print(words.to_string())  -- [apple, banana, cherry, date]

-- Sort records by field
class Person
  create
    make(name: String, age: Integer) do
      this.name := name
      this.age := age
    end
  feature
    name: String
    age: Integer
end

let person_sorter: Generic_Introsort[Person] :=
  create Generic_Introsort[Person].make(
    fn(a: Person, b: Person): Integer do result := a.age - b.age end)

let people: Array[Person] := [
  create Person.make("Alice", 30),
  create Person.make("Bob", 25),
  create Person.make("Carol", 35)
]
person_sorter.sort(people)
across people as p do
  print(p.name + ": " + p.age.to_string())
end
-- Bob: 25
-- Alice: 30
-- Carol: 35
```

---

## 15.10 Benchmarking: Where Quicksort Wins and Loses

Understanding when to use introsort versus alternatives requires knowing the constants behind the asymptotic bounds.

```
class Sort_Benchmark
  create
    make() do end

  feature
    run(n: Integer) do
      let random_data: Array[Integer] := generate_random(n)
      let sorted_data: Array[Integer] := generate_sorted(n)
      let reverse_data: Array[Integer] := generate_reverse(n)
      let equal_data: Array[Integer] := generate_equal(n)
      let nearly_sorted: Array[Integer] := generate_nearly_sorted(n)

      let sorter: Generic_Introsort[Integer] :=
        create Generic_Introsort[Integer].make(
          fn(a: Integer, b: Integer): Integer do result := a - b end)

      print("n = " + n.to_string())
      benchmark("Random",        sorter, random_data.copy())
      benchmark("Sorted",        sorter, sorted_data.copy())
      benchmark("Reverse sorted",sorter, reverse_data.copy())
      benchmark("All equal",     sorter, equal_data.copy())
      benchmark("Nearly sorted", sorter, nearly_sorted.copy())
    end

    benchmark(name: String,
              sorter: Generic_Introsort[Integer],
              data: Array[Integer]) do
      let start: Integer64 := current_time_microseconds()
      sorter.sort(data)
      let elapsed: Integer64 := current_time_microseconds() - start
      print("  " + name + ": " + elapsed.to_string() + "μs")
      assert_sorted(data)
    end

    assert_sorted(arr: Array[Integer]) do
      from
        let i: Integer := 1
      until
        i >= arr.length
      do
        if arr.get(i) < arr.get(i - 1) then
          print("  ERROR: not sorted at position " + i.to_string())
          return
        end
        i := i + 1
      end
    end

    generate_random(n: Integer): Array[Integer] do
      let arr: Array[Integer] := []
      repeat n do arr.add(random_integer() % n) end
      result := arr
    end

    generate_sorted(n: Integer): Array[Integer] do
      let arr: Array[Integer] := []
      from
        let i: Integer := 0
      until
        i >= n
      do
        arr.add(i)
        i := i + 1
      end
      result := arr
    end

    generate_reverse(n: Integer): Array[Integer] do
      let arr: Array[Integer] := []
      from
        let i: Integer := n - 1
      until
        i >= 0
      do
        arr.add(i)
        i := i - 1
      end
      result := arr
    end

    generate_equal(n: Integer): Array[Integer] do
      result := create Array.filled(n, 42)
    end

    generate_nearly_sorted(n: Integer): Array[Integer] do
      let arr: Array[Integer] := generate_sorted(n)
      -- Swap 1% of elements randomly
      repeat n / 100 do
        let i: Integer := random_integer() % n
        let j: Integer := random_integer() % n
        swap(arr, i, j)
      end
      result := arr
    end
end
```

Expected results for n = 1,000,000 on modern hardware (approximate):

```
n = 1000000
  Random:         85ms    (reference case)
  Sorted:         45ms    (insertion sort handles small partitions fast)
  Reverse sorted: 48ms    (median-of-three handles this well)
  All equal:      12ms    (three-way partitioning: O(n))
  Nearly sorted:  50ms    (slightly better than random)
```

Compare to what naive quicksort (first element pivot, no three-way) gives:

```
  Sorted:         >10s    (O(n²) blowup)
  All equal:      >10s    (O(n²) blowup)
```

The engineering — median-of-three, three-way partitioning, insertion sort cutoff, depth limit — transforms a theoretically fragile algorithm into one that handles every case efficiently.

---

## 15.11 Parallel Quicksort

Quicksort's divide-and-conquer structure maps naturally to parallel execution. After the first partition, the two subproblems are completely independent — they operate on disjoint portions of the array and can be sorted simultaneously on different CPU cores.

```
class Parallel_Introsort [T]
  create
    make(compare: Function[T, T, Integer],
         parallelism_threshold: Integer) do
      this.compare := compare
      this.threshold := parallelism_threshold
    end

  feature
    compare: Function[T, T, Integer]
    threshold: Integer  -- minimum size to sort in parallel

    sort(arr: Array[T]) do
      let max_depth: Integer :=
        (arr.length.to_real().log2() * 2.0).to_integer()
      parallel_introsort(arr, 0, arr.length - 1, max_depth)
    end

    parallel_introsort(arr: Array[T],
                       low: Integer,
                       high: Integer,
                       depth_limit: Integer) do
      let size: Integer := high - low + 1

      if size <= INSERTION_SORT_THRESHOLD then
        do_insertion_sort(arr, low, high)
        return
      end

      if depth_limit = 0 then
        do_heapsort(arr, low, high)
        return
      end

      -- Partition
      let bounds: Array[Integer] := three_way_partition_generic(
        arr, low, high, compare)
      let lt: Integer := bounds.get(0)
      let gt: Integer := bounds.get(1)

      -- Spawn parallel tasks for large partitions
      if size >= threshold then
        let left_task: Task := spawn do
          parallel_introsort(arr, low, lt - 1, depth_limit - 1)
        end
        parallel_introsort(arr, gt + 1, high, depth_limit - 1)
        left_task.await
      else
        parallel_introsort(arr, low, lt - 1, depth_limit - 1)
        parallel_introsort(arr, gt + 1, high, depth_limit - 1)
      end
    end
end
```

The `spawn` and `await` here use Nex's native task system from Chapter 21. Parallel quicksort achieves near-linear speedup on multi-core hardware for large arrays, since the partitioning at each level creates independent work that can be distributed across cores.

The parallelism threshold prevents spawning tasks for tiny subproblems — the overhead of task creation exceeds the sorting work for small arrays. A threshold of 10,000-100,000 elements is typical.

---

## 15.12 When Not to Use Quicksort

Quicksort is the right default. It is not always the right choice.

**When you need stability:** use merge sort. Stable sort preserves the relative order of equal elements, which matters when sorting composite records by one field while preserving previous ordering by another.

**When memory is extremely constrained:** quicksort uses O(log n) stack space. This is usually negligible but matters for embedded systems. Heapsort uses O(1) extra space.

**When the data is on disk:** quicksort's random access pattern is catastrophic for disk I/O. Chapter 16 addresses external sorting specifically.

**When the data is a linked list:** quicksort requires O(1) random access to the middle of the array (for median-of-three), which linked lists do not support. Merge sort on linked lists is O(n log n) with O(log n) stack space and no pointer chasing.

**When worst-case matters more than average case and you cannot afford the heapsort fallback:** merge sort guarantees O(n log n) for every input with no fallback needed. In real-time systems where latency spikes are unacceptable, merge sort's consistent performance is preferable to introsort's occasional heapsort fallback.

**When the data is nearly sorted:** Timsort (Python's sort, Java's object sort) is specifically optimised for nearly-sorted data by detecting and exploiting existing runs of sorted elements. For data that comes pre-sorted with occasional inversions — common in practical systems — Timsort can approach O(n) while introsort remains O(n log n).

---

## 15.13 Where This Lives in the Wild

**C++ STL** (`std::sort`) is required by the standard to be O(n log n) average case. All major implementations — GCC's libstdc++, LLVM's libc++, MSVC's STL — use introsort. GCC's implementation uses median-of-three pivot selection, three-way partitioning for equal elements, insertion sort for small partitions (threshold typically 16), and heapsort fallback at depth 2 log₂(n). The implementation in `<algorithm>` is roughly what this chapter describes.

**Rust's `sort_unstable`** uses pattern-defeating quicksort (pdqsort), invented by Orson Peters in 2016. Pdqsort extends introsort with pattern detection: it identifies inputs that are already sorted, reverse sorted, or have many equal elements, and handles them with specialised O(n) code paths before falling back to introsort. On random data, pdqsort matches introsort. On structured data, it can be 2-10x faster. Rust's `sort` (stable) uses a merge sort variant.

**Java's `Arrays.sort(int[])`** uses dual-pivot quicksort, invented by Vladimir Yaroslavskiy in 2009. Dual-pivot quicksort uses two pivots to create three partitions: elements less than the smaller pivot, elements between the two pivots, and elements greater than the larger pivot. This reduces the expected number of comparisons by about 5% relative to single-pivot quicksort and has better cache behavior. Java's implementation also includes insertion sort for small subarrays and a counting sort for arrays of byte values.

**Go's `sort.Ints`** (and the generic `slices.Sort` added in 1.21) uses pdqsort, the same algorithm as Rust. Go's implementation is notable for explicitly handling the three common patterns (sorted, reverse, many equal) with O(n) detection before starting the general sort.

**Redis's `SORT` command** uses quicksort for numeric sorts and a lexicographic variant for string sorts. Redis's implementation is in `src/sort.c` — a straightforward introsort variant without some of the advanced patterns of the language standard libraries.

---

## Summary

Quicksort dominates general-purpose sorting because it is fast in practice: excellent cache behavior from in-place partitioning, low overhead per comparison, and adaptability to common input patterns.

The naive implementation — first element pivot, basic partition, no fallback — has a O(n²) worst case on sorted and nearly-sorted input that is unacceptable for production use. Three engineering decisions transform it into a reliable general-purpose sort:

**Pivot selection** via median-of-three eliminates the worst cases that arise from sorted and reverse-sorted input, while randomisation protects against adversarial inputs that know the pivot selection strategy.

**Three-way partitioning** (Dijkstra's Dutch National Flag) handles repeated elements efficiently. Instead of O(n²) on all-equal input, three-way quicksort achieves O(n). More generally, it achieves O(n × H) where H is the entropy of the input distribution — optimal for any sorting algorithm on that distribution.

**Introsort** combines quicksort's typical performance with a heapsort fallback when recursion depth exceeds 2 log₂(n), guaranteeing O(n log n) worst case for any input. Insertion sort for partitions below a threshold of ~16 elements adds a final speed improvement by exploiting insertion sort's low overhead and good cache behavior on small, nearly-sorted arrays.

The result handles random data near the theoretical optimum, sorted and reverse-sorted data efficiently, all-equal data in linear time, and adversarial inputs without degradation. This is the algorithm in your standard library, doing its work invisibly on every call to sort.

The next chapter removes the fundamental assumption that has held throughout Part IV: that the data fits in memory. When a dataset exceeds RAM — a 500GB log file on a machine with 8GB of RAM — none of the algorithms in this chapter apply. A completely different approach is required, and it connects directly back to the B-tree chapter and its understanding of disk I/O costs.
