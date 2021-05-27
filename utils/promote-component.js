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

  const prereleaseTitle = prerelease && prerelease.charAt(0).toUpperCase() + prerelease.slice(1);
  const srcPrefix = prerelease && prerelease + '-';
  const srcPath = path.join(cwd, `modules/${srcPrefix}react/${component}`);
  const destPrefix = prerelease === 'labs' ? 'preview-' : '';
  const destModule = path.join(cwd, `modules/${destPrefix}react/`);
  const destPath = path.join(destModule, component);

  if (fs.existsSync(`${destPath}`)) {
    console.log(`\n${destPath} already exists. Skipping.`.yellow);
  } else {
    console.log(
      `\nMoving `.gray +
        `modules/${srcPrefix}react/${component}`.cyan +
        ` > `.gray +
        `modules/${destPrefix}react/${component}`.cyan
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
            await replaceInFiles({
              files,
              from: `@workday/canvas-kit-${srcPrefix}react/${component}`,
              to: `@workday/canvas-kit-${destPrefix}react/${component}`,
            })
              .pipe({
                from: `yarn add @workday/canvas-kit-${srcPrefix}react`,
                to: `yarn add @workday/canvas-kit-${destPrefix}react`,
              })
              .pipe({
                from: `modules/${srcPrefix}react/${component}`,
                to: `modules/${destPrefix}react/${component}`,
              })
              .pipe({
                from: `'${prereleaseTitle}/`,
                to: `'Components/${category}/`,
              })
              .pipe({
                from: `'Testing/React/${prereleaseTitle}`,
                to: `'Testing/React/${category}`,
              });

            if (prerelease === 'labs') {
              await replaceInFiles({
                files,
                from: 'modules/labs-react/README.md',
                to: 'modules/preview-react/README.md',
              }).pipe({
                from: 'img.shields.io/badge/LABS-alpha-orange" alt="LABS: Alpha"',
                to: 'img.shields.io/badge/PREVIEW-beta-blueviolet" alt="Preview: Beta"',
              });
            } else if (prerelease === 'preview') {
              await replaceInFiles({
                files,
                from: /\n<a href=".*modules\/(labs|preview).*(\n.*)*in prerelease\.\n\n\n/g,
                to: '',
              });
            }
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
