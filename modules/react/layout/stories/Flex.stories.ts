import {Meta} from '@storybook/react';

import mdxDoc from './Flex.mdx';

export {Basic} from './examples/Flex/Basic';

export default {
  title: 'Components/Layout/Flex',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
