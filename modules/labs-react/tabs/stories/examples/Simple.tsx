import React from 'react';
import {space} from '@workday/canvas-kit-react/core';

import {Tabs} from '@workday/canvas-kit-labs-react/tabs';

export const Simple = () => {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Item>First Tab</Tabs.Item>
        <Tabs.Item>Second Tab</Tabs.Item>
        <Tabs.Item>Third Tab</Tabs.Item>
        <Tabs.Item>Fourth Tab</Tabs.Item>
        <Tabs.Item>Fifth Tab</Tabs.Item>
      </Tabs.List>
      <div style={{marginTop: space.m}}>
        <Tabs.Panel>Contents of First Tab</Tabs.Panel>
        <Tabs.Panel>Contents of Second Tab</Tabs.Panel>
        <Tabs.Panel>Contents of Third Tab</Tabs.Panel>
        <Tabs.Panel>Contents of Fourth Tab</Tabs.Panel>
        <Tabs.Panel>Contents of Fifth Tab</Tabs.Panel>
      </div>
    </Tabs>
  );
};
