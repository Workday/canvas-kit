import React from 'react';
import {chevronRightSmallIcon} from '@workday/canvas-system-icons-web';

import {Menu} from '@workday/canvas-kit-react/menu';
import {BodyText} from '@workday/canvas-kit-react/text';

export const Nested = () => {
  const [selected, setSelected] = React.useState('');
  return (
    <Menu
      id="first-menu"
      onSelect={data => {
        setSelected(data.id);
      }}
    >
      <Menu.Target>Open Menu</Menu.Target>
      <Menu.Popper>
        <Menu.Card>
          <Menu.List>
            <Menu.Item data-id="first-item">First Item</Menu.Item>
            <Menu.SubMenu id="second-menu">
              <Menu.SubMenu.TargetItem data-id="second-item">Second Item</Menu.SubMenu.TargetItem>
              <Menu.SubMenu.Popper>
                <Menu.SubMenu.Card>
                  <Menu.SubMenu.List>
                    <Menu.SubMenu.Item>First Sub Item</Menu.SubMenu.Item>
                    <Menu.SubMenu id="third-submenu">
                      <Menu.SubMenu.TargetItem data-id="second-sub-item">
                        Second Sub Item
                      </Menu.SubMenu.TargetItem>
                      <Menu.SubMenu.Popper>
                        <Menu.SubMenu.Card>
                          <Menu.SubMenu.List>
                            <Menu.SubMenu.Item data-id="first-sub-sub-item">
                              First Sub Sub Item
                            </Menu.SubMenu.Item>
                            <Menu.SubMenu.Item data-id="second-sub-sub-item">
                              Second Sub Sub Item
                            </Menu.SubMenu.Item>
                            <Menu.SubMenu.Item data-id="third-sub-sub-item">
                              Third Sub Sub Item
                            </Menu.SubMenu.Item>
                            <Menu.SubMenu.Item data-id="fourth-sub-sub-item">
                              Fourth Sub Sub Item
                            </Menu.SubMenu.Item>
                          </Menu.SubMenu.List>
                        </Menu.SubMenu.Card>
                      </Menu.SubMenu.Popper>
                    </Menu.SubMenu>
                    <Menu.SubMenu.Item data-id="third-sub-item">Third Sub Item</Menu.SubMenu.Item>
                    <Menu.SubMenu.Item data-id="fourth-sub-item">Fourth Sub Item</Menu.SubMenu.Item>
                  </Menu.SubMenu.List>
                </Menu.SubMenu.Card>
              </Menu.SubMenu.Popper>
            </Menu.SubMenu>
            <Menu.Divider />
            <Menu.Item data-id="third-item">
              Third Item (with a really, really, really long label)
            </Menu.Item>
            <Menu.Item aria-disabled data-id="fourth-item">
              Fourth Item
            </Menu.Item>
          </Menu.List>
        </Menu.Card>
      </Menu.Popper>
      <BodyText size="small" marginTop="s">
        Selected: <span data-testid="output">{selected}</span>
      </BodyText>
    </Menu>
  );
};
