#!/bin/bash
# Script to kill processes on ports 3000 and 9229

echo "Killing processes on port 3000..."
lsof -ti:3000 | xargs kill -9 2>/dev/null || echo "No process on port 3000"

echo "Killing processes on port 9229..."
lsof -ti:9229 | xargs kill -9 2>/dev/null || echo "No process on port 9229"

echo "Done! Ports are now free."

