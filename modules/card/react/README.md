# Canvas Kit Card

Generic Canvas card component

[> Workday Design Reference](https://design.workday.com/components/containers/cards)

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-card
```

## Usage

```tsx
import Card from '@workday/canvas-kit-react-card';
import {depth, spacing} from '@workday/canvas-kit-react-core';

<Card heading="Title">
  Card contents
</Card>

<Card padding={spacing.l}>
  Card with custom padding
</Card>

<Card depth={depth[1]}>
  Card with custom depth
</Card>
```

## Static Properties

> None

## Component Props

### Required

> None

### Optional

#### `heading: ReactNode`

> Heading at the top of the card.

Default: `null`

---

#### `headingId: string`

> Heading ID for accessibility. Useful tie to an `aria-labelledby`

---

#### `padding: 0 | CanvasSpacingValue`

> Padding of the card. Style imported from `@workday/canvas-kit-react-core`.

Default: `spacing.l`

---

#### `depth: CanvasDepthValue`

> Depth of the card. Style imported from `@workday/canvas-kit-react-core`.

Default: `depth[2]`

---

#### `width: number | string`

> Width of the card.

Default: `null`

---

#### `height: number | string`

> Height of the card.

Default: `null`
