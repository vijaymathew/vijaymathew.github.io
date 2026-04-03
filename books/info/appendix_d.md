# Appendix D: Worked Solutions to Chapter Exercises

## How This Appendix Is Organized

The exercises in this book are deliberately mixed.

Some are short derivations or calculations with clean answers. Others are implementation projects, experiments, or research-style prompts where the right response is not a single number but a process and an interpretation.

This appendix does two things:

- gives full worked solutions for a representative set of foundational exercises
- gives solution patterns for a few open-ended exercises, so you know what a strong answer should look like

It is not a complete answer key to every exercise in the book. That would be longer than the main text and less useful. The aim here is to model good problem-solving, not to replace it.

---

## Solution 2.2: Conditional Entropy and the Chain Rule

Exercise:

> Write a function `conditional_entropy(joint_dist)` that takes a dictionary of joint probabilities mapping `(x, y)` pairs to probabilities and returns `H(Y|X)`. Verify the chain rule: `H(X, Y) = H(X) + H(Y|X)`.

### Step 1: Write the definition

For a discrete joint distribution `P(X,Y)`, conditional entropy is:

```text
H(Y|X) = -∑ p(x,y) log₂ p(y|x)
```

Since:

```text
p(y|x) = p(x,y) / p(x)
```

we can rewrite it as:

```text
H(Y|X) = -∑ p(x,y) log₂ [p(x,y) / p(x)]
```

### Step 2: Implement it

```python
import math

def entropy(dist):
    return -sum(p * math.log2(p) for p in dist.values() if p > 0)

def marginal_x(joint_dist):
    px = {}
    for (x, y), p in joint_dist.items():
        px[x] = px.get(x, 0.0) + p
    return px

def conditional_entropy(joint_dist):
    px = marginal_x(joint_dist)
    total = 0.0
    for (x, y), p_xy in joint_dist.items():
        if p_xy <= 0:
            continue
        total -= p_xy * math.log2(p_xy / px[x])
    return total

def joint_entropy(joint_dist):
    return entropy(joint_dist)

joint = {
    ('a', 0): 0.30,
    ('a', 1): 0.10,
    ('b', 0): 0.20,
    ('b', 1): 0.40,
}

px   = marginal_x(joint)
hxy  = joint_entropy(joint)
hx   = entropy(px)
hy_x = conditional_entropy(joint)

print(f"H(X,Y)  = {hxy:.6f}")
print(f"H(X)    = {hx:.6f}")
print(f"H(Y|X)  = {hy_x:.6f}")
print(f"H(X)+H(Y|X) = {hx + hy_x:.6f}")
```

### Step 3: Interpret the result

The chain rule says:

```text
H(X, Y) = H(X) + H(Y|X)
```

This is a bookkeeping identity with a strong intuitive meaning:

- first tell me `X`
- then tell me whatever about `Y` remains uncertain after `X` is known

That total is exactly the uncertainty in the pair `(X, Y)`.

That is why conditional entropy is the right notion of "what is left to say."

---

## Solution 2.4: Entropy of the Sum of Two Fair Dice

Exercise:

> The entropy of a fair die is `log₂(6) ≈ 2.585` bits. Suppose you roll two fair dice and report only their sum (2 through 12). What is the entropy of the sum? Is it more or less than the entropy of a single die? Explain why.

### Step 1: Write the distribution of the sum

The sums and counts are:

```text
2: 1
3: 2
4: 3
5: 4
6: 5
7: 6
8: 5
9: 4
10: 3
11: 2
12: 1
```

Each count is out of 36 equally likely ordered outcomes.

### Step 2: Compute the entropy

```python
import math
from collections import Counter

counts = Counter(a + b for a in range(1, 7) for b in range(1, 7))
H_sum = -sum((c / 36) * math.log2(c / 36) for c in counts.values())
H_die = math.log2(6)

print(f"H(single die) = {H_die:.6f} bits")
print(f"H(sum)        = {H_sum:.6f} bits")
```

Result:

```text
H(single die) = 2.584963 bits
H(sum)        = 3.274402 bits
```

### Step 3: Answer the conceptual question

The sum has **more** entropy than a single die, because it has more possible outcomes and is less predictable than one die.

But it has **less** entropy than the full pair of dice:

```text
H(die₁, die₂) = log₂(36) ≈ 5.170 bits
```

Why? Because the sum throws away information.

Many different pairs map to the same sum:

- `(1, 6)` and `(2, 5)` and `(3, 4)` all produce 7
- knowing only the sum does not tell you the exact pair

So the sum is:

- richer than one die
- poorer than both dice together

That is exactly what entropy should reflect.

---

## Solution 3.2: Cross-Entropy in Nats, Bits, and Perplexity

Exercise:

> A language model reports a cross-entropy loss of 2.34 on a test set. The loss was computed using the natural logarithm. What is the perplexity of this model? What is the cross-entropy in bits?

### Step 1: Convert nats to bits

If the loss is measured in nats:

```text
loss_bits = loss_nats / ln(2)
```

So:

```text
loss_bits = 2.34 / ln(2) ≈ 3.3759 bits
```

### Step 2: Convert nats to perplexity

Perplexity is:

```text
perplexity = e^(loss_nats)
```

So:

```text
perplexity = e^2.34 ≈ 10.3812
```

### Final answer

- cross-entropy: about `3.376` bits per token
- perplexity: about `10.38`

Interpretation:

Under this evaluation, the model behaves as if it is choosing among roughly 10.4 equally plausible next-token options on average.

---

## Solution 8.5: Cascade of Two BSC Channels

Exercise:

> Compute the capacity of a cascade of two BSC channels: `BSC(p₁)` followed by `BSC(p₂)`. The combined channel is a `BSC` with crossover probability `p₁(1-p₂) + p₂(1-p₁)`. Verify this formula and plot the combined capacity as a function of `p₁` for fixed `p₂ = 0.05`.

### Step 1: Derive the effective crossover probability

Let the first channel flip with probability `p₁` and the second with probability `p₂`.

The overall bit flips if exactly one of the two channels flips:

```text
p_eff = p₁(1-p₂) + (1-p₁)p₂
      = p₁ + p₂ - 2p₁p₂
```

If both channels flip, the bit returns to its original value, so that case does not count as an output error.

### Step 2: Use the BSC capacity formula

For a binary symmetric channel:

```text
C = 1 - H_b(p)
```

So for the cascade:

```text
C_cascade = 1 - H_b(p_eff)
```

### Step 3: A few sample values for `p₂ = 0.05`

```python
import math

def h_b(p):
    if p == 0 or p == 1:
        return 0.0
    return -(p * math.log2(p) + (1 - p) * math.log2(1 - p))

def cascade_bsc_capacity(p1, p2):
    p_eff = p1 * (1 - p2) + p2 * (1 - p1)
    return p_eff, 1 - h_b(p_eff)

for p1 in [0.00, 0.05, 0.10, 0.20, 0.50]:
    p_eff, c = cascade_bsc_capacity(p1, 0.05)
    print(f"p1={p1:0.2f}  p_eff={p_eff:0.3f}  C={c:0.4f}")
```

Typical output:

```text
p1=0.00  p_eff=0.050  C=0.7136
p1=0.05  p_eff=0.095  C=0.5471
p1=0.10  p_eff=0.140  C=0.4158
p1=0.20  p_eff=0.230  C=0.2220
p1=0.50  p_eff=0.500  C=0.0000
```

### Interpretation

As `p₁` increases from 0 to 0.5, the effective crossover rate moves toward 0.5 and the capacity drops toward zero.

This is exactly what we should expect: stacking noisy channels compounds uncertainty.

---

## Solution 11.3: When Jensen-Shannon Divergence Reaches 1 Bit

Exercise:

> The JSD is bounded between 0 and 1 bit. Construct two distributions `P` and `Q` that achieve `JSD = 1` bit exactly. What is the relationship between `P` and `Q` at this maximum? Prove that `JSD ≤ 1` bit for base-2 logarithm.

### Step 1: Recall the definition

For equal weighting:

```text
JSD(P, Q) = H(M) - 1/2 H(P) - 1/2 H(Q)
```

where:

```text
M = 1/2 (P + Q)
```

### Step 2: Choose disjoint distributions

Take:

```text
P = (1, 0)
Q = (0, 1)
```

Then:

```text
H(P) = 0
H(Q) = 0
M = (1/2, 1/2)
H(M) = 1 bit
```

So:

```text
JSD(P, Q) = 1 - 0 - 0 = 1 bit
```

### Step 3: Why this is the maximum

For equal-weight JSD:

```text
JSD(P, Q) = I(Z; X)
```

where:

- `Z` is a fair coin deciding whether a sample came from `P` or `Q`
- `X` is the observed sample

Since `Z` is fair:

```text
H(Z) = 1 bit
```

And mutual information can never exceed the entropy of either variable:

```text
I(Z; X) ≤ H(Z) = 1
```

Therefore:

```text
JSD(P, Q) ≤ 1 bit
```

Equality holds when observing `X` tells you `Z` exactly. That happens when `P` and `Q` have disjoint support: no outcome can come from both.

### Final answer

The maximum JSD is achieved when `P` and `Q` are perfectly distinguishable.

That is the precise meaning of `JSD = 1` bit.

---

## Solution 14.1: Exact Verification of Perfect Secrecy for a 4-Bit One-Time Pad

Exercise:

> Implement a complete verification of Shannon's perfect secrecy theorem for the one-time pad over 4-bit messages. For each of the 16 possible plaintext values and each of the 16 possible ciphertext values, verify that exactly one key maps the plaintext to the ciphertext. Then compute `I(M;C)` exactly (not by sampling) and confirm it is zero.

### Step 1: Define the cipher

For 4-bit messages, the one-time pad is XOR:

```text
C = M XOR K
```

with:

- message space `{0, ..., 15}`
- key space `{0, ..., 15}`
- ciphertext space `{0, ..., 15}`
- keys uniform over the 16 possibilities

### Step 2: Verify the unique-key property

For any fixed message `m` and ciphertext `c`, the unique key is:

```text
k = m XOR c
```

That is already enough to prove the condition, but it is easy to verify directly:

```python
def otp_encrypt(m, k):
    return m ^ k

messages = range(16)
keys = range(16)
ciphertexts = range(16)

all_unique = True

for m in messages:
    for c in ciphertexts:
        matching_keys = [k for k in keys if otp_encrypt(m, k) == c]
        if len(matching_keys) != 1:
            all_unique = False

print(all_unique)
```

This prints `True`.

### Step 3: Compute `P(C = c | M = m)`

Since there is exactly one key producing ciphertext `c` from message `m`, and each key is chosen with probability `1/16`:

```text
P(C = c | M = m) = 1/16
```

for every `m` and every `c`.

That means the ciphertext distribution is uniform regardless of the message.

### Step 4: Compute mutual information exactly

If `P(C|M)` is the same for every message, then `M` and `C` are independent:

```text
P(M, C) = P(M) P(C)
```

Therefore:

```text
I(M; C) = 0
```

exactly, for any prior `P(M)`.

### Interpretation

The key point is not just that the attacker cannot decode efficiently. It is that the ciphertext distribution contains no information whatsoever about the message. That is stronger than computational security. It is perfect secrecy in Shannon's sense.

---

## Solution 16.1: Information Gain of Common Selectivities

Exercise:

> For a table with `N = 10^7` rows, compute the information gain in bits for predicates with selectivities `1/2`, `1/10`, `1/1000`, and `1/10^7`. Interpret each number operationally: what kind of access path would you expect to become attractive as the information gain increases?

### Step 1: Use the formula

If a predicate matches fraction `s` of the table, its information gain is:

```text
-log₂(s)
```

So:

```text
s = 1/2      -> 1.0000 bits
s = 1/10     -> 3.3219 bits
s = 1/1000   -> 9.9658 bits
s = 1/10^7   -> 23.2535 bits
```

### Step 2: Interpret them operationally

`1/2`:

- only 1 bit of uncertainty removed
- still leaves half the table
- a sequential scan often remains attractive

`1/10`:

- about 3.3 bits removed
- may begin to justify an index depending on row width, clustering, and storage engine
- borderline territory

`1/1000`:

- almost 10 bits removed
- very selective
- index or bitmap-based plans become strongly attractive

`1/10^7`:

- over 23 bits removed
- effectively identifies a single row in a 10-million-row table
- this is primary-key territory

### Final idea

The important shift is conceptual: selectivity is not just a database implementation detail. It is measurable uncertainty reduction.

That is why the same `-log₂(s)` quantity keeps reappearing in both information theory and query planning.

---

## Solution Patterns for Larger Exercises

The following exercises do not have one-line "answers," but they do have a clear structure.

### Exercise 2.5: Sliding-window entropy over a file

A strong solution should:

1. read the file as bytes
2. compute byte-frequency entropy over overlapping windows
3. plot entropy versus offset
4. explain visible regions

Typical interpretation:

- compressed or encrypted regions look high-entropy
- repetitive headers, zero padding, or structured metadata look low-entropy
- executable sections often show intermediate structure

The point is not the exact plot shape. The point is learning to use entropy as a diagnostic lens on real artifacts.

### Exercise 16.6: Degrading a toy query planner

A strong solution should test at least three failure modes separately:

1. stale single-column distributions
2. missing heavy-hitter statistics
3. false independence assumptions on correlated predicates

For each one, the report should show:

- the estimated row count
- the true row count
- the chosen plan
- the true execution cost under that plan

The most important conclusion is usually not "the planner got slower." It is *why* it got slower: the internal probability model diverged from the true data distribution.

That is the systems-level lesson of the chapter.

---

## Closing Note

If you use this appendix well, it should gradually become unnecessary.

Worked solutions are most useful early, when you are learning the grammar of the subject. After a while, the right test is not whether your answer matches the appendix. It is whether you can derive the result yourself, check it in code, and explain what it means in plain English.

That is when the ideas have become yours.
