import { globSync } from 'glob';
import { defineConfig } from 'tsup';

const entry = globSync('src/**/index.ts').reduce((acc: Record<string, string>, file: string) => {
    const name = file.replace(/^src\//, '').replace(/\.ts$/, '');

    acc[name] = file;

    return acc;
}, {});

export default defineConfig([
    {
        entry,
        format: ['esm'],
        outDir: 'dist',
        external: [/^@primeuix\/(.*)$/],
        minify: 'terser',
        sourcemap: true,
        splitting: false,
        clean: true,
        terserOptions: {
            mangle: {
                reserved: ['theme', 'style', 'css']
            }
        }
    },
    {
        entry: {
            index: 'src/index.ts',
            types: 'src/types.ts'
        },
        format: ['esm'],
        outDir: 'dist',
        dts: true,
        external: [/^@primeuix\/(.*)$/],
        minify: 'terser',
        sourcemap: true,
        splitting: false
    }
]);
