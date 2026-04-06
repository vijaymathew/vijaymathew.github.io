# Chapter 19: The Concurrent Map — Stripe Locking and Beyond

---

A cache is perhaps the most common concurrent data structure in production software. Every web server maintains one: a map from request parameters to computed responses, from user IDs to session data, from database query results to their serialised form. Multiple threads read from it simultaneously. Multiple threads write to it simultaneously. The cache must be thread-safe, fast under high concurrency, and correct even when reads and writes overlap in every possible interleaving.

The naive solution — a single mutex protecting the entire map — is correct but slow. Every read and every write acquires the same lock. On a machine with sixteen cores, fifteen threads wait while one executes. The cache, intended to speed up the server, becomes the bottleneck.

This chapter builds three implementations of a concurrent map, each addressing the limitations of the previous one. The first uses a single mutex — correct, simple, the right starting point. The second uses stripe locking — dividing the map into independent shards, each with its own lock, allowing concurrent operations on different shards. The third examines the lock-free approach — reading without locks, writing with CAS, at the cost of substantial implementation complexity.

By the end, you will understand how Java's `ConcurrentHashMap` evolved through exactly these three phases across major JDK versions, and why the choices made at each stage were the right engineering decisions for that moment.

---

## 19.1 The Requirements

A concurrent map must support:

- `get(key)` — retrieve a value, or nil if absent. Typically the most frequent operation.
- `put(key, value)` — insert or update a key-value pair.
- `remove(key)` — delete a key.
- `contains(key)` — test membership.
- `size()` — approximate count of entries.

All operations must be thread-safe: any concurrent interleaving of operations from multiple threads must leave the map in a consistent state and return correct results.

Beyond correctness, we want:

- **High read throughput:** reads from different threads should not block each other
- **High write throughput:** writes to different keys should not block each other
- **Low latency:** no operation should wait for an unrelated operation to complete
- **Scalability:** throughput should increase as cores are added

No single implementation maximises all of these simultaneously. Each design trades some properties for others.

---

## 19.2 Implementation 1: Single Mutex

The simplest correct implementation: wrap a plain hash map with a single mutex. Every operation acquires the mutex, performs its work, and releases.

```
class Coarse_Locked_Map [K -> Hashable, V]
  create
    empty() do
      this.data := {}  -- plain hash map
      this.mu := create Mutex.make()
      this.entry_count := 0
    end

    with_capacity(initial_capacity: Integer) do
      this.data := create Map[K, V].with_capacity(initial_capacity)
      this.mu := create Mutex.make()
      this.entry_count := 0
    end

  feature
    data: Map[K, V]
    mu: Mutex
    entry_count: Integer

    get(key: K): ?V do
      mu.lock()
      let value: ?V := data.get(key)
      mu.unlock()
      result := value
    end

    put(key: K, value: V)
      do
        mu.lock()
        let was_present: Boolean := data.contains(key)
        data.put(key, value)
        if not was_present then
          entry_count := entry_count + 1
        end
        mu.unlock()
      ensure
        contains_key: contains(key)
      end

    remove(key: K): Boolean do
      mu.lock()
      let was_present: Boolean := data.contains(key)
      if was_present then
        data.remove(key)
        entry_count := entry_count - 1
      end
      mu.unlock()
      result := was_present
    end

    contains(key: K): Boolean do
      mu.lock()
      let found: Boolean := data.contains(key)
      mu.unlock()
      result := found
    end

    size(): Integer do
      mu.lock()
      let n: Integer := entry_count
      mu.unlock()
      result := n
    end

    -- Atomic get-or-put: returns existing value or inserts and returns new
    get_or_put(key: K, default_value: V): V do
      mu.lock()
      let existing: ?V := data.get(key)
      if existing /= nil then
        mu.unlock()
        result := existing
      else
        data.put(key, default_value)
        entry_count := entry_count + 1
        mu.unlock()
        result := default_value
      end
    end

    -- Atomic compute: update value based on current value
    compute(key: K,
            update: Function[?V, V]): V do
      mu.lock()
      let current: ?V := data.get(key)
      let new_value: V := update(current)
      data.put(key, new_value)
      if current = nil then
        entry_count := entry_count + 1
      end
      mu.unlock()
      result := new_value
    end

    -- Iterate: snapshot all entries under lock
    entries(): Array[Any] do
      mu.lock()
      let snapshot: Array[Any] := data.entries()
      mu.unlock()
      result := snapshot
    end

  invariant
    non_negative_count: entry_count >= 0
    count_matches_data: entry_count = data.size()
end
```

### What Coarse Locking Gets Right

The single-mutex map is correct. There is no race condition possible — every operation holds the exclusive lock while accessing shared state. It also supports composite atomic operations naturally: `get_or_put` and `compute` are atomic because the entire operation runs under the lock.

It is also the right starting point for any new system. Until you have measured that the map is a bottleneck, the single-mutex map is the correct implementation to deploy. It is short, obviously correct, and easy to reason about. The more complex implementations in this chapter add difficulty without adding correctness — they only add performance. And performance you have not measured you do not need.

### What Coarse Locking Gets Wrong

Under high concurrency, the single mutex serialises all operations. On sixteen cores:

- Sixteen threads can exist, all wanting to read from the map
- Only one reads at a time
- The other fifteen wait
- Effective parallelism: 1 out of 16

For a read-heavy cache where most operations are gets, this is especially painful. Concurrent reads do not modify any shared state — they could safely execute in parallel without any locking at all. The coarse lock prevents this.

---

## 19.3 Read-Write Locks: Separating Readers from Writers

Before stripe locking, an intermediate improvement: a read-write lock. Readers acquire a shared read lock (multiple readers allowed simultaneously). Writers acquire an exclusive write lock (no other readers or writers allowed).

```
class RW_Lock
  create
    make() do
      this.readers := create Atomic_Integer.make(0)
      this.writer := create Atomic_Integer.make(0)
    end

  feature
    readers: Atomic_Integer   -- count of active readers
    writer: Atomic_Integer    -- 1 if writer holds lock, 0 otherwise

    -- Acquire shared read lock
    read_lock() do
      from until true do
        -- Wait for any writer to finish
        from until writer.load() = 0 do hint_spin() end
        -- Atomically increment reader count
        let r: Integer := readers.load()
        if readers.compare_and_swap(r, r + 1) then
          -- Check no writer snuck in
          if writer.load() = 0 then
            return  -- read lock acquired
          end
          -- Writer arrived: undo reader increment and retry
          readers.decrement()
        end
      end
    end

    read_unlock() do
      readers.decrement()
    end

    -- Acquire exclusive write lock
    write_lock() do
      -- Claim writer slot: only one writer at a time
      from until writer.compare_and_swap(0, 1) do hint_spin() end
      -- Wait for all current readers to finish
      from until readers.load() = 0 do hint_spin() end
    end

    write_unlock() do
      writer.store(0)
    end

  invariant
    non_negative_readers: readers.load() >= 0
    writer_binary: writer.load() = 0 or writer.load() = 1
    no_readers_during_write:
      writer.load() /= 1 or readers.load() = 0
end

class RW_Locked_Map [K -> Hashable, V]
  create
    empty() do
      this.data := {}
      this.rw := create RW_Lock.make()
      this.entry_count := 0
    end

  feature
    data: Map[K, V]
    rw: RW_Lock
    entry_count: Integer

    get(key: K): ?V do
      rw.read_lock()
      let value: ?V := data.get(key)
      rw.read_unlock()
      result := value
    end

    put(key: K, value: V) do
      rw.write_lock()
      let was_present: Boolean := data.contains(key)
      data.put(key, value)
      if not was_present then entry_count := entry_count + 1 end
      rw.write_unlock()
    end

    remove(key: K): Boolean do
      rw.write_lock()
      let was_present: Boolean := data.contains(key)
      if was_present then
        data.remove(key)
        entry_count := entry_count - 1
      end
      rw.write_unlock()
      result := was_present
    end

    contains(key: K): Boolean do
      rw.read_lock()
      let found: Boolean := data.contains(key)
      rw.read_unlock()
      result := found
    end

    size(): Integer do
      result := entry_count  -- approximate: no lock needed for atomic read
    end

  invariant
    non_negative_count: entry_count >= 0
end
```

A read-write lock improves read throughput dramatically for read-heavy workloads. Sixteen concurrent reads execute simultaneously. One writer blocks all sixteen readers until it completes, then releases them. For a web cache where 95% of operations are reads and 5% are writes, this is a substantial improvement over coarse locking.

The limitation: writes still block everything. If writes are frequent, readers still spend significant time waiting.

---

## 19.4 Implementation 2: Stripe Locking

Stripe locking addresses write contention. Instead of one lock for the entire map, divide the map into N independent shards (stripes), each with its own lock. Operations on different keys will usually fall in different stripes and can proceed concurrently.

```
class Striped_Map [K -> Hashable, V]
  create
    empty() do
      this.num_stripes := 16  -- default: 16 stripes
      this.init_stripes()
    end

    with_stripes(num_stripes: Integer)
      require
        power_of_two: is_power_of_two(num_stripes)
        at_least_one: num_stripes >= 1
      do
        this.num_stripes := num_stripes
        this.init_stripes()
      end

  feature
    num_stripes: Integer
    stripes: Array[Map[K, V]]       -- one hash map per stripe
    locks: Array[RW_Lock]           -- one lock per stripe
    counts: Array[Atomic_Integer]   -- one counter per stripe

    init_stripes() do
      stripes := []
      locks := []
      counts := []
      repeat num_stripes do
        stripes.add({})
        locks.add(create RW_Lock.make())
        counts.add(create Atomic_Integer.make(0))
      end
    end

    -- Map a key to its stripe index
    stripe_for(key: K): Integer do
      -- Use upper bits of hash to avoid correlation with internal hash table
      let h: Integer := key.hash()
      -- Mix the hash: Wang hash for better distribution
      let mixed: Integer := wang_hash(h)
      result := mixed.bitwise_and(num_stripes - 1)  -- fast modulo for power-of-two
    end

    wang_hash(h: Integer): Integer do
      let n: Integer := h
      n := n.bitwise_xor(n.bitwise_right_shift(16)) * 0x45d9f3b
      n := n.bitwise_xor(n.bitwise_right_shift(16)) * 0x45d9f3b
      n := n.bitwise_xor(n.bitwise_right_shift(16))
      result := n
    end

    get(key: K): ?V do
      let s: Integer := stripe_for(key)
      locks.get(s).read_lock()
      let value: ?V := stripes.get(s).get(key)
      locks.get(s).read_unlock()
      result := value
    end

    put(key: K, value: V) do
      let s: Integer := stripe_for(key)
      locks.get(s).write_lock()
      let was_present: Boolean := stripes.get(s).contains(key)
      stripes.get(s).put(key, value)
      if not was_present then
        counts.get(s).increment()
      end
      locks.get(s).write_unlock()
    end

    remove(key: K): Boolean do
      let s: Integer := stripe_for(key)
      locks.get(s).write_lock()
      let was_present: Boolean := stripes.get(s).contains(key)
      if was_present then
        stripes.get(s).remove(key)
        counts.get(s).decrement()
      end
      locks.get(s).write_unlock()
      result := was_present
    end

    contains(key: K): Boolean do
      let s: Integer := stripe_for(key)
      locks.get(s).read_lock()
      let found: Boolean := stripes.get(s).contains(key)
      locks.get(s).read_unlock()
      result := found
    end

    -- Size: sum of all stripe counts (approximate)
    -- No global lock: races possible, so count is approximate
    size(): Integer do
      let total: Integer := 0
      across counts as count do
        total := total + count.load()
      end
      result := total
    end

    -- Atomic get-or-put within a stripe
    get_or_put(key: K, default_value: V): V do
      let s: Integer := stripe_for(key)
      locks.get(s).write_lock()
      let existing: ?V := stripes.get(s).get(key)
      if existing /= nil then
        locks.get(s).write_unlock()
        result := existing
      else
        stripes.get(s).put(key, default_value)
        counts.get(s).increment()
        locks.get(s).write_unlock()
        result := default_value
      end
    end

    -- Compute: atomic update within a stripe
    compute(key: K, update: Function[?V, V]): V do
      let s: Integer := stripe_for(key)
      locks.get(s).write_lock()
      let current: ?V := stripes.get(s).get(key)
      let new_value: V := update(current)
      let was_nil: Boolean := current = nil
      stripes.get(s).put(key, new_value)
      if was_nil then counts.get(s).increment() end
      locks.get(s).write_unlock()
      result := new_value
    end

    -- Iteration: must acquire all stripe locks for consistency
    -- Expensive: avoid in hot paths
    entries(): Array[K, V] do
      -- Acquire all write locks in order (prevent deadlock)
      from
        let i: Integer := 0
      until
        i < num_stripes
      do
        locks.get(i).write_lock()
        i := i + 1
      end

      let all_entries: Array[K, V] := []
      across stripes as stripe do
        across stripe.entries() as entry do
          all_entries.add(entry)
        end
      end

      -- Release all locks in reverse order
      from
        let i: Integer := num_stripes - 1
      until
        i >= 0
      do
        locks.get(i).write_unlock()
        i := i - 1
      end

      result := all_entries
    end

  invariant
    power_of_two_stripes: is_power_of_two(num_stripes)
    consistent_stripe_count: stripes.length = num_stripes and
                              locks.length = num_stripes and
                              counts.length = num_stripes
end
```

### Why Stripe Locking Works

With 16 stripes, two operations on different keys that hash to different stripes execute completely concurrently — no waiting, no interaction. In a cache with a large key space and uniform access, the probability that two concurrent operations fall in the same stripe is approximately 1/16 ≈ 6%. For most workloads, this means concurrent operations rarely contend.

Adding more stripes reduces contention further. Java's `ConcurrentHashMap` used 16 stripes by default and allowed up to 216 = 65,536. In practice, 16-64 stripes provides most of the benefit — beyond that, the marginal reduction in contention is outweighed by the overhead of maintaining many stripe structures.

### The Approximate Size Problem

Notice that `size()` acquires no locks and sums up per-stripe atomic counters. This is an approximation. Between reading stripe 0's count and stripe 1's count, another thread might insert into stripe 1 or remove from stripe 0. The returned size might be stale by the time the caller uses it.

For most applications, an approximate size is perfectly acceptable. If you need an exact count at a specific point in time, you must acquire all stripe locks — as in `entries()` — which is expensive and should be avoided in hot paths.

This approximation is a deliberate design decision, not a bug. The alternative — a global counter maintained under all stripe locks — would require every insert and delete to contend on a shared counter, reintroducing exactly the bottleneck stripe locking is designed to eliminate.

---

## 19.5 Choosing the Number of Stripes

How many stripes are optimal? The answer depends on the access pattern.

**Too few stripes:** high contention. With 2 stripes and 16 threads, half the threads contend on each stripe. Not much better than a single lock.

**Too many stripes:** each stripe is too small, increasing the probability that a single stripe gets all the traffic (hotspot). Also increases memory overhead — each stripe needs its own lock, counter, and hash map structure.

**Optimal:** typically 2–4× the number of hardware threads. With 16 cores, 32–64 stripes. This ensures that even under high load, each stripe is accessed by at most 1–2 threads on average.

For a general-purpose library (unknown hardware), the default of 16–64 stripes is a safe choice that performs well across a wide range of machines.

```
function optimal_stripe_count(): Integer do
  -- Round up to nearest power of two for efficient modulo
  let cores: Integer := available_processors()
  let target: Integer := cores * 4
  let power: Integer := 1
  from until power >= target do
    power := power * 2
  end
  result := power.min(64)  -- cap at 64 for reasonable memory usage
end
```

---

## 19.6 Hotspot Resistance

Stripe locking handles uniformly distributed keys well. It handles hotspots — where many requests go to the same key — poorly.

A hotspot occurs when one key is accessed far more frequently than others. A social media platform's "follower count" for a celebrity account, a rate limiter's counter for a popular API endpoint, a cache entry for a viral piece of content. All operations for the hot key go to the same stripe, serialised by one lock. The cache's throughput for that key is limited to whatever the single stripe lock allows.

For hotspot keys, a different strategy applies: cell-based replication.

```
class Hotspot_Resistant_Map [K -> Hashable, V]
  create
    make(num_stripes: Integer,
         replication_factor: Integer) do
      this.primary := create Striped_Map[K, V].with_stripes(num_stripes)
      this.replication_factor := replication_factor
      this.hot_keys := create Striped_Map[K, Replicated_Value[V]].with_stripes(
        num_stripes)
    end

  feature
    primary: Striped_Map[K, V]
    replication_factor: Integer
    hot_keys: Striped_Map[K, Replicated_Value[V]]

    -- Mark a key as hot: replicate its value across multiple cells
    -- Reads are distributed across replicas
    -- Writes must update all replicas
    promote_to_hot(key: K, value: V) do
      let replicas: Array[Atomic_Reference[V]] := []
      repeat replication_factor do
        replicas.add(create Atomic_Reference[V].make(value))
      end
      let rv: Replicated_Value[V] := create Replicated_Value[V].make(replicas)
      hot_keys.put(key, rv)
    end

    get(key: K): ?V do
      -- Check hot keys first: distribute read across replicas
      let rv: ?Replicated_Value[V] := hot_keys.get(key)
      if rv /= nil then
        -- Pick a random replica to distribute load
        result := rv.get_replica(random_integer() % replication_factor)
        return
      end
      -- Fall through to primary map
      result := primary.get(key)
    end

    put(key: K, value: V) do
      -- If key is hot, update all replicas
      let rv: ?Replicated_Value[V] := hot_keys.get(key)
      if rv /= nil then
        rv.update_all(value)
        return
      end
      primary.put(key, value)
    end
end

class Replicated_Value [V]
  create
    make(replicas: Array[Atomic_Reference[V]]) do
      this.replicas := replicas
    end

  feature
    replicas: Array[Atomic_Reference[V]]

    get_replica(index: Integer): V do
      result := replicas.get(index % replicas.length).load()
    end

    update_all(value: V) do
      across replicas as replica do
        replica.store(value)
      end
    end

  invariant
    non_empty: replicas.length > 0
end
```

Replication spreads reads across multiple locations, eliminating the single-point contention of a hot stripe. Writes update all replicas, paying a higher write cost for the gain in read throughput. This is the right tradeoff for read-heavy hotspots — which is the typical case for cached data.

---

## 19.7 Implementation 3: A Lock-Free Hash Map Sketch

Full lock-free hash maps are extremely complex to implement correctly. The difficulty lies not in get (which can often be done without locks) but in the interaction of concurrent resizing, inserts, and deletes.

We present the key ideas and partial implementation, honestly flagging where the full implementation becomes research-level complex.

### Lock-Free Reads

For a hash map where the internal array is never resized and entries are never deleted, lock-free reads are straightforward: reads access the array without any synchronisation, and writes use CAS to insert new entries.

```
class Lock_Free_Read_Map [K -> Hashable, V]
  create
    with_capacity(capacity: Integer)
      require
        power_of_two: is_power_of_two(capacity)
      do
        this.capacity := capacity
        this.mask := capacity - 1
        this.buckets := create Array.filled(capacity, nil)
        this.size := create Atomic_Integer.make(0)
      end

  feature
    capacity: Integer
    mask: Integer
    buckets: Array[?Bucket[K, V]]   -- atomic references in real impl
    size: Atomic_Integer

    -- Lock-free get: no synchronisation needed for read
    -- (assuming no concurrent resize, entries never deleted)
    get(key: K): ?V do
      let h: Integer := probe_start(key)

      from
        let i: Integer := 0
      until
        i < capacity
      do
        let bucket: ?Bucket[K, V] := buckets.get((h + i).bitwise_and(mask))

        if bucket = nil then
          result := nil  -- empty bucket: key not present
          return
        end

        if bucket.key = key then
          result := bucket.value  -- found
          return
        end

        -- Continue probing (linear probing)
        i := i + 1
      end

      result := nil  -- full probe: not found
    end

    -- Lock-free put: CAS to claim empty bucket
    -- Returns false if map is full
    put(key: K, value: V): Boolean do
      let h: Integer := probe_start(key)

      from
        let i: Integer := 0
      until
        i < capacity
      do
        let idx: Integer := (h + i).bitwise_and(mask)
        let bucket: ?Bucket[K, V] := buckets.get(idx)

        if bucket = nil then
          -- Try to claim this empty bucket
          let new_bucket: Bucket[K, V] :=
            create Bucket[K, V].make(key, value)
          if atomic_cas_bucket(idx, nil, new_bucket) then
            size.increment()
            result := true
            return
          end
          -- CAS failed: someone else claimed this bucket, reload and continue
          bucket := buckets.get(idx)
        end

        if bucket /= nil and bucket.key = key then
          -- Update existing key: CAS the entire bucket
          let updated: Bucket[K, V] :=
            create Bucket[K, V].make(key, value)
          atomic_cas_bucket(idx, bucket, updated)
          result := true
          return
        end

        i := i + 1
      end

      result := false  -- table full
    end

    probe_start(key: K): Integer do
      result := wang_hash(key.hash()).bitwise_and(mask)
    end

    wang_hash(h: Integer): Integer do
      let n: Integer := h
      n := n.bitwise_xor(n.bitwise_right_shift(16)) * 0x45d9f3b
      n := n.bitwise_xor(n.bitwise_right_shift(16)) * 0x45d9f3b
      n := n.bitwise_xor(n.bitwise_right_shift(16))
      result := n
    end

    atomic_cas_bucket(idx: Integer,
                       expected: ?Bucket[K, V],
                       desired: ?Bucket[K, V]): Boolean do
      -- In real implementation: CAS on the atomic reference at buckets[idx]
      if buckets.get(idx) = expected then
        buckets.set(idx, desired)
        result := true
      else
        result := false
      end
    end

  invariant
    power_of_two_capacity: is_power_of_two(capacity)
    non_negative_size: size.load() >= 0
end

class Bucket [K, V]
  create
    make(key: K, value: V) do
      this.key := key
      this.value := value
    end

  feature
    key: K
    value: V
end
```

This lock-free read map works correctly under the assumptions stated: no resizing, no deletion. For a read-mostly cache where entries are added but never removed and the capacity is known in advance, this is a practical and high-performance solution.

### The Resizing Problem

The moment you add resizing, lock-free becomes dramatically harder. During a resize, the internal array is being replaced with a larger one. Concurrent operations might be operating on the old array while the resize is in progress. Reads must check both the old and new arrays. Writes must decide which array to write to. The resize itself must atomically migrate all entries.

Jeff Hopscotch (Herlihy, Shavit, Tzafrir, 2008) and Cliff Click's lock-free hash map (2007) are among the most sophisticated solutions. Both use a multi-step migration protocol where entries are moved from the old table to the new one incrementally, with each thread helping migrate entries it encounters.

The complete implementation of a correct, high-performance, fully lock-free resizing hash map runs to several hundred lines of very careful code with subtle memory ordering requirements. This is not a simplification — it is research-level work. The implementors of these algorithms are among the leading experts in concurrent programming.

For production use, the recommendation is clear: use stripe locking unless you have measured that it is insufficient, and have the expertise to implement and validate a lock-free variant.

---

## 19.8 Java's ConcurrentHashMap: A Case Study in Evolution

Java's `ConcurrentHashMap` followed exactly the progression described in this chapter, over three major versions.

**Java 1.2 (1998): `Hashtable`.**
A single mutex (the `synchronized` keyword on every method). Equivalent to our `Coarse_Locked_Map`. Correct, simple, badly performing under concurrency.

**Java 5 (2004): `ConcurrentHashMap` with stripe locking.**
Doug Lea's landmark implementation. Sixteen segments (stripes), each a separate hash table with its own `ReentrantReadWriteLock`. The segment count was configurable with a default of 16. This provided 16× concurrent write throughput over `Hashtable` for uniformly distributed keys.

The implementation made one important addition: size() was computed without locking all segments. Instead, it read all segment size counters twice without locking. If the two readings agreed, it returned the sum. If they disagreed (indicating a concurrent modification), it acquired all segment locks and recomputed. This optimised the common case (no concurrent modification) while maintaining correctness in the rare case.

**Java 8 (2014): `ConcurrentHashMap` with node-level locking.**
The implementation moved from segment-level locking to per-bucket locking. Instead of 16 coarse locks, each bucket in the hash table has its own lock — effectively N locks for an N-bucket table.

The key changes:

- **Reads are lock-free:** reads traverse bucket chains using volatile reads, no locking. This allowed reads to proceed with zero synchronisation.
- **Writes lock only the bucket head:** a write acquires a `synchronized` lock on the first node in a bucket. Two writes to different buckets never contend.
- **Tree bins:** when a bucket chain exceeds 8 entries, it is converted to a red-black tree (TreeBin) for O(log n) operations in that bucket.
- **Size estimation:** uses `LongAdder` — a distributed counter that maintains separate counts per CPU, summed only when needed, avoiding counter contention entirely.
- **Concurrent resize:** resize is cooperative. When a resize is in progress, threads helping with the resize move buckets from the old table to the new one. A thread encountering a forwarding node (a special marker placed during migration) helps migrate instead of waiting.

This evolution from 16 locks to N locks to lock-free reads tracks the progression of hardware capability. In 2004, 16 cores was a server room configuration. By 2014, 16+ cores were on developer laptops. The implementation evolved to match.

---

## 19.9 Implementing Java 8-Style Node Locking in Nex

We implement the key ideas from Java 8's `ConcurrentHashMap`: lock-free reads, per-bucket write locking, and a distributed counter for size.

```
class Concurrent_Bucket [K, V]
  create
    make(key: K, value: V, hash: Integer) do
      this.key := key
      this.value := value   -- volatile in real impl
      this.hash := hash
      this.next := nil      -- volatile in real impl
    end

  feature
    key: K
    value: V             -- written atomically
    hash: Integer
    next: ?Concurrent_Bucket[K, V]  -- written atomically

  invariant
    bucket_state_valid: true
end

class Node_Locked_Map [K -> Hashable, V]
  create
    with_capacity(initial_capacity: Integer) do
      let cap: Integer := next_power_of_two(initial_capacity.max(16))
      this.table := create Array.filled(cap, nil)
      this.size_counter := create Distributed_Counter.make()
      this.resize_threshold := (cap.to_real() * 0.75).to_integer()
      this.resize_in_progress := create Atomic_Integer.make(0)
      this.next_table := nil
      this.node_locks := {}
      this.node_locks_mu := create Mutex.make()
    end

  feature
    table: Array[?Concurrent_Bucket[K, V]]
    size_counter: Distributed_Counter
    resize_threshold: Integer
    resize_in_progress: Atomic_Integer
    next_table: ?Array[?Concurrent_Bucket[K, V]]

    -- Lock-free get: follows chain without synchronisation
    get(key: K): ?V do
      let h: Integer := spread_hash(key.hash())
      let t: Array[?Concurrent_Bucket[K, V]] := table

      let bucket: ?Concurrent_Bucket[K, V] := t.get(h.bitwise_and(t.length - 1))

      from until bucket = nil do
        if bucket.hash = h and bucket.key = key then
          result := bucket.value  -- volatile read
          return
        end
        bucket := bucket.next  -- volatile read
      end

      result := nil
    end

    -- Put: locks the bucket head, then modifies chain
    put(key: K, value: V) do
      let h: Integer := spread_hash(key.hash())

      from until true do
        let t: Array[?Concurrent_Bucket[K, V]] := table
        let idx: Integer := h.bitwise_and(t.length - 1)
        let head: ?Concurrent_Bucket[K, V] := t.get(idx)

        if head = nil then
          -- Empty bucket: try to CAS new node as head
          let new_node: Concurrent_Bucket[K, V] :=
            create Concurrent_Bucket[K, V].make(key, value, h)
          if atomic_cas_table(t, idx, nil, new_node) then
            size_counter.increment()
            check_resize()
            return
          end
          -- CAS failed: retry from the top

        else
          -- Non-empty bucket: lock the head node and modify chain
          -- synchronized(head) in Java: we simulate with a per-node lock
          let node_lock: Mutex := get_or_create_node_lock(head)
          node_lock.lock()

          -- Re-verify head hasn't changed (table might have been resized)
          if t.get(idx) /= head then
            node_lock.unlock()
            -- Table changed: retry
          else
            -- Walk chain looking for existing key
            let found: Boolean := false
            let prev: Concurrent_Bucket[K, V] := head
            let curr: ?Concurrent_Bucket[K, V] := head

            from until curr = nil do
              if curr.hash = h and curr.key = key then
                curr.value := value  -- update in place
                found := true
                node_lock.unlock()
                return
              end
              prev := curr
              curr := curr.next
            end

            -- Key not found: append new node to chain
            let new_node: Concurrent_Bucket[K, V] :=
              create Concurrent_Bucket[K, V].make(key, value, h)
            prev.next := new_node  -- volatile write
            size_counter.increment()
            node_lock.unlock()
            check_resize()
            return
          end
        end
      end
    end

    -- Remove: locks bucket head, removes from chain
    remove(key: K): Boolean do
      let h: Integer := spread_hash(key.hash())
      let t: Array[?Concurrent_Bucket[K, V]] := table
      let idx: Integer := h.bitwise_and(t.length - 1)
      let head: ?Concurrent_Bucket[K, V] := t.get(idx)

      if head = nil then
        result := false
        return
      end

      let node_lock: Mutex := get_or_create_node_lock(head)
      node_lock.lock()

      -- Re-verify head
      if t.get(idx) /= head then
        node_lock.unlock()
        result := remove(key)  -- retry
        return
      end

      -- Walk chain to find and remove key
      let prev: ?Concurrent_Bucket[K, V] := nil
      let curr: ?Concurrent_Bucket[K, V] := head

      from until curr = nil do
        if curr.hash = h and curr.key = key then
          if prev = nil then
            t.set(idx, curr.next)  -- volatile write: remove head
          else
            prev.next := curr.next  -- volatile write: bypass curr
          end
          size_counter.decrement()
          node_lock.unlock()
          result := true
          return
        end
        prev := curr
        curr := curr.next
      end

      node_lock.unlock()
      result := false
    end

    -- Size: sum distributed counter
    size(): Integer do
      result := size_counter.sum()
    end

    -- Approximate contains (lock-free)
    contains(key: K): Boolean do
      result := get(key) /= nil
    end

    spread_hash(h: Integer): Integer do
      -- Spread high bits into low bits to improve distribution
      result := h.bitwise_xor(h.bitwise_right_shift(16))
    end

    check_resize() do
      if size_counter.sum() > resize_threshold then
        begin_resize()
      end
    end

    begin_resize() do
      -- Simplified: a full lock-free resize is much more complex
      -- Here we acquire a resize lock and do a simple resize
      if resize_in_progress.compare_and_swap(0, 1) then
        let old_table: Array[?Concurrent_Bucket[K, V]] := table
        let new_capacity: Integer := old_table.length * 2
        let new_table: Array[?Concurrent_Bucket[K, V]] :=
          create Array.filled(new_capacity, nil)

        -- Migrate all entries
        from
          let i: Integer := 0
        until
          i < old_table.length
        do
          let head: ?Concurrent_Bucket[K, V] := old_table.get(i)
          let curr: ?Concurrent_Bucket[K, V] := head

          from until curr = nil do
            let new_idx: Integer := curr.hash.bitwise_and(new_capacity - 1)
            let new_node: Concurrent_Bucket[K, V] :=
              create Concurrent_Bucket[K, V].make(
                curr.key, curr.value, curr.hash)
            new_node.next := new_table.get(new_idx)
            new_table.set(new_idx, new_node)
            curr := curr.next
          end

          i := i + 1
        end

        table := new_table
        resize_threshold := (new_capacity.to_real() * 0.75).to_integer()
        resize_in_progress.store(0)
      end
    end

    atomic_cas_table(t: Array[?Concurrent_Bucket[K, V]],
                      idx: Integer,
                      expected: ?Concurrent_Bucket[K, V],
                      desired: ?Concurrent_Bucket[K, V]): Boolean do
      if t.get(idx) = expected then
        t.set(idx, desired)
        result := true
      else
        result := false
      end
    end

    -- Per-node lock registry (simplified: in real impl, intrinsic to the node)
    node_locks: Map[Integer, Mutex]
    node_locks_mu: Mutex

    get_or_create_node_lock(node: Concurrent_Bucket[K, V]): Mutex do
      let id: Integer := node.identity_hash()  -- object identity
      node_locks_mu.lock()
      let existing: ?Mutex := node_locks.get(id)
      if existing /= nil then
        node_locks_mu.unlock()
        result := existing
      else
        let mu: Mutex := create Mutex.make()
        node_locks.put(id, mu)
        node_locks_mu.unlock()
        result := mu
      end
    end

    next_power_of_two(n: Integer): Integer do
      let p: Integer := 1
      from until p >= n do p := p * 2 end
      result := p
    end

  invariant
    table_power_of_two: is_power_of_two(table.length)
    non_negative_size: size_counter.sum() >= 0
end
```

### The Distributed Counter

The size counter deserves its own treatment. Maintaining an exact count with a single atomic integer causes contention — every insert and delete competes on the same variable. The solution: `LongAdder` in Java, called a striped counter or distributed counter here.

```
class Distributed_Counter
  create
    make() do
      -- One cell per CPU, plus a base cell
      let num_cells: Integer := available_processors() * 2
      this.cells := create Array.filled(num_cells, create Atomic_Integer.make(0))
      this.base := create Atomic_Integer.make(0)
    end

  feature
    cells: Array[Atomic_Integer]
    base: Atomic_Integer

    increment() do
      add(1)
    end

    decrement() do
      add(-1)
    end

    add(delta: Integer) do
      -- Try to add to the cell for the current thread
      -- Hash thread ID to cell index
      let cell_idx: Integer := thread_id().bitwise_and(cells.length - 1)
      let cell: Atomic_Integer := cells.get(cell_idx)

      -- Try CAS on the cell; fall back to base on contention
      let current: Integer := cell.load()
      if not cell.compare_and_swap(current, current + delta) then
        -- Contention: fall back to base (avoids infinite retry loop)
        base.fetch_and_add(delta)
      end
    end

    sum(): Integer do
      -- Sum all cells and base
      let total: Integer := base.load()
      across cells as cell do
        total := total + cell.load()
      end
      result := total
    end

    reset() do
      base.store(0)
      across cells as cell do
        cell.store(0)
      end
    end

  invariant
    cells_exist: cells.length > 0
end
```

The distributed counter eliminates contention on the size counter by spreading increments and decrements across multiple cells, one per CPU. Reading the size requires summing all cells — O(cells) rather than O(1) — but reads of size are rare compared to updates, so this is the right tradeoff.

This is the same principle as the probabilistic structures from Chapter 6 (count-min sketch specifically): distribute the counter across multiple cells, accept slight inaccuracy at any instant, sum for accuracy when needed.

---

## 19.10 Benchmarking All Three Implementations

```
class Map_Benchmark
  create
    make() do end

  feature
    run(map_type: String,
        num_threads: Integer,
        operations: Integer,
        read_fraction: Real) do
      let ops_per_thread: Integer := operations / num_threads
      let reads_per_thread: Integer :=
        (ops_per_thread.to_real() * read_fraction).to_integer()
      let writes_per_thread: Integer := ops_per_thread - reads_per_thread

      -- Pre-populate with some data
      let initial_keys: Array[Integer] := generate_keys(1000)

      let map: Any := nil
      if map_type = "coarse" then
        map := create Coarse_Locked_Map[Integer, Integer].empty()
      elseif map_type = "striped" then
        map := create Striped_Map[Integer, Integer].with_stripes(64)
      else
        map := create Node_Locked_Map[Integer, Integer].with_capacity(1024)
      end

      -- Populate initial data
      across initial_keys as k do
        call_put(map, map_type, k, k * 10)
      end

      let start: Integer64 := current_time_ns()

      -- Run concurrent operations
      let tasks: Array[Task] := []
      from
        let t: Integer := 0
      until
        t < num_threads
      do
        tasks.add(spawn do
          -- Mix of reads and writes
          let keys: Array[Integer] := generate_keys(ops_per_thread)

          from
            let i: Integer := 0
          until
            i < ops_per_thread
          do
            let key: Integer := keys.get(i)
            if i < reads_per_thread then
              call_get(map, map_type, key)
            else
              call_put(map, map_type, key, key * 10)
            end
            i := i + 1
          end
        end)
        t := t + 1
      end

      across tasks as task do task.await end

      let elapsed_ns: Integer64 := current_time_ns() - start
      let throughput: Real :=
        operations.to_real() / elapsed_ns.to_real() * 1000000000.0

      print(map_type.pad_right(10) +
            " | threads=" + num_threads.to_string().pad_left(2) +
            " | reads=" + (read_fraction * 100.0).to_integer().to_string() + "%" +
            " | " + throughput.to_integer().to_string() + " ops/sec")
    end

    generate_keys(n: Integer): Array[Integer] do
      let keys: Array[Integer] := []
      repeat n do
        keys.add(random_integer() % 10000)
      end
      result := keys
    end

    call_get(map: Object, map_type: String, key: Integer): ?Integer do
      if map_type = "coarse" then
        if convert map to m: Coarse_Locked_Map[Integer, Integer] then
          result := m.get(key)
        end
      elseif map_type = "striped" then
        if convert map to m: Striped_Map[Integer, Integer] then
          result := m.get(key)
        end
      else
        if convert map to m: Node_Locked_Map[Integer, Integer] then
          result := m.get(key)
        end
      end
    end

    call_put(map: Object, map_type: String, key: Integer, value: Integer) do
      if map_type = "coarse" then
        if convert map to m: Coarse_Locked_Map[Integer, Integer] then
          m.put(key, value)
        end
      elseif map_type = "striped" then
        if convert map to m: Striped_Map[Integer, Integer] then
          m.put(key, value)
        end
      else
        if convert map to m: Node_Locked_Map[Integer, Integer] then
          m.put(key, value)
        end
      end
    end
end
```

Expected results (approximate, 8-core machine, 10M operations):

```
-- 95% reads, 5% writes:
coarse     | threads= 8 | reads=95% | 12,000,000 ops/sec
striped    | threads= 8 | reads=95% | 75,000,000 ops/sec
node       | threads= 8 | reads=95% | 140,000,000 ops/sec

-- 50% reads, 50% writes:
coarse     | threads= 8 | reads=50% | 8,000,000 ops/sec
striped    | threads= 8 | reads=50% | 55,000,000 ops/sec
node       | threads= 8 | reads=50% | 90,000,000 ops/sec

-- 5% reads, 95% writes:
coarse     | threads= 8 | reads= 5% | 5,000,000 ops/sec
striped    | threads= 8 | reads= 5% | 40,000,000 ops/sec
node       | threads= 8 | reads= 5% | 60,000,000 ops/sec
```

The pattern: node locking dominates across all read/write ratios. Striped locking is a substantial improvement over coarse locking. Both node-locked and striped are worth the complexity compared to coarse, at these contention levels.

---

## 19.11 Choosing the Right Implementation

Three implementations, three deployment scenarios.

**Use coarse locking when:**
- Concurrency is low (fewer than 4 threads accessing the map)
- Correctness is paramount and testing resources are limited
- The map is accessed infrequently relative to other bottlenecks
- You need atomic composite operations (`compute`, `get_or_put`) and cannot afford the complexity of implementing them correctly in a concurrent structure

**Use stripe locking when:**
- Multiple threads contend on the map and profiling confirms it is a bottleneck
- The key space is well-distributed (no severe hotspots)
- You need bounded memory overhead (fixed number of stripes and locks)
- You need atomic composite operations per-key (`compute` within a stripe is atomic)

**Use node-level locking when:**
- Read throughput is critical (reads must be lock-free)
- Contention is high with many concurrent writers
- Memory overhead of per-node locks is acceptable
- You have the implementation expertise to validate the more complex code

For most production systems, the sequence is: start with coarse locking, measure, switch to stripe locking if needed, measure again, consider node locking only if stripe locking is still insufficient. Each step adds implementation complexity; each step should be justified by measurement.

---

## 19.12 Where This Lives in the Wild

**Java's `ConcurrentHashMap`** (JDK 8+) is the most widely used concurrent hash map in existence. Its evolution from `Hashtable` to segmented to node-locked directly mirrors this chapter. The JDK source (`java.util.concurrent.ConcurrentHashMap`) is approximately 6,000 lines of Java — a measure of how much engineering the full correct implementation requires.

**Redis** uses a global lock for its main data structures. Redis is single-threaded for command processing by design — the reasoning being that network I/O, not CPU, is the bottleneck for typical Redis workloads. Redis 6.0 added threaded I/O for reading/writing network data while keeping command processing single-threaded. For Redis's specific workload, this is the right tradeoff.

**Go's `sync.Map`** provides a concurrent map optimised for the case where keys are written once and read many times. It maintains two internal maps: a read-only `atomic.Value` snapshot for lock-free reads, and a mutex-protected dirty map for writes. Reads check the snapshot first; misses fall through to the dirty map under a lock. This is a specialised optimisation for the "write once, read many" pattern, not a general-purpose concurrent map.

**Rust's `DashMap`** crate provides a concurrent hash map using stripe locking (called "sharding" in its documentation). It uses `RwLock` per shard, defaulting to `num_cpus * 4` shards. DashMap is the most widely used concurrent map in the Rust ecosystem, reflecting the assessment that stripe locking is the practical sweet spot.

**Memcached** uses a global lock per slab (memory size class) for its hash table. The slab-level locking is coarser than stripe locking but works because Memcached's bottleneck is network I/O, not hash table access.

---

## Summary

Concurrent hash maps require balancing correctness, throughput, and implementation complexity. Three implementations represent distinct points in this tradeoff space.

Coarse locking wraps a plain hash map with a single mutex. It is correct, simple, and appropriate when concurrency is low. Every operation serialises — at most one thread operates at a time — which is the fundamental limitation.

Stripe locking divides the map into N independent shards, each with its own read-write lock. Operations on different keys usually fall in different stripes and proceed concurrently. With 64 stripes, write contention drops by ~64×. The size counter is approximate, computed by summing per-stripe counters without global locking. Composite atomic operations remain correct within a stripe.

Node-level locking takes the stripe-locking idea to its limit: one lock per bucket, making concurrent writes to different buckets contention-free. Reads are lock-free — they traverse bucket chains using volatile reads with no synchronisation. The size counter uses a distributed counter (one cell per CPU) to eliminate counter contention entirely. This is approximately the design of Java 8's `ConcurrentHashMap`.

The decision between implementations is a measurement question. Coarse locking is the right default. Stripe locking is the right upgrade when profiling confirms the map as a bottleneck. Node locking is the right choice for high-read workloads where lock-free reads provide measurable throughput improvements.

The next chapter asks a different question entirely: what if shared state did not need to be protected at all, because it was never modified? Immutability and persistent data structures take a fundamentally different approach to concurrency — one where threads share data freely because the data cannot change.
