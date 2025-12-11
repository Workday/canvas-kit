---
source_file: react/collection/stories/mdx/Collection.mdx
live_url: https://workday.github.io/canvas-kit/react/collection/stories/mdx/Collection
---

<Meta title="Features/Collections" />

# Canvas Kit Collection API

The Collection API is a system of models and behaviors for creating lists and grids. For example,
`Tabs` uses collection behaviors and so does `Menu`. The UI of each looks very different, but much
of the behavior is shared. The Collection API should be used if a component doesn't already exist to
satisfy your needs.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Basic Example

The `ListBox` on its own isn't very useful. It registers each item with the model. The
`ListBox.Item` only uses the `useListItemRegister` hook which handles registration of static items
to the model. The `ListBox` uses `useListRenderItems` which handles rendering static items as well
as [dynamic items](#dynamic-items).

```tsx
import React from 'react';

import {ListBox} from '@workday/canvas-kit-react/collection';

export const Basic = () => {
  return (
    <ListBox>
      <ListBox.Item>First</ListBox.Item>
      <ListBox.Item>Second</ListBox.Item>
    </ListBox>
  );
};

```

### Identifying Items

A list item takes an optional `data-id` property that will be used to identify an item. Without a
`data-id`, the identifier will be the item's index when first registered. The basic example has a
`data-id` attribute that is a string representation of the index. Providing a `data-id` will
override to a value of your choosing. This identifier will be used by other hooks to identify the
item for selection, maintaining a cursor, or anything else.

```tsx
import React from 'react';

import {ListBox} from '@workday/canvas-kit-react/collection';

export const IdentifiedItems = () => {
  return (
    <ListBox>
      <ListBox.Item data-id="first">First</ListBox.Item>
      <ListBox.Item data-id="second">Second</ListBox.Item>
    </ListBox>
  );
};

```

### Dynamic Items

The `ListBox` also handles a dynamic collection of items. Instead of providing each `ListBox.Item`
statically, provide a render function instead. The function is called with an `item` value that is
the same as what's provided to the model.

#### Registering Items

Dynamic items can be passed in as an array of strings or objects via the `items` prop or the model
config.

##### Array of Strings

Use strings when your data is a simple list of options. Each string value is used as the unique
identifer.

```tsx
import React from 'react';

import {ListBox} from '@workday/canvas-kit-react/collection';

const items = ['Pizza', 'Chocolate', 'Cheeseburgers'];

export const DynamicItemsStrings = () => (
  <ListBox items={items}>{item => <ListBox.Item>{item}</ListBox.Item>}</ListBox>
);

```

##### Array of Objects

Use objects when your data contains additional information. Each object must have an `id` to ensure
it's registered and searchable. Additional information such as icons or if the item is disabled can
be included in the object and will be accessible in the render function.

```tsx
import React from 'react';

import {ListBox} from '@workday/canvas-kit-react/collection';

const items = [
  {id: 'Atlanta (United States)'},
  {id: 'Amsterdam (Europe)'},
  {id: 'Austin (United States)'},
  {id: 'Beaverton (United States)', disabled: true},
  {id: 'Belfast (Europe)'},
  {id: 'Berlin (Europe)'},
  {id: 'Boston (United States)'},
  {id: 'Boulder (United States)'},
  {id: 'Chicago (United States)'},
];

export const DynamicItemsObjects = () => (
  <ListBox items={items}>
    {item => <ListBox.Item aria-disabled={item.disabled}>{item.id}</ListBox.Item>}
  </ListBox>
);

```

> **Note: The `id` should match your text value for each item. This ensures proper selection of
> items in components like `Select` and `Autocomplete`. If your `id` is different from your text
> value, you'll have to add a
> [translation layer](https://codesandbox.io/s/combobox-object-items-forked-mc7tm4). **

#### Virtualization

By default, providing items dynamically will enable virtualization. This example adds a `maxHeight`
to ensure overflow. Virtualization uses absolute positioning of each item, which could cause
problems for popup menus. If your item count is low, pass `shouldVirtualize={false}` to disable
virtualization.

```tsx
import React from 'react';

import {ListBox} from '@workday/canvas-kit-react/collection';

interface Item {
  id: string;
  text: string;
}

const items: Item[] = Array(1000)
  .fill(true)
  .map((_, index) => ({id: String(index + 1), text: `Item - ${index + 1}`}));

export const Virtualization = () => {
  return (
    <ListBox items={items} maxHeight={300}>
      {(item: Item) => <ListBox.Item data-id={item.id}>{item.text}</ListBox.Item>}
    </ListBox>
  );
};

```

### DataLoader

The collection system comes with a data loader to help with dynamic collections. You must provide
`total`, `pageSize`, and an asynchronous `load` function. The loader will call the `load` function
when the user navigates the collection and needs more data. This example shows how to hook up a
simple data loader and mocks a `load` function to simulate an asynchronous response.

The data loader also takes a model argument to know which model to create. The loader configures the
model to handle asynchronous keyboard navigation and will return the configured model to you to pass
along to the collection component.

```tsx
import React from 'react';

import {
  ListBox,
  useListLoader,
  useListModel,
  useListItemSelect,
  useListItemRovingFocus,
  LoadReturn,
} from '@workday/canvas-kit-react/collection';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {composeHooks} from '@workday/canvas-kit-react/common';

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

const useListItem = composeHooks(useListItemSelect, useListItemRovingFocus);

const colors = ['Blue', 'Red', 'Purple', 'Green', 'Pink'];
const fruits = ['Apple', 'Orange', 'Banana', 'Grape', 'Lemon', 'Lime'];
const options = Array(1000)
  .fill('')
  .map((_, index) => {
    return `${pickRandom(colors)} ${pickRandom(fruits)} ${index + 1}`;
  });

export const DataLoader = () => {
  const [messages, setMessages] = React.useState<string[]>([]);

  const {model, loader} = useListLoader(
    {
      getId: (item: string) => item,
      getTextValue: (item: string) => item,
      shouldVirtualize: true,
      total: 1000,
      pageSize: 20,
      async load({pageNumber, pageSize}) {
        setMessages(messages => messages.concat(`Page ${pageNumber} loading`));

        // Return a promise, but use setTimeout to mock a delayed server response
        return new Promise<LoadReturn<string>>(resolve => {
          setTimeout(() => {
            const start = (pageNumber - 1) * pageSize;
            const end = start + pageSize;

            const total = options.length;
            const items = options.slice(start, end);

            setMessages(messages => messages.concat(`Page ${pageNumber} loaded`));

            resolve({
              items,
              total,
            });
          }, 500);
        });
      },
    },
    useListModel
  );

  return (
    <Flex gap="xl">
      <Flex flexDirection="column" gap="zero">
        <p>Scroll or focus and use keys to navigate</p>
        <ListBox model={model} maxHeight={400} width={300}>
          {item => (
            <ListBox.Item
              as="button"
              role="listitem"
              elemPropsHook={useListItem}
              height={20}
              background="transparent"
              border="none"
            >
              {item}
            </ListBox.Item>
          )}
        </ListBox>
      </Flex>
      <Flex flexDirection="column" gap="zero">
        <p>Events:</p>
        <Box as="ul" maxHeight={400} overflowY="auto">
          {messages.map(message => (
            <li key={message}>{message}</li>
          ))}
        </Box>
      </Flex>
    </Flex>
  );
};

```

#### Roving Tabindex

The list system also includes a cursor that extends the list. A cursor is mostly used for focusing
items. The
[roving tabindex](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex)
is a well-supported way to accomplish accessibility requirements for focusing items within a list.
This example shows how to use `useListRovingFocus`. This example uses the `ListBox` component, but
the default `ListBox.Item` is very basic. We have two options, we can either pass additional
functionality via `elemPropsHook` or by creating a new item using our elemProps hook primitives.
Both will be demonstrated. Creating a custom item is recommended if you create a custom component
and export it. Using `elemPropsHook` with `ListBox.Item` is recommended only for one-off instances.

You can either use the tab key for focus on an item or click on an item and then use the up/down
keys to navigation the list. By default, the list is set to wrap navigation using the
`wrappingNavigationManager`. Only a single item in the list is a focus stop that "roves" as the
up/down arrows are pressed.

**Note:** This example doesn't meet accessibility requirements. The list will have to have some type
of context. Like "navigation list" or "menu list".

```tsx
import React from 'react';

import {
  useListItemRegister,
  useListItemRovingFocus,
  useListModel,
  ListBox,
  ListItemProps,
} from '@workday/canvas-kit-react/collection';
import {composeHooks, createSubcomponent} from '@workday/canvas-kit-react/common';

// create our own hook using `useListItemRegister` and `useListItemRovingFocus`. Note the
// `useListItemRegister` must be the last hook when using `composeHooks`
const useRovingFocusItem = composeHooks(useListItemRovingFocus, useListItemRegister);

// create our own item. We use `modelHook` to define which model should be used and `elemPropsHook`
// to determine which elemProps hook should be used. `elemProps` will be populated with props to
// pass to the element
const RovingFocusItem = createSubcomponent('li')({
  displayName: 'RovingFocusItem',
  modelHook: useListModel,
  elemPropsHook: useRovingFocusItem,
})<ListItemProps>((elemProps, Element) => {
  return <Element {...elemProps} />;
});

export const RovingFocus = () => {
  return (
    <ListBox>
      {/* We can use `ListBox.Item` and add `useListItemRovingFocus`. Useful for one-off */}
      <ListBox.Item data-id="first" elemPropsHook={useListItemRovingFocus}>
        First
      </ListBox.Item>
      {/* Use a custom item. Useful for reusing components */}
      <RovingFocusItem data-id="second">Second</RovingFocusItem>
      <RovingFocusItem data-id="third">Third</RovingFocusItem>
    </ListBox>
  );
};

```

#### Selection

Lists support selection. `useSelectionItem` is applied to an item which adds an `onClick` that adds
the item to the `state.selectedIds`. The default selection manager is a single select. This example
uses `ListBox` and creates a custom `SelectableItem` elemProps hook and component.

```tsx
import React from 'react';

import {
  useListItemRegister,
  useListItemRovingFocus,
  useListItemSelect,
  useListModel,
  ListItemProps,
  ListBox,
  getCursor,
} from '@workday/canvas-kit-react/collection';
import {
  composeHooks,
  createElemPropsHook,
  createSubcomponent,
} from '@workday/canvas-kit-react/common';

// Create a custom hook for our item
const useItem = composeHooks(
  createElemPropsHook(useListModel)((model, ref, elemProps: ListItemProps) => {
    return {
      role: 'listitem',
      style: {
        background: model.state.selectedIds.includes(elemProps['data-id']) ? 'gray' : 'white',
      },
    };
  }),
  useListItemSelect,
  useListItemRovingFocus,
  useListItemRegister
);

// Create a custom item
const SelectableItem = createSubcomponent('button')({
  displayName: 'SelectableItem',
  modelHook: useListModel,
  elemPropsHook: useItem,
})<ListItemProps>((elemProps, Element) => {
  return <Element {...elemProps} />;
});

export const Selection = () => {
  const model = useListModel({
    initialSelectedIds: ['first'],
    orientation: 'horizontal',
  });
  return (
    <>
      <ListBox model={model}>
        <SelectableItem data-id="first">First</SelectableItem>
        <SelectableItem data-id="second">Second</SelectableItem>
        <SelectableItem data-id="third">Third</SelectableItem>
      </ListBox>

      <p>Cursor ID: {getCursor(model.state)}</p>
      <p>Selected ID: {model.state.selectedIds[0]}</p>
    </>
  );
};

```

### String Children

Sometimes it is desired to allow the string children to be the identifiers for each item. This could
be useful for autocomplete components where the item's text is the desired identifier. Normally, if
no `data-id` is provided to the item, the system will choose the registration index. This would be
`'0'`, `'1'`, and so on. By passing `useListItemAllowChildStrings` to an item component, it will
change this behavior to use the child text if no `data-id` is provided.

```tsx
import React from 'react';

import {
  ListBox,
  useListItemRegister,
  useListItemAllowChildStrings,
  useListItemSelect,
  useListModel,
} from '@workday/canvas-kit-react/collection';
import {composeHooks, createSubcomponent} from '@workday/canvas-kit-react/common';

const useItem = composeHooks(useListItemSelect, useListItemRegister, useListItemAllowChildStrings);

const Item = createSubcomponent('button')({
  modelHook: useListModel,
  elemPropsHook: useItem,
})((elemProps, Element) => {
  return <Element {...elemProps} />;
});

export const StringChildren = () => {
  const model = useListModel();

  return (
    <>
      <ListBox model={model}>
        <Item>First</Item>
        <Item>Second</Item>
      </ListBox>
      <div>
        Selected: <span id="selected">{model.state.selectedIds[0] || 'Nothing'}</span>
      </div>
    </>
  );
};

```

#### Multiple Selection

The `selection` manager can be passed directly to the model configuration to handle different
selection types. This example passes the `multiSelectionManager` to handle selecting multiple items.

```tsx
import React from 'react';

import {
  multiSelectionManager,
  useListItemRegister,
  useListItemRovingFocus,
  useListItemSelect,
  useListModel,
  ListItemProps,
  ListBox,
  getCursor,
} from '@workday/canvas-kit-react/collection';
import {composeHooks, createSubcomponent} from '@workday/canvas-kit-react/common';

const useMultiSelectItem = composeHooks(
  useListItemSelect,
  useListItemRovingFocus,
  useListItemRegister
);

const Item = createSubcomponent('button')({
  displayName: 'MultiSelectableItem',
  modelHook: useListModel,
  elemPropsHook: useMultiSelectItem,
})<ListItemProps>((elemProps, Element, model) => {
  return (
    <Element
      role="listitem"
      {...elemProps}
      style={{
        background: model.state.selectedIds.includes(elemProps['data-id']) ? 'gray' : 'white',
      }}
    />
  );
});

export const MultiSelection = () => {
  const model = useListModel({
    initialSelectedIds: ['first', 'second'],
    selection: multiSelectionManager,
    orientation: 'horizontal',
  });
  return (
    <>
      <ListBox model={model}>
        <Item data-id="first">First</Item>
        <Item data-id="second">Second</Item>
        <Item data-id="third">Third</Item>
      </ListBox>

      <p>Cursor ID: {getCursor(model.state)}</p>
      <p>
        Selected IDs: {(model.state.selectedIds !== 'all' ? model.state.selectedIds : []).join(',')}
      </p>
    </>
  );
};

```

### Basic Grid

A grid is a two dimensional list. A `columnCount` config is added to inform how to break up an array
of items. A grid is very similar to a list - it receives items as a single dimension list and uses
the `columnCount` to determine keyboard navigation. Grids only support a single orientation.

```tsx
import React from 'react';

import {Flex, Box} from '@workday/canvas-kit-react/layout';
import {
  ListBox,
  useGridModel,
  useListItemSelect,
  useListItemRovingFocus,
  useListItemRegister,
} from '@workday/canvas-kit-react/collection';
import {composeHooks, createSubcomponent} from '@workday/canvas-kit-react/common';

const useItem = composeHooks(useListItemSelect, useListItemRovingFocus, useListItemRegister);

const Item = createSubcomponent('button')({
  modelHook: useGridModel,
  elemPropsHook: useItem,
})((elemProps, Element, model) => {
  return (
    <Box
      as={Element}
      {...elemProps}
      width={40}
      border="solid 1px black"
      style={{
        background: model.state.selectedIds.includes(elemProps['data-id']) ? 'gray' : 'white',
      }}
    />
  );
});

export const BasicGrid = () => {
  const model = useGridModel({
    columnCount: 5,
    // @ts-ignore Create an array of [{id: 1}, ...{id: n}]
    items: [...Array(25).keys()].map(i => ({id: `${i + 1}`})),
    // we don't need virtualization here
    shouldVirtualize: false,
  });

  return (
    <ListBox model={model} as={Flex} flexDirection="row" flexWrap="wrap" width={200}>
      {item => <Item>{item.id}</Item>}
    </ListBox>
  );
};

```

#### Wrapping Grid

By default, navigating a grid does not wrap around when the user reaches the end of a row or column.
The grid model supports passing in a navigation manager. The collection system supports two types of
navigation managers, a non-wrapping `navigationManager` and the `wrappingNavigationManager`. The
following example passes the `wrappingNavigationManager` manager to the model. Observe how the
cursor wraps around columns and rows when an edge of a column or row is encountered.

```tsx
import React from 'react';

import {Flex, Box} from '@workday/canvas-kit-react/layout';
import {
  ListBox,
  useGridModel,
  useListItemSelect,
  useListItemRovingFocus,
  useListItemRegister,
  wrappingNavigationManager,
} from '@workday/canvas-kit-react/collection';
import {composeHooks, createSubcomponent} from '@workday/canvas-kit-react/common';

const useItem = composeHooks(useListItemSelect, useListItemRovingFocus, useListItemRegister);

const Item = createSubcomponent('button')({
  modelHook: useGridModel,
  elemPropsHook: useItem,
})((elemProps, Element, model) => {
  return (
    <Box
      as={Element}
      {...elemProps}
      width={40}
      border="solid 1px black"
      style={{
        background: model.state.selectedIds.includes(elemProps['data-id']) ? 'gray' : 'white',
      }}
    />
  );
});

export const WrappingGrid = () => {
  const model = useGridModel({
    columnCount: 5,
    // @ts-ignore Create an array of [{id: 1}, ...{id: n}]
    items: [...Array(25).keys()].map(i => ({id: `${i + 1}`})),
    // we don't need virtualization here
    shouldVirtualize: false,
    navigation: wrappingNavigationManager,
  });

  return (
    <ListBox model={model} as={Flex} flexDirection="row" flexWrap="wrap" width={200}>
      {item => <Item>{item.id}</Item>}
    </ListBox>
  );
};

```

### Overflow Vertical List

A List can overflow vertically or horizontally to account for responsive resizing or an overflow of
items. Using multiple hooks from the Collection system like `useOverflowListModel` and ensuring that
`orientation`is set to`vertical`, you can achieve vertical overflow lists. In the example below,
when the window is resized vertically, items in the Sidebar will overflow into the "More Actions"
button.

```tsx
import React from 'react';
import {ActionBar, useActionBarModel} from '@workday/canvas-kit-react/action-bar';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Box} from '@workday/canvas-kit-react/layout';
import styled from '@emotion/styled';
import {StyledType} from '@workday/canvas-kit-react/common';

type MyActionItem = {
  id: string;
  text: React.ReactNode;
};

const StyledActionbarList = styled(ActionBar.List)<StyledType>({
  '> *': {
    flex: '0 0 auto',
  },
});

export const OverflowVerticalList = () => {
  const [items] = React.useState<MyActionItem[]>([
    {id: 'first', text: 'First Action'},
    {id: 'second', text: 'Second Action'},
    {id: 'third', text: 'Third Action'},
    {id: 'fourth', text: 'Fourth Action'},
    {id: 'fifth', text: 'Fifth Action'},
    {id: 'sixth', text: 'Sixth Action'},
    {id: 'seventh', text: 'Seventh Action'},
  ]);

  const model = useActionBarModel({items, orientation: 'vertical', maximumVisible: 4});

  return (
    <>
      <Box marginBottom="xl" height="50vh">
        <ActionBar model={model}>
          <StyledActionbarList
            position="relative"
            as="section"
            aria-label="Overflow example actions"
            flexDirection="column"
            height="100%"
            overflowButton={
              <ActionBar.OverflowButton
                cs={{overflow: 'visible', flex: 0}}
                aria-label="More actions"
              />
            }
          >
            {(item: MyActionItem, index) => (
              <ActionBar.Item
                as={index === 0 ? PrimaryButton : undefined}
                onClick={() => console.log(item.id)}
              >
                {item.text}
              </ActionBar.Item>
            )}
          </StyledActionbarList>
          <ActionBar.Menu.Popper>
            <ActionBar.Menu.Card maxWidth={300} maxHeight={200}>
              <ActionBar.Menu.List>
                {(item: MyActionItem) => (
                  <ActionBar.Menu.Item onClick={() => console.log(item.id)}>
                    {item.text}
                  </ActionBar.Menu.Item>
                )}
              </ActionBar.Menu.List>
            </ActionBar.Menu.Card>
          </ActionBar.Menu.Popper>
        </ActionBar>
      </Box>
    </>
  );
};

```

## Component API

### ListBox

<!-- API Reference for ListBox not found -->
<!-- API Reference for useGridModel not found -->

### Navigation Manager

<!-- API Reference for NavigationManager not found -->

#### `navigationManager`

The `navigationManager` implements the [Navigation Manager](#navigation-manager) interface for lists
and grids, but does not wrap when the user hits a boundary of the collection. This is the default
navigation manager for grids.

#### `wrappingNavigationManager`

The `wrappingNavigationManager` implements the [Navigation Manager](#navigation-manager) interface
for lists and grids, and wraps when the user hits a boundary of the collection. Grids will wrap
columns, but not rows. This is the default navigation manager for lists.

### Selection Manager

<!-- API Reference for SelectionManager not found -->

## Hooks

<!-- API Reference for useListItemRegister not found -->
<!-- API Reference for useListItemAllowChildStrings not found -->
<!-- API Reference for useListItemRovingFocus not found -->
<!-- API Reference for useListItemSelect not found -->
<!-- API Reference for useListRenderItems not found -->
<!-- API Reference for useListResetCursorOnBlur not found -->
<!-- API Reference for useOverflowListItemMeasure not found -->
<!-- API Reference for useOverflowListMeasure not found -->
<!-- API Reference for useOverflowListTarget not found -->
<!-- API Reference for useListLoader not found -->
