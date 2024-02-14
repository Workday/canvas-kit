import {Config} from '@workday/canvas-kit-styling-transform';

import {handleFocusRing} from './utils/style-transform/handleFocusRing';

const config: Config = {
  prefix: 'cnvs',
  getPrefix(path) {
    return path.replace(/.+modules\/([^/]+)\/([^/]+)\/.+/, (_, modulePath, subPath) => {
      if (modulePath === 'preview-react') {
        return 'cnvs-preview';
      }
      if (modulePath === 'labs-react') {
        return 'cnvs-labs';
      }

      return 'cnvs';
    });
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
};

export default config;
