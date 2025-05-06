import {Meta} from '@storybook/react';
import mdxDoc from './Common.mdx';

import {BaseExample} from './examples/BaseExample';

export default {
  title: 'Hooks and Utilities/Common',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta;

export const Base = {
  render: BaseExample,
};
