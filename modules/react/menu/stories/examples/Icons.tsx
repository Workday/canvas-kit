import React from 'react';
import {
  setupIcon,
  uploadCloudIcon,
  userIcon,
  taskContactIcon,
} from '@workday/canvas-system-icons-web';
import {Menu} from '@workday/canvas-kit-react/menu';

export const Icons = () => {
  return (
    <Menu>
      <Menu.Card>
        <Menu.List>
          <Menu.Item>
            <Menu.Item.Icon icon={uploadCloudIcon} />
            <Menu.Item.Text>First Item</Menu.Item.Text>
          </Menu.Item>
          <Menu.Item>
            <Menu.Item.Icon icon={setupIcon} />
            <Menu.Item.Text>Second Item (with a really really really long label)</Menu.Item.Text>
          </Menu.Item>
          <Menu.Item aria-disabled>
            <Menu.Item.Icon icon={uploadCloudIcon} />
            <Menu.Item.Text>Third Item</Menu.Item.Text>
            <Menu.Item.Icon icon={taskContactIcon} />
          </Menu.Item>
          <Menu.Item>
            <Menu.Item.Icon icon={userIcon} />
            <Menu.Item.Text></Menu.Item.Text>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item>
            <Menu.Item.Icon icon={taskContactIcon} />
            <Menu.Item.Text>Fifth Item (with divider)</Menu.Item.Text>
          </Menu.Item>
        </Menu.List>
      </Menu.Card>
    </Menu>
  );
};
