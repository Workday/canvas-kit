import {Meta} from '@storybook/react';

import mdxDoc from './Subtext.mdx';

export {Basic} from './examples/Subtext/Basic';

export default {
  title: 'Components/Text/Subtext',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
