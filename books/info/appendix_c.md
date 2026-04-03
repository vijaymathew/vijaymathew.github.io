# Appendix C: Annotated Further Reading

## How To Use This Reading List

This appendix is intentionally *free-first*.

The classical literature in information theory includes several outstanding books that are not freely available online. They are included here because they are genuinely worth knowing about. But wherever a free, reliable, high-quality source exists, it is highlighted first.

The annotations answer a practical question: *when should a programmer read this?*

---

## 1. Best Free Starting Points

### David J. C. MacKay, *Information Theory, Inference, and Learning Algorithms*

Free online: https://inference.org.uk/itila/

Why read it:

- This is the single best free book-length bridge between rigorous information theory and real applications.
- It is unusually good at connecting coding, inference, and machine learning in one narrative.
- It assumes curiosity, not specialization.

Best for:

- readers who want one substantial free text after finishing this book
- programmers moving toward probabilistic modeling or machine learning

Caution:

- It is broader than this book and sometimes denser. Use it as a second pass, not a first contact.

### Claude E. Shannon, *A Mathematical Theory of Communication* (1948)

Free PDF: https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf

Why read it:

- This is the source.
- Many modern explanations flatten Shannon into slogans. Reading the original paper reveals how concrete and engineering-driven the field was from the beginning.

Best for:

- readers who want historical grounding
- anyone who wants to see the original articulation of entropy, coding, and channel capacity

Caution:

- It is remarkably readable for a foundational paper, but it is still a 1948 research paper, not a tutorial.

### MIT OpenCourseWare, 6.441 Information Theory

Free notes: https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/

Why read it:

- Excellent lecture notes from a serious modern graduate course.
- Strong if you want a structured step up from intuition to more formal reasoning.

Best for:

- readers who want a course-like sequence
- engineers who learn well from lecture notes and problem sets

Caution:

- The pace is more mathematical than this book.

---

## 2. Canonical Books

### Thomas M. Cover and Joy A. Thomas, *Elements of Information Theory*

Publisher page: https://www.wiley-vch.de/en/areas-interest/computing-computer-sciences/computer-science-17cs/information-technologies-17cs3/elements-of-information-theory-978-0-471-24195-9

Why read it:

- This is the standard reference text.
- It is broad, rigorous, and canonical.
- If you want the field as a field, this is the book most people mean.

Best for:

- readers ready for theorem-proof treatment
- anyone who wants a desk reference after building intuition

Caution:

- It is not the friendliest first exposure.
- It is not freely available online.

### Robert G. Gallager, *Information Theory and Reliable Communication*

Publisher page: https://mitpress.mit.edu/9780262570481/information-theory-and-reliable-communication/

Why read it:

- A classic, especially strong on coding and communication.
- Still one of the clearest deeper treatments of reliable communication.

Best for:

- readers who care most about channels, coding, and communication systems

Caution:

- Older style, more formal, and less application-broad than newer texts.

---

## 3. Compression, Coding, and Formats

### RFC 1951: DEFLATE Compressed Data Format Specification

Free: https://www.rfc-editor.org/info/rfc1951

Why read it:

- If you use gzip, zlib, PNG, or HTTP compression, this is one of the specs behind your daily life.
- It is one of the best ways to see information-theoretic ideas meeting actual engineering constraints.

Best for:

- systems programmers
- backend engineers
- anyone who wants to understand practical compression beyond vague references to "Huffman + LZ"

### RFC 1952: GZIP File Format Specification

Free: https://www.rfc-editor.org/info/rfc1952

Why read it:

- Short, concrete, and directly relevant to everyday tooling.
- Good for understanding how a practical compressed file format wraps a compression core.

Best for:

- engineers who want to connect theory to tools they already use

### David Salomon, *Data Compression: The Complete Reference*

Publisher page: https://link.springer.com/book/10.1007/978-1-84628-603-3

Why read it:

- Broad reference on compression algorithms.
- Better as a lookup and survey text than as a first conceptual introduction.

Best for:

- readers who want breadth across algorithms after understanding entropy and coding basics

Caution:

- Not free.

---

## 4. Cryptography and Entropy in Practice

### NIST SP 800-90B, *Recommendation for the Entropy Sources Used for Random Bit Generation*

Free landing page: https://www.nist.gov/publications/recommendation-entropy-sources-used-random-bit-generation

Why read it:

- This is one of the most practical documents in the whole appendix if you work near security systems.
- It turns vague talk about "good randomness" into engineering requirements about entropy sources, health tests, and validation.

Best for:

- security engineers
- systems programmers
- anyone building or evaluating RNG infrastructure

### EFF Dice-Generated Passphrases

Free: https://www.eff.org/dice

Why read it:

- An unusually accessible public explanation of entropy in password generation.
- Good example of information-theoretic reasoning translated into advice people can actually use.

Best for:

- readers who want a practical bridge between entropy and everyday security behavior

---

## 5. Machine Learning and Inference

### David J. C. MacKay, again

Free: https://inference.org.uk/itila/

Why it reappears:

- MacKay is one of the few sources that treats information theory, coding, Bayesian inference, and learning as parts of a coherent whole rather than unrelated techniques.

Best for:

- readers who want a unifying view of ML losses, model selection, coding, and inference

### Kevin P. Murphy, *Probabilistic Machine Learning* series

Publisher page: https://probml.github.io/pml-book/

Why read it:

- Not purely an information theory text, but excellent for seeing KL divergence, cross-entropy, variational methods, and probabilistic inference in modern ML context.
- The author provides substantial freely accessible material online.

Best for:

- ML practitioners who want a broader probabilistic foundation

### Tishby, Pereira, and Bialek, "The Information Bottleneck Method" (1999)

Free abstract and metadata: https://arxiv.org/abs/physics/0004057

Why read it:

- One of the most influential papers connecting mutual information to representation learning.
- Worth reading if Chapter 12 or Chapter 15 especially grabbed you.

Best for:

- readers interested in representation learning and theoretical ML

---

## 6. Databases, Systems, and Engineering Practice

Information theory is less often presented explicitly in systems literature, so the best "further reading" here is often a mix of standards, internals documentation, and performance papers rather than one canonical book.

Three practical directions are especially valuable:

- database internals material on planner statistics, cardinality estimation, and multivariate statistics
- observability engineering writing on signal-to-noise ratio, alert fatigue, and logging economics
- serialization and compression specifications used in real systems

If you want free, reliable sources to start from, the RFCs above and official database documentation are often better than secondary summaries.

For PostgreSQL specifically, a useful starting point is the official documentation on planner statistics:

Free: https://www.postgresql.org/docs/current/planner-stats.html

Why read it:

- It makes the bridge from "entropy and selectivity" to actual query-planner mechanics.
- You will see the concrete role of histograms, most-common values, and extended statistics.

---

## 7. Suggested Reading Paths

### If you are a working backend or systems engineer

1. Read MacKay selectively.
2. Read RFC 1951 and RFC 1952.
3. Read official database planner-statistics documentation.
4. Read NIST SP 800-90B if you touch randomness or security-sensitive systems.

### If you are coming from machine learning

1. Read MacKay.
2. Read MIT OCW notes on entropy, KL divergence, mutual information, and coding.
3. Read the Information Bottleneck paper.
4. Use Cover and Thomas later as a reference text.

### If you want the canonical theory path

1. Read Shannon's paper.
2. Read MacKay or MIT OCW notes for intuition plus examples.
3. Read Cover and Thomas carefully.
4. Then branch into coding, statistics, cryptography, or ML depending on interest.

---

## Final Advice

Do not treat further reading as a prestige contest.

The goal is not to collect famous titles. The goal is to deepen the mental model you can actually use. For most readers, the best next step is not the hardest book. It is the source that sharpens the next layer of intuition without breaking momentum.

If you want one simple default:

- read Shannon for origin
- read MacKay for synthesis
- use MIT OCW for formal reinforcement
- keep Cover and Thomas nearby as the canonical long-term reference

That path is hard to regret.
