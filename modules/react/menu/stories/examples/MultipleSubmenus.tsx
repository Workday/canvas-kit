import React from 'react';

import {Menu} from '@workday/canvas-kit-react/menu';
import {BodyText} from '@workday/canvas-kit-react/text';

export const MultipleSubmenus = () => {
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
            <Menu.Item data-id="first-item">First Item (Standard)</Menu.Item>

            {/* First Submenu */}
            <Menu.Submenu id="second-menu">
              <Menu.Submenu.TargetItem data-id="second-item">
                Second Item (Submenu 1)
              </Menu.Submenu.TargetItem>
              <Menu.Submenu.Popper>
                <Menu.Submenu.Card>
                  <Menu.Submenu.List>
                    <Menu.Submenu.Item data-id="sub1-item1">Sub 1 - Item 1</Menu.Submenu.Item>
                    <Menu.Submenu.Item data-id="sub1-item2">Sub 1 - Item 2</Menu.Submenu.Item>
                    <Menu.Submenu.Item data-id="sub1-item3">Sub 1 - Item 3</Menu.Submenu.Item>
                  </Menu.Submenu.List>
                </Menu.Submenu.Card>
              </Menu.Submenu.Popper>
            </Menu.Submenu>

            <Menu.Divider />

            {/* Second Submenu */}
            <Menu.Submenu id="third-menu">
              <Menu.Submenu.TargetItem data-id="third-item">
                Third Item (Submenu 2)
              </Menu.Submenu.TargetItem>
              <Menu.Submenu.Popper>
                <Menu.Submenu.Card>
                  <Menu.Submenu.List>
                    <Menu.Submenu.Item data-id="sub2-item1">Sub 2 - Item 1</Menu.Submenu.Item>
                    <Menu.Submenu.Item data-id="sub2-item2">Sub 2 - Item 2</Menu.Submenu.Item>
                  </Menu.Submenu.List>
                </Menu.Submenu.Card>
              </Menu.Submenu.Popper>
            </Menu.Submenu>

            {/* Third Submenu */}
            <Menu.Submenu id="fourth-menu">
              <Menu.Submenu.TargetItem data-id="fourth-item">
                Fourth Item (Submenu 3)
              </Menu.Submenu.TargetItem>
              <Menu.Submenu.Popper>
                <Menu.Submenu.Card>
                  <Menu.Submenu.List>
                    <Menu.Submenu.Item data-id="sub3-item1">Sub 3 - Alpha</Menu.Submenu.Item>
                    <Menu.Submenu.Item data-id="sub3-item2">Sub 3 - Beta</Menu.Submenu.Item>
                    <Menu.Submenu.Item data-id="sub3-item3">Sub 3 - Gamma</Menu.Submenu.Item>
                  </Menu.Submenu.List>
                </Menu.Submenu.Card>
              </Menu.Submenu.Popper>
            </Menu.Submenu>

            <Menu.Divider />

            <Menu.Item data-id="fifth-item">
              Fifth Item (with a really, really, really long label)
            </Menu.Item>
            <Menu.Item aria-disabled data-id="sixth-item">
              Sixth Item (Disabled)
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
