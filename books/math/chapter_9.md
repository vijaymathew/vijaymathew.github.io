# Chapter Nine: The Invention of Change
### *England and Germany, 1665–1716*

---

In the summer of 1665, the plague arrived in Cambridge.

It had been building for a year in London, carried by rats and fleas along the trade routes from the Continent, killing perhaps a quarter of the city's population before the great fire of 1666 partly checked its spread. By June 1665 it had reached enough of East Anglia that the University of Cambridge closed its gates and sent its students home. Among them was a twenty-two year old scholar of unremarkable academic record named Isaac Newton, who retreated to his mother's farmhouse at Woolsthorpe in Lincolnshire and spent the next eighteen months doing some of the most important mathematics in human history.

He had no supervisor. He had no colleagues to consult. He had, as far as we can tell, a great deal of solitude and a mind that could not stop working. He read, and thought, and filled notebooks. He worked on optics, on mechanics, on the nature of gravity. And in the margins and pages of those notebooks, in a notation that was entirely his own, he developed what he called the method of fluxions: a systematic way of calculating the rate at which any quantity changes, and of working backward from rates of change to the quantities that produced them.

In other words, he had developed one of the first full versions of calculus.

He told almost nobody. He used it privately to derive results in physics and astronomy that he later published in other forms, concealing the method behind geometric arguments that his readers could understand. For nearly twenty years, the most powerful mathematical tool yet devised sat in Newton's notebooks, unpublished and unknown, while its creator used it in secret and let the world catch up by slower means.

By the time he finally published it, someone else had already beaten him into print.

---

## The Problem That Made Calculus Necessary

To understand why calculus had to be invented — why the mathematical tools that existed in 1665 were genuinely insufficient, not merely inconvenient — you have to understand the problem that Newton was trying to solve.

The problem was motion.

Specifically, it was the problem of how things move when the forces acting on them change continuously. A cannonball, as Tartaglia had shown, follows a curved path because gravity is constantly deflecting it downward as it moves forward. A planet orbiting the sun moves faster when it is closer to the sun, slower when it is farther away, in a precise mathematical relationship that Kepler had described empirically without being able to explain theoretically. A pendulum swings with a regularity that depends on its length in a way that had been measured but not derived. All of these motions were well documented. None of them had been given a mathematical account — a derivation from fundamental principles — that actually explained *why* the motion followed the pattern it did.

The obstacle was that existing mathematics could handle only fixed, static quantities. Geometry could describe the shape of a cannonball's path, but it could not calculate what that path would be from the forces acting on the ball. Algebra could express the relationship between known quantities, but the quantities involved in motion — velocity, acceleration, the rate at which a curve steepens — were not fixed. They were changing, continuously, at every instant.

What was needed was a mathematics of instantaneous change: a way of calculating not what a quantity is, but what it is *doing*, how fast it is moving, in which direction it is heading, at any chosen moment. This is what calculus provides, and this is why it was so urgently needed in the mid-seventeenth century. The astronomy and mechanics of the Scientific Revolution had run ahead of the mathematics available to describe them. Calculus was the catch-up.

---

## What a Derivative Actually Is

Before we follow Newton and Leibniz through their separate discoveries, it is worth being precise about the mathematical ideas involved. This chapter has hard mathematics at its heart, and the book's commitment has been to show mathematics honestly rather than gesturing at it from a safe distance.

The central concept of calculus is the derivative. It is the answer to the question: at exactly this instant, how fast is this quantity changing?

The difficulty is the word "exactly." Velocity, in everyday experience, is easy to understand over a period of time: if you travel 100 kilometres in 2 hours, your average velocity was 50 kilometres per hour. But what was your velocity at the precise moment of, say, 11:17 in the morning? Not over a minute, not over a second — at the instant itself, which has no duration?

The answer, which took mathematicians millennia to fully articulate, is that instantaneous velocity is the *limit* of average velocities over shorter and shorter time intervals. Your velocity at 11:17 is what your average velocity approaches as you measure it over intervals that shrink toward zero: over one second, then a tenth of a second, then a hundredth, and so on. If those averages converge to a definite value — if they are heading toward 47 kilometres per hour regardless of how small the interval becomes — then 47 km/h is your instantaneous velocity at 11:17.

In the notation that Leibniz would develop, if x is a quantity that changes with time t, the derivative is written:

```
dx/dt
```

This is read as "the rate of change of x with respect to t," and it means exactly the limit described above: the ratio of an infinitesimally small change in x to the corresponding infinitesimally small change in t. The fraction dx/dt looks like an ordinary fraction, but its numerator and denominator are not ordinary numbers — they are infinitesimals, quantities smaller than any positive number yet not zero, whose ratio converges to a definite finite value.

The other central concept of calculus is the integral. If the derivative asks "given a quantity, what is its rate of change?", the integral asks the reverse: "given a rate of change, what is the quantity?" It is also the answer to the question of area: the integral of a curve over an interval is the area enclosed between the curve and the horizontal axis.

These two operations — differentiation and integration — turn out to be inverses of each other. This fact, called the Fundamental Theorem of Calculus, is the deepest result in the subject. It means that if you can find the derivative of a function, you can find its integral by reversing the process, and vice versa. The two problems that had seemed entirely separate — the rate of change problem and the area problem — are, at the deepest level, the same problem looked at from two directions.

Newton discovered this. So did Leibniz. They did it independently, a decade apart, using different notation and different conceptual frameworks, and arrived at the same fundamental theorem. The modern consensus, established by careful historical scholarship, is that neither plagiarised the other. The ideas were ready to be discovered, and two people of extraordinary ability discovered them.

---

## Newton's Secret

Newton's approach grew directly out of his physics. He thought of quantities as *flowing* — changing continuously over time, the way water flows through a pipe. He called a continuously changing quantity a *fluent*, and its rate of change a *fluxion*. The fluxion of a position was a velocity. The fluxion of a velocity was an acceleration. To find the fluxion of a quantity, you performed what he called the direct method of fluxions: a set of rules for calculating rates of change. To find the fluent from a given fluxion — to work backward from the rate of change to the original quantity — you used the inverse method: what we now call integration.

Newton's notation used dots. A quantity x had fluxion ẋ (x-dot). The fluxion of ẋ was ẍ (x-double-dot). This dotted notation connected the mathematics directly to its physical interpretation: every fluxion was a rate of change with respect to time, every dot represented one differentiation with respect to t. For a physicist thinking about motion — about how position changes to give velocity, how velocity changes to give acceleration — this notation was natural and intuitive.

By 1666, Newton had worked out the basic rules of differentiation, the inverse relationship between differentiation and integration, and applications to finding tangents to curves and areas under them. He wrote this up in a manuscript called *De Analysi per Aequationes Numero Terminorum Infinitas* — On Analysis by Equations with Infinitely Many Terms — in 1669 and circulated it privately to a small number of people. He did not publish it.

Why not? The question has puzzled historians. Newton was, famously, secretive about his work — a trait that may have been rooted in a profound aversion to controversy, a pathological need for control, or simply an indifference to priority that was later replaced by an obsessive concern with it when Leibniz appeared on the scene. Whatever the reason, the method of fluxions sat in manuscript, known to a handful of people in England and unknown to the rest of the mathematical world, for nearly thirty years.

In 1687, Newton published the *Philosophiae Naturalis Principia Mathematica* — the Mathematical Principles of Natural Philosophy, one of the two or three most important books in the history of science. It contained his laws of motion, his law of universal gravitation, and derivations of Kepler's laws of planetary motion, the motion of comets, the behaviour of tides, and the shape of the earth. The whole edifice was built on calculus. But Newton presented his results geometrically, in the traditional form of propositions and demonstrations, deliberately obscuring the method of fluxions that had been his actual tool. He wanted the physics accepted on its merits, and he knew that the novel mathematics might distract from or discredit the physical results.

The greatest physics book ever written concealed its mathematical method from its readers.

---

## Leibniz in Paris

While Newton was doing all of this in Lincolnshire and Cambridge, a young German philosopher and diplomat named Gottfried Wilhelm Leibniz was in Paris on a political mission that never quite came off, and was spending his free time educating himself in mathematics.

Leibniz came to mathematics late by the standards of the time. He was born in Leipzig in 1646, studied law and philosophy, and arrived in Paris in 1672 as a representative of the Elector of Mainz, tasked with presenting to Louis XIV an elaborate scheme for redirecting French military ambitions toward Egypt and away from Germany. Louis was not interested. But Paris was the intellectual capital of Europe, and Leibniz threw himself into its scientific culture with the energy of a man who had just discovered his real vocation.

He met the Dutch mathematician and physicist Christiaan Huygens, who became his mentor and set him problems. He read Descartes, Pascal, and everything else he could find. He visited London in 1673, met members of the Royal Society, and was elected a fellow. He was shown some of Newton's unpublished manuscripts — the extent and significance of what he saw has been central to the plagiarism accusations ever since. He returned to Hanover in 1676, where he spent the rest of his life as librarian and court philosopher to the Dukes of Brunswick.

In the years between 1674 and 1676, working from a different direction than Newton, Leibniz developed calculus. His approach was more abstract and more algebraic than Newton's. Where Newton thought in terms of flowing quantities and rates of change through time, Leibniz thought in terms of *differences* — the infinitesimally small increments by which a variable quantity changes from one moment to the next. He called these infinitesimal differences differentials, and he wrote them as *dx* and *dy*: the differential of x, the differential of y.

The ratio dy/dx was the derivative — the rate of change of y with respect to x. And the sum of infinitely many infinitesimal areas — which Leibniz wrote using an elongated S, standing for *summa* (sum) — was the integral:

```
∫ y dx
```

Both symbols, dy/dx and ∫, are the ones used in every calculus textbook in the world today. Newton's dot notation, which connects calculus to its physical interpretation, is still used in mechanics and physics for time derivatives. But for everything else — for the general theory, for teaching, for extending the ideas — the mathematical world chose Leibniz's notation, because it is more flexible, more generalisable, and more transparent about what is actually happening.

Leibniz published. In 1684 he published the first paper on differential calculus in the journal *Acta Eruditorum*. In 1686 he published on integral calculus. These were the first published accounts of differential and integral calculus in Europe. The mathematical community of Continental Europe began using Leibniz's methods immediately, building on them with extraordinary speed. The Bernoulli brothers in Basel worked through the implications. Guillaume de l'Hôpital, a French marquis who paid Leibniz's student Johann Bernoulli for mathematical lessons, published the first calculus textbook in 1696. By 1700, Leibniz's calculus was the standard mathematical tool of European science.

Newton had not published a word of it.

---

## The Slow Fuse

For a decade or so, there was no dispute. Newton was famous for the *Principia*; the mathematical community knew he had done something important with infinite series and tangent methods, but the specifics were obscure. Leibniz was famous for the *Acta Eruditorum* papers; his calculus was being taught and extended across Europe. The two men had corresponded, carefully and somewhat guardedly, in the 1670s. There was mutual respect and some mutual wariness, but no open conflict.

The fuse was lit, slowly, by others.

In 1699 a Swiss mathematician named Nicolas Fatio de Duillier — who had been close to Newton in the 1690s and knew something of the unpublished manuscripts — published a paper claiming that Newton was the first inventor of calculus and implying, without quite stating it outright, that Leibniz had borrowed from Newton's prior work. Leibniz protested to the Royal Society. The matter was noted but not yet explosive.

It exploded in the early 1700s, when both men, now old and famous, allowed their supporters to fight on their behalf with increasing venom. Anonymous pamphlets appeared. Letters were circulated. The Royal Society convened a committee in 1712 to investigate the priority dispute — a committee stacked with Newton's supporters and chaired, in effect, by Newton himself, who drafted significant portions of the report while nominally remaining above the fray. The report, called the *Commercium Epistolicum*, found in Newton's favour. It was, by any modern standard of academic process, a travesty of impartiality.

Leibniz spent his last years — he died in 1716 — defending himself against accusations of plagiarism that he found bewildering and deeply unjust. He had support on the Continent, where mathematicians who worked daily with his notation knew its power and had no reason to believe he had simply copied someone else's unpublished ideas. But in England, Newton's authority was essentially absolute. The Royal Society had ruled. The matter was officially settled.

It was not, of course, actually settled. The modern historical consensus — reached by scholars who could examine all the manuscripts from both sides, trace the chronology carefully, and apply standards of evidence that neither Newton's nor Leibniz's partisans had any interest in — is that both men invented calculus independently. Newton was first, by roughly a decade. Leibniz published first, by roughly three years. Leibniz's notation was, and remains, superior for most purposes. Neither plagiarised the other.

Nobody came out of the dispute well. Newton's reputation for scientific greatness survived intact but his behaviour during the controversy was, by his own later standards, dishonourable — the anonymous pamphlets, the packed committee, the deliberate misrepresentation of the timeline. Leibniz died under a cloud that was not lifted until long after his death. And the British mathematical community paid a concrete price for its loyalty to Newton's notation: British mathematicians, out of loyalty to Newton, continued using his fluxion notation long after it had become obsolete, while continental mathematicians using Leibniz's superior notation made rapid advances. For roughly a century, British mathematics fell behind — not because of any deficit of talent, but because a notational choice made in service of a priority dispute handicapped every British mathematician who tried to work with calculus in Newton's dots rather than Leibniz's dy/dx.

---

## What Calculus Actually Does

Let us be concrete about the mathematics, because the abstraction of "the method of fluxions" and "differentials" can obscure how beautiful and powerful the actual techniques are.

Consider Kepler's problem: why does a planet move faster when it is closer to the sun? Kepler had observed the pattern and stated it as his second law — a planet sweeps out equal areas in equal times — but he had no derivation. He had a description, not an explanation.

Newton's calculus provided the derivation. Using his second law of motion (force equals mass times acceleration) and his law of universal gravitation (gravitational force between two bodies is proportional to their masses and inversely proportional to the square of the distance between them), Newton set up the equations of planetary motion. The force on a planet varies continuously as the planet moves — it is stronger when the planet is close to the sun, weaker when far away. The velocity changes continuously in response to this varying force. The whole problem is drenched in continuous change.

With calculus, Newton could write down the equations of motion as *differential equations* — equations relating the position, velocity, and acceleration of the planet at every instant. He could then solve these equations — integrate them — to find the actual path the planet follows. The result was an ellipse, exactly as Kepler had observed. And as a consequence of the elliptical orbit and the inverse-square law, the equal-areas law fell out automatically. Kepler's empirical observation was not merely confirmed — it was explained, derived from first principles, shown to be a necessary consequence of the law of gravitation.

This is what calculus made possible: the derivation of physical laws from mathematical principles. Before calculus, science could describe. After calculus, science could explain. The *Principia* demonstrated this with a comprehensiveness that left the scientific world reeling. In a single book, Newton had shown that the same mathematical law that governed a falling apple governed the orbit of the moon, the trajectory of a comet, the rise and fall of tides, and the slight flattening of the earth's sphere at the poles. The universe was not a collection of separate phenomena governed by separate rules. It was a single mathematical system, governed by a single law.

The key rule of differentiation — the one that makes most of this possible — is the power rule: if y = xⁿ, then the derivative is ny^(n-1). The derivative of x² is 2x. The derivative of x³ is 3x². In general, the derivative of xⁿ is nxⁿ⁻¹. This rule, together with a few others for sums and products, allows you to differentiate any polynomial — and polynomials, or power series (infinite sums of polynomials), can approximate any smooth function to arbitrary accuracy. The combination of the power rule and the infinite series representations that Newton had developed for functions like sin(x) and cos(x) — exactly the series that Mādhava had found in Kerala three centuries earlier — gave calculus its extraordinary reach.

---

## The Fundamental Theorem

The deepest result in calculus is the one that connects differentiation and integration — the Fundamental Theorem.

It says: if you differentiate a function to get its rate of change, and then integrate that rate of change back over an interval, you get the total change in the original function over that interval. And conversely, if you integrate a function to get the accumulated area under its curve, and then differentiate that accumulated area with respect to the endpoint of integration, you get back the original function.

Differentiation and integration undo each other. They are inverse operations, like multiplication and division, or like squaring and taking square roots.

This seems almost too good to be true, because the two problems — the rate-of-change problem and the area problem — appear to be completely different. The rate-of-change problem is local: it asks what is happening at a single instant. The area problem is global: it asks about the accumulation over an entire interval. Why should these be related?

The answer is that change and accumulation are two ways of looking at the same underlying relationship. If you know how fast something is changing at every instant, you can reconstruct the total change by adding up the instantaneous changes — that is integration. If you know the total accumulated change, you can recover the instantaneous rate of change by looking at how quickly the total is growing — that is differentiation. The two operations are two directions of the same journey.

Newton called this the inverse relationship between his direct and inverse methods. Leibniz saw it as the duality between the sum of infinitely many infinitesimals and the difference between consecutive values. Both saw the connection; both recognised it as the central result. In later generations it was proved rigorously, given its modern name, and made the foundation of the entire subject.

It is, by common agreement among mathematicians, one of the most beautiful results in all of mathematics.

---

## Kerala in the Room

There is something that neither Newton nor Leibniz knew, and that this book has been building toward since Chapter 7.

The sine series and cosine series that appear throughout Newton's calculus — the series he used to extend the method of fluxions to trigonometric functions, to calculate areas under curves involving sines and cosines, to represent periodic phenomena mathematically — had earlier antecedents in the Kerala tradition. They had been derived, with proofs, by Mādhava of Sangamagrāma in the fourteenth century. The series for π that Leibniz published in 1673 as one of his first mathematical discoveries — the alternating series 4(1 - 1/3 + 1/5 - 1/7 + ...) that he was justifiably proud of — had been known in Kerala for three hundred years.

Neither man knew this. The Kerala texts were in Malayalam, unknown to European scholarship. The results were being used, by the heirs of the Kerala tradition, for astronomical computation on the Malabar coast. They had not been transmitted, as far as anyone can determine, to Europe.

What this means is not that Newton and Leibniz were doing lesser work than they believed. Their achievement was genuine and extraordinary: the general framework, the fundamental theorem, the notation, the systematic extension to all smooth functions. These are things Mādhava did not have. What it means is that the mathematical conditions for these ideas had matured in more than one place — that the mathematics of infinite series and infinitesimal processes was reaching its moment of full articulation, independently and simultaneously, in two places separated by an ocean and a century. The ideas were in the air in seventeenth-century Europe because European mathematics had been building toward them through Archimedes, Kepler, Galileo, Fermat, and Barrow. They had been in the air in fourteenth-century Kerala because Kerala mathematics had been building toward them through the demands of its astronomical tradition.

Mathematics is, in this sense, both universal and multiply discoverable. The same truths can be found by different people at different times, starting from different problems, following different paths. This does not diminish any of the discoverers. It reveals something about the nature of mathematics itself: that it is not invented arbitrarily, that its results are not contingent on who happened to be working at a particular moment, but that they have a kind of inevitability — they are waiting to be found by anyone who looks long enough and hard enough in the right direction.

Newton and Leibniz looked. They found. They built a framework that transformed physics, astronomy, engineering, and eventually every quantitative science. The framework they built was real, new, and irreplaceable. The fact that some of its components had been found earlier, elsewhere, by people whose names they did not know, makes the history of mathematics richer and more honest. It does not make their achievement smaller.

---

## The World That Calculus Built

Within a generation of Newton's *Principia* and Leibniz's papers, calculus had become the universal language of the physical sciences.

The Bernoulli brothers — Johann and Jakob — extended calculus to the study of curves, discovering the shapes of hanging chains and the paths of fastest descent. Their student, the Swiss mathematician Leonhard Euler, developed the subject with an energy and productivity that has never been matched: he worked through differential equations, the calculus of variations, complex analysis, number theory, and dozens of other fields, often while blind in one eye and eventually in both, dictating results to scribes until the day he died. Euler gave calculus its modern notation — he introduced *f(x)* for a function of x, *e* for the base of the natural logarithm, *i* for the square root of −1, Σ for summation, and π for the ratio of circumference to diameter, standardising a symbolic language that the entire world now uses.

In France, the calculus of Newton and Leibniz was extended by d'Alembert, Lagrange, and Laplace into what became analytical mechanics: a complete mathematical theory of the motion of bodies under forces, so powerful that Laplace could write his five-volume *Mécanique céleste* — Celestial Mechanics — which gave precise mathematical descriptions of the entire solar system's motion, and could reportedly say to Napoleon, who asked where God featured in his system, that he had no need of that hypothesis.

Engineering followed. The mathematical description of heat flow, developed by Fourier in 1822, required calculus and produced the Fourier series — the decomposition of any periodic function into a sum of sines and cosines, which turns out to be one of the most practically useful mathematical tools ever developed. Every digital audio file, every image compression algorithm, every wireless communication system uses Fourier analysis at its core. Fourier's work on heat conduction produced tools that are now embedded in every smartphone.

The mathematics of electricity and magnetism, developed by Maxwell in the 1860s, required a calculus of vector fields — rates of change in three dimensions simultaneously. Maxwell's four equations, written in the language of the calculus that Newton and Leibniz had made possible, describe the entire behaviour of light and electromagnetism. They predicted radio waves before radio waves were discovered. They predicted that light is an electromagnetic wave. They are, in the estimation of most physicists, the most compressed and powerful four equations in physics.

All of this — the engineering, the physics, the technology — flows from the months that a twenty-two year old spent in his mother's farmhouse in Lincolnshire while the plague raged in London. And from the years a German philosopher spent in Paris, educating himself in mathematics that would turn out to be the mathematics the world needed most.

---

## A Note on What Was Still Missing

Calculus, in Newton's and Leibniz's hands, was powerful but not rigorous. The concept of the infinitesimal — a quantity smaller than any positive number yet not zero — was philosophically murky, and their critics knew it. The Irish bishop George Berkeley, in a pamphlet of 1734 titled *The Analyst*, attacked the foundations of calculus with devastating wit, calling the infinitesimals "ghosts of departed quantities" and asking how mathematicians could claim certainty from a method that divided zero by zero at every step.

Berkeley was right that the foundations were shaky. The rigorous underpinnings of calculus — the formal theory of limits, the epsilon-delta definitions that make the concept of an infinitesimal precise without requiring any actual infinitely small quantities — would not be developed until the nineteenth century, through the work of Cauchy, Weierstrass, and Riemann. For nearly two centuries, mathematicians used calculus with extraordinary success while its logical foundations remained insecure.

This is, actually, normal. In the history of mathematics, the tools tend to come first and the justification follows when the need is felt. The Babylonians used the quadratic formula for a thousand years before anyone proved it. The Greeks used geometry for centuries before Euclid axiomatised it. The Indian mathematicians summed infinite series before anyone had a rigorous theory of convergence. Newton and Leibniz used calculus for generations before Cauchy and Weierstrass showed precisely what it meant.

Mathematics is more pragmatic than its reputation suggests. A tool that works gets used. The proof that it works can wait until someone is dissatisfied enough with the shakiness to do something about it.

What was still missing after Newton and Leibniz was the rigour — and, more importantly for the next chapter, several large territories of mathematics that calculus could not yet reach: the behaviour of probability and statistics, the geometry of curved spaces, the deep structure of numbers themselves. Those territories would be explored in the eighteenth and nineteenth centuries by mathematicians who were, in many ways, working with even less practical motivation than Newton and Leibniz had. They would be following ideas for their own sake, into regions where the immediate application was invisible — and finding, often a century later, that the applications were waiting.

---

*The next chapter turns to the strange world of the eighteenth century, where mathematicians discovered that the most apparently useless mathematics — imaginary numbers, functions of complex variables, the abstract theory of series — kept turning out to describe the physical world with uncanny precision. The question of why mathematics works at all begins to press itself upon us. Euler, who did more to answer it than anyone, is waiting.*

---
