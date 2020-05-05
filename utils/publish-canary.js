#!/usr/bin/env node
'use strict';

const request = require('request');
const {promisify} = require('util');
const cmd = promisify(require('node-cmd').get);

const {
  SLACK_WEBHOOK,
  TRAVIS_BRANCH,
  TRAVIS_BUILD_URL = 'https://travis-ci.org/Workday/canvas-kit/branches',
} = process.env;

const data = {};
let preid;

if (TRAVIS_BRANCH === 'master') {
  preid = 'next';
} else if (TRAVIS_BRANCH.match(/^prerelease\/v\d*$/g)) {
  preid = 'prerelease';
} else {
  console.error('No travis branch provided');
  process.exit(1);
}

const regex = new RegExp('@workday\\/[a-z-]*@(\\d*.\\d*.\\d*-' + preid + '.\\d*\\+\\w*)', 'g');

cmd('git rev-parse --short HEAD')
  .then(sha => {
    data.sha = sha;

    const lernaFlags = [
      `--yes`,
      `--force-publish="*"`,
      `--canary`,
      `--preid ${preid}.${sha}`,
      `--dist-tag ${preid}`,
      preid === 'prerelease' ? 'major' : '',
    ];

    return cmd(`yarn lerna publish ${lernaFlags.join(' ')}`);
  })
  .then(output => {
    console.log(output);

    data.packages = output.match(regex);
    data.version = regex.exec(data.packages[0])[1];

    request.post(
      SLACK_WEBHOOK,
      {
        json: {
          attachments: [
            {
              fallback: `New canary build published (v${data.version})`,
              color: 'good',
              author_name: `New canary build published (v${data.version})`,
              author_link: TRAVIS_BUILD_URL,
              title: `Merge commit ${data.sha}`,
              title_link: `https://github.com/Workday/canvas-kit/commit/${data.sha}`,
              text: `\`yarn add @workday/canvas-kit-{module}@${data.version}\`\nor\n\`yarn add @workday/canvas-kit-{module}@next\`\n`,
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
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
