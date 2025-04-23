import React from 'react';

import {Menu} from '@workday/canvas-kit-react/menu';
import {BodyText} from '@workday/canvas-kit-react/text';
import {system} from '@workday/canvas-tokens-web';

type Item = {
  type?: 'item';
  id: string;
  label: string;
};
type SubmenuItem = {
  id: string;
  label: string;
  type: 'submenu';
  children: (Item | SubmenuItem)[];
};

// This is a user-defined object. The structure uses `id` for the item identifier which is the
// default key used by the collection system and therefore doesn't require a `getId` function to be
// passed to the model. The `label` isn't the standard text value used by the collection system, so
// a `getTextValue` function is required. The `type` and `children` aren't important at all to the
// menu and are used in the template by the user-defined `renderItem` function.
const items: (SubmenuItem | Item)[] = [
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
              {
                id: 'second-sub-sub-sub-item',
                label: 'Second Sub Sub Sub Item',
              },
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
  function renderItem(item: SubmenuItem | Item) {
    if (item.type === 'submenu') {
      return (
        <Menu.Submenu id={item.id} items={item.children}>
          <Menu.Submenu.TargetItem>{item.label}</Menu.Submenu.TargetItem>
          <Menu.Submenu.Popper>
            <Menu.Submenu.Card>
              <Menu.Submenu.List>{renderItem}</Menu.Submenu.List>
            </Menu.Submenu.Card>
          </Menu.Submenu.Popper>
        </Menu.Submenu>
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
      <BodyText size="small" cs={{marginBlockStart: system.space.x4}}>
        Selected: <span data-testid="output">{selected}</span>
      </BodyText>
    </Menu>
  );
};
