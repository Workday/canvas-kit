# Canvas Kit Theming

Canvas Kit Common contains wrappers and types to enabling theming of Canvas components.

## Installation

```sh
yarn add @workday/canvas-kit-react-common
```

## Usage

Wrap all of your Canvas components with the `CanvasProvider` higher order component. Usually this
would go in the highest level component of your application. This includes an
[`InputProvider`](../../README.md#input-provider) and includes all global configuration needed for
our Canvas Components.

```tsx
import * as React from 'react';
import {CanvasProvider} from '@workday/canvas-kit-react-common';

<CanvasProvider>{/* All your components containing any Canvas components */}</CanvasProvider>;
```

## Component Props

### Required

> None

### Optional

#### `theme: PartialEmotionCanvasTheme`

> The theme to be used throughout the children of the `CanvasProvider` component.

Default: `{ canvas: defaultCanvasTheme }`

## Theme Object

The Canvas theme is based on the following object:

```ts
export const defaultCanvasTheme: CanvasTheme = {
  palette: {
    primary: {
      lightest: colors.blueberry100,
      light: colors.blueberry200,
      main: colors.blueberry400,
      dark: colors.blueberry500,
      darkest: colors.blueberry600,
      contrast: colors.frenchVanilla100,
    },
    alert: {
      lightest: colors.cantaloupe100,
      light: colors.cantaloupe300,
      main: colors.cantaloupe400,
      dark: colors.cantaloupe500,
      darkest: colors.cantaloupe600,
      contrast: colors.frenchVanilla100,
    },
    error: {
      lightest: colors.cinnamon100,
      light: colors.cinnamon300,
      main: colors.cinnamon500,
      dark: colors.cinnamon600,
      darkest: '#80160E',
      contrast: colors.frenchVanilla100,
    },
    success: {
      lightest: colors.greenApple100,
      light: colors.greenApple300,
      main: colors.greenApple600,
      dark: '',
      darkest: '',
      contrast: colors.frenchVanilla100,
    },
    neutral: {
      lightest: colors.soap200,
      light: colors.soap300,
      main: colors.soap600,
      dark: colors.licorice300,
      darkest: colors.licorice400,
      contrast: colors.frenchVanilla100,
    },
    common: {
      focusOutline: colors.blueberry400,
    },
  },
  breakpoints: {
    values: {
      zero: 0,
      s: 600,
      m: 960,
      l: 1280,
      xl: 1920,
    },
    up,
    down,
    between,
    only,
  },
  direction: ContentDirection.LTR,
};
```

Any changes will be reflected across all supported components. You are also able to consume for your
own use cases.

## Custom Theme

The `CanvasProvider` accepts a full or partial theme object to give a branded look or a different
direction to the component library.

> Note: Our theme is namespaced under the `canvas` key within the Emotion `ThemeContext`.

If you only set a `main` color, the rest of the respective palette will be automatically generated
(note text `contrast` color will always return white if not specified).

Example:

```tsx
import {CanvasProvider, EmotionCanvasTheme} from '@workday/canvas-kit-react-common';

const theme: EmotionCanvasTheme = {
  canvas: {
    palette: {
      primary: {
        main: colors.cantaloupe400,
      },
    },
  },
};

<CanvasProvider theme={theme}>{/* Your app with Canvas components */}</CanvasProvider>;
```

### Bidirectionality

The `CanvasProvider` also provides support for bidirectionality, useful for RTL languages. The
direction, part of the theme, is set using `ContentDirection.LTR` or `ContentDirection.RTL`.

You can nest `CanvasProvider` if you need to set a different direction for some components in your
React tree (See below: Nesting CanvasProvider components).

`CanvasProvider` wraps your components with a `bdo` element that has the `dir` attribute set to the
value of the theme direction. Styled components using the
[Canvas `styled` function](https://github.com/Workday/canvas-kit/blob/master/modules/common/react/lib/theming/styled.ts)
will have their styles automatically flipped if dictated by the closest theme object.

```tsx
import {
  CanvasProvider,
  ContentDirection,
  EmotionCanvasTheme,
} from '@workday/canvas-kit-react-common';

const rtlTheme: EmotionCanvasTheme = {
  canvas: {
    direction: ContentDirection.RTL,
  },
};

<CanvasProvider theme={rtlTheme}>{/* Your app with Canvas components */}</CanvasProvider>;
```

### Nesting CanvasProvider components

It is possible to set a theme for a specific component or set of components within your React tree.
This is generally discouraged for consistency reasons, but may be required in some contexts (a green
`Switch` component for example, or changing the direction of a set of components). To do this, you
can nest CanvasProvider components with a different theme.

```tsx
import * as React from 'react';
import {
  CanvasProvider,
  EmotionCanvasTheme,
  PartialEmotionCanvasTheme,
  ContentDirection,
} from '@workday/canvas-kit-react-common';
import {Switch} from '@workday/canvas-kit-react-switch';

const rtlTheme: EmotionCanvasTheme = {
  canvas: {
    direction: ContentDirection.RTL,
  },
};

const theme: PartialEmotionCanvasTheme = {
  canvas: {
    palette: {
      primary: {
        main: colors.greenApple400,
      },
    },
    direction: ContentDirection.LTR,
  },
};

<CanvasProvider theme={rtlTheme}>
  <CanvasProvider theme={theme}>
    <Switch checked={true} />
    {/* Content that should be LTR */}
  </CanvasProvider>
</CanvasProvider>;
```

### Context Alternative

If, for whatever reason, you're not able to use React Contexts, we offer an alternative. A good
example of this is an app with many small React trees.

Simply set your theme on the window object like so:

```tsx
const theme: PartialEmotionCanvasTheme = {
  canvas: {
    palette: {
      primary: {
        main: colors.greenApple400,
      },
    },
  },
};

window.workday.canvas.theme = theme;
```

Note if any of the window object hasn't been defined, you will need to change your assignment. For
example:

```tsx
window.workday = {
  canvas: {
    theme: theme;
  }
}
```

If the theme is not available via a context, Canvas Kit components will attempt to pull it from this
variable before falling back to the default theme.

## Breakpoints

Our breakpoint system is customized within the theme object. `theme.breakpoints.values` contains the
various widths that our components adjust at:

| Name   | Size (px) |
| ------ | --------- |
| `zero` | 0         |
| `s`    | 600       |
| `m`    | 960       |
| `l`    | 1280      |
| `xl`   | 1920      |

There are also several functions to help with generating media queries:

#### `up: (key: BreakpointFnParam) => string`

> Returns a media query reflecting your specified size and up. Works with the enum (e.g.
> BreakpointKey.m) or the string (e.g. 'm'). Example: theme.breakpoints.up(BreakpointKey.m) =>
> '@media (min-width:960px)'

#### `down: (key: BreakpointFnParam) => string`

> Returns a media query reflecting your specified size and down. Works with the enum or the string
> (e.g. 'm'). Example: theme.breakpoints.down(BreakpointKey.m) => '@media (max-width:1279.5px)'

#### `between: (start: BreakpointFnParam, end: BreakpointFnParam) => string`

> Returns a media query reflecting the sizes between your specified breakpoints. Works with the enum
> or the string (e.g. 'm'). Example: theme.breakpoints.between(BreakpointKey.m, BreakpointKey.l) =>
> '@media (min-width:960px) and (max-width:1919.5px)'

#### `only: (key: BreakpointFnParam) => string`

> Returns a media query reflecting the size within your specified breakpoint. Works with the enum or
> the string (e.g. 'm'). Example: theme.breakpointsonly(BreakpointKey.m) => '@media
> (min-width:960px) and (max-width:1279.5px)'

## useIsRTL Hook

`useIsRTL` is a small hook to support right-to-left logic. If a theme exists in React context, the
component will use it automatically, or you can explicitly provide a theme object.

### Usage

```ts
// this will automatically pull the theme from context if it exists.
const isRTL = useIsRTL();
```

```ts
// or you can explicitly provide a (partial) theme object.
const RTLTheme = {
  canvas: {
    direction: ContentDirection.RTL,
  },
};
const isRTL = useIsRTL(RTLTheme);
```
