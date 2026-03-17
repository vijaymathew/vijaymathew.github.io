# Automating Repetitive Dev Tasks

There's a rule of thumb in software development: if you do something twice, you'll do it a third time. If you do it a third time, you'll do it a hundred times. The question isn't whether a task is worth automating — it's whether you'll recognize the moment when it becomes worth it.

That moment usually arrives earlier than you think. The deployment sequence you run every afternoon. The database reset you perform before every test run. The five-command sequence to set up a new feature branch. The log-scraping you do every time something breaks in production. Each of these feels small in isolation. Together, they account for a surprising fraction of a developer's day — and more importantly, they account for a surprising fraction of the errors that make days longer than they need to be.

This chapter is about eliminating that friction. We'll cover shell scripts, aliases and functions, `make` as a task runner, environment management, and the patterns that separate automation that holds up over time from automation that creates more problems than it solves.


## Shell Scripts: The Foundation

A shell script is a text file containing shell commands. That's it. There's no compilation step, no runtime to install, no dependency to manage. If a sequence of commands works in your terminal, it works in a shell script.

### Anatomy of a shell script

```bash
#!/usr/bin/env bash
# Setup script for the development environment

set -euo pipefail

echo "Setting up development environment..."

# Install dependencies
npm install

# Copy environment template if .env doesn't exist
if [ ! -f .env ]; then
  cp .env.example .env
  echo "Created .env from template — please fill in your values"
fi

# Run database migrations
npm run db:migrate

echo "Setup complete."
```

Three things every shell script should have:

**The shebang line** (`#!/usr/bin/env bash`) tells the operating system which interpreter to use. `/usr/bin/env bash` is more portable than `/bin/bash` because it finds `bash` wherever it's installed on the system.

**`set -euo pipefail`** is a safety net:
- `-e` exits immediately if any command fails
- `-u` treats unset variables as errors
- `-o pipefail` causes a pipeline to fail if any command in it fails (not just the last one)

Without these, a script will cheerfully continue running after a failure, often making things worse. With them, it stops at the first sign of trouble.

**Comments** explaining what each section does. Shell scripts have a reputation for being inscrutable — good comments are the antidote.

### Making a script executable

```bash
chmod +x scripts/setup.sh        # make executable
./scripts/setup.sh               # run it
```

Or without making it executable:

```bash
bash scripts/setup.sh
```

### Variables

```bash
#!/usr/bin/env bash
set -euo pipefail

# Constants
readonly DEPLOY_DIR="/var/www/app"
readonly LOG_FILE="/var/log/deploy.log"

# Variables
environment=${1:-development}    # first argument, default to "development"
timestamp=$(date +%Y%m%d_%H%M%S)
branch=$(git rev-parse --abbrev-ref HEAD)

echo "Deploying branch $branch to $environment at $timestamp"
```

`readonly` declares a constant — attempting to reassign it will cause an error. `${1:-development}` uses the first command-line argument if provided, falling back to `development` if not. `$(command)` runs a command and captures its output.

### Conditionals

```bash
# File existence checks
if [ -f config.yaml ]; then echo "Config exists"; fi
if [ ! -f config.yaml ]; then echo "Config missing"; fi
if [ -d logs/ ]; then echo "Logs directory exists"; fi

# String comparisons
if [ "$environment" = "production" ]; then
  echo "Deploying to production — double-checking..."
fi

if [ -z "$API_TOKEN" ]; then
  echo "Error: API_TOKEN is not set" >&2
  exit 1
fi

if [ -n "$DEBUG" ]; then
  echo "Debug mode enabled"
fi

# Numeric comparisons
if [ "$count" -gt 0 ]; then echo "Found $count items"; fi
if [ "$exit_code" -ne 0 ]; then echo "Command failed"; fi
```

The `[ ]` syntax is POSIX test syntax. Note the spaces inside the brackets — they're required. `[[ ]]` is bash-specific but more powerful, supporting regex matching and logical operators without escaping:

```bash
if [[ "$branch" =~ ^feature/ ]]; then
  echo "On a feature branch"
fi

if [[ "$status" == "200" && "$body" != "" ]]; then
  echo "Success"
fi
```

### Loops

```bash
# Loop over files
for file in src/*.ts; do
  echo "Processing $file"
  npx tsc --noEmit "$file"
done

# Loop over an array
environments=("development" "staging" "production")
for env in "${environments[@]}"; do
  echo "Checking $env config..."
  diff "config/$env.yaml" "config/production.yaml" || true
done

# Loop over command output
git diff --name-only HEAD~1 | while read -r file; do
  echo "Changed: $file"
done

# Numeric loop
for i in $(seq 1 10); do
  echo "Attempt $i..."
  curl -s https://api.example.com/health && break
  sleep 5
done
```

### Functions

Functions let you organize scripts into reusable, named pieces:

```bash
#!/usr/bin/env bash
set -euo pipefail

# Logging helpers
log()   { echo "[$(date +%H:%M:%S)] $*"; }
error() { echo "[ERROR] $*" >&2; }
die()   { error "$*"; exit 1; }

# Check required tools are installed
require() {
  command -v "$1" &>/dev/null || die "$1 is required but not installed"
}

# Wait for a service to become available
wait_for() {
  local url=$1
  local max_attempts=${2:-30}
  local attempt=1

  log "Waiting for $url..."
  while ! curl -sf "$url" &>/dev/null; do
    if [ $attempt -ge $max_attempts ]; then
      die "Timed out waiting for $url"
    fi
    sleep 2
    ((attempt++))
  done
  log "$url is ready"
}

# Main script
require curl
require jq
require node

wait_for "http://localhost:3000/health"
log "Starting deployment..."
```

The `log`, `error`, and `die` helpers are worth having in every script. They make output consistent and ensure errors go to stderr (`>&2`) rather than stdout, which matters when the script's output is piped to other commands.

### Error handling

```bash
# Run a command, capture exit code without triggering set -e
result=$(some_command) || exit_code=$?
if [ "${exit_code:-0}" -ne 0 ]; then
  echo "Command failed with code $exit_code"
fi

# Cleanup on exit
cleanup() {
  log "Cleaning up..."
  rm -f /tmp/deploy_lock
  # kill any background processes
  jobs -p | xargs -r kill 2>/dev/null || true
}
trap cleanup EXIT

# Create lock file to prevent concurrent runs
LOCK_FILE="/tmp/deploy_lock"
if [ -f "$LOCK_FILE" ]; then
  die "Deployment already in progress (lock file exists: $LOCK_FILE)"
fi
touch "$LOCK_FILE"
```

The `trap` command runs a function when the script exits — whether normally, due to an error, or from a signal. It's the shell equivalent of a `finally` block, and it's essential for cleaning up temporary files, releasing locks, and terminating background processes.



## Aliases and Functions: Instant Shortcuts

Shell scripts live in files and need to be called explicitly. Aliases and shell functions live in your shell configuration and are available instantly in any terminal session.

### Aliases

An alias is a simple text substitution — a short name that expands to a longer command:

```bash
# In ~/.zshrc or ~/.bashrc

# Navigation
alias ..="cd .."
alias ...="cd ../.."
alias ll="ls -lah"
alias lt="ls -laht"          # sorted by modification time

# Git
alias gs="git status -s"
alias ga="git add"
alias gc="git commit -m"
alias gp="git push"
alias gpl="git pull --rebase"
alias gl="git log --oneline --graph --all --decorate"
alias gd="git diff"
alias gds="git diff --staged"

# Docker
alias dps="docker ps --format 'table {{.Names}}\t{{.Status}}\t{{.Ports}}'"
alias dlog="docker logs -f"

# Development
alias serve="python3 -m http.server 8080"
alias myip="curl -s https://ipinfo.io/ip"
alias week="date +%V"        # current week number

# Safety nets
alias rm="rm -i"             # confirm before deleting
alias cp="cp -i"             # confirm before overwriting
alias mv="mv -i"             # confirm before overwriting
```

After editing your shell config, reload it:

```bash
source ~/.zshrc              # or source ~/.bashrc
```

### Shell functions

When you need more than simple substitution — arguments, conditionals, multiple commands — use a function:

```bash
# Create a directory and cd into it
mkcd() {
  mkdir -p "$1" && cd "$1"
}

# Find and kill a process by name
killport() {
  local port=$1
  local pid=$(lsof -ti tcp:"$port")
  if [ -z "$pid" ]; then
    echo "No process on port $port"
  else
    kill -9 $pid
    echo "Killed process $pid on port $port"
  fi
}

# Git: create a branch, push it, and set upstream in one step
gbc() {
  git switch -c "$1" && git push -u origin "$1"
}

# Quick git commit with message
gcm() {
  git add -A && git commit -m "$*"
}

# Extract any archive format
extract() {
  case "$1" in
    *.tar.gz|*.tgz)    tar -xzf "$1"  ;;
    *.tar.bz2|*.tbz2)  tar -xjf "$1"  ;;
    *.tar.xz)          tar -xJf "$1"  ;;
    *.zip)             unzip "$1"      ;;
    *.gz)              gunzip "$1"     ;;
    *.bz2)             bunzip2 "$1"    ;;
    *.7z)              7z x "$1"       ;;
    *)  echo "Unknown archive format: $1" ;;
  esac
}

# Search for a process
psg() {
  ps aux | grep -v grep | grep "$1"
}

# HTTP status code lookup
httpcode() {
  curl -s -o /dev/null -w "%{http_code}" "$1"
}
```

### Organizing your shell configuration

As your aliases and functions grow, keeping them all in `.zshrc` or `.bashrc` becomes unwieldy. A cleaner pattern:

```bash
# In ~/.zshrc
for file in ~/.config/shell/*.sh; do
  [ -r "$file" ] && source "$file"
done
```

Then organize into separate files:

```
~/.config/shell/
|-- aliases.sh
|-- functions.sh
|-- git.sh
|-- docker.sh
`-- work.sh          # work-specific shortcuts (not in dotfiles repo)
```

This approach also makes it easy to share your shell config as a dotfiles repository — a common practice among developers that lets you replicate your environment on a new machine in minutes.



## `make`: The Underrated Task Runner

`make` was created in 1976 to automate C compilation. Fifty years later, it's one of the best task runners available for any language or project type — not because of its build features, but because of its interface.

Every `make` target is a named task you can run with `make <target>`. The targets are defined in a `Makefile` in the project root. Any developer can run `make help` (if you write a help target) and see every available task. The interface is always the same, regardless of whether the project is Node, Python, Go, or something else.

### A practical Makefile for a modern project

```makefile
# Makefile
.PHONY: help install dev build test lint format clean deploy

# Default target: show help
help:
	@echo "Available targets:"
	@echo "  install     Install dependencies"
	@echo "  dev         Start development server"
	@echo "  build       Build for production"
	@echo "  test        Run test suite"
	@echo "  lint        Run linter"
	@echo "  format      Format code"
	@echo "  clean       Remove build artifacts"
	@echo "  deploy      Deploy to staging"

install:
	npm install

dev:
	npm run dev

build:
	npm run build

test:
	npm test

lint:
	npx eslint src/ --ext .ts,.tsx

format:
	npx prettier --write src/

clean:
	rm -rf dist/ node_modules/.cache

# Run checks before committing
check: lint test
	@echo "All checks passed"

# Deploy with confirmation for production
deploy:
	@read -p "Deploy to staging? [y/N] " confirm && \
	[ "$$confirm" = "y" ] && npm run deploy:staging || echo "Aborted"
```

### Key Makefile concepts

**`.PHONY`** declares targets that aren't actual files. Without it, `make` checks whether a file named `test` exists and skips running the target if it does. Any target that doesn't produce a file of the same name should be listed in `.PHONY`.

**Indentation with tabs** — this is a notorious Make gotcha. Recipe lines *must* be indented with a tab character, not spaces. Many editors convert tabs to spaces automatically; if you're getting "missing separator" errors, this is usually why.

**`@` prefix** suppresses command echoing. Without `@`, `make` prints each command before running it. Prefixing with `@` runs it silently — useful for `echo` statements and prompts that would look redundant alongside the command itself.

**`$$`** is how you write a literal `$` in a Makefile recipe — the first `$` escapes the second.

### Variables in Makefiles

```makefile
# Variables
APP_NAME := myapp
VERSION := $(shell git describe --tags --always)
BUILD_DIR := dist
DOCKER_IMAGE := $(APP_NAME):$(VERSION)

build:
	@echo "Building $(APP_NAME) version $(VERSION)"
	npm run build
	@echo "Output in $(BUILD_DIR)"

docker-build:
	docker build -t $(DOCKER_IMAGE) .
	@echo "Built $(DOCKER_IMAGE)"

docker-push: docker-build
	docker push $(DOCKER_IMAGE)
```

### Target dependencies

Targets can depend on other targets, which run first:

```makefile
# docker-push depends on docker-build, which runs automatically
docker-push: docker-build
	docker push $(DOCKER_IMAGE)

# release runs lint, test, build in sequence
release: lint test build
	@echo "Ready to release version $(VERSION)"
```

### Environment-specific targets

```makefile
ENV ?= development      # default, overridable with ENV=staging make deploy

deploy:
	@echo "Deploying to $(ENV)"
	./scripts/deploy.sh $(ENV)
```

```bash
make deploy                      # deploys to development
ENV=staging make deploy          # deploys to staging
ENV=production make deploy       # deploys to production
```

### A self-documenting Makefile

A neat trick for auto-generating help output from comments:

```makefile
.PHONY: help

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
	awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies
	npm install

test: ## Run test suite
	npm test

build: ## Build for production
	npm run build

deploy: ## Deploy to staging
	./scripts/deploy.sh staging
```

Any target with a `##` comment will appear in `make help` with its description, automatically formatted in a two-column layout. As the project grows, the help output grows with it — with no manual maintenance.



## Environment Management

Automation breaks in subtle ways when environment variables are wrong — missing API keys, wrong database URLs, development credentials used in production. Good environment management prevents this class of problem.

### Loading environment variables

```bash
# Simple: export from .env file
export $(cat .env | grep -v '^#' | xargs)

# Safer: handle spaces in values
set -a; source .env; set +a

# With dotenv tools
# direnv (https://direnv.net/) — loads .envrc automatically when you cd into a directory
# autoenv — similar to direnv
```

`direnv` deserves special mention. You define environment variables in a `.envrc` file in your project directory, and `direnv` automatically loads them when you enter the directory and unloads them when you leave. No manual `source .env` step, no risk of forgetting:

```bash
# .envrc
export DATABASE_URL="postgres://localhost:5432/myapp_dev"
export API_KEY="dev-key-not-for-production"
export NODE_ENV="development"
```

```bash
brew install direnv
echo 'eval "$(direnv hook zsh)"' >> ~/.zshrc   # add to shell
direnv allow .                                  # approve the .envrc file
```

### Validating required variables

A function to check that required environment variables are set before running a script:

```bash
require_env() {
  local missing=0
  for var in "$@"; do
    if [ -z "${!var:-}" ]; then
      echo "Error: required environment variable $var is not set" >&2
      missing=1
    fi
  done
  [ $missing -eq 0 ] || exit 1
}

# Usage at the top of scripts
require_env DATABASE_URL API_TOKEN SLACK_WEBHOOK_URL
```

### Managing multiple environments

```bash
# scripts/env.sh — central environment loader
load_env() {
  local env=${1:-development}
  local env_file=".env.$env"

  if [ ! -f "$env_file" ]; then
    echo "Error: $env_file not found" >&2
    exit 1
  fi

  set -a
  source "$env_file"
  set +a
  echo "Loaded environment: $env"
}

# Usage
load_env production
load_env staging
```

### Secrets management

For real applications, secrets shouldn't live in `.env` files — they should live in a secrets manager. But you can still access them from the command line:

```bash
# AWS Secrets Manager
secret=$(aws secretsmanager get-secret-value \
  --secret-id "myapp/production/database" \
  --query SecretString \
  --output text | jq -r '.password')

# HashiCorp Vault
export DATABASE_PASSWORD=$(vault kv get -field=password secret/myapp/database)

# GitHub CLI (for CI/CD secrets during development)
gh secret set API_TOKEN < api_token.txt
```



## Scheduling and Background Tasks

### `cron`: scheduled execution

`cron` runs commands on a schedule. Edit your crontab with:

```bash
crontab -e
```

The format is five time fields followed by the command:

```
# Minute  Hour  Day  Month  Weekday  Command
  0       9     *    *      1-5      /home/alice/scripts/daily-report.sh
  */15    *     *    *      *        /home/alice/scripts/health-check.sh
  0       0     1    *      *        /home/alice/scripts/monthly-cleanup.sh
  0       2     *    *      *        /home/alice/scripts/backup.sh >> /var/log/backup.log 2>&1
```

`*/15` means "every 15 minutes." `1-5` for the weekday field means Monday through Friday. `*` means "every."

Always use absolute paths in crontab entries — cron runs with a minimal environment and `PATH` may not include your usual directories. Always redirect output to a log file, otherwise cron will try to email it to you (which usually means it disappears silently).

A quick cron expression reference:

```
# Every minute
* * * * *

# Every hour at :30
30 * * * *

# Every day at 2am
0 2 * * *

# Every Monday at 9am
0 9 * * 1

# Every 5 minutes
*/5 * * * *
```

### Running scripts in the background

```bash
# Run in background, continue even after terminal closes
nohup ./scripts/long-running.sh &

# Run with output captured
nohup ./scripts/long-running.sh > logs/output.log 2>&1 &

# Check what's running in background
jobs -l

# Bring background job to foreground
fg %1

# Disown a job (detach from terminal)
./scripts/long-running.sh &
disown $!
```

### `watch`: repeated execution

`watch` runs a command repeatedly and displays the output, refreshing every two seconds by default:

```bash
watch -n 5 "curl -s https://api.example.com/health | jq '.status'"
watch -n 1 "git log --oneline -5"
watch -n 2 "docker ps --format 'table {{.Names}}\t{{.Status}}'"
```

This is useful for monitoring live output without writing a full polling loop. `Ctrl+C` stops it.



## A Practical Automation Toolkit

Here's a collection of scripts that solve common development automation problems, ready to adapt:

### Pre-commit checks

```bash
#!/usr/bin/env bash
# scripts/pre-commit.sh — run before every commit
set -euo pipefail

log() { echo "> $*"; }

log "Running pre-commit checks..."

# Lint
log "Linting..."
npx eslint src/ --ext .ts,.tsx --quiet

# Type check
log "Type checking..."
npx tsc --noEmit

# Tests
log "Running tests..."
npm test -- --passWithNoTests

# Check for secrets (basic)
log "Checking for secrets..."
if git diff --cached | grep -E "(api_key|password|secret)\s*=\s*['\"][^'\"]{8,}" -i; then
  echo "[WARN] Possible secret detected in staged changes" >&2
  exit 1
fi

log "All checks passed [OK]"
```

Wire this to Git's pre-commit hook:

```bash
cp scripts/pre-commit.sh .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```

Or use `husky` for a more robust hook management solution if you're working on a team.

### Database reset script

```bash
#!/usr/bin/env bash
# scripts/db-reset.sh — reset database to clean state
set -euo pipefail

log() { echo "[db-reset] $*"; }

: "${DATABASE_URL:?DATABASE_URL must be set}"

# Confirm if running against a non-development database
if [[ "$DATABASE_URL" != *"localhost"* ]]; then
  read -rp "WARNING: This doesn't look like a local database. Reset $DATABASE_URL? [y/N] " confirm
  [[ "$confirm" =~ ^[Yy]$ ]] || { log "Aborted"; exit 0; }
fi

log "Dropping database..."
npm run db:drop 2>/dev/null || true

log "Creating database..."
npm run db:create

log "Running migrations..."
npm run db:migrate

log "Seeding..."
npm run db:seed

log "Done — database reset complete"
```

### New feature branch setup

```bash
#!/usr/bin/env bash
# scripts/new-feature.sh — set up a new feature branch
set -euo pipefail

if [ -z "${1:-}" ]; then
  echo "Usage: $0 <feature-name>"
  exit 1
fi

FEATURE_NAME=$1
BRANCH_NAME="feature/$FEATURE_NAME"

# Ensure main is up to date
git switch main
git pull --rebase origin main

# Create and push the branch
git switch -c "$BRANCH_NAME"
git push -u origin "$BRANCH_NAME"

echo "Created and pushed branch: $BRANCH_NAME"
echo "You're now on $BRANCH_NAME, ready to work"
```

### Deployment script with rollback

```bash
#!/usr/bin/env bash
# scripts/deploy.sh — deploy with automatic rollback on failure
set -euo pipefail

ENV=${1:-staging}
log() { echo "[deploy:$ENV] $*"; }
die() { log "ERROR: $*" >&2; exit 1; }

require_env DATABASE_URL API_TOKEN

PREVIOUS_VERSION=$(git describe --tags --abbrev=0 2>/dev/null || echo "unknown")
CURRENT_VERSION=$(git describe --tags --always)

log "Deploying $CURRENT_VERSION (previous: $PREVIOUS_VERSION)"

# Run health check to verify current state
log "Pre-deploy health check..."
curl -sf "https://$ENV.example.com/health" || die "Pre-deploy health check failed"

# Deploy
log "Running migrations..."
npm run db:migrate

log "Deploying application..."
npm run deploy:"$ENV"

# Post-deploy health check
log "Post-deploy health check..."
sleep 10
if ! curl -sf "https://$ENV.example.com/health"; then
  log "Health check failed — initiating rollback"
  git revert HEAD --no-edit
  npm run deploy:"$ENV"
  die "Deployment failed — rolled back to previous version"
fi

log "Deployment successful [OK]"
log "Version $CURRENT_VERSION is live on $ENV"
```



## Putting It Together: A Complete Developer Automation Setup

Here's how all these pieces fit together into a complete project automation setup:

```
project/
|-- Makefile                    # top-level task runner
|-- scripts/
|   |-- setup.sh                # first-run environment setup
|   |-- dev.sh                  # start full development stack
|   |-- pre-commit.sh           # pre-commit quality checks
|   |-- db-reset.sh             # database reset
|   |-- new-feature.sh          # branch creation workflow
|   `-- deploy.sh               # deployment with health checks
|-- .env.example                # template for environment variables
|-- .envrc                      # direnv config (not committed if contains secrets)
`-- .git/hooks/
    `-- pre-commit -> ../../scripts/pre-commit.sh
```

The `Makefile` ties it all together as the single entry point:

```makefile
.PHONY: help setup dev test lint build deploy reset

help: ## Show available commands
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
	awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

setup: ## Set up development environment from scratch
	./scripts/setup.sh

dev: ## Start development server
	./scripts/dev.sh

test: ## Run test suite
	npm test

lint: ## Run linter and type checker
	npx eslint src/ && npx tsc --noEmit

build: ## Build for production
	npm run build

reset: ## Reset database to clean state
	./scripts/db-reset.sh

feature: ## Create a new feature branch (usage: make feature NAME=my-feature)
	./scripts/new-feature.sh $(NAME)

deploy: ## Deploy to staging
	./scripts/deploy.sh staging

deploy-prod: ## Deploy to production
	./scripts/deploy.sh production
```

Any developer on the team runs `make setup` to get started, `make dev` to start working, and `make deploy` to ship. The underlying complexity — environment loading, health checks, rollback logic — is hidden behind a consistent interface that never changes.



## Chapter Summary

Automation is one of the highest-leverage investments you can make in your development workflow. A shell script that takes an hour to write but saves five minutes a day pays for itself in less than two weeks — and unlike manual processes, it doesn't vary, doesn't forget steps, and can be reviewed and improved over time.

The key habits to build:

- Start every shell script with `#!/usr/bin/env bash` and `set -euo pipefail`
- Use `trap cleanup EXIT` to ensure cleanup happens even when scripts fail
- Add a `Makefile` to every project as the standard entry point for common tasks
- Use `direnv` to manage project-specific environment variables automatically
- Validate required environment variables at the top of scripts before doing anything
- Write `make help` or a help target in every `Makefile` — future team members will thank you
- Use `trap`, locks, and health checks in deployment scripts to make failures recoverable



## Exercises

**1.** Write a `setup.sh` script for a project you currently work on. It should install dependencies, copy `.env.example` to `.env` if it doesn't exist, run database migrations, and print a success message. Make it idempotent — safe to run multiple times.

**2.** Add a `Makefile` to a project you work on with at least five targets: `install`, `dev`, `test`, `lint`, and `clean`. Add `##` comments to each target and implement a self-documenting `help` target.

**3.** Write a shell function called `newpr` that: switches to main, pulls the latest changes, creates a new branch based on a name argument, and pushes it to origin with upstream tracking set. Add it to your shell config.

**4.** Set up `direnv` for a project. Move your `.env` contents to `.envrc` and verify that variables load automatically when you enter the directory and unload when you leave.

**5.** Write a deployment script for any project that includes: a pre-deploy health check, the deployment step itself, a post-deploy health check, and a rollback step that runs if the post-deploy check fails.



## Quick Reference

| Command / Pattern | What it does |
|||
| `#!/usr/bin/env bash` | Portable shebang line |
| `set -euo pipefail` | Exit on error, undefined vars, pipe failures |
| `${VAR:-default}` | Variable with fallback default |
| `${VAR:?error message}` | Variable or die with message |
| `$(command)` | Command substitution |
| `trap cleanup EXIT` | Run cleanup function on exit |
| `[ -f file ]` | Test if file exists |
| `[ -z "$VAR" ]` | Test if variable is empty |
| `[[ "$str" =~ regex ]]` | Regex match in bash |
| `source .env` | Load environment file |
| `set -a; source .env; set +a` | Load .env and export all variables |
| `make <target>` | Run a Makefile target |
| `.PHONY: target` | Declare target as not a file |
| `## comment` | Self-documenting Makefile target |
| `watch -n 5 "command"` | Repeat command every 5 seconds |
| `nohup cmd > log.txt 2>&1 &` | Run in background, capture output |
| `crontab -e` | Edit scheduled tasks |
| `0 2 * * *` | Cron: daily at 2am |
| `*/15 * * * *` | Cron: every 15 minutes |
