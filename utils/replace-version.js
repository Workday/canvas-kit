const path = require('node:path');
const {promisify} = require('node:util');
const fs = require('node:fs/promises');
const glob = promisify(require('glob'));

const {version} = require(path.join(__dirname, '../lerna.json'));

async function main() {
  const files = await glob(path.join(__dirname, '../modules/**/dist/**/version.js'));
  for (const file of files) {
    const content = await fs.readFile(file, 'utf8');
    await fs.writeFile(file, content.replace('%VERSION%', version), 'utf8');
  }
}

main();
