#!/usr/bin/env node
'use strict';

const path = require('path');
const {exec} = require('child_process');
const glob = require('glob');
const colors = require('colors');

const moduleRegex = /modules[\/\w|-]*react/g;

function findLine(pkg, str) {
  const lines = JSON.stringify(pkg, null, '  ').split('\n');
  return lines.findIndex(l => l.includes(str)) + 1;
}

/**
 *
 * @param {Object} pkg
 * @param {string} str
 */
function findCharacter(pkg, str) {
  const lines = JSON.stringify(pkg, null, '  ').split('\n');
  const line = lines.find(l => l.includes(str));
  if (line) {
    return line.indexOf(str) + 1;
  } else {
    return 1;
  }
}

/**
 *
 * @param {Object} pkg
 * @param {string} errMsg
 */
function getDepErrors(pkg, errMsg) {
  return errMsg
    .split('\n')
    .map(msg => {
      const matches = msg.match(/Fail!\s(Modules|Dependencies)\s(.+):\s(.+)/);
      const isMissing = msg.includes('Dependencies');
      if (matches) {
        return matches[3].split(', ').map(dep => {
          return {
            line: findLine(pkg, isMissing ? '"dependencies"' : dep),
            character: findCharacter(pkg, isMissing ? '"dependencies"' : dep),
            message: `${colors.yellow(dep)} ${matches[2]}`,
          };
        });
      } else {
        return [];
      }
    })
    .reduce((v, result) => {
      return [...v, ...result];
    }, []);
}

function formatErrorMessage(error) {
  return (
    `${error.file}\n` +
    error.errors
      .map(error => {
        return `  ${colors.dim(`${error.line}:${error.character}`)}  ${colors.red('error')}  ${
          error.message
        }  ${colors.dim('check-dependencies-exist')}`;
      })
      .join('\n')
  );
}

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
            const match = file.match(moduleRegex);
            const pkg = require(path.resolve(process.cwd(), match[0], 'package.json'));

            const depErrors = getDepErrors(
              pkg,
              stderr.replace('\nerror Command failed with exit code 1.', '').trim()
            );

            resolve({
              file: path.join(process.cwd(), match[0], 'package.json'),
              errors: depErrors,
            });
          }
          resolve(null);
        });
      })
    );
  }

  Promise.all(checks).then(values => {
    const realErrors = values.filter(v => v);
    realErrors.forEach(err => {
      console.log(formatErrorMessage(err) + '\n');
    });
    if (realErrors.length) {
      process.exit(1);
    }
  });
});
