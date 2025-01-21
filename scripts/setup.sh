#!/bin/bash

case $1 in
    ng)
        cd submodules/primeng && pnpm run setup && \
        cd apps/showcase && pnpm link @primeuix/themes --global && \
        cd ../../packages/themes && pnpm link @primeuix/themes --global
        ;;
    vue)
        cd submodules/primevue && pnpm run setup && \
        cd apps/showcase && pnpm link @primeuix/themes --global && \
        cd ../../packages/themes && pnpm link @primeuix/themes --global
        ;;
    *)
        echo "Usage: $0 {ng|vue}"
        exit 1
        ;;
esac
