import React from 'react';
import {spacing} from '@workday/canvas-kit-react/core';
import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react/common';

import {Tabs} from '@workday/canvas-kit-labs-react/tabs';

export const RightToLeft = () => {
  return (
    <CanvasProvider theme={{canvas: {direction: ContentDirection.RTL}}}>
      <Tabs>
        <Tabs.List>
          <Tabs.Item>ראשון</Tabs.Item>
          <Tabs.Item>שְׁנִיָה</Tabs.Item>
          <Tabs.Item>שְׁלִישִׁי</Tabs.Item>
          <Tabs.Item>רביעי</Tabs.Item>
          <Tabs.Item>חמישי</Tabs.Item>
        </Tabs.List>
        <div style={{marginTop: spacing.m}}>
          <Tabs.Panel>תוכן הראשון</Tabs.Panel>
          <Tabs.Panel>תוכן השני</Tabs.Panel>
          <Tabs.Panel>תוכן השלישי</Tabs.Panel>
          <Tabs.Panel>תוכן הרביעי</Tabs.Panel>
          <Tabs.Panel>תוכן החמישי</Tabs.Panel>
        </div>
      </Tabs>
    </CanvasProvider>
  );
};
