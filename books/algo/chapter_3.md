# Chapter 3: The Casino Data Structure — Skip Lists

---

In 1989, William Pugh was frustrated with balanced trees.

Not with their performance — AVL and red-black trees perform well, as the previous chapter established. His frustration was with their complexity. Implementing a red-black tree correctly requires handling a combinatorial spread of cases, tracking colours, performing rotations in the right sequence, and getting deletion right in a way that most textbook presentations fail to do. The code is hard to write, hard to verify, and hard to modify when requirements change.

Pugh asked a question that turns out to be remarkably productive: *what if, instead of deterministically maintaining balance, we used randomness to make imbalance overwhelmingly unlikely?*

The answer was the skip list — a probabilistic data structure that achieves O(log n) expected time for search, insertion, and deletion, with an implementation that is dramatically simpler than any deterministic balanced tree. The word "expected" is doing real work in that sentence, and we will examine it carefully. But the headline result is this: skip lists match the asymptotic performance of red-black trees, are easier to implement correctly, are easier to reason about in concurrent settings, and are the structure Redis chose for its sorted sets.

Understanding why requires understanding what randomness buys you, and what it costs.

---

## 3.1 The Problem, Again

We have the same requirements as Chapter 2: an ordered dictionary that supports O(log n) insertion, deletion, and search, along with ordered traversal and range queries. We have a working solution in AVL and red-black trees. Why look further?

Three reasons.

**Implementation complexity.** Red-black tree deletion is notoriously difficult. Sedgewick's LLRB simplification helps, but the full implementation still requires careful case analysis that is easy to get wrong. A skip list's equivalent operations are structurally simpler — the same basic idea repeated at each level.

**Concurrency friendliness.** Balanced trees require rebalancing operations — rotations — that restructure multiple nodes atomically. In a concurrent setting, ensuring that a rotation is visible to other threads in a consistent state requires either coarse locking (locking the whole tree) or extremely careful lock-free design. Skip lists, by contrast, can be made concurrent with fine-grained locking or even lock-free, because insertions and deletions affect only a local set of forward pointers rather than restructuring the tree globally. Chapter 18 will return to this. For now, it is worth knowing that the skip list's simpler structure is part of why Redis and other concurrent systems chose it.

**Pedagogical value.** Skip lists make the connection between randomness and algorithmic performance vivid and concrete. The idea that flipping coins can give you logarithmic behaviour — provably, with quantifiable probability — is one of the most instructive ideas in data structures. Understanding it changes how you think about the relationship between structure and performance.

---

## 3.2 From Sorted Linked List to Skip List

Start with a sorted linked list. Every node holds a key, a value, and a pointer to the next node. Search is O(n) — you must walk from the beginning. Insertion is O(n) to find the position, then O(1) to rewire the pointer. This is the baseline we want to improve.

The fundamental problem with a sorted linked list is that you cannot skip. To find key 73 in a list of a thousand keys, you must visit keys 1, 2, 3, ... in sequence. There is no way to jump to the middle the way binary search jumps to the midpoint of an array.

The first improvement is obvious: add an express lane. Imagine a second linked list, sitting above the first, that contains only every other node. To search, you walk the express lane until you overshoot, then drop down to the regular lane and finish. This halves the number of nodes you visit.

Add a third lane containing every fourth node. Now you visit roughly n/4 nodes on the top lane, then n/2 nodes on the middle lane, then a constant number on the bottom lane. Total: O(n) still, but better constant.

Carry this to its logical conclusion. If you have log₂(n) lanes, each containing half the nodes of the lane below, search visits O(log n) nodes. This is exactly the structure of a skip list — multiple levels of linked lists, each a sparser version of the one below.

The question is how to maintain these levels as nodes are inserted and deleted. In the regular-interval version — every other node at level 2, every fourth at level 3 — inserting a new node requires reorganising all the levels above the insertion point to maintain the regular spacing. This is as complex as rebalancing a tree, and no better.

Pugh's insight was to abandon the regular spacing. Instead of deciding deterministically which level a node reaches, decide randomly. Each new node is assigned a level by flipping a coin: level 1 always, level 2 with probability 1/2, level 3 with probability 1/4, and so on. The resulting structure is not regularly spaced. But in expectation — averaged over all possible coin flip outcomes — the distribution of nodes across levels is the same as the regular-interval version. And because the levels are assigned randomly rather than maintained deterministically, insertion requires no global reorganisation.

This is what it means to flip coins for structure. The balance is not enforced — it emerges, probabilistically, from randomness applied locally.

---

## 3.3 Structure and Invariants

A skip list consists of a header node and a maximum level, currently in use. Each node has a key, a value, and an array of forward pointers — one per level the node participates in. The header node participates in all levels and serves as the entry point for search at every level.

```
class Skip_Node [K, V]
create
  make(key: ?K, value: ?V, level: Integer) do
    this.key := key
    this.value := value
    repeat level do
      this.forward.add(nil)
    end
  end
feature
  key: ?K
  value: ?V
  forward: Array[?Skip_Node[K, V]]

  set_key(new_key: K) do
    key := new_key
  end

  set_value(new_value: V) do
    value := new_value
  end

  level(): Integer do
    result := forward.length
  end
end
```

The header node has a nil key — it is a sentinel, never matched by any real search. Its forward array has length equal to the maximum level the skip list supports. We set a practical maximum of 32 levels, which is sufficient for datasets up to 2³² entries.

```
class Skip_List [K -> Comparable, V]
  create
    empty() do
      this.max_level := 32
      this.current_level := 1
      this.count := 0
      this.header := create Skip_Node[K, V].make(nil, nil, max_level)
      this.probability := 0.5
    end
  feature
    max_level: Integer
    current_level: Integer
    count: Integer
    header: Skip_Node[K, V]
    probability: Real

  invariant
    valid_level: current_level >= 1 and current_level <= max_level
    non_negative_count: count >= 0
end
```

The `probability` field controls the coin flip — 0.5 gives you the classic half-and-half distribution, resulting in expected O(log n) height. Values closer to 1 give taller structures with more levels but fewer nodes per level; values closer to 0 give shorter structures. Redis uses 0.25, trading a slightly larger constant factor in search time for lower memory use per node. We will return to this tradeoff.

---

## 3.4 Search

Search is the operation that reveals why the multi-level structure works. The snippets below show only the relevant `Skip_List` members:

```nex
class Skip_List [K -> Comparable, V]
feature
  search(key: K): ?V do
    let current: Skip_Node[K, V] := header
    from
      let level: Integer := current_level
    until
      level < 1
    do
      from
        let done: Boolean := false
      until
        done
      do
        done := true
        if convert current.forward.get(level - 1) to next_node: Skip_Node[K, V] then
          if convert next_node.key to next_key: K then
            if next_key.compare(key) < 0 then
              current := next_node
              done := false
            end
          end
        end
      end
      level := level - 1
    end

    result := nil
    let candidate: ?Skip_Node[K, V] := current.forward.get(0)
    if convert candidate to candidate_node: Skip_Node[K, V] then
      if convert candidate_node.key to candidate_key: K then
        if candidate_key.compare(key) = 0 then
          result := candidate_node.value
        end
      end
    end
  end
end
```

Trace this on a concrete example. Suppose the skip list contains keys 3, 7, 12, 19, 26, 37, 55, and we are searching for 19.

At the highest level, say level 3, suppose the forward pointers go 3 → 19 → 55. We advance past 3, stop before 19 (since 19 is not less than 19), and drop to level 2.

At level 2, we are at node 3. Suppose level 2 forward pointers give us 3 → 7 → 19 → 37. We advance past 7, stop before 19, drop to level 1.

At level 1, every node is present. We advance past 7, stop at 19 — which equals our target — and return its value.

The key insight: at each level we eliminated large stretches of the list. At level 3 we skipped from 3 directly to the vicinity of 55. At level 2 we narrowed to the vicinity of 19. At level 1 we landed exactly. The total work was proportional to the number of levels, not the number of nodes.

---

## 3.5 Insertion

Insertion has two phases. First, search for the insertion point while recording, for each level, the last node we were at before descending — the *update array*. These are the nodes whose forward pointers must be modified to include the new node.

### Random Level Generation

The random level function is the heart of the skip list, but it is not a public operation on the data structure. No external caller should ask a skip list to "generate a level"; level generation is an insertion detail, driven by the list's own `max_level` and `probability` fields.

So in Nex, the right place for this logic is as a private feature of `Skip_List`. The algorithm itself is unchanged. With probability 0.5, it returns 1 half the time, 2 a quarter of the time, 3 an eighth of the time, and so on. The expected number of nodes at level `k` is `n / 2^(k - 1)`. The expected maximum level for `n` nodes is `log₂(n)`. For a million nodes, expected maximum level is about 20. The cap at `max_level` prevents pathological outcomes: without it, an extremely unlucky sequence of coin flips could create a node at level a thousand.

Notice what is not happening here: no global state is consulted, no other nodes are modified, no rebalancing is triggered. The level is assigned independently of everything else in the structure. This local independence is the source of the skip list's concurrency friendliness.


```nex
class Skip_List [K -> Comparable, V]
private feature
  random_level(): Integer
    require
      valid_max_level: max_level >= 1
      valid_probability: probability > 0.0 and probability < 1.0
    do
      let level: Integer := 1
      let done: Boolean := false
      repeat max_level - 1 do
        if not done then
          if random_real() < probability then
            level := level + 1
          else
            done := true
          end
        end
      end
      result := level
    end

feature
  put(key: K, value: V)
    do
      let update: Array[Skip_Node[K, V]] := []
      repeat max_level do
        update.add(header)
      end
      let current: Skip_Node[K, V] := header

      let level: Integer := current_level
      from until
        level < 1
      do
        let done: Boolean := false
        from until
          done
        do
          if convert current.forward.get(level - 1) to next_node: Skip_Node[K, V] then
            if convert next_node.key to next_key: K then
              if next_key.compare(key) < 0 then
                current := next_node
              else
                done := true
              end
            else
              done := true
            end
          else
            done := true
          end
        end
        update.set(level - 1, current)
        level := level - 1
      end

      let candidate: ?Skip_Node[K, V] := current.forward.get(0)
      let found_existing: Boolean := false

      if convert candidate to candidate_node: Skip_Node[K, V] then
        if convert candidate_node.key to candidate_key: K then
          if candidate_key.compare(key) = 0 then
            candidate_node.set_value(value)
            found_existing := true
          end
        end
      end

      if not found_existing then
        let new_level: Integer := random_level()

        if new_level > current_level then
          from
            let i: Integer := current_level
          until
            i >= new_level
          do
            update.set(i, header)
            i := i + 1
          end
          current_level := new_level
        end

        let new_node: Skip_Node[K, V] :=
          create Skip_Node[K, V].make(key, value, new_level)

        from
          let i: Integer := 0
        until
          i >= new_level
        do
          new_node.forward.set(i, update.get(i).forward.get(i))
          update.get(i).forward.set(i, new_node)
          i := i + 1
        end

        count := count + 1
      end
    ensure
      key_present: search(key) /= nil
      count_nondecreasing: count >= old count
    end
end
```

The splicing step — for each level the new node participates in, rewire the predecessor's forward pointer to the new node, and set the new node's forward pointer to the old successor — is the entire structural modification. No rotations, no colour flips, no propagating changes up to a grandparent. Each level is handled independently, in a simple loop.

This is the skip list's structural simplicity made concrete. Insertion touches only the nodes in the update array — a set of at most `current_level` nodes — and the new node itself. Everything else in the structure is undisturbed.

---

## 3.6 Deletion

Deletion mirrors insertion. As a class method, it uses the same update-array search pattern, then rewires the forward pointers of the predecessor nodes that currently point at the target.

```nex
class Skip_List [K -> Comparable, V]
feature
  remove(key: K)
    do
      let update: Array[Skip_Node[K, V]] := []
      repeat max_level do
        update.add(header)
      end
      let current: Skip_Node[K, V] := header

      let level: Integer := current_level
      from until
        level < 1
      do
        let done: Boolean := false
        from until
          done
        do
          if convert current.forward.get(level - 1) to next_node: Skip_Node[K, V] then
            if convert next_node.key to next_key: K then
              if next_key.compare(key) < 0 then
                current := next_node
              else
                done := true
              end
            else
              done := true
            end
          else
            done := true
          end
        end
        update.set(level - 1, current)
        level := level - 1
      end

      let target: ?Skip_Node[K, V] := current.forward.get(0)

      if convert target to target_node: Skip_Node[K, V] then
        if convert target_node.key to target_key: K then
          if target_key.compare(key) = 0 then
            from
              let i: Integer := 0
            until
              i >= current_level
            do
              if update.get(i).forward.get(i) = target then
                update.get(i).forward.set(i, target_node.forward.get(i))
              end
              i := i + 1
            end

            from until
              current_level <= 1 or
              header.forward.get(current_level - 1) /= nil
            do
              current_level := current_level - 1
            end

            count := count - 1
          end
        end
      end
    ensure
      key_absent: search(key) = nil
    end
end
```

The level reduction at the end is a housekeeping step: if deletion left the top levels empty — no real node participates at those levels — we shrink `current_level` accordingly. This keeps subsequent searches from wasting time at levels that carry no information.

---

## 3.7 Range Queries

Range queries are even simpler than in a balanced tree, because the bottom level of a skip list is a plain sorted linked list. To find all keys between low and high, search for low at the bottom level and walk forward until you exceed high.

```text
class Skip_List [K -> Comparable, V]
feature
  range(low: K, high: K): Array[Any]
  require
    valid_range: low <= high
  do
    let results: Array[K, V] := []
    let current: Skip_Node[K, V] := header

    -- Find the starting position using normal search
    let level: Integer := current_level
        from until
          level < 1
        do
      let done: Boolean := false
          from until
            done
          do
          if convert current.forward.get(level - 1) to next_node: Skip_Node[K, V] then
            if convert next_node.key to next_key: K then
              if next_key.compare(low) < 0 then
                current := next_node
              else
                done := true
              end
            else
              done := true
            end
          else
            done := true
          end
        end
      level := level - 1
    end

    -- Walk forward at level 1, collecting results
    let scan: ?Skip_Node[K, V] := current.forward.get(0)
    from until scan = nil do
      if convert scan to current_node: Skip_Node[K, V] then
        if current_node.key > high then
          scan := nil
        else
          let pair: Array[Any] := []
          pair.add(current_node.key)
          pair.add(current_node.value)
          results.add(pair)
          scan := current_node.forward.get(0)
        end
      else
        scan := nil
      end
    end

    result := results
  end
```

This is O(log n + k) — logarithmic to find the start, then linear in the number of results. The same complexity as the balanced tree range query, with simpler code.

---

## 3.8 The Probabilistic Analysis

We have been saying "expected O(log n)" throughout this chapter. It is time to be precise about what that means and what guarantees it provides.

**Expected height.** With probability p that a node at level i also appears at level i+1, the probability that a node reaches exactly level k is p^(k-1)(1-p). This is a geometric distribution. The expected maximum level among n nodes is log_{1/p}(n). With p = 0.5, this is log₂(n). For n = one million, expected maximum level is 20.

**Expected search time.** The expected number of nodes examined during a search is O(log_{1/p}(n)). The analysis is more involved — it traces backward from the found node, accounting for the probability of climbing a level at each step — but the result is the same order as a balanced tree.

**Tail bounds.** The expected case is reassuring. The tail — the probability of dramatically bad performance — is what matters in practice. The probability that a skip list with n = 1,000,000 nodes and p = 0.5 exceeds height 3 log₂(n) ≈ 60 is less than 1/n². The probability of taking more than 3 log₂(n) steps in a search is similarly negligible. In practice, skip lists behave essentially deterministically on any dataset of realistic size.

**What "expected" actually means here.** This is important to understand precisely. The randomness is in the structure, not the input. Unlike a hash table, which can be attacked by an adversary who knows the hash function and crafts collisions, a skip list's randomness is internal. An adversary who knows your entire dataset cannot predict the level assigned to any node, because that level is chosen at insertion time by a random process the adversary does not control. The expected O(log n) guarantee holds for any input sequence.

This is one of the underappreciated strengths of randomised data structures: they are robust against adversarial input in a way that deterministic structures sometimes are not.

---

## 3.9 Memory and the Probability Parameter

Each node in a skip list stores not one pointer but `level` pointers — one per level it participates in. The expected number of pointers per node with probability p is 1/(1-p). With p = 0.5, each node has on average 2 pointers. With p = 0.25, each node has on average 1.33 pointers.

The memory comparison to a red-black tree is instructive. A red-black tree node stores: key, value, left pointer, right pointer, parent pointer (in most implementations), and a colour bit. That is roughly five words of overhead per node, always. A skip list node with p = 0.5 stores on average two forward pointers — less than half the overhead, and no parent pointer, which also makes certain operations simpler.

Redis chose p = 0.25 specifically to reduce memory use. The tradeoff: slightly more expected comparisons per search (since nodes at each level are sparser), but meaningfully lower memory per node. For a database storing millions of sorted set members, this is a significant practical consideration.

The probability parameter gives you a knob that balanced trees do not offer. You can tune the memory-time tradeoff continuously, by adjusting p, to fit your specific workload. A read-heavy workload might prefer p = 0.5 for shallower expected height. A memory-constrained workload might prefer p = 0.25.

---

## 3.10 Complete Skip List Implementation

Assembling everything into a complete, contract-annotated class:

```
class Skip_List [K -> Comparable, V]
  create
    empty() do
      this.max_level := 32
      this.current_level := 1
      this.count := 0
      this.header := create Skip_Node[K, V].make(nil, nil, max_level)
      this.probability := 0.5
    end

    with_probability(p: Real)
      require
        valid_probability: p > 0.0 and p < 1.0
      do
        this.max_level := 32
        this.current_level := 1
        this.count := 0
        this.header := create Skip_Node[K, V].make(nil, nil, max_level)
        this.probability := p
      end

  feature
    max_level: Integer
    current_level: Integer
    count: Integer
    header: Skip_Node[K, V]
    probability: Real

    search(key: K): ?V do
      let current: Skip_Node[K, V] := header
      from
        let level: Integer := current_level
      until
        level < 1
      do
        from
          let done: Boolean := false
        until
          done
        do
          done := true
          if convert current.forward.get(level - 1) to next_node: Skip_Node[K, V] then
            if convert next_node.key to next_key: K then
              if next_key.compare(key) < 0 then
                current := next_node
                done := false
              end
            end
          end
        end
        level := level - 1
      end

      result := nil
      let candidate: ?Skip_Node[K, V] := current.forward.get(0)
      if convert candidate to candidate_node: Skip_Node[K, V] then
        if convert candidate_node.key to candidate_key: K then
          if candidate_key.compare(key) = 0 then
            result := candidate_node.value
          end
        end
      end
    end

    get(key: K): ?V do
      result := search(key)
    end

    contains(key: K): Boolean do
      result := search(key) /= nil
    end

  private feature
    random_level(): Integer
      require
        valid_max_level: max_level >= 1
        valid_probability: probability > 0.0 and probability < 1.0
      do
        let level: Integer := 1
        let done: Boolean := false
        repeat max_level - 1 do
          if not done then
            if random_real() < probability then
              level := level + 1
            else
              done := true
            end
          end
        end
        result := level
      end

  feature
    put(key: K, value: V)
      do
        let update: Array[Skip_Node[K, V]] := []
        repeat max_level do
          update.add(header)
        end
        let current: Skip_Node[K, V] := header

        let level: Integer := current_level
        from until
          level < 1
        do
          let done: Boolean := false
          from until
            done
          do
          if convert current.forward.get(level - 1) to next_node: Skip_Node[K, V] then
            if next_node.key < key then
              current := next_node
            else
              done := true
            end
          else
            done := true
          end
        end
          update.set(level - 1, current)
          level := level - 1
        end

        let candidate: ?Skip_Node[K, V] := current.forward.get(0)
        let found_existing: Boolean := false

        if convert candidate to candidate_node: Skip_Node[K, V] then
          if convert candidate_node.key to candidate_key: K then
            if candidate_key.compare(key) = 0 then
              candidate_node.set_value(value)
              found_existing := true
            end
          end
        end

        if not found_existing then
          let new_level: Integer := random_level()

          if new_level > current_level then
            from
              let i: Integer := current_level
            until
              i >= new_level
            do
              update.set(i, header)
              i := i + 1
            end
            current_level := new_level
          end

          let new_node: Skip_Node[K, V] :=
            create Skip_Node[K, V].make(key, value, new_level)

          from
            let i: Integer := 0
          until
            i >= new_level
          do
            new_node.forward.set(i, update.get(i).forward.get(i))
            update.get(i).forward.set(i, new_node)
            i := i + 1
          end

          count := count + 1
        end
      ensure
        key_present: contains(key)
        count_nondecreasing: count >= old count
      end

    remove(key: K)
      do
        let update: Array[Skip_Node[K, V]] := []
        repeat max_level do
          update.add(header)
        end
        let current: Skip_Node[K, V] := header

        let level: Integer := current_level
        from until
          level < 1
        do
          let done: Boolean := false
          from until
            done
          do
          if convert current.forward.get(level - 1) to next_node: Skip_Node[K, V] then
            if next_node.key < key then
              current := next_node
            else
              done := true
            end
          else
            done := true
          end
        end
          update.set(level - 1, current)
          level := level - 1
        end

        let target: ?Skip_Node[K, V] := current.forward.get(0)

        if convert target to target_node: Skip_Node[K, V] then
          if convert target_node.key to target_key: K then
            if target_key.compare(key) = 0 then
            from
              let i: Integer := 0
            until
              i >= current_level
            do
              if update.get(i).forward.get(i) = target then
                update.get(i).forward.set(i, target_node.forward.get(i))
              end
              i := i + 1
            end

            from until
              current_level <= 1 or
              header.forward.get(current_level - 1) /= nil
            do
              current_level := current_level - 1
            end

              count := count - 1
            end
          end
        end
      ensure
        key_absent: not contains(key)
      end

    range(low: K, high: K): Array[Any]
      require
        valid_range: low <= high
      do
        let results: Array[Any] := []
        let current: Skip_Node[K, V] := header

        let level: Integer := current_level
        from until
          level < 1
        do
          let done: Boolean := false
          from until
            done
          do
          if convert current.forward.get(level - 1) to next_node: Skip_Node[K, V] then
            if next_node.key < low then
              current := next_node
            else
              done := true
            end
          else
            done := true
          end
        end
          level := level - 1
        end

        let scan: ?Skip_Node[K, V] := current.forward.get(0)
        from until scan = nil do
          if convert scan to current_node: Skip_Node[K, V] then
            if convert current_node.key to current_key: K then
              if current_key.compare(high) > 0 then
                scan := nil
              else
                let pair: Array[Any] := []
                pair.add(current_key)
                if convert current_node.value to current_value: V then
                  pair.add(current_value)
                else
                  pair.add(nil)
                end
                results.add(pair)
                scan := current_node.forward.get(0)
              end
            else
              scan := nil
            end
          else
            scan := nil
          end
        end

        result := results
      end

    in_order(): Array[K] do
      let results: Array[K] := []
      let current: ?Skip_Node[K, V] := header.forward.get(0)
      from until current = nil do
        if convert current to current_node: Skip_Node[K, V] then
          if convert current_node.key to current_key: K then
            results.add(current_key)
            current := current_node.forward.get(0)
          else
            current := nil
          end
        else
          current := nil
        end
      end
      result := results
    end

    size(): Integer do
      result := count
    end

    is_empty(): Boolean do
      result := count = 0
    end

  invariant
    valid_level: current_level >= 1 and current_level <= max_level
    non_negative_count: count >= 0
    valid_probability: probability > 0.0 and probability < 1.0
end
```

The `with_probability` constructor makes the probability parameter explicit and controllable, while `empty` provides a sensible default. The contracts on `put` and `remove` give you the same guarantees as the AVL tree in Chapter 2 — a verified post-condition that the operation had the intended effect — without the complex invariant proofs that balanced trees require.

---

## 3.11 Skip Lists vs Balanced Trees: The Honest Comparison

A skip list is not strictly better than a red-black tree. The choice between them is genuine and workload-dependent.

**Where skip lists win:**
- Implementation simplicity — significantly fewer cases to handle, especially in deletion
- Concurrent access — forward pointer updates are more localised than rotations, making lock-free variants feasible
- Memory — lower expected overhead per node with appropriate probability
- Range queries — the bottom level is a plain linked list, making traversal cache-friendly in a way tree traversal is not

**Where red-black trees win:**
- Worst-case guarantees — red-black trees guarantee O(log n); skip lists guarantee O(log n) only in expectation, though the probability of deviation is negligible in practice
- Cache behaviour for point queries — a red-black tree's nodes can be allocated in a cache-friendly arena; skip list nodes with variable-length forward arrays are harder to pack
- Determinism — if reproducibility across runs matters (for testing or debugging), a deterministic structure is easier to reason about than a randomised one

**The practical verdict** for most applications is that the difference is small enough that implementation familiarity and existing library support dominate. In a new system where you are implementing the structure yourself, skip lists are significantly easier to get right. In a system where the standard library provides a red-black tree, there is rarely reason to replace it.

Redis's choice of skip lists for sorted sets is instructive. Redis is written in C, where implementing a correct red-black tree is substantial work. Redis sorted sets are accessed concurrently from multiple clients. And Redis's sorted sets support range-by-rank queries — give me elements ranked 5th through 15th — which the level-1 linked list makes especially natural. For Redis's specific combination of requirements, skip lists were the right call.

---

## 3.12 Where This Lives in the Wild

**Redis sorted sets** are the most prominent production use. Every `ZADD`, `ZRANGE`, `ZRANK`, and `ZRANGEBYSCORE` command you have ever issued against Redis has operated on a skip list. Redis uses p = 0.25 and a maximum level of 32, which it describes in its source code with characteristic directness: *"We use p=1/4 to save memory."*

**LevelDB and RocksDB** use skip lists for their in-memory MemTable — the structure that holds recently written keys before they are flushed to disk as an SSTable. The MemTable must support concurrent writes from multiple threads, and the skip list's concurrency friendliness makes it the natural choice. Chapter 5 will revisit this when we build an LSM tree.

**Apache Lucene**, the search engine library underlying Elasticsearch, uses skip lists in its inverted index to accelerate the intersection of posting lists — the lists of documents containing each search term. When you search for documents containing both "distributed" and "systems," Lucene uses skip pointers to skip over large stretches of one posting list that cannot possibly appear in the other.

**The Java standard library** does not expose a skip list as its default sorted map — that is `TreeMap`, a red-black tree — but it does provide `ConcurrentSkipListMap` and `ConcurrentSkipListSet` specifically for concurrent access. These are the structures you should reach for when you need a sorted map that multiple threads will access simultaneously, because no lock-free red-black tree exists in the standard library.

---

## Summary

Skip lists achieve O(log n) expected performance for all ordered dictionary operations through a simple and powerful idea: use randomness to create a multi-level linked list structure that, in expectation, behaves like a balanced tree.

The implementation is substantially simpler than any deterministic balanced tree, because insertions and deletions require only local forward pointer updates rather than global rebalancing. The randomness is internal and cannot be exploited by adversarial input. The probability parameter p provides a continuous memory-time tradeoff that deterministic structures cannot offer.

Skip lists are not a replacement for balanced trees in all contexts — worst-case guarantees and determinism sometimes matter — but they are often the better choice when implementation simplicity, concurrency, or range query performance is the primary concern. Redis, LevelDB, RocksDB, and Lucene made that choice in production, and it has held up.

The next chapter escalates the challenge. Everything we have discussed so far assumes the data fits in memory. Chapter 4 removes that assumption entirely, and asks: what does an ordered structure look like when the data lives on disk?
