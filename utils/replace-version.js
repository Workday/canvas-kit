import globPkg from 'glob';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {promisify} from 'node:util';

const glob = promisify(globPkg.glob);

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const lernaConfig = JSON.parse(await fs.readFile(path.join(__dirname, '../lerna.json'), 'utf8'));
const {version} = lernaConfig;

async function main() {
  const files = await glob(path.join(__dirname, '../modules/**/dist/**/version.js'));
  for (const file of files) {
    const content = await fs.readFile(file, 'utf8');
    await fs.writeFile(file, content.replace('%VERSION%', version), 'utf8');
  }
}

main();
