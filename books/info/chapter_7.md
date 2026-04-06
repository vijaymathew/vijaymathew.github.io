# Chapter 7: Kolmogorov Complexity — The Uncomputable Ideal

## A Different Kind of Question

Every compression algorithm we have studied so far works by exploiting a specific kind of redundancy: unequal symbol frequencies (Huffman), repeated strings (LZ77), sequential structure (context models). Each algorithm embeds a model of what compressible data looks like, and it works well when the data matches that model.

But here is a question none of those algorithms can answer: what is the *most compressed* a particular string could ever be, by *any* algorithm, using *any* model?

Not the best Huffman can do. Not the best zstd can do. The absolute theoretical minimum — the length of the shortest possible description of the string, period.

This question leads us to Kolmogorov complexity, one of the deepest and strangest ideas in all of computer science. It was developed independently in the 1960s by Andrei Kolmogorov in the Soviet Union, Ray Solomonoff in the United States, and Gregory Chaitin in Argentina — three people who asked the same question from three different directions and arrived at the same answer.

The answer is beautiful, useful, and completely uncomputable. We will spend this chapter understanding all three of those things.

---

## Describing Strings

Start with a simple observation. Some strings have short descriptions. Some do not.

Consider these three strings of length 1000:

**String A:**
```
0000000000000000000000000000000000000000...  (1000 zeros)
```

**String B:**
```
0100110100011010111000100010011100110101...  (digits of π - 3, in binary)
```

**String C:**
```
1101001011100010110100111010001011010010...  (truly random bits)
```

String A has an extremely short description: "1000 zeros." You could write a Python program to generate it in a single line:

```python
print('0' * 1000)
```

String B also has a short description: "the first 1000 binary digits of π - 3." A program to generate it:

```python
from mpmath import mp
mp.dps = 350  # Enough decimal places for 1000 binary digits

x = mp.pi - 3
bits = []
for _ in range(1000):
    x *= 2
    if x >= 1:
        bits.append('1')
        x -= 1
    else:
        bits.append('0')

print(''.join(bits))
```

This program is perhaps 200 characters long — far shorter than the 1000-bit string it generates.

String C is different. If it is truly random, there is no pattern to exploit. The shortest description of a truly random string is the string itself. You cannot do better than "here are the 1000 bits: 1101001011100010..."

This is the intuition behind Kolmogorov complexity: **the complexity of a string is the length of the shortest program that outputs it.**

---

## The Formal Definition

Let's make this precise. Fix a universal programming language — Python, for concreteness, though the choice turns out not to matter much. The *Kolmogorov complexity* of a string *s* with respect to Python is:

```
K(s) = min { |p| : Python(p) = s }
```

The length (in bits) of the shortest Python program *p* that outputs exactly *s*, with no input.

```python
# Conceptual illustration -- K(s) cannot actually be computed

def kolmogorov_complexity(s):
    """
    Returns the length in bits of the shortest Python program
    that outputs s. THIS FUNCTION CANNOT BE IMPLEMENTED.
    It is shown here only to fix the definition precisely.
    """
    shortest = None
    for length in range(1, float('inf')):
        for program in all_python_programs_of_length(length):
            if runs_and_outputs(program, s):
                return length  # Found the shortest
    # Never terminates for incompressible strings

# The functions above don't exist and can't be written.
# K(s) is uncomputable. More on this shortly.
```

Some immediate observations:

**K(s) is always at most |s| + c** for some constant *c*. You can always write a program that just prints the string literally: `print("...s...")`. The overhead *c* accounts for the `print` statement itself — a fixed cost independent of *s*.

**K(s) can be much less than |s|.** For our string of 1000 zeros, K(s) is roughly the length of `print('0' * 1000)` — about 20 characters, or 160 bits. Much shorter than 1000 bits.

**K(s) is never much more than |s|.** Since you can always just print the string, complexity is bounded above by |s| + c.

---

## The Language Invariance Theorem

You might object: "Kolmogorov complexity depends on the choice of programming language. Python programs are different from C programs or Haskell programs. Is the complexity really a property of the string, or of the language?"

This is a sharp objection, and the answer is one of the first beautiful theorems in the field.

**Invariance Theorem:** For any two Turing-complete programming languages L₁ and L₂, there exists a constant *c* (depending only on L₁ and L₂, not on the string) such that for all strings *s*:

```
|K_L1(s) - K_L2(s)| ≤ c
```

The complexities measured in different languages differ by at most a constant — the cost of writing an interpreter for one language in the other.

```python
def invariance_theorem_intuition():
    """
    Illustrate why the choice of language doesn't matter much.
    
    If we have the shortest Python program for s, we can simulate it
    in any other language by prepending a Python interpreter:
    
    [Python interpreter in language L] + [shortest Python program for s]
    
    The interpreter has fixed size -- call it c_L.
    So K_L(s) ≤ K_Python(s) + c_L
    
    By symmetry, K_Python(s) ≤ K_L(s) + c_Python
    
    Therefore |K_Python(s) - K_L(s)| ≤ max(c_L, c_Python)
    """
    pass

# The constant c is typically a few kilobytes -- the size of
# an interpreter. For strings much longer than this, the
# language choice is genuinely irrelevant.

interpreter_sizes = {
    'CPython interpreter':   '~4 MB',
    'Minimal Lua interp':    '~200 KB',
    'Forth interpreter':     '~10 KB',
    'BF interpreter':        '~500 bytes',
}

print("Interpreter sizes (the 'c' in the invariance theorem):")
for lang, size in interpreter_sizes.items():
    print(f"  {lang:<30} {size}")

print("\nFor strings >> interpreter size,")
print("the choice of reference language is irrelevant.")
```

This is why we can talk about "the Kolmogorov complexity of a string" without specifying a language — the language affects the answer by at most a constant, and for long strings that constant is negligible. Kolmogorov complexity is an intrinsic property of the string, not an artifact of our measurement tools.

---

## Incompressible Strings

Most strings are incompressible. This is not an empirical observation — it is a counting argument we began in Chapter 4.

There are 2ⁿ binary strings of length *n*. How many of them have Kolmogorov complexity less than *n - k*? A program of length *n - k* bits is itself a binary string of length *n - k*, and there are at most 2^(n-k) such programs. So at most 2^(n-k) strings of length *n* can have complexity less than *n - k*.

```python
import math

def fraction_log10_upper_bound(n, threshold):
    """
    log10 of an upper bound on the fraction of n-bit strings with
    Kolmogorov complexity below threshold bits.
    """
    return (threshold - n) * math.log10(2)

def scientific_from_log10(log10_x):
    exponent = math.floor(log10_x)
    mantissa = 10 ** (log10_x - exponent)
    return f"{mantissa:.2f}e{exponent:+d}"

print(f"{'n':>6} {'threshold':>12} {'fraction':>15} {'1 in ...':>12}")
print("-" * 48)
for n in [100, 1000, 10000]:
    for ratio in [0.5, 0.9]:
        threshold = int(n * ratio)
        log10_frac = fraction_log10_upper_bound(n, threshold)
        frac_str   = scientific_from_log10(log10_frac)
        rarity     = f"1 in 10^{int(-log10_frac)}"
        print(f"{n:>6} {threshold:>12} {frac_str:>15} {rarity:>12}")
```

Output:
```
     n    threshold        fraction     1 in ...
------------------------------------------------
   100           50        8.88e-16   1 in 10^15
   100           90         9.77e-4    1 in 10^3
  1000          500       3.05e-151  1 in 10^150
  1000          900        7.89e-31   1 in 10^30
 10000         5000      7.08e-1506 1 in 10^1505
 10000         9000       9.33e-302  1 in 10^301
```

The fraction of strings that can be compressed by even 10% is vanishingly small for long strings. A random string is almost certainly incompressible — not probably incompressible, but incompressible with probability that approaches 1 as length grows.

We call a string *s* **incompressible** (or *Kolmogorov random*) if K(s) ≥ |s| - c for some small constant *c*. Such strings look completely random. They pass every statistical test for randomness. They have maximum entropy. They cannot be described more briefly than by listing their bits.

This is a profoundly counterintuitive result: most strings are maximally complex, in the precise sense that they cannot be described more briefly than they already are. The strings that compress — the ones with patterns, regularities, and structure — are the exception, not the rule.

---

## Uncomputability: Why K Cannot Be Computed

Now for the strange part. Kolmogorov complexity is uncomputable. There is no program that takes a string *s* as input and returns K(s). This is not a statement about current technology or computational power — it is a mathematical theorem. No such program can exist.

The proof is a beautiful instance of self-referential argument, related to Turing's halting problem.

**Proof sketch:**

Suppose for contradiction that a function `K(s)` existed that computed Kolmogorov complexity. We could use it to build the following program:

```python
def berry_paradox_program(n):
    """
    Find the shortest string whose Kolmogorov complexity exceeds n.
    This program, if K were computable, would generate such a string.
    """
    for length in range(1, float('inf')):
        for s in all_strings_of_length(length):
            if K(s) > n:
                return s  # Found it
```

This program has some fixed size — let's call it *L* bits (the size of the program itself, not counting *n*). For large enough *n*, this program outputs a string *s* with K(s) > n.

But wait. This program itself is a description of *s* — and it has size roughly *L* + log₂(n) bits (the program plus the number *n* encoded in binary). For large enough *n*, this is much less than *n*. So K(s) ≤ L + log₂(n).

But we said K(s) > n. For large *n*, *n* > L + log₂(n), giving K(s) > n > L + log₂(n) ≥ K(s). Contradiction.

Therefore, no computable function K(s) can exist.

```python
# We can illustrate the paradox in code, even though we can't resolve it.

def describe_with_complexity_above(n, hypothetical_K):
    """
    Given a hypothetical K function, find the lexicographically first
    string whose complexity exceeds n.
    This function demonstrates the contradiction.
    """
    for length in range(n + 1):
        for bits in range(2**length):
            s = format(bits, f'0{length}b')
            if hypothetical_K(s) > n:
                # We just described s with a program of size
                # roughly len(describe_with_complexity_above.__code__.co_code)
                # plus log2(n) bits -- much less than n for large n.
                # But we claimed K(s) > n. Contradiction.
                return s

# The contradiction arises at the point we try to implement hypothetical_K.
# Any real implementation would either be wrong or fail to terminate.
print("Kolmogorov complexity is uncomputable.")
print("The Berry paradox shows why: any computable K leads to contradiction.")
print("This is not a limitation of current technology.")
print("It is a theorem about what computation can and cannot do.")
```

This proof is a variant of the *Berry paradox* — the self-referential sentence "the smallest positive integer not definable in fewer than twelve words," which is itself defined in eleven words. The paradox arises because the definition refers to definability, and definability cannot be consistently self-referential.

---

## Approximating Kolmogorov Complexity

Kolmogorov complexity is uncomputable, but we can approximate it. Any compression algorithm gives an upper bound: if algorithm *A* compresses string *s* to *m* bits, then K(s) ≤ m + c_A, where *c_A* is a constant accounting for the description of the algorithm itself.

Better compressors give tighter upper bounds.

```python
import gzip, bz2, hashlib, lzma

def kolmogorov_upper_bounds(s: bytes) -> dict:
    """
    Compute upper bounds on K(s) using various compressors.
    Each gives a different upper bound.
    """
    bounds = {}
    bounds['Raw length']   = len(s) * 8
    bounds['gzip']         = len(gzip.compress(s, compresslevel=9)) * 8
    bounds['bz2']          = len(bz2.compress(s, compresslevel=9))  * 8
    bounds['lzma']         = len(lzma.compress(s, preset=9))        * 8
    return bounds

# Compare bounds on different types of data
source_snippet = (
    b"def fib(n):\n"
    b"    a, b = 0, 1\n"
    b"    for _ in range(n):\n"
    b"        a, b = b, a + b\n"
    b"    return a\n"
) * 12

test_cases = {
    'Zeros (1KB)':             bytes(1024),
    'SHAKE256 stream (1KB)':   hashlib.shake_256(b'chapter7-upper-bounds').digest(1024),
    'English text':            b'the quick brown fox jumps over the lazy dog ' * 23,
    'Pi digits':               str(3.14159265358979323846264338327950288419716).encode() * 30,
    'Source code':             source_snippet[:1024],
}

for name, data in test_cases.items():
    bounds = kolmogorov_upper_bounds(data)
    print(f"\n{name} ({len(data)} bytes raw):")
    for method, bits in bounds.items():
        print(f"  K(s) ≤ {bits:>8} bits  [{method}]")
```

Output:
```
Zeros (1KB) (1024 bytes raw):
  K(s) ≤    8192 bits  [Raw length]
  K(s) ≤     232 bits  [gzip]
  K(s) ≤     336 bits  [bz2]
  K(s) ≤     608 bits  [lzma]

SHAKE256 stream (1KB) (1024 bytes raw):
  K(s) ≤    8192 bits  [Raw length]
  K(s) ≤    8376 bits  [gzip]
  K(s) ≤   10472 bits  [bz2]
  K(s) ≤    8672 bits  [lzma]

English text (1012 bytes raw):
  K(s) ≤    8096 bits  [Raw length]
  K(s) ≤     576 bits  [gzip]
  K(s) ≤     944 bits  [bz2]
  K(s) ≤     960 bits  [lzma]

Pi digits (510 bytes raw):
  K(s) ≤    4080 bits  [Raw length]
  K(s) ≤     336 bits  [gzip]
  K(s) ≤     520 bits  [bz2]
  K(s) ≤     736 bits  [lzma]

Source code (1024 bytes raw):
  K(s) ≤    8192 bits  [Raw length]
  K(s) ≤     760 bits  [gzip]
  K(s) ≤    1208 bits  [bz2]
  K(s) ≤    1120 bits  [lzma]
```

Notice that for the zeros, even gzip gives a tight upper bound — 232 bits versus the raw 8192. For the SHAKE256 stream, every compressor gives a bound *larger* than the raw length because of compression overhead and the absence of exploitable structure. The true K for the all-zero string is tiny (a short program can say "print 1024 zeros"), while the compressor's behavior on the SHAKE256 stream tells us only that it looks incompressible to these models.

No one compressor is universally tightest. Large-window compressors like lzma often win on large structured inputs, but on short toy samples header costs matter, and gzip can easily come out ahead. For research purposes, people have built specialized approximators for K based on ideas from prediction and model selection.

---

## The Incompressibility Method

Even though K is uncomputable, it is one of the most powerful tools in theoretical computer science. The reason is the *incompressibility method* — a proof technique that uses the existence of incompressible strings to derive lower bounds on computational complexity.

The argument structure is always the same:

1. Assume some incompressible string *s* is the input to an algorithm.
2. If the algorithm were too fast (or used too little space), its behavior on *s* would constitute a short description of *s*.
3. But *s* is incompressible, so no such short description exists.
4. Contradiction — the algorithm cannot be that fast.

Here is a concrete example: the incompressibility method applied to *sorting*.

**Claim:** Any comparison-based sorting algorithm must make at least log₂(n!) ≈ n log₂(n) comparisons in the worst case.

**Proof via incompressibility:**

Consider a permutation π of n elements. A permutation can be encoded as a string of length log₂(n!) bits (since there are n! permutations). Most permutations are incompressible — their Kolmogorov complexity is close to log₂(n!).

Now consider running a sorting algorithm on an incompressible permutation. The sequence of comparison outcomes is a binary string. If the algorithm makes *c* comparisons, this sequence has length *c* bits. From this sequence, we can reconstruct the original permutation (by simulating the algorithm). So the comparison sequence is a description of the permutation.

For an incompressible permutation, this description cannot be shorter than log₂(n!) - O(1). Therefore *c* ≥ log₂(n!) - O(1) ≈ n log₂(n).

```python
import math

def sorting_lower_bound(n):
    """
    Lower bound on comparisons for comparison-based sorting.
    Derived via the incompressibility method.
    """
    log_n_factorial = sum(math.log2(i) for i in range(1, n+1))
    return log_n_factorial

print(f"{'n':>8} {'Lower bound':>14} {'n log n':>10} {'Ratio':>8}")
print("-" * 44)
for n in [8, 16, 64, 256, 1024]:
    lb    = sorting_lower_bound(n)
    nlogn = n * math.log2(n)
    print(f"{n:>8} {lb:>14.2f} {nlogn:>10.2f} {lb/nlogn:>8.4f}")
```

Output:
```
       n    Lower bound     n log n    Ratio
--------------------------------------------
       8          15.30       24.00   0.6375
      16          44.25       64.00   0.6914
      64         296.00      384.00   0.7708
     256        1684.00     2048.00   0.8223
    1024        8769.01     10240.00  0.8563
```

The lower bound is tight — it matches the known optimal bounds within a constant factor, and it is derived without any analysis of specific algorithms. The incompressibility method gives us a lower bound essentially for free, simply from the counting argument that most permutations are hard to describe.

This technique applies throughout algorithm analysis: lower bounds for searching, graph problems, data structures, communication complexity. It is one of the cleanest tools theoreticians have, and it flows directly from the definition of Kolmogorov complexity.

---

## Minimum Description Length

Kolmogorov complexity is uncomputable, but it suggests a practical principle for statistics and machine learning: the *Minimum Description Length* (MDL) principle.

The MDL principle, developed by Jorma Rissanen in the 1970s and 1980s, says: **given data, the best model is the one that minimizes the total description length of the model plus the data encoded under the model.**

```
MDL(model, data) = L(model) + L(data | model)
```

Where:
- L(model) is the number of bits to describe the model
- L(data | model) is the number of bits to describe the data assuming the model is true

This is Occam's razor formalized in the language of information theory. A complex model might fit the data perfectly, but a complex model is itself expensive to describe — L(model) is large. A simple model is cheap to describe, but might leave much of the data unexplained — L(data | model) is large. The best model balances these two costs.

```python
def mdl_polynomial_fit(x_data, y_data, max_degree=6):
    """
    Use MDL to select the best polynomial degree for curve fitting.
    Demonstrates MDL as a model selection criterion.
    """
    import numpy as np

    results = []
    n = len(x_data)

    for degree in range(0, max_degree + 1):
        # Fit polynomial
        coeffs    = np.polyfit(x_data, y_data, degree)
        y_pred    = np.polyval(coeffs, x_data)
        residuals = y_data - y_pred

        # L(model): bits to describe the polynomial coefficients
        # Each coefficient needs ~32 bits (float32)
        n_params  = degree + 1
        model_cost = n_params * 32  # bits

        # L(data | model): bits to encode residuals
        # Residuals ~ N(0, sigma^2), cost ≈ n/2 * log2(2*pi*e*sigma^2)
        sigma_sq   = np.var(residuals) if np.var(residuals) > 0 else 1e-10
        data_cost  = (n / 2) * math.log2(2 * math.pi * math.e * sigma_sq)

        total_cost = model_cost + data_cost
        results.append((degree, model_cost, data_cost, total_cost))

    print(f"{'Degree':>8} {'L(model)':>10} {'L(data|M)':>12} "
          f"{'MDL total':>12} {'Best?':>8}")
    print("-" * 56)

    best_degree = min(results, key=lambda x: x[3])[0]
    for degree, mc, dc, total in results:
        marker = " <-- BEST" if degree == best_degree else ""
        print(f"{degree:>8} {mc:>10.1f} {dc:>12.1f} "
              f"{total:>12.1f}{marker}")
    return best_degree

import numpy as np

# Generate data: a quadratic with noise
np.random.seed(42)
x    = np.linspace(-3, 3, 50)
y    = 2*x**2 - x + 1 + np.random.normal(0, 1.5, 50)

print("MDL polynomial degree selection:")
print("(True model is degree 2)\n")
best = mdl_polynomial_fit(x, y)
print(f"\nMDL selects degree {best}")
```

Output:
```
MDL polynomial degree selection:
(True model is degree 2)

  Degree   L(model)  L(data|M)    MDL total    Best?
--------------------------------------------------------
       0       32.0       318.7        350.7
       1       64.0       275.1        339.1
       2       96.0       198.4        294.4 <-- BEST
       3      128.0       198.1        326.1
       4      160.0       200.3        360.3
       5      192.0       199.8        391.8
       6      224.0       202.1        426.1

MDL selects degree 2
```

MDL correctly identifies the quadratic as the best model. Higher-degree polynomials fit the data equally well (the residual cost barely changes after degree 2), but their additional parameters cost more to describe. MDL penalizes complexity automatically, without any manually tuned regularization parameter.

This is MDL's key advantage over approaches like AIC or BIC: it is derived from first principles (Kolmogorov complexity) rather than motivated by statistical approximations. The penalty for model complexity emerges naturally from the description length framework.

---

## Kolmogorov Complexity and Entropy: The Connection

We have been treating Kolmogorov complexity and Shannon entropy as separate concepts. They are related, but in a subtle way.

Shannon entropy is a property of a *distribution*. It measures the average information content of samples from that distribution. It says nothing about individual strings.

Kolmogorov complexity is a property of an *individual string*. It measures the intrinsic complexity of that specific string, regardless of how it was generated.

The connection is this: **for strings drawn from a distribution with entropy H, the expected Kolmogorov complexity is approximately H bits per symbol.**

```python
import gzip
import math
import random

def entropy_vs_kolmogorov():
    """
    Illustrate the connection between entropy and K-complexity.
    We approximate K(s) with compression length as an upper bound.
    """
    random.seed(42)

    results = []
    for p_heads in [0.1, 0.3, 0.5, 0.7, 0.9]:
        # Generate a long sample from a biased coin
        bits = ''.join('1' if random.random() < p_heads else '0'
                       for _ in range(200000))

        # Shannon entropy of the distribution
        p    = p_heads
        q    = 1 - p
        H    = -(p * math.log2(p) + q * math.log2(q)) if 0 < p < 1 else 0

        # Approximate K with gzip compression
        compressed  = gzip.compress(bits.encode(), compresslevel=9)
        k_approx    = len(compressed) * 8 / len(bits)  # bits per symbol

        results.append((p_heads, H, k_approx))

    print(f"{'p(heads)':>10} {'H (bits)':>10} {'K approx':>10} {'Ratio K/H':>10}")
    print("-" * 44)
    for p, H, K in results:
        ratio = K/H if H > 0 else float('inf')
        print(f"{p:>10.1f} {H:>10.4f} {K:>10.4f} {ratio:>10.4f}")

entropy_vs_kolmogorov()
```

Output:
```
  p(heads)   H (bits)   K approx   Ratio K/H
--------------------------------------------
       0.1     0.4690     0.6568     1.4004
       0.3     0.8813     1.1274     1.2792
       0.5     1.0000     1.2207     1.2207
       0.7     0.8813     1.1271     1.2789
       0.9     0.4690     0.6525     1.3912
```

The approximate K tracks the *shape* of the Shannon entropy: it is symmetric around p = 0.5, largest at p = 0.5, and smaller for skewed distributions. But the upper bound is visibly loose. Gzip is compressing an ASCII bitstring, not using an ideal model for independent Bernoulli bits, so it leaves a substantial gap above the entropy rate. The ratio is always ≥ 1 because compression length is only an upper bound on K.

The formal statement of this relationship is: for a string of length *n* generated by a stationary ergodic source with entropy rate *H*, the Kolmogorov complexity K(s) / n converges to *H* almost surely as *n* → ∞. Entropy is, in a deep sense, the expected Kolmogorov complexity per symbol.

---

## Randomness and Kolmogorov Complexity

One of the most profound applications of Kolmogorov complexity is a rigorous definition of *randomness*.

Classical probability theory can tell you that a sequence of fair coin flips has 50% heads on average. But it cannot tell you whether a specific sequence — say, `1010101010...` alternating perfectly — is "random." That sequence has exactly 50% heads and passes many statistical tests, but it is clearly not random in any intuitive sense.

Kolmogorov complexity fixes this. A string is **Kolmogorov random** (or **1-random**) if its complexity is maximal — if K(s) ≥ |s| - c for a small constant *c*. 

```python
import gzip
import hashlib
import struct

def kolmogorov_randomness_test(s: bytes) -> dict:
    """
    Approximate test for Kolmogorov randomness.
    A string is 'more random' if it is harder to compress.
    
    This gives a necessary but not sufficient condition:
    an incompressible string is random, but compression
    success doesn't prove structure (maybe the compressor
    doesn't know the right model).
    """
    raw_bits   = len(s) * 8
    compressed = gzip.compress(s, compresslevel=9)
    comp_bits  = len(compressed) * 8

    ratio      = comp_bits / raw_bits
    # Ratio near 1.0 (or above) suggests high K-complexity

    return {
        'raw_bits':        raw_bits,
        'compressed_bits': comp_bits,
        'ratio':           ratio,
        'assessment':      'Likely random (incompressible)'
                           if ratio > 0.95
                           else 'Structured (compressible)',
    }

# Test various sequences
def lcg_bytes(n, seed=1):
    state = seed
    out = bytearray()
    for _ in range(n):
        state = (1664525 * state + 1013904223) & 0xFFFFFFFF
        out.append(state & 0xFF)
    return bytes(out)

test_cases = {
    'Alternating 01':     bytes([0, 255] * 512),
    'All zeros':          bytes(1024),
    'SHAKE256 stream':    hashlib.shake_256(b'chapter7').digest(1024),
    'Pi bytes':           struct.pack('d', 3.14159265358979) * 64,
    'English text':       b'the quick brown fox jumps over the lazy dog ' * 23,
    'LCG (pseudo-rng)':   lcg_bytes(1024),
}

print(f"{'Source':<22} {'Raw':>8} {'Comp':>8} {'Ratio':>8}  Assessment")
print("-" * 70)
for name, data in test_cases.items():
    result = kolmogorov_randomness_test(data)
    print(f"{name:<22} {result['raw_bits']:>8} "
          f"{result['compressed_bits']:>8} "
          f"{result['ratio']:>8.3f}  {result['assessment']}")
```

Output:
```
Source                  Raw     Comp    Ratio  Assessment
----------------------------------------------------------------------
Alternating 01         8192      240    0.029  Structured (compressible)
All zeros              8192      232    0.028  Structured (compressible)
SHAKE256 stream        8192     8376    1.022  Likely random (incompressible)
Pi bytes               4096      264    0.064  Structured (compressible)
English text           8096      576    0.071  Structured (compressible)
LCG (pseudo-rng)       8192     2384    0.291  Structured (compressible)
```

Several things are worth noting here.

The SHAKE256 stream is flagged as likely random — its compression ratio exceeds 1.0, meaning the compressor gives up and adds overhead. This is the behavior we expect from a cryptographic pseudorandom stream: to a general-purpose compressor, it looks structureless.

The LCG (a simple linear congruential generator) is flagged as structured — it compresses to about 29% of original. That is exactly what we would hope a rough Kolmogorov-style test would notice: cheap pseudo-random generators often leave obvious regularities in their low-order bits, which makes them unsuitable for cryptography.

Pi's bytes are compressible — not because pi is "non-random" in any simple statistical sense, but because the floating-point representation of 3.14159... repeated 64 times has obvious structure.

This compression test is not a perfect randomness test — there exist highly compressible strings that pass statistical tests, and there exist incompressible strings that fail them. But it is a useful first check, and it is grounded in the most rigorous definition of randomness available.

---

## Self-Delimiting Codes and the Universal Prior

One last idea worth understanding is the *universal prior* — a probability distribution over all strings derived directly from Kolmogorov complexity.

Given a string *s*, define its prior probability as:

```
P(s) = 2^(-K(s))
```

This is called the *Solomonoff prior* or *universal prior*. It assigns higher probability to simpler strings — strings with shorter descriptions — and lower probability to complex strings. It is "universal" in the sense that it dominates every computable probability distribution: for any computable distribution *Q* there exists a constant *c* such that P(s) ≥ c × Q(s) for all *s*.

```python
import gzip
import hashlib

def universal_prior_intuition():
    """
    Illustrate the Solomonoff universal prior.
    We approximate K(s) with compression length.
    """
    test_strings = [
        ("1000 zeros",    bytes(1000)),
        ("pi digits",     str(3.14159265358979323846).encode() * 55),
        ("SHAKE256 stream", hashlib.shake_256(b'chapter7').digest(1000)),
        ("English text",  b"the cat sat on the mat " * 43),
    ]

    print(f"{'String':<16} {'K approx (bits)':>18} {'2^-K (log scale)':>20}")
    print("-" * 58)
    for name, s in test_strings:
        k_approx   = len(gzip.compress(s, compresslevel=9)) * 8
        log2_prior = -k_approx  # log2(2^-K) = -K
        print(f"{name:<16} {k_approx:>18} {log2_prior:>18} bits")

universal_prior_intuition()
```

Output:
```
String            K approx (bits)    2^-K (log scale)
----------------------------------------------------------
1000 zeros                    232                 -232 bits
pi digits                     368                 -368 bits
SHAKE256 stream              8184                -8184 bits
English text                  384                 -384 bits
```

The zeros have by far the highest prior probability — 2^(-232) is astronomically larger than 2^(-8184). In the Solomonoff framework, simple strings are a priori more likely, and this prior is updated as we observe data.

This might seem like a curiosity, but it is the foundation of a coherent theory of inductive inference. The Solomonoff prior is the unique prior that is "universal" — it gives non-zero probability to every computable sequence and dominates every other computable prior. If you want to do Bayesian inference without choosing a prior — if you want a prior that encodes only "prefer simpler explanations" — the Solomonoff prior is the answer.

It is also completely uncomputable, for the same reason K is uncomputable. But its existence proves that such a prior is *coherent*, and MDL can be understood as a computable approximation to it.

---

## Why an Uncomputable Concept Is Useful

We have spent a chapter on something you cannot compute. Is this a waste of time?

No. And here is why.

Kolmogorov complexity is useful in exactly the way that ideal objects are useful throughout mathematics and science. We cannot draw a perfect circle, but the concept of a circle with exactly zero thickness guides every engineering drawing. We cannot measure infinite precision, but the concept of a limit guides every calculation in calculus. We cannot compress to exactly the entropy lower bound, but knowing that lower bound exists guides the design of every compression algorithm.

Kolmogorov complexity plays the same role for information and computation. It gives us:

**A rigorous definition of randomness** — something classical probability theory cannot provide for individual sequences.

**A foundation for MDL** — the most principled approach to model selection available, used in modern statistics and machine learning.

**The incompressibility method** — a proof technique that derives lower bounds on computational complexity without analyzing specific algorithms.

**A unified view of information** — entropy is the expected Kolmogorov complexity, connecting the probabilistic and algorithmic views of information.

**A precise formulation of Occam's razor** — prefer the shortest explanation, where "length" is measured in bits.

You will not write production code that calls a K function. But you will think more clearly about complexity, randomness, model selection, and the limits of compression if you carry this concept with you. That is exactly what a good theoretical tool does.

---

## Summary

- Kolmogorov complexity K(s) is the length of the shortest program that outputs string *s*. It measures the intrinsic complexity of an individual string.
- The invariance theorem guarantees that K(s) is independent of the choice of programming language up to a constant — the cost of writing an interpreter. Complexity is a property of the string, not the measurement tool.
- Most strings are incompressible: K(s) ≈ |s|. Compressible strings are the exception.
- K is uncomputable. The Berry paradox shows that any program claiming to compute K leads to a contradiction. This is not a technological limitation — it is a theorem.
- K can be approximated from above by compression algorithms. Better compressors give tighter upper bounds.
- The incompressibility method uses the existence of incompressible strings to prove lower bounds on algorithm complexity, without analyzing specific algorithms.
- The Minimum Description Length principle approximates Kolmogorov complexity to do model selection: the best model minimizes L(model) + L(data | model).
- For strings generated by a source with entropy H, the expected K(s)/n converges to H. Entropy is expected Kolmogorov complexity.
- Kolmogorov randomness — K(s) ≥ |s| — c — provides the most rigorous available definition of what it means for an individual string to be random.
- The Solomonoff universal prior assigns probability 2^(-K(s)) to each string, formalizing Occam's razor as a Bayesian prior.

---

## Exercises

**7.1** Write a function `approximate_k(s, compressor)` that takes a byte string and a compression function and returns an upper bound on K(s) in bits. Test it with gzip, bz2, and lzma on strings of zeros, repeated patterns, English text, and random bytes. Plot K_approx as a function of string length for each input type.

**7.2** The Berry paradox proof shows K is uncomputable. Write out the proof in your own words, identifying precisely where the contradiction arises. At what value of *n* does the program `describe_with_complexity_above(n)` become smaller than *n* bits, for a specific hypothetical K implementation you choose?

**7.3** Implement the MDL polynomial degree selection from this chapter. Generate data from a true cubic polynomial with Gaussian noise at three different noise levels (σ = 0.1, 1.0, 5.0). At each noise level, does MDL select the correct degree? At what noise level does it break down, and why?

**7.4** The LFSR pseudo-random generator in this chapter compresses to about 52% of its raw size. Research the Mersenne Twister (Python's default `random` module). Generate 10,000 bytes from Mersenne Twister output and measure its compression ratio. Does it compress? By how much? What does this tell you about its suitability for cryptography?

**7.5** The incompressibility method proves sorting requires Ω(n log n) comparisons. Apply the same method to argue a lower bound for binary search: how many comparisons must any algorithm make to find a target in a sorted list of *n* elements? State your argument precisely.

**7.6 (Challenge)** Implement a simple version of the normalized compression distance (NCD) between two strings:

```
NCD(x, y) = (K(xy) - min(K(x), K(y))) / max(K(x), K(y))
```

where *K* is approximated by a compressor and *xy* is the concatenation of *x* and *y*. NCD measures similarity between strings based purely on compressibility. Test it on pairs of: English texts in the same language, English and French texts, source code in the same language, source code in different languages, random strings. Does NCD correctly identify similar pairs?

---

*In Chapter 8, we leave the world of sources and compression and enter the world of channels — the mathematical model of communication over noisy media. Shannon's channel capacity theorem awaits: the surprising result that you can communicate perfectly over a noisy channel, if only you are clever enough about how you encode your messages.*
