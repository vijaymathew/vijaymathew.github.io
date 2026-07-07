Sources, by pipeline stage. Two ground rules carried over from the chapters. First, everything listed under a stage is published, citable work — safe to study and, where it is an algorithm, safe to reimplement; the final section collects what is *not*, and why the distinction matters to anyone shipping code. Second, the list is deliberately short: each entry is here because a chapter leaned on it or points straight at it, not to survey a field.

## The sensor and noise (Chapter 2)

- James Janesick, *Photon Transfer* (SPIE Press, 2007) — the book on characterizing sensors by their noise, by the method Chapter 2 reproduced in thirty lines: variance against mean.
- The EMVA 1288 standard — the industry's formalization of the same measurements; its datasheets are photon transfer curves with a compliance stamp.
- Bryce Bayer's patent, US 3,971,065 (filed 1975) — four pages, long expired, and still the clearest statement of the luminance-first bet every camera in your house is built on.

## White balance and color constancy (Chapter 3)

- Gershon Buchsbaum, "A spatial processor model for object colour perception" (1980) — gray-world, stated formally.
- Edwin Land's Retinex papers (1970s) — the lineage of white-patch and of the idea that lightness is computed, not read.
- Arjan Gijsenij, Theo Gevers & Joost van de Weijer, "Computational Color Constancy: Survey and Experiments" (IEEE TIP, 2011) — where to go when two estimators stop being enough; the field, mapped.

## Demosaicing (Chapter 4)

- James Hamilton & John Adams's adaptive interpolation patent, US 5,629,734 (1997, expired) — the gradient-directed green step of Chapters 3–4, in the original.
- Keigo Hirakawa & Thomas Parks, "Adaptive Homogeneity-Directed Demosaicing" (IEEE TIP, 2005) — AHD; Chapter 4 implements its core faithfully and says what it omits.
- David Alleysson, Sabine Süsstrunk & Jeanny Hérault, "Linear demosaicing inspired by the human visual system" (IEEE TIP, 2005), and Eric Dubois, "Frequency-domain methods for demosaicking of Bayer-sampled color images" (IEEE SPL, 2005) — the frequency-domain view: a mosaic as luminance at baseband with chrominance modulated to the corners.
- Michaël Gharbi et al., "Deep Joint Demosaicking and Denoising" (SIGGRAPH Asia, 2016) — the standard reference for the learned frontier, and for why the two problems are one.

## Color (Chapter 5)

- CIE 15, *Colorimetry* — the standard behind the observer, the illuminants, and the white points the simulator is pinned to.
- Günther Wyszecki & W. S. Stiles, *Color Science* (2nd ed., 1982) — the reference tome; every constant in Chapter 5 has an ancestor here.
- Mark Fairchild, *Color Appearance Models* (3rd ed., 2013) — what lies beyond XYZ and ΔE: adaptation, appearance, and the models real profiling uses.
- Adobe's DNG specification (freely published) — the closest thing to public documentation of production raw practice: ColorMatrix pairs, AsShotNeutral, opcode lists. Chapters 1, 5, 6 and 10 all touch it.
- IEC 61966-2-1 — sRGB itself: the primaries, white point and transfer function Chapter 5 derives its matrix from.

## The lens (Chapter 6)

- Duane Brown, "Close-range camera calibration" (1971) — the polynomial radial model (ours with one term, his with more) that correction software still fits.
- The Lensfun project — the open database of fitted lens corrections; its documentation doubles as a field guide to distortion, CA and vignetting models in practice.

## Tone (Chapter 7)

- Charles Poynton, *Digital Video and HD: Algorithms and Interfaces* (2nd ed., 2012) — gamma, luma, YCbCr and every encoding subtlety Chapters 7 and 9 compress into paragraphs, treated with full rigor.
- Erik Reinhard et al., "Photographic Tone Reproduction for Digital Images" (SIGGRAPH, 2002) — the global operator that made tone mapping a literature.
- Frédo Durand & Julie Dorsey, "Fast Bilateral Filtering for the Display of High-Dynamic-Range Images" (SIGGRAPH, 2002) — the base/detail decomposition Chapter 7 builds.
- Raanan Fattal, Dani Lischinski & Michael Werman, "Gradient Domain High Dynamic Range Compression" (SIGGRAPH, 2002) — the other classical road to the same goal.
- Carlo Tomasi & Roberto Manduchi, "Bilateral Filtering for Gray and Color Images" (ICCV, 1998) — the filter itself, at the source.

## Detail and noise reduction (Chapter 8)

- William Richardson (JOSA, 1972) and Leon Lucy (AJ, 1974) — the two independent inventions of the deconvolution iteration that bears both names.
- Antoni Buades, Bartomeu Coll & Jean-Michel Morel, "A non-local algorithm for image denoising" (CVPR, 2005) — NLM; Chapter 8's implementation is the paper's core with one disclosed substitution.
- Kostadin Dabov et al., "Image Denoising by Sparse 3-D Transform-Domain Collaborative Filtering" (IEEE TIP, 2007) — BM3D, the block-matching successor that ruled the benchmarks until learning did.

## Encoding (Chapter 9)

- ITU-T Recommendation T.81 / ISO 10918-1 (1992) — the JPEG standard, including the Annex K tables Chapter 9 reproduces byte-for-byte; more readable than its reputation suggests.
- Gregory Wallace, "The JPEG Still Picture Compression Standard" (Communications of the ACM, 1991) — the classic overview, written as the standard shipped.
- William Pennebaker & Joan Mitchell, *JPEG: Still Image Data Compression Standard* (1993) — the committee's own book-length treatment.
- The libjpeg source (Independent JPEG Group, 1991–) — the reference implementation; Chapter 9's tables were verified against its output.

## Whole pipelines, in source code (Chapter 10)

- dcraw (Dave Coffin) — one file of C containing this entire book at production terseness; the traditional rite of passage.
- LibRaw — dcraw industrialized: the library rawpy binds and Chapter 10 reads files through.
- RawTherapee (and its documentation wiki, RawPedia) and darktable — two open-source raw processors whose source is this book's chapters at production strength, several algorithms deep per stage; Ingo Weyrich's and Anders Torger's writings in those communities repay attention.
- rawpy — the Python binding that makes Chapter 10 a script rather than a project.
- Samuel Hasinoff et al., "Burst photography for high dynamic range and low-light imaging on mobile cameras" (SIGGRAPH Asia, 2016) — the HDR+ paper: what a phone's pipeline does with the same physics and twenty frames.

## The wider field

- Richard Szeliski, *Computer Vision: Algorithms and Applications* (2nd ed., 2022; freely available online) — the context this pipeline is one corner of.
- Michael Brown's ICCV/CVPR tutorials on camera pipelines — the closest academic cousin to this book's territory, with slides that are a course in themselves.

## Proprietary — read for understanding only

The boundary the whole book has walked: published algorithms are safe ground, and shipping products are not, however visible their behavior. Camera manufacturers' in-camera processing — picture styles, noise reduction, their demosaicing variants — is trade secret and, in places, patented; the book's results differ from any camera's rendering by design, not by failure. Adobe's highlight reconstruction, profiles and enhancement features are products, not papers; where the DNG specification documents an interface, that interface is fair game, and where behavior is only observable, it is only observable. Commercial derivatives and accelerations of published algorithms (BM3D's, notably) can be encumbered even where the original is open — reimplement from the paper, not from a product. And modern royalty-bearing codecs (HEVC/HEIC among them) sit on active patent pools: formats to read about, not to reimplement for fun. None of this is a complaint; it is a map of where the fences are, and ten chapters have shown how much country lies inside them.
