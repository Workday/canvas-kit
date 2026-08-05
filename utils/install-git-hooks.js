#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const gitDir = path.join(root, '.git');

if (!fs.existsSync(gitDir)) {
  process.exit(0);
}

const hooksDir = path.join(gitDir, 'hooks');
const hookSource = path.join(__dirname, 'git-hooks/pre-commit');
const hookTarget = path.join(hooksDir, 'pre-commit');

fs.mkdirSync(hooksDir, {recursive: true});
fs.copyFileSync(hookSource, hookTarget);
fs.chmodSync(hookTarget, 0o755);
