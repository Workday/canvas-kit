import {Meta} from '@storybook/react';

import mdxDoc from './Testing.mdx';

export {Basic as Docs} from './examples/Basic';

export default {
  title: 'Hooks and Utilities/Testing',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
