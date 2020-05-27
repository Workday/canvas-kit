# Canvas Kit Popup Stack

Stack for managing popup UIs to coordinate global concerns like escape key handling and rendering
order. The popup stack is framework agnostic. The popup stack uses a shared array as the stack. This
sharing is enforced. If the stack variable has already been declared, the first-instantiated will be
used. There is no need to worry about bootstrapping at a specific time.

All Popup-style UIs within a page should register with this stack in order to properly function
together.

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
