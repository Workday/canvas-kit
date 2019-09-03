# Canvas Kit Core

Canvas Kit Core contains values and base styles that are shared across the kit.

Includes:

- [Colors](#colors)
- [Spacing](#spacing)
- [Depth](#depth)
- [Type](#type)
- [Input Provider](#input-provider)

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-core
```

# Colors

Workday Canvas Colors are directly exported from `@workday/canvas-colors-web`. Colors come in shades
from 100 (lighter) - 600 (darker). These can be used directly, but
[semantic constants](#semantic-constants) are preferred.

Colors (100-600):

- Cinnamon
- Peach
- Chili Mango
- Cantaloupe
- Sour Lemon
- Juicy Pear
- Kiwi
- Green Apple
- Watermelon
- Jewel
- Toothpaste
- Blueberry
- Plum
- Berry Smoothie
- Blackberry
- Island Punch
- Grape Soda
- Pomegranate
- Fruit Punch
- Root Beer
- Toasted Marshmallow
- Coconut
- Cappuccino
- Soap
- Licorice
- French Vanilla
- Black Pepper

## Usage

```tsx
import {colors} from '@workday/canvas-kit-react-core';

colors.blueberry400;
```

> Each of the colors have a gradient version as well

```tsx
import {colors} from '@workday/canvas-kit-react-core';

colors.gradients.blueberry;
```

## Semantic constants

To ensure consistency across implementations, our semantic constants should be used wherever
possible. This allows us to swap out the color of a button or icon for example, without having to
find every instance of it and change the color manually.

We have several semantic groupings:

- `commonColors`
- `buttonColors`
  - `delete`
  - `primary`
  - `secondary`
- `iconColors`
- `statusColors`
- `typeColors`

```tsx
import {iconColors} from '@workday/canvas-kit-react-core';

iconColors.hover;
```

# Spacing

Workday Canvas Spacing is directly exported from `@workday/canvas-spacing-web`.

Spacing variables are in a "t-shirt size" format. Spacing values are in `px` format (`spacing`) or
number format (`spacingNumbers`).

| Variable | Size (px) | Size (number) |
| -------- | --------- | ------------- |
| `xxxs`   | `'4px'`   | `4`           |
| `xxs`    | `'8px'`   | `8`           |
| `xs`     | `'12px'`  | `12`          |
| `s`      | `'16px'`  | `16`          |
| `m`      | `'24px'`  | `24`          |
| `l`      | `'32px'`  | `32`          |
| `xl`     | `'40px'`  | `40`          |
| `xxl`    | `'64px'`  | `64`          |
| `xxxl`   | `'80px'`  | `80`          |

## Margin & Padding

Spacing functions provide margin and padding spacing. These are available with the `space` function.
The `space` function utilizes the following props:

**Margin Props**

- `m` margin
- `mt` margin-top
- `mr` margin-right
- `mb` margin-bottom
- `ml` margin-left
- `mx` margin-left & margin-right
- `my` margin-top & margin-bottom

**Padding Props**

- `p` padding
- `pt` padding-top
- `pr` padding-right
- `pb` padding-bottom
- `pl` padding-left
- `px` padding-left & padding-right
- `py` padding-top & padding-bottom

## Usage

```tsx
import {spacing, spacingNumbers, space} from '@workday/canvas-kit-react-core';

spacing.s; // 16px
spacingNumbers.s; // 16

...

const Box = styled('div')(space)

<Box p={spacing.xl} pb={64} m={40} mx={10}>
  ...
</Box>

/*
  margin-top: 40px;
  margin-right: 10px;
  margin-bottom: 40px;
  margin-left: 10px;
  padding-top: 40px;
  padding-right: 40px;
  padding-bottom: 64px;
  padding-left: 40px;
*/
```

# Depth

Five levels of depth are available. They are directly exported from `@workday/canvas-depth-web`.

| Level            | Usage Recommendations             |
| ---------------- | --------------------------------- |
| Depth -1 (inset) | Inset card depth                  |
| Depth 1          | Standard card depth               |
| Depth 2          | Increased card depth on hover     |
| Depth 3          | Active cards, popups              |
| Depth 4          | Cards on white backgrounds, menus |

## Usage

```tsx
import {depth} from '@workday/canvas-kit-react-core';

depth.inset;
depth['2'];
```

# Type

Type styles are available as objects to use alone or with
[Emotion](https://github.com/emotion-js/emotion).

Our type module is a combination of hierarchy and variants. The hierarchy has the font size, weight,
etc. for different levels of type (e.g. `canvas.type.h1`, `canvas.type.body`, etc.). The variants
(e.g. `canvas.type.variant.label`) are applied to a hierarchy level to achieve certain styling.
Variants only come their augmenting styles and a base type object is required.

| Hierarchy Levels |
| ---------------- |
| `dataViz1`       |
| `dataViz2`       |
| `h1`             |
| `h2`             |
| `h3`             |
| `h4`             |
| `h5`             |
| `body`           |
| `body2`          |
| `small`          |

| Variants  |
| --------- |
| `label`   |
| `button`  |
| `caps`    |
| `hint`    |
| `error`   |
| `inverse` |
| `mono`    |
| `link`    |

#### Disclaimer

> A new type hierarchy is in the process of being introduced into our products. You can find more
> info about it in the [Beta Type Hierarchy](#beta-type-hierarchy) section. We plan to maintain both
> hierarchies for a short time, but there will be a breaking change when we replace the current one
> with the new one.

## Usage

If you're working in emotion, you can simply spread the type objects to use their styles.

```tsx
import {type} from '@workday/canvas-kit-react-core';

const MyLabel = styled('label')({
  ...type.body,
  ...type.variant.label,
});
```

If you are only using one object, you can do this inline with the `style` attribute. For headings,
styled components are also available.

```tsx
import {H2, type} from '@workday/canvas-kit-react-core';

<h1 style={type.h1}>H1 Header</h1>;
<H2>H2 Header</H2>;
```

To combine objects inline, you can also use emotion's `css` function.

```tsx
import {type} from '@workday/canvas-kit-react-core';

<label className={css(canvas.type.body, canvas.type.variant.label)}>Label Text</label>;
```

## Beta Type Hierarchy

> As stated above, a new type hierarchy is in the process of being introduced into our products. It
> relies on larger font sizes/weights to increase legibility and promote reducing density in UI
> design. Other than the visual size and weight changes across every level of hierarchy, there are a
> few naming changes: `type.dataViz1` and `type.dataViz2` have been renamed to `type.brand1` and
> `type.brand2`, respectively.

### Usage

The usage is the same as the current hierarchy, you just need a different import.

```tsx
import {beta_type as type} from '@workday/canvas-kit-react-core';

const MyLabel = styled('label')({
  ...type.body,
  ...type.variant.label,
});
```

### Breaking Change

> When the breaking change is made, anyone using the current type guide will need to update the
> references for `dataViz1` and `dataViz2`, and adjust any references they want to keep at the same
> size (since the text will automatically get large). For those already using `beta_type`, they
> simply need to drop `beta_` from their import.

# Input Provider

This is a higher order (wrapping) component for providing css-referencable data attributes for the
users current input. Focus outlines are required for accesibility, but they can be unnecessary
visual noise when using a mouse. This allows us to hide focus outlines (as desired) while the user
is interacting with components using a mouse, touch, etc. and show them when keyboard navigation
begins. This logic is heavily influenced by [what-input](https://github.com/ten1seven/what-input).

**We strongly encourage you to use this in your application to wrap all Canvas components**. You can
use it to style your own components as well.

### Definitions

**Input**: The current input method from the user.

- Equal to one of [`InputTypes`](#inputtypes)
- Triggered by the following events:
  - `keydown`
  - `keyup`
  - `mousedown`
  - `MSPointerDown`
  - `pointerdown`
  - `touchstart`

**Intent**: The potential next input method from the user. Mouse, pointer and mouse wheel events
only demonstrate potential, but not actual, interaction and are treated separately. Note: if input
type updates from the events above, the intent type will also be updated to the same value.

- Equal to one of [`InputTypes`](#inputtypes)
- Triggered by the following events:
  - `mousemove`
  - `MSPointerMove`
  - `pointermove`
  - `wheel`
  - `mousewheel`
  - `DOMMouseScroll`

## Usage

As an external consumer, you should reference the following example.

If you are contributing a component, you must add the necessary styling (see below) and use the
[`InputProviderDecorator`](#storybook-decorator) in your stories. _DO NOT_ wrap any canvas kit
components in an `InputProvider`.

```tsx
import * as React from 'react';
import {InputProvider} from '../../../../utils/storybook';

<InputProvider>{/* All your components containing any Canvas components */}</InputProvider>;
```

This will result in a wrapping div with two data attributes:

```html
<div data-whatinput="mouse" data-whatinput="mouse"><!-- All your components' HTML --></div>
```

Now in any component within this wrapper, you can use these data attributes to customize the focus
handling.

**React/Emotion:**

```js
[`[data-whatinput='mouse'] &:focus,
  [data-whatinput='touch'] &:focus,
  [data-whatinput='pointer'] &:focus`]: {
  outline: 'none',
  border: 'none',
},
```

**SCSS:**

```scss
[data-whatinput='mouse'],
[data-whatinput='touch'],
[data-whatinput='pointer'] {
  .my-component:focus {
    outline: none;
    border: none;
  }
}
```

We provide a [helper](../canvas-kit-react-common/lib/styles/hideMouseFocus.ts) to hide the focus
outlines on mouse input. Simply spread it in your styles (i.e. `...hideMouseFocus`).

**Note:** It is best practice to show focus outlines by default and specifically hide them in the
cases you would like (i.e. mouse/touch/pointer input).

## Static Properties

#### `InputTypes`

| Theme      |
| ---------- |
| `Keyboard` |
| `Mouse`    |
| `Pointer`  |
| `Touch`    |

---

## Component Props

### Required

> None

### Optional

#### `provideIntent: boolean`

> Whether you would like the attribute `data-whatintent` rendered (see definition of intent above).
> Note: detecting intent will add scroll and mouse positioning listeners which could affect
> performance.

## Storybook Decorator

We provide a [storybook decorator](../../utils/storybook/InputProviderDecorator.tsx) to wrap your
stories in an `InputProvider` automatically.

Example:

```js
import {InputProviderDecorator} from '../../../../utils/storybook';

storiesOf('My Story', module)
  .addDecorator(InputProviderDecorator)
  .add('All', () => <YourJSX />);
```

You can also add this [storybook decorator](../../utils/storybook/InputProviderDecorator.tsx) to
your `/.storybook/config.js` configuration file so it wraps all your stories automatically.

Example:

```js
import {InputProviderDecorator} from '../utils/storybook';

addDecorator(InputProviderDecorator);
```
