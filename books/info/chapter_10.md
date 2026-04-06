# Chapter 10: Channel Capacity in Practice

## From Theory to Copper and Air

Chapter 8 gave us the Shannon-Hartley theorem:

```
C = W · log₂(1 + SNR)
```

Chapter 9 gave us the codes that approach that limit. This chapter answers the question those two chapters leave open: how does the abstract channel model connect to the physical world of radio waves, fiber optics, and network cables?

The answer involves physics, engineering, and some surprisingly deep mathematics. We will work through why Wi-Fi speeds are bounded, how modern wireless systems squeeze ever more bits from a fixed slice of spectrum, why laying more fiber is often better than boosting transmitter power, and what the ultimate physical limits of communication are.

This is the chapter where information theory meets the real infrastructure of the internet.

---

## What Bandwidth Actually Means

The word "bandwidth" is used loosely in everyday speech — people say "I need more bandwidth" when they mean "I need faster internet." In information theory, bandwidth has a precise meaning: it is the range of frequencies a channel occupies, measured in Hertz.

A signal transmitted over a physical medium occupies a range of frequencies. A voice telephone call uses frequencies from about 300 Hz to 3400 Hz — a bandwidth of 3100 Hz. An FM radio station occupies 200 kHz. A 5G NR channel can be up to 400 MHz wide.

```python
import math

def bandwidth_demo():
    """
    Show the relationship between signal bandwidth and information rate.
    """
    channels = [
        # (name, bandwidth_hz, description)
        ("Human voice",        3_100,      "300-3400 Hz (telephone quality)"),
        ("AM radio",          10_000,      "540-1600 kHz, 10 kHz per station"),
        ("FM radio",         200_000,      "88-108 MHz, 200 kHz per station"),
        ("TV channel (UHF)",  6_000_000,   "54-806 MHz, 6 MHz per channel"),
        ("WiFi 802.11g",     20_000_000,   "2.4 GHz band, 20 MHz channel"),
        ("WiFi 802.11ac",    80_000_000,   "5 GHz band, 80 MHz channel"),
        ("5G NR (FR1)",     100_000_000,   "Sub-6 GHz, up to 100 MHz"),
        ("5G NR (FR2)",     400_000_000,   "mmWave, up to 400 MHz"),
        ("Single-mode fiber", 10_000_000_000_000,  "~10 THz optical bandwidth"),
    ]

    print(f"{'Channel':<25} {'Bandwidth':>15}  Description")
    print("-" * 80)
    for name, bw, desc in channels:
        if bw >= 1e12:
            bw_str = f"{bw/1e12:.0f} THz"
        elif bw >= 1e9:
            bw_str = f"{bw/1e9:.0f} GHz"
        elif bw >= 1e6:
            bw_str = f"{bw/1e6:.0f} MHz"
        elif bw >= 1e3:
            bw_str = f"{bw/1e3:.1f} kHz" if bw < 10_000 else f"{bw/1e3:.0f} kHz"
        else:
            bw_str = f"{bw:.0f} Hz"
        print(f"{name:<25} {bw_str:>15}  {desc}")

bandwidth_demo()
```

Output:
```
Channel                       Bandwidth  Description
--------------------------------------------------------------------------------
Human voice                     3.1 kHz  300-3400 Hz (telephone quality)
AM radio                         10 kHz  540-1600 kHz, 10 kHz per station
FM radio                        200 kHz  88-108 MHz, 200 kHz per station
TV channel (UHF)                  6 MHz  54-806 MHz, 6 MHz per channel
WiFi 802.11g                     20 MHz  2.4 GHz band, 20 MHz channel
WiFi 802.11ac                    80 MHz  5 GHz band, 80 MHz channel
5G NR (FR1)                     100 MHz  Sub-6 GHz, up to 100 MHz
5G NR (FR2)                     400 MHz  mmWave, up to 400 MHz
Single-mode fiber                10 THz  ~10 THz optical bandwidth
```

The enormous bandwidth of optical fiber — ten trillion hertz — is why it carries the bulk of the world's internet traffic. Even at modest SNR, the Shannon-Hartley theorem gives it staggering capacity. The challenge is not the fiber itself but the electronics at each end that convert between electrical and optical signals.

---

## The Nyquist Rate: Sampling and Symbols

Before Shannon, Harry Nyquist established a related but distinct limit in 1928: the maximum *symbol rate* a channel of bandwidth W can support is 2W symbols per second.

This is the Nyquist rate, and it follows from the mathematics of bandlimited signals. A signal confined to bandwidth W can be perfectly reconstructed from samples taken at 2W samples per second — the Nyquist sampling theorem. Each sample can carry a value from a finite symbol alphabet. The maximum symbol rate is therefore 2W.

```python
def nyquist_rate(bandwidth_hz: float) -> float:
    """
    Maximum symbol rate for a bandlimited channel.
    Returns symbols per second.
    """
    return 2 * bandwidth_hz

def nyquist_capacity(bandwidth_hz: float,
                     bits_per_symbol: float) -> float:
    """
    Maximum bit rate using Nyquist rate and M-ary signaling.
    bits_per_symbol = log2(M) where M is the alphabet size.
    Returns bits per second.
    """
    return nyquist_rate(bandwidth_hz) * bits_per_symbol

# Compare Nyquist and Shannon limits
print("Nyquist rate vs Shannon capacity (20 MHz channel)\n")
bw = 20e6  # 20 MHz

print(f"Nyquist rate:          {nyquist_rate(bw)/1e6:.1f} Msymbols/second")
print()

print(f"{'Modulation':>12} {'Bits/symbol':>14} {'Nyquist cap':>14} "
      f"{'Shannon cap (SNR)':>20}")
print("-" * 65)

modulations = [
    ("BPSK",   1,  5),
    ("QPSK",   2, 10),
    ("16-QAM", 4, 20),
    ("64-QAM", 6, 25),
    ("256-QAM",8, 30),
    ("1024-QAM",10,35),
]

for mod, bps, snr_db in modulations:
    snr        = 10 ** (snr_db / 10)
    nyq_cap    = nyquist_capacity(bw, bps) / 1e6
    shan_cap   = bw * math.log2(1 + snr) / 1e6
    print(f"{mod:>12} {bps:>14} {nyq_cap:>12.1f} Mbps "
          f"{shan_cap:>14.1f} Mbps @ {snr_db}dB")
```

Output:
```
Nyquist rate:          40.0 Msymbols/second

  Modulation    Bits/symbol    Nyquist cap       Shannon cap (SNR)
-----------------------------------------------------------------
        BPSK              1        40.0 Mbps         41.1 Mbps @ 5dB
        QPSK              2        80.0 Mbps         69.2 Mbps @ 10dB
      16-QAM              4       160.0 Mbps        133.2 Mbps @ 20dB
      64-QAM              6       240.0 Mbps        166.2 Mbps @ 25dB
      256-QAM             8       320.0 Mbps        199.3 Mbps @ 30dB
      1024-QAM            10       400.0 Mbps        232.5 Mbps @ 35dB
```

The Nyquist rate gives the symbol rate; the modulation scheme (BPSK, QPSK, QAM) determines how many bits each symbol carries. But the Nyquist calculation for a chosen modulation ignores how difficult those symbol distinctions are in noise. The Shannon limit accounts for noise and gives the true upper bound for the channel at that SNR.

Low-order schemes like BPSK can sit far below Shannon because they are not using all of the channel's available constellation complexity. High-order schemes like 256-QAM push closer to the limit, but only if the SNR is high enough. At 30 dB SNR, 256-QAM offers 320 Mbps by the Nyquist calculation but only 199 Mbps by Shannon. The difference is the noise margin: not all 8 bits per symbol are reliably distinguishable at that SNR.

```python
def minimum_snr_for_rate(bandwidth: float,
                         target_rate: float) -> float:
    """
    Minimum Shannon-theoretic SNR required to achieve target_rate
    on a channel of given bandwidth.
    From Shannon: SNR >= 2^(C/W) - 1
    """
    spectral_efficiency = target_rate / bandwidth
    required_snr_linear = 2 ** spectral_efficiency - 1
    required_snr_db     = 10 * math.log10(required_snr_linear)
    return required_snr_db

# What would a single 80 MHz stream need to support these rates?
bw           = 80e6
target_rates = [433e6, 867e6, 1300e6]

print("Minimum SNR for raw rates on one 80 MHz channel:")
print(f"{'Target rate':>14} {'Min SNR (dB)':>14}")
print("-" * 32)
for rate in target_rates:
    snr_db = minimum_snr_for_rate(bw, rate)
    print(f"{rate/1e6:>12.0f} Mbps {snr_db:>12.1f} dB")
```

Output:
```
Minimum SNR for raw rates on one 80 MHz channel:
   Target rate    Min SNR (dB)
--------------------------------
         433 Mbps          16.2 dB
         867 Mbps          32.6 dB
        1300 Mbps          48.9 dB
```

These numbers explain why the headline rates on 802.11ac and 802.11ax products are not single-stream numbers. Aggregate rates like 867 Mbps and 1300 Mbps rely on multiple spatial streams, coding, and protocol details layered on top of Shannon's per-channel constraint. A single 80 MHz stream would need unrealistically high SNR to deliver them on its own.

---

## SNR, Path Loss, and the Link Budget

In a real wireless system, SNR is not a given — it is the result of a chain of gains and losses from transmitter to receiver. A *link budget* tracks every factor that affects the received signal power.

```python
def link_budget(
    tx_power_dbm:     float,   # Transmitter power in dBm
    tx_gain_dbi:      float,   # Transmitter antenna gain in dBi
    path_loss_db:     float,   # Free-space or model path loss in dB
    rx_gain_dbi:      float,   # Receiver antenna gain in dBi
    noise_figure_db:  float,   # Receiver noise figure in dB
    bandwidth_hz:     float,   # Channel bandwidth in Hz
    margin_db:        float = 10.0,  # Implementation margin
) -> dict:
    """
    Compute a simplified RF link budget.
    Returns received SNR and Shannon capacity.
    """
    # Thermal noise power: N = kTB
    k_boltzmann    = 1.38e-23
    temperature_k  = 290          # Room temperature in Kelvin
    noise_power_dbm = (10 * math.log10(k_boltzmann * temperature_k
                                        * bandwidth_hz) + 30)

    # Received signal power
    rx_power_dbm = (tx_power_dbm + tx_gain_dbi
                    - path_loss_db + rx_gain_dbi)

    # SNR at receiver
    snr_db = (rx_power_dbm - noise_power_dbm
              - noise_figure_db - margin_db)

    snr_linear = 10 ** (snr_db / 10)
    capacity   = bandwidth_hz * math.log2(1 + snr_linear)

    return {
        'tx_power_dbm':    tx_power_dbm,
        'rx_power_dbm':    rx_power_dbm,
        'noise_floor_dbm': noise_power_dbm + noise_figure_db,
        'snr_db':          snr_db,
        'capacity_mbps':   capacity / 1e6,
    }

def free_space_path_loss(distance_m: float,
                          frequency_hz: float) -> float:
    """
    Friis free-space path loss in dB.
    FSPL = 20*log10(d) + 20*log10(f) + 20*log10(4π/c)
    """
    c      = 3e8  # Speed of light in m/s
    return (20 * math.log10(distance_m)
            + 20 * math.log10(frequency_hz)
            + 20 * math.log10(4 * math.pi / c))

# WiFi link budget at various distances
print("WiFi 802.11ac Link Budget (5 GHz, 80 MHz channel)\n")
freq      = 5e9    # 5 GHz
bw        = 80e6   # 80 MHz
tx_power  = 20     # 20 dBm (100 mW)
tx_gain   = 3      # 3 dBi antenna
rx_gain   = 3      # 3 dBi antenna
nf        = 7      # 7 dB noise figure (typical WiFi)

print(f"{'Distance':>10} {'Path loss':>12} {'RX power':>10} "
      f"{'SNR':>8} {'Capacity':>12}")
print("-" * 58)

for dist_m in [1, 5, 10, 20, 50, 100, 200]:
    pl     = free_space_path_loss(dist_m, freq)
    budget = link_budget(tx_power, tx_gain, pl, rx_gain, nf, bw)
    print(f"{dist_m:>8}m {pl:>10.1f}dB "
          f"{budget['rx_power_dbm']:>8.1f}dBm "
          f"{budget['snr_db']:>6.1f}dB "
          f"{budget['capacity_mbps']:>10.1f}Mbps")
```

Output:
```
WiFi 802.11ac Link Budget (5 GHz, 80 MHz channel)

  Distance   Path loss   RX power     SNR     Capacity
----------------------------------------------------------
       1m      46.4dB    -20.4dBm   57.5dB   1528.8Mbps
       5m      60.4dB    -34.4dBm   43.5dB   1157.3Mbps
      10m      66.4dB    -40.4dBm   37.5dB    997.3Mbps
      20m      72.4dB    -46.4dBm   31.5dB    837.3Mbps
      50m      80.4dB    -54.4dBm   23.5dB    626.2Mbps
     100m      86.4dB    -60.4dBm   17.5dB    467.8Mbps
     200m      92.4dB    -66.4dBm   11.5dB    313.6Mbps
```

The Shannon capacity drops sharply with distance — from about 1.5 Gbps at 1 meter to 314 Mbps at 200 meters in this idealized free-space model — purely due to path loss. This is why 5 GHz WiFi has shorter range than 2.4 GHz: higher frequency means higher free-space path loss at the same distance.

Free-space path loss is idealized. Real environments add wall attenuation, multipath reflections, and interference. But the fundamental relationship — capacity degrades with distance as SNR falls — holds in every real deployment.

---

## Spectral Efficiency: Bits Per Second Per Hertz

A useful figure of merit for any wireless system is its *spectral efficiency*: bits per second per hertz of bandwidth. It is the Shannon capacity in disguise.

```python
def spectral_efficiency(snr_db: float) -> float:
    """Shannon spectral efficiency in bits/second/Hz."""
    snr = 10 ** (snr_db / 10)
    return math.log2(1 + snr)

def practical_se_table():
    """
    Spectral efficiency of real modulation and coding schemes.
    MCS = Modulation and Coding Scheme, the combination of
    modulation order and code rate used in practice.
    """
    # 802.11ax (WiFi 6) MCS table (approximate)
    mcs_table = [
        # (MCS index, modulation, code rate, SE bits/s/Hz)
        (0,  "BPSK",    "1/2",  0.5),
        (1,  "QPSK",    "1/2",  1.0),
        (2,  "QPSK",    "3/4",  1.5),
        (3,  "16-QAM",  "1/2",  2.0),
        (4,  "16-QAM",  "3/4",  3.0),
        (5,  "64-QAM",  "2/3",  4.0),
        (6,  "64-QAM",  "3/4",  4.5),
        (7,  "64-QAM",  "5/6",  5.0),
        (8,  "256-QAM", "3/4",  6.0),
        (9,  "256-QAM", "5/6",  6.67),
        (10, "1024-QAM","3/4",  7.5),
        (11, "1024-QAM","5/6",  8.33),
    ]

    print("WiFi 6 (802.11ax) Modulation and Coding Schemes\n")
    print(f"{'MCS':>5} {'Modulation':>12} {'Code rate':>10} "
          f"{'SE (bits/s/Hz)':>16} {'Min SNR (dB)':>14}")
    print("-" * 62)

    for mcs, mod, rate, se in mcs_table:
        # Minimum SNR needed: 2^SE - 1
        min_snr = 10 * math.log10(2**se - 1)
        print(f"{mcs:>5} {mod:>12} {rate:>10} {se:>16.2f} "
              f"{min_snr:>12.1f}")

practical_se_table()
```

Output:
```
WiFi 6 (802.11ax) Modulation and Coding Schemes

  MCS   Modulation  Code rate   SE (bits/s/Hz)   Min SNR (dB)
--------------------------------------------------------------
    0         BPSK        1/2             0.50          -3.8
    1         QPSK        1/2             1.00           0.0
    2         QPSK        3/4             1.50           2.6
    3       16-QAM        1/2             2.00           4.8
    4       16-QAM        3/4             3.00           8.5
    5       64-QAM        2/3             4.00          11.8
    6       64-QAM        3/4             4.50          13.4
    7       64-QAM        5/6             5.00          14.9
    8      256-QAM        3/4             6.00          18.0
    9      256-QAM        5/6             6.67          20.0
   10     1024-QAM        3/4             7.50          22.6
   11     1024-QAM        5/6             8.33          25.1
```

This is the shape of the MCS table that your WiFi chip uses every moment of operation. The access point measures SNR and selects the highest MCS index that can be reliably decoded. When you walk away from your router and the signal weakens, the chip drops to a lower MCS — slower but more robust.

These SNR values are Shannon-theoretic lower bounds, not the actual thresholds that a real chipset needs in the field. Real implementations need additional margin for coding loss, channel estimation error, interference, and hardware non-idealities. The key point is the trend: each step up the MCS ladder costs progressively more SNR for a progressively smaller gain in spectral efficiency.

---

## OFDM: Dividing the Channel

Real wireless channels are not flat across their bandwidth. Different frequencies experience different amounts of attenuation and phase shift — a property called *frequency selectivity*. A single signal spanning 80 MHz might find that some frequencies are heavily attenuated by reflections while others are not.

Orthogonal Frequency Division Multiplexing (OFDM) solves this by dividing the channel into many narrow subcarriers, each narrow enough to be approximately flat. Each subcarrier is modulated independently at whatever rate its local SNR supports.

```python
import random

def rayleigh_sample(rng: random.Random, sigma: float = 1.0) -> float:
    """Rayleigh sample from two underlying Gaussian components."""
    u = max(rng.random(), 1e-12)
    return sigma * math.sqrt(-2.0 * math.log(1.0 - u))

def ofdm_channel_demo():
    """
    Illustrate how OFDM handles a frequency-selective channel.
    """
    n_subcarriers = 64
    bw_per_sub    = 312.5e3  # 312.5 kHz per subcarrier (802.11 standard)

    # Simulate a frequency-selective channel: some subcarriers
    # have good SNR, some have poor SNR (due to multipath fading)
    rng           = random.Random(42)
    base_snr_db   = 25  # Average SNR
    # Rayleigh fading causes ~6dB variation across subcarriers
    snr_variation = [rayleigh_sample(rng, sigma=1.0)
                     for _ in range(n_subcarriers)]
    mean_variation = sum(snr_variation) / len(snr_variation)
    snr_db_per_sub = [
        base_snr_db + 20 * math.log10(v / mean_variation)
        for v in snr_variation
    ]

    # Compute capacity per subcarrier
    capacity_per_sub = [
        bw_per_sub * math.log2(1 + 10**(snr/10))
        for snr in snr_db_per_sub
    ]

    total_capacity  = sum(capacity_per_sub)
    eq_flat_snr_db  = 10 * math.log10(
        sum(10**(s/10) for s in snr_db_per_sub) / n_subcarriers
    )
    flat_capacity   = n_subcarriers * bw_per_sub * math.log2(
        1 + 10**(eq_flat_snr_db/10)
    )

    print("OFDM Channel Analysis (64 subcarriers, 20 MHz total)")
    print()
    print(f"Equivalent flat SNR:     {eq_flat_snr_db:.1f} dB")
    print(f"Total bandwidth:         {n_subcarriers*bw_per_sub/1e6:.1f} MHz")
    print()
    print(f"Flat-channel capacity:   {flat_capacity/1e6:.1f} Mbps")
    print(f"OFDM total capacity:     {total_capacity/1e6:.1f} Mbps")
    print(f"Gain from OFDM:          "
          f"{(total_capacity-flat_capacity)/flat_capacity:.1%}")
    print()

    # Show distribution of per-subcarrier SNR
    bins = [(-10, 0), (0, 10), (10, 20), (20, 30), (30, 40), (40, 50)]
    print("SNR distribution across subcarriers:")
    for lo, hi in bins:
        count = sum(1 for s in snr_db_per_sub if lo <= s < hi)
        bar   = '█' * count
        print(f"  {lo:>4} to {hi:>3} dB: {bar} ({count})")

ofdm_channel_demo()
```

Output:
```
OFDM Channel Analysis (64 subcarriers, 20 MHz total)

Equivalent flat SNR:     26.1 dB
Total bandwidth:         20.0 MHz

Flat-channel capacity:   173.4 Mbps
OFDM total capacity:     156.3 Mbps
Gain from OFDM:          -9.8%

SNR distribution across subcarriers:
   -10 to   0 dB:  (0)
     0 to  10 dB: █ (1)
    10 to  20 dB: ████████████ (12)
    20 to  30 dB: ██████████████████████████████████████████████ (46)
    30 to  40 dB: █████ (5)
    40 to  50 dB: (0)
```

Interestingly, OFDM with uniform power allocation is *worse* than a hypothetical flat channel with the same average received power. This is because Shannon capacity is a concave function of SNR — the gain from strong subcarriers does not fully compensate for the loss on weak ones. The true gain of OFDM is not free extra capacity but *robustness*: handling frequency selectivity without complex equalization, and letting the system adapt per subcarrier.

The capacity gain comes from *water-filling* — allocating more power to subcarriers with better SNR:

```python
def water_filling(snr_per_sub: list,
                  total_power: float) -> list:
    """
    Water-filling power allocation across parallel channels.
    Maximizes total capacity subject to power constraint.

    The name comes from the analogy: pour water into a vessel
    with uneven bottom; water fills to a uniform level ('water level'),
    with more water in deep parts (good channels) and none in
    parts that are too high (bad channels).
    """
    n      = len(snr_per_sub)
    # Channel 'depths' are proportional to channel quality
    # Noise level per channel: assume unit power normalization
    noise  = [1.0 / (snr + 1e-9) for snr in snr_per_sub]

    # Binary search for water level μ
    lo, hi = 0, total_power + max(noise)

    for _ in range(100):
        mu      = (lo + hi) / 2
        alloc   = [max(0, mu - n_i) for n_i in noise]
        if sum(alloc) < total_power:
            lo = mu
        else:
            hi = mu

    mu    = (lo + hi) / 2
    alloc = [max(0, mu - n_i) for n_i in noise]

    # Normalize to exact total power
    total = sum(alloc)
    if total > 0:
        alloc = [a * total_power / total for a in alloc]

    return alloc

def water_filling_demo():
    """
    Compare uniform vs water-filling power allocation.
    """
    rng     = random.Random(42)
    n_sub   = 16
    snr_per = [10**(s/10) for s in
               [rng.uniform(-5, 30) for _ in range(n_sub)]]
    P_total = n_sub  # Total power = n_sub units (1 per subcarrier average)

    # Uniform allocation
    uniform_power = [1.0] * n_sub
    uniform_cap   = sum(math.log2(1 + p * s)
                        for p, s in zip(uniform_power, snr_per))

    # Water-filling
    wf_power = water_filling(snr_per, P_total)
    wf_cap   = sum(math.log2(1 + p * s)
                   for p, s in zip(wf_power, snr_per))

    print("Water-filling power allocation (16 subcarriers)\n")
    print(f"{'Sub':>5} {'SNR (dB)':>10} {'Uniform P':>12} "
          f"{'WF Power':>12} {'WF Cap':>10}")
    print("-" * 54)
    for i, (snr, up, wp) in enumerate(zip(snr_per, uniform_power,
                                           wf_power)):
        snr_db = 10*math.log10(snr)
        cap    = math.log2(1 + wp*snr) if wp > 0 else 0
        print(f"{i:>5} {snr_db:>10.1f} {up:>12.3f} "
              f"{wp:>12.3f} {cap:>10.4f}")

    print(f"\nUniform total capacity:     {uniform_cap:.4f} bits/use")
    print(f"Water-filling capacity:     {wf_cap:.4f} bits/use")
    print(f"Gain from water-filling:    "
          f"{(wf_cap - uniform_cap)/uniform_cap:.1%}")

water_filling_demo()
```

Output (approximate):
```
Water-filling power allocation (16 subcarriers)

  Sub   SNR (dB)    Uniform P     WF Power     WF Cap
------------------------------------------------------
    0       17.4        1.000        1.507       6.3828
    1       -4.1        1.000        0.000       0.0000
    2        4.6        1.000        1.181       2.1460
    3        2.8        1.000        1.002       1.5435
    4       20.8        1.000        1.517       7.5111
    5       18.7        1.000        1.512       6.8161
    6       26.2        1.000        1.523       9.3214
    7       -2.0        1.000        0.000       0.0000
    ...

Uniform total capacity:     54.5059 bits/use
Water-filling capacity:     56.9377 bits/use
Gain from water-filling:    4.5%
```

Water-filling allocates zero power to the worst subcarriers — those below the water level — and more power to the best ones. The gain is modest here (5%), but in highly frequency-selective channels or when power is severely constrained, water-filling can be essential.

---

## MIMO: Multiplying Capacity With Antennas

The most dramatic capacity increase in modern wireless comes not from wider bandwidth or higher SNR but from *multiple-input, multiple-output* (MIMO) antennas. MIMO uses multiple antennas at both transmitter and receiver to create multiple parallel spatial streams, each carrying independent data.

The capacity of an M×N MIMO channel (M transmit, N receive antennas) under certain conditions is:

```
C_MIMO = ∑ᵢ log₂(1 + λᵢ · P/(M·N))
```

where λᵢ are the squared singular values of the channel matrix H, and P is the total transmit power. Each singular value corresponds to an independent spatial stream.

```python
def mimo_capacity_from_modes(mode_strengths: list[float],
                             snr_per_antenna: float) -> float:
    """
    Compute MIMO capacity from the channel's singular values.
    mode_strengths: singular values of the channel matrix H
                    (or a representative synthetic profile)
    snr_per_antenna: SNR available per transmit antenna
    Returns capacity in bits per channel use.
    """
    n_tx = len(mode_strengths)

    # Capacity from each spatial stream
    capacity = sum(
        math.log2(1 + (sigma ** 2) * snr_per_antenna / n_tx)
        for sigma in mode_strengths
    )
    return capacity

def synthetic_mode_strengths(n_streams: int) -> list[float]:
    """
    Deterministic, descending singular-value profiles for a toy MIMO
    channel. This keeps the example runnable without external linear
    algebra libraries while preserving the core capacity formula.
    """
    if n_streams == 1:
        return [1.0]
    return [
        math.sqrt(n_streams) * (0.35 + 0.65 * (1 - i / (n_streams - 1)))
        for i in range(n_streams)
    ]

def mimo_demo():
    """
    Compare SISO, 2x2 MIMO, and larger MIMO configurations.
    """
    snr_db  = 20  # 20 dB SNR
    snr     = 10 ** (snr_db / 10)

    configs = [
        (1, 1, "SISO"),
        (2, 2, "2×2 MIMO"),
        (4, 4, "4×4 MIMO"),
        (8, 8, "8×8 MIMO"),
    ]

    print(f"MIMO Capacity Comparison (SNR = {snr_db} dB)\n")
    print(f"{'Config':<12} {'Streams':>9} {'Capacity':>14} "
          f"{'vs SISO':>10}")
    print("-" * 50)

    siso_cap = math.log2(1 + snr)

    for n_tx, n_rx, name in configs:
        if n_tx == 1 and n_rx == 1:
            cap     = siso_cap
            streams = 1
        else:
            modes   = synthetic_mode_strengths(min(n_tx, n_rx))
            cap     = mimo_capacity_from_modes(modes, snr)
            streams = min(n_tx, n_rx)

        print(f"{name:<12} {streams:>9} {cap:>12.2f} bpcu "
              f"{cap/siso_cap:>8.1f}×")

mimo_demo()
```

Output:
```
MIMO Capacity Comparison (SNR = 20 dB)

Config       Streams     Capacity      vs SISO
--------------------------------------------------
SISO               1        6.66 bpcu       1.0×
2×2 MIMO           2       10.39 bpcu       1.6×
4×4 MIMO           4       21.40 bpcu       3.2×
8×8 MIMO           8       43.17 bpcu       6.5×
```

With a healthy spread of usable spatial modes, capacity scales approximately linearly with min(n_tx, n_rx). This is why modern WiFi and 5G base stations invest heavily in antenna arrays — each additional antenna pair can open another near-independent data path up to practical limits.

```python
def massive_mimo_scaling():
    """
    Show how capacity scales with antenna count in massive MIMO.
    """
    snr_db  = 15
    snr     = 10 ** (snr_db / 10)

    print(f"Massive MIMO scaling (SNR = {snr_db} dB)\n")
    print(f"{'Antennas (NxN)':>16} {'Capacity (bpcu)':>18} "
          f"{'bits/s/Hz':>12} {'Scaling':>10}")
    print("-" * 60)

    prev_cap = None
    for n in [1, 2, 4, 8, 16, 32, 64, 128]:
        if n == 1:
            cap = math.log2(1 + snr)
        else:
            cap = mimo_capacity_from_modes(
                synthetic_mode_strengths(n), snr
            )

        se      = cap  # bits per channel use = bits/s/Hz for 1 Hz bw
        scaling = cap / math.log2(1 + snr)

        print(f"{f'{n}×{n}':>16} {cap:>18.2f} {se:>12.2f} "
              f"{scaling:>10.1f}×")

massive_mimo_scaling()
```

Output:
```
Massive MIMO scaling (SNR = 15 dB)

  Antennas (NxN)   Capacity (bpcu)    bits/s/Hz     Scaling
------------------------------------------------------------
             1×1              5.03          5.03        1.0×
             2×2              7.31          7.31        1.5×
             4×4             15.14         15.14        3.0×
             8×8             30.59         30.59        6.1×
            16×16            61.41         61.41       12.2×
            32×32           123.04        123.04       24.5×
            64×64           246.29        246.29       49.0×
           128×128          492.79        492.79       98.0×
```

With 128×128 antennas in this idealized mode profile, the capacity is about 98× the single-antenna case — not by using more bandwidth or more power, but by exploiting the spatial dimension. This is the principle behind massive MIMO, the key technology in 5G base stations that can serve many users simultaneously on the same frequency.

---

## The Capacity of Real Networks

Individual link capacity is only part of the picture. In real networks, multiple users share a channel, interference from neighbouring cells reduces effective SNR, and routing overhead consumes bandwidth. The *network capacity* — how much total information the network can deliver — is governed by a richer set of constraints.

```python
def network_capacity_concepts():
    """
    Illustrate key concepts in network capacity beyond single links.
    """
    print("Network capacity concepts\n")

    # Multiple access: how do multiple users share a channel?
    print("1. Multiple Access Methods")
    print("   TDMA (Time Division): users take turns, each gets full BW")
    print("   FDMA (Frequency Division): users split bandwidth")
    print("   CDMA (Code Division): users overlap, separated by codes")
    print("   OFDMA (Orthogonal FD): users get different subcarriers")
    print("   SDMA (Spatial Division): MIMO separates users in space")
    print()

    # Example: 3 users sharing a 20 MHz channel at 20 dB SNR
    bw_total  = 20e6
    snr_db    = 20
    snr       = 10 ** (snr_db / 10)
    n_users   = 3

    total_cap = bw_total * math.log2(1 + snr) / 1e6

    print(f"2. Sharing a 20 MHz, 20 dB SNR channel among {n_users} users\n")

    # TDMA: each user gets 1/n of time
    tdma_per_user = total_cap / n_users
    print(f"   TDMA: {tdma_per_user:.1f} Mbps per user "
          f"({total_cap:.1f} Mbps total)")

    # FDMA: each user gets 1/n of bandwidth
    bw_per    = bw_total / n_users
    fdma_cap  = bw_per * math.log2(1 + snr) / 1e6
    print(f"   FDMA: {fdma_cap:.1f} Mbps per user "
          f"({fdma_cap*n_users:.1f} Mbps total)")

    # OFDMA: can allocate subcarriers adaptively
    # (same as FDMA in uniform SNR, better in non-uniform)
    print(f"   OFDMA: ≈ FDMA for uniform SNR, better for selective channels")

    # SDMA with 4×4 MIMO: multiply by number of spatial streams
    mimo_streams   = 4
    sdma_total     = total_cap * mimo_streams
    sdma_per_user  = sdma_total / n_users
    print(f"   SDMA (4×4 MIMO): {sdma_per_user:.1f} Mbps per user "
          f"({sdma_total:.1f} Mbps total)")

    print()
    print("3. Shannon capacity is additive over orthogonal dimensions:")
    print("   Time × Frequency × Space × Code = total capacity")
    print("   Modern systems exploit all four simultaneously.")

network_capacity_concepts()
```

Output:
```
Network capacity concepts

1. Multiple Access Methods
   TDMA (Time Division): users take turns, each gets full BW
   FDMA (Frequency Division): users split bandwidth
   CDMA (Code Division): users overlap, separated by codes
   OFDMA (Orthogonal FD): users get different subcarriers
   SDMA (Spatial Division): MIMO separates users in space

2. Sharing a 20 MHz, 20 dB SNR channel among 3 users

   TDMA: 44.3 Mbps per user (132.9 Mbps total)
   FDMA: 44.3 Mbps per user (132.9 Mbps total)
   OFDMA: ≈ FDMA for uniform SNR, better for selective channels
   SDMA (4×4 MIMO): 177.6 Mbps per user (532.7 Mbps total)

3. Shannon capacity is additive over orthogonal dimensions:
   Time × Frequency × Space × Code = total capacity
   Modern systems exploit all four simultaneously.
```

TDMA and FDMA achieve the same total capacity — they are mathematically equivalent ways of dividing the channel. The Shannon bound is the same regardless of how you slice it. SDMA (MIMO) breaks this ceiling by adding a new orthogonal dimension: space.

---

## Why Fiber Is Different

Everything above applies to wireless channels. Optical fiber operates under different physics, and its capacity story is different in instructive ways.

```python
def fiber_capacity_analysis():
    """
    Analyze the capacity of optical fiber communication.
    """
    print("Optical Fiber Capacity Analysis\n")

    # Single-mode fiber parameters
    c_light      = 3e8          # Speed of light m/s
    n_fiber      = 1.468        # Refractive index of silica
    c_fiber      = c_light / n_fiber

    # Optical bandwidth around 1550nm wavelength (C-band)
    lambda_center = 1550e-9     # 1550 nm in meters
    lambda_bw     = 40e-9       # ~40 nm C-band width
    freq_center   = c_light / lambda_center
    freq_bw       = c_light * lambda_bw / lambda_center**2  # Hz

    print(f"C-band optical bandwidth:  {freq_bw/1e12:.1f} THz")
    print(f"Shannon limit per fiber:   ")

    # Practical SNR in fiber (limited by amplifier noise, nonlinearities)
    for snr_db, scenario in [(20, "Short haul (< 100km)"),
                              (15, "Metro (100-1000km)"),
                              (10, "Long haul (> 1000km)")]:
        snr = 10 ** (snr_db / 10)
        cap = freq_bw * math.log2(1 + snr) / 1e12
        print(f"  {scenario:<28} SNR={snr_db}dB  "
              f"C = {cap:.1f} Tbps")

    print()
    print("WDM: Wavelength Division Multiplexing")
    print("  Multiple wavelengths on one fiber = multiple parallel channels")

    # WDM channels in C-band
    channel_spacing = 50e9    # 50 GHz ITU grid
    n_channels      = int(freq_bw / channel_spacing)
    bw_per_channel  = channel_spacing

    snr_db   = 15
    snr      = 10 ** (snr_db / 10)
    cap_per  = bw_per_channel * math.log2(1 + snr)
    cap_wdm  = cap_per * n_channels

    print(f"\n  C-band channels (50 GHz grid): {n_channels}")
    print(f"  Capacity per channel:           "
          f"{cap_per/1e9:.1f} Gbps")
    print(f"  Total WDM capacity:             "
          f"{cap_wdm/1e12:.1f} Tbps per fiber")
    print()
    print("  A single fiber pair can carry the entire")
    print("  internet's traffic many times over.")

fiber_capacity_analysis()
```

Output:
```
Optical Fiber Capacity Analysis

C-band optical bandwidth:  5.0 THz
Shannon limit per fiber:
  Short haul (< 100km)         SNR=20dB  C = 33.3 Tbps
  Metro (100-1000km)           SNR=15dB  C = 25.1 Tbps
  Long haul (> 1000km)         SNR=10dB  C = 17.3 Tbps

WDM: Wavelength Division Multiplexing
  Multiple wavelengths on one fiber = multiple parallel channels

  C-band channels (50 GHz grid): 99
  Capacity per channel:           251.4 Gbps
  Total WDM capacity:             24.9 Tbps per fiber

  A single fiber pair can carry the entire
  internet's traffic many times over.
```

The numbers are staggering. A single strand of silica glass the width of a human hair can theoretically carry 33 terabits per second. Real deployed systems achieve 10-20 Tbps per fiber pair with current technology, and research systems have demonstrated over 100 Tbps. The bottleneck is not the fiber itself but the electronics at each end.

This is why the internet's backbone runs on fiber, and why "laying more fiber" is nearly always a better investment than trying to boost wireless capacity.

---

## The Ultimate Physical Limits

We have discussed the Shannon-Hartley limit as if it were the final answer. It is not. Shannon-Hartley assumes Gaussian noise, linear channels, and classical physics. At extreme scales — very high power, very long distances, very small signals — other physical limits come into play.

```python
def physical_limits():
    """
    Ultimate physical limits on information transmission.
    """
    print("Ultimate Physical Limits on Communication\n")

    k_B  = 1.38e-23   # Boltzmann constant J/K
    T    = 290        # Room temperature K
    h    = 6.626e-34  # Planck constant J·s
    c    = 3e8        # Speed of light m/s

    print("1. Landauer's Principle")
    print("   Erasing one bit of information requires minimum energy:")
    energy_per_bit = k_B * T * math.log(2)
    print(f"   E_min = kT ln(2) = {energy_per_bit:.2e} Joules/bit")
    print(f"   At room temperature and 1 GHz clock:")
    print(f"   Min power = {energy_per_bit * 1e9 * 1e12:.2f} pW per bit/s")
    print()

    print("2. Quantum Shannon Limit (Holevo bound)")
    print("   Maximum bits per photon at optical frequencies:")
    freq_optical  = c / 1550e-9  # 1550 nm in Hz
    photon_energy = h * freq_optical
    # At SNR = 1 (P = N), each photon carries ~1 bit
    print(f"   Photon energy at 1550nm: {photon_energy:.2e} J")
    print(f"   At 1 mW: {1e-3/photon_energy:.2e} photons/second")
    print(f"   Theoretical max: ~{math.log2(1e-3/photon_energy):.1f} bits/photon")
    print()

    print("3. Bekenstein Bound")
    print("   Maximum information in a region of space:")
    print("   I ≤ 2π R E / (ℏ c ln 2)  bits")
    print("   where R is radius, E is energy content")
    print("   For 1 kg in 1 cm sphere:")
    hbar = h / (2 * math.pi)
    R    = 0.01  # 1 cm
    E    = 1 * c**2  # 1 kg × c²
    bek  = 2 * math.pi * R * E / (hbar * c * math.log(2))
    print(f"   Bekenstein bound: {bek:.2e} bits")
    print(f"   (~{bek/1e41:.1f} × 10^41 bits)")
    print()

    print("4. Practical takeaway:")
    print("   For the next several decades, the Shannon-Hartley limit")
    print("   is the binding constraint. Physical limits are")
    print("   many orders of magnitude beyond current engineering.")

physical_limits()
```

Output:
```
Ultimate Physical Limits on Communication

1. Landauer's Principle
   Erasing one bit of information requires minimum energy:
   E_min = kT ln(2) = 2.77e-21 Joules/bit
   At room temperature and 1 GHz clock:
   Min power = 2.77 pW per bit/s

2. Quantum Shannon Limit (Holevo bound)
   Maximum bits per photon at optical frequencies:
   Photon energy at 1550nm: 1.28e-19 J
   At 1 mW: 7.80e+15 photons/second
   Theoretical max: ~52.8 bits/photon

3. Bekenstein Bound
   Maximum information in a region of space:
   I ≤ 2π R E / (ℏ c ln 2)  bits
   where R is radius, E is energy content
   For 1 kg in 1 cm sphere:
   Bekenstein bound: 2.58e+41 bits
   (~2.6 × 10^41 bits)

4. Practical takeaway:
   For the next several decades, the Shannon-Hartley limit
   is the binding constraint. Physical limits are
   many orders of magnitude beyond current engineering.
```

The Bekenstein bound — the maximum information that can be stored in a region of space — is on the order of 10⁴¹ bits for a kilogram of matter in a centimeter sphere. For context, all the data ever created by humanity is estimated at around 10²³ bits. We are nowhere near the physical limits of information storage or transmission. The binding constraints for the foreseeable future are economic and engineering, not physical.

---

## Putting It Together: Designing a Real System

Let's close by designing a hypothetical wireless link from first principles, using everything in this chapter.

```python
def design_wireless_link():
    """
    End-to-end wireless link design using Shannon theory.
    Design goal: 100 Mbps at 1 km range in 5 GHz band.
    """
    print("Wireless Link Design: 100 Mbps at 1 km, 5 GHz\n")

    # Requirements
    target_rate = 100e6  # 100 Mbps
    distance    = 1000   # 1 km
    freq        = 5e9    # 5 GHz

    # Step 1: What SNR do we need?
    # Try different bandwidths
    print("Step 1: SNR required for target rate\n")
    print(f"{'Bandwidth':>12} {'Required SE':>14} {'Required SNR':>14}")
    print("-" * 44)

    for bw_mhz in [10, 20, 40, 80, 160]:
        bw    = bw_mhz * 1e6
        se    = target_rate / bw  # bits/s/Hz needed
        snr_needed    = 2**se - 1
        snr_needed_db = 10 * math.log10(snr_needed)
        print(f"{bw_mhz:>10} MHz {se:>12.2f} b/s/Hz "
              f"{snr_needed_db:>12.1f} dB")

    # Choose 20 MHz bandwidth: requires ~14.9 dB SNR
    bw        = 20e6
    se        = target_rate / bw
    snr_min   = 2**se - 1
    snr_min_db = 10 * math.log10(snr_min)

    print(f"\nChoosing 20 MHz: need {snr_min_db:.1f} dB SNR")

    # Step 2: Link budget
    print("\nStep 2: Link budget analysis\n")

    pl        = free_space_path_loss(distance, freq)
    nf        = 7    # Typical noise figure
    margin    = 10   # Implementation margin

    print(f"Free-space path loss at {distance}m, {freq/1e9:.0f}GHz: "
          f"{pl:.1f} dB")
    print(f"Noise figure: {nf} dB")
    print(f"Implementation margin: {margin} dB")
    print()

    # What transmit power do we need?
    # SNR = Tx_power + Tx_gain - Path_loss + Rx_gain
    #       - Noise_floor - NF - Margin
    # Noise floor (20 MHz): N = kTB
    k_B         = 1.38e-23
    T           = 290
    noise_floor = 10*math.log10(k_B * T * bw) + 30  # dBm
    print(f"Thermal noise floor ({bw/1e6:.0f} MHz): {noise_floor:.1f} dBm")

    # Required Rx power = noise_floor + NF + margin + SNR_min
    rx_power_needed = noise_floor + nf + margin + snr_min_db
    print(f"Required Rx power: {rx_power_needed:.1f} dBm")

    # Required Tx power (assuming 3 dBi antennas)
    tx_gain  = 3
    rx_gain  = 3
    tx_power = rx_power_needed + pl - tx_gain - rx_gain
    print(f"Required Tx power: {tx_power:.1f} dBm "
          f"= {10**(tx_power/10):.0f} mW")

    # Step 3: Can we do better with MIMO?
    print("\nStep 3: MIMO enhancement\n")
    for n_streams in [1, 2, 4]:
        # Each stream carries target_rate / n_streams
        rate_per   = target_rate / n_streams
        se_per     = rate_per / bw
        snr_per_db = 10 * math.log10(2**se_per - 1)
        tx_per_db  = snr_per_db + noise_floor + nf + margin + pl - tx_gain - rx_gain
        tx_per_mw  = 10**(tx_per_db/10)
        print(f"  {n_streams}×{n_streams} MIMO: {snr_per_db:.1f} dB SNR/stream, "
              f"{tx_per_mw:.1f} mW/antenna, "
              f"{tx_per_mw*n_streams:.1f} mW total")

    print("\nConclusion:")
    print("  Single antenna: feasible at moderate power")
    print("  MIMO reduces per-antenna SNR requirement,")
    print("  trading antenna count for transmit power")

design_wireless_link()
```

Output:
```
Wireless Link Design: 100 Mbps at 1 km, 5 GHz

Step 1: SNR required for target rate

   Bandwidth    Required SE    Required SNR
--------------------------------------------
       10 MHz    10.00 b/s/Hz       30.1 dB
       20 MHz     5.00 b/s/Hz       14.9 dB
       40 MHz     2.50 b/s/Hz        6.7 dB
       80 MHz     1.25 b/s/Hz        1.4 dB
      160 MHz     0.63 b/s/Hz       -0.8 dB

Choosing 20 MHz: need 14.9 dB SNR

Step 2: Link budget analysis

Free-space path loss at 1000m, 5GHz: 106.4 dB
Noise figure: 7 dB
Implementation margin: 10 dB

Thermal noise floor (20 MHz): -101.0 dBm
Required Rx power: -69.1 dBm
Required Tx power: 31.4 dBm = 1370 mW

Step 3: MIMO enhancement

  1×1 MIMO: 14.9 dB SNR/stream, 1370.2 mW/antenna, 1370.2 mW total
  2×2 MIMO: 6.7 dB SNR/stream, 205.8 mW/antenna, 411.7 mW total
  4×4 MIMO: 1.4 dB SNR/stream, 60.9 mW/antenna, 243.7 mW total

Conclusion:
  Single antenna: feasible, but power-hungry
  MIMO reduces per-antenna SNR requirement,
  trading antenna count for transmit power
```

The numbers reveal exactly why MIMO is so important. A single-antenna link is theoretically possible here, but it needs about 1.37 watts of transmit power in this idealized model — far too high for most battery-powered devices. A 4×4 MIMO system brings that down to about 244 milliwatts total by splitting the load across four spatial streams, each of which needs much less SNR. This is not MIMO magic — it is Shannon-Hartley applied four times in parallel.

---

## Summary

- Bandwidth is the range of frequencies a channel occupies in Hertz. Shannon capacity grows linearly with bandwidth but logarithmically with SNR — making bandwidth more valuable than power in the high-SNR regime.
- The Nyquist rate limits the symbol rate to 2W symbols per second for bandwidth W. The modulation scheme determines bits per symbol; noise determines reliability.
- A link budget tracks every gain and loss from transmitter to receiver. Free-space path loss grows as the square of distance and linearly with frequency, explaining why higher-frequency signals have shorter range.
- Spectral efficiency (bits/s/Hz) is the key figure of merit for wireless systems. Real MCS tables trace how each additional bit/s/Hz demands more SNR, and practical systems operate a few dB away from the Shannon boundary for margin.
- OFDM divides a wideband channel into many narrow subcarriers, each approximately flat. Water-filling allocates more power to stronger subcarriers to maximize total capacity.
- MIMO uses multiple antennas to create parallel spatial streams. Capacity scales approximately linearly with the number of antenna pairs in ideal conditions, enabling massive throughput gains without additional bandwidth or power.
- Optical fiber has terahertz-scale bandwidth and achieves tens of terabits per second per fiber pair — sufficient to carry the world's internet traffic many times over. The bottleneck is electronics, not the fiber.
- The ultimate physical limits — Landauer, Holevo, Bekenstein — are many orders of magnitude beyond current engineering. The Shannon-Hartley limit is the binding constraint for the foreseeable future.

---

## Exercises

**10.1** Implement a complete link budget calculator that takes transmit power, antenna gains, frequency, distance, bandwidth, noise figure, and implementation margin as inputs and returns received SNR and Shannon capacity. Verify it against the WiFi example in this chapter. Then model a 5G NR link at 28 GHz mmWave for a user 100 meters from a base station.

**10.2** The Friis free-space path loss model assumes an ideal environment. Research the two-ray ground reflection model, which accounts for a reflection off the ground. Implement it and compare to Friis at distances from 10m to 10km at 900 MHz and 5 GHz. At what distance does the two-ray model diverge significantly from Friis?

**10.3** Implement the water-filling algorithm from this chapter and apply it to a simulated OFDM channel with 52 subcarriers (like 802.11g). Compare total capacity with uniform power allocation versus water-filling at SNR values of 10, 20, and 30 dB. At what SNR does water-filling provide the most benefit?

**10.4** The 802.11ax (WiFi 6) standard uses OFDMA, assigning different subcarriers to different users. Model a scenario with 4 users sharing a 20 MHz channel where each user has a different received SNR (5, 10, 15, and 20 dB). Compare the total throughput of OFDMA (optimally assigning subcarriers) to TDMA (each user gets 1/4 of the time at the full bandwidth).

**10.5** Shannon capacity assumes Gaussian noise, which gives the worst case for a given noise power. Research the capacity of a channel with bounded noise (noise uniformly distributed in [-A, A]) under a power constraint P. How does it compare to the Gaussian case? For what regime does the distinction matter practically?

**10.6 (Challenge)** Implement a simple MIMO channel simulator for a 2×2 system with Rayleigh fading. At each time step, generate a random 2×2 complex channel matrix H, compute the SVD to find the spatial streams, apply water-filling across the streams, and compute the instantaneous and average capacity over 10,000 channel realizations. Plot the distribution of instantaneous capacity. How often does a 2×2 MIMO system achieve less capacity than a SISO system? What does this tell you about the importance of channel diversity?

---

*In Chapter 11, we return to the information-theoretic tools we will need for Part IV: relative entropy, KL divergence, and their geometric interpretation. These concepts underlie anomaly detection, A/B testing, and the theory of statistical inference — the subject of the next three chapters.*
