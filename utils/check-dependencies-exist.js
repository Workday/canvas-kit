#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const depCheck = require('depcheck');

const depCheckOptions = {
  ignoreMatches: [
    '@testing-library/react',
    '@testing-library/react-hooks',
    '@storybook/react',
    'expect-type',
    'react',
    'react-dom',
    'jest-axe',
  ],
};

const labelMap = {
  dependencies: {
    label: 'unused dependency',
    color: chalk.yellow,
  },
  devDependencies: {
    label: 'unused devDependency',
    color: chalk.yellow,
  },
  missing: {
    label: 'missing dependency',
    color: chalk.red,
  },
  invalidFiles: {
    label: 'error',
    color: chalk.red,
  },
  invalidDirs: {
    label: 'error',
    color: chalk.red,
  },
};

/**
 *
 * @param {string} contents
 * @param {string} str
 */
function findLineInFile(contents, str) {
  const lines = contents.split('\n');
  return lines.findIndex(l => l.includes(str)) + 1;
}

/**
 *
 * @param {string} contents
 * @param {string} str
 */
function findCharacterInFile(contents, str) {
  const lines = contents.split('\n');
  const line = lines.find(l => l.includes(str));
  if (line) {
    return line.indexOf(str) + 1;
  } else {
    return 1;
  }
}

/**
 * @typedef {{
 *   dependencies?: string[],
 *   devDependencies?: string[],
 *   missing?: { [key: string]: string[] },
 * }} DependencyErrors
 */

/**
 * @param {string} pkgFile
 * @param {DependencyErrors} errors
 */
function formatErrorMessage(pkgFile, errors) {
  return Object.keys(errors)
    .map((/** @type keyof DependencyErrors */ key) => {
      if (errors[key].constructor === Object) {
        if (key.startsWith('invalid')) {
          return Object.keys(errors[key])
            .map(file => {
              const line = errors[key][file].line;
              const column = errors[key][file].column;
              const message = errors[key][file].formatted;

              if (!line && !column && !message) {
                return `${file}\n${errors[key][file]}`;
              }

              return (
                labelMap[key].color(labelMap[key].label.padEnd(20)) +
                chalk.dim(`  ${line}:${column}  `) +
                message
              );
            })
            .join('\n');
        }
        return Object.keys(errors[key])
          .map(packageName => {
            return errors[key][packageName]
              .map(errorFile => {
                const contents = fs.readFileSync(errorFile).toString();
                const line = findLineInFile(contents, packageName);
                const char = findCharacterInFile(contents, packageName);

                return `${errorFile}\n  ${chalk.dim(`${line}:${char}`)}  ${chalk.red(
                  'error'
                )}  ${chalk.yellow(packageName)} is missing from ${pkgFile}  ${chalk.dim(
                  'check-dependencies-exist'
                )}`;
              })
              .join('\n');
          })
          .join('\n');
      } else if (key === 'dependencies' || key === 'devDependencies') {
        const contents = fs.readFileSync(pkgFile).toString();
        return (
          `${pkgFile}\n` +
          errors[key]
            .map(packageName => {
              const line = findLineInFile(contents, packageName);
              const char = findCharacterInFile(contents, packageName);

              return `  ${chalk.dim(`${line}:${char}`)}  ${chalk.red('error')}  ${chalk.yellow(
                packageName
              )} is not used in code  ${chalk.dim('check-dependencies-exist')}`;
            })
            .join('\n')
        );
      }
    })
    .join('\n\n');
}

const modulePath = process.cwd();
const packageName = require(path.join(modulePath, 'package.json')).name;

// TODO: Figure out why we need this.
if (modulePath.endsWith('/modules/react')) {
  depCheckOptions.ignoreMatches.push('@workday/canvas-kit-react');
} else if (modulePath.endsWith('/modules/labs-react')) {
  depCheckOptions.ignoreMatches.push('@workday/canvas-kit-labs-react');
} else if (modulePath.endsWith('/modules/preview-react')) {
  depCheckOptions.ignoreMatches.push('@workday/canvas-kit-preview-react');
}

depCheck(modulePath, depCheckOptions, unused => {
  const errorKeys = Object.keys(unused).filter(key => {
    if (key === 'using') {
      return false;
    }
    if (key === 'missing') {
      // Self-referencing imports are only okay in stories. It allows story code more copy/paste friendly. Stories are not packaged, so no circular dependency actually exists
      // Also, monorepo package names are allowed only in stories and specs
      [packageName, '@workday/canvas-kit-labs-react', '@workday/canvas-kit-preview-react'].forEach(
        name => {
          if (unused.missing[name]) {
            unused.missing[name] = unused.missing[name].filter(
              file => !file.includes('stories') && !file.includes('spec')
            );
            if (unused.missing[name].length === 0) {
              delete unused.missing[name];
            }
          }
        }
      );
      if (Object.keys(unused.missing).length === 0) {
        return false;
      }
    }
    if (unused[key].constructor === Object) {
      return Object.keys(unused[key]).length;
    } else {
      return unused[key].length;
    }
  });

  if (!errorKeys.length) {
    return;
  }

  const file = modulePath + '/package.json';
  const result = {};
  errorKeys.forEach(key => (result[key] = unused[key]));

  console.log(`\n${formatErrorMessage(file, result)}\n`);
  process.exit(1);
}).catch(err => {
  console.error(err);
  process.exit(1);
});
