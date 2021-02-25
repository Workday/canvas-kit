import React from 'react';
import {spacing} from '@workday/canvas-kit-react-core';

import {Tabs} from '@workday/canvas-kit-labs-react-tabs';

export const AlternativeTabStop = () => {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Item>First Tab</Tabs.Item>
        <Tabs.Item>Second Tab</Tabs.Item>
        <Tabs.Item>Third Tab</Tabs.Item>
      </Tabs.List>
      <div style={{marginTop: spacing.m}}>
        <Tabs.Panel tabIndex={undefined}>
          <button>Focusable button</button>
          <br />
          Contents of First Tab. The tab panel is no longer focusable, but the button is. It may be
          desirable to disable focus on the tab panel and allow focus to flow into the tab panel to
          the first focusable element.
        </Tabs.Panel>
        <Tabs.Panel>Contents of Second Tab</Tabs.Panel>
        <Tabs.Panel>Contents of Third Tab</Tabs.Panel>
      </div>
    </Tabs>
  );
};
