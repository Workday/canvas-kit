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
  fallbackFiles: [
    '@workday/canvas-tokens-web/css/base/_variables.css',
    '@workday/canvas-tokens-web/css/brand/_variables.css',
    '@workday/canvas-tokens-web/css/system/_variables.css',
  ],
  objectTransforms: [handleFocusRing],
});

export default config;
