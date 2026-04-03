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
<h1>Bits That Matter</h1>
<h2 style="font-weight:400; font-size:1.4rem; margin-top:0;">Information Theory for Programmers</h2>
<p>This book teaches information theory the way working programmers can actually use it: through compression, protocols, logging, machine learning, cryptography, databases, and system design. The emphasis throughout is practical intuition backed by executable code.</p>
<p>Start reading:</p>
<ul>
  <li><a href="introduction.html">Introduction</a> — why information theory belongs in a programmer’s toolkit.</li>
</ul>
<p><strong>Part I — The Language of Uncertainty</strong></p>
<ol>
  <li><a href="chapter_1.html">What Is Information?</a> — surprise, expectation, and the core intuition behind the field.</li>
  <li><a href="chapter_2.html">Entropy — Measuring the Unknowable</a> — entropy from first principles, with code and real data.</li>
  <li><a href="chapter_3.html">Bits, Nats, and Bans</a> — units of information and when each one is useful.</li>
</ol>
<p><strong>Part II — Compression: Entropy in Action</strong></p>
<ol start="4">
  <li><a href="chapter_4.html">Why Data Compresses (and When It Won't)</a> — redundancy, structure, and the limits of compression.</li>
  <li><a href="chapter_5.html">Codes and Coding</a> — prefix codes, Huffman coding, and practical source coding.</li>
  <li><a href="chapter_6.html">Arithmetic Coding and Beyond</a> — interval coding, context models, and modern compressors.</li>
  <li><a href="chapter_7.html">Kolmogorov Complexity — The Uncomputable Ideal</a> — the shortest description as a way of thinking.</li>
</ol>
<p><strong>Part III — Communication: Sending Information Reliably</strong></p>
<ol start="8">
  <li><a href="chapter_8.html">The Channel Model</a> — noise, capacity, and Shannon’s central theorem.</li>
  <li><a href="chapter_9.html">Error Detection and Correction</a> — parity, Hamming distance, CRCs, and coding against noise.</li>
  <li><a href="chapter_10.html">Channel Capacity in Practice</a> — bandwidth, SNR, and the limits behind real links.</li>
</ol>
<p><strong>Part IV — Inference: Information as a Thinking Tool</strong></p>
<ol start="11">
  <li><a href="chapter_11.html">Relative Entropy and KL Divergence</a> — the cost of using the wrong model.</li>
  <li><a href="chapter_12.html">Mutual Information</a> — dependence, prediction, and what knowing one thing tells you about another.</li>
  <li><a href="chapter_13.html">The Minimum Description Length Principle</a> — learning as compression.</li>
</ol>
<p><strong>Part V — Information Theory in the Wild</strong></p>
<ol start="14">
  <li><a href="chapter_14.html">Entropy in Cryptography</a> — randomness, secrecy, and why low-entropy systems fail.</li>
  <li><a href="chapter_15.html">Information Theory in Machine Learning</a> — cross-entropy, KL, and information bottlenecks in modern ML.</li>
  <li><a href="chapter_16.html">Databases, Indexes, and Selectivity</a> — query planning through an entropy lens.</li>
  <li><a href="chapter_17.html">Designing Information-Dense Systems</a> — logs, APIs, observability, and signal versus noise.</li>
</ol>
<p><strong>Appendices</strong> close the book with notation, reusable Python utilities, further reading, and worked solutions.</p>
:::
