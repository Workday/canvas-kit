import {createConfig} from '@workday/canvas-kit-styling-transform';

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
  fallbackFiles: [],
  objectTransforms: [handleFocusRing],
});

export default config;
