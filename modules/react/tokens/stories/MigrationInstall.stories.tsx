import {Meta} from '@storybook/react';

import mdxDoc from './MigrationInstall.mdx';

export default {
  title: 'Tokens/Migration Steps/1. Install and setup',
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
