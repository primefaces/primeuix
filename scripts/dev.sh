#!/bin/bash

# This script starts the development servers for PrimeNG, PrimeVue, or PrimeReact
# based on the argument provided. It also sets up a common build watcher using tsup.


# Store background process IDs
pids=()

# Cross-platform URL opener
open_url() {
    url=$1
    if command -v xdg-open > /dev/null; then
        xdg-open "$url" >/dev/null 2>&1
    elif command -v open > /dev/null; then
        open "$url" >/dev/null 2>&1
    elif command -v start > /dev/null; then
        start "" "$url" >/dev/null 2>&1
    else
        echo "Please open this URL manually: $url"
    fi
}

# Clean up all child processes on exit
cleanup() {
    echo -e "\n[!] Shutting down..."
    for pid in "${pids[@]}"; do
        kill "$pid" 2>/dev/null
    done
    wait
    exit 0
}

# Catch SIGINT (Ctrl+C) and SIGTERM signals
trap cleanup SIGINT SIGTERM

# Start the common build watcher (tsup)
pnpm run build:dev &
pids+=($!)

sleep 2

# Start the appropriate frontend dev server based on argument
case $1 in
    ng)
        cd submodules/primeng
        pnpm run dev &
        pids+=($!)
        sleep 2
        open_url "http://localhost:4200"
        ;;
    vue)
        cd submodules/primevue
        pnpm run hot:dev &
        pids+=($!)
        sleep 2
        open_url "http://localhost:3000"
        ;;
    react)
        cd submodules/primereact
        pnpm run dev2 &
        pids+=($!)
        sleep 2
        open_url "http://localhost:3001"
        ;;
    *)
        echo "Usage: $0 {ng|vue|react}"
        cleanup
        ;;
esac

# Wait for all background processes to exit
wait
