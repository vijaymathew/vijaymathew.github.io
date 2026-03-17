# Process Management and Debugging

Every developer has been there. A development server that stopped responding but didn't exit. A test runner that's been "running" for forty minutes. A port that's supposedly in use by a process you can't identify. A script that behaves differently on your machine than on CI, and you can't figure out why the environment is different.

These situations have something in common: they're not code problems. They're *process* problems — questions about what's running, what it's doing, what environment it's operating in, and how to control it. Most developers handle them by restarting their machine, killing their terminal session, or spending twenty minutes guessing. The terminal gives you precise tools to diagnose and resolve them in seconds.

This chapter covers the tools for understanding and managing processes, debugging environment issues, and wrapping commands defensively so they fail gracefully rather than hanging forever. These aren't glamorous tools — you won't use them every day — but when you need them, nothing else will do.


## 8.1 Understanding What's Running with `ps`

`ps` (process status) shows information about running processes. It's been part of Unix since the beginning, and its flags are notoriously inconsistent across platforms — a legacy of competing Unix standards that was never fully resolved. The version you'll use most often sidesteps this by using BSD-style flags that work on both macOS and Linux:

```bash
ps aux
```

Breaking down the flags:
- `a` — show processes from all users, not just your own
- `u` — user-oriented format (shows username, CPU, memory)
- `x` — include processes not attached to a terminal

The output looks like this:

```
USER       PID  %CPU %MEM      VSZ    RSS   TT  STAT STARTED      TIME COMMAND
alice     1234   0.0  0.1  4286548  12345   ??  S    10:22AM   0:00.12 node server.js
alice     5678  98.3  2.4  8432156  98765   ??  R    10:45AM  12:34.56 python train.py
root       123   0.0  0.0  4198572   1234   ??  Ss   9:01AM    0:01.23 /usr/sbin/sshd
```

The columns you'll look at most often:

- **PID** — process ID, the number you use to send signals to a process
- **%CPU** — CPU usage percentage
- **%MEM** — memory usage percentage
- **STAT** — process state: `R` (running), `S` (sleeping), `Z` (zombie), `T` (stopped)
- **COMMAND** — the command that started the process

### Filtering `ps` output

`ps aux` on a busy system produces hundreds of lines. Combine with `grep` to find what you're looking for:

```bash
ps aux | grep node                    # find Node.js processes
ps aux | grep -v grep | grep python   # find Python processes (exclude grep itself)
ps aux | grep "port 3000"             # find process mentioning port 3000
```

The `grep -v grep` idiom is a classic — without it, the `grep` command itself shows up in the results because its command line contains the search term.

### Finding the most resource-hungry processes

```bash
ps aux --sort=-%cpu | head -10        # top 10 by CPU (Linux)
ps aux --sort=-%mem | head -10        # top 10 by memory (Linux)
ps aux | sort -rk3 | head -10         # top 10 by CPU (macOS/portable)
ps aux | sort -rk4 | head -10         # top 10 by memory (macOS/portable)
```

### `pgrep`: finding process IDs cleanly

When you just need the PID of a named process — not the full listing — `pgrep` is cleaner than `ps aux | grep`:

```bash
pgrep node                            # PID(s) of node processes
pgrep -l node                         # PIDs with process names
pgrep -a node                         # PIDs with full command lines
pgrep -u alice node                   # node processes owned by alice
```

`pgrep` returns just the PIDs, which makes it easy to compose with other commands:

```bash
pgrep -a node | wc -l                 # how many node processes are running?
```



## 8.2 Controlling Processes with `kill`

`kill` sends a signal to a process. Despite the name, it doesn't only kill — signals can pause, resume, reload, or terminate a process depending on which signal you send.

### Common signals

```bash
kill -15 <PID>          # SIGTERM: polite termination request (default)
kill <PID>              # same as kill -15
kill -9 <PID>           # SIGKILL: immediate, forceful termination
kill -1 <PID>           # SIGHUP: reload config (for daemons)
kill -19 <PID>          # SIGSTOP: pause process
kill -18 <PID>          # SIGCONT: resume paused process
```

The difference between SIGTERM (`-15`) and SIGKILL (`-9`) matters:

**SIGTERM** is a request. The process receives it and can handle it gracefully — flushing buffers, closing connections, cleaning up temporary files — before exiting. Well-behaved processes respect SIGTERM.

**SIGKILL** is not a request. The kernel terminates the process immediately, without giving it a chance to clean up. Use it only when SIGTERM doesn't work — a hung process, an unresponsive daemon, or a process that has explicitly ignored SIGTERM.

The right approach is always to try SIGTERM first:

```bash
kill 1234               # try polite termination first
sleep 5
kill -9 1234            # force kill if still running
```

### `pkill`: kill by name

`pkill` is to `kill` what `pgrep` is to `ps` — it finds processes by name and sends a signal to them:

```bash
pkill node                            # SIGTERM all node processes
pkill -9 node                         # SIGKILL all node processes
pkill -u alice node                   # kill alice's node processes only
pkill -f "node server.js"             # match against full command line
```

The `-f` flag matches against the full command line rather than just the process name — useful when multiple processes share a binary name but have different arguments:

```bash
pkill -f "node src/api-server.js"     # kill only the API server, not other node processes
```

### Killing a process on a specific port

One of the most common process management tasks in web development:

```bash
# Find what's on port 3000
lsof -ti tcp:3000

# Kill it
kill $(lsof -ti tcp:3000)

# One-liner to kill whatever is on a port
kill -9 $(lsof -ti tcp:3000)
```

`lsof` (list open files) with `-ti tcp:<port>` returns just the PID of the process listening on that port. The `$()` wraps it as a subshell, feeding the PID directly to `kill`. This is worth turning into a shell function:

```bash
# In ~/.zshrc or ~/.bashrc
killport() {
  local port=$1
  local pid=$(lsof -ti tcp:"$port")
  if [ -z "$pid" ]; then
    echo "Nothing running on port $port"
  else
    kill -9 $pid
    echo "Killed process $pid on port $port"
  fi
}
```

### Killing a process tree

When a process has spawned child processes, killing the parent doesn't always kill the children. To kill an entire process tree:

```bash
# Kill process and all its children (Linux)
kill -- -$(pgrep -o node)            # send signal to process group

# More explicit
pkill -P <parent-pid>                # kill children of a specific PID
```



## 8.3 `top` and `htop`: Live Process Monitoring

`ps` gives you a snapshot. `top` gives you a live view, refreshing every few seconds:

```bash
top
```

Inside `top`, useful keys:
- `q` — quit
- `k` — kill a process (prompts for PID)
- `u` — filter by user
- `o` — sort by a column
- `1` — toggle showing individual CPU cores

`top` is available everywhere. `htop` is a significantly improved version with color, mouse support, and a more intuitive interface:

```bash
brew install htop              # macOS
apt install htop               # Ubuntu
```

`htop` adds visual CPU and memory bars, easier process selection, and the ability to kill processes without needing to type their PID. If `htop` is available, use it. If not, `top` is always there.

### `lsof`: what files does a process have open?

`lsof` (list open files) is a versatile diagnostic tool. In Unix, everything is a file — including network connections, pipes, and devices. `lsof` shows all of them:

```bash
lsof -p <PID>                         # all files open by a process
lsof -p <PID> | grep -i "\.log"       # log files a process has open
lsof -i                               # all network connections
lsof -i tcp                           # TCP connections only
lsof -i tcp:3000                      # what's using port 3000
lsof -i :3000                         # same, shorter form
lsof +D /var/log                      # all processes with files open in a directory
lsof /path/to/file                    # which process has this file open
```

The last form is invaluable when you're trying to delete or modify a file and getting "resource busy" errors — `lsof /path/to/file` tells you exactly which process is holding it open.



## 8.4 `timeout`: Wrapping Commands Defensively

A command that hangs is worse than a command that fails. A failed command gives you an error and exits. A hanging command blocks your pipeline, your script, or your CI job indefinitely — until something external intervenes.

`timeout` wraps a command and kills it if it runs longer than a specified duration:

```bash
timeout 30 curl https://api.example.com/slow-endpoint
timeout 5m npm test
timeout 1h ./scripts/long-migration.sh
```

Time units: `s` (seconds, default), `m` (minutes), `h` (hours), `d` (days).

`timeout` exits with code `124` if the time limit was reached. This lets you handle the timeout case explicitly in scripts:

```bash
timeout 30 curl -s https://api.example.com/health
exit_code=$?

if [ $exit_code -eq 124 ]; then
  echo "Health check timed out after 30 seconds" >&2
  exit 1
elif [ $exit_code -ne 0 ]; then
  echo "Health check failed with code $exit_code" >&2
  exit 1
else
  echo "Health check passed"
fi
```

### The signal sent on timeout

By default, `timeout` sends SIGTERM when the time limit is reached. If the process doesn't respond to SIGTERM within a grace period, you can configure it to follow up with SIGKILL:

```bash
timeout --kill-after=5s 30s curl https://api.example.com/slow-endpoint
```

This sends SIGTERM after 30 seconds, then SIGKILL 5 seconds later if the process is still running. For processes that might ignore SIGTERM, this guarantees termination.

### Using `timeout` in scripts

Any operation that involves a network call, an external service, or an operation of unbounded duration should be wrapped in `timeout` in production scripts:

```bash
#!/usr/bin/env bash
set -euo pipefail

# Wait for database to be ready, with a timeout
DB_READY=false
for i in $(seq 1 30); do
  if timeout 2 bash -c "echo > /dev/tcp/localhost/5432" 2>/dev/null; then
    DB_READY=true
    break
  fi
  echo "Waiting for database... ($i/30)"
  sleep 2
done

$DB_READY || { echo "Database did not become ready in time" >&2; exit 1; }

# Run migrations with a timeout
echo "Running migrations..."
timeout 5m npm run db:migrate || {
  echo "Migrations timed out or failed" >&2
  exit 1
}
```



## 8.5 Environment Debugging with `env`, `printenv`, and `export`

A significant class of bugs in development — scripts that work locally but fail in CI, applications that behave differently across environments, commands that can't find other commands — trace back to environment variables. These tools help you see exactly what environment a process is operating in.

### `env` and `printenv`: inspecting the environment

```bash
env                               # print all environment variables
printenv                          # same output, slightly different format
env | sort                        # sorted for easier reading
env | grep PATH                   # find PATH and related variables
env | grep -i "api\|token\|key"   # find potential credentials
```

`printenv` can also look up specific variables:

```bash
printenv PATH                     # print PATH
printenv HOME SHELL EDITOR        # print multiple variables
printenv NODE_ENV                 # check current Node environment
```

### Understanding `PATH`

Most "command not found" errors come down to `PATH` — the list of directories the shell searches when you type a command. When something works interactively but not in a script, or works for one user but not another, check `PATH` first:

```bash
echo $PATH
echo $PATH | tr ':' '\n'          # one directory per line, easier to read
```

A common issue: a tool installed by `brew`, `nvm`, or `pyenv` is available in your interactive shell but not in scripts or cron jobs, because those run with a minimal `PATH` that doesn't include the custom directories.

To see what PATH a cron job will have:

```bash
env -i bash -c 'echo $PATH'       # simulate a minimal environment
```

`env -i` starts with a completely empty environment — it shows you exactly what `PATH` looks like with none of your shell customizations applied.

### Running a command with a modified environment

`env` can also set or override variables for a single command without affecting the current shell:

```bash
env NODE_ENV=production node server.js        # run with specific env var
env -u HOME node server.js                    # run with HOME unset
env NODE_ENV=test DATABASE_URL=sqlite://memory npm test    # multiple overrides
```

This is cleaner than `export`-ing a variable, running a command, and then unsetting it — and it doesn't affect other commands running in the same shell.

### `export`: making variables available to child processes

A subtle but important distinction: setting a variable in your shell doesn't automatically make it available to programs you run from that shell:

```bash
MY_VAR="hello"
bash -c 'echo $MY_VAR'           # prints nothing — MY_VAR wasn't exported

export MY_VAR="hello"
bash -c 'echo $MY_VAR'           # prints "hello"
```

`export` marks a variable to be inherited by child processes. This is why environment setup scripts use `export` for every variable — and why `.env` file loaders use `set -a` (which automatically exports everything) or `export $(cat .env | xargs)`.

### Debugging environment differences

When a script works interactively but fails in CI, the issue is almost always environment. This diagnostic pattern helps isolate it:

```bash
# Add near the top of a failing script to dump the full environment
echo "=== Environment ===" >&2
env | sort >&2
echo "=== PATH ===" >&2
echo $PATH | tr ':' '\n' >&2
echo "=== Which ===" >&2
which node npm python 2>&1 >&2
echo "==================" >&2
```

Redirecting to stderr (`>&2`) ensures this diagnostic output doesn't interfere with the script's normal stdout output if it's being piped or captured.



## 8.6 `which`, `type`, and `command`: Resolving Command Mysteries

"Command not found" and "this isn't the version I expected" are the two most common environment debugging scenarios. These tools resolve them.

### `which`: finding a command's location

```bash
which node                        # /usr/local/bin/node
which python                      # /usr/bin/python
which python3                     # /opt/homebrew/bin/python3
which git                         # /usr/bin/git
```

`which` searches your `PATH` and returns the full path of the first matching executable. When you have multiple versions of a tool installed — multiple Pythons, multiple Nodes — `which` shows you which one will be used when you type the bare command name.

To see *all* matching executables in PATH (not just the first):

```bash
which -a python                   # shows all python executables in PATH order
which -a node
```

This is useful when you suspect a version manager like `nvm`, `pyenv`, or `rbenv` isn't working correctly — `which -a` shows you every version on your PATH and their order of precedence.

### `type`: more information than `which`

`type` is a shell builtin that goes further than `which` — it distinguishes between external executables, shell builtins, shell functions, and aliases:

```bash
type ls                           # ls is an alias for eza
type cd                           # cd is a shell builtin
type grep                         # grep is /usr/bin/grep
type ll                           # ll is a shell function
```

This is important because `which` only finds external executables — it won't find aliases or shell functions. When a command behaves differently than expected, `type` tells you exactly what it is:

```bash
type git                          # is it the git you think it is?
type python                       # which python is this?
type make                         # is this the system make or a custom one?
```

### `command -v`: the portable alternative

In scripts, `which` isn't always available and its behavior varies across systems. `command -v` is the POSIX-portable way to check whether a command exists:

```bash
command -v node                   # prints path if found, nothing if not
command -v node &>/dev/null && echo "node is installed" || echo "node not found"
```

This is the pattern to use in setup scripts when checking for required tools:

```bash
for tool in node npm git curl jq; do
  if ! command -v "$tool" &>/dev/null; then
    echo "Error: $tool is required but not installed" >&2
    exit 1
  fi
done
```

### `hash`: clearing the command cache

Shells cache the location of commands after the first lookup. If you install a new version of a tool and the shell still finds the old one, the cache is the culprit:

```bash
hash -r                           # clear entire command cache
hash -d node                      # clear cache for a specific command
```

After running `hash -r` or starting a new shell session, the next invocation of any command will do a fresh PATH lookup.



## 8.7 Debugging with `strace` and `dtrace`

For the hardest process debugging problems — a process that's doing something unexpected and you can't figure out what — system call tracing tools let you see exactly what a process is doing at the operating system level.

### `strace` (Linux)

`strace` intercepts and records system calls made by a process — every file it opens, every network connection it makes, every signal it receives:

```bash
strace ls                                      # trace system calls made by ls
strace -p <PID>                                # attach to a running process
strace -e trace=file ls                        # trace only file-related calls
strace -e trace=network curl example.com       # trace only network calls
strace -o output.txt node server.js            # write trace to file
```

The output is verbose — `ls` makes dozens of system calls — but it's the ground truth of what a process is doing. When a process claims it can't find a file, `strace -e trace=file` shows you exactly which paths it's searching and why each one fails.

### `dtruss` (macOS)

macOS uses `dtruss` as the equivalent of `strace`:

```bash
sudo dtruss ls                                # requires sudo on macOS
sudo dtruss -p <PID>                          # attach to running process
```

System call tracing is a power tool — reach for it when all other debugging approaches have failed. But when you need it, it provides an unambiguous view of exactly what a process is doing that no other tool can match.



## 8.8 Background Jobs and Process Groups

We covered background jobs briefly in Chapter 7. Here's the fuller picture from a process management perspective.

### Job control

```bash
./long-running-script.sh &         # run in background immediately
Ctrl+Z                             # suspend the foreground process
bg                                 # resume suspended process in background
fg                                 # bring background process to foreground
fg %2                              # bring specific job to foreground
jobs                               # list all background and suspended jobs
jobs -l                            # list with PIDs
```

### `wait`: waiting for background jobs

In scripts that launch multiple background processes, `wait` blocks until they complete:

```bash
#!/usr/bin/env bash
set -euo pipefail

# Run three tasks in parallel
./scripts/run-tests.sh &
PID_TESTS=$!

./scripts/build-assets.sh &
PID_BUILD=$!

./scripts/generate-docs.sh &
PID_DOCS=$!

# Wait for all three and check exit codes
wait $PID_TESTS || { echo "Tests failed" >&2; exit 1; }
wait $PID_BUILD || { echo "Build failed" >&2; exit 1; }
wait $PID_DOCS  || { echo "Docs generation failed" >&2; exit 1; }

echo "All tasks completed successfully"
```

This pattern — launch multiple background jobs, capture their PIDs with `$!`, then `wait` for each one — is how you parallelize work in a shell script without reaching for a more complex tool.

### Process substitution

A more advanced technique: process substitution treats the output of a command as a file:

```bash
diff <(sort file1.txt) <(sort file2.txt)     # diff sorted versions without temp files
comm <(sort list1.txt) <(sort list2.txt)     # find common and unique lines
wc -l <(find . -name "*.ts")                 # count matching files
```

`<(command)` creates a temporary named pipe and passes it as a file argument. This avoids the need for intermediate temporary files in many situations.



## 8.9 Practical Debugging Workflows

### Scenario 1: Something is using my port

```bash
# Find what's on port 3000
lsof -i :3000

# Output:
# COMMAND   PID   USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
# node     1234  alice   23u  IPv6 0x...            0t0  TCP *:3000 (LISTEN)

# Kill it
kill $(lsof -ti :3000)

# Verify the port is free
lsof -i :3000        # should return nothing
```

### Scenario 2: A script works locally but fails in CI

```bash
# Check what environment CI is running in
# Add to the failing script temporarily:
echo "Node: $(node --version)"
echo "npm: $(npm --version)"
echo "PATH: $PATH"
echo "Working directory: $(pwd)"
echo "User: $(whoami)"
env | sort | grep -E "NODE|NPM|CI|PATH"

# Check if the command even exists in CI's PATH
command -v npx || echo "npx not found"
which node || echo "node not in PATH"
```

### Scenario 3: A process is consuming too much CPU

```bash
# Find the offender
ps aux --sort=-%cpu | head -5

# Get more detail on the process
ps -p <PID> -o pid,ppid,cmd,%cpu,%mem,etime

# Find all files it has open (might indicate what it's stuck on)
lsof -p <PID> | tail -20

# Check if it's in a tight loop or waiting
# Look at STAT column: R = running, S = sleeping, D = waiting on IO
ps -p <PID> -o stat
```

### Scenario 4: A script hangs occasionally in CI

```bash
#!/usr/bin/env bash
# Wrap every potentially hanging operation with timeout

# Database health check — shouldn't take more than 5 seconds
timeout 5 bash -c 'until pg_isready -h localhost; do sleep 0.5; done' || {
  echo "Database not ready after 5 seconds" >&2
  exit 1
}

# External API call — 30 second limit
timeout 30 curl -sf https://api.example.com/health || {
  echo "API health check failed or timed out" >&2
  exit 1
}

# Test suite — should complete within 10 minutes
timeout 10m npm test || {
  exit_code=$?
  if [ $exit_code -eq 124 ]; then
    echo "Test suite timed out after 10 minutes" >&2
  else
    echo "Test suite failed with code $exit_code" >&2
  fi
  exit 1
}
```

### Scenario 5: "Command not found" that makes no sense

```bash
# The full diagnostic sequence
which mycommand                   # is it in PATH?
type mycommand                    # is it an alias, function, or builtin?
echo $PATH | tr ':' '\n'          # what directories are in PATH?
ls /usr/local/bin | grep my       # is it installed but not in PATH?
hash -r && mycommand              # clear cache and retry

# Check if it exists but isn't executable
ls -la $(which mycommand 2>/dev/null || echo "/usr/local/bin/mycommand")

# Check if it's a different architecture (Apple Silicon issue)
file $(which mycommand)           # is it x86_64 on an ARM machine?
```



## Chapter Summary

Process management and environment debugging feel like niche skills until the moment you need them — and then they feel like the most important skills in the book. The tools in this chapter give you complete visibility into what's running on your system, what environment it's operating in, and how to control or terminate it precisely.

The key habits to build:

- Always try SIGTERM before SIGKILL — give processes a chance to clean up
- Use `lsof -i :<port>` as your first move when a port appears to be in use
- Wrap any network call or unbounded operation in `timeout` in scripts — hanging is worse than failing
- Use `type` rather than `which` when debugging command resolution — it finds aliases and functions too
- Add `env | sort` and `which` diagnostics to scripts that fail in CI but work locally
- Use `command -v` in scripts to check for required tools — it's portable and reliable
- Keep `kill -9` as a last resort, not a first instinct



## Exercises

**1.** Find the process using the most CPU on your system right now using `ps aux`. Get its PID, then use `lsof -p <PID>` to see what files it has open. What do those open files tell you about what the process is doing?

**2.** Start a simple HTTP server (`python3 -m http.server 8080`), then use `lsof -i :8080` to find its PID. Kill it using `kill $(lsof -ti :8080)` and verify the port is free.

**3.** Write a shell function called `killport` that takes a port number as an argument, checks whether anything is running on that port, and kills it if so — or prints a message if the port is free. Add it to your shell config.

**4.** Write a script that launches three commands in parallel using `&`, captures their PIDs with `$!`, and uses `wait` to check whether each one succeeded. If any fail, the script should report which ones and exit with a non-zero code.

**5.** Find a command you use regularly and run `type`, `which -a`, and `command -v` on it. If you have version managers like `nvm` or `pyenv` installed, check how they affect the output. Make sure you understand exactly which binary runs when you type that command.



## Quick Reference

| Command | What it does |
|||
| `ps aux` | Show all running processes |
| `ps aux \| grep node` | Find processes by name |
| `ps aux --sort=-%cpu \| head` | Top processes by CPU |
| `pgrep -a node` | Find PIDs by process name |
| `pkill node` | Kill processes by name |
| `pkill -f "node server.js"` | Kill by full command line |
| `kill <PID>` | Send SIGTERM (polite) |
| `kill -9 <PID>` | Send SIGKILL (forceful) |
| `lsof -i :<port>` | What process is on this port? |
| `kill $(lsof -ti :<port>)` | Kill process on a port |
| `lsof -p <PID>` | Files open by a process |
| `top` / `htop` | Live process monitor |
| `timeout 30 <command>` | Kill command after 30 seconds |
| `timeout --kill-after=5s 30s <cmd>` | SIGTERM then SIGKILL |
| `env` | Print all environment variables |
| `env \| sort \| grep PATH` | Find PATH-related variables |
| `env NODE_ENV=prod node app.js` | Run with modified environment |
| `env -i bash -c 'echo $PATH'` | Simulate minimal environment |
| `which node` | Find command location in PATH |
| `which -a python` | Find all versions in PATH |
| `type ls` | Is it alias, builtin, or binary? |
| `command -v node` | Portable command existence check |
| `hash -r` | Clear shell command cache |
| `jobs -l` | List background jobs with PIDs |
| `wait $PID` | Wait for background job |
| `strace -p <PID>` | Trace system calls (Linux) |
