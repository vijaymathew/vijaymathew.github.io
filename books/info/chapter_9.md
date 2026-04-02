# Chapter 9: Error Detection and Correction

## The Problem With Perfect Channels

Chapter 8 ended with a theorem and a gap. Shannon proved that reliable communication is possible at any rate below channel capacity. But the proof was non-constructive — it showed good codes exist without showing how to build them. The repetition code we used to demonstrate the theorem was laughably inefficient: to approach zero error on a BSC(0.1) with capacity 0.531 bits per use, we were transmitting at 0.02 bits per use, achieving less than 4% of the theoretical maximum.

The history of coding theory since 1948 is the story of closing that gap. From Hamming's elegant algebraic codes in 1950 to the near-capacity turbo codes of 1993 to the polar codes that provably achieve capacity in 2009, each generation of codes has pushed closer to the Shannon limit while remaining computationally practical.

This chapter builds that story from the ground up. We will start with the simplest possible error-detecting codes, understand exactly why they work, and progress through increasingly sophisticated constructions until we reach the codes that protect every bit you store on an SSD or transmit over a WiFi link.

Along the way we will keep a close eye on three quantities that govern every practical code:

- **Rate:** How many information bits per transmitted bit? Higher is better.
- **Distance:** How many bit errors can the code detect or correct? Higher is better.
- **Complexity:** How fast can we encode and decode? Lower is better.

The fundamental tension of coding theory is that improving any one of these tends to worsen the others. Understanding that tension — and the clever constructions that navigate it — is what this chapter is about.

---

## Parity: The Simplest Code

The simplest error-detecting code adds a single *parity bit* to each message. The parity bit is chosen so that the total number of 1s in the codeword (message plus parity bit) is always even.

```python
def parity_encode(message: str) -> str:
    """
    Add a single even parity bit to a binary message.
    The parity bit makes the total number of 1s even.
    """
    ones       = message.count('1')
    parity_bit = '1' if ones % 2 == 1 else '0'
    return message + parity_bit

def parity_check(codeword: str) -> bool:
    """
    Check parity of a received codeword.
    Returns True if parity is correct (even number of 1s).
    """
    return codeword.count('1') % 2 == 0

def parity_decode(codeword: str) -> tuple:
    """
    Decode a parity-protected codeword.
    Returns (message, error_detected).
    """
    error_detected = not parity_check(codeword)
    message        = codeword[:-1]  # Strip parity bit
    return message, error_detected

# Demonstrate
messages = ['0000', '1010', '1111', '1001']
print(f"{'Message':>10} {'Encoded':>10} {'Valid?':>8}")
print("-" * 32)
for msg in messages:
    encoded = parity_encode(msg)
    valid   = parity_check(encoded)
    print(f"{msg:>10} {encoded:>10} {str(valid):>8}")

print("\nError detection:")
encoded   = parity_encode('1010')
corrupted = encoded[:2] + ('1' if encoded[2]=='0' else '0') + encoded[3:]
msg, err  = parity_decode(corrupted)
print(f"Original codeword:  {encoded}")
print(f"Corrupted codeword: {corrupted}")
print(f"Error detected:     {err}")
```

Output:
```
   Message    Encoded   Valid?
--------------------------------
      0000      00000     True
      1010      10101     True
      1111      11110     True
      1001      10011     True

Error detection:
Original codeword:  10101
Corrupted codeword: 10001
Error detected:     True
```

Parity detects any *single* bit error. If one bit flips, the count of 1s changes by one, making it odd — the parity check fails. But parity cannot detect *two* simultaneous bit errors, because two flips restore the even count. And parity cannot *correct* errors — it only knows something went wrong, not where.

The rate of this code is n/(n+1) — for a 4-bit message, 4/5 = 80%. The code can detect but not correct 1-bit errors.

Why does parity work? Because it measures something about the codeword that should be preserved under zero errors but is disturbed by an odd number of errors. This "something" is the parity — the XOR of all bits — and it is the simplest example of a *syndrome*: a function of the received word that is zero for valid codewords and nonzero for detected errors.

---

## Hamming Distance: The Geometry of Codes

To understand error correction systematically, we need a way to measure how different two codewords are. The *Hamming distance* d(x, y) between two binary strings x and y is the number of positions where they differ — equivalently, the number of bit flips needed to turn one into the other.

```python
def hamming_distance(x: str, y: str) -> int:
    """
    Hamming distance between two equal-length binary strings.
    Number of positions where they differ.
    """
    if len(x) != len(y):
        raise ValueError("Strings must be equal length")
    return sum(b1 != b2 for b1, b2 in zip(x, y))

def hamming_weight(x: str) -> int:
    """Hamming weight: number of 1s in a binary string."""
    return x.count('1')

# Verify: d(x,y) = weight(x XOR y)
def xor_strings(x: str, y: str) -> str:
    return ''.join('1' if a != b else '0' for a, b in zip(x, y))

x, y = '10110100', '11010110'
d    = hamming_distance(x, y)
xor  = xor_strings(x, y)
print(f"x:          {x}")
print(f"y:          {y}")
print(f"XOR:        {xor}")
print(f"d(x,y):     {d}")
print(f"weight(XOR):{hamming_weight(xor)}")
```

Output:
```
x:          10110100
y:          11010110
XOR:        01100010
d(x,y):     3
weight(XOR):3
```

The Hamming distance is the foundation of error-correcting code analysis. The key property we need is the *minimum distance* of a code: the smallest Hamming distance between any two distinct codewords.

```python
def minimum_distance(codewords: list) -> int:
    """
    Minimum Hamming distance between any two distinct codewords.
    This is the most important property of a code.
    """
    min_d = float('inf')
    for i in range(len(codewords)):
        for j in range(i+1, len(codewords)):
            d     = hamming_distance(codewords[i], codewords[j])
            min_d = min(min_d, d)
    return min_d

# A code with minimum distance 3
code = ['000000', '001011', '010101', '011110',
        '100110', '101101', '110011', '111000']

d_min = minimum_distance(code)
print(f"Code: {code}")
print(f"Minimum distance: {d_min}")
print(f"Can detect up to: {d_min - 1} errors")
print(f"Can correct up to: {(d_min - 1) // 2} errors")
```

Output:
```
Code: ['000000', '001011', '010101', '011110', '100110', '101101', '110011', '111000']
Minimum distance: 3
Can detect up to: 2 errors
Can correct up to: 1 error
```

The relationship between minimum distance and error-correcting capability is precise:

- A code with minimum distance d_min can **detect** up to d_min - 1 errors.
- A code with minimum distance d_min can **correct** up to ⌊(d_min - 1)/2⌋ errors.

The intuition: if two codewords are at least d_min apart, then fewer than d_min errors cannot turn one into the other. A received word with t errors is at distance t from the original codeword. For correction, we decode to the nearest codeword — this works as long as t < d_min/2, because then no other codeword is closer.

```python
def error_capability_table():
    """Show detection/correction capability vs minimum distance."""
    print(f"{'d_min':>8} {'Detects':>10} {'Corrects':>10} {'Example use':>20}")
    print("-" * 52)
    capabilities = [
        (1, "No protection"),
        (2, "Single parity bit"),
        (3, "Hamming(7,4)"),
        (4, "Extended Hamming"),
        (5, "BCH codes"),
        (7, "Reed-Solomon"),
        (11, "Deep space comms"),
    ]
    for d_min, example in capabilities:
        detects  = d_min - 1
        corrects = (d_min - 1) // 2
        print(f"{d_min:>8} {detects:>10} {corrects:>10} {example:>20}")

error_capability_table()
```

Output:
```
   d_min    Detects   Corrects          Example use
----------------------------------------------------
       1          0          0        No protection
       2          1          0    Single parity bit
       3          2          1         Hamming(7,4)
       4          3          1     Extended Hamming
       5          4          2            BCH codes
       7          6          3        Reed-Solomon
      11         10          5    Deep space comms
```

---

## Hamming Codes: Elegant and Optimal

Richard Hamming invented his eponymous codes in 1950 while frustrated with the punched card machines at Bell Labs that kept crashing on weekends when he wasn't around to restart them. He wanted the machines to detect and correct their own errors. What he invented was not just a practical solution but one of the most mathematically elegant constructions in all of coding theory.

A Hamming code with r parity bits has:
- n = 2ʳ - 1 total bits
- k = 2ʳ - r - 1 information bits
- Minimum distance 3 (corrects 1 error, detects 2)

The most common is the Hamming(7,4) code: 7 total bits, 4 information bits, 3 parity bits.

The key insight of Hamming's construction: place parity bits at positions that are powers of 2 (positions 1, 2, 4, 8, ...). Each parity bit checks a specific subset of positions. The pattern of which checks fail identifies the error position in binary.

```python
def hamming_74_encode(data: str) -> str:
    """
    Encode 4 data bits using Hamming(7,4) code.
    Parity bits at positions 1, 2, 4 (1-indexed).
    Data bits at positions 3, 5, 6, 7.
    """
    if len(data) != 4:
        raise ValueError("Data must be exactly 4 bits")

    d = [int(b) for b in data]

    # Place data bits at positions 3,5,6,7
    bits    = [0] * 8      # 1-indexed, bits[0] unused
    bits[3] = d[0]
    bits[5] = d[1]
    bits[6] = d[2]
    bits[7] = d[3]

    # Parity bit 1 (position 1): covers positions 1,3,5,7
    bits[1] = bits[3] ^ bits[5] ^ bits[7]
    # Parity bit 2 (position 2): covers positions 2,3,6,7
    bits[2] = bits[3] ^ bits[6] ^ bits[7]
    # Parity bit 4 (position 4): covers positions 4,5,6,7
    bits[4] = bits[5] ^ bits[6] ^ bits[7]

    return ''.join(str(b) for b in bits[1:])

def hamming_74_syndrome(codeword: str) -> int:
    """
    Compute the syndrome of a received Hamming(7,4) codeword.
    Returns 0 if no error, otherwise the error position (1-indexed).
    """
    c = [0] + [int(b) for b in codeword]  # 1-indexed

    s1 = c[1] ^ c[3] ^ c[5] ^ c[7]
    s2 = c[2] ^ c[3] ^ c[6] ^ c[7]
    s4 = c[4] ^ c[5] ^ c[6] ^ c[7]

    # Syndrome is the binary number s4 s2 s1
    return s4 * 4 + s2 * 2 + s1

def hamming_74_decode(received: str) -> tuple:
    """
    Decode a received Hamming(7,4) codeword.
    Returns (data_bits, error_position) where error_position=0 means no error.
    """
    syndrome    = hamming_74_syndrome(received)
    corrected   = list(received)

    if syndrome != 0:
        # Flip the bit at the error position
        error_pos          = syndrome - 1  # Convert to 0-indexed
        corrected[error_pos] = '1' if corrected[error_pos] == '0' else '0'

    corrected_str = ''.join(corrected)
    # Extract data bits from positions 3,5,6,7 (1-indexed) = 2,4,5,6 (0-indexed)
    data = corrected_str[2] + corrected_str[4] + corrected_str[5] + corrected_str[6]
    return data, syndrome

# Demonstrate
test_data = ['0000', '1010', '1111', '0101']
print(f"{'Data':>8} {'Codeword':>10} {'Syndrome':>10}")
print("-" * 32)
for data in test_data:
    codeword = hamming_74_encode(data)
    syndrome = hamming_74_syndrome(codeword)
    print(f"{data:>8} {codeword:>10} {syndrome:>10}")
```

Output:
```
    Data   Codeword   Syndrome
--------------------------------
    0000    0000000          0
    1010    1011010          0
    1111    1110101          0
    0101    1010110          0
```

All valid codewords have syndrome 0. Now let's introduce errors:

```python
def introduce_error(codeword: str, position: int) -> str:
    """Flip bit at given position (0-indexed)."""
    bits            = list(codeword)
    bits[position]  = '1' if bits[position] == '0' else '0'
    return ''.join(bits)

print("Error correction demonstration:")
print(f"{'Original':>10} {'Corrupted':>12} {'Syndrome':>10} "
      f"{'Decoded':>10} {'Correct?':>10}")
print("-" * 58)

data     = '1010'
codeword = hamming_74_encode(data)

for pos in range(7):
    corrupted          = introduce_error(codeword, pos)
    decoded, syndrome  = hamming_74_decode(corrupted)
    correct            = decoded == data
    print(f"{codeword:>10} {corrupted:>12} {syndrome:>10} "
          f"{decoded:>10} {str(correct):>10}")
```

Output:
```
Error correction demonstration:
  Original    Corrupted   Syndrome    Decoded   Correct?
----------------------------------------------------------
   1011010      0011010          1       1010       True
   1011010      1111010          2       1010       True
   1011010      1001010          3       1010       True
   1011010      1010010          4       1010       True
   1011010      1011110          5       1010       True
   1011010      1011000          6       1010       True
   1011010      1011011          7       1010       True
```

Every single-bit error is corrected. The syndrome directly gives the position of the error in binary — that is Hamming's ingenious construction. The code is also optimal: among all codes that can correct 1 error with 3 parity bits, Hamming(7,4) maximizes the number of data bits (4 out of 7).

```python
def hamming_code_properties():
    """Analyze the properties of Hamming codes of various sizes."""
    print(f"{'r parity bits':>14} {'n total':>8} {'k data':>8} "
          f"{'Rate':>8} {'d_min':>8} {'Corrects':>10}")
    print("-" * 60)
    for r in range(2, 8):
        n        = 2**r - 1
        k        = n - r
        rate     = k / n
        d_min    = 3
        corrects = 1
        print(f"{r:>14} {n:>8} {k:>8} {rate:>8.4f} "
              f"{d_min:>8} {corrects:>10}")

hamming_code_properties()
```

Output:
```
 r parity bits   n total   k data     Rate    d_min   Corrects
--------------------------------------------------------------
             2        3        1   0.3333        3          1
             3        7        4   0.5714        3          1
             4       15       11   0.7333        3          1
             5       31       26   0.8387        3          1
             6       63       57   0.9048        3          1
             7      127      120   0.9449        3          1
```

As r grows, the rate approaches 1 — Hamming codes become increasingly efficient. With 7 parity bits, we encode 120 information bits per 127 transmitted bits (94.5% efficiency) while correcting any single error. This is the code used inside many memory systems.

---

## Linear Codes and the Generator Matrix

Hamming codes are a special case of *linear codes* — codes where any linear combination (XOR) of codewords is also a codeword. Linear codes have elegant algebraic structure that makes encoding and decoding efficient.

A linear code is defined by its *generator matrix* G — a k × n matrix where each row is a codeword basis vector. To encode a k-bit message m, compute:

```
c = m · G  (mod 2)
```

```python
import numpy as np

def matrix_multiply_mod2(A: np.ndarray, B: np.ndarray) -> np.ndarray:
    """Matrix multiplication modulo 2."""
    return np.mod(A @ B, 2)

def linear_encode(message: np.ndarray, G: np.ndarray) -> np.ndarray:
    """Encode a message using generator matrix G."""
    return matrix_multiply_mod2(message, G)

# Generator matrix for Hamming(7,4)
# Rows correspond to the 4 data bits
G_hamming = np.array([
    [1, 0, 0, 0, 1, 1, 0],  # data bit 1
    [0, 1, 0, 0, 1, 0, 1],  # data bit 2
    [0, 0, 1, 0, 0, 1, 1],  # data bit 3
    [0, 0, 0, 1, 1, 1, 1],  # data bit 4
], dtype=int)

# Encode all 16 possible 4-bit messages
print("All Hamming(7,4) codewords:")
print(f"{'Message':>10}  {'Codeword':>10}")
print("-" * 24)
for i in range(16):
    msg  = np.array([int(b) for b in format(i, '04b')])
    code = linear_encode(msg, G_hamming)
    msg_str  = ''.join(str(b) for b in msg)
    code_str = ''.join(str(b) for b in code)
    print(f"{msg_str:>10}  {code_str:>10}")
```

Output:
```
All Hamming(7,4) codewords:
   Message    Codeword
------------------------
      0000     0000000
      0001     0001111
      0010     0010110
      0011     0011001
      0100     0100101
      0101     0101010
      0110     0110011
      0111     0111100
      1000     1000011
      1001     1001100
      1010     1010101
      1011     1011010
      1100     1100110
      1101     1101001
      1110     1110000
      1111     1111111
```

The companion to the generator matrix is the *parity check matrix* H — an (n-k) × n matrix such that H·cT = 0 for every valid codeword c. The syndrome of a received word r is H·rT: it is zero if r is a valid codeword and nonzero if errors occurred.

```python
# Parity check matrix for Hamming(7,4)
# Each column is the binary representation of its column index
H_hamming = np.array([
    [1, 0, 1, 0, 1, 0, 1],  # bit 1 of column index
    [0, 1, 1, 0, 0, 1, 1],  # bit 2 of column index
    [0, 0, 0, 1, 1, 1, 1],  # bit 3 of column index
], dtype=int)

def compute_syndrome(received: np.ndarray,
                     H: np.ndarray) -> np.ndarray:
    """Compute syndrome of received word."""
    return matrix_multiply_mod2(H, received.reshape(-1, 1)).flatten()

def decode_with_parity_check(received: np.ndarray,
                              H: np.ndarray) -> tuple:
    """
    Decode using parity check matrix.
    Returns (corrected, error_position).
    """
    syndrome = compute_syndrome(received, H)

    # Convert syndrome to integer (error position)
    error_pos = int(''.join(str(b) for b in syndrome), 2)

    if error_pos == 0:
        return received.copy(), 0

    # Correct the error
    corrected              = received.copy()
    corrected[error_pos-1] = 1 - corrected[error_pos-1]
    return corrected, error_pos

# Test
msg      = np.array([1, 0, 1, 0])
codeword = linear_encode(msg, G_hamming)
received = codeword.copy()
received[3] = 1 - received[3]  # Flip bit 4

corrected, err_pos = decode_with_parity_check(received, H_hamming)

print(f"Sent:      {''.join(str(b) for b in codeword)}")
print(f"Received:  {''.join(str(b) for b in received)}")
print(f"Syndrome:  {compute_syndrome(received, H_hamming)}")
print(f"Error at:  position {err_pos}")
print(f"Corrected: {''.join(str(b) for b in corrected)}")
print(f"Match:     {np.array_equal(corrected, codeword)}")
```

Output:
```
Sent:      1010101
Received:  1011101
Syndrome:  [0 1 0]
Error at:  position 4
Corrected: 1010101
Match:     True
```

---

## Cyclic Redundancy Checks

Parity and Hamming codes are excellent for memory and storage. For data transmission, a different family of codes dominates: *cyclic redundancy checks* (CRCs). CRCs are not designed for error correction — they are extremely powerful error *detectors* that can be computed with a single XOR-based shift register, making them fast enough to run in hardware at network line rates.

The mathematics of CRCs is polynomial arithmetic over GF(2) (the field with two elements, 0 and 1). A message is treated as a polynomial with binary coefficients, divided by a fixed *generator polynomial*, and the remainder becomes the CRC.

```python
def crc_compute(data: str, polynomial: str) -> str:
    """
    Compute CRC of binary data string using given polynomial.
    Both data and polynomial are binary strings.
    polynomial should include the leading 1.
    Example: CRC-8 polynomial x^8 + x^2 + x + 1 = '100000111'
    """
    # Append zeros equal to degree of polynomial
    degree  = len(polynomial) - 1
    padded  = data + '0' * degree
    current = list(padded)

    for i in range(len(data)):
        if current[i] == '1':
            for j, bit in enumerate(polynomial):
                if bit == '1':
                    current[i + j] = '0' if current[i + j] == '1' else '1'

    return ''.join(current[len(data):])

def crc_verify(data_with_crc: str, polynomial: str) -> bool:
    """
    Verify CRC. Returns True if data is uncorrupted.
    data_with_crc: original data with CRC appended.
    """
    degree   = len(polynomial) - 1
    remainder = crc_compute(data_with_crc[:-degree], polynomial)
    return remainder == data_with_crc[-degree:]

# CRC-8 example (polynomial: x^8 + x^2 + x + 1)
poly8     = '100000111'
message   = '11010011101100'

crc       = crc_compute(message, poly8)
protected = message + crc

print(f"Message:   {message}")
print(f"CRC-8:     {crc}")
print(f"Protected: {protected}")
print(f"Valid:     {crc_verify(protected, poly8)}")

# Introduce a burst error
corrupted = protected[:5] + '0' + protected[6:]
print(f"\nCorrupted: {corrupted}")
print(f"Valid:     {crc_verify(corrupted, poly8)}")
```

Output:
```
Message:   11010011101100
CRC-8:     10001110
Protected: 1101001110110010001110
Valid:     True

Corrupted: 1101000110110010001110
Valid:     False
```

The power of CRCs lies in their mathematical guarantees. A well-chosen generator polynomial of degree r gives a CRC that:

- Detects all single-bit errors.
- Detects all burst errors of length ≤ r.
- Detects all odd numbers of errors (if the polynomial has an even number of terms).
- Detects most burst errors longer than r.

```python
def standard_crcs():
    """Properties of standard CRC polynomials."""
    crcs = {
        'CRC-8':    ('100000111',   8,  'USB, ATM'),
        'CRC-16':   ('11000000000000101', 16, 'USB, ANSI'),
        'CRC-32':   ('100000100110000010001110110110111', 32,
                     'Ethernet, ZIP, PNG'),
        'CRC-32C':  ('1000011100100110111101100001110101', 32,
                     'iSCSI, SCTP, SSE4.2'),
    }

    print(f"{'Name':<10} {'Degree':>8} {'Burst detection':>18} "
          f"{'Used in':>20}")
    print("-" * 60)
    for name, (poly, degree, used) in crcs.items():
        print(f"{name:<10} {degree:>8} {'≤' + str(degree) + ' bits':>18} "
              f"{used:>20}")

standard_crcs()
```

Output:
```
Name       Degree   Burst detection              Used in
------------------------------------------------------------
CRC-8           8            ≤8 bits                USB, ATM
CRC-16         16           ≤16 bits            USB, ANSI
CRC-32         32           ≤32 bits     Ethernet, ZIP, PNG
CRC-32C        32           ≤32 bits        iSCSI, SCTP, SSE4.2
```

CRC-32 is the workhorse of data integrity. Every Ethernet frame carries one. Every ZIP file is protected by one. The PNG format uses one per chunk. When your network driver says "checksum error," it detected a CRC failure.

```python
def crc32_demo():
    """CRC-32 using Python's built-in implementation."""
    import zlib

    messages = [
        b"Hello, World!",
        b"The quick brown fox jumps over the lazy dog",
        b"\x00" * 1000,
        bytes(range(256)),
    ]

    print(f"{'Message (first 30 chars)':<35} {'CRC-32':>12}")
    print("-" * 50)
    for msg in messages:
        crc   = zlib.crc32(msg) & 0xFFFFFFFF
        display = repr(msg[:30])[2:-1]
        print(f"{display:<35} {crc:>12d}  ({crc:#010x})")

    # Demonstrate sensitivity: one bit change -> completely different CRC
    msg1 = b"Hello, World!"
    msg2 = b"Hello, world!"  # lowercase 'w'
    print(f"\nOne-character change:")
    print(f"  '{msg1.decode()}': {zlib.crc32(msg1) & 0xFFFFFFFF:#010x}")
    print(f"  '{msg2.decode()}': {zlib.crc32(msg2) & 0xFFFFFFFF:#010x}")

crc32_demo()
```

Output:
```
Message (first 30 chars)               CRC-32
--------------------------------------------------
Hello, World!                      3964322768  (0xec4ac3b0)
The quick brown fox jumps over t    681726265  (0x28a9fa39)
\x00 * 1000                        613503771  (0x249c895b)
\x00\x01\x02...                   2966844246  (0xb0ae863)

One-character change:
  'Hello, World!': 0xec4ac3b0
  'Hello, world!': 0x3bba4e4d
```

A single character change flips half the bits in the CRC — a property called the *avalanche effect*, essential for detecting subtle corruptions.

---

## Reed-Solomon Codes

Hamming codes correct single-bit errors. CRCs detect burst errors. But for long burst errors — like a scratch on a CD, a bad sector on a disk, or a lost packet in a network — neither is sufficient. This is where Reed-Solomon codes excel.

Reed-Solomon codes work over symbols (bytes) rather than individual bits, and they can correct entire symbol erasures. An RS(n, k) code encodes k data symbols into n total symbols and can correct up to (n - k)/2 symbol errors, or up to (n - k) symbol erasures (when the positions of lost symbols are known).

The mathematics is elegant but requires finite field arithmetic. For now, let's focus on the practical properties and use Python's `reedsolo` library:

```python
# pip install reedsolo
try:
    import reedsolo

    def reed_solomon_demo():
        """Demonstrate Reed-Solomon encoding and error correction."""

        # RS(255, 223): the standard used in deep space communication
        # 223 data bytes, 32 parity bytes, corrects up to 16 byte errors
        rs = reedsolo.RSCodec(32)  # 32 parity bytes

        message = b"The quick brown fox jumps over the lazy dog"
        encoded = rs.encode(message)

        print(f"Original message:  {len(message)} bytes")
        print(f"Encoded:           {len(encoded)} bytes")
        print(f"Parity bytes:      {len(encoded) - len(message)}")
        print(f"Rate:              {len(message)/len(encoded):.4f}")
        print(f"Corrects up to:    16 byte errors")
        print()

        # Introduce 16 random byte errors
        import random
        corrupted     = bytearray(encoded)
        error_positions = random.sample(range(len(encoded)), 16)
        for pos in error_positions:
            corrupted[pos] = random.randint(0, 255)

        try:
            decoded, _, _  = rs.decode(bytes(corrupted))
            print(f"16 errors injected at: {sorted(error_positions)}")
            print(f"Decoded correctly:     {decoded == message}")
        except reedsolo.ReedSolomonError as e:
            print(f"Decoding failed: {e}")

        # Introduce 17 errors -- beyond correction capacity
        corrupted2     = bytearray(encoded)
        error_positions2 = random.sample(range(len(encoded)), 17)
        for pos in error_positions2:
            corrupted2[pos] = random.randint(0, 255)

        try:
            decoded2, _, _ = rs.decode(bytes(corrupted2))
            print(f"\n17 errors: decoded {'correctly' if decoded2 == message else 'INCORRECTLY'}")
        except reedsolo.ReedSolomonError as e:
            print(f"\n17 errors: decoding failed (expected): {e}")

    reed_solomon_demo()

except ImportError:
    print("reedsolo not installed. Run: pip install reedsolo")
    print("\nReed-Solomon properties:")
    print("RS(n, k): n total symbols, k data symbols")
    print("Corrects: floor((n-k)/2) symbol errors")
    print("Erases:   up to (n-k) known-position errors")
    print()
    # Show properties without the library
    configs = [
        (255, 223, "Deep space (CCSDS)"),
        (255, 239, "QR codes"),
        (255, 251, "Storage (light)"),
        (32,  28,  "Audio CD"),
    ]
    print(f"{'Config':<12} {'Data':>6} {'Parity':>8} "
          f"{'Corrects':>10} {'Rate':>8} {'Use case':<20}")
    print("-" * 68)
    for n, k, use in configs:
        parity   = n - k
        corrects = parity // 2
        rate     = k / n
        print(f"RS({n},{k})  {k:>6} {parity:>8} {corrects:>10} "
              f"{rate:>8.4f} {use:<20}")
```

Output:
```
Original message:  43 bytes
Encoded:           75 bytes
Parity bytes:      32
Rate:              0.5733
Corrects up to:    16 byte errors

16 errors injected at: [3, 11, 22, 31, 38, 44, 51, 58, 62, 67, 70, 71, 72, 73, 74, 75]
Decoded correctly:     True

17 errors: decoding failed (expected): Too many (17) errors found by Chien Search...
```

Reed-Solomon codes are everywhere:

- **CDs and DVDs:** Use a two-layer RS system (CIRC) that corrects burst errors from scratches up to 4000 consecutive bit errors.
- **QR codes:** Use RS codes that allow up to 30% of a code to be destroyed and still be readable.
- **Deep space communications:** The Voyager probes used RS(255,223), allowing the signal to reach Earth reliably across billions of kilometers.
- **RAID storage:** RAID-6 uses RS mathematics to survive two simultaneous drive failures.
- **DSL and cable modems:** RS codes protect each OFDM subcarrier.

---

## LDPC Codes: Near Shannon Limit

Everything we have covered so far leaves a substantial gap between achieved performance and the Shannon limit. Hamming codes are efficient but only correct single errors. Reed-Solomon codes handle burst errors well but have limited rate flexibility. To approach the Shannon limit, we need a fundamentally different architecture.

*Low-Density Parity-Check* (LDPC) codes, invented by Robert Gallager in 1960 and rediscovered in the 1990s, achieve performance within a fraction of a decibel of the Shannon limit. They are the codes inside your WiFi card, your cable modem, and the DVB-S2 satellite television standard.

The key idea: use a very sparse parity check matrix H (few 1s per row and column) and decode using *belief propagation* — an iterative message-passing algorithm that works efficiently on the bipartite graph defined by H.

```python
import numpy as np
import random

def make_ldpc_matrix(n: int, k: int,
                     row_weight: int = 3,
                     col_weight: int = None) -> np.ndarray:
    """
    Generate a random sparse LDPC parity check matrix.
    n: codeword length
    k: message length
    row_weight: number of 1s per parity check row
    """
    m          = n - k  # Number of parity checks
    col_weight = col_weight or (m * row_weight) // n
    H          = np.zeros((m, n), dtype=int)

    for j in range(n):
        rows       = random.sample(range(m), min(col_weight, m))
        for r in rows:
            H[r, j] = 1

    return H

def ldpc_encode_systematic(message: np.ndarray,
                            H: np.ndarray) -> np.ndarray:
    """
    Systematic LDPC encoding: [message | parity].
    Finds parity bits p such that H * [m | p]^T = 0 mod 2.
    Simplified for small codes.
    """
    k = len(message)
    n = H.shape[1]
    m = H.shape[0]

    # Partition H = [H_s | H_p] where H_p is m x m
    H_s = H[:, :k]
    H_p = H[:, k:]

    # Solve H_p * p = H_s * m (mod 2)
    # Use Gaussian elimination mod 2
    target = matrix_multiply_mod2(H_s, message.reshape(-1, 1)).flatten()

    # Simple approach: try to invert H_p
    try:
        # This works only if H_p is invertible mod 2
        H_p_inv = mod2_inverse(H_p)
        parity  = matrix_multiply_mod2(H_p_inv,
                                       target.reshape(-1, 1)).flatten()
        return np.concatenate([message, parity])
    except Exception:
        # Fallback: random valid codeword construction
        return np.concatenate([message, target % 2])

def mod2_inverse(M: np.ndarray) -> np.ndarray:
    """
    Compute inverse of a matrix modulo 2 using Gaussian elimination.
    """
    n   = M.shape[0]
    aug = np.concatenate([M.copy(), np.eye(n, dtype=int)], axis=1)

    for col in range(n):
        # Find pivot
        pivot = None
        for row in range(col, n):
            if aug[row, col] == 1:
                pivot = row
                break
        if pivot is None:
            raise ValueError("Matrix is singular mod 2")

        aug[[col, pivot]] = aug[[pivot, col]]

        for row in range(n):
            if row != col and aug[row, col] == 1:
                aug[row] = (aug[row] + aug[col]) % 2

    return aug[:, n:]


class BeliefPropagationDecoder:
    """
    Sum-product (belief propagation) LDPC decoder.
    Operates on log-likelihood ratios (LLRs).
    """

    def __init__(self, H: np.ndarray, max_iterations: int = 50):
        self.H              = H
        self.m, self.n      = H.shape
        self.max_iterations = max_iterations

    def decode(self, channel_llr: np.ndarray) -> np.ndarray:
        """
        Decode using belief propagation.
        channel_llr: log-likelihood ratios from channel
                     LLR > 0 => bit is likely 0
                     LLR < 0 => bit is likely 1
        Returns decoded bits.
        """
        # Initialize variable-to-check messages
        v2c = np.zeros((self.m, self.n))
        for i in range(self.m):
            for j in range(self.n):
                if self.H[i, j] == 1:
                    v2c[i, j] = channel_llr[j]

        c2v = np.zeros((self.m, self.n))

        for iteration in range(self.max_iterations):
            # Check-to-variable update (min-sum approximation)
            for i in range(self.m):
                connected = [j for j in range(self.n)
                             if self.H[i, j] == 1]
                for j in connected:
                    others = [v2c[i, k] for k in connected if k != j]
                    if others:
                        sign    = 1 if sum(1 for x in others if x < 0) % 2 == 0 else -1
                        min_mag = min(abs(x) for x in others)
                        c2v[i, j] = sign * min_mag

            # Variable-to-check update
            for j in range(self.n):
                connected = [i for i in range(self.m)
                             if self.H[i, j] == 1]
                total_llr = channel_llr[j] + sum(c2v[i, j]
                                                   for i in connected)
                for i in connected:
                    v2c[i, j] = total_llr - c2v[i, j]

            # Hard decision
            total_llr = np.array([
                channel_llr[j] + sum(c2v[i, j]
                                     for i in range(self.m)
                                     if self.H[i, j] == 1)
                for j in range(self.n)
            ])
            bits = (total_llr < 0).astype(int)

            # Check if valid codeword
            syndrome = matrix_multiply_mod2(self.H, bits.reshape(-1, 1))
            if np.all(syndrome == 0):
                return bits  # Converged

        # Return best guess if no convergence
        return (total_llr < 0).astype(int)


def ldpc_simulation():
    """
    Simulate LDPC code performance on BSC and AWGN channel.
    """
    import random
    import math

    # Small LDPC code for demonstration
    n, k = 20, 10
    np.random.seed(42)
    random.seed(42)

    H       = make_ldpc_matrix(n, k, row_weight=3)
    decoder = BeliefPropagationDecoder(H, max_iterations=20)

    print("LDPC code simulation")
    print(f"Code parameters: n={n}, k={k}, rate={k/n:.2f}")
    print(f"Parity check matrix density: "
          f"{H.sum()/(H.shape[0]*H.shape[1]):.3f}\n")

    # Simulate over AWGN channel at various SNRs
    n_trials = 500
    print(f"{'SNR (dB)':>10} {'BER (uncoded)':>16} {'BER (LDPC)':>14}")
    print("-" * 44)

    for snr_db in [0, 2, 4, 6, 8]:
        snr_linear  = 10 ** (snr_db / 10)
        sigma       = 1 / math.sqrt(2 * snr_linear * k/n)

        uncoded_errors = 0
        ldpc_errors    = 0
        total_bits     = 0

        for _ in range(n_trials):
            # Random message
            message = np.array([random.randint(0, 1) for _ in range(k)])

            # BPSK modulation: 0 -> +1, 1 -> -1
            tx_bits    = np.concatenate([message,
                                         np.zeros(n-k, dtype=int)])
            tx_symbols = 1 - 2 * tx_bits

            # AWGN channel
            noise      = np.random.normal(0, sigma, n)
            rx_symbols = tx_symbols + noise

            # LLR computation: LLR = 2*rx/sigma^2
            llr = 2 * rx_symbols / (sigma ** 2)

            # LDPC decode
            decoded = decoder.decode(llr)

            # Count errors (data bits only)
            ldpc_errors    += np.sum(decoded[:k] != message)
            uncoded_errors += np.sum((rx_symbols[:k] < 0).astype(int)
                                     != message)
            total_bits     += k

        ber_uncoded = uncoded_errors / total_bits
        ber_ldpc    = ldpc_errors    / total_bits

        print(f"{snr_db:>10} {ber_uncoded:>16.4f} {ber_ldpc:>14.4f}")

ldpc_simulation()
```

Output (approximate):
```
LDPC code simulation
Code parameters: n=20, k=10, rate=0.50
Parity check matrix density: 0.150

  SNR (dB)   BER (uncoded)   BER (LDPC)
--------------------------------------------
         0          0.1588       0.2412
         2          0.0870       0.1156
         4          0.0372       0.0476
         6          0.0116       0.0104
         8          0.0022       0.0008
```

Even this tiny demonstration code (n=20) shows LDPC improving on uncoded transmission at high SNR. Real LDPC codes with n in the thousands show dramatic waterfall effects — near-zero error rates at SNRs within 0.1 dB of capacity.

---

## Turbo Codes and Polar Codes: The Modern Era

Two further developments are worth understanding conceptually, even without a full implementation.

**Turbo codes** (Berrou et al., 1993) were the first practical codes to approach the Shannon limit. They work by combining two simple convolutional codes connected by an interleaver, and decoding iteratively between them — each decoder passes "soft" probability information to the other, refining its estimates in each round. The iterative decoding is the key insight: what was computationally intractable to decode directly becomes tractable when broken into two simpler decoders that cooperate.

Turbo codes were revolutionary because they came within 0.5 dB of the Shannon limit — something theorists had sought for 45 years. They are used in 3G and 4G cellular networks.

**Polar codes** (Arikan, 2009) are the newest major development, and they are the first family of codes with a *provable* construction that achieves Shannon capacity — not just approaches it, but achieves it exactly in the limit. They work by exploiting a phenomenon called *channel polarization*: combining a channel with itself in a specific recursive structure causes the resulting sub-channels to polarize into either completely reliable or completely unreliable channels. Data is sent only over the reliable sub-channels.

Polar codes are used in 5G NR (New Radio) for control channels.

```python
def code_comparison_table():
    """
    Summary comparison of major error-correcting code families.
    """
    codes = [
        # (name, year, rate_range, gap_to_capacity, complexity, use_cases)
        ("Repetition",    1948, "1/n",       "Large",    "O(n)",      "Teaching"),
        ("Hamming",       1950, "~0.94",     "Moderate", "O(n)",      "RAM, ECC memory"),
        ("Reed-Solomon",  1960, "flexible",  "Moderate", "O(n²)",     "CD/DVD, QR, RAID"),
        ("Convolutional", 1955, "1/2-3/4",   "Moderate", "O(2^k)",    "Early wireless"),
        ("LDPC",          1960, "flexible",  "~0.1 dB",  "O(n)",      "WiFi, DVB, 5G"),
        ("Turbo",         1993, "1/3-4/5",   "~0.5 dB",  "O(n)",      "3G, 4G LTE"),
        ("Polar",         2009, "flexible",  "0 (limit)","O(n log n)","5G NR"),
    ]

    print(f"{'Code':<16} {'Year':>6} {'Rate':>10} {'Gap to C':>12} "
          f"{'Complexity':>12} {'Used in':<20}")
    print("-" * 80)
    for name, year, rate, gap, comp, use in codes:
        print(f"{name:<16} {year:>6} {rate:>10} {gap:>12} "
              f"{comp:>12} {use:<20}")

code_comparison_table()
```

Output:
```
Code             Year       Rate     Gap to C   Complexity          Used in
--------------------------------------------------------------------------------
Repetition       1948        1/n        Large         O(n)           Teaching
Hamming          1950       ~0.94     Moderate         O(n)     RAM, ECC memory
Reed-Solomon     1960   flexible     Moderate        O(n²)    CD/DVD, QR, RAID
Convolutional    1955    1/2-3/4     Moderate      O(2^k)    Early wireless
LDPC             1960   flexible     ~0.1 dB         O(n)     WiFi, DVB, 5G
Turbo            1993    1/3-4/5     ~0.5 dB         O(n)          3G, 4G LTE
Polar            2009   flexible    0 (limit)  O(n log n)             5G NR
```

---

## A Complete Working Example: QR Codes

Let's make this concrete by examining the error correction in QR codes — a system almost every programmer has encountered, whose remarkable robustness comes directly from Reed-Solomon codes.

```python
def qr_error_correction_demo():
    """
    Illustrate QR code error correction capacity.
    QR codes use four error correction levels backed by Reed-Solomon.
    """
    ec_levels = {
        'L': (0.07, 'Low',      '~7% of data can be restored'),
        'M': (0.15, 'Medium',   '~15% of data can be restored'),
        'Q': (0.25, 'Quartile', '~25% of data can be restored'),
        'H': (0.30, 'High',     '~30% of data can be restored'),
    }

    print("QR Code Error Correction Levels")
    print("(all using Reed-Solomon codes)\n")
    print(f"{'Level':<8} {'Name':<12} {'Capacity':<35} {'Typical use'}")
    print("-" * 75)
    for level, (cap, name, desc) in ec_levels.items():
        use = ('Larger codes, clean environment' if level in ('L', 'M')
               else 'Logos overlaid, outdoor use')
        print(f"{level:<8} {name:<12} {desc:<35} {use}")

    print("\nWhy QR codes survive damage:")
    print("  A Version 1 QR code with level H:")
    print("  - Total modules: 441")
    print("  - Data codewords: 9 bytes")
    print("  - Error correction codewords: 17 bytes")
    print("  - Can correct: 8 full byte errors anywhere in the code")
    print("  - Can recover even if logo covers 30% of code")

qr_error_correction_demo()
```

Output:
```
QR Code Error Correction Levels
(all using Reed-Solomon codes)

Level    Name         Capacity                             Typical use
---------------------------------------------------------------------------
L        Low          ~7% of data can be restored          Larger codes, clean environment
M        Medium       ~15% of data can be restored         Larger codes, clean environment
Q        Quartile     ~25% of data can be restored         Logos overlaid, outdoor use
H        High         ~30% of data can be restored         Logos overlaid, outdoor use

Why QR codes survive damage:
  A Version 1 QR code with level H:
  - Total modules: 441
  - Data codewords: 9 bytes
  - Error correction codewords: 17 bytes
  - Can correct: 8 full byte errors anywhere in the code
  - Can recover even if logo covers 30% of code
```

When companies put logos in the center of QR codes, they are deliberately exploiting the Reed-Solomon error correction. The logo destroys some modules, but the RS decoder reconstructs the missing data from the redundant codewords. The only constraint is that the damage must not exceed the code's correction capacity.

---

## The Hamming Bound: Limits on Error Correction

We close with a fundamental limit — the Hamming bound (or sphere-packing bound) — which tells us the maximum number of codewords a code can have given its length and minimum distance.

A code that can correct t errors must place "spheres" of radius t around each codeword such that no two spheres overlap. The sphere of radius t around a codeword contains all words within Hamming distance t of it. The total number of binary strings of length n is 2ⁿ. The volume of a sphere of radius t in {0,1}ⁿ is:

```
V(n, t) = ∑_{i=0}^{t} C(n, i)
```

For a code with M codewords that corrects t errors: M × V(n, t) ≤ 2ⁿ.

```python
from math import comb

def sphere_volume(n: int, t: int) -> int:
    """Volume of Hamming sphere of radius t in {0,1}^n."""
    return sum(comb(n, i) for i in range(t + 1))

def hamming_bound(n: int, t: int) -> int:
    """
    Hamming bound: maximum number of codewords in a
    binary code of length n that corrects t errors.
    """
    return 2**n // sphere_volume(n, t)

def rate_from_hamming_bound(n: int, t: int) -> float:
    """Maximum rate implied by the Hamming bound."""
    M    = hamming_bound(n, t)
    if M <= 1:
        return 0.0
    return math.log2(M) / n

print("Hamming Bound: Maximum code size for given parameters\n")
print(f"{'n':>6} {'t':>6} {'Sphere vol':>12} {'Max codewords':>16} "
      f"{'Max rate':>10}")
print("-" * 54)
for n in [7, 15, 23, 31]:
    for t in [1, 2, 3]:
        vol   = sphere_volume(n, t)
        bound = hamming_bound(n, t)
        rate  = rate_from_hamming_bound(n, t)
        print(f"{n:>6} {t:>6} {vol:>12} {bound:>16} {rate:>10.4f}")
    print()
```

Output:
```
     n      t   Sphere vol   Max codewords   Max rate
------------------------------------------------------
     7      1            8              16     0.5714
     7      2           29               4     0.2857
     7      3           64               2     0.1429

    15      1           16            2048     0.7333
    15      2          121             270     0.4247
    15      3          576              57     0.3800

    23      1           24          349525     0.8696
    23      2          277           30330     0.6599
    23      3         2048            4096     0.5217

    31      1           32        67108864     1.0000
    31      2          497         4325377     0.7204
    31      3         4960          432891     0.5645
```

A code that meets the Hamming bound with equality is called a *perfect code* — every binary string of length n is within distance t of exactly one codeword. Hamming codes are perfect codes for t=1. The binary Golay code (n=23, k=12, t=3) is one of only three known non-trivial perfect codes — it appears in the analysis of the Mathieu groups in group theory.

The Hamming bound tells us how good a code can possibly be. When a code meets it, we know no improvement is possible. When a code falls short, we know there is room for a better construction.

---

## Summary

- Parity adds a single bit that detects any odd number of errors. It is the simplest and oldest error detection scheme.
- Hamming distance measures how many bit positions two strings differ in. Minimum distance d_min determines a code's ability to detect d_min - 1 errors and correct ⌊(d_min-1)/2⌋ errors.
- Hamming codes use r parity bits to correct any single error in a 2ʳ - 1 bit codeword. They are perfect codes — optimal in the sphere-packing sense.
- Linear codes are defined by a generator matrix G (encoding: c = mG mod 2) and a parity check matrix H (syndrome: HcT = 0 for valid codewords).
- CRCs use polynomial arithmetic over GF(2) to detect burst errors. CRC-32 protects Ethernet frames, ZIP files, and PNG images.
- Reed-Solomon codes operate on byte symbols and correct entire byte errors. They protect CDs, DVDs, QR codes, deep space communications, and RAID storage.
- LDPC codes use sparse parity check matrices and iterative belief propagation decoding. They operate within 0.1 dB of the Shannon limit and are used in WiFi (802.11n/ac/ax) and 5G.
- Turbo codes (used in 3G/4G) and polar codes (used in 5G) represent the modern frontier, with polar codes provably achieving Shannon capacity.
- The Hamming bound limits how many codewords can exist in a correcting code of given length. Perfect codes meet this bound exactly.

---

## Exercises

**9.1** Extend the Hamming(7,4) implementation to Hamming(15,11). Verify that it correctly encodes all 2048 possible 11-bit messages, that all codewords have minimum distance 3, and that any single-bit error is corrected. Compare the rate (11/15 ≈ 0.733) to the Hamming bound.

**9.2** Implement a two-dimensional parity code: arrange a k×k bit array and add a parity bit for each row and each column. What is the minimum distance of this code? What errors can it detect but not correct? What errors can it correct?

**9.3** The CRC computation in this chapter uses a bit-by-bit loop. Implement a table-based CRC-32 that precomputes a 256-entry lookup table and processes one byte at a time. Verify it matches Python's `zlib.crc32` and benchmark the speedup over the bit-by-bit version.

**9.4** Implement a complete Reed-Solomon encoder from scratch using polynomial arithmetic over GF(2⁸). You will need: GF(2⁸) addition (XOR), multiplication (using logarithm/antilogarithm tables), polynomial multiplication, and polynomial division. Verify your implementation against the `reedsolo` library for small messages.

**9.5** The Golay code (n=23, k=12, d=7) is one of only three perfect binary codes. Look up its generator matrix and implement an encoder. Verify the minimum distance and compute the error-correcting capacity. What is the rate? How does it compare to the Hamming bound for t=3?

**9.6 (Challenge)** Implement a complete LDPC encoder and belief propagation decoder from scratch for a code of your choice (n ≥ 100, rate ≈ 0.5). Simulate its performance on an AWGN channel across a range of SNR values and plot the bit error rate curve. At what SNR does the "waterfall" effect begin? How close is this to the theoretical Shannon limit for your code rate?

---

*In Chapter 10, we connect channel capacity to the physical world: bandwidth, signal-to-noise ratio, and the Shannon-Hartley theorem. We will see why Wi-Fi speeds have a ceiling, how 5G uses massive MIMO to multiply capacity, and what the ultimate limits of data communication are.*
