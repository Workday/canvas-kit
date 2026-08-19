#!/usr/bin/env node
// @ts-check
'use strict';

import {execFile, spawn} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {promisify} from 'node:util';

const execFileAsync = promisify(execFile);

const BUILD_MARKER = path.join('modules', 'react', 'dist', 'es6', 'index.js');
const DEFAULT_RETRIES = 5;
const RETRY_BASE_MS = 8000;

/**
 * @param {string} output
 */
export function isRetryablePublishFailure(output) {
  return /TLOG_CREATE_ENTRY_ERROR|error creating tlog entry|an equivalent entry already exists|ECONNRESET|ETIMEDOUT|EAI_AGAIN|502 Bad Gateway|503 Service Unavailable/.test(
    output
  );
}

/**
 * @param {string[]} argv
 */
export function parsePublishArgs(argv) {
  /** @type {{distTag: string, retries: number, verifyOnly: boolean}} */
  const args = {distTag: '', retries: DEFAULT_RETRIES, verifyOnly: false};

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--verify-only') {
      args.verifyOnly = true;
    } else if (arg === '--dist-tag') {
      args.distTag = argv[++i] ?? '';
    } else if (arg.startsWith('--dist-tag=')) {
      args.distTag = arg.slice('--dist-tag='.length);
    } else if (arg === '--retries') {
      args.retries = Number(argv[++i]);
    } else if (arg.startsWith('--retries=')) {
      args.retries = Number(arg.slice('--retries='.length));
    }
  }

  if (!args.verifyOnly && !args.distTag) {
    throw new Error('Missing required --dist-tag (latest, support, next, or prerelease-next)');
  }
  if (!Number.isFinite(args.retries) || args.retries < 1) {
    throw new Error(`Invalid --retries value: ${args.retries}`);
  }

  return args;
}

/**
 * @returns {Promise<{name: string, version: string}[]>}
 */
export async function getPublicPackages() {
  const {stdout} = await execFileAsync('yarn', ['-s', 'lerna', 'ls', '--json']);
  const start = stdout.indexOf('[');
  const end = stdout.lastIndexOf(']');
  if (start === -1 || end === -1) {
    throw new Error(`Could not parse package list from lerna ls output:\n${stdout}`);
  }
  return JSON.parse(stdout.slice(start, end + 1));
}

/**
 * @param {string} name
 * @param {string} version
 */
export async function isPackageVersionOnNpm(name, version) {
  try {
    const {stdout} = await execFileAsync('npm', ['view', `${name}@${version}`, 'version'], {
      timeout: 30000,
    });
    return stdout.trim() === version;
  } catch {
    return false;
  }
}

/**
 * @param {{name: string, version: string}[]} packages
 */
export async function getUnpublishedPackages(packages) {
  const results = await Promise.all(
    packages.map(async pkg => ({
      pkg,
      published: await isPackageVersionOnNpm(pkg.name, pkg.version),
    }))
  );
  return results.filter(result => !result.published).map(result => result.pkg);
}

function assertPackagesBuilt() {
  if (!fs.existsSync(BUILD_MARKER)) {
    throw new Error(
      `Refusing to publish: ${BUILD_MARKER} is missing. Packages do not appear to be built.`
    );
  }
}

/**
 * @param {string} command
 * @param {string[]} args
 * @returns {Promise<{code: number | null, output: string}>}
 */
function runStreaming(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      env: process.env,
    });
    let output = '';

    child.stdout.on('data', chunk => {
      const text = String(chunk);
      output += text;
      process.stdout.write(text);
    });
    child.stderr.on('data', chunk => {
      const text = String(chunk);
      output += text;
      process.stderr.write(text);
    });
    child.on('error', reject);
    child.on('close', code => {
      resolve({code, output});
    });
  });
}

/**
 * @param {number} attempt
 */
function waitForRetry(attempt) {
  const delay = RETRY_BASE_MS * attempt;
  console.log(`Waiting ${delay}ms before retry ${attempt}...`);
  return new Promise(resolve => setTimeout(resolve, delay));
}

/**
 * @param {{name: string, version: string}[]} packages
 */
function formatPackageList(packages) {
  return packages.map(pkg => `${pkg.name}@${pkg.version}`).join('\n');
}

/**
 * Publish any workspace versions that are not yet on the registry.
 * `lerna publish from-package` skips versions that already exist, so this is
 * safe to retry after a partial release. Serial publishes plus retries recover
 * from Sigstore transparency-log 409s during npm trusted publishing.
 *
 * @param {{distTag: string, retries?: number, verifyOnly?: boolean}} options
 */
export async function publishFromPackage({distTag, retries = DEFAULT_RETRIES, verifyOnly = false}) {
  const packages = await getPublicPackages();
  console.log(`Checking ${packages.length} public packages against the npm registry...`);

  let unpublished = await getUnpublishedPackages(packages);
  if (unpublished.length === 0) {
    console.log('All workspace package versions are already on npm.');
    return packages;
  }

  console.log(`Missing from npm:\n${formatPackageList(unpublished)}`);

  if (verifyOnly) {
    throw new Error(
      `Verify failed. The following versions are not on npm:\n${formatPackageList(unpublished)}`
    );
  }

  assertPackagesBuilt();

  for (let attempt = 1; attempt <= retries; attempt++) {
    console.log(
      `Publishing unpublished packages (attempt ${attempt}/${retries}) with dist-tag "${distTag}" and concurrency 1...`
    );

    const result = await runStreaming('yarn', [
      'lerna',
      'publish',
      'from-package',
      '--yes',
      `--dist-tag=${distTag}`,
      '--concurrency=1',
    ]);

    unpublished = await getUnpublishedPackages(packages);
    if (unpublished.length === 0) {
      console.log('All workspace package versions are on npm.');
      return packages;
    }

    const retryable = result.code === 0 || isRetryablePublishFailure(result.output);
    if (!retryable) {
      throw new Error(
        `Publish failed with a non-retryable error. Still missing:\n${formatPackageList(
          unpublished
        )}`
      );
    }

    console.warn(`Retryable publish failure. Still missing:\n${formatPackageList(unpublished)}`);
    if (attempt < retries) {
      await waitForRetry(attempt);
    }
  }

  unpublished = await getUnpublishedPackages(packages);
  throw new Error(
    `Exhausted ${retries} publish attempts. Still missing:\n${formatPackageList(unpublished)}`
  );
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  Promise.resolve()
    .then(() => publishFromPackage(parsePublishArgs(process.argv.slice(2))))
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
}
