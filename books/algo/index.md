---
title: ""
pagetitle: "Home"
numbered: false
number-sections: false
title-block: false
format:
  html:
    title: "Home"
---

# {-}

::: {.content-visible when-format="html epub"}
<h1>Structures of Scale</h1>
<h2 style="font-weight:400; font-size:1.4rem; margin-top:0;">Advanced Algorithms for Modern Systems</h2>
<p>Every programmer learns the basics. Arrays, linked lists, hash tables, binary search — these appear in every introductory course. By the time you have a few years of professional experience, you know these structures well enough to use them without thinking. And then you hit a wall. The dataset grows past what fits in RAM. The write throughput of your database becomes the bottleneck. You reach for grep on a ten-gigabyte log file and wonder why it finishes in seconds while your own search implementation would take minutes.</p>

<p>This book is about the algorithms and data structures that power real systems — storage engines, databases, text editors, search infrastructure, concurrent servers — treated with full implementation honesty in a language designed for clarity.</p>

<p>Start reading:</p>
<ul>
  <li><a href="preface.html">Preface</a> — who this book is for and how to read it.</li>
</ul>

<p><strong>Part I — When Simple Structures Break Down</strong></p>
<ol>
  <li><a href="chapter_1.html">The Limits of What You Know</a> — where arrays, hash tables, and simple trees fail.</li>
</ol>

<p><strong>Part II — Ordered Structures and Probabilistic Thinking</strong></p>
<ol start="2">
  <li><a href="chapter_2.html">The Balanced Bookshelf</a> — self-balancing trees (AVL, Red-Black).</li>
  <li><a href="chapter_3.html">The Casino Data Structure</a> — skip lists and probabilistic balancing.</li>
  <li><a href="chapter_4.html">When the Library Overflows</a> — B-trees on disk and building a key-value store.</li>
  <li><a href="chapter_5.html">The Write-Heavy Problem</a> — LSM trees, SSTables, and compaction.</li>
  <li><a href="chapter_6.html">Good Enough Answers</a> — bloom filters, count-min sketch, and HyperLogLog.</li>
</ol>

<p><strong>Part III — String Algorithms</strong></p>
<ol start="7">
  <li><a href="chapter_7.html">Does This File Contain That Word?</a> — exact string matching (KMP, Boyer-Moore-Horspool).</li>
  <li><a href="chapter_8.html">The Repeating Pattern</a> — Rabin-Karp and rolling hashes.</li>
  <li><a href="chapter_9.html">The Fuzzy Match</a> — edit distance and dynamic programming.</li>
  <li><a href="chapter_10.html">Autocomplete</a> — tries and radix trees.</li>
  <li><a href="chapter_11.html">What Regex Actually Is</a> — finite automata (NFA/DFA).</li>
  <li><a href="chapter_12.html">The Compression Game</a> — Huffman coding and LZ77.</li>
  <li><a href="chapter_13.html">The Suffix Array</a> — pattern search and bioinformatics applications.</li>
  <li><a href="chapter_14.html">The Editor's Data Structure</a> — ropes and piece tables.</li>
</ol>

<p><strong>Part IV — Sorting at Scale</strong></p>
<ol start="15">
  <li><a href="chapter_15.html">Quicksort</a> — partitioning, pivot choice, and introsort.</li>
  <li><a href="chapter_16.html">Sorting Bigger Than RAM</a> — external mergesort.</li>
</ol>

<p><strong>Part V — Concurrency-Aware Structures</strong></p>
<ol start="17">
  <li><a href="chapter_17.html">The Broken Counter</a> — memory models, visibility, and atomics.</li>
  <li><a href="chapter_18.html">The Lock-Free Queue</a> — CAS in practice.</li>
  <li><a href="chapter_19.html">The Concurrent Map</a> — stripe locking and shared caches.</li>
  <li><a href="chapter_20.html">Immutability as a Concurrency Strategy</a> — persistent data structures.</li>
  <li><a href="chapter_21.html">Message Passing</a> — channels and the CSP model.</li>
</ol>

<p><strong>Appendices</strong> cover complexity and memory cheat sheets, and an annotated bibliography.</p>
:::
