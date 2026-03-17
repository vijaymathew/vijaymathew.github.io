# Working with Data and APIs from the Command Line

Modern software development is largely about data in motion. APIs returning JSON. Webhooks delivering payloads. Databases exporting CSVs. Log pipelines emitting structured events. Configuration files in YAML and TOML. Data files in formats ranging from clean CSV to deeply nested JSON to XML that looks like it was designed to cause suffering.

Most developers handle this data through GUI tools — Postman for API testing, TablePlus for database inspection, Excel for CSV manipulation. These tools are fine for what they are. But the terminal gives you something none of them can: the ability to compose data operations into pipelines, automate them, and apply the same transformation to one file or ten thousand files with equal ease.

This chapter covers the terminal toolkit for working with data and APIs: `curl` for HTTP, `jq` for JSON, and a collection of tools for CSV, YAML, and other formats you'll encounter in the wild. By the end of it, you'll be able to explore, transform, and manipulate data from the command line as fluently as you manipulate code.


## 6.1 `curl`: The Universal HTTP Client

`curl` is the command-line tool for making HTTP requests. It supports every HTTP method, every authentication scheme, file uploads, cookies, redirects, and dozens of other features. It's available on virtually every system, which means a `curl` command you write today will work on any server you SSH into for the foreseeable future.

### Basic requests

```bash
curl https://api.example.com/users           # GET request
curl -s https://api.example.com/users        # silent mode (no progress bar)
curl -sS https://api.example.com/users       # silent but show errors
```

The `-s` flag suppresses the progress bar that `curl` shows by default — essential when piping output to `jq` or other tools. `-sS` keeps errors visible while suppressing progress.

### HTTP methods

```bash
# POST with JSON body
curl -X POST https://api.example.com/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Alice", "email": "alice@example.com"}'

# PUT
curl -X PUT https://api.example.com/users/42 \
  -H "Content-Type: application/json" \
  -d '{"name": "Alice Updated"}'

# PATCH
curl -X PATCH https://api.example.com/users/42 \
  -H "Content-Type: application/json" \
  -d '{"email": "newemail@example.com"}'

# DELETE
curl -X DELETE https://api.example.com/users/42
```

### Headers and authentication

```bash
# Custom header
curl -H "X-API-Key: your-key-here" https://api.example.com/data

# Bearer token authentication
curl -H "Authorization: Bearer eyJhbGc..." https://api.example.com/data

# Basic authentication
curl -u username:password https://api.example.com/data

# Multiple headers
curl -H "Content-Type: application/json" \
     -H "Authorization: Bearer token" \
     -H "X-Request-ID: abc123" \
     https://api.example.com/data
```

### Reading request body from a file

For large or complex request bodies, putting the JSON inline gets unwieldy. Read it from a file instead:

```bash
curl -X POST https://api.example.com/users \
  -H "Content-Type: application/json" \
  -d @payload.json
```

The `@` prefix tells `curl` to read the body from a file. This is also useful for sending binary data or form submissions.

### Response inspection

By default `curl` only shows the response body. To see more:

```bash
curl -i https://api.example.com/users        # include response headers
curl -I https://api.example.com/users        # HEAD request (headers only)
curl -v https://api.example.com/users        # verbose: full request and response
curl -w "\nStatus: %{http_code}\nTime: %{time_total}s\n" \
     -s https://api.example.com/users        # custom output format
```

The `-w` flag (write-out) is particularly powerful. It lets you print specific response metadata after the request:

```bash
curl -s -o /dev/null \
     -w "Status: %{http_code} | Time: %{time_total}s | Size: %{size_download} bytes\n" \
     https://api.example.com/users
```

`-o /dev/null` discards the body; `-w` prints just the metrics you care about. This is the pattern for quick performance checks and health monitoring scripts.

### Following redirects and handling cookies

```bash
curl -L https://short.url/abc               # follow redirects
curl -c cookies.txt https://example.com     # save cookies to file
curl -b cookies.txt https://example.com     # send cookies from file
curl -b cookies.txt -c cookies.txt \
     https://example.com/login              # maintain a session
```

### Downloading files

```bash
curl -O https://example.com/file.zip        # save with original filename
curl -o custom-name.zip https://example.com/file.zip  # save with custom name
curl -C - -O https://example.com/large.zip  # resume an interrupted download
```

### Using a config file for repeated requests

When you're working repeatedly with the same API during development, a `curl` config file saves you from typing the same headers every time:

```bash
# ~/.curlrc or project-specific curl.config
header = "Authorization: Bearer your-token"
header = "Content-Type: application/json"
silent
```

```bash
curl -K curl.config https://api.example.com/users
```



## 6.2 `jq`: JSON as a First-Class Citizen

We introduced `jq` briefly in Chapter 2. Here we go deep. `jq` is a complete query and transformation language for JSON — think of it as `sed` and `awk` combined, but designed specifically for structured data.

### Installation

```bash
brew install jq           # macOS
apt install jq            # Ubuntu
```

### The basics

```bash
echo '{"name":"Alice","age":30}' | jq '.'           # pretty-print
echo '{"name":"Alice","age":30}' | jq '.name'       # extract field
echo '{"name":"Alice","age":30}' | jq '.age + 1'    # compute value
```

The `.` identity filter passes input through unchanged but pretty-prints it. Field access uses dot notation: `.name`, `.user.profile.email`, `.config.database.host`.

### Navigating nested structures

```bash
# Nested object access
echo '{"user":{"profile":{"email":"alice@example.com"}}}' | jq '.user.profile.email'

# Array access
echo '{"items":[1,2,3]}' | jq '.items[0]'           # first element
echo '{"items":[1,2,3]}' | jq '.items[-1]'          # last element
echo '{"items":[1,2,3]}' | jq '.items[1:3]'         # slice

# Iterate over array
echo '[{"name":"Alice"},{"name":"Bob"}]' | jq '.[]'
echo '[{"name":"Alice"},{"name":"Bob"}]' | jq '.[].name'
```

### Filtering arrays with `select`

```bash
# Users with role "admin"
cat users.json | jq '.[] | select(.role == "admin")'

# Items with price over 100
cat products.json | jq '.[] | select(.price > 100)'

# Multiple conditions
cat users.json | jq '.[] | select(.role == "admin" and .active == true)'

# Using regex in select
cat users.json | jq '.[] | select(.email | test("@example\\.com$"))'
```

### Transforming and reshaping

This is where `jq` becomes genuinely powerful. You can reshape JSON into entirely different structures:

```bash
# Extract specific fields into a new object
cat users.json | jq '.[] | {id: .id, email: .email}'

# Rename fields
cat users.json | jq '.[] | {userId: .id, emailAddress: .email}'

# Add computed fields
cat orders.json | jq '.[] | . + {total: (.price * .quantity)}'

# Build a flat array from a nested structure
cat users.json | jq '[.[] | .email]'

# Convert array to object keyed by id
cat users.json | jq 'map({(.id | tostring): .}) | add'
```

### Aggregation

```bash
# Count items
cat users.json | jq '[.[] | select(.active)] | length'

# Sum a field
cat orders.json | jq '[.[].amount] | add'

# Average
cat metrics.json | jq '[.[].response_time] | add / length'

# Min and max
cat metrics.json | jq '[.[].response_time] | min, max'

# Group by a field
cat orders.json | jq 'group_by(.status)'

# Count by status
cat orders.json | jq 'group_by(.status) | map({status: .[0].status, count: length})'
```

### Practical patterns with `curl` and `jq`

The real power of `jq` in development is as the downstream processor of API responses:

```bash
# Fetch users and list their emails
curl -s https://api.example.com/users | jq '.[].email'

# Find users created in the last 7 days
curl -s https://api.example.com/users | \
  jq --arg date "$(date -u -d '7 days ago' +%Y-%m-%dT%H:%M:%SZ)" \
  '[.[] | select(.createdAt > $date)]'

# Get a specific user and format output
curl -s https://api.example.com/users/42 | \
  jq '{name: .name, email: .email, roles: .roles | join(", ")}'

# Extract pagination info alongside data
curl -s "https://api.example.com/users?page=1" | \
  jq '{total: .meta.total, page: .meta.page, users: [.data[].email]}'
```

### Output formatting

```bash
jq -r '.name'              # raw output (no quotes around strings)
jq -c '.'                  # compact output (single line)
jq -r '.[] | .name' users.json | sort    # raw output suitable for piping
```

The `-r` flag is important when piping `jq` output into other commands — without it, strings are quoted, which causes issues with tools that expect plain text.

### Building JSON with `jq`

`jq` isn't just for reading JSON — it can create it:

```bash
# Build a JSON object from shell variables
NAME="Alice"
EMAIL="alice@example.com"
jq -n --arg name "$NAME" --arg email "$EMAIL" \
  '{name: $name, email: $email}'

# Build from command output
jq -n \
  --arg hostname "$(hostname)" \
  --arg date "$(date -u +%Y-%m-%dT%H:%M:%SZ)" \
  --argjson uptime "$(cat /proc/uptime | awk '{print $1}')" \
  '{hostname: $hostname, timestamp: $date, uptime: $uptime}'
```

This pattern — building JSON payloads with `jq -n` — is useful in deployment scripts and monitoring tools where you need to send structured data to an API.



## 6.3 Working with CSV Data

JSON is the format of APIs. CSV is the format of everything else — spreadsheet exports, database dumps, analytics data, billing records. The terminal handles CSV well, but with some caveats.

### Basic CSV processing with `awk` and `cut`

For simple cases, `awk` and `cut` from Chapter 4 are sufficient:

```bash
cut -d',' -f1,3 data.csv                    # extract columns 1 and 3
awk -F',' '$3 > 1000 {print $1, $3}' data.csv   # filter and extract
```

The limitation is that basic `awk` and `cut` don't handle quoted fields — a CSV value like `"Smith, John"` (with a comma inside quotes) will break naive field splitting. For well-formed, quote-free CSVs, they work fine. For real-world CSVs, you need something better.

### `csvkit`: the CSV toolkit

`csvkit` is a suite of command-line tools specifically designed for CSV files. It handles quoted fields, type inference, and encoding issues correctly.

```bash
pip install csvkit
```

The toolkit includes several commands:

```bash
csvstat data.csv              # summary statistics for each column
csvcut -c 1,3 data.csv        # extract columns by index or name
csvgrep -c email -m "@example.com" data.csv    # filter rows by column value
csvsort -c amount -r data.csv # sort by column, descending
csvjoin -c id users.csv orders.csv    # join two CSVs on a column
csv2json data.csv             # convert CSV to JSON
```

### `csvstat` for quick data profiling

```bash
csvstat data.csv
```

```
  1. id
        Type of data:          Number
        Contains null values:  False
        Unique values:         1000
        Sum:                   500500
        Min:                   1
        Max:                   1000

  2. email
        Type of data:          Text
        Contains null values:  True (excluded from calculations)
        Unique values:         998
        Max length:            42
```

This gives you a complete statistical profile of every column in a CSV — types, null counts, unique values, min/max — in seconds. It's the first thing to run when you receive an unfamiliar data file.

### `csvgrep` for filtering

```bash
# Find rows where status is "error"
csvgrep -c status -m "error" events.csv

# Find rows where email matches a pattern
csvgrep -c email -r "@example\.com$" users.csv

# Find rows where amount is above threshold (pipe through awk after)
csvgrep -c status -m "completed" orders.csv | awk -F',' '$3 > 1000'
```

### Converting between formats

```bash
csv2json data.csv | jq '.[0]'                  # CSV to JSON, inspect first row
csv2json data.csv > data.json                  # convert entire file
json2csv -k id,name,email data.json            # JSON array to CSV
```

The ability to convert between formats unlocks cross-tool processing: convert CSV to JSON, process with `jq`, convert back to CSV, or feed directly into an API with `curl`.



## 6.4 Working with YAML

YAML appears constantly in modern development — Kubernetes manifests, Docker Compose files, CI/CD configuration, Ansible playbooks, application config. Unlike JSON, it's designed to be human-readable, which also makes it harder to process programmatically.

### `yq`: jq for YAML

`yq` is a YAML processor modeled closely on `jq`. Its syntax is nearly identical, making it easy to learn if you already know `jq`.

```bash
brew install yq           # macOS
```

```bash
# Read a field
yq '.database.host' config.yaml

# Update a field
yq '.database.host = "new-host"' config.yaml

# In-place edit
yq -i '.database.host = "new-host"' config.yaml

# Extract a nested array
yq '.services[].name' docker-compose.yaml

# Filter array items
yq '.jobs[] | select(.name == "deploy")' .github/workflows/deploy.yaml
```

### Practical YAML workflows

```bash
# Find all Kubernetes deployments with fewer than 2 replicas
cat deployment.yaml | yq 'select(.kind == "Deployment" and .spec.replicas < 2)'

# Update the image tag in a Kubernetes manifest
yq -i '.spec.template.spec.containers[0].image = "myapp:v2.1.0"' deployment.yaml

# Extract all environment variable names from a Docker Compose file
yq '.services[].environment | keys' docker-compose.yaml

# Compare two config files field by field
diff <(yq -o=json 'sort_keys(..)' config-dev.yaml) \
     <(yq -o=json 'sort_keys(..)' config-prod.yaml)
```

The last example is particularly useful for auditing differences between environment configs: convert both YAML files to sorted JSON, then diff them. The conversion to JSON normalizes formatting differences so the diff shows only actual value changes.

### Converting YAML to JSON and back

```bash
yq -o=json config.yaml                    # YAML to JSON
yq -o=json config.yaml | jq '.database'  # extract JSON field from YAML source
cat data.json | yq -P '.'                 # JSON to pretty YAML
```

Being able to convert between YAML and JSON means you can use `jq`'s richer query language on YAML files — convert to JSON, process with `jq`, convert back if needed.



## 6.5 Working with Other Formats

### XML with `xmllint`

XML appears less frequently in modern development than it used to, but it's still common in enterprise systems, Maven build files, Android resources, and SOAP APIs. `xmllint` is available on most systems without installation:

```bash
# Pretty-print XML
xmllint --format messy.xml

# Validate against a schema
xmllint --schema schema.xsd data.xml

# XPath queries
xmllint --xpath "//user[@role='admin']/email/text()" users.xml

# Extract elements
xmllint --xpath "string(//version)" pom.xml       # Maven version
```

For heavier XML processing, `xsltproc` applies XSLT transformations, but that's beyond the scope of this book.

### SQLite from the command line

SQLite databases are surprisingly common in development — mobile apps, local caches, test databases, embedded systems. The `sqlite3` command-line client lets you query them directly:

```bash
sqlite3 database.db                         # open interactive shell
sqlite3 database.db "SELECT * FROM users LIMIT 10;"   # one-off query
sqlite3 -csv database.db "SELECT * FROM users;" > users.csv   # export to CSV
sqlite3 -json database.db "SELECT * FROM users;" | jq '.[0]'  # export to JSON
```

The `-csv` and `-json` output flags make `sqlite3` a natural part of data pipelines — query a database, convert to JSON, process with `jq`, post to an API with `curl`.

### Environment variables and `.env` files

```bash
# Load a .env file into the current shell
export $(cat .env | grep -v '#' | xargs)

# Check which variables are set
env | grep "API_"

# Run a command with specific environment variables
env API_KEY=test123 node scripts/migrate.js

# Compare .env files across environments
diff <(cat .env.development | sort) <(cat .env.production | sort)
```



## 6.6 Building API Workflows

Individual `curl` and `jq` commands are useful. Combined into workflows, they become small but complete data processing systems.

### Paginating through an API

Many APIs return data in pages. This script fetches all pages automatically:

```bash
#!/bin/bash
page=1
all_users="[]"

while true; do
  response=$(curl -s "https://api.example.com/users?page=$page&per_page=100" \
    -H "Authorization: Bearer $API_TOKEN")

  users=$(echo "$response" | jq '.data')
  count=$(echo "$users" | jq 'length')

  if [ "$count" -eq 0 ]; then
    break
  fi

  all_users=$(echo "$all_users $users" | jq -s '.[0] + .[1]')
  ((page++))
done

echo "$all_users" | jq 'length'
echo "$all_users" > all-users.json
```

### Transforming and posting data

A common ETL (extract, transform, load) pattern — read data from one API, transform it, post to another:

```bash
#!/bin/bash
# Migrate users from old API to new API

curl -s https://old-api.example.com/users \
  -H "Authorization: Bearer $OLD_API_TOKEN" | \
jq -c '.[] | {
  name: .full_name,
  email: .email_address,
  role: (if .admin then "admin" else "user" end)
}' | \
while read -r user; do
  curl -s -X POST https://new-api.example.com/users \
    -H "Authorization: Bearer $NEW_API_TOKEN" \
    -H "Content-Type: application/json" \
    -d "$user"
  echo "Migrated: $(echo $user | jq -r '.email')"
done
```

### Testing an API endpoint

A quick smoke test script for an API:

```bash
#!/bin/bash
BASE_URL="https://api.example.com"
TOKEN="$API_TOKEN"
PASS=0
FAIL=0

check() {
  local description=$1
  local expected=$2
  local actual=$3

  if [ "$actual" = "$expected" ]; then
    echo "[PASS] $description"
    ((PASS++))
  else
    echo "[FAIL] $description (expected: $expected, got: $actual)"
    ((FAIL++))
  fi
}

# Test: list users returns 200
status=$(curl -s -o /dev/null -w "%{http_code}" \
  -H "Authorization: Bearer $TOKEN" \
  "$BASE_URL/users")
check "GET /users returns 200" "200" "$status"

# Test: create user returns 201
status=$(curl -s -o /dev/null -w "%{http_code}" -X POST \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com"}' \
  "$BASE_URL/users")
check "POST /users returns 201" "201" "$status"

echo ""
echo "Results: $PASS passed, $FAIL failed"
```

### Monitoring an endpoint

```bash
#!/bin/bash
# Monitor an endpoint and alert on non-200 responses

URL="https://api.example.com/health"
INTERVAL=30

while true; do
  response=$(curl -s -w "\n%{http_code}" "$URL")
  body=$(echo "$response" | head -n -1)
  status=$(echo "$response" | tail -n 1)
  timestamp=$(date -u +%Y-%m-%dT%H:%M:%SZ)

  if [ "$status" != "200" ]; then
    echo "[$timestamp] ALERT: $URL returned $status"
    echo "Body: $body" | head -5
  else
    echo "[$timestamp] OK: $URL returned $status"
  fi

  sleep $INTERVAL
done
```



## 6.7 `httpie`: A More Ergonomic Alternative

`httpie` (the `http` command) is a modern alternative to `curl` with a more readable syntax, automatic JSON formatting, and sensible defaults for API development.

```bash
pip install httpie
# or
brew install httpie
```

```bash
# GET request
http https://api.example.com/users

# POST with JSON (automatically sets Content-Type)
http POST https://api.example.com/users name=Alice email=alice@example.com

# With headers
http https://api.example.com/users Authorization:"Bearer token"

# With query parameters
http https://api.example.com/users page==2 per_page==50
```

The `=` operator sets JSON string fields, `:=` sets non-string JSON values, `==` sets query parameters, and `:` sets headers. It's more readable than `curl` for interactive API exploration, though `curl` is still the right choice for scripts — it's available everywhere and its behavior is more predictable.



## 6.8 Putting It Together: A Complete Data Pipeline

Here's a realistic end-to-end pipeline: fetch sales data from an API, enrich it with user data from a CSV, generate a summary report, and post the results to a Slack webhook.

```bash
#!/bin/bash

# 1. Fetch orders from API
echo "Fetching orders..."
curl -s "https://api.example.com/orders?status=completed" \
  -H "Authorization: Bearer $API_TOKEN" \
  > /tmp/orders.json

# 2. Load user data from CSV and convert to JSON for joining
echo "Loading user data..."
csv2json users.csv > /tmp/users.json

# 3. Join orders with user data, compute metrics
echo "Computing metrics..."
jq -s '
  .[0] as $orders |
  .[1] as $users |
  ($users | map({(.id | tostring): .}) | add) as $user_map |
  {
    total_orders: ($orders | length),
    total_revenue: ([.$orders[].amount] | add),
    average_order: ([.$orders[].amount] | add / length),
    top_customers: (
      $orders |
      group_by(.user_id) |
      map({
        user: $user_map[.[0].user_id | tostring].name,
        orders: length,
        revenue: ([.[].amount] | add)
      }) |
      sort_by(-.revenue) |
      .[0:5]
    )
  }
' /tmp/orders.json /tmp/users.json > /tmp/report.json

# 4. Format as readable text
echo "Formatting report..."
REPORT=$(jq -r '
  "Sales Report - \(now | strftime("%Y-%m-%d"))\n" +
  "Total Orders: \(.total_orders)\n" +
  "Total Revenue: $\(.total_revenue | . * 100 | round / 100)\n" +
  "Average Order: $\(.average_order | . * 100 | round / 100)\n\n" +
  "Top Customers:\n" +
  (.top_customers[] | "  \(.user): \(.orders) orders, $\(.revenue)")
' /tmp/report.json)

echo "$REPORT"

# 5. Post to Slack
curl -s -X POST "$SLACK_WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -d "$(jq -n --arg text "$REPORT" '{text: $text}')"

echo "Report posted to Slack."
```

This pipeline — fetch, transform, aggregate, report, notify — is the kind of thing that might take an hour to build in a proper programming language and a few minutes to assemble from command-line tools. It's also easy to debug: you can run each step independently, inspect the intermediate files in `/tmp`, and modify one stage without touching the others.



## Chapter Summary

The terminal is a complete environment for working with data and APIs. `curl` handles any HTTP interaction. `jq` handles any JSON transformation. `csvkit` and `yq` cover CSV and YAML. And the Unix pipeline model means all of these tools compose naturally — the output of one becomes the input of the next.

The key habits to build:

- Always use `-s` with `curl` in pipelines to suppress progress output
- Use `jq -r` when piping `jq` output into other commands — raw strings, not quoted JSON
- Use `jq -n` with `--arg` and `--argjson` for building JSON payloads from shell variables
- Run `csvstat` first on any unfamiliar CSV to understand its structure before processing
- Convert YAML to JSON with `yq -o=json` when you need `jq`'s richer query capabilities
- Build pipelines incrementally — get each step working before adding the next



## Exercises

**1.** Pick any public REST API (GitHub, Open-Meteo, JSONPlaceholder). Use `curl` to fetch a collection endpoint and `jq` to extract a specific field from every item in the response. Then filter the results to items matching a condition.

**2.** Find a CSV file with at least five columns. Run `csvstat` on it to understand its structure. Then use `csvgrep` to filter it, `csvsort` to sort the result, and `csv2json` to convert it to JSON for further processing with `jq`.

**3.** Write a shell script that fetches data from an API endpoint, checks that the HTTP status code is 200, extracts a count from the response body with `jq`, and prints a pass/fail result.

**4.** Take a Kubernetes YAML manifest or Docker Compose file and use `yq` to extract all image names. If you don't have one handy, find one in any open source repository.

**5.** Build a pipeline that fetches JSON from an API, extracts a list of email addresses, sorts them, deduplicates them, and writes the result to a file — one email per line.



## Quick Reference

| Command | What it does |
|||
| `curl -s URL` | GET request, silent mode |
| `curl -X POST -d @file.json URL` | POST with JSON body from file |
| `curl -H "Authorization: Bearer token" URL` | Request with auth header |
| `curl -s -o /dev/null -w "%{http_code}" URL` | Get HTTP status code only |
| `curl -L URL` | Follow redirects |
| `jq '.'` | Pretty-print JSON |
| `jq '.field'` | Extract a field |
| `jq '.[].field'` | Extract field from each array item |
| `jq 'select(.x == "y")'` | Filter by condition |
| `jq '{a: .x, b: .y}'` | Reshape into new object |
| `jq '[.[].field] \| add'` | Sum a field across array |
| `jq -r '.field'` | Raw string output (no quotes) |
| `jq -n --arg x "$VAR" '{key: $x}'` | Build JSON from shell variables |
| `csvstat file.csv` | Profile a CSV file |
| `csvcut -c 1,3 file.csv` | Extract CSV columns |
| `csvgrep -c col -m value file.csv` | Filter CSV by column value |
| `csv2json file.csv` | Convert CSV to JSON |
| `yq '.field' file.yaml` | Extract YAML field |
| `yq -i '.field = "value"' file.yaml` | Edit YAML in place |
| `yq -o=json file.yaml` | Convert YAML to JSON |
| `sqlite3 -json db.sqlite "SELECT..."` | Query SQLite, output JSON |
