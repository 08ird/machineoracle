#!/usr/bin/env bash
# Regenerate public/infinite-software.pdf from the live #/all page.
#
# Builds the site, serves the build on a throwaway port, prints it with
# headless Chrome, and cleans up. Run from client/:  npm run pdf
set -euo pipefail
cd "$(dirname "$0")/.."

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PORT=4179
OUT="public/infinite-software.pdf"

npm run build >/dev/null

npx vite preview --port "$PORT" --strictPort >/dev/null 2>&1 &
SERVER=$!
trap 'kill $SERVER 2>/dev/null || true' EXIT
sleep 2

PROFILE="$(mktemp -d)"
"$CHROME" --headless=new --disable-gpu --no-first-run \
  --user-data-dir="$PROFILE" \
  --print-to-pdf="$OUT" --no-pdf-header-footer \
  --virtual-time-budget=10000 \
  "http://localhost:$PORT/#/all" 2>/dev/null || true
rm -rf "$PROFILE"

if [ -s "$OUT" ]; then
  echo "wrote $OUT ($(du -h "$OUT" | cut -f1))"
else
  echo "FAILED: $OUT is empty" >&2
  exit 1
fi
