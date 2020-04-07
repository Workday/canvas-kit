# Canvas Kit Toast

Canvas-styled React toast component. Allows for a brief message to be be shown about a process or
action occurring in the app.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-toast
```

# Toast

## Usage

Extends from the Popup component.

```tsx
import * as React from 'react';
import {Popper} from '@workday/canvas-kit-react-common';
import {Toast} from '@workday/canvas-kit-react-toast';

// We use Popper from Material UI for our positioning
<Popper placement={'top'} open={this.state.open} anchorElement={anchorEl}>
  <Toast onClose={this.handleClose}>{this.props.children}</Toast>
</Popper>;
```

## Static Properties

## Component Props

### Required

### Optional

#### `onClose: () => void`

> Callback to handle close of your Toast and any other event when the Toast is closed.

---

#### `onActionClick: () => void`

> Callback to handle an action link

---

#### `actionText: string`

> The text to display for the link

---

#### `transformOrigin: TransformOrigin`

> Origin from which the toast will animate from

Default:

```js
{
  horizontal: 'center',
  vertical: 'top',
}
```

---

#### `icon: CanvasSystemIcon`

> Pass whatever icon you'd like to display on the left side of the Toast You can import icons from

```js
import {exclamationCircleIcon, checkIcon} from '@workday/canvas-system-icons-web';
```

---

#### `iconColor: string`

> The color of the icon

---
