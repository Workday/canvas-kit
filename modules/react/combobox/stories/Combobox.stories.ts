import {Meta} from '@storybook/react';

import mdxDoc from './Combobox.mdx';

export {Autocomplete} from './examples/Autocomplete';

export default {
  title: 'Features/Combobox',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
