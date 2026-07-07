"""Resampling — pipeline tier. Twin of pxp.resample.

The weight tables come from the reference module unchanged — the
weights ARE the algorithm — so the only work here is applying them
with whole-row arithmetic, one tap at a time, in the reference
tier's accumulation order.
"""

import numpy as np

from ..resample import KERNELS, axis_weights


def _apply_across(plane, table, src_w):
    starts = np.array([start for start, _ in table])
    weights = np.array([w for _, w in table])
    out = np.zeros((plane.shape[0], len(table)))
    for k in range(weights.shape[1]):
        idx = np.clip(starts + k, 0, src_w - 1)
        out = out + weights[:, k][None, :] * plane[:, idx]
    return out


def _apply_down(plane, table, src_h):
    starts = np.array([start for start, _ in table])
    weights = np.array([w for _, w in table])
    out = np.zeros((len(table), plane.shape[1]))
    for k in range(weights.shape[1]):
        idx = np.clip(starts + k, 0, src_h - 1)
        out = out + weights[:, k][:, None] * plane[idx, :]
    return out


def resample(plane, width, height, method="lanczos"):
    src_h, src_w = plane.shape
    if method == "nearest":
        ys = np.minimum(src_h - 1,
                        ((np.arange(height) + 0.5)
                         * src_h / height).astype(int))
        xs = np.minimum(src_w - 1,
                        ((np.arange(width) + 0.5)
                         * src_w / width).astype(int))
        return plane[np.ix_(ys, xs)]

    kernel, support = KERNELS[method]
    mid = _apply_across(plane, axis_weights(src_w, width,
                                            kernel, support), src_w)
    return _apply_down(mid, axis_weights(src_h, height,
                                         kernel, support), src_h)
