---
source_file: react/card/stories/card.mdx
live_url: https://workday.github.io/canvas-kit/react/card/stories/card
---

<Meta of={CardStories} />

# Canvas Kit Card

A Card is a preview that serves as an entry point to more detailed information. Card is a
presentational [compound component](/getting-started/for-developers/resources/compound-components/)
used as a building block for other components such as [Popup](/components/popups/popup/) and
[Modal](/components/popups/modal/).

[> Workday Design Reference](https://design.workday.com/components/containers/cards)

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Basic Example

`Card` includes a container component and `Card.Body` and `Card.Heading` subcomponents.

```tsx
import React from 'react';
import {Card} from '@workday/canvas-kit-react/card';

export const Basic = () => {
  return (
    <Card>
      <Card.Heading>Canvas Supreme</Card.Heading>
      <Card.Body>
        Our house special supreme pizza includes pepperoni, sausage, bell peppers, mushrooms,
        onions, and oregano.
      </Card.Body>
    </Card>
  );
};

```

### Borderless Example

The `borderless` variant removes the border from the Card, creating a cleaner appearance while
maintaining the same internal spacing and structure. Use this variant when placing cards on colored
backgrounds where you want the card to blend seamlessly without borders or shadows.

```tsx
import React from 'react';
import {Card} from '@workday/canvas-kit-react/card';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styles = createStyles({
  background: system.color.bg.alt.softer,
  padding: system.space.x4,
});

export const Borderless = () => {
  return (
    <div className={styles}>
      <Card variant="borderless">
        <Card.Heading>Canvas Supreme</Card.Heading>
        <Card.Body>
          Our house special supreme pizza includes pepperoni, sausage, bell peppers, mushrooms,
          onions, and oregano.
        </Card.Body>
      </Card>
    </div>
  );
};

```

### Filled Example

The `filled` variant adds a background color to the Card, creating a more prominent appearance while
maintaining the same internal spacing and structure. Use this variant when you need a card with a
grayish background to create visual separation from the page background.

```tsx
import React from 'react';
import {Card} from '@workday/canvas-kit-react/card';

export const Filled = () => {
  return (
    <Card variant="filled">
      <Card.Heading>Canvas Supreme</Card.Heading>
      <Card.Body>
        Our house special supreme pizza includes pepperoni, sausage, bell peppers, mushrooms,
        onions, and oregano.
      </Card.Body>
    </Card>
  );
};

```

### Custom Styles

Card and its subcomponents support custom styling via the `cs` prop. For more information, check our
["How To Customize Styles"](https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs).

```tsx
import * as React from 'react';

import {Card} from '@workday/canvas-kit-react/card';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const customCardStyles = createStyles({
  boxShadow: system.depth[2],
  maxWidth: px2rem(320),
  padding: system.space.x3,
});

export const WithCustomStyles = () => (
  <Card cs={customCardStyles}>
    <Card.Heading>Canvas Supreme</Card.Heading>
    <Card.Body>
      Our house special supreme pizza includes pepperoni, sausage, bell peppers, mushrooms, onions,
      and oregano.
    </Card.Body>
  </Card>
);

```

## Stencils

You can also use `Card` stencils to extend styles for your own custom components. This allows you to
compose styles without using components directly. In the example below, we're extending `Card`
stencils to create a custom `MenuCard` component.

Here's an example of a `Card` with a reduced padding of `x3` (`0.75rem` or `12px`).

```tsx
import * as React from 'react';
import {cardStencil, cardBodyStencil, cardHeadingStencil} from '@workday/canvas-kit-react/card';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, px2rem, CSProps, handleCsProp} from '@workday/canvas-kit-styling';
import {system, brand} from '@workday/canvas-tokens-web';

const menuCardStencil = createStencil({
  extends: cardStencil,
  base: {
    display: 'flex',
    flexDirection: 'column',
    padding: system.space.zero,
    maxWidth: px2rem(320),
    boxShadow: system.depth[1],
    overflow: 'hidden',
  },
});

const menuCardHeroStencil = createStencil({
  base: {
    display: 'flex',
    alignItems: 'flex-end',
    background: brand.gradient.primary,
    aspectRatio: '1',
    maxHeight: px2rem(80),
    padding: system.space.x2,
  },
});

const MenuCardHero = createComponent('div')({
  displayName: 'MenuCard.Hero',
  Component: (elemProps: CSProps, ref, Element) => {
    return <Element ref={ref} {...handleCsProp(elemProps, menuCardHeroStencil())} />;
  },
});

const menuCardContentStencil = createStencil({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: system.space.x2,
    padding: system.space.x2,
  },
});

const MenuCardContent = createComponent('div')({
  displayName: 'MenuCard.Content',
  Component: (elemProps: CSProps, ref, Element) => {
    return <Element ref={ref} {...handleCsProp(elemProps, menuCardContentStencil())} />;
  },
});

const menuCardHeadingStencil = createStencil({
  extends: cardHeadingStencil,
  base: {
    color: brand.primary.accent,
    margin: system.space.zero,
  },
});

const MenuCardHeading = createComponent('h3')({
  displayName: 'MenuCard.Heading',
  Component: (elemProps: CSProps, ref, Element) => {
    return <Element ref={ref} {...handleCsProp(elemProps, menuCardHeadingStencil())} />;
  },
});

const menuCardTextStencil = createStencil({
  extends: cardBodyStencil,
  base: {
    margin: 0,
  },
});

const MenuCardText = createComponent('p')({
  displayName: 'MenuCard.Text',
  Component: (elemProps: CSProps, ref, Element) => {
    return <Element ref={ref} {...handleCsProp(elemProps, menuCardTextStencil())} />;
  },
});

const MenuCard = createComponent('div')({
  displayName: 'MenuCard',
  Component: (elemProps: CSProps, ref, Element) => {
    return <Element ref={ref} {...handleCsProp(elemProps, menuCardStencil())} />;
  },
  subComponents: {
    Content: MenuCardContent,
    Heading: MenuCardHeading,
    Hero: MenuCardHero,
    Text: MenuCardText,
  },
});

export const WithStencils = () => (
  <MenuCard>
    <MenuCard.Hero>
      <MenuCard.Heading>Sausage Pizza</MenuCard.Heading>
    </MenuCard.Hero>
    <MenuCard.Content>
      <MenuCard.Text>
        Red sauce, homemade seasoned sausage, mushrooms, red bell peppers, rosemary, cheese.
      </MenuCard.Text>
      <MenuCard.Text></MenuCard.Text>
    </MenuCard.Content>
  </MenuCard>
);

```

## Component API

<!-- API Reference for Card not found -->
