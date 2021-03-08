const fs = require('fs');
const util = require('util');
const path = require('path');
const writeFile = util.promisify(fs.writeFile);
const getSpecifications = require('./get-specifications');

getSpecifications().then(async specs => {
  const contents = `module.exports = {specifications: ${JSON.stringify(specs, null, '  ')}};`;

  await writeFile(path.join(__dirname, '../dist/commonjs/lib/specs.js'), contents);
  await writeFile(path.join(__dirname, '../dist/es6/lib/specs.js'), contents);
});
