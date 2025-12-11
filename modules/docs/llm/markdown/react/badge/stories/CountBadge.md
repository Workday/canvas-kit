---
source_file: react/badge/stories/CountBadge.mdx
live_url: https://workday.github.io/canvas-kit/react/badge/stories/CountBadge
---

<Meta of={CountBadgeStories} />

# Canvas Kit Count Badge

`CountBadge` provides a quantity-based summary with dynamic values.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

The following section provides examples for common use cases. Please be sure to also read the
Accessibility section below.

### Basic

Use the default `CountBadge` variant for most situations. The default `high` emphasis is ideal for
drawing attention to important or primary information.

```tsx
import {CountBadge} from '@workday/canvas-kit-react/badge';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  display: 'flex',
  gap: system.space.x2,
  padding: system.space.x4,
});

export const Basic = () => {
  return (
    <div className={containerStyles}>
      <CountBadge count={427} />
    </div>
  );
};

```

### Emphasis

Select the `low` emphasis option for less prominent or secondary information. This is useful when
you want the badge to be visible but not distracting.

`high` emphasis is ideal for drawing attention to important or primary information.

```tsx
import {CountBadge} from '@workday/canvas-kit-react/badge';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {Text} from '@workday/canvas-kit-react/text';

const containerStyles = createStyles({
  display: 'flex',
  gap: system.space.x2,
  padding: system.space.x4,
  flexDirection: 'column',
});

const textStyles = createStyles({
  paddingInlineEnd: system.space.x2,
});

export const Emphasis = () => {
  return (
    <div className={containerStyles}>
      <div>
        <Text as="strong" className={textStyles}>
          Low Emphasis:
        </Text>
        <CountBadge count={427} emphasis="low" />
      </div>
      <div>
        <Text as="strong" className={textStyles}>
          High Emphasis:
        </Text>
        <CountBadge count={427} emphasis="high" />
      </div>
    </div>
  );
};

```

### Inverse

Apply the `inverse` variant when displaying the badge on dark or accent backgrounds to maintain
proper contrast and readability. This ensures the badge remains legible in visually dense or colored
areas. The same rules apply for `low` and `high` emphasis. Only use this combination on backgrounds with
[a token of 600 or greater](https://workday.github.io/canvas-tokens/?path=/docs/docs-base-tokens--docs)
to ensure sufficient contrast and accessibility.

```tsx
import {CountBadge} from '@workday/canvas-kit-react/badge';
import {createStyles, cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {Text} from '@workday/canvas-kit-react/text';
const containerStyles = createStyles({
  display: 'flex',
  gap: system.space.x2,
  padding: system.space.x4,
  backgroundColor: system.color.static.blue.default,
  flexDirection: 'column',
});

const textStyles = createStyles({
  paddingInlineEnd: system.space.x2,
});

export const Inverse = () => {
  return (
    <div className={containerStyles}>
      <div>
        <Text as="strong" variant="inverse" className={textStyles}>
          Low Emphasis:
        </Text>
        <CountBadge count={427} variant="inverse" emphasis="low" />
      </div>
      <div>
        <Text as="strong" variant="inverse" className={textStyles}>
          High Emphasis
        </Text>
        <CountBadge count={427} variant="inverse" emphasis="high" />
      </div>
    </div>
  );
};

```

### Custom Limit

By default, `CountBadge`'s limit is set to `1000`. Once the count reaches the limit, the badge will
format the number: `1000` becomes `999+`. The default limit is largely arbitrary and intended to
prevent unexpected overflow. You should choose a limit based on your specific use case and consider
the user's experience. For example, someone looking for a new job finds there are `99+` new
opportunities. Or perhaps someone returns from extended leave and is overwhelmed by `999+` unread
messages on their first day back.

```tsx
import * as React from 'react';
import {CountBadge} from '@workday/canvas-kit-react/badge';
import {TertiaryButton} from '@workday/canvas-kit-react/button';

import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const columnStyles = createStyles({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: system.space.x4,
});

const controls = createStyles({
  boxSizing: 'border-box',
  borderBottom: `solid 1px ${system.color.border.divider}`,
  display: 'flex',
  gap: system.space.x1,
  padding: system.space.x1,
});

const defaultBackground = createStyles({
  boxSizing: 'border-box',
  backgroundColor: system.color.bg.alt.soft,
  padding: system.space.x4,
});

const inverseBackground = createStyles({
  boxSizing: 'border-box',
  backgroundColor: system.color.bg.primary.default,
  padding: system.space.x4,
});

const initialCount = 1;

export const CustomLimit = () => {
  const [count, setCount] = React.useState(initialCount);

  return (
    <div className={columnStyles}>
      <div className={controls}>
        <TertiaryButton size="small" onClick={() => setCount(count + 1)}>
          Increment
        </TertiaryButton>
        <TertiaryButton size="small" onClick={() => setCount(initialCount)}>
          Reset
        </TertiaryButton>
      </div>
      <div className={defaultBackground}>
        <CountBadge count={count} limit={10} />
      </div>
      <div className={inverseBackground}>
        <CountBadge count={count} limit={10} variant="inverse" />
      </div>
    </div>
  );
};

```

### Accessibility

#### Notification Badge

Notifications are a major use case for `CountBadge`. When the `CountBadge` value is updated in
real-time, screen readers must be supported with an `AriaLiveRegion` that will automatically
describe the change in the number of notifications. If the web app only updates `CountBadge` as part
of another screen update, then this use of `AriaLiveRegion` is unnecessary and not recommended.

- `Tooltip` is set on the `SecondaryButton` automatically applying the `aria-label` to the button.
- `aria-describedby` property is conditionally set on the `SecondaryButton` when greater than zero
  referencing a unique `id` for the `CountBadge` value .
- `AriaLiveRegion` is used around the `CountBadge`, enabling screen readers to monitor changes in
  value.
- `aria-label` string is conditionally set on `AriaLiveRegion` when greater than zero, describing
  "New notification"

```tsx
import * as React from 'react';
import {CountBadge} from '@workday/canvas-kit-react/badge';
import {SecondaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';
import {AriaLiveRegion, useUniqueId} from '@workday/canvas-kit-react/common';
import {createStyles, cssVar} from '@workday/canvas-kit-styling';
import {notificationsIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {Flex} from '@workday/canvas-kit-react/layout';

function negate(value: string, fallback?: string) {
  return `calc(${cssVar(value, fallback)} * -1)`;
}

const container = createStyles({
  boxSizing: 'border-box',
  flexDirection: 'column',
  gap: system.space.x4,
});

const controls = createStyles({
  boxSizing: 'border-box',
  gap: system.space.x2,
  padding: system.space.x1,
});

const notificationContainerStyles = createStyles({
  boxSizing: 'border-box',
  position: 'relative',
});

const countBadgeStyles = createStyles({
  boxSizing: 'border-box',
  position: 'absolute',
  top: negate(system.space.x1),
  insetInlineEnd: negate(system.space.x1),
});

// Testing notes (Aug. 30, 2024):
// Windows 11
// JAWS 2024 + Chrome / Edge: "New notifications" once, then only the count change "2"
// JAWS 2024 + FF: "New notifications" once, then describes nothing
// NVDA + Chrome / Edge: Consistently describes "{X} New notifications"
// NVDA + FF: Consistently describes count value only "{X}"
// macOS v14.6.1
// VoiceOver + Chrome / Safari: Consistently describes "New notifications {X}"
export const NotificationBadge = () => {
  const [count, setCount] = React.useState(4);
  const badgeID = useUniqueId();

  return (
    <Flex cs={container}>
      <Flex cs={controls}>
        <TertiaryButton size="small" onClick={() => setCount(count + 1)}>
          Add Notification
        </TertiaryButton>
        <TertiaryButton size="small" onClick={() => setCount(0)}>
          Clear
        </TertiaryButton>
      </Flex>
      <Flex>
        <span className={notificationContainerStyles}>
          <Tooltip title="Notifications">
            <SecondaryButton
              size="medium"
              icon={notificationsIcon}
              aria-describedby={!!count ? badgeID : undefined}
            />
          </Tooltip>
          <AriaLiveRegion aria-label={!!count ? 'New notifications' : undefined}>
            {!!count && <CountBadge id={badgeID} count={count} limit={100} cs={countBadgeStyles} />}
          </AriaLiveRegion>
        </span>
      </Flex>
    </Flex>
  );
};

```

### Custom Styles

Count Badge supports custom styling via the `cs` prop. For more information, check our
["How To Customize Styles"](https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs).

## Component API

<!-- API Reference for CountBadge not found -->
