#!/usr/bin/env bash

set -e

if ! command -v npm &>/dev/null; then
    echo "Error: npm is not installed. Please install Node.js and npm first." >&2
    exit 1
fi

echo "Installing dependencies..."
npm install

echo "Dependencies installed."

echo "Build step not required for development."
