# Canvas Kit Popup Stack

Stack for managing popup UIs to coordinate global concerns like escape key handling and rendering
order. The popup stack is a FILO stack that is framework agnostic and is shared for the entire page.
This sharing is enforced. If the window stack variable (`window.workday.__popupStack`) has already
been declared, the first-instantiated instance will be used. There is no need to worry about
bootstrapping at a specific time.

All Popup-style UIs within a page should register with this stack in order to properly function
together.

## What is a "Popup"?

A "Popup" can be any number of components and is usually described by the behavior of appearing on
top of other UI based on a condition. For example, a Modal appears on top of all other content while
it is active. A tooltip appears on top of other content when the target is focused or hovered.

Popup-style components include:

- Tooltips
- Modal dialogs
- Select menu dropdown
- Toast messages
- Snackbars
- Dropdown menus
- Windows

Popups are usually unbounded by the physical boundaries of a target element through a technique of
"portalling" the Popup to the bottommost element of the `body` element. This allows a Popup to
appear outside overflowed content.

## Why do I need a stack manager?

Simple UIs may define z-index values globally per component type, so why do we need to manage
popups. Popups usually have accessibility requirements that state that the popup should close if the
escape key is pressed. The naive way of doing this is listening for the escape key in all
components. This works if only one Popup is on the page at a time, but often UIs get more
complicated. A simple example is a Modal dialog with a Select component inside. The user opens the
Modal dialog and then opens a Select menu inside the Modal. The user may hit the escape key which
should close the Select dropdown menu, but not the Modal dialog. A more painful example is the same
scenario, but with click outside detection. The user wants to select an item within the Select
dropdown menu, but the Modal dialog detects clicking inside the dropdown menu as an outside click
because the dropdown menu isn't a direct child component of the Modal dialog because of the
"portalling" technique commonly used.

A stack manager keeps track of all Popups registered on the page as Popups are opened and closed. A
special Window component may be persistent and should be brought to the top of the stack when
clicked on. This is how operating system "windows" work. The behavior requires global coordination
to determine the order that these popups should be rendered.

## Installation

```sh
yarn add @workday/canvas-kit-popup-stack
```

## Usage

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
```

This API supports the requirement that "only one popup is closed at a time" through global listeners
like escape key or clicking outside. This can sometimes feel cumbersome, but often is less
frustrating than accidentally closing too many popups in the stack at once.
