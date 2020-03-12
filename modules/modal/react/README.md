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
import {beta_Button as Button} from '@workday/canvas-kit-react-button';
import {Modal, useModal} from '@workday/canvas-kit-react-modal';

const DeleteItem = ({item, onDelete}) => {
  const modal = useModal();

  const deleteItem = event => {
    modal.closeModal();
    onDelete(event, item);
  };

  return (
    <>
      <Button variant={Button.Variant.Delete} {...modal.targetProps}>
        Delete Item
      </Button>
      <Modal heading={'Delete Item'} {...modal.modalProps}>
        <p>Are you sure you'd like to delete the item titled '{item.name}'?</p>
        <Button onClick={deleteItem} variant={Button.Variant.Delete}>
          Delete
        </Button>
        <Button onClick={closeModal} variant={Button.Variant.Secondary}>
          Cancel
        </Button>
      </Modal>
    </>
  );
};

// usage
<DeleteItem
  item={{id: 1, name: 'My Item'}}
  onDelete={(event, item) => console.log(`Deleted ${item.id}: '${item.name}'`)}
/>;
```

## Static Properties

### `Width: ModalWidth`

```tsx
<Modal width={Modal.Width.m} heading={'Modal Title'} handleClose={this.handleClose} />
```

## Component Props

### Required

#### `heading: ReactNode`

> Heading at the top of the card.

---

### Optional

#### `open: boolean`

> Allows you to open/close modal

Default: `false`

#### `width: ModalWidth`

> You can choose between s or m for your modal width

Default: `ModalWidth.s`

| Name | Size (px) |
| ---- | --------- |
| `s`  | 440       |
| `m`  | 800       |

#### `padding: PopupPadding`

> You can choose between zero, s, l for your padding

Default: `PopupPadding.l`

| Name   | Size (px) |
| ------ | --------- |
| `zero` | 0         |
| `s`    | 16        |
| `l`    | 32        |

#### `handleClose: () => void`

> Callback to handle close of your Modal and any other event when the Modal is closed.

#### `closeOnEscape: boolean`

> Accessibility specifications state modals should be closed when the escape key is pressed.
> However, we cannot guarantee that it is safe to simply bind an event listener and close in all
> cases. Some applications may use a Popup manager to make sure the correct popup is receiving the
> close command. If your application uses custom popup stacking, do not set this to true. Set this
> to true for simple applications and the modal will close when the escape key is pressed.

Default: `true`

---

#### `firstFocusRef: React.RefObject<HTMLElement>`

Optional override of the auto-select functionality of the Modal. If this ref is defined, that
element will receive focus when the modal is opened. There are many suggestions to what that element
should be. Contact an accessibility specialist or go through the
https://www.w3.org/TR/wai-aria-practices/ document for instances where this might be useful. Make
sure this is focusable ref, like a button. If you're unsure, don't define this and leave it to the
default behavior.

If this ref is not provided the modal will try to use the close icon. If that icon is not available,
it will make the modal heading focusable and focus on that instead.
