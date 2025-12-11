---
source_file: docs/mdx/style-props/STYLE_PROPS.mdx
live_url: https://workday.github.io/canvas-kit/docs/mdx/style-props/STYLE_PROPS
---

<Meta title="Features/Style Props (deprecated)" />

# Style Props <StorybookStatusIndicator type="deprecated" />

Style props provide a common, ergonomic API for modifying a component's styles by passing styles
with props.

<InformationHighlight className="sb-unstyled" variant="caution">
  <InformationHighlight.Icon />
  <InformationHighlight.Heading> Style props are deprecated!</InformationHighlight.Heading>
  <InformationHighlight.Body>
    As we transition away from Emotion's runtime costs, we advise to move away from using style props. Please use our [styling utilities](https://workday.github.io/canvas-kit/?path=/docs/styling-getting-started-overview--docs) instead. For more information on this change, view our discussion on the [Future of Styling](https://github.com/Workday/canvas-kit/discussions/2265).

    You can use `14.1` codemod to automatic migration to `cs` prop. [Migration Docs](https://workday.github.io/canvas-kit/?path=/docs/guides-codemods--docs)

  </InformationHighlight.Body>
</InformationHighlight>

<br />

## System Prop Values

Many style props are design-system-aware and translate `SystemPropValues` for you automatically. In
the example below, the `padding` prop translates the value `s` to `16px` and `frenchVanilla100` to
`#ffffff`. These `SystemPropValues` are also included in our types, so your IDE's intellisense
should suggest these values as you work. This allows you to use Canvas design tokens fluidly without
disrupting your workflow.

```tsx
<Box padding="s" backgroundColor="frenchVanilla100">
  Hello, style props!
</Box>
```

There are seven types of system prop values: `color`, `depth`, `font`, `fontSize`, `fontWeight`,
`shape`, and `space` — corresponding to our Canvas design tokens. Each style prop section below
includes a table. The "System" column in that table will tell you which system prop values are
supported.

## Background

Background style props allow you to adjust the background styles of components.

```tsx
import {Box} from '@workday/canvas-kit-react/layout';

const baseStyles = {
  color: 'blackPepper500',
  display: 'inline-block',
  margin: 'xxs',
  minHeight: 'xl',
  minWidth: '8rem',
  padding: 'xs',
};

export const Background = () => {
  return (
    <div>
      <Box backgroundColor="cinnamon300" {...baseStyles}>
        Cinnamon 300
      </Box>
      <Box backgroundColor="sourLemon300" {...baseStyles}>
        Sour Lemon 300
      </Box>
      <Box backgroundColor="blueberry300" {...baseStyles}>
        Blueberry 300
      </Box>
    </div>
  );
};

```

<StylePropsTable styleProps={backgroundStyleFnConfigs} />

## Border

Border style props allow you to adjust the border styles of components.

```tsx
import {Box} from '@workday/canvas-kit-react/layout';

const baseStyles = {
  color: 'blackPepper300',
  display: 'inline-block',
  margin: 'xxs',
  minHeight: 'xl',
  minWidth: '8rem',
  padding: 'xs',
};

export const Border = () => (
  <div>
    <Box borderRadius="m" border="solid 4px" borderColor="cinnamon300" {...baseStyles}>
      Cinnamon 300
    </Box>
    <Box borderRadius="m" border="solid 4px" borderColor="sourLemon300" {...baseStyles}>
      Sour Lemon 300
    </Box>
    <Box borderRadius="m" border="solid 4px" borderColor="blueberry300" {...baseStyles}>
      Blueberry 300
    </Box>
  </div>
);

```

<StylePropsTable styleProps={borderStyleFnConfigs} />

## Color

Color style props allow you to adjust the color styles of components.

```tsx
import {Box} from '@workday/canvas-kit-react/layout';

const baseStyles = {
  display: 'inline-block',
  margin: 'xxs',
  minHeight: 'xl',
  minWidth: '8rem',
  padding: 'xs',
};

export const Color = () => (
  <div>
    <Box backgroundColor="cinnamon300" color="blackPepper500" {...baseStyles}>
      Cinnamon 300
    </Box>
    <Box backgroundColor="sourLemon300" color="blackPepper500" {...baseStyles}>
      Sour Lemon 300
    </Box>
    <Box backgroundColor="blueberry300" color="blackPepper500" {...baseStyles}>
      Blueberry 300
    </Box>
  </div>
);

```

<StylePropsTable styleProps={colorStyleFnConfigs} />

## Depth

Depth style props allow you to adjust the depth styles of components.

```tsx
import {Box} from '@workday/canvas-kit-react/layout';

const baseStyles = {
  color: 'blackPepper500',
  display: 'inline-block',
  margin: 'xxs',
  minHeight: 'xl',
  minWidth: '8rem',
  padding: 'xs',
};

export const Depth = () => (
  <div>
    <Box backgroundColor="cinnamon300" depth={1} {...baseStyles}>
      Depth 1
    </Box>
    <Box backgroundColor="sourLemon300" depth={2} {...baseStyles}>
      Depth 2
    </Box>
    <Box backgroundColor="blueberry300" depth={3} {...baseStyles}>
      Depth 3
    </Box>
  </div>
);

```

<StylePropsTable styleProps={depthStyleFnConfigs} />

## Flex

Flex style props allow you to adjust the flex styles of components.

```tsx
import {Flex} from '@workday/canvas-kit-react/layout';

const baseStyles = {
  color: 'blackPepper500',
  minHeight: 'xl',
  minWidth: '2rem',
  padding: 'xs',
};

export const FlexExample = () => (
  <Flex columnGap="xs">
    <Flex flexDirection="column" rowGap="xs" flex={1}>
      <Flex.Item backgroundColor="cinnamon300" textAlign="center" {...baseStyles}>
        1
      </Flex.Item>
      <Flex.Item backgroundColor="sourLemon300" textAlign="center" {...baseStyles}>
        1
      </Flex.Item>
      <Flex.Item backgroundColor="blueberry300" textAlign="center" {...baseStyles}>
        1
      </Flex.Item>
    </Flex>
    <Flex flexDirection="column" rowGap="xs" flex={2}>
      <Flex.Item backgroundColor="cinnamon300" textAlign="center" {...baseStyles}>
        2
      </Flex.Item>
      <Flex.Item backgroundColor="sourLemon300" textAlign="center" {...baseStyles}>
        2
      </Flex.Item>
      <Flex.Item backgroundColor="blueberry300" textAlign="center" {...baseStyles}>
        2
      </Flex.Item>
    </Flex>
    <Flex flexDirection="column" rowGap="xs" flex={1}>
      <Flex.Item backgroundColor="cinnamon300" textAlign="center" {...baseStyles}>
        1
      </Flex.Item>
      <Flex.Item backgroundColor="sourLemon300" textAlign="center" {...baseStyles}>
        1
      </Flex.Item>
      <Flex.Item backgroundColor="blueberry300" textAlign="center" {...baseStyles}>
        1
      </Flex.Item>
    </Flex>
  </Flex>
);

```

<StylePropsTable styleProps={flexStyleFnConfigs} />

## Flex Item

Flex item style props allow you to adjust the flex item styles of components.

```tsx
import {Flex} from '@workday/canvas-kit-react/layout';

const baseStyles = {
  color: 'blackPepper500',
  minHeight: 'xl',
  minWidth: '2rem',
  padding: 'xs',
};

export const FlexItem = () => (
  <Flex flexDirection="column" rowGap="xs">
    <Flex columnGap="xs">
      <Flex.Item backgroundColor="cinnamon300" flex={1} textAlign="center" {...baseStyles}>
        1
      </Flex.Item>
      <Flex.Item backgroundColor="sourLemon300" flex={2} textAlign="center" {...baseStyles}>
        2
      </Flex.Item>
      <Flex.Item backgroundColor="blueberry300" flex={1} textAlign="center" {...baseStyles}>
        1
      </Flex.Item>
    </Flex>
    <Flex columnGap="xs">
      <Flex.Item backgroundColor="cinnamon300" flex={2} textAlign="center" {...baseStyles}>
        2
      </Flex.Item>
      <Flex.Item backgroundColor="sourLemon300" flex={1} textAlign="center" {...baseStyles}>
        1
      </Flex.Item>
      <Flex.Item backgroundColor="blueberry300" flex={2} textAlign="center" {...baseStyles}>
        2
      </Flex.Item>
    </Flex>
    <Flex columnGap="xs">
      <Flex.Item backgroundColor="cinnamon300" flex={1} textAlign="center" {...baseStyles}>
        1
      </Flex.Item>
      <Flex.Item backgroundColor="blueberry300" flex={1} textAlign="center" {...baseStyles}>
        1
      </Flex.Item>
    </Flex>
  </Flex>
);

```

<StylePropsTable styleProps={flexItemStyleFnConfigs} />

## Grid

Grid style props allow you to adjust the grid styles of components.

```tsx
import {Grid} from '@workday/canvas-kit-react/layout';

const baseStyles = {
  color: 'blackPepper500',
  padding: 'xs',
};

export const GridExample = () => (
  <Grid
    gridGap="xs"
    gridTemplateAreas="'head head' 'nav main' 'nav foot'"
    gridTemplateColumns="1fr 3fr"
    gridTemplateRows="2.5rem minmax(10rem, auto) 2.5rem"
  >
    <Grid.Item gridArea="head" backgroundColor="cinnamon300" {...baseStyles} />
    <Grid.Item gridArea="nav" backgroundColor="sourLemon300" {...baseStyles} />
    <Grid.Item gridArea="main" backgroundColor="blueberry300" {...baseStyles} />
    <Grid.Item gridArea="foot" backgroundColor="cinnamon300" {...baseStyles} />
  </Grid>
);

```

<StylePropsTable styleProps={gridStyleFnConfigs} />

## Grid Item

Grid item style props allow you to adjust the grid item styles of components.

```tsx
import {Grid} from '@workday/canvas-kit-react/layout';

const baseStyles = {
  color: 'blackPepper500',
  padding: 'xs',
};

export const GridItem = () => (
  <Grid
    gridGap="xs"
    gridTemplateColumns="1fr 3fr"
    gridTemplateRows="2.5rem minmax(10rem, auto) 2.5rem"
  >
    <Grid.Item gridColumn="1 / 3" gridRow="1" backgroundColor="cinnamon300" {...baseStyles} />
    <Grid.Item gridColumn="1" gridRow="2 / 4" backgroundColor="sourLemon300" {...baseStyles} />
    <Grid.Item gridColumn="2" gridRow="2" backgroundColor="blueberry300" {...baseStyles} />
    <Grid.Item gridColumn="2" gridRow="3" backgroundColor="cinnamon300" {...baseStyles} />
  </Grid>
);

```

<StylePropsTable styleProps={gridItemStyleFnConfigs} />

## Layout

Layout style props allow you to adjust the layout styles of components.

```tsx
import {Flex} from '@workday/canvas-kit-react/layout';

const baseStyles = {
  color: 'blackPepper500',
  margin: 'xxs',
  padding: 'xs',
  justifyContent: 'center',
  alignItems: 'flex-start',
};

export const Layout = () => (
  <Flex alignItems="flex-end">
    <Flex
      backgroundColor="cinnamon300"
      display="inline-flex"
      height="xl"
      width="xxxl"
      {...baseStyles}
    >
      40 x 80
    </Flex>
    <Flex
      backgroundColor="sourLemon300"
      display="inline-flex"
      height="xxl"
      width="xxxl"
      {...baseStyles}
    >
      64 x 80
    </Flex>
    <Flex
      backgroundColor="blueberry300"
      display="inline-flex"
      height="xxxl"
      width="xxxl"
      {...baseStyles}
    >
      80 x 80
    </Flex>
  </Flex>
);

```

<StylePropsTable styleProps={layoutStyleFnConfigs} />

## Other

Other style props allow you to adjust the other, miscellaneous styles of components.

```tsx
import {Box} from '@workday/canvas-kit-react/layout';
import {colors} from '@workday/canvas-kit-react/tokens';

const baseStyles = {
  color: 'blackPepper500',
  display: 'inline-block',
  margin: 'xxs',
  minHeight: 'xl',
  padding: 'xs',
};

export const Other = () => (
  <Box>
    <Box
      backgroundColor="cinnamon300"
      cursor="grab"
      outline={`2px dashed ${colors.cinnamon300}`}
      outlineOffset="2px"
      {...baseStyles}
    >
      Cursor Grab
    </Box>
    <Box
      backgroundColor="sourLemon300"
      cursor="text"
      outline={`2px dashed ${colors.sourLemon300}`}
      outlineOffset="2px"
      {...baseStyles}
    >
      Cursor Text
    </Box>
    <Box
      backgroundColor="blueberry300"
      cursor="wait"
      outline={`2px dashed ${colors.blueberry300}`}
      outlineOffset="2px"
      {...baseStyles}
    >
      Cursor Wait
    </Box>
  </Box>
);

```

<StylePropsTable styleProps={otherStyleFnConfigs} />

## Position

Position style props allow you to adjust the position styles of components.

```tsx
import {Box} from '@workday/canvas-kit-react/layout';

const baseStyles = {
  color: 'blackPepper500',
  margin: 'xxs',
  height: 'xl',
  width: '8rem',
  padding: 'xs',
};

export const Position = () => {
  return (
    <div>
      <Box
        backgroundColor="cinnamon300"
        left={0}
        position="absolute"
        top="calc(50% - 20px)"
        zIndex={1}
        textAlign="center"
        {...baseStyles}
      >
        Left
      </Box>
      <Box
        backgroundColor="sourLemon300"
        left={`calc(50% - 4rem)`}
        position="absolute"
        top="calc(50% - 20px)"
        zIndex={2}
        textAlign="center"
        {...baseStyles}
      >
        Center
      </Box>
      <Box
        backgroundColor="blueberry300"
        position="absolute"
        right={0}
        top="calc(50% - 20px)"
        zIndex={3}
        textAlign="center"
        {...baseStyles}
      >
        Right
      </Box>
    </div>
  );
};

```

<StylePropsTable styleProps={positionStyleFnConfigs} />

## Space

Space style props allow you to adjust the space styles of components.

```tsx
import {Box} from '@workday/canvas-kit-react/layout';

const baseStyles = {
  border: 'dotted 2px',
  color: 'blackPepper500',
  display: 'inline-block',
  verticalAlign: 'bottom',
};

export const Space = () => (
  <div>
    <Box backgroundColor="cinnamon300" margin="xxs" padding="s" textAlign="center" {...baseStyles}>
      <Box border="dotted 2px" borderColor="blackPepper500">
        Small
      </Box>
    </Box>
    <Box backgroundColor="sourLemon300" margin="xxs" padding="m" textAlign="center" {...baseStyles}>
      <Box border="dotted 2px" borderColor="blackPepper500">
        Medium
      </Box>
    </Box>
    <Box backgroundColor="blueberry300" margin="xxs" padding="l" textAlign="center" {...baseStyles}>
      <Box border="dotted 2px" borderColor="blackPepper500">
        Large
      </Box>
    </Box>
  </div>
);

```

<StylePropsTable styleProps={spaceStyleFnConfigs} />

## Text

Text style props allow you to adjust the text styles of components.

```tsx
import {Box} from '@workday/canvas-kit-react/layout';

export const Text = () => (
  <Box padding="m" border="solid 4px" borderColor="blueberry300" color="blackPepper500">
    <Box as="h3" fontSize="large" fontWeight="bold" margin="zero">
      The Elements of Typographic Style
    </Box>
    <Box as="p" fontSize="medium" fontStyle="italic">
      "Typography is the craft of endowing human language with a durable visual form."
    </Box>
    <Box as="span" fontSize="small" fontWeight="bold" color="licorice300">
      ― Robert Bringhurst
    </Box>
  </Box>
);

```

<StylePropsTable styleProps={textStyleFnConfigs} />
