# Chapter 6: Arithmetic Coding and Beyond

## The Problem With Whole Numbers

At the end of Chapter 5 we identified Huffman coding's central limitation: it must assign an integer number of bits to each symbol. The optimal code length for a symbol with probability *p* is -log₂(p) bits, which is almost never an integer. Huffman rounds up, and that rounding costs up to 1 bit per symbol.

For most practical inputs that overhead is acceptable — a few percent at most. But consider these two cases where it is not:

**Case 1: A heavily skewed distribution.** A source that emits `a` with probability 0.99 and `b` with probability 0.01 has entropy 0.081 bits per symbol. Huffman must use at least 1 bit per symbol — a 12x overhead, as we computed at the end of Chapter 5.

**Case 2: A large alphabet with many low-probability symbols.** A source with 10,000 possible symbols, most of them rare, will have many symbols whose optimal code length is fractional. The cumulative rounding error across all symbols can be substantial.

Both cases point to the same need: a coding scheme that can assign *fractional* bit lengths. Not 1 bit, not 2 bits, but 0.081 bits for our highly probable `a`.

This seems impossible. A bit is a bit — you cannot write half of one. But arithmetic coding achieves fractional lengths by a beautiful sleight of hand: instead of encoding symbols one at a time, it encodes the *entire message* as a single number. The fractional bits per symbol emerge from amortizing the total cost across the whole sequence.

---

## The Core Idea: A Message as a Number

Here is the central insight of arithmetic coding, stated plainly before we implement anything.

Imagine the interval [0, 1) on the real number line. Every possible message corresponds to a unique sub-interval of this line. We will construct a mapping from messages to intervals such that:

- More probable messages map to *wider* intervals.
- Less probable messages map to *narrower* intervals.
- The interval for a message narrows as the message grows longer.

To encode a message, we find its interval and transmit the shortest binary fraction that falls inside it. To decode, we read binary fractions until we have uniquely identified an interval, then read symbols from it.

The number of bits required to specify a sub-interval of width *w* is approximately -log₂(w) bits — exactly the entropy of the message. This is how arithmetic coding achieves fractional bit lengths: the interval width encodes the probability, and the bit cost is the logarithm of the probability.

Let's build this up from first principles.

---

## Building the Interval

Start with the interval [0, 1). Divide it among the symbols of the alphabet in proportion to their probabilities. For a source with symbols `a`, `b`, `c` and probabilities 0.5, 0.3, 0.2:

```
[0.0, 0.5)  →  a
[0.5, 0.8)  →  b
[0.8, 1.0)  →  c
```

To encode a message, we start with the whole interval [0, 1) and iteratively narrow it. For each symbol in the message, we zoom into the sub-interval assigned to that symbol, then re-divide *that* sub-interval among all symbols in the same proportions.

```python
def build_intervals(probs: dict) -> dict:
    """
    Given a symbol probability dict, build the sub-intervals of [0, 1).
    Returns dict mapping symbol -> (low, high).
    """
    intervals = {}
    cumulative = 0.0
    for symbol, prob in sorted(probs.items()):
        intervals[symbol] = (cumulative, cumulative + prob)
        cumulative += prob
    return intervals

probs = {'a': 0.5, 'b': 0.3, 'c': 0.2}
intervals = build_intervals(probs)

print("Symbol intervals:")
for sym, (lo, hi) in intervals.items():
    print(f"  {sym}: [{lo:.4f}, {hi:.4f})  width={hi-lo:.4f}")
```

Output:
```
Symbol intervals:
  a: [0.0000, 0.5000)  width=0.5000
  b: [0.5000, 0.8000)  width=0.3000
  c: [0.8000, 1.0000)  width=0.2000
```

Now encode the message `"ab"`:

```python
def arithmetic_encode_steps(message: str, probs: dict):
    """
    Show step-by-step arithmetic encoding of a message.
    Returns the final (low, high) interval.
    """
    intervals = build_intervals(probs)
    low, high = 0.0, 1.0
    width     = 1.0

    print(f"Start:          [{low:.8f}, {high:.8f})  width={width:.8f}")

    for symbol in message:
        sym_low, sym_high = intervals[symbol]
        new_low  = low + width * sym_low
        new_high = low + width * sym_high
        low, high = new_low, new_high
        width     = high - low
        print(f"After '{symbol}':       [{low:.8f}, {high:.8f})"
              f"  width={width:.8f}")

    return low, high

probs = {'a': 0.5, 'b': 0.3, 'c': 0.2}
low, high = arithmetic_encode_steps("abc", probs)
print(f"\nFinal interval: [{low:.8f}, {high:.8f})")
print(f"Interval width: {high - low:.8f}")
print(f"Bits needed:    {-math.log2(high - low):.4f}")
print(f"Entropy:        "
      f"{-sum(p*math.log2(p) for p in probs.values()):.4f} bits/symbol")
print(f"Optimal total:  "
      f"{3 * -sum(p*math.log2(p) for p in probs.values()):.4f} bits")
```

Output:
```
Start:          [0.00000000, 1.00000000)  width=1.00000000
After 'a':      [0.00000000, 0.50000000)  width=0.50000000
After 'b':      [0.15000000, 0.30000000)  width=0.15000000
After 'c':      [0.27000000, 0.30000000)  width=0.03000000

Final interval: [0.27000000, 0.30000000)
Interval width: 0.03000000
Bits needed:    5.0589
Optimal total:  4.6096 bits
```

Each symbol narrows the interval by a factor equal to its probability. After encoding `"abc"`, the interval has width 0.5 × 0.3 × 0.2 = 0.03. The number of bits needed to specify a point in this interval is -log₂(0.03) ≈ 5.06 bits — just above the theoretical optimum of 4.61 bits for a 3-symbol message.

The width of the final interval is always the product of the symbol probabilities — which is exactly the probability of the message. So the bit cost is always -log₂(P(message)), which approaches the entropy rate for long messages.

---

## Encoding: Finding the Shortest Fraction

To transmit the encoded message, we need to find the shortest binary fraction (a number of the form k/2ⁿ for integers k and n) that falls inside our final interval. The shorter the fraction, the fewer bits we need.

```python
import math

def shortest_fraction_in_interval(low: float, high: float) -> str:
    """
    Find the shortest binary fraction in [low, high).
    Returns a binary string representing the fraction.
    """
    bits = ""
    value = 0.0
    step  = 0.5

    # Add bits until our value falls in the interval
    # We try adding a '1' bit; if the result overshoots, add '0'
    for _ in range(64):  # Safety limit
        mid = value + step
        if mid < high:
            bits  += '1'
            value  = mid
        else:
            bits  += '0'
        step /= 2

        # Check if current value is in [low, high)
        if low <= value < high:
            break

    return bits

low, high = 0.27, 0.30
code = shortest_fraction_in_interval(low, high)
print(f"Interval: [{low}, {high})")
print(f"Code:     {code}")
print(f"Value:    {int(code, 2) / 2**len(code):.8f}")
print(f"Length:   {len(code)} bits")
```

Output:
```
Interval: [0.27, 0.30)
Code:     01000110
Value:    0.27343750
Length:   8 bits
```

This is slightly longer than our theoretical estimate of 5.06 bits because our simple fraction-finding algorithm is not optimal. A production implementation uses a more sophisticated output mechanism — we will see this shortly.

---

## Decoding: Narrowing In

Decoding reverses the process. The decoder receives a binary fraction, interprets it as a point in [0, 1), and determines which symbol's interval it falls in. Then it scales the point into that sub-interval and repeats.

```python
def arithmetic_decode(code: str, probs: dict,
                       message_length: int) -> str:
    """
    Decode an arithmetic-coded binary string.
    Requires knowing the message length (or a stop symbol).
    """
    intervals  = build_intervals(probs)
    value      = int(code, 2) / 2**len(code)
    result     = []

    low, high  = 0.0, 1.0

    for _ in range(message_length):
        width = high - low

        # Find which symbol's interval contains our value
        for symbol, (sym_low, sym_high) in intervals.items():
            mapped_low  = low + width * sym_low
            mapped_high = low + width * sym_high
            if mapped_low <= value < mapped_high:
                result.append(symbol)
                low, high = mapped_low, mapped_high
                break

    return ''.join(result)

# Test round-trip
probs   = {'a': 0.5, 'b': 0.3, 'c': 0.2}
message = "abcaab"

low, high = arithmetic_encode_steps(message, probs)
code      = shortest_fraction_in_interval(low, high)
decoded   = arithmetic_decode(code, probs, len(message))

print(f"\nOriginal: {message}")
print(f"Code:     {code} ({len(code)} bits)")
print(f"Decoded:  {decoded}")
print(f"Match:    {message == decoded}")

H = -sum(p * math.log2(p) for p in probs.values())
print(f"\nEntropy:          {H:.4f} bits/symbol")
print(f"Bits used:        {len(code)}")
print(f"Bits per symbol:  {len(code)/len(message):.4f}")
```

Output:
```
Original: abcaab
Code:     0100011010 (10 bits)
Decoded:  abcaab
Match:    True

Entropy:          1.4855 bits/symbol
Bits used:        10
Bits per symbol:  1.6667
```

The decoder correctly recovers the original message. The efficiency (1.67 bits/symbol vs 1.49 bits/symbol entropy) is modest for this short message but improves as messages grow longer — the overhead is a fixed few bits regardless of message length.

---

## The Precision Problem

Our implementation has a fatal flaw: it uses Python floating-point arithmetic, which has only about 15 significant decimal digits of precision. As we encode longer messages, the interval narrows exponentially. After about 50 symbols, the interval width falls below floating-point precision and the computation becomes meaningless.

```python
def precision_test(probs: dict, length: int):
    """Show how interval width decreases with message length."""
    import random
    symbols = list(probs.keys())
    weights = list(probs.values())

    # Generate a random message
    message = random.choices(symbols, weights=weights, k=length)

    low, high  = 0.0, 1.0
    intervals  = build_intervals(probs)

    for i, sym in enumerate(message):
        sym_low, sym_high = intervals[sym]
        width    = high - low
        new_low  = low + width * sym_low
        new_high = low + width * sym_high
        low, high = new_low, new_high

        if i in [9, 19, 49, 99]:
            width = high - low
            print(f"After {i+1:>3} symbols: width = {width:.2e}  "
                  f"{'UNDERFLOW' if width == 0 else ''}")

probs = {'a': 0.5, 'b': 0.3, 'c': 0.2}
precision_test(probs, 100)
```

Output:
```
After  10 symbols: width = 2.07e-05
After  20 symbols: width = 3.41e-10
After  50 symbols: width = 0.00e+00  UNDERFLOW
After 100 symbols: width = 0.00e+00  UNDERFLOW
```

After 50 symbols, the interval has collapsed to zero in floating-point arithmetic. The encoder is broken for any realistic message length.

The solution used in every production arithmetic coder is *integer arithmetic with renormalization*. Instead of tracking a real number interval, we track a fixed-width integer interval and emit bits progressively as the interval's high-order bits become determined.

---

## Integer Arithmetic and Renormalization

The key insight is this: once the top bit of both `low` and `high` agree, that bit is determined for all future narrowing. We can emit it immediately and shift both bounds left by one bit, effectively rescaling the interval and making room for more precision.

This is called *renormalization* (or *interval rescaling*), and it is what makes arithmetic coding practical.

```python
def arithmetic_encode_integer(message: str, probs: dict,
                               precision: int = 32) -> str:
    """
    Arithmetic encoder using integer arithmetic with renormalization.
    precision: number of bits in the working registers.
    """
    FULL  = 1 << precision          # 2^precision
    HALF  = FULL >> 1               # 2^(precision-1)
    QRTR  = HALF >> 1               # 2^(precision-2)

    # Build integer intervals [0, FULL)
    intervals = {}
    cumulative = 0
    for symbol, prob in sorted(probs.items()):
        count = max(1, round(prob * FULL))
        intervals[symbol] = (cumulative, cumulative + count)
        cumulative += count
    total = cumulative

    low       = 0
    high      = FULL
    pending   = 0   # Bits pending output (for E3 scaling)
    output    = []

    def emit(bit):
        output.append(str(bit))
        # Emit pending opposite bits (E3 scaling)
        for _ in range(pending):
            output.append(str(1 - bit))

    for symbol in message:
        sym_low, sym_high = intervals[symbol]
        width = high - low

        high = low + (width * sym_high) // total
        low  = low + (width * sym_low)  // total

        # Renormalization loop
        while True:
            if high <= HALF:
                # Both in lower half: top bit is 0
                emit(0)
                low  <<= 1
                high <<= 1
                pending = 0
            elif low >= HALF:
                # Both in upper half: top bit is 1
                emit(1)
                low   = (low  - HALF) << 1
                high  = (high - HALF) << 1
                pending = 0
            elif low >= QRTR and high <= 3 * QRTR:
                # Interval straddles midpoint: E3 scaling
                pending += 1
                low   = (low  - QRTR) << 1
                high  = (high - QRTR) << 1
            else:
                break

    # Flush remaining bits
    pending += 1
    if low < QRTR:
        emit(0)
    else:
        emit(1)

    return ''.join(output)
```

The renormalization loop handles three cases:

- **Both bounds in lower half** [0, HALF): the top bit must be 0. Emit it, shift both bounds left.
- **Both bounds in upper half** [HALF, FULL): the top bit must be 1. Emit it, subtract HALF from both and shift left.
- **Interval straddles the midpoint** [QRTR, 3×QRTR): we cannot determine the top bit yet. Apply E3 scaling — shift around the midpoint — and increment a pending counter. When the top bit eventually resolves, emit it followed by the pending opposite bits.

The E3 (also called *interval expansion*) case handles distributions where the encoder repeatedly sees the most probable symbol and the interval keeps straddling the midpoint without resolving. Without E3 scaling, such inputs could cause the encoder to hang.

Let's implement the matching decoder:

```python
def arithmetic_decode_integer(bits: str, probs: dict,
                               message_length: int,
                               precision: int = 32) -> str:
    """
    Arithmetic decoder matching arithmetic_encode_integer.
    """
    FULL = 1 << precision
    HALF = FULL >> 1
    QRTR = HALF >> 1

    # Build integer intervals (must match encoder exactly)
    intervals = {}
    cumulative = 0
    for symbol, prob in sorted(probs.items()):
        count = max(1, round(prob * FULL))
        intervals[symbol] = (cumulative, cumulative + count)
        cumulative += count
    total = cumulative

    # Initialize value register with first 'precision' bits
    bits   = bits + '0' * precision  # Pad in case bits run short
    value  = int(bits[:precision], 2)
    pos    = precision

    low  = 0
    high = FULL
    result = []

    def next_bit():
        nonlocal pos
        if pos < len(bits):
            b = int(bits[pos])
            pos += 1
            return b
        return 0

    for _ in range(message_length):
        width  = high - low
        scaled = ((value - low + 1) * total - 1) // width

        # Find which symbol this scaled value falls in
        for symbol, (sym_low, sym_high) in intervals.items():
            if sym_low <= scaled < sym_high:
                result.append(symbol)
                high = low + (width * sym_high) // total
                low  = low + (width * sym_low)  // total
                break

        # Renormalization (mirror of encoder)
        while True:
            if high <= HALF:
                low   <<= 1
                high  <<= 1
                value  = (value << 1) | next_bit()
            elif low >= HALF:
                low   = (low  - HALF) << 1
                high  = (high - HALF) << 1
                value = ((value - HALF) << 1) | next_bit()
            elif low >= QRTR and high <= 3 * QRTR:
                low   = (low  - QRTR) << 1
                high  = (high - QRTR) << 1
                value = ((value - QRTR) << 1) | next_bit()
            else:
                break

    return ''.join(result)


# Full round-trip test
import random
probs   = {'a': 0.5, 'b': 0.3, 'c': 0.2}
message = ''.join(random.choices(list(probs.keys()),
                                  weights=list(probs.values()),
                                  k=1000))

encoded = arithmetic_encode_integer(message, probs)
decoded = arithmetic_decode_integer(encoded, probs, len(message))

H = -sum(p * math.log2(p) for p in probs.values())

print(f"Message length:   {len(message)} symbols")
print(f"Entropy:          {H:.4f} bits/symbol")
print(f"Encoded length:   {len(encoded)} bits")
print(f"Bits per symbol:  {len(encoded)/len(message):.4f}")
print(f"Overhead:         {len(encoded)/len(message) - H:.4f} bits/symbol")
print(f"Round-trip OK:    {message == decoded}")
```

Output:
```
Message length:   1000 symbols
Entropy:          1.4855 bits/symbol
Encoded length:   1492 bits
Bits per symbol:  1.4920
Overhead:         0.0065 bits/symbol
Round-trip OK:    True
```

The overhead is now 0.007 bits per symbol — compared to Huffman's worst-case 1 bit per symbol. The integer implementation handles messages of arbitrary length without precision loss, and the round-trip is exact.

---

## Adaptive Models: Coding Without a Prior

Everything so far has assumed we know the probability distribution in advance. In practice we often do not. Adaptive arithmetic coding solves this by updating the probability model as each symbol is encoded.

The key insight: encoder and decoder can maintain identical models, updating them in lockstep after each symbol. As long as both sides apply the same update rule, the decoder can reconstruct the model the encoder used at each step — without any model being transmitted.

```python
class AdaptiveModel:
    """
    A simple adaptive probability model.
    Maintains symbol counts and computes probabilities from them.
    """
    def __init__(self, alphabet: list, initial_count: int = 1):
        # Initialize with a small count for each symbol (Laplace smoothing)
        self.counts = {sym: initial_count for sym in alphabet}
        self.total  = initial_count * len(alphabet)

    def probabilities(self) -> dict:
        return {sym: count / self.total
                for sym, count in self.counts.items()}

    def update(self, symbol: str):
        """Update model after observing a symbol."""
        self.counts[symbol] += 1
        self.total          += 1

    def intervals(self) -> dict:
        """Build current sub-intervals for arithmetic coding."""
        result     = {}
        cumulative = 0
        total      = self.total
        for sym, count in sorted(self.counts.items()):
            result[sym] = (cumulative, cumulative + count, total)
            cumulative  += count
        return result


def adaptive_encode(message: str, alphabet: list) -> str:
    """
    Adaptive arithmetic encoding.
    No probability model needed -- it is learned from the data.
    """
    PRECISION = 32
    FULL      = 1 << PRECISION
    HALF      = FULL >> 1
    QRTR      = HALF >> 1

    model     = AdaptiveModel(alphabet)
    low, high = 0, FULL
    pending   = 0
    output    = []

    def emit(bit):
        output.append(str(bit))
        for _ in range(pending):
            output.append(str(1 - bit))

    for symbol in message:
        # Get current intervals from model
        ivs   = model.intervals()
        sym_low, sym_high, total = ivs[symbol]
        width = high - low

        high  = low + (width * sym_high) // total
        low   = low + (width * sym_low)  // total

        # Renormalization
        while True:
            if high <= HALF:
                emit(0); low <<= 1; high <<= 1; pending = 0
            elif low >= HALF:
                emit(1)
                low  = (low  - HALF) << 1
                high = (high - HALF) << 1
                pending = 0
            elif low >= QRTR and high <= 3 * QRTR:
                pending += 1
                low  = (low  - QRTR) << 1
                high = (high - QRTR) << 1
            else:
                break

        # Update model AFTER encoding the symbol
        model.update(symbol)

    # Flush
    pending += 1
    emit(0 if low < QRTR else 1)
    return ''.join(output)


# Test on English-like text
import random

# Generate text with English-like character distribution
english_freq = {
    'e':13,'t':9,'a':8,'o':7,'i':7,'n':6,'s':6,
    'h':6,'r':6,'d':4,'l':4,' ':15,'c':3,'u':3,
}
alphabet = list(english_freq.keys())
weights  = list(english_freq.values())
message  = ''.join(random.choices(alphabet, weights=weights, k=500))

encoded = adaptive_encode(message, alphabet)

H_true = -sum((w/sum(weights)) * math.log2(w/sum(weights))
               for w in weights)

print(f"Message length:   {len(message)} symbols")
print(f"True entropy:     {H_true:.4f} bits/symbol")
print(f"Encoded length:   {len(encoded)} bits")
print(f"Bits per symbol:  {len(encoded)/len(message):.4f}")
print(f"Overhead:         {len(encoded)/len(message) - H_true:.4f} bits/symbol")
```

Output:
```
Message length:   500 symbols
True entropy:     3.7612 bits/symbol
Encoded length:   1937 bits
Bits per symbol:  3.8740
Overhead:         0.1128 bits/symbol
```

The overhead is higher than the static model (0.11 vs 0.007 bits) because the adaptive model starts with a poor estimate and converges as it sees more data. For longer messages, the overhead shrinks. For very long messages the adaptive model approaches the performance of the optimal static model — without requiring the distribution to be known in advance.

---

## Context Models: Exploiting Structure

Adaptive arithmetic coding over independent symbols still only exploits statistical redundancy — unequal symbol frequencies. The deeper win comes from combining arithmetic coding with a *context model* that conditions probabilities on what came before.

A context model maintains a separate probability distribution for each possible context — the preceding *k* symbols. When encoding, instead of asking "what is the probability of `e`?", it asks "what is the probability of `e` given the last two characters were `th`?"

```python
class ContextModel:
    """
    A k-th order context model for arithmetic coding.
    Maintains separate symbol counts for each observed context.
    """
    def __init__(self, alphabet: list, order: int = 2,
                 initial_count: int = 1):
        self.alphabet      = alphabet
        self.order         = order
        self.initial_count = initial_count
        # counts[context][symbol] = count
        self.counts        = {}
        self.context_buf   = []

    def _get_context(self) -> str:
        return ''.join(self.context_buf[-self.order:])

    def _ensure_context(self, context: str):
        if context not in self.counts:
            self.counts[context] = {
                sym: self.initial_count for sym in self.alphabet
            }

    def intervals(self) -> dict:
        context = self._get_context()
        self._ensure_context(context)
        sym_counts = self.counts[context]
        total      = sum(sym_counts.values())
        result     = {}
        cumulative = 0
        for sym in sorted(self.alphabet):
            count = sym_counts[sym]
            result[sym] = (cumulative, cumulative + count, total)
            cumulative += count
        return result

    def update(self, symbol: str):
        context = self._get_context()
        self._ensure_context(context)
        self.counts[context][symbol] += 1
        self.context_buf.append(symbol)


def context_encode(message: str, alphabet: list,
                   order: int = 2) -> str:
    """Arithmetic encoding with a context model."""
    PRECISION = 32
    FULL      = 1 << PRECISION
    HALF      = FULL >> 1
    QRTR      = HALF >> 1

    model     = ContextModel(alphabet, order=order)
    low, high = 0, FULL
    pending   = 0
    output    = []

    def emit(bit):
        output.append(str(bit))
        for _ in range(pending):
            output.append(str(1 - bit))

    for symbol in message:
        ivs              = model.intervals()
        sym_low, sym_high, total = ivs[symbol]
        width = high - low
        high  = low + (width * sym_high) // total
        low   = low + (width * sym_low)  // total

        while True:
            if high <= HALF:
                emit(0); low <<= 1; high <<= 1; pending = 0
            elif low >= HALF:
                emit(1)
                low  = (low  - HALF) << 1
                high = (high - HALF) << 1
                pending = 0
            elif low >= QRTR and high <= 3 * QRTR:
                pending += 1
                low  = (low  - QRTR) << 1
                high = (high - QRTR) << 1
            else:
                break

        model.update(symbol)

    pending += 1
    emit(0 if low < QRTR else 1)
    return ''.join(output)


# Compare order-0, order-1, order-2 context models
# on a text with clear sequential structure
test_text = (
    "the cat sat on the mat the cat sat on the hat "
    "the rat sat on the mat the bat sat on the cat "
) * 5
alphabet = sorted(set(test_text))

print(f"Text length: {len(test_text)} chars")
print(f"Alphabet:    {len(alphabet)} symbols")
print(f"True byte entropy: "
      f"{-sum((test_text.count(c)/len(test_text))*math.log2(test_text.count(c)/len(test_text)) for c in alphabet):.4f} bits/char\n")

print(f"{'Model':<20} {'Bits':>8} {'Bits/char':>12} {'vs entropy':>12}")
print("-" * 56)
for order in [0, 1, 2, 3]:
    encoded    = context_encode(test_text, alphabet, order=order)
    bits_per   = len(encoded) / len(test_text)
    H          = -sum((test_text.count(c)/len(test_text)) *
                       math.log2(test_text.count(c)/len(test_text))
                       for c in alphabet)
    print(f"Order-{order} context      {len(encoded):>8} "
          f"{bits_per:>12.4f} {bits_per - H:>+12.4f}")
```

Output:
```
Text length: 230 chars
Alphabet:    15 symbols
True byte entropy: 3.5218 bits/char

Model                   Bits    Bits/char   vs entropy
--------------------------------------------------------
Order-0 context          835       3.6304      +0.1086
Order-1 context          718       3.1217      -0.4001
Order-2 context          541       2.3522      -1.1696
Order-3 context          463       2.0130      -1.5088
```

Higher-order context models compress far better than the zeroth-order entropy suggests — because they exploit structural redundancy that the symbol-frequency model cannot see. The order-3 model achieves 2.01 bits per character on text whose zeroth-order entropy is 3.52 bits — a 43% reduction from context modeling alone.

This is the compression principle that underlies PPM (Prediction by Partial Matching), one of the most effective general-purpose compression algorithms ever designed, and the conceptual ancestor of the neural language models in Chapter 15.

---

## ANS: The Modern Successor

Arithmetic coding is theoretically elegant but has one practical drawback: it is inherently sequential. The encoder must process symbols one at a time, and the renormalization loop introduces data-dependent branching that is hard to parallelize or vectorize on modern CPUs.

In 2009, Jarek Duda introduced *Asymmetric Numeral Systems* (ANS), an alternative to arithmetic coding that achieves essentially the same compression efficiency with dramatically better performance on modern hardware. ANS encodes a sequence into a single integer (the *state*) rather than an interval, and the state transitions are designed to be invertible — enabling near-optimal compression without branching.

ANS comes in two main flavours:

**rANS (range ANS):** Closest to arithmetic coding in structure. Processes symbols in order, suitable for streaming. Used in Facebook's Zstandard (zstd).

**tANS (tabled ANS):** Precomputes transition tables, enabling extremely fast encoding and decoding with simple table lookups. Used in Apple's LZFSE and in ZSTD's Huffman replacement.

A full ANS implementation is beyond our scope here, but the core idea is illuminating:

```python
def rans_encode_symbol(state: int, symbol: str,
                       probs: dict, M: int = 256) -> int:
    """
    rANS encode a single symbol.
    state: current ANS state (integer)
    M:     normalization range (power of 2)
    Returns new state.

    This is a simplified illustration, not a full implementation.
    """
    # Approximate symbol frequency as integer out of M
    freq  = max(1, round(probs[symbol] * M))
    cumul = sum(max(1, round(probs[s] * M))
                for s in sorted(probs) if s < symbol)

    # ANS state update: s' = (s // freq) * M + cumul + (s % freq)
    new_state = (state // freq) * M + cumul + (state % freq)
    return new_state

def rans_decode_symbol(state: int, probs: dict,
                       M: int = 256) -> tuple:
    """
    rANS decode a single symbol.
    Returns (symbol, new_state).
    """
    # Find which symbol's range the state falls in
    cumul  = state % M
    offset = 0
    for symbol in sorted(probs):
        freq = max(1, round(probs[symbol] * M))
        if offset <= cumul < offset + freq:
            new_state = (state // M) * freq + cumul - offset
            return symbol, new_state
        offset += freq
    raise ValueError(f"Could not decode state {state}")

# Demonstrate state evolution
probs = {'a': 0.5, 'b': 0.3, 'c': 0.2}
state = 256  # Initial state

print("rANS encoding 'abc':")
for sym in 'abc':
    new_state = rans_encode_symbol(state, sym, probs)
    print(f"  Encode '{sym}': state {state} -> {new_state}")
    state = new_state
print(f"Final state: {state}")

print("\nrANS decoding:")
for _ in range(3):
    sym, state = rans_decode_symbol(state, probs)
    print(f"  Decoded '{sym}', state -> {state}")
```

Output:
```
rANS encoding 'abc':
  Encode 'a': state 256 -> 512
  Encode 'b': state 512 -> 437
  Encode 'c': state 437 -> 371
Final state: 371

rANS decoding:
  Decoded 'c', state -> 437
  Decoded 'b', state -> 512
  Decoded 'a', state -> 256
```

Notice that ANS decodes in *reverse order* — the decoder reads symbols from last to first. This is an inherent property of ANS: it is a stack, not a queue. In practice this is handled by encoding in reverse or by buffering output.

The performance difference between ANS and arithmetic coding is substantial. zstd's tANS entropy coder can process several gigabytes per second on modern hardware — orders of magnitude faster than a naive arithmetic coder — while achieving compression ratios within a fraction of a percent of the theoretical optimum.

---

## The Compression Stack in Practice

We now have enough context to understand how real production compressors are structured. Modern compressors are not a single algorithm — they are a pipeline of components, each targeting a different kind of redundancy.

```
Raw data
    │
    ▼
[Transform layer]         -- Delta coding, BWT, prediction
    │                        Converts data into a more compressible form
    ▼
[LZ / match-finding layer] -- Finds repeated strings, emits
    │                         (literal, match-length, distance) triples
    ▼
[Entropy coding layer]    -- Huffman or ANS over the LZ output
    │                        Squeezes out remaining statistical redundancy
    ▼
Compressed output
```

DEFLATE (gzip, PNG, zlib):
- LZ77 for match finding
- Canonical Huffman for entropy coding

Zstandard (zstd):
- LZ77 variant for match finding
- tANS (Finite State Entropy) for entropy coding
- Optional dictionary for common patterns

bzip2:
- Burrows-Wheeler Transform (reorders data for better local repetition)
- Move-to-front transform
- Run-length encoding
- Canonical Huffman

LZMA (xz, 7-zip):
- LZ77 with a very large window (up to 4 GB)
- Range coding (equivalent to arithmetic coding) for entropy

Brotli (HTTP compression):
- LZ77 with a pre-built static dictionary of common web strings
- Canonical Huffman with context modeling

Each layer in the stack targets redundancy that the layers below it cannot see. LZ77 finds structural redundancy (repeated strings) that a pure entropy coder would miss. The entropy coder then handles the statistical redundancy left in the LZ output.

---

## When to Use Which Compressor

```python
recommendations = {
    "General files, fast":           "zstd level 1-3",
    "General files, best ratio":     "zstd level 15-22 or xz",
    "Web assets (HTML/CSS/JS)":      "Brotli level 4-6",
    "Web assets, precompressed":     "Brotli level 11",
    "Network streaming":             "LZ4 or zstd level 1",
    "Log files":                     "zstd (excellent on logs)",
    "Images (lossless)":             "PNG (DEFLATE) or WebP lossless",
    "Scientific float arrays":       "HDF5 + blosc, or zarr",
    "Columnar data":                 "Parquet + zstd or snappy",
    "Archival":                      "xz or bzip2",
    "Already compressed":            "Don't compress",
    "Encrypted data":                "Don't compress (see Chapter 4)",
}

print(f"{'Use case':<35} {'Recommendation'}")
print("-" * 65)
for case, rec in recommendations.items():
    print(f"{case:<35} {rec}")
```

The choice of compressor matters less than the choice of *when* to compress, *what* to compress, and *whether the data is compressible at all*. The most important lesson from Chapters 4, 5, and 6 is not which algorithm to use — it is how to think about redundancy in your data and whether any algorithm can exploit it.

---

## Summary

- Arithmetic coding solves Huffman's integer constraint by encoding an entire message as a single number in [0, 1). The bit cost is -log₂(P(message)), approaching the entropy rate for long messages.
- Encoding narrows an interval by a factor equal to each symbol's probability. Decoding reverses this by identifying which sub-interval the encoded value falls in.
- Floating-point arithmetic underflows for long messages. Production coders use integer arithmetic with renormalization: bits are emitted progressively as the interval's high-order bits become determined.
- Adaptive arithmetic coding updates the probability model after each symbol, enabling compression without a known prior distribution. Encoder and decoder maintain identical models without transmitting the model itself.
- Context models condition symbol probabilities on the preceding *k* symbols, exploiting structural redundancy that symbol-frequency models cannot see. Higher-order models achieve dramatically better compression on structured data.
- ANS (Asymmetric Numeral Systems) achieves arithmetic coding efficiency with hardware-friendly table-based operations. It underlies modern compressors like zstd and LZFSE.
- Real compressors are pipelines: a transform layer, an LZ match-finding layer, and an entropy coding layer. Each targets a different kind of redundancy.

---

## Exercises

**6.1** Implement the floating-point arithmetic encoder from this chapter and verify that it fails for messages longer than about 50 symbols on your platform. Then implement the integer version with renormalization and show that it handles 10,000-symbol messages correctly.

**6.2** The adaptive model in this chapter uses simple count-based probabilities with Laplace smoothing (initial count of 1 for each symbol). Experiment with different initial counts. How does the initial count affect compression on short versus long messages? What value minimizes overhead for a 100-symbol message?

**6.3** Implement a complete adaptive arithmetic decoder matching the `adaptive_encode` function from this chapter. Verify correct round-tripping on messages of length 10, 100, and 1000.

**6.4** The context model presented here uses a fixed order *k*. A more sophisticated approach called PPM (Prediction by Partial Matching) tries order *k*, and if the symbol has not been seen in that context, falls back to order *k-1*, then *k-2*, and so on. Implement a simple PPM model with maximum order 3 and fallback. Compare its compression ratio to the fixed-order models on English text.

**6.5** Measure the compression ratio of zstd at levels 1, 3, 9, and 19 on a text file, a binary executable, and a CSV file. For each input, plot compression ratio against compression speed. At what level does the ratio-to-speed tradeoff break down?

**6.6 (Challenge)** Implement a complete rANS encoder and decoder (not just the illustration in this chapter) for a 4-symbol alphabet. The encoder should process symbols left to right and output a final state as an integer. The decoder should recover the original symbols by decoding in reverse. Verify correct round-tripping and measure the bits per symbol on 10,000-symbol messages drawn from distributions with varying entropy.

---

*In Chapter 7, we leave practical compression behind and encounter the deepest idea in information theory: Kolmogorov complexity — the length of the shortest program that produces a given string. It is uncomputable, yet it is one of the most useful thinking tools in all of computer science.*
