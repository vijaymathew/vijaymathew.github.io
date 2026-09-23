Chapter 7 ended with a confession: tone can make an image legible and likable, but it cannot make detail crisper or noise quieter. This chapter takes up those two jobs, and the first thing to say about them is that they are the same job run in opposite directions. Sharpening amplifies local differences; noise *is* local difference. Every operator here lives with that tension, and because the simulator knows the noiseless truth behind every capture, this chapter can do what real-world tutorials cannot: put a number on where each operator falls.

## 8.1 Sharpening: the fake and the real thing

The oldest sharpener predates digital imaging by decades. Darkroom printers would sandwich a negative with a blurred positive copy of itself — an *unsharp* mask — and print through the pair. The trick deserves a slower look, because every sharpener since is built on it. A blur replaces each point with the average of its neighborhood. Where the image varies slowly, that average is nearly the point itself, so subtracting the blur cancels smooth regions to zero. At an edge the average cannot keep up: a pixel on the bright side is dragged down by its darker neighbors, a pixel on the dark side is dragged up by its brighter ones, and the subtraction leaves a signed residue — positive along one flank of the edge, negative along the other, silence everywhere else. That residue is a map of where the image changes quickly, drawn by the blur's own failure to follow. The darkroom sandwich performed the subtraction in light; the digital version is a few lines of arithmetic:

{{include pxp/detail.py::unsharp_mask}}

No new detail enters the image, because none can; what changes is the neighborhood of every edge, and the eye — which judges sharpness largely by edge contrast — is willingly fooled. The luminance decision is Chapter 7's tone-curve decision again, settled the same way.

{{figure sharpen-usm | A starburst through the kit lens, fully corrected and displayed: as-is (left), unsharp mask at amount 0.9 (middle), amount 3.5 (right). The middle panel is the slider used as intended — edge contrast up, the softness of Chapter 6's bilinear warps partly bought back. The right panel is the overshoot pushed until it reads as a halo, and notice what else got amplified: the colored zipper artifacts the demosaic left along the spokes. Sharpening raises whatever is there, with no opinion about whether it is image.}}

The unsharp mask fakes sharpness. Deconvolution pursues the real thing, and this is where the chapter pays Chapter 6's debt. Lateral CA correction registered the color channels and left behind a symmetric halo — dispersion inside each channel's band, a genuine blur that no warp can reach. But recall what a blur *is*: the unsharp mask's opening move replaced each pixel with a weighted average of its neighbors. That operation — slide a small grid of weights across the image and, at every pixel, replace the value with the weighted sum of what lies under the grid — is a **convolution**, and the little grid of weights is its **kernel**. A blur is a convolution whose kernel is the *point-spread function* (PSF): the shape a single point of light smears into on its way through the optics. And a convolution can in principle be run *backwards* — recovering the sharp image from the blurred one — *if you can name the kernel that blurred it*. Richardson–Lucy is the classic way to do it without inverting anything, one round of blur-compare-correct at a time:

{{include pxp/detail.py::richardson_lucy}}

Set loose per channel on Chapter 6's corrected corner dot, with a Gaussian of σ = 0.9 standing in for the unnamed dispersion kernel, Richardson–Lucy turns its iteration count into a dial worth watching end to end:

{{figure deconvolve-halo | Chapter 6's registered dot at 8x (left), Richardson–Lucy at 4, 12, and 40 iterations, and the perfect-lens dot (right). Four iterations collect much of the halo back into the core — the dot whitens and tightens, and this is the promised repair — though a faint dark ring is already forming. Twelve dig that ring into a moat: the guessed PSF is wider than the true smear, so the algorithm over-withdraws from the surroundings. Forty is ruin — the core collapses past the true dot and the channels drift apart. The moat is why every raw converter's deconvolution slider ships timid.}}

The moat is not a bug in our implementation. Richardson–Lucy trusts the PSF it is given and the observation it is shown; here the PSF was a guess, and the docstring already named the other catch. Astronomy — where the PSF is measured from actual stars and long exposures starve the noise — is where RL earned its reputation. Photography can usually offer it neither, and that gap, more than any implementation detail, is the distance between the second panel and the fourth.

## 8.2 Noise reduction: a ladder with a number on every rung

Chapter 2 established what noise is — mostly photon arrival statistics, tamed only by the square root of the photon count — and Chapter 7's sidebar showed the aristocratic fix: collect more photons. Every software denoiser is for when you cannot. All of them share one idea, *average things that should agree*, and the entire art is in deciding what "should agree" means. Each answer is a rung on a ladder this section climbs with a starved capture: one tenth the metered exposure, gain ×10, the recipe for a high-ISO frame.

The bottom rung answers "my neighbors should agree with me" and averages them under a Gaussian bell. The flaw is out in the open: edges are neighbors disagreeing for a reason, and the blur averages them anyway. One rung up, the median filter takes the same neighborhood and replaces arithmetic with rank order:

{{include pxp/detail.py::median_filter}}

The third rung is Chapter 7's bilateral filter wearing a different hat. Built there to split lighting from texture, it is more often deployed as a denoiser: average neighbors, discounted by how much their values differ from yours, so averaging stops at edges. Its weakness is the pixel it trusts: a single noisy value decides which neighbors "resemble" it, and at low signal that judgment is itself noise.

The top rung fixes the judgment by widening the evidence from one value to a whole neighborhood. That is Non-Local Means:

{{include pxp/detail.py::nlm}}

That triple loop over search window and patch is also the point in the book where the two-tier contract stops being a formality. The reference implementation above visits every patch in an 11×11 window for every pixel: 24 seconds per channel at this chapter's small figure size, which extrapolates to more than a day for a 24-megapixel frame. The pipeline twin keeps the search-offset loop in Python and moves everything inside it to whole-array arithmetic, in the reference tier's accumulation order — the same bits, fifty times sooner.

!!! patent "Patent note"
    Non-Local Means is published, open, and safe to implement — what you see above is the paper's core algorithm. The same is true of BM3D, the block-matching successor that dominated benchmarks for a decade, but some commercial derivatives and optimizations of it are patent-encumbered; a reimplementer should stay with the published papers. This book's ladder stops at NLM, which is the last rung where the whole mechanism fits on one page.

Here is the ladder measured, every rung against the noiseless truth the simulator provides — first over the whole frame, then over the flat patch interiors where noise actually lives:

| denoiser | PSNR, whole frame | PSNR, flat regions |
|---|---|---|
| (noisy input) | 25.13 dB | 30.95 dB |
| Gaussian blur | 24.44 dB | 31.82 dB |
| median | 26.06 dB | 32.75 dB |
| bilateral | 26.42 dB | 35.32 dB |
| NLM | 26.37 dB | 37.42 dB |

The two columns tell different stories, and both are worth reading. In the whole-frame column the Gaussian blur scores *below* the noisy input — on a chart full of edges it destroys more signal than noise — and bilateral and NLM finish in a statistical tie, because whole-frame error is dominated by edge pixels that no denoiser repairs. The flat-region column is where denoisers actually work, and there the ladder opens up rung by rung: the bilateral buys 4.4 dB over the noisy input and NLM buys 6.5, a clear two-decibel win at the top. One number per algorithm would have hidden all of that, which is why denoising papers report results on regions as well as whole frames.

{{figure denoise-ladder | The starved capture and the four rungs: noisy, Gaussian, median, bilateral, NLM (left to right). The Gaussian panel shows where its whole-frame score went — the chart's grid lines paid for the smoothing. The bilateral and NLM panels look close at this size; the flat-region numbers, 35.3 against 37.4 dB, say the patch-matching is working where the eye checks least and the statistics check most.}}

Two disclosures close the section. First, parameters: the bilateral and NLM run at their best settings for this capture — their strengths swept against the ground truth — because a ladder whose top rungs are mistuned proves nothing. Second, placement: these denoisers ran on the displayed image, where the chapter could show every step, but real pipelines denoise early — on raw data, before demosaicing spreads each noisy sample into its neighbors — and Chapter 2's other lesson still applies there: the noise is signal-dependent, so real denoisers scale their thresholds with brightness. Beyond NLM the field belongs to BM3D and then to learned denoisers, which won by making "what should agree" a question answered from millions of photographs instead of a formula; their mechanism no longer fits on a page, and a page is where this book draws its line.

---

The image is now as good as it is going to get: geometrically corrected, colorimetrically labeled, tonally shaped, sharpened and quieted. Everything that remains is packaging — and packaging, it turns out, is a final round of deliberate information loss with its own beautiful machinery. Chapter 9 scales the image, throws away half the color (in a way nobody can see), and encodes what is left into the thirty-year-old bitstream every device on earth can read: a JPEG, built from scratch.
