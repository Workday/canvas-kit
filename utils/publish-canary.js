#!/usr/bin/env node
// @ts-check
'use strict';

const request = require('request');
const semver = require('semver');
const {promisify} = require('util');
const exec = promisify(require('child_process').exec);

const {
  SLACK_WEBHOOK,
  TRAVIS_BRANCH,
  TRAVIS_BUILD_URL = 'https://travis-ci.org/Workday/canvas-kit/branches',
} = process.env;

const isPrerelease = TRAVIS_BRANCH.match(/^prerelease\/v\d*$/g);
const data = {};

let distTag;
let preid;

if (TRAVIS_BRANCH === 'master') {
  distTag = 'next';
} else if (isPrerelease) {
  distTag = 'prerelease-next';
  console.error('Prerelease canary builds disabled.');
  process.exit(0);
} else {
  console.error('No travis branch provided');
  process.exit(1);
}

const slackAnnouncement = attachment => {
  request.post(
    SLACK_WEBHOOK,
    {
      json: {
        attachments: [
          {
            ...attachment,
            author_link: TRAVIS_BUILD_URL,
            ts: Date.now(),
          },
        ],
      },
    },
    (error) => {
      if (error) {
        throw error;
      }
    }
  );
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
    const nextReleaseVersion = semver.inc(stdout, 'prerelease', 'beta'); // eg. 4.0.0-beta.3 > 4.0.0-beta.4
    const nextReleasePreid = nextReleaseVersion.split('-')[1];

    if (isPrerelease && !nextReleasePreid) {
      console.error('Failed to calculate prerelease canary version. Exiting');
      process.exit(1);
    }

    preid = isPrerelease ? `${nextReleasePreid}-next` : 'next';

    const lernaFlags = [
      `--yes`,
      `--force-publish="*"`,
      `--canary`,
      `--preid ${preid}`,
      `--dist-tag ${distTag}`,
      preid === 'prerelease' ? 'major' : '',
    ];

    return exec(`yarn lerna publish ${lernaFlags.join(' ')}`);
  })
  .then(({stdout}) => {
    console.log(stdout);

    const regex = new RegExp(
      `@workday\\/[a-z-]*@(\\d*.\\d*.\\d*-${preid}.\\d*\\+\\w*)`,
      'g'
    );
    data.packages = stdout.match(regex);
    data.version = regex.exec(data.packages[0])[1];

    slackAnnouncement({
      fallback: `New canary build published (v${data.version})`,
      color: 'good',
      author_name: `New canary build published (v${data.version})`,
      title: `Merge commit ${data.sha}`,
      title_link: `https://github.com/Workday/canvas-kit/commit/${data.sha}`,
      text: `\`yarn add @workday/canvas-kit-{module}@${data.version}\`\nor\n\`yarn add @workday/canvas-kit-{module}@next\`\n`,
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
