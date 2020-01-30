#!/usr/bin/env node
'use strict';

const path = require('path');
const glob = require('glob');
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

function formatErrorMessage(errors) {
  return (
    `${errors.file}\n` +
    Object.keys(errors)
      .map(key => {
        if (key === 'file') return;

        if (errors[key].constructor === Object) {
          return Object.keys(errors[key])
            .map(pkg =>
              errors[key][pkg]
                .map(
                  errorFile =>
                    `${labelMap[key].color(labelMap[key].label.padEnd(20))}  ${colors.cyan(
                      pkg
                    )}  ${colors.dim(errorFile)}`
                )
                .join('\n')
            )
            .join('\n');
        } else {
          return errors[key]
            .map(
              error =>
                `${labelMap[key].color(labelMap[key].label.padEnd(20))}  ${colors.cyan(error)}`
            )
            .join('\n');
        }
      })
      .join('\n')
  );
}

const searchPath = `${path.resolve(__dirname)}/../modules/**/react`;

glob(searchPath, undefined, function(er, modules) {
  if (er) {
    console.error('Could not find any modules/**/react/ folders');
    return;
  }

  console.log(`\nChecking dependencies in ${colors.dim(searchPath)}...\n`);

  const checks = [];

  for (let reactModule of modules) {
    checks.push(
      new Promise((resolve, reject) => {
        depCheck(reactModule, depCheckOptions, unused => {
          const result = {
            file: reactModule + '/package.json',
          };

          Object.keys(unused)
            .filter(key => {
              if (key === 'using') {
                return false;
              }
              if (unused[key].constructor === Object) {
                return Object.keys(unused[key]).length;
              } else {
                return unused[key].length;
              }
            })
            .forEach(key => (result[key] = unused[key]));

          resolve(result);
          resolve(null);
        });
      })
    );
  }

  Promise.all(checks)
    .then(values => {
      const realErrors = values.filter(v => Object.keys(v).length > 1); // Exclude when file is the only key
      realErrors.forEach(errors => {
        console.log(formatErrorMessage(errors) + '\n');
      });
      if (realErrors.length) {
        process.exit(1);
      }
    })
    .catch(error => {
      console.error(error);
    });
});
