# Canvas Kit Modal

A Modal component that allows you to render a Popup with translucent overlays.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-modal
```

## Usage

```tsx
import * as React from 'react';
import {Modal} from '@workday/canvas-kit-react-modal';

<Modal open width={Modal.Width.m} heading={'Modal Title'} handleClose={this.handleClose}>
  {this.props.children}
</Modal>;
```

## Static Properties

### `Width: ModalWidth`

```tsx
<Modal width={Modal.Width.m} heading={'Modal Title'} handleClose={this.handleClose} />
```

## Component Props

### Required

> None

---

### Optional

#### `open: boolean`

> Allows you to open/close modal

Default: `false`

### `width: ModalWidth`

> You can choose between s or m for your modal width

Default: `ModalWidth.s`

| Name | Size (px) |
| ---- | --------- |
| `s`  | 440       |
| `m`  | 800       |

### `padding: PopupPadding`

> You can choose between zero, s, l for your padding

Default: `PopupPadding.l`

| Name   | Size (px) |
| ------ | --------- |
| `zero` | 0         |
| `s`    | 16        |
| `l`    | 32        |

#### `handleClose: () => void`

> Callback to handle close of your Modal and any other event when the Modal is closed.

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
