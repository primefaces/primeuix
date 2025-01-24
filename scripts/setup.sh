#!/bin/bash

case $1 in
    ng)
        cd submodules/primeng && pnpm run setup && \
        cd apps/showcase && pnpm link @primeuix/themes @primeuix/styles --global && \
        cd ../../packages/themes && pnpm link @primeuix/themes @primeuix/styles --global && \
        cd ../primeng && pnpm link @primeuix/themes @primeuix/styles --global
        ;;
    vue)
        cd submodules/primevue && pnpm run setup && \
        cd apps/showcase && pnpm link @primeuix/themes @primeuix/styles --global && \
        cd ../../packages/themes && pnpm link @primeuix/themes @primeuix/styles --global && \
        cd ../primevue && pnpm link @primeuix/themes @primeuix/styles --global
        ;;
    *)
        echo "Usage: $0 {ng|vue}"
        exit 1
        ;;
esac
