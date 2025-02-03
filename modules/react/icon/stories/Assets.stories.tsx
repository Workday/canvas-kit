import {Meta} from '@storybook/react';

import mdxDoc from './Assets.mdx';

export {AccentIconList} from './examples/AccentIconList';
export {AppletIconList} from './examples/AppletIconList';
export {SystemIconList} from './examples/IconList';
export {Overview} from './examples/Overview';

export default {
  title: 'Assets/Icons',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} satisfies Meta;
