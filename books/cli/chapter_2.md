# Searching Code Like a Pro

If there's one skill that separates developers who are fast from developers who are slow, it's the ability to find things quickly. The right function definition. The one place a config value is set. Every file that calls a deprecated API. The line in a log file that explains why the server crashed at 3am.

IDEs have search. GitHub has search. But neither gives you the speed, precision, and composability of searching from the terminal. Once you've internalized the tools in this chapter, you'll find yourself reaching for them instinctively — not because you're a terminal purist, but because they're simply the fastest way to find what you're looking for.


## 2.1 `grep`: The Classic

`grep` has been part of Unix since 1974. The name stands for *globally search a regular expression and print* — which is exactly what it does. Despite its age, it remains one of the most useful tools in a developer's arsenal.

### Basic usage

```bash
grep "function handleAuth" src/auth.js
```

This searches the file `src/auth.js` for the string `function handleAuth` and prints every matching line. Simple, fast, and often all you need.

To search recursively through a directory:

```bash
grep -r "handleAuth" src/
```

The `-r` flag tells grep to descend into subdirectories. This is the version you'll use most often.

### Essential flags

A handful of flags transform `grep` from useful to indispensable:

```bash
grep -r "handleAuth" src/ -n        # show line numbers
grep -r "handleAuth" src/ -l        # show only filenames, not matching lines
grep -r "handleAuth" src/ -c        # count matches per file
grep -r "handleAuth" src/ -i        # case-insensitive search
grep -r "handleAuth" src/ -v        # invert: show lines that DON'T match
```

The `-l` flag deserves special mention. When you want to know *which files* contain a pattern — not necessarily where in those files — `-l` gives you a clean list you can pipe to other commands:

```bash
grep -rl "TODO" src/ | wc -l        # how many files have TODOs?
```

### Context lines

One of the most useful but underused grep features is context. Instead of just showing the matching line, you can ask grep to show the lines around it:

```bash
grep -r "throw new Error" src/ -n -A 3 -B 3
```

- `-A 3` — show 3 lines **after** each match
- `-B 3` — show 3 lines **before** each match
- `-C 3` — show 3 lines on **both sides** (shorthand for `-A 3 -B 3`)

This is invaluable when you're tracking down a bug and the matching line alone doesn't give you enough context to understand what's happening.

### Searching with regular expressions

`grep` supports full regular expressions, which is where its name comes from and where it earns its keep:

```bash
grep -r "import.*from ['\"]react['\"]" src/     # all React imports
grep -r "console\.\(log\|warn\|error\)" src/    # all console statements
grep -r "^export default" src/                  # files with default exports
```

Basic regex in grep uses older POSIX syntax. For modern regex syntax (the kind you're used to from JavaScript or Python), use `-E` for extended regex or `-P` for Perl-compatible regex:

```bash
grep -rE "import .+ from '.+'" src/             # cleaner extended syntax
grep -rP "(?<=userId: )\d+" logs/               # lookbehind (Perl regex)
```



## 2.2 `ripgrep`: The Modern Default

`grep` is powerful, but it has limitations that become painful on large modern codebases. It searches `node_modules`. It doesn't respect `.gitignore`. On a project with hundreds of thousands of files, it can be slow.

`ripgrep` — the `rg` command — solves all of these problems. It's written in Rust, built for modern development workflows, and in most real-world searches it's between 5x and 100x faster than `grep`. If you install only one tool from this entire book, make it `ripgrep`.

```bash
brew install ripgrep          # macOS
apt install ripgrep           # Ubuntu
```

### Basic usage

The syntax is almost identical to `grep`, which makes switching effortless:

```bash
rg "handleAuth"               # search current directory recursively
rg "handleAuth" src/          # search specific directory
rg "handleAuth" src/auth.ts   # search specific file
```

By default, `rg` already does what you'd need several `grep` flags to achieve: it searches recursively, shows line numbers, respects `.gitignore`, and skips hidden files and binary files. A bare `rg "pattern"` in the root of your project is almost always what you want.

### File type filtering

This is one of `rg`'s best features. Instead of wrestling with `find` to limit your search to specific file types, `rg` handles it natively:

```bash
rg "TODO" --type ts           # search only TypeScript files
rg "TODO" --type py           # search only Python files
rg "TODO" --type-not test     # exclude test files
```

To see what types `rg` knows about:

```bash
rg --type-list
```

You can also define custom types for your project:

```bash
rg "pattern" --type-add "vue:*.vue" --type vue
```

### Searching for the right thing

A few patterns that come up constantly in real development work:

```bash
# Find all usages of a function
rg "getUserById"

# Find where a variable is defined (not just used)
rg "const getUserById"

# Find all files that import a specific module
rg "from ['\"]../api/users['\"]"

# Find all TODO and FIXME comments
rg "TODO|FIXME|HACK|XXX"

# Find hardcoded strings that look like API keys or secrets
rg "['\"][A-Za-z0-9]{32,}['\"]" --type ts
```

### Multiline search

By default, `rg` searches line by line. For patterns that span multiple lines, use `-U`:

```bash
rg -U "useEffect\(\(\) => \{[^}]+\}, \[\]\)" src/
```

This would match `useEffect` calls with an empty dependency array, even if the callback spans multiple lines — the kind of pattern that's hard to search for any other way.

### Word boundaries

To avoid matching a pattern as part of a longer word, use `-w`:

```bash
rg -w "id"          # matches "id" but not "userId" or "invalid"
```

### Fixed string search

When your search term contains regex special characters — dots, parentheses, brackets — and you want to search for the literal string, use `-F`:

```bash
rg -F "user.profile.id"       # treats dots as literal dots
rg -F "arr[0]"                # treats brackets as literal brackets
```



## 2.3 Searching Git History with `git grep` and `git log`

Sometimes the pattern you're looking for isn't in the current code — it was deleted, or it exists in an older version. Git gives you two powerful tools for this.

### `git grep`

`git grep` works like `rg` but searches within the files tracked by git, including the ability to search at a specific commit or across all branches:

```bash
git grep "handleAuth"                    # search current working tree
git grep "handleAuth" HEAD~5             # search as of 5 commits ago
git grep "handleAuth" main               # search the main branch
```

To search across *all* commits — useful when someone says "this function used to exist, find it":

```bash
git grep "handleAuth" $(git rev-list --all)
```

This is slow on large repositories, but it's thorough. It will find the pattern in any commit in the entire history of the repository.

### `git log -S`: the pickaxe

The `-S` flag on `git log` is one of the most powerful and least-known tools in the Git arsenal. It searches commit history for commits that *added or removed* a specific string:

```bash
git log -S "handleAuth" --oneline
```

This gives you every commit where the string `handleAuth` was introduced or deleted — not just mentioned in a commit message, but actually changed in the diff. This answers the question: *when was this code added, and by whom?*

```bash
git log -S "handleAuth" --oneline -p
```

Adding `-p` shows the full diff for each matching commit, so you can see exactly what changed.

For regex-based history search, use `-G` instead of `-S`:

```bash
git log -G "handle[A-Z][a-z]+" --oneline
```



## 2.4 Searching Structured Data with `jq`

Not all searching is searching source code. Modern development means working with JSON constantly — API responses, config files, package manifests, log output. `grep` can search JSON, but it has no understanding of structure. `jq` does.

`jq` is a command-line JSON processor. You can think of it as `grep` + `awk` for JSON — it lets you filter, transform, and extract data from JSON with a compact query language.

### Basic extraction

```bash
cat package.json | jq '.dependencies'
```

This extracts the `dependencies` field from `package.json` and pretty-prints it. The `.` refers to the root of the JSON object, and `.dependencies` navigates to that key.

```bash
cat package.json | jq '.dependencies | keys'    # list dependency names
cat package.json | jq '.version'                 # just the version string
```

### Filtering arrays

Where `jq` really shines is filtering arrays of objects — the shape that most API responses and log files take:

```bash
# From an array of users, find those with role "admin"
cat users.json | jq '.[] | select(.role == "admin")'

# Extract just the email field from each matching user
cat users.json | jq '.[] | select(.role == "admin") | .email'

# Find all log entries with status >= 400
cat access-log.json | jq '.[] | select(.status >= 400)'
```

### Combining `curl` and `jq`

The most common real-world use of `jq` is parsing live API responses. Without `jq`:

```bash
curl https://api.example.com/users/42
# {"id":42,"name":"Alice","role":"admin","createdAt":"2024-01-15T...","permissions":[...]}
```

With `jq`:

```bash
curl -s https://api.example.com/users/42 | jq '.'              # pretty print
curl -s https://api.example.com/users/42 | jq '.name'          # just the name
curl -s https://api.example.com/users/42 | jq '.permissions[]' # list permissions
```

The `-s` flag on `curl` suppresses progress output, giving you clean JSON to pipe into `jq`.

### Searching across multiple JSON files

Combining `find`, `cat`, and `jq` lets you search across an entire directory of JSON files:

```bash
find . -name "*.json" -not -path "*/node_modules/*" \
  -exec jq -r 'select(.version != null) | "\(input_filename): \(.version)"' {} \;
```

This finds every JSON file in the project and prints its `version` field if it has one — useful for auditing the versions of all packages in a monorepo.



## 2.5 Building Search Pipelines

The real power of command-line search comes from combining tools. Each of the tools above produces text output that can be piped into the next tool in a chain.

### Finding and counting

```bash
# How many TypeScript files have console.log statements?
rg "console\.log" --type ts -l | wc -l
```

### Finding, filtering, and acting

```bash
# List all files with TODOs, sorted by number of TODOs
rg "TODO" -c --type ts | sort -t: -k2 -rn | head -20
```

Breaking this down: `rg "TODO" -c --type ts` counts TODO occurrences per file. `sort -t: -k2 -rn` sorts by the second colon-separated field (the count) in reverse numeric order. `head -20` shows only the top 20. The result is a ranked list of your most TODO-laden files.

### Cross-referencing results

```bash
# Find all files that import 'lodash', then search those files for specific usage
rg "from 'lodash'" -l | xargs rg "\.cloneDeep"
```

Here, `rg "from 'lodash'" -l` gets the list of files that import lodash, and `xargs rg "\.cloneDeep"` runs a second `rg` search on just those files. This is a pattern you'll use often: narrow to a set of files with one search, then search within that set with another.

### Searching and editing

```bash
# Find every file containing a pattern, then open them all in vim
rg "handleAuth" -l | xargs vim
```

Or more commonly, feed results into a command that makes a change — we'll cover this in depth in Chapter 5 when we get to `sed` and batch editing.



## 2.6 Practical Search Recipes

Here are some searches that come up repeatedly in real development work, ready to use or adapt:

```bash
# Find all environment variables referenced in code
rg "process\.env\.\w+" --type ts -o | sort | uniq

# Find potential SQL injection risks (string concatenation in queries)
rg "query\(.*\+" --type js

# Find all API endpoints defined in an Express app
rg "app\.(get|post|put|delete|patch)\(" --type js

# Find all files larger than expected (empty files - size 0)
find . -name "*.ts" -size 0

# Find recently modified config files
find . -name "*.config.*" -mtime -7 -not -path "*/node_modules/*"

# Count lines of code by file type (rough estimate)
find . -name "*.ts" -not -path "*/node_modules/*" | xargs wc -l | tail -1

# Find duplicate function names across files
rg "^function \w+" --type js -o | sed 's/.*://' | sort | uniq -d
```



## Chapter Summary

Searching is one of the highest-leverage terminal skills you can develop. The tools in this chapter — `grep`, `rg`, `git grep`, `git log -S`, and `jq` — cover the full spectrum of what you'll need to find in a codebase, its history, and the data it produces.

The key habits to build:

- Default to `rg` over `grep` for any search in a development project — it's faster, smarter, and respects your `.gitignore`
- Use `-l` when you need a list of files to act on, not just lines to read
- Use `git log -S` when you need to know when and why something changed
- Reach for `jq` any time you're working with JSON — don't `grep` structured data
- Build pipelines: narrow with one search, then act on the results with another



## Exercises

**1.** In any codebase you have access to, use `rg` to find every `TODO` comment. Then use `rg -c` and `sort` to rank the files by how many TODOs they contain.

**2.** Use `git log -S` to find the commit that introduced a specific function or variable in a git repository. Read the full diff to understand the context it was added in.

**3.** Fetch a JSON API response with `curl` and use `jq` to extract a specific nested field. Then filter an array within the response to show only items matching a condition.

**4.** Build a pipeline that finds all files importing a specific module and counts how many there are. Then extend it to list the files sorted alphabetically.

**5.** Use `rg` with `--type-list` to discover what file types it recognizes. Add a custom type for a file extension used in a project you work on.



## Quick Reference

| Command | What it does |
|||
| `rg "pattern"` | Search current directory recursively (respects .gitignore) |
| `rg "pattern" --type ts` | Search only TypeScript files |
| `rg "pattern" -l` | List matching filenames only |
| `rg "pattern" -c` | Count matches per file |
| `rg "pattern" -w` | Match whole words only |
| `rg "pattern" -F` | Treat pattern as literal string |
| `rg "pattern" -C 3` | Show 3 lines of context around matches |
| `grep -r "pattern" -n` | Recursive search with line numbers |
| `grep -r "pattern" -A 3` | Show 3 lines after each match |
| `git grep "pattern" HEAD~5` | Search codebase at a point in history |
| `git log -S "pattern" --oneline` | Find commits that added/removed pattern |
| `jq '.field'` | Extract a field from JSON |
| `jq '.[] \| select(.x == "y")'` | Filter a JSON array |
| `curl -s URL \| jq '.'` | Fetch and pretty-print a JSON API response |
