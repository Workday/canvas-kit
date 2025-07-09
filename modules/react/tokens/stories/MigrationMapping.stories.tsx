import {Meta} from '@storybook/react';

import mdxDoc from './MigrationMapping.mdx';

export default {
  title: 'Tokens/Migration Steps/2. Mapping',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta;

export const Docs = {
  render: <div />,
};
