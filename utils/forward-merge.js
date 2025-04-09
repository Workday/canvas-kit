#!/usr/bin/env node
// @ts-check
'use strict';

const fs = require('node:fs/promises');
const orderBy = require('lodash/orderBy');
const {promisify} = require('node:util');
const {exec: originalExec} = require('node:child_process');
const exec = promisify(originalExec);
const getNextBranch = require('./get-forward-merge-branch');
const nodeSpawn = require('node:child_process').spawn;
const resolvePackageJson = require('./resolve-package-json');
const fixPackageJsonVersions = require('./fix-package-json-versions');
const glob = promisify(require('glob'));

// Tokenize and parse command arguments and be aware that anything in quotes is part of a single argument
// For example: `echo "hello there" bob` returns args like `['"hello there"', 'bob']
function splitArgs(/** @type {string} */ input) {
  const [name, ...rest] = input.split(' ');

  /** @type {string[]} */
  const args = [];
  let quote = '';
  let currentArg = '';
  for (const l of rest.join(' ')) {
    if (l === quote) {
      quote = '';
    } else if (l === '"' || l === "'") {
      quote = l;
    } else {
      if (l !== ' ' || quote) {
        currentArg += l;
      } else {
        args.push(currentArg);
        currentArg = '';
      }
    }
  }

  if (currentArg) {
    args.push(currentArg);
  }

  return {name, args};
}

/**  */
async function spawn(/** @type {string} */ cmd, /** @type {object} */ opts = undefined) {
  console.log(`Running: "${cmd}"`);
  const {name, args} = splitArgs(cmd);

  const child = nodeSpawn(name, args, opts);

  for await (const chunk of child.stdout) {
    console.log(chunk.toString());
  }
  let error = '';
  for await (const chunk of child.stderr) {
    console.error(chunk.toString());
    error += chunk.toString();
  }

  // eslint-disable-next-line compat/compat
  const exitCode = await new Promise((resolve, reject) => {
    child.on('close', resolve);
  });

  if (exitCode) {
    throw new Error(`subprocess error exit ${exitCode}, ${error}`);
  }
  return;
}

function getBranches(/** @type string */ branch) {
  if (branch.startsWith('merge')) {
    // we're already merging, so extract branch information
    const matches = branch.match(/merge\/(.+)-into-(.+)/);
    if (matches) {
      return [matches[1], matches[2]];
    }
    console.error(`The branch name is not valid: ${branch}`);
    process.exit(1);
  }
  return [branch, getNextBranch(branch)];
}

async function main() {
  // get the current branch
  const {stdout: defaultBranch} = await exec(`git rev-parse --abbrev-ref HEAD`);
  const alreadyMerging = defaultBranch.startsWith('merge');

  let hasConflicts = false;
  let hasUnresolvedConflicts = false;
  const {GITHUB_REF: currentBranch = defaultBranch} = process.env;
  const [branch, nextBranch] = getBranches(
    currentBranch.replace('refs/heads/', '').replace('\n', '')
  );

  // create a merge branch
  if (!alreadyMerging) {
    console.log('Creating a merge branch');
    await spawn(`git checkout -b merge/${branch}-into-${nextBranch}`);
  }

  // get last commit message. If it was a skip release, we'll try to make the merge commit a skip
  // release as well.
  const {stdout: commitMessage} = await exec(`git log -1 --pretty=%B | cat`);
  const isSkipRelease = commitMessage.includes('[skip release]');

  try {
    console.log(`Creating a merge branch`);
    // The CI uses `origin` while locally we use `upstream`.
    const remote = alreadyMerging ? 'upstream' : 'origin';
    const {stdout} = await exec(
      `git merge ${remote}/${nextBranch} -m 'chore: Merge ${branch} into ${nextBranch}${
        isSkipRelease ? ' [skip release]' : '' // continue the skip release if applicable
      }'`
    );
    // exec doesn't automatically log
    console.log(stdout);

    // The merge was successful with no merge conflicts
  } catch (result) {
    hasConflicts = true;
    console.log(`Attempting to automatically resolve conflicts`);
    // The merge had conflicts

    /** @type {{stdout: string}} */
    const {stdout} = result;
    const lines = stdout.split('\n');

    // gather the merge conflicts
    const conflicts = lines
      .filter(line => line.startsWith('CONFLICT'))
      .map(line => {
        if (/\(content\)/.test(line)) {
          const match = line.match(/Merge conflict in (.+)/);
          return {type: 'content', file: (match && match[1]) || ''};
        }
        if (/\(modify\/delete\)/.test(line)) {
          const match = line.match(/: (.+) deleted in/);
          return {type: 'modify/delete', file: (match && match[1]) || ''};
        }
        return {type: 'unknown', file: ''};
      });

    for (const conflict of conflicts) {
      console.log(`Attempting to resolve conflict in ${conflict.file}`);

      if (conflict.file === 'lerna.json' || conflict.file.includes('package.json')) {
        if (conflict.type === 'content') {
          await resolveJsonFile(conflict.file);
          await spawn(`git add ${conflict.file}`);
        } else if (conflict.type === 'modify/delete') {
          await spawn(`git rm ${conflict.file}`);
        }

        console.log(`Resolved conflicts in ${conflict.file}`);
      } else if (conflict.file === 'CHANGELOG.md') {
        await updateChangelog();
        await spawn(`git add ${conflict.file}`);

        console.log(`Resolved conflicts in ${conflict.file}`);
      } else if (conflict.file === 'yarn.lock') {
        // yarn resolves yarn.lock conflicts
        console.log(`Conflicts in ${conflict.file} will be resolved later.`);
      } else {
        console.log('Merge cannot be resolved automatically');
        hasUnresolvedConflicts = true;
        if (!alreadyMerging) {
          // If we're not already merging, we want to bail now - this is the default for CI
          // If we are already merging, we must be doing things manually
          process.exit(1);
        }
      }
    }
  }

  // fix any dependency mismatches of dependencies in the mono repo
  const files = await glob('modules/*/package.json');
  const monoDependencies = await getMonoDependencies(files);

  for (const file of files) {
    const contents = (await fs.readFile(file)).toString();

    const newContents = fixPackageJsonVersions(contents, monoDependencies);
    await fs.writeFile(file, newContents, 'utf8');
  }

  await spawn(`yarn install --production=false`);

  if (hasConflicts) {
    if (hasUnresolvedConflicts) {
      // We have conflicts. Inform the user
      console.log(`Conflicts still need to be resolved manually.`);
      console.log(`Manually resolve the conflicts, then run the following command:`);
      console.log(
        `git add . && git commit --no-verify -m "chore: Merge ${branch} into ${nextBranch}" && git push upstream merge/${branch}-into-${nextBranch}`
      );
    } else {
      console.log('All conflicts automatically resolved.');

      // If we're here, we've fixed all merge conflicts. We need to commit
      await spawn(`git add .`);
      await spawn(`git commit --no-verify -m "chore: Merge ${branch} into ${nextBranch}"`);
    }
  } else {
    console.log('No conflicts detected');
  }
}

main().catch(err => {
  console.error('Error:\n', err.message);
  console.error('Stack:\n', err.stack);
  process.exit(1);
});

/**
 * @param line {string}
 */
function getHeadingMatch(line) {
  return line.match(/(#+) (.+)/);
}

async function updateChangelog() {
  let lines = (await fs.readFile('./CHANGELOG.md')).toString().split('\n');

  const header = lines.splice(0, 5);
  const releases = [];

  do {
    const [line, ...rest] = lines;
    lines = rest;
    const headingMatch = getHeadingMatch(line);
    if (headingMatch && headingMatch[1].length === 2) {
      const [rest, contents] = parseContents(lines);
      lines = rest;
      const dateMatch = headingMatch[0].match(/\([0-9]+-[0-9]+-[0-9]+\)/);
      const date = dateMatch && dateMatch[0];

      const release = {
        title: headingMatch[0],
        contents,
        date,
      };
      releases.push(release);
    }
  } while (lines.length);

  const sortedReleases = orderBy(releases, 'date', 'desc');

  const contents = [
    ...header,
    ...sortedReleases.map(release => [release.title, ...release.contents]).flat(),
  ]
    // Remove the merge conflict markers - essentially "both" when resolving merge conflicts. We want both release notes if there's a conflict
    .filter(
      line => !line.startsWith('<<<<<<<') && !line.startsWith('>>>>>>>') && line !== '======='
    )
    .join('\n');

  await fs.writeFile('./CHANGELOG.md', contents);
}

/**
 *
 * @param lines {string[]}
 */
function parseContents(lines) {
  const contents = [];
  let remainingLines = lines;
  do {
    const [line, ...rest] = remainingLines;
    const headingMatch = getHeadingMatch(line);
    if (!headingMatch || headingMatch[1].length !== 2) {
      contents.push(line);
    } else {
      return [remainingLines, contents];
    }
    remainingLines = rest;
  } while (remainingLines.length);

  return [remainingLines, contents];
}

/**
 * @param file {string}
 */
async function resolveJsonFile(file) {
  const contents = (await fs.readFile(file)).toString();

  await fs.writeFile(file, resolvePackageJson(contents));
}

/**
 * @param files {string[]}
 */
async function getMonoDependencies(files) {
  /** @type {{name: string, version: string}[]} */
  const monoDependencies = [];

  for (const file of files) {
    const contents = (await fs.readFile(file)).toString();
    const {name, version} = JSON.parse(contents);

    monoDependencies.push({name, version});
  }

  return monoDependencies;
}
