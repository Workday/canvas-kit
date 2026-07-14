// TODO: This file is needed until v11 is released. We only run lerna bump on support and master,
// but not prerelease/major. Lerna pre-releases only update version strings on latest versions. This
// file keeps the CSS packages up to date with the `lerna.json` version.
import fs from 'node:fs/promises';
import {createRequire} from 'node:module';

const require = createRequire(import.meta.url);
const lernaConfig = require('../lerna.json');

async function main() {
  // Update each package.json file
  const packagePath = `${process.cwd()}/package.json`;
  const contents = (await fs.readFile(packagePath)).toString();

  await fs.writeFile(
    packagePath,
    contents.replace(/"version": "([0-9.]+)"/, `"version": "${lernaConfig.version}"`),
    'utf8'
  );
}

main();
