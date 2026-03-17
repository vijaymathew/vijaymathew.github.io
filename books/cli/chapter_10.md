# Composing Tools with Pipes and Redirection

Every tool in this book has been useful on its own. `rg` finds patterns. `jq` transforms JSON. `sed` edits streams. `awk` processes columns. `curl` makes HTTP requests. But if you've been paying attention, you've noticed that the most powerful examples in every chapter weren't single commands — they were chains. `rg` feeding into `sort`, feeding into `uniq`, feeding into `head`. `curl` feeding into `jq`, feeding into another `curl`. `find` feeding into `xargs`, feeding into `sed`.

That chaining is not a coincidence or a stylistic choice. It's the central design principle of Unix, articulated by Doug McIlroy in 1964 and built into every tool ever written for the platform since: *write programs that do one thing well, write programs that work together, and write programs that handle text streams, because that is a universal interface.*

The pipe — the `|` character — is the mechanism that makes "work together" possible. Redirection operators extend it to files. `xargs` bridges the gap between tools that weren't designed to connect. And process substitution handles the cases where the model needs to bend.

This chapter is about understanding these mechanisms deeply enough that composing tools becomes instinctive — not something you look up, but something you reach for automatically whenever a problem involves more than one step.


## The Unix Philosophy in Practice

Before the mechanics, the mental model. Unix tools are designed around three standard streams:

- **stdin** (standard input, file descriptor 0) — where a program reads input from
- **stdout** (standard output, file descriptor 1) — where a program writes normal output
- **stderr** (standard error, file descriptor 2) — where a program writes error messages

By default, stdin comes from the keyboard, and stdout and stderr go to the terminal. The pipe operator redirects stdout from one program into stdin of the next — connecting them without either program knowing or caring that the connection exists.

This is the key insight: `grep` doesn't know whether it's reading from a file, from a pipe, or from a network socket. It just reads stdin and writes stdout. That ignorance is what makes composition possible — any tool that reads stdin and writes stdout can be connected to any other tool that does the same.

```bash
command1 | command2 | command3
```

`command1` writes to stdout. The pipe redirects that into `command2`'s stdin. `command2` processes it and writes to its own stdout. The pipe redirects that into `command3`'s stdin. `command3` produces the final output.

Each step is independent. Each step can be tested alone. And the whole pipeline does something none of the steps could do individually.



## The Pipe Operator `|`

The pipe is the most important character in the Unix terminal. Here's how to think about it and use it effectively.

### Basic piping

```bash
# Count lines in a file
cat access.log | wc -l

# Find and count unique values
cat access.log | awk '{print $9}' | sort | uniq -c | sort -rn

# Search and view with paging
rg "ERROR" logs/ | less

# Filter and format
ps aux | grep node | awk '{print $1, $2, $11}'
```

### Building pipelines incrementally

The right way to build a pipeline is one step at a time. Start with the first command and verify its output. Add the second command and verify. Continue until the pipeline does what you want.

Suppose you want to find the ten most common IP addresses in an access log that returned 500 errors:

```bash
# Step 1: look at the raw data
head -5 access.log

# Step 2: extract the status code and IP
awk '{print $1, $9}' access.log | head -5

# Step 3: filter to 500s only
awk '{print $1, $9}' access.log | awk '$2 == 500 {print $1}' | head -5

# Step 4: count and sort
awk '{print $1, $9}' access.log | awk '$2 == 500 {print $1}' | sort | uniq -c | sort -rn | head -10
```

Each step builds on the last. If something looks wrong, you can remove the last command and inspect the intermediate output. This incremental approach is how experienced terminal users build even complex pipelines — not in one shot, but one verified step at a time.

### Pipelines are not sequential — they're concurrent

An important and often misunderstood point: commands in a pipeline run simultaneously, not one after another. The moment `command1` starts writing output, `command2` starts reading it. This means a pipeline like:

```bash
cat huge-file.log | grep "ERROR" | wc -l
```

doesn't wait for `cat` to finish before starting `grep`. All three commands run at once, with data flowing between them. For large files, this is significantly faster than processing sequentially would be — and it means you can pipe the output of a long-running command into `less` and start reading before the command finishes.



## Redirection Operators

Pipes connect commands to each other. Redirection operators connect commands to files.

### Output redirection

```bash
command > file.txt          # redirect stdout to file (overwrite)
command >> file.txt         # redirect stdout to file (append)
command 2> errors.txt       # redirect stderr to file
command 2>> errors.txt      # append stderr to file
command > file.txt 2>&1     # redirect both stdout and stderr to file
command &> file.txt         # same, bash shorthand
command > /dev/null         # discard stdout
command 2> /dev/null        # discard stderr
command &> /dev/null        # discard all output
```

The `2>&1` syntax is worth understanding deeply. `2>` redirects file descriptor 2 (stderr). `&1` means "to wherever file descriptor 1 (stdout) is currently going." So `> file.txt 2>&1` means "redirect stdout to file.txt, then redirect stderr to wherever stdout is going" — which is also file.txt. Order matters: `2>&1 > file.txt` does something different (redirects stderr to the terminal, then stdout to the file).

### Input redirection

```bash
command < file.txt          # read stdin from file
command < input.txt > output.txt    # read from file, write to file
```

Input redirection is less common than output redirection — most tools accept filenames directly. But it's useful with commands that only read from stdin:

```bash
# Send an email with body from a file
mail -s "Report" alice@example.com < report.txt

# Feed SQL from a file to a database client
psql mydb < schema.sql
```

### Here documents and here strings

A here document (`<<`) lets you provide multi-line input to a command inline:

```bash
cat << EOF
Hello, world.
This is a multi-line
here document.
EOF

# With variable substitution
name="Alice"
cat << EOF
Dear $name,
Your report is ready.
EOF

# Without variable substitution (quoted delimiter)
cat << 'EOF'
This $variable will not be expanded.
EOF
```

Here documents are used constantly in shell scripts for generating configuration files, SQL queries, and API payloads:

```bash
# Generate a config file
cat > config.yaml << EOF
database:
  host: $DB_HOST
  port: $DB_PORT
  name: $DB_NAME
EOF

# Run a multi-line SQL query
psql mydb << EOF
BEGIN;
UPDATE users SET active = false WHERE last_login < NOW() - INTERVAL '90 days';
DELETE FROM sessions WHERE expires_at < NOW();
COMMIT;
EOF
```

A here string (`<<<`) is a single-line variant that feeds a string directly to a command's stdin:

```bash
wc -w <<< "count the words in this string"
base64 --decode <<< "SGVsbG8gV29ybGQ="
jq '.' <<< '{"name":"Alice","role":"admin"}'
```



## `xargs`: Bridging the Gap

The pipe model works perfectly when the receiving command reads from stdin. But many commands don't read from stdin — they take arguments. `find`, `rm`, `cp`, `mv`, `grep` with a list of files — these commands expect their input as command-line arguments, not on stdin.

`xargs` bridges this gap. It reads items from stdin and passes them as arguments to a command:

```bash
# Delete all .log files found by find
find . -name "*.log" | xargs rm

# Search for a pattern in files found by rg
rg "TODO" -l | xargs grep -l "FIXME"

# Count lines in all TypeScript files
find . -name "*.ts" | xargs wc -l

# Run prettier on all changed files
git diff --name-only | xargs npx prettier --write
```

### Handling filenames with spaces

The default `xargs` splits on any whitespace, which breaks filenames containing spaces. The `-0` flag (combined with `find`'s `-print0` or `rg`'s `--null`) uses null bytes as delimiters instead:

```bash
find . -name "*.ts" -print0 | xargs -0 wc -l
rg "TODO" -l --null | xargs -0 grep -l "FIXME"
```

This is the safe form to use in scripts — it handles all filenames correctly regardless of what characters they contain.

### Controlling argument placement with `-I`

By default, `xargs` appends arguments at the end of the command. The `-I` flag lets you specify exactly where they go using a placeholder:

```bash
# The {} placeholder is replaced with each argument
find . -name "*.ts" | xargs -I {} cp {} {}.backup

# Open each found file in vim sequentially
rg "TODO" -l | xargs -I {} vim {}

# Create a directory structure
echo -e "src\ntests\ndocs" | xargs -I {} mkdir -p {}
```

### Parallel execution with `-P`

`xargs` can run multiple instances of a command in parallel with `-P`:

```bash
# Process 4 files at once
find . -name "*.jpg" | xargs -P 4 -I {} convert {} -resize 800x600 {}.resized

# Run tests in parallel across multiple files
find tests/ -name "*.test.ts" | xargs -P 8 -I {} npx jest {}
```

`-P 4` runs up to 4 processes simultaneously. Combined with `-I {}`, each file gets its own process instance. For CPU-bound or IO-bound batch operations, this can dramatically reduce total processing time.

### `-n`: controlling argument count

By default, `xargs` passes as many arguments as possible to each invocation. `-n` limits how many arguments each invocation receives:

```bash
echo "a b c d e f" | xargs -n 2 echo    # runs: echo a b, echo c d, echo e f
```

This is useful when a command has a maximum number of arguments it can handle, or when you want to process items one at a time:

```bash
cat urls.txt | xargs -n 1 curl -sO      # download each URL one at a time
```



## Advanced Redirection Patterns

### Redirecting to multiple destinations with `tee`

We covered `tee` in Chapter 4 in the context of file editing. Here's how it fits into the broader redirection picture.

`tee` reads stdin and writes it to both stdout *and* one or more files simultaneously — splitting the stream:

```bash
make build 2>&1 | tee build.log          # see output and save to file
npm test | tee test-results.txt | grep -E "PASS|FAIL"    # save full output, show summary
```

`tee` with process substitution (covered next) can split a stream into multiple pipelines:

```bash
cat access.log | tee \
  >(grep "ERROR" | wc -l > error-count.txt) \
  >(grep "200" | wc -l > success-count.txt) \
  >(awk '{print $1}' | sort | uniq > unique-ips.txt) \
  > /dev/null
```

This reads the log file once and produces three output files simultaneously — error count, success count, and unique IPs. Without `tee` and process substitution, you'd need to read the file three times.

### Process substitution `<()` and `>()`

Process substitution is one of the more powerful but less commonly known bash features. It allows a command's output or input to be treated as a file:

```bash
# <() — treat command output as a file
diff <(sort file1.txt) <(sort file2.txt)      # diff sorted versions of two files
diff <(ssh server1 cat /etc/hosts) <(ssh server2 cat /etc/hosts)  # diff remote files
comm <(sort list1.txt) <(sort list2.txt)      # find common and unique lines

# >() — treat a file argument as a command's stdin
tee >(gzip > output.gz) > /dev/null           # compress output on the fly
echo "data" | tee >(wc -w) >(wc -c) > /dev/null   # count words and chars simultaneously
```

Process substitution is useful whenever a command requires a filename argument but you want to provide processed output instead of an actual file — without creating a temporary file.

### Named pipes (FIFOs)

For more complex inter-process communication, named pipes (FIFOs) let unrelated processes communicate through the filesystem:

```bash
# Create a named pipe
mkfifo /tmp/mypipe

# In terminal 1: write to the pipe
command1 > /tmp/mypipe

# In terminal 2: read from the pipe
command2 < /tmp/mypipe

# Clean up
rm /tmp/mypipe
```

Named pipes are less commonly needed than anonymous pipes, but they're the right tool when two processes can't easily be connected with `|` — for example, when they're running in different terminal sessions or started by different mechanisms.



## Stderr and Error Handling in Pipelines

Stderr and pipelines interact in ways that catch developers by surprise.

### Stderr bypasses pipes

By default, stderr is not passed through pipes — it goes directly to the terminal even when stdout is being piped:

```bash
# Only stdout goes to grep; errors appear on terminal regardless
find /etc -name "*.conf" 2>/dev/null | grep "ssh"

# Capture both stdout and stderr in the pipe
find /etc -name "*.conf" 2>&1 | grep "ssh"
```

Whether you want to include stderr in a pipeline depends on the situation. When processing command output, you usually want to suppress error messages with `2>/dev/null`. When debugging a failing command, you want to capture everything with `2>&1`.

### Pipeline exit codes

By default, a pipeline's exit code is the exit code of the *last* command. This means a failing command in the middle of a pipeline can go unnoticed:

```bash
# This exits 0 even if rg fails (because wc -l succeeds)
rg "pattern" nonexistent-dir | wc -l
echo $?    # 0 — misleadingly indicates success
```

`set -o pipefail` (which we covered in Chapter 7 as part of `set -euo pipefail`) changes this — it makes a pipeline fail if *any* command in it fails:

```bash
set -o pipefail
rg "pattern" nonexistent-dir | wc -l
echo $?    # non-zero — correctly reflects the rg failure
```

Always use `set -euo pipefail` in scripts. The `pipefail` option in particular prevents a whole class of silent failures in multi-step pipelines.

### Checking individual pipeline exit codes with `PIPESTATUS`

In bash, `PIPESTATUS` is an array containing the exit codes of each command in the most recent pipeline:

```bash
command1 | command2 | command3
echo "${PIPESTATUS[@]}"          # e.g., "0 1 0" — command2 failed
echo "${PIPESTATUS[0]}"          # exit code of command1
echo "${PIPESTATUS[1]}"          # exit code of command2
```

This is useful in scripts that need to handle failures in specific pipeline stages differently:

```bash
rg "ERROR" logs/ | sort | uniq -c | sort -rn > error-report.txt
rg_status=${PIPESTATUS[0]}

if [ $rg_status -eq 1 ]; then
  echo "No errors found — report is empty"
elif [ $rg_status -ne 0 ]; then
  echo "Search failed with code $rg_status" >&2
  exit 1
fi
```



## Building One-Liners That Replace Scripts

The highest expression of the Unix pipeline model is the one-liner: a single command that performs a complete, meaningful task. One-liners aren't about showing off — they're about solving a problem at the speed of thought, without creating a file, opening an editor, or writing boilerplate.

Here are patterns that come up repeatedly in real development work, with the reasoning that connects each step.

### Log analysis

```bash
# Top 10 most frequent errors in the last hour
grep "$(date '+%Y-%m-%d %H')" app.log \
  | grep "ERROR" \
  | awk '{$1=$2=$3=""; print $0}' \
  | sort | uniq -c | sort -rn \
  | head -10
```

Step by step: filter to the current hour -> filter to errors -> strip timestamps -> count occurrences -> sort by frequency -> show top 10.

```bash
# Response time percentiles from an access log
awk '{print $NF}' access.log \
  | sort -n \
  | awk 'BEGIN{c=0} {a[c++]=$1} END{
      print "p50:", a[int(c*0.5)],
      "p95:", a[int(c*0.95)],
      "p99:", a[int(c*0.99)]
    }'
```

### Code analysis

```bash
# Find the most complex files (by line count) excluding generated code
find . -name "*.ts" \
  -not -path "*/node_modules/*" \
  -not -path "*/dist/*" \
  -not -name "*.d.ts" \
  | xargs wc -l \
  | sort -rn \
  | head -20
```

```bash
# Count TODOs per author using git blame
git ls-files "*.ts" \
  | xargs grep -l "TODO" \
  | xargs -I {} git blame --line-porcelain {} \
  | grep "^author " \
  | sort | uniq -c | sort -rn
```

```bash
# Find duplicate function names across the codebase
rg "^(export )?function \w+" --type ts -o \
  | sed 's/.*:export function //' \
  | sed 's/.*:function //' \
  | sort | uniq -d
```

### Data processing

```bash
# Sum a column in a CSV, skipping the header
tail -n +2 sales.csv \
  | awk -F',' '{sum += $3} END {printf "Total: $%.2f\n", sum}'
```

```bash
# Find all unique dependency versions across a monorepo
find . -name "package.json" \
  -not -path "*/node_modules/*" \
  | xargs jq -r '.dependencies // {} | to_entries[] | "\(.key)@\(.value)"' \
  | sort | uniq -c | sort -rn \
  | awk '$1 > 1'    # show only packages with multiple versions
```

```bash
# Convert a .env file to JSON (for use with a config service)
cat .env \
  | grep -v '^#' \
  | grep '=' \
  | awk -F'=' '{print $1"="$2}' \
  | jq -Rn '[inputs | split("=") | {(.[0]): .[1:] | join("=")}] | add'
```

### System investigation

```bash
# Find the largest directories in the current tree
du -sh */ 2>/dev/null \
  | sort -rh \
  | head -10
```

```bash
# Find files changed in the last 24 hours, sorted by modification time
find . -mtime -1 \
  -not -path "*/.git/*" \
  -not -path "*/node_modules/*" \
  | xargs ls -lt 2>/dev/null \
  | head -20
```

```bash
# Summarize git activity by author for the past month
git log --since="1 month ago" --format="%an" \
  | sort | uniq -c | sort -rn
```



## Composing the Tools From This Book

The real value of understanding pipes and redirection is that it multiplies the value of everything else you've learned. Here's how the tools from previous chapters combine:

### Chapter 1 (navigation) + Chapter 2 (search) + Chapter 9 (pipes)

```bash
# Find all TypeScript files modified this week, search them for a pattern,
# and open the results in less
find . -name "*.ts" -mtime -7 -not -path "*/node_modules/*" \
  | xargs rg "useEffect" -l \
  | xargs rg "useEffect" -n \
  | less
```

### Chapter 3 (reading) + Chapter 4 (editing) + Chapter 9 (pipes)

```bash
# Read a log file, extract error messages, clean them up, and save a report
tail -n 10000 app.log \
  | grep "ERROR" \
  | sed 's/\[ERROR\] //' \
  | sed 's/[0-9]\{4\}-[0-9]\{2\}-[0-9]\{2\}T[0-9:\.Z]*//g' \
  | sort | uniq -c | sort -rn \
  | tee error-report.txt \
  | head -20
```

### Chapter 5 (git) + Chapter 6 (APIs) + Chapter 9 (pipes)

```bash
# Get the last 5 commit hashes, fetch CI status for each from GitHub API,
# and display a summary
git log --oneline -5 --format="%H %s" | while read -r sha message; do
  status=$(curl -s \
    -H "Authorization: Bearer $GITHUB_TOKEN" \
    "https://api.github.com/repos/org/repo/commits/$sha/status" \
    | jq -r '.state')
  printf "%-10s %-8s %s\n" "${sha:0:7}" "$status" "$message"
done
```

### Chapter 7 (automation) + Chapter 8 (process management) + Chapter 9 (pipes)

```bash
# Run tests in parallel, collect results, kill all if any fail
find tests/ -name "*.test.ts" -print0 \
  | xargs -0 -P 4 -I {} sh -c \
    'timeout 60 npx jest {} --json 2>/dev/null || echo "FAILED: {}"' \
  | tee test-output.log \
  | grep "FAILED" \
  | head -5
```



## When Not to Use a Pipeline

Pipelines are powerful, but they're not always the right tool. Knowing when *not* to use them is as important as knowing how.

**When you need error handling at each step.** Pipelines don't make it easy to handle errors from intermediate commands differently. If you need to know whether step 3 of 7 failed and respond specifically to that failure, a script with explicit error checks is clearer and more maintainable than a pipeline with `PIPESTATUS` gymnastics.

**When the logic becomes unreadable.** A seven-command pipeline where each command has multiple flags and options is hard to debug, hard to modify, and hard for colleagues to understand. The threshold is fuzzy, but when you find yourself spending more time deciphering a pipeline than it would take to write it as a proper script, write the script.

**When you need to process the same data multiple times.** Pipelines are single-pass. If you need to make three different analyses of the same large dataset, running three separate pipelines means reading the data three times. In that case, save the intermediate result to a file and process it multiple times — or use `tee` with process substitution to split the stream.

**When you need structured data across steps.** Pipelines pass text. If your intermediate data has complex structure that's awkward to represent as text, passing it through a pipeline means serializing and deserializing at each step. At some point, a proper script or program that keeps data in memory as structured objects is the better choice.

The Unix pipeline model is one of the best tools ever designed for text processing and command composition. It's not a replacement for all other forms of programming — it's a complement to them.



## Chapter Summary

The pipe and redirection system is the connective tissue of the Unix toolkit. Individual commands are useful. Commands composed into pipelines are transformative. The tools you've learned throughout this book — `rg`, `jq`, `sed`, `awk`, `curl`, `git`, `find`, `xargs` — reach their full potential only when combined.

The key habits to build:

- Build pipelines incrementally — verify each step before adding the next
- Always use `set -o pipefail` in scripts — silent pipeline failures cause some of the hardest-to-debug problems
- Use `2>/dev/null` to suppress noise when you only care about successful output; use `2>&1` when you need to capture everything
- Reach for `xargs -0` with `find -print0` or `rg --null` — null-delimited is always the safe choice for filenames
- Use `tee` when you need both to see output and save it — don't choose between them
- Know when to stop: a pipeline that requires five minutes of reading to understand should probably be a script



## Exercises

**1.** Build a pipeline incrementally: start with `ps aux`, then add a filter to show only your own processes, then extract just the PID and command name columns, then sort by memory usage. Verify the output at each step before adding the next command.

**2.** Use `tee` and process substitution to read a log file once and simultaneously produce three files: one containing only ERROR lines, one containing only WARN lines, and one containing a count of each log level.

**3.** Use `xargs -P` to process a batch of files in parallel. Try converting a directory of text files to uppercase using `tr` — run it with `-P 1`, `-P 4`, and `-P 8` and compare the time with the `time` command.

**4.** Write a pipeline that uses `git log`, `awk`, `sort`, and `uniq` to produce a leaderboard of commit counts by author for the current repository.

**5.** Find a multi-step task you currently do manually or with a script. Rewrite it as a pipeline. Then consider: is the pipeline clearer than the script? Faster? Harder to maintain? When would you choose each form?



## Quick Reference

### Pipes and redirection
| Operator | What it does |
|||
| `cmd1 \| cmd2` | Pipe stdout of cmd1 to stdin of cmd2 |
| `cmd > file` | Redirect stdout to file (overwrite) |
| `cmd >> file` | Redirect stdout to file (append) |
| `cmd 2> file` | Redirect stderr to file |
| `cmd > file 2>&1` | Redirect stdout and stderr to file |
| `cmd &> file` | Same, bash shorthand |
| `cmd > /dev/null` | Discard stdout |
| `cmd 2> /dev/null` | Discard stderr |
| `cmd < file` | Read stdin from file |
| `cmd << EOF` | Here document (multi-line stdin) |
| `cmd <<< "string"` | Here string (single-line stdin) |

### Composition tools
| Command | What it does |
|||
| `cmd \| tee file` | Write to file and pass through to stdout |
| `cmd \| tee >(cmd2)` | Split stream to another pipeline |
| `diff <(cmd1) <(cmd2)` | Diff output of two commands |
| `cmd1 \| xargs cmd2` | Pass stdin items as arguments |
| `find . -print0 \| xargs -0 cmd` | Null-safe argument passing |
| `xargs -I {} cmd {}` | Control argument placement |
| `xargs -P 4 cmd` | Run 4 parallel instances |
| `xargs -n 1 cmd` | One argument per invocation |

### Error handling
| Pattern | What it does |
|||
| `set -o pipefail` | Fail pipeline if any command fails |
| `echo "${PIPESTATUS[@]}"` | Exit codes of last pipeline's commands |
| `cmd 2>&1 \| grep "ERROR"` | Include stderr in pipe |
| `cmd 2>/dev/null \| next` | Suppress errors, pipe only stdout |
