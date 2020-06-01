# Canvas Kit Common

A module of common utilities shared across canvas components.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-common
```

Includes:

- [Popper](#popper)
- [Canvas Provider](#canvas-provider)
- [Theming](#theming)
- [Bidirectionality](#bidirectionality)

## Popper

A thin wrapper component around the Popper.js positioning engine. For reference:
https://popper.js.org/

### Usage

```tsx
import * as React from 'react';
import {Popper} from '@workday/canvas-kit-react-common';
import {Popup} from '@workday/canvas-kit-react-popup';

<Popper placement="bottom" open={this.state.open} anchorElement={this.buttonRef.current}>
  <Popup heading="Popup Title">Popup Contents</Popup>
</Popper>;
```

If you need access to the placement that was chosen by PopperJS, pass in a render prop for the
children:

```tsx
import * as React from 'react';
import {Popper} from '@workday/canvas-kit-react-common';
import {Popup} from '@workday/canvas-kit-react-popup';

<Popper placement="bottom" open={this.state.open} anchorElement={this.buttonRef.current}>
  {({ placement }) => {
    console.log('placement', placement) // logs out the any valid PopperJS placement option except for `auto`
    <Popup heading="Popup Title">Popup Contents</Popup>
  }}
</Popper>;
```

### Static Properties

> None

### Component Props

This component extends the HTML `div` element. All additional props that are passed to this
component that are valid HTML attributes will be rendered as part of the wrapper `div` element. This
includes custom `data-*` attributes such as `data-test-id` to help facilitate automation testing.

### Required

#### `anchorElement: Element | null`

> The reference element used to position the popper.

#### `children: React.ReactNode | ((props: {placement: Placement}) => React.ReactNode)`

> The element used as the popper.

---

### Optional

#### `containerElement: Element`

> The element that contains the portal children when `portal` is true.

Default: `document.body`

---

#### `open: boolean`

> Flag to determine whether to show the popper. When true, the popper is shown.

Default: `true`

---

#### `placement: Placement`

> The placement of the popper relative to the `anchorElement`. Valid placements are:

- auto
- top
- right
- bottom
- left

> Each placement can have a variation from this list:

- -start
- -end

Default: `bottom`

---

#### `popperOptions: PopperOptions`

> Additional options passed to the `popper.js` instance.

---

#### `portal: boolean`

> Flag to determine whether to use a portal for the popper. When false, the popper stays within the
> DOM hierarchy of it's parent. When true, the popper is attached to the `containerElement`.

Default: `true`

---

## Canvas Provider

This provider includes all of the Canvas Providers below. This is the way most consumers should use
the provider. This provider is required for our theming capabilities, so you can find more
information in the [theming documentation](./lib/theming/README.md).

**We strongly encourage you to use this in your application to wrap all Canvas components.**

```tsx
import * as React from 'react';
import {CanvasProvider} from '@workday/canvas-kit-react-common';

<CanvasProvider>{/* All your components containing any Canvas components */}</CanvasProvider>;
```

#### Storybook Decorator

We provide a [storybook decorator](../../utils/storybook/CanvasProviderDecorator.tsx) to wrap your
stories in a `CanvasProvider` (including `InputProvider`) automatically.

Add this decorator to your `/.storybook/config.js` configuration file to apply to all stories:

```js
import {CanvasProviderDecorator} from '../utils/storybook';

addDecorator(CanvasProviderDecorator);
```

Or, add it to stories individually:

```js
import {CanvasProviderDecorator} from '../../../../utils/storybook';

storiesOf('My Story', module)
  .addDecorator(CanvasProviderDecorator)
  .add('All', () => <YourJSX />);
```

---

## Theming

Theming documentation has its own README. You can find it [here](./lib/theming/README.md).

---

## Bidirectionality

Bidirectionality is provided by Theming. You can find Theming documentation
[here](./lib/theming/README.md#bidirectionality).
