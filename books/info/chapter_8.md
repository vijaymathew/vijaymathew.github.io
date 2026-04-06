# Chapter 8: The Channel Model

## A New Kind of Problem

Everything in Part II was about sources: how much information a source produces, how to represent that information efficiently, how to compress it toward the entropy limit. The enemy was redundancy — wasted bits that a good encoder could eliminate.

Part III is about something different. The enemy is no longer redundancy. The enemy is noise.

When you send data across a network, write to a disk, transmit a radio signal, or burn a CD, the physical medium introduces errors. Bits flip. Packets corrupt. Signals attenuate. The question is no longer "how do we represent information efficiently?" but "how do we communicate information *reliably* when the channel between sender and receiver is imperfect?"

This question seems fundamentally different from compression. But Shannon showed in 1948 that both questions have the same mathematical foundation — and that the answer to the noisy channel question is, in its own way, just as surprising as the source coding theorem.

The surprise: **you can communicate with arbitrarily small error probability over any noisy channel, as long as you transmit below a certain rate.** That rate is called the *channel capacity*, and it depends only on the statistics of the channel's noise — not on the specific messages you want to send.

This chapter builds the mathematical machinery to understand that claim. We will construct the channel model, define capacity, compute it for several important channels, and understand what the theorem says — and, crucially, what it does not say.

---

## What Is a Channel?

A *channel* is an abstraction of any physical medium that transmits information. It has:

- An **input alphabet** X — the set of symbols the sender can transmit.
- An **output alphabet** Y — the set of symbols the receiver observes.
- A **transition probability** p(y|x) — the probability of observing output *y* when input *x* was sent.

The transition probability is the channel's noise model. It captures everything about how the channel distorts the input. A noiseless channel has p(y|x) = 1 when y = x and 0 otherwise. A completely random channel has p(y|x) = 1/|Y| regardless of x — the output is independent of the input.

```python
import math
from collections import defaultdict

class Channel:
    """
    A discrete memoryless channel (DMC).
    Defined by input alphabet, output alphabet, and transition matrix.
    """
    def __init__(self, inputs: list, outputs: list,
                 transition: dict):
        """
        transition: dict mapping (x, y) -> p(y|x)
        Must satisfy: sum_y p(y|x) = 1 for all x.
        """
        self.inputs     = inputs
        self.outputs    = outputs
        self.transition = transition
        self._validate()

    def _validate(self):
        for x in self.inputs:
            total = sum(self.transition.get((x, y), 0)
                        for y in self.outputs)
            if abs(total - 1.0) > 1e-9:
                raise ValueError(
                    f"Transition probabilities for input '{x}' "
                    f"sum to {total}, not 1.0"
                )

    def p(self, x, y) -> float:
        """P(output=y | input=x)"""
        return self.transition.get((x, y), 0.0)

    def transmit(self, x) -> str:
        """Simulate transmitting symbol x through the channel."""
        import random
        outputs = self.outputs
        probs   = [self.p(x, y) for y in outputs]
        return random.choices(outputs, weights=probs)[0]

    def transition_matrix(self) -> list:
        """Return the transition matrix as a nested list."""
        return [
            [self.p(x, y) for y in self.outputs]
            for x in self.inputs
        ]
```

Let's define some standard channels:

```python
def binary_symmetric_channel(p_error: float) -> Channel:
    """
    BSC(p): flips each bit independently with probability p_error.
    The most studied channel in information theory.
    """
    return Channel(
        inputs   = ['0', '1'],
        outputs  = ['0', '1'],
        transition = {
            ('0', '0'): 1 - p_error,
            ('0', '1'): p_error,
            ('1', '0'): p_error,
            ('1', '1'): 1 - p_error,
        }
    )

def binary_erasure_channel(p_erase: float) -> Channel:
    """
    BEC(p): erases each bit with probability p_erase,
    replacing it with '?' (erasure symbol).
    Models packet loss networks.
    """
    return Channel(
        inputs   = ['0', '1'],
        outputs  = ['0', '1', '?'],
        transition = {
            ('0', '0'): 1 - p_erase,
            ('0', '1'): 0.0,
            ('0', '?'): p_erase,
            ('1', '0'): 0.0,
            ('1', '1'): 1 - p_erase,
            ('1', '?'): p_erase,
        }
    )

def z_channel() -> Channel:
    """
    Z-channel: 0 is received perfectly, 1 may be received as 0.
    Models some optical communication systems.
    """
    return Channel(
        inputs   = ['0', '1'],
        outputs  = ['0', '1'],
        transition = {
            ('0', '0'): 1.0,
            ('0', '1'): 0.0,
            ('1', '0'): 0.5,
            ('1', '1'): 0.5,
        }
    )

# Visualize the BSC
bsc = binary_symmetric_channel(0.1)
print("Binary Symmetric Channel (p=0.1)")
print("Transition matrix P(Y|X):")
print(f"         {'0':>8} {'1':>8}")
for x in bsc.inputs:
    row = [f"{bsc.p(x, y):>8.3f}" for y in bsc.outputs]
    print(f"  X={x}:  {''.join(row)}")
```

Output:
```
Binary Symmetric Channel (p=0.1)
Transition matrix P(Y|X):
              0        1
  X=0:    0.900    0.100
  X=1:    0.100    0.900
```

---

## Simulating a Channel

Before computing capacity abstractly, let's get a feel for what channel noise actually does to data.

```python
def simulate_transmission(message: str, channel: Channel,
                           n_trials: int = 1) -> list:
    """
    Transmit a message through a channel n_trials times.
    Returns list of received messages.
    """
    results = []
    for _ in range(n_trials):
        received = ''.join(channel.transmit(bit) for bit in message)
        results.append(received)
    return results

def bit_error_rate(sent: str, received: str) -> float:
    """Fraction of bits that were corrupted (ignoring erasures)."""
    errors = sum(1 for s, r in zip(sent, received)
                 if r != '?' and s != r)
    bits   = sum(1 for r in received if r != '?')
    return errors / bits if bits > 0 else 0.0

# Demonstrate different channels
message = '1' * 100  # 100 ones

print(f"Original message (first 20): {message[:20]}")
print()

for name, channel in [
    ("BSC(0.01)",  binary_symmetric_channel(0.01)),
    ("BSC(0.10)",  binary_symmetric_channel(0.10)),
    ("BSC(0.30)",  binary_symmetric_channel(0.30)),
    ("BEC(0.20)",  binary_erasure_channel(0.20)),
]:
    received = simulate_transmission(message, channel)[0]
    ber      = bit_error_rate(message, received)
    print(f"{name:<12}  received: {received[:20]}  BER={ber:.3f}")
```

Output (random, will vary):
```
Original message (first 20): 11111111111111111111

BSC(0.01)    received: 11111111111111111111  BER=0.010
BSC(0.10)    received: 11101111101110111111  BER=0.090
BSC(0.30)    received: 01011101001110011101  BER=0.290
BEC(0.20)    received: 1?111?1?1?11111?1111  BER=0.000
```

Notice: the BSC flips bits randomly; the BEC erases bits (replacing them with `?`) but never corrupts the bits it does pass through. These different failure modes lead to different strategies for error correction.

---

## Mutual Information: The Information That Gets Through

The central question for a channel is: how much information about the input X does the output Y carry? We need to measure the *reduction in uncertainty about X* that observing Y provides.

This is exactly mutual information — the concept we previewed in Chapter 2.

The mutual information between input X and output Y is:

```
I(X; Y) = H(X) - H(X|Y)
         = H(Y) - H(Y|X)
         = H(X) + H(Y) - H(X, Y)
```

It measures the reduction in uncertainty about X when Y is observed — equivalently, the information the channel successfully transmits.

```python
def mutual_information(channel: Channel,
                       input_dist: dict) -> float:
    """
    Compute I(X;Y) for a channel with given input distribution.

    input_dist: dict mapping input symbols to probabilities.
    Returns mutual information in bits.
    """
    # Compute joint distribution P(X, Y)
    joint = {}
    for x in channel.inputs:
        for y in channel.outputs:
            joint[(x, y)] = input_dist.get(x, 0) * channel.p(x, y)

    # Marginal P(Y)
    p_y = defaultdict(float)
    for (x, y), p in joint.items():
        p_y[y] += p

    # Marginal P(X)
    p_x = input_dist

    # I(X;Y) = sum p(x,y) log [p(x,y) / (p(x) p(y))]
    mi = 0.0
    for (x, y), p_xy in joint.items():
        if p_xy > 0:
            px = p_x.get(x, 0)
            py = p_y.get(y, 0)
            if px > 0 and py > 0:
                mi += p_xy * math.log2(p_xy / (px * py))
    return mi

# Compute mutual information for BSC at different error rates
print("Mutual Information I(X;Y) for BSC")
print("with uniform input distribution P(X=0) = P(X=1) = 0.5\n")
print(f"{'Error rate p':>14} {'I(X;Y) bits':>14}")
print("-" * 30)

uniform_binary = {'0': 0.5, '1': 0.5}
for p in [0.0, 0.05, 0.10, 0.20, 0.30, 0.50]:
    bsc = binary_symmetric_channel(p)
    mi  = mutual_information(bsc, uniform_binary)
    print(f"{p:>14.2f} {mi:>14.4f}")
```

Output:
```
Mutual Information I(X;Y) for BSC
with uniform input distribution P(X=0) = P(X=1) = 0.5

  Error rate p    I(X;Y) bits
------------------------------
          0.00         1.0000
          0.05         0.7136
          0.10         0.5310
          0.20         0.2781
          0.30         0.1187
          0.50         0.0000
```

At p = 0 (no noise), the channel transmits exactly 1 bit per use — perfect transmission. At p = 0.5 (completely random), the output is independent of the input: I(X;Y) = 0. In between, mutual information decreases monotonically with noise.

Notice that mutual information depends on the *input distribution* we chose. With a different distribution — say, always sending 0 — the mutual information would be zero regardless of channel noise, because there is no uncertainty in the input for the channel to transmit.

This observation leads directly to the definition of channel capacity.

---

## Channel Capacity

The channel capacity is the *maximum* mutual information over all possible input distributions:

```
C = max_{P(X)} I(X; Y)
```

Capacity is a property of the channel alone — it is the best we can do, optimizing over our choice of input distribution. It is measured in bits per channel use.

```python
def channel_capacity_binary(channel: Channel,
                             n_points: int = 1000) -> tuple:
    """
    Compute channel capacity for a binary-input channel by
    searching over input distributions P(X=1) = p, P(X=0) = 1-p.
    Returns (capacity, optimal_p).
    """
    best_mi = 0.0
    best_p  = 0.5

    for i in range(n_points + 1):
        p   = i / n_points
        dist = {'0': 1 - p, '1': p}
        mi  = mutual_information(channel, dist)
        if mi > best_mi:
            best_mi = mi
            best_p  = p

    return best_mi, best_p

# Compute capacity for each channel
channels = {
    'BSC(0.00)': binary_symmetric_channel(0.00),
    'BSC(0.05)': binary_symmetric_channel(0.05),
    'BSC(0.10)': binary_symmetric_channel(0.10),
    'BSC(0.20)': binary_symmetric_channel(0.20),
    'BSC(0.50)': binary_symmetric_channel(0.50),
    'BEC(0.20)': binary_erasure_channel(0.20),
    'BEC(0.50)': binary_erasure_channel(0.50),
    'Z-channel': z_channel(),
}

print(f"{'Channel':<14} {'Capacity (bits)':>16} {'Optimal P(X=1)':>16}")
print("-" * 50)
for name, ch in channels.items():
    C, p_opt = channel_capacity_binary(ch)
    print(f"{name:<14} {C:>16.4f} {p_opt:>16.4f}")
```

Output:
```
Channel         Capacity (bits)   Optimal P(X=1)
--------------------------------------------------
BSC(0.00)                1.0000           0.5000
BSC(0.05)                0.7136           0.5000
BSC(0.10)                0.5310           0.5000
BSC(0.20)                0.2781           0.5000
BSC(0.50)                0.0000           0.5000
BEC(0.20)                0.8000           0.5000
BEC(0.50)                0.5000           0.5000
Z-channel                0.3219           0.4000
```

Several results here deserve comment.

**BSC capacity formula:** For the binary symmetric channel with crossover probability *p*, the capacity has a closed form:

```
C_BSC = 1 - H_b(p)
```

where H_b(p) = -p log₂(p) - (1-p) log₂(1-p) is the binary entropy function. At p = 0.1, C = 1 - H_b(0.1) = 1 - 0.469 = 0.531 bits — matching our computation.

**BEC capacity formula:** For the binary erasure channel with erasure probability ε:

```
C_BEC = 1 - ε
```

This is elegantly simple. If 20% of bits are erased, the channel delivers 80% of its maximum capacity. Unlike the BSC, the BEC is perfect on the bits it does pass — you lose capacity linearly with erasure probability, but what gets through is uncorrupted.

**Z-channel:** The optimal input distribution is not uniform (P(X=1) ≈ 0.40, not 0.5). Asymmetric channels generally have asymmetric optimal input distributions.

```python
def bsc_capacity(p: float) -> float:
    """Closed-form capacity of BSC(p)."""
    if p == 0 or p == 1:
        return 0.0 if p == 1 else 1.0
    return 1 + p * math.log2(p) + (1-p) * math.log2(1-p)

def bec_capacity(epsilon: float) -> float:
    """Closed-form capacity of BEC(epsilon)."""
    return 1 - epsilon

print("Closed-form vs numerical BSC capacity:")
print(f"{'p':>6}  {'Numerical':>12}  {'Formula':>12}  {'Match':>8}")
print("-" * 44)
for p in [0.0, 0.1, 0.2, 0.3, 0.5]:
    bsc      = binary_symmetric_channel(p)
    C_num, _ = channel_capacity_binary(bsc)
    C_form   = bsc_capacity(p)
    match    = abs(C_num - C_form) < 0.002
    print(f"{p:>6.1f}  {C_num:>12.4f}  {C_form:>12.4f}  "
          f"{'YES' if match else 'NO':>8}")
```

Output:
```
Closed-form vs numerical BSC capacity:
     p     Numerical      Formula     Match
--------------------------------------------
   0.0        1.0000        1.0000       YES
   0.1        0.5310        0.5310       YES
  0.2        0.2781        0.2781       YES
   0.3        0.1187        0.1187       YES
   0.5        0.0000        0.0000       YES
```

---

## The Channel Coding Theorem

We have defined capacity. Now comes the theorem that makes it matter.

**Shannon's Channel Coding Theorem (1948):**

For any discrete memoryless channel with capacity C, and any rate R < C, there exists a sequence of codes with:
- Block length n → ∞
- Rate approaching R bits per channel use
- Probability of error → 0

Furthermore, for any rate R > C, the probability of error is bounded away from zero for any sequence of codes.

In plain language:
- **Below capacity:** You can communicate reliably. Perfect reliability is achievable in the limit.
- **Above capacity:** You cannot communicate reliably. No code can drive the error rate to zero.

This is one of the most surprising results in the history of science. Before Shannon, the conventional wisdom was that noisy channels imposed a fundamental tradeoff: to reduce errors, you had to slow down. Shannon showed this was wrong. You do not have to slow down arbitrarily — you only have to stay below capacity. And below capacity, you can have *both* high rate *and* zero error.

```python
def channel_coding_theorem_illustration():
    """
    Illustrate the channel coding theorem by showing:
    1. Below capacity: error rate can be driven to zero with longer codes
    2. Above capacity: error rate stays bounded away from zero
    """
    import random
    random.seed(42)

    # Simple repetition code for BSC(0.1)
    # Capacity = 0.531 bits per channel use
    p_error = 0.1
    bsc     = binary_symmetric_channel(p_error)

    def repetition_encode(bit: str, n: int) -> str:
        """Encode by repeating n times."""
        return bit * n

    def repetition_decode(received: str) -> str:
        """Decode by majority vote."""
        ones  = received.count('1')
        zeros = received.count('0')
        return '1' if ones > zeros else '0'

    def simulate_repetition_code(n_reps: int,
                                  n_trials: int = 10000) -> float:
        """Measure block error rate for n-repetition code."""
        errors = 0
        for _ in range(n_trials):
            bit      = random.choice(['0', '1'])
            encoded  = repetition_encode(bit, n_reps)
            received = ''.join(bsc.transmit(b) for b in encoded)
            decoded  = repetition_decode(received)
            if decoded != bit:
                errors += 1
        return errors / n_trials

    print("Repetition code on BSC(0.1)")
    print(f"Channel capacity: {bsc_capacity(p_error):.4f} bits/use\n")
    print(f"{'Reps':>6} {'Rate (bits/use)':>18} {'Error rate':>12}")
    print("-" * 40)

    for n in [1, 3, 5, 9, 15, 25, 51]:
        rate     = 1 / n  # 1 bit per n channel uses
        err_rate = simulate_repetition_code(n)
        below    = "< C" if rate < bsc_capacity(p_error) else "> C"
        print(f"{n:>6} {rate:>18.4f} {err_rate:>12.4f}  {below}")

channel_coding_theorem_illustration()
```

Output:
```
Repetition code on BSC(0.1)
Channel capacity: 0.5310 bits/use

  Reps   Rate (bits/use)   Error rate
----------------------------------------
     1            1.0000       0.0989  > C
     3            0.3333       0.0285  < C
     5            0.2000       0.0087  < C
     9            0.1111       0.0007  < C
    15            0.0667       0.0000  < C
    25            0.0400       0.0000  < C
    51            0.0196       0.0000  < C
```

This demonstrates the theorem's first part: below capacity, longer codes drive the error rate toward zero. The 51-repetition code achieves essentially zero errors — at the cost of transmitting at only 1/51 ≈ 0.02 bits per channel use.

But this is a terrible code. The capacity is 0.531 bits per use, and we are achieving only 0.02. The channel coding theorem guarantees that *better codes exist* — codes that achieve rates close to 0.531 with near-zero error. Finding those codes efficiently is the subject of Chapter 9.

---

## The Converse: Above Capacity Is Impossible

The theorem has two parts. The achievability part says good codes exist below capacity. The *converse* says nothing works above capacity. Let's verify this for the repetition code at rate 1 (one bit per channel use, no redundancy):

```python
def converse_illustration():
    """
    Show that at rate 1.0 > C = 0.531, error rate stays bounded.
    """
    import random
    random.seed(42)

    results = []
    for p in [0.01, 0.05, 0.10, 0.20, 0.30, 0.50]:
        bsc      = binary_symmetric_channel(p)
        capacity = bsc_capacity(p)

        # Rate = 1.0 (no encoding, raw transmission)
        n_trials = 10000
        errors = 0
        for _ in range(n_trials):
            bit      = random.choice(['0', '1'])
            received = bsc.transmit(bit)
            if received != bit:
                errors += 1

        results.append((p, capacity, errors / n_trials))

    print("Raw transmission (rate=1.0) on BSC(p)")
    print(f"{'p':>6}  {'Capacity':>10}  {'Error rate':>12}  {'Rate > C?':>10}")
    print("-" * 44)
    for p, C, err in results:
        print(f"{p:>6.2f}  {C:>10.4f}  {err:>12.4f}  "
              f"{'YES' if 1.0 > C else 'NO':>10}")

converse_illustration()
```

Output:
```
Raw transmission (rate=1.0) on BSC(p)
     p    Capacity    Error rate   Rate > C?
--------------------------------------------
  0.01      0.9192        0.0087        YES
  0.05      0.7136        0.0507        YES
  0.10      0.5310        0.0991        YES
  0.20      0.2781        0.2069        YES
  0.30      0.1187        0.3034        YES
  0.50      0.0000        0.4951        YES
```

At rate 1.0 (always above capacity for p > 0), the measured error rate tracks *p* closely — it is just the raw channel error rate up to sampling noise. You cannot do better without adding redundancy.

---

## The Gaussian Channel and Shannon-Hartley

The channels we have studied so far are discrete — both input and output are symbols from a finite alphabet. Real communication systems — Wi-Fi, Ethernet, phone lines, fiber optics — are analog. They transmit continuous-valued signals over a channel corrupted by Gaussian (thermal) noise.

The *additive white Gaussian noise* (AWGN) channel model is:

```
Y = X + Z
```

where X is the transmitted signal, Z is Gaussian noise with variance N (written Z ~ N(0, N)), and Y is the received signal. The sender is constrained to signals with average power at most P.

The capacity of this channel is given by the Shannon-Hartley theorem:

```
C = (1/2) log₂(1 + P/N)  [bits per channel use]
```

Or for a channel with bandwidth W (in Hz):

```
C = W · log₂(1 + P/N)  [bits per second]
```

where P/N is now the signal-to-noise ratio (SNR).

```python
def shannon_hartley_capacity(bandwidth_hz: float,
                              snr_linear: float) -> float:
    """
    Shannon-Hartley theorem: capacity of AWGN channel.
    bandwidth_hz: channel bandwidth in Hz
    snr_linear:   signal-to-noise ratio (not in dB)
    Returns capacity in bits per second.
    """
    return bandwidth_hz * math.log2(1 + snr_linear)

def db_to_linear(snr_db: float) -> float:
    return 10 ** (snr_db / 10)

# Real-world examples
print("Shannon-Hartley capacity for real-world channels\n")
scenarios = [
    ("Phone line (POTS)",      3400,   30),   # 3.4 kHz, 30 dB SNR
    ("DSL (ADSL2+)",       2.2e6,   40),   # 2.2 MHz, 40 dB SNR
    ("WiFi 802.11n (2.4GHz)",  20e6,   25),   # 20 MHz, 25 dB SNR
    ("WiFi 802.11ac (5GHz)",   80e6,   30),   # 80 MHz, 30 dB SNR
    ("5G NR (sub-6GHz)",      100e6,   20),   # 100 MHz, 20 dB SNR
    ("Fiber optic (single λ)", 10e9,   40),   # 10 GHz, 40 dB SNR
]

print(f"{'Channel':<28} {'BW (Hz)':>12} {'SNR (dB)':>10} "
      f"{'Capacity':>14}")
print("-" * 68)
for name, bw, snr_db in scenarios:
    snr     = db_to_linear(snr_db)
    C       = shannon_hartley_capacity(bw, snr)

    if C >= 1e9:
        c_str = f"{C/1e9:.2f} Gbps"
    elif C >= 1e6:
        c_str = f"{C/1e6:.2f} Mbps"
    elif C >= 1e3:
        c_str = f"{C/1e3:.2f} kbps"
    else:
        c_str = f"{C:.2f} bps"

    print(f"{name:<28} {bw:>12.0f} {snr_db:>10} {c_str:>14}")
```

Output:
```
Shannon-Hartley capacity for real-world channels

Channel                       BW (Hz)   SNR (dB)       Capacity
--------------------------------------------------------------------
Phone line (POTS)                3400         30        33.89 kbps
DSL (ADSL2+)                  2200000         40        29.23 Mbps
WiFi 802.11n (2.4GHz)        20000000         25       166.19 Mbps
WiFi 802.11ac (5GHz)         80000000         30       797.38 Mbps
5G NR (sub-6GHz)            100000000         20       665.82 Mbps
Fiber optic (single λ)    10000000000         40       132.88 Gbps
```

These are the theoretical ceilings. Real systems achieve a fraction of these numbers because of practical constraints: overhead from headers and protocols, hardware limitations, interference, and the gap between ideal codes and real codes.

Let's explore the SNR-capacity tradeoff:

```python
def snr_capacity_tradeoff():
    """
    Show how capacity scales with SNR and bandwidth separately.
    Key insight: capacity grows logarithmically with SNR
    but linearly with bandwidth.
    """
    bandwidth = 1e6  # Fixed at 1 MHz

    snrs_db  = list(range(-10, 51, 5))
    snrs_lin = [db_to_linear(s) for s in snrs_db]
    caps     = [shannon_hartley_capacity(bandwidth, snr)
                for snr in snrs_lin]

    print("Capacity vs SNR (bandwidth = 1 MHz fixed)")
    print(f"{'SNR (dB)':>10} {'SNR (linear)':>14} {'Capacity (Mbps)':>16}")
    print("-" * 44)
    for snr_db, snr_lin, cap in zip(snrs_db, snrs_lin, caps):
        print(f"{snr_db:>10} {snr_lin:>14.1f} {cap/1e6:>16.4f}")

    print("\nKey observation:")
    print("Doubling SNR (adding ~3 dB) adds only 1 bit/s/Hz to capacity.")
    print("Doubling bandwidth doubles capacity exactly.")
    print("=> Bandwidth is more valuable than SNR in the high-SNR regime.")

snr_capacity_tradeoff()
```

Output:
```
Capacity vs SNR (bandwidth = 1 MHz fixed)
  SNR (dB)   SNR (linear)   Capacity (Mbps)
--------------------------------------------
       -10            0.1           0.1375
        -5            0.3           0.3964
         0            1.0           1.0000
         5            3.2           2.0574
        10           10.0           3.4594
        15           31.6           5.0278
        20          100.0           6.6582
        25          316.2           8.3094
        30         1000.0           9.9672
        35         3162.3          11.6272
        40        10000.0          13.2879
        45        31622.8          14.9487
        50       100000.0          16.6097

Key observation:
Doubling SNR (adding ~3 dB) adds only 1 bit/s/Hz to capacity.
Doubling bandwidth doubles capacity exactly.
=> Bandwidth is more valuable than SNR in the high-SNR regime.
```

This logarithmic relationship is why wireless engineers obsess over bandwidth (the denominator in MHz and GHz of spectrum auctions) rather than just cranking up transmitter power. At high SNR, adding more power yields diminishing returns — each doubling of power adds only 1 bit per second per hertz. But doubling bandwidth doubles capacity exactly.

---

## The Capacity of Common Systems

Let's compute how close real systems come to the Shannon limit:

```python
def spectral_efficiency_analysis():
    """
    Compare real system throughput to Shannon capacity limit.
    Spectral efficiency = actual_rate / bandwidth (bits/s/Hz)
    Shannon limit      = log2(1 + SNR)
    """
    def format_rate(rate_bps):
        if rate_bps >= 1e9:
            return f"{rate_bps/1e9:.1f} Gbps"
        if rate_bps >= 1e6:
            return f"{rate_bps/1e6:.1f} Mbps"
        if rate_bps >= 1e3:
            return f"{rate_bps/1e3:.1f} kbps"
        return f"{rate_bps:.1f} bps"

    systems = [
        # (name, bandwidth_hz, snr_db, actual_rate_bps)
        ("33.6k modem",      3400,     30,     33.6e3),
        ("ADSL2+",         2.2e6,     35,       24e6),
        ("VDSL2",           17e6,     40,      100e6),
        ("802.11g",         20e6,     20,       54e6),
        ("802.11n MIMO",    40e6,     25,      300e6),
        ("802.11ac 4x4",    80e6,     30,     1300e6),
        ("LTE Cat 6",       20e6,     20,      300e6),
        ("5G NR mmWave",   400e6,     15,     4000e6),
    ]

    print(f"{'System':<20} {'Shannon limit':>15} "
          f"{'Actual rate':>14} {'Efficiency':>12}")
    print("-" * 65)
    for name, bw, snr_db, rate in systems:
        snr      = db_to_linear(snr_db)
        limit    = shannon_hartley_capacity(bw, snr)
        eff      = rate / limit
        limit_str = format_rate(limit)
        rate_str  = format_rate(rate)
        print(f"{name:<20} {limit_str:>15} {rate_str:>14} {eff:>11.1%}")

spectral_efficiency_analysis()
```

Output:
```
System               Shannon limit    Actual rate   Efficiency
-----------------------------------------------------------------
33.6k modem              33.9 kbps      33.6 kbps       99.1%
ADSL2+                   25.6 Mbps      24.0 Mbps       93.8%
VDSL2                   225.9 Mbps     100.0 Mbps       44.3%
802.11g                 133.2 Mbps      54.0 Mbps       40.6%
802.11n MIMO            332.4 Mbps     300.0 Mbps       90.3%
802.11ac 4x4            797.4 Mbps       1.3 Gbps      163.0%
LTE Cat 6               133.2 Mbps     300.0 Mbps      225.3%
5G NR mmWave              2.0 Gbps       4.0 Gbps      198.9%
```

Some efficiencies exceed 100% — this seems to violate Shannon's theorem. The reason is that systems like 802.11ac, LTE Cat 6, and 5G NR combine multiple spatial streams and/or aggregated channels. The Shannon-Hartley formula above is for a single channel. Once you account for MIMO and carrier aggregation, the apparent violation disappears.

The 33.6k modem is already close to the single-channel Shannon limit of a telephone line, which is why classic dial-up modems plateaued where they did. Modern single-link systems in this toy table range from about 40% to 95% of the corresponding Shannon limit, while multi-stream systems exceed the single-link bound by opening multiple parallel channels.

---

## Discrete Memoryless Channels: The General Framework

Everything we have computed so far applies to a specific class of channels called *discrete memoryless channels* (DMCs). The term has two parts:

**Discrete:** Input and output alphabets are finite. (The AWGN channel is an exception — it is continuous, but we handle it separately via the Shannon-Hartley formula.)

**Memoryless:** Each channel use is independent. The noise on bit *n* does not depend on what happened at bits 1 through *n-1*. In mathematical notation:

```
p(y₁, y₂, ..., yₙ | x₁, x₂, ..., xₙ) = ∏ p(yᵢ | xᵢ)
```

The memoryless assumption is an idealization. Real channels have memory: burst errors on Ethernet, fading correlations in wireless channels, write-leveling patterns on SSDs. Handling channels with memory requires more sophisticated models (Markov channels, inter-symbol interference), but the DMC framework captures the essential ideas and applies surprisingly broadly.

```python
def is_memoryless_approximation_valid(channel: Channel,
                                       n_samples: int = 10000) -> dict:
    """
    Empirically test whether a channel appears memoryless by checking
    whether successive outputs have near-zero lag-1 mutual information.
    """
    import random
    from collections import Counter

    # Transmit a long sequence and collect pairs of consecutive outputs
    random.seed(42)
    inputs    = [random.choice(channel.inputs) for _ in range(n_samples)]
    outputs   = [channel.transmit(x) for x in inputs]

    # Empirical lag-1 mutual information I(Y_t ; Y_{t+1})
    pairs       = [(outputs[i], outputs[i+1]) for i in range(len(outputs)-1)]
    pair_counts = Counter(pairs)
    single      = Counter(outputs)
    total_pairs = len(pairs)
    total_single = len(outputs)

    lag_mi = 0.0
    for (y1, y2), count in pair_counts.items():
        p12 = count / total_pairs
        p1  = single[y1] / total_single
        p2  = single[y2] / total_single
        lag_mi += p12 * math.log2(p12 / (p1 * p2))

    return {
        'lag_mi_bits': lag_mi,
        'independent': lag_mi < 1e-3,
        'verdict':  'Memoryless (no detectable lag-1 dependence)'
                    if lag_mi < 1e-3
                    else 'Has memory (outputs correlated)',
    }

# Test our DMC channels -- they should be memoryless by construction
for name, ch in [("BSC(0.1)", binary_symmetric_channel(0.1)),
                  ("BEC(0.2)", binary_erasure_channel(0.2))]:
    result = is_memoryless_approximation_valid(ch)
    print(f"{name}: lag MI={result['lag_mi_bits']:.6f} bits  "
          f"{result['verdict']}")
```

Output (approximate):
```
BSC(0.1): lag MI=0.000005 bits  Memoryless (no detectable lag-1 dependence)
BEC(0.2): lag MI=0.000141 bits  Memoryless (no detectable lag-1 dependence)
```

Our simulated channels pass the independence test — as expected, since we constructed them to be memoryless.

---

## What the Channel Coding Theorem Does Not Say

Shannon's theorem is often misunderstood. Let us be precise about what it guarantees and what it does not.

**It guarantees existence, not construction.** Shannon proved that good codes *exist* — but his original proof was non-constructive. It did not tell you how to build them. Finding explicit codes that approach capacity efficiently took decades of subsequent work (turbo codes in 1993, LDPC codes revisited in the 1990s, polar codes in 2009). We will examine these in Chapter 9.

**It assumes unlimited block length.** The theorem achieves zero error only in the limit of infinitely long codes. Real systems must use finite block lengths, which means a nonzero floor on error probability. The gap between finite-length performance and the asymptotic limit is an active research area called *finite blocklength information theory*.

**It assumes the channel is known.** Capacity is defined for a specific channel transition matrix. In practice the channel changes — fading in wireless, aging in storage media. Codes designed for one channel may perform poorly on another. *Universal* codes and *adaptive* coding schemes address this.

**It says nothing about complexity.** A code might achieve capacity but require exponential time to encode or decode. Practical codes must balance performance and computational cost.

```python
def what_the_theorem_says():
    """Summarize the theorem's guarantees precisely."""
    print("Shannon's Channel Coding Theorem guarantees:")
    print()
    print("  FOR ANY rate R < C:")
    print("    EXISTS a sequence of codes with:")
    print("      - block length n -> infinity")
    print("      - rate -> R bits per channel use")
    print("      - error probability -> 0")
    print()
    print("  FOR ANY rate R > C:")
    print("    FOR ALL codes:")
    print("      error probability >= some epsilon > 0")
    print()
    print("The theorem does NOT guarantee:")
    print("  - How to construct the good codes")
    print("  - How fast the codes can be encoded/decoded")
    print("  - Performance at finite block lengths")
    print("  - Robustness to channel uncertainty")

what_the_theorem_says()
```

---

## Capacity as a Design Constraint

Understanding channel capacity changes how you think about system design. Every communication system — network protocol, storage format, wireless link — operates against a Shannon limit. Knowing where that limit is tells you how much headroom you have and where optimization efforts will pay off.

```python
def capacity_headroom_analysis():
    """
    Practical capacity headroom for a system design.
    """
    # A practical example: designing a storage system
    # SSD NAND flash has noise characteristics we can model

    print("Storage channel capacity analysis")
    print("(Simplified NAND flash model)\n")

    # MLC NAND flash: 2 bits per cell, but with noise
    # Model as a channel with 4 input levels and noise
    # (Highly simplified -- real NAND models are more complex)

    for snr_db, technology in [
        (30, "SLC NAND (1 bit/cell)"),
        (20, "MLC NAND (2 bits/cell)"),
        (15, "TLC NAND (3 bits/cell)"),
        (12, "QLC NAND (4 bits/cell)"),
    ]:
        snr      = db_to_linear(snr_db)
        # Effective capacity per cell (simplified)
        cap      = math.log2(1 + snr)

        print(f"{technology}")
        print(f"  SNR (approx):        {snr_db} dB")
        print(f"  Shannon limit:       {cap:.2f} bits/cell")
        print(f"  Nominal bits/cell:   "
              f"{1 if 'SLC' in technology else 2 if 'MLC' in technology else 3 if 'TLC' in technology else 4}")
        print()

capacity_headroom_analysis()
```

Output:
```
Storage channel capacity analysis
(Simplified NAND flash model)

SLC NAND (1 bit/cell)
  SNR (approx):        30 dB
  Shannon limit:       9.97 bits/cell
  Nominal bits/cell:   1

MLC NAND (2 bits/cell)
  SNR (approx):        20 dB
  Shannon limit:       6.66 bits/cell
  Nominal bits/cell:   2

TLC NAND (3 bits/cell)
  SNR (approx):        15 dB
  Shannon limit:       4.98 bits/cell
  Nominal bits/cell:   3

QLC NAND (4 bits/cell)
  SNR (approx):        12 dB
  Shannon limit:       4.07 bits/cell
  Nominal bits/cell:   4
```

Even QLC NAND (4 bits per cell) is well below the Shannon limit — there is room for error correction to operate. The error correction codes built into modern SSDs (LDPC codes) exploit exactly this headroom to deliver reliable storage from inherently noisy cells.

---

## Summary

- A channel is defined by input alphabet X, output alphabet Y, and transition probability p(y|x). The *discrete memoryless channel* (DMC) is the fundamental model.
- Mutual information I(X;Y) measures how much information about the input X is preserved in the output Y. It depends on both the channel and the input distribution.
- Channel capacity C = max_{P(X)} I(X;Y) is the maximum mutual information over all input distributions. It is a property of the channel alone.
- The BSC(p) has capacity 1 - H_b(p) bits. The BEC(ε) has capacity 1 - ε bits. Both are achieved by the uniform input distribution.
- Shannon's channel coding theorem: for any R < C, reliable communication is achievable. For any R > C, it is not. Capacity is the sharp dividing line.
- The Shannon-Hartley theorem gives AWGN channel capacity: C = W log₂(1 + SNR). Capacity grows logarithmically with SNR but linearly with bandwidth.
- The theorem guarantees existence of good codes but says nothing about how to construct them, their computational complexity, or their finite-length performance.
- Real single-channel links often operate anywhere from roughly 40% to 95% of the Shannon limit, depending on engineering tradeoffs. MIMO and other multi-antenna techniques exceed the single-channel Shannon limit by creating multiple parallel channels.

---

## Exercises

**8.1** Implement a general `channel_capacity(channel)` function that works for non-binary channels by performing gradient ascent over the input distribution simplex. Test it on the BSC and BEC against the known closed-form results. Then use it to compute the capacity of a ternary symmetric channel (3 inputs, 3 outputs, crossover probability p split equally among non-matching outputs).

**8.2** The *symmetric capacity* of a channel is the mutual information achieved by the uniform input distribution. For which channels does the symmetric capacity equal the true capacity? Prove that this is the case for the BSC and BEC, and find a channel where it is not (the Z-channel is a hint).

**8.3** Simulate the binary erasure channel at several erasure probabilities and verify empirically that the capacity formula C = 1 - ε holds, by measuring how much information can be transmitted reliably using a simple repetition code. At what code rate does the error rate floor above zero?

**8.4** The Shannon-Hartley theorem assumes Gaussian noise. Real-world noise can be impulsive (heavy-tailed). Research the capacity of a channel with Laplacian noise (Z ~ Laplace(0, b)) under a power constraint. How does it compare to the Gaussian case at the same noise power?

**8.5** Compute the capacity of a cascade of two BSC channels: BSC(p₁) followed by BSC(p₂). The combined channel is a BSC with crossover probability p₁(1-p₂) + p₂(1-p₁). Verify this formula and plot the combined capacity as a function of p₁ for fixed p₂ = 0.05.

**8.6 (Challenge)** Implement the Blahut-Arimoto algorithm for computing channel capacity numerically. The algorithm iterates between optimizing the input distribution and computing mutual information, and converges to the true capacity for any DMC. Verify it matches the closed-form results for BSC and BEC, then use it to compute the capacity of a 4-input, 4-output channel with a randomly generated (but valid) transition matrix.

---

*In Chapter 9, we finally answer the question the channel coding theorem raises: how do you actually build codes that approach capacity? We explore parity checks, Hamming codes, turbo codes, and LDPC codes — the error-correcting machinery that silently protects every bit you store or transmit.*
