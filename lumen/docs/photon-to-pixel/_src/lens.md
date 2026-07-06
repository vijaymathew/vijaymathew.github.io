Chapter 1 built a lens with three flaws, each governed by one coefficient we chose. Every capture since has carried those flaws along politely — the corners a stop dark, the corner dots wearing rainbows, the straight lines bowed. Now the pipeline pays the debt. This chapter inverts all three, and because we wrote the forward model, the inversions can be checked against it: each correction is measured, and each leaves a residual with a reason.

Placement is half the chapter. The three corrections do not go in one place; they interleave with the stages already built, and each position has an argument behind it. The pipeline, as of this chapter:

```text
linearize → defects → vignetting ⁶·¹ → white balance → demosaic
          → CA ⁶·² → distortion ⁶·³ → color matrix → ...
```

## 6.1 Vignetting: division, early

The falloff was multiplicative on the way in, so it is a division on the way out — one gain per photosite, computed from the model:

{{include pxp/lenscorrect.py::unvignette}}

It runs on the mosaic, ahead of white balance, for a reason worth spelling out. Chapter 3's estimators read the whole frame as evidence about the light; hand gray-world a frame whose corners are a stop dark and the corners vote for a darker, subtly different illuminant than the center. On our simulator the falloff is the same for all three channels, so the vote is only dimmer, not tinted — but real sensors are worse off: their microlenses and filters shade *color-dependently* toward the edges, which is why production pipelines apply per-channel lens-shading maps at this same early position. A disclosed simplification, then: our vignetting is achromatic, and the one-multiplier-per-site structure below is what survives contact with the real, per-channel version.

{{figure vignette-correction | A flat gray field through the kit lens, before and after the division. The correction is exact by construction — we typed the model in — but not free: the extreme corner is multiplied by 1.82, brightness and noise alike, an amplification of nearly a stop. Real processors often correct vignetting only partway for this reason; the slider marked "vignetting" in a raw editor is choosing a point on this trade.}}

## 6.2 Chromatic aberration: registration, not resurrection

The corner dots of Chapter 1 smeared into rainbows because the lens magnifies each wavelength differently. Undoing that after capture faces a limit set at the sensor, and this section's job is to locate it precisely.

The sensor folded each channel's band of wavelengths into one number per photosite. A correction can therefore move each channel *as a whole* — but within red's band, the lens placed 560 nm light and 660 nm light at different radii, and those are now the same number. Per-channel warping can re-register the three channels; nothing can unsmear a single channel from the inside. To move a channel as a whole we need its representative wavelength:

{{include pxp/lenscorrect.py::effective_wavelength}}

and the warp aligning red and blue onto green:

{{include pxp/lenscorrect.py::correct_ca}}

Two placements are load-bearing here. CA correction runs *after* demosaicing, because it moves channels independently and there are no independent channels until the mosaic is unwoven. And it runs *before* the color matrix, because the matrix mixes R, G and B at each pixel — mix misaligned channels and the fringes stop being a red-plane problem the warp can reach and become part of every output channel permanently.

Measured on a corner point light, the registration does its job emphatically: the red centroid sits 0.45 px from green's before correction and 0.04 px after; blue goes from 0.43 px to 0.08 px, the small remainder being the price of a single wavelength standing in for a band. But look at what the corrected dot still is:

{{figure ca-registration | A corner point light at 8x through a CA-only lens (left), after registration (middle), through the perfect lens (right). The raw dot wears its rainbow asymmetrically — blue displaced toward the frame center, red away from it. The corrected dot is <em>centered</em>: centroids aligned fifty-fold. It is not <em>clean</em>: a symmetric colored halo remains, the smear within each filter band, which no warp can touch. Registration is what "CA correction" in every raw tool actually delivers; the halo is what your lens's marketing calls "longitudinal color" and your sharpening slider quietly fights.}}

That middle panel is the section's finding. Lateral CA correction — ours, Lightroom's, anyone's — is registration, and registration alone. The residual halo is dispersion inside each channel's band, geometrically identical in kind to defocus blur, and reachable only by deconvolution-style sharpening (Chapter 8 will pick this thread up). If you have ever corrected CA on a real photograph and wondered why a faint glow stayed behind at the edges, you have seen the middle panel before.

## 6.3 Distortion: the first resampling

The geometry itself comes last. The lens delivered to each pixel the scene content from a radially scaled position; correction fetches it back. There is one wrinkle — the magnification depends on the radius of the point being solved for, so the inverse has no closed form — and one fixed point settles it:

{{include pxp/lenscorrect.py::correct_distortion}}

Both this warp and CA's share an engine, and the engine contains a decision this book has not had to make until now: the source position is almost never a pixel center, so the value must be read *between* pixels:

{{include pxp/lenscorrect.py::_sample_bilinear}}

Bilinear interpolation is the pipeline's first resampling, and resampling is a genuine subject — the kernel chosen here decides how much softness every geometric operation costs, and fancier kernels (bicubic, Lanczos) buy sharpness at the price of ringing. Chapter 9 gives the topic its own section when the image is scaled for output; for now, note the structure of the cost: the corrected image below is measurably straighter *and* very slightly softer than what came out of the lens, because every one of its pixels is now a weighted average of four. Geometry corrections are never free.

{{figure lens-payoff | The grid through the kit lens, full pipeline: uncorrected (left), all three corrections applied (middle), and the perfect-lens reference (right), all at one exposure. Lines straighten, corners lighten, fringes tighten to their in-band residue; against the reference, the correction is worth 3.6 dB (12.2 to 15.8) — and the middle panel is fractionally softer than the right one, the bilinear kernel's fee, collected twice for the two warps in a row. A production pipeline would compose CA and distortion into a single warp to pay it once; ours keeps them separate because the chapters teach them separately.}}

One practical note real tools surface as a checkbox: correcting barrel distortion fetches content from *inside* the frame, so the result keeps its full field of view with mild stretching at the edges; correcting pincushion reaches *outside* it, and the missing content forces a crop. Our kit lens barrels, so nothing was lost — the choice between "distortion correction" and "keep full frame" in a raw editor is this geometry speaking.

## 6.4 Sidebar: corrections without the source code

!!! note "Lensfun, and knowing versus fitting"
    Everything above ran on coefficients we wrote ourselves — simulator privilege in its purest form. A real processor gets them by *fitting*: someone photographs test charts through a specific lens at specific settings, fits parametric models — polynomial radial distortion of the same shape as ours, per-channel CA polynomials, a radial vignetting falloff — and publishes the numbers. The open-source world pools this in the **Lensfun** database, which is how darktable and RawTherapee straighten thousands of lenses they have never seen; manufacturers ship the same idea as correction metadata embedded in the raw file (DNG stores it as opcode lists), which is why some lenses look impossibly clean in software: the "lens" you judge is lens plus mandatory correction profile. The structure of this chapter survives the translation intact — same models, same placements, same residuals — with one addition: a fitted model is itself approximate, so real corrections carry both this chapter's residuals *and* the fit's. When Chapter 10 runs real raw files, Lensfun is the analogue of everything `pxp.lenscorrect` got for free.

---

The lens is undone: field flat, channels registered, lines straight, and the costs of each written down — corner noise, an incompressible halo, a bilinear kernel's softness. The image is geometrically trustworthy and colorimetrically labeled, and it is still, stubbornly, *linear*: proportional to photon counts from a world whose brightness range no display can hold. Chapter 7 is tone — gamma, curves, and the art of losing information where nobody will miss it.