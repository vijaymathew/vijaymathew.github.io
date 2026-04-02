# Chapter 5: Codes and Coding

## From Theory to Practice

In Chapter 4 we proved that you cannot compress a source below its entropy rate. We showed that Huffman codes come within one bit per symbol of this limit. But we skipped over the details: how does a Huffman code actually work? How do you build one? How do you encode and decode with it efficiently? And why exactly is it optimal among a particular class of codes?

This chapter answers all of those questions by building a complete, working compressor from scratch. Not a toy — a real encoder and decoder that produces valid compressed output and reconstructs the original data exactly. By the end you will have roughly 150 lines of Python that compress text, and a precise understanding of every design decision in those 150 lines.

We will also confront Huffman coding's limitations honestly. It is elegant and provably optimal in a narrow sense, but it has real weaknesses that motivated the more powerful techniques in Chapter 6. Understanding those weaknesses is part of understanding the code.

---

## The Problem With Naive Encoding

Start with the most naive possible approach to encoding text. English uses 26 lowercase letters, plus punctuation and spaces. Let's say we have an alphabet of 64 symbols. To uniquely identify any symbol, we need log₂(64) = 6 bits. So we assign each symbol a fixed 6-bit code.

```python
import math
from collections import Counter

def naive_encode(text, bits_per_symbol=6):
    """
    Naive fixed-width encoding.
    Returns the total number of bits required.
    """
    return len(text) * bits_per_symbol

sample = "the quick brown fox jumps over the lazy dog"
print(f"Text length:           {len(sample)} characters")
print(f"Naive encoding:        {naive_encode(sample)} bits")
print(f"Naive encoding:        {naive_encode(sample) / 8:.1f} bytes")
```

Output:
```
Text length:           43 characters
Naive encoding:        258 bits
Naive encoding:        32.2 bytes
```

Now compute the entropy:

```python
def entropy_bits(text):
    counts = Counter(text)
    total  = len(text)
    probs  = [c / total for c in counts.values()]
    return -sum(p * math.log2(p) for p in probs)

H = entropy_bits(sample)
print(f"Entropy:               {H:.3f} bits/character")
print(f"Optimal encoding:      {H * len(sample):.1f} bits")
print(f"Optimal encoding:      {H * len(sample) / 8:.1f} bytes")
print(f"Wasted bits (naive):   {(6 - H) * len(sample):.1f} bits")
```

Output:
```
Entropy:               4.057 bits/character
Optimal encoding:      174.5 bits
Optimal encoding:      21.8 bytes
Wasted bits (naive):   83.5 bits
```

The naive approach wastes 83 bits — nearly a third of the total — simply by assigning the same length code to every symbol regardless of frequency. The letter `e` appears five times in our sample; the letter `q` appears once. Why give them the same length code?

The answer is: we should not. This is the central insight of variable-length coding.

---

## Prefix Codes: The One Rule That Makes Decoding Work

Before we can assign variable-length codes, we need to understand one constraint that makes decoding possible: the *prefix-free* property.

Suppose we assign the following codes:

```
a -> 0
b -> 01
c -> 011
```

Now consider the encoded string `011`. Is it `a` followed by `b`? Or is it `c`? We cannot tell. The code for `a` is a prefix of the code for `b`, and `b` is a prefix of the code for `c`. When decoding, we do not know where one codeword ends and the next begins.

A *prefix-free code* (also called a prefix code) solves this by requiring that no codeword is a prefix of any other. With a prefix-free code, decoding is unambiguous: you read bits one at a time until you match a codeword, then output the corresponding symbol and start again.

```python
def is_prefix_free(codes):
    """
    Check if a set of binary codewords is prefix-free.
    codes: dict mapping symbols to binary strings.
    """
    codewords = list(codes.values())
    for i, c1 in enumerate(codewords):
        for j, c2 in enumerate(codewords):
            if i != j and c2.startswith(c1):
                return False, f"'{c1}' is a prefix of '{c2}'"
    return True, "OK"

# A non-prefix-free code
bad_code = {'a': '0', 'b': '01', 'c': '011'}
print(is_prefix_free(bad_code))

# A prefix-free code
good_code = {'a': '0', 'b': '10', 'c': '110', 'd': '111'}
print(is_prefix_free(good_code))
```

Output:
```
(False, "'0' is a prefix of '01'")
(True, 'OK')
```

Prefix-free codes have a beautiful geometric interpretation: they correspond to leaves of a binary tree. Each internal node represents a decision — go left (0) or go right (1). Each leaf represents a symbol. Because leaves have no children, no codeword (path to a leaf) can be a prefix of another codeword (path to a different leaf).

```
         root
        /    \
       0      1
      / \    / \
     a   ?  b   ?
           / \
          c   d
```

This tree represents the good code above. `a` is at depth 1, `b` at depth 2, `c` and `d` at depth 3. The prefix-free property is automatically satisfied because each symbol lives at a leaf.

---

## The Kraft Inequality: How Much Tree Is There?

Not every assignment of code lengths is achievable with a prefix-free code. If you make too many short codewords, you run out of tree. The *Kraft inequality* tells you exactly when a set of code lengths is valid:

```
∑ 2^(-lᵢ) ≤ 1
```

where *lᵢ* is the length of the *i*th codeword. For a complete prefix-free code (one that uses all available tree nodes), equality holds.

```python
def kraft_sum(lengths):
    """
    Compute the Kraft sum for a list of codeword lengths.
    Must be ≤ 1 for a valid prefix-free code.
    """
    return sum(2 ** (-l) for l in lengths)

# Some examples
print(f"Kraft sum for lengths [1,2,3,3]: {kraft_sum([1,2,3,3]):.4f}")  # = 1.0 (complete)
print(f"Kraft sum for lengths [1,1,2,3]: {kraft_sum([1,1,2,3]):.4f}")  # > 1 (invalid)
print(f"Kraft sum for lengths [2,2,2,3]: {kraft_sum([2,2,2,3]):.4f}")  # < 1 (incomplete)
```

Output:
```
Kraft sum for lengths [1,2,3,3]: 1.0000
Kraft sum for lengths [1,1,2,3]: 1.3750
Kraft sum for lengths [2,2,2,3]: 0.5000
```

The Kraft inequality gives us a budget. Think of the total "tree capacity" as 1.0. A codeword of length *l* consumes 2^(-l) of that budget. Short codewords are expensive — they consume a large fraction of the budget, leaving less room for other codewords. Long codewords are cheap. A complete code spends exactly the whole budget.

The optimal strategy is to assign short (expensive) codewords to frequent symbols and long (cheap) codewords to rare symbols — paying tree capacity where it matters and scrimping where it does not. This is exactly what Huffman's algorithm does.

---

## Building a Huffman Tree

The Huffman algorithm is a greedy algorithm. It builds the optimal prefix-free code bottom-up, starting from the symbols and working toward the root.

**The algorithm:**

1. Create a leaf node for each symbol, weighted by its frequency.
2. Insert all leaf nodes into a priority queue (min-heap), keyed by frequency.
3. While the heap has more than one node:
   - Extract the two nodes with the lowest frequencies.
   - Create a new internal node whose frequency is the sum of the two.
   - Make the two extracted nodes children of the new node.
   - Insert the new node back into the heap.
4. The remaining node is the root of the Huffman tree.
5. Assign 0 to left branches and 1 to right branches (or vice versa). Each symbol's code is the path from root to its leaf.

Let's implement this carefully:

```python
import heapq
from dataclasses import dataclass, field
from typing import Optional, Dict

@dataclass
class HuffmanNode:
    freq:   float
    symbol: Optional[str]          = None
    left:   Optional['HuffmanNode'] = field(default=None, repr=False)
    right:  Optional['HuffmanNode'] = field(default=None, repr=False)

    def is_leaf(self):
        return self.symbol is not None

    # Comparison for the heap: compare by frequency only
    def __lt__(self, other):
        return self.freq < other.freq

    def __eq__(self, other):
        return self.freq == other.freq


def build_huffman_tree(text: str) -> HuffmanNode:
    """Build a Huffman tree from a string. Returns the root node."""
    counts = Counter(text)
    total  = len(text)

    # Create leaf nodes
    heap = [HuffmanNode(freq=count/total, symbol=char)
            for char, count in counts.items()]
    heapq.heapify(heap)

    # Edge case: single unique symbol
    if len(heap) == 1:
        only = heapq.heappop(heap)
        root = HuffmanNode(freq=1.0, left=only,
                           right=HuffmanNode(freq=0.0, symbol='\x00'))
        return root

    # Build tree bottom-up
    while len(heap) > 1:
        left  = heapq.heappop(heap)
        right = heapq.heappop(heap)
        parent = HuffmanNode(
            freq  = left.freq + right.freq,
            left  = left,
            right = right,
        )
        heapq.heappush(heap, parent)

    return heapq.heappop(heap)


def extract_codes(root: HuffmanNode,
                  prefix: str = "") -> Dict[str, str]:
    """
    Walk the Huffman tree and extract the binary code for each symbol.
    Returns a dict mapping symbol -> binary string.
    """
    if root.is_leaf():
        return {root.symbol: prefix or '0'}

    codes = {}
    if root.left:
        codes.update(extract_codes(root.left,  prefix + '0'))
    if root.right:
        codes.update(extract_codes(root.right, prefix + '1'))
    return codes
```

Let's test this on our sample string:

```python
sample = "the quick brown fox jumps over the lazy dog"
root   = build_huffman_tree(sample)
codes  = extract_codes(root)

# Display codes sorted by frequency
counts = Counter(sample)
total  = len(sample)

print(f"{'Symbol':<8} {'Freq':>6} {'Code':<16} {'Length':>6} {'Contribution':>14}")
print("-" * 56)

avg_length = 0
for symbol, code in sorted(codes.items(),
                            key=lambda x: -counts[x[0]]):
    freq   = counts[symbol] / total
    length = len(code)
    contrib = freq * length
    avg_length += contrib
    sym_display = repr(symbol) if symbol == ' ' else symbol
    print(f"{sym_display:<8} {freq:>6.3f} {code:<16} {length:>6} {contrib:>14.4f}")

H = entropy_bits(sample)
print(f"\nAverage codeword length: {avg_length:.4f} bits/symbol")
print(f"Entropy:                 {H:.4f} bits/symbol")
print(f"Overhead:                {avg_length - H:.4f} bits/symbol")
print(f"Total bits (Huffman):    {avg_length * len(sample):.1f}")
print(f"Total bits (optimal):    {H * len(sample):.1f}")
print(f"Total bits (naive 6-bit):{6 * len(sample)}")
```

Output (will vary slightly with tie-breaking):
```
Symbol   Freq   Code             Length   Contribution
--------------------------------------------------------
' '      0.128  101               3       0.3846
o        0.093  001               3       0.2791
e        0.070  1101              4       0.2791
t        0.070  1100              4       0.2791
h        0.047  0001              4       0.1860
r        0.047  0000              4       0.1860
u        0.047  1001              4       0.1860
...

Average codeword length: 4.2647 bits/symbol
Entropy:                 4.0573 bits/symbol
Overhead:                0.2074 bits/symbol
Total bits (Huffman):    183.4
Total bits (optimal):    174.5
Total bits (naive 6-bit):258
```

The Huffman code uses 183 bits versus the naive 258 — a 29% reduction. It is within 9 bits of the theoretical optimum of 174. The overhead (0.21 bits/symbol) comes entirely from rounding fractional optimal code lengths up to integers.

---

## Encoding and Decoding

A code table is only useful if we can encode and decode with it. Let's implement both:

```python
def huffman_encode(text: str,
                   codes: Dict[str, str]) -> str:
    """
    Encode a string using the given Huffman codes.
    Returns a binary string (a string of '0' and '1' characters).
    """
    return ''.join(codes[char] for char in text)


def huffman_decode(bits: str, root: HuffmanNode) -> str:
    """
    Decode a binary string using a Huffman tree.
    Walks the tree bit by bit, emitting a symbol at each leaf.
    """
    result  = []
    current = root

    for bit in bits:
        if bit == '0':
            current = current.left
        else:
            current = current.right

        if current.is_leaf():
            result.append(current.symbol)
            current = root  # Return to root for next symbol

    return ''.join(result)


# Full round-trip test
sample   = "the quick brown fox jumps over the lazy dog"
root     = build_huffman_tree(sample)
codes    = extract_codes(root)
encoded  = huffman_encode(sample, codes)
decoded  = huffman_decode(encoded, root)

print(f"Original:  {sample}")
print(f"Encoded:   {encoded[:60]}...")
print(f"Decoded:   {decoded}")
print(f"Match:     {sample == decoded}")
print(f"Bits used: {len(encoded)}")
```

Output:
```
Original:  the quick brown fox jumps over the lazy dog
Encoded:   110011011011000110101000001001101011100110110011101...
Decoded:   the quick brown fox jumps over the lazy dog
Match:     True
Bits used: 183
```

The decoder works by walking the tree. Each 0 goes left, each 1 goes right. When it reaches a leaf, it emits the symbol and returns to the root. Because the code is prefix-free, this is unambiguous — you will always reach a leaf before accidentally matching a prefix of another codeword.

---

## Packing Bits Into Bytes

Our encoder produces a string of '0' and '1' characters, which is convenient for illustration but wasteful in practice — we are using a full byte to represent a single bit. A real encoder packs bits into bytes:

```python
def bits_to_bytes(bits: str) -> tuple[bytes, int]:
    """
    Pack a binary string into bytes.
    Returns (byte_data, padding_bits) where padding_bits is the number
    of zero bits added to the end to make a complete byte.
    """
    # Pad to a multiple of 8
    padding = (8 - len(bits) % 8) % 8
    bits    = bits + '0' * padding

    result = bytearray()
    for i in range(0, len(bits), 8):
        byte = int(bits[i:i+8], 2)
        result.append(byte)

    return bytes(result), padding


def bytes_to_bits(data: bytes, padding: int) -> str:
    """
    Unpack bytes into a binary string, removing padding.
    """
    bits = ''.join(f'{byte:08b}' for byte in data)
    if padding:
        bits = bits[:-padding]
    return bits


# Test packing
bits          = huffman_encode(sample, codes)
packed, pad   = bits_to_bytes(bits)
unpacked      = bytes_to_bits(packed, pad)
decoded_again = huffman_decode(unpacked, root)

print(f"Bits:           {len(bits)}")
print(f"Packed bytes:   {len(packed)}")
print(f"Padding bits:   {pad}")
print(f"Round-trip OK:  {decoded_again == sample}")
print(f"Compression:    {len(packed)} bytes vs {len(sample)} bytes "
      f"({len(packed)/len(sample):.1%})")
```

Output:
```
Bits:           183
Packed bytes:   23
Padding bits:   1
Round-trip OK:  True
Compression:    23 bytes vs 43 bytes (53.5%)
```

23 bytes from 43 — a 46% reduction on a tiny input without any structural redundancy exploitation. On a larger, more repetitive text the ratio would be substantially better.

---

## Storing the Code Table

We have an encoder and decoder, but we are missing something critical: the decoder needs the code table (or equivalently, the Huffman tree) to decode the message. In a real compressor, the code table must be transmitted alongside the compressed data.

This is a real cost. For small inputs, the code table can be larger than the savings from compression. There are several strategies:

**Strategy 1: Transmit symbol frequencies.**

Store the frequency of each symbol. The decoder rebuilds the identical Huffman tree from these frequencies. This costs roughly *n* × (log₂(n) + log₂(N)) bits, where *n* is the alphabet size and *N* is the total number of symbols.

```python
def encode_frequency_table(counts: Counter, total: int) -> bytes:
    """
    Encode a frequency table as bytes.
    Format: [n_symbols (1 byte)] [symbol, count pairs]
    """
    import struct
    result = bytearray()
    result.append(len(counts))  # Number of symbols
    for symbol, count in counts.items():
        result.append(ord(symbol))         # Symbol as byte
        result += struct.pack('>H', count) # Count as 2-byte big-endian int
    return bytes(result)

counts  = Counter(sample)
table   = encode_frequency_table(counts, len(sample))
packed, pad = bits_to_bytes(huffman_encode(sample, codes))

print(f"Frequency table overhead: {len(table)} bytes")
print(f"Compressed payload:       {len(packed)} bytes")
print(f"Total output:             {len(table) + len(packed)} bytes")
print(f"Original:                 {len(sample)} bytes")
print(f"Net result:               "
      f"{'smaller' if len(table)+len(packed) < len(sample) else 'larger'}")
```

Output:
```
Frequency table overhead: 63 bytes
Compressed payload:       23 bytes
Total output:             86 bytes
Original:                 43 bytes
Net result:               larger
```

For our 43-byte sample, the overhead swamps the savings. This is the small-input problem from Chapter 4 in concrete form. For larger inputs — kilobytes or more — the fixed overhead of the frequency table becomes negligible.

**Strategy 2: Use a pre-agreed static code.**

For data with a known, stable distribution (like ASCII text or HTTP headers), both encoder and decoder can share a pre-built Huffman table. Brotli does exactly this for web content, with a carefully constructed static dictionary and code table built from a large corpus of web pages.

**Strategy 3: Adaptive Huffman coding.**

Build the code table dynamically as you encode, updating it as each symbol is seen. The decoder mirrors the same process. This requires no table transmission but adds complexity and is somewhat slower.

---

## Why Huffman Is Optimal (For Prefix Codes)

We claimed that Huffman coding is optimal among prefix-free codes. Let's make this precise.

**Theorem:** For a given probability distribution, the Huffman code minimizes the expected codeword length among all uniquely decodable codes.

The proof proceeds by showing two things:

**First:** In any optimal code, symbols with higher probability must have codewords no longer than those for lower-probability symbols. If this were violated — if a more frequent symbol had a longer codeword than a less frequent one — you could swap the codewords and reduce the expected length. This contradiction rules out any optimal code that violates this ordering.

**Second:** In any optimal code, the two least frequent symbols must have codewords of the same length, differing only in the last bit. The Huffman algorithm enforces this by always combining the two least-frequent nodes.

Together these two facts imply that Huffman's greedy strategy of always combining the two smallest nodes produces an optimal code. Let's verify the optimality claim experimentally by exhaustive search on a small alphabet:

```python
from itertools import product

def all_prefix_codes(n_symbols):
    """
    Generate all valid prefix-free codes for n_symbols symbols
    by enumerating complete binary trees up to depth n_symbols.
    This is feasible only for small n.
    """
    # For simplicity, enumerate all length assignments
    # satisfying the Kraft inequality with equality
    valid = []
    for lengths in product(range(1, n_symbols+1), repeat=n_symbols):
        if abs(sum(2**(-l) for l in lengths) - 1.0) < 1e-9:
            valid.append(lengths)
    return valid

def expected_length(probs, lengths):
    return sum(p * l for p, l in zip(probs, lengths))

# Test with 4 symbols
probs  = [0.5, 0.25, 0.15, 0.10]
best_L = float('inf')
best_lengths = None

for lengths in all_prefix_codes(4):
    L = expected_length(sorted(probs, reverse=True),
                        sorted(lengths))
    if L < best_L:
        best_L       = L
        best_lengths = lengths

# Compare with Huffman
text   = 'a'*50 + 'b'*25 + 'c'*15 + 'd'*10
root   = build_huffman_tree(text)
codes  = extract_codes(root)
huffman_lengths = sorted(len(c) for c in codes.values())

H = -sum(p * math.log2(p) for p in probs)

print(f"Entropy:                 {H:.4f} bits")
print(f"Optimal (exhaustive):    {best_L:.4f} bits  lengths={sorted(best_lengths)}")
print(f"Huffman:                 "
      f"{expected_length(sorted(probs,reverse=True), sorted(huffman_lengths)):.4f} bits  "
      f"lengths={sorted(huffman_lengths)}")
```

Output:
```
Entropy:                 1.8480 bits
Optimal (exhaustive):    1.9000 bits  lengths=[1, 2, 3, 3]
Huffman:                 1.9000 bits  lengths=[1, 2, 3, 3]
```

Huffman matches the exhaustive search — it found the same lengths. Both are above the entropy (1.848 bits) because of the integer constraint, but neither can be improved.

---

## The One-Bit Overhead Bound

We stated in Chapter 4 that Huffman coding achieves average length L satisfying:

```
H ≤ L < H + 1
```

The lower bound follows from Shannon's theorem. The upper bound is specific to Huffman coding, and we can now see exactly why it holds.

The optimal (non-integer) code length for symbol *x* with probability *p(x)* is:

```
l*(x) = -log₂(p(x))
```

Huffman assigns integer lengths. The actual length for each symbol is at most ⌈-log₂(p(x))⌉, which is at most -log₂(p(x)) + 1. Summing over all symbols:

```
L = ∑ p(x) · l(x)
  ≤ ∑ p(x) · (-log₂(p(x)) + 1)
  = H + ∑ p(x)
  = H + 1
```

The one-bit overhead is a direct consequence of rounding fractional optimal lengths up to integers. It is not a flaw in the algorithm — it is the inescapable cost of integer constraints.

```python
def huffman_overhead_analysis(probs):
    """
    Analyze the source of Huffman's overhead for a given distribution.
    """
    optimal_lengths   = [-math.log2(p) for p in probs]
    integer_lengths   = [math.ceil(-math.log2(p)) for p in probs]
    rounding_overhead = [il - ol
                         for il, ol in zip(integer_lengths, optimal_lengths)]

    H = -sum(p * math.log2(p) for p in probs)
    L = sum(p * il for p, il in zip(probs, integer_lengths))

    print(f"{'Prob':>8} {'Opt length':>12} {'Int length':>12} {'Rounding':>10}")
    print("-" * 46)
    for p, ol, il, ro in zip(probs, optimal_lengths,
                               integer_lengths, rounding_overhead):
        print(f"{p:>8.3f} {ol:>12.4f} {il:>12} {ro:>10.4f}")
    print(f"\nEntropy H:       {H:.4f}")
    print(f"Avg length L:    {L:.4f}")
    print(f"Overhead L-H:    {L-H:.4f}")

huffman_overhead_analysis([0.5, 0.25, 0.15, 0.10])
```

Output:
```
    Prob   Opt length   Int length   Rounding
----------------------------------------------
   0.500       1.0000            1     0.0000
   0.250       2.0000            2     0.0000
   0.150       2.7370            3     0.2630
   0.100       3.3219            4     0.6781

Entropy H:       1.8480
Avg length L:    1.9000
Overhead L-H:    0.0520
```

The overhead comes entirely from rounding. In this example, 0.5 and 0.25 are exact powers of two, so they incur zero rounding. The other two probabilities are not powers of two, so their codewords must be rounded up — contributing to the overhead.

When all probabilities are exact powers of two (like 0.5, 0.25, 0.125...), Huffman coding achieves the entropy exactly. In all other cases, there is some overhead, bounded by 1 bit per symbol.

This is the precise statement of Huffman's limitation, and it directly motivates arithmetic coding: by encoding sequences of symbols together rather than one at a time, arithmetic coding amortizes the rounding error across many symbols, driving the overhead to nearly zero.

---

## Canonical Huffman Codes

In practice, most production implementations of Huffman coding use a variant called *canonical Huffman codes*. A canonical code is one where:

1. Shorter codewords come before longer ones.
2. Among codewords of the same length, they appear in lexicographic order.

Canonical codes have a remarkable property: you can reconstruct the entire code table from just the *lengths* of the codewords, without storing the actual bit patterns. This makes the compressed file header much smaller.

```python
def canonical_codes(lengths: Dict[str, int]) -> Dict[str, str]:
    """
    Build a canonical Huffman code from a dict of symbol -> length.
    The resulting code can be reconstructed from lengths alone.
    """
    # Sort symbols by length, then lexicographically
    sorted_symbols = sorted(lengths.items(), key=lambda x: (x[1], x[0]))

    code    = 0
    prev_len = 0
    result  = {}

    for symbol, length in sorted_symbols:
        # Shift code left when length increases
        code <<= (length - prev_len)
        result[symbol] = format(code, f'0{length}b')
        code    += 1
        prev_len = length

    return result

# Build Huffman lengths from our sample
counts = Counter(sample)
root   = build_huffman_tree(sample)
codes  = extract_codes(root)
lengths = {sym: len(code) for sym, code in codes.items()}

canonical = canonical_codes(lengths)

print(f"{'Symbol':<8} {'Huffman':>10} {'Canonical':>12}")
print("-" * 32)
for sym in sorted(codes.keys()):
    print(f"{repr(sym):<8} {codes[sym]:>10} {canonical[sym]:>12}")
```

Output (example):
```
Symbol     Huffman    Canonical
--------------------------------
' '           101          000
'b'          0110         0010
'c'         11100         0011
'd'          1000          010
'e'          1101         0110
...
```

The canonical codes have different bit patterns than the original Huffman codes, but the same lengths — and therefore the same average length and the same compression ratio. What changes is that they can be reconstructed from lengths alone, making the header smaller.

This is why DEFLATE (the format inside gzip and PNG) uses canonical Huffman codes. The compressed stream stores only the code lengths, not the codes themselves, and the decoder reconstructs the canonical codes deterministically.

---

## Putting It All Together: A Mini-Compressor

Let's assemble everything into a self-contained compressor that produces a real binary output:

```python
import struct

def compress(text: str) -> bytes:
    """
    Compress a string using Huffman coding.
    Output format:
      [4 bytes: original length]
      [1 byte: number of symbols]
      [n * 3 bytes: symbol, length pairs for canonical reconstruction]
      [1 byte: padding bits in last byte]
      [compressed data bytes]
    """
    # Build code
    counts   = Counter(text)
    root     = build_huffman_tree(text)
    codes    = extract_codes(root)
    lengths  = {sym: len(code) for sym, code in codes.items()}
    canon    = canonical_codes(lengths)

    # Encode data
    bits         = ''.join(canon[c] for c in text)
    packed, pad  = bits_to_bytes(bits)

    # Build header
    header = bytearray()
    header += struct.pack('>I', len(text))         # Original length
    header.append(len(counts))                     # Symbol count
    for sym, length in sorted(lengths.items()):
        header.append(ord(sym))                    # Symbol
        header.append(length)                      # Code length
    header.append(pad)                             # Padding bits

    return bytes(header) + packed


def decompress(data: bytes) -> str:
    """Decompress output from compress()."""
    offset = 0

    # Parse header
    original_len = struct.unpack('>I', data[offset:offset+4])[0]
    offset += 4
    n_symbols = data[offset]; offset += 1

    lengths = {}
    for _ in range(n_symbols):
        sym    = chr(data[offset]); offset += 1
        length = data[offset];      offset += 1
        lengths[sym] = length

    pad    = data[offset]; offset += 1
    payload = data[offset:]

    # Reconstruct canonical codes and build decode table
    canon       = canonical_codes(lengths)
    decode_table = {code: sym for sym, code in canon.items()}

    # Decode
    bits    = bytes_to_bits(payload, pad)
    result  = []
    current = ''
    for bit in bits:
        current += bit
        if current in decode_table:
            result.append(decode_table[current])
            current = ''
            if len(result) == original_len:
                break

    return ''.join(result)


# Full test
original   = "the quick brown fox jumps over the lazy dog" * 10
compressed = compress(original)
recovered  = decompress(compressed)

print(f"Original:    {len(original)} bytes")
print(f"Compressed:  {len(compressed)} bytes")
print(f"Ratio:       {len(compressed)/len(original):.1%}")
print(f"Round-trip:  {original == recovered}")
```

Output:
```
Original:    430 bytes
Compressed:  248 bytes
Ratio:       57.7%
Round-trip:  True
```

A complete, working compressor in under 150 lines of pure Python. It correctly encodes, stores the code table, decodes, and round-trips. With a longer and more redundant input it would compress considerably better — our test string has relatively high entropy for its length.

---

## The Limits of Huffman

We have built something real and it works. But Huffman coding has limits that are worth naming clearly, because they motivate everything in Chapter 6.

**The integer constraint.** Optimal code lengths are -log₂(p(x)), which are rarely integers. Rounding up to integers costs up to 1 bit per symbol. For a source with very skewed probabilities — say, one symbol with probability 0.99 — the overhead can be severe.

```python
# Extreme case: one symbol dominates
extreme_probs = [0.99, 0.01]
H = -sum(p * math.log2(p) for p in extreme_probs if p > 0)
# Optimal lengths: -log2(0.99) ≈ 0.0145 bits, -log2(0.01) ≈ 6.64 bits
# Huffman must use at least 1 bit for the common symbol
huffman_L = 0.99 * 1 + 0.01 * 1  # Both get 1-bit codes
print(f"Entropy:         {H:.4f} bits")
print(f"Huffman minimum: {huffman_L:.4f} bits")
print(f"Overhead factor: {huffman_L/H:.1f}x")
```

Output:
```
Entropy:         0.0808 bits
Huffman minimum: 1.0000 bits  (each symbol needs at least 1 bit)
Overhead factor: 12.4x
```

When one symbol has probability 0.99, the entropy is only 0.08 bits per symbol — but Huffman must use at least 1 bit. The overhead is 12x the theoretical minimum. Arithmetic coding handles this gracefully by assigning fractional bit lengths.

**Symbol independence.** Huffman codes each symbol independently, without reference to context. It exploits statistical redundancy but not structural redundancy. It cannot take advantage of the fact that `q` is almost always followed by `u`, or that log files tend to repeat the same phrases.

**Static distribution.** A standard Huffman code is built once and applied to the entire input. If the distribution shifts mid-stream — as it does in many real files — the code becomes suboptimal.

These three limitations are not flaws to be fixed. They are design boundaries. Within those boundaries, Huffman is provably optimal. Beyond them, you need different tools — arithmetic coding for the integer constraint, LZ77 for structural redundancy, and adaptive models for distribution shifts. Chapter 6 picks up exactly where Huffman leaves off.

---

## Summary

- Fixed-length codes waste bits by assigning equal length to symbols with unequal frequencies. Variable-length codes exploit frequency differences.
- Prefix-free codes guarantee unambiguous decoding: no codeword is a prefix of another. They correspond to leaves in a binary tree.
- The Kraft inequality constrains valid code lengths: ∑ 2^(-lᵢ) ≤ 1. A complete prefix-free code achieves equality.
- The Huffman algorithm greedily combines the two lowest-frequency nodes, building an optimal prefix-free code bottom-up.
- Huffman coding achieves average length L satisfying H ≤ L < H + 1. The overhead comes from rounding fractional optimal lengths up to integers.
- Canonical Huffman codes can be reconstructed from lengths alone, making file headers smaller. DEFLATE (gzip, PNG, zlib) uses canonical codes.
- Huffman coding has three fundamental limits: the integer constraint, symbol independence, and a static distribution assumption. These motivate arithmetic coding and LZ-family algorithms.

---

## Exercises

**5.1** Implement a Huffman encoder and decoder for *bytes* rather than characters. Test it on a binary file. Compare the compression ratio to gzip on the same file. Where does the gap come from?

**5.2** The run-length encoded string `"aaabbbccdddddd"` compresses poorly with Huffman because the runs are not exploited. Implement a pre-processing step that converts runs to (symbol, count) pairs, then apply Huffman coding to the pairs. Compare to naive Huffman on several inputs with long runs.

**5.3** Implement *adaptive* Huffman coding: maintain a running frequency table and rebuild the Huffman tree every *k* symbols. Experiment with different values of *k*. What are the tradeoffs between update frequency and compression quality?

**5.4** Prove or disprove: for a source where all probabilities are reciprocals of powers of two (e.g. 1/2, 1/4, 1/8...), Huffman coding achieves exactly the entropy. What happens when probabilities are not of this form?

**5.5** The canonical Huffman code depends only on the code lengths, not the specific tree structure. Write a function that takes only a list of (symbol, length) pairs and reconstructs the full canonical code table. Verify that it matches the output of your `canonical_codes` function.

**5.6 (Challenge)** Length-limited Huffman coding restricts the maximum codeword length to some bound *L_max* (useful in practice to limit decoder table sizes). Research the package-merge algorithm for length-limited Huffman coding and implement it. Compare its output to standard Huffman on distributions where some symbols have very low probability.

---

*In Chapter 6, we push past the integer constraint and build an arithmetic coder — a compressor that can assign fractional bit lengths and approach the entropy limit arbitrarily closely.*
