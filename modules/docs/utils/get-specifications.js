const fs = require('fs');
const util = require('util');
const path = require('path');
const glob = util.promisify(require('glob'));
const readFile = util.promisify(fs.readFile);
const typescript = require('typescript');

function getSpecifications() {
  return glob('cypress/integration/**/*.spec.ts', {cwd: path.join(__dirname, '../../..')}).then(
    async matches => {
      const all = [];
      for (match of matches) {
        const specs = await readFile(path.join(__dirname, '../../../', match))
          .then(contents => contents.toString())
          .then(contents => contents.replace(/(import [^\n]+\n)/g, '')) // remove imports
          .then(contents => typescript.transpile(contents))
          .then(contents => {
            let children = [];

            // eslint-disable-next-line no-empty-function
            const noop = () => {};
            const before = noop;
            const beforeEach = noop;
            const after = noop;
            const afterEach = noop;

            const describe = (name, optionsOrCb, cb) => {
              const childrenBefore = children;
              const obj = {};
              obj.type = 'describe';
              obj.name = name;
              obj.children = [];
              children.push(obj);
              children = obj.children;
              if (typeof optionsOrCb === 'function') {
                optionsOrCb();
              } else if (typeof optionsOrCb === 'function') {
                cb();
              }
              children = childrenBefore;
            };
            describe.skip = noop;
            describe.only = noop;
            const context = describe;

            const it = name => {
              const obj = {};
              obj.type = 'it';
              obj.name = name;
              children.push(obj);
            };
            it.skip = noop;
            it.only = noop;

            // eslint-disable-next-line no-eval
            eval(contents);

            return {
              type: 'file',
              name: path.basename(match).replace(`spec.${path.extname(match)}`, ''),
              children,
            };
          });

        all.push(specs);
      }

      return all;
    }
  );
}

module.exports = getSpecifications;
