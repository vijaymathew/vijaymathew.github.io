# Git Workflows from the Command Line

Most developers use Git every day. Most developers also use only a fraction of what Git can do.

The typical workflow — `git add`, `git commit`, `git push`, `git pull` — covers the basics of moving code around. But Git is also a database. Every version of every file your project has ever contained is stored in it. Every change, who made it, when, and — if they wrote a good commit message — why. Every branch, every merge, every rebase.

The command line is where that database becomes queryable. GUI Git clients are fine for basic operations, but they put a layer of abstraction between you and the underlying data that makes the more powerful operations either impossible or difficult to discover. The terminal gives you direct access to everything Git knows — and Git knows a lot.

This chapter covers the Git workflows and commands that most developers either don't know exist or have heard of but never learned properly. The assumption is that you're already comfortable with the basics. What follows is everything beyond them.


## Understanding Your Repository at a Glance

Before making changes, it helps to understand exactly where things stand. These commands give you that picture quickly.

### `git status` — but more useful

Most developers know `git status`. Fewer know its short form:

```bash
git status -s
```

The `-s` flag produces compact output — one line per file, with a two-character status code on the left:

```
M  src/auth.ts         # modified, staged
 M src/config.ts       # modified, not staged
?? src/new-file.ts     # untracked
A  src/added.ts        # new file, staged
D  src/deleted.ts      # deleted, staged
```

The first character is the staging area status; the second is the working tree status. Once you're used to reading this format, it's faster than the verbose default output.

### `git log` — actually readable

The default `git log` output is verbose and hard to scan. These formats are far more useful:

```bash
git log --oneline                          # one line per commit
git log --oneline --graph                  # with branch/merge graph
git log --oneline --graph --all            # include all branches
git log --oneline --graph --all --decorate # with branch and tag names
```

The `--graph --all --decorate` combination gives you a visual representation of your entire branch history — merges, divergences, tags, and all — in the terminal. It's not as pretty as a GUI, but it's always available and it's composable:

```bash
git log --oneline --graph --all --decorate | head -30    # recent history only
git log --oneline --graph --all | grep "feature/"        # filter to feature branches
```

### Filtering log output

```bash
git log --oneline --author="Alice"              # commits by a specific author
git log --oneline --since="2 weeks ago"         # recent commits
git log --oneline --since="2024-01-01" --until="2024-03-01"  # date range
git log --oneline --grep="fix"                  # commits with "fix" in message
git log --oneline src/auth.ts                   # commits that touched a specific file
```

The last one is especially useful: `git log <filename>` shows the complete history of a specific file — every commit that changed it, in chronological order. Pair it with `-p` to see the actual diff for each change:

```bash
git log -p src/auth.ts                  # full diff history of a file
git log -p --follow src/auth.ts         # follow file across renames
```

`--follow` is important for files that have been renamed — without it, git log stops at the rename boundary.

### `git log --stat` and `git log --shortstat`

When you want to understand the *scope* of recent changes without reading every diff:

```bash
git log --stat --oneline                # files changed per commit
git log --shortstat --oneline           # summary stats per commit
```

```
a3f2c1b Fix authentication token handling
 src/auth.ts | 12 ++++++
 src/config.ts |  2 +-
 2 files changed, 7 insertions(+), 7 deletions(-)
```



## Investigating Changes

Understanding *what* changed is one thing. Understanding *why* it changed — and *when* — requires a different set of tools.

### `git diff` — beyond the basics

```bash
git diff                          # unstaged changes
git diff --staged                 # staged changes (what will be committed)
git diff HEAD                     # all changes since last commit
git diff main..feature-branch     # changes between two branches
git diff HEAD~3..HEAD             # changes in the last 3 commits
git diff HEAD~1 src/auth.ts       # changes to a specific file since last commit
```

For a high-level summary of what changed without the full diff:

```bash
git diff --stat main..feature-branch      # files changed and line counts
git diff --name-only main..feature-branch # just the filenames
git diff --name-status main..feature-branch # filenames with change type (A/M/D)
```

The `--name-only` output is useful when you want to feed changed files into another command:

```bash
git diff --name-only main..HEAD | xargs rg "TODO"    # TODOs in changed files only
```

### `git blame` — who wrote this?

`git blame` annotates every line of a file with the commit and author that last modified it:

```bash
git blame src/auth.ts
```

```
a3f2c1b (Alice  2024-03-10 14:22:18 +0000  42) function handleAuth(req, res) {
b7d9e2a (Bob    2024-02-28 09:15:44 +0000  43)   const token = req.headers['authorization'];
a3f2c1b (Alice  2024-03-10 14:22:18 +0000  44)   if (!token) {
```

The output shows commit hash, author, date, line number, and line content. This is the command you reach for when you're staring at a confusing piece of code and asking "why does this work this way?" — `git blame` tells you who to ask and when it was written.

Useful flags:

```bash
git blame -L 40,60 src/auth.ts        # blame only lines 40–60
git blame -w src/auth.ts              # ignore whitespace changes
git blame -M src/auth.ts              # detect lines moved within the file
git blame -C src/auth.ts              # detect lines copied from other files
```

### `git show` — inspecting a specific commit

```bash
git show a3f2c1b                      # full diff for a commit
git show a3f2c1b --stat               # summary of files changed
git show a3f2c1b:src/auth.ts          # file contents at that commit
git show HEAD~3:src/config.ts         # file contents 3 commits ago
```

The `git show <commit>:<file>` form is particularly useful — it lets you read the old version of a file without checking it out. When someone says "this worked last week," you can compare the current version to the version from a week ago:

```bash
git show HEAD~7:src/auth.ts | diff - src/auth.ts      # diff old vs current
```

### `git log -S` — the pickaxe (revisited)

We covered this in Chapter 2, but it's worth emphasizing again in context. The `-S` flag finds commits that *added or removed* a specific string:

```bash
git log -S "handleAuth" --oneline           # when was this function introduced?
git log -S "API_KEY" --oneline              # when was this constant added?
git log -S "DROP TABLE" --oneline           # find dangerous migrations
```

This is one of the most powerful debugging tools in Git. When you find an unexpected piece of code and need to understand its history, `git log -S` will find the exact moment it was introduced.



## Branching and Merging Efficiently

### Creating and switching branches

```bash
git switch -c feature/new-auth          # create and switch (modern syntax)
git switch main                         # switch to existing branch
git switch -                            # switch to previous branch
```

The `git switch` command was introduced in Git 2.23 as a cleaner alternative to `git checkout` for branch operations. `git switch -` (switch to previous branch) is particularly handy — it works like `cd -` for navigating between the two branches you're currently working across.

### Keeping a branch up to date

```bash
git fetch origin                        # fetch remote changes without merging
git rebase origin/main                  # rebase current branch onto main
git pull --rebase origin main           # fetch and rebase in one step
```

The `--rebase` flag on `git pull` is worth making a habit. Instead of creating a merge commit every time you pull, it replays your local commits on top of the updated remote branch — keeping history linear and readable.

To make this the default:

```bash
git config --global pull.rebase true
```

### Interactive rebase — cleaning up before merging

Before merging a feature branch, it's good practice to clean up your commits — squashing work-in-progress commits, rewriting unclear messages, reordering changes for clarity. Interactive rebase is the tool for this:

```bash
git rebase -i HEAD~5                    # interactively edit the last 5 commits
git rebase -i origin/main              # edit all commits not yet in main
```

This opens an editor with a list of commits and instructions:

```
pick a3f2c1b Add authentication middleware
pick b7d9e2a WIP
pick c8e3f4a fix tests
pick d9f4g5h more fixes
pick e0g5h6i cleanup

# Commands:
# p, pick = use commit
# r, reword = use commit, but edit the commit message
# s, squash = use commit, but meld into previous commit
# f, fixup = like squash, but discard this commit's log message
# d, drop = remove commit
```

Changing `pick` to `squash` (or `s`) merges a commit into the one above it. `fixup` does the same but discards the commit message. `reword` lets you edit the message. `drop` removes the commit entirely.

A common pattern before a pull request:

```bash
git rebase -i origin/main
# squash all WIP commits into their parent commits
# reword any unclear commit messages
# drop any debugging commits
```

### Stashing work in progress

When you need to switch contexts mid-work without committing:

```bash
git stash                               # stash all changes
git stash push -m "auth refactor WIP"  # stash with a description
git stash list                          # see all stashes
git stash pop                           # apply and remove most recent stash
git stash apply stash@{2}              # apply a specific stash without removing
git stash drop stash@{0}               # delete a specific stash
```

A stash is a stack — `git stash pop` takes the most recent entry. If you have multiple stashes, `git stash list` shows them all, and you can apply them by index.

### Cherry-picking commits

To apply a specific commit from one branch to another without merging the whole branch:

```bash
git cherry-pick a3f2c1b                # apply a single commit
git cherry-pick a3f2c1b..e0g5h6i      # apply a range of commits
git cherry-pick a3f2c1b --no-commit    # apply changes without committing
```

`--no-commit` applies the changes to the working tree and staging area but doesn't create a commit — useful when you want to cherry-pick changes and combine them with other modifications before committing.



## Undoing Things

Git's undo model is one of the most important things to understand deeply. There are several different tools, each appropriate for different situations.

### `git restore` — discarding working tree changes

```bash
git restore src/auth.ts                # discard changes to a file
git restore .                          # discard all unstaged changes
git restore --staged src/auth.ts       # unstage a file (keep changes)
```

`git restore` is the modern replacement for `git checkout -- <file>`. It's clearer about intent and harder to misuse.

### `git reset` — moving the branch pointer

```bash
git reset HEAD~1                       # undo last commit, keep changes staged
git reset --soft HEAD~1               # undo last commit, keep changes staged
git reset --mixed HEAD~1              # undo last commit, unstage changes (default)
git reset --hard HEAD~1               # undo last commit, discard all changes
```

The three modes of `git reset` are important to understand:

- `--soft`: the commit is undone but all its changes remain staged. Useful for re-committing with a different message or squashing commits manually.
- `--mixed` (default): the commit is undone and changes are unstaged but preserved in the working tree. Useful for re-organizing what goes into the next commit.
- `--hard`: the commit is undone and all changes are discarded permanently. Use with caution — this is one of the few Git operations that can lose work.

### `git revert` — undoing without rewriting history

When you need to undo a commit that has already been pushed to a shared branch, `git reset` is the wrong tool — it rewrites history, which causes problems for anyone else working on the branch. `git revert` is the right tool:

```bash
git revert a3f2c1b                    # create a new commit that undoes a3f2c1b
git revert HEAD~3..HEAD               # revert the last 3 commits
git revert a3f2c1b --no-commit        # stage the revert without committing
```

`git revert` creates a new commit that is the inverse of the specified commit — it adds lines that were removed and removes lines that were added. History is preserved, and the undo is visible to everyone.

### `git reflog` — the safety net

The reflog is a local log of every position HEAD has been at, including commits that have been reset, amended, or rebased away. It's your safety net when you've done something destructive:

```bash
git reflog                             # show HEAD movement history
git reflog show feature/auth           # show reflog for a specific branch
```

```
a3f2c1b HEAD@{0}: commit: Add auth middleware
b7d9e2a HEAD@{1}: reset: moving to HEAD~1
c8e3f4a HEAD@{2}: commit: WIP
d9f4g5h HEAD@{3}: checkout: moving from main to feature/auth
```

If you accidentally ran `git reset --hard` and lost commits, `git reflog` shows you where HEAD was before the reset. You can recover those commits:

```bash
git reset --hard HEAD@{2}             # go back to where HEAD was 2 moves ago
git checkout -b recovery HEAD@{2}     # create a branch at an earlier HEAD position
```

The reflog only exists locally and expires after 90 days by default, but within that window it has saved countless developers from genuine data loss.



## Working with Remotes

### Fetching and inspecting before merging

A good habit before merging remote changes is to fetch and inspect them first:

```bash
git fetch origin                              # fetch without merging
git log --oneline HEAD..origin/main           # what's new on remote main?
git diff HEAD origin/main                     # what changed?
git diff --stat HEAD origin/main              # summary of changes
```

This gives you a chance to understand what you're about to merge before you merge it — and to resolve any obvious conflicts mentally before they appear in your working tree.

### Tracking branches

```bash
git branch -vv                                # show all branches with tracking info
git branch -r                                 # show all remote branches
git branch -a                                 # show local and remote branches
```

`git branch -vv` is a useful overview — it shows each local branch, the commit it's at, its tracking remote (if any), and whether it's ahead, behind, or diverged from the remote:

```
  feature/auth    a3f2c1b [origin/feature/auth: ahead 2] Add auth middleware
* main            b7d9e2a [origin/main] Update README
  old-feature     c8e3f4a [origin/old-feature: gone] Old work
```

Branches marked `gone` have had their remote deleted — usually after a merged pull request. You can clean them up:

```bash
git fetch --prune                             # remove tracking refs for deleted remotes
git branch -vv | grep ': gone]' | awk '{print $1}' | xargs git branch -d
```

This one-liner finds all local branches whose remote has been deleted and removes them — a useful cleanup after a sprint or release.

### Pushing efficiently

```bash
git push -u origin feature/auth               # push and set upstream
git push --force-with-lease                   # safer force push
git push origin --delete feature/old          # delete a remote branch
```

`--force-with-lease` is a safer alternative to `git push --force`. It refuses to push if the remote branch has been updated since you last fetched — protecting you from accidentally overwriting someone else's commits.



## Git Aliases — Building Your Own Commands

Git's built-in commands are verbose. Aliases let you define shorter, more memorable versions:

```bash
git config --global alias.st "status -s"
git config --global alias.lg "log --oneline --graph --all --decorate"
git config --global alias.co "switch"
git config --global alias.last "log -1 HEAD --stat"
git config --global alias.undo "reset --soft HEAD~1"
git config --global alias.unstage "restore --staged"
```

After setting these, `git lg` gives you the decorated graph log, `git undo` undoes your last commit softly, and `git unstage <file>` removes a file from staging.

Aliases can also run shell commands by prefixing with `!`:

```bash
git config --global alias.root "rev-parse --show-toplevel"    # print repo root
git config --global alias.whoami "config user.email"          # print current git user
```

Your aliases are stored in `~/.gitconfig`. Viewing and editing them directly is often easier than using `git config`:

```bash
cat ~/.gitconfig          # view all git configuration
```



## Searching the Repository

Beyond what we covered in Chapter 2, Git offers several powerful ways to search the repository itself.

### `git grep`

```bash
git grep "handleAuth"                         # search tracked files
git grep -n "handleAuth"                      # with line numbers
git grep -l "handleAuth"                      # filenames only
git grep "handleAuth" -- "*.ts"               # search only TypeScript files
git grep "handleAuth" HEAD~10                 # search at a point in history
```

`git grep` is faster than `rg` for repository searches because it reads directly from Git's object store rather than the filesystem.

### Finding which commit broke something with `git bisect`

`git bisect` is one of the most powerful and least-used tools in Git. It performs a binary search through commit history to find the exact commit that introduced a bug.

```bash
git bisect start
git bisect bad                              # current commit has the bug
git bisect good v1.2.0                     # this version was fine
```

Git will check out a commit halfway between the good and bad versions. You test whether the bug exists, then tell Git:

```bash
git bisect good                             # this commit is fine
# or
git bisect bad                              # this commit has the bug
```

Git narrows the range by half each time. For a range of 1000 commits, it takes only 10 steps to find the exact offending commit. When it's done:

```bash
git bisect reset                            # return to original HEAD
```

`git bisect` can also be automated with a test script:

```bash
git bisect start HEAD v1.2.0
git bisect run npm test                     # automatically test each commit
```

This runs `npm test` at each commit and uses the exit code to determine good or bad automatically — finding the breaking commit with no manual intervention.



## Shell Aliases and Scripts for Git Workflows

Beyond Git's own alias system, shell-level aliases and functions can further streamline your workflow:

```bash
# In ~/.zshrc or ~/.bashrc

# Common shortcuts
alias gs="git status -s"
alias ga="git add"
alias gc="git commit -m"
alias gp="git push"
alias gl="git log --oneline --graph --all --decorate"

# Switch to main and pull latest
alias gomain="git switch main && git pull --rebase"

# Delete merged branches
alias gclean="git branch --merged main | grep -v 'main\|*' | xargs git branch -d"

# Open the repository in GitHub (macOS)
alias ghopen="open \$(git remote get-url origin | sed 's/git@github.com:/https:\/\/github.com\//' | sed 's/\.git$//')"
```

The `gclean` alias is worth highlighting: it deletes all local branches that have already been merged into main — the kind of housekeeping that's easy to forget and builds up over time.



## Putting It Together: Real Git Workflows

### Investigating a production bug

```bash
# When did this start happening?
git log -S "NullPointerException" --oneline

# Who changed the relevant file recently?
git log --oneline --since="1 week ago" src/auth.ts

# What exactly changed in that commit?
git show a3f2c1b

# Who wrote the specific line that's failing?
git blame -L 87,92 src/auth.ts

# Is this bug in the current release tag?
git log v2.1.0..HEAD --oneline src/auth.ts
```

### Preparing a clean pull request

```bash
# Start from updated main
git switch main && git pull --rebase

# Create feature branch
git switch -c feature/auth-refactor

# ... do work, make commits ...

# Before opening PR: clean up commits
git rebase -i origin/main

# Check what will be merged
git diff --stat origin/main..HEAD
git log --oneline origin/main..HEAD

# Push
git push -u origin feature/auth-refactor
```

### Recovering from a mistake

```bash
# Accidentally committed to main instead of a branch
git log --oneline -3                          # find the commit hash
git switch -c feature/accidental-commit       # create branch here
git switch main
git reset --hard HEAD~1                       # remove commit from main
git switch feature/accidental-commit          # continue work on the branch

# Accidentally deleted a branch
git reflog                                    # find the last commit on that branch
git checkout -b recovered-branch HEAD@{4}    # recreate it
```



## Chapter Summary

Git's command line interface is the most complete way to interact with a repository. The tools in this chapter — `git log` with its many flags, `git diff`, `git blame`, `git bisect`, interactive rebase, the reflog — give you a level of visibility and control over your codebase's history that no GUI can fully replicate.

The key habits to build:

- Use `git log --oneline --graph --all --decorate` (or an alias for it) as your default history view
- Reach for `git blame` whenever you encounter code that doesn't make obvious sense — the history is usually the explanation
- Always use `--force-with-lease` instead of `--force` when pushing
- Learn `git bisect` — it's the fastest way to find a breaking commit in a large history
- Use interactive rebase to clean up commits before opening a pull request
- Keep `git reflog` in the back of your mind as your safety net — almost nothing in Git is truly permanent



## Exercises

**1.** Find a repository you've worked on for a while. Use `git log --oneline --graph --all --decorate` to visualize its branch history. Identify any branches that have been merged and not cleaned up.

**2.** Use `git blame` to investigate a piece of code you've always found confusing. Find the commit that introduced it and read the full diff with `git show`. Does the commit message explain the decision?

**3.** Practice `git bisect` on any repository: introduce a known bug, commit a few more times, then use `git bisect` to find the exact commit that introduced it.

**4.** Use interactive rebase on a feature branch to squash all commits into a single well-described commit. Then use `git log -p` to verify the result looks correct.

**5.** Set up at least three Git aliases — one for your preferred `git log` format, one for a common operation you do repeatedly, and one shell alias for a multi-step workflow.



## Quick Reference

| Command | What it does |
| --- | --- |
| `git status -s` | Compact status view |
| `git log --oneline --graph --all --decorate` | Visual branch history |
| `git log --oneline src/file.ts` | History of a specific file |
| `git log -p --follow src/file.ts` | Full diff history, following renames |
| `git log -S "pattern" --oneline` | Find commits that added/removed a string |
| `git diff --name-only main..HEAD` | Files changed since branching from main |
| `git blame -L 40,60 src/file.ts` | Annotate specific lines |
| `git show <commit>:src/file.ts` | View file at a specific commit |
| `git bisect start / good / bad` | Binary search for a breaking commit |
| `git rebase -i origin/main` | Interactive rebase for cleanup |
| `git stash push -m "description"` | Stash with a label |
| `git restore --staged src/file.ts` | Unstage a file |
| `git reset --soft HEAD~1` | Undo last commit, keep changes staged |
| `git revert <commit>` | Undo a commit without rewriting history |
| `git reflog` | View full HEAD movement history |
| `git push --force-with-lease` | Safe force push |
| `git fetch --prune` | Remove stale remote tracking branches |
| `git branch -vv` | Show branches with tracking status |
