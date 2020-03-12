#!/usr/bin/env node
'use strict';

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

function formatErrorMessage(errors) {
  return (
    `${errors.file}\n` +
    Object.keys(errors)
      .map(key => {
        if (key === 'file') return;

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

  const result = {
    file: modulePath + '/package.json',
  };
  errorKeys.forEach(key => (result[key] = unused[key]));

  console.log(formatErrorMessage(result) + '\n');
  process.exit(1);
}).catch(err => {
  console.error(err);
  process.exit(1);
});
