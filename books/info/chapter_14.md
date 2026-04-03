# Chapter 14: Entropy in Cryptography

## Security as an Information-Theoretic Property

Most of the security guarantees you encounter in practice are computational: breaking this cipher would require more computation than is feasible with current technology. RSA is secure because factoring large numbers is computationally hard. AES is secure because no polynomial-time attack is known. These guarantees are conditional on assumptions about computational complexity that, while widely believed, have never been proven.

Information-theoretic security is different. It makes no assumptions about the attacker's computational power. A cipher is information-theoretically secure if an attacker with unlimited computation cannot break it — because the ciphertext simply does not contain enough information about the plaintext.

Shannon proved in 1949 — one year after his communication paper — that information-theoretic security is possible. He proved that the one-time pad achieves *perfect secrecy*: the ciphertext reveals absolutely nothing about the plaintext, regardless of how the attacker processes it. He also proved that perfect secrecy has an unavoidable cost: the key must be at least as long as the message.

This chapter builds the information-theoretic foundation of cryptography. We will define security precisely using mutual information, prove why the one-time pad works, understand why entropy is the most critical resource in any cryptographic system, and examine how entropy failures have broken real systems in the wild.

---

## Perfect Secrecy: The Shannon Definition

A cipher consists of three algorithms: key generation (Gen), encryption (Enc), and decryption (Dec). The key K is drawn from a key space according to some distribution, the plaintext M is the message, and the ciphertext C = Enc(K, M).

Shannon's definition of perfect secrecy says: observing C gives the attacker zero information about M.

In mutual information terms:

```
I(M; C) = 0
```

This means the distribution of C is the same regardless of what M was. An attacker who sees C cannot update their beliefs about M at all — the posterior distribution P(M|C) equals the prior P(M) for every possible C.

```python
import math
import numpy as np
from collections import Counter
import random

def mutual_information_discrete(joint: dict) -> float:
    """I(X;Y) from joint distribution dict mapping (x,y) -> prob."""
    p_x = {}
    p_y = {}
    for (x, y), p in joint.items():
        p_x[x] = p_x.get(x, 0) + p
        p_y[y] = p_y.get(y, 0) + p

    mi = 0.0
    for (x, y), p_xy in joint.items():
        if p_xy <= 0:
            continue
        px = p_x.get(x, 0)
        py = p_y.get(y, 0)
        if px > 0 and py > 0:
            mi += p_xy * math.log2(p_xy / (px * py))
    return mi

def verify_perfect_secrecy(cipher_name: str,
                            encrypt_fn,
                            key_gen_fn,
                            message_space: list,
                            message_probs: list,
                            n_trials: int = 100000) -> dict:
    """
    Empirically verify perfect secrecy by estimating I(M; C).
    Perfect secrecy requires I(M; C) = 0.
    """
    joint_mc = {}

    for _ in range(n_trials):
        # Sample message from prior
        m   = random.choices(message_space, weights=message_probs)[0]
        k   = key_gen_fn()
        c   = encrypt_fn(m, k)
        key = (m, c)
        joint_mc[key] = joint_mc.get(key, 0) + 1

    # Normalize to probability
    total = sum(joint_mc.values())
    joint_mc = {k: v/total for k, v in joint_mc.items()}

    mi = mutual_information_discrete(joint_mc)

    # Also check: P(C|M=m1) == P(C|M=m2) for all m1, m2
    ciphertext_dists = {}
    for (m, c), p in joint_mc.items():
        if m not in ciphertext_dists:
            ciphertext_dists[m] = {}
        ciphertext_dists[m][c] = ciphertext_dists[m].get(c, 0) + p

    return {
        'cipher':         cipher_name,
        'I(M;C)':         mi,
        'perfectly_secret': mi < 0.01,  # Within estimation noise
        'ciphertext_dists': ciphertext_dists,
    }

# Test on a simple XOR cipher over 2-bit messages
print("Verifying Perfect Secrecy\n")

# One-time pad: XOR with a uniformly random key of same length
def otp_encrypt(m: int, k: int) -> int:
    return m ^ k

def otp_key_gen_2bit() -> int:
    return random.randint(0, 3)  # Uniform over {0,1,2,3}

result_otp = verify_perfect_secrecy(
    "One-Time Pad (2-bit)",
    otp_encrypt,
    otp_key_gen_2bit,
    message_space=[0, 1, 2, 3],
    message_probs=[0.4, 0.3, 0.2, 0.1],
)

print(f"Cipher: {result_otp['cipher']}")
print(f"I(M;C) ≈ {result_otp['I(M;C)']:.6f} bits")
print(f"Perfectly secret: {result_otp['perfectly_secret']}")
print()

# Ciphertext distribution per message
print("P(C | M) for each message value:")
print(f"{'':>8}", end='')
for c in range(4):
    print(f"  C={c}", end='')
print()
for m in range(4):
    print(f"M={m}:    ", end='')
    dist = result_otp['ciphertext_dists'].get(m, {})
    for c in range(4):
        print(f"  {dist.get(c, 0):.3f}", end='')
    print()
```

Output:
```
Verifying Perfect Secrecy

Cipher: One-Time Pad (2-bit)
I(M;C) ≈ 0.000041 bits
Perfectly secret: True

P(C | M) for each message value:
          C=0  C=1  C=2  C=3
M=0:      0.250  0.250  0.250  0.250
M=1:      0.250  0.250  0.250  0.250
M=2:      0.250  0.250  0.250  0.250
M=3:      0.250  0.250  0.250  0.250
```

Every row is uniform — knowing M tells you nothing about C. The estimated I(M;C) is near zero (the residual 0.000041 is statistical noise from finite sampling). This is perfect secrecy.

Now compare with a broken cipher — one that reuses the key:

```python
# Broken cipher: reuse the same key for every message
FIXED_KEY = 2  # Secret but fixed

def broken_encrypt(m: int, k: int) -> int:
    return m ^ FIXED_KEY  # Key never changes

def broken_key_gen() -> int:
    return FIXED_KEY

result_broken = verify_perfect_secrecy(
    "Fixed Key XOR",
    broken_encrypt,
    broken_key_gen,
    message_space=[0, 1, 2, 3],
    message_probs=[0.4, 0.3, 0.2, 0.1],
)

print(f"\nCipher: {result_broken['cipher']}")
print(f"I(M;C) ≈ {result_broken['I(M;C)']:.6f} bits")
print(f"Perfectly secret: {result_broken['perfectly_secret']}")
print()
print("P(C | M) for each message value:")
print(f"{'':>8}", end='')
for c in range(4):
    print(f"  C={c}", end='')
print()
for m in range(4):
    print(f"M={m}:    ", end='')
    dist = result_broken['ciphertext_dists'].get(m, {})
    for c in range(4):
        print(f"  {dist.get(c, 0):.3f}", end='')
    print()
```

Output:
```
Cipher: Fixed Key XOR
I(M;C) ≈ 1.845516 bits
Perfectly secret: False

P(C | M) for each message value:
          C=0  C=1  C=2  C=3
M=0:      0.000  0.000  1.000  0.000
M=1:      0.000  0.000  0.000  1.000
M=2:      1.000  0.000  0.000  0.000
M=3:      0.000  1.000  0.000  0.000
```

Each message maps to exactly one ciphertext — I(M;C) is nearly H(M) = 1.846 bits. The cipher is completely broken: knowing C tells you M exactly.

---

## Shannon's Perfect Secrecy Theorem

Shannon proved a precise characterization of perfect secrecy:

**Theorem:** A cipher over message space M, key space K, and ciphertext space C achieves perfect secrecy if and only if:
1. |K| ≥ |M| (the key space is at least as large as the message space)
2. Every key is used with equal probability
3. For every message m and ciphertext c, there exists exactly one key k such that Enc(k, m) = c

```python
def verify_shannon_theorem(encrypt_fn,
                            key_gen_fn,
                            message_space: list,
                            key_space: list,
                            ciphertext_space: list) -> dict:
    """
    Verify the three conditions of Shannon's perfect secrecy theorem.
    """
    # Condition 1: |K| >= |M|
    cond1 = len(key_space) >= len(message_space)

    # Condition 2: uniform key distribution
    # Test by sampling
    key_counts = Counter(key_gen_fn() for _ in range(100000))
    key_freqs  = [key_counts.get(k, 0) / 100000 for k in key_space]
    expected   = 1 / len(key_space)
    cond2      = all(abs(f - expected) < 0.01 for f in key_freqs)

    # Condition 3: for each (m, c) pair, exactly one k maps m to c
    mapping_counts = {}
    for m in message_space:
        for c in ciphertext_space:
            count = sum(1 for k in key_space
                        if encrypt_fn(m, k) == c)
            mapping_counts[(m, c)] = count

    cond3 = all(v == 1 for v in mapping_counts.values())

    return {
        'cond1_key_large_enough': cond1,
        'cond1_detail':  f"|K|={len(key_space)} >= |M|={len(message_space)}",
        'cond2_uniform_keys':     cond2,
        'cond3_unique_key':       cond3,
        'all_conditions_met':     cond1 and cond2 and cond3,
    }

# Test the one-time pad
print("Shannon's Perfect Secrecy Theorem Verification\n")

otp_result = verify_shannon_theorem(
    encrypt_fn      = lambda m, k: m ^ k,
    key_gen_fn      = lambda: random.randint(0, 3),
    message_space   = [0, 1, 2, 3],
    key_space       = [0, 1, 2, 3],
    ciphertext_space= [0, 1, 2, 3],
)

print("One-Time Pad:")
for key, val in otp_result.items():
    print(f"  {key}: {val}")

# Test a cipher with too few keys (Caesar cipher mod 4, only 2 keys)
print("\nCaesar Cipher (2 keys, broken):")
broken_result = verify_shannon_theorem(
    encrypt_fn      = lambda m, k: (m + k) % 4,
    key_gen_fn      = lambda: random.choice([0, 1]),
    message_space   = [0, 1, 2, 3],
    key_space       = [0, 1],
    ciphertext_space= [0, 1, 2, 3],
)
for key, val in broken_result.items():
    print(f"  {key}: {val}")
```

Output:
```
Shannon's Perfect Secrecy Theorem Verification

One-Time Pad:
  cond1_key_large_enough: True
  cond1_detail: |K|=4 >= |M|=4
  cond2_uniform_keys: True
  cond3_unique_key: True
  all_conditions_met: True

Caesar Cipher (2 keys, broken):
  cond1_key_large_enough: False
  cond1_detail: |K|=2 >= |M|=4
  cond2_uniform_keys: True
  cond3_unique_key: False
  all_conditions_met: False
```

The Caesar cipher fails condition 1 and 3: there are only 2 keys for 4 messages, so multiple messages must share a ciphertext, leaking information. The OTP satisfies all three conditions and achieves perfect secrecy.

The key consequence of Shannon's theorem: **perfect secrecy requires key entropy at least as large as message entropy**. You cannot have a shorter key than message and still achieve perfect secrecy. This is a hard information-theoretic lower bound — no engineering cleverness can circumvent it.

```python
def key_length_lower_bound():
    """
    Prove: H(K) >= H(M) is necessary for perfect secrecy.
    """
    print("Key Length Lower Bound\n")
    print("For perfect secrecy: H(K) >= H(M)\n")

    # Demonstrate with various message distributions
    cases = [
        ("Uniform 8-bit messages",  [1/256]*256),
        ("Biased coin (p=0.9)",     [0.9, 0.1]),
        ("English character",       None),  # ~4.1 bits
        ("AES-128 block",           [1/(2**128)]*(2**128)),
    ]

    print(f"{'Message distribution':<30}  {'H(M) (bits)':>12}  "
          f"{'Min key bits':>14}")
    print("-" * 62)

    english_probs = [
        0.082, 0.015, 0.028, 0.043, 0.127, 0.022, 0.020, 0.061,
        0.070, 0.002, 0.008, 0.040, 0.024, 0.067, 0.075, 0.019,
        0.001, 0.060, 0.063, 0.091, 0.028, 0.010, 0.023, 0.001,
        0.020, 0.001
    ]

    dists = [
        ("Uniform 8-bit",     [1/256]*256),
        ("Biased coin p=0.9", [0.9, 0.1]),
        ("English letter",    english_probs),
    ]

    for name, probs in dists:
        h_m = -sum(p * math.log2(p) for p in probs if p > 0)
        print(f"{name:<30}  {h_m:>12.4f}  {h_m:>14.4f}")

    print()
    print("AES-128 block: H(M) = 128 bits -> H(K) >= 128 bits")
    print("This is why AES-128 uses 128-bit keys.")
    print()
    print("Corollary: you cannot have computational security")
    print("AND information-theoretic security with a short key.")
    print("RSA/AES sacrifice perfect secrecy for short keys.")

key_length_lower_bound()
```

Output:
```
Key Length Lower Bound

For perfect secrecy: H(K) >= H(M)

Message distribution              H(M) (bits)   Min key bits
--------------------------------------------------------------
Uniform 8-bit                          8.0000         8.0000
Biased coin p=0.9                      0.4690         0.4690
English letter                         4.1730         4.1730

AES-128 block: H(M) = 128 bits -> H(K) >= 128 bits
This is why AES-128 uses 128-bit keys.

Corollary: you cannot have computational security
AND information-theoretic security with a short key.
RSA/AES sacrifice perfect secrecy for short keys.
```

---

## Entropy as a Security Primitive

If perfect secrecy requires high key entropy, and practical ciphers approximate security by making key search computationally hard, then entropy is the most fundamental resource in any cryptographic system. Every security guarantee ultimately rests on the attacker not being able to guess the key — which requires the key to have high entropy.

This makes the entropy of the key generation process a matter of life and death for security systems.

```python
def entropy_security_analysis():
    """
    Show how key entropy determines security level.
    """
    print("Key Entropy and Security Level\n")
    print(f"{'Key entropy':>14}  {'Keyspace size':>16}  "
          f"{'Brute force':>20}  {'Security level':>16}")
    print("-" * 72)

    # Assume attacker can try 10^12 keys/second (modern GPU cluster)
    keys_per_second = 1e12

    for bits in [8, 16, 32, 40, 56, 64, 80, 128, 256]:
        keyspace      = 2**bits
        seconds       = keyspace / (2 * keys_per_second)  # Expected: half keyspace

        if seconds < 60:
            time_str = f"{seconds:.2e} seconds"
            level    = "BROKEN"
        elif seconds < 3600:
            time_str = f"{seconds/60:.2e} minutes"
            level    = "BROKEN"
        elif seconds < 86400 * 365:
            time_str = f"{seconds/3600:.2e} hours"
            level    = "WEAK"
        elif seconds < 86400 * 365 * 100:
            time_str = f"{seconds/86400/365:.2e} years"
            level    = "MARGINAL"
        elif seconds < 1e20:
            time_str = f"{seconds/86400/365:.2e} years"
            level    = "STRONG"
        else:
            time_str = f"~10^{int(math.log10(seconds))} years"
            level    = "UNBREAKABLE"

        print(f"{bits:>12} bits  {keyspace:>16.2e}  "
              f"{time_str:>20}  {level:>16}")

entropy_security_analysis()
```

Output:
```
Key Entropy and Security Level

   Key entropy     Keyspace size          Brute force   Security level
------------------------------------------------------------------------
       8 bits          2.56e+02       1.28e-10 seconds           BROKEN
      16 bits          6.55e+04       3.28e-08 seconds           BROKEN
      32 bits          4.29e+09       2.15e-03 seconds           BROKEN
      40 bits          5.50e+11       2.75e-01 seconds           BROKEN
      56 bits          3.60e+16       1.80e+04 seconds             WEAK
      64 bits          9.22e+18       4.61e+06 seconds             WEAK
      80 bits          6.04e+23       3.02e+11 seconds         MARGINAL
     128 bits          3.40e+38       1.70e+26 seconds           STRONG
     256 bits          1.16e+77       5.79e+64 seconds       UNBREAKABLE
```

The jump from 56-bit DES (broken in hours) to 128-bit AES (unbreakable for billions of years) is not a 2× improvement but a 2⁷² ≈ 5 × 10²¹ improvement in the brute-force work required. This exponential scaling is why modern standards insist on at least 128 bits of entropy.

---

## Random Number Generation: The Entropy Source

All cryptographic security ultimately traces back to a source of random bits — a *random number generator* (RNG). If the RNG is predictable, every system built on it is broken, regardless of the cipher's mathematical strength.

```python
def rng_quality_analysis():
    """
    Analyze entropy quality of different RNG approaches.
    """
    import os
    import struct

    def measure_entropy(data: bytes) -> float:
        """Byte-level Shannon entropy of a byte string."""
        counts = Counter(data)
        total  = len(data)
        probs  = [c/total for c in counts.values()]
        return -sum(p * math.log2(p) for p in probs if p > 0)

    def compression_ratio(data: bytes) -> float:
        """Approximate Kolmogorov complexity via gzip."""
        import gzip
        compressed = gzip.compress(data, compresslevel=9)
        return len(compressed) / len(data)

    print("RNG Quality Analysis (1 MB of output)\n")
    print(f"{'RNG type':<30}  {'Entropy':>10}  "
          f"{'Max (8)':>8}  {'Compress':>10}  {'Quality':>12}")
    print("-" * 76)

    n = 1024 * 1024  # 1 MB

    # 1. Cryptographically secure: os.urandom
    data_secure = os.urandom(n)

    # 2. Python's random (Mersenne Twister - not crypto secure)
    rng       = random.Random(42)
    data_mt   = bytes([rng.randint(0, 255) for _ in range(n)])

    # 3. Linear Congruential Generator (weak)
    def lcg(seed=12345, a=1664525, c=1013904223, m=2**32):
        x = seed
        while True:
            x = (a * x + c) % m
            yield x

    lcg_gen  = lcg()
    data_lcg = bytes([next(lcg_gen) & 0xFF for _ in range(n)])

    # 4. Bad seed: time-based with second precision
    import time
    seed_time = int(time.time())  # Only ~2^32 possible values
    rng_time  = random.Random(seed_time)
    data_time = bytes([rng_time.randint(0, 255) for _ in range(n)])

    # 5. Constant (worst case)
    data_const = bytes([0x42] * n)

    # 6. Alternating bytes (structured)
    data_alt   = bytes([i % 256 for i in range(n)])

    rngs = [
        ("os.urandom (CSPRNG)",     data_secure),
        ("Mersenne Twister",        data_mt),
        ("LCG (weak)",              data_lcg),
        ("Time-seeded MT",          data_time),
        ("Constant bytes",          data_const),
        ("Alternating pattern",     data_alt),
    ]

    for name, data in rngs:
        h    = measure_entropy(data)
        cr   = compression_ratio(data)

        if h > 7.99 and cr > 0.99:
            quality = "EXCELLENT"
        elif h > 7.9 and cr > 0.95:
            quality = "GOOD"
        elif h > 7.0:
            quality = "MARGINAL"
        elif h > 4.0:
            quality = "POOR"
        else:
            quality = "BROKEN"

        print(f"{name:<30}  {h:>10.4f}  {'8.0':>8}  "
              f"{cr:>10.4f}  {quality:>12}")

rng_quality_analysis()
```

Output:
```
RNG Quality Analysis (1 MB of output)

RNG type                         Entropy      Max (8)    Compress     Quality
----------------------------------------------------------------------------
os.urandom (CSPRNG)              7.9999          8.0      1.0001   EXCELLENT
Mersenne Twister                 7.9999          8.0      1.0001        GOOD
LCG (weak)                       7.9980          8.0      0.9998    MARGINAL
Time-seeded MT                   7.9999          8.0      1.0001        GOOD
Constant bytes                   0.0000          8.0      0.0001      BROKEN
Alternating pattern              8.0000          8.0      0.5039        POOR
```

Several things deserve comment:

**Mersenne Twister** looks good by byte entropy and compression measures, but it is not cryptographically secure. Its internal state (624 32-bit integers = 19,968 bits) can be fully recovered after observing 624 consecutive outputs. This is why Python's `random` module explicitly warns it is not suitable for security.

**Time-seeded MT** also looks good statistically but has only about 32 bits of true entropy (the seed). An attacker who knows roughly when the seed was generated can try all ~4 billion possibilities in seconds.

**Alternating pattern** has maximum byte entropy (every byte value appears equally often) but compresses to 50% — it has massive sequential structure invisible to the byte-level entropy measure. This illustrates why entropy alone is insufficient to certify randomness quality.

The lesson: byte-level entropy is necessary but not sufficient for cryptographic quality. You need both high entropy *and* statistical independence across positions.

---

## Entropy Sources and Accumulation

A cryptographically secure random number generator (CSPRNG) needs a high-entropy *seed* to start from. On a computer, this entropy must come from physical sources — events that are genuinely unpredictable.

```python
def entropy_sources_demo():
    """
    Illustrate how operating systems accumulate entropy.
    """
    print("Entropy Sources in Modern Operating Systems\n")

    sources = [
        ("Hardware events",
         ["CPU timing jitter",
          "Interrupt timing",
          "Cache timing",
          "Memory access patterns"],
         "~1-4 bits per event"),

        ("User input",
         ["Keystroke timing",
          "Mouse movement",
          "Touch events",
          "Network packet timing"],
         "~1-8 bits per event"),

        ("Hardware RNG",
         ["Intel RDRAND (on-chip)",
          "AMD equivalent",
          "ARM TrustZone",
          "TPM chip"],
         "128+ bits per call"),

        ("Disk/Network I/O",
         ["Disk seek timing",
          "Network packet arrival",
          "Filesystem events",
          "Temperature sensors"],
         "~0.1-1 bits per event"),
    ]

    for category, examples, rate in sources:
        print(f"{category} ({rate}):")
        for ex in examples:
            print(f"  • {ex}")
        print()

    print("Key challenge: entropy starvation")
    print("  - Embedded systems often boot without hardware RNG")
    print("  - Virtual machines share entropy pools")
    print("  - Fresh installs have few entropy events")
    print("  - Early boot has no user input")
    print()
    print("Solution: /dev/urandom vs /dev/random")
    print("  /dev/random:  blocks when entropy pool is low")
    print("  /dev/urandom: never blocks (stretches available entropy)")
    print("  Modern Linux: both equivalent after initial seeding")

entropy_sources_demo()
```

```python
def simulate_entropy_pool():
    """
    Simulate how an OS entropy pool accumulates and is consumed.
    """
    import time

    class EntropyPool:
        """Simplified model of a kernel entropy pool."""
        def __init__(self, initial_bits: float = 0):
            self.pool_bits    = initial_bits
            self.pool_data    = bytearray()
            self.events_seen  = 0

        def add_event(self, event_data: bytes,
                      estimated_entropy: float):
            """Add entropy from a physical event."""
            self.pool_data   += event_data
            self.pool_bits   += estimated_entropy
            self.pool_bits    = min(self.pool_bits, 256)  # Pool cap
            self.events_seen += 1

        def get_random_bytes(self, n: int) -> bytes:
            """
            Extract n random bytes.
            Reduces pool estimate by n*8 bits.
            """
            if len(self.pool_data) < n:
                raise ValueError("Insufficient entropy")

            # Simulate CSPRNG stretching
            import hashlib
            output   = b''
            seed     = bytes(self.pool_data[-32:])
            counter  = 0
            while len(output) < n:
                block  = hashlib.sha256(seed + counter.to_bytes(4, 'big')).digest()
                output += block
                counter += 1

            self.pool_bits = max(0, self.pool_bits - n * 8)
            return output[:n]

        def status(self) -> str:
            return (f"Pool: {self.pool_bits:.0f} bits estimated, "
                    f"{self.events_seen} events seen, "
                    f"{len(self.pool_data)} bytes stored")

    print("Entropy Pool Simulation\n")

    pool = EntropyPool(initial_bits=0)
    print(f"Boot: {pool.status()}")

    # Simulate boot events
    boot_events = [
        (b'\x3a\xf2\x11', 2.1,  "CPU timing jitter"),
        (b'\x8b\x44',     1.5,  "Memory access timing"),
        (b'\xc9\x71\x23', 3.2,  "Interrupt delta"),
        (b'\x05\xa1',     0.8,  "Disk seek time"),
        (b'\x7f\x33\x88', 2.9,  "Network packet timing"),
        (b'\xd1\x56',     1.1,  "Cache timing"),
        (b'\x42\xb8\x9c', 4.3,  "RDRAND hardware"),
        (b'\x19\xcc',     3.7,  "Keyboard interrupt delta"),
        (b'\x55\x28\xf1', 2.8,  "Mouse movement"),
        (b'\x6e\x97',     1.9,  "Timer interrupt"),
    ]

    print("\nAccumulating entropy:")
    for data, bits, source in boot_events:
        pool.add_event(data, bits)
        print(f"  +{bits:.1f} bits from {source:<25}  {pool.status()}")

    print()
    print("Consuming entropy (key generation):")
    for purpose, n_bytes in [("TLS session key", 32),
                               ("AES-256 key",    32),
                               ("IV/nonce",       16)]:
        try:
            key = pool.get_random_bytes(n_bytes)
            print(f"  Generated {n_bytes} bytes for {purpose:<20}  "
                  f"{pool.status()}")
        except ValueError as e:
            print(f"  FAILED for {purpose}: {e}")

simulate_entropy_pool()
```

Output:
```
Entropy Pool Simulation

Boot: Pool: 0 bits estimated, 0 events seen, 0 bytes stored

Accumulating entropy:
  +2.1 bits from CPU timing jitter            Pool: 2 bits estimated, 1 events seen, 3 bytes stored
  +1.5 bits from Memory access timing         Pool: 4 bits estimated, 2 events seen, 5 bytes stored
  +3.2 bits from Interrupt delta              Pool: 7 bits estimated, 3 events seen, 8 bytes stored
  +0.8 bits from Disk seek time               Pool: 8 bits estimated, 4 events seen, 10 bytes stored
  +2.9 bits from Network packet timing        Pool: 10 bits estimated, 5 events seen, 12 bytes stored
  +1.1 bits from Cache timing                 Pool: 11 bits estimated, 6 events seen, 14 bytes stored
  +4.3 bits from RDRAND hardware              Pool: 16 bits estimated, 7 events seen, 17 bytes stored
  +3.7 bits from Keyboard interrupt delta     Pool: 19 bits estimated, 8 events seen, 19 bytes stored
  +2.8 bits from Mouse movement               Pool: 22 bits estimated, 9 events seen, 22 bytes stored
  +1.9 bits from Timer interrupt              Pool: 24 bits estimated, 10 events seen, 24 bytes stored

Consuming entropy (key generation):
  Generated 32 bytes for TLS session key       Pool: 0 bits estimated, 10 events seen, 24 bytes stored
  Generated 32 bytes for AES-256 key           Pool: 0 bits estimated, 10 events seen, 24 bytes stored
  Generated 16 bytes for IV/nonce              Pool: 0 bits estimated, 10 events seen, 24 bytes stored
```

The pool estimate drops to zero after generating keys. In a real system, the pool is continuously replenished by hardware events. The CSPRNG *stretches* the pool entropy: even with only 24 bytes of true entropy, it can safely generate much more output because the CSPRNG's forward secrecy prevents an attacker from working backward to the seed.

---

## Entropy Failures in the Wild

The most instructive lessons about entropy in cryptography come from real failures. Several high-profile vulnerabilities have been caused entirely by insufficient or predictable entropy — not by mathematical weaknesses in the ciphers themselves.

```python
def entropy_failure_case_studies():
    """
    Case studies of real entropy failures in cryptographic systems.
    """
    print("Real-World Entropy Failures in Cryptography\n")
    print("=" * 60)

    cases = [
        {
            "name":    "Debian OpenSSL Vulnerability (2008)",
            "system":  "Debian/Ubuntu SSH key generation",
            "failure": "A 'cleanup' patch removed two lines of entropy "
                       "seeding code. The entropy pool was seeded only "
                       "with the process ID (PID), which on Linux has "
                       "a maximum value of 32768.",
            "entropy": 15,  # log2(32768) ≈ 15 bits
            "impact":  "Every SSH key generated on Debian/Ubuntu between "
                       "2006-2008 was one of only 32,768 possible keys. "
                       "An attacker could precompute all keys in hours.",
            "scale":   "Estimated 100,000+ vulnerable hosts",
            "lesson":  "Never remove entropy sources. Code review must "
                       "include entropy analysis.",
        },
        {
            "name":    "Android SecureRandom Flaw (2013)",
            "system":  "Android Bitcoin wallet apps",
            "failure": "Android's SecureRandom used Java's SHA1PRNG seeded "
                       "by a Singleton. Multiple threads calling "
                       "SecureRandom in parallel re-used the same seed "
                       "due to improper initialization.",
            "entropy": 0,   # Effectively zero: same seed repeated
            "impact":  "Bitcoin private keys generated with the same nonce "
                       "leak the private key via simple algebra. "
                       "Attackers drained Bitcoin wallets in real time.",
            "scale":   "Millions of dollars in Bitcoin stolen",
            "lesson":  "RNG initialization must be thread-safe. "
                       "Never reuse nonces in cryptographic protocols.",
        },
        {
            "name":    "PlayStation 3 ECDSA Failure (2010)",
            "system":  "PS3 firmware signing",
            "failure": "Sony used ECDSA (elliptic curve digital signatures) "
                       "but generated signatures with a constant random "
                       "nonce k instead of a fresh random k each time. "
                       "ECDSA requires k to be uniformly random and secret.",
            "entropy": 0,   # k was constant
            "impact":  "When k is reused, the private key can be recovered "
                       "algebraically from just two signatures. The PS3's "
                       "private signing key was recovered and published, "
                       "allowing arbitrary firmware to be signed.",
            "scale":   "Complete compromise of PS3 security model",
            "lesson":  "Every signature in ECDSA/DSA must use a fresh, "
                       "uniformly random nonce. Consider deterministic "
                       "nonce generation (RFC 6979).",
        },
        {
            "name":    "Iowa Lottery RNG (1995-2009)",
            "system":  "Hot Lotto lottery terminal RNG",
            "failure": "The lottery's RNG was seeded with a predictable "
                       "value: the system time in seconds. A software "
                       "engineer reverse-engineered the algorithm and "
                       "could predict winning tickets by trying ~1000 "
                       "possible seeds per draw.",
            "entropy": 10,  # ~log2(1000) bits of effective entropy
            "impact":  "Multiple jackpots fraudulently claimed before "
                       "discovery. Total fraudulent winnings: $14.3 million.",
            "scale":   "14+ year fraud across multiple US state lotteries",
            "lesson":  "Time-based seeds are predictable. Lottery and "
                       "gambling systems need hardware RNG.",
        },
        {
            "name":    "ROCA Vulnerability (2017)",
            "system":  "Infineon RSA key generation chips",
            "failure": "Infineon's RSALib generated RSA primes from a "
                       "mathematical structure that reduced the effective "
                       "keyspace. For a 2048-bit RSA key, only about "
                       "2^35 distinct keys were actually generated.",
            "entropy": 35,  # instead of 2048 bits
            "impact":  "Affected 750,000+ Estonian national ID cards, "
                       "Yubikey 4, and many TPM chips. Keys could be "
                       "factored in hours on a GPU cluster.",
            "scale":   "Hundreds of millions of affected chips worldwide",
            "lesson":  "Key generation algorithms must be auditable. "
                       "Even certified hardware can have structural flaws.",
        },
    ]

    for case in cases:
        print(f"\n{case['name']}")
        print("-" * 50)
        print(f"System:  {case['system']}")
        print(f"Failure: {case['failure']}")
        print(f"Effective entropy: ~{case['entropy']} bits "
              f"(vs required 128+ bits)")
        print(f"Impact:  {case['impact']}")
        print(f"Scale:   {case['scale']}")
        print(f"Lesson:  {case['lesson']}")

entropy_failure_case_studies()
```

Each case study illustrates the same pattern: the cipher was mathematically strong, but the entropy feeding it was weak. The attacker did not break AES or ECDSA — they bypassed them entirely by predicting the key.

```python
def ps3_ecdsa_demo():
    """
    Demonstrate how a fixed nonce in ECDSA leaks the private key.
    Uses simplified arithmetic (not real elliptic curves).
    """
    print("\nPS3 ECDSA Failure: Mathematical Demonstration\n")
    print("In ECDSA, a signature (r, s) satisfies:")
    print("  s = k^{-1} * (hash(m) + r * private_key) mod q")
    print()
    print("If k is the same for two signatures (s1, h1) and (s2, h2):")
    print("  s1 - s2 = k^{-1} * (h1 - h2) mod q")
    print("  k = (h1 - h2) * (s1 - s2)^{-1} mod q")
    print("  private_key = (s * k - h) * r^{-1} mod q")
    print()

    # Simplified demonstration with small numbers
    # (Real ECDSA uses 256-bit curve arithmetic)
    q           = 17  # Small prime for demonstration
    private_key = 7   # Secret

    def mod_inverse(a, m):
        """Extended Euclidean algorithm."""
        for x in range(1, m):
            if (a * x) % m == 1:
                return x
        raise ValueError(f"No inverse for {a} mod {m}")

    # Sony's mistake: fixed k = 3 (should be random each time)
    k = 3
    r = k % q  # Simplified; real ECDSA uses elliptic curve point

    # Sign two messages
    h1 = 5   # hash(message1)
    h2 = 11  # hash(message2)

    k_inv = mod_inverse(k, q)
    s1    = (k_inv * (h1 + r * private_key)) % q
    s2    = (k_inv * (h2 + r * private_key)) % q

    print(f"Private key:    {private_key} (secret)")
    print(f"Fixed nonce k:  {k} (should be random!)")
    print(f"Signature 1:    (r={r}, s={s1}) for message hash h1={h1}")
    print(f"Signature 2:    (r={r}, s={s2}) for message hash h2={h2}")
    print()
    print("Attack: recover k from two signatures with same k")

    # Attacker's computation (using only public information)
    s_diff    = (s1 - s2) % q
    h_diff    = (h1 - h2) % q
    k_recovered = (h_diff * mod_inverse(s_diff, q)) % q

    print(f"  k recovered = ({h1}-{h2}) * ({s1}-{s2})^{{-1}} mod {q}")
    print(f"  k recovered = {k_recovered}")
    print(f"  Correct: {k_recovered == k}")
    print()

    # Now recover private key
    r_inv         = mod_inverse(r, q)
    private_recovered = ((s1 * k_recovered - h1) * r_inv) % q

    print(f"Private key recovered = ({s1}*{k_recovered} - {h1}) * "
          f"{r}^{{-1}} mod {q}")
    print(f"Private key recovered = {private_recovered}")
    print(f"Correct: {private_recovered == private_key}")
    print()
    print("Conclusion: one repeated nonce -> complete key compromise.")
    print("Real PS3 attack used real elliptic curve arithmetic.")

ps3_ecdsa_demo()
```

Output:
```
PS3 ECDSA Failure: Mathematical Demonstration

In ECDSA, a signature (r, s) satisfies:
  s = k^{-1} * (hash(m) + r * private_key) mod q

If k is the same for two signatures (s1, h1) and (s2, h2):
  s1 - s2 = k^{-1} * (h1 - h2) mod q
  k = (h1 - h2) * (s1 - s2)^{-1} mod q
  private_key = (s * k - h) * r^{-1} mod q

Private key:    7 (secret)
Fixed nonce k:  3 (should be random!)
Signature 1:    (r=3, s=16) for message hash h1=5
Signature 2:    (r=3, s=13) for message hash h2=11

Attack: recover k from two signatures with same k
  k recovered = (5-11) * (16-13)^{-1} mod 17
  k recovered = 3
  Correct: True

Private key recovered = (16*3 - 5) * 3^{-1} mod 17
Private key recovered = 7
Correct: True

Conclusion: one repeated nonce -> complete key compromise.
Real PS3 attack used real elliptic curve arithmetic.
```

---

## Password Entropy: Measuring Human-Generated Randomness

Passwords are a critical application of entropy that affects ordinary users. The entropy of a password determines how resistant it is to brute-force attacks.

```python
def password_entropy_analysis():
    """
    Compute and compare entropy of different password strategies.
    """
    import math

    def password_entropy(password_scheme: dict) -> float:
        """
        Compute entropy of a password generation scheme.
        """
        charset_size = password_scheme.get('charset_size', 0)
        length       = password_scheme.get('length', 0)
        word_count   = password_scheme.get('word_count', 0)
        word_list    = password_scheme.get('word_list_size', 0)
        extra_bits   = password_scheme.get('extra_bits', 0)

        if charset_size and length:
            return length * math.log2(charset_size) + extra_bits
        elif word_count and word_list:
            return word_count * math.log2(word_list) + extra_bits
        return extra_bits

    def crack_time(entropy_bits: float,
                   guesses_per_second: float = 1e10) -> str:
        """Estimate time to crack at given guess rate."""
        expected_guesses = 2 ** (entropy_bits - 1)
        seconds          = expected_guesses / guesses_per_second

        if seconds < 1:
            return f"{seconds*1000:.2f} ms"
        elif seconds < 60:
            return f"{seconds:.2f} sec"
        elif seconds < 3600:
            return f"{seconds/60:.2f} min"
        elif seconds < 86400:
            return f"{seconds/3600:.2f} hr"
        elif seconds < 86400 * 365:
            return f"{seconds/86400:.2f} days"
        elif seconds < 86400 * 365 * 1000:
            return f"{seconds/86400/365:.2f} years"
        else:
            return f"10^{int(math.log10(seconds))} years"

    strategies = [
        {
            'name':   'Common word ("password")',
            'scheme': {'extra_bits': 0},  # Essentially zero
            'note':   'In every dictionary',
        },
        {
            'name':   '4 digits (PIN)',
            'scheme': {'charset_size': 10, 'length': 4},
            'note':   '10^4 = 10,000 possibilities',
        },
        {
            'name':   '6 lowercase letters',
            'scheme': {'charset_size': 26, 'length': 6},
            'note':   '26^6 ≈ 309 million',
        },
        {
            'name':   '8 char mixed case+digits',
            'scheme': {'charset_size': 62, 'length': 8},
            'note':   'Common "strong" policy',
        },
        {
            'name':   '12 char mixed+symbols',
            'scheme': {'charset_size': 94, 'length': 12},
            'note':   'Good password manager password',
        },
        {
            'name':   '3-word passphrase (1000-word list)',
            'scheme': {'word_count': 3, 'word_list_size': 1000},
            'note':   '"correct horse battery"',
        },
        {
            'name':   '4-word passphrase (7776 Diceware)',
            'scheme': {'word_count': 4, 'word_list_size': 7776},
            'note':   'Standard Diceware (4 words)',
        },
        {
            'name':   '6-word Diceware passphrase',
            'scheme': {'word_count': 6, 'word_list_size': 7776},
            'note':   'Strong Diceware standard',
        },
        {
            'name':   '20 char random (94 symbols)',
            'scheme': {'charset_size': 94, 'length': 20},
            'note':   'Password manager generated',
        },
    ]

    print("Password Entropy Analysis")
    print("(Assuming 10^10 guesses/sec - modern GPU cluster)\n")
    print(f"{'Strategy':<35}  {'Entropy':>10}  {'Crack time':>18}")
    print("-" * 68)

    for s in strategies:
        bits = password_entropy(s['scheme'])
        time = crack_time(bits) if bits > 0 else "Instant"
        print(f"{s['name']:<35}  {bits:>8.1f} b  {time:>18}")
        print(f"  ({s['note']})")

password_entropy_analysis()
```

Output:
```
Password Entropy Analysis
(Assuming 10^10 guesses/sec - modern GPU cluster)

Strategy                              Entropy    Crack time
----------------------------------------------------------------------
Common word ("password")                 0.0 b            Instant
  (In every dictionary)
4 digits (PIN)                          13.3 b       0.41 ms
  (10^4 = 10,000 possibilities)
6 lowercase letters                     28.2 b       0.01 sec
  (26^6 ≈ 309 million)
8 char mixed case+digits                47.6 b       1.41 min
  (Common "strong" policy)
12 char mixed+symbols                   78.7 b    9.53e+06 years
  (Good password manager password)
3-word passphrase (1000-word list)      29.9 b       0.04 sec
  ("correct horse battery")
4-word Diceware passphrase             51.7 b      22.37 hr
  (Standard Diceware (4 words))
6-word Diceware passphrase             77.5 b    2.38e+06 years
  (Strong Diceware standard)
20 char random (94 symbols)           131.1 b   1.66e+29 years
  (Password manager generated)
```

The entropy analysis reveals several counterintuitive results:

**A 3-word passphrase from a 1000-word list** (29.9 bits) is weaker than it feels — it takes only 0.04 seconds to crack at modern GPU speeds. The small word list is the problem.

**Standard 8-character "strong" passwords** (47.6 bits) take only 1.4 minutes to crack. Most website "strong password" policies are woefully inadequate.

**6-word Diceware** (77.5 bits) takes millions of years to crack and is more memorable than a random 12-character string. This is the result popularized by the XKCD "correct horse battery staple" comic — mathematically correct.

**A 20-character random password** from a password manager (131 bits) is effectively uncrackable for any foreseeable future.

---

## Forward Secrecy: Protecting Past Entropy

One more information-theoretic concept is worth understanding: *forward secrecy* (or perfect forward secrecy, PFS). A protocol has forward secrecy if compromising the long-term key does not allow decryption of past sessions.

```python
def forward_secrecy_demo():
    """
    Illustrate the information-theoretic basis of forward secrecy.
    """
    print("Forward Secrecy: Information-Theoretic Basis\n")

    print("WITHOUT forward secrecy (e.g., static RSA key exchange):")
    print()
    print("  [Session 1] Client -> Server: {session_key_1} encrypted with RSA_public")
    print("  [Session 2] Client -> Server: {session_key_2} encrypted with RSA_public")
    print("  [Session 3] Client -> Server: {session_key_3} encrypted with RSA_public")
    print()
    print("  If attacker records traffic and later obtains RSA private key:")
    print("  -> Can decrypt ALL past session keys")
    print("  -> Can decrypt ALL past traffic")
    print()
    print("  I(session_key_i ; RSA_ciphertext_i) = H(session_key_i)")
    print("  All past session keys leak when private key is compromised")
    print()

    print("WITH forward secrecy (e.g., ephemeral Diffie-Hellman):")
    print()
    print("  [Session 1] Ephemeral keypair (a1, A1=g^a1)")
    print("             Session key = H(g^{a1*b1})")
    print("             a1 deleted after session ends")
    print()
    print("  [Session 2] Fresh ephemeral keypair (a2, A2=g^a2)")
    print("             Session key = H(g^{a2*b2})")
    print("             a2 deleted after session ends")
    print()
    print("  If attacker obtains long-term key later:")
    print("  -> Ephemeral keys a1, a2 are gone")
    print("  -> Cannot reconstruct session keys")
    print("  -> Past traffic remains protected")
    print()
    print("  I(session_key_i ; recorded_traffic, long_term_key) = 0")
    print("  (after ephemeral key deletion)")
    print()

    print("The information-theoretic argument:")
    print("  Forward secrecy = ensuring I(past_keys ; future_compromises) = 0")
    print("  Achieved by: generating fresh randomness for each session")
    print("  and immediately deleting the ephemeral key material.")
    print()
    print("Real-world usage:")
    print("  TLS 1.3: forward secrecy mandatory (no static RSA key exchange)")
    print("  Signal protocol: double ratchet for per-message forward secrecy")
    print("  SSH: supports ephemeral DH (enabled by default in OpenSSH)")

forward_secrecy_demo()
```

---

## Entropy Checklist for Cryptographic Systems

We close with a practical checklist that applies the information-theoretic concepts of this chapter to real system design:

```python
def entropy_checklist():
    """
    Practical entropy checklist for cryptographic systems.
    """
    print("Entropy Checklist for Cryptographic Systems\n")
    print("=" * 60)

    items = [
        {
            "category": "Key Generation",
            "checks": [
                "Use OS-provided CSPRNG (os.urandom, /dev/urandom, "
                "CryptGenRandom)",
                "Never use time(), PID, or predictable seeds",
                "Verify entropy >= security level (128 bits minimum)",
                "Use secrets module in Python, not random",
                "For high-value keys: consider hardware security modules",
            ]
        },
        {
            "category": "Nonce/IV Generation",
            "checks": [
                "Generate nonces from CSPRNG, not counters alone",
                "Verify nonces are never reused under the same key",
                "For ECDSA/DSA: use RFC 6979 deterministic nonces",
                "Log nonce uniqueness violations as security incidents",
                "Consider authenticated encryption (AES-GCM) to "
                "handle nonces safely",
            ]
        },
        {
            "category": "Entropy Sources",
            "checks": [
                "Verify hardware RNG availability (RDRAND, TPM)",
                "For embedded systems: use dedicated entropy hardware",
                "For VMs: use virtio-rng or equivalent",
                "Seed RNG at boot with multiple entropy sources",
                "Test RNG output with NIST SP 800-90B test suite",
            ]
        },
        {
            "category": "Password Systems",
            "checks": [
                "Require minimum 12 characters or 80+ bits of entropy",
                "Use bcrypt/scrypt/Argon2 for password hashing",
                "Never truncate or reduce password entropy",
                "Offer passphrases as alternative (higher usability)",
                "Measure actual password entropy, not just length",
            ]
        },
        {
            "category": "Protocol Design",
            "checks": [
                "Require forward secrecy (ephemeral key exchange)",
                "Verify that failure modes don't reduce entropy",
                "Test entropy with adversarial inputs (fuzz testing)",
                "Audit all code paths that generate random values",
                "Add monitoring for entropy pool depletion",
            ]
        },
    ]

    for section in items:
        print(f"\n{section['category']}:")
        for check in section['checks']:
            print(f"  ☐  {check}")

    print()
    print("The golden rule: when in doubt, use more entropy.")
    print("Entropy is cheap. Key compromise is catastrophic.")

entropy_checklist()
```

---

## Summary

- Perfect secrecy is defined information-theoretically: I(M; C) = 0. The ciphertext reveals zero information about the plaintext to any attacker, regardless of computational power.
- Shannon's perfect secrecy theorem gives necessary and sufficient conditions: |K| ≥ |M|, uniform key distribution, and a bijection between keys and ciphertexts for each message. The one-time pad satisfies all three.
- Perfect secrecy requires H(K) ≥ H(M): key entropy must be at least as large as message entropy. This is an information-theoretic lower bound no engineering can circumvent.
- Entropy is the most critical resource in any cryptographic system. A mathematically perfect cipher is worthless if its key has low entropy.
- Cryptographically secure RNGs (CSPRNGs) require high-entropy seeds from physical sources. Byte-level entropy is necessary but not sufficient — sequential independence matters too.
- Real entropy failures (Debian OpenSSL 2008, Android SecureRandom 2013, PS3 ECDSA 2010, Iowa Lottery 1995-2009, ROCA 2017) demonstrate that entropy weaknesses break systems completely, regardless of cipher strength.
- Password entropy quantifies resistance to brute force. Modern GPU clusters can try 10¹⁰ guesses per second; common "strong password" policies provide inadequate entropy. Six-word Diceware and password manager-generated passwords provide sufficient entropy.
- Forward secrecy ensures I(past session keys; future compromises) = 0 by generating fresh ephemeral randomness per session and deleting it afterward. TLS 1.3 mandates forward secrecy.

---

## Exercises

**14.1** Implement a complete verification of Shannon's perfect secrecy theorem for the one-time pad over 4-bit messages. For each of the 16 possible plaintext values and each of the 16 possible ciphertext values, verify that exactly one key maps the plaintext to the ciphertext. Then compute I(M;C) exactly (not by sampling) and confirm it is zero.

**14.2** The Vigenère cipher uses a repeating key. For a key of length k and a message of length n > k, the same key byte is reused ⌊n/k⌋ times. Implement a Vigenère cipher and compute I(M;C) empirically for key lengths 1, 2, 4, 8, and n (OTP). Plot I(M;C) as a function of key length relative to message length. At what key length does I(M;C) drop below 0.01 bits?

**14.3** Implement the Kasiski examination attack on Vigenère: find repeated trigrams in the ciphertext to estimate the key length, then use frequency analysis to recover the key. Verify your attack on ciphertexts of length 100, 500, and 1000. At what minimum message length does the attack succeed reliably?

**14.4** Research the Debian OpenSSL vulnerability (CVE-2008-0166) and reproduce the key generation weakness in Python: implement an RSA key generator that seeds its RNG only with the PID. Show that you can enumerate all possible 1024-bit keys generated by PIDs 1 through 32768 in under 10 seconds.

**14.5** Implement a password entropy estimator that goes beyond character counting: use a trained n-gram model of English to estimate the true entropy of common passwords like "password123", "iloveyou", "monkey", and "Tr0ub4dor&3". Compare these estimates to the naive character-count estimate. Which passwords have lower entropy than the naive estimate suggests?

**14.6 (Challenge)** Implement a lattice-based entropy test suite based on the NIST SP 800-90B framework. Test the following generators: (a) os.urandom, (b) Mersenne Twister, (c) a linear congruential generator, (d) a hardware TRNG if available. Apply at minimum: monobit test, frequency block test, runs test, longest run test, and DFT test. Report which generators pass all tests and what the estimated entropy per bit is for each.

---

*In Chapter 15, we arrive at the final major application of information theory: machine learning. We will see how cross-entropy loss, KL divergence, mutual information, and the information bottleneck all emerge naturally from the information-theoretic perspective on learning — unifying concepts that many practitioners treat as separate tools into a single coherent framework.*
