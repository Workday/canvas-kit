const fs = require('fs');
const path = require('path');
const util = require('util');

const readdir = util.promisify(fs.readdir);

module.exports = {
  rules: {
    'scope-enum': ctx => getPackages(ctx).then(files => [2, 'always', files]),
    'subject-case': [2, 'always', 'sentence-case'],
  },
  extends: ['@commitlint/config-conventional'],
};

// Extra scopes supported outside the `modules` folder
const scopes = ['labs', 'fonts', 'popup-stack'];

/**
 * @param {{ cwd: string}} context
 * @returns all folders under the `modules` folder
 */
function getPackages(context) {
  const ctx = context || {};
  const cwd = ctx.cwd || process.cwd();

  return Promise.all([
    readdir(path.resolve(cwd, 'modules/css'), {withFileTypes: true}),
    readdir(path.resolve(cwd, 'modules/react'), {withFileTypes: true}),
    readdir(path.resolve(cwd, 'modules/labs-react'), {withFileTypes: true}),
  ])
    .then(([core, labs]) => [...core, ...labs])
    .then(files => files.filter(dirent => dirent.isDirectory()).map(dirent => dirent.name))
    .then(files => scopes.concat(files))
    .then(files => files.map(file => file.replace(/^(_.+)|(labs)/, '')).filter(name => name));
}

// To test the output of this function, run the following:
// node -p "require('./commitlint.config.js').rules['scope-enum']().then(val => console.log(val))"
