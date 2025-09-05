import React from 'react';
import {
  setupIcon,
  uploadCloudIcon,
  userIcon,
  taskContactIcon,
} from '@workday/canvas-system-icons-web';
import {Menu} from '@workday/canvas-kit-react/menu';
import {BodyText} from '@workday/canvas-kit-react/text';

export const Icons = () => {
  const [selected, setSelected] = React.useState('');
  return (
    <Menu onSelect={data => setSelected(data.id)}>
      <Menu.Target>Open Menu</Menu.Target>
      <Menu.Popper>
        <Menu.Card>
          <Menu.List>
            <Menu.Item data-text="First Item">
              <Menu.Item.Icon icon={uploadCloudIcon} />
              <Menu.Item.Text>First Item</Menu.Item.Text>
            </Menu.Item>
            <Menu.Item data-text="Second Item (with a really really really long label)">
              <Menu.Item.Icon icon={setupIcon} />
              <Menu.Item.Text>Second Item (with a really really really long label)</Menu.Item.Text>
            </Menu.Item>
            <Menu.Item aria-disabled data-text="Third Item">
              <Menu.Item.Icon icon={uploadCloudIcon} />
              <Menu.Item.Text>Third Item</Menu.Item.Text>
              <Menu.Item.Icon icon={taskContactIcon} />
            </Menu.Item>
            <Menu.Item data-text="User">
              <Menu.Item.Icon icon={userIcon} />
              <Menu.Item.Text>User</Menu.Item.Text>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item data-text="Fifth Item (with divider)">
              <Menu.Item.Icon icon={taskContactIcon} />
              <Menu.Item.Text>Fifth Item (with divider)</Menu.Item.Text>
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
