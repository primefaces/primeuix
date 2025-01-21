#!/bin/bash

case $1 in
    ng)
        cd submodules/primeng && pnpm run dev
        ;;
    vue)
        cd submodules/primevue && pnpm run hot:dev
        ;;
    *)
        echo "Usage: $0 {ng|vue}"
        exit 1
        ;;
esac
