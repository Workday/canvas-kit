#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const expected = fs.readFileSync(path.resolve(__dirname, '../.nvmrc'), 'utf8').trim();
const current = process.versions.node;

if (current !== expected) {
  console.error(
    `Expected Node ${expected} (from .nvmrc) but running v${current}.\nRun: nvm use`
  );
  process.exit(1);
}
