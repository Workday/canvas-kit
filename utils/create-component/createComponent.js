#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const inquirer = require('inquirer');
const cmd = require('node-cmd');
const colors = require('colors');

const createReactModule = require('./createReactModule');
const createCssModule = require('./createCssModule');
const addDependency = require('./addDependency');

const cwd = process.cwd();

console.log('\nCanvas Kit Component Generator'.brightBlue.underline.bold);

console.log('\nThis utility will walk you through creating a new Canvas Kit component.');

console.log('\nPress ^C at any time to quit.\n'.gray);

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
  /**
   * Add question to add deps
   * React: CK core, emotion, react-emotion
   * CSS: CK Core
   */
];

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

    css && createModule(componentPath, 'css', createCssModule, answers);
    react && createModule(componentPath, 'react', createReactModule, answers);

    console.log('\n');
  })
  .catch(e => {
    console.log('\nError creating component:\n'.red);
    console.log(e.stack);
  });

const createModule = (componentPath, target, moduleGenerator, answers) => {
  const {name, description, unstable} = answers;

  const modulePath = path.join(componentPath, target);

  if (fs.existsSync(modulePath)) {
    const moduleName = `Module @workday/canvas-kit-${unstable ? 'labs-' : ''}${target}-${name}`;
    console.log(`\nModule ${moduleName} already exists. Skipping.`.yellow);
  } else {
    moduleGenerator(modulePath, name, description, unstable);

    console.log('\nBootstrapping dependencies.');
    cmd.run('yarn');

    if (!unstable) {
      console.log('\nAdding dependency to ' + `@workday/canvas-kit-${target}.`.cyan);

      addDependency(name, target);
    }
  }
};
