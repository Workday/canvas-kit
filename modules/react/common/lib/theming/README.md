# Canvas Kit Theming

Canvas Kit Common contains wrappers and types to enabling theming of Canvas components.

## Installation

```sh
yarn add @workday/canvas-kit-react/common
```

## Usage

Wrap all of your Canvas components with the `CanvasProvider` higher order component. Usually this
would go in the highest level component of your application. This includes an
[`InputProvider`](../../README.md#input-provider) and includes all global configuration needed for
our Canvas Components.

```tsx
import * as React from 'react';
import {CanvasProvider} from '@workday/canvas-kit-react/common';

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
      s: 320,
      m: 768,
      l: 1024,
      xl: 1440,
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
import {CanvasProvider, EmotionCanvasTheme} from '@workday/canvas-kit-react/common';

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
} from '@workday/canvas-kit-react/common';

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
} from '@workday/canvas-kit-react/common';
import {Switch} from '@workday/canvas-kit-react/switch';

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

Breakpoints are used by media queries to conditionally apply or modify styles based on the viewport
width. This allows the UI to be responsive to various screen sizes.

### Values

The canvas theme object provides five breakpoint values that correspond to the min-widths of our
standard screen sizes.

| Name   | Size (px) |
| ------ | --------- |
| `zero` | 0         |
| `s`    | 320       |
| `m`    | 768       |
| `l`    | 1024      |
| `xl`   | 1440      |

And these are our standard screen size ranges:

- `small` (320px - 767px) Used for mobile-sized screens
- `medium` (768px - 1023px) Used for tablet-sized screens
- `large` - (1024px - 1439px) Used for laptop and small desktop screens
- `extra-large` (≥1440px) Used for very large screens

> Note: Some applications may only require a subset of screen sizes and not use all breakpoints.

Our breakpoint system is customized within the theme object. `theme.canvas.breakpoints.values`.

```ts
import {useTheme} from '@workday/canvas-kit-react/common';
import {space} from '@workday/canvas-kit-react/tokens';

const {theme} = useTheme();
const {values} = theme.canvas.breakpoints;
const styles = {
  [`@media (min-width: ${values.m}px)`]: {
    padding: space.s,
  },
};
```

### Functions

There are also several functions to help with generating media queries:

- [Up](#Up)
- [Down](#Down)
- [Between](#Between)
- [Only](#Only)

#### Up

_Returns a media query above the `min-width` for the range of a given breakpoint_

Given a `start` breakpoint key ("zero", "s", "m", "l", "xl"), this function returns a media query
(string) using a `min-width`.

```ts
import {useTheme} from '@workday/canvas-kit-react/common';
import {space} from '@workday/canvas-kit-react/tokens';

const theme = useTheme();
const {up} = theme.canvas.breakpoints;
const mediaQuery = up('l'); // Returns '@media (min-width: 1024px)'
const styles = {
  [mediaQuery]: {
    padding: space.m,
  },
};
```

#### Down

_Returns a media query below the `max-width` for the range of a given breakpoint_

Given an `end` breakpoint key ("zero", "s", "m", "l", "xl"), this function returns a media query
(string) using a `max-width`.

> Note: This function subtracts `0.5px` from the next breakpoint value to prevent collisions. For
> example, `breakpoints.values.s`, has a `min-width` of `320px`, and the `max-width` is `767.5px`).

If the `xl` breakpoint is provided, this function returns a media query with only a `min-width` of
`0`, as seen in the second example below.

```ts
import {useTheme} from '@workday/canvas-kit-react/common';
import {space} from '@workday/canvas-kit-react/tokens';

const theme = useTheme();
const {down} = theme.canvas.breakpoints;
const mediaQuery = down('m'); // Returns '@media (max-width: 1023.5px)'
const styles = {
  [mediaQuery]: {
    padding: space.m,
  },
};
```

This example uses the `xl` breakpoint and only adds a `min-width` of `0` to the media query.

```ts
import {useTheme} from '@workday/canvas-kit-react/common';
import {space} from '@workday/canvas-kit-react/tokens';

const theme = useTheme();
const {down} = theme.canvas.breakpoints;
const mediaQuery = down('xl'); // Returns '@media (min-width: 0)'
const styles = {
  [mediaQuery]: {
    padding: space.m,
  },
};
```

#### Between

_Returns a media query between two given breakpoints_

Given `start` and `end` breakpoint keys ("zero", "s", "m", "l", "xl"), this function returns a media
query (string) using a min-width and max-width.

> Note: This function subtracts `0.5px` from the next breakpoint value to prevent collisions. For
> example, `breakpoints.values.s`, has a `min-width` of `320px`, and the `max-width` is `767.5px`).

If the `xl` breakpoint is provided, this function returns a media query with only a `min-width`, as
seen in the second example below.

```ts
import {useTheme} from '@workday/canvas-kit-react/common';
import {space} from '@workday/canvas-kit-react/tokens';

const theme = useTheme();
const {between} = theme.canvas.breakpoints;
// Returns '@media (min-width: 320px) and (max-width: 1023.5px)'
const mediaQuery = between('s', 'm');
const styles = {
  [mediaQuery]: {
    padding: space.s,
  },
};
```

This example uses `xl` as the `end` breakpoint and only adds a min-width to the media query.

```ts
import {useTheme} from '@workday/canvas-kit-react/common';
import {space} from '@workday/canvas-kit-react/tokens';

const theme = useTheme();
const {between} = theme.canvas.breakpoints;
const mediaQuery = between('m', 'xl'); // Returns '@media (min-width: 768px)'
const styles = {
  [mediaQuery]: {
    padding: space.s,
  },
};
```

#### Only

_Returns a media query with a `min-width` and `max-width` for a given breakpoint_

Given a breakpoint key ("zero", "s", "m", "l", "xl"), this function returns a media query (string)
using a `min-width` and `max-width`.

> Note: This function subtracts `0.5px` from the next breakpoint value to prevent collisions.For
> example, `breakpoints.values.s`, has a `min-width` of `320px`, and the `max-width` is `767.5px`).

If the `xl` breakpoint is provided, this function returns a media query with only a `min-width` of
`1440px`, as seen in the second example below.

```ts
import {useTheme} from '@workday/canvas-kit-react/common';
import {space} from '@workday/canvas-kit-react/tokens';

const theme = useTheme();
const {only} = theme.canvas.breakpoints;
const mediaQuery = only('s'); // Returns '@media (min-width: 320px) and (max-width: 767.5px)'
const styles = {
  [mediaQuery]: {
    padding: space.s,
  },
};
```

This example uses the `xl` breakpoint and only adds a `min-width` of `1440px` to the media query.

```ts
import {useTheme} from '@workday/canvas-kit-react/common';
import {space} from '@workday/canvas-kit-react/tokens';

const theme = useTheme();
const {only} = theme.canvas.breakpoints;
const mediaQuery = only('m', 'xl'); // Returns '@media (min-width: 1440px)'
const styles = {
  [mediaQuery]: {
    padding: space.s,
  },
};
```

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
