#!/bin/sh

# Fail immediately if any command fails
set -e

# Force npm/node to output colors for ansi2html
export FORCE_COLOR=1

# Ensure we are in the repo root
cd /app/codex

echo "Building Codex dependencies..."

# Install dependencies
npm ci

# Build the icons package
npm run build -w @wikimedia/codex-icons

# Build the design tokens package
npm run build -w @wikimedia/codex-design-tokens

# Build the main Codex library
CODEX_DOC_ROOT=/w/codex/packages/codex/dist npm run build -w @wikimedia/codex

echo "Build complete."