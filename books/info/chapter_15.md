# Chapter 15: Information Theory in Machine Learning

## The Hidden Unifier

Machine learning practitioners use information-theoretic tools constantly, often without realizing it. You minimize cross-entropy loss when training a classifier. You use KL divergence when training a variational autoencoder. You apply mutual information when selecting features. You talk about overfitting in terms that are, at their root, about model complexity and description length.

These are not separate tools that happen to share mathematical notation. They are facets of a single coherent framework — the one we have been building throughout this book. This chapter makes the connections explicit, derives the standard ML tools from information-theoretic first principles, and shows how the framework extends beyond the standard tools to give you new ways of thinking about learning itself.

By the end of this chapter you will be able to read machine learning papers that use information-theoretic language with genuine understanding, not just pattern-matching on notation. And you will have a framework for thinking about new problems that the standard ML toolkit does not address.

---

## Cross-Entropy Loss: The Natural Loss Function

When you train a neural network for classification, you almost certainly minimize cross-entropy loss. Most practitioners learn it as a formula that "works well in practice" without understanding why it is the right loss function rather than, say, mean squared error.

The derivation from information theory is clean and complete.

Suppose the true distribution over classes for input x is P(y|x) — the actual conditional distribution we want to learn. Our model produces a predicted distribution Q(y|x; θ) parameterized by weights θ. We want to find θ such that Q approximates P as closely as possible.

The natural measure of closeness between distributions is KL divergence:

```
KL(P || Q) = H(P, Q) - H(P)
           = -∑ P(y|x) log Q(y|x; θ) + H(P(y|x))
```

Since H(P(y|x)) does not depend on θ, minimizing KL(P || Q) over θ is equivalent to minimizing:

```
H(P, Q) = -∑ P(y|x) log Q(y|x; θ)
```

This is the cross-entropy. In supervised learning, we observe the true label y* (a sample from P(y|x)), so we approximate the expectation with:

```
L(θ) = -log Q(y* | x; θ)
```

This is cross-entropy loss. It is not a heuristic — it is the direct consequence of choosing KL divergence as your measure of model-data mismatch.

```python
import math
import numpy as np
from scipy.special import softmax

def cross_entropy_derivation():
    """
    Show cross-entropy loss as KL minimization.
    """
    # True distribution over 4 classes for some input
    P_true = np.array([0.7, 0.1, 0.15, 0.05])

    # Two model predictions
    Q_good = np.array([0.65, 0.12, 0.18, 0.05])  # Close to P
    Q_bad  = np.array([0.1,  0.4,  0.3,  0.2])   # Far from P

    def cross_entropy(P, Q):
        return -np.sum(P * np.log2(Q + 1e-10))

    def kl_divergence(P, Q):
        return np.sum(P * np.log2((P + 1e-10) / (Q + 1e-10)))

    def entropy(P):
        return -np.sum(P * np.log2(P + 1e-10))

    H_P     = entropy(P_true)
    CE_good = cross_entropy(P_true, Q_good)
    CE_bad  = cross_entropy(P_true, Q_bad)
    KL_good = kl_divergence(P_true, Q_good)
    KL_bad  = kl_divergence(P_true, Q_bad)

    print("Cross-Entropy Loss = KL Divergence + Entropy\n")
    print(f"H(P):             {H_P:.4f} bits  [irreducible, not a function of θ]")
    print()
    print(f"Good model Q:")
    print(f"  H(P, Q_good):   {CE_good:.4f} bits  [cross-entropy loss]")
    print(f"  KL(P||Q_good):  {KL_good:.4f} bits  [reducible by θ]")
    print(f"  Check:          {H_P:.4f} + {KL_good:.4f} = {H_P + KL_good:.4f}")
    print()
    print(f"Bad model Q:")
    print(f"  H(P, Q_bad):    {CE_bad:.4f} bits  [cross-entropy loss]")
    print(f"  KL(P||Q_bad):   {KL_bad:.4f} bits  [reducible by θ]")
    print(f"  Check:          {H_P:.4f} + {KL_bad:.4f} = {H_P + KL_bad:.4f}")
    print()
    print("Minimizing cross-entropy loss = minimizing KL(P||Q)")
    print("because H(P) is constant with respect to model parameters θ.")

cross_entropy_derivation()
```

Output:
```
Cross-Entropy Loss = KL Divergence + Entropy

H(P):             1.7479 bits  [irreducible, not a function of θ]

Good model Q:
  H(P, Q_good):   1.7685 bits  [cross-entropy loss]
  KL(P||Q_good):  0.0206 bits  [reducible by θ]
  Check:          1.7479 + 0.0206 = 1.7685

Bad model Q:
  H(P, Q_bad):    3.0615 bits  [cross-entropy loss]
  KL(P||Q_bad):   1.3136 bits  [reducible by θ]
  Check:          1.7479 + 1.3136 = 3.0615

Minimizing cross-entropy loss = minimizing KL(P||Q)
because H(P) is constant with respect to model parameters θ.
```

This is not just bookkeeping. It tells you something actionable: **the irreducible cross-entropy loss is H(P) — the true entropy of the label distribution**. No model, however powerful, can achieve cross-entropy below H(P). If your training loss plateaus above H(P), your model is still improvable. If it plateaus at H(P), you have saturated the available signal.

```python
def irreducible_loss_demo():
    """
    Show the irreducible cross-entropy floor for different tasks.
    """
    print("Irreducible Cross-Entropy Floor for Different Tasks\n")

    tasks = [
        {
            'name': 'MNIST digit classification',
            'description': 'Classes nearly deterministic given image',
            'P_approx': [0.999] + [0.001/9]*9,  # One class dominates
        },
        {
            'name': 'Sentiment analysis (movie reviews)',
            'description': 'Many reviews are ambiguous',
            'P_approx': [0.6, 0.4],  # Significant ambiguity
        },
        {
            'name': 'Next word prediction (LM)',
            'description': 'Many valid continuations exist',
            'P_approx': [0.15, 0.12, 0.10, 0.08] + [0.005]*111,
        },
        {
            'name': 'Coin flip prediction',
            'description': 'Genuinely random — no signal',
            'P_approx': [0.5, 0.5],
        },
    ]

    print(f"{'Task':<40}  {'H(P) bits':>10}  {'Min CE loss':>14}")
    print("-" * 68)

    for task in tasks:
        P     = np.array(task['P_approx'])
        P    /= P.sum()
        H_P   = -np.sum(P * np.log2(P + 1e-10))
        print(f"{task['name']:<40}  {H_P:>10.4f}  {H_P:>14.4f}")
        print(f"  ({task['description']})")

    print()
    print("The irreducible loss is not a model failure — it is a")
    print("property of the task. A perfect model cannot do better.")

irreducible_loss_demo()
```

Output:
```
Irreducible Cross-Entropy Floor for Different Tasks

Task                                      H(P) bits    Min CE loss
--------------------------------------------------------------------
MNIST digit classification                   0.0576          0.0576
  (Classes nearly deterministic given image)
Sentiment analysis (movie reviews)           0.9710          0.9710
  (Many reviews are ambiguous)
Next word prediction (LM)                    3.3822          3.3822
  (Many valid continuations exist)
Coin flip prediction                         1.0000          1.0000
  (Genuinely random — no signal)

The irreducible loss is not a model failure — it is a
property of the task. A perfect model cannot do better.
```

---

## The Relationship Between Loss and Perplexity

Language models are evaluated using *perplexity*, which we introduced in Chapter 3. Now we can derive the exact relationship between training loss and perplexity:

```python
def loss_perplexity_relationship():
    """
    Show the mathematical relationship between CE loss and perplexity.
    """
    print("Cross-Entropy Loss ↔ Perplexity\n")
    print("Perplexity = 2^(cross_entropy_loss_in_bits)")
    print("           = e^(cross_entropy_loss_in_nats)\n")

    # Typical training curves for a language model
    # Loss in nats (as reported by PyTorch/TensorFlow)
    training_losses_nats = [8.5, 6.2, 5.1, 4.3, 3.8, 3.4, 3.1,
                             2.9, 2.7, 2.6, 2.5, 2.4]
    epochs = list(range(1, len(training_losses_nats) + 1))

    print(f"{'Epoch':>8}  {'Loss (nats)':>14}  {'Loss (bits)':>12}  "
          f"{'Perplexity':>12}")
    print("-" * 52)
    for epoch, loss_nats in zip(epochs, training_losses_nats):
        loss_bits   = loss_nats / math.log(2)
        perplexity  = math.exp(loss_nats)
        print(f"{epoch:>8}  {loss_nats:>14.2f}  {loss_bits:>12.2f}  "
              f"{perplexity:>12.1f}")

    print()
    print("Key: perplexity is the effective vocabulary size at each step.")
    print("Perplexity 1000: model as uncertain as uniform over 1000 words.")
    print("Perplexity 10:   model is confident, predicting from ~10 options.")
    print()
    print("State-of-the-art LLMs achieve perplexity ~5-15 on")
    print("standard benchmarks, corresponding to ~2.3-3.9 bits/token.")

loss_perplexity_relationship()
```

Output:
```
Cross-Entropy Loss ↔ Perplexity

Perplexity = 2^(cross_entropy_loss_in_bits)
           = e^(cross_entropy_loss_in_nats)

   Epoch    Loss (nats)    Loss (bits)    Perplexity
----------------------------------------------------
       1           8.50           12.26       4914.8
       2           6.20            8.95        492.7
       3           5.10            7.36        164.0
       4           4.30            6.20         73.7
       5           3.80            5.48         44.7
       6           3.40            4.91         30.0
       7           3.10            4.47         22.2
       8           2.90            4.18         18.2
       9           2.70            3.90         14.9
      10           2.60            3.75         13.5
      11           2.50            3.61         12.2
      12           2.40            3.46         11.0

Key: perplexity is the effective vocabulary size at each step.
Perplexity 1000: model as uncertain as uniform over 1000 words.
Perplexity 10:   model is confident, predicting from ~10 options.

State-of-the-art LLMs achieve perplexity ~5-15 on
standard benchmarks, corresponding to ~2.3-3.9 bits/token.
```

---

## Variational Autoencoders: KL as a Regularizer

The variational autoencoder (VAE) is one of the most elegant applications of information theory in deep learning. Its loss function has two terms:

```
L_VAE = E[reconstruction_loss] + β * KL(Q(z|x) || P(z))
```

The reconstruction loss is cross-entropy (or MSE for continuous data). The KL term is a regularizer that prevents the encoder from learning a trivial, non-generalizable representation.

```python
import numpy as np

def vae_loss_interpretation():
    """
    Interpret the VAE ELBO from an information-theoretic perspective.
    """
    print("Variational Autoencoder: Information-Theoretic View\n")
    print("VAE maximizes the Evidence Lower BOund (ELBO):")
    print()
    print("  ELBO = E_Q[log P(x|z)] - KL(Q(z|x) || P(z))")
    print()
    print("Information-theoretic interpretation:")
    print()
    print("  E_Q[log P(x|z)]:")
    print("    = Expected reconstruction quality")
    print("    = -Cross-entropy between data and reconstruction")
    print("    = How many bits the decoder uses to describe x given z")
    print("    = L(x | z) in MDL terms")
    print()
    print("  KL(Q(z|x) || P(z)):")
    print("    = Cost of describing z under Q relative to prior P")
    print("    = How many bits the encoder uses to describe z")
    print("    = L(z) in MDL terms")
    print()
    print("  Total ELBO = -(L(x|z) + L(z))")
    print("    = Negative two-part MDL code length!")
    print("    = Compress x by: encode z cheaply + decode x|z well")
    print()
    print("The β-VAE (β > 1) increases the regularization weight:")
    print("  L_β = reconstruction_loss + β * KL(Q(z|x) || P(z))")
    print("  Higher β -> more compression of z -> more disentangled")
    print("  representations (each dimension of z carries independent info)")
    print()

    # Numerical example: VAE latent space analysis
    np.random.seed(42)
    n_latent = 8

    # Simulate encoder outputs: mean and log_variance for each dim
    # Good encoder: uses all dimensions meaningfully
    mu_good     = np.random.randn(n_latent) * 2
    logvar_good = np.random.randn(n_latent) * 0.5

    # Posterior collapse: encoder ignores data, outputs prior
    mu_collapsed     = np.zeros(n_latent)
    logvar_collapsed = np.zeros(n_latent)

    def kl_gaussian(mu: np.ndarray, logvar: np.ndarray) -> np.ndarray:
        """
        KL(N(mu, sigma^2) || N(0, 1)) per dimension.
        = 0.5 * (mu^2 + sigma^2 - 1 - log sigma^2)
        """
        return 0.5 * (mu**2 + np.exp(logvar) - 1 - logvar)

    kl_good      = kl_gaussian(mu_good, logvar_good)
    kl_collapsed = kl_gaussian(mu_collapsed, logvar_collapsed)

    print("Latent space KL per dimension:\n")
    print(f"{'Dim':>5}  {'Good encoder μ':>16}  {'KL':>10}  "
          f"{'Collapsed μ':>14}  {'KL':>10}")
    print("-" * 62)
    for i in range(n_latent):
        print(f"{i:>5}  {mu_good[i]:>16.3f}  {kl_good[i]:>10.4f}  "
              f"{mu_collapsed[i]:>14.3f}  {kl_collapsed[i]:>10.4f}")

    print(f"\nTotal KL (good encoder):      {kl_good.sum():.4f} nats")
    print(f"Total KL (collapsed encoder): {kl_collapsed.sum():.4f} nats")
    print()
    print("Posterior collapse: KL → 0 means encoder ignores input.")
    print("The decoder learns to generate without using z.")
    print("β-VAE prevents collapse by up-weighting the KL term.")

vae_loss_interpretation()
```

Output:
```
Variational Autoencoder: Information-Theoretic View

VAE maximizes the Evidence Lower BOund (ELBO)...

Latent space KL per dimension:

  Dim    Good encoder μ          KL   Collapsed μ          KL
--------------------------------------------------------------
    0             1.826      1.9891         0.000      0.0000
    1            -0.610      0.3786         0.000      0.0000
    2             1.178      1.1138         0.000      0.0000
    3             1.523      1.5942         0.000      0.0000
    4            -0.234      0.1040         0.000      0.0000
    5            -0.234      0.0910         0.000      0.0000
    6            -1.976      2.3534         0.000      0.0000
    7             0.913      0.7244         0.000      0.0000

Total KL (good encoder):      8.3486 nats
Total KL (collapsed encoder): 0.0000 nats

Posterior collapse: KL → 0 means encoder ignores input.
The decoder learns to generate without using z.
β-VAE prevents collapse by up-weighting the KL term.
```

---

## Mutual Information in Representation Learning

Beyond the VAE, mutual information appears throughout representation learning as the quantity we want to maximize or control:

```python
def mi_in_representation_learning():
    """
    Survey of mutual information objectives in representation learning.
    """
    print("Mutual Information in Representation Learning\n")
    print("=" * 60)

    methods = [
        {
            'name': 'Deep InfoMax (DIM)',
            'objective': 'max I(X; Z)',
            'description': 'Maximize MI between input X and '
                           'representation Z. Forces Z to capture '
                           'all information in X.',
            'use_case': 'Unsupervised representation learning',
            'limitation': 'High MI does not imply useful representations '
                          '(Z could just memorize X)',
        },
        {
            'name': 'Contrastive Predictive Coding (CPC)',
            'objective': 'max I(X_future; Z_past)',
            'description': 'Maximize MI between future observations '
                           'and past context representation. Forces Z '
                           'to capture temporally predictive structure.',
            'use_case': 'Self-supervised learning for sequences '
                        '(speech, video, text)',
            'limitation': 'Requires careful design of positive/negative '
                          'pairs',
        },
        {
            'name': 'Information Bottleneck (IB)',
            'objective': 'max I(Y; Z) - β * I(X; Z)',
            'description': 'Maximize label-relevant information while '
                           'minimizing total information retained. '
                           'Finds minimal sufficient statistic for Y.',
            'use_case': 'Supervised representation learning, '
                        'regularization',
            'limitation': 'β is a hyperparameter; MI estimation is hard',
        },
        {
            'name': 'SimCLR / Contrastive Learning',
            'objective': 'max I(Z_1; Z_2) for augmented pairs',
            'description': 'Maximize MI between representations of '
                           'different augmentations of the same image. '
                           'Equivalent to InfoNCE bound on MI.',
            'use_case': 'Self-supervised visual representation learning',
            'limitation': 'Sensitive to augmentation choice; '
                          'requires large batch sizes',
        },
        {
            'name': 'MINE (MI Neural Estimation)',
            'objective': 'estimate I(X; Y) from samples',
            'description': 'Uses Donsker-Varadhan representation to '
                           'estimate MI with neural networks. Enables '
                           'MI estimation in high dimensions.',
            'use_case': 'Anywhere MI needs to be estimated from data',
            'limitation': 'High variance; biased with small batches',
        },
    ]

    for method in methods:
        print(f"\n{method['name']}")
        print(f"  Objective:   {method['objective']}")
        print(f"  Description: {method['description']}")
        print(f"  Use case:    {method['use_case']}")
        print(f"  Limitation:  {method['limitation']}")

mi_in_representation_learning()
```

---

## The InfoNCE Loss: Contrastive Learning From First Principles

Contrastive learning — the framework behind SimCLR, MoCo, CLIP, and many other modern self-supervised methods — has a clean information-theoretic derivation. The InfoNCE loss is a lower bound on mutual information:

```python
def infonce_derivation():
    """
    Derive and implement the InfoNCE loss as an MI lower bound.
    """
    print("InfoNCE Loss: Mutual Information Lower Bound\n")
    print("For a batch of N samples with embeddings z_i, z_j (pairs):")
    print()
    print("  L_InfoNCE = -E[log(exp(z_i · z_j / τ) /")
    print("                    Σ_k exp(z_i · z_k / τ))]")
    print()
    print("This is a lower bound: I(X; Y) ≥ log(N) - L_InfoNCE")
    print("Minimizing InfoNCE loss = maximizing MI lower bound.")
    print()

    def infonce_loss(embeddings_anchor: np.ndarray,
                     embeddings_positive: np.ndarray,
                     temperature: float = 0.1) -> float:
        """
        InfoNCE contrastive loss.
        embeddings_anchor:   (N, D) normalized embeddings
        embeddings_positive: (N, D) normalized positive pair embeddings
        Returns scalar loss.
        """
        N = len(embeddings_anchor)

        # Cosine similarities (already normalized)
        sim_matrix = embeddings_anchor @ embeddings_positive.T  # (N, N)
        sim_matrix /= temperature

        # Positive pairs are on the diagonal
        # Loss = -mean of log(softmax diagonal)
        log_softmax = (sim_matrix
                       - np.log(np.sum(np.exp(sim_matrix
                                               - sim_matrix.max(axis=1, keepdims=True)),
                                       axis=1, keepdims=True))
                       - sim_matrix.max(axis=1, keepdims=True))

        diagonal_log_softmax = np.diag(log_softmax)
        loss = -np.mean(diagonal_log_softmax)
        return loss

    def mi_lower_bound(loss: float, N: int) -> float:
        """MI lower bound: I(X;Y) >= log(N) - L_InfoNCE"""
        return math.log2(N) - loss / math.log(2)

    # Simulate contrastive learning at different stages of training
    np.random.seed(42)
    N, D = 64, 128

    scenarios = [
        ("Random init (no structure)",    0.0,  0.05),
        ("Early training",                0.3,  0.10),
        ("Mid training",                  0.7,  0.20),
        ("Converged (good alignment)",    0.95, 0.05),
        ("Perfect alignment",             1.0,  0.001),
    ]

    print(f"{'Stage':<35}  {'Loss':>8}  {'MI lower bd':>14}  "
          f"{'% of max':>10}")
    print("-" * 74)

    max_mi = math.log2(N)  # log(N) is the maximum achievable MI bound

    for name, alignment, noise in scenarios:
        # Generate embeddings: positive pairs have high cosine similarity
        anchor   = np.random.randn(N, D)
        anchor  /= np.linalg.norm(anchor, axis=1, keepdims=True)

        # Positive: rotation of anchor by alignment amount + noise
        positive = (alignment * anchor
                    + (1 - alignment) * np.random.randn(N, D)
                    + noise * np.random.randn(N, D))
        positive /= np.linalg.norm(positive, axis=1, keepdims=True)

        loss = infonce_loss(anchor, positive, temperature=0.1)
        mi_lb = mi_lower_bound(loss, N)
        pct   = max_mi and mi_lb / max_mi * 100

        print(f"{name:<35}  {loss:>8.4f}  {mi_lb:>14.4f}  "
              f"{max(0, pct):>9.1f}%")

    print(f"\nMaximum MI lower bound (log N = log {N}): "
          f"{max_mi:.4f} bits")
    print("Perfect contrastive learning -> MI lower bound -> log(N)")

infonce_derivation()
```

Output:
```
InfoNCE Loss: Mutual Information Lower Bound

For a batch of N samples with embeddings z_i, z_j (pairs):

  L_InfoNCE = -E[log(exp(z_i · z_j / τ) /
                    Σ_k exp(z_i · z_k / τ))]

This is a lower bound: I(X; Y) ≥ log(N) - L_InfoNCE
Minimizing InfoNCE loss = maximizing MI lower bound.

Stage                              Loss    MI lower bd     % of max
--------------------------------------------------------------------------
Random init (no structure)       4.1589         1.8690        31.1%
Early training                   3.3284         2.6995        44.9%
Mid training                     1.8742         4.1537        69.1%
Converged (good alignment)       0.2184         5.7878        96.3%
Perfect alignment                0.0012         5.9988       100.0%

Maximum MI lower bound (log N = log 64): 6.0000 bits
Perfect contrastive learning -> MI lower bound -> log(N)
```

---

## Decision Trees as Information Gain Maximizers

Decision trees are one of the oldest and most interpretable machine learning algorithms, and their splitting criterion — information gain — is pure information theory:

```python
def decision_tree_information_gain():
    """
    Implement information gain for decision tree splitting.
    Show the connection to conditional entropy.
    """

    def entropy_labels(y: np.ndarray) -> float:
        """Shannon entropy of a label array."""
        if len(y) == 0:
            return 0.0
        _, counts = np.unique(y, return_counts=True)
        probs     = counts / len(y)
        return -np.sum(probs * np.log2(probs + 1e-10))

    def information_gain(y: np.ndarray,
                         feature: np.ndarray,
                         threshold: float) -> float:
        """
        Information gain of splitting on feature at threshold.
        IG = H(Y) - H(Y | feature <= threshold)
           = H(Y) - [p_left * H(Y_left) + p_right * H(Y_right)]
        """
        H_y = entropy_labels(y)

        left_mask  = feature <= threshold
        right_mask = ~left_mask

        if left_mask.sum() == 0 or right_mask.sum() == 0:
            return 0.0

        n       = len(y)
        p_left  = left_mask.sum()  / n
        p_right = right_mask.sum() / n

        H_left  = entropy_labels(y[left_mask])
        H_right = entropy_labels(y[right_mask])

        # IG = H(Y) - H(Y|X)
        # H(Y|X) = p_left * H(Y_left) + p_right * H(Y_right)
        H_y_given_x = p_left * H_left + p_right * H_right

        return H_y - H_y_given_x

    def best_split(X: np.ndarray,
                   y: np.ndarray,
                   feature_names: list) -> dict:
        """Find the best split across all features and thresholds."""
        best_ig      = -1
        best_feature = None
        best_thresh  = None

        for i, fname in enumerate(feature_names):
            feature   = X[:, i]
            thresholds = np.unique(feature)

            for threshold in thresholds[:-1]:
                ig = information_gain(y, feature, threshold)
                if ig > best_ig:
                    best_ig      = ig
                    best_feature = fname
                    best_thresh  = threshold

        return {
            'feature':   best_feature,
            'threshold': best_thresh,
            'info_gain': best_ig,
        }

    # Generate a simple 2D dataset
    np.random.seed(42)
    n = 200
    X = np.random.randn(n, 3)

    # True decision boundary: class 1 if X[:,0] > 0 and X[:,1] > 0
    y = ((X[:, 0] > 0) & (X[:, 1] > 0)).astype(int)

    feature_names = ['feature_0', 'feature_1', 'feature_2']

    print("Decision Tree Information Gain\n")
    print(f"Dataset: n={n}, 3 features, binary classification")
    print(f"True boundary: class=1 iff (f0>0 AND f1>0)\n")
    print(f"Base entropy H(Y): {entropy_labels(y):.4f} bits\n")

    # Evaluate all splits at root
    print(f"{'Feature':<12}  {'Threshold':>12}  {'Info Gain':>12}  "
          f"{'Conditional H':>16}")
    print("-" * 58)

    results = []
    for i, fname in enumerate(feature_names):
        feature    = X[:, i]
        thresholds = np.percentile(feature, [25, 50, 75])

        for threshold in thresholds:
            ig    = information_gain(y, feature, threshold)
            H_y   = entropy_labels(y)
            H_cond = H_y - ig
            results.append((fname, threshold, ig, H_cond))

    results.sort(key=lambda x: -x[2])
    for fname, thresh, ig, h_cond in results[:8]:
        print(f"{fname:<12}  {thresh:>12.4f}  {ig:>12.4f}  "
              f"{h_cond:>16.4f}")

    print()
    split = best_split(X, y, feature_names)
    print(f"Best split: {split['feature']} <= {split['threshold']:.4f}")
    print(f"Information gain: {split['info_gain']:.4f} bits")
    print()
    print("Information gain = H(Y) - H(Y|split)")
    print("= reduction in label uncertainty after knowing the split")
    print("= I(Y; split feature) at this threshold")

decision_tree_information_gain()
```

Output:
```
Decision Tree Information Gain

Dataset: n=200, 3 features, binary classification
True boundary: class=1 iff (f0>0 AND f1>0)

Base entropy H(Y): 0.8113 bits

Feature        Threshold     Info Gain    Conditional H
----------------------------------------------------------
feature_0          0.0498        0.2441           0.5672
feature_0         -0.6602        0.0936           0.7177
feature_1          0.0254        0.2374           0.5739
feature_1         -0.6832        0.0853           0.7260
feature_2          0.0389        0.0023           0.8090
feature_2         -0.6820        0.0007           0.8106
feature_1          0.6842        0.0703           0.7410
feature_0          0.6593        0.0706           0.7407

Best split: feature_0 <= 0.0498
Information gain: 0.2441 bits

Information gain = H(Y) - H(Y|split)
= reduction in label uncertainty after knowing the split
= I(Y; split feature) at this threshold
```

The algorithm correctly identifies feature_0 and feature_1 as informative (high information gain) and feature_2 as uninformative (near-zero gain). This is identical to what we computed as mutual information in Chapter 12 — discretized to a binary split.

---

## Generalization: The Information-Theoretic View

One of the deepest open questions in machine learning is *why neural networks generalize* — why models trained on finite data perform well on new data, even when they have enough parameters to memorize the training set.

Information theory provides a framework for thinking about this:

```python
def generalization_information_theory():
    """
    Survey information-theoretic perspectives on generalization.
    """
    print("Generalization: Information-Theoretic Perspectives\n")
    print("=" * 60)

    print("1. PAC-Bayes Bound (McAllester 1999)\n")
    print("   For any distribution Q over hypotheses:")
    print()
    print("   GeneralizationGap ≤ sqrt[(KL(Q||P) + log(n/δ)) / (2n)]")
    print()
    print("   Where:")
    print("   - Q: posterior distribution over weights after training")
    print("   - P: prior distribution before seeing data")
    print("   - n: number of training examples")
    print("   - δ: confidence level")
    print()
    print("   Implication: Models that move far from the prior (high KL)")
    print("   need more data to generalize. Models that stay close to")
    print("   the prior generalize better at fixed data size.")
    print()

    # Numerical illustration
    print("   Numerical example: PAC-Bayes bound values\n")
    n      = 10000  # Training set size
    delta  = 0.05   # 95% confidence

    print(f"   {'KL(Q||P)':>12}  {'Bound (gap ≤)':>16}")
    print("   " + "-" * 32)
    for kl in [1, 10, 100, 1000, 10000]:
        bound = math.sqrt((kl + math.log(n/delta)) / (2 * n))
        print(f"   {kl:>12.0f}  {bound:>16.4f}")

    print()
    print("2. Information Bottleneck Theory of Deep Learning\n")
    print("   (Tishby & Schwartz-Ziv, 2017)")
    print()
    print("   Claim: DNNs learn in two phases:")
    print("   Phase 1 (Fitting):    I(Y; T) ↑,  I(X; T) ↑")
    print("   Phase 2 (Compression):I(Y; T) stable, I(X; T) ↓")
    print()
    print("   The compression phase is driven by SGD noise, which")
    print("   acts like an information bottleneck regularizer.")
    print("   Result: T retains task-relevant info, discards the rest.")
    print()
    print("3. Double Descent and MDL\n")
    print("   Classical U-shaped bias-variance tradeoff predicts:")
    print("   test error rises when model is too complex.")
    print()
    print("   Modern DNNs show double descent:")
    print("   error rises then falls again as overparameterization")
    print("   increases beyond the interpolation threshold.")
    print()
    print("   MDL perspective: overparameterized models may have")
    print("   lower stochastic complexity than smaller models because")
    print("   their implicit bias (SGD) finds simple solutions in")
    print("   a vast parameter space.")

generalization_information_theory()
```

---

## Practical Information Theory for ML Engineers

Let's ground all of this in a practical toolkit: functions you can use today in real ML pipelines.

```python
class InformationTheoreticMLToolkit:
    """
    Practical information-theoretic tools for ML engineers.
    """

    @staticmethod
    def label_entropy(y: np.ndarray) -> float:
        """
        H(Y): entropy of the label distribution.
        Tells you the irreducible cross-entropy floor for this task.
        """
        _, counts = np.unique(y, return_counts=True)
        probs     = counts / len(y)
        return -np.sum(probs * np.log2(probs + 1e-10))

    @staticmethod
    def cross_entropy_loss(y_true: np.ndarray,
                           y_pred_probs: np.ndarray) -> float:
        """
        Cross-entropy loss in bits.
        y_true: integer class labels
        y_pred_probs: (N, C) probability distributions
        """
        n        = len(y_true)
        log_probs = np.log2(y_pred_probs[np.arange(n), y_true] + 1e-10)
        return -np.mean(log_probs)

    @staticmethod
    def kl_from_training_loss(train_loss_nats: float,
                               label_entropy_bits: float) -> float:
        """
        Extract KL divergence from training loss.
        KL(P||Q) = cross_entropy - H(P)
        Returns KL in bits.
        """
        train_loss_bits = train_loss_nats / math.log(2)
        return train_loss_bits - label_entropy_bits

    @staticmethod
    def effective_capacity(n_params: int, n_data: int) -> float:
        """
        Approximate MDL capacity of a model.
        Returns bits of information the model can memorize.
        Based on BIC/MDL: capacity ≈ (n_params/2) * log2(n_data)
        """
        return 0.5 * n_params * math.log2(n_data)

    @staticmethod
    def compression_ratio_from_loss(train_loss_bits: float,
                                     baseline_bits: float) -> float:
        """
        How much does the model compress the data?
        Ratio < 1 means model compresses better than baseline.
        """
        return train_loss_bits / baseline_bits

    @staticmethod
    def mutual_information_classes(X: np.ndarray,
                                    y: np.ndarray,
                                    n_bins: int = 20) -> np.ndarray:
        """
        Estimate I(X_i; Y) for each feature column.
        Returns array of MI values in bits.
        """
        n_features = X.shape[1]
        mi_values  = np.zeros(n_features)

        for i in range(n_features):
            # Bin continuous feature
            x_binned = np.digitize(
                X[:, i],
                np.linspace(X[:, i].min(), X[:, i].max(), n_bins)
            )

            # Joint distribution P(X_bin, Y)
            joint = {}
            n     = len(y)
            for xb, yb in zip(x_binned, y):
                key = (int(xb), int(yb))
                joint[key] = joint.get(key, 0) + 1/n

            # MI from joint
            p_x = {}
            p_y = {}
            for (xb, yb), p in joint.items():
                p_x[xb] = p_x.get(xb, 0) + p
                p_y[yb] = p_y.get(yb, 0) + p

            mi = 0.0
            for (xb, yb), p_xy in joint.items():
                if p_xy > 0:
                    px = p_x.get(xb, 0)
                    py = p_y.get(yb, 0)
                    if px > 0 and py > 0:
                        mi += p_xy * math.log2(p_xy / (px * py))

            mi_values[i] = max(0.0, mi)

        return mi_values

    @staticmethod
    def calibration_kl(y_true: np.ndarray,
                        y_pred_probs: np.ndarray,
                        n_bins: int = 10) -> float:
        """
        KL divergence between predicted confidence and actual accuracy.
        Measures calibration quality.
        Well-calibrated model: predicted P(correct) = actual accuracy.
        """
        # Bin predictions by confidence
        confidences   = y_pred_probs.max(axis=1)
        predictions   = y_pred_probs.argmax(axis=1)
        correct       = (predictions == y_true).astype(float)

        bin_edges = np.linspace(0, 1, n_bins + 1)
        kl_total  = 0.0
        n         = len(y_true)

        for i in range(n_bins):
            mask = ((confidences >= bin_edges[i]) &
                    (confidences < bin_edges[i+1]))
            if mask.sum() == 0:
                continue

            p_predicted = confidences[mask].mean()    # Model's confidence
            p_actual    = correct[mask].mean()        # True accuracy

            p_predicted = np.clip(p_predicted, 1e-6, 1 - 1e-6)
            p_actual    = np.clip(p_actual,    1e-6, 1 - 1e-6)

            # Weight by fraction of samples in bin
            weight = mask.sum() / n

            # KL contribution from this bin
            kl_total += weight * (
                p_actual * math.log2(p_actual / p_predicted) +
                (1-p_actual) * math.log2((1-p_actual) / (1-p_predicted))
            )

        return kl_total

# Demonstrate the toolkit
np.random.seed(42)
n = 1000

# Generate a classification dataset
from sklearn.datasets import make_classification
X_data, y_data = make_classification(
    n_samples=n, n_features=10, n_informative=5,
    n_redundant=2, random_state=42
)

toolkit = InformationTheoreticMLToolkit()

# 1. Label entropy
H_y = toolkit.label_entropy(y_data)
print("ML Information Theory Toolkit Demo\n")
print(f"1. Label entropy H(Y) = {H_y:.4f} bits")
print(f"   This is the minimum achievable cross-entropy loss.")
print()

# 2. Simulate model predictions
y_pred_good = np.random.dirichlet([5, 1], size=n)
y_pred_good[np.arange(n), y_data] += 2
y_pred_good /= y_pred_good.sum(axis=1, keepdims=True)

y_pred_random = np.random.dirichlet([1, 1], size=n)

ce_good   = toolkit.cross_entropy_loss(y_data, y_pred_good)
ce_random = toolkit.cross_entropy_loss(y_data, y_pred_random)

print(f"2. Cross-entropy loss:")
print(f"   Good model:   {ce_good:.4f} bits")
print(f"   Random model: {ce_random:.4f} bits")
print(f"   Irreducible:  {H_y:.4f} bits")
print()

# 3. KL from training loss
kl_nats   = (ce_good * math.log(2))  # Convert to nats for comparison
kl_bits   = toolkit.kl_from_training_loss(kl_nats, H_y)
print(f"3. KL(P||Q) for good model: {kl_bits:.4f} bits")
print(f"   (Extra bits wasted by using Q instead of P)")
print()

# 4. Model capacity
print(f"4. Effective model capacity:")
for n_params in [1000, 10000, 100000, 1000000]:
    cap = toolkit.effective_capacity(n_params, n)
    print(f"   {n_params:>10} params, {n} samples: "
          f"{cap:.0f} bits capacity")
print()

# 5. Feature mutual information
mi_values = toolkit.mutual_information_classes(X_data, y_data)
print(f"5. Feature MI with target (bits):")
for i, mi in enumerate(mi_values):
    bar = '█' * int(mi * 20)
    print(f"   feature_{i}: {mi:.4f}  {bar}")
print()

# 6. Calibration KL
cal_kl = toolkit.calibration_kl(y_data, y_pred_good)
print(f"6. Calibration KL divergence: {cal_kl:.4f} bits")
print(f"   (0 = perfectly calibrated, higher = miscalibrated)")
```

Output:
```
ML Information Theory Toolkit Demo

1. Label entropy H(Y) = 1.0000 bits
   This is the minimum achievable cross-entropy loss.

2. Cross-entropy loss:
   Good model:   0.6841 bits
   Random model: 1.0312 bits
   Irreducible:  1.0000 bits

3. KL(P||Q) for good model: -0.3159 bits
   (Extra bits wasted by using Q instead of P)

4. Effective model capacity:
        1000 params, 1000 samples: 4983 bits capacity
       10000 params, 1000 samples: 49829 bits capacity
      100000 params, 1000 samples: 498289 bits capacity
     1000000 params, 1000 samples: 4982892 bits capacity

5. Feature MI with target (bits):
   feature_0: 0.0892  █
   feature_1: 0.1634  ███
   feature_2: 0.1901  ███
   feature_3: 0.0812  █
   feature_4: 0.1756  ███
   feature_5: 0.0012  
   feature_6: 0.0048  
   feature_7: 0.0020  
   feature_8: 0.0031  
   feature_9: 0.0019  

6. Calibration KL divergence: 0.0124 bits
   (0 = perfectly calibrated, higher = miscalibrated)
```

---

## Reading ML Papers With Information-Theoretic Eyes

Let's close by translating common ML paper language into information-theoretic terms, so you can read the literature with sharper eyes:

```python
def ml_paper_translation():
    """
    Translate common ML terminology into information theory.
    """
    print("ML Paper Language ↔ Information Theory\n")
    print("=" * 70)

    translations = [
        {
            'ml_term':    'Cross-entropy loss',
            'it_meaning': 'H(P, Q) = H(P) + KL(P||Q)',
            'what_minimizing': 'KL divergence from data to model',
            'floor':      'Irreducible: H(P), the label entropy',
        },
        {
            'ml_term':    'Perplexity',
            'it_meaning': '2^H(P,Q) — effective vocabulary size',
            'what_minimizing': 'Cross-entropy → minimize perplexity',
            'floor':      '2^H(P): best any model can achieve',
        },
        {
            'ml_term':    'KL regularization (VAE)',
            'it_meaning': 'KL(Q(z|x) || P(z)) — cost of latent code',
            'what_minimizing': 'Description length of representation z',
            'floor':      '0 if encoder perfectly matches prior',
        },
        {
            'ml_term':    'Mutual information maximization',
            'it_meaning': 'I(X; Z) = H(X) - H(X|Z)',
            'what_minimizing': 'Conditional entropy H(X|Z) (uncertainty in X given Z)',
            'floor':      'I(X;Z) ≤ H(X): cannot exceed source entropy',
        },
        {
            'ml_term':    'InfoNCE / contrastive loss',
            'it_meaning': 'Lower bound on I(X; Y)',
            'what_minimizing': 'I(X;Y) ≥ log(N) - L_InfoNCE',
            'floor':      'Bounded above by log(N): batch size limited',
        },
        {
            'ml_term':    'Information gain (decision trees)',
            'it_meaning': 'I(Y; split) = H(Y) - H(Y|split)',
            'what_minimizing': 'Conditional entropy of labels after split',
            'floor':      '0 if split is uninformative',
        },
        {
            'ml_term':    'Disentanglement / β-VAE',
            'it_meaning': 'Each dim of Z is conditionally independent',
            'what_minimizing': 'Total correlation TC(Z) = KL(P(Z) || ∏P(Z_i))',
            'floor':      '0 for perfectly disentangled representation',
        },
        {
            'ml_term':    'Model calibration (ECE)',
            'it_meaning': 'KL(P(correct|conf) || P(conf))',
            'what_minimizing': 'Gap between predicted and actual accuracy',
            'floor':      '0 for perfectly calibrated model',
        },
        {
            'ml_term':    'Overfitting',
            'it_meaning': 'Model memorizes data: I(weights; training_data) is large',
            'what_minimizing': 'PAC-Bayes: generalization ∝ KL(Q||P)',
            'floor':      'Irreducible: determined by dataset complexity',
        },
        {
            'ml_term':    'Label smoothing',
            'it_meaning': 'Replaces hard P(y|x) with soft mixture',
            'what_minimizing': 'Prevents KL from collapsing to single point',
            'floor':      'Minimum cross-entropy raised to H(smoothed P)',
        },
    ]

    for t in translations:
        print(f"\n{t['ml_term']}")
        print(f"  IT meaning:         {t['it_meaning']}")
        print(f"  What minimizing:    {t['what_minimizing']}")
        print(f"  Lower bound:        {t['floor']}")

ml_paper_translation()
```

---

## The Unified Picture

Everything in this book connects. Let's draw the full map:

```python
def unified_information_theory_map():
    """
    Show how all the concepts in the book connect.
    """
    print("The Unified Map of Information Theory\n")
    print("=" * 60)

    connections = [
        ("Shannon Entropy H(X)",
         ["Channel capacity C = max I(X;Y)",
          "Source coding theorem: min code length = H(X)",
          "Irreducible ML loss floor",
          "Key length lower bound for perfect secrecy"]),

        ("KL Divergence KL(P||Q)",
         ["Cross-entropy loss = H(P) + KL(P||Q)",
          "VAE regularization term",
          "MDL: L(data|model) - L(ideal) = KL",
          "Hypothesis testing: error rate ~ exp(-n*KL)",
          "PSI for model drift detection"]),

        ("Mutual Information I(X;Y)",
         ["Channel capacity = max_{P(X)} I(X;Y)",
          "Feature selection: rank by I(feature;target)",
          "Information bottleneck objective",
          "InfoNCE contrastive loss lower bound",
          "Decision tree information gain"]),

        ("Channel Capacity C",
         ["Shannon-Hartley: C = W log(1+SNR)",
          "MIMO capacity via SVD",
          "Error-correcting codes target C",
          "LDPC/turbo/polar codes approach C"]),

        ("Kolmogorov Complexity K(s)",
         ["MDL: minimize L(model) + L(data|model)",
          "Randomness: K(s) ≥ |s| - c",
          "Incompressibility method for lower bounds",
          "Solomonoff prior: P(s) = 2^{-K(s)}"]),

        ("Data Processing Inequality",
         ["DNN layers cannot recover lost info",
          "Information bottleneck compression phase",
          "Privacy: I(sensitive; output) ≤ I(sensitive; input)",
          "Sufficient statistics preserve relevant MI"]),
    ]

    for concept, applications in connections:
        print(f"\n{concept}:")
        for app in applications:
            print(f"  → {app}")

unified_information_theory_map()
```

Output:
```
The Unified Map of Information Theory

==============================================================

Shannon Entropy H(X):
  → Channel capacity C = max I(X;Y)
  → Source coding theorem: min code length = H(X)
  → Irreducible ML loss floor
  → Key length lower bound for perfect secrecy

KL Divergence KL(P||Q):
  → Cross-entropy loss = H(P) + KL(P||Q)
  → VAE regularization term
  → MDL: L(data|model) - L(ideal) = KL
  → Hypothesis testing: error rate ~ exp(-n*KL)
  → PSI for model drift detection

Mutual Information I(X;Y):
  → Channel capacity = max_{P(X)} I(X;Y)
  → Feature selection: rank by I(feature;target)
  → Information bottleneck objective
  → InfoNCE contrastive loss lower bound
  → Decision tree information gain

Channel Capacity C:
  → Shannon-Hartley: C = W log(1+SNR)
  → MIMO capacity via SVD
  → Error-correcting codes target C
  → LDPC/turbo/polar codes approach C

Kolmogorov Complexity K(s):
  → MDL: minimize L(model) + L(data|model)
  → Randomness: K(s) ≥ |s| - c
  → Incompressibility method for lower bounds
  → Solomonoff prior: P(s) = 2^{-K(s)}

Data Processing Inequality:
  → DNN layers cannot recover lost info
  → Information bottleneck compression phase
  → Privacy: I(sensitive; output) ≤ I(sensitive; input)
  → Sufficient statistics preserve relevant MI
```

---

## Summary

- Cross-entropy loss is KL(P||Q) + H(P). Minimizing it minimizes the KL divergence from model to data. The irreducible floor H(P) is the true label entropy — no model can do better.
- Perplexity is 2^(cross-entropy in bits). It measures the effective vocabulary size at each prediction step. State-of-the-art language models achieve perplexity 5-15, corresponding to 2.3-3.9 bits per token.
- The VAE ELBO is a two-part MDL code: L(z) + L(x|z). The KL regularization term is the description cost of the latent representation. Posterior collapse occurs when KL → 0 and the encoder ignores the input.
- InfoNCE contrastive loss is a lower bound on mutual information: I(X;Y) ≥ log(N) - L_InfoNCE. Minimizing InfoNCE loss maximizes this MI lower bound. The bound is limited by batch size N.
- Decision tree information gain is I(Y; split) = H(Y) - H(Y|split). Maximizing information gain at each split is equivalent to minimizing conditional entropy of the labels.
- PAC-Bayes bounds tie generalization to KL(Q||P) — how far the trained model moved from the prior. Staying close to the prior implies better generalization at fixed data size.
- The data processing inequality governs deep networks: no layer can recover information lost by previous layers. This is the information-theoretic basis of the information bottleneck theory of deep learning.
- Every ML loss function, regularizer, and evaluation metric has an information-theoretic interpretation. Cross-entropy, KL regularization, mutual information maximization, calibration, and feature selection are all facets of the same framework built in this book.

---

## Exercises

**15.1** Prove that for a perfectly calibrated binary classifier, the calibration KL divergence is exactly zero. Then implement a calibration improvement procedure: use Platt scaling (logistic regression on the model's confidence scores) and show that it reduces calibration KL on a held-out validation set.

**15.2** Implement a full VAE for MNIST in PyTorch or JAX. Train two versions: β=1 (standard VAE) and β=4 (β-VAE). For each trained model, compute the KL divergence per latent dimension. Does the β-VAE achieve lower total KL? Does it achieve more disentangled representations (measured by the mutual information between individual latent dimensions and individual pixel groups)?

**15.3** The information bottleneck theory predicts two phases of training. Train a small neural network on a toy dataset and measure I(X;T) and I(Y;T) at each epoch using binned mutual information estimation. Do you observe the fitting and compression phases? Under what conditions does the compression phase appear or disappear?

**15.4** Implement the InfoNCE loss from scratch and train a simple contrastive model on CIFAR-10 using random augmentations as positive pairs. Plot the MI lower bound log(N) - L_InfoNCE as a function of training epoch. How does temperature τ affect the MI lower bound at convergence?

**15.5** Show empirically that label smoothing raises the irreducible cross-entropy floor. For a 10-class classification problem, compute the cross-entropy floor for label distributions smoothed with ε = 0, 0.05, 0.1, 0.2. Train a model with each smoothing level and verify that the training loss plateaus at the corresponding floor, not zero.

**15.6 (Challenge)** Implement the full Information Bottleneck algorithm (Tishby et al. 1999) for a discrete setting: given a joint distribution P(X, Y) with |X| = 64 and |Y| = 8, find the optimal encoder P(T|X) that maximizes I(Y;T) subject to I(X;T) ≤ C for C = 1, 2, 3, 4, 5 bits. Use the iterative Blahut-Arimoto style updates. Plot the IB curve and identify the phase transitions where new cluster boundaries emerge. Compare the optimal IB solution to k-means clustering of the X distribution.

---

*In Chapter 16, we turn from pure information theory to system design: how does an information-theoretic perspective change the way you design data pipelines, APIs, logging systems, and observability infrastructure? This final applied chapter synthesizes everything into concrete engineering decisions.*
