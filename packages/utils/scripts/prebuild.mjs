import path from 'path';
import { removeBuild, resolvePath, updatePackageJson } from '../../../scripts/build-helper.mjs';

removeBuild(import.meta.url);

const { __dirname } = resolvePath(import.meta.url);
const __root = path.resolve(__dirname, '../');
const pkg = path.resolve(__root, './package.json');

updatePackageJson(pkg);

fs.readdirSync(path.resolve(__root, INPUT_DIR), { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .forEach(({ name: folderName }) => {
        const folderPath = path.resolve(__root, INPUT_DIR + folderName);
        let exports = [];

        fs.readdirSync(folderPath, { withFileTypes: true })
            .filter((dir) => dir.isDirectory())
            .forEach(({ name: subFolderName }) => {
                const subFolderPath = path.resolve(folderPath, `./${subFolderName}`);

                fs.readdirSync(subFolderPath).forEach((file) => {
                    let fileName = file.split(/(.js)$/)[0];

                    exports.push(`export { default as ${fileName}} from './${subFolderName}/${fileName}';`);
                });
            });

        fs.writeFileSync(path.resolve(folderPath, 'index.js'), exports.join('\n'));
    });
