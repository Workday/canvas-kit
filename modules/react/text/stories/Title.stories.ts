import {Meta} from '@storybook/react';

import mdxDoc from './Title.mdx';

export {Basic} from './examples/Title/Basic';

export default {
  title: 'Components/Text/Title',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
