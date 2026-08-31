import mkdirp from 'mkdirp';
import fs from 'node:fs';
import path from 'node:path';

import {consoleMessage} from './consoleUtils.js';

const cwd = process.cwd();

/*
 * Function used by createCssModule and createReactModule to write
 * files to the component folders.
 */
const writeModuleFiles = (files, modulePath) => {
  Object.keys(files).map(key => {
    const file = files[key];
    const filePath = path.join(modulePath, file.path);

    consoleMessage('Creating', `.${filePath.replace(cwd, '')}`);

    mkdirp(path.dirname(filePath)).then(() => {
      fs.writeFileSync(filePath, file.contents);
    });
  });
};

export default writeModuleFiles;
