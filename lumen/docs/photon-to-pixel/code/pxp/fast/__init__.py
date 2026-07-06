"""pxp.fast — the pipeline tier.

The same arithmetic as the reference modules, restated for the
machine with NumPy (and, where it matters, numba). Nothing in this
package introduces a concept: for every function here there is a
loop-by-loop twin in ``pxp``, and a test in ``tests/`` asserting the
two produce identical output.

Requires NumPy, which the reference tier deliberately does not.
"""

from .convert import to_array, from_array
from .tone import exposure
