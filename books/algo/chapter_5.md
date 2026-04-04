# Chapter 5: The Write-Heavy Problem — LSM Trees

---

The key-value store from Chapter 4 works. Open the file, insert a million records, query any of them in six disk reads, close the file. The B-tree does exactly what it promises.

Now run a different workload. Instead of a million records inserted at a measured pace and then queried, imagine a system that receives fifty thousand writes per second, continuously, all day. A financial exchange recording every trade. A telemetry pipeline ingesting sensor readings from ten thousand devices. A web server logging every request. These systems do not read very much — the write stream is the point. The data is written now and analysed later, in bulk.

Run this workload against the B-tree from Chapter 4 and watch what happens. Each write finds the correct leaf page — six disk reads — then modifies it — one disk write — then potentially triggers a split — two more disk writes. If the working set of leaf pages does not fit in memory, each write also evicts a dirty page, which must be flushed before the new page is loaded. A write that logically modifies one key may cause four, six, or eight physical page writes: the leaf, its parent after a split, the new sibling page, the updated root. This is write amplification, and at fifty thousand writes per second, it saturates disk bandwidth within seconds.

The B-tree's fundamental problem for write-heavy workloads is that it modifies data in place. Finding the right location requires random reads. Updating it requires random writes. Random I/O — seeking to arbitrary positions on disk — is the most expensive operation a storage system can perform, on both spinning disks and SSDs. SSDs suffer less from seek latency than spinning disks but are still dramatically faster for sequential writes than random writes, and they wear out faster under random write patterns.

The question this chapter asks is: what if we never wrote randomly? What if every write to disk was sequential, appending to the end of a file, which is the fastest possible disk operation? And what if we deferred all the expensive reorganisation to a background process that runs when the system is less busy?

The answer is the Log-Structured Merge-tree, invented by Patrick O'Neil and colleagues in 1996 and now the dominant storage engine design for write-heavy workloads. LevelDB, RocksDB, Cassandra, HBase, InfluxDB, and CockroachDB are all built on this idea. Understanding it means understanding the engine inside half the databases running in production today.

---

## 5.1 The Core Insight

An LSM tree is built on three observations about I/O performance that, combined, suggest a completely different architecture.

**Observation one: sequential writes are dramatically faster than random writes.** On a spinning disk, a sequential write avoids seek time entirely — the write head stays where it is. On an SSD, sequential writes allow the flash translation layer to write full erase blocks efficiently, reducing wear and improving throughput. The ratio of sequential to random write throughput is typically 10:1 on SSDs and 100:1 or more on spinning disks.

**Observation two: reads can tolerate some additional overhead if writes are fast enough.** In a write-heavy workload, writes outnumber reads by a large factor. If we can make writes ten times faster by accepting reads that are twice as slow, the overall system throughput improves substantially. This is a workload-driven tradeoff, not a universal improvement.

**Observation three: sorting data is cheap if you do it in memory first.** Keeping recent writes in a sorted in-memory structure allows them to be flushed to disk already sorted, which makes subsequent merging — the reorganisation step — efficient.

Combining these observations: accept writes into a sorted in-memory buffer. When the buffer is full, flush it to disk as a sorted, immutable file. Periodically merge these files in the background to keep their number manageable. Reads must search the in-memory buffer and all the on-disk files — more work than a B-tree — but writes are entirely sequential and extremely fast.

This is the LSM tree architecture. It trades read performance for write performance, explicitly and deliberately, and for write-heavy workloads the trade is overwhelmingly worthwhile.

---

## 5.2 Architecture Overview

An LSM tree has three main components.

**The MemTable** is an in-memory sorted data structure — typically a skip list or red-black tree — that accepts all incoming writes. It is the first destination for every put and delete operation. Reads check the MemTable first, since it contains the most recent data.

**SSTables** (Sorted String Tables) are immutable, sorted files on disk. When the MemTable exceeds a size threshold, it is flushed to disk as a new SSTable and a fresh MemTable is started. Once written, an SSTable is never modified. This is the key to sequential writes: flushing a MemTable is one sequential write from beginning of file to end.

**Levels** organise SSTables into a hierarchy. Level 0 holds the most recently flushed SSTables. Higher levels hold larger, older SSTables produced by compaction — the background process that merges SSTables to limit their total number and reclaim space from deleted or overwritten entries.

A write goes: MemTable → (when full) flush to Level 0 SSTable → (when too many Level 0 files) compact into Level 1 → (when Level 1 too large) compact into Level 2 → and so on.

A read goes: check MemTable → check Level 0 SSTables (all of them, since they may have overlapping key ranges) → check Level 1 (one SSTable, since keys do not overlap within a level) → and so on.

Before writing any code, let us understand each component in depth.

---

## 5.3 The Write-Ahead Log

The MemTable is in memory. If the process crashes, its contents are lost. We need a way to recover the MemTable after a crash without sacrificing write performance.

The solution is the write-ahead log (WAL). Before any write is applied to the MemTable, it is appended to the WAL — a sequential log file on disk. Appending is cheap: it is a sequential write of a small record. After a crash, recovery replays the WAL to reconstruct the MemTable.

The WAL and MemTable together give us durability without random I/O. Every write touches exactly two locations: the sequential WAL and the in-memory MemTable. Neither requires a random seek.

When the MemTable is flushed to an SSTable, the corresponding WAL segment is deleted — its contents are now safely on disk in the SSTable. Recovery needs only replay WAL records not yet reflected in an SSTable.

```
intern io/Path
intern io/Binary_File
intern io/Text_File

-- WAL record format:
-- [type: 1 byte][key_len: 4 bytes][key: key_len bytes]
-- [value_len: 4 bytes][value: value_len bytes]
-- type: 1 = put, 2 = delete

let WAL_PUT: Integer := 1
let WAL_DELETE: Integer := 2

class WAL
  create
    open(path: String) do
      this.path := create Path.make(path)
      this.file := create Binary_File.open_append(this.path)
    end

  feature
    path: Path
    file: Binary_File

    append_put(key: String, value: String) do
      let record: Array[Integer] := []
      record.add(WAL_PUT)
      write_length_prefixed(record, key)
      write_length_prefixed(record, value)
      file.write(record)
    end

    append_delete(key: String) do
      let record: Array[Integer] := []
      record.add(WAL_DELETE)
      write_length_prefixed(record, key)
      -- No value for deletes
      file.write(record)
    end

    close() do
      file.close()
    end

    -- Replay WAL into a fresh MemTable for recovery
    replay(): Array[Array[String]] do
      let ops: Array[Array[String]] := []
      let reader: Binary_File := create Binary_File.open_read(path)

      from until reader.read(1).length = 0 do
        -- This simplified replay reads full file
        -- In production, each record is checksummed
      end

      reader.close()
      result := ops
    end

  invariant
    file_open: file /= nil
end

function write_length_prefixed(record: Array[Integer], s: String) do
  let bytes: Array[Integer] := s.to_bytes()
  int_to_bytes(bytes.length, record, record.length)
  across bytes as b do
    record.add(b)
  end
end
```

The WAL is the simplest component in the LSM tree and one of the most important. It is also the component that most clearly illustrates the LSM philosophy: write sequentially first, organise later.

---

## 5.4 The MemTable

The MemTable is a sorted in-memory data structure. We use the skip list from Chapter 3, since it handles concurrent access better than an AVL tree — in a production system, multiple threads may write to the MemTable simultaneously. For this implementation, we use it single-threaded but note where concurrency would enter.

The MemTable must track not just key-value pairs but also deletions. In an LSM tree, deleting a key does not remove it from existing SSTables — those are immutable. Instead, a deletion is represented as a special entry called a tombstone. When a tombstone is encountered during a read or compaction, it signals that the key has been deleted and any older versions should be ignored.

```
let TOMBSTONE: String := "\x00DELETED\x00"  -- sentinel value for deletions

class MemTable
  create
    empty() do
      this.data := create Skip_List[String, String].empty()
      this.size_bytes := 0
      this.threshold := 4 * 1024 * 1024  -- 4MB default
    end

    with_threshold(threshold: Integer) do
      this.data := create Skip_List[String, String].empty()
      this.size_bytes := 0
      this.threshold := threshold
    end

  feature
    data: Skip_List[String, String]
    size_bytes: Integer
    threshold: Integer

    put(key: String, value: String) do
      let old: ?String := data.get(key)
      if old /= nil then
        size_bytes := size_bytes - old.length
      end
      data.put(key, value)
      size_bytes := size_bytes + key.length + value.length
    end

    delete(key: String) do
      put(key, TOMBSTONE)
    end

    get(key: String): ?String do
      let value: ?String := data.get(key)
      if value = TOMBSTONE then
        result := nil  -- deleted
      else
        result := value
      end
    end

    is_full(): Boolean do
      result := size_bytes >= threshold
    end

    -- Return all entries in sorted order for flushing
    entries(): Array[String, String] do
      let sorted_keys: Array[String] := data.in_order()
      let result_arr: Array[String, String] := []
      across sorted_keys as key do
        result_arr.add([key, data.get(key)])
      end
      result := result_arr
    end

    size(): Integer do
      result := data.size()
    end

  invariant
    non_negative_size: size_bytes >= 0
    threshold_positive: threshold > 0
end
```

The tombstone value is a sentinel. Any value equal to TOMBSTONE is treated as a deletion marker. This is a simplification — a production system would use a separate boolean field or a dedicated entry type — but it is sufficient for our implementation and makes the concept clear.

---

## 5.5 The SSTable

An SSTable is an immutable, sorted file written once and never modified. It has two sections: a data section containing key-value pairs in sorted order, and an index section containing a sparse index of keys and their byte offsets within the data section.

The sparse index does not index every key — that would be too large. Instead, it indexes every Nth key, where N is chosen so the index fits comfortably in memory. To find a key, binary search the index to find the nearest indexed key below the target, then scan forward from that position in the data section until finding or passing the target.

The file layout:

```
[data section]
  [entry_0]: key_len(4) key value_len(4) value is_tombstone(1)
  [entry_1]: ...
  ...
[index section]
  [index_entry_0]: key_len(4) key offset(8)
  [index_entry_1]: ...
  ...
[footer]
  index_offset(8)     -- byte offset of index section start
  index_entry_count(4)
  entry_count(4)
  bloom_filter_data   -- variable length
  bloom_filter_size(4)
```

The footer is always at a known position relative to the end of the file, making it easy to read without knowing the file size in advance.

```
class SSTable_Writer
  create
    open(path: String) do
      this.path := create Path.make(path)
      this.file := create Binary_File.open_write(this.path)
      this.index_entries := []
      this.entry_count := 0
      this.current_offset := 0
      this.index_interval := 16  -- index every 16th key
    end

  feature
    path: Path
    file: Binary_File
    index_entries: Array[String, Integer64]
    entry_count: Integer
    current_offset: Integer
    index_interval: Integer

    write_entry(key: String, value: String, is_tombstone: Boolean) do
      -- Optionally add to sparse index
      if entry_count % index_interval = 0 then
        index_entries.add([key, current_offset])
      end

      -- Write entry to data section
      let key_bytes: Array[Integer] := key.to_bytes()
      let value_bytes: Array[Integer] := value.to_bytes()

      let record: Array[Integer] := []
      int_to_bytes(key_bytes.length, record, 0)
      across key_bytes as b do record.add(b) end
      int_to_bytes(value_bytes.length, record, record.length)
      across value_bytes as b do record.add(b) end
      record.add(when is_tombstone 1 else 0 end)

      file.write(record)
      current_offset := current_offset + record.length
      entry_count := entry_count + 1
    end

    -- Call after all entries written
    finish(bloom: Bloom_Filter) do
      let index_offset: Integer := current_offset

      -- Write index section
      across index_entries as entry do
        let key_bytes: Array[Integer] := entry.get(0).to_bytes()
        let record: Array[Integer] := []
        int_to_bytes(key_bytes.length, record, 0)
        across key_bytes as b do record.add(b) end
        int64_to_bytes(entry.get(1), record, record.length)
        file.write(record)
      end

      -- Write footer
      let footer: Array[Integer] := []
      int64_to_bytes(index_offset, footer, 0)
      int_to_bytes(index_entries.length, footer, 8)
      int_to_bytes(entry_count, footer, 12)

      let bloom_bytes: Array[Integer] := bloom.to_bytes()
      int_to_bytes(bloom_bytes.length, footer, 16)
      across bloom_bytes as b do footer.add(b) end

      file.write(footer)
      file.close()
    end
end
```

Reading an SSTable requires loading the footer, loading the index into memory, and then performing binary search + scan for any given key:

```
class SSTable_Reader
  create
    open(path: String) do
      this.path := create Path.make(path)
      this.file := create Binary_File.open_read(this.path)
      this.load_footer()
      this.load_index()
      this.load_bloom()
    end

  feature
    path: Path
    file: Binary_File
    index: Array[String, Integer64]
    bloom: Bloom_Filter
    entry_count: Integer
    index_offset: Integer64

    get(key: String): ?String do
      -- Fast path: bloom filter eliminates most misses
      if not bloom.might_contain(key) then
        result := nil
        return
      end

      -- Binary search the index for the nearest key
      let pos: Integer64 := index_position_for(key)

      -- Scan forward from that position
      file.seek(pos.to_integer())
      result := scan_for(key)
    end

    index_position_for(key: String): Integer64 do
      -- Binary search index for largest indexed key <= target
      let low: Integer := 0
      let high: Integer := index.length - 1
      let best_offset: Integer64 := 0

      from until low > high do
        let mid: Integer := (low + high) / 2
        let idx_key: String := index.get(mid).get(0)
        let idx_offset: Integer64 := index.get(mid).get(1)

        if idx_key <= key then
          best_offset := idx_offset
          low := mid + 1
        else
          high := mid - 1
        end
      end

      result := best_offset
    end

    scan_for(key: String): ?String do
      -- Read entries sequentially until finding key or passing it
      from until file.position() >= index_offset.to_integer() do
        let entry: ?Array[String, Boolean] := read_next_entry()
        if entry = nil then
          result := nil
          return
        end

        let entry_key: String := entry.get(0).get(0)
        let entry_value: String := entry.get(0).get(1)
        let entry_tombstone: Boolean := entry.get(1)

        if entry_key = key then
          if entry_tombstone then
            result := nil  -- deleted
          else
            result := entry_value
          end
          return
        elseif entry_key > key then
          result := nil  -- passed the key, not present
          return
        end
      end
      result := nil
    end

    read_next_entry(): ?Array[String, Boolean] do
      let key_len_bytes: Array[Integer] := file.read(4)
      if key_len_bytes.length < 4 then
        result := nil
        return
      end
      let key_len: Integer := bytes_to_int(key_len_bytes, 0)
      let key: String := String.from_bytes(file.read(key_len))
      let value_len: Integer := bytes_to_int(file.read(4), 0)
      let value: String := String.from_bytes(file.read(value_len))
      let tombstone_byte: Array[Integer] := file.read(1)
      let is_tombstone: Boolean := tombstone_byte.get(0) = 1
      result := [[key, value], is_tombstone]
    end

    -- Return all entries in sorted order (for compaction)
    all_entries(): Array[String, String, Boolean] do
      let entries: Array[String, String, Boolean] := []
      file.seek(0)
      from until file.position() >= index_offset.to_integer() do
        let entry: ?Array[String, Boolean] := read_next_entry()
        if entry /= nil then
          entries.add([entry.get(0).get(0),
                       entry.get(0).get(1),
                       entry.get(1)])
        end
      end
      result := entries
    end

    close() do
      file.close()
    end

    load_footer() do
      -- Read footer from end of file
      -- Implementation reads index_offset, counts, bloom filter size
      -- then positions file for index loading
    end

    load_index() do
      -- Read index section into memory as Array[String, Integer64]
    end

    load_bloom() do
      -- Read bloom filter bytes and reconstruct Bloom_Filter
    end
end
```

The bloom filter deserves special attention. It is the component that makes read performance tolerable in an LSM tree with many SSTables. Without it, every read must check every SSTable — even for keys that do not exist. With it, a non-existent key is eliminated by the bloom filter in microseconds, without any disk I/O. The false positive rate determines how often we perform an unnecessary disk read — a rate of 1% means one in a hundred bloom filter checks that say "maybe present" are wrong, but 99 out of a hundred negative lookups are eliminated entirely.

We will use the Bloom_Filter class from Chapter 6 here. The bloom filter for each SSTable is built during the flush and stored in the SSTable footer. When the SSTable is opened, the bloom filter is loaded into memory along with the sparse index. These two data structures — small enough to fit in memory for all SSTables simultaneously — are what make LSM reads fast enough to be practical.

---

## 5.6 Compaction

Without compaction, the number of SSTables grows without bound. Every MemTable flush creates a new SSTable. Reads must check all of them. Performance degrades with each flush.

Compaction is the background process that merges SSTables together, reducing their count and reclaiming space from deleted or overwritten entries. It is the most complex part of the LSM tree and the part where real systems diverge most significantly in their design choices.

The compaction strategy we implement is levelled compaction, the approach used by LevelDB and RocksDB.

**Level 0** holds SSTables flushed directly from the MemTable. These SSTables may have overlapping key ranges — two Level 0 SSTables may both contain keys in the range "aardvark" to "zebra". Level 0 SSTables are checked individually during reads.

**Levels 1 and above** hold SSTables with non-overlapping key ranges within the level. All keys "aardvark" to "mango" are in one SSTable; "mango" to "zebra" in another. This means reads at Level 1+ need to check at most one SSTable per level — binary search the level's key ranges to find the relevant SSTable, then check only that one.

**Size limits** grow exponentially per level. Level 1 might hold 10MB of data. Level 2 holds 100MB. Level 3 holds 1GB. Level 4 holds 10GB. When a level exceeds its size limit, compaction picks one SSTable from that level, finds all overlapping SSTables in the next level, merges them all together into new SSTables at the next level, and deletes the originals.

The merge itself is a k-way merge — the same algorithm used in external mergesort, which Chapter 16 covers in depth. Since each SSTable is sorted, merging k SSTables into one sorted SSTable requires only a priority queue of size k, processing one entry at a time in sorted order.

```
class Compactor
  create
    make(lsm: LSM_Tree) do
      this.lsm := lsm
    end

  feature
    lsm: LSM_Tree

    -- Compact Level 0 into Level 1 when Level 0 has too many files
    compact_level_0() do
      let level0_files: Array[SSTable_Reader] := lsm.levels.get(0)
      if level0_files.length < lsm.level0_compaction_threshold then
        return
      end

      let level1_files: Array[SSTable_Reader] := lsm.levels.get(1)

      -- Find Level 1 SSTables that overlap with any Level 0 SSTable
      let overlapping: Array[SSTable_Reader] := find_overlapping(
        level0_files, level1_files)

      -- Merge all Level 0 files + overlapping Level 1 files
      let all_to_merge: Array[SSTable_Reader] := []
      across level0_files as f do all_to_merge.add(f) end
      across overlapping as f do all_to_merge.add(f) end

      let new_tables: Array[String] := merge_into_level(
        all_to_merge, 1, lsm.level_max_size(1))

      -- Update level metadata: remove merged files, add new ones
      lsm.replace_files(0, level0_files, [])
      lsm.replace_files(1, overlapping, new_tables)
    end

    -- Compact a given level into the next
    compact_level(level: Integer)
      require
        valid_level: level >= 1
      do
        let files: Array[SSTable_Reader] := lsm.levels.get(level)
        if lsm.level_size(level) < lsm.level_max_size(level) then
          return
        end

        -- Pick one SSTable to compact (round-robin or by key range)
        let victim: SSTable_Reader := pick_compaction_victim(files)

        -- Find overlapping SSTables in next level
        let next_level: Array[SSTable_Reader] := lsm.levels.get(level + 1)
        let overlapping: Array[SSTable_Reader] :=
          find_overlapping([victim], next_level)

        let to_merge: Array[SSTable_Reader] := [victim]
        across overlapping as f do to_merge.add(f) end

        let new_tables: Array[String] := merge_into_level(
          to_merge, level + 1, lsm.level_max_size(level + 1))

        lsm.replace_files(level, [victim], [])
        lsm.replace_files(level + 1, overlapping, new_tables)
      end

    -- K-way merge of multiple SSTables into new SSTables at target level
    merge_into_level(sources: Array[SSTable_Reader],
                     target_level: Integer,
                     max_file_size: Integer): Array[String] do
      let output_paths: Array[String] := []
      let heap: Min_Heap[String, String, Integer] :=
        create Min_Heap[String, String, Integer].empty()

      -- Seed the heap with the first entry from each source
      from
        let i: Integer := 0
      until
        i >= sources.length
      do
        let source: SSTable_Reader := sources.get(i)
        let first: ?Array[String, String, Boolean] :=
          source.next_entry()
        if first /= nil then
          heap.insert([first.get(0), first.get(1), i, first.get(2)])
        end
        i := i + 1
      end

      -- Track current writer
      let current_path: String := lsm.new_sstable_path(target_level)
      let writer: SSTable_Writer := create SSTable_Writer.open(current_path)
      let bloom: Bloom_Filter := create Bloom_Filter.with_capacity(
        100000, 0.01)
      let current_size: Integer := 0
      let last_key: ?String := nil

      from until heap.is_empty() do
        let min_entry: Array := heap.extract_min()
        let key: String := min_entry.get(0)
        let value: String := min_entry.get(1)
        let source_index: Integer := min_entry.get(2)
        let is_tombstone: Boolean := min_entry.get(3)

        -- Skip duplicate keys — keep only the most recent version
        -- (sources are ordered newest-first, so first occurrence wins)
        if last_key /= key then
          -- Skip tombstones at the highest level (data is truly gone)
          let skip: Boolean := is_tombstone and
                               target_level >= lsm.max_level - 1

          if not skip then
            bloom.add(key)
            writer.write_entry(key, value, is_tombstone)
            current_size := current_size + key.length + value.length
          end

          last_key := key
        end

        -- Fetch next entry from the same source
        let next: ?Array[String, String, Boolean] :=
          sources.get(source_index).next_entry()
        if next /= nil then
          heap.insert([next.get(0), next.get(1),
                       source_index, next.get(2)])
        end

        -- Rotate to a new output SSTable if current one is too large
        if current_size >= max_file_size then
          writer.finish(bloom)
          output_paths.add(current_path)
          current_path := lsm.new_sstable_path(target_level)
          writer := create SSTable_Writer.open(current_path)
          bloom := create Bloom_Filter.with_capacity(100000, 0.01)
          current_size := 0
        end
      end

      if current_size > 0 then
        writer.finish(bloom)
        output_paths.add(current_path)
      end

      result := output_paths
    end

    find_overlapping(sources: Array[SSTable_Reader],
                     candidates: Array[SSTable_Reader]):
                     Array[SSTable_Reader] do
      -- Find the overall key range of sources
      let min_key: String := find_min_key(sources)
      let max_key: String := find_max_key(sources)

      -- Return candidates whose key range overlaps [min_key, max_key]
      let overlapping: Array[SSTable_Reader] := []
      across candidates as candidate do
        if candidate.min_key() <= max_key and
           candidate.max_key() >= min_key then
          overlapping.add(candidate)
        end
      end
      result := overlapping
    end

    pick_compaction_victim(files: Array[SSTable_Reader]): SSTable_Reader do
      -- Simple strategy: pick the largest file
      -- Production systems use more sophisticated policies
      let largest: SSTable_Reader := files.get(0)
      across files as f do
        if f.size() > largest.size() then
          largest := f
        end
      end
      result := largest
    end
end
```

The tombstone handling during compaction is subtle and important. A tombstone must survive compaction until it reaches the highest level — only then is it safe to discard. If we discard a tombstone during intermediate compaction, an older version of the key in a lower level would become visible again, resurrecting data the user deleted. Only when the tombstone has reached the bottom level — where no older versions can exist below it — can it be safely removed.

---

## 5.7 Reads: The Price of Sequential Writes

A read in an LSM tree follows a specific search order that reflects data recency:

1. Check the active MemTable
2. Check any immutable MemTable being flushed (there may be one)
3. Check all Level 0 SSTables, newest first
4. Check Level 1, then Level 2, and so on — at most one SSTable per level for levels above 0

The search stops as soon as the key is found — either a live value or a tombstone. The newest version always wins.

```
class LSM_Tree
  create
    open(directory: String) do
      this.dir := directory
      this.memtable := create MemTable.empty()
      this.immutable_memtable := nil
      this.levels := []  -- Array of Arrays of SSTable_Reader
      this.wal := create WAL.open(directory + "/wal.log")
      this.level0_compaction_threshold := 4
      this.max_level := 7
      this.compactor := create Compactor.make(this)

      -- Initialise level arrays
      from
        let i: Integer := 0
      until
        i >= max_level
      do
        levels.add([])
        i := i + 1
      end

      -- Load existing SSTables from directory
      load_existing_sstables()

      -- Recover MemTable from WAL
      recover_from_wal()
    end

  feature
    dir: String
    memtable: MemTable
    immutable_memtable: ?MemTable
    levels: Array[Array[SSTable_Reader]]
    wal: WAL
    level0_compaction_threshold: Integer
    max_level: Integer
    compactor: Compactor

    get(key: String): ?String do
      -- 1. Check active MemTable
      let v: ?String := memtable.get(key)
      if v /= nil then
        result := v
        return
      end

      -- 2. Check immutable MemTable if present
      if immutable_memtable /= nil then
        v := immutable_memtable.get(key)
        if v /= nil then
          result := v
          return
        end
      end

      -- 3. Check Level 0 SSTables newest-first
      let level0: Array[SSTable_Reader] := levels.get(0)
      from
        let i: Integer := level0.length - 1
      until
        i < 0
      do
        v := level0.get(i).get(key)
        if v /= nil then
          result := v
          return
        end
        i := i - 1
      end

      -- 4. Check higher levels (at most one SSTable per level)
      from
        let level: Integer := 1
      until
        level >= max_level
      do
        let sstable: ?SSTable_Reader := find_sstable_for_key(level, key)
        if sstable /= nil then
          v := sstable.get(key)
          if v /= nil then
            result := v
            return
          end
        end
        level := level + 1
      end

      result := nil
    end

    put(key: String, value: String)
      ensure
        key_present: get(key) = value
      do
        wal.append_put(key, value)
        memtable.put(key, value)
        maybe_flush()
      end

    delete(key: String)
      ensure
        key_absent: get(key) = nil
      do
        wal.append_delete(key)
        memtable.delete(key)
        maybe_flush()
      end

    maybe_flush() do
      if memtable.is_full() then
        flush_memtable()
        maybe_compact()
      end
    end

    flush_memtable() do
      -- Move current MemTable to immutable
      immutable_memtable := memtable
      memtable := create MemTable.empty()

      -- Flush immutable MemTable to Level 0 SSTable
      let path: String := new_sstable_path(0)
      let writer: SSTable_Writer := create SSTable_Writer.open(path)
      let bloom: Bloom_Filter := create Bloom_Filter.with_capacity(
        immutable_memtable.size(), 0.01)

      across immutable_memtable.entries() as entry do
        let key: String := entry.get(0)
        let value: String := entry.get(1)
        let is_tombstone: Boolean := value = TOMBSTONE
        bloom.add(key)
        writer.write_entry(key, value, is_tombstone)
      end

      writer.finish(bloom)

      -- Add to Level 0
      levels.get(0).add(create SSTable_Reader.open(path))

      -- Clear immutable MemTable and truncate WAL
      immutable_memtable := nil
      rotate_wal()
    end

    maybe_compact() do
      -- Level 0: compact when too many files
      if levels.get(0).length >= level0_compaction_threshold then
        compactor.compact_level_0()
      end

      -- Higher levels: compact when too large
      from
        let level: Integer := 1
      until
        level < max_level - 1
      do
        if level_size(level) >= level_max_size(level) then
          compactor.compact_level(level)
        end
        level := level + 1
      end
    end

    find_sstable_for_key(level: Integer,
                          key: String): ?SSTable_Reader do
      -- Binary search by min/max key range
      -- Within a level above 0, key ranges do not overlap
      let files: Array[SSTable_Reader] := levels.get(level)
      across files as f do
        if f.min_key() <= key and key <= f.max_key() then
          result := f
          return
        end
      end
      result := nil
    end

    level_max_size(level: Integer): Integer do
      -- Level 1 = 10MB, Level 2 = 100MB, etc.
      let base: Integer := 10 * 1024 * 1024
      let multiplier: Integer := 1
      repeat level - 1 do
        multiplier := multiplier * 10
      end
      result := base * multiplier
    end

    level_size(level: Integer): Integer do
      let total: Integer := 0
      across levels.get(level) as f do
        total := total + f.size()
      end
      result := total
    end

    new_sstable_path(level: Integer): String do
      result := dir + "/L" + level.to_string() + "_" +
                current_timestamp().to_string() + ".sst"
    end

    rotate_wal() do
      wal.close()
      -- Archive old WAL
      let old_wal: Path := create Path.make(dir + "/wal.log")
      old_wal.move_to(create Path.make(
        dir + "/wal_" + current_timestamp().to_string() + ".old"))
      wal := create WAL.open(dir + "/wal.log")
    end

    recover_from_wal() do
      -- Replay WAL entries into MemTable
      let ops: Array[Array[String]] := wal.replay()
      across ops as op do
        if op.get(0) = "put" then
          memtable.put(op.get(1), op.get(2))
        elseif op.get(0) = "delete" then
          memtable.delete(op.get(1))
        end
      end
    end

    load_existing_sstables() do
      -- Scan directory for SSTable files, load them into appropriate levels
      let dir_path: Directory := create Directory.make(dir)
      if not dir_path.exists() then
        dir_path.create_tree()
        return
      end
      across dir_path.files() as f do
        let name: String := f.name()
        if name.ends_with(".sst") then
          let level: Integer := parse_level_from_filename(name)
          levels.get(level).add(create SSTable_Reader.open(f.to_string()))
        end
      end
    end

    close() do
      wal.close()
      across levels as level do
        across level as f do
          f.close()
        end
      end
    end

  invariant
    valid_max_level: max_level > 0
    levels_initialised: levels.length = max_level
end
```

---

## 5.8 The Write Path, End to End

Let us trace a single write through the complete system to make the flow concrete.

You call `store.put("user:1042", "alice@example.com")`.

**Step 1:** The WAL appends a record to `wal.log`. This is a sequential write of roughly 30 bytes. The file system buffers it and flushes it to disk within milliseconds. Duration: roughly 0.1ms on an SSD.

**Step 2:** The MemTable's skip list inserts the key-value pair. This is a pure in-memory operation. Duration: roughly 1 microsecond.

**Step 3:** The MemTable checks whether it has exceeded its threshold (4MB). If not, the write is complete. Total time: under 1ms.

If the MemTable is full, the flush begins. The current MemTable becomes immutable. A new empty MemTable accepts future writes immediately — no writes are blocked. In the background:

**Step 4:** The immutable MemTable's entries, already sorted by the skip list, are written sequentially to a new SSTable file. For a 4MB MemTable, this is a 4MB sequential write. Duration: roughly 4ms on an SSD.

**Step 5:** The bloom filter and sparse index are written to the SSTable footer. The SSTable reader is opened and added to Level 0.

**Step 6:** If Level 0 now has four or more SSTables, compaction is triggered. The compactor runs in a background thread, merging Level 0 files into Level 1, and merging Level 1 into Level 2 if necessary. This background work does not block reads or writes.

The total write latency for the common case — MemTable not full — is under 1ms, dominated by the WAL append. Compare this to the B-tree, where a write requires 2-8 random disk reads and writes, each taking 0.1-10ms. For write-heavy workloads, the LSM tree wins by a substantial margin.

---

## 5.9 The Read Path, End to End

Now trace a read. You call `store.get("user:1042")`.

**Step 1:** Check the active MemTable. The skip list search is O(log n) in memory. Duration: roughly 1 microsecond.

**Step 2:** If not found, check any immutable MemTable being flushed. Same cost.

**Step 3:** Check Level 0 SSTables, newest first. For each SSTable, check its bloom filter — if the bloom filter says "definitely not present," move to the next SSTable immediately. The bloom filter check is in-memory and takes microseconds. If the bloom filter says "maybe present," read the sparse index (also in-memory) to find the offset, seek to that position in the file, and scan forward. This is one random disk read.

With a 1% false positive rate, ninety-nine out of a hundred absent-key lookups at each Level 0 SSTable are eliminated by the bloom filter. With four Level 0 SSTables, an absent key causes at most four bloom filter checks (no disk reads) plus potentially one disk read for a false positive.

**Step 4:** Check Level 1. Find the SSTable whose key range covers the target key (binary search the SSTable metadata, all in memory). Check its bloom filter. If necessary, one disk read.

**Step 5:** Repeat for Level 2, Level 3, and so on.

For a key that exists, the read terminates as soon as it is found — usually at Level 0 or Level 1 for recently written data. For a key that does not exist, the bloom filter eliminates most disk reads, resulting in O(number of levels) bloom filter checks and O(1) actual disk reads in expectation.

This is why LSM reads, while more complex than B-tree reads, remain practical. The bloom filter is doing enormous work on behalf of the read path.

---

## 5.10 Compaction Strategies: The Design Space

The levelled compaction strategy we implemented is one of several. Understanding the alternatives reveals the fundamental tradeoffs in LSM design.

**Size-tiered compaction** groups SSTables by size rather than levels. When enough similarly-sized SSTables accumulate, they are merged into one larger SSTable. This strategy minimises write amplification — each byte of data is compacted fewer times on its journey from MemTable to final storage. The cost is more SSTables to check during reads and larger temporary space requirements during compaction (you must hold both the input and output simultaneously).

Cassandra uses size-tiered compaction by default. It is well-suited for write-heavy workloads where data is rarely updated, such as time-series or append-only logs.

**Levelled compaction**, which we implemented, keeps non-overlapping key ranges within each level above 0. This means at most one SSTable per level needs to be checked during a read, dramatically improving read performance. The cost is higher write amplification — data may be compacted many times as it migrates from Level 0 to Level 6. LevelDB and RocksDB use levelled compaction by default. It is well-suited for workloads with frequent reads and updates.

**FIFO compaction** simply deletes the oldest SSTables when total storage exceeds a threshold. No merging at all. This only makes sense for time-series data where old data is truly expired and can be discarded — a metrics system that retains only the last 30 days of data, for instance.

The choice of compaction strategy is one of the most impactful configuration decisions in an LSM-based system, and real systems like RocksDB expose it as a tunable parameter precisely because no single strategy is optimal for all workloads.

---

## 5.11 Write Amplification and Space Amplification

Two metrics define the cost of the LSM tradeoffs: write amplification and space amplification.

**Write amplification** is the ratio of bytes written to disk to bytes written by the application. If writing 1GB of data causes 10GB of disk writes (due to compaction rewriting data multiple times), write amplification is 10. Lower is better for write performance and SSD longevity.

With levelled compaction, write amplification is approximately L * (size ratio between levels). With 7 levels and a 10x size ratio, worst-case write amplification is around 30-40. Each byte of data may be rewritten many times as it is compacted from level to level.

With size-tiered compaction, write amplification is much lower — around 10 or less — because SSTables are merged fewer times. But space amplification is higher.

**Space amplification** is the ratio of total disk space used to logical data size. An LSM tree temporarily uses extra space during compaction (input and output SSTables coexist), and tombstones occupy space until they reach the final compaction level. With levelled compaction, space amplification is low — roughly 1.1x, since only a small fraction of data is being compacted at any time. With size-tiered compaction, space amplification can reach 2x or more.

The fundamental tension: minimising write amplification increases space amplification, and vice versa. No compaction strategy eliminates both simultaneously. Choosing a strategy means choosing which resource — disk bandwidth or disk space — is more constrained for your specific workload.

---

## 5.12 B-Tree vs LSM Tree: The Decision Framework

Having built both structures, we can now state precisely when to choose each.

**Choose a B-tree when:**
- Read performance is as important as write performance
- The working set fits in the OS page cache, making random reads fast
- Update-in-place semantics are important — you frequently overwrite existing keys
- You need predictable read latency without bloom filter false positives
- Examples: traditional OLTP databases, metadata stores, indexes on stable data

**Choose an LSM tree when:**
- Writes dominate reads by a large margin
- Write throughput matters more than read latency
- Data is largely append-only or sequentially updated
- SSD longevity is a concern (sequential writes wear SSDs less than random writes)
- Examples: time-series databases, event logs, metrics pipelines, write-heavy key-value stores

**The hybrid reality:** Many modern systems use both. A database might use a B-tree for its primary index (where reads and writes are mixed) and an LSM tree for its write-ahead log or a secondary append-only store. RocksDB, despite being LSM-based, has added a B-tree-like block cache to improve read performance. PostgreSQL has experimented with LSM-like storage for specific table access patterns.

The structures are not competitors in the sense that one replaces the other. They are complementary tools, each optimal for different points in the workload space.

---

## 5.13 Where This Lives in the Wild

**LevelDB** was written by Jeff Dean and Sanjay Ghemawat at Google and released in 2011. It is the direct implementation of the LSM concepts described in this chapter — MemTable, SSTables, levelled compaction, bloom filters per SSTable, write-ahead log. Its codebase is compact and clean, and reading it alongside this chapter is an excellent exercise.

**RocksDB** is Facebook's fork of LevelDB, started in 2012, with substantial additions: column families, multiple compaction strategies, compression per level, rate limiting for compaction to avoid I/O spikes, and extensive performance tuning. It is now the storage engine of choice for many large-scale systems at Facebook, LinkedIn, Yahoo, and others.

**Apache Cassandra** uses an LSM tree architecture for all its storage. Each Cassandra node manages its own LSM tree independently. Its compaction strategy is configurable per table — size-tiered for write-heavy tables, levelled for read-heavy ones. The Cassandra source code is an excellent study in how LSM concepts translate to a distributed setting.

**InfluxDB**, **TimescaleDB**, and most time-series databases use LSM trees because time-series workloads are almost perfectly write-optimised: data arrives in time order, is rarely updated, and is queried in time ranges. LSM trees' sequential write performance and efficient range queries (once compaction has organised data by time) make them the natural choice.

**CockroachDB and TiKV**, both distributed SQL databases, use RocksDB as their underlying storage engine. The LSM tree sits below the SQL layer, handling all the actual key-value storage. The SQL engine above it never worries about compaction or bloom filters — those concerns are entirely encapsulated by RocksDB.

---

## Summary

The LSM tree solves the write amplification problem of B-trees by a fundamental architectural shift: instead of modifying data in place with random I/O, it accepts all writes into a sorted in-memory buffer (the MemTable), flushes that buffer to immutable sorted files (SSTables) with sequential I/O, and reorganises those files in the background through compaction.

The cost of this approach is read complexity: a read must check the MemTable, any flushed MemTable, all Level 0 SSTables, and one SSTable per higher level. Bloom filters — one per SSTable, loaded into memory — make this practical by eliminating the vast majority of unnecessary disk reads.

Compaction is the most complex component and the one with the most design variation. Levelled compaction optimises for read performance at the cost of write amplification. Size-tiered compaction optimises for write performance at the cost of space amplification. Real systems expose compaction strategy as a tunable parameter because no single choice is optimal for all workloads.

The next chapter introduces three more probabilistic structures — bloom filters, count-min sketch, and HyperLogLog — which appear not just in LSM trees but throughout distributed systems wherever exact answers are too expensive and approximate answers are good enough.
