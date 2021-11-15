/// <reference path="../../../../typings.d.ts" />
import React from 'react';

import {CanvasProvider, ContentDirection, StaticStates} from '@workday/canvas-kit-react/common';
import {saveAsIcon} from '@workday/canvas-system-icons-web';

import {customColorTheme, withSnapshotsEnabled} from '../../../../utils/storybook';

// unreleased path
import {Menu} from '../lib/menu';
import {HStack} from '@workday/canvas-kit-labs-react';

const fontDelay = 150; // best guess for the font delay to prevent incorrect Chromatic regressions

export default {
  title: 'Testing/React/Unreleased/Menu',
  component: Menu,
  parameters: {
    chromatic: {
      delay: fontDelay,
    },
  },
};

const AllStates = () => (
  <Menu initialSelectedKeys={['selected']}>
    <Menu.Card style={{animation: 'none', width: 300}}>
      <Menu.List>
        <Menu.Item>Normal Item</Menu.Item>
        <Menu.Item aria-selected={true}>Selected Item</Menu.Item>
        <Menu.Item className="focus">Focused Item</Menu.Item>
        <Menu.Item className="hover">Hovered Item</Menu.Item>
        <Menu.Item className="focus hover">Focused & Hovered Item</Menu.Item>
        <Menu.Item aria-disabled={true}>Disabled Item</Menu.Item>
        <Menu.Item>Wrapped Text Item Wrapped Text Item Wrapped Text Item</Menu.Item>
        <Menu.Item hasIcon>
          <Menu.Item.Icon icon={saveAsIcon} />
          <Menu.Item.Text>Item with Icon</Menu.Item.Text>
        </Menu.Item>
        <Menu.Item hasIcon aria-selected={true}>
          <Menu.Item.Icon icon={saveAsIcon} />
          <Menu.Item.Text>Item with Icon (selected)</Menu.Item.Text>
        </Menu.Item>
        <Menu.Item hasIcon className="focus">
          <Menu.Item.Icon icon={saveAsIcon} />
          <Menu.Item.Text>Item with Icon (focused)</Menu.Item.Text>
        </Menu.Item>
        <Menu.Item hasIcon className="hover">
          <Menu.Item.Icon icon={saveAsIcon} />
          <Menu.Item.Text>Item with Icon (hovered)</Menu.Item.Text>
        </Menu.Item>
        <Menu.Item hasIcon className="focus hover">
          <Menu.Item.Icon icon={saveAsIcon} />
          <Menu.Item.Text>Item with Icon (focus & hovered)</Menu.Item.Text>
        </Menu.Item>
        <Menu.Item hasIcon>
          <Menu.Item.Icon icon={saveAsIcon} />
          <Menu.Item.Text>Item with Icon Wrapped Text Wrapped Text</Menu.Item.Text>
        </Menu.Item>
      </Menu.List>
    </Menu.Card>
  </Menu>
);

export const TabStates = withSnapshotsEnabled(() => {
  return (
    <StaticStates>
      <HStack spacing="xs">
        <div>
          <h3>Normal</h3>
          <AllStates />
        </div>
        <div>
          <h3>Themed</h3>
          <CanvasProvider theme={{canvas: customColorTheme}}>
            <AllStates />
          </CanvasProvider>
        </div>
        <div>
          <h3>RTL</h3>
          <CanvasProvider theme={{canvas: {direction: ContentDirection.RTL}}}>
            <AllStates />
          </CanvasProvider>
        </div>
      </HStack>
    </StaticStates>
  );
});
