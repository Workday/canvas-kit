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
[usePopupStack](#usepoupstack) hook to properly register and deregister the popup at the correct
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
      <Popper anchorElement={buttonRef} open={open}>
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
      <Popper anchorElement={buttonRef} open={open}>
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

### Popper Required Props

#### `anchorElement: RefObject<Element> | Element | null`

> The reference element used to position the Popper. Popper content will try to follow the
> `anchorElement` if it moves and will reposition itself if there is no longer room in the window.

#### `children: ((props: {placement: Placement}) => React.ReactNode) | React.ReactNode`

> The content of the Popper. If a function is provided, it will be treated as a Render Prop and pass
> the `placement` chosen by PopperJS. This `placement` value is useful if your popup needs to
> animate and that animation depends on the direction of the content in relation to the
> `anchorElement`.

### Popper Optional Props

#### `containerElement: Element | null`

> The element that contains the portal children when `portal` is true. It is best to not define this
> unless you know what you're doing. Popper works with a PopupStack and in order for z-indexes to
> work correctly, all Popups on your page should live on the same root element otherwise you risk
> running into rendering issues:
> https://philipwalton.com/articles/what-no-one-told-you-about-z-index/.

Default: `document.body`

#### `getAnchorClientRect?: () => DOMRect`

> When provided, this optional callback will be used to determine positioning for the Popper element
> instead of calling `getBoundingClientRect` on the `anchorElement` prop. Use this when you need
> complete control over positioning. When this prop is specified, it is safe to pass `null` into the
> `anchorElement` prop. If `null` is passed into the `anchorElement` prop, an `owner` will not be
> provided for the `PopupStack`.

Default: `undefined`

#### `open: boolean`

> Determines if `Popper` content should be rendered. The content only exists in the DOM when `open`
> is `true`

Default: `true`

#### `placement: PopperJS.Placement`

> The placement of the `Popper` contents relative to the `anchorElement`. Accepts `auto`, `top`,
> `right`, `bottom`, or `left`. Each placement can also be modified using any of the following
> variations: `-start` or `-end`.

Default: `'bottom'`

#### `popperOptions: Partial<PopperJS.PopperOptions>`

> The additional options passed to the Popper's `popper.js` instance.

#### `portal: boolean`

> If true, attach the Popper to the `containerElement`. If false, render the Popper within the DOM
> hierarchy of its parent. A non-portal Popper will constrained by the parent container overflows.
> If you set this to `false`, you may experience issues where you content gets cut off by scrollbars
> or `overflow: hidden`

Default: `true`

## Popup

### Popup Usage

```tsx
import * as React from 'react';
import {Button} from '@workday/canvas-kit-react-button';
import {Popup, Popper, usePopup, useCloseOnOutsideClick, useCloseOnEscape} from '@workday/canvas-kit-react-popup';

const MyPopup = () => {
  const { targetProps, closePopup, popperProps, stackRef } = usePopup()

  // Add some behaviors
  useCloseOnOutsideClick(stackRef, closePopup);
  useCloseOnEscape(stackRef, closePopup);

  return (
    <Button {...targetProps}>Toggle Popup</Button>
    <Popper placement="bottom" {...popperProps}>
      <Popup heading="Popup Title">Popup Contents</Popup>
      <Button onClick={closePopup}>Close</Button>
    </Popper>
  );
};
```

### Popup Static Properties

#### `Padding: PopupPadding`

```tsx
<Popup padding={Popup.Padding.l}>{this.props.children}</Popup>
```

### Popup Required Props

> None

---

### Popup Optional Props

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
const stackRef = usePopupStack(forwardRef?: React.RefObject<HTMLElement>): React.RefObject<HTMLDivElement>
```

This hook should not be used directly. Use the `Popper` component instead. There is also a
convenience [usePopup](#usePopup)

This hook will add the `stackRef` element to the Popup stack on mount and remove on unmount. If you
use `Popper`, the popper `stackRef` is automatically added/removed from the Popup stack. The Popup
stack is required for proper z-index values to ensure Popups are rendered correct. It is also
required for global listeners like click outside or escape key closing a popup. Without the Popup
stack, all popups will close rather than only the topmost one.

If `forwardRef` is provided, it will be the same as `stackRef`. If `forwardRef` is not provided`,
this hook will create one and return it.

This hook should be used by all stacked UIs unless using the `Popper` component.

Example:

```tsx
const [open, setOpen] = React.useState(false);
const stackRef = usePopupStack();

const closePopup = () => {
  setOpen(false);
};

// add some popup functionality
useCloseOnOutsideClick(stackRef, closePopup);
useCloseOnEscape(stackRef, closePopup);
```

### usePopup

Convenience hook for common Popups used as non-modal dialogs. It provides props to mix into
composite parts of the Popup pattern.

```tsx
import {
  Button,
  DeleteButton,
  Popper,
  Popup,
  usePopup,
  useCloseOnOutsideClick,
  useCloseOnEscape,
} from '@workday/canvas-kit-react';

const MyDeleteButton = ({onConfirm}) => {
  const {targetProps, closePopup, popperProps, stackRef} = usePopup();

  // popup traits
  useCloseOnOutsideClick(stackRef);
  useCloseOnEscape(stackRef);

  return (
    <>
      <DeleteButton {...targetProps}>Delete Item</DeleteButton>
      <Popper placement="bottom" {...popperProps}>
        <Popup heading="Delete Item" handleClose={closePopup}>
          <p>Are you sure you'd like to delete?</p>
          <DeleteButton onClick={onConfirm}>Yes</DeleteButton>
          <Button onClick={closePopup}>No</Button>
        </Popup>
      </Popper>
    </>
  );
};
```

## useAssistiveHideSiblings

```ts
useAssistiveHideSiblings(ref: React.RefObject<HTMLElement>): void
```

This hook will hide all sibling elements from assistive technology. Very useful for modal dialogs.
This will set `aria-hidden` for sibling elements of the provided `stackRef` element and restore the
previous `aria-hidden` to each component when the component is unmounted. For example, if added to a
Modal component, all children of `document.body` will have an `aria-hidden=true` applied _except_
for the provided `stackRef` element (the Modal). This will effectively hide all content outside the
Modal from assistive technology including Web Rotor for VoiceOver for example.

**Note**: The provided `stackRef` element should be root element of your component so that other
elements _outside_ your component will be hidden rather than elements _inside_ your component.

This should be used on stacked UI elements that need to hide content. Like Modals.

## useBringToTopOnClick

```ts
useBringToTopOnClick(stackRef: React.RefObject<HTMLElement>): void
```

This hook will bring an element to the top of the stack when any element inside the provided
`stackRef` element is clicked. If `Popper` was used or `PopupStack.add` provided an `owner`, all
"child" popups will also be brought to the top. A "child" popup is a Popup that was opened from
another Popup. Usually this is a Tooltip or Select component inside something like a Modal.

This should be used on stacked UI elements that are meant to persist, like Windows.

## useCloseOnEscape

```ts
useCloseOnEscape(stackRef: React.RefObject<HTMLElement>, onClose: () => void): void
```

Registers global detection of the Escape key. It will only call the `onClose` callback if the
provided `stackRef` element is the topmost in the stack. The `stackRef` should be the same as the
one passed to `usePopupStack` or the `Popper` component since `Popper` uses `usePopupStack`
internally.

This should be used stacked UI elements that are dismissible like Tooltips, Modals, non-modal
dialogs, dropdown menus, etc.

## useCloseOnOutsideClick

```ts
useCloseOnOutsideClick(stackRef: React.RefObject<HTMLElement>, onClose: () => void): void
```

Registers global listener for all clicks. It will only call the `onClose` callback if the click
happened outside the `stackRef` element and its children _and_ the provided `stackRef` element is
the topmost in the stack. The `stackRef` should be the same as the one passed to `usePopupStack` or
the `Popper` component since `Popper` uses `usePopupStack` internally.

This should be used stacked UI elements that are dismissible like Tooltips, Modals, non-modal
dialogs, dropdown menus, etc.

## useFocusTrap

```ts
useFocusTrap(stackRef: React.RefObject<HTMLElement>): void
```

"Trap" or "loop" focus within a provided `stackRef` element. This is required for accessibility on
modals. If a keyboard users hits the Tab or Shift + Tab, this will force "looping" of focus. It
effectively "hides" outside content from keyboard users. Use an overlay to hide content from mouse
users and `useAssistiveHideSiblings` to hide content from assistive technology users.

This should be used on stacked UI elements that need to hide content. Like Modals.
