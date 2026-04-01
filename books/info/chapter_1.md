# Chapter 1: What Is Information?

## The Question Nobody Asks

You have been working with information your entire career. You store it, transmit it, compress it, encrypt it, index it, and query it. You have opinions about data formats. You have debugged encoding issues at 11pm. You have argued about whether to use JSON or MessagePack.

But here is a question you have probably never been asked: *what is information, exactly?*

Not in a philosophical sense. In a precise, mathematical, measurable sense. The kind of sense where you could write a function that takes any piece of data and returns a number telling you how much information it contains.

It turns out that such a function exists. It was worked out by a mathematician named Claude Shannon in 1948, and it is the foundation of everything in this book. But before we get to the formula, we need to build the intuition. And the intuition starts with a simple idea:

**Information is what you didn't already know.**

---

## Surprise as a Measurement

Consider two headlines:

> *"Sun rises in the east"*

> *"Earthquake levels downtown San Francisco"*

Both are sentences. Both convey facts. But one of them contains vastly more information than the other. And you knew that immediately, without needing a formula, because one of them surprised you and the other did not.

This is the core intuition of information theory: **the amount of information a message carries is inversely related to how expected it was.** A certain event, one you were already sure would happen, carries zero information when it occurs. An impossible event, if it somehow occurred, would carry infinite information. Everything else falls somewhere in between.

This feels almost too simple. But watch what happens when we make it precise.

Suppose you are monitoring a server. You have a sensor that fires an alert whenever the CPU exceeds 90%. On a typical day, this alert fires about once every hundred checks. Now compare these two scenarios:

- The sensor fires. You get an alert.
- The sensor does not fire. You get a silence.

Which event carries more information? The alert, clearly. A silence is expected — 99% of checks are silent — so a silence tells you almost nothing new. An alert is rare, which means it carries genuine news. It changes your picture of the world more dramatically than a silence does.

Information theory formalizes this by tying information content directly to probability. If an event has probability *p*, then the information content of that event — the surprise — is:

```
I(p) = log₂(1/p)
```

Or equivalently:

```
I(p) = -log₂(p)
```

Let's build a feel for this with code:

```python
import math

def surprise(p):
    """
    The information content (surprise) of an event with probability p.
    Returns the result in bits.
    """
    if p <= 0 or p > 1:
        raise ValueError("Probability must be between 0 and 1")
    return -math.log2(p)

# Some examples
print(f"A fair coin landing heads (p=0.5):    {surprise(0.5):.2f} bits")
print(f"A loaded coin, heads 90% (p=0.9):     {surprise(0.9):.2f} bits")
print(f"Rolling a 6 on a fair die (p=1/6):    {surprise(1/6):.2f} bits")
print(f"Our CPU alert fires (p=0.01):          {surprise(0.01):.2f} bits")
print(f"Our CPU alert silent (p=0.99):         {surprise(0.99):.2f} bits")
```

Output:
```
A fair coin landing heads (p=0.5):    1.00 bits
A loaded coin, heads 90% (p=0.9):    0.15 bits
Rolling a 6 on a fair die (p=1/6):   2.58 bits
Our CPU alert fires (p=0.01):         6.64 bits
Our CPU alert silent (p=0.99):        0.01 bits
```

Take a moment to read these numbers. A fair coin flip is exactly 1 bit of information — this is where the word "bit" comes from. The outcome of one fair coin toss is the fundamental atom of information, the smallest possible unit of genuine surprise. A coin that lands heads 90% of the time gives you barely 0.15 bits when it lands heads, because you were already pretty sure it would. But when it lands tails — that rare 10% case — you get:

```python
print(f"Rare tails on loaded coin (p=0.1):    {surprise(0.1):.2f} bits")
# Output: 3.32 bits
```

More than three times the information of a fair flip. Rarity is informativeness.

---

## Why Logarithms?

The use of a logarithm might seem arbitrary. Why not just use *1/p* directly, or *(1-p)*, or some other function that increases as probability decreases?

There is a good reason, and it comes from how we intuitively expect information to combine.

Suppose you flip a fair coin twice. The two flips are independent. Intuitively, two flips should give you twice as much information as one flip — information should *add* when you combine independent events. But probabilities *multiply*: the probability of two specific outcomes, say heads then tails, is 0.5 × 0.5 = 0.25.

Logarithms are exactly the tool that turns multiplication into addition:

```
log(0.5 × 0.5) = log(0.5) + log(0.5)
```

This is the key property that makes logarithms the right choice. When you observe two independent events, you want to be able to add their information contents together, just as you would add together lengths or weights. The logarithm is what makes that possible.

Let's verify this:

```python
p_flip1 = 0.5
p_flip2 = 0.5
p_both  = p_flip1 * p_flip2  # Joint probability

info_flip1 = surprise(p_flip1)
info_flip2 = surprise(p_flip2)
info_both  = surprise(p_both)

print(f"Info from flip 1:        {info_flip1:.2f} bits")
print(f"Info from flip 2:        {info_flip2:.2f} bits")
print(f"Sum:                     {info_flip1 + info_flip2:.2f} bits")
print(f"Info from both together: {info_both:.2f} bits")
```

Output:
```
Info from flip 1:        1.00 bits
Info from flip 2:        1.00 bits
Sum:                     2.00 bits
Info from both together: 2.00 bits
```

The numbers agree. This additivity is not just mathematically convenient — it matches our intuition about information. Reading two independent news stories gives you the sum of the information in each. Observing two independent sensor readings gives you the sum of what each told you. Logarithms make this work.

---

## Information Is About Distributions, Not Messages

Here is a subtle but important point that trips people up early.

The information content of a message is not a property of the message alone. It is a property of the message *in the context of what you already expected*.

Consider the string `"404"`. If you are a web developer receiving an HTTP status code, this tells you something, but not much — 404s are common. If you are receiving a lottery ticket number and `"404"` is one of only five possible winning combinations, this is enormously informative. Same string, radically different information content, because your prior expectations were different.

This means that when you write a logging system, design a protocol, or build a monitoring dashboard, you are implicitly making assumptions about the distribution of events. Those assumptions determine how informative each event actually is. A log line that appears in every request carries almost no information. A log line that fires once a week might be the most valuable signal in your entire system.

We will return to this idea throughout the book. For now, carry this with you: **to measure information, you must know — or assume — a probability distribution over possible events.**

---

## A First Look at Entropy

We can measure the surprise of a single outcome. But what about a whole system? What is the information content of an entire source of messages — a communication channel, a sensor, a random variable?

This is where Shannon entropy enters. Rather than asking "how surprising was this particular outcome?", entropy asks: "on average, how surprising are the outcomes from this source?"

Entropy is the *expected surprise* — the average information content per message:

```
H = -∑ p(x) · log₂(p(x))
```

In code:

```python
def entropy(probabilities):
    """
    Shannon entropy of a probability distribution.
    Input: a list of probabilities that sum to 1.
    Returns: entropy in bits.
    """
    return -sum(p * math.log2(p) for p in probabilities if p > 0)

# A fair coin: maximum uncertainty over two outcomes
fair_coin = [0.5, 0.5]
print(f"Fair coin entropy:   {entropy(fair_coin):.3f} bits")

# A loaded coin: less uncertainty
loaded_coin = [0.9, 0.1]
print(f"Loaded coin entropy: {entropy(loaded_coin):.3f} bits")

# A certain outcome: no uncertainty at all
certain = [1.0, 0.0]
print(f"Certain outcome:     {entropy(certain):.3f} bits")

# A fair six-sided die
fair_die = [1/6] * 6
print(f"Fair die entropy:    {entropy(fair_die):.3f} bits")
```

Output:
```
Fair coin entropy:   1.000 bits
Loaded coin entropy: 0.469 bits
Certain outcome:     0.000 bits
Fair die entropy:    2.585 bits
```

A few things to notice:

**Certainty has zero entropy.** If you already know what will happen, there is no information to be gained. This makes intuitive sense — a weather forecast that always says "sunny" in the Sahara tells you nothing.

**Maximum entropy means maximum uncertainty.** A fair coin has higher entropy than a loaded coin, because you know less about what it will do. A fair die has more entropy than a fair coin, because there are more equally likely outcomes.

**Entropy is a lower bound on compression.** This is perhaps the most practically important property, and we will develop it fully in Chapter 4. Briefly: if you have a source with entropy H bits per symbol, you cannot compress its output below H bits per symbol, no matter how clever your algorithm. Entropy is the hard floor that no compressor can breach.

We will spend all of Chapter 2 exploring entropy deeply. For now, think of it as the answer to the question: *how many fair coin flips would I need to simulate this source?*

---

## What Shannon Actually Did

In 1948, Claude Shannon published a paper called *A Mathematical Theory of Communication*. It is one of the most impactful scientific papers of the twentieth century, and it is surprisingly readable — we recommend it in the appendix.

Shannon was working at Bell Labs, thinking about telephone systems and telegraph networks. His practical question was: how do you send messages efficiently over a noisy channel? But to answer that, he had to answer a more fundamental question: what *is* a message, quantitatively?

His insight was to separate the *meaning* of a message from its *information content*. This was a radical move. Before Shannon, information was a fuzzy concept tied to semantics — what a message *meant* determined how important it was. Shannon said: meaning is irrelevant to communication engineering. What matters is *uncertainty reduction*. A message is valuable to the receiver not because of what it means, but because of what the receiver did not know before receiving it.

This allowed him to build an entire mathematical theory on a single foundation: probability. And it turned out that this theory described not just telephone wires, but DNA, neural activity, compression algorithms, and yes, the log files on your servers.

The definition he arrived at — entropy as expected surprise — was not arbitrary. He proved that it is the *unique* function satisfying three reasonable properties:

1. It should be continuous in the probabilities.
2. A uniform distribution over more outcomes should have higher entropy.
3. The entropy of a combined system should equal the sum of entropies of its parts (when independent).

These constraints pin down the formula uniquely, up to a constant (which just determines the units — bits versus nats versus bans). Shannon did not invent an arbitrary measure and declare it useful. He derived the only measure that could possibly be the right one.

---

## Real Data: Measuring Information in the Wild

Let's ground this in something concrete. How much information is in an actual file on your disk?

```python
import math
from collections import Counter

def file_entropy(filename):
    """
    Compute the byte-level entropy of a file.
    Returns entropy in bits per byte.
    """
    with open(filename, 'rb') as f:
        data = f.read()

    if not data:
        return 0.0

    counts = Counter(data)
    total  = len(data)
    probs  = [count / total for count in counts.values()]

    return entropy(probs)

# Try this on different files on your system
# print(file_entropy('/var/log/syslog'))
# print(file_entropy('/bin/ls'))
# print(file_entropy('random.bin'))
```

If you run this on different files, you'll see a consistent pattern:

| File type | Typical entropy (bits/byte) |
|---|---|
| English text | 4.5 – 5.5 |
| Source code | 5.0 – 6.0 |
| Compiled binary | 6.0 – 7.0 |
| Compressed file (.gz) | 7.5 – 8.0 |
| Encrypted file | ~8.0 |

The maximum possible entropy for a byte is 8 bits (since a byte has 256 possible values, and a uniform distribution over 256 symbols has entropy log₂(256) = 8). Notice that:

- **English text** is well below maximum. The letter `e` appears much more often than `z`. There is enormous redundancy, which is why text compresses well.
- **Compiled binaries** have higher entropy — machine code uses byte values more uniformly.
- **Compressed and encrypted files** sit near the maximum of 8 bits/byte. A good compressor squeezes out all the redundancy, leaving behind data that *looks* random. An encrypted file is deliberately indistinguishable from random noise.

This table is already useful. If you compress a file and its entropy before compression was already 7.9 bits/byte, you know the compressor will barely help. If the entropy is 4 bits/byte, you know there is substantial redundancy to exploit.

**Entropy is a diagnostic tool.** Add a file entropy function to your toolkit now. You will find uses for it.

---

## Building Intuition: Three Mental Models

Before we move on, here are three ways to think about information that will serve you throughout this book. Use whichever framing clicks for a given problem.

**1. Information as surprise.** This is the framing we've been using. A message is informative to the degree that it surprises you. Rare events carry more information than common ones. This is useful when thinking about individual events — alerts, errors, anomalies.

**2. Information as question-answering.** One bit of information is exactly enough to answer one yes/no question about an equally uncertain situation. If you have to guess a number between 1 and 8, you need exactly 3 bits — three yes/no questions — to identify it with certainty (binary search). If the number is more likely to be small, you can do better on average. This framing is useful when thinking about encoding and compression.

**3. Information as the size of the smallest description.** A message contains *n* bits of information if and only if the most compact possible description of it requires *n* bits. This connects to compression directly. It is also the basis of Kolmogorov complexity, which we will explore in Chapter 7.

All three framings are equivalent. They are different windows onto the same mathematical object. The art of applying information theory is knowing which window gives you the clearest view of your particular problem.

---

## Summary

- Information is the reduction of uncertainty. A message is informative to the degree that it surprises you.
- The information content of an event with probability *p* is *-log₂(p)* bits. Rare events carry more information than common ones.
- Logarithms are the right tool because they turn the multiplication of probabilities into the addition of information — matching our intuition that independent pieces of information should combine by summing.
- Information content depends on context — specifically, on the distribution of possible events you expected before receiving the message.
- Shannon entropy is the average information content of a source. It is zero for a certain outcome and maximized by a uniform distribution.
- Entropy measures redundancy in data. High entropy means little redundancy and poor compressibility. Low entropy means high redundancy and good compressibility.
- Entropy is a lower bound on compression: no algorithm can compress a source below its entropy rate.

---

## Exercises

**1.1** Calculate the information content (in bits) of drawing the ace of spades from a shuffled standard deck of 52 cards. Now calculate the information content of drawing *any* ace. Which is higher, and why?

**1.2** A smoke detector fires an alert 0.1% of the time (mostly false alarms). A different sensor fires 10% of the time. Which single alert carries more information? Write a function to generalize this comparison.

**1.3** Write a function `entropy_of_string(s)` that treats each character as a symbol and computes the Shannon entropy of the character distribution. Test it on `"aaaa"`, `"abcd"`, and a paragraph of English text. Explain the results.

**1.4** Run the `file_entropy` function on five different files on your system. Rank them by entropy. Does the ranking match your intuition about their compressibility? Try compressing each with `gzip` and compare the compression ratios to the entropy values.

**1.5 (Challenge)** Shannon proved that entropy is the *unique* function satisfying the three properties listed in the section on Shannon's work. Pick any two of the three properties and write an informal argument for why dropping that property would allow a different, "wrong" measure of information to satisfy the remaining constraints.

---

*In Chapter 2, we will take entropy apart completely — exploring its properties, its geometry, and what it tells us about the limits of compression.*
