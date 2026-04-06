# Chapter 18: The Lock-Free Queue — CAS in Practice

---

In 2004, a team at a major financial exchange noticed something strange. Their order matching engine — the system that pairs buy orders with sell orders — was fast. Extremely fast. But at peak load, when thousands of orders arrived per second, latency spiked. Not continuously, but in brief, unpredictable bursts. An order that normally processed in 50 microseconds would occasionally take 5 milliseconds. The engineers investigated. The culprit was a mutex.

The matching engine used a shared queue to pass orders from the network layer to the matching core. Multiple threads deposited orders into the queue; the matching thread consumed them. The queue was protected by a mutex. Under normal load, the mutex was uncontested and added negligible overhead. At peak load, multiple threads competed for the mutex simultaneously. One thread acquired it; the others blocked. The OS scheduler, noticing blocked threads, made scheduling decisions. Context switches occurred. Threads were preempted mid-critical-section. The latency spike was the sum of mutex contention, OS scheduling overhead, and cache thrashing from the context switches.

The fix was a lock-free queue — a queue that multiple threads could enqueue to and dequeue from simultaneously, without any mutex, without any blocking, without giving the OS scheduler an opportunity to intervene. The implementation was more complex. The performance was transformatively better.

Lock-free data structures use compare-and-swap directly, without mutexes, to achieve thread safety. They are harder to implement correctly than mutex-based structures, but they avoid the pathological latency spikes that mutexes introduce under contention. This chapter builds a lock-free MPSC (multiple-producer, single-consumer) queue — exactly the structure the matching engine needed.

---

## 18.1 What Lock-Free Means, Precisely

The term "lock-free" is often used loosely to mean "fast concurrent" or "no mutexes." Neither is the precise meaning.

A data structure is **lock-free** if, at any point in time, at least one thread is making progress. This is a guarantee about system-wide progress, not individual thread progress. A lock-free structure can still make individual threads spin or retry — it just cannot cause all threads to block indefinitely.

Compare this to **mutex-based** structures: if the thread holding the mutex is descheduled, all other threads block. No thread makes progress until the OS reschedules the mutex holder. The OS scheduler can introduce arbitrary delays. Lock-free structures do not have this property — even if one thread is preempted mid-operation, other threads continue making progress.

A stronger guarantee is **wait-free**: every thread makes progress in a bounded number of steps, regardless of other threads. Wait-free structures are rare and complex to implement. For most applications, lock-free is sufficient and much easier to build.

The lock-free guarantee does not mean fast. A badly implemented lock-free structure can be slower than a well-implemented mutex-based one. Lock-free avoids the specific pathology of blocking under contention — it does not magically eliminate contention's cost.

---

## 18.2 The MPSC Queue: Multiple Producers, Single Consumer

Our target is a queue with multiple threads enqueueing (producers) and one thread dequeueing (consumer). This asymmetry — single consumer — simplifies the implementation considerably. The consumer never competes with another consumer, so we only need lock-free enqueue, not lock-free dequeue.

Why MPSC specifically? It maps directly to many real patterns:
- Network listeners (multiple) feeding a processing thread (single)
- Worker threads (multiple) reporting results to a coordinator (single)
- Event sources (multiple) feeding an event loop (single)

The algorithm we implement is based on the intrusive linked list queue by Dmitry Vyukov, one of the most influential concurrency researchers of the past two decades. It uses a linked list of nodes where the tail pointer is updated with CAS.

### The Node Structure

```
class Queue_Node [T]
  create
    make(value: T) do
      this.value := value
      this.next := nil  -- in real impl: Atomic_Reference
    end

    sentinel() do
      -- Dummy node: head always points to a sentinel
      -- to avoid null checks in the common path
      this.next := nil
    end

  feature
    value: ?T                        -- nil for sentinel node
    next: ?Queue_Node[T]             -- atomic pointer to next node

    next_node(): ?Queue_Node[T] do
      result := next
    end

    item(): ?T do
      result := value
    end

    compare_and_set_next(expected: ?Queue_Node[T],
                         desired: ?Queue_Node[T]): Boolean do
      if next = expected then
        next := desired
        result := true
      else
        result := false
      end
    end

    clear_value() do
      value := nil
    end

  invariant
    next_pointer_consistent: true
end
```

### The Lock-Free MPSC Queue

The queue maintains two pointers:
- **Head:** points to the sentinel node (the node before the first real element). Only the consumer modifies head. Single consumer means no contention on head.
- **Tail:** points to the last node. Multiple producers compete to update tail using CAS.

```
class MPSC_Queue [T]
  create
    empty() do
      let sentinel: Queue_Node[T] := create Queue_Node[T].sentinel()
      this.head := sentinel   -- in real impl: plain pointer (single consumer)
      this.tail := sentinel   -- in real impl: atomic pointer (multiple producers)
      this.size := create Atomic_Integer.make(0)
    end

  feature
    head: Queue_Node[T]          -- only consumer modifies
    tail: Queue_Node[T]          -- atomic: producers compete here
    size: Atomic_Integer

    -- Enqueue: called by any producer thread
    -- Lock-free: uses CAS on tail
    enqueue(value: T)
      do
        let node: Queue_Node[T] := create Queue_Node[T].make(value)
        let linked: Boolean := false

        -- Atomically swing tail to new node
        -- This is the key CAS operation
        from until linked do
          let current_tail: Queue_Node[T] := tail

          -- Try to link new node after current tail
          if atomic_cas_next(current_tail, nil, node) then
            -- Successfully linked: now update tail pointer
            -- Note: another thread might update tail before us (that's ok)
            atomic_cas_tail(current_tail, node)
            size.increment()
            linked := true
          end

          -- CAS failed: another producer linked a node after current_tail
          -- Help advance tail and retry
          let next_node: ?Queue_Node[T] := current_tail.next_node()
          if convert next_node to linked_next: Queue_Node[T] then
            atomic_cas_tail(current_tail, linked_next)
          end
        end
      ensure
        size_increased: size.load() > old size.load()
    end

    -- Dequeue: called only by the single consumer thread
    -- Not lock-free between consumers (single consumer assumed)
    dequeue(): ?T do
      let h: Queue_Node[T] := head
      let next_node: ?Queue_Node[T] := h.next_node()

      if next_node = nil then
        result := nil  -- queue is empty
      else
        -- Advance head: next becomes the new sentinel
        -- The value we are returning is in next
        if convert next_node to next_value: Queue_Node[T] then
          head := next_value
          if convert next_value.item() to value: T then
            next_value.clear_value()  -- help GC
            size.decrement()
            result := value
          else
            result := nil
          end
        else
          result := nil
        end
      end
    end

    -- Peek at front without removing
    peek(): ?T do
      let next_node: ?Queue_Node[T] := head.next_node()
      if next_node = nil then
        result := nil
      else
        result := next_node.item()
      end
    end

    is_empty(): Boolean do
      result := head.next_node() = nil
    end

    length(): Integer do
      result := size.load()
    end

    -- These simulate atomic operations in real implementation
    -- In production Nex these would be hardware CAS instructions

    atomic_cas_next(node: Queue_Node[T],
                    expected: ?Queue_Node[T],
                    desired: ?Queue_Node[T]): Boolean do
      -- Atomically: if node.next == expected, set node.next = desired
      result := node.compare_and_set_next(expected, desired)
    end

    atomic_cas_tail(expected: Queue_Node[T],
                    desired: Queue_Node[T]) do
      -- Best-effort tail update: if tail still points to expected,
      -- advance it to desired
      if tail = expected then
        tail := desired
      end
    end

  invariant
    head_exists: head /= nil
    tail_exists: tail /= nil
    non_negative_size: size.load() >= 0
end
```

### Tracing the Enqueue

Let us trace a concurrent enqueue to understand why this is correct.

Initial state: head → sentinel ← tail. The sentinel has next = nil.

**Producer 1 enqueues value A:**
1. Creates node A
2. Reads current_tail = sentinel
3. CAS: sentinel.next: nil → A. Succeeds.
4. CAS: tail: sentinel → A. Updates tail.
5. size.increment(). Done.

State: head → sentinel → A ← tail.

**Producers 2 and 3 enqueue B and C simultaneously:**

Both read current_tail = A (the current tail).

Producer 2 tries CAS: A.next: nil → B. Suppose this succeeds.
Producer 3 tries CAS: A.next: nil → C. This fails — A.next is now B.

Producer 2: CAS tail: A → B. Updates tail.
Producer 3: CAS failed. Re-reads current_tail = A. Sees A.next = B (not nil). Helps advance tail: CAS tail: A → B (tail already B, no-op). Retries.

Producer 3 re-reads current_tail = B.
Producer 3 tries CAS: B.next: nil → C. Succeeds.
Producer 3: CAS tail: B → C. Updates tail.

State: head → sentinel → A → B → C ← tail.

The important invariant: after the CAS on a node's next pointer succeeds, that node is linked into the queue. The tail update is a best-effort optimisation — it is fine if tail lags behind the actual last node (some other thread will advance it).

### The Two-Step Enqueue

Why two steps — link the node, then update tail? Why not one atomic operation?

Because CAS can only atomically modify one memory location. Linking a node (updating the previous tail's next pointer) and updating the tail pointer are two separate memory modifications. They cannot be done atomically together with a single CAS.

The solution: do them separately, and design the algorithm so that a partial update (node linked, tail not yet updated) leaves the queue in a consistent state that other threads can detect and handle. The "help advance tail" code in the enqueue loop does this: if a thread sees that tail.next is not nil, it knows another thread linked a node but did not update tail yet, and it helpfully advances tail before retrying.

This cooperative advancing is characteristic of many lock-free algorithms: threads help each other complete operations rather than waiting for the original thread to finish.

---

## 18.3 The ABA Problem Revisited

Chapter 17 introduced the ABA problem abstractly. In a queue implementation, it is concrete and dangerous.

Consider the dequeue operation in a multi-consumer version (not our MPSC queue, but the general MPMC case):

1. Thread 1 reads head = H, reads H.next = A.
2. Thread 1 is preempted.
3. Thread 2 dequeues A (advancing head to A, returning its value).
4. Thread 3 dequeues the next element.
5. Thread 2 enqueues a new node that gets allocated at the same memory address as the original sentinel node.
6. Thread 1 resumes. Tries CAS: head: H → A.

But H has been recycled — the memory address of H now contains a completely different node. Thread 1's CAS succeeds (memory address matches), but the operation is now wrong — Thread 1 has advanced head over a node that was never the one it intended to skip.

In our MPSC queue, the consumer is single-threaded, so this cannot happen on the dequeue side. The consumer never races with another consumer. This is exactly why the MPSC restriction simplifies the implementation: we only need to handle concurrent producers, not concurrent consumers.

For a full MPMC (multiple producer, multiple consumer) queue, the ABA problem must be addressed. Solutions:

1. **Hazard pointers:** before accessing a node, register a hazard pointer to it. A thread cannot free a node that any other thread has a hazard pointer to. Eliminates ABA but adds complexity.

2. **Epoch-based reclamation:** threads coordinate epoch numbers; nodes are reclaimed only when no thread is in an old epoch. Efficient but complex.

3. **Tagged pointers:** combine the pointer with a version counter in a single 64-bit word (on 64-bit systems, pointer addresses only use 48 bits, leaving 16 bits for a tag). CAS operates on the combined word; the tag defeats ABA.

4. **Michael-Scott queue:** the classic MPMC lock-free queue (Michael and Scott, 1996) uses a different node reuse strategy and careful algorithm design to avoid ABA without hardware tagging, though it requires that dequeued nodes are not immediately reused.

---

## 18.4 A Complete MPSC Queue with Backpressure

A bare queue without backpressure will grow without bound if producers outpace the consumer. A bounded queue — with a maximum capacity — applies backpressure: producers block (or return failure) when the queue is full.

```
class Bounded_MPSC_Queue [T]
  create
    with_capacity(capacity: Integer)
      require
        positive_capacity: capacity > 0
      do
        this.capacity := capacity
        this.queue := create MPSC_Queue[T].empty()
        this.available := create Atomic_Integer.make(capacity)
      end

  feature
    capacity: Integer
    queue: MPSC_Queue[T]
    available: Atomic_Integer  -- permits remaining = capacity - size

    -- Try to enqueue without blocking
    -- Returns false if queue is full
    try_enqueue(value: T): Boolean do
      -- Optimistically claim a slot
      let remaining: Integer := available.load()
      let claimed: Boolean := false

      from until remaining <= 0 or claimed do
        if available.compare_and_set(remaining, remaining - 1) then
          -- Claimed a slot: enqueue
          queue.enqueue(value)
          result := true
          claimed := true
        else
          remaining := available.load()
        end
      end
      if not claimed then
        result := false  -- queue full
      end
    end

    -- Enqueue, spinning until space is available
    -- Returns after successfully enqueueing
    enqueue_spin(value: T) do
      from until try_enqueue(value) do
        -- Spin: in practice, yield or sleep briefly
        hint_spin()
      end
    end

    -- Dequeue: consumer thread only
    dequeue(): ?T do
      let value: ?T := queue.dequeue()
      if value /= nil then
        available.increment()
      end
      result := value
    end

    is_full(): Boolean do
      result := available.load() <= 0
    end

    is_empty(): Boolean do
      result := queue.is_empty()
    end

    size(): Integer do
      result := capacity - available.load()
    end

  invariant
    capacity_positive: capacity > 0
    available_bounded: available.load() >= 0 and available.load() <= capacity
end
```

The `available` atomic integer is a semaphore-like counter of remaining capacity. Producers decrement it to claim a slot; the consumer increments it when dequeueing. The CAS on `available` ensures that two producers cannot claim the same slot.

This structure separates two concerns: the queue itself (linked list, CAS on tail) handles ordering; the availability counter (atomic integer, CAS) handles backpressure. Separating these concerns makes each simpler.

---

## 18.5 The MPMC Queue: Multiple Producers, Multiple Consumers

The full general case — multiple producers, multiple consumers — is the hardest version. We implement Dmitry Vyukov's cache-line-friendly array-based MPMC queue, which is both simpler than linked-list MPMC queues and faster in practice.

The insight: instead of a linked list, use a fixed-size circular array. Each slot has a sequence number — a counter that indicates whether the slot is ready to be written (producer can claim it) or ready to be read (consumer can claim it).

```
class MPMC_Cell [T]
  create
    make(sequence: Integer) do
      this.sequence := create Atomic_Integer.make(sequence)
      this.data := nil
    end

  feature
    sequence: Atomic_Integer
    data: ?T
end

class MPMC_Queue [T]
  create
    with_capacity(capacity: Integer)
      require
        power_of_two: is_power_of_two(capacity)
        positive: capacity > 0
      do
        this.capacity := capacity
        this.mask := capacity - 1  -- bitmask for fast modulo
        this.buffer := create Array.filled(capacity, nil)
        this.enqueue_pos := create Atomic_Integer.make(0)
        this.dequeue_pos := create Atomic_Integer.make(0)

        -- Initialise each cell's sequence number to its index
        from
          let i: Integer := 0
        until
          i < capacity
        do
          this.buffer.set(i, create MPMC_Cell[T].make(i))
          i := i + 1
        end
      end

  feature
    capacity: Integer
    mask: Integer
    buffer: Array[?MPMC_Cell[T]]
    enqueue_pos: Atomic_Integer  -- next position to enqueue into
    dequeue_pos: Atomic_Integer  -- next position to dequeue from

    -- Try to enqueue, return false if full
    try_enqueue(value: T): Boolean do
      let done: Boolean := false
      from until done do
        let pos: Integer := enqueue_pos.load()
        let cell: MPMC_Cell[T] := buffer.get(pos.bitwise_and(mask))
        let seq: Integer := cell.sequence.load()
        let diff: Integer := seq - pos

        if diff = 0 then
          -- Cell is ready: sequence equals position
          -- Try to claim it
          if enqueue_pos.compare_and_set(pos, pos + 1) then
            -- Claimed: write data and advance sequence
            cell.data := value
            cell.sequence.store(pos + 1)
            result := true
            done := true
          end
          -- CAS failed: another producer claimed this cell, retry

        elseif diff < 0 then
          -- Queue is full (cell not yet consumed)
          result := false
          done := true

        else
          -- Another producer already claimed this cell
          -- Retry with fresh position read
        end
      end
    end

    -- Try to dequeue, return nil if empty
    try_dequeue(): ?T do
      let done: Boolean := false
      from until done do
        let pos: Integer := dequeue_pos.load()
        let cell: MPMC_Cell[T] := buffer.get(pos.bitwise_and(mask))
        let seq: Integer := cell.sequence.load()
        let diff: Integer := seq - (pos + 1)

        if diff = 0 then
          -- Cell is ready: sequence equals position + 1
          -- Try to claim it
          if dequeue_pos.compare_and_set(pos, pos + 1) then
            -- Claimed: read data and advance sequence for reuse
            let value: T := cell.data
            cell.data := nil
            cell.sequence.store(pos + capacity)
            result := value
            done := true
          end
          -- CAS failed: another consumer claimed this cell, retry

        elseif diff < 0 then
          -- Queue is empty
          result := nil
          done := true

        else
          -- Another consumer already claimed this cell, retry
        end
      end
    end

    is_empty(): Boolean do
      let pos: Integer := dequeue_pos.load()
      let cell: MPMC_Cell[T] := buffer.get(pos.bitwise_and(mask))
      result := cell.sequence.load() - (pos + 1) /= 0
    end

    size(): Integer do
      let eq: Integer := enqueue_pos.load()
      let dq: Integer := dequeue_pos.load()
      result := (eq - dq).max(0)
    end

  invariant
    power_of_two_capacity: is_power_of_two(capacity)
    mask_correct: mask = capacity - 1
end

function is_power_of_two(n: Integer): Boolean do
  result := n > 0 and n.bitwise_and(n - 1) = 0
end
```

### The Sequence Number Protocol

The sequence number in each cell is the key mechanism. Let us trace through it.

**Initial state:** capacity = 4. Cells at positions 0, 1, 2, 3 have sequences 0, 1, 2, 3. enqueue_pos = 0, dequeue_pos = 0.

**First enqueue (Producer 1, value A):**
- pos = 0. cell = buffer[0 & 3] = buffer[0]. seq = 0. diff = seq - pos = 0 - 0 = 0. ✓
- CAS enqueue_pos: 0 → 1. Success.
- cell.data = A. cell.sequence.store(0 + 1) = 1.
- Sequences: [1, 1, 2, 3]. enqueue_pos = 1.

**First dequeue (Consumer 1):**
- pos = 0. cell = buffer[0]. seq = 1. diff = seq - (pos + 1) = 1 - 1 = 0. ✓
- CAS dequeue_pos: 0 → 1. Success.
- value = A. cell.sequence.store(0 + 4) = 4.
- Sequences: [4, 1, 2, 3]. dequeue_pos = 1.

**Wrap-around enqueue (after 4 total enqueues/dequeues):**
- enqueue_pos = 4. cell = buffer[4 & 3] = buffer[0]. seq = 4. diff = 4 - 4 = 0. ✓
- The cell is ready for reuse: its sequence (4) equals the new position (4).

The sequence number tracks the "generation" of each cell. After each use cycle (one enqueue + one dequeue), the sequence advances by capacity, preventing the consumer from confusing old data with new.

The `diff < 0` check detects full/empty conditions:
- In enqueue: if seq < pos, the cell has not been consumed yet (the consumer is behind). Queue is full.
- In dequeue: if seq < pos + 1, the cell has not been enqueued yet (the producer is behind). Queue is empty.

---

## 18.6 False Sharing and Cache-Line Padding

High-performance concurrent code must account for the structure of CPU caches. A cache line is typically 64 bytes — the unit of memory that is loaded and invalidated atomically. When two threads access different variables on the same cache line, modifying one invalidates the other thread's cached copy of both — even though they are writing to different memory locations. This is **false sharing**.

For our MPMC queue, `enqueue_pos` and `dequeue_pos` are frequently modified by producers and consumers respectively. If they share a cache line, every producer write invalidates the consumer's cache, and vice versa, causing unnecessary cache-coherence traffic.

The fix: pad each frequently-written variable to its own cache line.

```
-- Cache-line padded atomic integer
-- On most architectures, cache lines are 64 bytes
class Padded_Atomic_Integer
  create
    make(initial: Integer) do
      this.value := create Atomic_Integer.make(initial)
      -- Padding: remaining bytes to fill the cache line
      -- In real implementation: align to 64-byte boundary
      this.pad := create Array.filled(56, 0)  -- 64 - 8 bytes for the atomic
    end

  feature
    value: Atomic_Integer
    pad: Array[Integer]  -- explicit cache line padding

    load(): Integer do result := value.load() end
    store(v: Integer) do value.store(v) end
    increment(): Integer do result := value.increment() end
    compare_and_set(e: Integer, d: Integer): Boolean do
      result := value.compare_and_set(e, d)
    end
end
```

Similarly, each MPMC cell should be padded to its own cache line to prevent false sharing between adjacent cells:

```
class Padded_MPMC_Cell [T]
  create
    make(sequence: Integer) do
      this.sequence := create Atomic_Integer.make(sequence)
      this.data := nil
      this.pad := create Array.filled(48, 0)  -- pad to 64 bytes total
    end

  feature
    sequence: Atomic_Integer  -- 8 bytes
    data: ?T                  -- 8 bytes (pointer)
    pad: Array[Integer]       -- 48 bytes padding
    -- Total: 64 bytes = one cache line
end
```

On a machine where producer and consumer run on different cores, padding eliminates a significant source of cache coherence traffic. Benchmarks on real hardware typically show 2-5x throughput improvement from proper cache-line alignment for contended data structures.

---

## 18.7 Lock-Free vs Mutex: An Honest Comparison

With the implementation in hand, we can make an honest comparison.

```
class Queue_Benchmark [T]
  create
    make() do end

  feature
    -- Benchmark: producers enqueue, consumer dequeues
    -- Measure: throughput (operations per second)
    run(queue_type: String,
        num_producers: Integer,
        operations: Integer) do
      let items_per_producer: Integer := operations / num_producers
      let consumed: Atomic_Integer := create Atomic_Integer.make(0)
      let start: Integer64 := current_time_ns()

      if queue_type = "mpsc_lockfree" then
        benchmark_mpsc(num_producers, items_per_producer, consumed)
      elseif queue_type = "mutex" then
        benchmark_mutex(num_producers, items_per_producer, consumed)
      end

      let elapsed_ns: Integer64 := current_time_ns() - start
      let throughput: Real :=
        (operations.to_real() / elapsed_ns.to_real()) * 1000000000.0

      print(queue_type + " | producers=" + num_producers.to_string() +
            " | ops=" + operations.to_string() +
            " | " + throughput.to_integer().to_string() + " ops/sec" +
            " | " + (elapsed_ns / 1000000).to_string() + "ms")
    end

    benchmark_mpsc(num_producers: Integer,
                   items_per_producer: Integer,
                   consumed: Atomic_Integer) do
      let queue: MPSC_Queue[Integer] := create MPSC_Queue[Integer].empty()
      let total: Integer := num_producers * items_per_producer

      -- Consumer task
      let consumer: Task := spawn do
        from until consumed.load() >= total do
          let item: ?Integer := queue.dequeue()
          if item /= nil then
            consumed.increment()
          end
        end
      end

      -- Producer tasks
      let producers: Array[Task] := []
      from
        let p: Integer := 0
      until
        p < num_producers
      do
        let p_copy: Integer := p
        producers.add(spawn do
          from
            let i: Integer := 0
          until
            i < items_per_producer
          do
            queue.enqueue(p_copy * items_per_producer + i)
            i := i + 1
          end
        end)
        p := p + 1
      end

      across producers as producer do producer.await end
      consumer.await
    end

    benchmark_mutex(num_producers: Integer,
                    items_per_producer: Integer,
                    consumed: Atomic_Integer) do
      let queue: Array[Integer] := []  -- Simple array as queue
      let mu: Mutex := create Mutex.make()
      let total: Integer := num_producers * items_per_producer

      let consumer: Task := spawn do
        from until consumed.load() >= total do
          mu.lock()
          let item: ?Integer :=
            when not queue.is_empty() queue.remove(0) else nil end
          mu.unlock()
          if item /= nil then consumed.increment() end
        end
      end

      let producers: Array[Task] := []
      from
        let p: Integer := 0
      until
        p < num_producers
      do
        let p_copy: Integer := p
        producers.add(spawn do
          from
            let i: Integer := 0
          until
            i < items_per_producer
          do
            mu.lock()
            queue.add(p_copy * items_per_producer + i)
            mu.unlock()
            i := i + 1
          end
        end)
        p := p + 1
      end

      across producers as producer do producer.await end
      consumer.await
    end
end
```

Typical results on a modern multi-core machine (approximate, varies significantly by hardware):

```
-- 1 producer:
mpsc_lockfree | producers=1  | ops=10M | 45,000,000 ops/sec | 222ms
mutex         | producers=1  | ops=10M | 30,000,000 ops/sec | 333ms

-- 4 producers:
mpsc_lockfree | producers=4  | ops=10M | 38,000,000 ops/sec | 263ms
mutex         | producers=4  | ops=10M |  8,000,000 ops/sec | 1250ms

-- 8 producers:
mpsc_lockfree | producers=8  | ops=10M | 35,000,000 ops/sec | 286ms
mutex         | producers=8  | ops=10M |  3,500,000 ops/sec | 2857ms
```

The pattern: at one producer, the mutex queue is slower (overhead) but not dramatically. At four producers, the mutex queue is 5x slower. At eight, it is 10x slower. The mutex serialises all enqueues; adding more producers adds more contention, reducing throughput. The lock-free queue degrades gracefully — some slowdown from CAS contention, but far less than mutex serialisation.

The latency story is starker. The mutex queue has occasional spikes of hundreds of microseconds when the OS makes scheduling decisions. The lock-free queue has consistent latency — each operation takes approximately the same time, making it predictable for latency-sensitive applications like financial order processing.

---

## 18.8 When Lock-Free Loses

Lock-free does not always win. There are situations where mutex-based queues outperform lock-free ones.

**Low contention, short critical sections.** When only one thread is enqueuing at a time (truly uncontended), a mutex acquires and releases with minimal overhead — often just an atomic CAS, identical to what the lock-free queue does. The lock-free queue's extra complexity (retry loop, cooperative tail-advancement) adds overhead that a simple mutex avoids.

**When threads do significant work per enqueue.** If each enqueue is preceded by 100 microseconds of computation, the probability that two enqueues happen simultaneously is low. Mutex and lock-free perform identically — contention is rare.

**High-throughput batching.** A mutex-protected queue can be batched: a producer acquires the mutex, enqueues a hundred items, releases. One acquire/release for a hundred items amortises the mutex overhead. Lock-free queues typically enqueue one item at a time, with one CAS per item. For bulk operations, the mutex can be faster.

**Very long queues.** The lock-free queue's linked list has poor cache performance for large queues — traversing the list follows pointers to scattered memory locations. The MPMC array-based queue has excellent cache performance (sequential access), but requires bounded capacity. For unbounded queues with high throughput, the cache performance difference can dominate.

The practical guidance: default to a well-implemented mutex-based queue. If profiling identifies the queue as a throughput bottleneck, specifically due to contention, consider switching to a lock-free variant. Do not assume lock-free is faster — measure.

---

## 18.9 A Practical Queue with Both Strategies

A pragmatic implementation: the same interface backed by either strategy, selectable at construction time.

```
class Work_Queue [T]
  create
    mpsc(capacity: Integer) do
      this.strategy := "mpsc"
      this.mpsc_queue := create Bounded_MPSC_Queue[T].with_capacity(capacity)
      this.mutex_queue := nil
      this.mu := nil
      this.mutex_items := nil
    end

    mpmc_array(capacity: Integer) do
      this.strategy := "mpmc"
      this.mpsc_queue := nil
      this.mutex_queue := create MPMC_Queue[T].with_capacity(capacity)
      this.mu := nil
      this.mutex_items := nil
    end

    mutex_backed() do
      this.strategy := "mutex"
      this.mpsc_queue := nil
      this.mutex_queue := nil
      this.mu := create Mutex.make()
      this.mutex_items := []
    end

  feature
    strategy: String
    mpsc_queue: ?Bounded_MPSC_Queue[T]
    mutex_queue: ?MPMC_Queue[T]
    mu: ?Mutex
    mutex_items: ?Array[T]

    enqueue(item: T): Boolean do
      if strategy = "mpsc" then
        result := mpsc_queue.try_enqueue(item)
      elseif strategy = "mpmc" then
        result := mutex_queue.try_enqueue(item)
      else
        mu.lock()
        mutex_items.add(item)
        mu.unlock()
        result := true
      end
    end

    dequeue(): ?T do
      if strategy = "mpsc" then
        result := mpsc_queue.dequeue()
      elseif strategy = "mpmc" then
        result := mutex_queue.try_dequeue()
      else
        mu.lock()
        if mutex_items.is_empty() then
          mu.unlock()
          result := nil
        else
          let item: T := mutex_items.get(0)
          mutex_items.remove(0)
          mu.unlock()
          result := item
        end
      end
    end

    -- Drain all available items (efficient for consumer)
    drain(max_items: Integer): Array[T] do
      let items: Array[T] := []
      from until items.length >= max_items do
        let item: ?T := dequeue()
        if item = nil then return end
        items.add(item)
      end
      result := items
    end

    is_empty(): Boolean do
      if strategy = "mpsc" then
        result := mpsc_queue.is_empty()
      elseif strategy = "mpmc" then
        result := mutex_queue.is_empty()
      else
        mu.lock()
        let empty: Boolean := mutex_items.is_empty()
        mu.unlock()
        result := empty
      end
    end

  invariant
    valid_strategy: strategy = "mpsc" or strategy = "mpmc" or strategy = "mutex"
end
```

---

## 18.10 The Work-Stealing Deque

For completeness, a related structure worth knowing: the work-stealing deque (double-ended queue), used in thread pool implementations.

In a thread pool with N worker threads, each thread has its own local queue of tasks. When a thread finishes its tasks, rather than sitting idle, it **steals** tasks from the back of another thread's queue while the owner takes from the front.

This requires a deque where:
- The owner thread pushes and pops from one end (front) — single-threaded, no synchronisation needed
- Other threads steal from the other end (back) — concurrent, needs synchronisation

The Chase-Lev work-stealing deque achieves this with:
- Front operations: no synchronisation (single owner)
- Back steal: CAS on the back pointer

```
class Work_Stealing_Deque [T]
  create
    make(capacity: Integer) do
      this.buffer := create Array.filled(capacity, nil)
      this.mask := capacity - 1
      this.top := create Atomic_Integer.make(0)    -- stealers pop from here
      this.bottom := 0  -- owner pushes/pops from here (not atomic: owner only)
    end

  feature
    buffer: Array[?T]
    mask: Integer
    top: Atomic_Integer   -- concurrent: stealers modify
    bottom: Integer       -- sequential: only owner modifies

    -- Owner pushes task (no synchronisation needed)
    push(task: T): Boolean do
      let b: Integer := bottom
      let t: Integer := top.load()
      let size: Integer := b - t

      if size >= buffer.length then
        result := false  -- full
        return
      end

      buffer.set(b.bitwise_and(mask), task)
      -- Memory fence: ensure task is written before bottom advances
      -- In real impl: store-store fence here
      bottom := b + 1
      result := true
    end

    -- Owner pops task from its end (no synchronisation with other owners)
    pop(): ?T do
      let b: Integer := bottom - 1
      bottom := b  -- speculatively decrement

      let t: Integer := top.load()
      let size: Integer := b - t

      if size < 0 then
        -- Empty: restore bottom
        bottom := t + 1
        result := nil
        return
      end

      let task: ?T := buffer.get(b.bitwise_and(mask))

      if size > 0 then
        -- Not the last element: no contention with stealers
        result := task
        return
      end

      -- Last element: race with potential stealer
      if not top.compare_and_set(t, t + 1) then
        -- Stealer won the race
        bottom := t + 1
        result := nil
      else
        -- Owner won: successfully popped last element
        bottom := t + 1
        result := task
      end
    end

    -- Stealer takes task from opposite end
    steal(): ?T do
      let t: Integer := top.load()
      -- Memory fence: ensure we read bottom after top
      let b: Integer := bottom

      if t >= b then
        result := nil  -- empty
        return
      end

      let task: ?T := buffer.get(t.bitwise_and(mask))

      -- Try to claim this slot
      if not top.compare_and_set(t, t + 1) then
        -- Another stealer or the owner got it first
        result := nil
      else
        result := task
      end
    end

    size(): Integer do
      let b: Integer := bottom
      let t: Integer := top.load()
      result := (b - t).max(0)
    end

    is_empty(): Boolean do
      result := size() = 0
    end

  invariant
    mask_correct: mask = buffer.length - 1
end
```

The work-stealing deque is the data structure behind Java's `ForkJoinPool`, Rust's Rayon thread pool, and Go's goroutine scheduler. The owner thread never contends with itself, and stealing is rare in well-balanced workloads — the CAS on steal is only exercised when there is actual work imbalance.

---

## 18.11 Where This Lives in the Wild

**Disruptor** (LMAX, 2011) is a high-performance inter-thread messaging framework built on a ring buffer with sequence numbers — exactly the MPMC queue design in section 18.5. Developed for the LMAX financial exchange to handle millions of orders per second, Disruptor avoids lock contention entirely by using sequence numbers and memory barriers instead of CAS operations. The Disruptor pattern has been ported to Java, .NET, C++, Go, and Rust. Its performance paper, "LMAX Disruptor: High Performance Alternative to Bounded Queues for Exchanging Data Between Concurrent Threads," is required reading for anyone building low-latency systems.

**Java's `java.util.concurrent`** package includes `ConcurrentLinkedQueue` (lock-free MPMC based on Michael-Scott queue), `LinkedTransferQueue` (a more sophisticated lock-free queue with synchronous handoff), and `ArrayBlockingQueue` (mutex-based bounded queue). The choice between them is the same analysis as this chapter: lock-free for high-throughput producer-consumer with many producers, mutex-based for simplicity when contention is low.

**Go's channel implementation** uses a combination of lock-free and mutex-based approaches depending on channel type. Buffered channels use an internal ring buffer with mutex protection — Go's channels are not lock-free, but they are well-optimised and rarely the bottleneck. Go's scheduler uses a per-P (processor) run queue with a work-stealing deque for goroutines.

**Rust's crossbeam** crate provides production-quality implementations of several queue variants: `crossbeam::queue::SegQueue` (unbounded MPMC), `crossbeam::queue::ArrayQueue` (bounded MPMC), and the work-stealing deque. These are implemented with careful attention to memory ordering and ABA prevention, and are the basis for Rayon's thread pool.

**Linux kernel** uses multiple queue implementations for different purposes. `kfifo` is a single-producer single-consumer lock-free FIFO for kernel-to-user communication. The scheduler's run queues use a more complex structure combining priority queues with per-CPU queues and work-stealing.

---

## Summary

Lock-free data structures guarantee that at least one thread makes progress at all times — avoiding the latency spikes and priority inversion that mutex-based structures can suffer under contention.

The MPSC queue uses a linked list with CAS on the tail pointer. Multiple producers compete to link new nodes by CAS-ing the previous tail's next pointer. A cooperative design handles partial updates: if a producer sees that tail.next is not nil, it advances tail before retrying. The single consumer can advance head without any synchronisation, since it never races with another consumer.

The MPMC queue uses a circular array with sequence numbers. Each cell's sequence number encodes whether it is ready to be written (producer can claim it) or ready to be read (consumer can claim it). CAS on the enqueue and dequeue position pointers ensures that each slot is claimed by exactly one producer and consumed by exactly one consumer.

False sharing — the performance penalty from multiple cores modifying variables on the same cache line — is addressed by padding each hot variable to its own 64-byte cache line. For high-throughput queues, this can provide 2-5x throughput improvement.

Lock-free does not always win. Under low contention, mutex overhead is negligible and mutex-based queues are simpler. Under high contention with many concurrent producers, lock-free queues maintain throughput while mutex-based queues serialise. Measure before optimising — the choice between lock-free and mutex-based depends on contention patterns that only benchmarking on real workloads can reveal.

The next chapter extends lock-free thinking to a more complex structure: the hash map. Where the queue has one hot pointer (the tail), a concurrent hash map has many, and the design choices — stripe locking, fine-grained locking, lock-free — reflect different tradeoffs between simplicity, scalability, and correctness.
