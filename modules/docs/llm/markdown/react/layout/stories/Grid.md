---
source_file: react/layout/stories/Grid.mdx
live_url: https://workday.github.io/canvas-kit/react/layout/stories/Grid
---

<Meta of={GridStories} />

# Canvas Kit Grid

`Grid` is a low-level layout component that provides a common, ergonomic API for building
two-dimensional layouts (rows and columns) with
[CSS Grid](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids).

Please refer to our [layout examples](/examples/layout/) for more examples of how to implement
different layouts using `Grid`.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Basic Example

> **Note**: We recommend you familiarize yourself with CSS Grid
> ([MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids),
> [CSS-Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)) before diving into our
> `Grid` component. This example makes use of
> [Grid Areas](https://developer.mozilla.org/en-US/docs/Glossary/Grid_Areas).

In this example, we set up a basic layout built with `Grid` using four child components: `Header`,
`SideBar`, `BodyContent` and `Footer`. By assigning the same names to each child's `gridArea` prop,
we're able to arrange them by referencing their names in the parent `Grid` container. Our example
uses a 12-column grid with `SideBar` occupying three columns and `BodyContent` occupying the
remaining nine.

```tsx
import {Grid} from '@workday/canvas-kit-react/layout';
import {Heading} from '@workday/canvas-kit-react/text';
import {system} from '@workday/canvas-tokens-web';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';

const containerStyles = createStyles({
  gridTemplateAreas:
    "'Header Header Header Header' 'SideBar BodyContent BodyContent BodyContent' 'Footer Footer Footer Footer'",
  gridGap: system.space.x4,
  gridTemplateColumns: '3fr 9fr',
  gridTemplateRows: `auto ${px2rem(300)} auto`,
});

const gridStyles = createStyles({
  backgroundColor: system.color.bg.primary.default,
  borderRadius: system.shape.x1,
  boxShadow: system.depth[1],
  padding: system.space.x4,
});

const headingStyles = createStyles({
  margin: system.space.zero,
  ...system.type.heading.small,
});

export const Basic = () => {
  return (
    <Grid cs={containerStyles}>
      <Grid as="header" gridArea="Header" cs={gridStyles}>
        <Heading variant="inverse" size="small" cs={headingStyles}>
          Page Header
        </Heading>
      </Grid>
      <Grid as="nav" gridArea="SideBar" cs={gridStyles}>
        <Heading variant="inverse" size="small" cs={headingStyles}>
          Navigation
        </Heading>
      </Grid>
      <Grid as="main" gridArea="BodyContent" cs={gridStyles}>
        <Heading variant="inverse" size="small" cs={headingStyles}>
          Main Content
        </Heading>
      </Grid>
      <Grid as="footer" gridArea="Footer" cs={gridStyles}>
        <Heading variant="inverse" size="small" cs={headingStyles}>
          Page Footer
        </Heading>
      </Grid>
    </Grid>
  );
};

```

### Using Grid Items

In the example above we nested `Grid` components to create our layout, and we controlled the layout
structure from the top-level `Grid` container. We can also use `Grid.Item` components to allow child
cells to have more control. While any direct child of a `Grid` component is implicitly a grid item,
`Grid.Item` provides special CSS Grid Item style props that allow you to have more control over how
and where each item renders.

To demonstrate this behavior, the example below has a `Grid` container with nine cells. The eight
`soap500` cells are `Grid` components, and the `peach300` cell is a `Grid.Item`. We can use the
`Grid.Item` style props `gridRowStart` and `gridColumnStart` to manipulate where the cell renders.
Use the `Row` and `Column` buttons to manipulate these props and see the `Grid.Item`'s position
adjust accordingly.

> **Note**: This example is solely intended to demonstrate `Grid.Item`'s functionality and is
> **not** considered an accessibility best practice. Visually reordering content does not change the
> tab order or the order it is read in by a screen reader. Learn more about
> [CSS Grid layout and accessibility](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility).

```tsx
import React, {useState, useEffect, useRef} from 'react';
import {Grid} from '@workday/canvas-kit-react/layout';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
// eslint-disable-next-line no-duplicate-imports
import {
  arrowDownIcon,
  arrowLeftIcon,
  arrowRightIcon,
  arrowUpIcon,
} from '@workday/canvas-system-icons-web';

const Cell = (props: {children: React.ReactNode}) => {
  return (
    <Grid
      alignContent="center"
      padding="xs"
      justifyContent="center"
      backgroundColor="soap500"
      color="blackPepper500"
      borderRadius="m"
    >
      {props.children}
    </Grid>
  );
};

const CellItem = (props: {children: React.ReactNode}) => {
  return (
    <Grid
      alignContent="center"
      gridAutoColumns="max-content"
      gridGap="xs"
      height="100%"
      gridAutoFlow="column"
      padding="xs"
      justifyContent="center"
      backgroundColor="peach300"
      color="frenchVanilla100"
      borderRadius="m"
    >
      {props.children}
    </Grid>
  );
};

export const GridLayoutInteractive = () => {
  const [rowCount, setRowCount] = useState(1);
  const [colCount, setColCount] = useState(1);

  const Prev = val => {
    const ref = useRef();
    useEffect(() => {
      ref.current = val;
    }, [val]);
    return ref.current;
  };

  const prevRowCount = Prev(rowCount);
  const prevColCount = Prev(colCount);

  const plusMinus = (curr, prev) => {
    if (curr <= 2 && (!prev || prev <= 2)) {
      return true;
    }
  };

  const incDec = (curr, prev, func) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    plusMinus(curr, prev) ? func(curr + 1) : func(curr - 1);
  };

  return (
    <Grid gridAutoFlow="row" padding="xs">
      <Grid
        gridTemplateColumns="repeat(3, 1fr)"
        gridTemplateRows="repeat(3, 1fr)"
        gridGap="xs"
        padding="xs"
        border="5px solid #c860d1"
      >
        <Grid.Item gridRowStart={rowCount} gridColumnStart={colCount}>
          <CellItem>
            <PrimaryButton
              size="extraSmall"
              icon={plusMinus(rowCount, prevRowCount) ? arrowDownIcon : arrowUpIcon}
              onClick={() => {
                incDec(rowCount, prevRowCount, setRowCount);
              }}
            >
              Row: {rowCount}
            </PrimaryButton>
            <PrimaryButton
              size="extraSmall"
              icon={plusMinus(colCount, prevColCount) ? arrowRightIcon : arrowLeftIcon}
              onClick={() => {
                incDec(colCount, prevColCount, setColCount);
              }}
            >
              Col: {colCount}
            </PrimaryButton>
          </CellItem>
        </Grid.Item>
        <Cell>2</Cell>
        <Cell>3</Cell>
        <Cell>4</Cell>
        <Cell>5</Cell>
        <Cell>6</Cell>
        <Cell>7</Cell>
        <Cell>8</Cell>
        <Cell>9</Cell>
      </Grid>
    </Grid>
  );
};

```

Let's look at another `Grid.Item` example. Below, we have a `Grid` container with two rows: one with
seven elements and another with two elements. Each row is a `Grid.Item` that wraps a nested `Grid`.
This allows you to use `Grid.Item` to place a layout where needed. Here, we use `gridRowStart` to
place the row with elements 3 through 7 before the row with elements 1 and 2.

```tsx
import * as React from 'react';
import {Box, Grid} from '@workday/canvas-kit-react/layout';

const Cell = (props: {children: React.ReactNode}) => {
  return (
    <Grid
      alignContent="center"
      padding="xs"
      justifyContent="center"
      backgroundColor="soap500"
      color="blackPepper500"
      borderRadius="m"
    >
      {props.children}
    </Grid>
  );
};

const CellItem = (props: {children: React.ReactNode}) => {
  return (
    <Grid
      alignContent="center"
      gridAutoColumns="max-content"
      height="100%"
      gridAutoFlow="column"
      padding="xs"
      justifyContent="center"
      backgroundColor="peach300"
      color="blackPepper500"
      borderRadius="m"
    >
      {props.children}
    </Grid>
  );
};

export const GridLayout = () => {
  return (
    <Box padding="xs">
      <Grid
        gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        padding="xxs"
        border="5px solid #c860d1"
        gridGap="xs"
      >
        <Grid.Item gridRowStart="2">
          <Grid gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))" gridGap="xxs">
            <Cell>1</Cell>
            <Cell>2</Cell>
          </Grid>
        </Grid.Item>
        <Grid.Item gridRowStart="1">
          <Grid gridTemplateColumns="repeat(auto-fit, minmax(100px, 1fr))" gridGap="xxs">
            <CellItem>3</CellItem>
            <CellItem>4</CellItem>
            <CellItem>5</CellItem>
            <CellItem>6</CellItem>
            <CellItem>7</CellItem>
          </Grid>
        </Grid.Item>
      </Grid>
    </Box>
  );
};

```

### Grid vs. Flex vs. Box

`Grid` and `Flex` are built on top of `Box`, so they have access to all `BoxProps`. Additionally,
`Grid` and `Flex` have their own specific style props that map to CSS Grid and Flexbox properties,
respectively. When using these components to build layouts, it is not a matter of choosing `Grid`
_or_ `Flex` _or_ `Box`, but rather deciding how to
[use them together](https://css-tricks.com/css-grid-replace-flexbox/). They are intended to be
complementary not exclusionary. With that said, here are general guidelines for when to use which:

- Use `Grid` for **two-dimensional** layouts (rows AND columns).
- Use `Flex` for **one-dimensional** layouts (a row OR a column).
- Use `Box` for generic containers that don't need CSS Flexbox or Grid.

## Component API

### Grid

`Grid` is a container component for creating two-dimensional layouts with CSS Grid. It has special
style props that map to CSS Grid style properties to provide a common, ergonomic API for building
layouts.

```tsx
<Grid gridTemplateColumns="1fr 2fr 1fr" gridGap={space.s}>
  <div>Implicit grid item 1</div>
  <div>Implicit grid item 2</div>
  <div>Implicit grid item 3</div>
</Grid>
```

#### Props

`Grid` exposes
[grid container style props](/getting-started/for-developers/resources/style-props/#grid) and `Box`
style props.

### Grid.Item

`Grid.Item` is a subcomponent of `Grid`. It is a `Box` component under the hood and exposes
[grid item style props](/getting-started/for-developers/resources/style-props/#grid) that map to CSS
Grid Item properties. This provides greater control over how child components render in your layout.

```tsx
<Grid gridGap={space.s}>
  <Grid.Item gridColumn="1 / span 2">First item</Grid.Item>
  <Grid.Item gridRow="1 / span 2">Second item</Grid.Item>
  <Grid.Item gridColumn="1 / span 2" gridRow="2">
    Third item
  </Grid.Item>
</Grid>
```

#### Props

`Grid.Item` exposes [grid item style props](/docs/features-style-props--grid-item-example) and `Box`
style props.
