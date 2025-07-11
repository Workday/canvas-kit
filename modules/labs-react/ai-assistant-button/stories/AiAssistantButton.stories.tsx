import {Meta} from '@storybook/react';
import mdxDoc from './AiAssistantButton.mdx';

import {Basic as BasicExample} from './examples/Basic';
import {Inverse as InverseExample} from './examples/Inverse';
export default {
  title: 'Labs/Ai Assistant Button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta;

export const Basic = {
  render: BasicExample,
};

export const Inverse = {
  render: InverseExample,
};
