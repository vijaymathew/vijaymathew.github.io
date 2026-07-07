The mosaic that came out of Chapter 2 is linear, zero-based, every photosite truthful or repaired — but it is not yet a measurement of the *scene*. It is a measurement of the scene times the light, `lit_by`, exactly as Chapter 1 built it. A white shirt under tungsten produced orange numbers, and no later stage knows or cares that the shirt was white unless something undoes the light first.

That something is white balance, and this chapter makes two claims about it. The familiar one: it can be done with three multiplications, and the entire difficulty is choosing the three numbers. The unfamiliar one, which most explanations skip and this book was partly written to make: it belongs *before* demosaicing, and the order is worth real, measurable image quality. Section 3.4 runs that experiment against ground truth.

## 3.1 The color of the light

Start with what the problem really is. The scene radiance at every point is reflectance times illumination, wavelength by wavelength. If the pipeline still had spectra, undoing the light would be a division — thirty-six of them per pixel — and it would be exact. But the sensor collapsed every spectrum to a single number through one of three filters. The spectra are gone. All that survives of the illuminant is what it did to those three channel responses — so three multipliers per image is not a simplification of white balance, it is all that the data can support.

Which three? Consider a perfect white surface — reflectance 1.0 everywhere. What the sensor reads on it *is* the illuminant, as this camera sees it:

{{include pxp/whitebalance.py::neutral_response}}

White balance is then the act of mapping that neutral back onto gray — scale red and blue so they meet green:

{{include pxp/whitebalance.py::gains_from_neutral}}

This is the von Kries recipe, and it is what every camera and raw processor does. Green is the anchor by convention: it carries the most photosites and, as Chapter 2 showed, usually the strongest signal — one more small dividend of Bayer's bet.

The simulator now does something no real camera can. We *know* the light — we typed it in — so we can compute the exactly correct gains and use them as the yardstick for every estimator that follows:

{{include pxp/whitebalance.py::reference_gains}}

For the book's three lights, the truth comes out as follows. Daylight: gains of (1.23, 1.0, 1.19) — nearly balanced, because our filters were designed in daylight's world. Tungsten at 2856 K: (0.68, 1.0, 2.61) — red pulled down by a third, blue multiplied by two and a half. The spiky fluorescent: (0.97, 1.0, 1.49). That tungsten blue gain of 2.61 is worth staring at: every blue photosite's value, *and its noise*, gets multiplied by 2.61. The blotchy blue shadows in every high-ISO tungsten photograph are this line of arithmetic; the noise chapter's warning that "every stage either respects noise or amplifies it" has already come true, one chapter later.

{{figure wb-casts | Swatch views measured directly off the tungsten mosaic — patch-region channel means, no demosaicing needed because the patches are flat. Left: raw camera RGB, displayed as if it were sRGB (a deliberate mislabel, disclosed: correct display is Chapter 5's job). Right: after the known-true gains. The neutral column becomes truly neutral — and the colored patches, note well, are corrected but not <em>right</em>: the blue is still dusky, the magenta still muted. Three multipliers can promise neutrality for neutrals, nothing more.}}

The right panel draws the chapter's boundary line. White balance makes gray things gray. It does not make color *correct* — the gap between these filters and human vision is untouched by any diagonal scaling, and closing it is Chapter 5's matrix. Keep the two jobs separate in your head; most "white balance looks right but skin looks wrong" complaints are the second job being blamed on the first.

## 3.2 Guessing the light

A real camera doesn't know the illuminant. It has exactly one clue — the mosaic itself — plus whatever the photographer deigns to tell it. Everything in automatic white balance (the AWB on your mode dial) descends from two old, beautifully simple assumptions about scenes.

**Assume the world averages to gray.** Sum each channel over the whole frame; if scene colors are diverse enough to cancel, the per-channel means are a reading of the illuminant:

{{include pxp/whitebalance.py::gray_world}}

**Assume the brightest thing is white.** A highlight or white surface reflects the illuminant nearly unfiltered; each channel's near-maximum is then the light's signature. The percentile guard exists because Chapter 2 taught us not to trust any single photosite:

{{include pxp/whitebalance.py::white_patch}}

Both assumptions are statements about *scenes*, not about optics — which means each fails precisely when its scene refuses to cooperate:

{{figure wb-estimators | A wall of red brick under tungsten, with one gray and one white square — corrected by gray-world (left) and by white-patch (right). Gray-world assumes the scene averages to gray; this scene averages to brick, so it "corrects" the world toward cyan and turns the white square blue. White-patch finds the genuinely white square and lands almost exactly on the true gains: brick stays brick. Swap in a scene with no white anywhere and the failure changes owners.}}

The left panel is not a bug — it is the assumption doing exactly what it says on a scene that violates it, and it is why every camera's AWB occasionally turns a sunset gray. Production AWB stacks heuristics (restrict to plausible illuminant colors, weight near-neutral regions, learned priors), but under them all sit these two estimators; illuminant estimation from a single image remains genuinely unsolved in the general case, because the mosaic of a white wall under tungsten and an orange wall under daylight can be *identical*.

The third estimator is the photographer. The Kelvin slider in every raw editor is Chapter 1's physics running backwards — assume the light is a glowing body at the stated temperature, compute what that does to a neutral, undo it:

{{include pxp/whitebalance.py::gains_for_temperature}}

It is only as right as its assumption too: daylight and fluorescents are not filaments, which is why real tools pair the slider with a green–magenta *tint* axis, mopping up the direction of error a blackbody assumption can't express. (Our fluorescent's true gains sit visibly off the temperature slider's reachable line.)

## 3.3 Three numbers, applied early

However the gains were chosen, applying them is almost embarrassingly small:

{{include pxp/whitebalance.py::apply_gains}}

Note what it runs on: the *mosaic*. Not an RGB image — the CFA data, each photosite scaled by its own channel's gain, before any demosaicing. The two-tier contract is satisfied with equal brevity — the `pxp.fast` twin phrases the same multiply as a tiled 2x2 gain map, and the equality test holds them bit-identical. (The estimators are deliberately *not* twinned: they emit three numbers, run once per image, and there is nothing about a mean or a percentile worth vectorizing on principle.)

Why insist on the order? The armchair argument goes like this. The next stage, demosaicing, must reconstruct two missing channels at every pixel, and every good algorithm for it is *edge-directed*: it reads local differences in the raw mosaic — differences that mix values from different filters — to decide which way to interpolate. Those cross-channel comparisons only mean what the algorithm thinks they mean if the channels are on a common scale. Hand it a mosaic where blue runs 2.6x hot and every red–blue seam in the image manufactures a gradient that isn't there — the algorithm sees *the light* as texture. Armchair arguments, however, are exactly what this book promised not to rest on.

## 3.4 The experiment

The instrument is a preview of Chapter 4: the smallest workable edge-directed demosaic, reconstructing green by choosing the smoother of the horizontal and vertical directions, with a correction term borrowed from the same-color neighbors two steps out (the classic Hamilton–Adams step — Chapter 4 rebuilds and measures it properly):

{{include pxp/demosaic.py::interpolate_green}}

The target is the starburst — every orientation, every frequency — photographed under deep 2000 K tungsten, where the true gains are a bruising (0.44, 1.0, 4.75). As with the lens, the imbalance is chosen to make the effect legible; at 2856 K everything below happens at about a quarter of the size. One capture, one set of true gains, one algorithm — the only variable is *when* the gains are applied.

First, the mechanism, caught directly. The green interpolator's horizontal-or-vertical decision is recomputed twice at every red and blue site — once on the balanced mosaic, once on the raw one:

{{figure wb-flips | Every photosite where channel imbalance flipped the interpolation direction, in violet, over the (dimmed) starburst. On this capture it is 10.2% of all decisions — one in ten — and they cluster exactly where reconstruction is hardest and most consequential: along the wedge edges. The light, left uncorrected, is voting on which way detail runs.}}

Then the outcome, measured against ground truth — the same scene rendered full-color, no mosaic, no noise, by simulator privilege:

{{figure wb-order | The same crop three ways: ground truth (left), white balance before demosaicing (middle), after (right). Both reconstructions alias near the center — no algorithm can rebuild frequencies the mosaic never sampled — but the wb-after panel fringes visibly harder along the wedges. Measured over the frame, wb-after lands 4.7% farther from truth (root-mean-square error 0.0731 vs 0.0698), with the entire difference concentrated at edges. Same capture, same gains, same code; the only thing that changed is the order of two lines.}}

Two honesty notes, because the book promised numbers rather than drama. The effect is real, one-directional, and free to obtain — it costs literally nothing to multiply before interpolating — but it is not catastrophic: on this torture target the total error is dominated by edges both orders struggle with, and 4.7% is the *measured* size of the win, not "night and day." And the experiment is baked into the test suite — `test_wb_before_demosaic_beats_wb_after` re-runs it on every build of this book, so the chapter's thesis is not an anecdote about one lucky seed. Real ISPs — the in-camera image signal processors — agree, for what it's worth, for additional unglamorous reasons: clipped-highlight bookkeeping and sensor calibration are all defined on CFA data, so the gains land there anyway.

---

The mosaic is now balanced: gray things read gray, the light's thumb is off the scale, and every cross-channel comparison downstream means what it appears to mean. What the image still isn't is an *image* — two of every three values are missing, and guessing them well is the most storied problem in the whole pipeline. Chapter 4 is demosaicing, done properly: bilinear as the baseline, the gradient-directed step you just previewed, and AHD, the 2005 adaptive method that tops the chapter's ladder — each one measured, in the only currency this book accepts, against the scene as it truly was.