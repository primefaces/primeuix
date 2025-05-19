import { globSync } from 'glob';
import { defineConfig, type Options } from 'tsup';

const themes: string[] = [];

const entry = globSync('src/**/index.ts').reduce((acc: Record<string, string>, file: string) => {
    const name = file.replace(/^src\//, '').replace(/\.ts$/, '');
    const themeName: string | undefined = name.startsWith('presets/') ? name.split('/')?.[1] : undefined;

    if (themeName && !themes.includes(themeName)) themes.push(themeName);

    acc[name.replace(/^presets\//, '')] = file;

    return acc;
}, {});

export default defineConfig([
    {
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
                reserved: ['theme', 'style', 'css']
            }
        }
    },
    ...themes.map<Options>((theme) => {
        const name = theme.charAt(0).toUpperCase() + theme.slice(1);
        const globalName = `PrimeUIX.Themes.${name}`;

        return {
            entry: {
                [theme]: `src/presets/${theme}/index.ts`
            },
            format: ['iife'],
            outDir: 'dist/umd',
            globalName,
            minify: 'terser',
            terserOptions: {
                mangle: {
                    reserved: ['theme', 'style', 'css']
                }
            },
            outExtension: () => ({ js: `.js` }),
            esbuildOptions(options) {
                options.footer = {
                    // https://github.com/egoist/tsup/issues/710
                    js: `${globalName} = ${globalName}.default || ${globalName};`
                };
            }
        };
    }),
    {
        entry: {
            'tokens/index': 'tokens.ts'
        },
        format: ['esm'],
        outDir: 'dist',
        dts: true,
        minify: 'terser',
        sourcemap: true,
        splitting: false
    }
]);
