The pipeline's vocabulary, in one place. Each entry gives the working definition the book uses and the chapter where the idea earns it; where a term of art has a longer story, the chapter is the story.

**4:2:0** — video's ratio notation for chroma subsampling: color-difference planes kept at half resolution in each direction, a quarter of the samples. The mechanism is a 2x2 average. (Chapter 9)

**aliasing** — what happens when a scene contains frequencies finer than a sampling grid can carry: the detail does not vanish, it returns as confident, wrong, coarser patterns. Moiré is its visible signature. (Chapters 4, 9)

**AWB (automatic white balance)** — a camera's estimate of the illuminant from the image alone, descended from the gray-world and white-patch assumptions plus decades of heuristics. (Chapter 3)

**Bayer pattern** — the 1975 mosaic arrangement: half of all photosites green, a quarter red, a quarter blue, in a 2x2 repeat (RGGB in this book). A bet that the eye wants sharpness in luminance. (Chapters 1, 2)

**bilateral filter** — an average that discounts neighbors by how different their values are, not just how far away they sit, so smoothing stops at edges. Workhorse of local tone mapping; also a denoiser. (Chapter 7)

**black level** — the offset a sensor adds before quantizing so that noise around true black survives the trip through unsigned integers. Subtracting it is the pipeline's first act. (Chapter 2)

**CFA (color filter array)** — the grid of colored filters over the photosites that makes one sensor produce three-color images; the Bayer pattern is the dominant one. (Chapters 1, 2)

**chromaticity** — color coordinates with the brightness divided out: what remains of a color when only its hue and saturation matter. White points are stated in it. (Chapters 1, 5)

**chrominance / chroma** — the color part of an image once luminance has been separated out; what 4:2:0 subsamples and JPEG quantizes hardest. (Chapters 4, 9)

**CIE** — the international commission that standardizes the measurement of light and color; source of the 1931 standard observer, D65, illuminant A, XYZ, and CIELAB. (Chapters 1, 5)

**CIELAB** — XYZ bent (mostly by a cube root) into a space where distance roughly matches perceived difference; the home of ΔE. (Chapter 5)

**clipping** — forcing values into a representable range. At capture it is saturation and destroys information; in the pipeline this book performs it once, at output, as a disclosed decision. (Chapters 0, 2, 7)

**color space** — a coordinate system for color with a known relationship to human vision. Camera RGB is not one; sRGB and XYZ are. (Chapter 5)

**dark frame / flat frame** — calibration captures (lens cap on; featureless gray) that reveal hot and dead photosites by where they disagree with their neighbors. (Chapter 2)

**ΔE (delta-E)** — color difference as distance in CIELAB (this book uses the original 1976 formula). Rule of thumb: 1 is just noticeable, 5 plainly visible, 20 a different color. (Chapter 5)

**demosaicing** — reconstructing three channels per pixel from a mosaic's one: prediction from assumptions about images, not recovery of recorded data. (Chapter 4)

**display-referred / scene-referred** — values meaning "fraction of display brightness" versus values proportional to scene light. The transfer function is the border crossing. (Chapter 7)

**distortion (barrel / pincushion)** — radial geometric error: straight lines bow outward (barrel) or inward (pincushion). Modeled with one coefficient; corrected by warping. (Chapters 1, 6)

**fixed-pattern noise** — per-column gain differences that repeat identically in every frame — strictly an error, not noise, and therefore correctable rather than merely reducible. (Chapter 2)

**full well** — the electron capacity of a photosite. At the ceiling the response is a wall, not a shoulder: linear, then saturated. (Chapter 2)

**gamma** — the exponent of a display transfer curve (1/2.4 in sRGB's power segment); by extension, the whole business of nonlinear encoding for display. (Chapter 7)

**gamut** — the region of colors a space's primaries can represent; sRGB's is a triangle the world is not obliged to stay inside. Colors outside map to negative coordinates. (Chapters 5, 10)

**gray-world / white-patch** — the two classic illuminant estimators: assume the scene averages to gray; assume the brightest thing is white. Each fails on the scene that violates its assumption. (Chapter 3)

**hot / dead pixels** — photosites that glow in every frame (runaway dark signal) or never respond. Defects are places, not events, which is what makes them correctable. (Chapters 2, 10)

**illuminant** — the light source's spectrum. What the camera records is reflectance times illuminant; white balance exists to divide the illuminant back out. (Chapters 1, 3)

**ISO** — a gain knob applied at readout, after the photons are counted. It brightens signal and noise together; the noise came from the missing light. (Chapter 2)

**JFIF** — the JPEG File Interchange Format: the header conventions (signature, YCbCr, sampling factors) that make a `.jpg` file readable everywhere. (Chapter 9)

**linear light** — values proportional to photon counts, where physics is simple: exposure is multiplication, averaging is legitimate, and displays are unhappy. The pipeline's native state until tone. (Chapters 0, 2, 7)

**luma / luminance** — the brightness the eye reads from a color. *Luminance* is computed on linear values; *luma* (JPEG's Y) is the same weighting applied to already-encoded values, as video has always done. (Chapters 7, 9)

**LUT (lookup table)** — a curve shipped as a table of precomputed values plus interpolation; how pipelines actually carry tone curves. (Chapter 7)

**metamerism** — two different spectra producing identical responses in some observer. Camera metamerism is the sensor's version, and no later processing can undo it. (Chapter 5)

**middle gray** — the conventional 18%-reflectance anchor of photographic tone; the book's curves pin its rendering in place so changing the look does not change the exposure. (Chapter 7)

**moiré** — see aliasing; the patterned false detail a regular grid makes from fine regular texture. (Chapter 4)

**mosaic** — the raw image as captured: one filtered value per photosite, in the CFA's arrangement. (Chapters 1–4)

**OECF (opto-electronic conversion function)** — the standard's name for a capture system's input-to-output response curve; Chapter 2 measures the sensor's and finds it linear to the wall.

**photosite** — one light-collecting well on the sensor: a bucket in the rain. "Pixel" is reserved for the reconstructed image. (Chapter 2)

**PSF (point-spread function)** — the pattern a single point of light lands as after passing through an optical system; the blur that deconvolution needs named. (Chapters 6, 8)

**PSNR (peak signal-to-noise ratio)** — image error against a reference on a logarithmic decibel scale; higher is better, +3 dB is a halving of squared error. The book's currency wherever ground truth exists. (Chapter 4)

**quantization** — rounding continuous values to a discrete set: to 12 bits at capture, to 8 at output, and — the lossy heart of JPEG — of frequency coefficients under a visibility-weighted table. (Chapters 2, 9)

**raw file** — a header saying how to read the numbers, then the numbers: the mosaic as the sensor counted it, before any development. (Chapters 1, 10)

**read noise** — a few electrons of Gaussian fuzz added by the readout electronics whether light arrived or not; why true black must be allowed to average through negative values. (Chapter 2)

**ringing** — oscillating overshoot along edges produced by negative-lobed kernels and truncated frequency methods: Lanczos ringing, deconvolution moats, JPEG's ghost ripples are one family. (Chapters 8, 9)

**sharpening** — raising local contrast so edges read crisper. It adds no detail; it amplifies whatever is there, noise and artifacts included. (Chapter 8)

**shot noise** — the √N statistics of photon arrival: a property of light, not of the sensor, and the reason no camera takes a noiseless photograph. The only cure is more photons. (Chapter 2)

**sRGB** — the default display color space: defined primaries, D65 white, and a standard transfer curve. This book's output space throughout. (Chapters 5, 7)

**stop** — photography's factor of two in light. Vision walks in stops, sensors count linearly; most of tone is negotiating between the two. (Chapter 2)

**tone mapping** — compressing a scene's brightness range into a display's, globally with curves or locally with a base/detail split. (Chapter 7)

**transfer function** — the curve at the display border that spends output levels in perceptual steps rather than linear ones; sRGB's is the book's default. (Chapter 7)

**unsharp mask** — the oldest sharpener: subtract a blurred copy to isolate what changes quickly, add it back scaled. Named for a darkroom sandwich. (Chapter 8)

**vignetting** — radial light falloff toward the frame's corners; multiplicative on the way in, divided back out (noise and all) on the way out. (Chapters 1, 6)

**von Kries (white balance)** — correcting the illuminant by scaling each channel so a neutral surface reads neutral: three multiplications, applied in this book before demosaicing. (Chapter 3)

**white point** — the chromaticity a system treats as "no color": D65 for sRGB and this book. (Chapters 1, 5)

**XYZ** — the CIE's device-independent color coordinates, built on the standard observer; the space where color claims can be checked. (Chapter 5)

**YCbCr** — luma plus two color-difference channels; JFIF's basis, chosen so chroma can be treated roughly. (Chapter 9)

**zipper** — the demosaicing artifact where alternate rows interpolate an edge differently, turning a straight boundary into sawteeth of false color. (Chapter 4)
