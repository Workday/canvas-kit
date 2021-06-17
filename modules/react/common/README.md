# Canvas Kit Common

A module of common utilities that are either agnostic of our components, or shared across them.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

Includes:

- [CanvasProvider](#canvasprovider)
- [InputProvider](#inputprovider)
- [Theming](#theming)
- [Bidirectionality](#bidirectionality)

## CanvasProvider

This is a higher order (wrapping) component intended for theming, RTL and
[InputProvider](#inputprovider)This is the way most consumers should use the provider. This provider
is required for our theming capabilities, so you can find more information in the
[theming documentation](./lib/theming/README.md).

**We strongly encourage you to use this in your application to wrap all Canvas components.**

```tsx
import * as React from 'react';
import {CanvasProvider} from '@workday/canvas-kit-react/common';

<CanvasProvider>{/* All your components containing any Canvas components */}</CanvasProvider>;
```

#### Storybook Decorator

We provide a [storybook decorator](../../utils/storybook/CanvasProviderDecorator.tsx) to wrap your
stories in a `CanvasProvider` (including `InputProvider`) automatically.

Add this decorator to your `/.storybook/preview.js` configuration file to apply to all stories:

```js
import {CanvasProviderDecorator} from '../utils/storybook';

export const decorators = [CanvasProviderDecorator];
```

Or, add it to stories individually:

```js
import {CanvasProviderDecorator} from '../../../../utils/storybook';

export default {
  title: 'MyComponent',
  component: MyComponent,
  decorators: [CanvasProviderDecorator],
};

// OR

MyStory.decorators = [CanvasProviderDecorator];
```

---

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

---

## Theming

Theming documentation has its own README. You can find it [here](./lib/theming/README.md).

---

## Bidirectionality

Bidirectionality is provided by Theming. You can find Theming documentation
[here](./lib/theming/README.md#bidirectionality).
