---
source_file: react/tabs/stories/Tabs.mdx
live_url: https://workday.github.io/canvas-kit/react/tabs/stories/Tabs
---

<Meta of={TabsStories} />

# Canvas Kit Tabs

`Tabs` is a [compound component](/getting-started/for-developers/resources/compound-components/)
that allows users to navigate between related views of content while remaining in context of the
page.

[> Workday Design Reference](https://design.workday.com/components/navigation/tabs)

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Basic Example

`Tabs` includes a container `Tabs` component and the following subcomponents which can be composed
in a variety of ways: `Tabs.List`, `Tabs.Item` and `Tabs.Panel`. It follows the
[W3 Tabs specification](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/).

In this example, we set up a basic `Tabs` component with five tabs. This example uses a static API
that does not support overflow.

```tsx
import {space} from '@workday/canvas-kit-react/tokens';

import {Tabs} from '@workday/canvas-kit-react/tabs';

export const Basic = () => {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Item>First Tab</Tabs.Item>
        <Tabs.Item>Second Tab</Tabs.Item>
        <Tabs.Item>Third Tab</Tabs.Item>
        <Tabs.Item>Fourth Tab</Tabs.Item>
        <Tabs.Item>Fifth Tab</Tabs.Item>
      </Tabs.List>
      <div style={{marginTop: space.m}}>
        <Tabs.Panel>Contents of First Tab</Tabs.Panel>
        <Tabs.Panel>Contents of Second Tab</Tabs.Panel>
        <Tabs.Panel>Contents of Third Tab</Tabs.Panel>
        <Tabs.Panel>Contents of Fourth Tab</Tabs.Panel>
        <Tabs.Panel>Contents of Fifth Tab</Tabs.Panel>
      </div>
    </Tabs>
  );
};

```

### Overflow Tabs

Tabs is a responsive component based on the width of its container. If the rendered tabs exceed the
width of the `Tabs.List`, an overflow menu will be rendered. This only works against the dynamic API
where you give the `TabsModel` an array of items to be rendered. The dynamic API handles the React
`key` for you based on the item's identifier. The dynamic API requires either an `id` on each item
object or a `getId` function that returns an identifier based on the item. The below example uses an
`id` property on each item.

The dynamic API takes in any object, but since nothing is known about your object, a
[render prop](https://reactjs.org/docs/render-props.html) is necessary to instruct a list how it
should render.

```tsx
import React from 'react';

import {Tabs, useTabsModel} from '@workday/canvas-kit-react/tabs';
import {SegmentedControl} from '@workday/canvas-kit-preview-react/segmented-control';
import {Box} from '@workday/canvas-kit-react/layout';

type MyTabItem = {
  id: string;
  text: React.ReactNode;
  contents: string;
};

export const OverflowTabs = () => {
  const [items] = React.useState<MyTabItem[]>([
    {id: 'first', text: 'First Tab', contents: 'Contents of First Tab'},
    {id: 'second', text: 'Second Tab', contents: 'Contents of Second Tab'},
    {id: 'third', text: 'Third Tab', contents: 'Contents of Third Tab'},
    {id: 'fourth', text: 'Fourth Tab', contents: 'Contents of Fourth Tab'},
    {id: 'fifth', text: 'Fifth Tab', contents: 'Contents of Fifth Tab'},
    {id: 'sixth', text: 'Sixth Tab', contents: 'Contents of Sixth Tab'},
    {id: 'seventh', text: 'Seventh Tab', contents: 'Contents of Seventh Tab'},
  ]);
  const model = useTabsModel({
    items,
  });
  const [containerWidth, setContainerWidth] = React.useState('100%');
  return (
    <div>
      <Box width={containerWidth} marginBottom="xl">
        <Tabs model={model}>
          <Tabs.List overflowButton={<Tabs.OverflowButton>More</Tabs.OverflowButton>}>
            {(item: MyTabItem) => <Tabs.Item>{item.text}</Tabs.Item>}
          </Tabs.List>
          <Tabs.Menu.Popper>
            <Tabs.Menu.Card maxWidth={300} maxHeight={200}>
              <Tabs.Menu.List>
                {(item: MyTabItem) => <Tabs.Menu.Item>{item.text}</Tabs.Menu.Item>}
              </Tabs.Menu.List>
            </Tabs.Menu.Card>
          </Tabs.Menu.Popper>
          <Tabs.Panels>
            {(item: MyTabItem) => <Tabs.Panel marginTop="m">{item.contents}</Tabs.Panel>}
          </Tabs.Panels>
        </Tabs>
      </Box>
      <hr />
      <h4>Change Tabs container size</h4>
      <SegmentedControl onSelect={data => setContainerWidth(data.id)}>
        <SegmentedControl.List aria-label="container width control">
          <SegmentedControl.Item data-id="100%">100%</SegmentedControl.Item>
          <SegmentedControl.Item data-id="500px">500px</SegmentedControl.Item>
          <SegmentedControl.Item data-id="360px">360px</SegmentedControl.Item>
          <SegmentedControl.Item data-id="150px">150px</SegmentedControl.Item>
        </SegmentedControl.List>
      </SegmentedControl>
    </div>
  );
};

```

### Hoisted Model

By default, `Tabs` will create and use its own [model](#model) internally. Alternatively, you may
configure your own model with `useTabsModel` and pass it to `Tabs` via the `model` prop. This
pattern is referred to as
[hoisting the model](/getting-started/for-developers/resources/compound-components/#configuring-a-model)
and provides direct access to its `state` and `events` outside of the `Tabs` component.

In this example, we set up external observation of the model state and create an external button to
trigger an event to change the active tab.

```tsx
import React from 'react';
import {space} from '@workday/canvas-kit-react/tokens';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Tabs, useTabsModel} from '@workday/canvas-kit-react/tabs';

export const HoistedModel = () => {
  const model = useTabsModel({
    onSelect(data, prevState) {
      console.log('Selected Tab', data.id, prevState);
    },
  });

  return (
    <>
      <Tabs model={model}>
        <Tabs.List>
          <Tabs.Item data-id="first">First Tab</Tabs.Item>
          <Tabs.Item data-id="second">Second Tab</Tabs.Item>
          <Tabs.Item data-id="third">Third Tab</Tabs.Item>
        </Tabs.List>
        <div style={{marginTop: space.m}}>
          <Tabs.Panel data-id="first">Contents of First Tab</Tabs.Panel>
          <Tabs.Panel data-id="second">Contents of Second Tab</Tabs.Panel>
          <Tabs.Panel data-id="third">Contents of Third Tab</Tabs.Panel>
        </div>
      </Tabs>
      <SecondaryButton
        onClick={() => {
          model.events.select({id: 'third'});
        }}
      >
        Select Third Tab
      </SecondaryButton>
    </>
  );
};

```

### Named Tabs

`Tabs.Item` and `Tabs.Panel` both take an optional `data-id` attribute that is used for the
`onActivate` callback. This example is identical to the Basic Example, but with tabs named using
`data-id` for the `Tabs.Item` and `Tabs.Panel` subcomponents.

```tsx
import {space} from '@workday/canvas-kit-react/tokens';

import {Tabs} from '@workday/canvas-kit-react/tabs';

export const NamedTabs = () => {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Item data-id="first">First Tab</Tabs.Item>
        <Tabs.Item data-id="second">Second Tab</Tabs.Item>
        <Tabs.Item data-id="third">Third Tab</Tabs.Item>
        <Tabs.Item data-id="fourth">Fourth Tab</Tabs.Item>
        <Tabs.Item data-id="fifth">Fifth Tab</Tabs.Item>
      </Tabs.List>
      <div style={{marginTop: space.m}}>
        <Tabs.Panel data-id="first">Contents of First Tab</Tabs.Panel>
        <Tabs.Panel data-id="second">Contents of Second Tab</Tabs.Panel>
        <Tabs.Panel data-id="third">Contents of Third Tab</Tabs.Panel>
        <Tabs.Panel data-id="fourth">Contents of Fourth Tab</Tabs.Panel>
        <Tabs.Panel data-id="fifth">Contents of Fifth Tab</Tabs.Panel>
      </div>
    </Tabs>
  );
};

```

### Right-to-Left (RTL)

`Tabs` supports right-to-left languages when specified in the `CanvasProvider` `theme`.

```tsx
import {space} from '@workday/canvas-kit-react/tokens';
import {CanvasProvider} from '@workday/canvas-kit-react/common';

import {Tabs} from '@workday/canvas-kit-react/tabs';

export const RightToLeft = () => {
  return (
    <CanvasProvider dir="rtl">
      <Tabs>
        <Tabs.List>
          <Tabs.Item>ראשון</Tabs.Item>
          <Tabs.Item>שְׁנִיָה</Tabs.Item>
          <Tabs.Item>שְׁלִישִׁי</Tabs.Item>
          <Tabs.Item>רביעי</Tabs.Item>
          <Tabs.Item>חמישי</Tabs.Item>
        </Tabs.List>
        <div style={{marginTop: space.m}}>
          <Tabs.Panel>תוכן הראשון</Tabs.Panel>
          <Tabs.Panel>תוכן השני</Tabs.Panel>
          <Tabs.Panel>תוכן השלישי</Tabs.Panel>
          <Tabs.Panel>תוכן הרביעי</Tabs.Panel>
          <Tabs.Panel>תוכן החמישי</Tabs.Panel>
        </div>
      </Tabs>
    </CanvasProvider>
  );
};

```

### Disabled Tab

Set the `disabled` prop of a `Tabs.Item` to `true` to disable it.

```tsx
import {space} from '@workday/canvas-kit-react/tokens';

import {Tabs} from '@workday/canvas-kit-react/tabs';

export const DisabledTab = () => {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Item>First Tab</Tabs.Item>
        <Tabs.Item aria-disabled>Disabled Tab</Tabs.Item>
        <Tabs.Item>Third Tab</Tabs.Item>
      </Tabs.List>
      <div style={{marginTop: space.m}}>
        <Tabs.Panel>Contents of First Tab</Tabs.Panel>
        <Tabs.Panel>Contents of Disabled Tab</Tabs.Panel>
        <Tabs.Panel>Contents of Third Tab</Tabs.Panel>
      </div>
    </Tabs>
  );
};

```

### Tab Icons

Tabs can have icons. Use the `Icon` and `Text` subcomponents.

```tsx
import React from 'react';

import {space} from '@workday/canvas-kit-react/tokens';
import {starIcon, searchIcon, selectIcon, shareIcon} from '@workday/canvas-system-icons-web';
import {Tabs} from '@workday/canvas-kit-react/tabs';

export const Icons = () => {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Item>
          <Tabs.Item.Icon icon={starIcon} />
          <Tabs.Item.Text>First Tab</Tabs.Item.Text>
        </Tabs.Item>
        <Tabs.Item>
          <Tabs.Item.Icon icon={searchIcon} />
          <Tabs.Item.Text>Second Tab</Tabs.Item.Text>
        </Tabs.Item>
        <Tabs.Item>
          <Tabs.Item.Icon icon={selectIcon} />
          <Tabs.Item.Text>Third Tab</Tabs.Item.Text>
        </Tabs.Item>
        <Tabs.Item>
          <Tabs.Item.Icon icon={shareIcon} />
          <Tabs.Item.Text>Fourth Tab</Tabs.Item.Text>
        </Tabs.Item>
      </Tabs.List>
      <div style={{marginTop: space.m}}>
        <Tabs.Panel>Contents of First Tab</Tabs.Panel>
        <Tabs.Panel>Contents of Second Tab</Tabs.Panel>
        <Tabs.Panel>Contents of Third Tab</Tabs.Panel>
        <Tabs.Panel>Contents of Fourth Tab</Tabs.Panel>
      </div>
    </Tabs>
  );
};

```

### Alternative Tab Stop

By default, tab panels are focusable for accessibility. If the contents of a tab panel have a
focusable element, you may disable this default behavior by setting the `tabIndex` prop of
`Tabs.Panel` to `undefined`. This example has a tab panel with a focusable button.

```tsx
import React from 'react';
import {space} from '@workday/canvas-kit-react/tokens';

import {Tabs} from '@workday/canvas-kit-react/tabs';

export const AlternativeTabStop = () => {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Item>First Tab</Tabs.Item>
        <Tabs.Item>Second Tab</Tabs.Item>
        <Tabs.Item>Third Tab</Tabs.Item>
      </Tabs.List>
      <div style={{marginTop: space.m}}>
        <Tabs.Panel tabIndex={undefined}>
          <button>Focusable button</button>
          <br />
          Contents of First Tab. The tab panel is no longer focusable, but the button is. It may be
          desirable to disable focus on the tab panel and allow focus to flow into the tab panel to
          the first focusable element.
        </Tabs.Panel>
        <Tabs.Panel>Contents of Second Tab</Tabs.Panel>
        <Tabs.Panel>Contents of Third Tab</Tabs.Panel>
      </div>
    </Tabs>
  );
};

```

### Single Tab Panel

The compound component pattern allows for advanced composition. For example, `Tabs` can be composed
to have only a single `Tabs.Panel` using attribute overrides and callbacks. More information about
attributes and callbacks can be found in the prop tables below for each subcomponent.

In this example, we use a hoisted model and the `activeTab` property of the state to show content
from the `contents` object.

```tsx
import React from 'react';
import {space} from '@workday/canvas-kit-react/tokens';

import {Tabs, useTabsModel} from '@workday/canvas-kit-react/tabs';

export const SinglePanel = () => {
  const model = useTabsModel();

  const message = (
    <p>
      This example shows how to use a single tab panel. You must manually set the{' '}
      <code>hidden</code>, <code>aria-controls</code>, and <code>id</code> attributes of Tab item
      and Tab panel components
    </p>
  );

  const contents = {
    first: <div>Contents of First Tab {message}</div>,
    second: <div>Contents of Second Tab {message}</div>,
    third: <div>Contents of Third Tab {message}</div>,
  };

  return (
    <Tabs model={model}>
      <Tabs.List>
        <Tabs.Item data-id="first" aria-controls="mytab-panel">
          First Tab
        </Tabs.Item>
        <Tabs.Item data-id="second" aria-controls="mytab-panel">
          Second Tab
        </Tabs.Item>
        <Tabs.Item data-id="third" aria-controls="mytab-panel">
          Third Tab
        </Tabs.Item>
      </Tabs.List>
      <Tabs.Panel style={{marginTop: space.m}} hidden={undefined} id="mytab-panel">
        {contents[model.state.selectedIds[0]]}
      </Tabs.Panel>
    </Tabs>
  );
};

```

### Dynamic Tabs

The `Tabs.Item` component takes in an optional `index` property if you want to specify the position
of a tab. If not defined, by default it will append tabs to the end. In this example, our tabs are
stored as an array in the state, and we have a fixed tab at the end that can add new tabs to that
array.

```tsx
import React from 'react';

import {slugify} from '@workday/canvas-kit-react/common';
import {isCursor} from '@workday/canvas-kit-react/collection';
import {Tabs, useTabsModel} from '@workday/canvas-kit-react/tabs';

type Tab = {
  tab: string;
  id: string;
};

export const DynamicTabs = () => {
  const [tabs, setTabs] = React.useState<Tab[]>([
    {tab: 'Tab 1', id: 'tab-1'},
    {tab: 'Tab 2', id: 'tab-2'},
    {tab: 'Tab 3', id: 'tab-3'},
    {tab: 'Add Tab', id: 'add'},
  ]);
  const addedRef = React.useRef(tabs.length - 1);
  const model = useTabsModel({
    items: tabs,
    shouldSelect: data => data.id !== 'add',
  });

  // A ref of the model for the render functions to work around the caching done to lists
  const modelRef = React.useRef(model);
  modelRef.current = model;

  /**
   * Helper function that should be called when an item is programmatically removed. The following
   * side effects depend on state of the model:
   * * **Item is focused**: Focus will be moved to next item in the list
   * * **Item is selected**: Selection will be moved to the next item in the list
   * @param id The id of the item that will be removed
   */
  const removeItem = <T extends unknown>(id: string, model: ReturnType<typeof useTabsModel>) => {
    const index = model.state.items.findIndex(item => isCursor(model.state, item.id));
    const nextIndex = index === model.state.items.length - 1 ? index - 1 : index + 1;
    const nextId = model.state.items[nextIndex].id;
    if (model.state.selectedIds[0] === id) {
      // We're removing the currently selected item. Select next item
      model.events.select({id: nextId});
    }
    if (isCursor(model.state, id)) {
      // We're removing the currently focused item. Focus next item
      model.events.goTo({id: nextId});

      // wait for stabilization of state
      requestAnimationFrame(() => {
        document
          .querySelector<HTMLElement>(`[id="${slugify(`${model.state.id}-${nextId}`)}"]`)
          ?.focus();
      });
    }
  };

  const onKeyDown = (id: string) => (e: React.KeyboardEvent<HTMLElement>) => {
    if ((e.key === 'Delete' || e.key === 'Backspace') && id !== 'add') {
      setTabs(tabs.filter(item => item.id !== id));
      const model = modelRef.current;
      removeItem(id, model);
    }
  };

  const onClick = (id: string) => (e: React.MouseEvent) => {
    if (id === 'add') {
      addedRef.current += 1;
      setTabs(tabs => {
        const newTabs = tabs.slice(0, tabs.length - 1);
        const addTab = tabs.slice(-1);
        return newTabs.concat(
          {tab: `Tab ${addedRef.current}`, id: `tab-${addedRef.current}`},
          addTab
        );
      });
    }
  };

  return (
    <Tabs model={model}>
      <Tabs.List overflowButton={<Tabs.OverflowButton>More</Tabs.OverflowButton>}>
        {(item: Tab) => (
          <Tabs.Item onKeyDown={onKeyDown(item.id)} onClick={onClick(item.id)}>
            {item.tab}
          </Tabs.Item>
        )}
      </Tabs.List>
      <Tabs.Menu.Popper>
        <Tabs.Menu.Card maxWidth={300} maxHeight={200}>
          <Tabs.Menu.List>
            {(item: Tab) => <Tabs.Menu.Item>{item.tab}</Tabs.Menu.Item>}
          </Tabs.Menu.List>
        </Tabs.Menu.Card>
      </Tabs.Menu.Popper>
      <Tabs.Panels>
        {(item: Tab) => <Tabs.Panel marginTop="m">Contents of {item.tab}</Tabs.Panel>}
      </Tabs.Panels>
    </Tabs>
  );
};

```

## Component API

<!-- API Reference for Tabs not found -->

## Specifications

### Specifications for Tabs

<!-- Component specifications from Tabs.spec.ts -->
