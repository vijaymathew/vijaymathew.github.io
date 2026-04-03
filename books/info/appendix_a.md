# Appendix A: Mathematical Notation Reference

## Why This Appendix Exists

Many programmers are comfortable with code but less comfortable with compact mathematical notation. That is normal. The purpose of this appendix is not to teach advanced mathematics. It is to make the notation in this book easy to parse at a glance.

When you see a formula in the chapters, use this appendix as a decoder ring.

---

## The Basic Objects

### Variables and Values

- `x`, `y`, `z` usually denote specific values or outcomes.
- `X`, `Y`, `Z` usually denote random variables.
- If you see `X = x`, read it as: "the random variable `X` took the value `x`."

Example:

```text
P(X = 1) = 0.25
```

Read this as: "the probability that `X` equals 1 is 0.25."

### Distributions

- `P` and `Q` usually denote probability distributions.
- `p(x)` means "the probability assigned by distribution `P` to value `x`."
- `q(x)` means the same thing for distribution `Q`.

In discrete settings, these are interchangeable:

```text
P(X = x)
p(x)
```

Both mean "the probability of outcome `x`."

### Samples

- `x ~ P` means "`x` is drawn from distribution `P`."
- `x₁, x₂, ..., xₙ` means a sequence of samples.

If subscripts are annoying, read `x_i` as "x sub i" or just "the i-th x."

---

## Sums, Products, and Indexing

### Summation

```text
∑ p(x) log₂ p(x)
```

Read this as: "sum over all possible values of `x`."

In Python, this is usually:

```python
sum(p[x] * math.log2(p[x]) for x in p)
```

### Product

```text
∏ p(x_i)
```

Read this as: "multiply these terms together."

Products show up when independent probabilities combine.

### Indices

- `x_i` means the i-th element of a sequence.
- `P_i` means the i-th probability.
- `i = 1, ..., n` means "`i` runs from 1 through `n`."

---

## Logs and Units

### Logarithms

- `log₂(x)` means base-2 logarithm.
- `ln(x)` means natural logarithm, base `e`.
- `log₁₀(x)` means base-10 logarithm.

This book mostly uses `log₂`, because information in base 2 is measured in bits.

### Bits, Nats, and Bans

- bits: base-2 logarithms
- nats: natural logarithms
- bans or hartleys: base-10 logarithms

Conversions:

```text
1 nat  = 1 / ln(2) ≈ 1.4427 bits
1 bit  = ln(2) ≈ 0.6931 nats
1 ban  = log₂(10) ≈ 3.3219 bits
```

---

## Probability Notation

### Joint Probability

```text
P(X = x, Y = y)
```

This means the probability that `X = x` and `Y = y` happen together.

Shorthand:

```text
p(x, y)
```

### Conditional Probability

```text
P(Y = y | X = x)
```

Read this as: "the probability that `Y = y` given that `X = x`."

The vertical bar `|` always means "given."

### Independence

```text
P(X, Y) = P(X)P(Y)
```

This means `X` and `Y` are independent: knowing one tells you nothing about the other.

---

## Expectation and Averages

### Expected Value

```text
E[X]
```

Read this as: "the expected value of `X`."

For a discrete variable:

```text
E[X] = ∑ x P(X = x)
```

This is a probability-weighted average.

### Expected Value of a Function

```text
E[f(X)]
```

This means: apply `f` to `X`, then average with respect to the distribution of `X`.

Example:

```text
H(X) = E[-log₂ P(X)]
```

Entropy is the expected surprise.

---

## The Core Information-Theoretic Quantities

### Surprise

```text
I(x) = -log₂ p(x)
```

The information content, or surprise, of outcome `x`.

### Entropy

```text
H(X) = -∑ p(x) log₂ p(x)
```

Average surprise of a random variable.

### Joint Entropy

```text
H(X, Y)
```

Uncertainty in the pair `(X, Y)`.

### Conditional Entropy

```text
H(Y | X)
```

The uncertainty remaining in `Y` after `X` is known.

Chain rule:

```text
H(X, Y) = H(X) + H(Y | X)
```

### Cross-Entropy

```text
H(P, Q) = -∑ p(x) log₂ q(x)
```

The average coding cost when the truth is `P` but you encode using `Q`.

### KL Divergence

```text
KL(P || Q) = ∑ p(x) log₂ [p(x) / q(x)]
```

The extra cost of using `Q` when the truth is `P`.

Read `||` as "relative to" or "compared to."

Important: KL is not symmetric.

```text
KL(P || Q) ≠ KL(Q || P)
```

### Mutual Information

```text
I(X; Y)
```

Read this as: "the mutual information between `X` and `Y`."

Definitions:

```text
I(X;Y) = H(X) - H(X|Y)
       = H(Y) - H(Y|X)
       = H(X) + H(Y) - H(X, Y)
       = KL(P(X,Y) || P(X)P(Y))
```

### Binary Entropy Function

```text
H_b(p) = -p log₂ p - (1-p) log₂(1-p)
```

This is the entropy of a Bernoulli random variable: success with probability `p`, failure with probability `1-p`.

It appears constantly in coding theory and channel capacity.

---

## Optimization Notation

### Maximum and Minimum

```text
max_x f(x)
min_x f(x)
```

The largest or smallest value of `f(x)` as `x` varies.

### Argmax and Argmin

```text
argmax_x f(x)
argmin_x f(x)
```

These return the value of `x` that achieves the maximum or minimum.

Example:

```text
C = max_{P(X)} I(X;Y)
```

Channel capacity is the maximum mutual information over all input distributions.

### Subject To

```text
maximize f(x)
subject to g(x) ≤ c
```

This means "optimize `f(x)` while obeying the constraint."

---

## Approximation and Asymptotics

### Approximately Equal

```text
≈
```

Read as "approximately equal."

### Proportional To

```text
∝
```

Read as "proportional to."

### Goes To

```text
n → ∞
```

Read as "`n` goes to infinity."

### Big-O

```text
O(n log n)
```

Asymptotic growth rate. This shows up rarely in the book, but when it does, it means "grows on the order of."

---

## Common Greek Letters

- `μ` (mu): often a mean
- `σ` (sigma): often a standard deviation
- `σ²`: variance
- `θ` (theta): often a model parameter
- `ε` (epsilon): often a small error rate or tolerance
- `δ` (delta): often a small change
- `λ` (lambda): often a rate, eigenvalue, or regularization parameter
- `ρ` (rho): often a correlation coefficient
- `τ` (tau): often a threshold or temperature parameter

There is no universal law here. Greek letters are conventions, not magic.

---

## Reading Formulas in Plain English

Here are a few formulas from the book, translated directly.

```text
H(X) = -∑ p(x) log₂ p(x)
```

"Entropy is the negative sum, over all outcomes, of probability times log probability."

```text
KL(P || Q) = H(P, Q) - H(P)
```

"KL divergence is the extra coding cost of using `Q` instead of the true distribution `P`."

```text
I(X;Y) = H(X) - H(X|Y)
```

"Mutual information is how much uncertainty in `X` disappears when you learn `Y`."

```text
C = max_{P(X)} I(X;Y)
```

"Capacity is the most information the channel can carry, after choosing the best input distribution."

---

## Final Advice

Do not try to memorize notation by force.

Instead, whenever you see a symbol:

1. Ask what kind of object it is: value, random variable, function, or distribution.
2. Ask whether the formula is summing, averaging, conditioning, or optimizing.
3. Translate it into one plain-English sentence.

If you can do that, the notation stops being a wall and becomes compression for ideas, which is exactly what mathematical notation is supposed to be.
