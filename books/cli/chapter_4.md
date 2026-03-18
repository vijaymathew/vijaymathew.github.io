# Editing Files from the Terminal

Reading files is passive. At some point you need to change them — rename a variable across an entire codebase, strip headers from a batch of CSV files, reformat log output, update a configuration value in a dozen places at once. This is where most developers reach for their IDE's find-and-replace, or write a throwaway Python script, or do it manually and hate every second of it.

The terminal has better answers. `sed` and `awk` are stream editors — tools designed to transform text as it flows through a pipeline. They're not interactive editors. You don't open a file, move a cursor, and save. Instead, you describe a transformation, apply it to a stream of text, and the result comes out the other side. That difference in mental model is what makes them so powerful: the same transformation you apply to one file can be applied to ten thousand files just as easily.

This chapter covers `sed`, `awk`, and a handful of supporting tools that together give you everything you need to edit files from the terminal — from simple substitutions to complex structural transformations.


## `sed`: Stream Editing

`sed` stands for *stream editor*. It reads input line by line, applies a transformation to each line, and writes the result to standard output. The most common transformation — the one you'll use in probably 80% of your `sed` invocations — is substitution.

### Basic substitution

```bash
sed 's/old/new/' file.txt
```

The `s` command means substitute. The syntax is `s/pattern/replacement/`. By default, this replaces the *first* occurrence of the pattern on each line and prints the result to stdout. The original file is untouched.

To replace *all* occurrences on each line, add the `g` (global) flag:

```bash
sed 's/old/new/g' file.txt
```

To make the substitution case-insensitive:

```bash
sed 's/old/new/gi' file.txt
```

### In-place editing

Printing to stdout is useful in pipelines, but most of the time you want to edit the file itself. The `-i` flag enables in-place editing:

```bash
sed -i 's/old/new/g' file.txt
```

On macOS, `-i` requires an extension argument for the backup file. Use an empty string to skip the backup:

```bash
sed -i '' 's/old/new/g' file.txt    # macOS
sed -i 's/old/new/g' file.txt       # Linux
```

This is a cross-platform difference worth memorizing — it's the most common reason `sed` commands copied from the internet fail on macOS.

Always preview before editing in place. Run the command without `-i` first to confirm the output looks right, then add `-i` to commit the change:

```bash
sed 's/apiUrl/API_URL/g' src/config.ts        # preview
sed -i '' 's/apiUrl/API_URL/g' src/config.ts  # commit
```

### Renaming across an entire codebase

Combined with `find` and `xargs`, `sed` becomes a codebase-wide refactoring tool:

```bash
find . -name "*.ts" -not -path "*/node_modules/*" \
  | xargs sed -i '' 's/getUserById/fetchUserById/g'
```

This renames `getUserById` to `fetchUserById` in every TypeScript file in the project. A task that would take ten minutes of IDE find-and-replace across multiple files takes one command.

Be careful with names that appear as substrings of other names — `sed` doesn't understand code, only text. The pattern `getUserById` would also match inside `getUserByIdAndRole` if that existed. Use word boundaries to be safe:

```bash
# macOS (uses \b for word boundary in extended regex)
find . -name "*.ts" | xargs sed -i '' 's/\bgetUserById\b/fetchUserById/g'

# Linux (GNU sed)
find . -name "*.ts" | xargs sed -i 's/\bgetUserById\b/fetchUserById/g'
```

### Deleting lines

`sed` can delete lines matching a pattern:

```bash
sed '/console\.log/d' src/index.ts
```

The `d` command deletes lines matching the pattern. This removes every `console.log` line from the output. Combined with `-i`:

```bash
find . -name "*.ts" | xargs sed -i '' '/console\.log/d'
```

Strips all `console.log` statements from your TypeScript codebase before a commit. A blunt instrument — use with care — but occasionally exactly what you need.

To delete blank lines:

```bash
sed '/^$/d' file.txt
```

`^$` matches lines that are empty from start (`^`) to end (`$`).

### Printing specific lines

The `-n` flag suppresses default output, and the `p` command prints matching lines — together they let you extract specific lines from a file:

```bash
sed -n '10,20p' file.ts          # print lines 10 through 20
sed -n '/function handleAuth/p' file.ts   # print lines matching pattern
```

This is an alternative to `head`/`tail` for extracting specific line ranges, and more flexible because it supports pattern matching.

### Inserting and appending text

`sed` can insert a line before a match (`i`) or append a line after it (`a`):

```bash
# Insert a comment before every function declaration
sed '/^function /i\// Auto-generated' src/utils.ts

# Append a blank line after every closing brace
sed '/^}/a\\' src/utils.ts
```

These are less commonly used in day-to-day development, but they're invaluable for code generation and template processing scripts.

### Multiple expressions

Run multiple `sed` expressions in one pass with `-e`:

```bash
sed -e 's/foo/bar/g' -e 's/baz/qux/g' file.txt
```

Or equivalently, separate expressions with semicolons:

```bash
sed 's/foo/bar/g; s/baz/qux/g' file.txt
```



## `awk`: Structured Text Processing

If `sed` is a scalpel — precise, focused, best for specific line-by-line transformations — `awk` is a Swiss Army knife. It's a full programming language built around the idea of processing structured text: files where data is organized into rows and columns, like CSV files, log files, or command output.

The mental model for `awk` is simple: it reads input line by line, splits each line into fields, and executes a program for each line. That program can filter, transform, calculate, and reformat the data any way you need.

### Basic field extraction

The most common use of `awk` is extracting specific columns from structured output:

```bash
ls -lah | awk '{print $5, $9}'
```

`$1`, `$2`, `$3`... refer to the first, second, third fields of each line (split on whitespace by default). `$0` refers to the entire line. `$NF` refers to the last field (NF stands for Number of Fields).

This extracts the file size (`$5`) and filename (`$9`) from `ls -lah` output — a clean two-column view instead of the full listing.

```bash
ps aux | awk '{print $1, $2, $11}'    # user, PID, and command name
```

### Changing the field separator

For CSV files or other delimited formats, use `-F` to set the field separator:

```bash
awk -F',' '{print $1, $3}' data.csv          # extract columns 1 and 3
awk -F':' '{print $1}' /etc/passwd           # extract usernames
awk -F'\t' '{print $2}' data.tsv             # tab-delimited files
```

### Filtering with conditions

`awk` programs consist of `condition { action }` pairs. The action runs only when the condition is true:

```bash
# Print lines where the third field is greater than 1000
awk '$3 > 1000 {print $0}' data.csv

# Print lines where the second field matches a pattern
awk '$2 ~ /ERROR/ {print $0}' logs/app.log

# Print lines where the fifth field equals "admin"
awk '$5 == "admin" {print $1, $2}' users.csv
```

The `~` operator is a regex match. `!~` is its inverse (does not match).

### Built-in patterns: BEGIN and END

`awk` has two special patterns: `BEGIN` runs before any input is processed, and `END` runs after all input is processed. These are used for headers, footers, and aggregations:

```bash
# Print a header, then process data, then print a summary
awk 'BEGIN {print "Name, Size"} {print $9, $5} END {print "Done"}' <(ls -lah)
```

### Calculating totals

`awk`'s ability to accumulate values across lines makes it the right tool for quick aggregations:

```bash
# Sum the third column of a CSV
awk -F',' '{sum += $3} END {print "Total:", sum}' sales.csv

# Count lines matching a pattern
awk '/ERROR/ {count++} END {print count, "errors"}' app.log

# Average response time from a log file
awk '{sum += $NF; count++} END {print "Average:", sum/count, "ms"}' access.log
```

### Reformatting output

`awk`'s `printf` gives you full control over output formatting:

```bash
awk -F',' '{printf "%-20s %10.2f\n", $1, $3}' sales.csv
```

`%-20s` left-aligns a string in a 20-character field. `%10.2f` right-aligns a floating-point number with two decimal places in a 10-character field. This produces clean columnar output from messy CSV data.

### A practical example: parsing access logs

Apache and Nginx access logs are structured text — a perfect target for `awk`. A typical log line looks like:

```
192.168.1.1 - - [12/Mar/2024:09:14:22 +0000] "GET /api/users HTTP/1.1" 200 1423
```

Extracting useful information:

```bash
# Count requests by status code
awk '{print $9}' access.log | sort | uniq -c | sort -rn

# Find the top 10 most requested URLs
awk '{print $7}' access.log | sort | uniq -c | sort -rn | head -10

# Calculate total bytes transferred
awk '{sum += $10} END {print sum / 1024 / 1024, "MB"}' access.log

# Find all IPs that generated 500 errors
awk '$9 == 500 {print $1}' access.log | sort | uniq
```

These one-liners replace what would otherwise require a dedicated log analysis script. They run in seconds even on log files with millions of lines.



## `tr`: Translating Characters

`tr` (translate) is a smaller, more focused tool that transforms individual characters. It doesn't understand lines or fields — it operates character by character on a stream.

### Basic character translation

```bash
echo "hello world" | tr 'a-z' 'A-Z'     # lowercase to uppercase
echo "Hello World" | tr 'A-Z' 'a-z'     # uppercase to lowercase
```

### Deleting characters

```bash
echo "hello, world!" | tr -d '[:punct:]'   # remove punctuation
echo "phone: (555) 123-4567" | tr -d '()-. '  # extract digits
cat file.txt | tr -d '\r'                  # remove Windows carriage returns
```

The last example — removing `\r` characters — is one of the most practical uses of `tr` in development. When a file created on Windows is used on Linux, the `\r` characters cause all kinds of mysterious behavior. `tr -d '\r'` fixes it instantly.

### Squeezing repeated characters

The `-s` flag replaces sequences of repeated characters with a single instance:

```bash
echo "too    many    spaces" | tr -s ' '   # squeeze multiple spaces to one
cat file.txt | tr -s '\n'                   # remove blank lines
```



## `cut`: Extracting Columns

`cut` is simpler than `awk` for the specific task of extracting columns from delimited text:

```bash
cut -d',' -f1,3 data.csv          # extract columns 1 and 3 from a CSV
cut -d':' -f1 /etc/passwd         # extract usernames
cut -f2 data.tsv                   # extract column 2 from tab-delimited file
```

`-d` sets the delimiter (comma, colon, tab, etc.) and `-f` specifies which fields to extract. For simple column extraction, `cut` is cleaner than `awk`. For anything more complex — filtering, calculating, reformatting — reach for `awk`.

### Extracting character ranges

`cut` can also extract by character position rather than field:

```bash
cut -c1-10 file.txt               # first 10 characters of each line
cut -c-5 file.txt                 # first 5 characters
cut -c10- file.txt                # everything from character 10 onwards
```



## `sort` and `uniq`: Organizing and Deduplicating

These two tools are almost always used together, and they appear constantly in the pipelines built around `sed` and `awk`.

### `sort`

```bash
sort file.txt                     # alphabetical sort
sort -r file.txt                  # reverse order
sort -n file.txt                  # numeric sort
sort -rn file.txt                 # reverse numeric sort
sort -k2 file.txt                 # sort by second field
sort -t',' -k3 -n data.csv        # sort CSV by third column numerically
sort -u file.txt                  # sort and remove duplicates
```

The `-k` flag specifies the sort key — which field to sort by. Combined with `-t` to set the delimiter, it works on any structured text:

```bash
# Sort a CSV by the third column (numerically, descending)
sort -t',' -k3 -rn data.csv
```

### `uniq`

`uniq` removes consecutive duplicate lines. Because it only compares adjacent lines, it almost always needs to be preceded by `sort`:

```bash
sort file.txt | uniq               # remove duplicates
sort file.txt | uniq -c            # count occurrences of each line
sort file.txt | uniq -d            # show only duplicate lines
sort file.txt | uniq -u            # show only unique lines (no duplicates)
```

The `sort | uniq -c | sort -rn` pipeline is one of the most useful in existence for frequency analysis:

```bash
# What are the most common words in a file?
cat README.md | tr ' ' '\n' | tr -d '[:punct:]' | sort | uniq -c | sort -rn | head -20

# What are the most common HTTP status codes in a log?
awk '{print $9}' access.log | sort | uniq -c | sort -rn

# What IP addresses appear most often?
awk '{print $1}' access.log | sort | uniq -c | sort -rn | head -10
```



## `tee`: Writing and Passing Through

`tee` reads from stdin and writes to both stdout *and* a file simultaneously. It's named after the T-shaped plumbing fitting that splits a pipe into two directions.

```bash
command | tee output.txt           # write to file AND see on screen
command | tee -a output.txt        # append to file (don't overwrite)
```

The most common use case: you're running a long build or test command and you want to see the output in real time *and* save it to a file for later:

```bash
npm test | tee test-results.txt
make build 2>&1 | tee build.log
```

The `2>&1` redirects stderr to stdout, so both streams are captured.

### Splitting a pipeline

`tee` can also feed output into multiple subsequent pipeline branches:

```bash
cat access.log | tee >(grep "ERROR" > errors.log) >(grep "WARN" > warnings.log) | wc -l
```

This reads the log once, writes ERROR lines to `errors.log`, WARN lines to `warnings.log`, and counts total lines — all in a single pass. This is a more advanced pattern, but it's the right solution when you need to process a large file in multiple ways without reading it multiple times.



## Putting It Together: Real Editing Workflows

### Refactoring a module name across a codebase

```bash
OLD="UserService"
NEW="AccountService"

# Preview the changes first
grep -r "$OLD" src/ --include="*.ts" -l

# Apply the rename
find src/ -name "*.ts" | xargs sed -i '' "s/\b$OLD\b/$NEW/g"

# Verify the old name is gone
grep -r "$OLD" src/ --include="*.ts"
```

### Cleaning and normalizing a CSV file

```bash
cat raw-data.csv \
  | tr -d '\r' \                          # remove Windows line endings
  | sed '1d' \                            # remove header row
  | awk -F',' '$3 > 0 {print $0}' \      # filter rows where column 3 > 0
  | sort -t',' -k2 \                      # sort by column 2
  | tee cleaned-data.csv \               # save to file
  | wc -l                                # print row count
```

### Generating a report from log data

```bash
echo "=== Error Report ===" > report.txt
echo "Generated: $(date)" >> report.txt
echo "" >> report.txt

echo "Top 10 Error Messages:" >> report.txt
grep "ERROR" app.log \
  | awk '{$1=$2=$3=""; print $0}' \      # strip timestamp fields
  | sort | uniq -c | sort -rn \          # count and rank
  | head -10 >> report.txt

echo "" >> report.txt
echo "Errors by Hour:" >> report.txt
grep "ERROR" app.log \
  | awk '{print substr($2, 1, 2)}' \     # extract hour from timestamp
  | sort | uniq -c >> report.txt
```



## Chapter Summary

The tools in this chapter — `sed`, `awk`, `tr`, `cut`, `sort`, `uniq`, and `tee` — form the core of the Unix text processing toolkit. Used individually, each one is useful. Used together in pipelines, they can replace entire scripts for data transformation, log analysis, and codebase-wide refactoring.

The key habits to build:

- Always preview `sed` substitutions before using `-i` to edit in place
- Remember the macOS vs Linux difference for `sed -i` — it catches everyone eventually
- Use `sort | uniq -c | sort -rn` as your go-to frequency analysis pipeline
- Reach for `awk` when you need to work with columns or do arithmetic; use `cut` for simple column extraction
- Use `tee` whenever you want to both see and save the output of a long-running command
- Build transformations incrementally in a pipeline — add one tool at a time and check the output before adding the next



## Exercises

**1.** Use `sed` to rename a function across all files of a given type in a project. Preview the changes first, then apply them. Verify the old name no longer appears.

**2.** Take an Apache or Nginx access log (or generate a sample one) and use `awk` to produce a frequency table of HTTP status codes, sorted from most to least common.

**3.** Use `tr`, `sort`, and `uniq -c` to find the ten most common words in a text file, excluding punctuation.

**4.** Build a pipeline that reads a CSV file, filters rows based on a numeric condition in one column, sorts by another column, and writes the result to a new file using `tee`.

**5.** Use `sed -n` with a line range to extract a specific function from a source file — just the lines from the function definition to its closing brace.



## Quick Reference

| Command | What it does |
| --- | --- |
| `sed 's/old/new/g' file` | Replace all occurrences in output |
| `sed -i '' 's/old/new/g' file` | Replace in place (macOS) |
| `sed -i 's/old/new/g' file` | Replace in place (Linux) |
| `sed '/pattern/d' file` | Delete lines matching pattern |
| `sed -n '10,20p' file` | Print lines 10–20 only |
| `awk '{print $1, $3}' file` | Print fields 1 and 3 |
| `awk -F',' '{print $2}' file` | Use comma as field separator |
| `awk '$3 > 100 {print}' file` | Print lines where field 3 > 100 |
| `awk '{sum+=$3} END{print sum}' file` | Sum a column |
| `tr 'a-z' 'A-Z'` | Convert to uppercase |
| `tr -d '\r'` | Remove Windows carriage returns |
| `tr -s ' '` | Squeeze multiple spaces to one |
| `cut -d',' -f1,3 file` | Extract CSV columns 1 and 3 |
| `sort -t',' -k3 -rn file` | Sort CSV by column 3, descending |
| `sort \| uniq -c \| sort -rn` | Frequency count pipeline |
| `command \| tee file.txt` | Write to file and stdout simultaneously |
