#!/usr/bin/env node
'use strict';

const request = require('request');

const {
  SLACK_WEBHOOK,
  TRAVIS_BRANCH,
  TRAVIS_TEST_RESULT,
  TRAVIS_BUILD_URL = 'https://travis-ci.org/Workday/canvas-kit/branches',
} = process.env;

request.post(
  SLACK_WEBHOOK,
  {
    json: {
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
    },
  },
  (error, response, body) => {
    if (error) {
      throw error;
    }
  }
);
