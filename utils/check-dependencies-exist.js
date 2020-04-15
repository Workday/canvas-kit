#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const colors = require('colors');
const depCheck = require('depcheck');

const depCheckOptions = {
  ignoreMatches: [
    '@testing-library/react',
    '@storybook/react',
    'storybook-readme',
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    'enzyme',
    'react-dom',
    'jest-axe',
    'jest-emotion',
  ],
};

const labelMap = {
  dependencies: {
    label: 'unused dependency',
    color: colors.yellow,
  },
  devDependencies: {
    label: 'unused devDependency',
    color: colors.yellow,
  },
  missing: {
    label: 'missing dependency',
    color: colors.red,
  },
  invalidFiles: {
    label: 'error',
    color: colors.red,
  },
  invalidDirs: {
    label: 'error',
    color: colors.red,
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

              return (
                labelMap[key].color(labelMap[key].label.padEnd(20)) +
                colors.dim(`  ${line}:${column}  `) +
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

                return `${errorFile}\n  ${colors.dim(`${line}:${char}`)}  ${colors.red(
                  'error'
                )}  ${colors.yellow(packageName)} is missing from ${pkgFile}  ${colors.dim(
                  'check-dependencies-exist'
                )}`;
              })
              .join('\n');
          })
          .join('\n');
      } else if (key === 'dependencies' || key === 'devDependencies') {
        const contents = fs.readFileSync(pkgFile).toString();
        return errors[key]
          .map(packageName => {
            const line = findLineInFile(contents, packageName);
            const char = findCharacterInFile(contents, packageName);

            return `  ${colors.dim(`${line}:${char}`)}  ${colors.red('error')}  ${colors.yellow(
              packageName
            )} is not used in code  ${colors.dim('check-dependencies-exist')}`;
          })
          .join('\n');
      }
    })
    .join('\n\n');
}

const modulePath = process.cwd();
const packageName = require(path.join(modulePath, 'package.json')).name;

depCheck(modulePath, depCheckOptions, unused => {
  const errorKeys = Object.keys(unused).filter(key => {
    if (key === 'using') {
      return false;
    }
    if (key === 'missing') {
      // Self-referencing imports are only okay in stories. It allows story code more copy/paste friendly. Stories are not packaged, so no circular dependency actually exists
      if (unused['missing'][packageName]) {
        unused['missing'][packageName] = unused['missing'][packageName].filter(
          file => file.indexOf('stories') === -1
        );
        if (unused['missing'][packageName].length === 0) {
          delete unused['missing'][packageName];
        }
      }
      if (Object.keys(unused['missing']).length === 0) {
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

  console.log(formatErrorMessage(file, result) + '\n');
  process.exit(1);
}).catch(err => {
  console.error(err);
  process.exit(1);
});
