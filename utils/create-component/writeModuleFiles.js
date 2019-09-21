const fs = require('fs');
const path = require('path');

/*
 * Function used by createCssModule and createReactModule to write
 * files to the component folders.
 */
module.exports = (files, modulePath) => {
  // TODO: Check based on path and add folders automatically

  Object.keys(files).map(key => {
    const file = files[key];
    const filePath = path.join(modulePath, file.path);

    // TODO: strip cwd from filepath before logging
    console.log(`Creating ${filePath}`);
    fs.writeFileSync(filePath, file.contents);
  });
};
