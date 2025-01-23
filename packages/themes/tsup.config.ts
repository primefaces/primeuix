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
    dts: {
        entry: ['src/index.ts']
    },
    external: [/^@primeuix\/(.*)$/],
    minify: 'terser',
    sourcemap: true,
    splitting: false,
    clean: true,
    terserOptions: {
        mangle: {
            reserved: ['theme', 'css']
        }
    }
});
