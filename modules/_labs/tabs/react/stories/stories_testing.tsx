/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from 'react';

import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {withSnapshotsEnabled} from '../../../../../utils/storybook';

import {spacing} from '@workday/canvas-kit-react-core';
import {Tabs, useTabsModel} from '@workday/canvas-kit-labs-react-tabs';

import {Simple} from './examples/Simple';
import {RightToLeft} from './examples/RightToLeft';

const fontDelay = 150; // best guess for the font delay to prevent incorrect Chromatic regressions

export default {
  title: 'Testing/React/Labs/Tabs',
  component: Tabs,
  parameters: {
    chromatic: {
      delay: fontDelay,
    },
  },
};

export const TabStates = withSnapshotsEnabled(() => {
  const [shouldRender, setShouldRender] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setShouldRender(true);
    }, fontDelay);
  }, []);

  const model = useTabsModel();

  return shouldRender ? (
    <StaticStates>
      <Tabs initialTab="second">
        <Tabs.List>
          <Tabs.Item>Default</Tabs.Item>
          <Tabs.Item name="second">Active</Tabs.Item>
          <Tabs.Item className="focus">Focus</Tabs.Item>
          <Tabs.Item className="hover">Hover</Tabs.Item>
          <Tabs.Item disabled>Disabled</Tabs.Item>
        </Tabs.List>
        <div css={{marginTop: spacing.m}}>
          <Tabs.Panel name="second">Visual states of the Tab items</Tabs.Panel>
        </div>
      </Tabs>
    </StaticStates>
  ) : (
    <Tabs.Item model={model}>Default</Tabs.Item> // Render default tab right away to force font loading so that by the time the story loads, the font will be known
  );
});

export const Bidirectionality = withSnapshotsEnabled(() => {
  return (
    <>
      <h3>Left-to-right</h3>
      <div>
        <Simple />
      </div>
      <br />
      <h3>Right-to-left</h3>
      <div>
        <RightToLeft />
      </div>
    </>
  );
});
