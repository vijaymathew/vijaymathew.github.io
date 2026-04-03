# Chapter 16: Databases, Indexes, and Selectivity

## The Query Planner's Job

A database query planner lives under a brutally simple constraint: it has to find the right rows while touching as little data as possible.

That sounds like an engineering problem about disk seeks, cache lines, and B-trees. It is. But underneath those implementation details is a cleaner abstraction: the planner is trying to reduce uncertainty about *which rows matter*.

If a table has N rows, identifying one row out of N requires `log2(N)` bits. A predicate such as `user_id = 12345` or `country = 'US'` reduces that uncertainty by ruling out rows that cannot match. The more uncertainty it removes, the more useful it is for planning. This is what database people usually call *selectivity*. Information theory gives us a more precise language for it.

This chapter develops that language. We will connect selectivity to surprise, show why cardinality is only a rough proxy for usefulness, explain why high-entropy columns make better index keys, and unpack the statistics query planners maintain in order to make these decisions at runtime.

The guiding idea is this:

**A good predicate is one that tells the planner a lot.**

That is an information-theoretic statement, not a metaphor.

---

## Cardinality Counts Values; Entropy Weighs Them

Database systems track *cardinality*: the number of distinct values in a column. This is useful, but incomplete. A column with 10,000 distinct values is not automatically a good index key if 95% of the rows share the same 10 values and the remaining 9,990 appear only rarely.

Entropy refines cardinality by incorporating the distribution of values, not just the count:

```
H(X) = -∑ p(x) log2 p(x)
```

If the values are uniform, entropy is approximately `log2(cardinality)`. If the values are skewed, entropy is smaller, sometimes much smaller.

Let's make that concrete on a simulated orders table:

```python
import math
import random
from collections import Counter

def entropy(values):
    counts = Counter(values)
    total  = len(values)
    return -sum((count / total) * math.log2(count / total)
                for count in counts.values())

def generate_orders_table(n=100_000, seed=42):
    """
    Simulate an orders table with a mix of high-entropy, low-entropy,
    and correlated columns.
    """
    random.seed(seed)

    countries  = ['US', 'IN', 'DE', 'BR', 'JP', 'GB']
    country_w  = [0.38, 0.22, 0.14, 0.12, 0.08, 0.06]

    statuses   = ['paid', 'shipped', 'pending', 'cancelled', 'fraud']
    status_w   = [0.46, 0.32, 0.18, 0.03, 0.01]

    devices    = ['mobile', 'desktop', 'tablet']
    device_w   = [0.58, 0.34, 0.08]

    segments   = ['free', 'pro', 'team', 'enterprise']
    segment_w  = [0.55, 0.27, 0.14, 0.04]

    currency_by_country = {
        'US': ['USD', 'USD', 'USD', 'EUR'],
        'IN': ['INR', 'INR', 'USD'],
        'DE': ['EUR', 'EUR', 'USD'],
        'BR': ['BRL', 'BRL', 'USD'],
        'JP': ['JPY', 'JPY', 'USD'],
        'GB': ['GBP', 'GBP', 'EUR', 'USD'],
    }

    rows = []
    for i in range(n):
        country = random.choices(countries, weights=country_w, k=1)[0]
        status  = random.choices(statuses, weights=status_w, k=1)[0]
        device  = random.choices(devices, weights=device_w, k=1)[0]
        segment = random.choices(segments, weights=segment_w, k=1)[0]
        currency = random.choice(currency_by_country[country])

        # A few very large tenants, then a long tail.
        r = random.random()
        if r < 0.45:
            tenant_id = f"tenant_{random.randint(1, 20):03d}"
        elif r < 0.80:
            tenant_id = f"tenant_{random.randint(21, 200):03d}"
        else:
            tenant_id = f"tenant_{random.randint(201, 4000):04d}"

        created_day = random.randint(1, 365)
        user_id     = f"user_{i:06d}"

        rows.append({
            'user_id':     user_id,
            'tenant_id':   tenant_id,
            'country':     country,
            'currency':    currency,
            'status':      status,
            'device':      device,
            'segment':     segment,
            'created_day': created_day,
        })

    return rows

def column_profile(rows, column):
    values      = [row[column] for row in rows]
    counts      = Counter(values)
    total       = len(values)
    h           = entropy(values)
    most_common = counts.most_common(1)[0]

    return {
        'column':        column,
        'n_distinct':    len(counts),
        'entropy_bits':  h,
        'top_value':     most_common[0],
        'top_frequency': most_common[1] / total,
    }

rows = generate_orders_table()
columns = ['user_id', 'tenant_id', 'country', 'currency',
           'status', 'device', 'segment', 'created_day']

print("Orders Table Column Profiles\n")
print(f"{'Column':<14}  {'Distinct':>8}  {'Entropy':>10}  "
      f"{'Most common':>12}  {'Freq':>8}")
print("-" * 64)

for column in columns:
    p = column_profile(rows, column)
    print(f"{p['column']:<14}  {p['n_distinct']:>8,}  "
          f"{p['entropy_bits']:>10.4f}  "
          f"{str(p['top_value']):>12}  "
          f"{p['top_frequency']:>7.1%}")
```

Output:
```
Orders Table Column Profiles

Column          Distinct     Entropy   Most common      Freq
----------------------------------------------------------------
user_id          100,000      16.6096   user_000000      0.0%
tenant_id          3,986       8.4185   tenant_010       2.3%
country                6       2.3096           US      37.9%
currency               6       2.0422          USD      48.8%
status                 5       1.7014         paid      46.4%
device                 3       1.2807       mobile      57.9%
segment                4       1.5681         free      55.0%
created_day          365       8.5092          116       0.3%
```

Three facts matter here:

- `user_id` is nearly maximal: every row has its own value, so entropy is essentially `log2(100000) = 16.6096` bits.
- `tenant_id` has almost 4,000 distinct values, but only 8.42 bits of entropy because the largest tenants dominate.
- `created_day` has only 365 distinct values, yet 8.51 bits of entropy because those values are close to uniform.

This is the first place where information theory improves on rule-of-thumb database intuition. Cardinality says `tenant_id` should be far more selective than `created_day`. Entropy says they are actually comparable on average, because one distribution is much more skewed than the other.

Cardinality counts labels. Entropy measures discrimination power.

---

## Selectivity Is Surprise

Suppose a predicate matches a fraction `s` of a table. Then learning that a row satisfies the predicate removes:

```
-log2(s)
```

bits of uncertainty about the row's identity.

This is just Shannon surprise. A predicate that matches half the table gives you 1 bit. A predicate that matches one row in a million gives you about 20 bits. Database people call both of these "selectivity estimates"; information theory tells you exactly what the number means.

```python
def predicate_information_gain(total_rows, matching_rows):
    """
    Information gain from learning that a row satisfies a predicate
    that matches `matching_rows` out of `total_rows`.
    """
    selectivity = matching_rows / total_rows
    return -math.log2(selectivity)

predicates = [
    ('status = paid',
     sum(1 for row in rows if row['status'] == 'paid')),
    ('country = US',
     sum(1 for row in rows if row['country'] == 'US')),
    ('created_day = 42',
     sum(1 for row in rows if row['created_day'] == 42)),
    ('tenant_id = tenant_001',
     sum(1 for row in rows if row['tenant_id'] == 'tenant_001')),
    ('user_id = user_000123', 1),
]

print("Predicate Selectivity as Information Gain\n")
print(f"{'Predicate':<24}  {'Matches':>8}  {'Selectivity':>12}  "
      f"{'Gain (bits)':>12}")
print("-" * 64)

for name, matches in predicates:
    gain = predicate_information_gain(len(rows), matches)
    print(f"{name:<24}  {matches:>8,}  {matches/len(rows):>12.6f}  "
          f"{gain:>12.4f}")
```

Output:
```
Predicate Selectivity as Information Gain

Predicate                  Matches   Selectivity   Gain (bits)
----------------------------------------------------------------
status = paid               46,386      0.463860        1.1082
country = US                37,899      0.378990        1.3998
created_day = 42               266      0.002660        8.5544
tenant_id = tenant_001       2,264      0.022640        5.4650
user_id = user_000123            1      0.000010       16.6096
```

These numbers are already enough to explain a large part of query-planning behavior:

- `status = paid` removes only about 1.1 bits of uncertainty. It is usually not enough to justify chasing pointers through a B-tree and then fetching a large fraction of the table.
- `tenant_id = tenant_001` removes 5.5 bits. That is much more promising.
- `user_id = ...` removes the full `log2(N)` bits. It identifies a single row and is a perfect candidate for an index lookup.

This gives a precise interpretation of selectivity:

**Selectivity is not just "fraction of rows matched." It is the amount of uncertainty the predicate removes.**

---

## Why High-Entropy Columns Make Better Index Keys

We can now make a stronger statement.

Let `R` be a uniformly random row identifier in a table of size `N`, and let `X` be the value of some column for that row. Since `X` is determined by `R`, we have:

```
H(X | R) = 0
```

So:

```
I(R; X) = H(X)
```

But mutual information is also:

```
I(R; X) = H(R) - H(R | X)
```

Putting these together:

```
H(R | X) = H(R) - H(X) = log2(N) - H(X)
```

This is the cleanest information-theoretic justification for database indexing in the whole book:

**the average reduction in row uncertainty from knowing a column value is exactly the column's entropy.**

That is why high-entropy columns make better index keys. They do not just have "many values"; they tell you more, on average, about which row you are looking for.

This also explains several familiar engineering facts:

- Primary keys are excellent index keys because their entropy is essentially maximal.
- Status flags are poor standalone index keys because their entropy is tiny.
- Skew matters. A column with thousands of values can still be mediocre if a few hot values dominate.
- Temporal columns are often good for range pruning even when they are not unique, because they can have high entropy over the active working set.

If you remember only one formula from this chapter, remember `H(R | X) = log2(N) - H(X)`.

---

## Composite Indexes and Conditional Entropy

A composite index such as `(country, currency)` or `(country, created_day)` should not be judged by the entropy of its parts separately. The relevant quantity is the *joint entropy*:

```
H(X, Y)
```

The incremental value of adding `Y` after `X` is:

```
H(Y | X)
```

If `Y` is almost determined by `X`, the extra gain is small. If `Y` is nearly independent of `X`, the extra gain is large.

That is exactly the question engineers ask when deciding whether to extend an index with another column.

```python
def joint_entropy(rows, col_a, col_b):
    pairs = [(row[col_a], row[col_b]) for row in rows]
    return entropy(pairs)

def mutual_information(rows, col_a, col_b):
    h_a   = entropy([row[col_a] for row in rows])
    h_b   = entropy([row[col_b] for row in rows])
    h_ab  = joint_entropy(rows, col_a, col_b)
    return h_a + h_b - h_ab

def composite_profile(rows, col_a, col_b):
    h_a  = entropy([row[col_a] for row in rows])
    h_b  = entropy([row[col_b] for row in rows])
    h_ab = joint_entropy(rows, col_a, col_b)
    mi   = h_a + h_b - h_ab

    return {
        'pair':              (col_a, col_b),
        'h_a':               h_a,
        'h_b':               h_b,
        'h_joint':           h_ab,
        'incremental_bits':  h_ab - h_a,
        'mutual_information': mi,
    }

profiles = [
    composite_profile(rows, 'country', 'currency'),
    composite_profile(rows, 'country', 'device'),
]

print("Composite Index Value\n")
print(f"{'Pair':<22}  {'H(first)':>9}  {'H(second)':>10}  "
      f"{'H(joint)':>10}  {'Added bits':>11}  {'MI':>8}")
print("-" * 78)

for p in profiles:
    pair = f"({p['pair'][0]}, {p['pair'][1]})"
    print(f"{pair:<22}  {p['h_a']:>9.4f}  {p['h_b']:>10.4f}  "
          f"{p['h_joint']:>10.4f}  {p['incremental_bits']:>11.4f}  "
          f"{p['mutual_information']:>8.4f}")
```

Output:
```
Composite Index Value

Pair                     H(first)   H(second)    H(joint)   Added bits        MI
------------------------------------------------------------------------------
(country, currency)        2.3096      2.0422      3.2233       0.9136    1.1286
(country, device)          2.3096      1.2807      3.5903       1.2806    0.0001
```

This captures two very different situations:

- `currency` has 2.04 bits of entropy on its own, but once you already know `country`, it contributes only 0.91 additional bits. Much of its information was redundant.
- `device` contributes essentially its full entropy after `country`, because the two columns are almost independent in this dataset.

That is the composite-index rule in one line:

**the value of appending a column to an index is its conditional entropy given the prefix.**

This is more precise than the usual advice to "put the most selective column first." What you really want is a prefix whose later columns still carry genuine new information.

---

## How Query Planners Estimate Selectivity

Of course, a database planner does not know the true distribution exactly. It has to estimate it from statistics.

Real systems vary, but most mature planners maintain some version of these summaries:

- `n_distinct`: how many distinct values a column seems to have
- most-common values (MCV) lists: exact frequencies for the heaviest hitters
- histograms or quantiles: approximate cumulative distributions for range predicates
- null fractions
- extended or multivariate statistics: summaries of dependency between columns

This makes immediate sense from an information-theoretic perspective.

`n_distinct` is a crude proxy for entropy. MCV lists repair the places where skew is strongest. Histograms approximate the distribution well enough for range surprise. Extended statistics correct the cases where the independence assumption would throw away too much mutual information.

The simplest failure mode is relying on cardinality alone for skewed equality predicates:

```python
def uniform_selectivity_estimate(rows, column, value):
    """
    Estimate P(column = value) by assuming all distinct values
    are equally likely.
    """
    distinct = len({row[column] for row in rows})
    return 1 / distinct

def actual_selectivity(rows, column, value):
    matches = sum(1 for row in rows if row[column] == value)
    return matches / len(rows)

status_values = ['paid', 'shipped', 'pending', 'cancelled', 'fraud']

print("Equality Estimates: Uniform Assumption vs Reality\n")
print(f"{'Status':<12}  {'Actual':>10}  {'Uniform':>10}  "
      f"{'Error factor':>13}")
print("-" * 52)

for value in status_values:
    actual  = actual_selectivity(rows, 'status', value)
    uniform = uniform_selectivity_estimate(rows, 'status', value)
    error   = uniform / actual
    print(f"{value:<12}  {actual:>10.4f}  {uniform:>10.4f}  "
          f"{error:>13.2f}x")
```

Output:
```
Equality Estimates: Uniform Assumption vs Reality

Status            Actual     Uniform   Error factor
----------------------------------------------------
paid              0.4639      0.2000           0.43x
shipped           0.3176      0.2000           0.63x
pending           0.1784      0.2000           1.12x
cancelled         0.0306      0.2000           6.53x
fraud             0.0095      0.2000          20.94x
```

This is why planners store most-common values explicitly. `fraud` is rare enough that treating it as a generic "one of five statuses" is disastrously wrong. A planner that believed the uniform estimate might reject an otherwise useful index because it thinks 20% of the table will match when the true number is under 1%.

Range predicates need a different summary. For a condition like:

```sql
WHERE created_at BETWEEN '2026-03-01' AND '2026-03-07'
```

the planner usually consults a histogram, not an MCV list. The histogram approximates the column's cumulative distribution function. In information terms, it estimates the probability mass of the interval, and therefore the surprise `-log2(p)` of being in that interval.

MCV lists answer "how likely is this hot exact value?"

Histograms answer "how much mass lies in this range?"

Both are distribution summaries because selectivity is a probability question.

---

## Correlation, Independence, and Extended Statistics

Many planner mistakes come from one default assumption:

```
P(X, Y) ≈ P(X) P(Y)
```

If two predicates appear together, the planner often begins by multiplying their marginal selectivities. This is reasonable when the columns are close to independent. It is wrong when they are correlated.

The information-theoretic cost of pretending independence is exactly:

```
KL(P(X, Y) || P(X)P(Y)) = I(X; Y)
```

That is not just a pretty identity. It tells you that mutual information measures how much dependence your planner is ignoring when it factorizes a joint distribution into marginals.

Let's look at a few conjunctions:

```python
def conjunction_actual(rows, a_col, a_val, b_col, b_val):
    matches = sum(1 for row in rows
                  if row[a_col] == a_val and row[b_col] == b_val)
    return matches / len(rows)

def conjunction_independence(rows, a_col, a_val, b_col, b_val):
    p_a = actual_selectivity(rows, a_col, a_val)
    p_b = actual_selectivity(rows, b_col, b_val)
    return p_a * p_b

queries = [
    ('country', 'US', 'currency', 'USD'),
    ('country', 'DE', 'currency', 'EUR'),
    ('country', 'GB', 'currency', 'USD'),
]

print("Joint Predicate Estimates\n")
print(f"{'Predicate':<34}  {'Actual':>10}  {'Independent':>12}  "
      f"{'Error factor':>13}")
print("-" * 76)

for a_col, a_val, b_col, b_val in queries:
    actual = conjunction_actual(rows, a_col, a_val, b_col, b_val)
    indep  = conjunction_independence(rows, a_col, a_val, b_col, b_val)
    error  = indep / actual
    label  = f"{a_col}={a_val} AND {b_col}={b_val}"
    print(f"{label:<34}  {actual:>10.4f}  {indep:>12.4f}  {error:>13.2f}x")
```

Output:
```
Joint Predicate Estimates

Predicate                               Actual   Independent   Error factor
----------------------------------------------------------------------------
country=US AND currency=USD             0.2843        0.1850           0.65x
country=DE AND currency=EUR             0.0940        0.0287           0.31x
country=GB AND currency=USD             0.0147        0.0287           1.96x
```

For `country = 'DE' AND currency = 'EUR'`, the independence estimate is off by more than 3x because those columns are strongly dependent. For `country = 'GB' AND currency = 'USD'`, it is wrong in the other direction.

This is why modern databases support multivariate statistics. They are not an optimization gimmick. They are an explicit attempt to retain some of the mutual information between columns so the planner can estimate joint selectivities correctly.

The planner is, in effect, asking:

**how much do I lose if I compress this joint distribution into separate marginals?**

Mutual information is the exact answer.

---

## A Tiny Query Planner

Real database planners are complicated cost models layered over storage-engine details. We do not need all of that to see the core idea. A toy planner with three plan types is enough:

- index scan: cheap startup, expensive if many rows match
- bitmap scan: higher startup, better for medium-size result sets
- sequential scan: fixed cost, best when a large fraction of the table matches

```python
def choose_plan(estimated_rows,
                seq_scan_cost=60.0,
                index_base=8.0,
                index_per_row=0.00045,
                bitmap_base=20.0,
                bitmap_per_row=0.00012):
    index_cost  = index_base + index_per_row * estimated_rows
    bitmap_cost = bitmap_base + bitmap_per_row * estimated_rows
    seq_cost    = seq_scan_cost

    plans = {
        'index_scan':  index_cost,
        'bitmap_scan': bitmap_cost,
        'seq_scan':    seq_cost,
    }

    best_plan = min(plans, key=plans.get)
    return best_plan, plans

estimates = [1, 100, 1_000, 10_000, 100_000, 300_000, 500_000]

print("Toy Planner Cost Model\n")
print(f"{'Est. rows':>10}  {'Index':>10}  {'Bitmap':>10}  "
      f"{'Seq':>8}  {'Chosen':>12}")
print("-" * 60)

for est in estimates:
    chosen, plans = choose_plan(est)
    print(f"{est:>10,}  {plans['index_scan']:>10.2f}  "
          f"{plans['bitmap_scan']:>10.2f}  "
          f"{plans['seq_scan']:>8.2f}  {chosen:>12}")
```

Output:
```
Toy Planner Cost Model

 Est. rows       Index      Bitmap       Seq        Chosen
------------------------------------------------------------
         1        8.00       20.00     60.00    index_scan
       100        8.04       20.01     60.00    index_scan
     1,000        8.45       20.12     60.00    index_scan
    10,000       12.50       21.20     60.00    index_scan
   100,000       53.00       32.00     60.00   bitmap_scan
   300,000      143.00       56.00     60.00   bitmap_scan
   500,000      233.00       80.00     60.00      seq_scan
```

This is not meant to mimic PostgreSQL or MySQL numerically. It shows the planner's dependence on good selectivity estimates.

If the planner thinks `status = 'fraud'` matches 20,000 rows, it may choose a bitmap scan or even a sequential scan. If the true number is 950 rows, an index scan was the right answer all along. Likewise, if the planner underestimates a highly correlated conjunction, it may choose an index strategy that looks good on paper and performs poorly at runtime.

The storage engine determines the cost formulas. The statistics subsystem determines whether the inputs to those formulas are trustworthy.

That separation of concerns is useful:

- access methods answer "how expensive is this plan if k rows match?"
- statistics answer "what is a plausible value of k?"

Information theory enters in the second half.

---

## Query Optimization Through an Entropy Lens

We can now restate the standard database ideas in tighter language:

- **Cardinality** is a coarse summary of potential uncertainty reduction.
- **Entropy** is the average uncertainty reduction from learning a column value.
- **Selectivity** is the probability of a predicate; its information content is `-log2(selectivity)`.
- **Composite index value** is joint entropy, with incremental benefit measured by conditional entropy.
- **Correlation between columns** is mutual information.
- **Planner error from assuming independence** is governed by KL divergence from the true joint to the factorized model.

This perspective also explains several practical design choices:

### Low-cardinality indexes are workload-dependent

A low-entropy column is usually a poor standalone B-tree key, but that does not mean it is useless. If the workload repeatedly asks for a rare value like `status = 'fraud'`, the relevant quantity is not the column's average entropy but the surprise of that specific value. A partial index on rare values can be excellent even when the whole column is low-entropy.

### Column order in composite indexes matters

An index on `(country, currency)` is only modestly better than one on `country` in our simulated data because `currency` has low conditional entropy given `country`. Reversing the order changes which query prefixes the index can serve, but it does not create information that is not there.

### Planners need fresh statistics

If the data distribution drifts, the planner's internal model diverges from reality. In Chapter 11 we measured model mismatch with KL divergence. The same logic applies here: stale statistics mean the planner is coding the table with the wrong distribution, and the penalty shows up as bad row-count estimates and bad plan choices.

### Data modeling affects planner quality

Highly redundant schemas push mutual information into relationships the planner may or may not model explicitly. Derived columns, denormalized flags, and correlated status fields all influence estimate quality. Some redundancy helps execution; too much unmodeled redundancy hurts estimation.

---

## Practical Rules for Engineers

The information-theoretic view is useful because it produces concrete rules:

1. Measure entropy, not just distinct counts, before adding an index.
2. For equality-heavy workloads, ask how many bits a predicate removes on average and on the hot query values specifically.
3. Judge composite indexes by conditional entropy, not by folklore.
4. When row-count estimates are consistently wrong, look for missing mutual information between columns.
5. Treat histogram quality and statistics freshness as first-class performance concerns.
6. Remember that a rare value in a low-entropy column may justify a partial index even if the whole column does not.

The underlying habit is simple: stop treating the planner as a black box that sometimes "gets confused." It is maintaining an internal probability model of your data and choosing plans from that model. If the model is coarse, stale, or factorized where the data are dependent, the planner will act on bad information.

That is not mystery. It is model error.

---

## Summary

- A query planner's core task is uncertainty reduction: it needs to narrow the candidate row set as cheaply as possible.
- If a predicate matches fraction `s` of a table, it provides `-log2(s)` bits of information about row identity. This is the exact information-theoretic meaning of selectivity.
- Cardinality alone is a crude proxy for usefulness. Entropy captures both the number of distinct values and their skew, which is why two columns with very different cardinalities can have similar average discrimination power.
- For a uniformly random row identifier `R` and column `X`, `I(R;X) = H(X)`. The average reduction in row uncertainty from learning a column value is exactly the column's entropy.
- The value of a composite index on `(X, Y)` is `H(X, Y)`. The incremental value of appending `Y` after `X` is `H(Y|X)`, not `H(Y)`.
- Query planners maintain `n_distinct`, most-common values, histograms, and multivariate statistics because selectivity estimation is a probability-modeling problem.
- Assuming independence for correlated predicates throws away mutual information. The average penalty for doing so is `KL(P(X,Y) || P(X)P(Y)) = I(X;Y)`.
- Bad plans are often model failures: stale statistics, missing heavy hitters, or unmodeled dependencies produce bad row-count estimates, which produce bad cost comparisons.

---

## Exercises

**16.1** For a table with `N = 10^7` rows, compute the information gain in bits for predicates with selectivities `1/2`, `1/10`, `1/1000`, and `1/10^7`. Interpret each number operationally: what kind of access path would you expect to become attractive as the information gain increases?

**16.2** Generate a synthetic table with two columns that each have 1,024 distinct values. Make one nearly uniform and the other highly skewed. Compute `n_distinct`, entropy, and the top-10 most common values for both. Which column is the better average index key, and why?

**16.3** Implement a miniature statistics collector for a single column: estimate `n_distinct`, build a most-common-values list for the top 20 values, and build an equi-depth histogram for the rest. Evaluate it on equality and range predicates. How much does it outperform a uniform-by-cardinality estimator?

**16.4** Simulate a table with correlated columns such as `(country, currency)`, `(state, zip_prefix)`, or `(device_type, app_version)`. For 20 conjunction predicates, compare actual selectivity to the independence estimate. Compute the mutual information between the two columns and relate it to the average estimation error.

**16.5** For a workload of 50 SQL-like predicates over a synthetic orders table, rank candidate single-column and two-column indexes by expected information gain on the workload distribution. Compare your ranking with a naive rule based only on `n_distinct`. Where do the rankings disagree, and which one gives better simulated performance?

**16.6 (Challenge)** Build a toy query planner that chooses among sequential scan, index scan, and bitmap scan using estimated row counts. Then deliberately degrade its statistics in three ways: stale distributions, missing MCVs, and independence assumptions on correlated predicates. Measure how each failure mode changes chosen plans and total execution cost over a workload of at least 1,000 queries.

---

*In Chapter 17, we broaden the lens from individual queries to whole systems: logs, APIs, payloads, dashboards, and observability pipelines. The same ideas about entropy, redundancy, and signal will reappear there at system scale.*
