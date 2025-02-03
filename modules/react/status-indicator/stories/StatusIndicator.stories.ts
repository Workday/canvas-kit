import {Meta} from '@storybook/react';

import mdxDoc from './StatusIndicator.mdx';

export {Basic} from './examples/Basic';
export {Icon} from './examples/Icon';
export {Emphasis} from './examples/Emphasis';
export {MaxWidth} from './examples/MaxWidth';

export default {
  title: 'Components/Indicators/Status Indicator',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
