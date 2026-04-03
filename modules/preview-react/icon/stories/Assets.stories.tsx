import {Meta} from '@storybook/react';

import mdxDoc from './Assets.mdx';
import {SystemIconList as SystemIconListExample} from './examples/IconList';
import {Overview} from './examples/Overview';

export default {
  title: 'Assets/Preview/Icons',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
    },
  },
} as Meta;

export const Docs = {
  render: Overview,
};

export const SystemIconList = {
  render: SystemIconListExample,
};
