# Navigating and Understanding a Codebase Quickly

There's a moment every developer knows. You've just cloned a new repository — or been handed ownership of a project someone else wrote — and you're staring at a directory listing trying to figure out where anything is. Where's the entry point? Where do the tests live? What even *is* this `scripts/` folder?

Most developers handle this by opening the project in their IDE and clicking around. That works. But the terminal gives you something the IDE file tree doesn't: the ability to ask *precise questions* about a codebase and get immediate, scriptable answers.

This chapter is about building that orientation instinct at the command line — getting from "I have no idea what this project looks like" to "I understand its structure" as fast as possible.


## Getting the Lay of the Land with `tree`

The first thing you want when encountering a new codebase is a structural overview. The `ls` command will show you the contents of the current directory, but it's `tree` that gives you the full picture at a glance.

```bash
tree -L 2
```

The `-L 2` flag limits the output to two levels deep — enough to understand the top-level organization without drowning in every nested file. A typical output might look like this:

```
.
|-- src
|   |-- components
|   |-- services
|   |-- utils
|   `-- index.ts
|-- tests
|   |-- unit
|   `-- integration
|-- scripts
|-- package.json
|-- tsconfig.json
`-- README.md
```

In ten lines you've learned more about this project's structure than five minutes of IDE clicking would have told you. You can see it's a TypeScript project, it separates unit and integration tests, and there's a `scripts/` directory worth investigating.

To go deeper on a specific directory:

```bash
tree src/services
```

To exclude directories that are usually noise — `node_modules`, build output, `.git`:

```bash
tree -L 3 -I "node_modules|dist|.git"
```

The `-I` flag takes a pipe-separated pattern of names to ignore. This is one you'll use almost every time in a JavaScript or Python project.

If `tree` isn't installed on your system, you can get it with `brew install tree` on macOS or `apt install tree` on Ubuntu. It's worth adding to your standard developer setup.



## Targeted File Listing with `ls`

`tree` gives you the overview. `ls` gives you the details of a specific location — and with the right flags, it tells you quite a lot.

The version of `ls` most developers should be using day-to-day:

```bash
ls -lah
```

Breaking that down:
- `-l` — long format, showing permissions, owner, size, and modification date
- `-a` — show hidden files (dotfiles like `.env`, `.gitignore`, `.eslintrc`)
- `-h` — human-readable file sizes (`4.2K` instead of `4302`)

The modification date column is particularly useful when you're trying to understand what changed recently in a project:

```bash
ls -laht
```

Adding `-t` sorts by modification time, newest first. Run this in a directory and you immediately see what's been touched most recently — useful for understanding where active development is happening, or for finding a file you edited an hour ago but can't remember the name of.

To list only directories:

```bash
ls -d */
```

And to see the contents of a directory without changing into it:

```bash
ls -lah src/services/
```



## Finding Files with `find`

`tree` and `ls` are great for browsing. But when you know *what* you're looking for and just need to locate it, `find` is the right tool.

### Finding by name

```bash
find . -name "*.config.js"
```

This searches from the current directory (`.`) recursively for any file matching the pattern `*.config.js`. The quotes are important — without them, the shell may expand the glob before `find` sees it.

Case-insensitive search:

```bash
find . -iname "readme*"
```

### Finding by type

To find only directories named `tests`:

```bash
find . -type d -name "tests"
```

To find only files (not directories) with a `.env` extension:

```bash
find . -type f -name ".env*"
```

### Finding by modification time

This is where `find` starts to pull away from anything an IDE file tree can do. To find files modified in the last 24 hours:

```bash
find . -mtime -1
```

Files modified more than 7 days ago:

```bash
find . -mtime +7
```

Files modified between 2 and 5 days ago:

```bash
find . -mtime +2 -mtime -5
```

This is invaluable when you're debugging a production issue and need to answer the question: *what changed recently?*

### Excluding noisy directories

Like `tree`, `find` will happily descend into `node_modules` unless you tell it not to:

```bash
find . -name "*.ts" -not -path "*/node_modules/*" -not -path "*/dist/*"
```

### Combining `find` with actions

`find` becomes dramatically more powerful when you pair it with `-exec` to run a command on each result:

```bash
find . -name "*.log" -exec rm {} \;
```

This finds every `.log` file and deletes it. The `{}` is a placeholder for the filename, and `\;` ends the `-exec` expression.

A safer pattern when you're not sure what you're about to delete — preview first:

```bash
find . -name "*.log"          # see what would be affected
find . -name "*.log" -exec rm {} \;   # then act
```

We'll return to `find` and `-exec` in later chapters when we cover batch operations. For now, the key mental model is: `find` locates; `-exec` acts.



## Understanding Files Before Opening Them

Before you open a file, two tools can tell you a lot about what you're dealing with.

### `file` — what kind of file is this?

```bash
file some-binary
```

```
some-binary: ELF 64-bit LSB executable, x86-64, dynamically linked
```

```bash
file mystery-data
```

```
mystery-data: gzip compressed data, was "backup.tar", last modified: Mon Feb 12 09:14:22 2024
```

This is particularly useful when you encounter files without extensions, or when a file isn't behaving the way you expect. Before spending ten minutes trying to open something, a quick `file` check tells you exactly what you're dealing with.

### `stat` — metadata about a file

```bash
stat src/index.ts
```

```
  File: src/index.ts
  Size: 3421      	Blocks: 8          IO Block: 4096   regular file
Device: fd01h/64769d	Inode: 2894732     Links: 1
Access: (0644/-rw-r--r--)  Uid: ( 1000/   alice)   Gid: ( 1000/   alice)
Access: 2024-03-12 09:14:22.000000000 +0000
Modify: 2024-03-11 17:43:09.000000000 +0000
Change: 2024-03-11 17:43:09.000000000 +0000
```

The three timestamps at the bottom are often what you're after: when the file was last accessed, when its content was last modified, and when its metadata last changed. This is more precise than what `ls` shows, and it's scriptable — you can extract individual fields:

```bash
stat -c "%n %y" src/*.ts
```

This prints the name and last-modified time for every TypeScript file in `src/` — useful for a quick audit of recently touched files.



## Putting It Together: A Real Workflow

Here's how these tools work together in practice. Imagine you've just been asked to investigate a bug in an unfamiliar service. Your first five minutes at the terminal might look like this:

```bash
# Get the overall structure
tree -L 2 -I "node_modules|dist|.git"

# Understand what's been touched recently
ls -laht src/

# Find the entry point
find . -name "index.*" -not -path "*/node_modules/*"

# Find any config files that might affect behavior
find . -name "*.config.*" -not -path "*/node_modules/*"

# Check if there are any files that changed in the last day
find . -mtime -1 -not -path "*/node_modules/*" -not -path "*/.git/*"
```

In under two minutes, without opening a single file, you have a clear picture of the project's structure, what it's built with, and what changed recently. That's a foundation you can investigate from.



## Modern Alternatives Worth Knowing

The tools covered in this chapter are available on virtually every Unix system. But a few modern alternatives are worth knowing about, particularly if you're setting up a new development machine.

**`eza` (formerly `exa`)** is a modern replacement for `ls`, written in Rust. It has better defaults, color-coded output by file type, built-in Git status indicators next to each file, and a tree view mode that combines what `ls` and `tree` do separately:

```bash
eza --tree --level=2 --git-ignore
```

**`broot`** is an interactive tree navigator that lets you browse, search, and open files all from a single interface. It's particularly good for very large codebases where `tree` output becomes overwhelming.

**`fd`** is a modern alternative to `find` with a simpler syntax, faster performance, and `.gitignore` awareness by default:

```bash
fd "*.config.js"           # equivalent to: find . -name "*.config.js"
fd -t d tests              # find directories named "tests"
fd --changed-within 1d     # files modified in the last day
```

If you're working on a new machine, `fd` and `eza` are both worth installing. That said, `find` and `ls` are available everywhere — on production servers, in CI environments, in Docker containers — and fluency with them is non-negotiable. Learn the classics first, then layer in the modern tools where they help.



## Chapter Summary

The tools in this chapter — `tree`, `ls`, `find`, `file`, and `stat` — are your orientation layer. They answer the question *what is this codebase?* before you ever open a file. Used together, they can give you a remarkably complete picture of an unfamiliar project in just a few minutes.

The key habits to build:

- Start every new project or investigation with `tree -L 2 -I "node_modules|dist|.git"`
- Use `ls -laht` to see what's been recently modified in a directory
- Use `find` with `-mtime` when you need to know what changed and when
- Check `file` before assuming you know what an unfamiliar file contains
- Build `find` commands incrementally — preview before you act



## Exercises

**1.** Clone any open source project you haven't worked with before. Use `tree`, `ls`, and `find` to answer these questions without opening any file in an editor: What language is it written in? Where do the tests live? Are there any hidden configuration files in the root?

**2.** Find all files in a project that were modified in the last 3 days, excluding `node_modules` (it it's a node project) and `.git`.

**3.** Use `find` with `-exec` to list the line count (using `wc -l`) of every `.js` file in a project.

**4.** Install `eza` and compare its output to `ls -lah` on the same directory. Which information does each show that the other doesn't?



## Quick Reference

| Command | What it does |
| --- | --- |
| `tree -L 2 -I "node_modules\|dist"` | Project structure, 2 levels deep, ignoring noise |
| `ls -laht` | Directory listing sorted by modification time |
| `find . -name "*.ts"` | Find all TypeScript files recursively |
| `find . -mtime -1` | Files modified in the last 24 hours |
| `find . -type d -name "tests"` | Find directories named "tests" |
| `find . -name "*.log" -exec rm {} \;` | Find and delete all log files |
| `file mystery-file` | Identify what kind of file something is |
| `stat src/index.ts` | Full metadata including timestamps |
