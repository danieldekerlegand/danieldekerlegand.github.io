#!/usr/bin/env bash
# Regenerate public/Daniel-DeKerlegand-CV.pdf from the site's own /resume page.
#
# The PDF is rendered through the print stylesheet in src/styles/global.css, so
# the downloadable résumé and the web résumé can never drift apart — edit
# src/data/resume.ts, run this, and both are updated.
#
# Usage: npm run pdf
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT="$ROOT/public/Daniel-DeKerlegand-CV.pdf"
PORT="${PORT:-4329}"

CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
if [[ ! -x "$CHROME" ]]; then
  echo "error: Chrome not found at '$CHROME'. Set CHROME=/path/to/chrome and retry." >&2
  exit 1
fi

echo "→ building site"
npm run build --silent >/dev/null

echo "→ starting preview on :$PORT"
npx astro preview --port "$PORT" >/dev/null 2>&1 &
PREVIEW_PID=$!
trap 'kill "$PREVIEW_PID" 2>/dev/null || true' EXIT

for _ in $(seq 1 30); do
  if curl -sf -o /dev/null "http://localhost:$PORT/resume"; then break; fi
  sleep 1
done

echo "→ printing /resume to PDF"
"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$OUT" "http://localhost:$PORT/resume" >/dev/null 2>&1

echo "✓ wrote ${OUT#"$ROOT"/}"
