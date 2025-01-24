import { globSync } from 'glob';
import { defineConfig, type Options } from 'tsup';

const resolvers: string[] = [];

const entry = globSync('src/**/index.ts').reduce((acc: any, file) => {
    const name = file.replace(/^src\//, '').replace(/\.ts$/, '');
    const resolver: string | undefined = name.startsWith('resolvers/') ? name.split('/')?.[1] : undefined;

    resolver && !resolvers.includes(resolver) && resolvers.push(resolver);

    acc[name] = file;

    return acc;
}, {});

export default defineConfig([
    {
        entry,
        format: ['esm'],
        outDir: 'dist',
        dts: true,
        external: [/^@primeuix\/(.*)$/, 'joi', 'superstruct', 'valibot', 'yup', 'zod'],
        minify: true,
        sourcemap: true,
        splitting: false,
        clean: true,
        target: 'esnext'
    },
    ...resolvers.map<Options>((resolver) => ({
        entry: {
            [resolver]: `src/resolvers/${resolver}/index.ts`
        },
        format: ['iife'],
        outDir: 'dist/umd/resolvers',
        globalName: `PrimeUIX.Forms.${resolver.charAt(0).toUpperCase() + resolver.slice(1)}`,
        external: ['joi', 'superstruct', 'valibot', 'yup', 'zod'],
        minify: true,
        outExtension: () => ({ js: `.js` })
    }))
]);
