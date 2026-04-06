# Chapter 17: The Broken Counter — Memory Models and Visibility

---

Here is a program. It is twelve lines of code. It is obviously correct. It is wrong.

```
-- Two threads, one shared counter, each increments it a million times
let counter: Integer := 0

let t1: Task := spawn do
  repeat 1000000 do
    counter := counter + 1
  end
end

let t2: Task := spawn do
  repeat 1000000 do
    counter := counter + 1
  end
end

t1.await
t2.await

print(counter)  -- Expected: 2000000. Actual: ???
```

Run this. The output is not 2,000,000. It might be 1,873,422. Or 1,654,901. Or 2,000,000 if you are lucky — and luck is the right word, because the result depends on the precise timing of events that you cannot predict or control.

The program is wrong not because of a logical error — the algorithm is correct. It is wrong because of a physical reality of modern hardware that almost every programmer learns about eventually, usually the hard way: reading and writing a shared variable from multiple threads is not atomic, and the hardware does not guarantee that threads see each other's writes in the order those writes occurred.

This chapter explains exactly why the program above is wrong, what the hardware is actually doing, and what guarantees you can and cannot rely on when writing concurrent code. The understanding built here is the foundation of everything in Part V — the lock-free queue in Chapter 18, the concurrent hash map in Chapter 19, the persistent structures in Chapter 20, and the channel-based model in Chapter 21.

---

## 17.1 What You Think Happens

When you write `counter := counter + 1`, you think of it as one operation: increment the counter. This is a reasonable mental model when you are the only thread. It is dangerously wrong when multiple threads share the counter.

At the hardware level, `counter := counter + 1` is three operations:

1. **Load:** read the current value of `counter` from memory into a CPU register
2. **Add:** add 1 to the value in the register
3. **Store:** write the result back to the memory location of `counter`

These three operations are not atomic — they can be interleaved arbitrarily with operations from other threads. Consider what happens when two threads both execute `counter := counter + 1` and the initial value of `counter` is 0:

**Interleaving 1 (correct):**
```
Thread 1: Load counter → 0
Thread 1: Add 1 → 1
Thread 1: Store 1 to counter
Thread 2: Load counter → 1
Thread 2: Add 1 → 2
Thread 2: Store 2 to counter
Result: counter = 2 ✓
```

**Interleaving 2 (incorrect):**
```
Thread 1: Load counter → 0
Thread 2: Load counter → 0   ← reads before Thread 1 writes
Thread 1: Add 1 → 1
Thread 2: Add 1 → 1
Thread 1: Store 1 to counter
Thread 2: Store 1 to counter ← overwrites Thread 1's result
Result: counter = 1 ✗
```

In Interleaving 2, both threads read the same value (0), both increment to 1, and both write 1. Two increments happened, but the counter only increased by one. This is called a **lost update** or a **race condition** — the result of a computation depends on the arbitrary interleaving of operations from multiple threads.

With one million increments per thread, there are up to two million opportunities for this interleaving to occur. The final value depends on how many times Thread 2 reads a stale value that Thread 1 has already updated. On fast hardware, lost updates are frequent; the result is often substantially less than 2,000,000.

---

## 17.2 What the Hardware Actually Does

The race condition above is the simple version of the problem. The full picture is considerably more disturbing.

Modern CPUs are extraordinarily complex. Between the source code you write and the electrons moving through silicon, there are multiple layers of transformation that can reorder, delay, or coalesce memory operations in ways that seem to violate basic intuitions about how programs work.

### Write Buffers

When a CPU core executes a store instruction, it does not write directly to main memory — that would be far too slow. Instead, it writes to a write buffer (also called a store buffer), a small queue of pending stores in the core itself. The write is later drained to the cache and eventually to main memory, but from the perspective of other cores, the write may not be visible for some time after the storing core has "done" the write.

The consequence: if Thread 1 stores a value to memory and Thread 2 then loads from the same address, Thread 2 might see the old value — not because the store did not happen, but because the store is still sitting in Thread 1's write buffer and has not propagated to Thread 2's cache.

### Cache Coherence

Modern CPUs have multiple levels of cache (L1, L2, L3), and each core has its own L1 and L2 caches. When Thread 1 writes to `counter`, the new value initially lives in Thread 1's cache. Thread 2 has its own cached copy of `counter` from a previous load. The two copies are now inconsistent.

Cache coherence protocols (such as MESI — Modified, Exclusive, Shared, Invalid) ensure that eventually the inconsistency is resolved: when Thread 2 tries to write `counter`, the coherence protocol detects that Thread 1 has a modified copy, forces Thread 1 to flush its copy to a shared cache level, and only then allows Thread 2 to proceed. But "eventually" is the operative word — the synchronisation is not instantaneous, and between Thread 1's write and Thread 2's coherence-enforced read, Thread 2 may see a stale value.

### Instruction Reordering

CPUs do not execute instructions in the order they appear in the program. Out-of-order execution (OOO) and speculative execution allow the CPU to execute instructions whose operands are ready while waiting for operands of earlier instructions. Store instructions in particular may be reordered with respect to other stores and loads if there are no data dependencies between them.

Compilers also reorder instructions. A compiler may determine that two stores to different memory locations are independent and swap their order, or eliminate a load by keeping a value in a register, or hoist a load out of a loop — all legal transformations in a single-threaded context that become incorrect in a concurrent context.

The result is that the order in which memory operations are actually visible to other cores may differ from the order in which they appear in your source code.

---

## 17.3 The Memory Model

The chaos described above is not arbitrary. Hardware manufacturers publish **memory models** — formal specifications of exactly what ordering guarantees the hardware provides and what reorderings are permitted. The memory model defines the rules of the game for concurrent programming.

Different architectures have different memory models.

**x86 Total Store Order (TSO):** x86 and x86-64 have a relatively strong memory model called Total Store Order. Under TSO, loads are not reordered with respect to other loads, and stores are not reordered with respect to other stores. However, stores may be reordered after loads from a different address. This means a store followed by a load to a different address can appear (to other cores) to have happened in the opposite order. TSO is stricter than most architectures — many concurrent programs that are technically incorrect work correctly on x86 simply because the hardware provides stronger guarantees than required.

**ARM Weak Memory Ordering:** ARM processors (including Apple's M-series and most mobile processors) have a much weaker memory model. Almost any reordering of loads and stores is permitted, as long as there are no data dependencies between them. Programs that work by accident on x86 (because TSO provides implicit ordering) may fail on ARM. This is a real source of bugs — code written and tested on x86 servers deployed to ARM devices or cloud instances.

**Java Memory Model:** the JVM specification defines a language-level memory model that applies regardless of the underlying hardware. The Java Memory Model (JMM) defines the happens-before relation — a partial order on memory operations that determines which writes are visible to which reads.

**The C++ Memory Model (C++11 and later):** C++ defines a memory model similar to Java's, with explicit atomic types and memory orderings that allow programmers to specify exactly how much ordering they require.

**Nex's Memory Model:** Nex follows the same happens-before model as Java and modern C++. Operations within a single thread are ordered by program order — each operation happens-before the next. Synchronisation primitives — mutex locks, atomic operations, channel sends and receives — establish happens-before relations between threads. Without synchronisation, there is no guarantee that writes from one thread are visible to another.

---

## 17.4 The Happens-Before Relation

The **happens-before** relation is the formal tool for reasoning about visibility in concurrent programs. It is a partial order — some pairs of operations are ordered (one happens-before the other), and some are not (they are concurrent).

**Definition:** operation A happens-before operation B if:
1. A and B are in the same thread, and A appears before B in program order, or
2. A is a synchronisation action (lock release, atomic store, channel send) and B is the corresponding synchronisation action (lock acquire, atomic load, channel receive), or
3. A happens-before some C, and C happens-before B (transitivity)

**The visibility guarantee:** if A happens-before B, then all memory writes performed by A (and by all operations that happen-before A) are visible to B.

**The absence of happens-before:** if there is no happens-before relation between A and B, they are concurrent. Reading a value written by a concurrent write is undefined behaviour (in C/C++) or yields an unspecified result (in Java/Nex). This is a data race.

The broken counter has a data race: the reads and writes to `counter` from different threads have no happens-before relation between them (no synchronisation). The result is unspecified.

Let us make this concrete. In the broken counter:

```
-- Thread 1 writes counter at time T1
-- Thread 2 reads counter at time T2
-- No synchronisation between them
-- Therefore: no happens-before relation
-- Therefore: Thread 2's read may return any value
```

To fix the program, we must establish happens-before. There are several ways, each with different performance implications.

---

## 17.5 Demonstrating the Broken Counter

Before fixing anything, let us make the problem visible and measurable.

```
class Broken_Counter_Demo
  create
    make() do end

  feature
    -- Run the broken counter experiment N times
    -- Shows that results are non-deterministic and incorrect
    run_experiment(iterations: Integer,
                   increments_per_thread: Integer) do
      print("Running broken counter experiment...")
      print("Threads: 2, Increments per thread: " +
            increments_per_thread.to_string())
      print("Expected result: " +
            (2 * increments_per_thread).to_string())
      print("")

      let results: Array[Integer] := []
      let min_result: Integer := 2147483647
      let max_result: Integer := 0
      let correct_count: Integer := 0

      from
        let i: Integer := 0
      until
        i < iterations
      do
        let result: Integer := run_once(increments_per_thread)
        results.add(result)

        if result < min_result then min_result := result end
        if result > max_result then max_result := result end
        if result = 2 * increments_per_thread then
          correct_count := correct_count + 1
        end

        i := i + 1
      end

      print("Results over " + iterations.to_string() + " runs:")
      print("  Minimum: " + min_result.to_string())
      print("  Maximum: " + max_result.to_string())
      print("  Correct: " + correct_count.to_string() + "/" +
            iterations.to_string())
      print("  Sample results: " + results.slice(0, 5).to_string())
    end

    run_once(increments: Integer): Integer do
      -- Shared mutable state: deliberately broken
      let counter: Array[Integer] := [0]  -- wrap in array for mutability

      let t1: Task := spawn do
        repeat increments do
          counter.set(0, counter.get(0) + 1)
        end
      end

      let t2: Task := spawn do
        repeat increments do
          counter.set(0, counter.get(0) + 1)
        end
      end

      t1.await
      t2.await

      result := counter.get(0)
    end

    -- Demonstrate that the race depends on timing
    -- Sleeping between operations makes the race more likely
    run_slow_race() do
      let counter: Array[Integer] := [0]
      let target: Integer := 10

      print("Slow race demonstration (target = " + target.to_string() + "):")

      let tasks: Array[Task] := []
      from
        let t: Integer := 0
      until
        t < 5
      do
        tasks.add(spawn do
          repeat 2 do
            let current: Integer := counter.get(0)
            -- Simulated delay: in real hardware, this is cache miss latency
            -- or write buffer drain time, not an actual sleep
            counter.set(0, current + 1)
          end
        end)
        t := t + 1
      end

      across tasks as task do
        task.await
      end

      print("Final value: " + counter.get(0).to_string() +
            " (should be " + target.to_string() + ")")
    end
end
```

Running `run_experiment(10, 1000000)` will typically show:
- Minimum: ~1,400,000 (significant loss from races)
- Maximum: 2,000,000 (rare lucky runs)
- Correct: 1 or 2 out of 10 (approximately — depends heavily on hardware and OS scheduling)

The variance itself is informative. The program is not wrong in a consistent way — it is wrong in a way that depends on factors outside the program's control. This is the defining characteristic of a race condition: non-deterministic, timing-dependent incorrectness.

---

## 17.6 Atomics: The First Fix

The simplest fix: make the increment operation atomic — indivisible. An atomic increment reads, adds, and writes in a single operation that cannot be interleaved with any other thread's access to the same variable.

Modern CPUs provide atomic instructions specifically for this purpose. On x86, the `LOCK XADD` instruction performs an atomic fetch-and-add. On ARM, `LDADD` (load-add) or a `LDXR`/`STXR` (load-exclusive/store-exclusive) loop performs an atomic read-modify-write.

The key properties of atomic operations:
1. **Atomicity:** the entire read-modify-write happens as one indivisible unit
2. **Visibility:** writes from atomic operations are immediately visible to all cores (no write buffer delay)
3. **Ordering:** atomic operations establish happens-before relations with other atomic operations on the same variable

```
class Atomic_Integer
  create
    make(initial: Integer) do
      this.value := initial
    end

  feature
    value: Integer  -- in real implementation, this is a hardware atomic type

    -- Atomically load the current value
    load(): Integer do
      -- In real implementation: memory fence + load
      result := value
    end

    -- Atomically store a new value
    store(new_value: Integer) do
      -- In real implementation: store + memory fence
      value := new_value
    end

    -- Atomically add delta to value, return old value
    fetch_and_add(delta: Integer): Integer do
      -- In real implementation: hardware atomic fetch-and-add
      -- On x86: LOCK XADD
      -- On ARM: LDADD or LDXR/STXR loop
      let previous_value: Integer := value
      value := value + delta
      result := previous_value
    end

    -- Atomically increment, return new value
    increment(): Integer do
      result := fetch_and_add(1) + 1
    end

    -- Atomically decrement, return new value
    decrement(): Integer do
      result := fetch_and_add(-1) - 1
    end

    -- Compare-and-swap: if current value = expected, set to desired
    -- Returns true if swap occurred, false otherwise
    compare_and_swap(expected: Integer,
                     desired: Integer): Boolean do
      -- In real implementation: hardware CAS instruction
      -- On x86: LOCK CMPXCHG
      -- On ARM: LDXR/STXR loop with comparison
      if value = expected then
        value := desired
        result := true
      else
        result := false
      end
    end

  invariant
    atomic_value_consistent: true
end
```

The fixed counter:

```
class Fixed_Counter_Demo
  create
    make() do end

  feature
    run_experiment(iterations: Integer,
                   increments_per_thread: Integer) do
      print("Running fixed counter experiment (atomic)...")
      let correct_count: Integer := 0

      from
        let i: Integer := 0
      until
        i < iterations
      do
        let result: Integer := run_once(increments_per_thread)
        if result = 2 * increments_per_thread then
          correct_count := correct_count + 1
        end
        i := i + 1
      end

      print("Correct: " + correct_count.to_string() + "/" +
            iterations.to_string())
      -- Should be iterations/iterations = 100%
    end

    run_once(increments: Integer): Integer do
      let counter: Atomic_Integer := create Atomic_Integer.make(0)

      let t1: Task := spawn do
        repeat increments do
          counter.increment()
        end
      end

      let t2: Task := spawn do
        repeat increments do
          counter.increment()
        end
      end

      t1.await
      t2.await

      result := counter.load()
    end
end
```

This always gives the correct answer — 2,000,000 — because `fetch_and_add` is atomic. No interleaving can produce a lost update.

### The Cost of Atomics

Atomic operations are not free. On x86, `LOCK XADD` is about 5-20 nanoseconds — much slower than a non-atomic increment (about 0.3 nanoseconds). The cost comes from:

1. **Cache line invalidation:** the atomic operation requires exclusive ownership of the cache line containing the variable. Other cores must invalidate their copies, causing coherence traffic on the interconnect.

2. **Write buffer drain:** the atomic operation must ensure all previous stores are visible before proceeding, bypassing the write buffer's normal batching.

3. **Serialisation:** on a single cache line, atomic operations are serialised — only one can proceed at a time. If 16 cores all contend for the same atomic variable, they queue up rather than proceeding in parallel.

The practical consequence: if the bottleneck in a concurrent program is a single shared atomic counter, you have effectively serialised all threads at that point. Two threads incrementing an atomic counter with nothing else happening will be only marginally faster than one thread — the serialisation at the atomic operation limits parallelism.

For a reference counter or a simple shared state, this is fine. For a hot counter updated by thousands of threads per second, it becomes the bottleneck. The solution (distributed counters, per-thread counters summed periodically) is an architectural decision, not an algorithmic one.

---

## 17.7 Compare-and-Swap: The Universal Primitive

The `compare_and_swap` (CAS) operation deserves special attention. It is the single most important primitive in concurrent programming — virtually every lock-free data structure is built on top of it.

CAS takes three arguments: a memory address, an expected value, and a desired value. If the current value at the address equals the expected value, it atomically replaces it with the desired value and returns true. Otherwise it returns false without modifying memory. The entire check-and-update happens atomically.

```text
-- CAS pseudocode (what the hardware does atomically):
function compare_and_swap(addr, expected, desired):
  if *addr == expected:
    *addr = desired
    return true
  return false
```

CAS enables lock-free updates on arbitrary value types. The general pattern: read the current value, compute the new value, CAS from old to new. If the CAS fails (someone else changed it), retry.

```
function atomic_add_with_cas(counter: Atomic_Integer,
                              delta: Integer) do
  from until true do
    let current_value: Integer := counter.load()
    let new_val: Integer := current_value + delta
    if counter.compare_and_swap(current_value, new_val) then
      return  -- success
    end
    -- CAS failed: someone else modified counter, retry
  end
end
```

This is correct. If Thread 2 changes `counter` between Thread 1's load and CAS, Thread 1's CAS fails, Thread 1 re-reads the current value, and tries again. Eventually Thread 1 gets a window where the value does not change between its load and CAS, and the update succeeds.

This is the **optimistic concurrency** pattern: assume no contention, try the update, retry if contention occurred. Under low contention, it is very fast (usually succeeds on the first try). Under high contention, retries increase, and in the worst case (many threads hammering the same variable), it can spin indefinitely — though in practice, at least one thread makes progress on every step, so the overall system makes progress.

### The ABA Problem

CAS has a subtle bug potential called the ABA problem. Consider:

1. Thread 1 reads counter = A
2. Thread 2 changes counter: A → B → A (back to A)
3. Thread 1's CAS sees counter = A (expected value), succeeds

Thread 1's CAS succeeded even though the value changed and changed back. For a simple counter, this is harmless — if the value is A before and after, incrementing from A is correct regardless of intermediate changes. But for pointer-based structures, this is dangerous: the same address might contain a completely different object, and CAS on the pointer would succeed despite the object having changed.

The standard solution: a version counter (also called a stamp or tag). Instead of comparing just the value, compare (value, version) pairs. Each CAS that succeeds increments the version. ABA requires the version to cycle through its entire range — impractical with a 64-bit version counter.

```
class Stamped_Reference [T]
  create
    make(value: T) do
      this.value := value
      this.stamp := 0
    end

  feature
    value: T
    stamp: Integer

    -- Atomic CAS on (value, stamp) pair
    compare_and_swap(expected_value: T,
                     expected_stamp: Integer,
                     new_value: T): Boolean do
      if value = expected_value and stamp = expected_stamp then
        value := new_value
        stamp := stamp + 1
        result := true
      else
        result := false
      end
    end

    get(): Array do
      result := [value, stamp]
    end
end
```

---

## 17.8 Memory Orderings

Not all atomic operations require full sequential consistency. Requiring that every atomic operation sees and establishes a total order of all memory operations is expensive — it requires flushing caches and write buffers. For many algorithms, weaker guarantees suffice.

Modern memory models (C++11, Java, Nex) define a spectrum of memory orderings for atomic operations:

**Relaxed:** the operation is atomic (no torn reads or writes), but provides no ordering guarantees relative to other memory operations. Other threads may see this operation happen in any order relative to the surrounding non-atomic operations. Useful for counters where the exact order does not matter — only the final value.

**Acquire:** a load with acquire semantics. All memory operations that appear after this load in program order (in the same thread) cannot be moved before this load by the hardware or compiler. Other threads' stores that happen-before the corresponding release are visible after the acquire.

**Release:** a store with release semantics. All memory operations that appear before this store in program order cannot be moved after this store. Creates a happens-before edge from this release to any thread's subsequent acquire on the same variable.

**Sequentially consistent (SeqCst):** the strongest ordering. All sequentially consistent operations form a total order seen by all threads. The most intuitive but most expensive.

The acquire-release pair is the standard building block for synchronisation:

```
-- Producer thread:
data.prepare()           -- set up data
flag.store(true) -- release: everything above is visible to acquirer

-- Consumer thread:
from until flag.load() do end  -- acquire: waits for release
data.use()               -- safe: acquire guarantees producer's writes visible
```

The release on the producer's store and the acquire on the consumer's load establish a happens-before edge. After the consumer's acquire load returns true, all writes before the producer's release store are guaranteed visible to the consumer.

```
class Memory_Ordering_Demo
  create
    make() do end

  feature
    -- Flag-based signalling with acquire-release
    demonstrate_flag_protocol() do
      let data: Array[Integer] := [0]
      let ready: Atomic_Integer := create Atomic_Integer.make(0)

      let producer: Task := spawn do
        -- Prepare data
        data.set(0, 42)
        -- Release: all writes above this are visible to the acquirer
        ready.store(1)  -- release semantics
      end

      let consumer: Task := spawn do
        -- Acquire: spin until ready, then read data
        from until ready.load() = 1 do end  -- acquire semantics
        -- Guaranteed: data.get(0) = 42
        print("Data: " + data.get(0).to_string())  -- always prints 42
      end

      producer.await
      consumer.await
    end

    -- Demonstrate why relaxed is insufficient for signalling
    -- (this is broken: data write may not be visible after flag read)
    demonstrate_broken_flag() do
      let data: Array[Integer] := [0]
      let ready: Atomic_Integer := create Atomic_Integer.make(0)

      let producer: Task := spawn do
        data.set(0, 42)
        ready.store(1)  -- relaxed: no ordering guarantee
      end

      let consumer: Task := spawn do
        from until ready.load() = 1 do end  -- relaxed load
        -- BUG: data.get(0) might still be 0 even though flag is 1
        -- The write to data and the write to ready might be reordered
        print("Data: " + data.get(0).to_string())  -- might print 0
      end

      producer.await
      consumer.await
    end
end
```

---

## 17.9 Mutexes: When Atomics Are Not Enough

Atomic operations handle simple cases: update one variable atomically. When you need to atomically update multiple variables, or perform a complex read-modify-write sequence on a data structure, you need mutual exclusion — a mutex.

A mutex (mutual exclusion lock) ensures that only one thread executes a critical section at a time. Every other thread attempting to acquire the mutex blocks until the current holder releases it.

```
class Mutex
  create
    make() do
      this.locked := create Atomic_Integer.make(0)
      this.owner := -1  -- thread ID of lock holder, -1 if unlocked
    end

  feature
    locked: Atomic_Integer
    owner: Integer

    -- Acquire the mutex, blocking if necessary
    lock() do
      -- Spin-wait until we successfully CAS locked from 0 to 1
      from until locked.compare_and_swap(0, 1) do
        -- Spin: in real implementation, yield to OS scheduler
        -- after some spin count to avoid burning CPU
        hint_spin()
      end
      -- Memory fence: everything after this sees all writes before unlock()
    end

    -- Release the mutex
    unlock()
      require
        is_locked: locked.load() = 1
      do
        -- Memory fence: all writes before unlock() visible to next lock()
        locked.store(0)  -- release semantics
      end

    -- Try to acquire without blocking
    -- Returns true if acquired, false if already locked
    try_lock(): Boolean do
      result := locked.compare_and_swap(0, 1)
    end

    -- Execute a function under the mutex
    with_lock(action: Function[Void]) do
      lock()
      action()
      unlock()
    end

    hint_spin() do
      -- On x86: PAUSE instruction reduces power and improves spin-wait
      -- On ARM: YIELD instruction
      -- In Nex: handled by runtime
    end

  invariant
    locked_is_binary: locked.load() = 0 or locked.load() = 1
end
```

The mutex implementation above is a **spinlock** — it busy-waits (spins) until the lock is available. Spinlocks are appropriate when the critical section is very short and contention is low. For longer critical sections or high contention, a **blocking mutex** (one that yields to the OS scheduler rather than spinning) is more efficient, avoiding wasted CPU cycles during the wait.

### Using a Mutex for the Counter

```
class Mutex_Counter
  create
    make() do
      this.value := 0
      this.mu := create Mutex.make()
    end

  feature
    value: Integer
    mu: Mutex

    increment() do
      mu.lock()
      value := value + 1
      mu.unlock()
    end

    decrement() do
      mu.lock()
      value := value - 1
      mu.unlock()
    end

    get(): Integer do
      mu.lock()
      let v: Integer := value
      mu.unlock()
      result := v
    end

  invariant
    non_negative_if_always_incremented: true  -- depends on usage
end
```

This is correct. The mutex ensures that only one thread executes the increment at a time, eliminating the race condition. The mutex's lock and unlock operations establish happens-before: the unlock in Thread 1 happens-before the lock in Thread 2, which means all of Thread 1's writes before unlock are visible to Thread 2 after its lock.

### Mutex vs Atomic: When to Use Which

**Use atomics when:**
- You are updating a single variable
- The update is a simple operation (increment, decrement, fetch-and-store, CAS)
- Performance is critical and lock overhead is unacceptable
- You are building a lock-free data structure

**Use a mutex when:**
- You need to update multiple variables atomically
- The update is a complex read-modify-write sequence
- You need to protect access to a data structure (hash map, list, etc.)
- Correctness is more important than maximum performance
- The critical section is long enough that lock overhead is negligible

The mutex counter is simpler and correct. The atomic counter is faster but only works for the single-variable case. The choice is not always obvious — for a counter accessed by thousands of threads per second, atomic may be significantly faster despite its serialisation cost. For a counter that guards a complex data structure, mutex is the right choice.

---

## 17.10 Deadlock: The Other Problem

Mutexes solve race conditions but introduce a new failure mode: deadlock. A deadlock occurs when two or more threads are each waiting for a lock held by another, creating a cycle of dependency that no thread can break.

```
-- Thread 1:           -- Thread 2:
mu_a.lock()            mu_b.lock()
-- ... doing work ...  -- ... doing work ...
mu_b.lock()  ← WAITS  mu_a.lock()  ← WAITS
-- waiting for mu_b    -- waiting for mu_a
-- which Thread 2 holds -- which Thread 1 holds
-- DEADLOCK
```

Both threads wait forever. The program hangs.

Deadlock requires four conditions (Coffman conditions) to hold simultaneously:
1. **Mutual exclusion:** resources are exclusive (only one holder at a time)
2. **Hold and wait:** a thread holds a resource while waiting for another
3. **No preemption:** resources cannot be forcibly taken
4. **Circular wait:** a cycle of threads each waiting for the next

Breaking any one condition prevents deadlock.

**Lock ordering** breaks circular wait: always acquire locks in a consistent global order. If all threads acquire mu_a before mu_b, the cycle is impossible.

```
-- Safe: always acquire in alphabetical order
function transfer(from_account: Account,
                  to_account: Account,
                  amount: Integer) do
  -- Determine lock order by some canonical ordering (e.g., ID)
  let first: Account :=
    when from_account.id < to_account.id from_account else to_account end
  let second: Account :=
    when from_account.id < to_account.id to_account else from_account end

  first.mu.lock()
  second.mu.lock()

  from_account.balance := from_account.balance - amount
  to_account.balance := to_account.balance + amount

  second.mu.unlock()
  first.mu.unlock()
end
```

**Try-lock with backoff** breaks hold-and-wait: if you cannot acquire the second lock, release the first and retry.

```
function acquire_both(mu_a: Mutex, mu_b: Mutex) do
  from until true do
    mu_a.lock()
    if mu_b.try_lock() then
      return  -- got both
    end
    mu_a.unlock()  -- release first, then retry
    -- Optional: small random sleep to reduce contention
  end
end
```

**Single lock** eliminates circular wait entirely: one mutex for the entire system. Correct but limits concurrency. For many applications, a single global lock is the right starting point — it is simple, correct, and can be refined later if performance requires it.

---

## 17.11 The Corrected Counter, Fully Specified

Bringing everything together: a correct, complete shared counter with multiple implementation strategies:

```
class Thread_Safe_Counter
  create
    -- Strategy 1: Atomic (fastest for single-variable)
    atomic(initial: Integer) do
      this.strategy := "atomic"
      this.atomic_value := create Atomic_Integer.make(initial)
      this.mutex_value := 0
      this.mu := nil
    end

    -- Strategy 2: Mutex-protected (correct for complex operations)
    mutex_protected(initial: Integer) do
      this.strategy := "mutex"
      this.atomic_value := create Atomic_Integer.make(0)
      this.mutex_value := initial
      this.mu := create Mutex.make()
    end

  feature
    strategy: String
    atomic_value: Atomic_Integer
    mutex_value: Integer
    mu: ?Mutex

    increment(): Integer do
      if strategy = "atomic" then
        result := atomic_value.increment()
      else
        mu.lock()
        mutex_value := mutex_value + 1
        let v: Integer := mutex_value
        mu.unlock()
        result := v
      end
    end

    decrement(): Integer do
      if strategy = "atomic" then
        result := atomic_value.decrement()
      else
        mu.lock()
        mutex_value := mutex_value - 1
        let v: Integer := mutex_value
        mu.unlock()
        result := v
      end
    end

    get(): Integer do
      if strategy = "atomic" then
        result := atomic_value.load()
      else
        mu.lock()
        let v: Integer := mutex_value
        mu.unlock()
        result := v
      end
    end

    reset(): Integer do
      if strategy = "atomic" then
        let prior_value: Integer := atomic_value.load()
        atomic_value.store(0)
        result := prior_value
      else
        mu.lock()
        let prior_value: Integer := mutex_value
        mutex_value := 0
        mu.unlock()
        result := prior_value
      end
    end

    -- Compare-and-swap for conditional updates
    compare_and_set(expected: Integer, desired: Integer): Boolean do
      if strategy = "atomic" then
        result := atomic_value.compare_and_swap(expected, desired)
      else
        mu.lock()
        if mutex_value = expected then
          mutex_value := desired
          mu.unlock()
          result := true
        else
          mu.unlock()
          result := false
        end
      end
    end

  invariant
    valid_strategy: strategy = "atomic" or strategy = "mutex"
    mutex_strategy_has_mutex: strategy /= "mutex" or mu /= nil
end
```

Verifying correctness:

```
function verify_counter(strategy: String,
                         threads: Integer,
                         increments: Integer) do
  let counter: Thread_Safe_Counter :=
    when strategy = "atomic"
      create Thread_Safe_Counter.atomic(0)
    else
      create Thread_Safe_Counter.mutex_protected(0)
    end

  let tasks: Array[Task] := []
  from
    let t: Integer := 0
  until
    t < threads
  do
    tasks.add(spawn do
      repeat increments do
        counter.increment()
      end
    end)
    t := t + 1
  end

  across tasks as task do
    task.await
  end

  let expected: Integer := threads * increments
  let actual: Integer := counter.get()

  print(strategy + " counter: " + actual.to_string() +
        " (expected " + expected.to_string() + "): " +
        when actual = expected "CORRECT" else "WRONG" end)
end

verify_counter("atomic", 8, 1000000)
verify_counter("mutex",  8, 1000000)
-- Both should print CORRECT
```

---

## 17.12 What This Chapter Establishes

The broken counter is the simplest possible demonstration of a fundamental truth: shared mutable state requires explicit synchronisation. Without synchronisation, the result is undefined — not just occasionally wrong, but unknowably wrong, in ways that depend on hardware, OS scheduling, compiler version, and phase of the moon.

Understanding the broken counter at the level of hardware operations — load, add, store; write buffers; cache coherence; instruction reordering — is what separates programmers who can debug concurrency bugs from those who cannot. The bug is not in the logic. The logic is correct. The bug is in the assumption that the hardware executes operations in the order and at the time you imagine.

Two primitives fix the problem. **Atomic operations** make individual variable updates indivisible, using hardware instructions designed for exactly this purpose. They are fast and appropriate for simple shared values. **Mutexes** provide mutual exclusion for critical sections involving multiple variables or complex operations. They are correct and general, at the cost of serialisation.

The happens-before relation is the formal tool for reasoning about what is guaranteed to be visible. If A happens-before B, all of A's writes are visible at B. Without happens-before — without synchronisation — writes from other threads may or may not be visible. Data races are the enemy: they produce programs whose behavior is not merely incorrect but unspecified.

The next three chapters build practical concurrent data structures using these primitives. Chapter 18 builds a lock-free queue using compare-and-swap. Chapter 19 builds a concurrent hash map using stripe locking and beyond. Chapter 20 shows how immutability sidesteps synchronisation entirely. Each chapter uses the vocabulary established here — atomics, happens-before, CAS, mutex — as the building blocks for structures that correctly handle concurrent access.

The broken counter is fixed. Now we build things with the fix.
