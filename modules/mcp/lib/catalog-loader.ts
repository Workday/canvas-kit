import * as fs from 'node:fs';
import * as path from 'node:path';
import {fileURLToPath} from 'node:url';

import type {ComponentCatalog, IconCatalog, TokenCatalog} from './catalog-types';
import type {CatalogBundle} from './register-catalog-tools';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function resolveCatalogPath(fileName: string): string {
  const candidates = [path.resolve(__dirname, fileName), path.resolve(__dirname, 'lib', fileName)];

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }

  throw new Error(
    `Missing ${fileName}. Run "yarn build:indexes" in modules/mcp before starting the MCP server.`
  );
}

function readCatalogFile<T>(fileName: string): T {
  return JSON.parse(fs.readFileSync(resolveCatalogPath(fileName), 'utf8')) as T;
}

export function loadCatalogBundle(): CatalogBundle {
  return {
    componentCatalog: readCatalogFile<ComponentCatalog>('component-index.json'),
    tokenCatalog: readCatalogFile<TokenCatalog>('token-index.json'),
    iconCatalog: readCatalogFile<IconCatalog>('icon-index.json'),
  };
}
