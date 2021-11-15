import React from 'react';

import {space} from '@workday/canvas-kit-react/tokens';
import {starIcon, searchIcon, selectIcon, shareIcon} from '@workday/canvas-system-icons-web';
import {Tabs} from '@workday/canvas-kit-react/tabs';

export const Icons = () => {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Item hasIcon>
          <Tabs.Item.Icon icon={starIcon} />
          <Tabs.Item.Text>First Tab</Tabs.Item.Text>
        </Tabs.Item>
        <Tabs.Item hasIcon>
          <Tabs.Item.Icon icon={searchIcon} />
          <Tabs.Item.Text>Second Tab</Tabs.Item.Text>
        </Tabs.Item>
        <Tabs.Item hasIcon>
          <Tabs.Item.Icon icon={selectIcon} />
          <Tabs.Item.Text>Third Tab</Tabs.Item.Text>
        </Tabs.Item>
        <Tabs.Item hasIcon>
          <Tabs.Item.Icon icon={shareIcon} />
          <Tabs.Item.Text>Fourth Tab</Tabs.Item.Text>
        </Tabs.Item>
      </Tabs.List>
      <div style={{marginTop: space.m}}>
        <Tabs.Panel>Contents of First Tab</Tabs.Panel>
        <Tabs.Panel>Contents of Second Tab</Tabs.Panel>
        <Tabs.Panel>Contents of Third Tab</Tabs.Panel>
        <Tabs.Panel>Contents of Fourth Tab</Tabs.Panel>
      </div>
    </Tabs>
  );
};
