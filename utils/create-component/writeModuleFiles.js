const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const getDirName = require('path').dirname;
const {consoleMessage} = require('./consoleUtils');

const cwd = process.cwd();

/*
 * Function used by createCssModule and createReactModule to write
 * files to the component folders.
 */
module.exports = (files, modulePath) => {
  Object.keys(files).map(key => {
    const file = files[key];
    const filePath = path.join(modulePath, file.path);

    consoleMessage('Creating', `.${filePath.replace(cwd, '')}`);

    mkdirp(getDirName(filePath)).then(() => {
      fs.writeFileSync(filePath, file.contents);
    });
  });
};
