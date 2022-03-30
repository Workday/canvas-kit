#!/usr/bin/env node
// @ts-check
'use strict';

import fetch from 'node-fetch';

const {
  SLACK_WEBHOOK,
  TRAVIS_BRANCH,
  TRAVIS_TEST_RESULT,
  TRAVIS_BUILD_URL = 'https://travis-ci.org/Workday/canvas-kit/branches',
} = process.env;

fetch(SLACK_WEBHOOK, {
  method: 'post',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    attachments: [
      {
        fallback: `${TRAVIS_BRANCH} build failure`,
        color: 'danger',
        title_name: `${TRAVIS_BRANCH} build failure`,
        title_link: TRAVIS_BUILD_URL,
        text: `\`\`\`${TRAVIS_TEST_RESULT}\`\`\`\n`,
        ts: Date.now(),
      },
    ],
  }),
}).then(response => {
  if (!response.ok) {
    throw new Error(`HTTP Error Response: ${response.status} ${response.statusText}`);
  }
});
