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
  '\nThis utility will walk you through promoting a Canvas Kit Labs component to a regular component.'
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
    name: 'category',
    message: 'What IA category does this component belong in within storybook?:',
    choices: ['Buttons', 'Containers', 'Indicators', 'Inputs', 'Navigation', 'Popups'],
  },
];

inquirer.prompt(questions).then(answers => {
  const component = answers.name;

  if (!component) {
    console.log('You must enter a component name');
    process.exit(1);
  }

  const target = 'react';
  const srcPath = path.join(cwd, `modules/labs-${target}/${component}`);
  const destPath = path.join(cwd, `modules/${target}/${component}`);

  if (!fs.existsSync(destPath)) {
    mkdirp.sync(destPath);
  }

  if (fs.existsSync(`${destPath}/${target}`)) {
    console.log(`\n${destPath} already exists. Skipping.`.yellow);
  } else {
    console.log(
      `\nMoving `.gray +
        `modules/labs-${target}/${component}`.cyan +
        ` > `.gray +
        `modules/${target}/${component}`.cyan
    );

    exec(`git mv ${srcPath} ${destPath}`)
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
              from: `@workday/canvas-kit-labs-${target}/${component}`,
              to: `@workday/canvas-kit-${target}/${component}`,
            })
              .pipe({
                from: `modules/labs-${target}/${component}`,
                to: `modules/${target}/${component}`,
              })
              .pipe({
                from: /\n<a href="https:\/\/github.com\/Workday\/canvas-kit\/tree\/master\/modules\/labs-react.*\n.*\n.*currently in pre-release.\n\n\n/g,
                to: '',
              })
              .pipe({
                from: `storiesOf('Labs/`,
                to: `storiesOf('Components/${answers.category}/`,
              });
          } catch (error) {
            console.log('Error occurred:', error);
          }

          console.log(`Adding depenency to ` + `modules/${target}/index.ts\n`.brightBlue);
          addExport(component, false);
        });
      })
      .catch(err => {
        console.log(err);
        process.exit(1);
      });
  }
});
