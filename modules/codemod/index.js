#!/usr/bin/env node
'use strict';

const {spawn} = require('child_process');
const chalk = require('chalk');

const {
  _: commands,
  path,
  ignoreConfig,
  ignorePattern,
  verbose,
} = require('yargs')
  .scriptName('canvas-kit-codemod')
  .usage(chalk.bold.blueBright('$0 <transform> [path]'))
  .options({
    'ignore-config': {
      type: 'string',
      describe:
        'Ignore files if they match patterns sourced from a configuration file (e.g. a .gitignore)',
      default: '',
    },
    'ignore-pattern': {
      type: 'string',
      describe: 'Ignore files that match a provided glob expression (e.g. **/dist/**)',
      default: '**/node_modules/**',
    },
    verbose: {
      type: 'number',
      describe: 'Show more information about the transform process',
      default: 0,
      choices: [0, 1, 2],
    },
  })
  .command('v5 [path]', chalk.gray('Canvas Kit v4 > v5 migration transform'), yargs => {
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
  .command('v11 [path]', chalk.gray('Canvas Kit v10 > v11 upgrade transform'), yargs => {
    yargs.positional('path', {
      type: 'string',
      default: '.',
      describe: chalk.gray('The path to execute the transform in (recursively).'),
    });
  })
  .command('v12 [path]', chalk.gray('Canvas Kit v11 > v12 upgrade transform'), yargs => {
    yargs.positional('path', {
      type: 'string',
      default: '.',
      describe: chalk.gray('The path to execute the transform in (recursively).'),
    });
  })
  .command('v13 [path]', chalk.gray('Canvas Kit v12 > v13 upgrade transform'), yargs => {
    yargs.positional('path', {
      type: 'string',
      default: '.',
      describe: chalk.gray('The path to execute the transform in (recursively).'),
    });
  })
  .command('v13.2 [path]', chalk.gray('Canvas React Tokens > Canvas Tokens Web v2'), yargs => {
    yargs.positional('path', {
      type: 'string',
      default: '.',
      describe: chalk.gray('The path to execute the transform in (recursively).'),
    });
  })
  .command('v14 [path]', chalk.gray('Canvas Kit v13 > v14 upgrade transform'), yargs => {
    yargs.positional('path', {
      type: 'string',
      default: '.',
      describe: chalk.gray('The path to execute the transform in (recursively).'),
    });
  })
  .command('v14-tokens [path]', chalk.gray('Canvas Kit v13 > v14 upgrade transform'), yargs => {
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
// Only add an ignore-config if one is provided
const ignoreConfigArg = ignoreConfig ? `--ignore-config=${ignoreConfig}` : '';
console.log(ignorePattern);

console.log(chalk.blueBright(`\nApplying ${transform} transform to '${path}'\n`));
const args =
  `-t ${__dirname}/dist/es6/${transform} ${path} --parser tsx --extensions js,jsx,ts,tsx ${ignoreConfigArg} --ignore-pattern=${ignorePattern} --verbose=${verbose}`.split(
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
