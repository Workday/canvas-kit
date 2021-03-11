# Canvas Kit React Badge

CountBadge provides a quantity-based summary with dynamic values.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Accessibility

A common use case for the CountBadge is for displaying notifications, and there are several
accessibility concerns you'll want to keep in mind:

- The button should have an aria-label that updates with the count
- The elements inside the button should have `aria-hidden`
- The live region should be outside the button
- The live region should be visually hidden and only contain text

### Notification Example

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
</AccessibleHide>
```

## Usage

📝 **Note** With all usage examples, please also refer to the accessibility guidelines above.

### Basic Usage

#### Setting the Count

```tsx
import * as React from 'react';
import {CountBadge} from '@workday/canvas-kit-react/badge';

const CustomCountBadge = () => {
  return <CountBadge count={3} />;
};
```

#### Setting a Variant

```tsx
import * as React from 'react';
import {CountBadge} from '@workday/canvas-kit-react/badge';

const InverseCountBadge = () => {
  return <CountBadge variant="inverse" count={3} />;
};
```

#### Setting a Limit

```tsx
import * as React from 'react';
import {CountBadge} from '@workday/canvas-kit-react/badge';

const InverseCountBadge = () => {
  // this will display the count as '99+'
  return <CountBadge variant="inverse" count={100} limit={100} />;
};
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

By default, values greater than 999 are formatted to "999+"

#### `limit: number`

> Limit sets when to format the displayed count

Default: `1000`
