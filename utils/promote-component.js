#!/usr/bin/env node
'use strict';

const fs = require('fs');
const {promisify} = require('util');
const exec = promisify(require('child_process').exec);
const mkdirp = require('mkdirp');
const path = require('path');
const inquirer = require('inquirer');
const glob = require('glob');
const replaceInFiles = require('replace-in-files');
const addExport = require('./create-component/addExport');

require('colors');

const cwd = process.cwd();

console.log('\nCanvas Kit Component Promoter'.brightBlue.underline.bold);

console.log(
  '\nThis utility will walk you through promoting a Canvas Kit Labs or Preview component to a regular component.'
);

console.log('\nPress ^C at any time to quit.\n'.gray);

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'Module/component name (in "kebab-case"):',
  },
  {
    type: 'list',
    name: 'prerelease',
    message: 'Which package are you promoting from?:',
    choices: ['labs', 'preview'],
  },
  {
    type: 'list',
    name: 'category',
    message: 'What IA category does this component belong in within storybook?:',
    choices: ['Buttons', 'Containers', 'Indicators', 'Inputs', 'Navigation', 'Popups'],
  },
];

inquirer.prompt(questions).then(answers => {
  const {name: component, prerelease, category} = answers;

  if (!component) {
    console.log('You must enter a component name');
    process.exit(1);
  }

  const prefix = prerelease && prerelease + '-';
  const srcPath = path.join(cwd, `modules/${prefix}react/${component}`);
  const destModule = path.join(cwd, `modules/react/`);
  const destPath = path.join(destModule, component);

  if (fs.existsSync(`${destPath}`)) {
    console.log(`\n${destPath} already exists. Skipping.`.yellow);
  } else {
    console.log(
      `\nMoving `.gray +
        `modules/${prefix}react/${component}`.cyan +
        ` > `.gray +
        `modules/react/${component}`.cyan
    );

    exec(`git mv ${srcPath} ${destModule}`)
      .then(() => {
        glob(`${destPath}/**/*`, async (err, files) => {
          if (err) {
            console.log('Error', err);
            process.exit(1);
          }

          try {
            console.log(`Updating file paths and removing labs references\n`.gray);
            const {
              changedFiles,
              countOfMatchesByPaths,
              replaceInFilesOptions,
            } = await replaceInFiles({
              files,
              from: `@workday/canvas-kit-${prefix}react/${component}`,
              to: `@workday/canvas-kit-react/${component}`,
            })
              .pipe({
                from: `yarn add @workday/canvas-kit-${prefix}react`,
                to: 'yarn add @workday/canvas-kit-react',
              })
              .pipe({
                from: `modules/${prefix}react/${component}`,
                to: `modules/react/${component}`,
              })
              .pipe({
                from: /\n<a href=".*modules\/(labs|preview).*(\n.*)*in prerelease\.\n\n\n/g,
                to: '',
              })
              .pipe({
                from: `'Labs/`,
                to: `'Components/${category}/`,
              })
              .pipe({
                from: `'Testing/React/Labs`,
                to: `'Testing/React/${category}`,
              });
          } catch (error) {
            console.log('Error occurred:', error);
          }

          console.log(`Adding depenency to ` + `modules/react/index.ts\n`.brightBlue);
          addExport(component);
        });
      })
      .catch(err => {
        console.log(err);
        process.exit(1);
      });
  }
});
