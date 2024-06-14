import fs from 'fs-extra';
import path from 'path';
import { clearPackageJson, renameDTSFile, resolvePath } from '../../../scripts/build-helper.mjs';

const { __dirname, __workspace, OUTPUT_DIR } = resolvePath(import.meta.url);

renameDTSFile(OUTPUT_DIR, 'index');

fs.copySync(path.resolve(__dirname, '../src/index.d.ts'), `${OUTPUT_DIR}/index.d.ts`);
fs.copySync(path.resolve(__dirname, '../package.json'), `${OUTPUT_DIR}/package.json`);
fs.copySync(path.resolve(__dirname, '../README.md'), `${OUTPUT_DIR}/README.md`);
fs.copySync(path.resolve(__workspace, './LICENSE'), `${OUTPUT_DIR}/LICENSE`);

clearPackageJson(path.resolve(__dirname, `../${OUTPUT_DIR}/package.json`));
