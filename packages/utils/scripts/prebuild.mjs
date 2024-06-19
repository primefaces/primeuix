import fs from 'fs-extra';
import path from 'path';
import { removeBuild, resolvePath, updatePackageJson } from '../../../scripts/build-helper.mjs';

removeBuild(import.meta.url);

const { __dirname, INPUT_DIR } = resolvePath(import.meta.url);
const __root = path.resolve(__dirname, '../');
const pkg = path.resolve(__root, './package.json');

updatePackageJson(pkg);

let folderExports = [];

// Fill * > index.js in subfolders
fs.readdirSync(path.resolve(__root, INPUT_DIR), { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .forEach(({ name: folderName }) => {
        const folderPath = path.resolve(__root, INPUT_DIR + folderName);
        let exports = [];

        folderExports.push(`export * from '@primeuix/utils/${folderName}';`);

        fs.readdirSync(folderPath, { withFileTypes: true })
            .filter((dir) => dir.isDirectory())
            .forEach(({ name: subFolderName }) => {
                const subFolderPath = path.resolve(folderPath, `./${subFolderName}`);

                fs.readdirSync(subFolderPath).forEach((file) => {
                    let fileName = file.split(/(.js)$/)[0];

                    exports.push(`export { default as ${fileName} } from './${subFolderName}/${file}';`);
                });
            });

        exports.length && fs.writeFileSync(path.resolve(folderPath, 'index.js'), exports.join('\n'));
    });

// src > index.js
folderExports.length && fs.writeFileSync(path.resolve(__root, INPUT_DIR + 'index.js'), folderExports.join('\n'));
