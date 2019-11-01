#!/usr/bin/env node
'use strict';

const path = require('path');
const {exec} = require('child_process');
const glob = require('glob');

const moduleRegex = /modules[\/\w|-]*react/g;

let pass = true;

// Note: Requires dist folders to exist (yarn build to be run)
glob(`${path.resolve(__dirname)}/../modules/**/react/dist/commonjs/index.js`, undefined, function(
  er,
  files
) {
  if (er) {
    console.error('Could not find modules/**/react/dist/commonjs/index.js files');
    return;
  }

  const checks = [];

  for (let file of files) {
    checks.push(
      new Promise((resolve, reject) => {
        /* Note: dependency-check can accept multiple files, but due to how it caches imported modules,
         * it needs to be run separately for each module. */
        exec(`yarn run dependency-check ${file} --no-dev`, (err, stdout, stderr) => {
          if (err) {
            pass = false;
            const match = file.match(moduleRegex);
            console.log(match);
            console.error(stderr.replace('\nerror Command failed with exit code 1.', ''));
          }
          resolve();
        });
      })
    );
  }

  Promise.all(checks).then(values => {
    if (!pass) {
      process.exit(1);
    }
  });
});
