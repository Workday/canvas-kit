import {Meta} from '@storybook/react';
import {ExampleCodeBlock} from '../../../../utils/storybook';

import mdxDoc from './Assets.mdx';

import {SystemIconList as SystemIconListExample} from './examples/IconList';
import {AppletIconList as AppletIconListExample} from './examples/AppletIconList';
import {AccentIconList as AccentIconListExample} from './examples/AccentIconList';
import {OverviewExample} from './examples/Overview';

export default {
  title: 'Assets/Icons',
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdxDoc,
      components: {
        ExampleCodeBlock,
      },
    },
  },
} as Meta;

export const Overview = {
  render: OverviewExample,
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
