import { globSync } from 'glob';
import { defineConfig } from 'tsup';

const entry = globSync('src/**/index.ts').reduce((acc: any, file) => {
    const name = file.replace(/^src\//, '').replace(/\.ts$/, '');

    acc[name] = file;

    return acc;
}, {});

export default defineConfig({
    entry,
    format: ['esm'],
    outDir: 'dist',
    dts: true,
    external: [/^@primeuix\/(.*)$/, 'joi', 'superstruct', 'valibot', 'yup', 'zod'],
    sourcemap: true,
    splitting: false,
    target: 'esnext'
});
