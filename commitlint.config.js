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
const scopes = ['labs'];

/**
 * @param {{ cwd: string}} context
 * @returns all folders under the `modules` folder
 */
function getPackages(context) {
  const ctx = context || {};
  const cwd = ctx.cwd || process.cwd();

  return readdir(path.resolve(cwd, 'modules'))
    .then(files => scopes.concat(files))
    .then(files => files.map(file => file.replace('_canvas-kit-', '')));
}
