import {DocsPage, DocsContainer} from '@storybook/addon-docs/blocks';
import 'cypress-storybook/react';
import routes from './routes';

import {CanvasProviderDecorator} from '../utils/storybook';
import theme from './theme';
import {defaultCanvasTheme} from '@workday/canvas-kit-react/common';

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
    prefix('getting-started', 'a'),
    prefix('tokens-', '1'),
    prefix('components-', '2'),
    prefix('preview-', '3'),
    prefix('labs-', '4'),
    prefix('basic', 'aa'),
    prefix('default', 'ab'),
    prefix('visual-testing', 'zz'),
    prefix('examples', 'zzz')
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
};
