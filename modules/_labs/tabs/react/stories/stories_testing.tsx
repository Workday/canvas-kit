/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from 'react';

import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {withSnapshotsEnabled} from '../../../../../utils/storybook';

import {spacing} from '@workday/canvas-kit-react-core';
import {Tabs} from '@workday/canvas-kit-labs-react-tabs';
import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react-common';

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

export const Simple = () => (
  <Tabs>
    <Tabs.List>
      <Tabs.Item>First Tab</Tabs.Item>
      <Tabs.Item>Second Tab</Tabs.Item>
      <Tabs.Item>Third Tab</Tabs.Item>
      <Tabs.Item>Fourth Tab</Tabs.Item>
      <Tabs.Item>Fifth Tab</Tabs.Item>
    </Tabs.List>
    <div css={{marginTop: spacing.m}}>
      <Tabs.Panel>Contents of First Tab</Tabs.Panel>
      <Tabs.Panel>Contents of Second Tab</Tabs.Panel>
      <Tabs.Panel>Contents of Third Tab</Tabs.Panel>
      <Tabs.Panel>Contents of Fourth Tab</Tabs.Panel>
      <Tabs.Panel>Contents of Fifth Tab</Tabs.Panel>
    </div>
  </Tabs>
);

export const NamedKeys = () => (
  <Tabs>
    <Tabs.List>
      <Tabs.Item name="first">First Tab</Tabs.Item>
      <Tabs.Item name="second">Second Tab</Tabs.Item>
      <Tabs.Item name="third">Third Tab</Tabs.Item>
      <Tabs.Item name="fourth">Fourth Tab</Tabs.Item>
      <Tabs.Item name="fifth">Fifth Tab</Tabs.Item>
    </Tabs.List>
    <div css={{marginTop: spacing.m}}>
      <Tabs.Panel name="first">Contents of First Tab</Tabs.Panel>
      <Tabs.Panel name="second">Contents of Second Tab</Tabs.Panel>
      <Tabs.Panel name="third">Contents of Third Tab</Tabs.Panel>
      <Tabs.Panel name="fourth">Contents of Fourth Tab</Tabs.Panel>
      <Tabs.Panel name="fifth">Contents of Fifth Tab</Tabs.Panel>
    </div>
  </Tabs>
);

export const TabStates = withSnapshotsEnabled(() => {
  const [shouldRender, setShouldRender] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setShouldRender(true);
    }, fontDelay);
  }, []);

  return shouldRender ? (
    <StaticStates>
      <Tabs
        initialTab="second"
        css={{
          div: {transition: 'none' /* don't animate the indicator */},
        }}
      >
        <Tabs.List>
          <Tabs.Item>Default</Tabs.Item>
          <Tabs.Item name="second">Active</Tabs.Item>
          <Tabs.Item className="focus">Focus</Tabs.Item>
          <Tabs.Item className="hover">Hover</Tabs.Item>
        </Tabs.List>
        <div css={{marginTop: spacing.m}}>
          <Tabs.Panel name="second">Visual states of the Tab items</Tabs.Panel>
        </div>
      </Tabs>
    </StaticStates>
  ) : (
    <Tabs.Item>Default</Tabs.Item> // Render default tab right away to force font loading so that by the time the story loads, the font will be known
  );
});

export const Bidirectionality = withSnapshotsEnabled(() => {
  const tabs = (
    <Tabs>
      <Tabs.List>
        <Tabs.Item>First Tab</Tabs.Item>
        <Tabs.Item>Second Tab</Tabs.Item>
        <Tabs.Item>Third Tab</Tabs.Item>
      </Tabs.List>
      <Tabs.Panel css={{marginTop: spacing.m}}>First Tab Content</Tabs.Panel>
    </Tabs>
  );

  return (
    <>
      <h3>Left-to-right</h3>
      <div>{tabs}</div>
      <br />
      <h3>Right-to-left</h3>
      <CanvasProvider theme={{canvas: {direction: ContentDirection.RTL}}}>{tabs}</CanvasProvider>
    </>
  );
});
