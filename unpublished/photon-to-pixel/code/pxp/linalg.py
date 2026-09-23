"""The one piece of numerical machinery the book needs: solving a
small linear system. Chapter 5 fits a 3x3 color matrix by least
squares, which reduces to systems of three equations — small enough
that writing the solver ourselves costs twenty lines and keeps the
no-hidden-operations promise intact.
"""


def solve(matrix, rhs):
    """Solve matrix . x = rhs by Gaussian elimination with partial
    pivoting. Fine for the tiny, well-conditioned systems this book
    produces; a numerical library earns its keep on anything larger.
    """
    n = len(rhs)
    rows = [list(matrix[i]) + [rhs[i]] for i in range(n)]
    for col in range(n):
        pivot = max(range(col, n), key=lambda r: abs(rows[r][col]))
        rows[col], rows[pivot] = rows[pivot], rows[col]
        if rows[col][col] == 0.0:
            raise ValueError("singular system")
        for r in range(col + 1, n):
            factor = rows[r][col] / rows[col][col]
            for c in range(col, n + 1):
                rows[r][c] -= factor * rows[col][c]
    x = [0.0] * n
    for r in range(n - 1, -1, -1):
        total = rows[r][n]
        for c in range(r + 1, n):
            total -= rows[r][c] * x[c]
        x[r] = total / rows[r][r]
    return x
