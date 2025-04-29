#!/usr/bin/env node
// @ts-check
'use strict';

import fetch from 'node-fetch';
import {promisify} from 'util';
import * as childProcess from 'child_process';
const exec = promisify(childProcess.exec);

const {
  SLACK_WEBHOOK,
  GITHUB_REF,
  GITHUB_RUN_NUMBER = '0',
  BUILD_URL = 'https://github.com/Workday/canvas-kit/actions',
} = process.env;

console.log('GITHUB_REF', GITHUB_REF);
const branch = GITHUB_REF.replace('refs/heads/', '');
const prefixedBuildNumber = GITHUB_RUN_NUMBER.padStart(4, '0');

const isPreMajor = branch.match(/^prerelease\/major$/g);
const isPreMinor = branch.match(/^prerelease\/minor$/g);
const data = {};

let distTag;
let preid;
let bump;

if (isPreMajor) {
  distTag = 'prerelease-next';
} else if (isPreMinor) {
  distTag = 'next';
} else {
  console.error('No branch provided');
  process.exit(1);
}

const slackAnnouncement = attachment => {
  fetch(SLACK_WEBHOOK, {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      attachments: [
        {
          ...attachment,
          author_link: BUILD_URL,
          ts: Date.now(),
        },
      ],
    }),
  }).then(response => {
    if (!response.ok) {
      throw new Error(`HTTP Error Response: ${response.status} ${response.statusText}`);
    }
  });
};

exec('git diff --name-only HEAD HEAD^')
  .then(({stdout}) => {
    if (stdout.includes('CHANGELOG.md')) {
      console.log('Last merge commit was a release. Skipping canary build.');
      process.exit(0);
    }

    return exec('git rev-parse --short HEAD');
  })
  .then(({stdout}) => {
    data.sha = stdout.trim();

    return exec(`git describe --abbrev=0`);
  })
  .then(({stdout}) => {
    // The last tag will either be a standard version or a prerelease.
    // A standard version looks like `5.2.3`
    // A prerelease version looks like `6.0.0-rc.0`
    // If the last tag is a standard version, we want to use `preminor` or `premajor`
    // If the last tag was a prerelease version, we want to use `prerelease`
    // Example for an `isPreMinor`
    // `v5.2.3` -> (preid:'next') -> `v5.3.0-next.0`
    // Examples for `isPreMajor`
    // `v5.2.3` -> (preid:'beta') -> `v6.0.0-alpha.0-next.0`
    // The following example is a pre major that already had a release in the changelog:
    // `v6.0.0-rc.0` -> (preid:'next') -> `v6.0.0-rc.1-next.0`
    const [version, buildId] = stdout.trim().split('-');
    if (buildId) {
      // The last tag is a prerelease. The `preid` should include the build portion of the version
      // number with `-next` at the end. The `bump` amount should be a `prerelease` This branch will
      // handle the following cases:
      // `v6.0.0-rc.0` -> `v6.0.0-rc.0-next.n` where the final `n` is number of commits since the `rc.0` tag
      // `v5.3.0-rc.0` -> `v5.3.0-rc.0-next.n` although prerelease minor versions like this are rare
      preid = `${buildId}-next`;
      bump = 'prerelease';
    } else {
      // The last tag was a standard release. There is no build portion of the version string. This
      // branch will handle the following cases:
      // branch `release/v5.x`
      // `v5.2.3` -> `v5.3.0-next.n`
      // branch `release/v6`
      // `v5.2.3` -> `v6.0.0-beta.n`
      if (isPreMajor) {
        // for pre major releases, we'll assume we're going to start with an alpha prerelease
        preid = `alpha.${prefixedBuildNumber}-next`;
        bump = 'premajor';
      } else {
        // we'll use `next` for pre minors
        preid = `${prefixedBuildNumber}-next`;
        bump = 'preminor';
      }
    }

    const lernaFlags = [
      `--yes`,
      `--force-publish="*"`,
      `--preid ${preid}`,
      `--dist-tag ${distTag}`,
      bump,
    ];

    return exec(`yarn lerna publish ${lernaFlags.join(' ')}`);
  })
  .then(({stdout}) => {
    console.log(stdout);

    const regex = new RegExp(`@workday\\/[a-z-]*@(\\d*.\\d*.\\d*-${preid}.\\d*)`, 'g');
    data.packages = stdout.match(regex);
    data.version = regex.exec(data.packages[0])[1];

    slackAnnouncement({
      fallback: `New canary build published (v${data.version})`,
      color: 'good',
      author_name: `New canary build published (v${data.version})`,
      title: `Merge commit ${data.sha}`,
      title_link: `https://github.com/Workday/canvas-kit/commit/${data.sha}`,
      text: `\`yarn add @workday/canvas-kit-{module}@${data.version}\`\nor\n\`yarn add @workday/canvas-kit-{module}@${distTag}\`\n`,
    });
  })
  .catch(err => {
    console.error(err);

    slackAnnouncement({
      fallback: `Canary publish failed (v${data.version})`,
      color: 'danger',
      author_name: `Canary publish failed (v${data.version})`,
      title: `Merge commit ${data.sha}`,
      title_link: `https://github.com/Workday/canvas-kit/commit/${data.sha}`,
      text: `\`\`\`${err}\`\`\`\n`,
    });

    process.exit(1);
  });
