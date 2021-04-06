import React from 'react';
import {space} from '@workday/canvas-kit-react/core';

import {Tabs} from '@workday/canvas-kit-labs-react/tabs';

export const SinglePanel = () => {
  const [currentTab, setCurrentTab] = React.useState('second');

  const message = (
    <p>
      This example shows how to use a single tab panel. You must manually set the{' '}
      <code>hidden</code>, <code>aria-controls</code>, and <code>id</code> attributes of Tab item
      and Tab panel components
    </p>
  );

  const contents = {
    first: <div>Contents of First Tab {message}</div>,
    second: <div>Contents of Second Tab {message}</div>,
    third: <div>Contents of Third Tab {message}</div>,
  } as const;

  return (
    <Tabs
      initialTab={currentTab}
      shouldActivate={({data, state}) => true}
      onActivate={({data}) => setCurrentTab(data.tab)}
    >
      <Tabs.List>
        <Tabs.Item name="first" aria-controls="mytab-panel">
          First Tab
        </Tabs.Item>
        <Tabs.Item name="second" aria-controls="mytab-panel">
          Second Tab
        </Tabs.Item>
        <Tabs.Item name="third" aria-controls="mytab-panel">
          Third Tab
        </Tabs.Item>
      </Tabs.List>
      <Tabs.Panel style={{marginTop: space.m}} hidden={undefined} id="mytab-panel">
        {contents[currentTab]}
      </Tabs.Panel>
    </Tabs>
  );
};
