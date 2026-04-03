# Bits That Matter
## Information Theory for Programmers


## Table of Contents

### Introduction

### Part I — The Language of Uncertainty

**Chapter 1 — What Is Information?**
- The intuition before the math
- Surprise as a measurable quantity
- Why a coin flip carries more information than a loaded die
- Information as what you did not already know

**Chapter 2 — Entropy — Measuring the Unknowable**
- Shannon entropy from first principles
- Calculating entropy on real data
- Why uniform distributions maximize entropy
- Entropy as a lower bound on compression

**Chapter 3 — Bits, Nats, and Bans**
- Units of information
- Base-2 versus natural logarithms
- Choosing units in code and papers


### Part II — Compression: Entropy in Action

**Chapter 4 — Why Data Compresses (and When It Won't)**
- Redundancy as the enemy of compression
- Why text compresses and encrypted data does not
- Compression as evidence of exploitable structure

**Chapter 5 — Codes and Coding**
- Prefix codes
- Huffman coding from scratch
- Kraft inequality
- Why optimal codes match probabilities

**Chapter 6 — Arithmetic Coding and Beyond**
- Interval coding
- Context modeling
- zlib, zstd, and Brotli through an information-theoretic lens

**Chapter 7 — Kolmogorov Complexity — The Uncomputable Ideal**
- The shortest program that produces a string
- Why Kolmogorov complexity is uncomputable
- Minimum description length as a practical approximation


### Part III — Communication: Sending Information Reliably

**Chapter 8 — The Channel Model**
- Shannon's channel abstraction
- Noise and capacity
- Reliable communication over noisy channels

**Chapter 9 — Error Detection and Correction**
- Hamming distance and parity bits
- CRCs and Reed-Solomon codes
- SSDs and QR codes as real examples

**Chapter 10 — Channel Capacity in Practice**
- Bandwidth, signal-to-noise ratio, and Shannon-Hartley
- Why Wi-Fi speeds have a ceiling
- Consequences for protocol design


### Part IV — Inference: Information as a Thinking Tool

**Chapter 11 — Relative Entropy and KL Divergence**
- The cost of being wrong about a distribution
- Why KL divergence is not a distance
- Model comparison, A/B testing, and anomaly detection

**Chapter 12 — Mutual Information**
- How much does knowing X tell you about Y?
- Feature selection and dependency detection
- Why correlation misses nonlinear relationships

**Chapter 13 — The Minimum Description Length Principle**
- Learning as compression
- Model selection without overfitting
- MDL as a formal Occam's razor


### Part V — Information Theory in the Wild

**Chapter 14 — Entropy in Cryptography**
- Entropy as a security primitive
- Password strength and key generation
- Why entropy starvation breaks systems

**Chapter 15 — Information Theory in Machine Learning**
- Cross-entropy loss demystified
- Decision trees and information gain
- Neural networks as implicit compression systems

**Chapter 16 — Databases, Indexes, and Selectivity**
- Cardinality and selectivity through entropy
- Why high-entropy columns make better index keys
- Statistics in query planners

**Chapter 17 — Designing Information-Dense Systems**
- Log verbosity through an information lens
- API payload and serialization choices
- Observability and information density


### Appendices

- **Appendix A** — Mathematical notation reference
- **Appendix B** — Python toolkit
- **Appendix C** — Annotated further reading
- **Appendix D** — Worked solutions to chapter exercises
