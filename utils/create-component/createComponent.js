#!/usr/bin/env node
'use strict';

const fs = require('fs');
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

// TODO: Add review/confirmation
// TODO: Add colors
const confirmation = [];

inquirer
  .prompt(questions)
  .then(answers => {
    const {name, unstable, targets} = answers;
    const css = targets.includes('CSS');
    const react = targets.includes('React');
    const componentPath = path.join(cwd, unstable ? `modules/_labs/${name}` : `modules/${name}`);

    if (!fs.existsSync(componentPath)) {
      mkdirp(componentPath);
    }

    css && createModule(componentPath, 'css', createCssModule, addSassDependency, answers);
    react && createModule(componentPath, 'react', createReactModule, addReactDependency, answers);

    console.log(`\nDone.`);
  })
  .catch(e => {
    console.log('\nError creating component:\n');
    console.log(e.stack);
  });

const createModule = (componentPath, target, moduleGenerator, dependencyGenerator, answers) => {
  const {name, description, unstable} = answers;

  const modulePath = path.join(componentPath, target);

  if (fs.existsSync(modulePath)) {
    console.log(`\nModule @workday/canvas-kit-${target}-${name} already exists. Skipping.`);
  } else {
    moduleGenerator(modulePath, name, description, unstable);

    console.log('\nInstalling dependency.');
    cmd.run('yarn');

    dependencyGenerator(name);
  }
};
