#!/usr/bin/env node
'use strict';

const path = require('path');
const mkdirp = require('mkdirp');
const inquirer = require('inquirer');
const cmd = require('node-cmd');

const createReactModule = require('./createReactModule');
const createCssModule = require('./createCssModule');
const addReactDependency = require('./addDependencies').addReactDependency;
const addSassDependency = require('./addDependencies').addSassDependency;

const cwd = process.cwd();

console.log(`\n
This utility will walk you through creating a new Canvas Kit component.

Press ^C at any time to quit.
`);

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'Module/component name (in "kebab-case"):',
    validate: function(value) {
      return true;
      // TODO: Check if file exists
    },
  },
  {
    type: 'input',
    name: 'description',
    message: 'Module description:',
  },
  {
    type: 'checkbox',
    name: 'targets',
    message: 'What target modules would you like to create?:',
    choices: ['React', 'CSS'],
    default: ['React'],
  },
  {
    type: 'confirm',
    name: 'unstable',
    message: 'Is this an unstable component (i.e. should it go in Canvas Kit Labs)?:',
    default: false,
  },
];

inquirer
  .prompt(questions)
  .then(answers => {
    const {name, description, unstable, targets} = answers;
    const css = targets.includes('CSS');
    const react = targets.includes('React');
    const componentPath = path.join(cwd, unstable ? `modules/_labs/${name}` : `modules/${name}`);

    mkdirp(componentPath);

    react && createReactModule(componentPath, name, description, unstable);
    css && createCssModule(componentPath, name, description, unstable);

    console.log('\nInstalling dependencies');
    cmd.run('yarn');

    if (!unstable) {
      react && addReactDependency(name);
      css && addSassDependency(name);
    }

    console.log(`\nDone`);
  })
  .catch(e => {
    console.log('\nError creating component:\n');
    console.log(e.stack);
  });
