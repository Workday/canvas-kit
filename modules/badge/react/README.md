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

If the count is live-updated (as in the case of notifications) and not static, please add
`aria-live="polite"` to inform screen readers to announce updated information. When this attribute
is set the screen reader will announce changes when the user is idle.

```jsx
<Badge count={3} aria-live="polite" aria-label="3 direct reports" />
```

## Usage

```tsx
import * as React from 'react';
import Badge from '@workday/canvas-kit-react-badge';

// default Badge
<Badge count={3} aria-label="3 unread notifications" />

// inverse Badge variant
<Badge variant="inverse" count={3} aria-label="3 unread notifications" />

```

## Static Properties

> None

## Component Props

### Required

#### `aria-label: string`

> Description for the badge

### Optional

#### `variant: 'default' | 'inverse'`

> Styled variant for the Badge

| Variant   | Description                 |
| --------- | --------------------------- |
| `default` | Red background, White text  |
| `inverse` | White background, Blue text |

Default: `default`

---

#### `count: number`

> Count displayed on the Badge

Default: `0`

📝 **Note**

Values greater than 999 are formatted to "999+"
