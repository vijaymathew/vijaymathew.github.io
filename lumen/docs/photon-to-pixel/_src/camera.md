Every chapter after this one processes photographs. This chapter builds the camera that takes them — a camera made entirely of code.

The idea deserves a moment of justification, because it is the book's single most important design decision. A real photograph gives you the *output* of a pipeline and no way to know what the right answer was. Was that demosaicing artifact caused by the algorithm, or was the scene really like that? Is the white balance correct, or merely plausible? With a real camera you can never quite know, because you never have access to the scene itself — only to one camera's imperfect record of it.

So we build the scene ourselves, from physics up. A synthetic world, a fictional lens, a simulated sensor — a *forward model* that produces raw files the same way a real camera does, except that at every stage we can pause it and look at the truth. When Chapter 4 measures a demosaicing algorithm, it will measure it against the actual full-color scene, because we rendered it. When Chapter 3 estimates the color of the light, we will know exactly how wrong the estimate is, because we chose the light. Every claim in this book of the form "this algorithm is better" comes with a number for that reason, and every reader gets identical results, whatever hardware they own.

One scope fence, stated before any code: **this is a measurement instrument, not a renderer.** Its scenes are flat patches, ramps, and analytic test targets — no geometry, no shadows, no illumination transport, nothing pretty. Every part of it is meant to be read in a sitting. The moment a feature would make it a graphics project, the feature is out.

## 1.1 Scenes as spectra

Here is the trap we should avoid. If we described our synthetic scenes as RGB values — "this patch is (0.8, 0.2, 0.1)" — the whole simulation would quietly become circular. A camera's job is to *produce* RGB from light; a scene that is already RGB has done the camera's job in advance, and everything downstream (white balance, the color matrix of Chapter 5, the whole question of what color *is*) would degenerate into pushing our own numbers around. The simulation would still run. It would just have nothing left to teach.

Light doesn't come in three numbers. Light is a continuum: at every wavelength across the visible range — roughly 380 to 730 nanometers, violet to deep red — a light source emits some amount of power, and a surface reflects some fraction of what arrives. Color, the three-number kind, happens only at the very end, when an eye or a sensor with a small set of differently-tuned detectors collapses that continuum. Our scenes therefore speak in **spectra**, and the collapse to three numbers is performed — explicitly, in code we write — by the sensor in Section 1.3 and by the mathematics of human vision in Chapter 5.

A spectrum in this book is 36 numbers: samples every 10 nanometers from 380 to 730. That grid is a compromise, chosen deliberately. Fine enough that our colorimetry lands within a fraction of a percent of published reference values (the tests below hold us to that); coarse enough that a spectrum fits on one line of a page and a `for` loop over it is something you can read.

{{include pxp/spectrum.py::Spectrum}}

Note the two roles in the docstring. A *light* is a spectrum of emitted power. A *surface* is a spectrum of reflection fractions — a number between 0 and 1 at each wavelength. And the single most important line of physics in the whole simulator is the method that combines them: the light leaving a surface is the illumination times the reflectance, wavelength by wavelength. That one multiplication, `lit_by`, is where every color cast, every white-balance problem, and every metameric surprise in this book will come from.

### The lights

The book keeps three lights, plus a reference. The first is tabulated: **D65**, the CIE's standard "average daylight," the reference white of sRGB and the closest thing color science has to a default sun. Its 36 samples come from the CIE's own published table, resampled onto our grid — one of exactly two pieces of external data in the entire simulator (the other is the CIE observer, which arrives in Chapter 5).

The second light needs no table at all, and it is the one this chapter is proudest of. An incandescent bulb is a glowing filament, and the emission of a glowing body is given by Planck's law:

\[ B(\lambda, T) \;\propto\; \frac{1}{\lambda^5}\,\frac{1}{e^{c_2/\lambda T} - 1} \]

power at each wavelength \(\lambda\) for a body at temperature \(T\), with \(c_2\) a physical constant. Run at 2856 kelvin, this formula *is* CIE standard illuminant A — the warm, orange archetype of every tungsten photograph ever taken. We get a standards-grade light source from four lines of arithmetic:

{{include pxp/illuminant.py::incandescent}}

The third light is a deliberate troublemaker: a fluorescent tube, modeled as a dim continuum with three sharp emission lines. Nothing about it is exotic — cheap tubes really do look like this — but a light that delivers its power in spikes breaks the comfortable intuition that "white light is white light," and in Chapter 5 it will let us demonstrate metamerism: two surfaces that match perfectly under one light and visibly disagree under another. We build it now and keep it in a drawer.

!!! note "Where the numbers come from"
    The D65 table and (in Chapter 5) the CIE 1931 observer curves are point-sampled from the CIE's open data files — 1-nanometer tables published under ISO/CIE 11664, sampled at our grid wavelengths with no interpolation. Everything else spectral in this book — every surface, the filament, the fluorescent — is computed from formulas printed on these pages. The tests pin our sampled arithmetic to the published white points, stated in chromaticity — color coordinates with the brightness divided out, so only the hue and saturation of the light remain: D65 must land at (0.3127, 0.3290) and illuminant A at (0.4476, 0.4074), within two parts in a thousand.

{{include tests/test_color.py::TestWhitePoints}}

### The surfaces

Real test charts have *measured* patches — someone pointed a spectrophotometer at painted squares. Ours are *designed*, and from just two shapes: a smooth **step** that switches on above a chosen wavelength, and a smooth **bump** centered on one.

{{include pxp/reflectance.py::step}}

{{include pxp/reflectance.py::bump}}

Chemistry is kind to us here: these really are the shapes real pigment reflectances take. A red surface is red because its reflectance steps up somewhere around 600 nm; a green one carries a bump near the middle of the range. Building patches from formulas instead of measurements keeps the chart fully original and — better — printable. Here is the entire chart, every patch a one-line formula:

{{include pxp/reflectance.py::color_chart}}

Twelve surfaces: four neutrals, seven strong colors, and one soft "skin" tone included as a tripwire for the later chapters (nobody notices when an algorithm ruins a magenta patch; everybody notices ruined skin). The `patch` helper refuses any formula that leaves the physical range — a surface cannot reflect less than nothing or more than everything.

### First look at ground truth

We now have lights and surfaces, and `lit_by` to combine them. To actually *see* the result, this chapter borrows two tools that will not be properly explained until later — the integration of a spectrum against the CIE observer to get XYZ (Chapter 5) and the sRGB encoding for display (Chapter 7). They live in `pxp.color`, they are as explicit as everything else, and for now they are simply how the simulator shows us its world. {{fig chart-illuminants}} is the payoff:

{{figure chart-illuminants | The same twelve surfaces, no processing, no white balance: under D65 daylight (left) and under the 2856 K filament (right). Every difference between the two grids is ground truth — the light really is that orange. The white patch's rendered values under the filament are the exact "wrong" pixels that Chapter 3's white balance will be judged against.}}

Look at what the filament does. The white patch is peach. The gray column has become a ladder of warm tans. Blue has collapsed toward violet-black — a tungsten bulb emits very little short-wavelength power, so a surface that reflects only short wavelengths has almost nothing to reflect. And the skin patch has gone from plausible to sunburnt. None of this is an artifact or an error: *this is what the scene actually looks like* under that light, computed wavelength by wavelength from formulas you have now read in full. Your visual system performs a version of white balance so relentlessly that you have likely never seen a white surface render this faithfully before.

That is the entire point of the simulated camera. A real photograph of a real chart under a real bulb would give us pixels *like* the right grid — but entangled with one particular sensor's spectral taste, one manufacturer's processing, and no way to separate the light from the camera. Here we have the scene itself, pristine, with the camera not yet built. Everything the rest of the pipeline does will be measured against this.

## 1.2 A small lens with known sins

So far our scenes are mathematical abstractions: a rule that answers "how much light leaves this point?" for any position and wavelength. Before that light reaches a sensor it passes through glass, and glass is where the first distinctly *photographic* imperfections enter. To let a lens ask about exactly the point it bends toward, scenes become spatial through one small class — a `Scene` wraps a reflectance-at-position rule together with a light, and its `sample(x, y, band)` method is what everything downstream calls. Three procedural test targets (the chart laid out in space, a grid of straight lines, an array of point lights) are the only scenes the book will ever need.

A real lens design fights a catalog of aberrations; correcting each one further costs exponentially more money and glass. Our fictional lens commits just the three sins that matter to the pipeline, each governed by a single coefficient:

{{include pxp/lens.py::Lens}}

Read `source_position` closely, because the entire model is that method. A lens, for our purposes, is a rule about *where to look*: the sensor position asks for light, and the lens fetches it from a slightly wrong place. Radial **distortion** scales the fetch position by \(1 + k\,r^2\) — the classic single-coefficient model, and the same form (with more terms) used by real correction software. Lateral **chromatic aberration** makes that magnification drift with wavelength, so the corner of the frame fetches its blue from one place and its red from another; the loop in `look` is the moment where "the color channels don't line up" stops being folklore and becomes seven lines of code. **Vignetting** doesn't move light, it loses it — a smooth radial falloff applied to whatever arrives.

{{figure lens-flaws | The straight-line grid through the perfect lens (left) and the book's kit lens (right). Barrel distortion bows the lines — the middle of each edge line sits farther out than its ends; vignetting takes the corners down by nearly a stop; and lateral CA fringes every line with color, weakly near the center and boldly at the edges. All three flaws in one photograph of graph paper.}}

The book keeps two lenses. The `perfect` lens — identity geometry, no falloff — is the control group in every later experiment. The `kit_lens` has all three coefficients set to values chosen to be *obvious in figures* rather than realistic; a real prime lens is far better behaved, and the text will say so whenever it matters. For chromatic aberration especially, truthfulness requires exaggeration:

{{figure lens-ca | The point-light array through a lens with deliberately strong lateral CA. Left: the full frame. Middle: a 4x enlargement at the center, where CA vanishes by symmetry — the dots stay white. Right: the same enlargement in the top-right corner, where each dot is drawn out into a small spectrum, blue toward the frame center and red away from it. Chapter 6 will put these dots back together.}}

The dots tell the whole CA story in one image: at the center, all wavelengths agree about where the dot is; toward the corner they disagree in proportion to radius, and a white point becomes a tiny rainbow. Note that this is *lateral* CA — a geometric error, correctable by warping the channels back into register, which is exactly what Chapter 6 will do with these coefficients. (Axial CA, where wavelengths focus at different *depths*, blurs rather than shifts; it needs the defocus machinery this simulator deliberately doesn't have, and the book discusses it without simulating it.)

## 1.3 The sensor — where spectra die

Everything so far is a continuum: power at every wavelength, radiance at every position. The sensor ends that, in three brutal steps. It samples space on a pixel grid. It collapses each pixel's spectrum to a *single number* through a colored filter. And it adds noise, because physics leaves it no choice.

The filters come first. Our sensor has three, fictional but shaped like real CMOS filter dyes: broad, heavily overlapping bumps, with the red filter leaking slightly in the blue (real red dyes do). Two properties matter enormously later. These curves are *not* the human eye's — the gap between what the sensor measures and what a person sees is precisely what Chapter 5's color matrix exists to bridge. And they overlap, so no surface excites only one channel — which is why "camera RGB" will turn out not to be a color space at all.

But a sensor does not get three measurements per pixel. Each photosite sits under exactly *one* filter, arranged in the Bayer mosaic — the pattern that will be undone in Chapter 4:

{{include pxp/sensor.py::cfa_channel}}

Two greens per 2x2 cell, one red, one blue: half the sensor measures green, because human vision takes most of its sharpness from the middle of the spectrum and the pattern's designer, Bryce Bayer, spent his budget accordingly. Here is the sensor in full — the last stop before every photograph in this book:

{{include pxp/sensor.py::Sensor}}

The noise lines deserve a slow read, because they are the truest physics in the simulator. Light arrives in photons, and a photosite expecting \(N\) electrons in an exposure actually collects \(N\) give or take \(\sqrt{N}\) — **shot noise**, a property of light itself, not of the sensor, and the reason no camera at any price takes a noiseless photograph. The readout electronics add a few electrons of Gaussian **read noise** on top. And each column's amplifier has its own slightly-off gain — **fixed-pattern noise**, the same stripes in every frame, which is what will make it correctable in Chapter 2 while the random noise is merely *reducible*. Note also what the ADC — the analog-to-digital converter, the last electronic step before numbers — does at the bottom of `capture`: it adds a `black_level` offset before quantizing, so that the noise dancing around zero survives digitization intact instead of having its negative half chopped off. That little offset is why Chapter 2 begins with black-level subtraction.

{{figure sensor-mosaic | The chart, captured. Left: the raw frame's values as plain brightness — one number per pixel, and visibly textured, because neighboring pixels sit under different filters. Right: a 16x16-pixel crop straddling the white and red patches, enlarged, each value shown in its filter's color. On the white patch all three photosite types respond; on the red patch the red sites respond alone and the green and blue sites go dark. No pixel knows more than its own single number.}}

Look at the left panel's *neutral* patches: even they are textured, and the texture is not noise — green photosites simply catch more of D65 than red or blue ones do through these filters. A raw file straight off any sensor is dim, mosaiced, and green-tinted; every "why does my raw look like that" forum thread traces back to this figure. The right panel is the pipeline's to-do list in miniature: Chapters 2 through 5 exist to turn that checkerboard back into a photograph.

## 1.4 The raw file

One step remains: writing the frame to disk. Real raw formats are sprawling — thumbnails, EXIF blocks, maker notes, encrypted focus data — but beneath the flourishes every one of them is the same thing: *a header saying how to read the numbers, then the numbers.* Our container is exactly that and nothing else:

{{listing pxp/raw.py}}

Seventeen bytes of header, then two bytes per pixel. A file you can read with your eyes:

```text
00000000  50 58 52 41 57 01 00 30 00 20 0c 00 40 52 47 47  |PXRAW..0. ..@RGG|
00000010  42 01 d0 02 16 01 cc 02 22 01 d0 02 29 01 ba 02  |B......."...)...|
00000020  1c 01 ce 02 37 01 db 02 2d 01 c7 02 17 01 e4 02  |....7...-.......|
```

That is a real capture of the chart (48x32, for a file small enough to dump). The magic spells `PXRAW`; then version `01`; `0030` and `0020` are 48 and 32; `0c` is 12 bits; `0040` is the black level of 64; then `RGGB`. And the pixel values that follow are already telling the truth about the sensor: they alternate `01xx`, `02xx`, `01xx`, `02xx` — red site, green site, red site, green site across the top row of a gray surround, the green ones half again brighter. You can see the color filter array *in the hex dump*.

## 1.5 Sidebar: what real raw files add

!!! note "This container vs. DNG"
    Adobe's DNG — the closest thing to a published, non-proprietary raw format — is a TIFF: a tag tree rather than a fixed header, which is most of the difference. Where our seventeen bytes say *width, height, bits, black level, CFA*, DNG says the same things in tags (`ImageWidth`, `BitsPerSample`, `BlackLevel`, `CFAPattern`) plus the things our simulator doesn't need yet: `ColorMatrix1/2` (the camera-to-XYZ matrices Chapter 5 derives from scratch), `AsShotNeutral` (the camera's own white-balance guess, Chapter 3's competitor), lens-correction opcodes (Chapter 6's job, shipped as data), and compression. Nothing in a DNG is conceptually missing from this chapter — it is this chapter, industrialized. The book never parses DNG; when Chapter 10 needs real files, it lets `rawpy` do the reading and keeps its attention on the pixels.

---

The camera is complete: spectra in, integers out — `scene → lens → sensor → file`, every stage a page of code, every flaw a number we chose. From here the direction of travel reverses. The simulator spent this chapter carefully ruining a perfect scene; the rest of the book is the long climb back. Chapter 2 starts at the bottom, with the numbers themselves: black level, noise, and what "exposure" really means to a photosite.
