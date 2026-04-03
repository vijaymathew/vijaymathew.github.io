# Appendix B: Python Toolkit

## What This Appendix Is

This appendix collects a compact set of reusable Python utilities for the main quantities in the book: surprise, entropy, conditional entropy, KL divergence, mutual information, perplexity, Kraft sums, and Huffman coding.

The code is intentionally lightweight. It uses only the Python standard library so you can paste it into a notebook, script, or utility module without additional dependencies.

The toolkit is not optimized for production use. It is designed to be:

- easy to read
- mathematically faithful
- reusable across exercises and experiments

If you want to turn it into a local module, the simplest approach is to copy the code block below into a file such as `info_toolkit.py`.

---

## Core Toolkit

```python
import math
import heapq
from collections import Counter


def normalize(dist: dict) -> dict:
    """
    Normalize a dictionary of nonnegative weights into probabilities.
    """
    total = sum(dist.values())
    if total <= 0:
        raise ValueError("distribution must have positive total mass")
    return {k: v / total for k, v in dist.items()}


def surprise(p: float, base: float = 2.0) -> float:
    """
    Information content of an event with probability p.
    """
    if p <= 0 or p > 1:
        raise ValueError("p must be in (0, 1]")
    return -math.log(p, base)


def entropy_from_probs(probs, base: float = 2.0) -> float:
    """
    Shannon entropy from an iterable of probabilities.
    """
    return -sum(p * math.log(p, base) for p in probs if p > 0)


def entropy(data, base: float = 2.0) -> float:
    """
    Shannon entropy from either:
    - a dict mapping outcomes -> weights/probabilities
    - an iterable of samples
    """
    if isinstance(data, dict):
        probs = normalize(data).values()
    else:
        counts = Counter(data)
        probs = normalize(counts).values()
    return entropy_from_probs(probs, base=base)


def joint_entropy(pairs, base: float = 2.0) -> float:
    """
    Joint entropy H(X, Y) from an iterable of (x, y) samples.
    """
    return entropy(list(pairs), base=base)


def conditional_entropy_from_joint(joint_dist: dict,
                                   given_axis: int = 0,
                                   base: float = 2.0) -> float:
    """
    Conditional entropy from a joint distribution dict.
    joint_dist maps tuples (x, y) -> mass.

    given_axis = 0 returns H(Y|X)
    given_axis = 1 returns H(X|Y)
    """
    joint = normalize(joint_dist)

    marginal = Counter()
    for (x, y), p_xy in joint.items():
        key = x if given_axis == 0 else y
        marginal[key] += p_xy

    h = 0.0
    for (x, y), p_xy in joint.items():
        given = x if given_axis == 0 else y
        p_given = marginal[given]
        if p_xy > 0 and p_given > 0:
            h -= p_xy * math.log(p_xy / p_given, base)
    return h


def cross_entropy(p: dict, q: dict, base: float = 2.0,
                  eps: float = 1e-15) -> float:
    """
    Cross-entropy H(P, Q) for discrete distributions.
    """
    p = normalize(p)
    q = normalize(q)

    total = 0.0
    for x, p_x in p.items():
        q_x = max(q.get(x, 0.0), eps)
        total -= p_x * math.log(q_x, base)
    return total


def kl_divergence(p: dict, q: dict, base: float = 2.0,
                  eps: float = 1e-15) -> float:
    """
    KL(P || Q) for discrete distributions.
    """
    p = normalize(p)
    q = normalize(q)

    total = 0.0
    for x, p_x in p.items():
        if p_x <= 0:
            continue
        q_x = q.get(x, 0.0)
        if q_x <= 0:
            q_x = eps
        total += p_x * math.log(p_x / q_x, base)
    return total


def mutual_information_from_joint(joint_dist: dict,
                                  base: float = 2.0) -> float:
    """
    Mutual information I(X;Y) from a joint distribution.
    joint_dist maps (x, y) -> mass.
    """
    joint = normalize(joint_dist)
    p_x = Counter()
    p_y = Counter()

    for (x, y), p_xy in joint.items():
        p_x[x] += p_xy
        p_y[y] += p_xy

    mi = 0.0
    for (x, y), p_xy in joint.items():
        if p_xy <= 0:
            continue
        mi += p_xy * math.log(p_xy / (p_x[x] * p_y[y]), base)
    return mi


def mutual_information_from_samples(xs, ys, base: float = 2.0) -> float:
    """
    Mutual information from paired samples.
    """
    if len(xs) != len(ys):
        raise ValueError("xs and ys must have equal length")
    joint = Counter(zip(xs, ys))
    return mutual_information_from_joint(joint, base=base)


def binary_entropy(p: float, base: float = 2.0) -> float:
    """
    H_b(p) for a Bernoulli(p) random variable.
    """
    if p < 0 or p > 1:
        raise ValueError("p must be in [0, 1]")
    if p == 0 or p == 1:
        return 0.0
    return -(p * math.log(p, base) + (1 - p) * math.log(1 - p, base))


def perplexity_from_cross_entropy(loss: float, unit: str = "bits") -> float:
    """
    Convert cross-entropy loss to perplexity.
    unit = 'bits' or 'nats'
    """
    if unit == "bits":
        return 2 ** loss
    if unit == "nats":
        return math.exp(loss)
    raise ValueError("unit must be 'bits' or 'nats'")


def cross_entropy_from_perplexity(perplexity: float,
                                  unit: str = "bits") -> float:
    """
    Convert perplexity back to cross-entropy.
    """
    if perplexity <= 0:
        raise ValueError("perplexity must be positive")
    if unit == "bits":
        return math.log2(perplexity)
    if unit == "nats":
        return math.log(perplexity)
    raise ValueError("unit must be 'bits' or 'nats'")


def kraft_sum(code_lengths, alphabet_size: int = 2) -> float:
    """
    Compute the Kraft sum ∑ D^{-l_i}.
    """
    return sum(alphabet_size ** (-length) for length in code_lengths)


class _HuffmanNode:
    def __init__(self, weight, symbol=None, left=None, right=None):
        self.weight = weight
        self.symbol = symbol
        self.left = left
        self.right = right

    def __lt__(self, other):
        return self.weight < other.weight


def build_huffman_codes(freqs: dict) -> dict:
    """
    Build a binary Huffman code from a symbol -> weight mapping.
    Returns symbol -> bitstring.
    """
    freqs = {k: v for k, v in freqs.items() if v > 0}
    if not freqs:
        return {}
    if len(freqs) == 1:
        only = next(iter(freqs))
        return {only: "0"}

    heap = [_HuffmanNode(weight=v, symbol=k) for k, v in freqs.items()]
    heapq.heapify(heap)

    while len(heap) > 1:
        a = heapq.heappop(heap)
        b = heapq.heappop(heap)
        parent = _HuffmanNode(weight=a.weight + b.weight, left=a, right=b)
        heapq.heappush(heap, parent)

    root = heap[0]
    codes = {}

    def walk(node, prefix):
        if node.symbol is not None:
            codes[node.symbol] = prefix or "0"
            return
        walk(node.left, prefix + "0")
        walk(node.right, prefix + "1")

    walk(root, "")
    return codes


def expected_code_length(freqs: dict, codes: dict) -> float:
    """
    Expected code length under a given codebook.
    """
    probs = normalize(freqs)
    return sum(probs[sym] * len(code) for sym, code in codes.items())


def encode_symbols(symbols, codes: dict) -> str:
    """
    Encode a sequence of symbols to a bitstring.
    """
    return "".join(codes[s] for s in symbols)


def decode_huffman(bitstring: str, codes: dict):
    """
    Decode a Huffman-coded bitstring.
    """
    reverse = {code: sym for sym, code in codes.items()}
    out = []
    buf = ""
    for bit in bitstring:
        buf += bit
        if buf in reverse:
            out.append(reverse[buf])
            buf = ""
    if buf:
        raise ValueError("incomplete codeword at end of bitstring")
    return out


def average_surprise(samples, base: float = 2.0) -> float:
    """
    Empirical average surprise of observed samples.
    Equivalent to empirical entropy under the plug-in estimate.
    """
    counts = Counter(samples)
    probs = normalize(counts)
    return sum(-math.log(probs[x], base) for x in samples) / len(samples)
```

---

## Minimal Usage Examples

```python
from collections import Counter

# Entropy of a Bernoulli source
print(binary_entropy(0.5))      # 1.0 bit
print(binary_entropy(0.9))      # about 0.469 bits

# KL divergence between two categorical distributions
p = {'A': 0.7, 'B': 0.2, 'C': 0.1}
q = {'A': 0.5, 'B': 0.3, 'C': 0.2}
print(kl_divergence(p, q))      # extra bits per symbol

# Mutual information from paired samples
xs = [0, 0, 0, 1, 1, 1]
ys = [0, 0, 1, 1, 1, 0]
print(mutual_information_from_samples(xs, ys))

# Huffman coding
freqs = Counter("mississippi")
codes = build_huffman_codes(freqs)
encoded = encode_symbols("mississippi", codes)
decoded = "".join(decode_huffman(encoded, codes))
print(codes)
print(expected_code_length(freqs, codes))
print(decoded)
```

---

## Practical Notes

### 1. Be explicit about units

Entropy in bits and entropy in nats differ only by a constant factor, but mixing them silently causes confusion. If a library uses natural logarithms, label the result as nats.

### 2. Empirical estimates are estimates

Functions that compute entropy or mutual information from samples use empirical frequencies. They are consistent, but finite-sample bias is real, especially when the support is large relative to the sample size.

### 3. KL divergence is unforgiving about zero probability

If `Q(x) = 0` while `P(x) > 0`, the true KL divergence is infinite. In practical code we often smooth with a tiny `eps`, but that is a numerical approximation, not a mathematical identity.

### 4. Huffman codes are optimal only within their model class

Huffman coding is optimal among prefix-free symbol-by-symbol codes for a known distribution. It is not the last word in compression. Arithmetic coding, context models, and dictionary methods can beat it on real data because they exploit more structure.

---

## Suggested Extensions

If you want to extend this toolkit, useful next additions are:

- arithmetic coding intervals
- Blahut-Arimoto for channel capacity
- k-NN mutual information estimators for continuous variables
- CRC implementations
- prequential coding utilities
- PSI and drift monitors for production systems

At that point you are no longer just reading information theory. You are building with it.
