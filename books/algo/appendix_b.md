# Appendix B: Annotated Bibliography

The literature on algorithms and data structures is vast. This bibliography is deliberately selective — it covers the books and papers most directly relevant to what you have built in this book, with honest assessments of what each is good for and when to reach for it.

---

## Foundational Books

**Niklaus Wirth — *Algorithms + Data Structures = Programs* (1976)**

The book that gave this field its name. Wirth presents algorithms and data structures as inseparable — you cannot choose one without committing to the other. Written in Pascal (Wirth designed both), it covers sorting, searching, dynamic data structures, and recursive algorithms with a clarity that has not aged. The treatment is terse by modern standards; Wirth assumes you will think carefully about every sentence. Read it for the discipline of thinking about programs as the sum of their algorithms and their data. Chapter 4 on dynamic information structures remains one of the finest introductions to trees ever written.

*Reach for it when:* you want to understand what it means to think algorithmically, before the field accumulated decades of complexity. Also when you want to read elegant, minimal code.

---

**Robert Sedgewick — *Algorithms* (4th edition, with Kevin Wayne, 2011)**

The most complete accessible treatment of classical algorithms in print. Sedgewick covers sorting, searching, graphs, and strings with Java implementations that are carefully written and genuinely runnable. The fourth edition is substantially better than earlier editions — the graph and string sections were rewritten and significantly improved. The companion website provides full source and interactive visualisations.

Sedgewick's B-tree coverage is thin (one chapter, in-memory only) and the concurrency coverage is essentially absent. String algorithms are well-covered. Graph algorithms are the book's strongest section.

*Reach for it when:* you need a reliable reference for any classical algorithm. Also when you want a second perspective on something in this book with a different implementation language and teaching approach.

---

**Thomas Cormen, Charles Leiserson, Ronald Rivest, Clifford Stein — *Introduction to Algorithms* (4th edition, 2022)**

The field's reference text, known universally as CLRS. Encyclopaedic coverage, rigorous proofs, pseudocode rather than real code. Everything is here: sorting, data structures, graph algorithms, dynamic programming, linear programming, NP-completeness, approximation algorithms, computational geometry. The proofs are careful and complete.

CLRS is not a book you read front to back — it is a book you consult. It assumes mathematical maturity (you need to be comfortable with proof by induction, probability, and asymptotic notation). The implementations are pseudocode that must be translated into a real language; the pseudocode is sometimes subtly wrong in ways that matter for implementation.

*Reach for it when:* you need the authoritative proof that an algorithm is correct or achieves a specific complexity bound. When you encounter an algorithm name you do not recognise and want the canonical description. As a reference, not a tutorial.

---

**Steven Skiena — *The Algorithm Design Manual* (3rd edition, 2020)**

The most practical of the major algorithms books. Skiena's approach is problem-first in the same spirit as this book: here is a real problem, here is how to think about it, here are the tools to solve it. The first half covers algorithm design techniques (dynamic programming, backtracking, heuristics). The second half is a catalogue of problems with pointers to the best known algorithms for each.

The "war stories" — Skiena's accounts of real projects where algorithmic choices made the difference — are the book's most distinctive feature. They are worth reading for the modelling intuition alone.

*Reach for it when:* you have a real problem and need to identify which algorithm class applies. When you want to learn how an expert thinks about algorithm selection. When CLRS is too theoretical and Sedgewick does not cover what you need.

---

## Papers: The Originals

**Rudolf Bayer and Edward McCreight — "Organization and Maintenance of Large Ordered Indexes" (1970)**

The paper that introduced B-trees. Remarkably readable for a 1970 paper. Bayer and McCreight derived the B-tree structure from first principles: given that disk access is the bottleneck and each access retrieves a fixed-size block, what tree structure minimises the number of accesses? The answer — high fan-out, nodes sized to blocks — is derived, not assumed. The proofs of height bounds and space utilisation are clean and still the best treatment.

*Reach for it when:* you want to understand why B-trees are shaped the way they are, not just how they work.

---

**Patrick O'Neil, Edward Cheng, Dieter Gawlick, Elizabeth O'Neil — "The Log-Structured Merge-Tree" (1996)**

The paper that introduced LSM trees, published in the journal Acta Informatica. The motivation is crystal clear: for write-heavy workloads on disk, the bottleneck is random I/O. The LSM tree eliminates random writes by converting them to sequential writes, deferring organisation to compaction. The paper analyses write amplification, space amplification, and read cost with care. The mathematical model for choosing optimal component sizes is more rigorous than what appears in most implementations.

*Reach for it when:* you want the theoretical foundation behind RocksDB, Cassandra, and LevelDB. The paper is denser than the chapter in this book but provides the optimisation analysis that implementation docs rarely include.

---

**William Pugh — "Skip Lists: A Probabilistic Alternative to Balanced Trees" (1990)**

One of the most readable papers in algorithms. Pugh introduces the skip list with clear motivation (frustration with balanced tree complexity), derives the probabilistic analysis from scratch, and provides worked examples. The analysis of expected height and expected search time is done step by step, not waved away. The paper also covers concurrent skip lists — the same algorithm that Redis uses — with a brief but insightful section.

*Reach for it when:* you want the complete probabilistic analysis of skip lists, or when you want a model of how to write a clear algorithms paper.

---

**Ken Thompson — "Regular Expression Search Algorithm" (1968)**

Nine pages that changed how regular expressions are implemented. Thompson describes the NFA construction that now bears his name, proves its O(nm) time bound, and explains exactly why backtracking engines can fail. The paper is short enough to read in an afternoon and rewarding enough to read twice. Thompson also describes the DFA simulation and the lazy NFA-to-DFA conversion — all the ideas behind RE2, in nine pages from 1968.

*Reach for it when:* you want the primary source for Chapter 11. Also as a model of economy: nine pages that contain everything necessary and nothing else.

---

**Aho, Corasick — "Efficient String Matching: An Aid to Bibliographic Search" (1975)**

The paper introducing the Aho-Corasick algorithm for searching multiple patterns simultaneously. The algorithm combines a trie of all patterns with KMP-style failure links, producing a DFA that searches for all k patterns simultaneously in O(n + k + output) time. The paper is clear and the algorithm is presented incrementally. Aho-Corasick is the algorithm behind grep with multiple patterns, intrusion detection systems, and antivirus scanners.

*Reach for it when:* you need multi-pattern search beyond what Rabin-Karp provides (Aho-Corasick handles patterns of different lengths and has no false positives).

---

**Manber and Myers — "Suffix Arrays: A New Method for On-Line String Searches" (1990)**

The paper introducing suffix arrays as a practical alternative to suffix trees. Manber and Myers present the O(n log² n) prefix doubling construction, the LCP array, and pattern search. The paper is notable for its honest comparison with suffix trees: slower to construct, less powerful for some operations, but dramatically simpler and more cache-friendly. The recommendation to use suffix arrays in practice over suffix trees is as valid today as in 1990.

*Reach for it when:* you want the original description of suffix array construction and the LCP-based algorithms for the problems covered in Chapter 13.

---

**David Huffman — "A Method for the Construction of Minimum-Redundancy Codes" (1952)**

A three-page paper, Huffman's master's thesis condensed. The algorithm is described simply and the proof of optimality is elegant. Worth reading as a historical document — Huffman invented the algorithm to prove his professor wrong (the professor believed the existing methods were optimal). The proof technique, showing that the greedy choice produces an optimal solution, is the template for dozens of subsequent greedy algorithm proofs.

*Reach for it when:* you want the original presentation and proof of optimality, or when you want to appreciate how much can be said in three pages.

---

**Ziv and Lempel — "A Universal Algorithm for Sequential Data Compression" (1977)**

The LZ77 paper. Remarkably short given its impact — it introduces the sliding window compression idea, proves that the algorithm asymptotically achieves the entropy of any stationary ergodic source (the "universal" in the title), and provides the theoretical foundation that later implementations are built on. The companion paper "Compression of Individual Sequences via Variable-Rate Coding" (1978, LZ78) is equally important.

*Reach for it when:* you want the information-theoretic justification for why LZ-family compression works, beyond the intuitive "find and back-reference repeated substrings" explanation.

---

## Concurrency

**Maurice Herlihy and Nir Shavit — *The Art of Multiprocessor Programming* (2nd edition, 2021)**

The definitive textbook on concurrent data structures. Herlihy and Shavit cover the theory (linearisability, progress conditions, the universality of consensus) and the practice (lock-free queues, concurrent hash maps, skip lists, counting networks) with equal rigour. The proofs are careful. The implementations are Java but the ideas transfer to any language.

This is a graduate-level text. The first four chapters on mutual exclusion and concurrent objects are essential reading for anyone who wants to understand what "lock-free" and "wait-free" actually mean, as opposed to what people think they mean. The later chapters on specific data structures build directly on the foundation.

*Reach for it when:* you want to go beyond this book's treatment of concurrency. Specifically: when you need to implement a lock-free data structure not covered here, when you want formal proofs that your concurrent algorithms are correct, or when you want to understand the theoretical limits of what can and cannot be done without locks.

---

**Jeremy Manson, William Pugh, Sarita Adve — "The Java Memory Model" (2005)**

The paper specifying the Java Memory Model introduced in Java 5. The JMM defined happens-before as the formal framework for reasoning about visibility in concurrent Java programs. This is the paper that made "volatile," "synchronized," and atomics formally specified rather than implementation-dependent.

The JMM is directly relevant beyond Java: the C++11 memory model, the Go memory model, and Nex's memory model all use happens-before and the same spectrum of memory orderings (relaxed, acquire, release, sequentially consistent). Understanding the JMM means understanding concurrent memory semantics in essentially all modern languages.

*Reach for it when:* you want the formal definition of happens-before and why it is the right abstraction for concurrent memory. Also useful when debugging a subtle concurrent bug where you need to reason precisely about which writes are visible to which reads.

---

**Dmitry Vyukov — Various writings on lock-free programming (2006–present)**

Vyukov (currently at Google, previously at Intel) has published extensively on lock-free data structures through his website 1024cores.net and through the LMAX Disruptor project. His MPMC queue (the basis of Chapter 18's array-based queue) is described with a careful explanation of the sequence number protocol. His writings on the producer-consumer problem, bounded queues, and memory ordering are among the most practically useful concurrency resources available.

*Reach for it when:* you want the most practically-grounded treatment of lock-free queues and concurrent data structures, written by someone who has implemented and benchmarked these structures on real hardware.

---

**C.A.R. Hoare — "Communicating Sequential Processes" (1978)**

The paper that formalised message passing. Hoare introduces the process calculus that underlies Go's channels, Nex's task system, and Erlang's actor model. The paper is more mathematical than the other papers listed here — it is a formal specification, not a tutorial. But the core ideas are clear: processes communicate through synchronous message passing, the act of communication is synchronisation, and the complexity of shared-state concurrency is replaced by the simpler question of who sends what to whom.

*Reach for it when:* you want the formal foundation behind Chapter 21. Also when you want to understand why Go's designers chose channels as the primary concurrency primitive — they explicitly credited CSP.

---

**Russ Cox — "Regular Expression Matching Can Be Simple And Fast" (2007)**

An article rather than a formal paper, published on Cox's website (swtch.com). Cox explains the difference between Thompson NFA simulation and backtracking engines, derives the O(nm) bound for NFA simulation, and shows the catastrophic failure of backtracking on crafted inputs. The article includes benchmarks comparing RE2 (Cox's NFA-based implementation) with Perl and Python regex engines. The article directly motivated RE2's creation and the subsequent adoption of NFA-based matching in production systems.

*Reach for it when:* you want a clear, accessible explanation of why some regex engines are exponentially slow and how to avoid it. Essential reading before deploying any regex engine in a security-sensitive context.

---

## On Going Deeper

For storage engines beyond what this book covers: the LevelDB source code is the most readable production LSM tree implementation available. The InnoDB source (MySQL's storage engine) is the most readable production B-tree implementation, though substantially more complex. Both are actively maintained and commented.

For distributed systems and how these algorithms apply at scale: Martin Kleppmann's *Designing Data-Intensive Applications* (2017) is the most practically useful book in the space — it treats distributed systems from the data structure and algorithm perspective, showing how the structures in this book become the building blocks of distributed databases, message queues, and consensus systems.

For the mathematical foundations: Knuth's *The Art of Computer Programming* (volumes 1–4) is the authoritative treatment of the mathematics behind sorting, searching, and combinatorial algorithms. It is not a book to read — it is a book to consult. The analysis of algorithms section in volume 1 and the sorting and searching volume (3) are the most relevant to this book. If you find yourself needing a rigorous proof of an average-case complexity result, Knuth either has it or has a reference to it.

---

*The literature is deeper than any one book can map. The papers listed here are the primary sources for the ideas in this book. The textbooks are the most reliable secondary treatments. Everything else — blog posts, conference talks, Stack Overflow answers — should be read with the primary sources in mind.*
