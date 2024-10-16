import fs from 'fs-extra';
import path from 'path';
import { removeBuild, resolvePath, updatePackageJson } from '../../../scripts/build-helper.mjs';

removeBuild(import.meta.url);

const { __dirname, INPUT_DIR } = resolvePath(import.meta.url);
const __root = path.resolve(__dirname, '../');
const pkg = path.resolve(__root, './package.json');

updatePackageJson(pkg);

// Fill * > index.ts in subfolders
fs.readdirSync(path.resolve(__root, INPUT_DIR), { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .forEach(({ name: folderName }) => {
        const folderPath = path.resolve(__root, INPUT_DIR + folderName);
        let exports = [];

        fs.readdirSync(folderPath, { withFileTypes: true })
            .filter((dir) => dir.isDirectory())
            .forEach(({ name: subFolderName }) => {
                exports.push(`export * from '@primeuix/form/${folderName}/${subFolderName}';\n`);
            });

        exports.length && fs.writeFileSync(path.resolve(folderPath, 'index.ts'), exports.join(''));
    });
