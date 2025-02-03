import {Meta} from '@storybook/react';

import mdxDoc from './Divider.mdx';

export {Basic} from './examples/Basic';
export {CustomSpace} from './examples/CustomSpace';

export default {
  title: 'Preview/Divider',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
