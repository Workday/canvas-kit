import {Meta} from '@storybook/react';

import mdxDoc from './Expandable.mdx';

export {StartIcon} from './examples/StartIcon';
export {EndIcon} from './examples/EndIcon';
export {Avatar} from './examples/Avatar';
export {Depth} from './examples/Depth';
export {RTL} from './examples/RTL';
export {LongTitle} from './examples/LongTitle';
export {HoistedModel} from './examples/HoistedModel';

export default {
  title: 'Labs/Expandable',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
