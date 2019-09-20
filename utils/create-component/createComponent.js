#!/usr/bin/env node
'use strict';

const path = require('path');
const mkdirp = require('mkdirp');
const inquirer = require('inquirer');

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
      // Check if file exists
    },
  },
  {
    type: 'input',
    name: 'description',
    message: 'Module description:',
  },
  {
    type: 'confirm',
    name: 'unstable',
    message: 'Is this an unstable component (i.e. should it go in Canvas Kit Labs)?:',
    default: false,
  },
  {
    type: 'confirm',
    name: 'css',
    message: 'Would you like to create a CSS module as well?:',
    default: false,
  },
];

inquirer
  .prompt(questions)
  .then(answers => {
    const {name, description, unstable, css} = answers;

    console.log(`\nCreating @workday/canvas-kit-react-${name}`);

    const componentPath = path.join(cwd, `modules/${name}`);
    const reactModulePath = path.join(componentPath, 'react');
    mkdirp(componentPath);
    mkdirp(reactModulePath);

    createReactModule(reactModulePath, name, description, unstable);

    if (css) {
      console.log(`\nCreating @workday/canvas-kit-css-${name}`);

      const cssModulePath = path.join(componentPath, 'css');
      mkdirp(cssModulePath);

      createCssModule(cssModulePath, name, description, unstable);
    }

    console.log('\nInstalling dependencies');
    // Yarn

    if (!unstable) {
      addReactDependency(name);

      if (css) {
        addSassDependency(name);
      }
    }

    console.log(`\nDone`);
  })
  .catch(e => {
    console.log('\nError creating component:\n');
    console.log(e.stack);
  });
