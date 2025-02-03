import {Meta} from '@storybook/react';

import mdxDoc from './SearchForm.mdx';

export {Basic} from './examples/Basic';
export {CustomTheme} from './examples/CustomTheme';
export {Grow} from './examples/Grow';
export {RTL} from './examples/RTL';
export {Theming} from './examples/Theming';

export default {
  title: 'Labs/Search Form',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
