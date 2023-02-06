#!/usr/bin/env node
'use strict';

const {spawn} = require('child_process');
const chalk = require('chalk');

const {_: commands, path} = require('yargs')
  .scriptName('canvas-kit-codemod')
  .usage(chalk.bold.blueBright('$0 <transform> [path]'))
  .command('v5 [path]', chalk.gray('Canvas Kit v4 > v5 upgrade transform'), yargs => {
    yargs.positional('path', {
      type: 'string',
      default: '.',
      describe: chalk.gray('The path to execute the transform in (recursively).'),
    });
  })
  .command('v6 [path]', chalk.gray('Canvas Kit v5 > v6 upgrade transform'), yargs => {
    yargs.positional('path', {
      type: 'string',
      default: '.',
      describe: chalk.gray('The path to execute the transform in (recursively).'),
    });
  })
  .command('v7 [path]', chalk.gray('Canvas Kit v6 > v7 upgrade transform'), yargs => {
    yargs.positional('path', {
      type: 'string',
      default: '.',
      describe: chalk.gray('The path to execute the transform in (recursively).'),
    });
  })
  .command('v8 [path]', chalk.gray('Canvas Kit v7 > v8 upgrade transform'), yargs => {
    yargs.positional('path', {
      type: 'string',
      default: '.',
      describe: chalk.gray('The path to execute the transform in (recursively).'),
    });
  })
  .command('v9 [path]', chalk.gray('Canvas Kit v8 > v9 upgrade transform'), yargs => {
    yargs.positional('path', {
      type: 'string',
      default: '.',
      describe: chalk.gray('The path to execute the transform in (recursively).'),
    });
  })
  .demandCommand(1, chalk.red.bold('You must provide a transform to apply.'))
  .strictCommands()
  .fail((msg, err, yargs) => {
    if (err) {
      throw err;
    }
    console.error(`\n${chalk.red.bold(msg)}\n`);
    console.error(yargs.help());
    process.exit(1);
  })
  .updateStrings({
    'Commands:': 'Commands (transforms):',
  })
  .alias('v', 'version')
  .alias('h', 'help')
  .help().argv;

const transform = commands[0];
console.log(transform, path);

console.log(chalk.blueBright(`\nApplying ${transform} transform to '${path}'\n`));
const args = `-t ${__dirname}/dist/es6/${transform} ${path} --parser tsx --extensions js,jsx,ts,tsx`.split(
  ' '
);

const proc = spawn(`jscodeshift`, args);

let errCode = 0;
proc.stdout.on('data', data => console.log(data.toString()));
proc.stderr.on('data', data => {
  errCode = 1;
  console.error(data.toString());
});

proc.on('close', code => {
  process.exit(code || errCode);
});
