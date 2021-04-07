# Canvas Kit Tokens

Canvas Kit Tokens contains values and base styles that are shared across the kit.

Includes:

- [Colors](#colors)
- [Border Radius](#border-radius)
- [Space](#space)
- [Depth](#depth)
- [Type](#type)
- [Providers](#providers)

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Colors

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

### Usage

```tsx
import {colors} from '@workday/canvas-kit-react/tokens';

colors.blueberry400;
```

> Each of the colors have a gradient version as well

```tsx
import {colors} from '@workday/canvas-kit-react/tokens';

colors.gradients.blueberry;
```

### Semantic constants

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
import {iconColors} from '@workday/canvas-kit-react/tokens';

iconColors.hover;
```

## Border Radius

Border Radius variables are in a "t-shirt size" format. Border Radius values are in `px` format.

| Variable | Size (px) |
| -------- | --------- |
| `zero`   | `0`       |
| `s`      | `'2px'`   |
| `m`      | `'4px'`   |
| `l`      | `'8px'`   |
| `circle` | `'999px'` |

## Space

Space variables are in a "t-shirt size" format. Space values are in `px` format (`space`) or number
format (`spaceNumbers`).

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

The following space types are also provided: `CanvasSpace`, `CanvasSpaceValues`,
`CanvasSpaceNumbers`, `CanvasSpaceNumberValues`

Below are descriptions of these types:

| Name                      | Description                                  |
| ------------------------- | -------------------------------------------- |
| `CanvasSpace`             | `space` object with string px values         |
| `CanvasSpaceValues`       | string px values for CanvasSpace             |
| `CanvasSpaceNumbers`      | `spaceNumbers` object with numeric px values |
| `CanvasSpaceNumberValues` | numeric px values for CanvasSpaceNumbers     |

### Usage

```tsx
import {space, spaceNumbers} from '@workday/canvas-kit-react/tokens';

const iconSize = 20;

const buttonSyles = {
  paddingTop: space.xs,
  paddingRight: space.s,
  paddingBottom: space.xs,
  paddingLeft: spaceNumbers.s + iconSize,
};
```

## Depth

Five levels of depth are available. They are directly exported from `@workday/canvas-depth-web`.

| Level            | Usage Recommendations             |
| ---------------- | --------------------------------- |
| Depth -1 (inset) | Inset card depth                  |
| Depth 1          | Standard card depth               |
| Depth 2          | Increased card depth on hover     |
| Depth 3          | Active cards, popups              |
| Depth 4          | Cards on white backgrounds, menus |

### Usage

```tsx
import {depth} from '@workday/canvas-kit-react/tokens';

depth.inset;
depth['2'];
```

## Type

Type styles are available as objects to use alone or with
[Emotion](https://github.com/emotion-js/emotion).

### Fonts

To use the Canvas Kit font
[install and import the `@workday/canvas-kit-react-fonts` module](https://github.com/Workday/canvas-kit/tree/master/modules/fonts/react).
Note that this module sources fonts from the Workday CDN.

### Hierarchy

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

##### Disclaimer

> A new type hierarchy is in the process of being introduced into our products. You can find more
> info about it in the [Labs Type](?path=/story/labs-core-react--type) section. We plan to maintain
> both hierarchies for a short time, but there will be a breaking change when we replace the current
> one with the new one.

### Usage

If you're working in emotion, you can simply spread the type objects to use their styles.

```tsx
import {type} from '@workday/canvas-kit-react/tokens';

const MyLabel = styled('label')({
  ...type.body,
  ...type.variant.label,
});
```

If you are only using one object, you can do this inline with the `style` attribute. For headings,
styled components are also available.

```tsx
import {H2, type} from '@workday/canvas-kit-react/tokens';

<h1 style={type.h1}>H1 Header</h1>;
<H2>H2 Header</H2>;
```

To combine objects inline, you can also use emotion's `css` function.

```tsx
import {type} from '@workday/canvas-kit-react/tokens';

<label css={[canvas.type.body, canvas.type.variant.label]}>Label Text</label>;
```

## Providers

Providers are higher order (wrapping) components used to provide global configuration to Canvas
components.

### Input Provider

This is a higher order (wrapping) component for providing css-referencable data attributes for the
users current input. Focus outlines are required for accesibility, but they can be unnecessary
visual noise when using a mouse. This allows us to hide focus outlines (as desired) while the user
is interacting with components using a mouse, touch, etc. and show them when keyboard navigation
begins. This logic is heavily influenced by [what-input](https://github.com/ten1seven/what-input).
You can use it to style your own components as well using the examples below.

Preferably you would use the `CanvasProvider` as `InputProvider` functionality is included within
it. However, if you want `InputProvider` functionality on it's own, you can use this.

#### Definitions

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

#### Usage

As an external consumer, you should reference the following example.

If you are contributing a component, you must add the necessary styling (see below) and use the
[`InputProviderDecorator`](#storybook-decorator) in your stories. _DO NOT_ use an `InputProvider`
directly within any Canvas Kit components.

```tsx
import * as React from 'react';
import {InputProvider} from '@workday/canvas-kit-react';

<div>
  <InputProvider />
  {/* All your components containing any Canvas components */}
<div>;
```

This will result in these data attributes being added to the body element (by default)

```html
<body data-whatinput="mouse" data-whatinput="mouse">
  <!-- All your components' HTML -->
</body>
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

We provide a [helper](../../common/react/lib/styles/hideMouseFocus.ts) to hide the focus outlines on
mouse input. Simply spread it in your styles (i.e. `...hideMouseFocus`).

**Note:** It is best practice to show focus outlines by default and specifically hide them in the
cases you would like (i.e. mouse/touch/pointer input).

**Note:** Multiple InputProviders in the same tree are not supported. Any nested `InputProvider`
will remove itself from the DOM (rendering only its children) and not attach any event listeners.

#### Static Properties

##### `InputTypes`

| Theme      |
| ---------- |
| `Keyboard` |
| `Mouse`    |
| `Pointer`  |
| `Touch`    |

---

#### Component Props

##### Required

> None

##### Optional

###### `provideIntent: boolean`

> Whether you would like the attribute `data-whatintent` rendered (see definition of intent above).
> Note: detecting intent will add scroll and mouse positioning listeners which could affect
> performance.

###### `container: HTMLElement | React.RefObject<HTMLElement>`

> The containing element in which the InputProvider attaches its data attributes. This property
> should be set to an element that is an ancestor of all your Canvas components.

Default: `document.body`

#### Storybook Decorator

We provide a [storybook decorator](../../utils/storybook/CanvasProviderDecorator.tsx) to wrap your
stories in an `InputProvider` automatically.

Add this decorator to your `/.storybook/preview.js` configuration file to apply to all stories:

```js
import {InputProviderDecorator} from '../utils/storybook';

export const decorators = [InputProviderDecorator];
```

Or, add it to stories individually:

```js
import {InputProviderDecorator} from '../../../../utils/storybook';

export default {
  title: 'MyComponent',
  component: MyComponent,
  decorators: [InputProviderDecorator],
};

// OR

MyStory.decorators = [InputProviderDecorator];
```
