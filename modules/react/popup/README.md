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
[usePopupStack](#usepopupstack) hook to properly register and deregister the popup at the correct
time. If you cannot use our hooks, consider upgrading your component to use Hooks. If you cannot do
that, you'll have to look up the `PopupStack` package for the direct API and have a look at the
source code for our hooks into the `PopupStack` API.

This package comes with everything you need to build Popup UIs.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Popper

A thin wrapper component around the Popper.js positioning engine. For reference:
https://popper.js.org/. `Popper` also automatically works with the `PopupStack` system. `Popper` has
no UI and will render any children to the `body` element and position around a provided
`anchorElement`.

### Usage

```tsx
import * as React from 'react';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Popper} from '@workday/canvas-kit-react/popup';

const MyPopper = () => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);

  return (
    <div>
      <SecondaryButton onClick={() => setOpen(true)} ref={ref}>
        Open Popper
      </SecondaryButton>
      <Popper anchorElement={ref} open={open}>
        <div>
          <p>Popper content</p>
          <SecondaryButton onClick={() => setOpen(false)}>Close Popper</SecondaryButton>
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
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Popper} from '@workday/canvas-kit-react/popup';

const MyPopper = () => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);

  return (
    <div>
      <SecondaryButton onClick={() => setOpen(true)} ref={ref}>
        Open Popper
      </SecondaryButton>
      <Popper anchorElement={ref} open={open}>
        {({placement}) => {
          return (
            <div>
              <p>Popper content</p>
              <p>Placement chosen: {placement}</p>
              <SecondaryButton onClick={() => setOpen(false)}>Close Popper</SecondaryButton>
            </div>
          );
        }}
      </Popper>
    </div>
  );
};
```

## Popup

### Popup Usage

```tsx
import * as React from 'react';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Popup, Popper, usePopup, useCloseOnOutsideClick, useCloseOnEscape} from '@workday/canvas-kit-react/popup';

const MyPopup = () => {
  const { targetProps, closePopup, popperProps, stackRef } = usePopup()

  // Add some behaviors
  useCloseOnOutsideClick(stackRef, closePopup);
  useCloseOnEscape(stackRef, closePopup);

  return (
    <SecondaryButton {...targetProps}>Toggle Popup</SecondaryButton>
    <Popper placement="bottom" {...popperProps}>
      <Popup heading="Popup Title">Popup Contents</Popup>
      <SecondaryButton onClick={closePopup}>Close</SecondaryButton>
    </Popper>
  );
};
```

## Hooks

### usePopupStack

```ts
const stackRef = usePopupStack(forwardRef?: React.RefObject<HTMLElement>): React.RefObject<HTMLDivElement>
```

**Note:** If you're using `Popper`, you do not need to use this hook directly.

This hook will add the `stackRef` element to the Popup stack on mount and remove on unmount. If you
use `Popper`, the popper `stackRef` is automatically added/removed from the Popup stack. The Popup
stack is required for proper z-index values to ensure Popups are rendered correct. It is also
required for global listeners like click outside or escape key closing a popup. Without the Popup
stack, all popups will close rather than only the topmost one.

If `forwardRef` is provided, it will be the same as `stackRef`. If `forwardRef` is not provided`,
this hook will create one and return it.

This hook should be used by all popups unless using the `Popper` component.

Example:

```tsx
const model = usePopupModel();
usePopupStack(model.state.stackRef, model.state.targetRef);

// add some popup functionality
useCloseOnOutsideClick(model);
useCloseOnEscape(model);

return (
  <>
    <button ref={model.state.targetRef}>Open Popup</button>
    {model.state.visibility !== 'hidden'
      ? ReactDOM.createPortal(<div>Popup Contents</div>, model.state.stackRef.current)
      : null}
  </>
);
```

## useAssistiveHideSiblings

```ts
useAssistiveHideSiblings(model: PopupModel): {}
```

This hook will hide all sibling elements from assistive technology. Very useful for modal dialogs.
This will set `aria-hidden` for sibling elements of the provided PopupModel's `state.stackRef`
element and restore the previous `aria-hidden` to each component when the component is unmounted.
For example, if added to a Modal component, all children of `document.body` will have an
`aria-hidden=true` applied _except_ for the provided `stackRef` element (the Modal). This will
effectively hide all content outside the Modal from assistive technology including Web Rotor for
VoiceOver for example.

This should be used on popup elements that need to hide content (i.e. Modals).

## useBringToTopOnClick

```ts
useBringToTopOnClick(model: PopupModel): {}
```

This hook will bring an element to the top of the stack when any element inside the provided
PopupModel's `state.stackRef` element is clicked. If `Popup.Popper` was used or `PopupStack.add`
provided an `owner`, all "child" popups will also be brought to the top. A "child" popup is a Popup
that was opened from another Popup. Usually this is a Tooltip or Select component inside something
like a Modal.

This should be used on popup elements that are meant to persist (i.e. Windows).

## useCloseOnEscape

```ts
useCloseOnEscape(model: PopupModel): {}
```

Registers global detection of the Escape key. It will only call the PopupModel's `hide` event if the
provided model's `state.stackRef` element is the topmost in the stack.

This should be used with popup elements that are dismissible like Tooltips, Modals, non-modal
dialogs, dropdown menus, etc.

## useCloseOnOutsideClick

```ts
useCloseOnOutsideClick(model: PopupModel): {}
```

Registers global listener for all clicks. It will only call the PopupModel's `hide` event if the
click happened outside the PopupModel's `state.stackRef` element and its children _and_ the provided
`stackRef` element is the topmost element with this behavior applied in the stack. Adds a
`data-behavior-click-outside-close="topmost"` attribute to ensure proper functionality.

This should be used with popup elements that are dismissible like Modals, non-modal dialogs,
dropdown menus, etc. Tooltips and hierarchical menus should use `useAlwaysCloseOnClickOutside`
instead.

## useAlwaysCloseOnOutsideClick

```ts
useAlwaysCloseOnOutsideClick(model: PopupModel): {}
```

Registers global listener for all clicks. It will only call the PopupModel's `hide` event if the
click happened outside the `stackRef` element and its children regardless of the position in the
stack. This is useful for Tooltips or hierarchical menus. Adds a
`data-behavior-click-outside-close="always"` attribute to ensure proper functionality.

This should be used with popup elements that should close no matter their position in the stack
(i.e. Tooltips).

## useDisableBodyScroll

```ts
useDisableBodyScroll(model: PopupModel): {}
```

Disables body scroll by adding `overflow: hidden` to the body element. This effectively prevents
page scrolling while the popup is visible.

This should be used with popup elements that hide all other content and force the user to accept or
dismiss the popup before continuing (i.e. Modals).

## useFocusRedirect

```ts
useFocusRedirect(model: PopupModel): {}
```

Manages focus around a popup, treating the popup as if it was part of the DOM where it appears.
Popups are typically "portalled" (inserted at the end of `document.body`) to ensure proper
rendering. This violates
[WCAG Focus Order](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-order.html).
This hook helps redirect focus as if the popup element appeared in the DOM. `aria-owns` might also
be used to ensure assistive technology places the popup after the button for virtual cursors. This
hook does no provide `aria-owns` and this must be provided yourself. Requires
[useReturnFocus](#useReturnFocus) to work properly. Works well with
[useInitialFocus](#useinitialfocus).

This should be used with non-modal dialogs.

## useFocusTrap

```ts
useFocusTrap(model: PopupModel): {}
```

"Trap" or "loop" focus within a provided `stackRef` element. This is required for accessibility on
modals. If a keyboard users hits the Tab or Shift + Tab, this will force "looping" of focus. It
effectively "hides" outside content from keyboard users. Use an overlay to hide content from mouse
users and `useAssistiveHideSiblings` to hide content from assistive technology users. Works well
with [useInitialFocus](#useinitialfocus) and [useReturnFocus](#usereturnfocus).

This should be used on popup elements that need to hide content (i.e. Modals).

## useInitialFocus

Moves focus within the popup when the popup becomes visible. This is useful for keyboard and screen
reader users alike. This should be used with [useFocusRedirect](#usefocusredirect) or
[useFocusTrap](#usefocustrap) for a complete focus management solution.

This should be used for popups that have focusable elements inside, like Modals, non-modal dialogs,
menus, etc.

## useReturnFocus

Returns focus to the target element when the popup is hidden. This works well with
[useInitialFocus](#useinitialfocus). This should be used with [useFocusRedirect](#usefocusredirect)
or [useFocusTrap](#usefocustrap) for a complete focus management solution.
