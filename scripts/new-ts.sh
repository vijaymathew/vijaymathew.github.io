#!/usr/bin/env bash
# new-ts.sh — scaffold a minimal TypeScript project that runs on Node's
# built-in type stripping, with tsc for type checking and node:test for tests.
#
# Usage: ./new-ts.sh [project-name]     (default: ts-scratch)

set -euo pipefail

name="${1:-ts-scratch}"

# --- Preflight -------------------------------------------------------------
command -v node >/dev/null || { echo "error: node not found" >&2; exit 1; }
command -v npm  >/dev/null || { echo "error: npm not found"  >&2; exit 1; }

# Type stripping is on by default from Node 22.18 / 23.6 onwards.
node -e '
  const [maj, min] = process.versions.node.split(".").map(Number);
  const ok = maj > 23 || (maj === 23 && min >= 6) || (maj === 22 && min >= 18);
  if (!ok) { console.error(`error: Node ${process.versions.node} is too old; need 22.18+ or 23.6+`); process.exit(1); }
'

[[ -e "$name" ]] && { echo "error: '$name' already exists" >&2; exit 1; }

mkdir -p "$name/src"
cd "$name"

# --- package.json ----------------------------------------------------------
npm init -y >/dev/null
npm pkg set type=module
npm pkg set scripts.start="node src/main.ts"
npm pkg set scripts.dev="node --watch src/main.ts"
npm pkg set scripts.check="tsc"
npm pkg set scripts.check:watch="tsc --watch"
npm pkg set scripts.test="node --test \"src/**/*.test.ts\""

echo "Installing typescript and @types/node..."
npm i -D typescript @types/node --silent

# --- tsconfig.json ---------------------------------------------------------
cat > tsconfig.json <<'EOF'
{
  "compilerOptions": {
    "target": "esnext",
    "module": "nodenext",
    "strict": true,
    "noEmit": true,
    "erasableSyntaxOnly": true,
    "verbatimModuleSyntax": true,
    "allowImportingTsExtensions": true,
    "types": ["node"],
    "skipLibCheck": true
  },
  "include": ["src"]
}
EOF

# --- Source ----------------------------------------------------------------
cat > src/greet.ts <<'EOF'
export function greet(name?: string): string {
  return name ? `hello, ${name}` : "hello, world";
}
EOF

cat > src/main.ts <<'EOF'
import { greet } from "./greet.ts";

console.log(greet(process.argv[2]));
EOF

cat > src/greet.test.ts <<'EOF'
import { test } from "node:test";
import assert from "node:assert/strict";
import { greet } from "./greet.ts";

test("greets by name", () => {
  assert.equal(greet("Vijay"), "hello, Vijay");
});

test("falls back to world", () => {
  assert.equal(greet(), "hello, world");
});
EOF

cat > .gitignore <<'EOF'
node_modules/
EOF

# --- Smoke test ------------------------------------------------------------
echo
npx tsc
node src/main.ts
node src/main.ts Vijay

cat <<EOF

Ready: $name/
  cd $name
  npm start -- Alice      # run once with an argument
  npm run dev -- Alice    # re-run on file changes
  npm run check:watch     # type-check continuously (second terminal)
  npm test                # run tests
EOF
