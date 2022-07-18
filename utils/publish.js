'use strict';

const {promisify} = require('util');
const glob = promisify(require('glob'));
const fs = require('fs');
const chalk = require('chalk');

let command = '';

const {path} = require('yargs')
  .scriptName('publish')
  // .usage(chalk.blueBright.bold('prepublish [path]'))
  .command('pre [path]', chalk.gray('Create package.json files in module'), argv => {
    argv.positional('path', {
      type: 'string',
      describe: chalk.gray('The module to work on.'),
    });

    command = 'pre';
  })
  .command('post [path]', chalk.gray('Remove package.json files in module'), argv => {
    argv.positional('path', {
      type: 'string',
      describe: chalk.gray('The module to work on.'),
    });

    command = 'post';
  })
  .strictCommands()
  .fail((msg, err, yargs) => {
    if (err) {
      throw err;
    }
    console.error(`\n${msg.red.bold}\n`);
    console.error(yargs.help());
    process.exit(1);
  })
  .alias('v', 'version')
  .alias('h', 'help')
  .help().argv;

const cwd = process.cwd();

if (command === 'pre') {
  glob(`*/index.ts`, {cwd}).then(async files => {
    files.forEach(async file => {
      const folderName = file.replace('/index.ts', '');

      const contents = {
        main: `../dist/commonjs/${folderName}`,
        module: `../dist/es6/${folderName}`,
        sideEffects: false,
        types: `../dist/es6/${folderName}`,
      };
      fs.writeFileSync(folderName + '/package.json', JSON.stringify(contents, null, '  ') + '\n');
    });
  });
}
if (command === 'post') {
  glob(`modules/${path}/*/index.ts`, {cwd}).then(async files => {
    files.forEach(async file => {
      const folderName = file.replace('/index.ts', '');

      fs.unlinkSync(folderName + '/package.json');
    });
  });
}
