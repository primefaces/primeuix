import fs from 'fs-extra';
import path from 'path';
import { removeBuild, resolvePath, updatePackageJson } from '../../../scripts/build-helper.mjs';

removeBuild(import.meta.url);

const { __dirname, INPUT_DIR } = resolvePath(import.meta.url);
const __root = path.resolve(__dirname, '../');
const pkg = path.resolve(__root, './package.json');

updatePackageJson(pkg);

// Fill * > index.ts in subfolders
let exports = [
    `export interface ResolverOptions {
    sync?: boolean;
    raw?: boolean;
}

export interface ResolverResult<T> {
    values: T;
    errors: Record<string, any>;
}

`
];

fs.readdirSync(path.resolve(__root, INPUT_DIR + '/resolvers'), { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .forEach(({ name: folderName }) => {
        exports.push(`export * from '@primeuix/forms/resolvers/${folderName}';\n`);

        exports.length && fs.writeFileSync(path.resolve(INPUT_DIR + '/resolvers', 'index.ts'), exports.join(''));
    });
