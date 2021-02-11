import React from 'react';
import {spacing} from '@workday/canvas-kit-react-core';

import {Button} from '@workday/canvas-kit-react-button';
import {Tabs, useTabsModel} from '@workday/canvas-kit-labs-react-tabs';

export const HoistedModel = () => {
  const model = useTabsModel({
    onActivateTab({data, state}) {
      console.log('Activated Tab', data, state);
    },
  });

  return (
    <>
      <Tabs model={model}>
        <Tabs.List>
          <Tabs.Item name="first">First Tab</Tabs.Item>
          <Tabs.Item name="second">Second Tab</Tabs.Item>
          <Tabs.Item name="third">Third Tab</Tabs.Item>
        </Tabs.List>
        <div style={{marginTop: spacing.m}}>
          <Tabs.Panel name="first">Contents of First Tab</Tabs.Panel>
          <Tabs.Panel name="second">Contents of Second Tab</Tabs.Panel>
          <Tabs.Panel name="third">Contents of Third Tab</Tabs.Panel>
        </div>
      </Tabs>
      <Button
        onClick={() => {
          model.events.activateTab({tab: 'third'});
        }}
      >
        Activate third tab
      </Button>
    </>
  );
};
