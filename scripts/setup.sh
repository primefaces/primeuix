#!/bin/bash

case $1 in
    ng)
        cd submodules/primeng-nextchapter && pnpm run setup && \
        cd apps/showcase && pnpm link @primeuix/styled @primeuix/styles @primeuix/themes @primeuix/utils @primeuix/motion --global && \
        cd ../../packages/themes && pnpm link @primeuix/themes @primeuix/styles --global && \
        cd ../primeng && pnpm link @primeuix/styled @primeuix/styles @primeuix/themes @primeuix/utils @primeuix/motion --global
        ;;
    vue)
        cd submodules/primevue-nextchapter && pnpm run setup && \
        cd apps/showcase && pnpm link @primeuix/themes @primeuix/styles --global && \
        cd ../../packages/core && pnpm link @primeuix/styled @primeuix/utils --global && \
        cd ../themes && pnpm link @primeuix/themes @primeuix/styles --global && \
        cd ../primevue && pnpm link @primeuix/styled @primeuix/styles @primeuix/themes @primeuix/utils --global && \
        cd ../forms && pnpm link @primeuix/forms @primeuix/utils --global
        ;;
    react)
        cd submodules/primereact-nextchapter && pnpm run setup && \
        cd apps/showcase && pnpm link @primeuix/styled @primeuix/styles @primeuix/themes @primeuix/motion --global && \
        cd ../../packages/@primereact/core && pnpm link @primeuix/styled @primeuix/utils --global && \
        cd ../headless && pnpm link @primeuix/styled @primeuix/utils --global && \
        cd ../hooks && pnpm link @primeuix/utils --global && \
        cd ../styles && pnpm link @primeuix/styled @primeuix/styles @primeuix/utils --global && \
        cd ../types && pnpm link @primeuix/styled --global && \
        cd ../../primereact && pnpm link @primeuix/styled @primeuix/styles @primeuix/utils @primeuix/motion --global
        ;;
    *)
        echo "Usage: $0 {ng|vue|react}"
        exit 1
        ;;
esac
