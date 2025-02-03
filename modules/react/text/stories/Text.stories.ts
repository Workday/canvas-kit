import {Meta} from '@storybook/react';

import mdxDoc from './Text.mdx';

export {Basic} from './examples/Text/Basic';
export {TypeLevel} from './examples/Text/TypeLevel';
export {Variant} from './examples/Text/Variant';

export default {
  title: 'Components/Text/Text',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
