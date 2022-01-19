#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const {exec} = require('child_process');
const chalk = require('chalk');

const createReactComponent = require('./createReactComponent');
const addExport = require('./addExport');

const cwd = process.cwd();

console.log(chalk.blueBright.underline.bold('\nCanvas Kit Component Generator'));

console.log('\nThis utility will walk you through creating a new Canvas Kit component.');

console.log(chalk.gray('\nPress ^C at any time to quit.\n'));

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'Module/component name (in "kebab-case"):',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Module description:',
  },
  {
    type: 'list',
    name: 'category',
    message: 'What category should this component live in?:',
    choices: [
      'Labs (alpha)',
      'Preview (beta)',
      'Buttons',
      'Containers',
      'Indicators',
      'Inputs',
      'Navigation',
      'Popups',
    ],
  },
];

inquirer
  .prompt(questions)
  .then(answers => {
    const {name, category} = answers;
    const prerelease =
      category === 'Labs (alpha)' ? 'labs' : category === 'Preview (beta)' ? 'preview' : undefined;
    const prefix = prerelease ? prerelease + '-' : '';
    const componentPath = path.join(cwd, `modules/${prefix}react/${name}`);

    createComponent(componentPath, createReactComponent, answers, prerelease || '', prefix);

    console.log('\n');
  })
  .catch(e => {
    console.log(chalk.red('\nError creating component:\n'));
    console.log(e.stack);
  });

const createComponent = (componentPath, componentGenerator, answers, prerelease, prefix) => {
  const {name, description, category} = answers;

  if (fs.existsSync(componentPath)) {
    const moduleName = `@workday/canvas-kit-${prefix}react/${name}`;
    console.log(chalk.yellow(`\nModule ${moduleName} already exists. Skipping.`));
  } else {
    componentGenerator(componentPath, name, description, prerelease, category);

    console.log('\nAdding export to ' + chalk.cyan(`./modules/${prefix}react/index.ts`));
    addExport(name, prerelease);

    console.log('\nBootstrapping dependencies.');
    exec('yarn');
  }
};
