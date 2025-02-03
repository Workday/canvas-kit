import {Meta} from '@storybook/react';

import mdxDoc from './Box.mdx';

export {Basic} from './examples/Box/Basic';

export default {
  title: 'Components/Layout/Box',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
