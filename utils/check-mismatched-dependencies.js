#!/usr/bin/env node
import chalk from 'chalk';
import globPkg from 'glob';
import fs from 'node:fs';
import path from 'node:path';
import {promisify} from 'node:util';

const glob = promisify(globPkg.glob);
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
  return `${error.file}\n  ${chalk.dim(`${error.line}:${error.character}`)}  ${chalk.red(
    'error'
  )}  ${error.message}  ${chalk.dim('versions-must-match')}\n`;
}

async function main() {
  const packageFiles = await glob('**/package.json', {ignore: '**/node_modules/**'});
  const dependencies = {};
  const errors = [];

  for (const packageFile of packageFiles) {
    const pkgContents = await readFile(path.resolve(process.cwd(), packageFile), 'utf8');
    const pkg = JSON.parse(pkgContents);
    const dependencyKeys = Object.keys(pkg.dependencies || {});

    dependencyKeys.forEach(key => {
      if (dependencies[key] != null && dependencies[key] !== pkg.dependencies[key]) {
        errors.push({
          file: path.join(process.cwd(), packageFile),
          line: findLine(pkg, key),
          character: findCharacter(pkg, key),
          message: `dependency '${chalk.yellow(key)}' is at '${chalk.green(
            pkg.dependencies[key]
          )}' while other files have a version of '${chalk.green(dependencies[key])}'`,
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
