#!/usr/bin/env bash
# Build the Mana public demo from live source into this repo's public/ dir.
#
# Pipeline (run on the Air — never build over the /Volumes NFS mount, Vite hangs):
#   1. fast-forward the cockpit client from GitHub (serdarsalim/mana)
#   2. build it with --mode demo (VITE_DEMO): MSW + localStorage, no server/LLM/DB
#   3. emit the static bundle into ./public, which Vercel serves as-is
#
# It does NOT commit or push — review the diff, then commit + push to deploy.
# Pushing to this repo is what triggers Vercel → mana.serdarsalim.com.
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
SRC="${MANA_SRC:-$HOME/mana-build}"
REPO="https://github.com/serdarsalim/mana.git"
LOCAL=false
case "${1:-}" in
  --local) LOCAL=true ;;
  "") ;;
  *) echo "Usage: ./publish.sh [--local]" >&2; exit 2 ;;
esac
case "$SRC" in /Volumes/*) echo "Build on local disk, not a mounted vault." >&2; exit 1 ;; esac

echo "▸ Source: $SRC"
if [ -d "$SRC/.git" ]; then
  if [ "$LOCAL" = false ]; then
    git -C "$SRC" fetch origin main --quiet
    git -C "$SRC" merge --ff-only --quiet origin/main
    echo "  fast-forwarded from origin/main"
  fi
else
  git clone --depth 1 "$REPO" "$SRC"
fi

cd "$SRC/dashboard/client"
if [ -n "$(git status --porcelain -- . ../src)" ]; then
  echo "Commit the client/demo changes before building, so the bundle has a reviewable source revision." >&2
  exit 1
fi
echo "▸ Installing client deps"
# This repo intentionally does not version its lockfile. Dependency lifecycle
# scripts are unnecessary: Vite uses the registry's platform esbuild binary.
CI=true pnpm install --no-frozen-lockfile --ignore-scripts

echo "▸ Checking types and demo contracts"
node node_modules/typescript/bin/tsc --noEmit
node scripts/check-demo.mjs

echo "▸ Building demo into $HERE/public"
DEMO_OUT_DIR="$HERE/public" node node_modules/vite/bin/vite.js build --mode demo
cp node_modules/msw/lib/mockServiceWorker.js "$HERE/public/mockServiceWorker.js"
SOURCE_SHA="$(git rev-parse HEAD)" DEMO_PUBLIC="$HERE/public" node --input-type=module <<'NODE'
import { writeFileSync } from 'node:fs';
import path from 'node:path';
writeFileSync(path.join(process.env.DEMO_PUBLIC, 'demo-build.json'), JSON.stringify({
  sourceRevision: process.env.SOURCE_SHA,
  builtAt: new Date().toISOString(),
  data: 'fictional, browser-local',
}, null, 2) + '\n');
NODE
node "$HERE/scripts/check-bundle.mjs"

echo
echo "✓ Built. Static bundle is in public/ (compiled files + fake seed only — no vault content)."
echo "  Review and commit the bundle. Push only after Serdar authorizes deployment."
echo "  That push triggers Vercel → https://mana.serdarsalim.com"
