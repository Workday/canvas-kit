import {Meta} from '@storybook/react';

import mdxDoc from './SegmentedControl.mdx';

export {Basic} from './examples/Basic';
export {Disabled} from './examples/Disabled';
export {TextAndIcon} from './examples/TextAndIcon';
export {TextOnly} from './examples/TextOnly';
export {Sizes} from './examples/Sizes';
export {Vertical} from './examples/Vertical';
export {RTL} from './examples/RTL';
export {Dynamic} from './examples/Dynamic';

export default {
  title: 'Preview/Segmented Control',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
