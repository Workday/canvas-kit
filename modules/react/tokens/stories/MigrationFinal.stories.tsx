import {Meta} from '@storybook/react';

import mdxDoc from './MigrationFinal.mdx';

export default {
  title: 'Tokens/Migration Steps/4. Q&A and more',
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
