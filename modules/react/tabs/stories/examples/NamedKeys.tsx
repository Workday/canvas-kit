import React from 'react';
import {space} from '@workday/canvas-kit-react/tokens';

import {Tabs} from '@workday/canvas-kit-react/tabs';

export const NamedKeys = () => {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Item name="first">First Tab</Tabs.Item>
        <Tabs.Item name="second">Second Tab</Tabs.Item>
        <Tabs.Item name="third">Third Tab</Tabs.Item>
        <Tabs.Item name="fourth">Fourth Tab</Tabs.Item>
        <Tabs.Item name="fifth">Fifth Tab</Tabs.Item>
      </Tabs.List>
      <div style={{marginTop: space.m}}>
        <Tabs.Panel name="first">Contents of First Tab</Tabs.Panel>
        <Tabs.Panel name="second">Contents of Second Tab</Tabs.Panel>
        <Tabs.Panel name="third">Contents of Third Tab</Tabs.Panel>
        <Tabs.Panel name="fourth">Contents of Fourth Tab</Tabs.Panel>
        <Tabs.Panel name="fifth">Contents of Fifth Tab</Tabs.Panel>
      </div>
    </Tabs>
  );
};
