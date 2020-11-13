#!/usr/bin/env node
// @ts-check
'use strict';

const request = require('request');
const semver = require('semver');
const {promisify} = require('util');
const cmd = promisify(require('node-cmd').get);
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
    (error, response, body) => {
      if (error) {
        throw error;
      }
    }
  );
};

cmd('git diff --name-only HEAD HEAD^')
  .then(filesChangedInMerge => {
    if (filesChangedInMerge.includes('CHANGELOG.md')) {
      console.log('Last merge commit was a release. Skipping canary build.');
      process.exit(0);
    }

    return cmd('git rev-parse --short HEAD');
  })
  .then(sha => {
    data.sha = sha.trim();

    return cmd(`git describe --abbrev=0`);
  })
  .then(releaseTag => {
    const nextReleaseVersion = semver.inc(releaseTag, 'prerelease', 'beta'); // eg. 4.0.0-beta.3 > 4.0.0-beta.4
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

    // The default buffer size is 1024*200 (200kb) in node v10.x which causes this command to overflow the buffer.
    // In node v12.x and above maxBuffer is 1024*1024. We can probably remove this and go back to using cmd if we update node.
    
    // TODO: Consider swapping out cmd in favor of exec, it's what node-cmd uses under the hood and it 
    // natively allows you to access the options arg like we're doing here.
    return exec(`yarn lerna publish ${lernaFlags.join(' ')}`, {maxBuffer: 1024*1024});
  })
  // exec returns { stdout, stderr } so we're destructuring and renaming to be consistent with cmd usage across this script
  .then(({stdout: output}) => {
    console.log(output);

    const regex = new RegExp(
      `@workday\\/[a-z-]*@(\\d*.\\d*.\\d*-${preid}.\\d*\\+\\w*)`,
      'g'
    );
    data.packages = output.match(regex);
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
