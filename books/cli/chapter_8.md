# Terminal Quality of Life

There's a difference between using the terminal and *living* in the terminal. The developers in the first group open it when they have to, do what they need to do, and close it as soon as possible. The developers in the second group have it open all day, navigate it fluidly, and find that many tasks they once did in GUIs feel slower and more cumbersome by comparison.

The difference usually isn't knowledge of more commands. It's the accumulated effect of dozens of small improvements to the terminal environment itself — a faster prompt, smarter history, better search, tools that reduce friction at every turn. Individually, each improvement saves a few seconds. Together, they change the character of working in the terminal from something you endure to something you prefer.

This chapter covers those improvements. Some are configuration changes. Some are tools worth installing. Some are habits and keyboard shortcuts that take a week to internalize and then become automatic. None of them are complicated. All of them are worth the investment.


## 8.1 Choosing and Configuring Your Shell

Most systems default to `bash`. It's reliable, ubiquitous, and fine. But two alternatives are worth knowing about: `zsh` and `fish`.

### Zsh

`zsh` has been the default shell on macOS since Catalina (2019). It's largely compatible with `bash` but adds several quality-of-life improvements out of the box:

- Better tab completion (interactive menus instead of flat lists)
- Spelling correction (`cd porjects` -> "Did you mean `projects`?")
- Shared history across terminal sessions
- More powerful globbing (`**/*.ts` matches recursively without `find`)
- Better array handling and string manipulation

If you're on macOS, you're likely already using `zsh`. On Linux, switch with:

```bash
chsh -s $(which zsh)
```

### Oh My Zsh

Oh My Zsh is a framework for managing your zsh configuration. It provides a plugin system, a theme system, and a large collection of pre-built aliases and functions.

```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Useful plugins to enable in `~/.zshrc`:

```bash
plugins=(
  git                  # git aliases and completion
  z                    # jump to frecent directories
  docker               # docker completion
  node                 # node version info
  history-substring-search   # better history search
  zsh-autosuggestions        # fish-style suggestions (install separately)
  zsh-syntax-highlighting    # command highlighting (install separately)
)
```

### Fish

`fish` (Friendly Interactive Shell) takes a different approach — it's designed from the ground up for interactive use, with autosuggestions, syntax highlighting, and web-based configuration built in. Its scripting syntax is intentionally different from `bash`, which means bash scripts don't run directly in `fish` (you call them explicitly with `bash script.sh`).

For interactive daily use, fish is arguably the most polished shell available. For scripting, stick with bash. The two coexist without issues.

```bash
brew install fish              # macOS
chsh -s $(which fish)          # set as default
fish_config                    # web-based configuration UI
```



## 8.2 A Better Prompt with Starship

Your prompt is the text that appears before every command. The default prompt tells you very little — usually just your username, hostname, and current directory. A well-configured prompt can show your current git branch, whether you have uncommitted changes, the active Node or Python version, the last command's exit code, and more — all without you having to run a single command to find out.

Starship is a cross-shell prompt written in Rust. It's fast (adds less than 5ms to prompt rendering), works in any shell, and is configured with a single TOML file.

```bash
curl -sS https://starship.rs/install.sh | sh
```

Add to your shell config:

```bash
# ~/.zshrc
eval "$(starship init zsh)"

# ~/.bashrc
eval "$(starship init bash)"

# ~/.config/fish/config.fish
starship init fish | source
```

### Configuring Starship

Starship is configured in `~/.config/starship.toml`:

```toml
# ~/.config/starship.toml

# Prompt format — what appears and in what order
format = """
$directory\
$git_branch\
$git_status\
$nodejs\
$python\
$cmd_duration\
$line_break\
$character"""

[directory]
truncation_length = 3
truncate_to_repo = true      # show path relative to git root

[git_branch]
symbol = " "
style = "bold purple"

[git_status]
conflicted = "!"
ahead = "up:${count}"
behind = "down:${count}"
diverged = "div:up:${ahead_count}:down:${behind_count}"
modified = "!"
untracked = "?"
staged = "+"
renamed = ">>"
deleted = "x"

[nodejs]
format = "[$symbol($version)]($style) "
symbol = " "

[python]
format = "[$symbol$version]($style) "

[cmd_duration]
min_time = 2_000             # show duration for commands taking over 2 seconds
format = "took [$duration]($style) "

[character]
success_symbol = "[>](bold green)"
error_symbol = "[>](bold red)"    # turns red after a failed command
```

The `$git_status` module alone is worth the setup — at a glance you can see whether your working tree is clean, how many commits ahead or behind you are, and whether you have staged changes, all without running `git status`.



## 8.3 Smarter History

The default shell history is a flat list of commands you've run. With the right configuration and tools, it becomes a searchable, context-aware database of everything you've ever done at the terminal.

### Increasing history size

The default history size on most systems is embarrassingly small — 500 or 1000 commands. Increase it dramatically:

```bash
# ~/.zshrc or ~/.bashrc
HISTSIZE=100000              # commands kept in memory
HISTFILESIZE=200000          # commands kept on disk
SAVEHIST=100000              # zsh: commands saved to file
```

### Deduplication and timestamps

```bash
# ~/.zshrc
setopt HIST_IGNORE_DUPS      # don't store duplicate consecutive commands
setopt HIST_IGNORE_ALL_DUPS  # remove older duplicate entries
setopt HIST_IGNORE_SPACE     # don't store commands starting with a space
setopt HIST_VERIFY           # show expanded history command before running
setopt SHARE_HISTORY         # share history across all terminal sessions
setopt EXTENDED_HISTORY      # save timestamps with each command

# ~/.bashrc
HISTCONTROL=ignoreboth       # ignore duplicates and commands starting with space
HISTTIMEFORMAT="%Y-%m-%d %T "  # add timestamps
```

The `HIST_IGNORE_SPACE` / `ignorespace` option is a useful security feature — any command you prefix with a space won't be saved to history. Useful for commands that contain credentials you don't want persisted.

### Reverse history search

`Ctrl+R` is built into both bash and zsh. Press it and start typing to search backward through your history:

```
(reverse-i-search)`curl': curl -s https://api.example.com/users | jq '.[].email'
```

Keep pressing `Ctrl+R` to cycle through older matches. Press `Enter` to run the matched command, or the right arrow to edit it first.

### `fzf`: fuzzy history search

`fzf` is a general-purpose fuzzy finder. When integrated with your shell, it replaces the default `Ctrl+R` history search with an interactive full-screen interface that searches your entire history with fuzzy matching:

```bash
brew install fzf
$(brew --prefix)/opt/fzf/install    # install shell integrations
```

Once installed, `Ctrl+R` opens a scrollable, searchable list of your entire command history. Type any substring to filter it — you don't need to remember the exact command, just a fragment of it. Arrow keys navigate, `Enter` selects, `Ctrl+C` cancels.

`fzf` also integrates with `Ctrl+T` (fuzzy file finder — paste a file path into your command) and `Alt+C` (fuzzy directory navigation). These three key bindings alone make `fzf` one of the highest-value tools in this entire book.



## 8.4 Smarter Directory Navigation

`cd` is the most-typed command in the terminal. Most developers type it far more than necessary.

### `z`: jump to frecent directories

`z` tracks the directories you visit most frequently and most recently (hence "frecent") and lets you jump to them by typing a fragment of the path:

```bash
# Install via oh-my-zsh plugin, or:
brew install zoxide            # modern alternative (recommended)
```

After visiting a directory a few times:

```bash
z proj                         # jumps to ~/work/projects/myproject
z api                          # jumps to ~/work/projects/myproject/src/api
z doc                          # jumps to ~/work/projects/myproject/docs
```

`z` learns your patterns over time. After a few days of normal use, you rarely need to type full paths — a two or three character fragment is usually enough to get to where you want to go.

### `zoxide`: the modern replacement

`zoxide` is a faster, more featureful replacement for `z`, also written in Rust:

```bash
brew install zoxide
echo 'eval "$(zoxide init zsh)"' >> ~/.zshrc    # or bash, fish
```

Usage is identical to `z`, but `zoxide` also provides `zi` — an interactive mode that uses `fzf` to let you choose between multiple matching directories:

```bash
zi                             # fuzzy search all visited directories
zi proj                        # fuzzy search directories matching "proj"
```

### Better `cd` with `AUTO_CD`

In zsh, you can navigate to a directory by just typing its name — no `cd` required:

```bash
# ~/.zshrc
setopt AUTO_CD
```

With this set, typing `src` in your terminal changes to the `src` directory if it exists. Combined with `zoxide`, directory navigation becomes extremely fast.

### `pushd` and `popd`: directory stack

Less well-known than `cd`, but useful when you're working across multiple directories:

```bash
pushd /tmp                     # go to /tmp, remember current location
pushd ~/projects/myapp         # go to myapp, stack now has two entries
dirs -v                        # view the directory stack
popd                           # return to ~/projects/myapp
popd                           # return to original directory
```

Think of it as a browser's back button for the terminal. For quick context switches where you know you'll need to return, `pushd`/`popd` is cleaner than typing paths twice.



## 8.5 `bat`, `eza`, and `fd`: Modernizing the Classics

We mentioned these tools in earlier chapters. Here's the full picture on setup and configuration.

### `bat`: a better `cat`

```bash
brew install bat
```

`bat` adds syntax highlighting, line numbers, and git change markers to file viewing. To use it as a drop-in `cat` replacement:

```bash
# ~/.zshrc
alias cat="bat --paging=never"    # no paging (behaves like cat)
alias less="bat"                  # use bat's pager with syntax highlighting
```

Configure `bat` in `~/.config/bat/config`:

```
--theme="Dracula"
--style="numbers,changes,header"
--paging=never
```

`bat` is also used by `fzf` to show syntax-highlighted previews in its interface — a combination we'll cover shortly.

### `eza`: a better `ls`

```bash
brew install eza
```

```bash
# ~/.zshrc
alias ls="eza"
alias ll="eza -lah"
alias lt="eza -lah --sort=modified"
alias tree="eza --tree"
```

`eza` adds color coding by file type, git status indicators in the file listing, and a built-in tree mode. Its `--git` flag shows the git status of each file alongside the listing — the most common reason to run `git status` and `ls` in the same breath:

```bash
eza -lah --git                 # show git status for each file
eza --tree --git-ignore        # tree view, respecting .gitignore
```

### `fd`: a better `find`

```bash
brew install fd
```

`fd` has a simpler syntax than `find`, respects `.gitignore` by default, and is significantly faster:

```bash
fd "*.ts"                      # find TypeScript files
fd -t d tests                  # find directories named "tests"
fd -e ts -e tsx                # find by extension
fd --changed-within 1d         # files modified in the last day
fd "config" --exec bat {}      # find and view with bat
```

The `--exec` flag works like `find`'s `-exec` but with a cleaner syntax. `{}` is replaced with the matching filename.



## 8.6 `fzf` Beyond History Search

`fzf` is more than a history search tool. It's a general-purpose fuzzy selector that can be composed with any command that produces a list of items.

### Fuzzy file opening

```bash
# Open a file in your editor using fuzzy search
vim $(fzf)
code $(fzf)

# With bat preview
fzf --preview 'bat --color=always {}'
```

### Git with `fzf`

```bash
# Interactively checkout a branch
git switch $(git branch | fzf | tr -d '[:space:]')

# Interactively add files to staging
git add $(git status -s | fzf -m | awk '{print $2}')

# Interactively view commit history
git log --oneline | fzf --preview 'git show {1} --stat --color=always'
```

### Kill a process interactively

```bash
# Select a process to kill from an interactive list
kill $(ps aux | fzf | awk '{print $2}')
```

### `fzf` functions worth adding to your shell config

```bash
# Fuzzy cd: navigate to any subdirectory with fzf
fcd() {
  local dir
  dir=$(find . -type d -not -path '*/node_modules/*' -not -path '*/.git/*' | \
    fzf --preview 'eza --tree --level=1 {}') && cd "$dir"
}

# Fuzzy edit: find and open a file in $EDITOR
fe() {
  local file
  file=$(fd --type f --hidden --exclude .git | \
    fzf --preview 'bat --color=always {}') && ${EDITOR:-vim} "$file"
}

# Fuzzy grep: search file contents and open at matching line
fg() {
  local result file line
  result=$(rg --line-number --color=always "$1" | \
    fzf --ansi --preview 'bat --color=always {1} --highlight-line {2}')
  file=$(echo "$result" | cut -d: -f1)
  line=$(echo "$result" | cut -d: -f2)
  ${EDITOR:-vim} "$file" +"$line"
}
```

The `fg` function is particularly powerful: it uses `rg` to search for a pattern, `fzf` to let you choose the match, and opens the file at the matching line in your editor. It replaces the common workflow of "search for something, note the file and line, open the file, navigate to the line."



## 8.7 Multiplexers: `tmux`

A terminal multiplexer lets you run multiple terminal sessions within a single window, split panes side by side, and keep sessions running after you disconnect. `tmux` is the most widely used.

```bash
brew install tmux              # macOS
apt install tmux               # Ubuntu
```

### Core concepts

`tmux` has three levels of organization:

- **Sessions**: independent workspaces, each with their own windows and panes
- **Windows**: tabs within a session (like browser tabs)
- **Panes**: splits within a window (side by side or top/bottom)

The default prefix key is `Ctrl+B` — hold `Ctrl`, press `B`, release both, then press the next key.

### Essential key bindings

```
Ctrl+B c       New window
Ctrl+B n       Next window
Ctrl+B p       Previous window
Ctrl+B 0-9     Switch to window by number
Ctrl+B ,       Rename current window

Ctrl+B %       Split pane vertically (side by side)
Ctrl+B "       Split pane horizontally (top/bottom)
Ctrl+B arrows  Navigate between panes
Ctrl+B z       Zoom current pane (toggle fullscreen)
Ctrl+B x       Close current pane

Ctrl+B d       Detach from session (session keeps running)
tmux attach    Reattach to last session
tmux ls        List running sessions
tmux new -s work   New session named "work"
tmux attach -t work  Attach to session named "work"
```

### A practical tmux layout for development

A common layout for web development:

```
+-----------------+------------------+
|                 |                  |
|    Editor       |   Dev Server     |
|                 |                  |
|                 +------------------+
|                 |                  |
|                 |   Test Runner    |
|                 |                  |
+-----------------+------------------+
```

Set this up with a script:

```bash
#!/usr/bin/env bash
# scripts/dev-session.sh — start development tmux session

SESSION="dev"

# Don't create if already exists
tmux has-session -t $SESSION 2>/dev/null && tmux attach -t $SESSION && exit

tmux new-session -d -s $SESSION -n "editor"

# Main editor pane
tmux send-keys -t $SESSION "cd ~/projects/myapp && $EDITOR ." Enter

# Split right: dev server
tmux split-window -h -t $SESSION
tmux send-keys -t $SESSION "cd ~/projects/myapp && make dev" Enter

# Split bottom right: tests
tmux split-window -v -t $SESSION
tmux send-keys -t $SESSION "cd ~/projects/myapp" Enter

# Focus back on editor
tmux select-pane -t $SESSION:0.0

tmux attach -t $SESSION
```

Now `./scripts/dev-session.sh` opens your full development environment in one command — editor, dev server, and test runner all running, each in its own pane. If your connection drops or you close your laptop, `tmux attach` brings everything back exactly as you left it.

### `.tmux.conf`: essential configuration

The defaults in `tmux` are serviceable but not great. A minimal `~/.tmux.conf`:

```bash
# Remap prefix from Ctrl+B to Ctrl+A (easier to reach)
unbind C-b
set-option -g prefix C-a
bind-key C-a send-prefix

# Split panes with | and - (more intuitive)
bind | split-window -h
bind - split-window -v
unbind '"'
unbind %

# Reload config with Ctrl+A r
bind r source-file ~/.tmux.conf \; display "Config reloaded"

# Navigate panes with vim keys
bind h select-pane -L
bind j select-pane -D
bind k select-pane -U
bind l select-pane -R

# Enable mouse support
set -g mouse on

# Increase scrollback buffer
set -g history-limit 50000

# Start windows and panes at 1 (not 0)
set -g base-index 1
setw -g pane-base-index 1

# Enable true color support
set -g default-terminal "screen-256color"
set -ga terminal-overrides ",*256col*:Tc"

# Status bar
set -g status-bg black
set -g status-fg white
set -g status-left "#[bold]#S "
set -g status-right "%H:%M %d-%b"
```



## 8.8 Keyboard Shortcuts Worth Memorizing

Terminal keyboard shortcuts are multiplicative — they work in any command, in any context, without any setup. Spending thirty minutes learning them saves hours every week.

### Line editing (readline shortcuts)

These work in bash, zsh, and any readline-enabled program:

```
Ctrl+A         Move to beginning of line
Ctrl+E         Move to end of line
Alt+B          Move back one word
Alt+F          Move forward one word
Ctrl+W         Delete word before cursor
Alt+D          Delete word after cursor
Ctrl+U         Delete from cursor to beginning of line
Ctrl+K         Delete from cursor to end of line
Ctrl+Y         Paste what was last deleted (yank)
Ctrl+L         Clear screen (like running 'clear')
Ctrl+C         Cancel current command
Ctrl+D         Send EOF (exit shell if line is empty)
Ctrl+Z         Suspend current process (resume with 'fg')
```

`Ctrl+W` and `Ctrl+Y` together form a cut/paste pair — delete a word, move to where you want it, paste it back. `Ctrl+U` and `Ctrl+Y` do the same for an entire line.

### History navigation

```
Ctrl+R         Reverse search through history
Ctrl+P         Previous command (like up arrow)
Ctrl+N         Next command (like down arrow)
!!             Repeat last command
!$             Last argument of last command
!^             First argument of last command
!*             All arguments of last command
!git           Last command starting with "git"
```

`!$` is particularly useful: `mkdir new-directory && cd !$` — create a directory and immediately cd into it using the last argument from the previous command.

### Process control

```
Ctrl+C         Interrupt (kill) current process
Ctrl+Z         Suspend current process
fg             Resume suspended process in foreground
bg             Resume suspended process in background
jobs           List background and suspended jobs
```



## 8.9 Terminal Emulators Worth Considering

The terminal emulator is the application that runs your shell. The default options — Terminal.app on macOS, gnome-terminal on Linux — work fine, but several alternatives offer meaningful improvements for developers.

### iTerm2 (macOS)

iTerm2 is the most popular terminal emulator for macOS developers. Notable features:

- **Split panes** without needing tmux
- **Shell integration** — shows command history, marks command boundaries, tracks working directory
- **Semantic history** — `Cmd+click` on a filename or URL opens it
- **Inline images** — display images directly in the terminal
- **Tmux integration** — use tmux sessions with iTerm2's native tab/pane UI

```bash
brew install --cask iterm2
```

### Warp (macOS and Linux)

Warp is a newer terminal emulator that rethinks the interface more aggressively. Commands and their output are grouped into blocks you can select, copy, and share. It has built-in AI assistance, a command palette, and a modern text editing experience in the input area.

For developers who find the traditional terminal interface frustrating, Warp is worth trying. For developers who are already comfortable in the terminal, the changes can feel disorienting at first.

### Alacritty

Alacritty is a GPU-accelerated terminal emulator focused entirely on performance. It has minimal features by design — no tabs, no splits — but renders faster than any other option. If you use tmux for session management, Alacritty is a fast, lightweight host for it.

### Ghostty

Ghostty is a newer terminal emulator that balances performance with features, with native platform integration on macOS and Linux. It's worth watching if you want a fast emulator that doesn't sacrifice all convenience features.



## 8.10 A Recommended Setup

Here's a complete recommended setup for a developer who wants to invest in their terminal environment once and benefit for years:

**Shell**: zsh with Oh My Zsh, or fish for a more opinionated experience

**Prompt**: Starship — fast, informative, works with any shell

**Tools to install**:
```bash
brew install \
  fzf \          # fuzzy finder
  zoxide \       # smart directory navigation
  bat \          # better cat
  eza \          # better ls
  fd \           # better find
  ripgrep \      # better grep
  jq \           # JSON processing
  tmux \         # terminal multiplexer
  starship       # prompt
```

**Shell config additions** (`~/.zshrc`):
```bash
# Tool integrations
eval "$(starship init zsh)"
eval "$(zoxide init zsh)"
$(brew --prefix)/opt/fzf/install --all --no-update-rc

# Aliases
alias cat="bat --paging=never"
alias ls="eza"
alias ll="eza -lah --git"
alias lt="eza -lah --sort=modified"
alias find="fd"
alias grep="rg"

# History
HISTSIZE=100000
SAVEHIST=100000
setopt SHARE_HISTORY
setopt HIST_IGNORE_DUPS
setopt HIST_IGNORE_SPACE
setopt EXTENDED_HISTORY

# Navigation
setopt AUTO_CD
alias ..="cd .."
alias ...="cd ../.."

# fzf functions
fe() {
  local file
  file=$(fd --type f | fzf --preview 'bat --color=always {}') && \
    ${EDITOR:-vim} "$file"
}
```

**Tmux**: configured with `~/.tmux.conf` from section 8.7, with a per-project dev session script.

This setup takes about an hour to install and configure. The payoff — in raw speed, reduced friction, and the genuine pleasure of a well-tuned environment — is felt every working day for years afterward.



## Chapter Summary

A well-configured terminal environment is an investment that compounds over time. The tools and settings in this chapter don't just make individual tasks faster — they change the quality of the experience of working at the command line, from something that requires deliberate effort to something that feels fluid and natural.

The key habits to build:

- Install and configure Starship — the information density in a good prompt pays for itself immediately
- Spend one session learning and practicing the readline shortcuts — `Ctrl+A/E`, `Alt+B/F`, `Ctrl+W/K/U/Y` — until they're automatic
- Install `fzf` and use `Ctrl+R` for history search every day until it's instinctive
- Set up `zoxide` and let it learn your navigation patterns for a week before judging it
- Install `bat`, `eza`, and `fd` and alias them over their classic equivalents
- Give `tmux` a genuine two-week trial — the learning curve is real, but so is the payoff



## Exercises

**1.** Install Starship and configure it to show at minimum: current directory, git branch, git status, and the exit code indicator (green/red prompt character). Use it for a full work day and note what information you find yourself checking that the prompt now gives you for free.

**2.** Install `fzf` and its shell integrations. Spend one day using `Ctrl+R` for every history search instead of pressing the up arrow. Notice how often you find the command you want faster than you expected.

**3.** Install `zoxide` and use it exclusively for directory navigation for one week. Note how quickly it learns your patterns and how rarely you need to type full paths.

**4.** Install `tmux` and create a dev session script for a project you work on. The script should create a named session with at least two panes — one for editing and one for running the dev server. Practice detaching and reattaching with `Ctrl+A d` and `tmux attach`.

**5.** Audit your shell configuration. Add timestamps and deduplication to your history. Set `HISTSIZE` to at least 50,000. Add at least five aliases for commands you type frequently. Source the config and verify everything works.



## Quick Reference

### Essential tools
| Tool | Install | What it does |
||||
| `starship` | `brew install starship` | Fast, informative cross-shell prompt |
| `fzf` | `brew install fzf` | Fuzzy finder for history, files, anything |
| `zoxide` | `brew install zoxide` | Smart frecent directory navigation |
| `bat` | `brew install bat` | Syntax-highlighted cat replacement |
| `eza` | `brew install eza` | Modern ls with git integration |
| `fd` | `brew install fd` | Fast, gitignore-aware find replacement |
| `tmux` | `brew install tmux` | Terminal multiplexer |

### Readline shortcuts
| Shortcut | What it does |
|||
| `Ctrl+A / Ctrl+E` | Beginning / end of line |
| `Alt+B / Alt+F` | Back / forward one word |
| `Ctrl+W` | Delete word before cursor |
| `Ctrl+U / Ctrl+K` | Delete to beginning / end of line |
| `Ctrl+Y` | Paste last deleted text |
| `Ctrl+R` | Reverse history search |
| `Ctrl+L` | Clear screen |
| `Ctrl+Z` | Suspend process |
| `!!` | Repeat last command |
| `!$` | Last argument of last command |

### tmux shortcuts (with Ctrl+A prefix)
| Shortcut | What it does |
|||
| `Ctrl+A c` | New window |
| `Ctrl+A \|` | Split vertically |
| `Ctrl+A -` | Split horizontally |
| `Ctrl+A arrows` | Navigate panes |
| `Ctrl+A z` | Zoom pane |
| `Ctrl+A d` | Detach session |
| `tmux attach` | Reattach to session |
| `tmux new -s name` | New named session |
