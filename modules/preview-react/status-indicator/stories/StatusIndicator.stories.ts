import {Meta} from '@storybook/react';

import mdxDoc from './StatusIndicator.mdx';

export {Basic} from './examples/Basic';
export {Emphasis} from './examples/Emphasis';
export {Icon} from './examples/Icon';
export {Overflow} from './examples/Overflow';
export {Variants} from './examples/Variants';

export default {
  title: 'Preview/Status Indicator',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
