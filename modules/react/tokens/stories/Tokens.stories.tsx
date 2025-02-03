import {Meta} from '@storybook/react';

import mdxDoc from './Tokens.mdx';

export {Overview} from './examples/Overview';
export {BorderRadius, Colors, Depth, Space, Type} from './examples/Tokens';

export default {
  title: 'Tokens/Tokens',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
