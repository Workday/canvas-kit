import {Meta} from '@storybook/react';

import mdxDoc from './LabelText.mdx';

export {Basic} from './examples/LabelText/Basic';
export {Cursor} from './examples/LabelText/Cursor';
export {Disabled} from './examples/LabelText/Disabled';

export default {
  title: 'Components/Text/Label Text',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
