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

# Chrome sometimes lingers after writing the PDF, so run it in the background
# and kill it once the output file exists and has stopped growing.
PROFILE="$(mktemp -d)"
rm -f "$OUT"
"$CHROME" --headless=new --disable-gpu --no-first-run \
  --user-data-dir="$PROFILE" \
  --print-to-pdf="$OUT" --no-pdf-header-footer \
  --virtual-time-budget=10000 \
  "http://localhost:$PORT/#/all" 2>/dev/null &
CHROME_PID=$!
for _ in $(seq 1 60); do
  sleep 2
  if [ -s "$OUT" ]; then
    S1=$(stat -f%z "$OUT"); sleep 2; S2=$(stat -f%z "$OUT")
    [ "$S1" = "$S2" ] && break
  fi
done
kill "$CHROME_PID" 2>/dev/null || true
sleep 1
rm -rf "$PROFILE" 2>/dev/null || true

if [ -s "$OUT" ]; then
  echo "wrote $OUT ($(du -h "$OUT" | cut -f1))"
else
  echo "FAILED: $OUT is empty" >&2
  exit 1
fi
