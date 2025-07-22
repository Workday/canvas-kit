import crypto from 'node:crypto';

import {createConfig} from '@workday/canvas-kit-styling-transform';

import pkg from './lerna.json';
import {handleFocusRing} from './utils/style-transform/handleFocusRing';

const config = createConfig({
  prefix: 'cnvs',
  getPrefix(path) {
    const match = path.match(/.+modules\/(preview|labs)-react\/([^/]+)\/.+/);

    if (match) {
      return `cnvs-${match[1]}`;
    }

    return 'cnvs';
  },
  extractCSS: true,
  getFileName(path) {
    return path
      .replace(/modules\/([^/]+)\/([^/]+)\/.+/, (_, modulePath, subPath) => {
        return `modules/${modulePath.replace('react', 'css')}/${subPath}.css`;
      })
      .toLowerCase();
  },
  seed: crypto.createHash('sha256').update(pkg.version).digest('hex').slice(0, 6),
  fallbackFiles: [],
  objectTransforms: [handleFocusRing],
});

export default config;
