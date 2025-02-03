import {Meta} from '@storybook/react';

import mdxDoc from './Heading.mdx';

export {Basic} from './examples/Heading/Basic';

export default {
  title: 'Components/Text/Heading',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
