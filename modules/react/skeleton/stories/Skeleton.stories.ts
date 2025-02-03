import {Meta} from '@storybook/react';

import mdxDoc from './Skeleton.mdx';

export {Basic} from './examples/Basic';
export {Color} from './examples/Color';
export {Header} from './examples/Header';
export {Shape} from './examples/Shape';
export {Simulation} from './examples/Simulation';
export {Text} from './examples/Text';

export default {
  title: 'Components/Indicators/Skeleton',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
