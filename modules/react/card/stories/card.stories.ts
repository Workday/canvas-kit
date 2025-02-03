import {Meta} from '@storybook/react';

import mdxDoc from './card.mdx';

export {Basic} from './examples/Basic';

export default {
  title: 'Components/Containers/Card',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
