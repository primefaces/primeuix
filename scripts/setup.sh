#!/bin/bash

case $1 in
    ng)
        cd submodules/primeng && pnpm run setup && \
        cd apps/showcase && pnpm link @primeuix/styled @primeuix/styles @primeuix/themes @primeuix/utils --global && \
        cd ../../packages/themes && pnpm link @primeuix/themes @primeuix/styles --global && \
        cd ../primeng && pnpm link @primeuix/styled @primeuix/styles @primeuix/themes @primeuix/utils --global
        ;;
    vue)
        cd submodules/primevue && pnpm run setup && \
        cd apps/showcase && pnpm link @primeuix/themes @primeuix/styles --global && \
        cd ../../packages/core && pnpm link @primeuix/styled @primeuix/utils --global && \
        cd ../themes && pnpm link @primeuix/themes @primeuix/styles --global && \
        cd ../primevue && pnpm link @primeuix/styled @primeuix/styles @primeuix/themes @primeuix/utils --global && \
        cd ../forms && pnpm link @primeuix/forms @primeuix/utils --global
        ;;
    react)
        cd submodules/primereact && pnpm run setup && \
        cd apps/showcase && pnpm link @primeuix/themes --global && \
        cd ../../packages/core && pnpm link @primeuix/styled @primeuix/utils --global && \
        cd ../headless && pnpm link @primeuix/styled @primeuix/utils --global && \
        cd ../hooks && pnpm link @primeuix/utils --global && \
        cd ../primereact && pnpm link @primeuix/styled @primeuix/styles @primeuix/utils --global && \
        cd ../styles && pnpm link @primeuix/styled @primeuix/styles @primeuix/utils --global && \
        cd ../types && pnpm link @primeuix/styled --global
        ;;
    *)
        echo "Usage: $0 {ng|vue|react}"
        exit 1
        ;;
esac
