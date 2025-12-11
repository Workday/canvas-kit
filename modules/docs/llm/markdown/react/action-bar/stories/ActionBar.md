---
source_file: react/action-bar/stories/ActionBar.mdx
live_url: https://workday.github.io/canvas-kit/react/action-bar/stories/ActionBar
---

<Meta of={ActionBarStories} />

# Canvas Kit Action Bar

Action Bar is a [compound component](/getting-started/for-developers/resources/compound-components/)
that contains primary and secondary actions related to a page or task.

[> Workday Design Reference](https://design.workday.com/components/buttons/action-bar)

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Basic Example

`ActionBar` includes a container `ActionBar` component and the following subcomponent:
`ActionBar.List` which should contains `ActionBar.Item`.

In a basic example of an `ActionBar` there are two buttons. The primary action button should be used
only once and left aligned if content is left to right, followed by secondary buttons. Tertiary
buttons should not be used in the Action Bar.

```tsx
import {ActionBar} from '@workday/canvas-kit-react/action-bar';
import {PrimaryButton} from '@workday/canvas-kit-react/button';

export const Basic = () => {
  return (
    <ActionBar>
      <ActionBar.List position="relative" as="section" aria-label="Action Bar">
        <ActionBar.Item as={PrimaryButton} onClick={() => console.log('first action')}>
          First Action
        </ActionBar.Item>
        <ActionBar.Item>Second Action</ActionBar.Item>
      </ActionBar.List>
    </ActionBar>
  );
};

```

### Icons Example

`ActionBar.Item` renders a `SecondaryButton` as default, so it's possible to use other Button props
with `ActionBar.Item` such as `icon` or `size`.

```tsx
import {ActionBar} from '@workday/canvas-kit-react/action-bar';
import {notificationsIcon, alarmClockIcon} from '@workday/canvas-system-icons-web';
import {PrimaryButton} from '@workday/canvas-kit-react/button';

export const Icons = () => {
  return (
    <ActionBar>
      <ActionBar.List position="relative" as="section" aria-label="Action Bar">
        <ActionBar.Item as={PrimaryButton} icon={notificationsIcon}>
          First Action
        </ActionBar.Item>
        <ActionBar.Item icon={alarmClockIcon}>Second Action</ActionBar.Item>
      </ActionBar.List>
    </ActionBar>
  );
};

```

### Delete Action Example

`ActionBar.Item` is a `SecondaryButton` by default but it's posible to change it to another element,
such as `DeleteButton`, by using `as` prop.

```tsx
import {ActionBar} from '@workday/canvas-kit-react/action-bar';
import {DeleteButton} from '@workday/canvas-kit-react/button';

export const DeleteAction = () => {
  return (
    <ActionBar>
      <ActionBar.List position="relative" as="section" aria-label="Action Bar">
        <ActionBar.Item as={DeleteButton}>Delete Action</ActionBar.Item>
        <ActionBar.Item>Second Action</ActionBar.Item>
      </ActionBar.List>
    </ActionBar>
  );
};

```

### Overflow Example

`ActionBar` container can contain up to 3 actions and an Overflow Menu if there are more than 3
actions, the other remaining actions should be placed into an Overflow Menu that is launched by
clicking the Overflow Button.

Also, ActionBar is a responsive component based on the width of its container. If the rendered
actions exceed the width of the `ActionBar.List`, an overflow menu will be rendered. This only works
against the dynamic API where you give the `ActionBarModel` an array of items to be rendered. The
dynamic API handles the React `key` for you based on the item's identifier. The dynamic API requires
either an `id` on each item object or a `getId` function that returns an identifier based on the
item. The below example uses an `id` property on each item.

The dynamic API takes in any object, but since nothing is known about your object, a
[render prop](https://reactjs.org/docs/render-props.html) is necessary to instruct a list how it
should render.

```tsx
import React from 'react';
import {breakpoints} from '@workday/canvas-kit-react/common';
import {ActionBar, useActionBarModel} from '@workday/canvas-kit-react/action-bar';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {SegmentedControl} from '@workday/canvas-kit-preview-react/segmented-control';
import {Box} from '@workday/canvas-kit-react/layout';

type MyActionItem = {
  id: string;
  text: React.ReactNode;
};

export const OverflowActionBar = () => {
  const [items] = React.useState<MyActionItem[]>([
    {id: 'first', text: 'First Action'},
    {id: 'second', text: 'Second Action'},
    {id: 'third', text: 'Third Action'},
    {id: 'fourth', text: 'Fourth Action'},
    {id: 'fifth', text: 'Fifth Action'},
  ]);

  const model = useActionBarModel({items});
  const [containerWidth, setContainerWidth] = React.useState<string | number>('100%');

  return (
    <div>
      <Box maxWidth={containerWidth} marginBottom="xl">
        <ActionBar model={model}>
          <ActionBar.List
            position="relative"
            as="section"
            aria-label="Action Bar"
            overflowButton={<ActionBar.OverflowButton aria-label="More actions" />}
          >
            {(item: MyActionItem, index) => (
              <ActionBar.Item
                as={index === 0 ? PrimaryButton : undefined}
                onClick={() => console.log(item.id)}
              >
                {item.text}
              </ActionBar.Item>
            )}
          </ActionBar.List>
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
      <footer>
        <h4>Change Action Bar container size</h4>
        <SegmentedControl onSelect={data => setContainerWidth(data.id)}>
          <SegmentedControl.List role="group" aria-label="container width control" marginBottom="m">
            <SegmentedControl.Item data-id="100%">100%</SegmentedControl.Item>
            <SegmentedControl.Item data-id={`${breakpoints.m}px`}>Small</SegmentedControl.Item>
            <SegmentedControl.Item data-id="420px">420px</SegmentedControl.Item>
            <SegmentedControl.Item data-id={`${breakpoints.s}px`}>
              Extra Small
            </SegmentedControl.Item>
          </SegmentedControl.List>
        </SegmentedControl>
        <p>Selected: {containerWidth}</p>
      </footer>
    </div>
  );
};

```

The number of visible buttons can also be adjusted by using the model's `maximumVisible` attribute.
You can change it from the default of 3 to any number greater than 1 and less than items.length.

```tsx
import React from 'react';
import {ActionBar} from '@workday/canvas-kit-react/action-bar';

type MyActionItem = {
  id: string;
  text: React.ReactNode;
};

export const OverflowActionBarCustomButtonCount = () => {
  const [items] = React.useState<MyActionItem[]>([
    {id: 'view', text: 'View'},
    {id: 'edit', text: 'Edit'},
    {id: 'delete', text: 'Delete'},
  ]);

  return (
    <ActionBar items={items} maximumVisible={2}>
      <ActionBar.List
        as="section"
        aria-label="Custom button count overflow example"
        position="relative"
        overflowButton={<ActionBar.OverflowButton aria-label="More actions" />}
      >
        {(item: MyActionItem) => (
          <ActionBar.Item onClick={() => console.log(item.id)}>{item.text}</ActionBar.Item>
        )}
      </ActionBar.List>
      <ActionBar.Menu.Popper>
        <ActionBar.Menu.Card>
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
  );
};

```

## Accessibility

Grouping the actions into an HTML `<section>` element with an `aria-label` string is recommended.
This can be useful for helping screen reader users quickly jump down to the actions at the bottom of
a page.

Refer to [Button](?path=/docs/components-buttons--docs#accessibility) and
[Menus](?path=/docs/components-popups-menu--docs#accessibility) for more information about
accessibiliy of these components in the Action Bar.

## Component API

<!-- API Reference for ActionBar not found -->
