#!/usr/bin/env node
// @ts-check
'use strict';

const fs = require('node:fs/promises');
const orderBy = require('lodash/orderBy');
const {promisify} = require('node:util');
const {exec: originalExec} = require('node:child_process');
const exec = promisify(originalExec);
const nextBranch = require('./get-forward-merge-branch');

const {GITHUB_REF = ''} = process.env;
const branch = GITHUB_REF.replace('refs/heads/', '');

async function main() {
  // create a merge branch
  await exec(`git checkout -b merge/${branch}-into-${nextBranch}`);

  try {
    const result = await exec(
      `git merge origin/${nextBranch} -m 'chore: Merge ${branch} into ${nextBranch}'`
    );

    // The merge was successful with no merge conflicts
  } catch (result) {
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
        await exec(`git checkout --theirs -- "${conflict}"`);
        await exec(`git add ${conflict}`);

        console.log(`Resolved conflicts in ${conflict}`);
      } else if (conflict === 'CHANGELOG.md') {
        await updateChangelog();

        console.log(`Resolved conflicts in ${conflict}`);
      } else {
        console.log('Merge cannot be resolved automatically');
        process.exit(1);
      }
    }

    // If we're here, we've fixed all merge conflicts. We need to commit
    await exec(`git add .`);
    await exec(`git commit --no-verify -m "chore: Merge ${branch} into ${nextBranch}"`);
  }
}

main();

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
