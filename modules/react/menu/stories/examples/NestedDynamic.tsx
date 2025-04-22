import React from 'react';

import {Menu} from '@workday/canvas-kit-react/menu';
import {BodyText} from '@workday/canvas-kit-react/text';

type Item = {
  type?: 'item';
  id: string;
  label: string;
};
type SubMenuItem = {
  id: string;
  label: string;
  type: 'submenu';
  children: (Item | SubMenuItem)[];
};

// This is a user-defined object. The structure uses `id` for the item identifier which is the
// default key used by the collection system and therefore doesn't require a `getId` function to be
// passed to the model. The `label` isn't the standard text value used by the collection system, so
// a `getTextValue` function is required. The `type` and `children` aren't important at all to the
// menu and are used in the template by the user-defined `renderItem` function.
const items: (SubMenuItem | Item)[] = [
  {id: 'first-item', label: 'First Item'},
  {
    id: 'second-item',
    label: 'Second Item',
    type: 'submenu',
    children: [
      {id: 'first-sub-item', label: 'First Sub Item'},
      {
        id: 'second-sub-item',
        label: 'Second Sub Item',
        type: 'submenu',
        children: [
          {id: 'first-sub-sub-item', label: 'First Sub Sub Item'},
          {
            id: 'second-sub-sub-item',
            type: 'submenu',
            label: 'Second Sub Sub Item',
            children: [
              {id: 'first-sub-sub-sub-item', label: 'First Sub Sub Sub Item'},
              {id: 'second-sub-sub-sub-item', label: 'Second Sub Sub Sub Item'},
              {id: 'third-sub-sub-sub-item', label: 'Third Sub Sub Sub Item'},
              {id: 'fourth-sub-sub-sub-item', label: 'Fourth Sub Sub Sub Item'},
            ],
          },
          {id: 'third-sub-sub-item', label: 'Third Sub Sub Item'},
          {id: 'fourth-sub-sub-item', label: 'Fourth Sub Sub Item'},
        ],
      },
      {id: 'third-sub-item', label: 'Third Sub Item'},
      {id: 'fourth-sub-item', label: 'Fourth Sub Item'},
    ],
  },
  {id: 'third-item', label: 'Third Item'},
  {id: 'fourth-item', label: 'Fourth Item'},
];

export const NestedDynamic = () => {
  const [selected, setSelected] = React.useState('');

  // defining this inline function allows use to recurse any nesting level defined by the `items`
  // array.
  function renderItem(item: SubMenuItem | Item) {
    if (item.type === 'submenu') {
      return (
        <Menu.SubMenu id={item.id} items={item.children}>
          <Menu.SubMenu.TargetItem>{item.label}</Menu.SubMenu.TargetItem>
          <Menu.SubMenu.Popper>
            <Menu.SubMenu.Card>
              <Menu.SubMenu.List>{renderItem}</Menu.SubMenu.List>
            </Menu.SubMenu.Card>
          </Menu.SubMenu.Popper>
        </Menu.SubMenu>
      );
    }
    return <Menu.Item>{item.label}</Menu.Item>;
  }

  return (
    <Menu
      items={items}
      id="first-menu"
      getTextValue={item => item.label}
      onSelect={data => {
        setSelected(data.id);
      }}
    >
      <Menu.Target>Open Menu</Menu.Target>
      <Menu.Popper>
        <Menu.Card>
          <Menu.List>{renderItem}</Menu.List>
        </Menu.Card>
      </Menu.Popper>
      <BodyText size="small" marginTop="s">
        Selected: <span data-testid="output">{selected}</span>
      </BodyText>
    </Menu>
  );
};
