import {Meta} from '@storybook/react';

import mdxDoc from './MigrationOverview.mdx';

export default {
  title: 'Tokens/Migration Steps/0. Overview',
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
