The photograph is finished; what remains is the leaving. Every step in this chapter throws information away on purpose — pixels, color resolution, frequency precision — and every step hides the theft behind some measured limit of human vision. That is not a compromise of the pipeline; it is the pipeline's final skill. By the last section the image will be a stream of bytes any device on earth can open, at a twentieth of its uncompressed size, and a viewer will struggle to say what was taken.

## 9.1 Resampling: deciding what lies between the samples

Almost no photograph is delivered at sensor resolution. Between the samples of the smaller (or larger) grid and the samples we have, there is no image — only a claim about what the samples imply. Every resampling kernel is such a claim. Nearest-neighbor claims nothing changes until the next sample. The tent (bilinear's kernel) claims values ramp linearly. At the top of the family sits the windowed **sinc**: a central bell flanked by decaying ripples, and the shape that *sampling theory* — the same mathematics that governs aliasing and the Nyquist limit — singles out as the theoretically perfect reconstructor. The ideal sinc is infinitely wide, so in practice it is *windowed*: truncated to a few ripples. Lanczos is one such truncation:

{{include pxp/resample.py::lanczos}}

{{figure resample-up | One 24-pixel crop of the starburst, upscaled 8x by three claims about what lies between samples: nearest (left), bilinear (middle), Lanczos (right). Nearest shows the samples themselves, as squares. Bilinear is smooth and soft. Lanczos keeps the spokes' snap — and pays in the faint bright and dark outlines along every edge, its negative lobes made visible. Blocks, blur, or ringing: pick one, because there is nothing else on the menu.}}

Enlarging is the easy direction — any kernel, drawn across the gaps. Shrinking is where resampling is silently gotten wrong, because a kernel used at its natural width simply *skips* most of the source pixels: shrink four-fold and each output pixel is answerable for a 4x4 patch of input, not for the one point under its center. The fix is one line — stretch the kernel by the shrink factor — and it lives here, in the function both code tiers share:

{{include pxp/resample.py::axis_weights}}

{{figure downscale-alias | The 320-pixel starburst shrunk 4x, pixels shown at 4x: nearest (left) against the stretched Lanczos (right). Nearest samples one point per output pixel and the spokes shatter into moire — frequencies the small grid cannot carry, aliased into frequencies it can, the same phenomenon the demosaic chapters met as false color on the sensor mosaic. The stretched kernel averages each pixel's whole territory: fine spokes fade smoothly into the gray their average deserves.}}

One craft note with a measurement attached. Chapter 8's unsharp mask builds halos a pixel or two wide — creatures of the pixel grid, not of the scene. Shrink the image afterward and the halos shrink with it, mostly below visibility: sharpening our starburst at 320 and then downscaling to 80 raises mean edge contrast only from 0.165 to 0.183, while the same sharpening applied *after* the shrink raises it to 0.270. Sharpen last, at delivery size — the "output sharpening" step every workflow guide insists on, here reduced to a measurement.

## 9.2 Eight bits, on purpose

Chapter 7 built the border crossing — the transfer function that spends display range in perceptual steps — and every figure in this book has quietly finished the trip: `write_png` clips to [0, 1], multiplies by 255, and rounds. That rounding is the book's oldest continuous loss, and it is time to say why it is safe. Eight bits give 256 levels; *after* the sRGB curve those levels are spaced in roughly equal perceptual steps, each near the threshold where adjacent patches become distinguishable. Spend the same 256 levels on linear light and the shadows band visibly — Chapter 2 made that argument in reverse when it explained why sensors need 12 bits or more for scenes displays describe in 8. The exception proves the design: push a heavy edit on 8-bit material (lift a dark sky three stops) and the levels spread apart until banding surfaces, which is why editing pipelines stay in floats or 16 bits until the very end, and why HDR delivery formats pair their taller brightness range with 10 bits and a steeper curve. Quantization is fine where perception is flat and treacherous where it is steep; the rest of this chapter is that sentence, applied twice more.

## 9.3 Chroma subsampling: half the numbers nobody counts

Human vision resolves brightness finely and color coarsely — the retina pools its color-opponent signals over larger areas than its luminance signal. Television engineering has banked on this since before computers: transmit brightness at full resolution and color differences at a fraction. JPEG inherited the scheme wholesale, so the first thing our encoder does is change basis — luma, plus two color-difference planes, `Y = 0.299 R + 0.587 G + 0.114 B`, with Cb and Cr as scaled "blue minus luma" and "red minus luma" centered on 128. Nothing is lost in the rotation; it merely gathers what the eye tracks sharply into one plane, so the next function can be rough with the other two. Video's name for that roughness is **4:2:0** — legacy ratio notation that decodes, unhelpfully, to "chroma at half resolution in both directions" — and its entire mechanism is an average:

{{include pxp/jpeg.py::subsample}}

Y at full resolution plus two chroma planes at a quarter each: the image is now described in half as many numbers, before any compression proper has begun. The figure is the argument for why this is allowed — and it carries a lesson about meters:

{{figure chroma-subsample | The chart: intact (left), chroma at quarter resolution (middle), luma at quarter resolution (right). The middle panel survives — patch colors are untouched, the gray grid keeps every edge, and only a close look at colored borders finds the bleed. The right panel is soft everywhere at a glance. Now the metric: PSNR scores them 27.79 and 27.69 dB — <em>equal</em>. The meter weighs every numeric error the same; the eye does not, and 4:2:0 lives in that gap. Chapter 8 warned that one number can hide a mechanism; here one number hides the entire reason the technique works.}}

## 9.4 The JPEG: frequencies, rounded

What remains after subsampling is three planes of numbers, and the remaining task is the one this book has deferred since its title page: make them small. JPEG's insight — thirty years old and not yet dislodged from cameras — is that the place to be inaccurate is neither pixels nor colors but *frequencies*. Carve each plane into 8x8 blocks and measure each block against 64 cosine patterns:

{{include pxp/jpeg.py::dct8}}

Applied to rows and then columns, this is the discrete cosine transform. It rearranges the block's 64 numbers without gaining or losing any — a *rotation* in the sense that it re-describes the very same data along new axes (the 64 cosine patterns) instead of the original pixel positions, the way turning a map re-labels every town's coordinates without moving a single town. Nothing is discarded yet: the total *energy* — the sum of the squared values, one real measure of how much is in the block — is identical before and after, and a test in this chapter checks exactly that. The 64 patterns it measures against are worth one long look:

{{figure dct-basis | The 64 basis patterns of the 8x8 DCT: constant at top-left, finest checkerboard at bottom-right, every block in every JPEG ever made is a weighted sum of these. The transform itself loses nothing — it is a rotation, and a test in this chapter checks that the energy in is the energy out. Its gift is concentration: photographic blocks are mostly smooth, so most of the weight lands in the top-left few patterns and the rest sit near zero, waiting to be rounded away.}}

The loss happens in one line: divide each coefficient by an entry from an 8x8 table and round to an integer. The tables — one for luma, a harsher one for chroma — encode measured visibility: low frequencies, which the eye tracks closely, get small divisors, and the finest checkerboards get divisors so large that middling amounts round away to nothing. The famous 1–100 quality dial is just a scale factor on those tables:

{{include pxp/jpeg.py::quality_tables}}

After rounding, a typical block is a handful of small integers in its low corner and zeros everywhere else, and the rest of the format is devoted to spending as few bits as possible on that shape. First the coefficients are read out in an order that pools the zeros:

{{include pxp/jpeg.py::zigzag_order}}

Then Huffman coding: frequent symbols get short bit strings, rare ones long. The codes themselves are never listed in the file — each table ships as a two-hundred-byte recipe, a count of codes per length followed by the symbols in order, from which encoder and decoder rebuild identical code books. What the codes are spent on is the shape quantization left behind:

{{include pxp/jpeg.py::encode_block}}

Wrap the scan in its markers — dimensions, the quantization tables, the Huffman recipes, a JFIF signature (the JPEG File Interchange Format tag that promises a decoder the plain conventions used here) — stuff a zero byte after any 0xFF the bitstream produces so data can never impersonate a marker, and the pipeline's last function is nine lines:

{{include pxp/jpeg.py::encode}}

Three verifications close the loop, in ascending order of satisfaction. The tables our encoder writes — quantization and Huffman both — are byte-identical to the ones libjpeg, the reference library behind nearly every program that opens a JPEG, has shipped since 1991; they are the standard's own example tables, reproduced from its text. The two code tiers, one looping over Python lists and one running whole-array arithmetic, emit byte-identical *files*. And Pillow — an independent decoder that owes our code nothing — opens those files and reads back the image, measured at 29 dB against what went in:

{{figure jpeg-ladder | The chart through our encoder and back through an independent decoder: source (left), then quality 90, 50, and 10. The uncompressed crop is 51,360 bytes; the encoded files are 4,139 (12.4:1, 29.24 dB), 2,460 (20.9:1, 26.68 dB), and 1,408 (36.5:1, 22.63 dB). At 90 the loss hides. At 50 the chroma tables bite first — look at the patch borders — which is Section 9.3's priority order carried into quantization. At 10 the 8x8 machinery itself surfaces: block edges, smeared color, ghost ripples around the grid lines, every artifact traceable to a specific line of this chapter's code.}}

!!! patent "Patent note"
    Baseline JPEG is the safest major format there is to reimplement: the standard is from 1992, its underlying patents have long expired, and the reference tables ship in the standard's own annex. The one corner to avoid historically was the optional arithmetic-coding mode, patent-encumbered for years and shunned by decoders for that very reason — every camera and browser speaks Huffman baseline, which is what we built. Some newer formats are a different story — HEIC sits on the actively licensed HEVC patent pool — and are, not coincidentally, formats nobody reimplements for fun.

---

Count what happened to one photograph on its way through this book. Photons became electrons in proportion no eye would accept; electrons became one number per site behind colored glass; the numbers were rebalanced, tripled by interpolation, rotated into meaningful color, unwarped, curved, sharpened, quieted — and finally described as rounded frequencies and dealt out as bits. From light to JPEG, the long way, with every step written down. One chapter remains: point the whole apparatus away from the simulator and at a real camera's raw file, and see how our pipeline's picture compares with the one the camera itself would have made.
