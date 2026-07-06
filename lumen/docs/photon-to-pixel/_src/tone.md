Everything the pipeline has produced so far is linear: every value proportional to photons caught, the way physics counts and no eye or screen does. Since Chapter 1, one small function — `srgb_encode`, used on faith and promised an explanation — has stood between those numbers and every figure in this book. This chapter pays that debt first, then goes past it: from the encoding a display *requires* to the curves a photograph *wants*, then to the top of the range where clipping destroyed data, and finally to the local operations that let a bounded screen hold an unbounded scene.

## 7.1 Why linear looks wrong

Chapter 0's very first figure contained this chapter in miniature: a linear ramp that looked wrong — too dark too long, then rushing to white. The reason is the mismatch between how light adds and how seeing works. Vision is roughly logarithmic: each *stop* feels like a similar step, whether it is the stop from deep shadow to shadow or the stop from bright to blinding. A display fed raw linear values spends half its numeric range on the brightest stop (Chapter 2 made the same point about bits) and starves everything below middle gray:

{{figure linear-looks-wrong | The pipeline's linear output, shown two ways: values sent to the display raw (left) and through the sRGB transfer function (right). Same numbers, five-stop scene. The left panel is not underexposed — its highlights are fine — it is <em>mis-spent</em>: linear allocation gives the shadows almost none of the display's range, and most of the image lives in the shadows.}}

The fix is the **transfer function**: a concave curve applied at output that hands the display's range out in roughly perceptual steps. sRGB's is the one this book has been using — a power curve of exponent 1/2.4 with a short linear segment at the very bottom, engineered so the toe doesn't demand impossible precision near zero:

{{figure transfer-curves | The sRGB transfer function (violet) against a plain 1/2.2 power law (gray). For most of the range they are the same idea; the difference is the engineered toe. HDR displays extend the same thought further — the PQ curve used by HDR10 is a transfer function designed for a 10,000-nit range — but the reasoning never changes: spend the code values where perception can cash them.}}

Two words of vocabulary make the rest of the chapter sayable. Values proportional to scene light are **scene-referred**; values meaning "fraction of display brightness" are **display-referred**. The transfer function is the border crossing, and the entire art of tone is deciding *what happens at the border* — because a faithful crossing, it turns out, is not what anyone wants to look at.

## 7.2 Curves: the look lives here

Apply nothing but the faithful sRGB encoding and the result is the left panel of every "flat RAW" complaint on the internet: correct, and lifeless. Film never had that problem — not by design taste but by chemistry: its response to log exposure was an S, compressing shadows into a toe and highlights into a shoulder, with a mid-range slope steeper than faithful. A century of photography calibrated every eye to that S. Digital tone curves are that chemistry, reenacted on purpose.

Before shaping the curve, settle how curves are *carried*. Formulas full of powers and logarithms are for designing; pipelines ship curves as lookup tables:

{{include pxp/tone.py::bake_curve}}

Our S is built on the axis film responded to — stops above a black floor — with a toe, a shoulder, and one deliberate anchor: middle gray maps to the same brightness the plain sRGB curve gives it, so switching curves changes the look without changing the exposure:

{{include pxp/tone.py::filmic_curve}}

{{figure filmic-curve | The filmic S (violet) against the plain sRGB transfer (gray), drawn on the stops axis where the S is visible. Both leave middle gray alone — the curves cross at the anchor. The S buys its steeper, livelier mid-range by spending shadow and highlight range; the gray curve spends nothing and excites no one. Every "picture style" and camera profile you have ever chosen between lives somewhere in this family.}}

One decision remains, and it is a color decision hiding in a tone tool: apply the curve to *what*? Per channel is the tradition — each of R, G, B through the table independently — and it has a famous side effect: an S applied per channel drives the channels apart wherever they differ, which reads as a saturation boost. Apply the curve to luminance only, letting each pixel keep its channel ratios, and color stays measured while the punch drains out:

{{figure global-tone | One four-stop scene, three renderings: the neutral sRGB curve (left), the filmic S per channel (middle), the same S on luminance only (right). The middle panel is more saturated than anything the color chapters authorized — the S pushed the channels apart — and it is also, to most eyes, the best-looking of the three. The per-channel "flaw" survived a century because people like it; raw processors offer both behaviors and photographers argue accordingly.}}

## 7.3 The top of the range

The S-curve's shoulder handles bright values gracefully — values that exist. Chapter 2's response curve set a harder boundary: at the well's ceiling the sensor stops recording, and what a photosite never wrote down, no curve can render. But clipping has a structure, and the structure is exploitable.

Recall what white balance did: multiplied the channels by unequal gains. That means the *post-white-balance* channels clip at unequal levels — the gains themselves — with two consequences. A fully blown highlight lands at those gain values, and under D65 that triple reads pale magenta: the notorious cast of every blown sky, now derivable from first principles. And near the boundary the channels clip *at different scene brightnesses*, so there is a band where one channel has flatlined while the others still carry the scene. Both facts point at the same modest repair:

{{include pxp/tone.py::reconstruct_highlights}}

!!! patent "Patent note"
    Highlight reconstruction is a family of guesses, and several commercial members of the family — notably Adobe's — are proprietary and patent-encumbered. The version above is the simplest defensible one: neutral-assumption borrowing, fully disclosed, no attempt to match any product's behavior. Real tools propagate color from unclipped *neighborhoods* rather than assuming neutrality, and fail in more sophisticated ways.

{{figure highlight-recovery | Two stops overexposed, then pulled back down: without reconstruction (left), with it (middle), and a properly exposed reference (right). The left panel's blown region wears the magenta of the white-balance gains; the middle panel is forced to neutral gray there and recovers real structure in the staggered band where some channels survived. What it cannot do is visible against the right panel: the patch colors inside the fully blown region are simply gone. Reconstruction is triage, not time travel — the only complete fix for clipping is the exposure dial.}}

## 7.4 Local tone: compressing the lighting, keeping the texture

A global curve assigns one output brightness per input brightness, and for scenes wider than the display that is a straitjacket: compress eight stops into a screen's range with one curve and either the shadows mush, the highlights flatten, or the mid-range slope collapses into fog. Eyes solve this constantly — they adapt *locally*, reading a face in shadow and a sky in sun at full contrast simultaneously. Local tone mapping is the pipeline's version of that trick, and its core move is a decomposition: split brightness into a smooth **base** (the lighting) and the **detail** riding on it (the texture), then treat them differently — compress the lighting, keep the texture.

The split has to respect edges, or halos bloom around every boundary — which is why its workhorse is not a blur but the **bilateral filter**, an average that discounts neighbors by how *different* they are, not just how far:

{{include pxp/tone.py::bilateral}}

With the split in hand, the two famous moves are two gain settings on the same machine — Durand and Dorsey's range compression (shrink the base, keep the detail) and the slider every editor labels *clarity* (keep the base, push the detail):

{{include pxp/tone.py::local_contrast}}

{{figure local-tone | A six-stop scene. Left: the filmic curve alone — global, so the deep-shadow patches stay illegible. Middle: base compressed to 0.45, detail untouched — the lighting range shrinks, every patch becomes readable, and the texture keeps its contrast; this is tone <em>mapping</em> in the research-paper sense. Right: base untouched, detail pushed 2.2x — the "clarity" move, same lighting, more bite, and the noise gets louder along with everything else it calls texture.}}

!!! patent "Patent note"
    The operators above follow the published literature — Reinhard's global operator, Durand & Dorsey's bilateral decomposition, Fattal's gradient-domain work are the citable trunk of this field. Named commercial sliders ("Dehaze" and its relatives) are in some cases patented implementations; this book stays with the academic operators and does not attempt to reproduce any specific product's response.

Push either gain far enough and the seams show: gradient reversals at strong edges, the over-cooked "HDR look" of the 2010s, noise promoted to texture. The craft is entirely in the restraint, and the machinery is entirely above.

## 7.5 Sidebar: more photons, from the exposure dial

!!! note "Exposure stacking, nearly free"
    Chapter 2 left one cure for noise: collect more photons. When the scene out-ranges the sensor, collect them across *several exposures* — bracket, then merge in linear light, which our simulator makes a ten-line experiment (`merge_exposures` in this chapter's figure code): divide each capture by its exposure to land on one radiometric scale, then average every bracket in which each photosite stayed unclipped, weighted by exposure. The long exposures testify about the shadows, the short one about the highlights, and the merged frame is scene-referred with more range than any single capture — measured on our deep-shadow strip, relative noise drops from 0.044 to 0.013, close to the factor the added photons predict. The result still has to cross the display border, which is why HDR merging without Section 7.4's tone mapping just produces a wider image nobody can see; the two techniques became famous together for a reason.

{{figure hdr-stack | A deep-shadow crop, pushed 3.2 stops for inspection: a single exposure (left) against a three-bracket merge at 0, +2, and +4 stops (right). Same sensor, same scene, same processing — the merge simply collected twenty-one times the photons where the scene allowed it, and √N did the rest.}}

---

The image now spends its display range like a photograph instead of a measurement: shadows legible, highlights rolled off or repaired, the look chosen rather than inherited. What tone cannot do is make detail *crisper* or noise *quieter* — its local variant visibly does the opposite of the latter. Those two jobs, sharpening and denoising, are Chapter 8's — including the deconvolution promised to Chapter 6's stubborn halo, and the walk from the humble median filter to Non-Local Means.