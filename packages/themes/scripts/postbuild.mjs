import fs from 'fs-extra';
import path from 'path';
import { clearPackageJson, copyDependencies, resolvePath } from '../../../scripts/build-helper.mjs';

const { __dirname, __workspace, OUTPUT_DIR, INPUT_DIR } = resolvePath(import.meta.url);

copyDependencies(path.resolve(__dirname, `../${INPUT_DIR}/presets`), path.resolve(__dirname, `../${OUTPUT_DIR}`));

fs.copySync(path.resolve(__dirname, `../${INPUT_DIR}/types`), `${OUTPUT_DIR}/types`);
fs.copySync(path.resolve(__dirname, '../package.json'), `${OUTPUT_DIR}/package.json`);
fs.copySync(path.resolve(__dirname, '../README.md'), `${OUTPUT_DIR}/README.md`);
fs.copySync(path.resolve(__workspace, './LICENSE'), `${OUTPUT_DIR}/LICENSE`);

clearPackageJson(path.resolve(__dirname, `../${OUTPUT_DIR}/package.json`));
