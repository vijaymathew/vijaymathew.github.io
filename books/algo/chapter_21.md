# Chapter 21: Message Passing — Channels and the CSP Model

---

There is a thought experiment that clarifies the fundamental difficulty of shared state concurrency. Imagine two people sharing one notebook. Both need to read and write notes. They agree on a protocol: before writing, check if the other person is writing; if so, wait. The protocol works, but it requires constant coordination — checking, waiting, checking again. If one person falls asleep mid-sentence, the other is stuck. If both check simultaneously and both see the other is free, both write at once and the notes become garbled.

Now imagine a different arrangement. The two people each have their own notebook. When one needs to communicate with the other, they write a note and pass it across. The other receives it, reads it, writes a response, passes it back. No shared notebook. No checking. No waiting for the other to finish. Communication happens through the act of passing the note, not through watching a shared resource.

This is the core intuition behind message passing: instead of sharing memory and synchronising access to it, share nothing and communicate explicitly. Each thread owns its own state. Interaction happens through channels — conduits through which messages flow from sender to receiver.

The formal theory behind this intuition was developed by Tony Hoare in 1978 in a paper called "Communicating Sequential Processes." CSP gave message passing a mathematical foundation and inspired the design of several programming languages, most prominently Occam (designed for parallel hardware), Erlang (for fault-tolerant distributed systems), and Go (for concurrent server programming). Nex's channel and task system is directly in the CSP tradition.

This chapter builds a complete understanding of message passing in Nex, develops the canonical concurrent patterns — pipelines, fan-out, fan-in, cancellation — and explains when channels are the right tool and when shared state (with appropriate synchronisation) is better.

---

## 21.1 The CSP Model

In CSP, a program consists of processes that execute concurrently and communicate through synchronous message passing. The key properties:

**Processes do not share memory.** Each process has its own local state, inaccessible to other processes. There is no shared mutable state to protect.

**Communication is synchronous.** A send blocks until a receiver is ready. A receive blocks until a sender is ready. The two operations complete together — they rendezvous. This synchronisation is not incidental; it is the mechanism by which processes coordinate.

**Communication is typed.** A channel carries values of a specific type. Sending the wrong type is a compile-time error, not a runtime surprise.

**Processes are lightweight.** The model assumes that creating thousands of concurrent processes is practical, because each process is not a heavyweight OS thread — it is a lightweight task multiplexed over a pool of OS threads.

Hoare's synchronous rendezvous model is the strict version of CSP. Practical systems often use buffered channels — channels that can hold some number of messages without a receiver being ready, allowing the sender to continue. Buffering trades the strict coordination of synchronous rendezvous for flexibility and throughput. Both modes are useful; understanding when to use each is part of the skill.

Nex implements both: `create Channel[T]` gives an unbuffered channel (synchronous rendezvous), and `create Channel[T].with_capacity(n)` gives a buffered channel that holds up to n messages before blocking senders.

---

## 21.2 The Basic Channel

```
-- Unbuffered channel: sender blocks until receiver is ready
let ch: Channel[Integer] := create Channel[Integer]

let sender: Task := spawn do
  ch.send(42)
  print("sent")  -- prints after receiver is ready
end

let receiver: Task := spawn do
  let value: Integer := ch.receive
  print("received: " + value.to_string())
end

sender.await
receiver.await
-- Output: "received: 42" then "sent" (or simultaneously)
```

The unbuffered channel is a meeting point. Sender and receiver must both be present for the transfer to occur. The sender arrives first and waits. The receiver arrives, takes the value, and both proceed. The rendezvous is the synchronisation.

```
-- Buffered channel: sender can proceed without waiting for receiver
let buffered: Channel[Integer] := create Channel[Integer].with_capacity(3)

-- These three sends do not block: buffer has space
buffered.send(1)
buffered.send(2)
buffered.send(3)

-- This fourth send would block: buffer is full
-- buffered.send(4)  -- blocks until someone receives

-- Receives drain the buffer
print(buffered.receive)  -- 1
print(buffered.receive)  -- 2
print(buffered.receive)  -- 3
```

The buffered channel is a queue with bounded capacity. Senders block only when the buffer is full. Receivers block only when the buffer is empty. The buffer decouples producer and consumer timing: they need not rendezvous, but the buffer prevents unbounded accumulation.

---

## 21.3 Pipelines: Chaining Transformations

The first and most fundamental concurrent pattern is the pipeline: a sequence of stages where each stage reads from an input channel, transforms the data, and writes to an output channel.

```
-- Pipeline: generate → transform → collect

-- Stage 1: Generator — produces integers
function generate(count: Integer): Channel[Integer] do
  let out: Channel[Integer] := create Channel[Integer].with_capacity(16)

  spawn do
    from
      let i: Integer := 0
    until
      i < count
    do
      out.send(i)
      i := i + 1
    end
    out.close  -- signal: no more values
  end

  result := out
end

-- Stage 2: Square — squares each integer
function square(in_ch: Channel[Integer]): Channel[Integer] do
  let out: Channel[Integer] := create Channel[Integer].with_capacity(16)

  spawn do
    from until true do
      let value: ?Integer := in_ch.try_receive
      if value = nil then
        -- Check if channel is closed
        if in_ch.is_closed then
          out.close
          return
        end
        -- Channel not closed but no value yet: keep trying
      else
        out.send(value * value)
      end
    end
  end

  result := out
end

-- Stage 3: Filter — keeps only even numbers
function filter_even(in_ch: Channel[Integer]): Channel[Integer] do
  let out: Channel[Integer] := create Channel[Integer].with_capacity(16)

  spawn do
    from until true do
      let msg: ?Integer := receive_or_done(in_ch)
      if msg = nil then
        out.close
        return
      end
      if msg % 2 = 0 then
        out.send(msg)
      end
    end
  end

  result := out
end

-- Compose the pipeline
let numbers: Channel[Integer] := generate(20)
let squared: Channel[Integer] := square(numbers)
let evens: Channel[Integer] := filter_even(squared)

-- Collect results
from until true do
  let result: ?Integer := receive_or_done(evens)
  if result = nil then break end
  print(result.to_string())
end
-- Prints: 0, 4, 16, 36, 64, 100, 144, 196, 256, 324
-- (squares of 0,2,4,6,8,10,12,14,16,18)
```

Each stage is a separate task. The buffered channels between stages allow each stage to run at its own pace — if squaring is faster than filtering, the squares buffer up; if filtering is faster, the filter waits. The pipeline naturally handles rate differences between stages.

The `close` operation on a channel signals to receivers that no more values will come. Receivers can detect closure and propagate it downstream — each stage closes its output channel when it detects its input channel is closed. This clean shutdown propagation is a natural feature of the pipeline pattern.

### A Reusable Pipeline Stage

```
class Pipeline [A, B]
  create
    make(transform: Function[A, B]) do
      this.transform := transform
    end

  feature
    transform: Function[A, B]

    -- Connect: returns output channel, runs transform in background
    connect(input: Channel[A]): Channel[B] do
      let output: Channel[B] := create Channel[B].with_capacity(16)

      spawn do
        from until true do
          let msg: ?A := receive_or_done(input)
          if msg = nil then
            output.close
            return
          end
          output.send(transform(msg))
        end
      end

      result := output
    end

    -- Chain multiple pipelines
    then_apply(next: Pipeline[B, C]): Pipeline[A, C] do
      result := create Pipeline[A, C].make(
        fn a: A do
          result := next.transform(transform(a))
        end)
    end
end

-- Utility: receive from channel, return nil if closed
function receive_or_done [T] (ch: Channel[T]): ?T do
  if ch.is_closed and ch.is_empty then
    result := nil
    return
  end
  result := ch.receive
end
```

---

## 21.4 Fan-Out: Distributing Work

Fan-out distributes items from one channel to multiple workers, each processing items independently. This is the natural pattern for parallelising CPU-bound work.

```
-- Fan-out: distribute work across N workers
function fan_out(input: Channel[Integer],
                 num_workers: Integer,
                 process: Function[Integer, Integer]): Channel[Integer] do
  let output: Channel[Integer] := create Channel[Integer].with_capacity(64)
  let workers_done: Atomic_Integer := create Atomic_Integer.make(0)

  from
    let w: Integer := 0
  until
    w < num_workers
  do
    spawn do
      from until true do
        let item: ?Integer := receive_or_done(input)
        if item = nil then
          -- This worker is done
          if workers_done.increment() = num_workers then
            output.close  -- last worker closes output
          end
          return
        end
        output.send(process(item))
      end
    end
    w := w + 1
  end

  result := output
end
```

All workers read from the same input channel. Nex channels are safe for concurrent access — multiple goroutines can receive from the same channel, and each item is delivered to exactly one receiver. This creates natural load balancing: fast workers take more items, slow workers take fewer, without any explicit scheduling.

```
-- Example: parallel image processing
let image_paths: Channel[String] := load_image_paths("/images")

-- Fan out to 8 workers, each processing images independently
let processed: Channel[String] := fan_out_string(
  image_paths, 8,
  fn path: String do
    result := process_image(path)  -- CPU-intensive
  end)

-- Collect processed images
from until true do
  let result_path: ?String := receive_or_done(processed)
  if result_path = nil then break end
  save_result(result_path)
end
```

### Fan-Out with Results Ordering

The basic fan-out does not preserve order — workers finish at different times and emit results as they complete. If order matters, add sequence numbers:

```
class Ordered_Item [T]
  create
    make(sequence: Integer, value: T) do
      this.sequence := sequence
      this.value := value
    end

  feature
    sequence: Integer
    value: T
end

function ordered_fan_out(input: Channel[Integer],
                          num_workers: Integer,
                          process: Function[Integer, Integer]): Channel[Integer] do
  -- Tag items with sequence numbers
  let tagged: Channel[Ordered_Item[Integer]] :=
    create Channel[Ordered_Item[Integer]].with_capacity(64)
  let result_ch: Channel[Ordered_Item[Integer]] :=
    create Channel[Ordered_Item[Integer]].with_capacity(64)
  let output: Channel[Integer] := create Channel[Integer].with_capacity(64)

  -- Tagging stage
  spawn do
    let seq: Integer := 0
    from until true do
      let item: ?Integer := receive_or_done(input)
      if item = nil then
        tagged.close
        return
      end
      tagged.send(create Ordered_Item[Integer].make(seq, item))
      seq := seq + 1
    end
  end

  -- Workers
  let workers_done: Atomic_Integer := create Atomic_Integer.make(0)
  from
    let w: Integer := 0
  until
    w < num_workers
  do
    spawn do
      from until true do
        let item: ?Ordered_Item[Integer] := receive_or_done(tagged)
        if item = nil then
          if workers_done.increment() = num_workers then
            result_ch.close
          end
          return
        end
        let processed: Integer := process(item.value)
        result_ch.send(create Ordered_Item[Integer].make(item.sequence, processed))
      end
    end
    w := w + 1
  end

  -- Reorder stage: reassemble in sequence order
  spawn do
    let next_seq: Integer := 0
    let buffer: Map[Integer, Integer] := {}

    from until true do
      let item: ?Ordered_Item[Integer] := receive_or_done(result_ch)
      if item = nil then
        output.close
        return
      end

      buffer.put(item.sequence, item.value)

      -- Emit all consecutive completed items
      from until not buffer.contains(next_seq) do
        output.send(buffer.get(next_seq))
        buffer.remove(next_seq)
        next_seq := next_seq + 1
      end
    end
  end

  result := output
end
```

---

## 21.5 Fan-In: Merging Results

Fan-in is the inverse: merge results from multiple channels into one. This is used to collect results from fan-out workers, aggregate data from multiple sources, or combine streams.

```
-- Fan-in: merge multiple input channels into one output channel
function fan_in [T] (inputs: Array[Channel[T]]): Channel[T] do
  let output: Channel[T] := create Channel[T].with_capacity(64)
  let done_count: Atomic_Integer := create Atomic_Integer.make(0)
  let n: Integer := inputs.length

  across inputs as input do
    spawn do
      from until true do
        let item: ?T := receive_or_done(input)
        if item = nil then
          if done_count.increment() = n then
            output.close
          end
          return
        end
        output.send(item)
      end
    end
  end

  result := output
end
```

Fan-in using Nex's select statement is more elegant. `select` waits on multiple channel operations simultaneously, proceeding with whichever is ready first:

```
function fan_in_select [T] (inputs: Array[Channel[T]]): Channel[T] do
  let output: Channel[T] := create Channel[T].with_capacity(64)

  spawn do
    let active: Integer := inputs.length

    from until active = 0 do
      -- select would handle this elegantly if we had dynamic channel lists
      -- For static cases, select is cleaner
      let found: Boolean := false
      across inputs as input do
        if not input.is_closed or not input.is_empty then
          let item: ?T := input.try_receive
          if item /= nil then
            output.send(item)
            found := true
          elseif input.is_closed and input.is_empty then
            active := active - 1
          end
        end
      end
      if not found then
        -- No input ready: yield briefly
        hint_yield()
      end
    end

    output.close
  end

  result := output
end
```

### The Pipeline-FanOut-FanIn Pattern

These three primitives compose naturally into the scatter-gather pattern: scatter work across workers with fan-out, gather results with fan-in, process the combined stream.

```
function scatter_gather(input: Channel[String],
                         num_workers: Integer): Channel[String] do
  -- Fan out to workers
  let worker_outputs: Array[Channel[String]] := []
  from
    let w: Integer := 0
  until
    w < num_workers
  do
    let worker_output: Channel[String] :=
      create Channel[String].with_capacity(16)
    worker_outputs.add(worker_output)

    spawn do
      from until true do
        let item: ?String := receive_or_done(input)
        if item = nil then
          worker_output.close
          return
        end
        -- Each worker does some processing
        worker_output.send(item.to_upper())
      end
    end

    w := w + 1
  end

  -- Fan in results
  result := fan_in(worker_outputs)
end
```

---

## 21.6 Cancellation and Done Channels

Long-running pipelines need a way to stop. A worker that is blocked on a channel receive cannot be interrupted from outside — it needs to cooperate in its own termination. The standard mechanism: a done channel.

A done channel carries no values — it is used purely for signalling. When the coordinator wants to stop the workers, it closes the done channel. Workers check the done channel periodically (or with select) and exit when it is closed.

```
class Cancellable_Pipeline
  create
    make() do
      this.done := create Channel[Void]
      this.cancelled := false
    end

  feature
    done: Channel[Void]
    cancelled: Boolean

    -- Cancel: signal all workers to stop
    cancel() do
      if not cancelled then
        cancelled := true
        done.close  -- closing broadcasts to all receivers
      end
    end

    -- Generate integers until cancelled
    generate_until_cancelled(limit: Integer): Channel[Integer] do
      let out: Channel[Integer] := create Channel[Integer].with_capacity(16)
      let done_ref: Channel[Void] := done  -- capture for closure

      spawn do
        from
          let i: Integer := 0
        until
          i < limit
        do
          -- Check for cancellation using select
          select
            when out.send(i) then
              i := i + 1
            when done_ref.receive then
              out.close
              return
          end
        end
        out.close
      end

      result := out
    end

    -- Process items until cancelled
    process_until_cancelled(input: Channel[Integer],
                             transform: Function[Integer, Integer]): Channel[Integer] do
      let out: Channel[Integer] := create Channel[Integer].with_capacity(16)
      let done_ref: Channel[Void] := done

      spawn do
        from until true do
          select
            when input.receive as value then
              out.send(transform(value))
            when done_ref.receive then
              out.close
              return
            timeout 100 then
              -- Check if input closed
              if input.is_closed and input.is_empty then
                out.close
                return
              end
          end
        end
      end

      result := out
    end
end
```

The done channel pattern is composable: each stage receives the done channel and propagates cancellation downstream by closing its output channel. A single `cancel()` call ripples through the entire pipeline.

Using `select` with a done channel is the idiomatic pattern. It reacts to whichever event arrives first: a new value to process, or a cancellation signal. This prevents workers from being stuck blocked on receives when cancellation is requested.

---

## 21.7 The Select Statement

Nex's `select` statement waits on multiple channel operations simultaneously and executes the first one that is ready. It is the primitive that makes complex concurrent coordination expressible without explicit polling.

```
-- Basic select: wait on two channels
select
  when ch1.receive as value then
    print("from ch1: " + value.to_string())
  when ch2.receive as value then
    print("from ch2: " + value.to_string())
end

-- Select with send
select
  when output.send(result) then
    print("sent result")
  when done.receive then
    print("cancelled")
    return
end

-- Select with timeout
select
  when data.receive as value then
    process(value)
  timeout 1000 then
    print("no data for 1 second")
end

-- Select with else: non-blocking
select
  when ch.receive as value then
    process(value)
  else
    -- Channel not ready: do something else
    do_background_work()
end
```

The `select` statement is to channels what `switch` is to values: it chooses among alternatives based on readiness rather than value. Its semantics:

1. Evaluate all channel expressions to get the set of operations
2. If multiple operations are ready simultaneously, choose one uniformly at random
3. If none are ready and there is an `else` clause, execute it (non-blocking)
4. If none are ready and there is no `else`, block until one becomes ready
5. If there is a `timeout`, unblock and execute the timeout clause after the specified duration

The random selection among ready operations prevents starvation: if two channels are frequently ready, neither is systematically ignored.

---

## 21.8 The Concurrent Pipeline: A Complete Example

Assembling all the patterns into a complete, realistic pipeline: a system that processes a stream of log entries, extracts metrics, and generates alerts.

```
class Log_Entry
  create
    make(timestamp: Integer64,
         level: String,
         message: String,
         service: String) do
      this.timestamp := timestamp
      this.level := level
      this.message := message
      this.service := service
    end

  feature
    timestamp: Integer64
    level: String
    message: String
    service: String
end

class Metric
  create
    make(service: String,
         error_count: Integer,
         window_start: Integer64) do
      this.service := service
      this.error_count := error_count
      this.window_start := window_start
    end

  feature
    service: String
    error_count: Integer
    window_start: Integer64
end

class Alert
  create
    make(service: String, message: String) do
      this.service := service
      this.message := message
    end

  feature
    service: String
    message: String
end

class Log_Processing_Pipeline
  create
    make(done: Channel[Void]) do
      this.done := done
    end

  feature
    done: Channel[Void]

    -- Stage 1: Parse raw log strings into LogEntry objects
    parse_stage(raw_logs: Channel[String]): Channel[Log_Entry] do
      let out: Channel[Log_Entry] := create Channel[Log_Entry].with_capacity(32)

      spawn do
        from until true do
          select
            when raw_logs.receive as line then
              let entry: ?Log_Entry := parse_log_line(line)
              if entry /= nil then
                out.send(entry)
              end
            when done.receive then
              out.close
              return
          end
        end
      end

      result := out
    end

    -- Stage 2: Fan out to per-service processors
    -- Returns map of service_name -> channel
    route_by_service(entries: Channel[Log_Entry],
                      services: Array[String]): Map[String, Channel[Log_Entry]] do
      let service_channels: Map[String, Channel[Log_Entry]] := {}

      across services as service do
        service_channels.put(service,
          create Channel[Log_Entry].with_capacity(32))
      end

      let default_ch: Channel[Log_Entry] :=
        create Channel[Log_Entry].with_capacity(32)
      service_channels.put("other", default_ch)

      spawn do
        from until true do
          select
            when entries.receive as entry then
              let target: ?Channel[Log_Entry] :=
                service_channels.get(entry.service)
              let ch: Channel[Log_Entry] :=
                when target /= nil target else default_ch end
              -- Non-blocking send: drop if service channel full
              ch.try_send(entry)
            when done.receive then
              -- Close all service channels
              across service_channels as name, ch do
                ch.close
              end
              return
          end
        end
      end

      result := service_channels
    end

    -- Stage 3: Aggregate errors per service per time window
    aggregate_errors(entries: Channel[Log_Entry],
                      service: String,
                      window_ms: Integer64): Channel[Metric] do
      let out: Channel[Metric] := create Channel[Metric].with_capacity(8)

      spawn do
        let error_count: Integer := 0
        let window_start: Integer64 := current_time_ms()

        from until true do
          select
            when entries.receive as entry then
              if entry.level = "ERROR" then
                error_count := error_count + 1
              end

              let now: Integer64 := current_time_ms()
              if now - window_start >= window_ms then
                -- Emit metric for completed window
                out.send(create Metric.make(
                  service, error_count, window_start))
                error_count := 0
                window_start := now
              end

            when done.receive then
              -- Emit final window
              if error_count > 0 then
                out.send(create Metric.make(
                  service, error_count, window_start))
              end
              out.close
              return

            timeout window_ms.to_integer() then
              -- Window elapsed with no entries: emit zero metric
              out.send(create Metric.make(
                service, error_count, window_start))
              error_count := 0
              window_start := current_time_ms()
          end
        end
      end

      result := out
    end

    -- Stage 4: Generate alerts when error rate exceeds threshold
    alert_stage(metrics: Channel[Metric],
                 threshold: Integer): Channel[Alert] do
      let out: Channel[Alert] := create Channel[Alert].with_capacity(8)

      spawn do
        let recent_errors: Map[String, Array[Integer]] := {}

        from until true do
          select
            when metrics.receive as metric then
              -- Keep rolling window of last 5 metric periods
              let history: ?Array[Integer] :=
                recent_errors.get(metric.service)
              let hist: Array[Integer] :=
                when history /= nil history else [] end
              hist.add(metric.error_count)
              if hist.length > 5 then
                hist.remove(0)
              end
              recent_errors.put(metric.service, hist)

              -- Alert if recent average exceeds threshold
              let total: Integer := 0
              across hist as count do total := total + count end
              let avg: Integer := total / hist.length

              if avg > threshold then
                out.send(create Alert.make(
                  metric.service,
                  "High error rate: " + avg.to_string() +
                  " errors/window in " + metric.service))
              end

            when done.receive then
              out.close
              return
          end
        end
      end

      result := out
    end

    -- Assemble the complete pipeline
    run(raw_logs: Channel[String],
        services: Array[String]): Channel[Alert] do
      -- Stage 1: parse
      let entries: Channel[Log_Entry] := parse_stage(raw_logs)

      -- Stage 2: route by service
      let service_channels: Map[String, Channel[Log_Entry]] :=
        route_by_service(entries, services)

      -- Stage 3 + 4: aggregate and alert per service
      let alert_channels: Array[Channel[Alert]] := []

      across services as service do
        let service_entries: Channel[Log_Entry] :=
          service_channels.get(service)
        let metrics: Channel[Metric] :=
          aggregate_errors(service_entries, service, 10000)
        let alerts: Channel[Alert] := alert_stage(metrics, 10)
        alert_channels.add(alerts)
      end

      -- Fan in all alert channels
      result := fan_in(alert_channels)
    end

    -- Parse a log line into a LogEntry
    parse_log_line(line: String): ?Log_Entry do
      -- Format: "TIMESTAMP LEVEL SERVICE: MESSAGE"
      let parts: Array[String] := line.split(" ")
      if parts.length < 4 then
        result := nil
        return
      end
      let timestamp: ?Integer64 := Integer64.parse(parts.get(0))
      if timestamp = nil then
        result := nil
        return
      end
      result := create Log_Entry.make(
        timestamp,
        parts.get(1),
        parts.slice(3, parts.length).join(" "),
        parts.get(2).trim_suffix(":"))
    end
end
```

Using the pipeline:

```
let done: Channel[Void] := create Channel[Void]
let pipeline: Log_Processing_Pipeline :=
  create Log_Processing_Pipeline.make(done)

let raw_logs: Channel[String] := create Channel[String].with_capacity(64)

let services: Array[String] := ["auth", "api", "database", "cache"]
let alerts: Channel[Alert] := pipeline.run(raw_logs, services)

-- Feed logs in (from file, network, etc.)
let log_feeder: Task := spawn do
  across read_log_file("/var/log/app.log") as line do
    raw_logs.send(line)
  end
  raw_logs.close
end

-- Consume alerts
let alert_handler: Task := spawn do
  from until true do
    let alert: ?Alert := receive_or_done(alerts)
    if alert = nil then break end
    notify_ops_team(alert)
  end
end

-- Run for 60 seconds then cancel
sleep(60000)
done.close

log_feeder.await
alert_handler.await
```

The pipeline is self-describing. Each stage is a function that takes input channels and returns output channels. The stages are connected by their channels. The `done` channel provides a uniform cancellation mechanism across all stages. Adding a new stage is just writing a new function and connecting it.

---

## 21.9 Rate Limiting with Channels

Channels are a natural primitive for rate limiting. A rate limiter restricts how many operations can proceed per unit time.

```
class Rate_Limiter
  create
    -- Token bucket: N tokens per second
    token_bucket(rate_per_second: Integer) do
      this.tokens := create Channel[Void].with_capacity(rate_per_second)
      this.rate := rate_per_second

      -- Fill bucket initially
      repeat rate_per_second do
        tokens.try_send()
      end

      -- Refill at rate_per_second tokens per second
      spawn do
        let interval_ms: Integer := 1000 / rate_per_second
        from until true do
          sleep(interval_ms)
          tokens.try_send()  -- non-blocking: drop if full
        end
      end
    end

  feature
    tokens: Channel[Void]
    rate: Integer

    -- Wait for a token (blocks if rate limit exceeded)
    acquire() do
      tokens.receive  -- blocks until token available
    end

    -- Try to acquire without blocking
    try_acquire(): Boolean do
      result := tokens.try_receive /= nil
    end

    -- Acquire with timeout
    acquire_timeout(timeout_ms: Integer): Boolean do
      select
        when tokens.receive then
          result := true
        timeout timeout_ms then
          result := false
      end
    end
end
```

Using the rate limiter in a pipeline:

```
-- Rate-limited API caller: max 100 calls per second
let limiter: Rate_Limiter := create Rate_Limiter.token_bucket(100)

function rate_limited_api_call(requests: Channel[String]): Channel[String] do
  let out: Channel[String] := create Channel[String].with_capacity(16)

  spawn do
    from until true do
      let req: ?String := receive_or_done(requests)
      if req = nil then
        out.close
        return
      end
      limiter.acquire()  -- wait for rate limit token
      out.send(make_api_call(req))
    end
  end

  result := out
end
```

The token bucket limiter uses a buffered channel as the token reservoir. The capacity of the channel equals the burst capacity. The background task adds tokens at the configured rate. Workers consume tokens before proceeding. When the channel is empty (all tokens consumed), workers block — naturally limiting throughput to the configured rate.

---

## 21.10 Shared State vs Message Passing: When to Use Each

The message passing model is powerful and eliminates entire classes of bugs. It is not universally better than shared state with synchronisation.

**Use message passing when:**

The problem is fundamentally about coordination between independent actors — each actor has its own state and communicates with others through well-defined messages. Network servers, event processing systems, worker pools, pipelines — these are natural fits for CSP.

The ownership of data is clear — one goroutine owns a piece of data at a time, and transfers ownership by sending it through a channel. This makes the ownership model explicit and prevents the common bugs of shared ownership.

Cancellation and timeout are important — select with a done channel provides clean, composable cancellation without the complexity of condition variables or manual flag polling.

**Use shared state when:**

Multiple threads need to access a shared data structure concurrently and independently — a cache, a counter, a leaderboard. These are not naturally modelled as message passing; they are truly shared.

The data structure is read much more than written — a persistent structure or a striped concurrent map serves better than a goroutine serialising all access.

Performance is critical and the synchronisation point is a single operation — an atomic increment or a CAS-based counter does not need the overhead of channels and goroutines.

**The practical rule:** Go's original concurrency guidance was "Do not communicate by sharing memory; share memory by communicating." This is wisdom, not dogma. For complex state that multiple actors legitimately share, shared state with appropriate synchronisation is the right model. For coordination between actors, message passing is cleaner. Use both where they fit.

---

## 21.11 Nex Channels and the Task System

Nex's native channel and task system, introduced in Chapter 2 of the Nex tutorial, makes the patterns in this chapter idiomatic. The syntax we have used throughout is the real Nex syntax — no imports, no external libraries.

```
-- Nex native: spawn a task
let t: Task[Integer] := spawn do
  result := compute_something()
end

-- Await the result
let value: Integer := t.await

-- Channel creation
let ch: Channel[String] := create Channel[String]
let buffered: Channel[String] := create Channel[String].with_capacity(32)

-- Send and receive
ch.send("hello")
let msg: String := ch.receive

-- Non-blocking
let sent: Boolean := ch.try_send("hello")
let received: ?String := ch.try_receive

-- Timed operations
let sent_timeout: Boolean := ch.send("hello", 1000)  -- 1 second timeout
let recv_timeout: ?String := ch.receive(1000)

-- Close
ch.close
let is_closed: Boolean := ch.is_closed

-- Select
select
  when ch1.receive as v then handle(v)
  when ch2.send(value) then confirm_sent()
  when done.receive then cleanup()
  timeout 500 then handle_timeout()
  else handle_no_activity()
end

-- Task groups
let results: Array[Integer] := await_all([task1, task2, task3])
let first: Integer := await_any([task1, task2, task3])
```

The `select` statement is particularly important. It is not syntactic sugar — it reflects a hardware-level or runtime-level primitive that can genuinely block on multiple channels simultaneously. Without `select`, implementing the done channel pattern requires polling, which wastes CPU and introduces latency. With `select`, the runtime efficiently multiplexes the blocked task over all its waiting channels.

---

## 21.12 The Actor Model: A Close Relative

CSP and the Actor model are closely related but distinct.

In CSP:
- Communication is through named channels
- Sender and receiver are decoupled — they share a channel, not identities
- Communication is synchronous in the pure model

In the Actor model (Erlang, Akka):
- Each actor has a unique address (mailbox)
- Communication is to an actor's mailbox (asynchronous, buffered)
- Actors are identified, not channels

Both models avoid shared mutable state. The difference is in how communication is structured: CSP through shared channels, actors through actor-addressed mailboxes.

In practice, the distinction blurs. Go's goroutines with channels are CSP. Erlang's processes with mailboxes are actors. Both avoid shared mutable state and model concurrent computation as independent entities communicating through messages. The theoretical differences matter for language designers; for practitioners, the patterns — pipelines, fan-out, fan-in, cancellation — apply equally to both.

Nex's model is CSP with some actor-like features: channels are first-class and can be passed as values (CSP), but tasks have identities and can be awaited individually (actors).

---

## 21.13 Where This Lives in the Wild

**Go** is the language that brought CSP to mainstream programming. Goroutines are lightweight tasks, channels are first-class values, and `select` is a core statement. The Go standard library and ecosystem are built around these primitives. Rob Pike's 2012 talk "Concurrency is not Parallelism" — distinguishing concurrent program structure from parallel execution — remains the best accessible explanation of the CSP model.

**Erlang** implements the Actor model at language level. Erlang processes are extremely lightweight (spawning millions is routine), communicate only through message passing, and crash independently — a crashed process does not affect others. Erlang's OTP (Open Telecom Platform) framework provides supervision trees: processes that monitor other processes and restart them on failure. This has made Erlang the language of choice for systems requiring extreme reliability — WhatsApp, Discord's backend, and Ericsson's telecom infrastructure all run Erlang.

**Rust's async/await** with the Tokio runtime uses channels extensively. Tokio provides `mpsc`, `oneshot`, `broadcast`, and `watch` channel types, each optimised for different patterns. The Rust ownership system enforces the CSP discipline at compile time: sending a value through a channel transfers ownership, preventing the sender from using it afterward.

**Unix pipes** are the original channel-based pipeline. `ls | grep "\.txt" | wc -l` is a three-stage pipeline connected by two channels (pipes). Each stage is a process with its own memory. They share nothing except the byte streams flowing through the pipes. Unix's designers built CSP into the operating system before Hoare formalised it.

**Apache Kafka** is a distributed channel. Producers send messages to topics; consumers receive from topics; the broker buffers and replicates messages. The Kafka model is CSP at datacenter scale: services communicate through Kafka topics rather than shared databases or direct API calls, achieving the same decoupling that channels provide within a single program.

---

## Summary

Message passing, formalised by Hoare's Communicating Sequential Processes in 1978, provides an alternative to shared-state concurrency. Instead of protecting shared mutable state with locks, processes own private state and communicate through channels. The result is concurrent programs that are easier to reason about, test, and cancel.

Nex implements CSP natively: tasks are lightweight concurrent processes, channels are typed conduits for message passing, and `select` blocks on multiple channel operations simultaneously.

The canonical patterns compose from three primitives. **Pipelines** chain stages connected by channels, each stage transforming its input and forwarding to the next, with clean shutdown propagation through channel closing. **Fan-out** distributes a single stream across multiple workers for parallel processing, with natural load balancing — fast workers take more items. **Fan-in** merges multiple streams into one, collecting results from parallel workers. **Cancellation** is implemented through a done channel: closing it signals all listening workers to stop, propagating cleanly through the pipeline.

The `select` statement makes these patterns composable: any stage can simultaneously wait for new input, check for cancellation, and timeout — without polling or complex state machines. Rate limiting, backpressure, and timeouts all emerge naturally from the channel model.

Channels and shared state are complementary tools, not competitors. Independent actors with well-defined communication belong in channels. Shared data structures with concurrent readers and writers belong in the concurrent maps and atomic structures of the previous chapters. The practitioner's skill is recognising which model fits the problem.

This concludes Part V, and with it, the technical content of the book. The appendices that follow provide reference material: the complete Nex language reference, a complexity and memory cheat sheet covering every structure in the book, a guide to the production systems where these structures live, and an annotated bibliography for going deeper.

The structures in this book — B-trees, LSM trees, skip lists, suffix arrays, Huffman coders, introsort, lock-free queues, persistent HAMTs, and concurrent pipelines — are not academic exercises. They are in the databases you query, the editors you write in, the compilers that build your code, the filesystems that store your data, and the servers that answer your requests. Understanding them is not just knowing how they work. It is knowing why they work, why they were designed as they were, and when to reach for each one.

That understanding is what this book was for.
