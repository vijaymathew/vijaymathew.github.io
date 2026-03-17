# Using Unix Command Line Tools to Supercharge Your Development Workflow

## Table of Contents

### 1. Introduction
- Why the terminal still wins when you need reproducible, composable work
- The Unix philosophy: small tools, predictable streams, and pipelines that scale
- This book is about fluency, not memorization
- How to read the chapters and practice the exercises

### 2. Navigating and Understanding a Codebase Quickly
- Map unfamiliar repositories with `tree`, `ls`, and modern alternatives
- Narrow down targets with `find` plus filters on name, extension, and time
- Inspect a file before editing with `file`, `stat`, and `head`/`tail`
- Put it all together into an orientation workflow

### 3. Searching Code Like a Pro
- Compare `grep` and `rg` and decide when to respect the `.gitignore`
- Compose `find` + `rg`/`git grep` to search specific directories or file types
- Search git history, filter JSON with `jq`, and hunt down call sites or config keys
- Build recipe searches you can reuse when incident response needs speed

### 4. Reading and Inspecting Files Without an Editor
- Preview content with `cat`, `head`, `tail`, and colored `bat`
- Navigate large files and logs via `less` and smart search
- Count lines, words, and characters with `wc` as a quick sanity check
- Combine inspectors into concise observation commands

### 5. Editing Files from the Terminal
- Perform stream edits with `sed` and column operations with `awk`
- Use `tr`, `cut`, `sort`, and `uniq` to normalize structured content
- Write output through `tee` while keeping the stream live
- Decide when a quick command-line edit beats a script or IDE change

### 6. Working with Data and APIs from the Command Line
- Fetch data with `curl` and `httpie`
- Parse and transform JSON with `jq` and CSV with csvkit tools
- Handle YAML, XML, and env files without leaving the terminal
- Build reproducible data-processing pipelines

### 7. Automating Repetitive Dev Tasks
- Capture workflows in small shell scripts, aliases, and functions
- Use `make` as a lightweight task runner for lint, test, and dev targets
- Manage environments, background jobs, and cron-friendly routines
- Bundle automation into a toolkit that you can reuse across projects

### 8. Terminal Quality of Life
- Tune prompts with Starship or shell-native status indicators
- Master shell history tricks (`Ctrl+R`, `!!`, `!$`, `Alt+B/F`)
- Navigate directories faster with `z`/`zoxide` and `fzf`
- Try `bat`, `eza`, additional editors, and terminal emulators that fit your flow

### 9. Process Management and Debugging
- Inspect running jobs with `ps`, `top`, and `pgrep`
- Send signals safely with `kill`, `pkill`, and `timeout`
- Dump the environment with `env`, `printenv`, and `export`
- Resolve commands with `which`, `type`, and `command`
- Use `strace`, `lsof`, and job control for complex incidents

### 10. Composing Tools with Pipes and Redirection
- Practice the pipe philosophy (`|`, `<`, `>`, `2>&1`, `<(...)`)
- Use `xargs` and parallelism safely
- Redirect stderr, buffer output, and log to files without losing clarity
- Replace scripts with readable pipelines that describe the data flow

### 11. Working on Remote Machines
- Configure SSH keys, config files, and `ssh-agent` for seamless login
- Transfer files with `scp`, `rsync`, and safely copy config snippets
- Multiplex connections, tunnel ports, and keep sessions alive with `tmux`
- Inspect remote processes, copy logs, and reattach workflows after disconnects

### 12. Conclusion — Building CLI Fluency Over Time
- Fluency grows through deliberate practice, not memorizing flags
- Learn at least one new tool or trick per week and document the habit
- Keep your terminal muscle memory sharp across new machines and teams
- Use the community resources listed in the bibliography

### Back Matter
- About the author
- Bibliography
