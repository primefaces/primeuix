import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['esm'],
    outDir: 'dist',
    dts: {
        entry: ['src/index.ts', 'src/types.ts']
    },
    external: [/^@primeuix\/(.*)$/],
    sourcemap: true,
    splitting: false
});
