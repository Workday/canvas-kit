# Canvas Kit Popup

A Popup component that allows you to render content above another.

Note: This popup does not include a positioning engine. In our example we use our popper utility,
which is a wrapper to Popper.js, to wrap our Popup component and position it.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-popup
```

## Popper

A thin wrapper component around the Popper.js positioning engine. For reference:
https://popper.js.org/

### Usage

```tsx
import * as React from 'react';
import {Popup, Popper} from '@workday/canvas-kit-react-popup';

<Popper placement="bottom" open={this.state.open} anchorElement={this.buttonRef.current}>
  <Popup heading="Popup Title">Popup Contents</Popup>
</Popper>;
```

If you need access to the placement that was chosen by PopperJS, pass in a render prop for the
children:

```tsx
import * as React from 'react';
import {Popup, Popper} from '@workday/canvas-kit-react-popup';

<Popper placement="bottom" open={this.state.open} anchorElement={this.buttonRef.current}>
  {({ placement }) => {
    console.log('placement', placement) // logs out the any valid PopperJS placement option except for `auto`
    <Popup heading="Popup Title">Popup Contents</Popup>
  }}
</Popper>;
```

## Popup

### Usage

```tsx
import * as React from 'react';
import {Popper} from '@workday/canvas-kit-react-common';
import {Popup} from '@workday/canvas-kit-react-popup';

// We use Popper from Material UI for our positioning
<Popper placement={'bottom'} open={this.state.open} anchorElement={anchorEl}>
  <Popup
    width={300}
    heading={'Popup Title'}
    padding={Popup.Padding.l}
    handleClose={this.handleClose}
  >
    {this.props.children}
  </Popup>
</Popper>;
```

### Static Properties

#### `Padding: PopupPadding`

```tsx
<Popup padding={Popup.Padding.l}>{this.props.children}</Popup>
```

### Component Props

### Required

> None

---

#### Optional

#### `padding: PopupPadding`

> You can choose between zero, s, l for your padding

Default: `PopupPadding.l`

| Name   | Size (px) |
| ------ | --------- |
| `zero` | 0         |
| `s`    | 16        |
| `l`    | 32        |

#### `handleClose: () => void`

> Callback to handle close of your Popup and any other event when the Popup is closed.

---

#### `width: number | string`

> Width of the card.

---

#### `closeLabel: string`

> Aria label string for the close icon button

---

#### `depth: CanvasDepthValue`

> Depth of the card. Style imported from `@workday/canvas-kit-react-core`.

Default: `depth[2]`

---

#### `transformOrigin: TransformOrigin`

> Origin from which the popup will animate from

Default:

```js
{
  horizontal: 'center',
  vertical: 'top',
}
```

---

#### `heading: ReactNode`

> Heading at the top of the card.

---

#### `closeIconSize: IconButtonSize`

> The size of the close icon button (small or medium)

---

#### `popupRef: React.Ref<HTMLDivElement>`

> A ref to the underlying popup container element. Use this to check click targets against when
> closing a popup.
