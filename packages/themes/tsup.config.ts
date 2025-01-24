import { globSync } from 'glob';
import { defineConfig, type Options } from 'tsup';

const themes: string[] = [];

const entry = globSync('src/**/index.ts').reduce((acc: any, file) => {
    const name = file.replace(/^src\//, '').replace(/\.ts$/, '');
    const themeName: string | undefined = name.startsWith('presets/') ? name.split('/')?.[1] : undefined;

    themeName && !themes.includes(themeName) && themes.push(themeName);

    acc[name] = file;

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
                reserved: ['theme', 'css']
            }
        }
    },
    ...themes.map<Options>((theme) => ({
        entry: {
            [theme]: `src/presets/${theme}/index.ts`
        },
        format: ['iife'],
        outDir: 'dist/umd',
        globalName: `PrimeUIX.Themes.${theme.charAt(0).toUpperCase() + theme.slice(1)}`,
        minify: 'terser',
        terserOptions: {
            mangle: {
                reserved: ['theme', 'css']
            }
        },
        outExtension: () => ({ js: `.js` })
    }))
]);
