# Algo Book Scripts

This directory contains helper scripts for the algorithms book.

## `check_book_examples`

`check_book_examples` runs the Nex code-fence checker for the book from the
book repo itself.

### From `books/algo`

```bash
./scripts/check_book_examples
```

### What It Checks

- `preface.md`
- `chapter_1.md` through `chapter_20.md` if present
- `toc.md`

The checker extracts fenced code blocks and verifies that active Nex examples
parse successfully.

### What It Does Not Check

- semantic correctness of the algorithms
- runtime behavior
- whether excerpt-only snippets are complete standalone programs

This is a syntax-oriented pass.

### Repo Layout Assumption

The wrapper assumes this layout:

```text
~/Projects/
  nex/
  vijaymathew.github.io/
    books/
      algo/
```

It delegates to the implementation in:

`~/Projects/nex/test/scripts/check_algo_book_examples.clj`

### Typical Output

The script prints one `PASS` or `FAIL` line per markdown file, followed by a
summary of checked files.
