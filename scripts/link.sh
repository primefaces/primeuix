#!/bin/bash
set -e

cd packages/forms && sudo pnpm link --global
cd ../locale && sudo pnpm link --global
cd ../motion && sudo pnpm link --global
cd ../styled && sudo pnpm link --global
cd ../styles && sudo pnpm link --global
cd ../themes && sudo pnpm link --global
cd ../utils && sudo pnpm link --global
