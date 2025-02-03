import {Meta} from '@storybook/react';

import mdxDoc from './LoadingSparkles.mdx';

export {Basic} from './examples/Basic';
export {RTL} from './examples/RTL';

export default {
  title: 'Preview/Loading Sparkles',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
