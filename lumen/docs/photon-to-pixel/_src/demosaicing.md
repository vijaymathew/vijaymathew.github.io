Every pixel in the balanced mosaic knows one third of its own color. Demosaicing invents the other two thirds — sixteen million educated guesses per photograph, made so routinely that most photographers don't know a guess is happening at all. It is the most studied problem in the whole pipeline, the place where camera reviews are quietly won and lost, and the first stage where this book's ground truth pays off in full: we will not argue about which algorithm is better, we will *measure* it.

One note on what "better" can even mean. A mosaic sampled red at one site in four; scene detail finer than that grid is not recorded ambiguously, it is not recorded at all, and no algorithm can conjure it back. Demosaicing is therefore not reconstruction in the strict sense — it is *prediction from assumptions about images*, and every method in this chapter is exactly one such assumption made mechanical. Better assumptions, better guesses; and near the center of the starburst, where the scene outruns the grid, everyone fails and the only question is how gracefully.

## 4.1 The floor and the baseline

The simplest assumption: *pixels are like their neighbors.* Taken literally, it gives `nearest` — copy each missing value from the closest photosite of that color, no arithmetic at all. Each 2x2 cell then wears a single red and a single blue value whole, so the red image and the blue image are shifted copies of each other, and every edge becomes a small rainbow. The method exists in this book to be the floor, and to make a point: demosaicing artifacts are not exotic — they are what *not thinking* looks like, rendered visibly.

The same assumption, taken smoothly, gives the baseline every paper in the field measures against:

{{include pxp/demosaic.py::bilinear}}

Averaging is kind to smooth regions — flat patches come out exact, as the test suite confirms — and unkind exactly where the image lives: at edges. Averaging across an edge invents values that belong to neither side, and it does so *independently per channel*, on grids that don't even sample the same places. The signature artifacts follow directly:

{{figure demosaic-zipper | A color edge from the chart, 8x: ground truth (left), bilinear (middle), AHD (right — where this chapter is headed). Bilinear's middle panel shows the classic <em>zipper</em>: the edge lands between photosites, alternate rows interpolate it differently, and a straight boundary becomes sawteeth of false color. AHD keeps the edges straight — and pays a different, subtler price: the three-pixel-wide surround stripe comes out tinted, because features that thin fall below the mosaic's color sampling and <em>something</em> must give.}}

Zippering — alternate-row disagreement along edges — and false color fringes are the two artifacts every demosaicing method since 1980 has been an attempt to suppress. Both are visible in the middle panel; both have the same root cause; and the cure for each begins with the same observation about real images.

## 4.2 Interpolate differences, and defer decisions

The observation: in natural images, *color changes far more slowly than brightness*. Most edges are luminance edges — the red and green values both drop at the shadow line, together. So while red itself is jagged, red *minus green* is smooth almost everywhere, and smooth signals are what interpolation is actually good at. This suggests reconstructing the dense green channel first (Chapter 3's gradient-directed `interpolate_green`, built on the same insight), then interpolating not red, but the red-minus-green *difference*, and letting it ride on the reconstructed green:

{{include pxp/demosaic.py::_rb_as_differences}}

Green plus color differences is the `gradient` method, and to say how much it buys, the book needs its measuring stick for images: **PSNR**, peak signal-to-noise ratio — mean squared error against ground truth, flipped onto a logarithmic decibel scale so that higher is better and every three decibels means the error halved. On the torture target, `gradient` buys nearly five decibels over bilinear — the single largest step anywhere on this chapter's ladder. Almost every serious demosaic since the mid-1990s, however elaborate, has this exact structure at its core: dense channel first, differences after.

What remains is the direction problem. `interpolate_green` decides horizontal-or-vertical from a local gradient — two subtractions — and near busy texture that decision is noisy; every wrong call plants a zipper tooth. **AHD** — Adaptive Homogeneity-Directed, Hirakawa and Parks, 2005 — reframes the problem with one elegant move: *stop deciding early*. Interpolate the entire image twice, once committed everywhere to horizontal and once to vertical, and then judge the finished candidates: at each pixel, keep the one whose neighborhood is more *homogeneous* — more neighbors within a tight luminance and chrominance tolerance. A wrong direction produces local color churn; homogeneity detects the churn without ever knowing the truth:

{{include pxp/demosaic.py::ahd}}

!!! patent "Patent note"
    AHD is published academic work, implemented for two decades in open-source raw processors (dcraw, RawTherapee, LibRaw). It is safe to implement, explain, and build on. What is *not* being reimplemented here — in this chapter or anywhere in this book — is any camera manufacturer's actual in-camera demosaicing, which is proprietary and in some cases patented. This book's results will visibly differ from any specific manufacturer's rendering, and that is by design.

The ladder, measured over the full starburst frame against ground truth:

| Method | PSNR | What the number hides |
|---|---|---|
| nearest | 12.55 dB | rainbows on every edge |
| bilinear | 15.56 dB | zipper and fringe, softness |
| gradient | 20.25 dB | occasional wrong directions |
| AHD | 21.44 dB | thin-feature tinting |

{{figure demosaic-ladder | The same starburst crop, five ways: ground truth, then the ladder — nearest, bilinear, gradient, AHD. Confetti becomes blur becomes zipper becomes something close to the truth; and near the frame's center (up-left of these crops), where wedge spacing outruns the mosaic's sampling, every method aliases — prediction has nothing left to predict from.}}

Read the table with the three-decibel exchange rate and `gradient` over `bilinear` is an error cut of two-thirds, bought with one insight and a page of code. AHD's further 1.2 dB is the polish: fewer wrong directions, straighter edges, at triple the arithmetic. (The paper's final step — a few passes of median filtering on the color differences — buys a little more and is omitted here, disclosed and discussed rather than implemented; dcraw ships it if you want to see it work.) All four methods exist in `pxp.fast` as bit-identical twins, and AHD is the reason the fast tier exists at all: the reference implementation builds two complete candidate images and judges every pixel of both, which at 24 megapixels is a coffee break per frame in pure Python.

## 4.3 The wider field, on paper

Everything above interpolates in the spatial domain — reasoning pixel by pixel, neighbor by neighbor. There is a second way to see the whole problem, worth knowing even if you never implement it, and it arrives by analogy with radio. One antenna can carry many stations at once because each is assigned its own *frequency* band, and the tuner pulls them apart by frequency after the fact. A Bayer mosaic, it turns out, does the same thing almost by accident. Picture any image as a blend of coarse, slowly-varying content and fine, rapidly-varying detail — its low and high **frequencies**. Sampling a full-color scene through the Bayer checkerboard leaves the brightness (luminance) sitting in the low frequencies — the **baseband**, radio's term for the band that was never shifted — while copying the color (chrominance) up into the highest frequencies, the corners of the frequency picture, the way a station's signal rides up onto a high-frequency **carrier**. The regularity of the CFA is what does the carrying. Seen this way, demosaicing is not interpolation at all but **filter design**: building frequency filters that cleanly separate the luminance band from the chrominance bands, exactly the job a radio tuner does (Alleysson, Süsstrunk & Hérault 2005; Dubois 2005). And **false color** stops being a mystery — it is *crosstalk*, two stations bleeding into one another where their bands overlap and no filter can fully tell them apart. The view explains artifacts that spatial reasoning can only name, and it produced a family of fast, principled linear methods. If none of that clicked, nothing downstream depends on it: the spatial story above stands on its own.

The modern frontier treats demosaicing as learning rather than design: train a network on mosaiced/truth pairs, often jointly with denoising, since Chapter 2's noise and this chapter's interpolation interact badly when handled separately (Gharbi et al. 2016 is the standard reference; every phone in your pocket now runs a descendant). The trade is the usual one — better averages, opaque failures, and a training-set prior in place of an explicit assumption. This book stays with explicit assumptions; the survey is here so you know what the production world does, and where to read further.

## 4.4 X-Trans, briefly

Fuji's X-Trans sensors replace Bayer's 2x2 with a 6x6 arrangement — still half green, but pseudo-irregular, every row and column containing all three colors. The rationale runs straight through this chapter's figures: a *regular* sampling grid turns fine regular detail into clean, confident, wrong patterns (moiré — our starburst centers are full of it), and irregularity trades that structured failure for unstructured, noise-like failure that eyes forgive and that lets the camera drop its optical low-pass filter. The cost lands on this chapter's algorithms: neighborhoods vary cell by cell, "the same-color neighbor two steps away" stops being a constant, and everything from the bilinear stencils to AHD's candidate machinery must be rebuilt per-position. Open implementations exist and are excellent reading (Markesteijn's algorithm in RawTherapee is the reference point); Fuji's own in-camera processing is proprietary, and neither is reimplemented here — the concepts transfer, the stencils don't.

---

The mosaic is an image now: three channels everywhere, edges straight where care was taken, and a measured account of what the guessing cost. But it is an image in *camera RGB* — the sensor's private, non-colorimetric idea of color, displayed so far only under deliberate mislabeling. Chapter 5 ends the mislabeling: what a color space actually is, why camera RGB isn't one, and the matrix — derived from our own spectral ground truth — that carries the image into a space where "red" finally means red.