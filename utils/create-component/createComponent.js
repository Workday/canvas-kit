#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const {exec} = require('child_process');

require('colors');

const createReactModule = require('./createReactModule');
const addExport = require('./addExport');

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
  // {
  //   type: 'checkbox',
  //   name: 'targets',
  //   message: 'What target modules would you like to create?:',
  //   choices: ['React', 'CSS'],
  //   default: ['React'],
  // },
  {
    type: 'list',
    name: 'category',
    message: 'What category should this component live in?:',
    choices: [
      'Labs (beta)',
      'Buttons',
      'Containers',
      'Indicators',
      'Inputs',
      'Navigation',
      'Popups',
    ],
  },
  {
    type: 'confirm',
    name: 'publicModule',
    message: 'Make access public when publishing?:',
    default: true,
  },
  /**
   * Add question to add deps
   * React: CK core, emotion
   */
];

inquirer
  .prompt(questions)
  .then(answers => {
    const {name, category} = answers;
    const unstable = category === 'Labs (beta)';
    const componentPath = path.join(
      cwd,
      unstable ? `modules/labs-react/${name}` : `modules/react/${name}`
    );

    createModule(componentPath, 'react', createReactModule, answers, unstable);

    console.log('\n');
  })
  .catch(e => {
    console.log('\nError creating component:\n'.red);
    console.log(e.stack);
  });

const createModule = (componentPath, target, moduleGenerator, answers, unstable) => {
  const {name, description, category, publicModule} = answers;

  if (fs.existsSync(componentPath)) {
    const moduleName = `@workday/canvas-kit-${unstable ? 'labs' : ''}${target}/${name}`;
    console.log(`\nModule ${moduleName} already exists. Skipping.`.yellow);
  } else {
    moduleGenerator(componentPath, name, description, unstable, publicModule, category);

    console.log('\nAdding export to ' + `./modules/${unstable ? 'labs-' : ''}react/index.ts`.cyan);
    addExport(name, unstable);

    console.log('\nBootstrapping dependencies.');
    exec('yarn');
  }
};
