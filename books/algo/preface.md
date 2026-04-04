# Preface

Every programmer learns the basics. Arrays, linked lists, hash tables, binary search — these appear in every introductory course, every interview preparation guide, every algorithms textbook written in the last forty years. By the time you have a few years of professional experience, you know these structures well enough to use them without thinking.

And then you hit a wall.

The dataset grows past what fits in RAM. The write throughput of your database becomes the bottleneck. Two threads corrupt shared state in a way that only reproduces under load, at three in the morning, on a production server you cannot easily debug. You reach for grep on a ten-gigabyte log file and wonder why it finishes in seconds while your own search implementation would take minutes. You open the Redis documentation and see that sorted sets are implemented with something called a skip list, and you realise you have no idea what that is or why it was chosen.

These are the moments this book was written for.

---

## What This Book Is

*Structures That Matter* is a book about the algorithms and data structures that power real systems — storage engines, databases, text editors, search infrastructure, concurrent servers — treated with full implementation honesty in a language designed for clarity.

It is not an introduction. It assumes you already know what a hash table is and roughly how it works. It assumes you have written code professionally and have felt, at least once, the specific frustration of knowing that your current approach is wrong but not knowing what the right approach looks like. It starts where most books stop.

Every chapter in this book opens with a problem — a concrete, practical situation that a working programmer might actually face. The data structure or algorithm is not introduced until the problem has been felt. This is deliberate. Understanding *why* a structure exists is more durable than understanding *how* it works, and knowing *when* to reach for it is more valuable than either.

---

## What You Will Find Here

The book is organised in five parts.

Part I sets the stage by breaking familiar structures deliberately — showing exactly where arrays, hash tables, and simple trees fail, and establishing the three lenses through which every subsequent chapter will examine its subject: asymptotic complexity, I/O complexity, and cache behaviour.

Part II covers the ordered and probabilistic structures that appear constantly in real systems but are rarely explained with full implementation depth. Self-balancing trees, skip lists, B-trees on disk, LSM trees, bloom filters, count-min sketch, HyperLogLog. The B-tree chapter is the longest in the book, by design — a complete, working, disk-backed key-value store, built from raw bytes up, is not something that can be done in ten pages without lying about the hard parts.

Part III is about strings, which is where most books are weakest and where working programmers spend more time than they expect. Eight chapters cover exact matching, rolling hashes, edit distance, tries, regular expression internals, compression, suffix arrays, and the data structures that make large mutable text — the kind a code editor manipulates — tractable.

Part IV covers sorting at scale. Not the sorting you learned in school, but quicksort as standard libraries actually implement it, and mergesort as you would write it when the data does not fit in memory and you are working directly with disk.

Part V is about concurrency-aware data structures, which is the subject most conspicuously absent from the algorithms literature despite being something every programmer working today encounters constantly. It begins with a broken counter — the simplest possible demonstration that shared mutable state is not what you think it is — and builds from there through lock-free queues, concurrent maps, persistent structures, and message-passing with channels.

---

## On Nex

All implementations in this book are written in Nex, a practical, expression-oriented language designed to teach good software engineering habits — problem decomposition, interface design, invariants, and testable program structure. Nex has first-class support for contracts and Design by Contract, which means the invariants that matter for correctness — a B-tree node must have at least t-1 keys, a bloom filter's bit array must not shrink — are not just comments in the code. They are enforced, verified, and visible.

If you have not used Nex before, Appendix A is a complete reference. The language is small enough that an experienced programmer will be reading code fluently within an hour. The syntax is clean and the semantics are unsurprising. Where the language has a genuine advantage — its native channels and tasks for the concurrency chapters, its contract system throughout — that advantage is used deliberately, not incidentally.

One note on the B-tree chapter specifically: it uses Nex's `Binary_File` with `seek` and `position` for direct random access to pages on disk. This is real file I/O, not a simulation. The code in that chapter opens a file, writes pages at calculated byte offsets, reads them back, manages a free list, and handles root splits that propagate changes to a header page. If you have ever wondered what a storage engine actually does at the file level, that chapter will show you without abstraction.

---

## On Implementation Honesty

Every implementation in this book is complete and runnable. There are no ellipses standing in for the hard parts, no "the deletion case is left as an exercise," no toy versions that work for three elements but not three million. Where a full implementation would require a genuinely separate book — the DFA construction for regular expressions, say, or a production-grade write-ahead log — that is stated plainly, the core ideas are implemented, and a pointer to further reading is given.

The implementations also use Nex's contract system throughout. Preconditions, postconditions, and class invariants appear not as decoration but as the primary tool for thinking about correctness. A structure that maintains its invariants under every operation is correct by construction, not by hope. This discipline, more than any particular algorithm, is what separates code that holds up in production from code that works in tests.

---

## A Note on What Is Not Here

This book does not cover graph algorithms. BFS, DFS, Dijkstra, topological sort — these are important, well-understood, and covered thoroughly in half a dozen excellent books, starting with Sedgewick's. Repeating that coverage here would displace material that is harder to find treated well.

This book does not cover machine learning algorithms, numerical methods, or optimisation theory. These deserve their own treatment and their own book, written by someone with the right background to do them justice.

This book does not cover the basics. If you need a refresher on what a hash table is, Robert Sedgewick's *Algorithms* or Steven Skiena's *The Algorithm Design Manual* are excellent starting points. Come back when the basics feel comfortable.

What this book covers, it covers completely. That is the only promise it makes, and it intends to keep it.

---

## How to Read This Book

Sequentially is fine, and the parts are ordered so that later chapters occasionally build on earlier ones — the bloom filter introduced in Part II reappears in the LSM tree chapter, the page-size intuition from B-trees resurfaces in external mergesort, the piece table in Part III connects to persistent structures in Part V. These connections are signposted when they appear.

But the parts are also largely self-contained. If you are here specifically for the string algorithms, start at Part III. If concurrency is your immediate problem, Part V stands alone with only a light dependency on the memory model discussion in Chapter 17. If you want to understand what RocksDB is doing, read Chapters 4, 5, and 6 in sequence.

Each chapter ends with a short section called *Where This Lives in the Wild* — a concrete mapping of the chapter's ideas to production systems you have almost certainly used. These sections are not summaries. They are invitations: having understood the structure, you now have the vocabulary to read the actual source code of Redis, RocksDB, or the Linux kernel and recognise what you are looking at.

---

## A Final Word

Niklaus Wirth titled his landmark book *Algorithms + Data Structures = Programs*. The equation is still true. What has changed is the scale at which programs operate, the concurrency they are expected to handle, and the gap between what introductory education provides and what production systems demand.

This book is an attempt to close some of that gap — not by being comprehensive, but by being honest, complete, and grounded in problems that are real. The structures here matter because systems you use every day are built on them. Understanding them will not just make you a better programmer. It will change how you see the software you already work with.

That is worth a few hundred pages of careful attention.

— *The Author*
