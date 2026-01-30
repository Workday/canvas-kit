import fs from 'fs';
import util from 'util';
import path from 'path';
import { fileURLToPath } from 'url';
import getSpecifications from './get-specifications.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const writeFile = util.promisify(fs.writeFile);

getSpecifications().then(async specs => {
  const contents = `export const specifications = ${JSON.stringify(specs, null, '  ')};`;

  await writeFile(path.join(__dirname, '../dist/es6/lib/specs.js'), contents);
});
