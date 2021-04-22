# Canvas Kit Card

Generic Canvas card component

[> Workday Design Reference](https://design.workday.com/components/containers/cards)

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

```tsx
import Card from '@workday/canvas-kit-react/card';
import {depth, space} from '@workday/canvas-kit-react/tokens';

<Card>
  <Card.Heading>Title</Card.Heading>
  <Card.Body>Card contents</Card.Body>
</Card>

<Card padding={space.l}>
  <Card.Body>Card with custom padding</Card.Body>
</Card>

<Card depth={depth[1]}>
  <Card.Body>Card with custom depth</Card.Body>
</Card>
```

## Static Properties

> None

## Component Props

### Required

> None

### Optional

---

#### `padding: 0 | CanvasSpaceValues`

> Padding of the card. Style imported from `@workday/canvas-kit-react/tokens`.

Default: `space.l`

---

#### `depth: CanvasDepthValue`

> Depth of the card. Style imported from `@workday/canvas-kit-react/tokens`.

Default: `depth[2]`

---

#### `width: number | string`

> Width of the card.

Default: `null`

---

#### `height: number | string`

> Height of the card.

Default: `null`
