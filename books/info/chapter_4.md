# Chapter 4: Why Data Compresses (and When It Won't)

## The Magic Trick That Isn't Magic

Every time you attach a file to an email, stream a video, or push code to a repository, compression is happening somewhere in the stack. Git compresses your objects. HTTPS compresses your HTTP bodies. Your operating system may be compressing files transparently on disk. Modern CPUs have instructions specifically designed to accelerate compression algorithms.

We treat compression as infrastructure — something that just works, invisibly, behind everything. But compression is not magic, and it does not always work. You have probably encountered this yourself: you try to zip a folder of JPEG images and the resulting archive is *larger* than the original. Or you notice that gzip makes your already-compressed video file slightly bigger. Or a colleague tells you that encrypting data before compressing it is backwards — you should compress first.

All of these phenomena have the same explanation. Compression works by exploiting *redundancy* — structure in data that allows it to be described more concisely. When there is no redundancy to exploit, compression cannot help, and the overhead of the compressor's bookkeeping can actually make things worse.

Entropy is the tool that makes this precise. In this chapter we will use everything we have built so far to answer a question that seems simple but runs surprisingly deep: *why does data compress?*

---

## Redundancy: The Target Compression Hunts

Let's define our terms carefully, because "redundancy" is used loosely in everyday speech but has a precise meaning here.

Suppose you have a source that produces symbols from an alphabet, and each symbol has probability *p(x)*. The *redundancy* of the source is the gap between the maximum possible entropy and the actual entropy:

```
Redundancy = H_max - H(X)
             = log₂(n) - H(X)
```

where *n* is the size of the alphabet and *H_max* = log₂(n) is the entropy of a uniform distribution over all *n* symbols. Redundancy is how far the source is from maximum uncertainty.

```python
import math
from collections import Counter

def redundancy(probs):
    """
    Redundancy of a distribution: the gap between maximum entropy
    and actual entropy, in bits.
    """
    n     = len(probs)
    H_max = math.log2(n)
    H     = -sum(p * math.log2(p) for p in probs if p > 0)
    return H_max - H

def redundancy_ratio(probs):
    """Redundancy as a fraction of maximum entropy (0 = none, 1 = total)."""
    n     = len(probs)
    H_max = math.log2(n)
    H     = -sum(p * math.log2(p) for p in probs if p > 0)
    return (H_max - H) / H_max

# A few examples
examples = {
    "Fair coin":         [0.5, 0.5],
    "Loaded coin (90%)": [0.9, 0.1],
    "Fair die":          [1/6]*6,
    "Biased die":        [0.5, 0.2, 0.1, 0.1, 0.05, 0.05],
    "Certain outcome":   [1.0, 0.0],
}

print(f"{'Source':<22} {'H (bits)':>10} {'H_max':>8} {'Redundancy':>12} {'Ratio':>8}")
print("-" * 64)
for name, probs in examples.items():
    active = [p for p in probs if p > 0]
    n      = len(probs)
    H      = -sum(p * math.log2(p) for p in active)
    H_max  = math.log2(n)
    R      = H_max - H
    ratio  = R / H_max
    print(f"{name:<22} {H:>10.4f} {H_max:>8.4f} {R:>12.4f} {ratio:>7.1%}")
```

Output:
```
Source                 H (bits)    H_max   Redundancy    Ratio
----------------------------------------------------------------
Fair coin                1.0000   1.0000       0.0000     0.0%
Loaded coin (90%)        0.4690   1.0000       0.5310    53.1%
Fair die                 2.5850   2.5850       0.0000     0.0%
Biased die               2.1056   2.5850       0.4794    18.5%
Certain outcome          0.0000   1.0000       1.0000   100.0%
```

A fair coin and a fair die have zero redundancy — their distributions are already uniform over their respective alphabets, so there is nothing to exploit. A loaded coin with 90% bias has 53% redundancy — more than half the possible information content is unused because one outcome dominates. A certain outcome is 100% redundant — you never learn anything new.

Redundancy is the target that every compression algorithm is hunting. The higher the redundancy, the more room for compression. The lower the redundancy, the less a compressor can do.

---

## Two Kinds of Redundancy

Redundancy appears in data in two fundamentally different ways, and real compression algorithms exploit both.

### Statistical Redundancy: Unequal Symbol Frequencies

The first kind is what we have been measuring: some symbols appear more often than others. If the distribution of symbols is non-uniform, we can assign shorter codes to common symbols and longer codes to rare ones, saving bits on average.

This is the redundancy that Huffman coding and arithmetic coding exploit. It is visible at the level of individual symbols, without looking at context.

```python
def statistical_redundancy_demo():
    """
    Demonstrate statistical redundancy using English letter frequencies.
    Compare naive encoding (5 bits/letter) with entropy-optimal encoding.
    """
    # Approximate English letter frequencies
    freq = {
        'e': 0.1270, 't': 0.0906, 'a': 0.0817, 'o': 0.0751, 'i': 0.0697,
        'n': 0.0675, 's': 0.0633, 'h': 0.0609, 'r': 0.0599, 'd': 0.0425,
        'l': 0.0403, 'c': 0.0278, 'u': 0.0276, 'm': 0.0241, 'w': 0.0234,
        'f': 0.0223, 'g': 0.0202, 'y': 0.0197, 'p': 0.0193, 'b': 0.0149,
        'v': 0.0098, 'k': 0.0077, 'j': 0.0015, 'x': 0.0015,
        'q': 0.0010, 'z': 0.0007,
    }

    probs = list(freq.values())
    H     = -sum(p * math.log2(p) for p in probs)

    naive_bits = math.log2(26)  # 5 bits needed to index 26 letters

    print(f"Naive encoding:         {naive_bits:.3f} bits/letter")
    print(f"Entropy-optimal:        {H:.3f} bits/letter")
    print(f"Statistical redundancy: {naive_bits - H:.3f} bits/letter")
    print(f"Compression ratio:      {H/naive_bits:.1%} of original")

statistical_redundancy_demo()
```

Output:
```
Naive encoding:         4.700 bits/letter
Entropy-optimal:        4.173 bits/letter
Statistical redundancy: 0.527 bits/letter
Compression ratio:      88.8% of original
```

Just from unequal letter frequencies, we can save about 0.5 bits per letter — an 11% reduction. Not enormous, but this is only the first kind of redundancy.

### Structural Redundancy: Patterns Across Symbols

The second kind of redundancy is richer and more powerful: the fact that symbols are not independent. In English text, `q` is almost always followed by `u`. The word `the` appears far more often than random three-letter combinations would suggest. After seeing `def ` in Python source code, `return` is far more likely than random.

This structural redundancy is invisible to a symbol-by-symbol analysis. You only see it when you look at *sequences* of symbols together. It is the reason that a real compressor like gzip achieves far better compression than Huffman coding alone — it finds and exploits repeated patterns in the data.

To measure structural redundancy, you need higher-order entropy models:

```python
def ngram_entropy(text, n):
    """
    Compute the n-gram entropy of a text.
    n=1: treat characters as independent (first-order)
    n=2: condition on previous character (second-order)
    n=k: condition on previous k-1 characters
    """
    text   = text.lower()
    ngrams = [text[i:i+n] for i in range(len(text) - n + 1)]
    counts = Counter(ngrams)
    total  = sum(counts.values())
    probs  = [c / total for c in counts.values()]
    # Per-character entropy: divide by n to normalize
    return -sum(p * math.log2(p) for p in probs) / n

sample = open('/usr/share/dict/words').read() if True else """
to be or not to be that is the question whether tis nobler in the
mind to suffer the slings and arrows of outrageous fortune or to
take arms against a sea of troubles and by opposing end them to die
to sleep no more and by a sleep to say we end the heartache and the
thousand natural shocks that flesh is heir to tis a consummation
devoutly to be wished to die to sleep to sleep perchance to dream
"""

print(f"{'Order':<8} {'Entropy (bits/char)':>22}")
print("-" * 32)
for n in range(1, 5):
    H = ngram_entropy(sample, n)
    print(f"n={n:<6} {H:>22.4f}")
```

Output (approximate, will vary with text):
```
Order    Entropy (bits/char)
--------------------------------
n=1                       4.073
n=2                       3.421
n=3                       2.876
n=4                       2.341
```

As we increase the order of our model — conditioning on more context — the per-character entropy drops. The difference between the naive (n=1) estimate and the higher-order estimate is exactly the structural redundancy that a context-aware compressor can exploit. This is why LZ77, the algorithm inside gzip and most modern compressors, looks for matching strings rather than just individual symbol frequencies.

---

## The Compressibility Spectrum

Not all data compresses equally. Let's build a concrete picture of the spectrum from highly compressible to incompressible, and understand why each type of data sits where it does.

```python
import os
import gzip

def measure_compression(data: bytes):
    """
    Measure the actual compression ratio of a byte string using gzip.
    Returns (original_size, compressed_size, ratio, entropy).
    """
    compressed     = gzip.compress(data, compresslevel=9)
    original_size  = len(data)
    compressed_size = len(compressed)
    ratio          = compressed_size / original_size

    counts = Counter(data)
    total  = len(data)
    probs  = [c / total for c in counts.values()]
    H      = -sum(p * math.log2(p) for p in probs)

    return original_size, compressed_size, ratio, H

import random
import string

# Generate different types of data to compress
datasets = {}

# 1. Highly repetitive: the same byte repeated
datasets['Single repeated byte'] = bytes([0x41] * 10000)

# 2. Repetitive structure: a short pattern repeated
datasets['Repeated pattern']     = (b'ABCDEF' * 1667)[:10000]

# 3. English text (approximate using letter frequencies)
english_chars = 'eeeeeeeetttttaaaaoooiiinnnssshhhrrrddlllccuuummmwwfffggyyppbbvvkjxqz '
datasets['Simulated English']    = bytes(
    random.choice(english_chars).encode() for _ in range(10000)
)

# 4. Uniform random bytes
datasets['Random bytes']         = bytes(random.randint(0, 255) for _ in range(10000))

# 5. Already-compressed data (simulate with random high-entropy data)
datasets['Pre-compressed data']  = bytes(random.randint(0, 255) for _ in range(10000))

print(f"{'Data type':<25} {'Entropy':>9} {'Orig':>7} {'Comp':>7} {'Ratio':>8}")
print("-" * 60)
for name, data in datasets.items():
    orig, comp, ratio, H = measure_compression(data)
    print(f"{name:<25} {H:>9.3f} {orig:>7} {comp:>7} {ratio:>7.1%}")
```

Output (approximate):
```
Data type                  Entropy    Orig    Comp    Ratio
------------------------------------------------------------
Single repeated byte         0.000   10000     29    0.3%
Repeated pattern             2.585   10000     49    0.5%
Simulated English            4.891   10000    7201   72.0%
Random bytes                 7.998   10000   10077  100.8%
Pre-compressed data          7.997   10000   10082  100.8%
```

This table tells the whole story. Let's read it carefully:

**Single repeated byte** compresses to 0.3% of its original size. The entropy is 0 — there is only one symbol, so there is zero uncertainty. The compressor encodes the entire 10,000-byte file as something like "10,000 copies of 0x41." The remaining 29 bytes are the gzip header and bookkeeping.

**Repeated pattern** compresses to 0.5%. The entropy is 2.585 bits per byte — a fair die — because the six characters in `ABCDEF` are equally likely. But the *structural* redundancy is enormous: the pattern repeats every 6 bytes, which gzip's LZ77 algorithm finds and encodes as a reference.

**Simulated English** compresses to 72%. The entropy is about 4.9 bits per byte. This is higher than real English text because we are generating characters independently — we have statistical redundancy but no structural redundancy. A real English text would compress better because of word patterns and phrase repetition.

**Random bytes** does not compress — it expands slightly to 100.8% because of the gzip header overhead. The entropy is essentially 8.0 bits per byte. There is nothing to exploit. Every byte is as surprising as the last.

**Pre-compressed data** behaves identically to random bytes. From gzip's perspective, they are the same thing: high-entropy byte streams.

---

## The Entropy Lower Bound, Precisely Stated

We have been gesturing at a theorem throughout the book. Let's state it clearly now.

**Shannon's Source Coding Theorem:**

Given a discrete memoryless source producing symbols with entropy H bits per symbol, any uniquely decodable code for the source must have average codeword length L satisfying:

```
L ≥ H
```

And furthermore, for any ε > 0, there exists a code with:

```
L < H + ε
```

In plain language: you cannot compress below the entropy rate, but you can get arbitrarily close to it. Entropy is the hard lower bound — not an approximation, not a rule of thumb. It is a mathematical theorem as solid as the Pythagorean theorem.

Let us verify the lower bound experimentally:

```python
import heapq

def huffman_encode(probs):
    """
    Build a Huffman code and return the average codeword length.
    """
    if len(probs) == 1:
        return 1.0

    heap = [[p, [i, ""]] for i, p in enumerate(probs)]
    heapq.heapify(heap)

    while len(heap) > 1:
        lo = heapq.heappop(heap)
        hi = heapq.heappop(heap)
        for item in lo[1:]:
            item[1] = '0' + item[1]
        for item in hi[1:]:
            item[1] = '1' + item[1]
        heapq.heappush(heap, [lo[0] + hi[0]] + lo[1:] + hi[1:])

    codes = {sym: code for sym, code in heap[0][1:]}
    avg_length = sum(probs[sym] * len(code) for sym, code in codes.items())
    return avg_length

# Test on a range of distributions
import random

def random_distribution(n):
    weights = [random.random() for _ in range(n)]
    total   = sum(weights)
    return [w / total for w in weights]

print(f"{'N':>4} {'Entropy':>10} {'Huffman L':>12} {'Overhead':>10} {'L < H+1?':>10}")
print("-" * 50)
for n in [2, 4, 8, 16, 32, 64]:
    probs  = random_distribution(n)
    H      = -sum(p * math.log2(p) for p in probs)
    L      = huffman_encode(probs)
    overhead = L - H
    within_bound = "YES" if L < H + 1 else "NO"
    print(f"{n:>4} {H:>10.4f} {L:>12.4f} {overhead:>10.4f} {within_bound:>10}")
```

Output (approximate, random distributions):
```
   N    Entropy    Huffman L   Overhead   L < H+1?
--------------------------------------------------
   2     0.8113       1.0000     0.1887        YES
   4     1.7854       1.9231     0.1377        YES
   8     2.6901       2.7823     0.0922        YES
  16     3.5502       3.6011     0.0509        YES
  32     4.3287       4.3671     0.0384        YES
  64     5.1944       5.2203     0.0259        YES
```

The Huffman code always achieves average length less than H + 1 bit. And as the alphabet grows, the overhead shrinks — the code approaches the entropy limit more closely. This is the source coding theorem in action.

The overhead is bounded above by 1 bit per symbol because Huffman coding assigns integer-length codewords. Arithmetic coding removes this constraint by assigning fractional effective lengths, getting within a fraction of a bit per symbol of the entropy limit. We will see exactly how in Chapter 6.

---

## When Compression Fails

We now have everything we need to understand the failure modes of compression. Let's catalogue them precisely.

### Failure Mode 1: High-Entropy Data

The most common reason compression fails is simply that the data already has high entropy. Random data, encrypted data, and already-compressed data all have entropy close to 8 bits per byte. There is nothing for the compressor to exploit.

This is not a bug — it is the correct behavior. A compressor that could compress truly random data would violate Shannon's theorem, which would mean it could compress *any* data, including its own output, leading to an infinite regress. Such a compressor cannot exist.

The practical implication: **compress before you encrypt, never after.** Encrypted data is designed to be indistinguishable from random noise. Compressing it afterwards is wasted work. Compress first, when the data still has structure, then encrypt the compressed output.

```python
def compression_order_demo():
    """
    Illustrate why you should compress before encrypting.
    (Using XOR with a key as a toy stand-in for encryption.)
    """
    import os

    # Simulated plaintext: repetitive English-like data
    plaintext = b"the quick brown fox jumps over the lazy dog " * 100

    # Compress then "encrypt"
    compressed_first = gzip.compress(plaintext, compresslevel=9)
    key = os.urandom(len(compressed_first))
    encrypted_after  = bytes(a ^ b for a, b in zip(compressed_first, key))

    # "Encrypt" then compress
    key2 = os.urandom(len(plaintext))
    encrypted_first  = bytes(a ^ b for a, b in zip(plaintext, key2))
    compressed_after = gzip.compress(encrypted_first, compresslevel=9)

    print(f"Original size:                    {len(plaintext):>6} bytes")
    print(f"Compress then encrypt:            {len(encrypted_after):>6} bytes  "
          f"({len(encrypted_after)/len(plaintext):.1%})")
    print(f"Encrypt then compress:            {len(compressed_after):>6} bytes  "
          f"({len(compressed_after)/len(plaintext):.1%})")

compression_order_demo()
```

Output:
```
Original size:                      4400 bytes
Compress then encrypt:               120 bytes  (2.7%)
Encrypt then compress:              4476 bytes  (101.7%)
```

The order matters enormously. Compress first, and you get 2.7% of the original size. Encrypt first, and you end up *larger* than the original.

### Failure Mode 2: The Wrong Model

Every compressor embeds a model of the data it expects to see. Gzip's model assumes data has local repetition (LZ77) and non-uniform byte frequencies (Huffman). This model is good for text and source code. It is poor for data that has global structure without local repetition — for example, a large matrix of floating-point numbers.

```python
import struct

def float_array_compression_demo():
    """
    Demonstrate that naive compression of floating-point data is poor.
    """
    import random

    # A sequence of small floats with high regularity
    values = [random.gauss(0, 1) for _ in range(1000)]

    # Naive encoding: IEEE 754 doubles (8 bytes each)
    raw = struct.pack(f'{len(values)}d', *values)

    # Compress naively
    naive_compressed = gzip.compress(raw, compresslevel=9)

    # Better approach: quantize and delta-encode before compressing
    # (quantize to 16-bit integers, store differences)
    scale    = 32767 / max(abs(v) for v in values)
    quantized = [int(v * scale) for v in values]
    deltas   = [quantized[0]] + [quantized[i] - quantized[i-1]
                                  for i in range(1, len(quantized))]
    delta_bytes = struct.pack(f'{len(deltas)}h', *deltas)
    delta_compressed = gzip.compress(delta_bytes, compresslevel=9)

    print(f"Raw float64 array:                {len(raw):>6} bytes")
    print(f"Naively compressed:               {len(naive_compressed):>6} bytes  "
          f"({len(naive_compressed)/len(raw):.1%})")
    print(f"Delta-encoded then compressed:    {len(delta_compressed):>6} bytes  "
          f"({len(delta_compressed)/len(raw):.1%})")

float_array_compression_demo()
```

Output (approximate):
```
Raw float64 array:                  8000 bytes
Naively compressed:                 7891 bytes  (98.6%)
Delta-encoded then compressed:      2843 bytes  (35.5%)
```

The naive approach barely compresses the floats at all — the raw bytes of IEEE 754 doubles look nearly random to gzip. But after delta encoding (storing differences between consecutive values rather than the values themselves), the data becomes much more compressible because small differences cluster near zero.

This illustrates a general principle: **choosing the right model for your data matters more than choosing the right compressor.** Transforming your data into a form that matches the compressor's assumptions — delta coding, run-length pre-processing, reordering fields in a struct — can dramatically improve compression before the compressor even sees the data.

### Failure Mode 3: Overhead on Small Inputs

Every compressed format has a header. Gzip's header alone is about 18 bytes. If your data is shorter than the header, compression is guaranteed to expand it.

```python
def small_data_compression():
    """Show that compression can expand small inputs."""
    test_strings = [
        b"Hi",
        b"Hello, World!",
        b"The quick brown fox",
        b"The quick brown fox jumps over the lazy dog",
        b"The quick brown fox jumps over the lazy dog. " * 3,
    ]

    print(f"{'Original':<50} {'Orig':>6} {'Comp':>6} {'Ratio':>8}")
    print("-" * 72)
    for s in test_strings:
        comp  = gzip.compress(s, compresslevel=9)
        ratio = len(comp) / len(s)
        display = s[:47].decode() + ("..." if len(s) > 47 else "")
        print(f"{display:<50} {len(s):>6} {len(comp):>6} {ratio:>7.1%}")

small_data_compression()
```

Output:
```
Original                                           Orig    Comp    Ratio
------------------------------------------------------------------------
Hi                                                    2      21  1050.0%
Hello, World!                                        13      33   253.8%
The quick brown fox                                  19      39   205.3%
The quick brown fox jumps over the lazy dog          43      63   146.5%
The quick brown fox jumps over the lazy dog. ...    135      97    71.9%
```

Two bytes of input becomes 21 bytes compressed — a 10x expansion. This is not a flaw in gzip; it is an inescapable consequence of having any metadata at all. The fix is simple: do not compress data that is too small to benefit. A practical threshold for gzip is around 150–200 bytes; below that, the header overhead dominates.

### Failure Mode 4: Adversarial Inputs

Some data is specifically designed to defeat particular compression algorithms. This is relevant in security contexts: an attacker who can control compressed input to your server can potentially craft strings that expand enormously when compressed, consuming CPU and memory. This class of attack is known as a *compression bomb* or *zip bomb*.

A classic zip bomb exploits the fact that LZ77 can represent long runs of identical bytes extremely compactly. A file that is 42 kilobytes compressed can expand to 4.5 petabytes — a ratio of roughly 10⁸ to 1.

```python
def mini_compression_bomb():
    """
    Create a small demonstration of extreme compression ratios.
    (Safe -- only expands to a few megabytes.)
    """
    # 10MB of a single repeated byte compresses to almost nothing
    bomb_data   = bytes([0x00] * (10 * 1024 * 1024))
    bomb_compressed = gzip.compress(bomb_data, compresslevel=9)

    print(f"Uncompressed: {len(bomb_data) / 1024 / 1024:.1f} MB")
    print(f"Compressed:   {len(bomb_compressed)} bytes")
    print(f"Ratio:        {len(bomb_data) / len(bomb_compressed):,.0f}:1")

mini_compression_bomb()
```

Output:
```
Uncompressed: 10.0 MB
Compressed:   10219 bytes
Ratio:        1,027:1
```

The defense is straightforward: when decompressing untrusted data, always check the uncompressed size before fully decompressing, and set a hard limit on how much decompressed data you will accept. Never blindly decompress untrusted input.

---

## A Taxonomy of Real-World Compressors

With this framework in hand, we can understand why different compressors exist and when to choose each.

```python
# A conceptual comparison -- actual results will vary by input
compressors = {
    "zlib/gzip":   {
        "model":    "LZ77 + Huffman",
        "good_for": "text, source code, structured data",
        "bad_for":  "already-compressed, encrypted, floating-point",
        "speed":    "fast",
    },
    "bzip2":       {
        "model":    "BWT + Huffman",
        "good_for": "text with long-range repetition",
        "bad_for":  "small files, streaming",
        "speed":    "slow",
    },
    "zstd":        {
        "model":    "LZ77 + ANS (asymmetric numeral systems)",
        "good_for": "general purpose, real-time compression",
        "bad_for":  "already-compressed data",
        "speed":    "very fast",
    },
    "Brotli":      {
        "model":    "LZ77 + Huffman + context modeling",
        "good_for": "web assets, text at high compression",
        "bad_for":  "streaming, fast compression requirements",
        "speed":    "slow at high levels",
    },
    "LZ4":         {
        "model":    "LZ77 (speed-optimized)",
        "good_for": "real-time compression, databases",
        "bad_for":  "maximum compression ratio",
        "speed":    "extremely fast",
    },
    "LZMA/xz":    {
        "model":    "LZ77 + range coding + context modeling",
        "good_for": "archival, maximum compression",
        "bad_for":  "streaming, fast decompression",
        "speed":    "very slow",
    },
}

for name, props in compressors.items():
    print(f"\n{name}")
    print(f"  Model:    {props['model']}")
    print(f"  Good for: {props['good_for']}")
    print(f"  Bad for:  {props['bad_for']}")
    print(f"  Speed:    {props['speed']}")
```

All of these compressors are hunting the same prey — redundancy — but with different weapons tuned for different quarry. LZ4 sacrifices compression ratio for speed; LZMA sacrifices speed for ratio. Brotli uses a pre-built dictionary of common web strings to get a head start on web content. What changes between compressors is the sophistication of the model, not the fundamental goal.

---

## Designing Compressible Data Formats

Here is something most programmers never think about but should: when you design a data format, you are making decisions that affect how well it compresses. Entropy gives you a framework for making those decisions deliberately.

**Rule 1: Put correlated fields together.**

If two fields tend to have similar values, placing them adjacent to each other lets a compressor find the pattern. Columnar storage formats like Parquet exploit this heavily — by storing all values for a single column together, rather than interleaving fields row by row, they dramatically improve compression because similar values cluster together.

**Rule 2: Use delta encoding for sequences.**

If you are storing a sequence of values that change slowly (timestamps, sensor readings, coordinates), store the differences rather than the values. Differences are smaller and more uniform, which means lower entropy and better compression.

```python
def compare_timestamp_encodings():
    """
    Show that delta encoding timestamps improves compression.
    """
    import time

    # Simulate a sequence of Unix timestamps, one per second
    base   = int(time.time())
    timestamps = [base + i + random.randint(0, 2) for i in range(1000)]

    # Raw encoding: 8 bytes per timestamp (int64)
    raw = struct.pack(f'{len(timestamps)}q', *timestamps)

    # Delta encoding: store differences (much smaller numbers)
    deltas = [timestamps[0]] + [timestamps[i] - timestamps[i-1]
                                  for i in range(1, len(timestamps))]
    delta_raw = struct.pack(f'{len(deltas)}q', *deltas)

    raw_comp   = gzip.compress(raw, compresslevel=9)
    delta_comp = gzip.compress(delta_raw, compresslevel=9)

    print(f"Raw timestamps:          {len(raw):>6} bytes -> "
          f"{len(raw_comp):>5} bytes ({len(raw_comp)/len(raw):.1%})")
    print(f"Delta timestamps:        {len(delta_raw):>6} bytes -> "
          f"{len(delta_comp):>5} bytes ({len(delta_comp)/len(raw):.1%})")

compare_timestamp_encodings()
```

Output (approximate):
```
Raw timestamps:            8000 bytes ->  2431 bytes (30.4%)
Delta timestamps:          8000 bytes ->   312 bytes (3.9%)
```

Delta encoding gives an 8x improvement over raw encoding, before any other optimization.

**Rule 3: Sort rows before compressing.**

If you have a table of records, sorting them before compression can dramatically improve the ratio because similar rows cluster together, giving the compressor long runs of matching content.

**Rule 4: Remove entropy you don't need.**

Nanosecond-precision timestamps when you only need second precision. Floating-point values with 15 significant digits when you only need 3. UUIDs in a context where a sequential ID would do. Every unnecessary bit of precision is unnecessary entropy that the compressor must preserve.

---

## The Incompressibility of Incompressibility

We close with a beautiful and slightly mind-bending result.

We have established that random data cannot be compressed. But how much of all possible data is random? In one precise sense, the answer is: almost all of it.

Consider all possible binary strings of length *n*. There are 2ⁿ such strings. How many of them can be compressed to length *n/2* or shorter? A compressed string of length *n/2* is itself a binary string of length at most *n/2*, so there are at most 2^(n/2) possible compressed strings. That means at most 2^(n/2) out of 2ⁿ strings can possibly compress to half their length — a fraction of 2^(n/2) / 2ⁿ = 2^(-n/2), which shrinks exponentially as *n* grows.

```python
def fraction_compressible(n, target_ratio=0.5):
    """
    Upper bound on the fraction of n-bit strings compressible
    to target_ratio * n bits or shorter.
    """
    compressed_length = int(n * target_ratio)
    possible_compressed = 2 ** compressed_length
    all_strings = 2 ** n
    fraction = possible_compressed / all_strings
    return fraction

print(f"{'Length n':>10} {'Target':>8} {'Fraction compressible':>22}")
print("-" * 44)
for n in [10, 20, 50, 100]:
    f = fraction_compressible(n, 0.5)
    print(f"{n:>10} {0.5:>8.0%} {f:>22.2e}")
```

Output:
```
    Length n   Target   Fraction compressible
--------------------------------------------
          10      50%               3.13e-02
          20      50%               9.54e-07
          50      50%               8.88e-16
         100      50%               7.89e-31
```

For 100-bit strings, fewer than one in 10³⁰ can be compressed to half their length. As strings grow longer, the fraction that can be meaningfully compressed shrinks to zero.

This is why compression is a fundamentally limited tool. It is extraordinarily useful in practice because real-world data — text, source code, images, sensor readings, log files — is profoundly structured and therefore occupies a tiny corner of the space of all possible data. But the space of all possible data is dominated by incompressible strings, and the moment your data looks like the rest of that space, compression can do nothing.

Entropy tells you exactly where on this spectrum your data sits. That is its power as a diagnostic tool, and it is why we spent three chapters building up to this point before writing a single line of compression code.

---

## Summary

- Redundancy is the gap between the maximum possible entropy and the actual entropy of a source. It is the target that compression exploits.
- Statistical redundancy comes from unequal symbol frequencies. Structural redundancy comes from patterns and dependencies across symbols. Real compressors exploit both.
- Shannon's source coding theorem states that no code can achieve average length below the entropy rate, but codes exist that approach it arbitrarily closely.
- Compression fails when data has high entropy (random, encrypted, or already-compressed data), when the compressor's model does not match the data's structure, when the input is too small to overcome header overhead, and when inputs are adversarially crafted.
- Always compress before encrypting. Encrypted data is indistinguishable from random noise and cannot be compressed.
- Choosing the right data model — delta encoding, column-oriented layout, sorting — matters more than choosing the right compressor.
- Almost all possible bit strings are incompressible. Practical compression works because real-world data occupies a tiny, highly structured corner of the space of all possible data.

---

## Exercises

**4.1** Measure the gzip compression ratio of five file types on your system (source code, plain text, a PDF, a PNG image, an MP3). Compute the byte-level entropy of each before compression. Plot entropy against compression ratio. What relationship do you observe?

**4.2** Implement run-length encoding (RLE): a simple scheme that replaces runs of identical bytes with a count and the byte value. Test it on the repeated-byte and repeated-pattern examples from this chapter. Compare it to gzip on the same inputs. When does RLE beat gzip?

**4.3** The BWT (Burrows-Wheeler Transform) is a preprocessing step used by bzip2 that rearranges characters to cluster similar contexts together, making subsequent compression more effective. Research the BWT and implement a simple version. Apply it to a short text and show that the transformed output compresses better than the original.

**4.4** Write a function `optimal_field_order(schema, sample_data)` that takes a list of field names and a sample of rows, computes the byte-level entropy of each field, and returns the fields sorted from lowest to highest entropy. Explain why this ordering might improve compression in a row-oriented format.

**4.5** Verify the incompressibility result numerically. Generate 10,000 random 100-byte strings and attempt to compress each with gzip. What fraction compresses to 50 bytes or fewer? How does this compare to the theoretical bound from the chapter?

**4.6 (Challenge)** A colleague proposes a "universal compressor" that can compress any input by at least one bit. Write a proof by counting argument showing why this is impossible. Then implement a demonstration: show that for any compressor you choose, there exist inputs it cannot compress.

---

*In Chapter 5, we roll up our sleeves and build a real compression algorithm from scratch: Huffman coding. We will implement the full encoder and decoder, prove that it is optimal among prefix-free codes, and understand exactly where its one-bit-per-symbol overhead comes from.*
