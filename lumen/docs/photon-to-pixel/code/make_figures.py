#!/usr/bin/env python3
"""Regenerate every figure in the book.

Runs each script in figures/ in name order. All figure scripts are
deterministic (fixed seeds, no timestamps), so a clean checkout plus
this script reproduces assets/figures/ byte for byte.
"""

import os
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
FIGDIR = os.path.join(HERE, "figures")


def main():
    scripts = sorted(f for f in os.listdir(FIGDIR)
                     if f.endswith(".py") and not f.startswith("_"))
    for script in scripts:
        result = subprocess.run(
            [sys.executable, os.path.join(FIGDIR, script)])
        if result.returncode != 0:
            sys.exit(f"figure script failed: {script}")
    print(f"make_figures: {len(scripts)} script(s) done")


if __name__ == "__main__":
    main()
