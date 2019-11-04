#!/usr/bin/env node
'use strict';

const colors = require('colors/safe');
const fs = require('fs');
const path = require('path');
const {promisify} = require('util');
const glob = promisify(require('glob'));

const readFile = promisify(fs.readFile);

function findLine(pkg, dependency) {
  const lines = JSON.stringify(pkg, null, '  ').split('\n');
  return lines.findIndex(l => l.includes(dependency)) + 1;
}

function findCharacter(pkg, dependency) {
  // calculate the character offset
  return `    "${dependency}": "`.length + 1;
}

function formatErrorMessage(error) {
  return `${error.file}\n  ${colors.dim(`${error.line}:${error.character}`)}  ${colors.red(
    'error'
  )}  ${error.message}  ${colors.dim('versions-must-match')}\n`;
}

async function main() {
  const packageFiles = await glob('**/package.json', {ignore: '**/node_modules/**'});
  const dependencies = {};
  const errors = [];

  for (let packageFile of packageFiles) {
    const pkg = require(path.resolve(process.cwd(), packageFile));
    const dependencyKeys = Object.keys(pkg.dependencies || {});

    dependencyKeys.forEach(key => {
      if (dependencies[key] != null && dependencies[key] !== pkg.dependencies[key]) {
        errors.push({
          file: path.join(process.cwd(), packageFile),
          line: findLine(pkg, key),
          character: findCharacter(pkg, key),
          message: `dependency '${colors.yellow(key)}' is at '${colors.green(
            pkg.dependencies[key]
          )}' while other files have a version of '${colors.green(dependencies[key])}'`,
        });
      } else {
        dependencies[key] = pkg.dependencies[key];
      }
    });
  }

  return errors;
}

main().then(errors => {
  errors.forEach(error => {
    console.log(formatErrorMessage(error));
  });
  process.exit(errors.length);
});
