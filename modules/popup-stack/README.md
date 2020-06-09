# Canvas Kit Popup Stack

Stack for managing popup UIs to coordinate global concerns like escape key handling and rendering
order. The popup stack is a FILO stack that is framework agnostic and is shared for the entire page.
This sharing is enforced. If the window stack variable (`window.workday.__popupStack`) has already
been declared, the first-instantiated instance will be used. There is no need to worry about
bootstrapping at a specific time.

## What is Stacked UI?

A Stacked UI (typically classified as "popups") component generally isn't statically positioned (not
in the normal flow of the page) and sits on top of other content - usually occluding other content.
A stacked UI element typically redirects a users attention temporarily. For example, a Modal appears
on top of all other content while it is active. A tooltip appears on top of other content when the
target is focused or hovered.

Stacked components include:

- Tooltips
- Modal dialogs
- Select menu dropdown
- Toast messages
- Popups
- Snackbars
- Dropdown menus
- Windows

Stacked UI components are usually unbounded by the physical boundaries of a target element through a
technique of "portalling" the Popup to the bottommost element of the `body` element. This allows a
Tooltip to appear outside any overflowed content. This technique does not work outside the confines
of an iframe, however.

## Why do I need a stack manager?

Simple UIs may define z-index values globally per component type, so why do we need to manage
popups? Popups usually have accessibility requirements that the popup should close if the escape key
is pressed. The naive way of doing this is listening for the escape key in all components. This
works if only one Popup is on the page at a time, but often UIs get more complicated. A simple
example is a Modal dialog with a Select component inside. The user opens the Modal dialog and then
opens a Select menu inside the Modal. The user may hit the escape key which should close the Select
dropdown menu, but not the Modal dialog. A more painful example is the same scenario, but with click
outside detection. The user wants to select an item within the Select dropdown menu, but the Modal
dialog detects clicking inside the dropdown menu as an outside click because the dropdown menu isn't
a direct child component of the Modal dialog because of the "portalling" technique commonly used.

A stack manager keeps track of all Stacked UI registered on the page as they are opened and closed.
A special Window component may be persistent and should be brought to the top of the stack when
clicked on. This is how operating system "windows" work. The behavior requires global coordination
to determine the order that these popups should be rendered.

## Installation

```sh
yarn add @workday/canvas-kit-popup-stack
```

## Usage

> **Note**: This is a low-level module meant to be used as a foundation. The
> `@workday/canvas-kit-react-popup` module has provided React hooks that wrap this API for easier
> use with React.

```tsx
import PopupStack from '@workday/canvas-kit-popup-stack';

const div = document.createElement('div');

// Add to the stack. This will force-set z-index on the element for proper rendering
PopupStack.add({element: div});

// Remove from the stack. This will force-set z-index of other elements in the stack
PopupStack.remove(div);

// Bring current element to the top of the stack. This will force the UI to render the element on top of others
PopupStack.bringToTop(div);

// Will return true if the element is currently the topmost item on the stack
PopupStack.isTopmost(div);

// Returns an array of HTMLElements (note: _not_ the list of stack items)
PopupStack.getElements();

//
PopupStack.contains(element, eventTarget);
```

## API

### PopupStackItem

```tsx
export interface PopupStackItem {
  /**
   * All items in the stack are identified by their DOM element reference. A DOM element is
   * framework agnostic.
   */
  element: HTMLElement;
  /**
   * An owner is typically a trigger or anchor target. For example, it will be a HTMLButtonElement
   * that opened a dropdown menu. If an owner is provided, _and_ that owner element is part of
   * another stack item, it will be considered a "parent" of the provided stack item. This reference
   * helps in the following ways:
   * - Click outside detection typically will use `PopupStack.contains()` which includes this
   *   element. If you wish to close a popup when the target is clicked, add a click handler to do
   *   so.
   * - `PopupStack.bringToTop()` will also bring children to top as well using the `owner` reference
   *   to map a "child" popup back to its parent. This is useful for "Window" or other persistent
   *   popups that are brought to the front when clicked. This will prevent the "Window" from
   *   rendering on top of child popups as they will be brought along also.
   * - Synthetic event systems like in React will bubble events through "portals". This is
   *   inconsistent with DOM event bubbling. This reference helps normalize that behavior across
   *   different frameworks.
   */
  owner?: HTMLElement;
}
```

### add

Adds a PopupStackItem to the stack. This should only be called when the item is rendered to the
page. Z-indexes are set when the item is added to the stack. If your application requires popups to
be registered initially, but rendered when the user triggers some event, call this method when the
event triggers.

```tsx
PopupStack.add(item: PopupStackItem): void
```

### remove

Removes an item from the stack by its `HTMLElement` reference. This should be called when a popup is
"closed" or when the element is removed from the page entirely to ensure proper memory cleanup. This
will not automatically be called when the element is removed from the DOM. Will reset z-index values
of the stack

```tsx
PopupStack.remove(element: HTMLElement): void
```

### isTopmost

Returns true when the provided `element` is at the top of the stack. It will return false if it is
not the top of the stack or is not found in the stack. The `element` should be the same reference
that was passed to `add`

```tsx
PopupStack.isTopmost(element: HTMLElement): boolean
```

### getElements

Returns an array of elements defined by the `element` passed to `add`.

```tsx
PopupStack.getElements(): HTMLElement[]
```

### bringToTop

Bring the element to the top of the stack. This is useful for persistent popups to place them on top
of the stack when clicked. If an `owner` was provided to an item when it was added and that owner is
a DOM child of another item in the stack, that item will be considered a "parent" to this item. If
the previous are true, all "children" stack items will be brought to top as well and will be on top
of the element passed to `bringToTop`. This maintains stack item "hierarchy" so that stack items
like Popups and Tooltips don't get pushed behind elements they are supposed to be on top of.

This does not need to be called when a popup is added since added popups are already place on the
top of the stack.

```tsx
PopupStack.bringToTop(element: HTMLElement): void
```

### contains

Compares a Popup by its element reference against the event target and the stack. An event target is
considered to be "contained" by an element under the following conditions:

- The `eventTarget` is a DOM child of the popup element
- The `eventTarget` is the `owner` element passed when it was added to the stack
- The `eventTarget` is a DOM child of the `owner` element

```tsx
PopupStack.contains(element: HTMLElement, eventTarget: HTMLElement): boolean
```
