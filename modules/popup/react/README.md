# Canvas Kit Popups

A "popup" is a classification for a type of stacked UI element that appears "on top" of statically
positioned content. Tooltips, Modals, Dropdown menus, etc are all examples of "popups". Canvas Kit
has a "stack manager" system for managing these stacked UIs. Different types of popups have
different requirements of behavior for UX and accessibility - we can call them capabilities,
behaviors, or traits. Canvas Kit comes with a number of [behaviors](#hooks) in the form of React
Hooks.

If you are building your own custom stacked UI components, use the [Popper](#popper) component along
with our [hooks](#hooks). The `Popper` component and hooks work with the stack management system for
correct rendering and accessibility behavior. If you cannot use `Popper`, use the
[usePopupStack](#usepoupstack) hook. to properly register and deregister the popup at the correct
time. If you cannot use our hooks, consider upgrading your component to use Hooks. If you cannot do
that, you'll have to look up the `PopupStack` package for the direct API and have a look at the
source code for our hooks into the `PopupStack` API.

This package comes with everything you need to build Popup UIs.

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
https://popper.js.org/. `Popper` also automatically works with the `PopupStack` system. `Popper` has
no UI and will render any children to the `body` element and position around a provided
`anchorElement`.

### Usage

```tsx
import * as React from 'react';
import {Button} from '@workday/canvas-kit-react-button';
import {Popper} from '@workday/canvas-kit-react-popup';

const MyPopper = () => {
  const [open, setOpen] = React.useState(false);
  const buttonRef = React.useRef(null)

  return (
    <div>
      <Button onClick={() => setOpen(true)} buttonRef={buttonRef}>
      <Popper anchorElement={buttonRef} open={true}>
        <div>
          <p>Popper content</p>
          <Button onClick={() => setOpen(false)}>
        </div>
      </Popper>
    </div>
  );
};
```

If you need access to the `placement` that was chosen by PopperJS, `children` can also be a
[render prop](https://reactjs.org/docs/render-props.html).

```tsx
import * as React from 'react';
import {Button} from '@workday/canvas-kit-react-button';
import {Popper} from '@workday/canvas-kit-react-popup';

const MyPopper = () => {
  const [open, setOpen] = React.useState(false);
  const buttonRef = React.useRef(null)

  return (
    <div>
      <Button onClick={() => setOpen(true)} buttonRef={buttonRef}>
      <Popper anchorElement={buttonRef} open={true}>
      {({placement}) => {
        return (
          <div>
            <p>Popper content</p>
            <p>Placement chosen: {placement}</p>
            <Button onClick={() => setOpen(false)}>
          </div>
        )
      }}
      </Popper>
    </div>
  );
};
```

## Popup

### Usage

```tsx
import * as React from 'react';
import {Button} from '@workday/canvas-kit-react-button';
import {Popup, Popper, usePopup} from '@workday/canvas-kit-react-popup';

const MyPopup = () => {
  const { targetProps, closePopup, popperProps } = usePopup()

  return (
    <Button {...targetProps}>Toggle Popup</Button>
    <Popper placement="bottom" {...popperProps}>
      <Popup heading="Popup Title">Popup Contents</Popup>
      <Button onClick={closePopup}>Close</Button>
    </Popper>
  );
};
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

## Hooks

### usePopupStack

```ts
usePopupStack(ref: React.RefObject<HTMLElement>): void
```

This hook will add a `ref` element to the Popup stack on mount and remove on unmount. If you use
`Popper`, the popper `ref` is automatically added/removed from the Popup stack. The Popup stack is
required for proper z-index values to ensure Popups are rendered correct. It is also required for
global listeners like click outside or escape key closing a popup. Without the Popup stack, all
popups will close rather than only the topmost one.

## useAssistiveHideSiblings

```ts
useAssistiveHideSiblings(ref: React.RefObject<HTMLElement>): void
```

This hook will hide all sibling elements from assistive technology. Very useful for modal dialogs.
This will set `aria-hidden` for sibling elements of the provided `ref` element and restore the
previous `aria-hidden` to each component when the component is unmounted. For example, if added to a
Modal component, all children of `document.body` will have an `aria-hidden=true` applied _except_
for the provided `ref` element (the Modal). This will effectively hide all content outside the Modal
from assistive technology including Web Rotor for VoiceOver for example.

**Note**: The provided `ref` element should be root element of your component so that other elements
_outside_ your component will be hidden rather than elements _inside_ your component

## useBringToTopOnClick

```ts
useBringToTopOnClick(ref: React.RefObject<HTMLElement>): void
```

This hook will bring an element to the top of the stack when any element inside the provided `ref`
element is clicked. If `Popper` was used or `PopupStack.add` provided an `owner`, all "child" popups
will also be brought to the top. A "child" popup is a Popup is a Popup that was opened from another
Popup. Usually this is a Tooltip or Select component inside something like a Modal.

## useCloseOnEscape

```ts
useCloseOnEscape(ref: React.RefObject<HTMLElement>, onClose: () => void): void
```

Registers global detection of the Escape key. It will only call the `onClose` callback if the
provided `ref` element is the topmost in the stack. The `ref` should be the same as the one passed
to `usePopupStack` or the `Popper` component since `Popper` uses `usePopupStack` internally.

## useCloseOnOutsideClick

```ts
useCloseOnOutsideClick(ref: React.RefObject<HTMLElement>, onClose: () => void): void
```

Registers global lister for all clicks. It will only call the `onClose` callback if the click
happened outside the `ref` element and its children _and_ the provided `ref` element is the topmost
in the stack. The `ref` should be the same as the one passed to `usePopupStack` or the `Popper`
component since `Popper` uses `usePopupStack` internally.

## onFocusTrap

```ts
onFocusTrap(ref: React.RefObject<HTMLElement>): void
```

"Trap" or "loop" focus within a provided `ref` element. This is required for accessibility on
modals. If a keyboard users hits the Tab or Shift + Tab, this will force "looping" of focus. It
effectively "hides" outside content from keyboard users. Use an overlay to hide content from mouse
users and `useAssistiveHideSiblings` to hide content from assistive technology users.
