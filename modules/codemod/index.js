#!/usr/bin/env node
'use strict';

const {spawn} = require('child_process');
require('colors');

const {_: commands, path} = require('yargs')
  .scriptName('canvas-kit-codemod')
  .usage('$0 <transform> [path]'.brightBlue.bold)
  .command('v5 [path]', 'Canvas Kit v4 > v5 migration transform'.gray, yargs => {
    yargs.positional('path', {
      type: 'string',
      default: '.',
      describe: 'The path to execute the transform in (recursively).'.gray,
    });
  })
  .command('v6 [path]', 'Canvas Kit v5 > v6 migration transform'.gray, yargs => {
    yargs.positional('path', {
      type: 'string',
      default: '.',
      describe: 'The path to execute the transform in (recursively).'.gray,
    });
  })
  .demandCommand(1, 'You must provide a transform to apply.'.red.bold)
  .strictCommands()
  .fail((msg, err, yargs) => {
    if (err) {
      throw err;
    }
    console.error(`\n${msg.red.bold}\n`);
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

console.log(`\nApplying ${transform} transform to '${path}'\n`.brightBlue);
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
