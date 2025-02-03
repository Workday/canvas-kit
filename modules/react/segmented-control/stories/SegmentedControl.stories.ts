import {Meta} from '@storybook/react';

import mdxDoc from './SegmentedControl.mdx';

export {Basic} from './examples/Basic';

export default {
  title: 'Components/Buttons/Segmented Control',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
