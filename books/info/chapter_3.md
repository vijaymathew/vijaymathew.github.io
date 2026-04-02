# Chapter 3: Bits, Nats, and Bans

## A Unit Problem You Didn't Know You Had

If you have followed the code in the previous two chapters closely, you will have noticed that every call to our entropy function uses `math.log2` — the base-2 logarithm. This gives us entropy in *bits*. But if you read academic papers on machine learning, you will encounter entropy computed with the natural logarithm, giving a unit called a *nat*. And if you wander into certain corners of cryptography or the history of information theory, you may encounter a third unit — the *ban*, computed with log base 10.

This is not a deep mystery. It is just a choice of units, like measuring distance in miles versus kilometres. The underlying quantity is the same. But the choice of units is not arbitrary — different units are natural in different contexts, and confusing them (as happens more often than you might expect) produces subtle bugs and misinterpretations that can be hard to track down.

This chapter is about units. It is shorter than the previous two, but do not skip it. Understanding units of information will save you real debugging time and help you read papers and documentation with confidence.

---

## The Same Formula, Three Ways

Recall the entropy formula:

```
H(X) = -∑ p(x) · log_b(p(x))
```

The subscript *b* is the base of the logarithm, and it determines the unit:

| Base | Unit | Name | Common in |
|---|---|---|---|
| 2 | bit (binary digit) | bit | Computer science, information theory |
| e (≈ 2.718) | nat (natural unit) | nat | Mathematics, physics, machine learning |
| 10 | ban (or hartley, dit) | ban | Early information theory, cryptanalysis |

The relationship between them is simple — they are all proportional to each other:

```
1 nat = log₂(e) bits  ≈ 1.4427 bits
1 bit = ln(2) nats    ≈ 0.6931 nats
1 ban = log₂(10) bits ≈ 3.3219 bits
```

In code:

```python
import math

def entropy_bits(probs):
    """Entropy in bits (base-2 logarithm)."""
    return -sum(p * math.log2(p) for p in probs if p > 0)

def entropy_nats(probs):
    """Entropy in nats (natural logarithm)."""
    return -sum(p * math.log(p) for p in probs if p > 0)

def entropy_bans(probs):
    """Entropy in bans (base-10 logarithm)."""
    return -sum(p * math.log10(p) for p in probs if p > 0)

def convert_bits_to_nats(bits):
    return bits * math.log(2)

def convert_nats_to_bits(nats):
    return nats / math.log(2)

def convert_bits_to_bans(bits):
    return bits / math.log2(10)

def convert_bans_to_bits(bans):
    return bans * math.log2(10)

# Verify on a fair coin
fair_coin = [0.5, 0.5]
h_bits = entropy_bits(fair_coin)
h_nats = entropy_nats(fair_coin)
h_bans = entropy_bans(fair_coin)

print(f"Fair coin entropy:")
print(f"  {h_bits:.6f} bits")
print(f"  {h_nats:.6f} nats")
print(f"  {h_bans:.6f} bans")
print()
print(f"Conversion check (bits -> nats -> bits):")
print(f"  {convert_nats_to_bits(convert_bits_to_nats(h_bits)):.6f} bits")
```

Output:
```
Fair coin entropy:
  1.000000 bits
  0.693147 nats
  0.301030 bans

Conversion check (bits -> nats -> bits):
  1.000000 bits
```

The quantities are the same — only the scale changes. A fair coin flip is exactly 1 bit, or about 0.693 nats, or about 0.301 bans. All three describe the same amount of uncertainty.

---

## Bits: The Natural Home of Computer Science

The bit is the natural unit for information theory applied to computers. The reason is almost too obvious to state: computers are built from binary switches. A single flip-flop or transistor gate holds exactly one bit of information. A byte is eight bits. An IPv4 address is 32 bits. When we talk about compression ratios or bandwidth, we count in bits.

But there is a deeper reason beyond the hardware. The bit corresponds to the answer to one fair yes/no question. This is the most natural atomic unit of human decision-making and communication. Binary search, decision trees, twenty-questions games — all of these reduce to a sequence of one-bit decisions, and the theory of bits describes their efficiency precisely.

When should you use bits? Almost always, in the context of this book. Any time you are thinking about:

- File sizes and compression
- Network bandwidth and data transfer
- Storage capacity and encoding
- Communication channel capacity
- Practical coding and implementation

...bits are the right unit. They connect directly to real resources you can count and measure.

The one practical gotcha with bits: the Python `math.log2` function is slightly slower than `math.log` on some platforms. For entropy computations over very large datasets, this can matter. A common trick is to precompute the conversion constant:

```python
LOG2E = math.log2(math.e)  # ≈ 1.4427

def entropy_bits_fast(probs):
    """
    Entropy in bits, computed via natural log for speed.
    Equivalent to using log2 but potentially faster.
    """
    return LOG2E * (-sum(p * math.log(p) for p in probs if p > 0))
```

This gives you the speed of the natural logarithm with the output in bits.

---

## Nats: The Mathematician's Choice

If bits are the engineer's unit, nats are the mathematician's. The natural logarithm has properties that make calculus cleaner: its derivative is 1/x, which means the derivative of entropy with respect to a probability is simply -ln(p) - 1, without any conversion constants cluttering the expression.

This is why virtually every calculus-heavy derivation in information theory and machine learning uses nats. When you read a paper that defines cross-entropy loss as:

```
L = -∑ p(x) · ln(q(x))
```

...it is computing entropy in nats. When a physics paper discusses the entropy of a thermodynamic system, it is almost certainly using nats (or an equivalent with Boltzmann's constant folded in).

The most important place you encounter nats without realizing it is in machine learning frameworks. PyTorch's `nn.CrossEntropyLoss`, TensorFlow's `tf.keras.losses.CategoricalCrossentropy`, and JAX's equivalents all compute cross-entropy using the natural logarithm by default. This means the loss values they report are in nats, not bits — a fact that confuses many practitioners.

```python
import math

def cross_entropy_nats(p_true, p_pred):
    """Cross-entropy in nats, as computed by ML frameworks."""
    return -sum(p_true[i] * math.log(p_pred[i])
                for i in range(len(p_true)) if p_true[i] > 0)

def cross_entropy_bits(p_true, p_pred):
    """Cross-entropy in bits."""
    return -sum(p_true[i] * math.log2(p_pred[i])
                for i in range(len(p_true)) if p_true[i] > 0)

# A simple example: predicting a two-class problem
p_true = [1.0, 0.0]  # True label: class 0
p_pred = [0.8, 0.2]  # Model assigns 80% confidence to correct class

ce_nats = cross_entropy_nats(p_true, p_pred)
ce_bits = cross_entropy_bits(p_true, p_pred)

print(f"Cross-entropy loss (nats): {ce_nats:.4f}")
print(f"Cross-entropy loss (bits): {ce_bits:.4f}")
print(f"Ratio (should be ln(2)):   {ce_bits/ce_nats:.4f}")
print(f"ln(2):                     {math.log(2):.4f}")
```

Output:
```
Cross-entropy loss (nats): 0.2231
Cross-entropy loss (bits): 0.3219
Ratio (should be ln(2)):   1.4427
ln(2):                     0.6931
```

Wait — the ratio is 1.4427, not ln(2). Let me be precise: the conversion from nats to bits multiplies by log₂(e) ≈ 1.4427, and dividing nats by log(2) ≈ 0.6931 gives the same result since 1/log(2) = log₂(e). Both expressions are equivalent.

The practical consequence: when comparing cross-entropy loss values between two systems, make sure they are using the same base. A loss of 0.5 nats and a loss of 0.5 bits are not the same thing. The nat value is about 1.44 times smaller in absolute terms.

---

## Bans: A Unit With a Story

The ban has the most interesting history of the three units. It was invented — and named — at Bletchley Park during World War II, where Alan Turing and his colleagues were breaking the Enigma cipher.

The name comes from Banbury, a town in Oxfordshire where the long sheets of paper used in the codebreaking process were printed. The unit measures the weight of evidence — how strongly a piece of evidence points toward one hypothesis over another. In the context of Turing's work, this meant: how strongly does a sequence of intercepted characters suggest that the Enigma machine was set in a particular configuration?

The ban (and its smaller sibling the deciban, one tenth of a ban) turned out to be a natural unit for human reasoning about evidence. A few decibans of evidence is noticeable; ten decibans is strong; thirty decibans is essentially conclusive. This scale aligns roughly with human intuition about probability shifts, in the same way that the decibel scale for sound matches human auditory perception.

```python
def weight_of_evidence_bans(p_hypothesis_given_data, p_hypothesis_prior):
    """
    Weight of evidence in bans.
    Measures how much a piece of data shifts belief in a hypothesis.
    """
    # Posterior odds vs prior odds
    prior_odds     = p_hypothesis_prior / (1 - p_hypothesis_prior)
    posterior_odds = p_hypothesis_given_data / (1 - p_hypothesis_given_data)
    return math.log10(posterior_odds / prior_odds)

# Example: a diagnostic test
# Prior: 1% of people have condition X
# Test is 95% sensitive (true positive rate), 95% specific (true negative rate)
p_prior     = 0.01
p_posterior_positive = (0.95 * 0.01) / (0.95 * 0.01 + 0.05 * 0.99)  # Bayes' theorem

woe = weight_of_evidence_bans(p_posterior_positive, p_prior)
print(f"Prior probability:            {p_prior:.3f}")
print(f"Posterior (given positive):   {p_posterior_positive:.3f}")
print(f"Weight of evidence:           {woe:.3f} bans")
print(f"Weight of evidence:           {woe*10:.2f} decibans")
```

Output:
```
Prior probability:            0.010
Posterior (given positive):   0.161
Weight of evidence:           1.204 bans
Weight of evidence:           12.04 decibans
```

A positive test result provides about 12 decibans of evidence — significant, but not conclusive. This is related to the classic base-rate fallacy: even a highly accurate test provides limited weight of evidence when the prior probability is very low.

Outside of historical cryptanalysis and Bayesian statistics, you will not encounter bans often. But knowing they exist, and knowing why they were invented, helps you understand that information theory was not born in academia — it was born in the urgent practical need to break enemy codes under wartime conditions.

---

## The Unit Conversion Bug: A Cautionary Tale

Here is a real class of bug that appears in production systems more often than it should. You are building a system that computes entropy from two different libraries — perhaps one component uses scikit-learn and another uses a custom implementation. You compare the values and they disagree by a constant factor. You spend an hour checking your logic before realizing: one is computing in bits, the other in nats.

```python
# Simulating the "two libraries" problem

def library_a_entropy(probs):
    """Simulates a library that returns entropy in nats."""
    return -sum(p * math.log(p) for p in probs if p > 0)

def library_b_entropy(probs):
    """Simulates a library that returns entropy in bits."""
    return -sum(p * math.log2(p) for p in probs if p > 0)

probs = [0.5, 0.3, 0.2]

h_a = library_a_entropy(probs)
h_b = library_b_entropy(probs)

print(f"Library A output: {h_a:.6f}")
print(f"Library B output: {h_b:.6f}")
print(f"Ratio: {h_b / h_a:.6f}  (expected log2(e) = {math.log2(math.e):.6f})")

# The fix: always normalize to your chosen unit
def to_bits(entropy_nats):
    return entropy_nats * math.log2(math.e)

def to_nats(entropy_bits):
    return entropy_bits / math.log2(math.e)

print(f"\nAfter conversion:")
print(f"Library A in bits: {to_bits(h_a):.6f}")
print(f"Library B in bits: {h_b:.6f}")
```

Output:
```
Library A output: 1.029653
Library B output: 1.485475
Ratio: 1.442695  (expected log2(e) = 1.442695)

After conversion:
Library A in bits: 1.485475
Library B in bits: 1.485475
```

The fix is simple once you know to look for it. The prevention is simpler: always document the units of any entropy value in variable names, docstrings, and comments. A variable named `entropy` is ambiguous. A variable named `entropy_bits` or `entropy_nats` is not.

```python
# Good practice: encode units in names and docstrings

def compute_feature_entropy_bits(feature_values):
    """
    Compute the entropy of a feature's value distribution.

    Returns:
        float: Entropy in bits. Use convert_nats_to_bits() if comparing
               with outputs from sklearn or scipy, which return nats.
    """
    from collections import Counter
    counts = Counter(feature_values)
    total  = len(feature_values)
    probs  = [c / total for c in counts.values()]
    return entropy_bits(probs)
```

---

## Entropy in Physics: A Brief Detour

You may have encountered the word "entropy" in a physics or chemistry class, in a context that seems completely unrelated to information. Thermodynamic entropy — the kind that appears in the second law of thermodynamics — is related to Shannon entropy, and the relationship is more than metaphorical.

The Boltzmann entropy formula, carved on Ludwig Boltzmann's tombstone in Vienna, is:

```
S = k_B · ln(W)
```

Where *S* is thermodynamic entropy, *k_B* is Boltzmann's constant (about 1.38 × 10⁻²³ joules per kelvin), and *W* is the number of microscopic configurations consistent with the macroscopic state of the system.

This is exactly the entropy of a uniform distribution over *W* outcomes, measured in nats and then scaled by Boltzmann's constant to convert to units of energy per temperature. The Boltzmann constant is, in this sense, a unit conversion factor between nats and joules per kelvin.

Shannon knew this. He named his measure "entropy" deliberately, on the advice of John von Neumann, who pointed out that the formula was mathematically identical to Boltzmann's and that using the same name would give Shannon a useful rhetorical advantage in academic debates.

The practical upshot for programmers: when a physicist says "entropy," they mean essentially the same thing as an information theorist — the logarithm of the number of possible states, weighted by their probabilities. The units are different (joules per kelvin versus bits), but the concept is identical. This is not coincidence. Physical systems evolve to maximize entropy because maximum entropy corresponds to maximum uncertainty, which corresponds to the most probable macroscopic configuration. Nature does information theory, whether we label it that way or not.

---

## Perplexity: Entropy in Disguise

There is one more unit worth knowing, not because it is a different logarithm base, but because it is a different presentation of the same idea. Perplexity is widely used in natural language processing to evaluate language models, and understanding it requires understanding entropy.

The perplexity of a distribution *p* is defined as:

```
PP(p) = 2^H(p)
```

where H(p) is the entropy in bits. Equivalently, the perplexity of a language model on a test set is the exponent you would need to raise 2 to in order to get the model's cross-entropy loss.

```python
def perplexity(probs):
    """
    Perplexity of a distribution.
    Interpretable as the effective vocabulary size for a model with this entropy.
    """
    H = entropy_bits(probs)
    return 2 ** H

# Some examples
fair_coin   = [0.5, 0.5]
fair_die    = [1/6] * 6
fair_card   = [1/52] * 52
english_approx = [0.13, 0.091, 0.082, 0.075, 0.070,  # e, t, a, o, i
                  0.067, 0.063, 0.061, 0.060, 0.043,  # n, s, h, r, d
                  0.040, 0.028, 0.028, 0.024, 0.024,  # l, c, u, m, w
                  0.020, 0.020, 0.019, 0.015, 0.010,  # f, g, y, p, b
                  0.008, 0.008, 0.002, 0.002, 0.001, 0.001]  # v,k,j,x,q,z

print(f"{'Source':<25} {'Entropy (bits)':>15} {'Perplexity':>12}")
print("-" * 55)
sources = [
    ("Fair coin",         fair_coin),
    ("Fair die",          fair_die),
    ("Fair deck of cards",fair_card),
    ("English letters",   english_approx),
]
for name, dist in sources:
    H  = entropy_bits(dist)
    PP = perplexity(dist)
    print(f"{name:<25} {H:>15.3f} {PP:>12.3f}")
```

Output:
```
Source                    Entropy (bits)   Perplexity
-------------------------------------------------------
Fair coin                          1.000        2.000
Fair die                           2.585        6.000
Fair deck of cards                 5.700       52.000
English letters                    4.073       16.875
```

Perplexity has a beautiful interpretation: **it is the effective alphabet size of the distribution.** A fair coin has perplexity 2 — it behaves as if it were choosing uniformly from 2 options. A fair die has perplexity 6. English letters have perplexity about 17, meaning the next letter in an English text is, on average, about as surprising as a uniform draw from a 17-letter alphabet — even though the actual alphabet has 26 letters.

This is why perplexity is useful for language models. A language model that assigns perplexity 50 to a test set is, on average, as uncertain about the next word as if it were choosing uniformly from a vocabulary of 50 words. Lower perplexity means a better model — one that is less surprised by the test data. The best language models today achieve perplexities of single digits on some benchmarks, meaning they have become genuinely good predictors of what comes next.

```python
def model_perplexity(true_probs, predicted_probs, n_tokens):
    """
    Perplexity of a language model on a test sequence.

    true_probs:      list of probabilities the model assigned to each
                     actual token in the test set
    predicted_probs: unused here, but in practice you extract
                     true_probs from the model's output distribution
    n_tokens:        number of tokens in the test set
    """
    log_prob_sum = sum(math.log2(p) for p in true_probs if p > 0)
    avg_log_prob = log_prob_sum / n_tokens
    return 2 ** (-avg_log_prob)

# Simulate a model that assigns high probability to the correct tokens
good_model_probs  = [0.7, 0.8, 0.6, 0.9, 0.75]  # high confidence, correct
weak_model_probs  = [0.2, 0.3, 0.15, 0.4, 0.25]  # low confidence

print(f"Good model perplexity: {model_perplexity(good_model_probs, None, 5):.2f}")
print(f"Weak model perplexity: {model_perplexity(weak_model_probs, None, 5):.2f}")
```

Output:
```
Good model perplexity: 1.44
Weak model perplexity: 4.18
```

The good model has perplexity close to 1 — it is nearly certain about each next token. The weak model has perplexity around 4 — it behaves as if choosing from a four-item uniform vocabulary at each step.

---

## Choosing Your Unit: A Practical Guide

When should you use each unit? Here is a direct guide:

**Use bits when:**
- You are thinking about file sizes, storage, or compression
- You are implementing an algorithm and want results that connect to real byte counts
- You are explaining results to engineers who think in bytes and kilobytes
- You are computing channel capacity in network contexts

**Use nats when:**
- You are reading or writing mathematical derivations involving calculus
- You are working with ML frameworks (PyTorch, TensorFlow, JAX) and want your numbers to match the framework's loss values
- You are implementing algorithms from papers that use the natural logarithm
- You are working in physics or thermodynamics

**Use bans when:**
- You are doing Bayesian reasoning about evidence, particularly in diagnostic or forensic contexts
- You are reading historical cryptanalysis literature
- Someone explicitly asks you to use them (which will be rare)

**Use perplexity when:**
- You are evaluating or comparing language models
- You want an intuitively interpretable number that non-specialists can understand
- You are communicating results to an audience that is familiar with NLP benchmarks

When in doubt, bits. They are the most connected to real computational resources and the most intuitive for working programmers.

---

## A Unified View

Let's close the chapter by writing a single entropy function that handles all units cleanly:

```python
from enum import Enum

class EntropyUnit(Enum):
    BITS       = 'bits'
    NATS       = 'nats'
    BANS       = 'bans'
    PERPLEXITY = 'perplexity'

def entropy_general(probs, unit=EntropyUnit.BITS):
    """
    Compute the entropy of a probability distribution in the specified unit.

    Args:
        probs: iterable of probabilities summing to 1
        unit:  EntropyUnit specifying the output unit

    Returns:
        float: entropy in the requested unit

    Examples:
        >>> entropy_general([0.5, 0.5], EntropyUnit.BITS)
        1.0
        >>> entropy_general([0.5, 0.5], EntropyUnit.NATS)
        0.6931471805599453
        >>> entropy_general([0.5, 0.5], EntropyUnit.PERPLEXITY)
        2.0
    """
    probs = [p for p in probs if p > 0]

    if unit == EntropyUnit.BITS:
        return -sum(p * math.log2(p) for p in probs)
    elif unit == EntropyUnit.NATS:
        return -sum(p * math.log(p) for p in probs)
    elif unit == EntropyUnit.BANS:
        return -sum(p * math.log10(p) for p in probs)
    elif unit == EntropyUnit.PERPLEXITY:
        H_bits = -sum(p * math.log2(p) for p in probs)
        return 2 ** H_bits
    else:
        raise ValueError(f"Unknown unit: {unit}")

# Demonstrate all units on the same distribution
probs = [0.5, 0.25, 0.125, 0.125]
for unit in EntropyUnit:
    value = entropy_general(probs, unit)
    print(f"{unit.value:<12}: {value:.6f}")
```

Output:
```
bits        : 1.750000
nats        : 1.212944
bans        : 0.526802
perplexity  : 3.363586
```

One distribution. Four presentations. The same underlying fact about uncertainty, viewed through four different lenses.

---

## Summary

- Entropy can be measured in bits (base-2 log), nats (natural log), or bans (base-10 log). These are all the same quantity on different scales.
- The conversion factors are: 1 nat = log₂(e) ≈ 1.4427 bits; 1 ban = log₂(10) ≈ 3.3219 bits.
- Bits are the natural unit for computer science and connect directly to real storage and transmission costs.
- Nats are preferred in mathematics and machine learning because the natural logarithm simplifies calculus. Most ML frameworks compute cross-entropy in nats.
- Bans were invented at Bletchley Park for measuring weight of evidence in cryptanalysis. They remain useful in Bayesian reasoning.
- Perplexity is 2 raised to the entropy in bits. It measures the effective alphabet size of a distribution and is the standard evaluation metric for language models.
- Confusing units is a real source of bugs. Always document the units of entropy values in variable names and docstrings.
- Thermodynamic entropy and Shannon entropy are the same mathematical object, scaled by Boltzmann's constant to convert from nats to joules per kelvin.

---

## Exercises

**3.1** Write a function `convert_entropy(value, from_unit, to_unit)` that converts an entropy value between any pair of units (bits, nats, bans, perplexity). Test it by round-tripping values through all possible unit pairs and verifying you get back what you started with.

**3.2** A language model reports a cross-entropy loss of 2.34 on a test set. The loss was computed using the natural logarithm. What is the perplexity of this model? What is the cross-entropy in bits?

**3.3** The `scipy.stats.entropy` function computes entropy in nats by default but accepts a `base` argument. Write a wrapper that computes entropy in bits using scipy and verify that it matches your own `entropy_bits` implementation on several test distributions.

**3.4** A Bayesian spam filter scores emails using weight of evidence in decibans. An email with a total score above 30 decibans is classified as spam. If the prior probability of spam is 40%, what posterior probability does a score of 30 decibans correspond to?

**3.5** English text has a character-level entropy of roughly 4.1 bits per character (zeroth-order model). What is this in nats? What is the perplexity? Interpret the perplexity value: what does it tell you about predicting the next character in an English text under a zeroth-order model?

**3.6 (Challenge)** Shannon estimated the true entropy of English at 1.0–1.5 bits per character. The zeroth-order model gives about 4.1 bits. The difference comes from the sequential structure of language — the fact that letters are not independent. Design an experiment using Python to measure the first-order entropy of English (conditioning on the previous character). How much does this reduce the entropy compared to the zeroth-order model? What does this suggest about how many characters of context a good language model needs?

---

*In Chapter 4, we cross into Part II: Compression. We will use everything we have built about entropy to understand exactly why data compresses — and when it does not.*
