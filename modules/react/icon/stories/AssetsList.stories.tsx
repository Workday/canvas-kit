import {Meta} from '@storybook/react';

import {AccentIconList as AccentIconListExample} from './examples/AccentIconList';
import {AppletIconList as AppletIconListExample} from './examples/AppletIconList';
import {ExpressiveIconList as ExpressiveIconListExample} from './examples/ExpressiveIconList';
import {SystemIconList as SystemIconListExample} from './examples/SystemIconList';

export default {
  title: 'Assets/Icons',
} as Meta;

export const SystemIconList = {
  render: SystemIconListExample,
};

export const ExpressiveIconList = {
  render: ExpressiveIconListExample,
};

export const AppletIconList = {
  name: 'Applet Icons List (Deprecated)',
  render: AppletIconListExample,
};
export const AccentIconList = {
  name: 'Accent Icons List (Deprecated)',
  render: AccentIconListExample,
};
