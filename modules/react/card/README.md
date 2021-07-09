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

<Card>
  <Card.Heading>Title</Card.Heading>
  <Card.Body>Card contents</Card.Body>
</Card>

<Card padding="l">
  <Card.Body>Card with custom padding</Card.Body>
</Card>

<Card depth={1}>
  <Card.Body>Card with custom depth</Card.Body>
</Card>
```
