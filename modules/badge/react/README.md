# Canvas Kit React Badge

Badge provides a quantity-based summary with dynamic values.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-badge
```

## Usage

```tsx
import * as React from 'react';
import Badge from '@workday/canvas-kit-react-badge';

// default Badge
<Badge count={3} aria-label="3 unread notifications" />

// inverse Badge variant
<Badge variant="inverse" count={3} aria-label="3 unread notifications" />

// empty Badge
<Badge variant="inverse" aria-label="new unread notifications" />
```

## Static Properties

> None

## Component Props

### Required

#### `aria-label: string`

> Description for the badge

### Optional

#### `aria-live: 'off' | 'polite' | 'assertive'`

> Informs the screen reader to announce changes when the user is idle

Default: `polite`

📝 **Note**

This prop defaults to 'polite' as it assumes the count will be live-updated. However, if the count
is static, please set this prop to `off` to prevent misinforming screen readers and causing
unintentional announcements.

```jsx
<Badge count={3} aria-live="off" aria-label="3 direct reports" />
```

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

📝 **Note**

Values greater than 999 are formatted to "999+"
