# Structures of Scale
### *Advanced Algorithms for Modern Systems*

---

## Preface
- Who this book is for — you know the basics, now go deeper
- How to read this book — every chapter starts with a problem, not a definition
- On Nex — a brief orientation, full reference in the appendix
- How the implementations are structured — contracts, invariants, and testable code throughout

---

## Part I — When Simple Structures Break Down

**Chapter 1: The Limits of What You Know**
- When arrays become bottlenecks
- When hash tables hit their ceiling — memory pressure, collision storms, 500GB datasets
- When sorted order costs more than you expected
- Three lenses used throughout the book: asymptotic complexity, I/O complexity, cache effects

---

## Part II — Ordered Structures and Probabilistic Thinking

**Chapter 2: The Balanced Bookshelf — Self-Balancing Trees**
- Problem: a dictionary that stays fast under arbitrary insertions
- AVL trees — rotation logic derived from first principles
- Red-black trees — why they're preferred in practice despite being harder to understand
- When to reach for a balanced tree over a hash table
- Implementation: a generic ordered map in Nex with full contract annotations

**Chapter 3: The Casino Data Structure — Skip Lists**
- Problem: Redis needs an ordered set with fast rank queries. Why not a tree?
- Probabilistic balancing — what it means to flip coins for structure
- Why skip lists are easier to implement correctly than red-black trees in concurrent settings
- Implementation: a full skip list in Nex
- Case study: how Redis uses skip lists for sorted sets

**Chapter 4: When the Library Overflows — B-Trees on Disk**
- Problem: build a key-value store whose dataset is larger than RAM
- Why trees designed for memory fail on disk — the seek cost argument
- Page-oriented thinking: aligning node size to disk block size
- The PageManager: seek, position, page allocation, and the free list in Nex
- Node layout on disk: serializing keys, values, child pointers, and metadata as raw bytes
- Insertion and the split operation — tracing a split from leaf to root
- Deletion and the merge/redistribute operations
- The header page: storing the root pointer and free list
- A working key-value store: the complete implementation
- Crash safety: shadow-page scheme for surviving mid-write failures
- *(The longest chapter in the book — plan for two reading sessions)*

**Chapter 5: The Write-Heavy Problem — LSM Trees**
- Problem: your key-value store is fast for reads but write throughput is the bottleneck
- Write amplification in B-trees — why updating in place is expensive
- The LSM insight: make writes sequential, pay the cost at compaction time
- MemTable, SSTables, and the compaction cascade
- Bloom filters as a first-class component — why every SSTable needs one
- Implementation: a simplified LSM store in Nex
- Case study: LevelDB, RocksDB, and Cassandra — same idea, different tradeoffs

**Chapter 6: Good Enough Answers — Probabilistic Data Structures**
- Problem: does this URL exist in a set of ten billion URLs? You have 1GB of RAM
- Bloom filters — the bit array, k hash functions, false positive rate derived honestly
- Count-min sketch — frequency estimation for streaming data
- HyperLogLog — counting distinct elements without storing them
- The philosophy: trading exactness for scale is an engineering decision, not a failure
- Implementation: all three in Nex with false positive rate controls
- Case study: Chrome's safe browsing, Cassandra's read path, Redis's HyperLogLog command

---

## Part III — String Algorithms

**Chapter 7: Does This File Contain That Word? — Exact String Matching**
- Problem: grep. Naive search is O(nm) and that matters at scale
- The naive algorithm and where it breaks down
- KMP — the failure function as the central insight, derived slowly
- Boyer-Moore-Horspool — why searching backwards is clever, and why this wins in practice
- Choosing between them: when each algorithm is the right tool
- Implementation: all three in Nex, benchmarked against each other

**Chapter 8: The Repeating Pattern — Rabin-Karp and Rolling Hashes**
- Problem: find all repeated substrings in a large document — plagiarism detection
- Rolling hashes — updating a hash in O(1) as the window slides
- Rabin-Karp — multiple pattern search as the killer application
- Implementation: a plagiarism detector in Nex
- Connection: rolling hashes reappear in LSM bloom filters

**Chapter 9: The Fuzzy Match — Edit Distance**
- Problem: spell checkers, DNA alignment, and git diff share the same algorithm
- Levenshtein distance derived from first principles
- Dynamic programming as a general technique — edit distance as the worked example
- Extending to longest common subsequence and diff
- Implementation: a spell checker and a simple diff tool in Nex

**Chapter 10: Autocomplete — Tries**
- Problem: suggest completions for a prefix in under a millisecond
- The trie as a natural prefix index
- Compressed tries (Patricia/radix trees) — when memory matters
- Implementation: a trie-backed autocomplete engine in Nex
- Extension: how search engines use tries for query suggestion

**Chapter 11: What Regex Actually Is — Finite Automata**
- Problem: match a pattern like `[a-z]+@[a-z]+\.com` against a billion strings efficiently
- NFAs and DFAs — the theory made visual and concrete
- Thompson's construction — converting a regex to an NFA
- Subset construction — converting an NFA to a DFA
- Why backtracking regex engines can be exponentially slow, and how to avoid it
- Implementation: a small regex engine in Nex

**Chapter 12: The Compression Game — Huffman and LZ**
- Problem: make this file smaller without losing anything
- Information entropy as the theoretical floor — Shannon's insight without the heavy math
- Huffman coding — variable-length codes derived from frequency
- LZ77 — the sliding window and back-references
- How gzip combines both
- Implementation: Huffman encoder/decoder in Nex; LZ77 sketch

**Chapter 13: The Suffix Array**
- Problem: find all occurrences of any pattern in a fixed text, or the longest repeated substring
- Why suffix trees are powerful but impractical to implement
- Suffix arrays as the pragmatic alternative
- Construction and the LCP array
- Solving longest repeated substring, longest common substring, and pattern search
- Implementation: suffix array construction and query in Nex
- Case study: bioinformatics — why genome search lives here

**Chapter 14: The Editor's Data Structure — Ropes and Piece Tables**
- Problem: how does a code editor handle a 10MB file where every keystroke mutates the text?
- Why a plain string or array fails for large mutable text
- Ropes — a binary tree of string fragments
- Piece tables — the simpler alternative VS Code actually uses
- Implementation: a piece table in Nex
- Connection to persistent data structures — preview of Part V

---

## Part IV — Sorting at Scale

**Chapter 15: Quicksort — The Practical Champion**
- Problem: sort 10 million records as fast as possible in memory
- Partitioning as the core idea — Lomuto vs Hoare
- Pivot selection: random, median-of-three, and why naive pivot choice is dangerous
- Introsort — the hybrid that standard libraries actually ship
- Heapsort as the fallback — and why heaps deserve a chapter of their own someday
- Implementation: introsort in Nex
- When not to use quicksort: stability requirements, nearly-sorted data

**Chapter 16: Sorting Bigger Than RAM — External Mergesort**
- Problem: sort a 500GB log file on a machine with 8GB of RAM
- Run generation: sorting chunks that fit in memory
- K-way merge: merging runs efficiently with a heap
- I/O patterns: why sequential access matters and how to minimise seeks
- Connection to B-trees: the same page-size thinking, revisited
- Implementation: a working external sort in Nex using Binary_File with seek

---

## Part V — Concurrency-Aware Structures

**Chapter 17: The Broken Counter — Memory Models and Visibility**
- Problem: two threads increment a counter a million times each. The result is wrong.
- Why this happens: caches, reordering, and the happens-before relation
- Memory models — what the hardware actually guarantees vs what we assume
- Atomics as the foundation: compare-and-swap derived from the problem
- Implementation: demonstrating the broken counter and fixing it in Nex

**Chapter 18: The Lock-Free Queue — CAS in Practice**
- Problem: a high-throughput message queue where locking is the bottleneck
- Compare-and-swap as a primitive — the ABA problem and how to handle it
- Building a lock-free MPSC (multi-producer single-consumer) queue
- Why lock-free doesn't automatically mean fast — when locks win
- Implementation: a lock-free queue in Nex

**Chapter 19: The Concurrent Map — Stripe Locking and Beyond**
- Problem: a shared cache accessed by hundreds of threads simultaneously
- Naive locking — correct but slow
- Stripe locking — partitioning the lock domain
- Lock-free hash maps — the ideas without a full implementation
- Case study: Java's ConcurrentHashMap evolution as a design history
- Implementation: a stripe-locked concurrent map in Nex

**Chapter 20: Immutability as a Concurrency Strategy — Persistent Structures**
- Problem: share data across threads without any locking at all
- Persistent data structures — modifying without mutating
- Path copying — how a persistent tree works
- Clojure's persistent vector as a case study
- Connection to the piece table from Chapter 14
- Implementation: a persistent linked list and tree in Nex

**Chapter 21: Message Passing — Channels and the CSP Model**
- Problem: coordinate ten workers producing results into a single output stream
- Shared memory vs message passing — the philosophical divide
- CSP — Hoare's communicating sequential processes in plain language
- Nex channels as a first-class demonstration — the language advantage
- Fan-out, fan-in, pipelines, and cancellation patterns
- Implementation: a concurrent pipeline in Nex using native channels and tasks
- Case study: Go's concurrency model, Erlang's actor model — same idea, different syntax

---

## Appendices

**Appendix A: Complexity and Memory Cheat Sheet**
- One honest page per structure: time complexity, space complexity, cache behaviour, and when to use it
- Covers every structure implemented in the book

**Appendix B: Annotated Bibliography**
- Wirth, Sedgewick, CLRS, Skiena — what each covers and when to reach for it
- Key papers: the original B-tree paper, the LSM paper, Thompson's regex construction, the skip list paper
- Where to go deeper on concurrency: Herlihy & Shavit, the Java Memory Model specification
