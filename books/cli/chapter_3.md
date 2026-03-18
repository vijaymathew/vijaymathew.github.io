# Reading and Inspecting Files Without an Editor

Opening a file in an editor feels natural. It's what most of us learned first, and for writing code it's usually the right call. But for *reading* — for inspecting, skimming, monitoring, and understanding files — an editor is often the wrong tool. It's slow to open, it loads the entire file into memory, and it gives you no way to compose what you're seeing with other commands.

The terminal gives you a different set of primitives for reading files. Some are faster than opening an editor. Some can handle files so large that an editor would choke on them. Some let you watch a file change in real time. And all of them can be connected to the search and processing tools from the previous chapters, turning a simple file read into the first step of a more powerful pipeline.

This chapter covers the tools you'll use to read and inspect files at the command line — and, more importantly, when to reach for each one.


## `cat`: Quick Reads and Concatenation

`cat` is the simplest file-reading tool. It reads a file and prints its contents to standard output — nothing more.

```bash
cat src/index.ts
```

For short files — configuration files, small scripts, environment templates — `cat` is the fastest way to see the contents without leaving the terminal. It's also the natural starting point for pipelines: read a file with `cat`, then pipe the output into `grep`, `jq`, `awk`, or whatever processing you need.

```bash
cat access.log | grep "ERROR" | wc -l     # count error lines in a log
cat package.json | jq '.scripts'           # extract npm scripts
```

### Line numbers

When you need to reference specific lines — in a bug report, a code review comment, or a debugging session — the `-n` flag adds line numbers:

```bash
cat -n src/auth.ts
```

### Showing invisible characters

Two flags that are surprisingly useful when debugging whitespace issues:

```bash
cat -A src/config.yaml      # show all non-printing characters
cat -e src/config.yaml      # show line endings ($ marks end of each line)
```

If a config file is behaving unexpectedly and you suspect Windows-style line endings (`\r\n` instead of `\n`), `cat -e` will show you the stray `^M` characters immediately. This is a small thing that saves a disproportionate amount of debugging time.

### When not to use `cat`

`cat` reads the entire file before printing anything. For files that are hundreds of megabytes — large log files, database dumps, data exports — this is the wrong tool. Use `less` (covered next) or `tail` instead. A file that takes thirty seconds to `cat` takes milliseconds to inspect with `head`.



## `less`: Navigating Large Files

`less` is an interactive file viewer. Unlike `cat`, it doesn't load the entire file at once — it reads and displays content on demand, which makes it fast even for files that are gigabytes in size.

```bash
less logs/application.log
```

Once inside `less`, navigation works like this:

| Key | Action |
| --- | --- |
| `Space` or `f` | Page down |
| `b` | Page up |
| `G` | Jump to end of file |
| `g` | Jump to beginning |
| `/<pattern>` | Search forward |
| `?<pattern>` | Search backward |
| `n` | Next search match |
| `N` | Previous search match |
| `q` | Quit |

The search inside `less` supports regular expressions, which makes it genuinely useful for navigating large log files — you can jump directly to the next ERROR line, the next occurrence of a request ID, or the next stack trace.

### Following a file

The `-F` flag makes `less` behave like `tail -f` — it keeps watching the file and shows new content as it's written:

```bash
less -F logs/application.log
```

The advantage over `tail -f` is that you can scroll back through the history while still receiving new lines — something `tail -f` alone can't do. For monitoring a live log file while also being able to investigate older entries, `less -F` is often the better choice.

### Useful flags

```bash
less -N logs/application.log     # show line numbers
less -S logs/application.log     # don't wrap long lines (scroll horizontally)
less -i logs/application.log     # case-insensitive search
less +G logs/application.log     # open at end of file (useful for logs)
```

The `-S` flag is particularly useful for log files or CSV data with very long lines, where wrapping makes the output unreadable.

### Piping into `less`

Any command whose output is too long to read on one screen can be piped into `less`:

```bash
rg "ERROR" logs/ | less
git log --oneline | less
ls -lah /usr/lib | less
```

This is one of the most common terminal patterns: run a command, realize the output is long, pipe it into `less` so you can scroll through it at your own pace.



## `head` and `tail`: Reading the Edges of Files

Most of the time, you don't need to read an entire file. You need the beginning, or the end. `head` and `tail` give you exactly that, without touching the rest of the file.

### `head`

```bash
head src/index.ts              # first 10 lines (default)
head -n 50 src/index.ts        # first 50 lines
head -n -20 src/index.ts       # everything except the last 20 lines
```

`head` is most useful for checking file headers, understanding file format before processing it, or quickly confirming you have the right file. It's also the right tool when you want to preview the beginning of a large data file without reading the whole thing:

```bash
head -n 5 data/users.csv       # preview the first 5 rows of a CSV
```

### `tail`

```bash
tail logs/app.log              # last 10 lines (default)
tail -n 100 logs/app.log       # last 100 lines
tail -n +50 logs/app.log       # everything from line 50 onwards
```

The `+` syntax on `-n` is subtle but powerful: `tail -n +50` means "start from line 50" rather than "show the last 50 lines." This lets you skip a file header and process everything after it:

```bash
tail -n +2 data/users.csv | wc -l     # count rows, excluding header
```

### `tail -f`: Following a live file

The `-f` flag is one of the most-used developer commands in existence:

```bash
tail -f logs/application.log
```

This keeps the file open and prints new lines as they're written — essential for watching log output from a running service. Hit `Ctrl+C` to stop.

Following multiple files at once:

```bash
tail -f logs/app.log logs/error.log logs/access.log
```

`tail` will label each line with the filename it came from, so you can monitor several log streams simultaneously.

Combining `tail -f` with `grep` to filter the live stream:

```bash
tail -f logs/application.log | grep "payment-service"
tail -f logs/application.log | grep -E "ERROR|WARN"
```

This is the pattern you'll use constantly when debugging a running service: watch only the log lines you care about, filtered in real time.

### Watching for a specific event

A more advanced pattern — wait until a specific string appears in a log file, then stop:

```bash
tail -f logs/app.log | grep -m 1 "Server started"
```

The `-m 1` flag on `grep` stops after the first match. This is useful in shell scripts that need to wait for a service to finish starting before proceeding.



## `wc`: Counting Lines, Words, and Characters

`wc` (word count) is a small tool with a surprisingly wide range of uses in development workflows.

```bash
wc -l src/index.ts             # number of lines
wc -w src/index.ts             # number of words
wc -c src/index.ts             # number of bytes
wc -m src/index.ts             # number of characters
```

In practice, `-l` is the flag you'll use almost exclusively — line counts are the relevant metric for source files and logs.

### Counting across multiple files

```bash
wc -l src/*.ts                 # line count for each TypeScript file, plus total
```

The output includes a per-file count and a total at the bottom — a quick way to get a rough sense of the size of different parts of a codebase.

### Combining with `find` for a codebase summary

```bash
find . -name "*.ts" -not -path "*/node_modules/*" | xargs wc -l | sort -rn | head -20
```

This finds all TypeScript files, counts their lines, sorts by line count in descending order, and shows the top 20 largest files. It's a useful way to identify the most complex parts of a codebase when you're getting oriented — the largest files are often the ones that have accumulated the most technical debt.

### Counting search results

One of the most common uses of `wc -l` is counting the results of another command:

```bash
rg "TODO" -l | wc -l           # how many files have TODOs
git log --oneline | wc -l      # how many commits in this repo
cat access.log | grep "500" | wc -l    # how many 500 errors in the log
```

The pattern `command | wc -l` is so common it becomes muscle memory.



## `bat`: A Better `cat`

`bat` is a modern replacement for `cat` that adds syntax highlighting, line numbers, and Git change indicators — all with sensible defaults that don't get in the way.

```bash
brew install bat               # macOS
apt install bat                # Ubuntu (may be installed as batcat)
```

```bash
bat src/auth.ts                # syntax-highlighted file view
```

The output is color-coded by language, with line numbers on the left and a subtle header showing the filename. For reading source code at the terminal, it's dramatically more readable than plain `cat`.

### Git integration

One of `bat`'s best features is that it shows Git change indicators in the gutter — a `+` for added lines, `~` for modified lines — so you can see what's changed in the current working tree without running `git diff`:

```bash
bat src/auth.ts                # modified lines are highlighted in the gutter
```

### Useful flags

```bash
bat -n src/auth.ts             # line numbers only, no other decorations
bat -p src/auth.ts             # plain output (no decorations, like cat)
bat -A src/auth.ts             # show non-printing characters (like cat -A)
bat --line-range 50:100 src/auth.ts    # show only lines 50-100
```

The `--line-range` flag is particularly useful — instead of opening a file in an editor just to look at a specific section, you can read exactly the lines you need.

### Using `bat` in pipelines

When used in a pipeline, `bat` automatically disables its decorations and behaves like `cat`:

```bash
bat src/auth.ts | grep "export"        # works exactly like cat | grep
```

This means you can alias `cat` to `bat` without breaking any pipelines — something many developers do in their shell configuration.



## Reading Compressed and Binary Files

Not every file you need to inspect is a plain text file. A few tools handle the common cases.

### Compressed files

Log files and data exports are often compressed with `gzip`. Rather than decompressing the file to read it, you can use the `z`-prefixed variants of common tools:

```bash
zcat logs/archive.log.gz               # like cat, for gzip files
zless logs/archive.log.gz              # like less, for gzip files
zgrep "ERROR" logs/archive.log.gz      # like grep, for gzip files
```

This means you can grep through months of archived logs without decompressing them first — a significant time and disk space saving when you're searching historical data.

### Binary files

For binary files — compiled executables, data files, unknown blobs — `xxd` produces a hex dump that lets you inspect the raw bytes:

```bash
xxd some-binary | head -20
```

```
00000000: 7f45 4c46 0201 0100 0000 0000 0000 0000  .ELF............
00000010: 0300 3e00 0100 0000 1011 0000 0000 0000  ..>.............
```

The left column is the byte offset, the middle is the hex representation, and the right is the ASCII interpretation (with `.` for non-printable bytes). For ELF binaries, the `ELF` signature is visible immediately — confirming what `file` told you in Chapter 1.

For a more readable inspection of what strings are embedded in a binary:

```bash
strings some-binary | grep -i "version"
strings some-binary | grep -i "error"
```

`strings` extracts printable character sequences from a binary file. It's useful for getting a quick sense of what a compiled binary does, what error messages it might produce, or what version it is.



## Comparing Files with `diff`

Reading files often leads to a related question: how does this file differ from another version? `diff` is the classic tool for this.

```bash
diff file-a.ts file-b.ts
```

The output shows lines that differ between the two files, with `<` for lines only in the first file and `>` for lines only in the second.

### Unified diff format

The default output is functional but hard to read quickly. The unified format — which is what Git uses — is much clearer:

```bash
diff -u file-a.ts file-b.ts
```

```
 file-a.ts   2024-03-11 17:43:09
+++ file-b.ts   2024-03-12 09:14:22
@@ -12,7 +12,7 @@
 function handleAuth(req, res) {
-  const token = req.headers.authorization;
+  const token = req.headers['authorization'];
   if (!token) {
```

Lines prefixed with `-` were removed, lines with `+` were added, and lines with neither are context.

### Comparing directories

```bash
diff -r src/ src-backup/              # recursive directory comparison
diff -rq src/ src-backup/             # just show which files differ
```

The `-q` flag (quiet) only reports which files differ, not the actual differences — useful when you just need a list of changed files between two directory trees.

### A practical pattern: comparing config environments

```bash
diff -u config/development.yaml config/production.yaml
```

A quick way to audit the differences between environment configs — something that's useful before a deployment and surprisingly easy to overlook.



## Putting It Together: A Real Workflow

Here's how these tools work together in a realistic debugging scenario. Imagine a service is throwing errors intermittently and you need to investigate.

```bash
# How big is the log file? Is it worth opening in less?
wc -l logs/application.log

# Get a quick look at the most recent entries
tail -n 50 logs/application.log

# Watch the live log stream, filtered to errors only
tail -f logs/application.log | grep -E "ERROR|WARN"

# How many errors happened in the last hour?
# (assuming logs have timestamps in ISO format)
grep "$(date -u +%Y-%m-%dT%H)" logs/application.log | grep "ERROR" | wc -l

# Find the first occurrence of the error to understand when it started
grep -n "NullPointerException" logs/application.log | head -1

# Read the surrounding context at that line number
# (if the first occurrence was at line 4821)
tail -n +4810 logs/application.log | head -n 30

# Check if the error is also in yesterday's archived log
zgrep "NullPointerException" logs/application.log.1.gz | wc -l
```

Each of these commands takes a second or two to run. Together, they give you a detailed picture of the error — when it started, how often it occurs, what the surrounding context looks like — without ever opening a log file in an editor or downloading it to your local machine.



## Chapter Summary

The tools in this chapter — `cat`, `less`, `head`, `tail`, `wc`, `bat`, `diff`, and the `z`-prefixed variants — give you a complete toolkit for reading and inspecting files at the terminal. The key is knowing which tool fits which situation.

The key habits to build:

- Use `cat` for short files and as the start of pipelines; use `less` for anything you need to scroll through
- Keep `tail -f | grep "pattern"` in your muscle memory — it's the fastest way to monitor a live service
- Use `wc -l` as a quick sanity check on results before acting on them
- Install `bat` and consider aliasing `cat` to it — the syntax highlighting pays for itself immediately
- Use `tail -n +2` to skip headers when processing structured files like CSVs
- Reach for `zcat` and `zgrep` before decompressing archived logs



## Exercises

**1.** Find the largest source file in a codebase using `find`, `xargs`, and `wc -l`. Then use `bat --line-range` to read just the first 30 lines of it.

**2.** Start a process that writes to a log file (any web server or background process will do). Use `tail -f | grep` to watch its output filtered to a specific pattern in real time.

**3.** Take two config files that differ slightly — for example, a development and production environment config. Use `diff -u` to produce a clean summary of the differences.

**4.** Find a gzip-compressed file on your system (check `/var/log` on Linux, or create one with `gzip`). Use `zless` and `zgrep` to inspect and search it without decompressing it.

**5.** Use the `tail -n +2` pattern to skip the header row of a CSV file and pipe the result into `wc -l` to get an accurate row count.



## Quick Reference

| Command | What it does |
| --- | --- |
| `cat file` | Print file contents to stdout |
| `cat -n file` | Print with line numbers |
| `cat -A file` | Show non-printing characters |
| `less file` | Interactively browse a file |
| `less -F file` | Follow file (like tail -f, but scrollable) |
| `less +G file` | Open at end of file |
| `head -n 50 file` | First 50 lines |
| `tail -n 100 file` | Last 100 lines |
| `tail -n +2 file` | Everything from line 2 onwards |
| `tail -f file` | Follow file in real time |
| `tail -f file \| grep "pattern"` | Follow and filter live output |
| `wc -l file` | Count lines |
| `bat file` | Syntax-highlighted file view |
| `bat --line-range 50:100 file` | View specific line range |
| `diff -u file-a file-b` | Unified diff between two files |
| `diff -rq dir-a/ dir-b/` | Which files differ between two directories |
| `zcat file.gz` | cat for gzip-compressed files |
| `zgrep "pattern" file.gz` | grep for gzip-compressed files |
| `xxd file \| head` | Hex dump of a binary file |
| `strings file` | Extract printable strings from a binary |
