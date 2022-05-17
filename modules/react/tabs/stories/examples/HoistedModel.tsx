import React from 'react';
import {space} from '@workday/canvas-kit-react/tokens';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Tabs, useTabsModel} from '@workday/canvas-kit-react/tabs';

export const HoistedModel = () => {
  const model = useTabsModel({
    onSelect(data, prevState) {
      console.log('Selected Tab', data.id, prevState);
    },
  });

  return (
    <>
      <Tabs model={model}>
        <Tabs.List>
          <Tabs.Item data-id="first">First Tab</Tabs.Item>
          <Tabs.Item data-id="second">Second Tab</Tabs.Item>
          <Tabs.Item data-id="third">Third Tab</Tabs.Item>
        </Tabs.List>
        <div style={{marginTop: space.m}}>
          <Tabs.Panel data-id="first">Contents of First Tab</Tabs.Panel>
          <Tabs.Panel data-id="second">Contents of Second Tab</Tabs.Panel>
          <Tabs.Panel data-id="third">Contents of Third Tab</Tabs.Panel>
        </div>
      </Tabs>
      <SecondaryButton
        onClick={() => {
          model.events.select({id: 'third'});
        }}
      >
        Select Third Tab
      </SecondaryButton>
    </>
  );
};
