# Appendix A: Complexity and Memory Cheat Sheet

*For every structure in this book: time complexity, space complexity, cache behaviour, and when to reach for it. Worst case unless noted. n = number of elements, m = pattern/key length, k = result count.*

---

## Part II — Ordered Structures and Probabilistic Thinking

---

### AVL Tree
| Operation | Time |
|-----------|------|
| Search | O(log n) |
| Insert | O(log n) |
| Delete | O(log n) |
| Range query | O(log n + k) |
| In-order traversal | O(n) |

**Space:** O(n) nodes, each storing key, value, left/right pointers, parent pointer, height integer — roughly 40–48 bytes per node.

**Cache behaviour:** Poor. Each node is separately allocated; traversal follows pointers to scattered memory locations. Expect one cache miss per level.

**When to use:** Read-heavy ordered maps where minimum search depth matters. Compiler symbol tables, in-memory indexes on largely static data. Prefer over red-black when reads outnumber writes 10:1 or more.

**When not to use:** Write-heavy workloads (red-black trees rebalance with fewer rotations per write). Any dataset that does not fit in RAM (use B-trees instead).

---

### Red-Black Tree
| Operation | Time |
|-----------|------|
| Search | O(log n) |
| Insert | O(log n), at most 2 rotations |
| Delete | O(log n), at most 3 rotations |
| Range query | O(log n + k) |
| In-order traversal | O(n) |

**Space:** O(n). Same pointer overhead as AVL trees, plus one bit for colour — typically rounded to a byte or folded into a pointer bit.

**Cache behaviour:** Poor, for the same reason as AVL trees. Height is at most 2 log₂(n) — marginally taller than AVL in exchange for fewer rotations per write.

**When to use:** General-purpose ordered map under mixed read-write workloads. The default choice in standard libraries (C++ `std::map`, Java `TreeMap`, Linux scheduler). Prefer over AVL when writes are frequent.

**When not to use:** When you need stable sorted-order iteration over large ranges (the pointer chasing hurts). When the dataset exceeds RAM.

---

### Skip List
| Operation | Time (expected) |
|-----------|-----------------|
| Search | O(log n) |
| Insert | O(log n) |
| Delete | O(log n) |
| Range query | O(log n + k) |
| In-order traversal | O(n) |

**Space:** O(n) expected. Each node participates in 1/(1-p) levels on average. With p = 0.5: ~2 pointers per node. With p = 0.25 (Redis): ~1.33 pointers per node. Less overhead than balanced trees; no parent pointer needed.

**Cache behaviour:** Poor for point queries (pointer chasing), better than trees for sequential range queries (level-0 is a sorted linked list traversed linearly).

**When to use:** Concurrent ordered maps (easier to make lock-free than trees). Redis sorted sets. When implementation simplicity matters more than worst-case guarantees. When probabilistic balance is acceptable.

**When not to use:** When deterministic worst-case guarantees are required. When memory per node is tightly constrained (fixed-size arrays beat pointer-heavy nodes). When the dataset is on disk.

---

### B-Tree (on disk, minimum degree t)
| Operation | Time (disk reads) |
|-----------|-------------------|
| Search | O(log_t n) |
| Insert | O(log_t n) |
| Delete | O(log_t n) |
| Range query | O(log_t n + k/t) |
| Bulk load | O(n/t × log_t n) |

**Space:** O(n) keys on disk. Each node fills 50–100% of one disk page (typically 4KB–16KB). Space utilisation averages ~69% for random insertions.

**Cache behaviour:** Excellent for disk. Node size is tuned to disk block size — one block read fetches one node with hundreds of keys. Sequential range queries read leaf pages without seeking. Poor for in-memory use (too many keys per node wastes cache lines on non-matching keys).

**When to use:** Any ordered index whose dataset exceeds RAM. The primary index structure of every major relational database (PostgreSQL, MySQL InnoDB, SQLite). Filesystem directory indexes. Anything where O(log_t n) disk reads is the constraint.

**When not to use:** Data that fits in RAM (use red-black tree or skip list). Write-heavy append workloads (use LSM tree). When reads and writes are both sequential (the on-disk format of B-trees does not help sequential I/O).

---

### LSM Tree
| Operation | Time |
|-----------|------|
| Write (MemTable) | O(log M) where M = MemTable size |
| Read (best case, in MemTable) | O(log M) |
| Read (worst case, all levels) | O(L × log n/L) with bloom filters: O(L) expected |
| Compaction (background) | O(n log n) amortised |

**Space:** Data on disk, O(n). MemTable in RAM, O(M). Bloom filters per SSTable in RAM, O(n × bits_per_key). Space amplification 1.1x–2x depending on compaction strategy.

**Cache behaviour:** Excellent for writes (sequential append to WAL and SSTable). Poor for reads without bloom filters. With bloom filters, most reads touch only one SSTable at each level.

**When to use:** Write-heavy workloads (50k+ writes/second). Time-series, event logs, metrics ingestion. Any system where write throughput is more important than read latency. LevelDB, RocksDB, Cassandra, HBase.

**When not to use:** Read-heavy workloads with random access (B-trees win). When space amplification must be minimal. When write latency spikes during compaction are unacceptable.

---

### Bloom Filter
| Operation | Time |
|-----------|------|
| Add | O(k) where k = number of hash functions |
| Query | O(k) |
| Merge | O(m) where m = bit array size |

**Space:** m bits = −n ln(p) / (ln 2)² for n expected elements and false positive rate p. At 1% FPR: ~9.6 bits/element ≈ 1.2 bytes/element. At 0.1% FPR: ~14.4 bits/element.

**Cache behaviour:** Excellent. The bit array is compact and accessed sequentially-ish (k positions per query). For small filters, the entire array fits in L1/L2 cache.

**When to use:** Eliminating unnecessary disk reads in LSM trees and databases. Web crawl deduplication. Network packet inspection. Anywhere you need "definitely not in set" answers in bounded memory. False positives acceptable; false negatives never acceptable.

**When not to use:** When false positives are unacceptable. When deletions are required (use counting bloom filter, at 4x memory cost). When the set is small enough to fit in a hash table.

---

### Count-Min Sketch
| Operation | Time |
|-----------|------|
| Increment | O(d) where d = depth (rows) |
| Estimate | O(d) |
| Merge | O(w × d) where w = width (columns) |

**Space:** w × d integers. For ε error with δ probability: w = ⌈e/ε⌉, d = ⌈ln(1/δ)⌉. At ε=0.001, δ=0.01: ~2718 × 5 × 4 bytes ≈ 53KB.

**Cache behaviour:** Excellent. The table is a small 2D array; each operation accesses d cells scattered across rows. With small d, the accessed cells fit in cache.

**When to use:** Frequency estimation in streaming data. Finding heavy hitters. Network traffic analysis. Cache eviction policy support. When exact counts are too memory-expensive.

**When not to use:** When underestimates are dangerous (count-min only overestimates). When exact counts are required. When the number of distinct keys is small (use a hash map).

---

### HyperLogLog
| Operation | Time |
|-----------|------|
| Add | O(1) |
| Count (estimate) | O(m) where m = number of registers |
| Merge | O(m) |

**Space:** m bytes (one byte per register). Standard error ≈ 1.04/√m. At m=4096 (p=12): 4KB, 1.6% error. At m=16384 (p=14): 16KB, 0.8% error.

**Cache behaviour:** Excellent. Registers fit entirely in cache for any practical m.

**When to use:** Distinct element counting at scale. Daily/monthly active user counts. Search query cardinality. Any "how many unique X?" question at scale. Redis PFADD/PFCOUNT, BigQuery APPROX_COUNT_DISTINCT.

**When not to use:** When exact counts are required. When n is small (exact counting is cheap). When the standard error is unacceptably large for your use case.

---

## Part III — String Algorithms

---

### Naive String Search
| Operation | Time |
|-----------|------|
| Search | O(nm) worst, O(n) average on natural text |

**Space:** O(1) extra.

**Cache behaviour:** Good. Sequential access through both text and pattern. The inner loop accesses contiguous memory.

**When to use:** Only as a reference implementation for testing other algorithms. For very short patterns (m ≤ 3) where KMP/Horspool preprocessing overhead dominates.

---

### KMP (Knuth-Morris-Pratt)
| Operation | Time |
|-----------|------|
| Preprocessing (failure function) | O(m) |
| Search | O(n) |
| Total | O(n + m) |

**Space:** O(m) for the failure function array.

**Cache behaviour:** Good. Text is scanned left-to-right without backtracking. Failure function is a small array, fits in cache.

**When to use:** When O(n) worst-case guarantee matters. Repetitive patterns (DNA, binary sequences) where naive and Horspool degrade. Streaming text where you cannot buffer.

**When not to use:** Natural language text where Horspool is typically 2-5× faster in practice.

---

### Boyer-Moore-Horspool
| Operation | Time |
|-----------|------|
| Preprocessing (skip table) | O(m + σ) where σ = alphabet size |
| Search | O(nm) worst, O(n/m) best and average on natural text |

**Space:** O(σ) for the skip table (256 bytes for ASCII).

**Cache behaviour:** Good on natural text. Skip table is tiny (256 bytes, always in L1). Pattern is accessed right-to-left in short bursts. Large skips mean few text bytes are examined.

**When to use:** General-purpose string search on natural text, log files, source code. The practical default for grep-style workloads. When pattern length m > 3 and the alphabet is diverse.

**When not to use:** Highly repetitive text with short repeating patterns (KMP is safer). Very short patterns where skip table overhead is not amortised.

---

### Rabin-Karp / Rolling Hash
| Operation | Time |
|-----------|------|
| Single pattern search | O(n + m) expected |
| Multi-pattern search (k patterns, same length) | O(n + km) expected |
| Rolling hash update | O(1) per position |

**Space:** O(k) for the hash set of patterns. O(1) rolling hash state.

**Cache behaviour:** Excellent. Sequential access; hash computation is arithmetic with no memory indirection.

**When to use:** Multi-pattern search (k patterns simultaneously in O(n) passes). Plagiarism detection (k-gram fingerprinting). Content-defined chunking (rsync, Dropbox). Substring occurrence counting.

**When not to use:** Single-pattern search where KMP or Horspool is simpler and equally fast. When false positives (hash collisions) are unacceptable without verification.

---

### Edit Distance (Levenshtein)
| Operation | Time |
|-----------|------|
| Full table | O(nm) |
| Space-optimised (distance only) | O(nm) time, O(m) space |
| Bounded (max distance d) | O(n × min(m, d)) |

**Space:** O(nm) for full table (to recover edit sequence). O(m) for distance-only computation.

**Cache behaviour:** Good. Table is filled row by row; each row accesses the previous row sequentially. Row-major access pattern is cache-friendly.

**When to use:** Spell checking. DNA sequence alignment. Git diff (on lines). Fuzzy string matching. Any "how similar are these strings?" question.

**When not to use:** When you need exact matching (use KMP/Horspool). When both strings are very long (O(nm) is prohibitive; use heuristics like BLAST for DNA).

---

### Trie
| Operation | Time |
|-----------|------|
| Insert | O(m) |
| Search (exact) | O(m) |
| Prefix search | O(m + k) |
| Delete | O(m) |

**Space:** O(total characters in all keys) nodes in the worst case. Each node has up to σ child pointers. For 26-letter English: 26 pointers per node × 4 bytes = 104 bytes minimum per node.

**Cache behaviour:** Poor. Each character of a key follows a pointer to a new node. One cache miss per character in the worst case.

**When to use:** Prefix search and autocomplete. IP routing (binary tries). Dictionary lookups where prefix membership is the query. When query time must be O(m) independent of dictionary size.

**When not to use:** When memory is tight (radix trees use 2–10× less). When the key set is static (sorted array + binary search is simpler and more cache-friendly). When you need only exact lookup (use a hash map).

---

### Radix Tree (Patricia Trie)
| Operation | Time |
|-----------|------|
| Insert | O(m) |
| Search | O(m) |
| Prefix search | O(m + k) |
| Delete | O(m) |

**Space:** O(n) nodes for n keys. Each node holds an edge label (string), a child map, and terminal flag. 2–10× less memory than a plain trie.

**Cache behaviour:** Slightly better than tries (fewer nodes to traverse), but still pointer-heavy.

**When to use:** When trie memory overhead is unacceptable. URL routing, file path indexing, IP prefix matching. Keys with long common prefixes.

**When not to use:** When key set is small (overhead of radix tree bookkeeping exceeds benefits). When simplicity matters more than memory.

---

### Huffman Coding
| Operation | Time |
|-----------|------|
| Build frequency table | O(n) |
| Build tree | O(σ log σ) where σ = alphabet size |
| Encode | O(n) |
| Decode | O(n) |

**Space:** O(σ) for the tree and code table. Compressed output: between H and H+1 bits per symbol where H is entropy.

**Cache behaviour:** Encoding is sequential and cache-friendly. Decoding traverses the tree per bit — somewhat pointer-chasing but tree is small (at most 512 nodes for 256-symbol alphabet).

**When to use:** Any compression where character frequency is known in advance. The entropy coding stage of gzip/DEFLATE/PNG. Standalone compression of text with skewed character distribution.

**When not to use:** When the data has no frequency skew (entropy coding gains nothing). When you need to compress symbol sequences longer than one character (arithmetic coding is closer to optimal).

---

### LZ77 / DEFLATE
| Operation | Time |
|-----------|------|
| Compress (naive) | O(n × W) where W = window size |
| Compress (hash chain) | O(n) expected |
| Decompress | O(n) |

**Space:** O(W) for the sliding window. DEFLATE output: 30–70% of input for typical text/code.

**Cache behaviour:** Sequential access for both input and output. Hash chain lookups are somewhat random within the window but the window is small.

**When to use:** General-purpose compression. Combined with Huffman as DEFLATE: the format behind gzip, zip, PNG, zlib. When data has repetitive substrings regardless of character frequency.

**When not to use:** Already-compressed data (the compressed output will be larger). Encrypted data (random bytes compress poorly). When speed is paramount and compression ratio is secondary (use simpler schemes).

---

### Suffix Array + LCP Array
| Operation | Time |
|-----------|------|
| Construction (SA, prefix doubling) | O(n log n) |
| Construction (SA-IS, optimal) | O(n) |
| LCP array construction (Kasai) | O(n) |
| Pattern search | O(m log n) |
| Pattern search (LCP-accelerated) | O(m + log n) |
| Longest repeated substring | O(n) after construction |
| Longest common substring (two texts) | O((n+m) log(n+m)) |
| Count distinct substrings | O(n) after construction |

**Space:** O(n) for SA (4n bytes), LCP (4n bytes), rank array (4n bytes). Total: ~12 bytes per character of text.

**Cache behaviour:** Good. SA, LCP, and rank arrays are contiguous. Binary search accesses them in a pattern that respects cache lines reasonably well. Much better than suffix trees.

**When to use:** Offline text analysis where the text is fixed and queried many times. Bioinformatics (genome search). Finding repeated substrings. All-occurrences search more efficient than running KMP per query.

**When not to use:** When the text changes frequently (suffix arrays are static). For a single pattern search on a text queried once (KMP is simpler). When O(m log n) per query is too slow (consider FM-index for O(m) queries).

---

### Rope
| Operation | Time |
|-----------|------|
| Prepend / Concat | O(1) |
| Insert at position | O(log n) |
| Delete range | O(log n) |
| Character access | O(log n) |
| Sequential iteration | O(n), but pointer-chasing |
| Rebalance | O(n) (triggered when tree becomes too deep) |

**Space:** O(n) characters plus O(n/L) nodes where L = leaf size (typically 32–512 bytes). Each node: left/right pointers, weight integer — ~24 bytes per node.

**Cache behaviour:** Poor for sequential access (pointer chasing through tree). Good for random access relative to alternatives. Iteration over 100 characters may touch 10+ nodes.

**When to use:** Text editors where structural sharing for undo/redo is important. Very large strings with frequent random insertions and deletions. Persistent/functional text representation.

**When not to use:** When sequential access performance is critical (piece table wins). When implementation simplicity is important (piece table is significantly simpler).

---

### Piece Table
| Operation | Time |
|-----------|------|
| Insert | O(p) where p = number of pieces |
| Delete | O(p) |
| Character access | O(p) |
| Sequential iteration | O(n), cache-friendly |
| Line-to-position | O(p) with augmented newline counts |

**Space:** O(n) for original and append buffers. O(p) for the piece list where p = number of edit operations (typically hundreds, rarely millions). Each piece: 12 bytes.

**Cache behaviour:** Excellent for sequential access (reads directly from contiguous original/append buffers). Poor for random access in theory (O(p) piece list scan) but p is small in practice.

**When to use:** Text editors and code editors. VS Code uses a piece tree (piece table indexed by a red-black tree for O(log p) operations). The practical choice for mutable document representation.

**When not to use:** When structural sharing across versions is required (rope is better). When the document is read-only (plain string or memory-mapped file).

---

## Part IV — Sorting

---

### Introsort (Quicksort + Heapsort + Insertion Sort)
| Operation | Time |
|-----------|------|
| Average case | O(n log n) |
| Worst case | O(n log n) guaranteed (heapsort fallback) |
| Best case (nearly sorted) | O(n log n) (insertion sort handles small partitions) |
| All-equal elements (three-way) | O(n) |

**Space:** O(log n) stack space (tail call optimised). In-place: O(1) extra beyond the input array.

**Cache behaviour:** Excellent. In-place partitioning accesses one contiguous array. Sequential scans from both ends. Better than merge sort (no auxiliary array).

**When to use:** General-purpose in-memory sort of primitives. The algorithm in C++ `std::sort`, Rust `sort_unstable`, Java `Arrays.sort(int[])`. The default choice when stability is not required.

**When not to use:** When stability is required (use merge sort or Timsort). When sorting a linked list (use merge sort). When data is on disk (use external merge sort).

---

### External Merge Sort
| Operation | Time (disk I/O) |
|-----------|-----------------|
| Run generation | O(n/M × sort(M)) ≈ O(n log M) |
| k-way merge | O(n log k) using heap |
| Total passes | 2 (one generate, one merge) for k ≤ M/b |
| Total time | O(n log n) |

**Space:** O(M) RAM for run generation and merge buffers. O(n) disk for runs and output. Temporary disk usage: up to 2n (input + runs, before final merge output replaces runs).

**Cache behaviour:** Excellent. All I/O is sequential. Run generation reads input sequentially. Merge reads from run files sequentially. No seeking (except to start of each run file).

**When to use:** Sorting datasets larger than RAM. Database ORDER BY, GROUP BY, index creation. The sort step of external join algorithms. Anywhere sequential disk I/O dominates.

**When not to use:** When data fits in RAM (introsort is orders of magnitude faster). When data is already sorted or nearly sorted (detect and exploit runs).

---

## Part V — Concurrency

---

### Atomic Integer (fetch-and-add, CAS)
| Operation | Time |
|-----------|------|
| Load | O(1), ~1ns uncontended |
| Store | O(1), ~1ns uncontended |
| Fetch-and-add | O(1), ~5–20ns (cache line ping-pong under contention) |
| CAS | O(1), ~5–20ns uncontended |

**Space:** 4 or 8 bytes for the value. Must be cache-line aligned to avoid false sharing (pad to 64 bytes if accessed by multiple threads).

**Cache behaviour:** Excellent when uncontended (cache hit). Degrades to cache coherence traffic under contention: writing the atomic invalidates all other cores' cached copies.

**When to use:** Reference counting. Simple shared counters. Lock-free algorithm primitives. Single-variable coordination between threads.

**When not to use:** When multiple variables must be updated atomically (use mutex). When contention is high and throughput matters (use distributed counter / per-thread counters).

---

### Mutex (spinlock / blocking)
| Operation | Time |
|-----------|------|
| Uncontended acquire/release | O(1), ~10–30ns |
| Contended acquire | O(1) amortised, with unbounded worst-case wait |
| Critical section | O(work) — serialised across all threads |

**Space:** ~40 bytes (OS mutex). ~8 bytes (pure spinlock with one atomic).

**Cache behaviour:** Acquiring the mutex invalidates the mutex's cache line. Inside the critical section, memory accesses have normal cache behaviour.

**When to use:** Protecting multi-variable critical sections. Any operation too complex for atomics. The default choice for correctness; optimise only after measuring.

**When not to use:** When the critical section is hot and contention is measurable (use stripe locking or lock-free). When the critical section is read-only for most callers (use read-write lock).

---

### MPSC Lock-Free Queue
| Operation | Time (expected) |
|-----------|-----------------|
| Enqueue (any producer) | O(1) amortised with CAS retry |
| Dequeue (single consumer) | O(1) |
| Size | O(1) approximate |

**Space:** O(n) nodes. Each node: value + next pointer = ~16 bytes. Plus sentinel head node and atomic tail pointer.

**Cache behaviour:** Poor under high producer contention (tail pointer cache line bounces between producers). Good for the consumer (head pointer is uncontested). Linked list node allocation causes cache misses per enqueue.

**When to use:** Multiple threads producing work for one consumer thread. Network listeners → processing thread. Event sources → event loop. When mutex contention on a queue is measured as a bottleneck.

**When not to use:** When multiple consumers are needed (use MPMC queue). When bounded capacity with backpressure is needed (add a semaphore or use bounded variant). When throughput is modest (mutex-backed queue is simpler).

---

### MPMC Array Queue (Vyukov)
| Operation | Time (expected) |
|-----------|-----------------|
| Enqueue | O(1) amortised |
| Dequeue | O(1) amortised |
| Size | O(1) approximate |

**Space:** O(capacity) — fixed-size circular array. Each cell: sequence number (atomic) + value = ~16 bytes. Must be a power-of-two capacity.

**Cache behaviour:** Excellent. Array is contiguous. Each cell is padded to its own cache line (64 bytes) to prevent false sharing between adjacent producers/consumers. Sequence numbers are the only inter-thread communication.

**When to use:** High-throughput producer-consumer with multiple producers and multiple consumers. The Disruptor pattern. When bounded capacity is acceptable and maximum throughput is the goal.

**When not to use:** When unbounded capacity is needed (use linked-list MPMC). When the capacity is very large (memory cost: 64 bytes × capacity for padded version).

---

### Striped (Sharded) Hash Map
| Operation | Time |
|-----------|------|
| Get | O(1) amortised hash lookup, O(1) lock acquire |
| Put | O(1) amortised, serialised within stripe |
| Remove | O(1) amortised, serialised within stripe |
| Size | O(stripes) — sum of per-stripe counters |

**Space:** O(n) for entries. O(stripes) for locks and counters. With 64 stripes: ~64 × (lock size + counter size) ≈ 64 × 48 bytes ≈ 3KB overhead.

**Cache behaviour:** Good. Stripe lock and stripe hash table are localised. Different stripes are accessed independently with no sharing.

**When to use:** Concurrent cache. Concurrent registry. Any shared map accessed by multiple threads where a single mutex is a measured bottleneck. The practical default for concurrent maps.

**When not to use:** When key access is heavily skewed to one stripe (hotspot problem — use replication). When reads vastly outnumber writes (use lock-free reads with node locking). When map must be iterated frequently (requires locking all stripes).

---

### Persistent Hash Map (HAMT)
| Operation | Time |
|-----------|------|
| Get | O(log₃₂ n) ≈ O(1) practical |
| Put (returns new version) | O(log₃₂ n) new nodes created |
| Remove (returns new version) | O(log₃₂ n) new nodes created |
| Merge two maps | O(n log n) naive |

**Space:** O(n) per version, but versions share structure. Each update creates O(log₃₂ n) ≈ 4–7 new nodes. Each HAMT internal node: bitmap (4 bytes) + compact children array (variable). Each leaf: key + value + hash.

**Cache behaviour:** Moderate. Trie traversal follows pointers (cache misses), but branching factor 32 means shallow trees (3–4 levels for millions of entries). Better than binary trees; worse than arrays.

**When to use:** Read-heavy workloads with infrequent updates. Configuration data shared across many threads. Snapshot isolation (each reader holds a version). Undo/redo histories. Clojure, Scala, Haskell persistent maps.

**When not to use:** Write-heavy workloads (allocation cost per update). When exact memory usage is critical (structural sharing helps but allocation is still O(log n) per write). When O(1) lookup is required (hash map wins).

---

### Channel (Unbuffered / Buffered)
| Operation | Time |
|-----------|------|
| Send (unbuffered, receiver ready) | O(1) |
| Send (unbuffered, no receiver) | blocks |
| Send (buffered, space available) | O(1) |
| Send (buffered, full) | blocks |
| Receive | O(1) or blocks |
| Select (k alternatives) | O(k) to evaluate, O(1) to proceed |

**Space:** Unbuffered: O(1). Buffered: O(capacity) for the internal ring buffer.

**Cache behaviour:** Good. The channel's internal buffer is a compact ring buffer. Under high throughput, the buffer cache line is hot and shared between sender and receiver.

**When to use:** Coordinating concurrent tasks where data ownership transfers with the message. Pipelines. Fan-out/fan-in patterns. Cancellation (done channels). Rate limiting (token buckets). The default for inter-task communication in Nex.

**When not to use:** When multiple threads need to access shared state simultaneously without transferring ownership (use concurrent map or atomic). When communication overhead is too high for the workload (atomic flag or shared memory is faster for simple signals).

---

*All times are asymptotic. Constant factors vary by hardware, compiler, and implementation. Always measure before optimising.*
