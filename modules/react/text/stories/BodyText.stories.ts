import {Meta} from '@storybook/react';

import mdxDoc from './BodyText.mdx';

export {Basic} from './examples/BodyText/Basic';

export default {
  title: 'Components/Text/Body Text',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
