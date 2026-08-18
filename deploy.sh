#!/usr/bin/env bash
# APEX Enterprise — clean production deploy
# Usage: ./deploy.sh
set -euo pipefail

cd "$(dirname "$0")"

echo "==> [1/5] Cleaning previous build"
rm -rf .next

echo "==> [2/5] Installing dependencies"
npm install --no-audit --no-fund

echo "==> [3/5] Building production bundle"
npm run build

echo "==> [4/5] Build ID:"
cat .next/BUILD_ID
echo ""

echo "==> [5/5] Done. Start the server with: npm run start"
echo "     (or 'start_process npm run start' for a live preview)"
