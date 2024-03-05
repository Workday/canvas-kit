// TODO: This file is needed until v11 is released. We only run lerna bump on support and master,
// but not prerelease/major. Lerna pre-releases only update version strings on latest versions. This
// file keeps the CSS packages up to date with the `lerna.json` version.

const fs = require('node:fs/promises');
const path = require('node:path');

async function main() {
  // Read lerna.json version for the version number
  const lernaConfig = require('../lerna.json');

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
