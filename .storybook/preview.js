import React from 'react';
import {DocsPage, DocsContainer, Unstyled} from '@storybook/addon-docs';
import 'cypress-storybook/react';
import routes from './routes';

import {CanvasProviderDecorator} from '../utils/storybook';
import theme from './theme';
import {defaultCanvasTheme} from '@workday/canvas-kit-react/common';
import '@workday/canvas-tokens-web/css/base/_variables.css';
import '@workday/canvas-tokens-web/css/brand/_variables.css';
import '@workday/canvas-tokens-web/css/system/_variables.css';

// set routes on window for testing the validity of the routes
window.__routes = routes;

const UnstyledDocsContainer = ({children, ...props}) => {
  return (
    <DocsContainer {...props}>
      <Unstyled>{children}</Unstyled>
    </DocsContainer>
  );
};

export const decorators = [CanvasProviderDecorator];

export const parameters = {
  options: {
    storySort: (a, b) => {
      /** If the string contains a phrase, prefix it. This is useful for making ordering sections */
      const prefix = (phrase, prefix) => (/** @type {string} */ value) => {
        const index = value.indexOf(phrase);
        return index > -1 ? value.substr(0, index) + prefix + value.substr(index) : value;
      };

      const pipe =
        (...fns) =>
        value =>
          fns.reduce((result, fn) => fn(result), value);

      const prefixFn = pipe(
        prefix('welcome-', '0'),
        prefix('guides-', '1'),
        prefix('guides-getting-started', '1'),
        prefix('styling-', '2'),
        prefix('styling-getting-started', '1'),
        prefix('styling-getting-started-overview', '1'),
        prefix('styling-getting-started-create-styles', '2'),
        prefix('features-', '3'),
        prefix('tokens-', '4'),
        prefix('overview', 'a'),
        prefix('components-', '5'),
        prefix('hooks-and-utilities-', '6'),
        prefix('preview-', '7'),
        prefix('labs-', '8'),
        prefix('assets-', '9'),
        prefix('overview', 'a'),
        prefix('css-', 'zzzz'),
        prefix('css-overview-page', 'zzza'),
        prefix('getting-started', 'aaabc'),
        prefix('stencils', 'aabcd'),
        prefix('functions', 'abcde'),
        prefix('basic', 'aa'),
        prefix('default', 'ab'),
        prefix('testing', 'zzz'),
        prefix('examples', 'zz'),
        // Make sure upgrade guides follow chronological order by replacing `v9.0` with `v09.0`
        value => value.replace(/v([1-9]\-0)/, '0$1'),
        // Make sure docs stories goes first
        value => value.replace(/docs/, '0000docs')
      );

      const left = prefixFn(a.id);
      const right = prefixFn(b.id);

      return left === right ? 0 : left.localeCompare(right);
    },
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
    theme,
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
