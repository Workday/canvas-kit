const fs = require('fs');
const util = require('util');
const path = require('path');
const mkdirp = require('mkdirp');
const writeFile = util.promisify(fs.writeFile);
const getSpecifications = require('./get-specifications');

getSpecifications()
  .then(async specs => {
    const contents = `module.exports = {specifications: ${JSON.stringify(specs, null, '  ')}};`;
    const outFile = path.join(__dirname, '../dist/es6/lib/specs.js');
    await mkdirp(path.dirname(outFile));
    await writeFile(outFile, contents);
  })
  .catch(error => {
    console.error(error);
    process.exitCode = 1;
  });
