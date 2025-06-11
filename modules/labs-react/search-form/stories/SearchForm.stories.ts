import {Meta} from '@storybook/react';

import {SearchForm} from '@workday/canvas-kit-labs-react/search-form';

import mdxDoc from './SearchForm.mdx';

export {Basic} from './examples/Basic';
export {Collapsed} from './examples/Collapsed';
export {CustomStyles} from './examples/CustomStyles';
export {CustomTheme} from './examples/CustomTheme';
export {Grow} from './examples/Grow';
export {RTL} from './examples/RTL';
export {Theming} from './examples/Theming';

export default {
  title: 'Labs/Search Form',
  component: SearchForm,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
