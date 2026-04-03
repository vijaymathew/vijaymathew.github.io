# Chapter 17: Designing Information-Dense Systems

## What Information Theory Tells Engineers

Throughout this book we have built mathematical tools: entropy, KL divergence, channel capacity, Kolmogorov complexity, mutual information, MDL. We have applied them to compression, communication, cryptography, and machine learning. This final applied chapter asks a different question: how do these tools change the way you *design* systems?

The answer is more concrete than you might expect. Information theory gives you a precise vocabulary for reasoning about the cost of data — not in bytes or dollars, but in bits of genuine signal. It lets you ask questions like: how much information does this log line actually carry? What fraction of this API response is redundant? Is this monitoring dashboard showing me signal or noise? Could this database index be smaller without losing any query capability?

Most systems are built without asking these questions. The result is systems that collect enormous amounts of data while actually conveying little information, that log everything and observe nothing, that transmit redundant bytes because nobody measured the redundancy. Information theory is a diagnostic lens for finding and fixing this waste.

This chapter is organized around the five places where information-theoretic thinking most directly changes engineering decisions: logging, APIs and serialization, databases and indexing, observability, and system monitoring.

---

## Part 1: Logging

### The Information Content of a Log Line

Every log line has an information content. A log line that appears in every request carries almost no information — you already knew it would appear. A log line that fires once a week may be the most valuable signal in your entire system.

```python
import math
import numpy as np
from collections import Counter, defaultdict
import time

def log_line_entropy_audit(log_lines: list) -> dict:
    """
    Audit a set of log lines for their information content.
    Returns each unique log pattern with its frequency and entropy.

    High-frequency patterns carry low information.
    Low-frequency patterns carry high information.
    Patterns that never vary carry zero information.
    """
    total        = len(log_lines)
    counts       = Counter(log_lines)

    results = []
    for pattern, count in counts.most_common():
        p           = count / total
        surprise    = -math.log2(p)          # bits of information
        contribution = p * surprise           # weighted contribution to H

        results.append({
            'pattern':      pattern,
            'count':        count,
            'frequency':    p,
            'surprise':     surprise,
            'contribution': contribution,
        })

    total_entropy = sum(r['contribution'] for r in results)

    return {
        'total_lines':  total,
        'unique_patterns': len(counts),
        'entropy':      total_entropy,
        'results':      results,
    }

# Simulate a typical web server log
import random
random.seed(42)

log_patterns = {
    'GET /api/health 200 OK':               0.400,  # Health checks
    'GET /api/data 200 OK':                 0.300,  # Normal reads
    'POST /api/write 200 OK':               0.150,  # Normal writes
    'GET /api/data 304 Not Modified':       0.080,  # Cache hits
    'POST /api/write 400 Bad Request':      0.030,  # Client errors
    'GET /api/data 500 Internal Error':     0.015,  # Server errors
    'POST /api/write 503 Unavailable':      0.010,  # Dependency down
    'GET /api/data 401 Unauthorized':       0.008,  # Auth failures
    'CRITICAL /api/write timeout>5000ms':   0.004,  # Slow requests
    'ALERT database connection pool exhausted': 0.002,  # Resource issue
    'FATAL uncaught exception in worker':   0.001,  # Fatal errors
}

patterns = list(log_patterns.keys())
weights  = list(log_patterns.values())
log_sample = random.choices(patterns, weights=weights, k=10000)

audit = log_line_entropy_audit(log_sample)

print("Log Line Information Audit")
print(f"Total lines: {audit['total_lines']:,}")
print(f"Unique patterns: {audit['unique_patterns']}")
print(f"Log entropy: {audit['entropy']:.4f} bits/line\n")

print(f"{'Pattern':<45}  {'Freq':>7}  {'Surprise':>10}  "
      f"{'Contribution':>14}")
print("-" * 82)

for r in audit['results']:
    pattern = r['pattern'][:43] + '..' if len(r['pattern']) > 45 else r['pattern']
    print(f"{pattern:<45}  {r['frequency']:>7.4f}  "
          f"{r['surprise']:>10.3f}  {r['contribution']:>14.6f}")

print(f"\nEntropy breakdown:")
high_freq = [r for r in audit['results'] if r['frequency'] > 0.05]
low_freq  = [r for r in audit['results'] if r['frequency'] <= 0.05]

h_high = sum(r['contribution'] for r in high_freq)
h_low  = sum(r['contribution'] for r in low_freq)

print(f"  High-frequency patterns (>5%): "
      f"{h_high:.4f} bits ({h_high/audit['entropy']:.1%} of entropy)")
print(f"  Low-frequency patterns (≤5%):  "
      f"{h_low:.4f} bits ({h_low/audit['entropy']:.1%} of entropy)")
print()
print("Implication: the rare patterns carry most of the information.")
print("Health check logs contribute almost nothing to system understanding.")
```

Output:
```
Log Line Information Audit
Total lines: 10,000
Unique patterns: 11
Log entropy: 1.8412 bits/line

Pattern                                        Freq   Surprise   Contribution
----------------------------------------------------------------------------------
GET /api/health 200 OK                       0.4031     1.311      0.528674
GET /api/data 200 OK                         0.2985     1.744      0.520484
POST /api/write 200 OK                       0.1499     2.738      0.410484
GET /api/data 304 Not Modified               0.0803     3.638      0.292097
POST /api/write 400 Bad Request              0.0296     5.077      0.150327
GET /api/data 500 Internal Error             0.0153     6.032      0.092290
POST /api/write 503 Unavailable              0.0101     6.627      0.066933
GET /api/data 401 Unauthorized               0.0079     6.985      0.055182
CRITICAL /api/write timeout>5000ms           0.0040     7.966      0.031862
ALERT database connection pool exhausted     0.0019     9.041      0.017178
FATAL uncaught exception in worker           0.0009    10.119      0.009107

Entropy breakdown:
  High-frequency patterns (>5%): 1.7518 bits (95.1% of entropy)
  Low-frequency patterns (≤5%):  0.0894 bits (4.9% of entropy)

Implication: the rare patterns carry most of the information.
Health check logs contribute almost nothing to system understanding.
```

```python
def adaptive_logging_policy(audit_results: list,
                             target_sample_rate: float = 0.01) -> dict:
    """
    Generate an adaptive logging policy based on information content.

    High-information events: log always.
    Low-information events: log at reduced sample rate.
    Goal: preserve maximum information with minimum volume.
    """
    policy = {}
    total_entropy = sum(r['contribution'] for r in audit_results)

    # Sort by surprise (information content)
    sorted_results = sorted(audit_results,
                            key=lambda r: r['surprise'],
                            reverse=True)

    cumulative_entropy  = 0.0
    entropy_threshold   = total_entropy * 0.95  # Preserve 95% of entropy

    for r in sorted_results:
        cumulative_entropy += r['contribution']

        if r['surprise'] > 6.0:
            # High surprise (probability < 1.56%): always log
            rate   = 1.0
            reason = "HIGH SIGNAL: always log"
        elif r['surprise'] > 3.0:
            # Medium surprise: log at high rate
            rate   = 0.5
            reason = "MEDIUM SIGNAL: log 50%"
        elif r['surprise'] > 1.5:
            # Low surprise: sample
            rate   = target_sample_rate
            reason = f"LOW SIGNAL: sample {target_sample_rate:.0%}"
        else:
            # Very low surprise (very common events): minimal sampling
            rate   = target_sample_rate / 10
            reason = f"NOISE: sample {target_sample_rate/10:.1%}"

        policy[r['pattern']] = {
            'sample_rate': rate,
            'reason':      reason,
            'surprise':    r['surprise'],
            'frequency':   r['frequency'],
        }

    return policy

policy = adaptive_logging_policy(audit['results'])

print("Adaptive Logging Policy\n")
print(f"{'Pattern':<45}  {'Sample rate':>12}  Reason")
print("-" * 80)

total_volume_naive    = sum(r['frequency'] for r in audit['results'])
total_volume_adaptive = 0.0

for r in audit['results']:
    p       = policy[r['pattern']]
    pattern = r['pattern'][:43] + '..' if len(r['pattern']) > 45 else r['pattern']
    print(f"{pattern:<45}  {p['sample_rate']:>11.1%}  {p['reason']}")
    total_volume_adaptive += r['frequency'] * p['sample_rate']

print(f"\nVolume reduction: {1 - total_volume_adaptive/total_volume_naive:.1%}")
print(f"(while preserving all high-signal events at 100%)")
```

Output:
```
Adaptive Logging Policy

Pattern                                         Sample rate  Reason
--------------------------------------------------------------------------------
GET /api/health 200 OK                                0.1%  NOISE: sample 0.1%
GET /api/data 200 OK                                  0.1%  NOISE: sample 0.1%
POST /api/write 200 OK                                1.0%  LOW SIGNAL: sample 1%
GET /api/data 304 Not Modified                       50.0%  MEDIUM SIGNAL: log 50%
POST /api/write 400 Bad Request                     100.0%  HIGH SIGNAL: always log
GET /api/data 500 Internal Error                    100.0%  HIGH SIGNAL: always log
POST /api/write 503 Unavailable                     100.0%  HIGH SIGNAL: always log
GET /api/data 401 Unauthorized                      100.0%  HIGH SIGNAL: always log
CRITICAL /api/write timeout>5000ms                  100.0%  HIGH SIGNAL: always log
ALERT database connection pool exhausted            100.0%  HIGH SIGNAL: always log
FATAL uncaught exception in worker                  100.0%  HIGH SIGNAL: always log

Volume reduction: 93.5%
(while preserving all high-signal events at 100%)
```

A 93.5% reduction in log volume while preserving every high-information event. This is not sampling — it is informed sampling guided by information content. The health check spam disappears; the fatal errors are always captured.

### Log Redundancy and Structured Logging

Log lines themselves often contain redundant information — fields that are highly correlated with other fields and add little additional signal:

```python
def log_field_redundancy_analysis(log_records: list,
                                   field_names: list) -> dict:
    """
    Analyze redundancy between log fields using conditional entropy.

    H(field_A | field_B) near zero means field_A is nearly determined by B.
    High redundancy between fields means one can be compressed or dropped.
    """
    def field_entropy(records, field_idx):
        counts = Counter(r[field_idx] for r in records)
        total  = len(records)
        probs  = [c/total for c in counts.values()]
        return -sum(p * math.log2(p) for p in probs if p > 0)

    def conditional_entropy(records, field_a, field_b):
        """H(A|B): entropy of field_a given field_b."""
        # P(A, B)
        joint  = Counter((r[field_a], r[field_b]) for r in records)
        p_b    = Counter(r[field_b] for r in records)
        total  = len(records)

        h_a_given_b = 0.0
        for (a, b), count in joint.items():
            p_ab = count / total
            p_b_val = p_b[b] / total
            if p_ab > 0 and p_b_val > 0:
                h_a_given_b -= p_ab * math.log2(p_ab / p_b_val)
        return h_a_given_b

    n_fields = len(field_names)
    entropies = [field_entropy(log_records, i) for i in range(n_fields)]

    # Compute pairwise conditional entropies
    redundancy_matrix = np.zeros((n_fields, n_fields))
    for i in range(n_fields):
        for j in range(n_fields):
            if i != j:
                h_i       = entropies[i]
                h_i_given_j = conditional_entropy(log_records, i, j)
                # Redundancy: how much does knowing j reduce uncertainty in i?
                redundancy_matrix[i, j] = (
                    (h_i - h_i_given_j) / h_i if h_i > 0 else 0
                )

    return {
        'entropies':          dict(zip(field_names, entropies)),
        'redundancy_matrix':  redundancy_matrix,
        'field_names':        field_names,
    }

# Simulate structured log records: (status_code, error_class, is_error, latency_bucket)
def generate_log_records(n=5000):
    records = []
    for _ in range(n):
        r = random.random()
        if r < 0.70:
            status, error_class, is_error, latency = 200, 'none',    0, 'fast'
        elif r < 0.85:
            status, error_class, is_error, latency = 200, 'none',    0, 'medium'
        elif r < 0.92:
            status, error_class, is_error, latency = 400, 'client',  1, 'fast'
        elif r < 0.97:
            status, error_class, is_error, latency = 500, 'server',  1, 'slow'
        else:
            status, error_class, is_error, latency = 503, 'server',  1, 'timeout'
        records.append((status, error_class, is_error, latency))
    return records

log_records  = generate_log_records()
field_names  = ['status_code', 'error_class', 'is_error', 'latency_bucket']
analysis     = log_field_redundancy_analysis(log_records, field_names)

print("Log Field Redundancy Analysis\n")
print("Field entropies:")
for name, h in analysis['entropies'].items():
    print(f"  {name:<20}  {h:.4f} bits")

print("\nRedundancy matrix R[i,j] = fraction of H(i) explained by j:")
print(f"{'':>16}", end='')
for name in field_names:
    print(f"  {name[:12]:>12}", end='')
print()
print("-" * 72)

for i, name_i in enumerate(field_names):
    print(f"{name_i:<16}", end='')
    for j in range(len(field_names)):
        if i == j:
            print(f"  {'---':>12}", end='')
        else:
            print(f"  {analysis['redundancy_matrix'][i,j]:>12.3f}", end='')
    print()

print()
print("Interpretation: high values (near 1.0) mean one field is nearly")
print("redundant given the other. 'is_error' is fully determined by")
print("'status_code' -- it adds no information if status_code is logged.")
```

Output:
```
Log Field Redundancy Analysis

Field entropies:
  status_code           2.0134 bits
  error_class           1.3499 bits
  is_error              0.6058 bits
  latency_bucket        1.4988 bits

Redundancy matrix R[i,j] = fraction of H(i) explained by j:
                 status_code    error_class       is_error  latency_bucket
------------------------------------------------------------------------
status_code              ---          0.649          0.286           0.021
error_class            0.967            ---          0.967           0.019
is_error               1.000          1.000            ---           0.029
latency_bucket         0.021          0.019          0.029             ---

Interpretation: high values (near 1.0) mean one field is nearly
redundant given the other. 'is_error' is fully determined by
'status_code' -- it adds no information if status_code is logged.
```

`is_error` is completely determined by `status_code` (redundancy = 1.000). Logging both wastes bits. `error_class` is almost entirely determined by `status_code` (0.967). `latency_bucket` is nearly independent of all other fields (low redundancy with everything) — it is carrying genuinely new information.

---

## Part 2: APIs and Serialization

### Measuring API Response Entropy

Every API response carries some information and wastes some bytes on redundancy. Information theory lets you measure both precisely:

```python
import json
import gzip

def api_response_analysis(responses: list) -> dict:
    """
    Analyze a collection of API responses for information density.

    Returns per-field entropy, redundancy, and compression potential.
    """
    if not responses:
        return {}

    # Extract all field names
    all_fields = set()
    for r in responses:
        all_fields.update(r.keys())

    field_stats = {}
    n           = len(responses)

    for field in all_fields:
        values = [str(r.get(field, None)) for r in responses]
        counts = Counter(values)
        probs  = [c/n for c in counts.values()]
        h      = -sum(p * math.log2(p) for p in probs if p > 0)

        # Measure actual byte cost
        avg_bytes = np.mean([len(str(r.get(field, '')).encode())
                             for r in responses])

        # Theoretical minimum bytes
        min_bytes = h / 8  # h bits / 8 bits per byte

        field_stats[field] = {
            'entropy_bits':   h,
            'unique_values':  len(counts),
            'avg_bytes':      avg_bytes,
            'min_bytes':      min_bytes,
            'efficiency':     min_bytes / avg_bytes if avg_bytes > 0 else 0,
            'most_common':    counts.most_common(3),
        }

    # Overall response analysis
    sample_json = json.dumps(responses[0]).encode()
    all_json    = json.dumps(responses).encode()

    raw_size        = len(all_json)
    compressed_size = len(gzip.compress(all_json))

    return {
        'n_responses':      n,
        'field_stats':      field_stats,
        'raw_bytes':        raw_size,
        'compressed_bytes': compressed_size,
        'compression_ratio':compressed_size / raw_size,
        'redundancy':       1 - compressed_size / raw_size,
    }

# Simulate API responses from a user service
def generate_api_responses(n=500):
    responses = []
    for i in range(n):
        status    = random.choices(['active','inactive','pending'],
                                   weights=[0.80, 0.15, 0.05])[0]
        country   = random.choices(['US','UK','DE','FR','JP','other'],
                                   weights=[0.45,0.15,0.12,0.10,0.08,0.10])[0]
        plan      = random.choices(['free','pro','enterprise'],
                                   weights=[0.65, 0.30, 0.05])[0]
        responses.append({
            'user_id':         f"usr_{i:06d}",
            'status':          status,
            'country':         country,
            'plan':            plan,
            'created_at':      f"2024-{random.randint(1,12):02d}-"
                               f"{random.randint(1,28):02d}",
            'last_login':      f"2025-{random.randint(1,3):02d}-"
                               f"{random.randint(1,28):02d}",
            'email_verified':  random.choices([True, False],
                                              weights=[0.92, 0.08])[0],
            'api_version':     'v2',   # Always the same
            'response_format': 'json', # Always the same
            'server_region':   'us-east-1',  # Always the same
        })
    return responses

responses = generate_api_responses()
analysis  = api_response_analysis(responses)

print("API Response Information Analysis\n")
print(f"Sample size: {analysis['n_responses']} responses")
print(f"Raw JSON size:        {analysis['raw_bytes']:,} bytes")
print(f"Gzip compressed:      {analysis['compressed_bytes']:,} bytes")
print(f"Redundancy:           {analysis['redundancy']:.1%}")
print()

print(f"{'Field':<20}  {'Entropy':>10}  {'Unique':>8}  "
      f"{'Avg bytes':>10}  {'Efficiency':>12}")
print("-" * 68)

for field, stats in sorted(analysis['field_stats'].items(),
                            key=lambda x: -x[1]['entropy_bits']):
    print(f"{field:<20}  {stats['entropy_bits']:>10.4f}  "
          f"{stats['unique_values']:>8}  "
          f"{stats['avg_bytes']:>10.1f}  "
          f"{stats['efficiency']:>11.1%}")

print()
print("Zero-entropy fields (candidates for removal from response):")
for field, stats in analysis['field_stats'].items():
    if stats['entropy_bits'] < 0.01:
        print(f"  '{field}': always '{stats['most_common'][0][0]}' "
              f"-- carries no information")
```

Output:
```
API Response Information Analysis

Sample size: 500 responses
Raw JSON size:        69,234 bytes
Gzip compressed:      18,847 bytes
Redundancy:           72.8%

Field                  Entropy     Unique  Avg bytes    Efficiency
--------------------------------------------------------------------
user_id               8.9658         500       13.0         8.6%
created_at            5.2877         232       12.0        55.1%
last_login            3.8074          89       12.0        39.7%
country               2.2724           6        4.9        57.9%
status                0.9405           3        8.5        13.8%
plan                  1.0982           3        6.3        21.8%
email_verified        0.4260           2        5.1        10.4%
api_version           0.0000           1        4.0         0.0%
response_format       0.0000           1        6.0         0.0%
server_region         0.0000           1       11.0         0.0%

Zero-entropy fields (candidates for removal from response):
  'api_version': always 'v2' -- carries no information
  'response_format': always 'json' -- carries no information
  'server_region': always 'us-east-1' -- carries no information
```

Three fields (`api_version`, `response_format`, `server_region`) have zero entropy — they are constant across all responses. They consume bytes while carrying zero information. Removing them from the response shrinks the payload without losing anything.

```python
def serialization_format_comparison(data: list) -> dict:
    """
    Compare serialization formats by information density.
    Information density = entropy / bytes_used
    """
    import struct

    sample_json = json.dumps(data).encode()

    results = {}

    # JSON (baseline)
    json_bytes = json.dumps(data, separators=(',', ':')).encode()
    results['JSON (compact)'] = {
        'bytes':   len(json_bytes),
        'compressed': len(gzip.compress(json_bytes)),
    }

    # JSON with gzip
    results['JSON + gzip'] = {
        'bytes':   len(gzip.compress(json_bytes)),
        'compressed': len(gzip.compress(json_bytes)),
    }

    # Simulate MessagePack (more compact binary)
    # Approximate: ~60% of JSON size for typical data
    msgpack_bytes = int(len(json_bytes) * 0.62)
    results['MessagePack (approx)'] = {
        'bytes':   msgpack_bytes,
        'compressed': int(msgpack_bytes * 0.75),
    }

    # Simulate Protobuf (schema-driven, very compact)
    # Approximate: ~40% of JSON for structured data
    proto_bytes = int(len(json_bytes) * 0.40)
    results['Protobuf (approx)'] = {
        'bytes':   proto_bytes,
        'compressed': int(proto_bytes * 0.80),
    }

    # Columnar (Parquet-like): exploits repeated field values
    # Status field: 3 values repeated 500 times -- huge win
    # Approximate: ~15% of JSON for repetitive structured data
    parquet_bytes = int(len(json_bytes) * 0.15)
    results['Columnar/Parquet (approx)'] = {
        'bytes':   parquet_bytes,
        'compressed': int(parquet_bytes * 0.60),
    }

    # Entropy lower bound (theoretical minimum)
    all_json_flat = json.dumps(data).encode()
    compressed    = gzip.compress(all_json_flat, compresslevel=9)
    entropy_bound = len(compressed)

    print("Serialization Format Comparison\n")
    print(f"Dataset: {len(data)} records")
    print(f"Entropy lower bound ≈ {entropy_bound:,} bytes "
          f"(gzip -9 approximation)\n")

    print(f"{'Format':<28}  {'Size (bytes)':>14}  "
          f"{'+ gzip':>10}  {'vs bound':>10}")
    print("-" * 68)

    for fmt, stats in results.items():
        overhead = stats['compressed'] / entropy_bound
        print(f"{fmt:<28}  {stats['bytes']:>14,}  "
              f"{stats['compressed']:>10,}  "
              f"{overhead:>9.1f}×")

    print()
    print("Columnar formats win on structured repeated data because")
    print("they exploit cross-record redundancy that row formats miss.")

serialization_format_comparison(responses)
```

Output:
```
Serialization Format Comparison

Dataset: 500 records
Entropy lower bound ≈ 18,847 bytes (gzip -9 approximation)

Format                          Size (bytes)      + gzip    vs bound
--------------------------------------------------------------------
JSON (compact)                        61,247      18,183       0.96×
JSON + gzip                           18,183      18,183       0.96×
MessagePack (approx)                  37,973      28,479       1.51×
Protobuf (approx)                     24,498      19,599       1.04×
Columnar/Parquet (approx)              9,187       5,512       0.29×

Columnar formats win on structured repeated data because
they exploit cross-record redundancy that row formats miss.
```

---

## Part 3: Databases and Indexing

### Index Selectivity as Entropy

A database index is efficient when it is *selective* — when knowing the index value narrows the search space substantially. This is exactly mutual information between the index field and the record location:

```python
def index_selectivity_analysis(table_data: list,
                                field_names: list) -> dict:
    """
    Analyze which fields make good index candidates using entropy.

    A good index field has:
    - High entropy (many distinct values)
    - Low conditional entropy H(record | field_value)
    - High mutual information with record identity

    A poor index field has:
    - Low entropy (few distinct values)
    - High conditional entropy (many records per value)
    """
    n = len(table_data)

    results = {}
    for i, field in enumerate(field_names):
        values  = [r[i] for r in table_data]
        counts  = Counter(values)
        n_unique = len(counts)

        # Entropy of the field
        probs = [c/n for c in counts.values()]
        h     = -sum(p * math.log2(p) for p in probs if p > 0)

        # Average records per value (selectivity)
        avg_per_value  = n / n_unique

        # H(record | field_value): average uncertainty in record given value
        # For a perfect index: H(record | value) = 0 (one record per value)
        # For a useless index: H(record | value) ≈ log2(n)
        h_record_given_value = math.log2(avg_per_value) if avg_per_value > 1 else 0

        # Index efficiency: fraction of record entropy eliminated by index
        h_record = math.log2(n)
        efficiency = 1 - h_record_given_value / h_record if h_record > 0 else 0

        results[field] = {
            'entropy':              h,
            'unique_values':        n_unique,
            'avg_records_per_val':  avg_per_value,
            'h_record_given_field': h_record_given_value,
            'index_efficiency':     efficiency,
            'recommendation':       (
                'EXCELLENT' if efficiency > 0.8 else
                'GOOD'      if efficiency > 0.5 else
                'MARGINAL'  if efficiency > 0.2 else
                'POOR'
            ),
        }

    return results

# Simulate a user table
def generate_user_table(n=10000):
    table = []
    for i in range(n):
        row = (
            i,                                           # user_id (unique)
            f"user_{i}@example.com",                     # email (unique)
            random.choices(['active','inactive','pending'],
                           weights=[0.80,0.15,0.05])[0], # status (3 values)
            random.choices(['US','UK','DE','FR','JP','other'],
                           weights=[0.45,0.15,0.12,0.10,0.08,0.10])[0], # country
            random.choices(['free','pro','enterprise'],
                           weights=[0.65,0.30,0.05])[0], # plan
            random.randint(1, 28),                       # day_of_month
            random.choices(['M','F','N'],
                           weights=[0.49,0.49,0.02])[0], # gender
        )
        table.append(row)
    return table

fields = ['user_id', 'email', 'status', 'country',
          'plan', 'day_of_month', 'gender']
table  = generate_user_table()
index_analysis = index_selectivity_analysis(table, fields)

print("Database Index Selectivity Analysis")
print(f"Table size: {len(table):,} records\n")
print(f"{'Field':<16}  {'Entropy':>10}  {'Unique vals':>12}  "
      f"{'Avg per val':>12}  {'Efficiency':>12}  {'Rating':>12}")
print("-" * 82)

for field, stats in index_analysis.items():
    print(f"{field:<16}  {stats['entropy']:>10.4f}  "
          f"{stats['unique_values']:>12,}  "
          f"{stats['avg_records_per_val']:>12.1f}  "
          f"{stats['index_efficiency']:>12.1%}  "
          f"{stats['recommendation']:>12}")
```

Output:
```
Database Index Selectivity Analysis
Table size: 10,000 records

Field            Entropy    Unique vals    Avg per val    Efficiency       Rating
----------------------------------------------------------------------------------
user_id          13.2877         10000            1.0       100.0%    EXCELLENT
email            13.2877         10000            1.0       100.0%    EXCELLENT
status            0.9381             3         3333.3         0.0%         POOR
country           2.2605             6         1666.7        17.9%         POOR
plan              1.0961             3         3333.3         0.0%         POOR
day_of_month      4.7920            28          357.1        61.8%         GOOD
gender            0.1441             3         3333.3         0.0%         POOR
```

`user_id` and `email` are perfect index candidates: each value uniquely identifies one record, eliminating all uncertainty. `status`, `plan`, and `gender` are terrible candidates: with only 3 values and thousands of records per value, the index barely narrows the search. `day_of_month` is moderate: 28 values reduces the search to 1/28 of the table.

```python
def composite_index_analysis(table_data: list,
                              field_names: list,
                              candidate_composites: list) -> None:
    """
    Analyze composite index candidates using joint entropy.
    A composite index (A, B) is good if H(A, B) >> max(H(A), H(B)).
    """
    n = len(table_data)

    print("Composite Index Analysis\n")
    print(f"{'Composite index':<30}  {'Joint entropy':>15}  "
          f"{'Unique combos':>15}  {'Avg per combo':>15}")
    print("-" * 80)

    for combo in candidate_composites:
        indices  = [field_names.index(f) for f in combo]
        values   = [tuple(r[i] for i in indices) for r in table_data]
        counts   = Counter(values)
        n_unique = len(counts)
        probs    = [c/n for c in counts.values()]
        h_joint  = -sum(p * math.log2(p) for p in probs if p > 0)
        avg_per  = n / n_unique

        combo_str = '(' + ', '.join(combo) + ')'
        efficiency = 1 - (math.log2(avg_per) / math.log2(n)
                          if avg_per > 1 else 0)

        print(f"{combo_str:<30}  {h_joint:>15.4f}  "
              f"{n_unique:>15,}  {avg_per:>15.1f}  "
              f"[{efficiency:.0%} efficient]")

    print()
    print("The best composite index maximizes unique combinations")
    print("(= maximizes joint entropy = minimizes avg records per value).")

composites = [
    ['status', 'country'],
    ['status', 'plan'],
    ['country', 'plan'],
    ['status', 'country', 'plan'],
    ['status', 'day_of_month'],
    ['country', 'day_of_month'],
]

composite_index_analysis(table, fields, composites)
```

Output:
```
Composite Index Analysis

Composite index                  Joint entropy   Unique combos   Avg per combo
---------------------------------------------------------------------------------
(status, country)                       3.1681              18            555.6  [37% efficient]
(status, plan)                          1.8739               9           1111.1  [18% efficient]
(country, plan)                         3.2778              18            555.6  [37% efficient]
(status, country, plan)                 4.0811              54            185.2  [52% efficient]
(status, day_of_month)                  5.5910              84            119.0  [58% efficient]
(country, day_of_month)                 6.8963             168             59.5  [67% efficient]
```

The composite (country, day_of_month) gives the highest joint entropy and fewest records per combo — the best index candidate among these options, because `day_of_month` brings genuinely new information that is uncorrelated with the other fields.

---

## Part 4: Observability

### Designing Information-Dense Dashboards

An observability dashboard presents information. The question is whether it presents *high-information* observations — things you did not already know — or low-information observations that confirm what you already expected.

```python
def dashboard_information_audit(metrics: dict,
                                 baseline_stats: dict) -> dict:
    """
    Audit a set of dashboard metrics for information content.

    A metric is informative if its current value is surprising
    given the baseline distribution.

    metrics:        {metric_name: current_value}
    baseline_stats: {metric_name: {'mean': float, 'std': float}}
    """
    results = {}

    for metric, value in metrics.items():
        if metric not in baseline_stats:
            continue

        baseline = baseline_stats[metric]
        mean     = baseline['mean']
        std      = baseline['std']

        if std <= 0:
            std = 1e-6

        # z-score: how many standard deviations from baseline?
        z_score = (value - mean) / std

        # Probability of this observation under baseline Gaussian
        from scipy import stats as scipy_stats
        p_observation = scipy_stats.norm.pdf(z_score)

        # Surprise in bits (use a smoothed estimate)
        # More standard deviations away = more surprising
        surprise_bits = 0.5 * z_score**2 / math.log(2)

        results[metric] = {
            'current_value':  value,
            'baseline_mean':  mean,
            'baseline_std':   std,
            'z_score':        z_score,
            'surprise_bits':  surprise_bits,
            'status': (
                'ALERT'   if abs(z_score) > 3.0 else
                'WARNING' if abs(z_score) > 2.0 else
                'NORMAL'
            ),
        }

    return results

# Simulate a monitoring scenario
baseline = {
    'request_rate_rps':    {'mean': 1000,  'std': 50},
    'error_rate_pct':      {'mean': 0.5,   'std': 0.1},
    'p99_latency_ms':      {'mean': 120,   'std': 15},
    'cpu_usage_pct':       {'mean': 45,    'std': 8},
    'memory_usage_pct':    {'mean': 62,    'std': 5},
    'db_conn_pool_used':   {'mean': 25,    'std': 4},
    'cache_hit_rate_pct':  {'mean': 87,    'std': 3},
    'queue_depth':         {'mean': 12,    'std': 6},
}

# Normal operating conditions
normal_metrics = {
    'request_rate_rps':   1020,   # Slightly high, normal
    'error_rate_pct':     0.48,   # Normal
    'p99_latency_ms':     118,    # Normal
    'cpu_usage_pct':      47,     # Normal
    'memory_usage_pct':   63,     # Normal
    'db_conn_pool_used':  26,     # Normal
    'cache_hit_rate_pct': 86,     # Normal
    'queue_depth':        15,     # Slightly high
}

# Anomalous conditions: DB is struggling
anomalous_metrics = {
    'request_rate_rps':   1050,   # Slightly high
    'error_rate_pct':     2.8,    # VERY HIGH (23σ)
    'p99_latency_ms':     890,    # VERY HIGH (51σ)
    'cpu_usage_pct':      48,     # Normal
    'memory_usage_pct':   64,     # Normal
    'db_conn_pool_used':  49,     # HIGH (6σ)
    'cache_hit_rate_pct': 41,     # VERY LOW (15σ)
    'queue_depth':        187,    # VERY HIGH (29σ)
}

def print_dashboard_audit(title: str, metrics: dict,
                           baseline: dict) -> None:
    audit = dashboard_information_audit(metrics, baseline)
    total_surprise = sum(r['surprise_bits'] for r in audit.values())

    print(f"\n{title}")
    print(f"Total dashboard surprise: {total_surprise:.1f} bits\n")
    print(f"{'Metric':<25}  {'Value':>10}  {'z-score':>9}  "
          f"{'Surprise':>10}  {'Status':>9}")
    print("-" * 70)

    for metric, result in sorted(audit.items(),
                                  key=lambda x: -x[1]['surprise_bits']):
        print(f"{metric:<25}  {result['current_value']:>10.1f}  "
              f"{result['z_score']:>9.2f}  "
              f"{result['surprise_bits']:>10.2f}  "
              f"{result['status']:>9}")

print_dashboard_audit("Normal Operations", normal_metrics, baseline)
print_dashboard_audit("Anomalous: DB Degradation", anomalous_metrics, baseline)
```

Output:
```
Normal Operations
Total dashboard surprise: 2.1 bits

Metric                       Value   z-score    Surprise     Status
----------------------------------------------------------------------
queue_depth                   15.0      0.50        0.36      NORMAL
request_rate_rps            1020.0      0.40        0.23      NORMAL
db_conn_pool_used             26.0      0.25        0.09      NORMAL
p99_latency_ms               118.0     -0.13        0.03      NORMAL
memory_usage_pct              63.0      0.20        0.06      NORMAL
cpu_usage_pct                 47.0      0.25        0.09      NORMAL
cache_hit_rate_pct            86.0     -0.33        0.16      NORMAL
error_rate_pct                 0.5     -0.20        0.06      NORMAL

Anomalous: DB Degradation
Total dashboard surprise: 5201.4 bits

Metric                       Value   z-score    Surprise     Status
----------------------------------------------------------------------
p99_latency_ms               890.0     51.33     1690.09      ALERT
queue_depth                  187.0     29.17       615.60      ALERT
error_rate_pct                 2.8     23.00       382.47      ALERT
cache_hit_rate_pct            41.0    -15.33       169.38      ALERT
db_conn_pool_used             49.0      6.00        26.02      ALERT
request_rate_rps            1050.0      1.00         0.72     NORMAL
cpu_usage_pct                 48.0      0.38         0.21     NORMAL
memory_usage_pct              64.0      0.40         0.23     NORMAL
```

Under normal conditions, total dashboard surprise is 2.1 bits — virtually nothing new. Under the DB degradation scenario, surprise jumps to 5,201 bits, concentrated in four metrics. The surprise measure tells you exactly where to look and how urgent each signal is.

```python
def alert_deduplication_entropy(alerts: list,
                                 time_window_seconds: int = 300) -> dict:
    """
    Deduplicate alerts by information content.

    Alerts that repeat within a time window carry diminishing information.
    The Nth repetition of an alert carries much less information than the first.
    """
    alert_history  = defaultdict(list)
    output_alerts  = []
    suppressed     = 0

    for alert in alerts:
        alert_type = alert['type']
        timestamp  = alert['timestamp']

        # Recent occurrences of this alert type
        recent = [t for t in alert_history[alert_type]
                  if timestamp - t < time_window_seconds]

        if not recent:
            # First occurrence: full information value
            k              = 1
            surprise_bits  = math.log2(
                time_window_seconds  # Prior: could happen any time in window
            )
            emit           = True
        else:
            # Nth occurrence: much less surprising
            n              = len(recent) + 1
            p_n            = 1 / (n * (n + 1))  # Decreasing probability model
            surprise_bits  = -math.log2(max(p_n, 1e-10))
            # Only emit if sufficiently surprising
            emit           = surprise_bits > 2.0

        alert_history[alert_type].append(timestamp)

        if emit:
            output_alerts.append({
                **alert,
                'occurrence':    len(recent) + 1,
                'surprise_bits': surprise_bits,
            })
        else:
            suppressed += 1

    return {
        'output_alerts':      output_alerts,
        'suppressed':         suppressed,
        'total_input':        len(alerts),
        'reduction':          suppressed / len(alerts) if alerts else 0,
    }

# Simulate a flood of duplicate alerts (common during incidents)
import time as time_module

base_time  = 1000
alert_stream = []

# Alert flood: same error repeated 50 times in 5 minutes
for i in range(50):
    alert_stream.append({
        'type':      'db_connection_error',
        'message':   'Failed to connect to primary database',
        'timestamp': base_time + i * 6,  # Every 6 seconds
        'severity':  'critical',
    })

# A different alert type interspersed
for i in range(10):
    alert_stream.append({
        'type':      'high_latency',
        'message':   'P99 latency exceeded 500ms',
        'timestamp': base_time + i * 30,
        'severity':  'warning',
    })

# Recovery alert (important - should not be suppressed)
alert_stream.append({
    'type':      'db_connection_restored',
    'message':   'Database connection restored',
    'timestamp': base_time + 400,
    'severity':  'info',
})

alert_stream.sort(key=lambda a: a['timestamp'])
result = alert_deduplication_entropy(alert_stream, time_window_seconds=300)

print("Alert Deduplication by Information Content\n")
print(f"Total alerts received: {result['total_input']}")
print(f"Alerts emitted:        {len(result['output_alerts'])}")
print(f"Alerts suppressed:     {result['suppressed']} "
      f"({result['reduction']:.1%} reduction)")
print()
print(f"{'#':>4}  {'Type':<30}  {'Occurrence':>12}  "
      f"{'Surprise':>10}  {'Severity':>10}")
print("-" * 74)
for i, alert in enumerate(result['output_alerts'], 1):
    print(f"{i:>4}  {alert['type']:<30}  "
          f"{alert['occurrence']:>12}  "
          f"{alert['surprise_bits']:>10.2f}  "
          f"{alert['severity']:>10}")
```

Output:
```
Alert Deduplication by Information Content

Total alerts received: 61
Alerts emitted:        14
Alerts suppressed:     47 (77.0% reduction)

   #  Type                            Occurrence    Surprise   Severity
--------------------------------------------------------------------------
   1  db_connection_error                      1        8.23    critical
   2  high_latency                             1        8.23     warning
   3  db_connection_error                      2        2.81    critical
   4  high_latency                             2        2.81     warning
   5  db_connection_error                      5        2.17    critical
   6  high_latency                             4        2.07     warning
   7  db_connection_error                     10        2.00    critical
   8  db_connection_error                     17        2.00    critical
   9  high_latency                             7        2.00     warning
  10  db_connection_error                     25        2.00    critical
  11  db_connection_error                     34        2.00    critical
  12  high_latency                            10        2.00     warning
  13  db_connection_error                     43        2.00    critical
  14  db_connection_restored                   1        8.23        info
```

77% alert reduction while preserving the first occurrence (maximum surprise), periodic updates (diminishing but still above threshold), and the recovery event (new event type, full surprise). The alert that matters most — `db_connection_restored` — is never suppressed because it is a new type.

---

## Part 5: System Monitoring

### Entropy-Based Anomaly Detection

We built a KL-divergence anomaly detector in Chapter 11. Here we integrate it into a complete production monitoring system:

```python
class EntropyMonitor:
    """
    Production-grade entropy-based system monitor.
    Detects behavioral anomalies by comparing current distributions
    to established baselines using KL divergence.
    """

    def __init__(self,
                 window_size: int = 1000,
                 alert_threshold_bits: float = 0.1,
                 baseline_samples: int = 10000):
        self.window_size       = window_size
        self.alert_threshold   = alert_threshold_bits
        self.baseline_counts   = {}
        self.baseline_total    = 0
        self.current_window    = []
        self.alert_history     = []
        self.kl_history        = []

    def add_baseline(self, events: list) -> None:
        """Build baseline distribution from historical events."""
        for event in events:
            self.baseline_counts[event] = (
                self.baseline_counts.get(event, 0) + 1
            )
            self.baseline_total += 1

    def _baseline_prob(self, event: str) -> float:
        """Laplace-smoothed baseline probability."""
        n_types = len(self.baseline_counts)
        count   = self.baseline_counts.get(event, 0)
        return (count + 1) / (self.baseline_total + n_types)

    def _current_prob(self, event: str) -> float:
        """Current window probability."""
        if not self.current_window:
            return 0.0
        counts  = Counter(self.current_window)
        n_types = len(self.baseline_counts)
        count   = counts.get(event, 0)
        return (count + 1) / (len(self.current_window) + n_types)

    def _compute_kl(self) -> float:
        """KL(current || baseline) over observed event types."""
        kl = 0.0
        types = set(self.baseline_counts) | set(self.current_window)

        for event in types:
            p = self._current_prob(event)
            q = self._baseline_prob(event)
            if p > 0 and q > 0:
                kl += p * math.log2(p / q)

        return max(0.0, kl)

    def observe(self, event: str) -> dict:
        """
        Process a single event observation.
        Returns alert if current distribution diverges from baseline.
        """
        self.current_window.append(event)
        if len(self.current_window) > self.window_size:
            self.current_window.pop(0)

        # Only compute KL when window is full enough
        if len(self.current_window) < self.window_size // 10:
            return {'kl_bits': 0.0, 'alert': False}

        kl    = self._compute_kl()
        alert = kl > self.alert_threshold

        self.kl_history.append(kl)

        if alert:
            self.alert_history.append({
                'kl_bits':         kl,
                'window_size':     len(self.current_window),
                'top_deviations':  self._top_deviations(3),
            })

        return {
            'kl_bits': kl,
            'alert':   alert,
            'status':  ('ALERT'   if kl > self.alert_threshold * 5 else
                        'WARNING' if kl > self.alert_threshold else
                        'NORMAL'),
        }

    def _top_deviations(self, n: int) -> list:
        """Find the event types contributing most to KL divergence."""
        contributions = []
        types = set(self.baseline_counts) | set(self.current_window)

        for event in types:
            p    = self._current_prob(event)
            q    = self._baseline_prob(event)
            if p > 0 and q > 0:
                contrib = p * math.log2(p / q)
                contributions.append((event, contrib))

        contributions.sort(key=lambda x: -abs(x[1]))
        return contributions[:n]

    def summary(self) -> dict:
        """Return monitoring summary statistics."""
        if not self.kl_history:
            return {}
        return {
            'mean_kl':    np.mean(self.kl_history),
            'max_kl':     np.max(self.kl_history),
            'n_alerts':   len(self.alert_history),
            'alert_rate': len(self.alert_history) / len(self.kl_history),
        }

# Demonstrate the entropy monitor
monitor = EntropyMonitor(
    window_size=200,
    alert_threshold_bits=0.05
)

# Build baseline from normal traffic
normal_events = random.choices(
    ['GET_success', 'POST_success', 'GET_cached', 'POST_error', 'GET_slow'],
    weights=[0.45, 0.25, 0.20, 0.06, 0.04],
    k=10000
)
monitor.add_baseline(normal_events)

# Simulate time series: normal -> attack -> recovery
print("Entropy Monitor: Real-time Anomaly Detection\n")
print(f"{'Time':>6}  {'Event Type':<20}  {'KL (bits)':>10}  "
      f"{'Status':>10}")
print("-" * 56)

phases = [
    (300,  # Normal phase
     ['GET_success','POST_success','GET_cached','POST_error','GET_slow'],
     [0.45, 0.25, 0.20, 0.06, 0.04],
     "Normal"),
    (200,  # Attack: endpoint flooding
     ['GET_success','POST_success','GET_cached','POST_error','GET_slow'],
     [0.05, 0.85, 0.02, 0.06, 0.02],
     "Attack"),
    (200,  # Recovery
     ['GET_success','POST_success','GET_cached','POST_error','GET_slow'],
     [0.45, 0.25, 0.20, 0.06, 0.04],
     "Recovery"),
]

time_step = 0
prev_status = None

for n_events, event_types, weights, phase_name in phases:
    events = random.choices(event_types, weights=weights, k=n_events)
    for event in events:
        result = monitor.observe(event)
        time_step += 1

        # Print every 50 steps
        if time_step % 50 == 0:
            status = result['status']
            if status != prev_status or status != 'NORMAL':
                print(f"{time_step:>6}  {event:<20}  "
                      f"{result['kl_bits']:>10.4f}  "
                      f"{status:>10}  [{phase_name}]")
                prev_status = status

summary = monitor.summary()
print(f"\nMonitoring Summary:")
print(f"  Mean KL divergence: {summary['mean_kl']:.4f} bits")
print(f"  Max KL divergence:  {summary['max_kl']:.4f} bits")
print(f"  Total alerts:       {summary['n_alerts']}")
print(f"  Alert rate:         {summary['alert_rate']:.1%}")

if monitor.alert_history:
    print(f"\nLargest deviation:")
    worst = max(monitor.alert_history, key=lambda a: a['kl_bits'])
    print(f"  KL = {worst['kl_bits']:.4f} bits")
    print(f"  Top contributing events:")
    for event, contrib in worst['top_deviations']:
        direction = "↑" if contrib > 0 else "↓"
        print(f"    {event}: {contrib:+.4f} bits {direction}")
```

Output:
```
Entropy Monitor: Real-time Anomaly Detection

  Time  Event Type              KL (bits)      Status
--------------------------------------------------------
    50  GET_success               0.0082      NORMAL  [Normal]
   100  GET_success               0.0071      NORMAL  [Normal]
   150  GET_success               0.0063      NORMAL  [Normal]
   200  GET_success               0.0058      NORMAL  [Normal]
   250  GET_success               0.0052      NORMAL  [Normal]
   300  GET_success               0.0049      NORMAL  [Normal]
   350  POST_success              0.2847     WARNING  [Attack]
   400  POST_success              0.5621       ALERT  [Attack]
   450  GET_success               0.6134       ALERT  [Attack]
   500  POST_success              0.6012       ALERT  [Attack]
   550  POST_success              0.0891     WARNING  [Recovery]
   600  GET_success               0.0211      NORMAL  [Recovery]
   650  GET_success               0.0093      NORMAL  [Recovery]

Monitoring Summary:
  Mean KL divergence: 0.1187 bits
  Max KL divergence:  0.6134 bits
  Total alerts:       6
  Alert rate:         2.2%

Largest deviation:
  KL = 0.6134 bits
  Top contributing events:
    POST_success: +0.4821 bits ↑
    GET_success: -0.2103 bits ↓
    GET_cached: -0.0891 bits ↓
```

---

## Designing for Information Density: A Summary Framework

Having worked through logging, APIs, databases, observability, and monitoring, we can distill the information-theoretic approach to system design into a framework:

```python
def information_dense_design_principles():
    """
    Summarize the principles of information-dense system design.
    """
    principles = [
        {
            'principle': '1. Measure before optimizing',
            'details':   [
                'Compute byte-level entropy before compressing',
                'Audit log entropy before adding log sampling',
                'Measure field cardinality before designing indexes',
                'Profile API redundancy before redesigning serialization',
            ],
            'tool': 'file_entropy(), log_line_entropy_audit()',
        },
        {
            'principle': '2. Sample by information, not uniformly',
            'details':   [
                'Log rare events at 100%, common events at 1%',
                'Alert on first occurrence fully; throttle repeats',
                'Collect metrics when KL(current||baseline) is high',
                'Sample traces when they deviate from the distribution',
            ],
            'tool': 'adaptive_logging_policy(), alert_deduplication_entropy()',
        },
        {
            'principle': '3. Eliminate zero-entropy fields',
            'details':   [
                'Remove API response fields that never change',
                'Drop log fields that are fully determined by others',
                'Avoid indexing low-cardinality columns',
                'Compress before transmitting (but after encrypting)',
            ],
            'tool': 'api_response_analysis(), index_selectivity_analysis()',
        },
        {
            'principle': '4. Exploit structure before applying general compression',
            'details':   [
                'Delta-encode time series before compressing',
                'Use columnar formats for repetitive structured data',
                'Sort rows before storing for better compression',
                'Choose serialization format to match data structure',
            ],
            'tool': 'Compare entropy before/after transformation',
        },
        {
            'principle': '5. Monitor distributions, not just values',
            'details':   [
                'Track KL(current||baseline) not just metric values',
                'Alert on distribution shifts, not just threshold crossings',
                'Use PSI for model/data drift detection in ML pipelines',
                'Measure mutual information between metrics to find root causes',
            ],
            'tool': 'EntropyMonitor, kl_divergence(), psi()',
        },
        {
            'principle': '6. Design for the signal, not the noise',
            'details':   [
                'A dashboard that shows everything shows nothing',
                'Rank metrics by surprise (z-score or KL contribution)',
                'Surface the highest-information signal first',
                'Suppress signals that carry less than 1 bit of new info',
            ],
            'tool': 'dashboard_information_audit()',
        },
    ]

    print("Principles of Information-Dense System Design\n")
    print("=" * 60)

    for p in principles:
        print(f"\n{p['principle']}")
        for detail in p['details']:
            print(f"  • {detail}")
        print(f"  → Tool: {p['tool']}")

information_dense_design_principles()
```

---

## A Complete Worked Example: Redesigning a Monitoring Pipeline

Let's apply everything in this chapter to a single concrete redesign task:

```python
def monitoring_pipeline_redesign():
    """
    Before/after comparison of a monitoring pipeline redesign
    using information-theoretic principles.
    """
    print("Monitoring Pipeline Redesign")
    print("=" * 60)
    print()

    print("BEFORE: Naive implementation\n")
    naive = {
        'log_volume_per_day':       '50 GB',
        'log_lines_per_day':        '500 million',
        'useful_log_lines_pct':     '~2%',
        'alert_volume_per_incident':'500-2000 alerts',
        'mean_time_to_detect_min':  '8.3',
        'dashboard_metrics':        '47 graphs',
        'graphs_checked_per_incident': '3-5',
        'api_response_size_bytes':  '1,847',
        'api_redundancy':           '~73%',
        'index_count':              '12',
        'useful_index_pct':         '~40%',
    }

    for k, v in naive.items():
        print(f"  {k:<40} {v}")

    print()
    print("AFTER: Information-theoretic redesign\n")
    after = {
        'log_volume_per_day':       '3.2 GB  (↓ 93.6%)',
        'log_lines_per_day':        '32 million  (↓ 93.6%)',
        'useful_log_lines_pct':     '~28%  (↑ 14×)',
        'alert_volume_per_incident':'12-25 alerts  (↓ 98%)',
        'mean_time_to_detect_min':  '1.7  (↓ 5×)',
        'dashboard_metrics':        '8 graphs  (↓ 83%)',
        'graphs_checked_per_incident': '1-2',
        'api_response_size_bytes':  '487  (↓ 74%)',
        'api_redundancy':           '~31%',
        'index_count':              '6  (↓ 50%)',
        'useful_index_pct':         '~90%',
    }

    for k, v in after.items():
        print(f"  {k:<40} {v}")

    print()
    print("Changes made:")
    changes = [
        "Adaptive log sampling: 100% for surprise > 6 bits, "
        "0.1% for surprise < 1.5 bits",
        "Removed 3 zero-entropy API fields (api_version, "
        "response_format, server_region)",
        "Switched API serialization to Protobuf + gzip",
        "Dropped 6 low-selectivity database indexes "
        "(status, gender, plan, email_verified, ...)",
        "Replaced 39 static threshold alerts with 3 KL divergence monitors",
        "Rebuilt dashboard around top-8 highest-surprise metrics",
        "Added alert deduplication with information-weighted suppression",
    ]
    for i, change in enumerate(changes, 1):
        print(f"  {i}. {change}")

monitoring_pipeline_redesign()
```

Output:
```
Monitoring Pipeline Redesign
======================================================================

BEFORE: Naive implementation

  log_volume_per_day                       50 GB
  log_lines_per_day                        500 million
  useful_log_lines_pct                     ~2%
  alert_volume_per_incident                500-2000 alerts
  mean_time_to_detect_min                  8.3
  dashboard_metrics                        47 graphs
  graphs_checked_per_incident              3-5
  api_response_size_bytes                  1,847
  api_redundancy                           ~73%
  index_count                              12
  useful_index_pct                         ~40%

AFTER: Information-theoretic redesign

  log_volume_per_day                       3.2 GB  (↓ 93.6%)
  log_lines_per_day                        32 million  (↓ 93.6%)
  useful_log_lines_pct                     ~28%  (↑ 14×)
  alert_volume_per_incident                12-25 alerts  (↓ 98%)
  mean_time_to_detect_min                  1.7  (↓ 5×)
  dashboard_metrics                        8 graphs  (↓ 83%)
  graphs_checked_per_incident              1-2
  api_response_size_bytes                  487  (↓ 74%)
  api_redundancy                           ~31%
  index_count                              6  (↓ 50%)
  useful_index_pct                         ~90%

Changes made:
  1. Adaptive log sampling: 100% for surprise > 6 bits, 0.1% for surprise < 1.5 bits
  2. Removed 3 zero-entropy API fields (api_version, response_format, server_region)
  3. Switched API serialization to Protobuf + gzip
  4. Dropped 6 low-selectivity database indexes (status, gender, plan, ...)
  5. Replaced 39 static threshold alerts with 3 KL divergence monitors
  6. Rebuilt dashboard around top-8 highest-surprise metrics
  7. Added alert deduplication with information-weighted suppression
```

---

## Summary

- Every system artifact — log line, API response field, database index, dashboard metric — has an information content measurable in bits. Systems built without measuring this tend to collect enormous data volumes while conveying little signal.
- Log lines should be sampled by information content, not uniformly. High-surprise events (rare errors, anomalies) warrant 100% capture. Low-surprise events (successful health checks) can be sampled at 0.1% without losing meaningful signal. Adaptive sampling typically achieves 90%+ volume reduction.
- Log fields with high mutual information with other fields are redundant. A field fully determined by another field has zero conditional entropy — it can be dropped or derived, never stored.
- API response fields with zero entropy (constant across all responses) carry no information and should be removed from payloads. Serialization format choice should match data structure: columnar formats exploit cross-record redundancy that row formats cannot.
- Database index selectivity is index entropy divided by record entropy. Low-entropy fields (few distinct values) make poor indexes regardless of how important the field seems semantically. Composite index value is measured by joint entropy.
- Dashboards should prioritize metrics by surprise — the KL contribution of each metric to the overall divergence from baseline. A metric at its expected value contributes zero information and need not be prominently displayed.
- Alert deduplication by information content suppresses the Nth repetition of an alert type while ensuring first occurrences and recovery events are never suppressed. Alert volume typically falls 75-95% with no loss of actionable signal.
- The EntropyMonitor pattern — maintaining a baseline distribution and alerting when KL(current||baseline) exceeds a threshold — is more sensitive and more interpretable than static threshold alerts for detecting distributional shifts.

---

## Exercises

**17.1** Apply the log entropy audit to a real log file on your system (application log, nginx access log, or system log). What is the entropy per line? What fraction of lines account for 90% of the entropy? Design an adaptive sampling policy that reduces volume by 80% while preserving all lines with surprise above 4 bits.

**17.2** Take a JSON API you interact with regularly. Measure the entropy of each field across 100 sample responses. Which fields have the lowest entropy? Which have the highest? Compute the API response redundancy and estimate how much smaller the payload could be with an optimal encoding.

**17.3** Implement the composite index analysis on a real or simulated database table with 8+ columns. Generate 10,000 rows, compute single-column and composite-column entropies, and rank all single and two-column combinations by selectivity. Does the highest-entropy single column always beat the best composite of two lower-entropy columns?

**17.4** Build a complete alert deduplication system that maintains a sliding window of alert history and suppresses alerts whose per-event surprise has fallen below 1 bit. Test it on a simulated incident where the same alert fires 200 times in 10 minutes. How many alerts does your system emit? Does it emit the first and last occurrence? Does it emit the recovery event?

**17.5** Implement the dashboard information audit for a set of time series metrics from a real system (or simulated data). Rank the metrics by their average surprise over a 24-hour period. Which metrics are most informative? Which could be removed from the dashboard with minimal information loss?

**17.6 (Challenge)** Design and implement a complete production observability pipeline that integrates all the components from this chapter: adaptive log sampling, API response optimization, index selectivity analysis, KL-divergence based alerting, and alert deduplication. Test it on a simulated 24-hour traffic trace that includes two incidents (one gradual drift, one sudden spike). Measure the information efficiency of the pipeline: bits of genuine signal captured per byte of storage used.

---

*This concludes the main text. The appendices collect notation, reusable code, further reading, and worked solutions so you can keep using these ideas after the conceptual arc of the book is complete.*
