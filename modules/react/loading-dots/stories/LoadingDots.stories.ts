import {Meta} from '@storybook/react';

import mdxDoc from './LoadingDots.mdx';

export {Basic} from './examples/Basic';
export {RTL} from './examples/RTL';
export {Accessible} from './examples/Accessible';
export {CustomShape} from './examples/CustomShape';
export {CustomColorAndAnimation} from './examples/CustomColorAndAnimation';

export default {
  title: 'Components/Indicators/Loading Dots',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
