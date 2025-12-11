---
source_file: react/menu/stories/Menu.mdx
live_url: https://workday.github.io/canvas-kit/react/menu/stories/Menu
---

<Meta of={MenuStories} />

# Canvas Kit Menu

`Menu` displays a list of options when triggered by an action or UI element like an icon or button.

[> Workday Design Reference](https://design.workday.com/components/popups/menus)

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Basic Example

`Menu` is typically triggered by an action such as pressing a button. The `Menu` comes with a
`Target` subcomponent and a Popup.

```tsx
import React from 'react';

import {Menu} from '@workday/canvas-kit-react/menu';
import {BodyText} from '@workday/canvas-kit-react/text';

export const Basic = () => {
  const [selected, setSelected] = React.useState('');
  return (
    <Menu onSelect={data => setSelected(data.id)}>
      <Menu.Target>Open Menu</Menu.Target>
      <Menu.Popper>
        <Menu.Card>
          <Menu.List>
            <Menu.Item>First Item</Menu.Item>
            <Menu.Item>Second Item</Menu.Item>
            <Menu.Divider />
            <Menu.Item>Third Item (with a really, really, really long label)</Menu.Item>
            <Menu.Item aria-disabled>Fourth Item</Menu.Item>
          </Menu.List>
        </Menu.Card>
      </Menu.Popper>
      <BodyText size="small" marginTop="s">
        Selected: <span data-testid="output">{selected}</span>
      </BodyText>
    </Menu>
  );
};

```

`Menu` will automatically focus on the cursor item (first item by default). The `Menu` uses a menu
model which composes a list model and a popup model and sets up accessibility features for you.

`Menu` follows the
[Actions Menu pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/examples/menu-button-actions/)
using roving tabindex. Below is table of supported keyboard shortcuts and associated actions.

| Key                | Action                                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------------------------ |
| `Enter` or `Space` | Activates the menu item and then closes the menu                                                             |
| `Escape`           | Closes the menu                                                                                              |
| `Up Arrow`         | Moves focus to the previous menu item – if focus is on first menu item, it moves focus to the last menu item |
| `Down Arrow`       | Moves focus to the next menu item – if focus is on last menu item, it moves focus to the first menu item     |
| `Home`             | Moves focus to the first menu item                                                                           |
| `End`              | Moves focus to the last menu item                                                                            |

### Context Menu

```tsx
import React from 'react';

import {Menu} from '@workday/canvas-kit-react/menu';
import {BodyText} from '@workday/canvas-kit-react/text';

export const ContextMenu = () => {
  const [selected, setSelected] = React.useState('');
  return (
    <Menu onSelect={data => setSelected(data.id)}>
      <Menu.TargetContext>Right-click to Open Menu</Menu.TargetContext>
      <Menu.Popper>
        <Menu.Card>
          <Menu.List>
            <Menu.Item>First Item</Menu.Item>
            <Menu.Item>Second Item</Menu.Item>
            <Menu.Item>Third Item (with a really, really, really long label)</Menu.Item>
            <Menu.Item>Fourth Item</Menu.Item>
          </Menu.List>
        </Menu.Card>
      </Menu.Popper>
      <BodyText size="small" marginTop="s">
        Selected: <span data-testid="output">{selected}</span>
      </BodyText>
    </Menu>
  );
};

```

### Icons

Menu supports more complex children, including icons, but the text of the item will no longer be
known. In this case, add a `data-text` attribute to inform the collection system what the text of
the item is. The text is used for components that filter based on text. For example, a Select
component will jump to an item based on the keys the user types. If the user types "C", the
component will jump to the first item that starts with a "C". This functionality requires knowledge
about the text of the item.

```tsx
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

```

### Selectable Menu

The `Menu.Item` renders a `role=menuitem` element which does not have `aria-selected` and thus no
selected state. If you wish your menu to have selectable menu items, use `Menu.Option` instead of
`Menu.Item`. The `Menu.Option` is meant to be used when the `Menu.Card` has a role of `listbox` and
is controlled via `aria-activedescendant`. This example uses `Menu.Option` to should what the
checkmark looks like, but the example is not keyboard or screen reader accessible. There are many
other behaviors that need to be composed into the `Menu.Target` and `Menu.List` components and the
behaviors depend on many other things. To see a full example of all these behaviors, look at the
`<Combobox>` and `<Select>` component source code as examples.

```tsx
import React from 'react';

import {Menu} from '@workday/canvas-kit-react/menu';
import {BodyText} from '@workday/canvas-kit-react/text';

export const SelectableMenu = () => {
  const [selected, setSelected] = React.useState('');
  return (
    <Menu onSelect={data => setSelected(data.id)}>
      <Menu.Target>Open Menu</Menu.Target>
      <Menu.Popper>
        <Menu.Card role="listbox">
          <Menu.List as="ul">
            <Menu.Option>First Item</Menu.Option>
            <Menu.Option>Second Item</Menu.Option>
            <Menu.Divider />
            <Menu.Option>Third Item (with a really, really, really long label)</Menu.Option>
            <Menu.Option aria-disabled>Fourth Item</Menu.Option>
          </Menu.List>
        </Menu.Card>
      </Menu.Popper>
      <BodyText size="small" marginTop="s">
        Selected: <span data-testid="output">{selected}</span>
      </BodyText>
    </Menu>
  );
};

```

### Grouping

Grouping adds hierarchy and categorization to menu items. Group headers do not represent menu items
and are not selectable with the keyboard or mouse.

> **Note**: Grouping is not supported in virtual rendering. Menus by default have `shouldVirtualize`
> set to `false`. Setting to `true` results in unspecified behavior. We use `react-virtual` which
> doesn't support nested virtualization.

```tsx
import React from 'react';

import {Menu} from '@workday/canvas-kit-react/menu';
import {BodyText} from '@workday/canvas-kit-react/text';

export const Grouping = () => {
  const [selected, setSelected] = React.useState('');
  return (
    <>
      <Menu onSelect={data => setSelected(data.id)}>
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
      </Menu>
    </>
  );
};

```

### Nested

Menus support nesting. If you only have a few items and not very many nesting levels, the menu can
be defined statically using JSX. A submenu is defined using the `<Menu.Submenu>` component. The
`Submenu` is implemented as a special `Menu` subcomponent. The API of the submenu is the same as the
`Menu` except the submenu's target is also a menu item. The component is named `TargetItem` to
indicate this dual role.

```tsx
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
            <Menu.Submenu id="second-menu">
              <Menu.Submenu.TargetItem data-id="second-item">Second Item</Menu.Submenu.TargetItem>
              <Menu.Submenu.Popper>
                <Menu.Submenu.Card>
                  <Menu.Submenu.List>
                    <Menu.Submenu.Item data-id="first-sub-item">First Sub Item</Menu.Submenu.Item>
                    <Menu.Submenu.Item data-id="second-sub-item">First Sub Item</Menu.Submenu.Item>
                    <Menu.Submenu.Item data-id="third-sub-item">Third Sub Item</Menu.Submenu.Item>
                    <Menu.Submenu.Item data-id="fourth-sub-item">Fourth Sub Item</Menu.Submenu.Item>
                  </Menu.Submenu.List>
                </Menu.Submenu.Card>
              </Menu.Submenu.Popper>
            </Menu.Submenu>
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

```

### Nested Dynamic Items

Menu nesting is simpler with the dynamic API. In this example, a `renderItem` function is defined to
allow recursive nesting of items using a data structure you define. A submenu will inherit the
`getId` and `getTextValue` functions of the parent menu. While you can pass a specialize `getId` or
`getTextValue` function to each submenu, it may be simpler to use the same one for the menu and
submenus.

```tsx
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

```

## Accessibility

This content is coming soon!

## Component API

<!-- API Reference for Menu not found -->

## Specifications

### Specifications for Menu

<!-- Component specifications from Menu.spec.ts -->
