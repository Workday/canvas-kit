import React from 'react';

import {Menu} from '@workday/canvas-kit-react/menu';
import {BodyText} from '@workday/canvas-kit-react/text';

export const Grouping = () => {
  const [selected, setSelected] = React.useState('');
  const [items, setItems] = React.useState([
    {
      type: 'group',
      label: 'First Group',
      children: [
        {
          id: '1',
          label: 'First Item',
        },
        {
          id: '2',
          label: 'Second Item',
        },
      ],
    },
    {
      type: 'group',
      label: 'Second Group',
      children: [
        {
          id: '3',
          label: 'Third Item',
        },
        {
          id: '4',
          label: 'Fourth Item',
        },
      ],
    },
  ]);
  return (
    <>
      {/* <Menu onSelect={data => setSelected(data.id)}>
        <Menu.Target>Open Menu</Menu.Target>
        <Menu.Popper>
          <Menu.Card>
            <Menu.List>
              <Menu.Group title="First Group">
                <Menu.Item>First Item</Menu.Item>
                <Menu.Item>Second Item</Menu.Item>
              </Menu.Group>
              <Menu.Group title="Second Group">
                <Menu.Item>Third Item (with a really, really, really long label)</Menu.Item>
                <Menu.Item aria-disabled>Fourth Item</Menu.Item>
              </Menu.Group>
            </Menu.List>
          </Menu.Card>
        </Menu.Popper>
        <BodyText size="small" marginTop="s">
          Selected: <span data-testid="output">{selected}</span>
        </BodyText>
      </Menu> */}

      <Menu onSelect={data => setSelected(data.id)} items={items}>
        <Menu.Target>Open Menu</Menu.Target>
        <Menu.Popper>
          <Menu.Card>
            <Menu.List>
              {item => {
                return <Menu.Group title={item.label}>temp</Menu.Group>;
              }}
            </Menu.List>
          </Menu.Card>
        </Menu.Popper>
        <BodyText size="small" marginTop="s">
          Selected: <span data-testid="output">{selected}</span>
        </BodyText>
      </Menu>
    </>
  );
};
