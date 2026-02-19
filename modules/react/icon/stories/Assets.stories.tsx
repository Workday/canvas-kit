import {Meta} from '@storybook/react';

import mdxDoc from './Assets.mdx';
import {AccentIconList as AccentIconListExample} from './examples/AccentIconList';
import {AppletIconList as AppletIconListExample} from './examples/AppletIconList';
import {SystemIconList as SystemIconListExample} from './examples/IconList';
import {Overview} from './examples/Overview';

export default {
  title: 'Assets/Icons',
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
export const AppletIconList = {
  render: AppletIconListExample,
};
export const AccentIconList = {
  render: AccentIconListExample,
};
