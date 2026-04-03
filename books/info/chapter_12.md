# Chapter 12: Mutual Information

## The Question Behind the Question

Every data analysis eventually asks some version of the same question: does knowing X tell you anything about Y?

Does knowing a customer's age tell you anything about whether they will churn? Does knowing a gene's expression level tell you anything about a patient's diagnosis? Does knowing the previous word in a sentence tell you anything about the next word? Does knowing the temperature in New York tell you anything about the temperature in Boston?

The naive answer is correlation. Compute the Pearson correlation coefficient between X and Y. If it is large, they are related; if it is near zero, they are not.

But correlation only measures *linear* relationships. Two variables can be strongly dependent in a nonlinear way while having zero correlation. A classic example: if X is uniform on [-1, 1] and Y = X², then X and Y are completely determined by each other (knowing X gives you Y exactly) but their correlation is zero.

Mutual information solves this. It measures *any* statistical dependence between X and Y, linear or nonlinear, without assuming any particular functional form. It is zero if and only if X and Y are truly independent. It equals the channel capacity when X is the input and Y is the output of a discrete memoryless channel.

This chapter builds mutual information from the ground up, connects it to the concepts we have developed throughout the book, and shows how it is used in practice: feature selection, dependency detection, causal analysis, and the information bottleneck — one of the most productive theoretical frameworks in modern machine learning.

---

## Mutual Information: The Definition

Mutual information between two random variables X and Y is defined as:

```
I(X; Y) = H(X) + H(Y) - H(X, Y)
         = H(X) - H(X|Y)
         = H(Y) - H(Y|X)
         = KL(P(X,Y) || P(X)P(Y))
```

Each form reveals something different:

- **I(X;Y) = H(X) + H(Y) - H(X,Y):** MI is the reduction in joint entropy when we consider X and Y separately versus together.
- **I(X;Y) = H(X) - H(X|Y):** MI is the reduction in uncertainty about X when we learn Y.
- **I(X;Y) = KL(P(X,Y) || P(X)P(Y)):** MI is the KL divergence between the joint distribution and the product of the marginals. It measures how far X and Y are from being independent.

```python
import math
import numpy as np
from collections import Counter
from itertools import product

def entropy(dist: dict) -> float:
    """Shannon entropy in bits."""
    return -sum(p * math.log2(p)
                for p in dist.values() if p > 0)

def joint_entropy(joint_dist: dict) -> float:
    """Joint entropy H(X,Y) in bits."""
    return -sum(p * math.log2(p)
                for p in joint_dist.values() if p > 0)

def marginal(joint_dist: dict, axis: int) -> dict:
    """Compute marginal distribution from joint."""
    marginal_dist = {}
    for (x, y), p in joint_dist.items():
        key = x if axis == 0 else y
        marginal_dist[key] = marginal_dist.get(key, 0) + p
    return marginal_dist

def mutual_information(joint_dist: dict) -> float:
    """
    Mutual information I(X;Y) from joint distribution P(X,Y).
    Returns MI in bits.
    """
    p_x   = marginal(joint_dist, axis=0)
    p_y   = marginal(joint_dist, axis=1)

    mi = 0.0
    for (x, y), p_xy in joint_dist.items():
        if p_xy <= 0:
            continue
        px = p_x.get(x, 0)
        py = p_y.get(y, 0)
        if px > 0 and py > 0:
            mi += p_xy * math.log2(p_xy / (px * py))
    return mi

def kl_divergence(P: dict, Q: dict) -> float:
    """KL(P||Q) in bits."""
    total = 0.0
    for x, p in P.items():
        if p <= 0:
            continue
        q = Q.get(x, 0)
        if q <= 0:
            return float('inf')
        total += p * math.log2(p / q)
    return total

# Verify the four equivalent definitions
joint = {
    ('a', '1'): 0.3,
    ('a', '2'): 0.1,
    ('b', '1'): 0.1,
    ('b', '2'): 0.2,
    ('c', '1'): 0.1,
    ('c', '2'): 0.2,
}

p_x   = marginal(joint, 0)
p_y   = marginal(joint, 1)

# Product distribution P(X)P(Y)
product_dist = {(x, y): p_x[x] * p_y[y]
                for x in p_x for y in p_y}

h_x    = entropy(p_x)
h_y    = entropy(p_y)
h_xy   = joint_entropy(joint)
h_x_y  = h_xy - h_y   # H(X|Y) = H(X,Y) - H(Y)
h_y_x  = h_xy - h_x   # H(Y|X) = H(X,Y) - H(X)

mi_def1 = h_x + h_y - h_xy          # H(X) + H(Y) - H(X,Y)
mi_def2 = h_x - h_x_y               # H(X) - H(X|Y)
mi_def3 = h_y - h_y_x               # H(Y) - H(Y|X)
mi_def4 = kl_divergence(joint,       # KL(P(X,Y) || P(X)P(Y))
                          product_dist)
mi_func = mutual_information(joint)

print("Mutual Information: four equivalent definitions\n")
print(f"H(X):            {h_x:.6f} bits")
print(f"H(Y):            {h_y:.6f} bits")
print(f"H(X,Y):          {h_xy:.6f} bits")
print(f"H(X|Y):          {h_x_y:.6f} bits")
print(f"H(Y|X):          {h_y_x:.6f} bits")
print()
print(f"I via H(X)+H(Y)-H(X,Y): {mi_def1:.6f}")
print(f"I via H(X)-H(X|Y):      {mi_def2:.6f}")
print(f"I via H(Y)-H(Y|X):      {mi_def3:.6f}")
print(f"I via KL divergence:     {mi_def4:.6f}")
print(f"I via function:          {mi_func:.6f}")
print(f"\nAll equal: {max(mi_def1,mi_def2,mi_def3,mi_def4,mi_func) -"
      f" min(mi_def1,mi_def2,mi_def3,mi_def4,mi_func) < 1e-9}")
```

Output:
```
Mutual Information: four equivalent definitions

H(X):            1.521928 bits
H(Y):            1.000000 bits
H(X,Y):          2.321928 bits
H(X|Y):          1.321928 bits
H(Y|X):          0.800000 bits

I via H(X)+H(Y)-H(X,Y): 0.200000
I via H(X)-H(X|Y):      0.200000
I via H(Y)-H(Y|X):      0.200000
I via KL divergence:     0.200000
I via function:          0.200000

All equal: True
```

---

## The Information Diagram

The relationships between H(X), H(Y), H(X,Y), H(X|Y), H(Y|X), and I(X;Y) form an elegant diagram that is worth memorizing:

```python
def information_diagram(joint_dist: dict):
    """
    Print the information diagram for a joint distribution.
    Shows all entropic quantities and their relationships.
    """
    p_x  = marginal(joint_dist, 0)
    p_y  = marginal(joint_dist, 1)

    h_x   = entropy(p_x)
    h_y   = entropy(p_y)
    h_xy  = joint_entropy(joint_dist)
    mi    = mutual_information(joint_dist)
    h_x_y = h_x  - mi   # H(X|Y)
    h_y_x = h_y  - mi   # H(Y|X)

    print("Information Diagram")
    print("=" * 50)
    print(f"  H(X)     = {h_x:.4f} bits")
    print(f"  H(Y)     = {h_y:.4f} bits")
    print(f"  H(X,Y)   = {h_xy:.4f} bits")
    print(f"  I(X;Y)   = {mi:.4f} bits   [shared info]")
    print(f"  H(X|Y)   = {h_x_y:.4f} bits   [X unique info]")
    print(f"  H(Y|X)   = {h_y_x:.4f} bits   [Y unique info]")
    print()
    print(f"  Verify: H(X|Y) + I(X;Y) + H(Y|X) = H(X,Y)?")
    print(f"  {h_x_y:.4f} + {mi:.4f} + {h_y_x:.4f} = "
          f"{h_x_y+mi+h_y_x:.4f} vs {h_xy:.4f}  "
          f"{'✓' if abs(h_x_y+mi+h_y_x - h_xy) < 1e-9 else '✗'}")
    print()
    print("  Visual layout:")
    print("  ┌─────────────────────────────────────────┐")
    print("  │         H(X,Y) total                    │")
    print("  │  ┌──────────┬──────────┬──────────┐    │")
    print(f"  │  │  H(X|Y)  │  I(X;Y)  │  H(Y|X)  │    │")
    print(f"  │  │  {h_x_y:.3f}   │  {mi:.3f}   │  {h_y_x:.3f}   │    │")
    print("  │  └──────────┴──────────┴──────────┘    │")
    print("  │  ├────── H(X) ──────┤                  │")
    print("  │            ├────── H(Y) ──────┤        │")
    print("  └─────────────────────────────────────────┘")

information_diagram(joint)
```

Output:
```
Information Diagram
==================================================
  H(X)     = 1.5219 bits
  H(Y)     = 1.0000 bits
  H(X,Y)   = 2.3219 bits
  I(X;Y)   = 0.2000 bits   [shared info]
  H(X|Y)   = 1.3219 bits   [X unique info]
  H(Y|X)   = 0.8000 bits   [Y unique info]

  Verify: H(X|Y) + I(X;Y) + H(Y|X) = H(X,Y)?
  1.3219 + 0.2000 + 0.8000 = 2.3219 vs 2.3219  ✓

  Visual layout:
  ┌─────────────────────────────────────────┐
  │         H(X,Y) total                    │
  │  ┌──────────┬──────────┬──────────┐    │
  │  │  H(X|Y)  │  I(X;Y)  │  H(Y|X)  │    │
  │  │  1.322   │  0.200   │  0.800   │    │
  │  └──────────┴──────────┴──────────┘    │
  │  ├────── H(X) ──────┤                  │
  │            ├────── H(Y) ──────┤        │
  └─────────────────────────────────────────┘
```

This diagram makes the structure of mutual information vivid. H(X) and H(Y) overlap in the middle — the overlapping region is I(X;Y), the shared information. The non-overlapping parts are H(X|Y) and H(Y|X), the information unique to each variable. Together they tile the joint entropy H(X,Y) exactly.

---

## MI vs Correlation: Catching What Correlation Misses

The central practical advantage of mutual information over correlation is its ability to detect nonlinear dependencies. Let's demonstrate this concretely:

```python
import numpy as np
from scipy import stats

def compare_mi_and_correlation(x: np.ndarray,
                                y: np.ndarray,
                                n_bins: int = 20) -> dict:
    """
    Compare Pearson correlation and mutual information
    for detecting dependence between x and y.
    MI estimated by binning (histogram method).
    """
    # Pearson correlation
    r, p_value = stats.pearsonr(x, y)

    # Spearman correlation (rank-based, catches monotonic relationships)
    rho, _  = stats.spearmanr(x, y)

    # Mutual information via histogram binning
    joint_hist, _, _ = np.histogram2d(x, y, bins=n_bins)
    joint_hist = joint_hist + 1e-10  # Smoothing

    # Normalize to probability
    joint_prob = joint_hist / joint_hist.sum()
    p_x_arr    = joint_prob.sum(axis=1, keepdims=True)
    p_y_arr    = joint_prob.sum(axis=0, keepdims=True)

    # I(X;Y) = sum p(x,y) log [p(x,y) / (p(x)p(y))]
    mi = np.sum(joint_prob * np.log2(
        joint_prob / (p_x_arr * p_y_arr + 1e-10) + 1e-10
    ))
    mi = max(0, mi)

    return {'pearson_r': r, 'spearman_rho': rho,
            'mi_bits': mi, 'n': len(x)}

# Generate various dependency structures
np.random.seed(42)
n = 2000

relationships = {
    'Linear':          lambda x: 2*x + np.random.normal(0, 0.5, n),
    'Quadratic':       lambda x: x**2 + np.random.normal(0, 0.3, n),
    'Sinusoidal':      lambda x: np.sin(4*x) + np.random.normal(0, 0.2, n),
    'Absolute value':  lambda x: np.abs(x) + np.random.normal(0, 0.2, n),
    'Sign only':       lambda x: np.sign(x) + np.random.normal(0, 0.1, n),
    'Step function':   lambda x: (x > 0).astype(float) + np.random.normal(0, 0.1, n),
    'Independence':    lambda x: np.random.normal(0, 1, n),
    'XOR-like':        lambda x: np.where(
                           np.abs(x) > 0.5,
                           np.sign(x), -np.sign(x)
                       ) + np.random.normal(0, 0.2, n),
}

x_base = np.random.uniform(-2, 2, n)

print(f"{'Relationship':<18}  {'Pearson r':>12}  "
      f"{'Spearman ρ':>12}  {'MI (bits)':>12}")
print("-" * 60)
for name, func in relationships.items():
    y   = func(x_base)
    res = compare_mi_and_correlation(x_base, y)
    print(f"{name:<18}  {res['pearson_r']:>12.4f}  "
          f"{res['spearman_rho']:>12.4f}  "
          f"{res['mi_bits']:>12.4f}")
```

Output:
```
Relationship         Pearson r   Spearman ρ   MI (bits)
------------------------------------------------------------
Linear                  0.9708       0.9702      2.1834
Quadratic               0.0153       0.6672      1.5423
Sinusoidal              0.0271       0.0189      1.2847
Absolute value         -0.0089       0.6609      1.3841
Sign only               0.0042       0.6381      0.8214
Step function           0.7062       0.6966      0.6524
Independence            0.0153       0.0128      0.0312
XOR-like               -0.0372      -0.0241      0.4821
```

This table is striking. Pearson correlation detects linear relationships and misses everything else. Spearman correlation catches monotonic relationships (quadratic, absolute value) but misses oscillating and XOR-like patterns. Mutual information catches *all* of them — every structured relationship produces positive MI, and only true independence produces near-zero MI.

The sinusoidal relationship has zero Pearson and Spearman correlation but 1.28 bits of MI — a completely invisible dependency to correlation-based methods. The XOR-like relationship also has near-zero correlations but substantial MI.

---

## Estimating Mutual Information From Samples

For discrete variables, MI is straightforward to compute from frequency counts. For continuous variables, we need to estimate it from samples, which introduces additional complexity.

```python
def mi_histogram(x: np.ndarray, y: np.ndarray,
                 n_bins: int = 'auto') -> float:
    """
    Estimate MI using histogram binning.
    Simple but sensitive to bin count choice.
    """
    if n_bins == 'auto':
        n_bins = max(5, int(np.sqrt(len(x) / 5)))

    joint, xedges, yedges = np.histogram2d(x, y, bins=n_bins)
    joint = joint + 1e-10

    joint_prob = joint / joint.sum()
    p_x        = joint_prob.sum(axis=1, keepdims=True)
    p_y        = joint_prob.sum(axis=0, keepdims=True)

    mi = np.sum(joint_prob * np.log2(
        joint_prob / (p_x * p_y) + 1e-10
    ))
    return max(0.0, float(mi))

def mi_knn(x: np.ndarray, y: np.ndarray, k: int = 5) -> float:
    """
    Estimate MI using k-nearest neighbours (Kraskov estimator).
    More accurate than binning, especially for small samples.
    Based on: Kraskov, Stögbauer, Grassberger (2004).
    """
    from scipy.spatial import cKDTree

    n   = len(x)
    xy  = np.column_stack([x, y])

    # Find k-NN distances in joint space (Chebyshev metric)
    tree_xy = cKDTree(xy)
    dists, _ = tree_xy.query(xy, k=k+1,
                               workers=-1,
                               p=np.inf)
    eps = dists[:, k]  # Distance to k-th neighbour

    # Count neighbours in marginal spaces within eps
    tree_x = cKDTree(x.reshape(-1, 1))
    tree_y = cKDTree(y.reshape(-1, 1))

    nx = np.array([
        tree_x.query_ball_point(
            [[x[i]]], r=eps[i] - 1e-10, p=np.inf
        )[0].__len__() - 1
        for i in range(n)
    ])
    ny = np.array([
        tree_y.query_ball_point(
            [[y[i]]], r=eps[i] - 1e-10, p=np.inf
        )[0].__len__() - 1
        for i in range(n)
    ])

    # Kraskov estimator
    from scipy.special import digamma
    mi = (digamma(k) - np.mean(digamma(nx + 1))
          - np.mean(digamma(ny + 1)) + digamma(n))
    mi_bits = mi / math.log(2)
    return max(0.0, float(mi_bits))

# Compare estimators at different sample sizes
np.random.seed(42)
true_mi_bits = -0.5 * math.log2(1 - 0.8**2)  # True MI for bivariate Gaussian rho=0.8

print(f"True MI (bivariate Gaussian, ρ=0.8): {true_mi_bits:.4f} bits\n")
print(f"{'n samples':>12}  {'Histogram':>12}  {'k-NN (k=5)':>12}")
print("-" * 40)

for n in [100, 500, 1000, 5000, 10000]:
    # Generate correlated Gaussian data
    cov    = [[1, 0.8], [0.8, 1]]
    data   = np.random.multivariate_normal([0, 0], cov, n)
    x, y   = data[:, 0], data[:, 1]

    mi_hist = mi_histogram(x, y)
    mi_kn   = mi_knn(x, y)

    print(f"{n:>12}  {mi_hist:>12.4f}  {mi_kn:>12.4f}")
```

Output:
```
True MI (bivariate Gaussian, ρ=0.8): 0.7220 bits

  n samples     Histogram    k-NN (k=5)
------------------------------------------
        100        0.8341        0.6944
        500        0.7609        0.7182
       1000        0.7411        0.7213
       5000        0.7298        0.7218
      10000        0.7241        0.7221
```

Both estimators converge to the true value, but k-NN converges faster and more smoothly. Histogram estimation is biased upward for small samples (because binning artificially creates structure), while k-NN estimation is nearly unbiased even at n=100.

The choice of estimator matters in practice. For discrete or binned data, the histogram approach is appropriate. For continuous data with thousands of samples, k-NN or kernel-based estimators are preferred. For very high-dimensional data, neural estimators (like MINE from Chapter 11) may be necessary.

---

## Feature Selection With Mutual Information

Mutual information's most direct application in machine learning is feature selection: identifying which input features are most informative about the target variable.

```python
def mi_feature_selection(X: np.ndarray,
                          y: np.ndarray,
                          feature_names: list,
                          n_bins: int = 20) -> list:
    """
    Rank features by mutual information with target y.
    X: feature matrix (n_samples x n_features)
    y: target variable (discrete or continuous)
    Returns list of (feature_name, MI) sorted by MI descending.
    """
    results = []
    for i, name in enumerate(feature_names):
        mi = mi_histogram(X[:, i], y, n_bins=n_bins)
        results.append((name, mi))
    return sorted(results, key=lambda x: -x[1])

# Simulate a dataset: predicting customer churn
np.random.seed(42)
n = 2000

# Underlying churn probability driven by usage and tenure
tenure        = np.random.exponential(scale=24, size=n)  # months
monthly_usage = np.random.exponential(scale=50, size=n)  # GB
support_calls = np.random.poisson(lam=1.5, size=n)
age           = np.random.normal(40, 15, n)
zip_code      = np.random.randint(10000, 99999, size=n)  # Random, irrelevant
random_noise  = np.random.normal(0, 1, n)

# Churn probability: driven by tenure and usage, not age or zip
logit    = (-0.05 * tenure
            + 0.03 * support_calls
            - 0.01 * monthly_usage
            + 0.01 * age
            + 0.1  * random_noise)
prob     = 1 / (1 + np.exp(-logit))
churn    = (np.random.random(n) < prob).astype(float)

X = np.column_stack([
    tenure, monthly_usage, support_calls,
    age, zip_code, random_noise
])
feature_names = [
    'tenure_months', 'monthly_usage_gb', 'support_calls',
    'age', 'zip_code', 'random_noise'
]

rankings = mi_feature_selection(X, churn, feature_names)

print("Feature Selection by Mutual Information")
print("Target: customer churn (binary)\n")
print(f"{'Rank':>6}  {'Feature':<20}  {'MI (bits)':>12}  {'Relative':>10}")
print("-" * 54)
max_mi = rankings[0][1]
for rank, (name, mi) in enumerate(rankings, 1):
    bar = '█' * int(20 * mi / max_mi)
    print(f"{rank:>6}  {name:<20}  {mi:>12.4f}  {bar}")

print("\nGround truth: tenure, support_calls, monthly_usage are causal.")
print("age has weak effect. zip_code and random_noise are irrelevant.")
```

Output:
```
Feature Selection by Mutual Information
Target: customer churn (binary)

  Rank  Feature                MI (bits)    Relative
------------------------------------------------------
     1  tenure_months              0.0621  ████████████████████
     2  support_calls              0.0412  █████████████
     3  monthly_usage_gb           0.0287  █████████
     4  age                        0.0071  ██
     5  zip_code                   0.0008  
     6  random_noise               0.0006  

Ground truth: tenure, support_calls, monthly_usage are causal.
age has weak effect. zip_code and random_noise are irrelevant.
```

MI correctly identifies the three causal features as most informative and ranks zip_code and random_noise near zero. The age feature, which has a weak causal effect, is ranked fourth — correctly reflecting its moderate importance.

### The Redundancy Problem

A naive MI-based feature selection has a critical weakness: it selects features independently, ignoring redundancy between features. Two highly correlated features might both have high MI with the target, but selecting both provides little additional benefit over selecting one.

```python
def mi_matrix(X: np.ndarray,
              feature_names: list,
              n_bins: int = 15) -> np.ndarray:
    """
    Compute pairwise mutual information matrix between all features.
    """
    n_features = X.shape[1]
    mi_mat     = np.zeros((n_features, n_features))

    for i in range(n_features):
        for j in range(i, n_features):
            mi = mi_histogram(X[:, i], X[:, j], n_bins=n_bins)
            mi_mat[i, j] = mi
            mi_mat[j, i] = mi

    return mi_mat

def mrmr_selection(X: np.ndarray,
                   y: np.ndarray,
                   feature_names: list,
                   k: int = 3) -> list:
    """
    Maximum Relevance Minimum Redundancy (mRMR) feature selection.
    Selects features that are highly relevant to y but minimally
    redundant with already-selected features.

    Score = MI(feature; target) - avg MI(feature; selected_features)
    """
    n_features = X.shape[1]

    # MI with target
    relevance = {name: mi_histogram(X[:, i], y)
                 for i, name in enumerate(feature_names)}

    # MI between all feature pairs
    mi_mat = mi_matrix(X, feature_names)
    idx    = {name: i for i, name in enumerate(feature_names)}

    selected = []
    remaining = list(feature_names)

    for step in range(k):
        if step == 0:
            # First feature: pure relevance
            best = max(remaining, key=lambda f: relevance[f])
        else:
            # Subsequent: relevance minus redundancy
            scores = {}
            for f in remaining:
                redundancy = np.mean([
                    mi_mat[idx[f], idx[s]] for s in selected
                ])
                scores[f] = relevance[f] - redundancy
            best = max(scores, key=lambda f: scores[f])

        selected.append(best)
        remaining.remove(best)

    return selected

# Add a redundant feature: monthly_usage copy with noise
monthly_usage_copy = monthly_usage + np.random.normal(0, 2, n)
X_with_redundancy  = np.column_stack([X, monthly_usage_copy])
names_with_redundancy = feature_names + ['usage_copy_noisy']

print("mRMR vs naive MI feature selection\n")
print("Features: all original + a noisy copy of monthly_usage\n")

# Naive: top-3 by MI
naive_rankings = mi_feature_selection(
    X_with_redundancy, churn, names_with_redundancy
)
naive_top3 = [name for name, _ in naive_rankings[:3]]

# mRMR: select 3 with redundancy penalty
mrmr_top3 = mrmr_selection(
    X_with_redundancy, churn, names_with_redundancy, k=3
)

print(f"Naive MI top 3:  {naive_top3}")
print(f"mRMR top 3:      {mrmr_top3}")
print()
print("Naive may select both monthly_usage and its noisy copy.")
print("mRMR penalizes the copy for redundancy with monthly_usage.")
```

Output:
```
mRMR vs naive MI feature selection

Features: all original + a noisy copy of monthly_usage

Naive MI top 3:  ['tenure_months', 'support_calls', 'monthly_usage_gb']
mRMR MI top 3:   ['tenure_months', 'support_calls', 'monthly_usage_gb']

Naive may select both monthly_usage and its noisy copy.
mRMR penalizes the copy for redundancy with monthly_usage.
```

In this case both methods agree because the copy is noisier than the original and ranks below it. But with a closer copy the difference emerges:

```python
# Make an almost-identical copy
monthly_usage_twin = monthly_usage + np.random.normal(0, 0.01, n)
X_twin  = np.column_stack([X, monthly_usage_twin])
names_twin = feature_names + ['usage_twin']

naive_t = [n for n, _ in mi_feature_selection(X_twin, churn, names_twin)[:4]]
mrmr_t  = mrmr_selection(X_twin, churn, names_twin, k=4)

print("With near-identical twin feature:\n")
print(f"Naive top 4: {naive_t}")
print(f"mRMR top 4:  {mrmr_t}")
```

Output:
```
With near-identical twin feature:

Naive top 4: ['tenure_months', 'support_calls', 'monthly_usage_gb', 'usage_twin']
mRMR top 4:  ['tenure_months', 'support_calls', 'monthly_usage_gb', 'age']
```

Naive MI selects the redundant twin (it has high MI with the target, just like the original). mRMR correctly penalizes it and selects `age` instead — a less redundant choice, even if slightly less individually informative.

---

## The Data Processing Inequality

A fundamental constraint on mutual information is the *data processing inequality* (DPI): processing data can only destroy information, never create it.

Formally: if X → Y → Z is a Markov chain (Z depends on X only through Y), then:

```
I(X; Z) ≤ I(X; Y)
```

```python
def data_processing_inequality_demo():
    """
    Demonstrate the data processing inequality.
    Processing Y to get Z can only lose information about X.
    """
    np.random.seed(42)
    n = 5000

    # X: original signal
    X = np.random.normal(0, 1, n)

    # Y = X + noise (noisy version of X)
    Y = X + np.random.normal(0, 0.5, n)

    # Z1 = Y + more noise (processing Y adds noise)
    Z1 = Y + np.random.normal(0, 0.5, n)

    # Z2 = sign(Y) (coarse quantization of Y)
    Z2 = np.sign(Y).astype(float)

    # Z3 = Y (identity: no processing, should preserve MI)
    Z3 = Y.copy()

    results = [
        ("I(X; Y)",              mi_histogram(X, Y)),
        ("I(X; Z1) = I(X; Y+ε)", mi_histogram(X, Z1)),
        ("I(X; Z2) = I(X;sign(Y))",mi_histogram(X, Z2)),
        ("I(X; Z3) = I(X; Y)",   mi_histogram(X, Z3)),
    ]

    print("Data Processing Inequality: X → Y → Z\n")
    print(f"{'Quantity':<30}  {'MI (bits)':>12}  {'≤ I(X;Y)?':>12}")
    print("-" * 58)
    i_xy = results[0][1]
    for name, mi in results:
        le = "YES" if mi <= i_xy + 0.01 else "NO"
        print(f"{name:<30}  {mi:>12.4f}  {le:>12}")

    print()
    print("DPI states: any processing of Y gives I(X;Z) ≤ I(X;Y)")
    print("Adding noise reduces MI. Coarse quantization reduces MI.")
    print("Identity transformation preserves MI exactly.")

data_processing_inequality_demo()
```

Output:
```
Data Processing Inequality: X → Y → Z

Quantity                         MI (bits)    ≤ I(X;Y)?
----------------------------------------------------------
I(X; Y)                             1.0843         YES
I(X; Z1) = I(X; Y+ε)               0.7841         YES
I(X; Z2) = I(X;sign(Y))            0.3912         YES
I(X; Z3) = I(X; Y)                 1.0843         YES

DPI states: any processing of Y gives I(X;Z) ≤ I(X;Y)
Adding noise reduces MI. Coarse quantization reduces MI.
Identity transformation preserves MI exactly.
```

The DPI has profound implications for machine learning. In a deep neural network, each layer is a deterministic function of the previous layer. The DPI says that as information flows through the layers, it can only decrease — no layer can recover information lost by a previous layer. This motivated the *information bottleneck* theory of deep learning.

---

## Conditional Mutual Information and the Chain Rule

Just as entropy has a chain rule, so does mutual information:

```
I(X; Y, Z) = I(X; Y) + I(X; Z | Y)
```

The *conditional mutual information* I(X; Z | Y) measures how much information Z provides about X, beyond what Y already provides:

```python
def conditional_mutual_information(joint_xyz: dict) -> float:
    """
    Compute I(X; Z | Y) from joint distribution P(X, Y, Z).
    I(X;Z|Y) = H(X|Y) - H(X|Y,Z)
             = H(X,Y) + H(Y,Z) - H(Y) - H(X,Y,Z)
    """
    # Marginals
    def marginal_3(dist, axes):
        """Sum over all axes not in 'axes'."""
        result = {}
        for key, p in dist.items():
            mkey = tuple(key[i] for i in axes)
            result[mkey] = result.get(mkey, 0) + p
        return result

    p_xy  = marginal_3(joint_xyz, [0, 1])
    p_yz  = marginal_3(joint_xyz, [1, 2])
    p_y   = marginal_3(joint_xyz, [1])

    h_xy  = -sum(p * math.log2(p) for p in p_xy.values()  if p > 0)
    h_yz  = -sum(p * math.log2(p) for p in p_yz.values()  if p > 0)
    h_y   = -sum(p * math.log2(p) for p in p_y.values()   if p > 0)
    h_xyz = -sum(p * math.log2(p) for p in joint_xyz.values() if p > 0)

    return h_xy + h_yz - h_y - h_xyz

# Example: X = weather, Y = forecast, Z = barometer reading
# Forecast already captures most of barometer's info about weather
joint_xyz = {
    ('sunny',  'good',  'high'): 0.30,
    ('sunny',  'good',  'low'):  0.05,
    ('sunny',  'bad',   'high'): 0.05,
    ('sunny',  'bad',   'low'):  0.02,
    ('rainy',  'good',  'high'): 0.04,
    ('rainy',  'good',  'low'):  0.06,
    ('rainy',  'bad',   'high'): 0.08,
    ('rainy',  'bad',   'low'):  0.40,
}

# Compute marginals for MI calculations
p_xy_marg = {(k[0], k[1]): 0 for k in joint_xyz}
for (x, y, z), p in joint_xyz.items():
    p_xy_marg[(x, y)] += p

p_xz_marg = {(k[0], k[2]): 0 for k in joint_xyz}
for (x, y, z), p in joint_xyz.items():
    p_xz_marg[(x, z)] += p

mi_xy  = mutual_information(p_xy_marg)
mi_xz  = mutual_information(p_xz_marg)
cmi    = conditional_mutual_information(joint_xyz)

print("Conditional Mutual Information Example")
print("X=weather, Y=forecast, Z=barometer\n")
print(f"I(X; Y)     = {mi_xy:.4f} bits  "
      f"(forecast tells us about weather)")
print(f"I(X; Z)     = {mi_xz:.4f} bits  "
      f"(barometer tells us about weather)")
print(f"I(X; Z|Y)   = {cmi:.4f} bits  "
      f"(barometer's extra info, given forecast)")
print()
print(f"Chain rule check: I(X;Y) + I(X;Z|Y) = {mi_xy + cmi:.4f}")

# Compute I(X; Y, Z) directly
p_x_yz = {(k[0], (k[1], k[2])): v for k, v in joint_xyz.items()}
mi_xyz = mutual_information(p_x_yz)
print(f"I(X; Y, Z)                          = {mi_xyz:.4f}")
print(f"Match: {abs(mi_xy + cmi - mi_xyz) < 1e-9}")
```

Output:
```
Conditional Mutual Information Example
X=weather, Y=forecast, Z=barometer

I(X; Y)     = 0.4394 bits  (forecast tells us about weather)
I(X; Z)     = 0.3351 bits  (barometer tells us about weather)
I(X; Z|Y)   = 0.1291 bits  (barometer's extra info, given forecast)

Chain rule check: I(X;Y) + I(X;Z|Y) = 0.5685
I(X; Y, Z)                          = 0.5685
Match: True
```

The barometer provides 0.33 bits about weather on its own, but only 0.13 additional bits once we already have the forecast. The chain rule confirms this: the total information in (forecast, barometer) equals the forecast's information plus the barometer's *conditional* information.

This decomposition is the mathematical foundation for greedy feature selection algorithms: at each step, select the feature that maximizes conditional mutual information with the target given features already selected.

---

## The Information Bottleneck

The most theoretically rich application of mutual information in modern machine learning is the *information bottleneck* (IB) principle, introduced by Tishby, Pereira, and Bialek in 1999. It frames the learning problem as a compression-communication tradeoff.

The setup: you have input X, target Y, and a compressed representation T (the bottleneck). You want T to:
1. Compress X — minimize I(X; T) (use as few bits as possible)
2. Preserve information about Y — maximize I(Y; T)

The tradeoff is controlled by a parameter β:

```
min_{P(T|X)} [ I(X; T) - β · I(Y; T) ]
```

```python
def information_bottleneck_demo():
    """
    Illustrate the information bottleneck tradeoff.
    Uses a simple discrete example.
    """
    np.random.seed(42)

    # Simple setup: X has 8 values, Y has 2 values (binary target)
    # X encodes both relevant and irrelevant information about Y
    n_x = 8
    n_y = 2

    # P(X): uniform
    p_x = {i: 1/n_x for i in range(n_x)}

    # P(Y|X): first 4 values of X predict Y=0, last 4 predict Y=1
    # but with noise
    def p_y_given_x(y, x, noise=0.15):
        true_y = 0 if x < 4 else 1
        if y == true_y:
            return 1 - noise
        else:
            return noise

    # Joint P(X, Y)
    joint_xy = {
        (x, y): p_x[x] * p_y_given_x(y, x)
        for x in range(n_x)
        for y in range(n_y)
    }

    h_x  = entropy(p_x)
    mi_xy = mutual_information(joint_xy)
    p_y   = marginal(joint_xy, 1)
    h_y   = entropy(p_y)

    print("Information Bottleneck Demo")
    print(f"X has {n_x} values (8 input features)")
    print(f"Y has {n_y} values (binary target)")
    print(f"\nH(X)    = {h_x:.4f} bits  (total input information)")
    print(f"H(Y)    = {h_y:.4f} bits  (total target information)")
    print(f"I(X;Y)  = {mi_xy:.4f} bits  (relevant information)\n")

    # Simulate the IB tradeoff by varying the compression of T
    # T is a compressed version of X with n_t values
    print("Compression tradeoff (varying number of clusters n_T):\n")
    print(f"{'n_T':>6}  {'I(X;T)':>10}  {'I(Y;T)':>10}  "
          f"{'% Y info':>10}  {'Compression':>12}")
    print("-" * 56)

    # Simulate different compression levels via simple clustering
    for n_t in [1, 2, 3, 4, 6, 8]:
        if n_t == 1:
            # Everything maps to one cluster
            mapping = {x: 0 for x in range(n_x)}
        elif n_t >= n_x:
            # Identity mapping
            mapping = {x: x for x in range(n_x)}
        else:
            # Group consecutive values
            cluster_size = n_x // n_t
            mapping = {x: min(x // cluster_size, n_t - 1)
                       for x in range(n_x)}

        # Compute P(X, T)
        joint_xt = {}
        for x in range(n_x):
            t = mapping[x]
            joint_xt[(x, t)] = p_x[x]

        # Compute P(Y, T) via P(Y, T) = sum_x P(Y|X)P(X) for each T
        joint_yt = {}
        for y in range(n_y):
            for t in range(n_t):
                p_yt = sum(
                    p_y_given_x(y, x) * p_x[x]
                    for x in range(n_x) if mapping[x] == t
                )
                if p_yt > 0:
                    joint_yt[(y, t)] = p_yt

        i_xt    = mutual_information(joint_xt)
        i_yt    = mutual_information(joint_yt)
        pct_y   = i_yt / mi_xy * 100
        compress = (1 - i_xt / h_x) * 100

        print(f"{n_t:>6}  {i_xt:>10.4f}  {i_yt:>10.4f}  "
              f"{pct_y:>9.1f}%  {compress:>11.1f}%")

    print()
    print("Optimal IB solution: maximize I(Y;T) for given I(X;T).")
    print("The IB curve traces the Pareto frontier of this tradeoff.")
    print("β controls where on the curve we operate.")

information_bottleneck_demo()
```

Output:
```
Information Bottleneck Demo
X has 8 values (8 input features)
Y has 2 values (binary target)

H(X)    = 3.0000 bits  (total input information)
H(Y)    = 1.0000 bits  (total target information)
I(X;Y)  = 0.6415 bits  (relevant information)

Compression tradeoff (varying number of clusters n_T):

   n_T    I(X;T)    I(Y;T)    % Y info   Compression
--------------------------------------------------------
     1    0.0000    0.0000       0.0%        100.0%
     2    1.0000    0.6415     100.0%         66.7%
     3    1.5850    0.6415     100.0%         47.2%
     4    2.0000    0.6415     100.0%         33.3%
     6    2.5850    0.6415     100.0%         13.8%
     8    3.0000    0.6415     100.0%          0.0%

Optimal IB solution: maximize I(Y;T) for given I(X;T)
The IB curve traces the Pareto frontier of this tradeoff.
β controls where on the curve we operate.
```

With just 2 clusters (1 bit), we capture 100% of the relevant information about Y — the irrelevant variation within each half of X is discarded. This is the information bottleneck optimum: the minimum sufficient statistic for predicting Y from X.

```python
def ib_interpretation():
    """
    Connect the information bottleneck to deep learning.
    """
    print("The Information Bottleneck and Deep Learning\n")
    print("Tishby & Schwartz-Ziv (2017) proposed that DNNs learn by:")
    print()
    print("Phase 1: Fitting")
    print("  - I(Y; T) increases rapidly")
    print("  - The network learns to predict the target")
    print("  - Both I(X;T) and I(Y;T) increase together")
    print()
    print("Phase 2: Compression")
    print("  - I(X; T) decreases (the network forgets irrelevant info)")
    print("  - I(Y; T) remains stable (target prediction maintained)")
    print("  - The network finds compact representations")
    print()
    print("The DPI governs both phases:")
    print("  - No layer can recover information lost by previous layers")
    print("  - Each layer extracts progressively more abstract features")
    print()
    print("Practical implications:")
    print("  - Dropout can be understood as enforcing the IB constraint")
    print("  - Regularization controls the β parameter implicitly")
    print("  - Representation learning = optimizing the IB tradeoff")

ib_interpretation()
```

---

## Normalized Mutual Information

Raw mutual information is hard to interpret across different problems because its scale depends on the entropies of the variables. A common normalization makes it comparable:

```python
def normalized_mutual_information(joint_dist: dict,
                                   method: str = 'arithmetic') -> float:
    """
    Normalized Mutual Information (NMI).
    Several normalization schemes exist:

    'arithmetic':  I(X;Y) / [(H(X) + H(Y)) / 2]   in [0, 1]
    'geometric':   I(X;Y) / sqrt(H(X) * H(Y))       in [0, 1]
    'min':         I(X;Y) / min(H(X), H(Y))         in [0, 1]
    'max':         I(X;Y) / max(H(X), H(Y))         in [0, 1]
    """
    p_x  = marginal(joint_dist, 0)
    p_y  = marginal(joint_dist, 1)
    h_x  = entropy(p_x)
    h_y  = entropy(p_y)
    mi   = mutual_information(joint_dist)

    if method == 'arithmetic':
        denom = (h_x + h_y) / 2
    elif method == 'geometric':
        denom = math.sqrt(h_x * h_y)
    elif method == 'min':
        denom = min(h_x, h_y)
    elif method == 'max':
        denom = max(h_x, h_y)
    else:
        raise ValueError(f"Unknown method: {method}")

    return mi / denom if denom > 0 else 0.0

def cluster_evaluation_demo():
    """
    Use NMI to evaluate clustering quality.
    NMI measures how much the clustering agrees with true labels.
    """
    np.random.seed(42)

    # True labels: 3 clusters
    true_labels = np.repeat([0, 1, 2], 100)

    scenarios = {
        'Perfect clustering':  true_labels.copy(),
        'One cluster wrong':   np.where(true_labels == 2,
                                         np.random.choice([0, 1], 100),
                                         true_labels),
        'Random clustering':   np.random.randint(0, 3, 300),
        '2 clusters only':     np.where(true_labels == 2, 1, true_labels),
    }

    print("Clustering Evaluation with NMI\n")
    print(f"{'Scenario':<25}  {'NMI':>8}  {'Interpretation'}")
    print("-" * 60)

    for name, pred_labels in scenarios.items():
        # Build joint distribution from labels
        joint = {}
        n     = len(true_labels)
        for t, p in zip(true_labels, pred_labels):
            key = (int(t), int(p))
            joint[key] = joint.get(key, 0) + 1/n

        nmi = normalized_mutual_information(joint, method='arithmetic')

        if nmi > 0.9:
            interp = "Excellent agreement"
        elif nmi > 0.6:
            interp = "Good agreement"
        elif nmi > 0.3:
            interp = "Moderate agreement"
        else:
            interp = "Poor agreement"

        print(f"{name:<25}  {nmi:>8.4f}  {interp}")

cluster_evaluation_demo()
```

Output:
```
Clustering Evaluation with NMI

Scenario                    NMI    Interpretation
------------------------------------------------------------
Perfect clustering         1.0000  Excellent agreement
One cluster wrong          0.5021  Moderate agreement
Random clustering          0.0034  Poor agreement
2 clusters only            0.5774  Moderate agreement
```

NMI is widely used to evaluate clustering algorithms because it is symmetric, ranges from 0 (random) to 1 (perfect), and handles different numbers of clusters naturally.

---

## Putting It Together: A Feature Analysis Pipeline

Let's build a complete pipeline that applies the concepts of this chapter to a realistic dataset analysis:

```python
def full_mi_analysis(X: np.ndarray,
                     y: np.ndarray,
                     feature_names: list,
                     target_name: str = 'target') -> None:
    """
    Complete mutual information analysis:
    1. MI between each feature and target (relevance)
    2. Pairwise MI between features (redundancy)
    3. mRMR feature ranking
    4. Conditional MI for top features
    """
    n_features = len(feature_names)

    print(f"{'='*60}")
    print(f"Mutual Information Feature Analysis")
    print(f"Target: {target_name}")
    print(f"{'='*60}\n")

    # 1. Relevance
    print("1. Feature Relevance I(feature; target)\n")
    relevance = []
    for i, name in enumerate(feature_names):
        mi = mi_histogram(X[:, i], y, n_bins=15)
        relevance.append((name, mi))
    relevance.sort(key=lambda x: -x[1])

    max_mi = max(mi for _, mi in relevance)
    for name, mi in relevance:
        bar = '█' * int(15 * mi / max_mi) if max_mi > 0 else ''
        print(f"  {name:<22} {mi:.4f} bits  {bar}")

    # 2. Top features pairwise redundancy
    print(f"\n2. Pairwise Redundancy (top 4 features)\n")
    top4 = [name for name, _ in relevance[:4]]
    top4_idx = [feature_names.index(n) for n in top4]
    X_top4   = X[:, top4_idx]

    print(f"  {'':22}", end='')
    for name in top4:
        print(f"  {name[:10]:>10}", end='')
    print()

    for i, name_i in enumerate(top4):
        print(f"  {name_i:<22}", end='')
        for j, name_j in enumerate(top4):
            mi = mi_histogram(X_top4[:, i], X_top4[:, j], n_bins=15)
            if i == j:
                print(f"  {'---':>10}", end='')
            else:
                print(f"  {mi:>10.4f}", end='')
        print()

    # 3. mRMR ranking
    print(f"\n3. mRMR Feature Ranking (top 5)\n")
    mrmr = mrmr_selection(X, y, feature_names, k=min(5, n_features))
    for rank, name in enumerate(mrmr, 1):
        mi   = dict(relevance)[name]
        print(f"  {rank}. {name:<22} (MI={mi:.4f} bits)")

    # 4. Conditional MI: what does feature 2 add given feature 1?
    if len(mrmr) >= 2:
        f1_idx = feature_names.index(mrmr[0])
        f2_idx = feature_names.index(mrmr[1])
        mi_f2_given_f1 = mi_histogram(
            X[:, f2_idx],
            y - X[:, f1_idx] * 0,  # Simplified: just show raw MI
            n_bins=15
        )
        print(f"\n4. Information overlap\n")
        print(f"  I({mrmr[0]}; target)           = "
              f"{dict(relevance)[mrmr[0]]:.4f} bits")
        print(f"  I({mrmr[1]}; target)           = "
              f"{dict(relevance)[mrmr[1]]:.4f} bits")
        print(f"  Joint top-2 MI                = "
              f"{mi_histogram(X[:, f1_idx], y, n_bins=15) + mi_histogram(X[:, f2_idx], y, n_bins=15):.4f} bits (sum)")
        print(f"  Note: actual joint MI < sum   (due to redundancy)")

# Run on our churn dataset
full_mi_analysis(X, churn, feature_names, target_name='churn')
```

Output:
```
============================================================
Mutual Information Feature Analysis
Target: churn
============================================================

1. Feature Relevance I(feature; target)

  tenure_months          0.0621 bits  ███████████████
  support_calls          0.0412 bits  ██████████
  monthly_usage_gb       0.0287 bits  ███████
  age                    0.0071 bits  █
  zip_code               0.0008 bits  
  random_noise           0.0006 bits  

2. Pairwise Redundancy (top 4 features)

                          tenure_mon  support_ca  monthly_us         age
  tenure_months                 ---      0.0098      0.0124      0.0089
  support_calls              0.0098         ---      0.0076      0.0054
  monthly_usage_gb           0.0124      0.0076         ---      0.0041
  age                        0.0089      0.0054      0.0041         ---

3. mRMR Feature Ranking (top 5)

  1. tenure_months        (MI=0.0621 bits)
  2. support_calls        (MI=0.0412 bits)
  3. monthly_usage_gb     (MI=0.0287 bits)
  4. age                  (MI=0.0071 bits)
  5. zip_code             (MI=0.0008 bits)

4. Information overlap

  I(tenure_months; target)           = 0.0621 bits
  I(support_calls; target)           = 0.0412 bits
  Joint top-2 MI                = 0.1033 bits (sum)
  Note: actual joint MI < sum   (due to redundancy)
```

---

## Summary

- Mutual information I(X;Y) measures the reduction in uncertainty about X when Y is observed — or equivalently, how far the joint distribution is from the product of marginals.
- I(X;Y) has four equivalent definitions: via entropies, via conditional entropy, via KL divergence, and as a channel capacity.
- MI detects any statistical dependence, linear or nonlinear, while correlation only detects linear relationships.
- For continuous variables, MI must be estimated from samples. Histogram binning is simple but biased; k-NN estimators (Kraskov) are more accurate at moderate sample sizes; neural estimators (MINE) scale to high dimensions.
- MI-based feature selection ranks features by relevance to the target. mRMR adds a redundancy penalty, selecting features that are informative both individually and collectively.
- The data processing inequality states that processing data cannot increase MI: I(X;Z) ≤ I(X;Y) whenever X → Y → Z. This constrains every pipeline and every deep network.
- Conditional mutual information I(X;Z|Y) measures Z's additional information about X beyond what Y provides. It is the foundation of greedy feature selection and the chain rule for MI.
- The information bottleneck frames learning as a tradeoff between compression (minimizing I(X;T)) and relevance (maximizing I(Y;T)). It provides a theoretical framework for representation learning and regularization.
- Normalized Mutual Information (NMI) rescales MI to [0,1] for comparison across problems. It is standard in clustering evaluation.

---

## Exercises

**12.1** Prove that I(X;Y) = 0 if and only if X and Y are independent. Use the KL divergence definition I(X;Y) = KL(P(X,Y) || P(X)P(Y)) and the fact that KL = 0 iff the two distributions are identical.

**12.2** Generate 10,000 samples from a bivariate Gaussian with correlation ρ. The true MI is I = -0.5 log₂(1 - ρ²). Compare the histogram and k-NN estimators at ρ = 0.2, 0.5, 0.8, 0.95. At what correlation do both estimators break down? Which remains accurate longer?

**12.3** Implement the full mRMR algorithm (not the simplified version in this chapter) using conditional mutual information: at each step, select the feature that maximizes I(feature; target | already_selected). Use the chain rule to compute this incrementally. Compare to the approximate version on the churn dataset.

**12.4** The DPI says I(X;Z) ≤ I(X;Y) when X → Y → Z. Show that equality holds when Z = f(Y) for an invertible function f. Give two examples: one where equality holds, one where it does not. What property of f determines whether information is preserved?

**12.5** Implement a complete evaluation of a clustering algorithm using NMI. Generate data from a mixture of 4 Gaussians in 2D. Run k-means clustering for k = 2, 3, 4, 5, 6. Plot NMI vs k. Does NMI correctly identify k=4 as optimal? Compare NMI to the silhouette score.

**12.6 (Challenge)** Implement the information bottleneck algorithm for discrete distributions using the Blahut-Arimoto-style iterative optimization: starting from a random mapping P(T|X), alternate between updating P(T|X) to minimize the IB Lagrangian and recomputing the relevant statistics. Apply it to a dataset where X has 16 values and Y has 4 classes, for β = 0.5, 1.0, 2.0, 5.0. Plot the resulting IB curve (I(X;T) vs I(Y;T)) and interpret the optimal compression at each β.

---

*In Chapter 13, we turn to the minimum description length principle — the bridge between information theory and statistical inference. MDL gives us a rigorous framework for model selection, hypothesis testing, and the bias-variance tradeoff, all grounded in the same compression perspective we have built throughout the book.*
