import {Meta} from '@storybook/react';

import mdxDoc from './Tooltip.mdx';

export {Default} from './examples/Default';
export {CustomContent} from './examples/CustomContent';
export {DelayedTooltip} from './examples/DelayedTooltip';
export {DescribeType} from './examples/DescribeType';
export {Muted} from './examples/Muted';
export {Placements} from './examples/Placements';
export {Ellipsis} from './examples/Ellipsis';
export {LineClamp} from './examples/LineClamp';
export {UseTooltip} from './examples/UseTooltip';

export default {
  title: 'Components/Popups/Tooltip',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
