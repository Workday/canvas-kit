import React from 'react';
import {spacing} from '@workday/canvas-kit-react-core';

import {Tabs} from '@workday/canvas-kit-labs-react-tabs';

export const DisabledTab = () => {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Item>First Tab</Tabs.Item>
        <Tabs.Item disabled>Disabled Tab</Tabs.Item>
        <Tabs.Item>Third Tab</Tabs.Item>
      </Tabs.List>
      <div style={{marginTop: spacing.m}}>
        <Tabs.Panel>Contents of First Tab</Tabs.Panel>
        <Tabs.Panel>Contents of Disabled Tab</Tabs.Panel>
        <Tabs.Panel>Contents of Third Tab</Tabs.Panel>
      </div>
    </Tabs>
  );
};
