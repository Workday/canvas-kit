import React from 'react';

import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';
// unreleased path
import {Menu} from '@workday/canvas-kit-react/menu';
import {StaticStates} from '@workday/canvas-kit-react/testing';
import {saveAsIcon} from '@workday/canvas-system-icons-web';
import {base} from '@workday/canvas-tokens-web';

import {customColorTheme} from '../../../../utils/storybook';

const fontDelay = 150; // best guess for the font delay to prevent incorrect Chromatic regressions

export default {
  title: 'Testing/Popups/Menu',
  component: Menu,
  parameters: {
    chromatic: {
      disable: false,
      delay: fontDelay,
    },
  },
};

const AllStatesMenuItem = () => (
  <Menu initialSelectedIds={['selected']} initialCursorId="non-existent">
    <Menu.Card style={{animation: 'none', width: 300}}>
      <Menu.List>
        <Menu.Group title="Group Heading One">
          <Menu.Item>Normal Item</Menu.Item>
          <Menu.Item className="focus">Focused Item</Menu.Item>
          <Menu.Item className="hover">Hovered Item</Menu.Item>
          <Menu.Item className="focus hover">Focused & Hovered Item</Menu.Item>
          <Menu.Item aria-disabled={true}>Disabled Item</Menu.Item>
          <Menu.Item>Wrapped Text Item Wrapped Text Item Wrapped Text Item</Menu.Item>
          <Menu.Item>
            Superlonglinethatshouldbreakonitsownwithouthavingtodoanythingspecial
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item>Menu item between dividers</Menu.Item>
          <Menu.Divider />
          <Menu.Item>
            <Menu.Item.Icon icon={saveAsIcon} />
            <Menu.Item.Text>Item with Icon</Menu.Item.Text>
          </Menu.Item>
          <Menu.Item className="focus">
            <Menu.Item.Icon icon={saveAsIcon} />
            <Menu.Item.Text>Item with Icon (focused)</Menu.Item.Text>
          </Menu.Item>
          <Menu.Item className="hover">
            <Menu.Item.Icon icon={saveAsIcon} />
            <Menu.Item.Text>Item with Icon (hovered)</Menu.Item.Text>
          </Menu.Item>
          <Menu.Item className="focus hover">
            <Menu.Item.Icon icon={saveAsIcon} />
            <Menu.Item.Text>Item with Icon (focus & hovered)</Menu.Item.Text>
          </Menu.Item>
          <Menu.Item>
            <Menu.Item.Icon icon={saveAsIcon} />
            <Menu.Item.Text>Item with Icon Wrapped Text Wrapped Text</Menu.Item.Text>
          </Menu.Item>
        </Menu.Group>
        <Menu.Group title="Group Heading Two">
          <Menu.Item>Menu item for group two</Menu.Item>
        </Menu.Group>
      </Menu.List>
    </Menu.Card>
  </Menu>
);

export const MenuItemStates = {
  render: () => {
    return (
      <StaticStates>
        <Flex gap="xs">
          <div>
            <h3>Normal</h3>
            <AllStatesMenuItem />
          </div>
          <div>
            <h3>Themed</h3>
            <CanvasProvider theme={{canvas: customColorTheme}}>
              <AllStatesMenuItem />
            </CanvasProvider>
          </div>
          <div>
            <h3>RTL</h3>
            <CanvasProvider dir="rtl">
              <AllStatesMenuItem />
            </CanvasProvider>
          </div>
        </Flex>
      </StaticStates>
    );
  },
};

export const MenuItemStatesCustomTheme = {
  render: () => {
    return (
      <StaticStates>
        <Flex gap="xs">
          <div>
            <h3>Custom Themed</h3>
            <CanvasProvider
              theme={{
                canvas: {
                  palette: {
                    primary: {main: base.blackberry600},
                    common: {focusOutline: base.blackPepper600},
                  },
                },
              }}
            >
              <AllStatesMenuItem />
            </CanvasProvider>
          </div>
        </Flex>
      </StaticStates>
    );
  },
};

const AllStatesMenuOption = () => (
  <Menu initialSelectedIds={['selected']} initialCursorId="non-existent">
    <Menu.Card style={{animation: 'none', width: 300}}>
      <Menu.List>
        <Menu.Option>Normal Item</Menu.Option>
        <Menu.Option className="focus">Focused Item</Menu.Option>
        <Menu.Option className="hover">Hovered Item</Menu.Option>
        <Menu.Option className="focus hover">Focused & Hovered Item</Menu.Option>
        <Menu.Option aria-disabled={true}>Disabled Item</Menu.Option>
        <Menu.Option aria-selected={true}>Selected Item</Menu.Option>
        <Menu.Option className="focus" aria-selected={true}>
          Focused & Selected Item
        </Menu.Option>
        <Menu.Option className="hover" aria-selected={true}>
          Hovered & Selected Item
        </Menu.Option>
        <Menu.Option className="focus hover" aria-selected={true}>
          Focused & Hovered & Selected Item
        </Menu.Option>
        <Menu.Option aria-disabled={true} aria-selected={true}>
          Disabled Selected Item
        </Menu.Option>
        <Menu.Option>Wrapped Text Item Wrapped Text Item Wrapped Text Item</Menu.Option>
        <Menu.Divider />
        <Menu.Option>Menu item between dividers</Menu.Option>
        <Menu.Divider />
        <Menu.Option>
          <Menu.Option.Icon icon={saveAsIcon} />
          <Menu.Option.Text>Item with Icon</Menu.Option.Text>
        </Menu.Option>
        <Menu.Option className="focus">
          <Menu.Option.Icon icon={saveAsIcon} />
          <Menu.Option.Text>Item with Icon (focused)</Menu.Option.Text>
        </Menu.Option>
        <Menu.Option className="hover">
          <Menu.Option.Icon icon={saveAsIcon} />
          <Menu.Option.Text>Item with Icon (hovered)</Menu.Option.Text>
        </Menu.Option>
        <Menu.Option className="focus hover">
          <Menu.Option.Icon icon={saveAsIcon} />
          <Menu.Option.Text>Item with Icon (focus & hovered)</Menu.Option.Text>
        </Menu.Option>
        <Menu.Option aria-selected={true}>
          <Menu.Option.Icon icon={saveAsIcon} />
          <Menu.Option.Text>Item with Icon (selected)</Menu.Option.Text>
        </Menu.Option>
        <Menu.Option aria-selected={true} className="focus">
          <Menu.Option.Icon icon={saveAsIcon} />
          <Menu.Option.Text>Item with Icon (focused & selected)</Menu.Option.Text>
        </Menu.Option>
        <Menu.Option aria-selected={true} className="hover">
          <Menu.Option.Icon icon={saveAsIcon} />
          <Menu.Option.Text>Item with Icon (hovered & selected)</Menu.Option.Text>
        </Menu.Option>
        <Menu.Option aria-selected={true} className="focus hover">
          <Menu.Option.Icon icon={saveAsIcon} />
          <Menu.Option.Text>Item with Icon (focus & hovered & selected)</Menu.Option.Text>
        </Menu.Option>
        <Menu.Option>
          <Menu.Option.Icon icon={saveAsIcon} />
          <Menu.Option.Text>Item with Icon Wrapped Text Wrapped Text</Menu.Option.Text>
        </Menu.Option>
      </Menu.List>
    </Menu.Card>
  </Menu>
);

const MenuWithGroups = () => {
  return (
    <Menu initialSelectedIds={['0']} initialCursorId="non-existent">
      <Menu.Card style={{animation: 'none', width: 300}}>
        <Menu.List>
          <Menu.Group title="Group Heading One">
            <Menu.Item className="focus">Group one, Item one (focused)</Menu.Item>
            <Menu.Item className="hover">Group one, Item two (hovered)</Menu.Item>
          </Menu.Group>
          <Menu.Group title="Group Heading Two">
            <Menu.Item>Group two, Item one</Menu.Item>
            <Menu.Item>Group two, Item two</Menu.Item>
          </Menu.Group>
        </Menu.List>
      </Menu.Card>
    </Menu>
  );
};

export const MenuOptionStates = {
  render: () => {
    return (
      <StaticStates>
        <Flex gap="xs">
          <div>
            <h3>Normal</h3>
            <AllStatesMenuOption />
          </div>
          <div>
            <h3>Themed</h3>
            <CanvasProvider theme={{canvas: customColorTheme}}>
              <AllStatesMenuOption />
            </CanvasProvider>
          </div>
          <div>
            <h3>RTL</h3>
            <CanvasProvider dir="rtl">
              <AllStatesMenuOption />
            </CanvasProvider>
          </div>
        </Flex>
      </StaticStates>
    );
  },
};

export const MenuGroups = {
  render: () => {
    return (
      <StaticStates>
        <Flex gap="xs">
          <div>
            <h3>LTR</h3>
            <MenuWithGroups />
          </div>
          <div>
            <h3>RTL</h3>
            <CanvasProvider dir="rtl">
              <MenuWithGroups />
            </CanvasProvider>
          </div>
        </Flex>
      </StaticStates>
    );
  },
};
