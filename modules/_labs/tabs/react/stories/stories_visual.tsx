/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';

import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {withSnapshotsEnabled} from '../../../../../utils/storybook';

import {spacing} from '@workday/canvas-kit-react-core';
import {Tabs, TabList, Tab} from '@workday/canvas-kit-labs-react-tabs';

export default withSnapshotsEnabled({
  title: 'Testing|React/Labs/Tabs',
  component: Tabs,
});

export const TabStates = () => (
  <StaticStates
    css={{
      '[role=tablist] div': {
        transition: 'none', // don't animate the indicator
      },
    }}
  >
    <Tabs initialTab="second">
      <Tabs.List>
        <Tabs.Item className="focus">Focus</Tabs.Item>
        <Tabs.Item name="second">Active</Tabs.Item>
        <Tabs.Item className="hover">Hover</Tabs.Item>
      </Tabs.List>
      <div css={{marginTop: spacing.m}}>
        <Tabs.Panel name="second">Visual states of the Tab items</Tabs.Panel>
      </div>
    </Tabs>
  </StaticStates>
);
