---
source_file: react/expandable/stories/Expandable.mdx
live_url: https://workday.github.io/canvas-kit/react/expandable/stories/Expandable
---

<Meta of={ExpandableStories} />

# Canvas Kit Expandable

`Expandable` is a compound component that creates a header to expand or collapse related content.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Start Icon

For a basic expandable container with a chevron icon before the title, place`Expandable.Icon` before
`Expandable.Title` as children of `Expandable.Target` and pass the `iconPosition` prop to
`Expandable.Icon` with a value of `start`. `Expandable.Icon` will use a right chevron icon when
collapsed and a down chevron icon when expanded.

```tsx
import {Expandable} from '@workday/canvas-kit-react/expandable';

export const StartIcon = () => (
  <Expandable>
    <Expandable.Target headingLevel="h4">
      <Expandable.Icon iconPosition="start" />
      <Expandable.Title>Title</Expandable.Title>
    </Expandable.Target>

    <Expandable.Content>Content</Expandable.Content>
  </Expandable>
);

```

### End Icon

For an expandable container with a chevron icon after the title, place `Expandable.Title` before
`Expandable.Icon` as children of `Expandable.Target` and pass the `iconPosition` prop to
`Expandable.Icon` with a value of `end`. `Expandable.Icon` will use a down chevron icon when
collapsed and an up chevron icon when expanded.

```tsx
import {Expandable} from '@workday/canvas-kit-react/expandable';

export const EndIcon = () => (
  <Expandable>
    <Expandable.Target headingLevel="h4">
      <Expandable.Title>
        TitleTitleTitleTitleTitle TitleTitleTitleTitle TitleTitleTitle Title
      </Expandable.Title>
      <Expandable.Icon iconPosition="end" />
    </Expandable.Target>

    <Expandable.Content>Content</Expandable.Content>
  </Expandable>
);

```

### With Avatar

To include an avatar image, `Expandable.Avatar` should be placed between `Expandable.Icon` and
`Expandable.Title`. An `iconPosition` prop with a value of either `start` or `end` should be passed
to `Expandable.Icon` depending on whether the `Expandable.Icon` is placed before or after
`Expandable.Title`.

```tsx
import {Expandable} from '@workday/canvas-kit-react/expandable';
// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';

export const Avatar = () => (
  <div>
    <Expandable>
      <Expandable.Target headingLevel="h4">
        <Expandable.Icon iconPosition="start" />
        <Expandable.Avatar name="Avatar" url={testAvatar} />
        <Expandable.Title>Title</Expandable.Title>
      </Expandable.Target>

      <Expandable.Content>Content</Expandable.Content>
    </Expandable>
    <Expandable>
      <Expandable.Target headingLevel="h4">
        <Expandable.Avatar name="Avatar" url={testAvatar} />
        <Expandable.Title>Title</Expandable.Title>
        <Expandable.Icon iconPosition="end" />
      </Expandable.Target>

      <Expandable.Content>Content</Expandable.Content>
    </Expandable>
  </div>
);

```

### Right to Left (RTL)

Expandable container has bidirectional support and should function as expected with RTL languages as
long as the content direction is set in your Canvas theme.

```tsx
import {Expandable} from '@workday/canvas-kit-react/expandable';
import {CanvasProvider} from '@workday/canvas-kit-react/common';

export const RTL = () => {
  return (
    <CanvasProvider dir="rtl">
      <Expandable>
        <Expandable.Target headingLevel="h4">
          <Expandable.Icon iconPosition="start" />
          <Expandable.Avatar name="Avatar" />
          <Expandable.Title>Title</Expandable.Title>
        </Expandable.Target>

        <Expandable.Content>Content</Expandable.Content>
      </Expandable>
      <Expandable>
        <Expandable.Target headingLevel="h4">
          <Expandable.Avatar name="Avatar" />
          <Expandable.Title>Title</Expandable.Title>
          <Expandable.Icon iconPosition="end" />
        </Expandable.Target>

        <Expandable.Content>Content</Expandable.Content>
      </Expandable>
    </CanvasProvider>
  );
};

```

### Depth

The `depth` prop passed to `Expandable` allows you to adjust the visual elevation of a component
using our depth tokens.

```tsx
import {Expandable} from '@workday/canvas-kit-react/expandable';

export const Depth = () => {
  return (
    <Expandable borderRadius="l" depth={3} margin="xxxs" padding="xs">
      <Expandable.Target headingLevel="h4">
        <Expandable.Title>Additional Information</Expandable.Title>
        <Expandable.Icon iconPosition="end" />
      </Expandable.Target>

      <Expandable.Content>This Expandable Container has a depth of 3.</Expandable.Content>
    </Expandable>
  );
};

```

### Title Wrap

Long titles will wrap to the next line and increase the height of the container.

```tsx
import {Expandable} from '@workday/canvas-kit-react/expandable';
// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';

export const LongTitle = () => (
  <Expandable>
    <Expandable.Target headingLevel="h4">
      <Expandable.Icon iconPosition="start" />
      <Expandable.Avatar name="Avatar" url={testAvatar} />
      <Expandable.Title>
        Our house special supreme pizza includes pepperoni, sausage, bell peppers, mushrooms,
        onions, and oregano.
      </Expandable.Title>
    </Expandable.Target>

    <Expandable.Content>Content</Expandable.Content>
  </Expandable>
);

```

You can also have direct access to the model if

### Hoisted Model

If you you need direct access to the model, you can hoist it with the `useExpandableModel` hook. In
the example below, we're hoisting the models to expand and collapse all three containers at once.

```tsx
import React from 'react';

import {Expandable, useExpandableModel} from '@workday/canvas-kit-react/expandable';
import {Flex} from '@workday/canvas-kit-react/layout';
import {SecondaryButton} from '@workday/canvas-kit-react/button';

export const HoistedModel = () => {
  const modelOne = useExpandableModel();
  const modelTwo = useExpandableModel();
  const modelThree = useExpandableModel();

  const handleExpandAll = () => {
    modelOne.events.show();
    modelTwo.events.show();
    modelThree.events.show();
  };

  const handleCollapseAll = () => {
    modelOne.events.hide();
    modelTwo.events.hide();
    modelThree.events.hide();
  };

  return (
    <Flex gap="m" flexDirection="column">
      <Flex gap="s">
        <SecondaryButton onClick={handleExpandAll}>Expand All</SecondaryButton>
        <SecondaryButton onClick={handleCollapseAll}>Collapse All</SecondaryButton>
      </Flex>
      <Flex flexDirection="column">
        <Expandable model={modelOne}>
          <Expandable.Target headingLevel="h4">
            <Expandable.Title>Usage Guidance</Expandable.Title>
            <Expandable.Icon iconPosition="end" />
          </Expandable.Target>

          <Expandable.Content>
            This component highlights the most important details of a section and reveals more when
            a user taps or clicks on the header part of the container. Enabling users to hide and
            show information ensures the design remains focused and relevant to their expectations.
            Scanning through the most critical information first makes processing more efficient
            without compromising the ability to access additional information.
          </Expandable.Content>
        </Expandable>
        <Expandable model={modelTwo}>
          <Expandable.Target headingLevel="h4">
            <Expandable.Title>Accessibility Guidelines</Expandable.Title>
            <Expandable.Icon iconPosition="end" />
          </Expandable.Target>

          <Expandable.Content>
            <Flex
              flexDirection="column"
              as="ul"
              gap="xxs"
              maxWidth="60ch"
              padding="zero"
              marginX="s"
              marginY="zero"
            >
              <li>
                The state of a component being open or closed must be conveyed to assistive
                technologies.
              </li>
              <li>A Button must be used as the control to toggle the display of any content.</li>
              <li>
                If there are multiple toggle Buttons on the same page, provide additional
                information in their labels to make them uniquely distinguishable to a screen
                reader.
              </li>
              <li>
                Do not change the toggle Button label to convey state. An exception to this would be
                a scenario where a visual hint text is decoupled from both the state and the label
                for a control so the hint text is not announced by assistive technologies.
              </li>
              <li>
                Avoid keyboard traps when adding components to the accordion panel. For example, the
                user expands an accordion, but is unable to tab to the next focusable element.
              </li>
              <li>
                Hidden content must be hidden correctly from keyboard, screen reader, and touch
                interaction.
              </li>
              <li>
                Changing the label of something to indicate its state will not always be accounted
                for in live time for a screen reader user. For example, a play button should have a
                non-changing, persistent label and the state (pressed or unpressed) is conveyed
                visually as well as to assistive technology once the state is changed.
              </li>
            </Flex>
          </Expandable.Content>
        </Expandable>
        <Expandable model={modelThree}>
          <Expandable.Target headingLevel="h4">
            <Expandable.Title>Content Guidelines</Expandable.Title>
            <Expandable.Icon iconPosition="end" />
          </Expandable.Target>
          <Expandable.Content>
            Titles should be short and concise, yet long enough to explain what the user would
            expect to see when the content is expanded. If titles must be long, make sure it doesn't
            wrap more than two lines.
          </Expandable.Content>
        </Expandable>
      </Flex>
    </Flex>
  );
};

```

## Component API

<!-- API Reference for Expandable not found -->
