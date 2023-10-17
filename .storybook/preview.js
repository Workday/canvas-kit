import {DocsPage, DocsContainer} from '@storybook/addon-docs';
import 'cypress-storybook/react';
import routes from './routes';

import {CanvasProviderDecorator} from '../utils/storybook';
import theme from './theme';
import {defaultCanvasTheme} from '@workday/canvas-kit-react/common';
import "@workday/canvas-tokens-web/dist/css/base/_variables.css";
import "@workday/canvas-tokens-web/dist/css/brand/_variables.css";
import "@workday/canvas-tokens-web/dist/css/system/_variables.css";

// set routes on window for testing the validity of the routes
window.__routes = routes;

/** If the string contains a phrase, prefix it. This is useful for making ordering sections */
const prefix = (phrase, prefix) => (/** @type {string} */ value) => {
  const index = value.indexOf(phrase);
  return index > -1 ? value.substr(0, index) + prefix + value.substr(index) : value;
};
const pipe = (...fns) => value => fns.reduce((result, fn) => fn(result), value);
function storySort(a, b) {
  const prefixFn = pipe(
    prefix('welcome-', '0'),
    prefix('guides-', '1'),
    prefix('guides-getting-started', '1'),
    prefix('features-', '2'),
    prefix('tokens-', '3'),
    prefix('overview', 'a'),
    prefix('components-', '4'),
    prefix('hooks-and-utilities-', '5'),
    prefix('preview-', '6'),
    prefix('labs-', '7'),
    prefix('assets-', '8'),
    prefix('overview', 'a'),
    prefix('css-', 'zzzz'),
    prefix('css-overview-page', 'zzza'),
    prefix('basic', 'aa'),
    prefix('default', 'ab'),
    prefix('testing', 'zzz'),
    prefix('examples', 'zz'),
    // Make sure upgrade guides follow chronological order by replacing `v9.0` with `v09.0`
    value => value.replace(/v([1-9]\-0)/, '0$1')
  );

  const left = prefixFn(a[0]);
  const right = prefixFn(b[0]);

  return left === right ? 0 : left.localeCompare(right);
}

export const decorators = [CanvasProviderDecorator];

export const parameters = {
  options: {
    storySort,
  },
  docs: {
    theme,
    container: DocsContainer,
    page: DocsPage,
  },
  readme: {
    codeTheme: 'github',
  },
  chromatic: {
    disable: true,
  },
  controls: {
    expanded: true,
  },
  argTypes: {
    theme: {
      control: 'object',
      defaultValue: defaultCanvasTheme,
    },
  },

  // Make stories available to our internal code sandbox tool
  tesseract: {
    enable: true,
  },
};
