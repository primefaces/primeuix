#!/bin/bash

pnpm run build:dev &

sleep 2

case $1 in
    ng)
        cd submodules/primeng && pnpm run dev & sleep 2 && open http://localhost:4200
        ;;
    vue)
        cd submodules/primevue && pnpm run hot:dev & sleep 2 && open http://localhost:3000
        ;;
    react)
        cd submodules/primereact && pnpm run dev2 & sleep 2 && open http://localhost:3001
        ;;
    *)
        echo "Usage: $0 {ng|vue|react}"
        exit 1
        ;;
esac
