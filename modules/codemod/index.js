#!/usr/bin/env node
'use strict';

const {exec} = require('child_process');
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

exec(
  `jscodeshift -t ${__dirname}/lib/${transform} ${path} --parser=tsx --extensions=js,jsx,ts,tsx --verbose=2`,
  (error, stdout, stderr) => {
    if (error) {
      console.error(`${error}\n`);
      return;
    }
    console.log(`${stdout}\n`);

    if (stderr) {
      console.error(`${stderr}\n`);
    }
  }
);
