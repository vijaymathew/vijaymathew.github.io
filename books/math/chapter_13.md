# Chapter Thirteen: The Mathematics of Symmetry
### *Italy, France, and Germany, 1500–1832 CE*

---

On the night of May 29, 1832, a twenty-year-old French mathematician named Évariste Galois sat up writing as if he were racing the dawn.

He had reason to think he might be dead by the next day. In the morning he was due to fight a duel, under circumstances that remain murky even now: perhaps over a woman, perhaps as part of a political trap, perhaps both. He had already been arrested more than once for republican agitation, had denounced the monarchy, had spent time in prison, and had become known to the authorities less as a promising mathematician than as a dangerous young radical. Now, convinced that the duel would end badly, he spent the night trying to save his mathematics.

He wrote letters. He wrote summaries. He wrote compressed, urgent explanations of ideas that he had been struggling to get the mathematical world to understand. Again and again, in the margins and between arguments, he wrote a plea:

```
I have no time.
```

The next morning he was shot in the abdomen. He died the following day in a hospital in Paris. This much makes for romantic legend, and the story has often been told that way: the doomed prodigy, the final manuscript, genius interrupted by history. But the mathematics he was trying to rescue mattered for a deeper reason. Galois had discovered that one of algebra's oldest ambitions had to be abandoned, and that its failure concealed an entirely new kind of mathematics.

For three centuries, European algebraists had been trying to do something that seemed natural, practical, and entirely in keeping with the history of the subject: find formulas for solving equations. By Galois's time they had succeeded brilliantly for equations of degree two, three, and four. For equations of degree five, they had failed. What Galois understood was that the failure was not due to lack of ingenuity. It was a matter of structure. The real object hiding inside an equation was not, at bottom, a number. It was a pattern of symmetries. From that discovery came group theory.

---

## The Dream of Solving Every Equation

From the beginning, algebra had been driven by the urge to solve. Babylonian scribes solved quadratic problems rhetorically. Indian and Islamic mathematicians systematised rules for equations. Renaissance Italians, in one of the most dramatic episodes in mathematical history, found general methods for the cubic and quartic. By the sixteenth century, it had begun to look as though there might be a formula for every polynomial equation, if only someone were clever enough to find it.

A polynomial equation looks like this:

$$
axⁿ + bxⁿ⁻¹ + cxⁿ⁻² + ... = 0
$$

where the highest power `n` is called the degree.

The simplest nontrivial case is the quadratic:

$$
ax² + bx + c = 0
$$

For this there is a famous formula:

$$
x = (-b ± √(b² - 4ac)) / 2a
$$

Whatever specific quadratic you are given, the roots can be written in this form.

The Renaissance triumphs extended the same dream. Tartaglia and Cardano found formulas for the cubic. Ferrari found one for the quartic. The formulas were long, ugly, and psychologically shocking — this is where complex numbers first appeared — but they existed. That mattered more than their ugliness. Algebra seemed to be telling mathematicians that every equation, however complicated, might eventually yield to radicals: addition, subtraction, multiplication, division, and the extraction of roots. So the next target was obvious: the quintic.

That is the general equation of degree five:

$$
ax⁵ + bx⁴ + cx³ + dx² + ex + f = 0
$$

Not one particular quintic, but the general one. The question was not whether some fifth-degree equations can be solved. Of course some can. For example:

$$
x⁵ - 1 = 0
$$

can be handled explicitly. The question was whether there is a general formula, analogous to the quadratic formula, that will solve every quintic by radicals. For more than two centuries, mathematicians assumed the answer was yes. That assumption turned out to be false.

---

## What the Quadratic Formula Is Really Doing

To understand why the quintic fails, it helps to see what even the quadratic formula is secretly doing.

Suppose an equation has two roots, `r₁` and `r₂`. Then it can be written as:

$$
(x - r₁)(x - r₂) = 0
$$

Expanding gives:

$$
x² - (r₁ + r₂)x + r₁r₂ = 0
$$

So if the quadratic is:

$$
x² + bx + c = 0
$$

then the roots satisfy:

$$
r₁ + r₂ = -b
$$

$$
r₁r₂ = c
$$

This is already revealing. The coefficients do not tell you the roots individually. They tell you symmetric facts about them: the sum and the product. If you swap `r₁` and `r₂`, nothing changes. The equation does not care which root you call first and which you call second.

Take a concrete example:

$$
x² - 5x + 6 = 0
$$

Its roots are:

```
2 and 3
```

The coefficients encode:

$$
2 + 3 = 5
$$

$$
2 × 3 = 6
$$

But those facts remain true if you reverse the roles of 2 and 3. From the point of view of the coefficients alone, the two roots are entangled. The equation knows them only through relationships unchanged by swapping.

So how does the quadratic formula separate them?

By introducing one extra quantity that changes sign under the swap: the difference of the roots.

Observe that:

$$
(r₁ - r₂)² = (r₁ + r₂)² - 4r₁r₂
$$

Using the coefficient relations, this becomes:

$$
(r₁ - r₂)² = b² - 4c
$$

if the quadratic is monic, or more generally:

$$
(r₁ - r₂)² = (b² - 4ac)/a²
$$

So:

$$
r₁ - r₂ = ± √(b² - 4ac) / a
$$

Now we know both:

$$
r₁ + r₂
$$

and

$$
r₁ - r₂
$$

and from these we can isolate each root:

$$
r₁ = ((r₁ + r₂) + (r₁ - r₂))/2
$$

$$
r₂ = ((r₁ + r₂) - (r₁ - r₂))/2
$$

That is the quadratic formula.

This may look like a simple manipulation, but it contains the whole future story in miniature. The coefficients give only symmetric information. To recover the individual roots, one has to introduce expressions that transform in controlled ways when the roots are permuted. Algebra, in other words, is already dealing with symmetry before it knows the word.

---

## Permutations in Disguise

The crucial idea is permutation. A permutation is simply a rearrangement. If an equation has roots:

$$
r₁, r₂, r₃
$$

then one may reorder them as:

$$
r₂, r₁, r₃
$$

or

$$
r₃, r₁, r₂
$$

or in any other way. For three objects there are:

$$
3! = 6
$$

possible permutations. For four objects there are:

$$
4! = 24
$$

For five:

$$
5! = 120
$$

The equation itself does not come with the roots labelled in order. If you are handed:

$$
x³ - 6x² + 11x - 6 = 0
$$

you may later discover that its roots are 1, 2, and 3. But the equation is indifferent to whether you list them as:

$$
1, 2, 3
$$

or

$$
3, 1, 2
$$

The coefficients are built from symmetric combinations of the roots, and those combinations are invariant under permutation.

For the cubic:

$$
x³ - sx² + px - q = 0
$$

the coefficients encode:

$$
r₁ + r₂ + r₃ = s
$$

$$
r₁r₂ + r₁r₃ + r₂r₃ = p
$$

$$
r₁r₂r₃ = q
$$

Again, these expressions are unchanged if the roots are rearranged. Lagrange, in the eighteenth century, saw that this was not a side issue. It was the heart of the matter. Why do formulas for the quadratic, cubic, and quartic work? Because one can find auxiliary expressions in the roots whose behaviour under permutation is simple enough to control.

That is a very different question from "how do we manipulate symbols cleverly enough?" It is a structural question. It asks what kinds of rearrangements are possible, and what expressions remain stable under them. Algebra was beginning to turn into the study of transformations.

---

## Lagrange Looks Beneath the Formula

Joseph-Louis Lagrange, one of the great mathematicians of the eighteenth century, did not solve the quintic. What he did was more important for the future: he explained why the known formulas have the form they do.

He asked, in effect, what is common to the quadratic, cubic, and quartic solutions. His answer was that each formula depends on constructing certain expressions from the roots that do not remain fully symmetric, but whose changes under permutation are limited and manageable. These expressions can then be combined so that, after taking suitable powers or roots, one returns to symmetric quantities determined by the coefficients.

For the cubic, for example, one introduces combinations of the roots involving the cube roots of unity:

$$
1, ω, ω²
$$

where:

$$
ω³ = 1
$$

$$
ω ≠ 1
$$

$$
1 + ω + ω² = 0
$$

Then expressions like:

$$
r₁ + ωr₂ + ω²r₃
$$

behave in a controlled way when the roots are cyclically permuted. They are not invariant, but they are not chaotic either. Their cubes turn out to be much more symmetric than the expressions themselves, and this is what makes Cardano's formula possible.

One need not follow every algebraic detail to see the pattern. The formula works because the permutations of three roots can be organised in a way that radicals know how to handle. The same is true, more elaborately, for four roots.

Lagrange pushed this analysis far enough to see why the quintic might be different. As the number of roots increases, the world of permutations grows rapidly more complicated. For five roots there are 120 permutations, and the machinery that works for lower degrees no longer seems able to reduce the symmetry to something manageable.

This was a crucial change in perspective. The old question had been: can we find the formula? Lagrange was already asking: what kind of symmetry would make such a formula possible? That question leads directly to Galois.

---

## Why Some Quintics Yield and Others Do Not

It is important to state the problem carefully, because this is where careless phrasing can mislead. The claim is not that quintic equations cannot be solved; many can. The claim is not that fifth-degree equations have no roots. By the nineteenth century, algebra had long since accepted that every polynomial equation has roots in the complex numbers, once one counts multiplicity. That fact was later given rigorous proof in the fundamental theorem of algebra. The claim is narrower and deeper: there is no general formula by radicals for all quintic equations.

Some special quintics are solvable by radicals. Others are not. What Abel and Galois showed is that there cannot exist a universal recipe of the Cardano-Ferrari type that will work for every equation of degree five.

This distinction matters because it shifts the problem from degree alone to internal structure. Two quintics may sit side by side on the page and look superficially similar. One may submit to radicals; the other may resist them absolutely. The difference lies not in the mere presence of `x⁵` but in the pattern of symmetries among the roots.

That is why the story becomes so modern so quickly. Algebra ceases to classify equations only by visible form and begins to classify them by hidden structural behaviour.

---

## Abel Closes the Old Door

The decisive negative result came first from Niels Henrik Abel, a Norwegian mathematician of extraordinary brilliance and equally extraordinary hardship.

Abel was born in 1802, the son of a poor pastor. He grew up in difficult circumstances, became recognised as a prodigy, and produced major mathematics while living in chronic poverty. Europe had not yet learned how to support pure mathematicians who were not well connected, and Abel paid the price. He travelled, wrote, borrowed money, was neglected by institutions that should have helped him, and died of tuberculosis in 1829 at the age of twenty-six, before learning that he had finally been offered a secure academic appointment.

In 1824, while still in his early twenties, Abel published a proof that the general quintic is not solvable by radicals.

This was a historic moment. For centuries, mathematicians had treated the quintic as the next fortress to be taken. Abel showed that the fortress, as imagined, does not exist. There is no hidden general formula waiting to be found. The project itself was misconceived.

That is one of the great turning points in mathematical history. A major research programme does not culminate in triumph but in impossibility. Yet, as so often happens, the impossibility is more fertile than the hoped-for solution would have been. Abel had closed an old door. Galois would show what opened when it shut.

---

## Galois Before Galois Theory

Évariste Galois was born in 1811, into a France still living in the aftershocks of revolution and empire. He grew up under the Bourbon Restoration, in a politically charged household, and came of age during a period when mathematics, republican politics, and institutional conservatism all collided in unpleasant ways.

He was temperamentally unsuited to smooth advancement. Brilliant, combative, suspicious of authority, impatient with mediocrity, he alienated examiners and administrators almost as efficiently as he impressed the few mathematicians who recognised his gifts. He failed the entrance examination to the École Polytechnique, partly because of nerves and partly because the examination system was badly designed for minds like his. He entered the École Préparatoire instead, became embroiled in republican activism, and was repeatedly in trouble with the state.

His manuscripts were mishandled in ways that have become notorious. Augustin-Louis Cauchy, one of the great mathematicians of the age, received some of his work and failed to shepherd it properly into publication. A later memoir submitted for a mathematical prize seems to have been lost or neglected after Fourier's death. This has helped nourish the legend of misunderstood genius, but the important point is simpler: Galois was doing mathematics that his contemporaries were only beginning to understand, and he was doing it with very little institutional protection.

What he saw, with extraordinary clarity, was that Abel's impossibility result was not the end of the equation problem but its transformation. The right question was no longer "Can the general quintic be solved?" It was: given a particular equation, what is the symmetry structure of its roots, and does that structure allow solution by radicals? That question is the birth of Galois theory.

---

## What a Group Actually Is

Before we see Galois's answer, we need the central concept. A group is a collection of transformations together with a rule for combining them, such that the combination of two allowed transformations is again allowed, there is an identity transformation that does nothing, every transformation has an inverse, and the rule of combination is associative.

That definition, written this way, sounds dry. It is better to begin with examples.

Take an equilateral triangle. You may rotate it by:

$$
0°, 120°, 240°
$$

and it still occupies the same overall position. You may also reflect it across any of its three symmetry axes. Altogether there are six symmetries:

- three rotations
- three reflections

If you perform one symmetry and then another, the result is still a symmetry of the triangle. If you do nothing, that is the identity. If you rotate by 120°, you can undo it by rotating by 240°. These symmetries form a group.

The point of the concept is that it captures structure through allowable transformations rather than through the static object alone. A triangle can be studied by its side lengths and angles, but it can also be studied by the ways it can be moved without changing its essential form. That second point of view is often deeper.

Now replace the triangle's geometric symmetries with permutations of roots.

If an equation has roots:

$$
r₁, r₂, r₃
$$

then any rearrangement of these roots is a permutation. The full collection of all such permutations forms a group. For three roots this is the symmetric group:

$$
S₃
$$

For five roots, the full permutation group is:

$$
S₅
$$

This was Galois's leap. The relevant object attached to an equation is not just its coefficients or its explicit roots. It is the group of permutations that preserve the algebraic relations visible from the field in which one is working.

That is a much subtler statement than "all rearrangements are possible," but for present purposes the intuition is enough: the solvability of an equation is controlled by the symmetry group of its roots.

---

## Radicals as Symmetry-Breaking

Why should radicals have anything to do with groups? Because extracting a root reduces uncertainty in a very specific way.

Suppose I tell you that:

$$
y² = 9
$$

Then you know:

$$
y = 3 	ext{ or } y = -3
$$

Before choosing the square root, there is a twofold symmetry: the equation does not distinguish `3` from `-3`. Extracting the square root breaks that symmetry by making a choice.

Similarly, if:

$$
y³ = 8
$$

then over the complex numbers there are three cube roots, related by multiplication by cube roots of unity. Extracting a cube root means passing from a symmetric situation to a more specific one.

This is the key. A solution by radicals proceeds through a sequence of extensions, each one breaking the symmetry only in certain controlled ways. The groups compatible with such step-by-step symmetry breaking are called solvable groups.

One does not need the full formal definition here, but the intuition matters. A group is solvable if its symmetries can be dismantled layer by layer into simpler pieces, where at each stage the remaining ambiguity is commutative enough to be handled by root extraction.

The quadratic works because its two-root symmetry is tiny and easy to break. The cubic and quartic work because, though more intricate, their symmetry groups can still be peeled apart into manageable layers. The generic quintic fails because its group is too entangled.

More precisely, the full symmetry group on five objects, `S₅`, contains within it the alternating group `A₅`, a highly structured subgroup that cannot be decomposed into the sort of successive abelian layers that radicals require. In modern language, `A₅` is simple and non-abelian. In less technical language: the symmetry is too rich to be dismantled by the old toolbox. That is the reason no general radical formula exists: not because mathematicians were unimaginative, not because the formula is extraordinarily ugly and remains to be discovered, but because the symmetry structure itself forbids it.

---

## A Small Example of the Idea

Let us return for a moment to the quadratic, because it shows the principle in the simplest possible form. If the roots are `r₁` and `r₂`, then the coefficient data knows:

$$
r₁ + r₂
$$

$$
r₁r₂
$$

These quantities are unchanged by the only nontrivial permutation:

$$
r₁ ↔ r₂
$$

So the equation begins with a symmetry of order two. To solve it, we adjoin:

$$
r₁ - r₂
$$

or equivalently its square root form through the discriminant. This quantity changes sign under the swap, so once it is available, the symmetry is broken and the individual roots can be separated.

This is exactly what the quadratic formula does. It is not simply a recipe for getting numbers out. It is a controlled destruction of symmetry. Galois generalised that insight far beyond the quadratic. For any equation, one asks:

- what permutations of the roots preserve the algebraic relations already known?
- how does that group shrink when one adjoins new quantities?
- can the symmetry be dismantled completely by adjoining radicals?

If yes, the equation is solvable by radicals. If not, it is not. This is why Galois theory feels so modern. The visible object on the page is an equation. The real object of study is a hidden transformation structure attached to it. Mathematics had crossed another threshold. It was no longer primarily about finding objects. It was about understanding the relations that govern them.

---

## The Duel and the Manuscripts

The tragic circumstances of Galois's death matter less than people sometimes think, but they are not irrelevant. Had he lived, he would almost certainly have clarified, expanded, and published his theory more fully. The mathematics would have entered circulation faster and with less myth attached to it. Instead, it survived in compressed manuscripts, letters, and memoirs that later mathematicians had to reconstruct.

Joseph Liouville eventually recognised the depth of Galois's work and published key papers in 1846, more than a decade after Galois's death. Only then did the theory begin to take its place in mainstream mathematics.

This delay is worth noticing because it tells us something about mathematical innovation. A radically new idea is not always hard because its proofs are long or technical. Sometimes it is hard because it asks mathematicians to look in the wrong place. Everyone else was staring at formulas. Galois was staring at the symmetries behind them.

Once that shift is made, the whole landscape changes. The quintic is no longer the central drama. The central drama is the emergence of structure as the true subject of algebra.

---

## From Equations to Structure

Group theory quickly escaped the equation problem that gave birth to it. That is one mark of a deep idea. It appears first in response to a specific difficulty, then reveals itself as a language for many apparently unrelated situations.

Permutations form groups. Geometric symmetries form groups. Rotations of a solid form groups. Arithmetic operations modulo a prime form groups. The symmetries of crystals form groups. The transformations preserving physical laws form groups.

By the late nineteenth and early twentieth centuries, group theory was everywhere.

In geometry, Felix Klein proposed understanding different geometries through their transformation groups: Euclidean geometry studies properties preserved by rigid motions, projective geometry those preserved by projective transformations, and so on. In crystallography, the possible symmetry groups of repeating patterns helped classify crystal structures. In physics, symmetry principles became foundational. The conservation of momentum is tied to spatial translation symmetry; the conservation of angular momentum to rotational symmetry. Quantum mechanics would later be saturated with group theory.

Chemistry, too, found use for the concept. The symmetry group of a molecule helps determine how it can vibrate, what spectra it exhibits, how it interacts with light. What began in the failure to solve the quintic by radicals became one of the main organising ideas of modern science.

This is another recurring pattern in the history of mathematics. A local failure turns into a general language. The Greeks could not trisect the angle, and from that impossibility eventually came much deeper algebra. The quintic could not be solved in the old way, and from that impossibility came group theory. The unsolved problem was not wasted effort. It was a tunnel.

---

## Why This Chapter Matters

At first glance the equation problem may look narrower than calculus or geometry. Motion concerns the whole physical world. Space concerns the whole visible world. But the mathematics born from polynomial equations may be even more conceptually important, because it taught mathematicians to stop asking only what objects are and to ask what transformations preserve their essential relations.

That shift is foundational to modern mathematics. When algebra becomes the study of structure rather than only the manipulation of symbols, the subject changes character. One no longer searches merely for explicit answers. One studies invariants, symmetries, morphisms, actions, and relations between systems. The visible problem may be about roots of equations; the invisible achievement is a new way of thinking.

This is why Galois stands with the great conceptual revolutionaries of mathematics despite dying at twenty. He did not just solve a famous problem. In one sense, he showed that the famous problem could not be solved as expected. In a deeper sense, he replaced the problem with a better one.

That is often what mathematical genius looks like. Not getting the desired answer faster than everyone else, but discovering that the real question lies elsewhere.

---

## The End of Formula Worship

There is a philosophical lesson here that reaches beyond algebra. For centuries, mathematicians had treated formulas as the royal road to understanding. If one could write the roots explicitly in radicals, the equation was understood. If one could not, the understanding was incomplete. Galois shattered that hierarchy. An equation may be perfectly well understood structurally even when no explicit radical formula exists.

Indeed, sometimes the impossibility of such a formula is itself the deepest understanding available. To know that a general quintic cannot be solved by radicals, and to know exactly why in terms of its symmetry group, is far more illuminating than having a monstrous symbolic expression would have been.

This is a mature mathematical attitude. It values explanation over mere expression. It asks not only "what is the answer?" but "what kind of object is this, what transformations govern it, and what kinds of answers are possible in principle?"

By the nineteenth century, mathematics was increasingly moving in this direction. Non-Euclidean geometry had shown that axioms define possible worlds. Galois theory showed that algebraic problems are governed by hidden symmetry. The subject was becoming unmistakably structural.

That is the world modern mathematics still inhabits.

---

## What Galois Changed

Galois changed the fate of algebra in at least three ways.

First, he completed the story of the classical equation problem by turning a centuries-old failure into a theorem. The general quintic is not solvable by radicals, and the reason is structural.

Second, he attached to every equation a new kind of object: a group of symmetries. The equation ceased to be only a string of coefficients and powers. It acquired a hidden internal organisation.

Third, he helped make symmetry one of the master ideas of modern thought. Not only in mathematics, but in physics, chemistry, and later much of theoretical science, symmetry became a guide to what is possible, what is conserved, and what forms a system may take.

That is a remarkable legacy for someone who died at twenty. It is also a reminder that mathematical history is not a steady accumulation of formulas. Sometimes it advances by discovering that old ambitions were too narrow. The quintic was not solved in the old sense. Instead, mathematics learned to ask what sort of solution could exist, and why. That is a deeper victory.

The chapter began with a young man writing frantically because he believed he had no time. He did not. But the mathematics survived the night. And when it survived, it carried algebra into a new era.

---

*In the next chapter, mathematics turns toward infinity itself. Questions about sets, size, and the infinite that had once seemed philosophical or theological would become precise mathematics in the hands of Cantor, and the result would unsettle the foundations of the subject as deeply as non-Euclidean geometry had unsettled space.*

---
