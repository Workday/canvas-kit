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

# Canvas Kit Popper

A thin wrapper component around the Popper.js positioning engine. For reference:
https://popper.js.org/

## Usage

```tsx
import * as React from 'react';
import {Popper} from '@workday/canvas-kit-react-common';
import {Popup} from '@workday/canvas-kit-react-popup';

<Popper placement={'bottom'} open={this.state.open} anchorElement={this.buttonRef.current}>
  <Popup heading={'Popup Title'}>{this.props.children}</Popup>
</Popper>;
```

## Testing

Popper.js uses DOM calls that aren't available in JSDOM. This can cause problems with some testing
frameworks that use JSDOM such as jest. When testing you can
[mock out](https://github.com/FezVrasta/popper.js#how-to-use-popperjs-in-jest) these calls made by
Popper.js.

Alternatively, you can mock out the `Popper` wrapper itself. An example of how to do this in jest is
shown below:

```
jest.mock('@workday/canvas-kit-react-common', () => ({
  ...jest.genMockFromModule('@workday/canvas-kit-react-common'),
  Popper: props => (props.open ? <div id="POPPER">{props.children}</div> : null),
}));
```

## Static Properties

> None

## Component Props

This component extends the HTML `div` element. All additional props that are passed to this
component that are valid HTML attributes will be rendered as part of the wrapper `div` element. This
includes custom `data-*` attributes such as `data-test-id` to help facilitate automation testing.

### Required

#### `anchorElement: Element | null`

> The reference element used to position the popper.

#### `children: React.ReactNode`

> The element used as the popper.

---

### Optional

#### `containerElement: Element`

> The containing element for Popper elements. The Popper uses {@link
> https://reactjs.org/docs/portals.html Portals} to place the DOM elements of the Popper in a
> different place in the DOM to prevent issues with overflowed containers. When the popper is
> opened, `aria-hidden` will be added to siblings to hide background content from assistive
> technology like it is visibly hidden from sighted users. This property should be set to the
> element that the application root goes - not containing element of content. This should be a
> sibling or higher than the header and navigation elements of the application.

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

> Addtional options passed to the `popper.js` instance.

---
