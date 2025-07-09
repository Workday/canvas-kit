import {Meta} from '@storybook/react';

import mdxDoc from './MigrationCodemod.mdx';

export default {
  title: 'Tokens/Migration Steps/3. Using codemod',
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
