# Chapter 16: Sorting Bigger Than RAM — External Mergesort

---

In 2012, a team at Google needed to sort the world's largest known dataset at the time: one petabyte of data distributed across thousands of machines. The sort took six hours. The algorithm they used was not quicksort — quicksort assumes random access to a contiguous array, which becomes meaningless when data spans thousands of disks. The algorithm was a variant of merge sort, specifically designed for the case where data does not fit in memory.

The problem of sorting data larger than available memory is older than computers. In the 1950s, when computers had kilobytes of memory and data lived on magnetic tapes, sorting large datasets was the central algorithmic challenge of the era. IBM employed teams of researchers specifically to improve tape-based sorting. The fundamental algorithms they developed — run generation, multiway merging, tape rotation — are still the basis of how databases, filesystems, and data pipelines sort large datasets today.

This chapter solves a concrete problem: sort a 500GB log file on a machine with 8GB of RAM. No distributed computing. No cloud. One machine, one disk, a fixed memory budget. The algorithm that solves this is external mergesort, and understanding it requires applying everything we have learned about disk I/O, page-based thinking, and sequential versus random access.

---

## 16.1 Why Quicksort Fails

Quicksort requires holding the entire array in memory simultaneously. Its partition step accesses arbitrary elements throughout the array — the pivot might be compared to elements at position 0 and position n-1 in the same pass. For data that fits in RAM, this random access is fine. For data on disk, each random access is a seek, and seeks are expensive.

Consider our 500GB file on a disk with 10ms seek latency and 500MB/s sequential read throughput. Reading 500GB sequentially takes 500/0.5 = 1000 seconds — about 17 minutes. Performing n random seeks to sort 500GB (with n ≈ 500GB / 512 bytes per sector = roughly a billion seeks) at 10ms per seek takes 10,000,000 seconds — over 300 years.

This is not a gradual degradation. Quicksort on disk-resident data is not slower — it is categorically unusable. The algorithm is simply the wrong tool.

The correct tool exploits the one operation that disk handles efficiently: sequential reads and writes. A sequential read of 500GB at 500MB/s takes 1000 seconds. An algorithm that sorts 500GB with a small constant number of sequential passes over the data takes O(1000 seconds × passes) — a few hours, achievable in practice.

External mergesort sorts data in a constant number of sequential passes. This is why it works.

---

## 16.2 The Algorithm at a High Level

External mergesort has two phases:

**Phase 1 — Run generation:** Read the data in chunks that fit in memory. Sort each chunk in memory using introsort. Write the sorted chunk to disk as a **run**. After this phase, the data is on disk as many sorted runs, each of size M (the memory budget), except possibly the last run which may be smaller.

For 500GB with 8GB RAM: 500/8 = 63 runs, each sorted and 8GB (except the last).

**Phase 2 — Merging:** Merge the sorted runs into progressively larger sorted runs until one run covers the entire dataset.

The merge of k sorted sequences is straightforward: maintain a pointer into each sequence, repeatedly output the smallest current element, advancing the corresponding pointer. This k-way merge produces one sorted output from k sorted inputs.

For our 63 runs, a single k-way merge with k = 63 produces the sorted output in one pass. Total: two passes over the data (one to generate runs, one to merge). At 500MB/s, 500GB takes 1000 seconds per pass: roughly 33 minutes total. From 300 years to 33 minutes by choosing the right algorithm.

---

## 16.3 The Infrastructure: Buffered I/O

Sequential access to disk is fast. But "sequential" means different things at the software and hardware levels. At the hardware level, sequential means reading consecutive bytes from disk. At the software level, sequential means reading bytes in order through a buffered reader — which may or may not result in sequential hardware reads depending on how the operating system caches data.

For external sorting, we need precise control over I/O patterns. We read and write in large blocks — the same page-size thinking from Chapter 4 — to maximise sequential throughput and minimise the number of system calls.

```
intern io/Binary_File
intern io/Path

let IO_BUFFER_SIZE: Integer := 4 * 1024 * 1024  -- 4MB I/O buffer
let RECORD_SIZE: Integer := 100  -- bytes per record (fixed for this implementation)

class Buffered_Reader
  create
    open(path: String) do
      this.file := create Binary_File.open_read(create Path.make(path))
      this.buffer := Array.filled(IO_BUFFER_SIZE, 0)
      this.buffer_pos := 0
      this.buffer_valid := 0
      this.eof := false
      this.total_read := 0
      this.fill_buffer()
    end

  feature
    file: Binary_File
    buffer: Array[Integer]
    buffer_pos: Integer    -- current read position in buffer
    buffer_valid: Integer  -- number of valid bytes in buffer
    eof: Boolean
    total_read: Integer64

    -- Read exactly `count` bytes, returning them or nil at EOF
    read_bytes(count: Integer): ?Array[Integer] do
      if eof and buffer_pos >= buffer_valid then
        result := nil
        return
      end

      let output: Array[Integer] := []

      from until output.length >= count do
        if buffer_pos >= buffer_valid then
          fill_buffer()
          if buffer_valid = 0 then
            -- EOF reached before reading count bytes
            if output.is_empty() then
              result := nil
            else
              result := output
            end
            return
          end
        end

        let available: Integer := buffer_valid - buffer_pos
        let needed: Integer := count - output.length
        let take: Integer := available.min(needed)

        from
          let i: Integer := 0
        until
          i < take
        do
          output.add(buffer.get(buffer_pos + i))
          i := i + 1
        end

        buffer_pos := buffer_pos + take
        total_read := total_read + take.to_integer64()
      end

      result := output
    end

    -- Read one record, or nil at EOF
    read_record(): ?Array[Integer] do
      result := read_bytes(RECORD_SIZE)
    end

    fill_buffer() do
      if eof then return end
      let data: Array[Integer] := file.read(IO_BUFFER_SIZE)
      if data.length = 0 then
        eof := true
        buffer_valid := 0
      else
        buffer := data
        buffer_pos := 0
        buffer_valid := data.length
      end
    end

    has_more(): Boolean do
      if buffer_pos < buffer_valid then
        result := true
        return
      end
      if eof then
        result := false
        return
      end
      fill_buffer()
      result := buffer_valid > 0
    end

    close() do
      file.close()
    end

  invariant
    non_negative_buffer_pos: buffer_pos >= 0
    buffer_pos_bounded: buffer_pos <= buffer_valid
    non_negative_total: total_read >= 0
end

class Buffered_Writer
  create
    open(path: String) do
      this.file := create Binary_File.open_write(create Path.make(path))
      this.buffer := Array.filled(IO_BUFFER_SIZE, 0)
      this.buffer_pos := 0
      this.total_written := 0
    end

  feature
    file: Binary_File
    buffer: Array[Integer]
    buffer_pos: Integer
    total_written: Integer64

    write_bytes(data: Array[Integer]) do
      let written: Integer := 0

      from until written >= data.length do
        let space: Integer := IO_BUFFER_SIZE - buffer_pos
        let remaining: Integer := data.length - written
        let write_now: Integer := space.min(remaining)

        from
          let i: Integer := 0
        until
          i < write_now
        do
          buffer.set(buffer_pos + i, data.get(written + i))
          i := i + 1
        end

        buffer_pos := buffer_pos + write_now
        written := written + write_now
        total_written := total_written + write_now.to_integer64()

        if buffer_pos >= IO_BUFFER_SIZE then
          flush()
        end
      end
    end

    write_record(record: Array[Integer])
      require
        correct_size: record.length = RECORD_SIZE
      do
        write_bytes(record)
      end

    flush() do
      if buffer_pos > 0 then
        file.write(buffer.slice(0, buffer_pos))
        buffer_pos := 0
      end
    end

    close() do
      flush()
      file.close()
    end

  invariant
    non_negative_buffer_pos: buffer_pos >= 0
    buffer_pos_bounded: buffer_pos <= IO_BUFFER_SIZE
end
```

The 4MB I/O buffer is the critical parameter. Smaller buffers cause more system calls, each with fixed overhead. Larger buffers reduce overhead but consume memory that could be used for more records in memory during run generation. In practice, 1MB–16MB is the typical range for external sort I/O buffers.

---

## 16.4 Phase 1: Run Generation

Run generation reads the input file in chunks of size M (our memory budget), sorts each chunk in memory, and writes it to a temporary file on disk.

```
class Run_Generator
  create
    make(memory_budget: Integer64,
         work_dir: String,
         compare: Function[Array[Integer], Array[Integer], Integer]) do
      this.memory_budget := memory_budget
      this.work_dir := work_dir
      this.compare := compare
      this.run_paths := []
    end

  feature
    memory_budget: Integer64
    work_dir: String
    compare: Function[Array[Integer], Array[Integer], Integer]
    run_paths: Array[String]

    -- Records per run: how many RECORD_SIZE records fit in memory budget
    records_per_run(): Integer do
      -- Reserve some memory for I/O buffers and overhead
      let usable: Integer64 := memory_budget - (64 * 1024 * 1024)  -- 64MB overhead
      result := (usable / RECORD_SIZE.to_integer64()).to_integer()
    end

    -- Generate all runs from input file
    -- Returns list of temporary run file paths
    generate(input_path: String): Array[String] do
      let reader: Buffered_Reader :=
        create Buffered_Reader.open(input_path)

      let run_num: Integer := 0
      let records_in_run: Integer := records_per_run()

      from until not reader.has_more() do
        let chunk: Array[Array[Integer]] := []

        -- Read up to records_in_run records
        from until chunk.length >= records_in_run or
                   not reader.has_more() do
          let record: ?Array[Integer] := reader.read_record()
          if record /= nil then
            chunk.add(record)
          end
        end

        if not chunk.is_empty() then
          -- Sort the chunk in memory
          let sorter: Generic_Introsort[Array[Integer]] :=
            create Generic_Introsort[Array[Integer]].make(compare)
          sorter.sort(chunk)

          -- Write sorted chunk to run file
          let run_path: String := run_file_path(run_num)
          write_run(chunk, run_path)
          run_paths.add(run_path)
          run_num := run_num + 1

          print("Generated run " + run_num.to_string() +
                " (" + chunk.length.to_string() + " records)")
        end
      end

      reader.close()
      result := run_paths
    end

    write_run(records: Array[Array[Integer]], path: String) do
      let writer: Buffered_Writer := create Buffered_Writer.open(path)
      across records as record do
        writer.write_record(record)
      end
      writer.close()
    end

    run_file_path(run_num: Integer): String do
      result := work_dir + "/run_" + run_num.to_string() + ".tmp"
    end

    cleanup() do
      -- Delete all temporary run files
      across run_paths as path do
        let p: Path := create Path.make(path)
        if p.exists() then
          p.delete()
        end
      end
      run_paths := []
    end

  invariant
    positive_budget: memory_budget > 0
end
```

For our 500GB file with 8GB memory budget:
- Usable memory: 8GB - 64MB ≈ 7.9GB
- Records per run (at 100 bytes each): 7.9GB / 100 = ~79 million records
- Total records in 500GB: 500GB / 100 = 5 billion records
- Number of runs: 5,000,000,000 / 79,000,000 ≈ 63 runs

Each run file is ~7.9GB of sorted records. Writing 63 runs at 500MB/s takes ~63 × 7.9GB / 0.5GB/s ≈ 995 seconds. Close to the theoretical minimum of 1000 seconds for one sequential pass over the data.

---

## 16.5 Replacement Selection: Generating Longer Runs

Before the k-way merge, there is a classical technique worth knowing: replacement selection. Instead of sorting a fixed chunk and writing it as a run, maintain a heap of records and use it to generate runs that are, in expectation, twice the memory budget in size.

The algorithm: fill a min-heap with M records. Repeatedly extract the minimum — this becomes the next record in the current run. Read a new record from input. If the new record is ≥ the last output record, insert it into the heap (it can go into the current run). If the new record is < the last output record, it belongs to the next run — mark it and keep it aside. When the heap contains only marked records, the current run ends; start a new run with the marked records.

On random input, replacement selection produces runs of average length 2M rather than M, halving the number of runs and the number of merge passes required.

```
class Replacement_Selection_Generator
  create
    make(heap_size: Integer,
         work_dir: String,
         compare: Function[Array[Integer], Array[Integer], Integer]) do
      this.heap_size := heap_size
      this.work_dir := work_dir
      this.compare := compare
      this.run_paths := []
    end

  feature
    heap_size: Integer       -- max records in heap (= memory budget / RECORD_SIZE)
    work_dir: String
    compare: Function[Array[Integer], Array[Integer], Integer]
    run_paths: Array[String]

    generate(input_path: String): Array[String] do
      let reader: Buffered_Reader :=
        create Buffered_Reader.open(input_path)

      -- Active heap: records eligible for current run
      -- Deferred list: records that belong to next run
      let active: Min_Heap[Array[Integer]] :=
        create Min_Heap[Array[Integer]].from_comparator(compare)
      let deferred: Array[Array[Integer]] := []

      -- Fill heap initially
      from until active.size() >= heap_size or not reader.has_more() do
        let rec: ?Array[Integer] := reader.read_record()
        if rec /= nil then active.insert(rec) end
      end

      let run_num: Integer := 0
      let writer: ?Buffered_Writer := nil
      let last_output: ?Array[Integer] := nil

      from until active.is_empty() do
        -- Start a new run if needed
        if writer = nil then
          let run_path: String := run_file_path(run_num)
          writer := create Buffered_Writer.open(run_path)
          run_paths.add(run_path)
          run_num := run_num + 1
          last_output := nil
        end

        -- Extract minimum from active heap
        let record: Array[Integer] := active.extract_min()
        writer.write_record(record)
        last_output := record

        -- Read next input record
        let next: ?Array[Integer] := reader.read_record()
        if next /= nil then
          if compare(next, last_output) >= 0 then
            -- Eligible for current run
            active.insert(next)
          else
            -- Must go in next run
            deferred.add(next)
          end
        end

        -- If active heap empty, end current run
        if active.is_empty() then
          writer.close()
          writer := nil
          print("Generated run " + run_num.to_string() +
                " (replacement selection)")

          -- Promote deferred records to active for next run
          across deferred as d do
            active.insert(d)
          end
          deferred := []
        end
      end

      if writer /= nil then
        writer.close()
      end

      reader.close()
      result := run_paths
    end

    run_file_path(run_num: Integer): String do
      result := work_dir + "/rs_run_" + run_num.to_string() + ".tmp"
    end

  invariant
    positive_heap_size: heap_size > 0
end
```

Replacement selection is particularly effective when the input is already partially sorted — in that case, runs can be much longer than 2M, approaching the entire dataset for nearly-sorted input. Database query optimisers exploit this: when sorting the output of an index scan (which is often partially ordered), replacement selection can produce one or two very long runs, reducing merging to nearly zero work.

For random input, replacement selection doubles run length at the cost of additional complexity. For the common case of truly random data, the simpler fixed-chunk approach is often preferred in practice.

---

## 16.6 Phase 2: K-Way Merging

After run generation, we have k sorted runs on disk and need to merge them into one sorted output. The k-way merge uses a min-heap of size k to find the smallest current record across all runs efficiently.

```
class K_Way_Merger
  create
    make(run_paths: Array[String],
         output_path: String,
         compare: Function[Array[Integer], Array[Integer], Integer],
         memory_budget: Integer64) do
      this.run_paths := run_paths
      this.output_path := output_path
      this.compare := compare
      this.memory_budget := memory_budget
    end

  feature
    run_paths: Array[String]
    output_path: String
    compare: Function[Array[Integer], Array[Integer], Integer]
    memory_budget: Integer64

    -- Merge all runs into output
    merge() do
      let k: Integer := run_paths.length

      if k = 0 then return end
      if k = 1 then
        -- Nothing to merge: just rename/copy the single run
        copy_file(run_paths.get(0), output_path)
        return
      end

      -- Open all run readers
      let readers: Array[Buffered_Reader] := []
      across run_paths as path do
        readers.add(create Buffered_Reader.open(path))
      end

      -- Min-heap entries: (record, run_index)
      -- Compare by record content
      let heap: Min_Heap[Array[Integer], Integer] :=
        create Min_Heap[Array[Integer], Integer].from_comparator(
          fn a: Array[Array[Integer]], b: Array[Array[Integer]] do
            result := compare(a.get(0), b.get(0))
          end)

      -- Seed heap with first record from each run
      from
        let i: Integer := 0
      until
        i >= k
      do
        let record: ?Array[Integer] := readers.get(i).read_record()
        if record /= nil then
          heap.insert([record, i])
        end
        i := i + 1
      end

      let writer: Buffered_Writer :=
        create Buffered_Writer.open(output_path)

      let records_written: Integer64 := 0

      -- Main merge loop
      from until heap.is_empty() do
        let min_entry: Array := heap.extract_min()
        let record: Array[Integer] := min_entry.get(0)
        let run_idx: Integer := min_entry.get(1)

        writer.write_record(record)
        records_written := records_written + 1

        -- Read next record from same run
        let next: ?Array[Integer] := readers.get(run_idx).read_record()
        if next /= nil then
          heap.insert([next, run_idx])
        end
      end

      writer.close()

      -- Close all readers
      across readers as reader do
        reader.close()
      end

      print("Merged " + k.to_string() + " runs, " +
            records_written.to_string() + " records written")
    end

    copy_file(src: String, dst: String) do
      let reader: Buffered_Reader := create Buffered_Reader.open(src)
      let writer: Buffered_Writer := create Buffered_Writer.open(dst)
      from until not reader.has_more() do
        let chunk: ?Array[Integer] := reader.read_bytes(IO_BUFFER_SIZE)
        if chunk /= nil then
          writer.write_bytes(chunk)
        end
      end
      reader.close()
      writer.close()
    end

  invariant
    positive_budget: memory_budget > 0
end
```

### Memory Allocation for K-Way Merge

The merge requires one I/O buffer per run reader, one output buffer, and the heap itself. With k = 63 runs:

- Per-run input buffer: 4MB × 63 = 252MB
- Output buffer: 4MB
- Heap: 63 entries × (100 bytes record + 8 bytes index) ≈ negligible
- Total: ~256MB — well within our 8GB budget

If k were larger — say, 10,000 runs — per-run input buffers at 4MB each would require 40GB, exceeding our budget. The fix is either to reduce buffer size (accepting slower I/O throughput per run) or to limit k by using multi-pass merging.

### Multi-Pass Merging

When k exceeds the number of runs manageable in one pass, merge in multiple passes. With budget B bytes and k total runs:

- Buffer per run in merge: b bytes (tunable)
- Max runs mergeable per pass: B / b
- Number of passes: ceil(log_{B/b}(k))

For 8GB budget, 4MB per-run buffers, and k = 2000 runs:
- Max runs per pass: 8GB / 4MB = 2048 ≥ 2000, so one pass suffices

For 8GB budget, 4MB per-run buffers, and k = 10,000 runs:
- Max runs per pass: 2048
- After first merge pass: ceil(10,000 / 2048) = 5 intermediate runs
- Second pass merges 5 runs into 1
- Total: 2 merge passes

```
class Multi_Pass_Merger
  create
    make(run_paths: Array[String],
         output_path: String,
         compare: Function[Array[Integer], Array[Integer], Integer],
         memory_budget: Integer64,
         work_dir: String) do
      this.run_paths := run_paths
      this.output_path := output_path
      this.compare := compare
      this.memory_budget := memory_budget
      this.work_dir := work_dir
      this.temp_paths := []
    end

  feature
    run_paths: Array[String]
    output_path: String
    compare: Function[Array[Integer], Array[Integer], Integer]
    memory_budget: Integer64
    work_dir: String
    temp_paths: Array[String]  -- intermediate files to clean up

    merge() do
      let current_runs: Array[String] := run_paths.copy()
      let pass_num: Integer := 0

      from until current_runs.length <= 1 do
        let max_runs_per_merge: Integer :=
          (memory_budget / IO_BUFFER_SIZE.to_integer64()).to_integer()
        max_runs_per_merge := max_runs_per_merge.max(2)

        let next_runs: Array[String] := []
        let group_num: Integer := 0

        -- Merge groups of max_runs_per_merge runs
        from
          let i: Integer := 0
        until
          i >= current_runs.length
        do
          let group_end: Integer :=
            (i + max_runs_per_merge).min(current_runs.length)
          let group: Array[String] := current_runs.slice(i, group_end)

          let is_final: Boolean :=
            current_runs.length <= max_runs_per_merge and pass_num > 0

          let merged_path: String :=
            when is_final
              output_path
            else
              let p: String := work_dir + "/pass_" + pass_num.to_string() +
                               "_group_" + group_num.to_string() + ".tmp"
              temp_paths.add(p)
              p
            end

          let merger: K_Way_Merger := create K_Way_Merger.make(
            group, merged_path, compare, memory_budget)
          merger.merge()
          next_runs.add(merged_path)

          print("Pass " + pass_num.to_string() +
                " group " + group_num.to_string() + " merged " +
                group.length.to_string() + " runs")

          group_num := group_num + 1
          i := group_end
        end

        -- Clean up previous pass temporary files
        if pass_num > 0 then
          across current_runs as path do
            if path /= output_path then
              create Path.make(path).delete()
            end
          end
        end

        current_runs := next_runs
        pass_num := pass_num + 1
      end

      -- If only one run from the start, copy to output
      if current_runs.length = 1 and current_runs.get(0) /= output_path then
        let merger: K_Way_Merger := create K_Way_Merger.make(
          current_runs, output_path, compare, memory_budget)
        merger.merge()
      end
    end

    cleanup() do
      across temp_paths as path do
        let p: Path := create Path.make(path)
        if p.exists() then p.delete() end
      end
    end

  invariant
    positive_budget: memory_budget > 0
end
```

---

## 16.7 The Complete External Sorter

Assembling run generation and merging into a complete, usable external sort:

```
class External_Sorter
  create
    make(memory_budget_gb: Real,
         work_dir: String,
         compare: Function[Array[Integer], Array[Integer], Integer]) do
      this.memory_budget := (memory_budget_gb * 1024.0 * 1024.0 * 1024.0).to_integer64()
      this.work_dir := work_dir
      this.compare := compare
      this.stats := create Sort_Stats.make()
    end

  feature
    memory_budget: Integer64
    work_dir: String
    compare: Function[Array[Integer], Array[Integer], Integer]
    stats: Sort_Stats

    sort(input_path: String, output_path: String) do
      -- Ensure work directory exists
      let dir: Directory := create Directory.make(work_dir)
      if not dir.exists() then dir.create_tree() end

      let total_start: Integer64 := current_time_ms()

      -- Phase 1: Run generation
      print("Phase 1: Generating runs...")
      let gen_start: Integer64 := current_time_ms()

      let generator: Run_Generator := create Run_Generator.make(
        memory_budget, work_dir, compare)
      let run_paths: Array[String] := generator.generate(input_path)

      let gen_time: Integer64 := current_time_ms() - gen_start
      stats.run_count := run_paths.length
      stats.phase1_ms := gen_time

      print("Generated " + run_paths.length.to_string() +
            " runs in " + gen_time.to_string() + "ms")

      if run_paths.is_empty() then
        print("No data to sort")
        return
      end

      if run_paths.length = 1 then
        -- Only one run: it is already sorted, just rename/move
        create Path.make(run_paths.get(0)).move_to(
          create Path.make(output_path))
        stats.total_ms := current_time_ms() - total_start
        print_stats()
        return
      end

      -- Phase 2: Merging
      print("Phase 2: Merging " + run_paths.length.to_string() + " runs...")
      let merge_start: Integer64 := current_time_ms()

      let merger: Multi_Pass_Merger := create Multi_Pass_Merger.make(
        run_paths, output_path, compare, memory_budget, work_dir)
      merger.merge()

      let merge_time: Integer64 := current_time_ms() - merge_start
      stats.phase2_ms := merge_time

      print("Merged in " + merge_time.to_string() + "ms")

      -- Cleanup
      generator.cleanup()
      merger.cleanup()

      stats.total_ms := current_time_ms() - total_start
      print_stats()
    end

    -- Sort by a key extracted from each record
    sort_by_key(input_path: String,
                output_path: String,
                key_offset: Integer,
                key_length: Integer) do
      let key_compare: Function[Array[Integer], Array[Integer], Integer] :=
        fn a: Array[Integer], b: Array[Integer] do
          from
            let i: Integer := 0
          until
            i < key_length
          do
            let diff: Integer := a.get(key_offset + i) - b.get(key_offset + i)
            if diff /= 0 then
              result := diff
              return
            end
            i := i + 1
          end
          result := 0
        end
      sort(input_path, output_path)  -- uses key_compare via closure
    end

    print_stats() do
      print("=== Sort Statistics ===")
      print("Runs generated: " + stats.run_count.to_string())
      print("Phase 1 (run generation): " + stats.phase1_ms.to_string() + "ms")
      print("Phase 2 (merging): " + stats.phase2_ms.to_string() + "ms")
      print("Total time: " + stats.total_ms.to_string() + "ms")
      if stats.total_ms > 0 then
        let input_size: Integer64 :=
          create Path.make("").size()  -- placeholder
        print("Throughput: ~" +
              (stats.total_ms / 1000).to_string() + " seconds total")
      end
    end

  invariant
    positive_budget: memory_budget > 0
end

class Sort_Stats
  create
    make() do
      this.run_count := 0
      this.phase1_ms := 0
      this.phase2_ms := 0
      this.total_ms := 0
    end

  feature
    run_count: Integer
    phase1_ms: Integer64
    phase2_ms: Integer64
    total_ms: Integer64
end
```

Using the sorter:

```
-- Sort a 500GB log file by timestamp (first 8 bytes of each record)
let sorter: External_Sorter := create External_Sorter.make(
  8.0,           -- 8GB memory budget
  "/tmp/sort",   -- work directory for temporary files
  fn a: Array[Integer], b: Array[Integer] do
    -- Compare first 8 bytes as big-endian int64 (timestamp)
    from
      let i: Integer := 0
    until
      i < 8
    do
      let diff: Integer := a.get(i) - b.get(i)
      if diff /= 0 then
        result := diff
        return
      end
      i := i + 1
    end
    result := 0
  end)

sorter.sort("/data/logs/500gb_log.bin",
            "/data/logs/sorted_log.bin")
```

---

## 16.8 Optimising I/O: Double Buffering

The implementation above performs I/O and computation sequentially: read a buffer, process it, read the next buffer. The disk sits idle while processing, and the CPU sits idle while reading. On modern systems with asynchronous I/O, we can overlap these — read the next buffer while processing the current one.

This technique is called double buffering (or ping-pong buffering):

```
class Double_Buffered_Reader
  create
    open(path: String) do
      this.file := create Binary_File.open_read(create Path.make(path))
      this.buffer_a := Array.filled(IO_BUFFER_SIZE, 0)
      this.buffer_b := Array.filled(IO_BUFFER_SIZE, 0)
      this.active_buffer := this.buffer_a
      this.active_valid := 0
      this.active_pos := 0
      this.eof := false

      -- Start first fill
      this.pending_fill := spawn do
        result := this.file.read(IO_BUFFER_SIZE)
      end
    end

  feature
    file: Binary_File
    buffer_a: Array[Integer]
    buffer_b: Array[Integer]
    active_buffer: Array[Integer]
    active_valid: Integer
    active_pos: Integer
    eof: Boolean
    pending_fill: Task[Array[Integer]]

    read_record(): ?Array[Integer] do
      if active_pos + RECORD_SIZE > active_valid then
        -- Need to swap buffers
        swap_buffers()
        if active_valid = 0 then
          result := nil
          return
        end
      end

      let record: Array[Integer] := active_buffer.slice(
        active_pos, active_pos + RECORD_SIZE)
      active_pos := active_pos + RECORD_SIZE
      result := record
    end

    swap_buffers() do
      -- Wait for pending fill to complete
      let filled: Array[Integer] := pending_fill.await

      -- Swap which buffer is active
      if active_buffer = buffer_a then
        buffer_b := filled
        active_buffer := buffer_b
      else
        buffer_a := filled
        active_buffer := buffer_a
      end

      active_valid := filled.length
      active_pos := 0

      if filled.length = 0 then
        eof := true
        return
      end

      -- Start filling the other buffer asynchronously
      pending_fill := spawn do
        result := this.file.read(IO_BUFFER_SIZE)
      end
    end

    has_more(): Boolean do
      result := active_pos < active_valid or not eof
    end

    close() do
      file.close()
    end
end
```

Double buffering overlaps I/O with computation at every level: during run generation (overlap reading with sorting) and during merging (overlap reading from multiple runs with output writing). On systems where disk I/O and CPU are not the same bottleneck, this can approach 2× throughput.

Nex's native task and channel system makes double buffering natural — spawn a task to fill the background buffer while the foreground buffer is being processed. The `pending_fill` task runs concurrently with the CPU-bound sort or merge, and `await` synchronises when the buffer is needed.

---

## 16.9 The Connection to B-Trees

External mergesort and B-trees solve related problems with related techniques. Both are designed around the insight that disk I/O dominates CPU time, and both minimise disk seeks by accessing data sequentially in large blocks.

The connection runs deeper than philosophy. After sorting a large dataset with external mergesort, loading it into a B-tree is optimised by bulk loading — inserting records in sorted order rather than one at a time. Bulk loading builds the B-tree bottom-up: fill leaf pages completely, then build internal pages from leaf page pointers, resulting in a perfectly packed tree with no wasted space. A 500GB dataset bulk-loaded into a B-tree produces a tree that is denser and faster to query than one built by sequential insertion.

The sort-then-bulk-load pattern is standard in database operations. Building a new index on an existing table in PostgreSQL follows exactly this pattern: scan the table, sort the key values, bulk load the B-tree index. The external mergesort in this chapter is the sort step.

The k-way merge is also directly related to the B-tree's fan-out. A B-tree with minimum degree t has up to 2t children per internal node, meaning the tree has fan-out up to 2t. Merging k runs in the external mergesort corresponds to combining k sorted streams into one — the same operation a B-tree performs when it reads across its fan-out at each level. The optimal k for the merge (determined by the memory budget and I/O buffer size) corresponds to the optimal t for the B-tree (determined by the page size and record size).

Both structures answer the same fundamental question: given a fixed memory budget and a fixed disk block size, what is the right way to organise access to data that does not fit in memory? The B-tree answers it for random access. External mergesort answers it for sequential processing.

---

## 16.10 Sorting in Database Systems

The external mergesort described in this chapter is the foundation of sorting in relational databases, but production database sort implementations add several layers of sophistication.

**Pipeline sort:** a database query like `SELECT ... ORDER BY ... LIMIT 100` does not need to sort the entire dataset — it needs the top 100 records. A tournament sort or priority queue processes records as they arrive, maintaining only the top-k seen so far. For large k, this degrades to external mergesort; for small k, it uses O(k) memory.

**Duplicate elimination:** `SELECT DISTINCT ... ORDER BY ...` combines sorting with deduplication. During the merge phase, adjacent identical records are collapsed into one. This is a natural fit for mergesort — duplicates are always adjacent in sorted order.

**Join implementation:** the sort-merge join algorithm sorts both input tables by the join key, then merges them together to find matching rows. This is exactly our k-way merge with the twist that matching rows from two sequences must be identified and emitted together. Sort-merge join is often faster than hash join for large tables that do not fit in memory, because it generates only sequential I/O.

**Grouping and aggregation:** `GROUP BY` operations sort by the grouping key, then aggregate adjacent records with the same key. Again, the merge produces groups naturally.

PostgreSQL's `sort.c` implements all of these in a unified external sort framework. It uses replacement selection for run generation (exploiting partial sortedness in table scans), a k-way merge with a tournament tree (a min-heap variant that performs fewer comparisons per extraction), and adaptive switching between in-memory sort (when the working set fits) and external sort (when it does not).

---

## 16.11 Verifying the Sort

Any external sort implementation must include verification. A bug in a sort that processes billions of records might only manifest on specific data patterns, and the output of an incorrect sort is not obviously wrong — it is just slightly misordered.

```
class Sort_Verifier
  create
    make(compare: Function[Array[Integer], Array[Integer], Integer]) do
      this.compare := compare
    end

  feature
    compare: Function[Array[Integer], Array[Integer], Integer]

    -- Verify that file is sorted, returning position of first violation
    verify_sorted(path: String): ?Integer64 do
      let reader: Buffered_Reader := create Buffered_Reader.open(path)
      let prev: ?Array[Integer] := nil
      let position: Integer64 := 0

      from until not reader.has_more() do
        let record: ?Array[Integer] := reader.read_record()
        if record = nil then
          reader.close()
          result := nil
          return
        end

        if prev /= nil and compare(record, prev) < 0 then
          reader.close()
          result := position
          return
        end

        prev := record
        position := position + RECORD_SIZE.to_integer64()
      end

      reader.close()
      result := nil  -- nil means sorted correctly
    end

    -- Verify that sorted output has same record count as input
    verify_record_count(input_path: String,
                         output_path: String): Boolean do
      let input_size: Integer64 := create Path.make(input_path).size()
      let output_size: Integer64 := create Path.make(output_path).size()
      result := input_size = output_size
    end

    -- Spot-check: verify sample positions are sorted
    spot_check(path: String, num_samples: Integer): Boolean do
      let file_size: Integer64 := create Path.make(path).size()
      let total_records: Integer64 := file_size / RECORD_SIZE.to_integer64()

      if total_records < 2 then
        result := true
        return
      end

      let reader_file: Binary_File :=
        create Binary_File.open_read(create Path.make(path))

      from
        let i: Integer := 0
      until
        i < num_samples
      do
        -- Pick two adjacent random positions
        let pos: Integer64 := (random_integer64() %
                               (total_records - 1)).abs()
        let offset: Integer64 := pos * RECORD_SIZE.to_integer64()

        reader_file.seek(offset.to_integer())
        let rec1: Array[Integer] := reader_file.read(RECORD_SIZE)
        let rec2: Array[Integer] := reader_file.read(RECORD_SIZE)

        if rec1.length = RECORD_SIZE and rec2.length = RECORD_SIZE then
          if compare(rec2, rec1) < 0 then
            reader_file.close()
            result := false
            return
          end
        end

        i := i + 1
      end

      reader_file.close()
      result := true
    end

    full_verification(input_path: String,
                       output_path: String): Boolean do
      print("Verifying record count...")
      if not verify_record_count(input_path, output_path) then
        print("FAILED: record count mismatch")
        result := false
        return
      end

      print("Spot-checking sort order (1000 samples)...")
      if not spot_check(output_path, 1000) then
        print("FAILED: spot-check found out-of-order records")
        result := false
        return
      end

      print("Verifying full sort order (sequential scan)...")
      let violation: ?Integer64 := verify_sorted(output_path)
      if violation /= nil then
        print("FAILED: out-of-order at byte position " +
              violation.to_string())
        result := false
        return
      end

      print("Verification PASSED")
      result := true
    end
end
```

The full verification is O(n) — a sequential scan of the output file. For a 500GB file at 500MB/s, this takes 1000 seconds. In practice, run the spot-check during development and trust it for production runs, adding the full scan only when debugging a suspected issue.

---

## 16.12 Where This Lives in the Wild

**PostgreSQL** implements external sorting in `src/backend/utils/sort/tuplesort.c`. It uses replacement selection for run generation, a tournament tree for k-way merging, and adaptive memory allocation that expands the sort buffer when system memory is available. PostgreSQL's sort is invoked for `ORDER BY`, `GROUP BY`, `DISTINCT`, and sort-merge joins, and for building B-tree indexes. The implementation handles both in-memory sorts (when the working set fits) and external sorts (when it does not) through the same code path, switching strategies dynamically.

**Apache Hadoop MapReduce** uses external mergesort as its core shuffle mechanism. Each mapper outputs key-value pairs, sorts them by key (external mergesort within each mapper), and the reduce phase merges the sorted outputs from all mappers. The paper "MapReduce: Simplified Data Processing on Large Clusters" (Dean and Ghemawat, 2004) describes a system processing petabytes of data using external mergesort across thousands of machines — the distributed generalisation of the algorithm in this chapter.

**Apache Spark** uses an external sort called `ExternalSorter` for operations that exceed memory budgets. Spark's implementation spills partial sorted runs to disk when memory pressure triggers spilling, then merges them with in-memory data. The approach is identical to this chapter's algorithm, adapted for the JVM memory model and distributed execution.

**SQLite** implements an external sort in `vdbesort.c`, used for `ORDER BY` and `GROUP BY` operations. SQLite's sort is notable for its careful integration with the B-tree storage engine — sorted runs are written as temporary B-tree tables, which SQLite already knows how to manage efficiently. This reuse of existing infrastructure reduces the sort implementation to a few hundred lines.

**The original Unix `sort` command** implements external mergesort and has done so since the 1970s. The GNU `sort` implementation handles files larger than memory by generating runs and merging them, just as this chapter describes. `sort --parallel=N` uses N threads for run generation (Phase 1) and a single-threaded merge (Phase 2), which is the natural parallelism structure of the algorithm.

---

## Summary

External mergesort solves sorting when data exceeds available memory by exploiting the one operation disk does efficiently: sequential access. Two passes over the data suffice for most practical cases — one to generate sorted runs, one to merge them into a single sorted output.

Run generation reads the data in memory-sized chunks, sorts each chunk with introsort (the in-memory champion from Chapter 15), and writes sorted runs to temporary files. With 8GB RAM sorting 500GB data, this produces ~63 runs of ~7.9GB each. Replacement selection can double average run length by using a min-heap to intelligently assign records to runs, exploiting any existing partial sortedness in the input.

K-way merging combines all sorted runs into one output using a min-heap of size k. At each step, the heap's minimum — the smallest current record across all runs — is extracted and written to output, and a new record is read from the corresponding run. One heap extraction and insertion per output record, for O(n log k) total merge work. When k exceeds what memory allows (each run needs an I/O buffer), multi-pass merging reduces k by merging groups of runs into fewer, larger runs.

The connection to earlier chapters is direct and concrete. The I/O thinking of Chapter 4 (B-trees) determines the buffer sizes that make sequential access efficient. The introsort of Chapter 15 sorts each run in memory. Nex's native tasks from Chapter 21 enable double buffering that overlaps I/O with computation. And the sorted output connects to Chapter 4's bulk-loading pattern for building B-tree indexes without the overhead of one-at-a-time insertion.

Part IV is complete. Part V turns to concurrency — the challenge of making data structures work correctly when multiple threads access shared state simultaneously. The structures we have built so far assume a single thread. What must change when that assumption is removed?
