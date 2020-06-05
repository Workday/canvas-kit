# Canvas Kit React Badge

CountBadge provides a quantity-based summary with dynamic values.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-badge
```

## Accessibility

A common use case for the CountBadge is for displaying notifications, and there are several
accessibility concerns you'll want to keep in mind:

- The button should have an aria-label that updates with the count
- The elements inside the button should have `aria-hidden`
- The live region should be outside the button
- The live region should be visually hidden and only contain text

### Example

```tsx
import styled from '@emotion/styled';
import { accessibleHide } from "@workday/canvas-kit-react";

...

const AccessibleHide = styled('div')({
  ...accessibleHide,
});

...

<IconButton
  style={{ position: "relative" }}
  aria-label={`Alerts ${count} new notifications`}
  size={IconButton.Size.Medium}
  variant={IconButton.Variant.Circle}
>
  <SystemIcon icon={notificationsIcon} aria-hidden="true" />
  <Badge count={count} aria-hidden="true" />
</IconButton>
<AccessibleHide role="status" aria-live="polite" aria-atomic="true">
  New notifications
</div>
```

## Usage

```tsx
import * as React from 'react';
import {CountBadge} from '@workday/canvas-kit-react-badge';

// default CountBadge
<CountBadge count={3} />

// inverse CountBadge variant
<CountBadge variant="inverse" count={3} />

```

## Static Properties

> None

## Component Props

### Required

> None

### Optional

#### `variant: 'default' | 'inverse'`

> Styled variant for the badge

| Variant   | Description                 |
| --------- | --------------------------- |
| `default` | Red background, White text  |
| `inverse` | White background, Blue text |

Default: `default`

---

#### `count: number`

> Count displayed on the badge

Default: `0`

📝 **Note**

Values greater than 999 are formatted to "999+"
