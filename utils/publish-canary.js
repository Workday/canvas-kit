#!/usr/bin/env node
'use strict';

const path = require('path');
const request = require('request');
const {promisify} = require('util');
const cmd = promisify(require('node-cmd').get);

const [
  SLACK_WEBHOOK,
  TRAVIS_BUILD_URL = 'https://travis-ci.org/Workday/canvas-kit/branches',
] = process.argv.slice(2);

// Use the following if we ever want to list the packages/count
// const regex = /Successfully published:\n((.|\n)*)lerna success published (\d*) packages/gm;
// const match = regex.exec(output);
// data.packages = match[1]
//   .replace(/\n|\r/g, '')
//   .split(' - ')
//   .filter(pkg => pkg.length);
// data.count = match[3];

cmd('yarn lerna publish --yes --force-publish="*" --canary --preid next --dist-tag next')
  .then(output => cmd('git rev-parse --short HEAD'))
  .then(sha => {
    const version = require(path.resolve(__dirname, '../lerna.json')).version;

    request.post(
      SLACK_WEBHOOK,
      {
        json: {
          attachments: [
            {
              fallback: 'Plain-text summary of the attachment.',
              color: '#2eb886',
              author_name: `New canary build published (v${version})`,
              author_link: TRAVIS_BUILD_URL,
              title: `Merge commit ${sha}`,
              title_link: `https://github.com/Workday/canvas-kit/commit/${sha}`,
              text: `\`yarn add @workday/canvas-kit-{module}@${version}\`\nor\n\`yarn add @workday/canvas-kit-{module}@next\`\n`,
              ts: Date.now(),
            },
          ],
        },
      },
      (error, response, body) => {
        if (error) throw error;
      }
    );
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
