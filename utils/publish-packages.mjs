#!/usr/bin/env node
// @ts-check
'use strict';

/**
 * Finishes a partial npm release without bumping versions again.
 *
 * Compares each public workspace package's current version against the registry,
 * then runs `lerna publish from-package` for anything still missing. Safe to call
 * after a failed release job because already-published versions are skipped.
 */

import {execFile, spawn} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {promisify} from 'node:util';

const execFileAsync = promisify(execFile);

// Resolve paths from this file's location so checks work regardless of cwd.
const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BUILD_MARKER = path.join(REPO_ROOT, 'modules', 'react', 'dist', 'es6', 'index.js');
const DEFAULT_RETRIES = 5;
const RETRY_BASE_MS = 8000;
const REGISTRY_CHECK_CONCURRENCY = 4;
const ALLOWED_DIST_TAGS = new Set(['latest', 'support', 'next', 'prerelease-next']);

/** @typedef {{distTag: string, retries: number, verifyOnly: boolean, requireUnpublished: boolean}} PublishArgs */

/**
 * Starting point before CLI flags are applied.
 *
 * @returns {PublishArgs}
 */
function createDefaultPublishArgs() {
  return {
    distTag: '',
    retries: DEFAULT_RETRIES,
    verifyOnly: false,
    requireUnpublished: false,
  };
}

/**
 * Reads a single CLI option in either `--flag value` or `--flag=value` form.
 *
 * @param {string[]} argv
 * @param {number} index
 * @param {string} flag
 * @returns {{value: string, nextIndex: number} | null}
 */
function readOptionValue(argv, index, flag) {
  const arg = argv[index];
  const equalsPrefix = `${flag}=`;

  // `--dist-tag=latest`
  if (arg.startsWith(equalsPrefix)) {
    return {value: arg.slice(equalsPrefix.length), nextIndex: index};
  }

  // Not the flag we're looking for; let the caller try another parser.
  if (arg !== flag) {
    return null;
  }

  const value = argv[index + 1];
  // `--dist-tag` with no value, or followed by another flag.
  if (value === undefined || value.startsWith('--')) {
    throw new Error(`Missing value for ${flag}`);
  }

  return {value, nextIndex: index + 1};
}

/**
 * Walks process.argv and fills in dist-tag, retries, and verify-only flags.
 *
 * @param {string[]} argv
 * @returns {PublishArgs}
 */
function parsePublishArgsFromArgv(argv) {
  const args = createDefaultPublishArgs();

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];

    if (arg === '--verify-only') {
      args.verifyOnly = true;
      continue;
    }

    if (arg === '--require-unpublished') {
      args.requireUnpublished = true;
      continue;
    }

    const distTag = readOptionValue(argv, i, '--dist-tag');
    if (distTag) {
      args.distTag = distTag.value;
      i = distTag.nextIndex;
      continue;
    }

    const retries = readOptionValue(argv, i, '--retries');
    if (retries) {
      args.retries = Number(retries.value);
      i = retries.nextIndex;
    }
  }

  return args;
}

/**
 * Ensures parsed CLI input is complete and safe to act on.
 *
 * @param {PublishArgs} args
 */
function validatePublishArgs(args) {
  // Publishing requires a dist-tag; verify-only mode checks npm without publishing.
  if (!args.verifyOnly && !args.distTag) {
    throw new Error('Missing required --dist-tag (latest, support, next, or prerelease-next)');
  }

  // Reject mistyped or unsupported tags before we touch the registry.
  if (args.distTag && !ALLOWED_DIST_TAGS.has(args.distTag)) {
    throw new Error(
      `Unsupported dist-tag "${args.distTag}". Expected one of: ${[...ALLOWED_DIST_TAGS].join(', ')}`
    );
  }

  // Retries must be a positive integer so the publish loop has a well-defined limit.
  if (!Number.isInteger(args.retries) || args.retries < 1) {
    throw new Error(`Invalid --retries value: ${args.retries}`);
  }
}

/**
 * Parses and validates CLI flags for direct script invocation or tests.
 *
 * @param {string[]} argv
 * @returns {PublishArgs}
 */
export function parsePublishArgs(argv) {
  const args = parsePublishArgsFromArgv(argv);
  validatePublishArgs(args);
  return args;
}

/**
 * Returns true when npm/Lerna output looks like a transient failure worth retrying
 * (Sigstore transparency-log conflicts, network blips, or registry 5xx), as opposed to
 * a permanent error such as auth or permission denial.
 *
 * @param {string} output
 */
export function isRetryablePublishFailure(output) {
  return /TLOG_CREATE_ENTRY_ERROR|error creating tlog entry|an equivalent entry already exists|ECONNRESET|ETIMEDOUT|EAI_AGAIN|502 Bad Gateway|503 Service Unavailable/.test(
    output
  );
}

/**
 * Lists every public package in the monorepo with the version from the current checkout.
 *
 * @returns {Promise<{name: string, version: string}[]>}
 */
export async function getPublicPackages() {
  const {stdout} = await execFileAsync('yarn', ['-s', 'lerna', 'ls', '--json']);

  // yarn may print warnings before the JSON array; find the array bounds explicitly.
  const start = stdout.indexOf('[');
  const end = stdout.lastIndexOf(']');
  if (start === -1 || end === -1) {
    throw new Error(`Could not parse package list from lerna ls output:\n${stdout}`);
  }
  return JSON.parse(stdout.slice(start, end + 1));
}

/**
 * Checks whether an exact package version already exists on the public npm registry.
 *
 * @param {string} name
 * @param {string} version
 */
export async function isPackageVersionOnNpm(name, version) {
  try {
    const {stdout} = await execFileAsync('npm', ['view', `${name}@${version}`, 'version'], {
      timeout: 30000,
    });
    return stdout.trim() === version;
  } catch (err) {
    const execErr = /** @type {Error & {stdout?: string, stderr?: string}} */ (err);
    const output = `${execErr.stdout ?? ''}\n${execErr.stderr ?? ''}\n${execErr.message}`;

    // Version is actually missing from npm — treat as unpublished, not an operational error.
    if (/E404|is not in this registry|No match found for version/.test(output)) {
      return false;
    }

    // Timeout, auth, or registry outage — do not misreport as "missing from npm".
    throw new Error(`Could not check ${name}@${version} on npm:\n${output}`, {cause: err});
  }
}

/**
 * Runs async work in fixed-size batches to avoid hammering npm with parallel `view` calls.
 *
 * @template T, R
 * @param {T[]} items
 * @param {number} limit
 * @param {(item: T) => Promise<R>} fn
 * @returns {Promise<R[]>}
 */
async function mapWithConcurrency(items, limit, fn) {
  const results = [];
  for (let i = 0; i < items.length; i += limit) {
    const batch = items.slice(i, i + limit);
    results.push(...(await Promise.all(batch.map(fn))));
  }
  return results;
}

/**
 * Returns workspace packages whose current version is not yet on npm.
 *
 * @param {{name: string, version: string}[]} packages
 */
export async function getUnpublishedPackages(packages) {
  const results = await mapWithConcurrency(packages, REGISTRY_CHECK_CONCURRENCY, async pkg => ({
    pkg,
    published: await isPackageVersionOnNpm(pkg.name, pkg.version),
  }));
  return results.filter(result => !result.published).map(result => result.pkg);
}

/**
 * Refuses to publish when CI forgot to build — Lerna would ship stale or empty tarballs.
 */
function assertPackagesBuilt() {
  if (!fs.existsSync(BUILD_MARKER)) {
    throw new Error(
      `Refusing to publish: ${BUILD_MARKER} is missing. Packages do not appear to be built.`
    );
  }
}

/**
 * Runs a child process and streams stdout/stderr to the console while capturing output
 * for retry/error classification.
 *
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
 * Waits longer on each subsequent attempt to give Sigstore/npm time to settle.
 *
 * @param {number} attempt
 */
function waitForRetry(attempt) {
  const delay = RETRY_BASE_MS * attempt;
  console.log(`Waiting ${delay}ms before retry ${attempt}...`);
  return new Promise(resolve => setTimeout(resolve, delay));
}

/**
 * Formats package names for log and error messages.
 *
 * @param {{name: string, version: string}[]} packages
 */
function formatPackageList(packages) {
  return packages.map(pkg => `${pkg.name}@${pkg.version}`).join('\n');
}

/**
 * Parses `@scope/name@version` strings from Lerna publish output.
 *
 * @param {string} output
 * @returns {{name: string, version: string}[]}
 */
export function parsePublishedPackageLines(output) {
  /** @type {Map<string, {name: string, version: string}>} */
  const packages = new Map();

  for (const match of output.matchAll(/@workday\/([a-z-]+)@(\d+\.\d+\.\d+(?:-[^\s'"]+)?)/g)) {
    const name = `@workday/${match[1]}`;
    packages.set(name, {name, version: match[2]});
  }

  return [...packages.values()];
}

/**
 * Publish any workspace versions that are not yet on the registry.
 * `lerna publish from-package` skips versions that already exist, so this is
 * safe to retry after a partial release. Serial publishes plus retries recover
 * from Sigstore transparency-log 409s during npm trusted publishing.
 *
 * @param {{distTag: string, retries?: number, verifyOnly?: boolean, requireUnpublished?: boolean}} options
 */
export async function publishFromPackage({
  distTag,
  retries = DEFAULT_RETRIES,
  verifyOnly = false,
  requireUnpublished = false,
}) {
  const packages = await getPublicPackages();
  console.log(`Checking ${packages.length} public packages against the npm registry...`);

  let unpublished = await getUnpublishedPackages(packages);

  // Nothing to do — the release is already complete on npm for this checkout.
  if (unpublished.length === 0) {
    if (requireUnpublished) {
      throw new Error(
        'Release recovery found no unpublished packages. The release step likely failed for a reason other than a partial npm publish.'
      );
    }

    console.log('All workspace package versions are already on npm.');
    return packages;
  }

  console.log(`Missing from npm:\n${formatPackageList(unpublished)}`);

  // Dry run for CI checks: report gaps without publishing.
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

    // Re-check the registry; Lerna may exit non-zero even after some packages landed.
    if (unpublished.length === 0) {
      console.log('All workspace package versions are on npm.');
      return packages;
    }

    // Lerna can exit 0 while packages are still missing, or non-zero for retryable tlog errors.
    const retryable = result.code === 0 || isRetryablePublishFailure(result.output);
    if (!retryable) {
      throw new Error(
        `Publish failed with a non-retryable error. Still missing:\n${formatPackageList(
          unpublished
        )}`
      );
    }

    console.warn(`Retryable publish failure. Still missing:\n${formatPackageList(unpublished)}`);

    // Back off before the next from-package pass (which skips versions already on npm).
    if (attempt < retries) {
      await waitForRetry(attempt);
    }
  }

  unpublished = await getUnpublishedPackages(packages);
  throw new Error(
    `Exhausted ${retries} publish attempts. Still missing:\n${formatPackageList(unpublished)}`
  );
}

// Allow `node utils/publish-packages.mjs --dist-tag latest` from release workflows.
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  Promise.resolve()
    .then(() => publishFromPackage(parsePublishArgs(process.argv.slice(2))))
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
}
