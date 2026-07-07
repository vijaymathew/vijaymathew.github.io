Everything the book built lives in one package, `pxp`, under [`code/`](https://github.com/vijaymathew/vijaymathew.github.io/tree/master/lumen/docs/photon-to-pixel/code) in the book's source tree — that link is the browsable original of every listing in these pages, tests and figure scripts included. It installs nothing and depends on nothing: the reference tier is standard-library Python, and only the `pxp.fast` tier asks for NumPy (and `pxp.fast.develop`, for rawpy). This appendix is the map — every public name, one line each, with the chapter that built it. Private helpers (leading underscore) are deliberately omitted; they are explained where they are used.

The package's one structural rule is Chapter 0's contract: every pipeline stage exists twice, as readable loops in `pxp` and as NumPy arithmetic in `pxp.fast`, and the test suite in `code/tests/` asserts the two tiers produce identical output, bit for bit, on every build of this book.

## The toolkit — `pxp.image` (Chapter 0)

| name | what it does |
|---|---|
| `Image(width, height, channels=3, fill=0.0)` | the book's only data type: a grid of pixels, each a list of float channel values; `get(x, y)` and `set(x, y, values)` are the whole interface |
| `write_png(image, path)` | save as 8-bit PNG, from scratch; the one place values are clipped and quantized |

## The simulated camera (Chapter 1)

**`pxp.spectrum`** — light as 36 samples, 380–730 nm.

| name | what it does |
|---|---|
| `Spectrum(samples)` | a light (emitted power) or a surface (reflection fractions) |
| `Spectrum.from_function(fn)` | build from a formula of wavelength |
| `spectrum.lit_by(light)` | reflectance times illumination, wavelength by wavelength — the simulator's one law |
| `spectrum.scaled(factor)` | the same spectrum, brighter or dimmer |

**`pxp.illuminant`** — the book's lights.

| name | what it does |
|---|---|
| `daylight()` | CIE D65, resampled from the CIE's published table |
| `incandescent(temperature_k=2856)` | Planck's law; at the default temperature it is CIE illuminant A |
| `fluorescent()` | a dim continuum with three emission spikes, kept to cause trouble |
| `equal_energy()` | flat power at every wavelength — the reference nobody sells |

**`pxp.reflectance`** — designed surfaces.

| name | what it does |
|---|---|
| `step(wavelength, center, width)` | a smooth switch-on above a wavelength (how red pigments behave) |
| `bump(wavelength, center, width)` | a smooth peak around a wavelength (how green ones do) |
| `patch(fn)` | wrap a formula as a surface, refusing physically impossible values |
| `color_chart()` | the twelve-patch chart: four neutrals, seven colors, one skin tone |

**`pxp.scene`** — spatial test targets. A `Scene` pairs a reflectance-at-position rule with a light; `sample(x, y, band)` and `spectrum_at(x, y)` are what lenses call.

| name | what it does |
|---|---|
| `chart(light, ..., patches=None, brightness_at=None)` | the chart laid out in space, optionally with a lighting-variation multiplier |
| `grid_target(light, spacing, thickness)` | straight lines, for distortion to bend |
| `starburst(light, spokes=36)` | every orientation and frequency in one target — the book's torture test |
| `point_lights(light, columns, rows, radius)` | an array of dots, for chromatic aberration and centroids |

**`pxp.lens`** — glass as a rule about where to look.

| name | what it does |
|---|---|
| `Lens(name, distortion=0, vignetting=0, ca=0)` | three sins, one coefficient each; `source_position`, `falloff`, `look` implement them |
| `perfect()` | the control group: identity geometry, no falloff |
| `kit_lens()` | all three flaws at figure-legible strength |

**`pxp.sensor`** — where spectra die.

| name | what it does |
|---|---|
| `cfa_channel(x, y)` | which filter sits at a photosite: the RGGB rule in four lines |
| `Sensor(width, height, seed, ...)` | filters, full well, shot/read/fixed-pattern noise, black level; deterministic per seed |
| `sensor.photosite_signal(spectrum, channel)` | one filtered number from one spectrum — the collapse itself |
| `sensor.expose_for(scene, lens, highlight=0.85)` | meter: the exposure that lands the brightest channel at 85% of full well |
| `sensor.capture(scene, lens, exposure, iso_gain=1.0)` | a full frame: sample, filter, count, add noise, quantize |

**`pxp.raw`** — the container.

| name | what it does |
|---|---|
| `RawImage`, `save(raw, path)`, `load(path)` | the PXRAW format: seventeen bytes of header, then the numbers |

**`pxp.defects`** (Chapter 2) — `afflict(raw, seed, hot=14, dead=5)` ages a sensor for the repair experiments.

**`pxp.linalg`** (Chapter 5) — `solve(matrix, rhs)`, the small Gaussian-elimination solver behind every fit and inversion in the book.

**`pxp.color`** (Chapters 1, 5) — the observer's side of color.

| name | what it does |
|---|---|
| `xyz(light)` | integrate a spectrum against the CIE 1931 observer |
| `chromaticity(xyz_values)` | divide brightness out, keep the hue-and-saturation coordinates |
| `xyz_to_linear_srgb(xyz_values)` / `XYZ_TO_LINEAR_SRGB` | into display primaries (the matrix Chapter 5 derives from first principles) |
| `srgb_encode(value)` | the sRGB transfer function, one channel value at a time |
| `xyz_to_lab(xyz_values, white_xyz)` | into CIELAB, where distance approximates perceived difference |
| `delta_e(lab1, lab2)` | that distance: the 1976 ΔE |
| `display(radiance, white_luminance)`, `swatch(reflectance, light)` | Chapter 1's viewing conveniences |

## The pipeline (Chapters 2–9)

**`pxp.rawproc`** (Chapter 2)

| name | what it does |
|---|---|
| `linearize(raw)` | black level off, floats on a 0..1 scale, negatives preserved |
| `find_defects(dark, flat, ...)` | hot and dead photosites, from two calibration frames |
| `fix_defects(mosaic, defects)` | each liar replaced by the mean of its same-filter neighbors |

**`pxp.whitebalance`** (Chapter 3)

| name | what it does |
|---|---|
| `neutral_response(light)` | what the sensor reads on a perfect white — the illuminant, as this camera sees it |
| `gains_from_neutral(neutral)` | the von Kries move: scale red and blue to meet green |
| `reference_gains(light)` | the true gains, by simulator privilege — every estimator's yardstick |
| `gray_world(mosaic)` / `white_patch(mosaic, keep=0.999)` | the two classic estimators, each faithful to its own assumption |
| `gains_for_temperature(kelvin)` | the Kelvin slider: Planck's law run backwards |
| `apply_gains(mosaic, gains)` | three multiplications, on the mosaic, before demosaicing — the chapter's thesis |

**`pxp.demosaic`** (Chapters 3–4)

| name | what it does |
|---|---|
| `nearest(mosaic)` | copy the closest same-color value: the floor |
| `bilinear(mosaic)` | average the neighbors: the baseline |
| `interpolate_green(mosaic)` | gradient-directed green (Hamilton–Adams), Chapter 3's instrument |
| `gradient(mosaic)` | green first, then red/blue as color differences |
| `ahd(mosaic)` | Adaptive Homogeneity-Directed: interpolate twice, keep the calmer candidate |
| `demosaic_preview(mosaic)` | the quick look Chapter 3 used before demosaicing was built properly |

**`pxp.colormatrix`** (Chapters 5, 10)

| name | what it does |
|---|---|
| `training_pairs(light)` | (camera RGB, true XYZ) per chart patch, both anchored to white |
| `derive_matrix(light)` | the least-squares camera-to-XYZ fit, as a profiling lab would |
| `apply_matrix(image, matrix)` | nine multiplications per pixel |
| `derive_srgb_matrix()` | the XYZ-to-sRGB constant, derived rather than pasted |
| `matrix_from_profile(xyz_to_camera)` | adapt a real camera's shipped profile (dcraw's recipe) |

**`pxp.lenscorrect`** (Chapter 6)

| name | what it does |
|---|---|
| `unvignette(mosaic, lens)` | the falloff divided back out, on the mosaic, before white balance |
| `effective_wavelength(channel)` | one wavelength to stand for a filter's band |
| `correct_ca(image, lens)` | re-register red and blue onto green (after demosaic, before the matrix) |
| `correct_distortion(image, lens)` | the geometry unbent, by fixed-point inversion of the radial model |

**`pxp.tone`** (Chapter 7)

| name | what it does |
|---|---|
| `luminance(pixel)` | the brightness the eye reads from an RGB triple |
| `exposure(image, stops)` | multiplication by 2^stops — the book's first pipeline stage |
| `bake_curve(curve, size=4096)` / `apply_lut(image, table)` / `apply_lut_luminance(image, table)` | curves designed as formulas, shipped as lookup tables |
| `display_curve()` | the plain sRGB transfer, as a bakeable curve |
| `filmic_curve(contrast=2.0, black_stops=8.0)` | the S: toe, shoulder, and middle gray pinned in place |
| `reconstruct_highlights(image, clip_levels, margin=0.97)` | borrow surviving channels where others clipped; force neutral where none did |
| `bilateral(plane, radius=4, range_sigma=0.15)` | the edge-respecting average (rational range weight, disclosed) |
| `local_contrast(image, table, base_gain, detail_gain, ...)` | base/detail split: compress the lighting or push the texture |

**`pxp.detail`** (Chapter 8)

| name | what it does |
|---|---|
| `gaussian_kernel(radius, sigma)` / `gaussian_blur(plane, ...)` | the tabulated bell, shared by both tiers |
| `median_filter(plane, radius=1)` | rank order instead of arithmetic: impulses die, steps survive |
| `unsharp_mask(image, amount=0.8, ...)` | the darkroom sharpener, applied to luminance |
| `richardson_lucy(plane, ..., iterations=10)` | deconvolution: undo a blur you can name, ringing included |
| `nlm(plane, patch_radius=1, search_radius=5, strength=0.1)` | Non-Local Means: patches vote (rational falloff, disclosed) |
| `per_channel(image, filter_fn)` | run a plane filter on each channel |

**`pxp.resample`** (Chapter 9)

| name | what it does |
|---|---|
| `tent(x)` / `catmull_rom(x)` / `lanczos(x, lobes=3)` | the kernels: three claims about what lies between samples |
| `axis_weights(src, dst, kernel, support)` | tap positions and weights, stretched when shrinking; both tiers share it |
| `resample(plane, width, height, method="lanczos")` | separable resize; `"nearest"` is the disclosed aliasing demo |

**`pxp.jpeg`** (Chapter 9)

| name | what it does |
|---|---|
| `rgb_to_ycbcr(image)` / `ycbcr_to_rgb(luma, cb, cr)` | JFIF's change of basis and the way back |
| `subsample(plane)` / `pad(plane, multiple)` | 4:2:0's average; edge-replication to whole blocks |
| `dct8(vector)` / `dct_block(block)` | the transform, one row and then two dimensions |
| `quality_tables(quality)` | the standard's tables under the 1–100 knob |
| `zigzag_order()` / `quantized_block(plane, bx, by, table)` | low frequencies first; one tile to 64 small integers |
| `huffman_codes(bits, values)` / `BitWriter` / `encode_block(...)` | canonical codes, bit packing with stuffing, one block into the stream |
| `component_blocks(plane, table)` / `serialize(...)` / `encode(image, quality=90)` | the file, assembled; `encode` is display-referred RGB in, `.jpg` bytes out |

## The fast tier — `pxp.fast`

Twins, in NumPy, of every module above from `rawproc` through `jpeg`, plus `demosaic`, `whitebalance`, `colormatrix`, `lenscorrect`, `tone`, `detail`, `resample` — same names, same signatures with arrays in place of nested lists, same bits out. Functions that run once per image and return three or nine numbers (the white-balance estimators, the matrix derivations) are deliberately not twinned; the reference versions are the only versions.

Two members exist only here:

| name | what it does |
|---|---|
| `pxp.fast.convert` | `to_array(image)` / `from_array(array)` — the bridge between tiers |
| `pxp.fast.develop` (Chapter 10) | `load(path, crop=None)` reads a real raw file via rawpy; `develop(path, stops=0, sharpen=0.6, quality=90, method="ahd", out_width=None, crop=None)` is the book in one function |
