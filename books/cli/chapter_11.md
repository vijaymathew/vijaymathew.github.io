# Working on Remote Machines

Most developers work locally most of the time. But at some point, every developer ends up on a remote machine — SSH'd into a production server to investigate an incident, working on a cloud-based development environment, running jobs on a remote build server, deploying to a staging environment, or debugging something that only reproduces in a specific infrastructure configuration.

The terminal is the native interface for remote machines. There is no GUI, no IDE plugin that fully abstracts the distance, no substitute for knowing how to work effectively over SSH. And yet most developers treat SSH as a single command — `ssh user@host` — and discover everything else only when they urgently need it and don't have time to learn it properly.

This chapter covers SSH from the ground up: configuration that makes connecting fast and painless, transferring files reliably, tunneling ports for local access to remote services, multiplexing connections for speed, and using `tmux` over SSH so that your work survives disconnections. By the end of it, working on a remote machine will feel almost as fluid as working locally.


## SSH Basics and Key Authentication

SSH (Secure Shell) is the protocol for securely connecting to remote machines. The basic command:

```bash
ssh username@hostname
ssh username@192.168.1.100
ssh username@server.example.com
```

### Key-based authentication

Password authentication works but is slow, inconvenient, and less secure than key-based authentication. Key-based authentication uses a cryptographic key pair — a private key that stays on your machine and a public key that goes on the remote server.

Generate a key pair if you don't have one:

```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
```

`ed25519` is the modern, recommended key type — faster and more secure than the older `RSA`. The `-C` flag adds a comment to help identify the key. Accept the default location (`~/.ssh/id_ed25519`) and set a passphrase when prompted — the passphrase encrypts your private key so it's useless if stolen.

Copy your public key to a remote server:

```bash
ssh-copy-id username@hostname
```

This appends your public key to `~/.ssh/authorized_keys` on the remote server. After this, you can log in without a password.

If `ssh-copy-id` isn't available:

```bash
cat ~/.ssh/id_ed25519.pub | ssh username@hostname "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

### The ssh-agent

Typing your key passphrase every time you SSH somewhere defeats the convenience of key authentication. `ssh-agent` holds your decrypted private key in memory for the duration of a session:

```bash
eval "$(ssh-agent -s)"           # start the agent
ssh-add ~/.ssh/id_ed25519        # add your key (prompts for passphrase once)
ssh-add -l                       # list loaded keys
```

On macOS, the system Keychain integrates with `ssh-agent` so your passphrase is remembered across reboots. Add to `~/.ssh/config`:

```
Host *
  AddKeysToAgent yes
  UseKeychain yes
```



## The SSH Config File

Typing `ssh -i ~/.ssh/id_ed25519 -p 2222 -l alice server.example.com` every time you connect to a server is tedious and error-prone. The SSH config file — `~/.ssh/config` — lets you define aliases and settings for every host you connect to regularly.

### Basic host configuration

```
# ~/.ssh/config

Host myserver
  HostName server.example.com
  User alice
  Port 2222
  IdentityFile ~/.ssh/id_ed25519

Host staging
  HostName staging.example.com
  User deploy
  IdentityFile ~/.ssh/deploy_key

Host prod
  HostName production.example.com
  User deploy
  IdentityFile ~/.ssh/deploy_key
  ForwardAgent yes
```

With this config:

```bash
ssh myserver                     # connects as alice to server.example.com on port 2222
ssh staging                      # connects to staging with deploy key
ssh prod                         # connects to production
```

The alias becomes the argument to every SSH-related command — `ssh`, `scp`, `rsync`, `git` over SSH — which means you type `rsync -av files/ myserver:~/files/` instead of `rsync -av -e "ssh -i ~/.ssh/id_ed25519 -p 2222" files/ alice@server.example.com:~/files/`.

### Wildcard patterns

```
# Settings that apply to all hosts
Host *
  ServerAliveInterval 60
  ServerAliveCountMax 3
  AddKeysToAgent yes

# Settings for all servers in a domain
Host *.example.com
  User alice
  IdentityFile ~/.ssh/id_ed25519

# Jump through a bastion for internal servers
Host internal-*
  ProxyJump bastion.example.com
  User alice
```

`ServerAliveInterval` and `ServerAliveCountMax` are worth setting globally — they send keepalive packets to prevent idle SSH connections from being dropped by firewalls and NAT devices, which is the most common cause of "why did my SSH session disconnect?"

### Important config options

```
# Reuse existing connections (covered in detail in section 11.4)
ControlMaster auto
ControlPath ~/.ssh/control/%r@%h:%p
ControlPersist 10m

# Forward your local ssh-agent to the remote server
ForwardAgent yes

# Compress data (useful on slow connections)
Compression yes

# Connect through a jump host (bastion)
ProxyJump bastion.example.com

# Use a specific local port for a remote service
LocalForward 5432 localhost:5432
```

`ForwardAgent yes` allows the remote server to use your local SSH keys — useful when you need to pull from a private git repository on a remote server without copying your private key there. Use it only with servers you trust.



## Transferring Files

### `scp`: simple file copying

`scp` (secure copy) copies files between local and remote systems over SSH:

```bash
# Local to remote
scp file.txt alice@server.example.com:~/
scp file.txt myserver:~/documents/

# Remote to local
scp myserver:~/logs/app.log ./
scp alice@server.example.com:~/data/export.csv ./exports/

# Directory (recursive)
scp -r src/ myserver:~/project/src/

# With SSH config alias
scp -r dist/ staging:~/app/dist/
```

`scp` is simple and always available. For anything beyond copying a single file, `rsync` is the better choice.

### `rsync`: the right tool for file transfer

`rsync` is faster and more capable than `scp` for most file transfer tasks. It transfers only the differences between source and destination, handles interruptions gracefully, and has a rich set of options for controlling exactly what gets transferred.

```bash
# Basic sync: local directory to remote
rsync -av src/ myserver:~/project/src/

# The flags you'll almost always want
rsync -avz --progress src/ myserver:~/project/src/
```

Breaking down the flags:
- `-a` — archive mode: preserves permissions, timestamps, symlinks, and recurses into directories
- `-v` — verbose: shows files being transferred
- `-z` — compress data during transfer (useful on slow connections)
- `--progress` — show transfer progress for each file

### The trailing slash matters

`rsync`'s behavior with trailing slashes is a source of endless confusion. It's worth understanding precisely:

```bash
rsync -av src/ myserver:~/dest/     # copy CONTENTS of src into dest
rsync -av src  myserver:~/dest/     # copy src DIRECTORY into dest (creates dest/src/)
```

With a trailing slash on the source, `rsync` copies the *contents* of the directory. Without it, `rsync` copies the directory itself. When in doubt, use a trailing slash on the source.

### Useful `rsync` options

```bash
# Dry run: show what would be transferred without doing it
rsync -avz --dry-run src/ myserver:~/project/

# Delete files on destination that no longer exist on source
rsync -avz --delete src/ myserver:~/project/

# Exclude files and directories
rsync -avz --exclude='node_modules/' --exclude='*.log' src/ myserver:~/project/

# Use a specific SSH key or port
rsync -avz -e "ssh -i ~/.ssh/deploy_key -p 2222" dist/ deploy@server:~/app/

# Limit bandwidth (useful to avoid saturating a connection)
rsync -avz --bwlimit=1000 large-files/ myserver:~/storage/    # 1000 KB/s limit

# Resume an interrupted transfer
rsync -avz --partial --progress large-file.tar.gz myserver:~/
```

The `--dry-run` flag is worth using before any `rsync` command that includes `--delete` — it shows you exactly what will be changed without making any changes.

### Syncing from remote to local

`rsync` works equally well in both directions:

```bash
# Pull logs from remote server
rsync -avz myserver:~/logs/ ./remote-logs/

# Back up a remote directory locally
rsync -avz --delete myserver:~/project/ ./backups/project/
```



## SSH Multiplexing: Eliminating Connection Overhead

Every time you run an SSH command — `ssh`, `scp`, `rsync`, `git push` over SSH — it establishes a new TCP connection, performs the cryptographic handshake, and authenticates. On a fast local network this takes a fraction of a second. On a remote server with higher latency, it can take 1–3 seconds. Multiply that by dozens of operations and it adds up.

SSH multiplexing reuses an existing connection for subsequent SSH operations to the same host, reducing the overhead to near zero.

### Enabling multiplexing

Add to `~/.ssh/config`:

```
Host *
  ControlMaster auto
  ControlPath ~/.ssh/control/%r@%h:%p
  ControlPersist 10m
```

Then create the control directory:

```bash
mkdir -p ~/.ssh/control
chmod 700 ~/.ssh/control
```

That's it. The next time you SSH to a host, a master connection is established. For the next 10 minutes (`ControlPersist 10m`), every subsequent SSH command to the same host reuses that connection instantly — no handshake, no authentication delay.

### Practical impact

With multiplexing enabled:

```bash
ssh myserver "ls -la"              # first connection: ~1-2 seconds
ssh myserver "cat logs/app.log"    # reuses connection: ~50ms
scp myserver:~/data.csv ./         # reuses connection: near-instant
rsync -avz src/ myserver:~/src/    # reuses connection: near-instant
```

For workflows that involve many sequential SSH operations — deployments, log inspection, configuration changes — multiplexing is one of the highest-value configuration changes you can make.

### Managing multiplexed connections

```bash
# Check if a master connection exists
ssh -O check myserver

# Stop the master connection
ssh -O stop myserver

# Exit all multiplexed connections
ssh -O exit myserver
```



## Port Forwarding and Tunneling

SSH tunneling allows you to securely access services on a remote machine (or network) as if they were running locally. This is one of SSH's most powerful and underused features.

### Local port forwarding

Local forwarding makes a port on the remote machine available as a local port:

```bash
ssh -L 5432:localhost:5432 myserver
```

This forwards local port 5432 to port 5432 on `myserver`. While the tunnel is open, connecting to `localhost:5432` connects you to the PostgreSQL database running on `myserver`. No need to expose the database port to the internet.

Common uses:

```bash
# Access a remote database locally
ssh -L 5432:localhost:5432 myserver
psql -h localhost -U alice mydb

# Access a remote web service
ssh -L 8080:localhost:3000 myserver
# Now visit http://localhost:8080 in your browser

# Access an internal service through a bastion host
ssh -L 8443:internal-service.private:443 bastion.example.com
# Connects to internal-service.private:443 through the bastion

# Run in background (-N: don't execute a command, -f: go to background)
ssh -fNL 5432:localhost:5432 myserver
```

The `-N` flag tells SSH not to execute a remote command — useful when all you want is the tunnel. The `-f` flag sends the process to the background, freeing your terminal.

### In the SSH config file

For tunnels you use regularly, define them in `~/.ssh/config` so they activate automatically:

```
Host myserver-with-db
  HostName server.example.com
  User alice
  LocalForward 5432 localhost:5432
  LocalForward 6379 localhost:6379     # Redis too
```

```bash
ssh myserver-with-db    # connects AND opens both tunnels automatically
```

### Remote port forwarding

Remote forwarding is the reverse — it makes a local port available on the remote machine:

```bash
ssh -R 8080:localhost:3000 myserver
```

This makes port 3000 on your local machine available as port 8080 on `myserver`. Anyone who connects to `myserver:8080` is forwarded to your local development server. Useful for sharing a local development server with a colleague or testing webhooks against a locally running service.

### Dynamic port forwarding (SOCKS proxy)

Dynamic forwarding creates a SOCKS proxy that routes all traffic through the remote machine:

```bash
ssh -D 1080 myserver
```

Configure your browser or system to use `localhost:1080` as a SOCKS5 proxy, and all traffic routes through `myserver`. Useful for accessing geographically restricted services or browsing securely on untrusted networks.



## `tmux` Over SSH: Surviving Disconnections

One of the most painful experiences in remote work is having an SSH connection drop mid-operation — a long-running database migration, a deployment, a compilation. If the process was running in the foreground of your SSH session, it's now dead. The connection drop sent a SIGHUP to the shell, which killed everything running in it.

`tmux` solves this completely. When you run processes inside a `tmux` session on the remote server, they continue running even when your SSH connection drops. Reconnecting and reattaching to the session brings you back to exactly where you were.

### The essential remote workflow

```bash
# Connect to the server
ssh myserver

# Start a new named tmux session
tmux new -s deploy

# Run your long-running operation
npm run db:migrate

# If your connection drops, reconnect:
ssh myserver
tmux attach -t deploy            # everything is still there

# List running sessions
tmux ls

# Detach intentionally (leave session running)
# Ctrl+A d  (or Ctrl+B d with default prefix)
```

This workflow — SSH, start or attach to a `tmux` session, do your work, detach — should become automatic for any operation that might take more than a minute or might be interrupted.

### Running persistent background jobs

For jobs that need to run unattended on a remote server:

```bash
ssh myserver

# Create a session for the job
tmux new -s batch-job

# Start the job
python scripts/process_data.py --input data/ --output results/

# Detach (job keeps running)
# Ctrl+A d

# Disconnect from SSH
exit

# Check on it later
ssh myserver
tmux attach -t batch-job

# Or just check if it's still running without attaching
tmux ls
ssh myserver "tmux ls"
```

### `nohup` as a lighter alternative

For simpler cases where you just need a command to survive a disconnection without the full `tmux` workflow:

```bash
nohup python scripts/long_job.py > output.log 2>&1 &
disown $!
```

`nohup` ignores the SIGHUP signal, `&` backgrounds the process, `disown` removes it from the shell's job table so it won't be affected by the shell exiting, and `> output.log 2>&1` captures all output. This is a lighter-weight approach than `tmux` for fire-and-forget jobs.



## Working Efficiently on Remote Machines

### Copying your configuration

The first thing many developers do on a new remote machine is feel the friction of missing aliases, their preferred `vim` configuration, their `.bashrc` functions. A few patterns for managing this:

**Minimal `.bashrc` snippet** — keep a gist or a file in your dotfiles repository with the aliases and functions you can't live without, and paste it into `~/.bashrc` on new servers:

```bash
# Minimal remote .bashrc
alias ll='ls -lah'
alias gs='git status -s'
alias ..='cd ..'

# Append to remote .bashrc from local file
ssh myserver "cat >> ~/.bashrc" < ~/.config/remote-bashrc.sh
```

**`rsync` your dotfiles** — for machines you'll use regularly, sync your configuration:

```bash
rsync -avz ~/.vimrc ~/.bashrc ~/.tmux.conf myserver:~/
```

**Dotfiles repository** — the more complete solution is a dotfiles repository with a setup script that can be run on any new machine:

```bash
ssh myserver "git clone https://github.com/yourhandle/dotfiles && cd dotfiles && ./install.sh"
```

### Running commands without a full session

For quick operations, you don't need an interactive shell — pass the command directly:

```bash
# Run a single command
ssh myserver "df -h"
ssh myserver "tail -n 50 logs/app.log"
ssh myserver "systemctl status nginx"

# Run a pipeline
ssh myserver "cat logs/app.log | grep ERROR | wc -l"

# Run a local script on the remote server
ssh myserver bash < scripts/check-health.sh

# Run a command on multiple servers
for server in web1 web2 web3; do
  echo "=== $server ==="
  ssh $server "uptime"
done
```

The last pattern — looping over servers and running the same command on each — is how you do basic multi-server operations without a dedicated orchestration tool.

### Executing local scripts remotely

Sometimes you want to run a local script on a remote server without copying the script first:

```bash
# Pipe a local script to bash on the remote server
ssh myserver bash < scripts/deploy.sh

# With environment variables
ssh myserver "VERSION=$VERSION bash" < scripts/deploy.sh

# With arguments (heredoc approach)
ssh myserver << 'EOF'
cd /var/www/app
git pull origin main
npm install --production
pm2 restart app
EOF
```

The heredoc approach (`<< 'EOF'`) is particularly clean for multi-step remote operations — it reads naturally and keeps the remote commands visually grouped.



## Inspecting and Debugging Remote Systems

Once connected, all the tools from previous chapters work exactly as they do locally. But a few tools and patterns are especially relevant on remote servers.

### Disk space

Disk space issues are among the most common production problems. Check it first:

```bash
df -h                             # disk space for all filesystems
df -h /                           # disk space for the root filesystem
du -sh /var/log/*                 # size of each item in /var/log
du -sh /* 2>/dev/null | sort -rh | head -10    # largest top-level directories
```

### Memory

```bash
free -h                           # memory usage (Linux)
vm_stat                           # memory usage (macOS)
cat /proc/meminfo | head -20      # detailed memory info (Linux)
```

### System load and uptime

```bash
uptime                            # load averages for 1, 5, 15 minutes
top                               # live process and load view
w                                 # who is logged in and what they're doing
last | head -20                   # recent login history
```

### Logs

On Linux systems using systemd:

```bash
journalctl -u nginx               # logs for a specific service
journalctl -u nginx -f            # follow live log
journalctl -u nginx --since "1 hour ago"
journalctl -p err                 # only error-level entries
journalctl --disk-usage           # how much space logs are using
```

Traditional log files:

```bash
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
tail -f /var/log/syslog | grep -i "error\|warn"
```

### Network

```bash
ss -tlnp                          # listening TCP ports and their processes
ss -tlnp | grep :80               # what's on port 80
netstat -tlnp                     # older alternative to ss
curl -s http://localhost/health   # test a local service
curl -v https://example.com       # verbose HTTP request for debugging
```

`ss` is the modern replacement for `netstat` on Linux. `ss -tlnp` shows all TCP listening ports (`-t`), their addresses (`-l`), numeric ports (`-n`), and the process using each one (`-p`).



## A Practical Remote Workflow

Here's how a complete remote debugging session might look, using the tools from this chapter and earlier ones:

```bash
# Connect (with multiplexing, subsequent commands are instant)
ssh myserver

# Start or attach to a tmux session so work survives disconnection
tmux new -s debug 2>/dev/null || tmux attach -t debug

# Orient yourself
uptime                                    # how long has it been running, what's the load?
df -h /                                   # is the disk full?
free -h                                   # is memory under pressure?

# Find the problem
journalctl -u myapp -f &                  # tail logs in background
ps aux --sort=-%cpu | head -10            # what's using the most CPU?
ss -tlnp | grep myapp                     # is the app listening on the right port?

# Investigate a specific issue (using tools from Chapter 2)
rg "ERROR" /var/log/myapp/ --since 1h    # recent errors
tail -n 1000 /var/log/myapp/app.log | \
  grep "ERROR" | \
  awk '{print $NF}' | \
  sort | uniq -c | sort -rn | head -10   # most common error messages

# Make a change (using tools from Chapter 4)
sudo sed -i 's/workers=2/workers=4/' /etc/myapp/config.yaml

# Restart the service
sudo systemctl restart myapp
sleep 5
sudo systemctl status myapp              # did it come up?

# Watch the logs to confirm the fix
journalctl -u myapp -f

# Detach from tmux (session keeps running)
# Ctrl+A d

# Pull any relevant logs back to local machine for deeper analysis
exit
rsync -avz myserver:/var/log/myapp/ ./remote-logs/
```



## Chapter Summary

SSH is the terminal's gateway to remote machines, and the difference between a developer who knows only `ssh user@host` and one who has internalized SSH config, multiplexing, tunneling, and `tmux` is measurable in hours saved per week. Production incidents are shorter. Deployments are smoother. The friction of working remotely drops to near zero.

The key habits to build:

- Set up key-based authentication for every server you access regularly — never type passwords over SSH
- Build out your `~/.ssh/config` file — aliases and per-host settings pay for the setup time immediately
- Enable SSH multiplexing globally — it costs nothing and makes repeated SSH operations dramatically faster
- Always use `tmux` for operations on remote servers that might take more than a minute or might be interrupted
- Use `rsync` instead of `scp` for anything more than a single small file
- Use local port forwarding to access remote databases and services locally rather than exposing them to the internet
- Keep a minimal dotfiles snippet you can quickly apply to new remote machines



## Exercises

**1.** Generate an ed25519 SSH key pair if you don't have one. Copy it to a remote server using `ssh-copy-id`. Verify that you can log in without a password.

**2.** Add at least three hosts to your `~/.ssh/config` with meaningful aliases, the correct user and identity file, and `ServerAliveInterval 60`. Verify that you can connect to each using just the alias.

**3.** Enable SSH multiplexing in your `~/.ssh/config`. Connect to a server, then in a second terminal run `ssh -O check <hostname>` to verify the master connection exists. Run five quick commands over SSH and compare the response time to connections without multiplexing.

**4.** Use local port forwarding to access a remote database (PostgreSQL, MySQL, Redis, or any other) from your local machine. Connect to it using a local client and verify the connection works.

**5.** Start a long-running command inside a `tmux` session on a remote server. Detach from the session, close your SSH connection, reconnect, and reattach to verify the command is still running.

**6.** Write a shell script that uses `rsync` to back up a remote directory to a local path. Include a `--dry-run` mode triggered by a flag, use `--delete` to mirror the remote, and exclude common noise directories like `node_modules` and `.git`.



## Quick Reference

### SSH basics
| Command | What it does |
|||
| `ssh-keygen -t ed25519` | Generate an ed25519 key pair |
| `ssh-copy-id user@host` | Copy public key to remote server |
| `ssh-add ~/.ssh/id_ed25519` | Add key to ssh-agent |
| `ssh myserver` | Connect using ~/.ssh/config alias |
| `ssh myserver "command"` | Run a single command remotely |
| `ssh myserver bash < script.sh` | Run local script remotely |

### File transfer
| Command | What it does |
|||
| `scp file.txt myserver:~/` | Copy file to remote home directory |
| `scp myserver:~/file.txt ./` | Copy file from remote to local |
| `rsync -avz src/ myserver:~/dest/` | Sync directory to remote |
| `rsync -avz --dry-run src/ myserver:~/dest/` | Preview what would sync |
| `rsync -avz --delete src/ myserver:~/dest/` | Mirror (delete remote extras) |
| `rsync -avz myserver:~/logs/ ./logs/` | Pull remote directory locally |

### Port forwarding
| Command | What it does |
|||
| `ssh -L 5432:localhost:5432 myserver` | Forward local 5432 to remote 5432 |
| `ssh -fNL 5432:localhost:5432 myserver` | Same, backgrounded |
| `ssh -R 8080:localhost:3000 myserver` | Expose local 3000 as remote 8080 |
| `ssh -D 1080 myserver` | SOCKS proxy through remote |

### Multiplexing
| Command | What it does |
|||
| `ssh -O check myserver` | Check if master connection exists |
| `ssh -O stop myserver` | Stop master connection |

### Remote diagnostics
| Command | What it does |
|||
| `df -h` | Disk space usage |
| `free -h` | Memory usage |
| `uptime` | Load averages |
| `ss -tlnp` | Listening ports and processes |
| `journalctl -u service -f` | Follow service logs |
| `w` | Who is logged in |
