import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';
import globCallback from 'glob';

const glob = promisify(globCallback);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

import {
  extractExports,
  getConfig,
  getTsProgram,
  getComponentDocs,
} from '../../../.storybook/docgen-parse-file';

const distFolder = path.join(__dirname, '../dist');
const cacheFolder = path.join(__dirname, '../../.cache');

const srcFolders = ['react', 'labs-react', 'preview-react', 'docs/mdx/style-props'];

const props = {};
let modules = [];

async function getComponentPropMap() {
  try {
    await fs.access(distFolder);
  } catch (e) {
    await fs.mkdir(distFolder);
  }

  try {
    await fs.access(cacheFolder);
  } catch (e) {
    await fs.mkdir(cacheFolder);
  }

  for (const folder of srcFolders) {
    const srcFolder = path.join(__dirname, '../../', folder);

    const files = await glob(`${srcFolder}/**/*.tsx`, {
      ignore: ['**/examples/**', '**/spec/**', '**/stories/**', '**/use*.tsx'],
    });

    modules = modules.concat(files);
  }

  const tsProgram = getTsProgram(modules);

  return modules.reduce((result, fileName) => {
    const modulePath = fileName.replace(
      /(.+modules\/)((preview-|labs-)?react)\/([a-z-]+)\/(.+)/,
      '@workday/canvas-kit-$2/$4'
    );
    if (!result[modulePath]) {
      result[modulePath] = {};
    }
    const componentDocs = getComponentDocs(fileName, tsProgram).reduce((result, component) => {
      result[component.displayName] = component;

      return result;
    }, {});

    result[modulePath] = {...result[modulePath], ...componentDocs};

    return result;
  }, {});
}

export default getComponentPropMap;
