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

// Tokenize and parse command arguments and be aware that anything in quotes is part of a single argument
// For example: `echo "hello there" bob` returns args like `['"hello there"', 'bob']
function splitArgs(/** @type {string} */ input) {
  const [name, ...rest] = input.split(' ');

  /** @type {string[]} */
  const args = [];
  let quote = '';
  let currentArg = '';
  for (const l of rest.join(' ')) {
    if (l !== ' ' || quote) {
      currentArg += l;
    } else {
      args.push(currentArg);
      currentArg = '';
    }

    if (l === quote) {
      quote = '';
    } else if (l === '"' || l === "'") {
      quote = l;
    }
  }

  if (currentArg) {
    args.push(currentArg);
  }

  return {name, args};
}

/**  */
async function spawn(/** @type {string} */ cmd) {
  console.log(`Running: "${cmd}"`);
  const {name, args} = splitArgs(cmd);

  const child = nodeSpawn(name, args);

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
  const [branch, nextBranch] = getBranches(currentBranch.replace('refs/heads/', ''));

  // create a merge branch
  if (!alreadyMerging) {
    console.log('Creating a merge branch');
    await spawn(`git checkout -b merge/${branch}-into-${nextBranch}`);
  }

  try {
    console.log(`Creating a merge branch`);
    // The CI uses `origin` while locally we use `upstream`.
    const remote = alreadyMerging ? 'upstream' : 'origin';
    await spawn(
      `git merge ${remote}/${nextBranch} -m 'chore: Merge ${branch} into ${nextBranch} [skip release]'`
    );

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
        const match = line.match(/Merge conflict in (.+)/);
        return (match && match[1]) || '';
      });

    for (const conflict of conflicts) {
      console.log(`Attempting to resolve conflict in ${conflict}`);

      if (conflict === 'lerna.json' || conflict.includes('package.json')) {
        // resolve the conflicts by taking incoming file
        await spawn(`git checkout --theirs -- "${conflict}"`);
        await spawn(`git add ${conflict}`);

        console.log(`Resolved conflicts in ${conflict}`);
      } else if (conflict === 'CHANGELOG.md') {
        await updateChangelog();

        console.log(`Resolved conflicts in ${conflict}`);
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

  await spawn(`yarn install --production=false`);

  if (hasConflicts) {
    if (hasUnresolvedConflicts) {
      // We have conflicts. Inform the user
      console.log(`Conflicts still need to be resolved manually.`);
      console.log(`Manually resolve the conflicts, then run the following command:`);
      console.log(
        `git add . && git commit --no-verify -m "chore: Merge ${branch} into ${nextBranch} [skip release]" && git push upstream merge/${branch}-into-${nextBranch}`
      );
    } else {
      console.log('All conflicts automatically resolved.');

      // If we're here, we've fixed all merge conflicts. We need to commit
      await spawn(`git add .`);
      await spawn(
        `git commit --no-verify -m "chore: Merge ${branch} into ${nextBranch} [skip release]"`
      );
    }
  } else {
    console.log('No conflicts detected');
  }
}

main().catch(err => {
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

  const sortedReleases = orderBy(releases, 'date', 'desc'); //?

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
