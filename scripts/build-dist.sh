#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIST_DIR="$ROOT_DIR/dist"

rm -rf "$DIST_DIR"
mkdir -p "$DIST_DIR"

shopt -s nullglob

# Copy top-level HTML and Cloudflare headers/redirects.
for file in "$ROOT_DIR"/*.html "$ROOT_DIR"/_headers "$ROOT_DIR"/_redirects; do
  if [[ -e "$file" ]]; then
    cp -a "$file" "$DIST_DIR/"
  fi
done

# Copy static asset directories needed by the site.
for dir in assets albums content css events includes js; do
  if [[ -d "$ROOT_DIR/$dir" ]]; then
    cp -a "$ROOT_DIR/$dir" "$DIST_DIR/"
  fi
done

echo "Built dist at: $DIST_DIR"
