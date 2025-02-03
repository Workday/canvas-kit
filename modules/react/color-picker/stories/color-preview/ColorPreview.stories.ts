import {Meta} from '@storybook/react';

import mdxDoc from './ColorPreview.mdx';

export {Basic} from './examples/Basic';
export {LabelPosition} from './examples/LabelPosition';
export {RefForwarding} from './examples/RefForwarding';

export default {
  title: 'Components/Inputs/Color Picker/Color Preview',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
