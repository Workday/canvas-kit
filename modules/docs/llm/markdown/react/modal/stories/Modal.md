---
source_file: react/modal/stories/Modal.mdx
live_url: https://workday.github.io/canvas-kit/react/modal/stories/Modal
---

<Meta of={ModalStories} />

# Canvas Kit Modal

A Modal component is a type of Dialog that renders a translucent overlay that prevents user
interaction with the rest of the page. A Modal will render the rest of the page inert until the
Modal is dismissed. A Modal should be used when the user needs to presented with important
information that must be interacted with before continuing interaction with the rest of the page.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Basic

The basic behavior of a modal is to hide all content from all users that is "behind" the modal
dialog.

```tsx
import {Modal} from '@workday/canvas-kit-react/modal';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Flex, Box} from '@workday/canvas-kit-react/layout';

export const Basic = () => {
  const handleAcknowledge = () => {
    console.log('License Acknowledged');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  return (
    <Modal>
      <Modal.Target as={PrimaryButton}>Open License</Modal.Target>
      <Modal.Overlay>
        <Modal.Card>
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>MIT License</Modal.Heading>
          <Modal.Body>
            <Box as="p" marginY="zero">
              Permission is hereby granted, free of charge, to any person obtaining a copy of this
              software and associated documentation files (the "Software").
            </Box>
          </Modal.Body>
          <Flex gap="s" padding="xxs">
            <Modal.CloseButton as={PrimaryButton} onClick={handleAcknowledge}>
              Acknowledge
            </Modal.CloseButton>
            <Modal.CloseButton onClick={handleCancel}>Cancel</Modal.CloseButton>
          </Flex>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};

```

### Without Close Icon

If you wish to remove the close icon button, you can simply omit the `Modal.CloseButton`
subcomponent. If you have a modal dialog that requires the user to accept instead of dismiss though
an escape key or clicking outside the modal, you must create a new `PopupModel` without those
behaviors and hand that model to the Modal dialog component.

```tsx
import React from 'react';

import {Modal} from '@workday/canvas-kit-react/modal';
import {
  usePopupModel,
  useInitialFocus,
  useReturnFocus,
  useFocusTrap,
  useAssistiveHideSiblings,
  useDisableBodyScroll,
} from '@workday/canvas-kit-react/popup';
import {DeleteButton} from '@workday/canvas-kit-react/button';
import {Flex, Box} from '@workday/canvas-kit-react/layout';
import {useUniqueId} from '@workday/canvas-kit-react/common';

export const WithoutCloseIcon = () => {
  const longDescId = useUniqueId();
  const cancelBtnRef = React.useRef(null);
  const model = usePopupModel({
    initialFocusRef: cancelBtnRef,
  });

  // disable useCloseOnEscape and useCloseOnOverlayClick
  useInitialFocus(model);
  useReturnFocus(model);
  useFocusTrap(model);
  useAssistiveHideSiblings(model);
  useDisableBodyScroll(model);
  const handleDelete = () => {
    console.log('Deleted item');
  };

  return (
    <Modal model={model}>
      <Modal.Target as={DeleteButton}>Delete Item</Modal.Target>
      <Modal.Overlay>
        <Modal.Card aria-describedby={longDescId}>
          <Modal.Heading>Delete Item</Modal.Heading>
          <Modal.Body>
            <Box as="p" id={longDescId} marginY="zero">
              Are you sure you want to delete the item?
            </Box>
          </Modal.Body>
          <Flex gap="s" padding="xxs">
            <Modal.CloseButton ref={cancelBtnRef}>Cancel</Modal.CloseButton>
            <Modal.CloseButton as={DeleteButton} onClick={handleDelete}>
              Delete
            </Modal.CloseButton>
          </Flex>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};

```

### Custom Focus

By default, the Modal makes sure the first focusable element receives focus when the Modal is
opened. Most of the time, this is the `Modal.CloseIcon` button. If that element isn't present, the
Modal will use the Modal Heading to make sure screen reader users have focus near the start of the
Modal's content. This allows screen reader users to discover the Modal's content more naturally
without having to navigate back up again. Sometimes, it is a better user experience to focus on a
different element. The following example shows how `initialFocusRef` can be used to change which
element receives focus when the modal opens.

```tsx
import React from 'react';
import {Modal, useModalModel} from '@workday/canvas-kit-react/modal';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Flex, Box} from '@workday/canvas-kit-react/layout';
import {useUniqueId} from '@workday/canvas-kit-react/common';

export const CustomFocus = () => {
  const longDescID = useUniqueId();
  const ref = React.useRef<HTMLInputElement>(null);
  const [value, setValue] = React.useState('');
  const model = useModalModel({
    initialFocusRef: ref,
  });

  const handleAcknowledge = () => {
    console.log('Acknowledged license');
  };

  return (
    <Modal model={model}>
      <Modal.Target as={PrimaryButton}>Acknowledge License</Modal.Target>
      <Modal.Overlay>
        <Modal.Card aria-describedby={longDescID}>
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>Acknowledge License</Modal.Heading>
          <Modal.Body>
            <Box as="p" id={longDescID} marginTop={0} marginBottom="m">
              Enter your initials to acknowledge the license.
            </Box>
            <FormField cs={{marginBottom: 0}}>
              <FormField.Label>Initials</FormField.Label>
              <FormField.Input
                as={TextInput}
                ref={ref}
                value={value}
                onChange={e => setValue(e.currentTarget.value)}
              />
            </FormField>
          </Modal.Body>
          <Flex gap="s" padding="xxs">
            <Modal.CloseButton as={PrimaryButton} onClick={handleAcknowledge}>
              Acknowledge
            </Modal.CloseButton>
            <Modal.CloseButton>Cancel</Modal.CloseButton>
          </Flex>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};

```

### Return Focus

By default, the Modal will return focus to the `Modal.Target` element, but it is possible the Modal
was triggered by an element that won't exist when the modal is closed. An example might be a Modal
that was opened from an Menu item and the act of opening the Modal also closes the Menu, meaning the
Menu item can no longer receive focus. The also probably means the `Modal.Target` component might
not suite your needs. The `Modal.Target` adds both a `ref` and an `onClick`. If you provide a
`returnFocusRef`, you only need to worry about the `onClick`. If you're using a menu, you might need
to use a different callback. Calling `model.events.show()` will show the Modal.

```tsx
import React from 'react';
import {Modal, useModalModel} from '@workday/canvas-kit-react/modal';
import {DeleteButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex, Box} from '@workday/canvas-kit-react/layout';
import {Select} from '@workday/canvas-kit-react/select';

export const ReturnFocus = () => {
  const ref = React.useRef(null);
  const [value, setValue] = React.useState('');
  const model = useModalModel({
    returnFocusRef: ref,
  });

  const handleDelete = () => {
    console.log('Deleted item');
  };

  return (
    <Modal model={model}>
      <Select items={['', 'Delete', 'Two']}>
        <FormField>
          <FormField.Label>Choose an option</FormField.Label>
          <FormField.Input
            as={Select.Input}
            ref={ref}
            onChange={e => {
              const option = e.currentTarget.value;
              if (option === 'Delete') {
                model.events.show();
                setValue('');
              } else {
                setValue(e.currentTarget.value);
              }
            }}
          />
          <Select.Popper>
            <Select.Card>
              <Select.List>{item => <Select.Item>{item}</Select.Item>}</Select.List>
            </Select.Card>
          </Select.Popper>
        </FormField>
      </Select>
      <Modal.Overlay>
        <Modal.Card>
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>Delete Item</Modal.Heading>
          <Modal.Body>
            <Box as="p" marginY="zero">
              Are you sure you want to delete the item?
            </Box>
          </Modal.Body>
          <Flex gap="s" padding="xxs">
            <Modal.CloseButton as={DeleteButton} onClick={handleDelete}>
              Delete
            </Modal.CloseButton>
            <Modal.CloseButton>Cancel</Modal.CloseButton>
          </Flex>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};

```

### Custom Target

It is common to have a custom target for your modal. Use the `as` prop to use your custom component.
The `Modal.Target` element will add `onClick` and `ref` to the provided component. Your provided
target component must forward the `onClick` to an element for the Modal to open. The `as` will cause
`Modal.Target` to inherit the interface of your custom target component. This means any props your
target requires, `Modal.Target` now also requires. The example below has a `MyTarget` component that
requires a `label` prop.

> **Note**: If your application needs to programmatically open a Modal without the user interacting
> with the target button first, you'll also need to use `React.forwardRef` in your target component.
> Without this, the Modal will open at the top-left of the window instead of around the target.

```tsx
import React from 'react';

import {Modal} from '@workday/canvas-kit-react/modal';

interface MyTargetProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const MyTarget = ({label, ...props}: MyTargetProps) => {
  return <button {...props}>{label}</button>;
};

export const CustomTarget = () => {
  return (
    <Modal>
      <Modal.Target as={MyTarget} label="Open" />
      <Modal.Overlay>
        <Modal.Card>
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>Modal Heading</Modal.Heading>
          <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper facilisis dolor
            quis facilisis. Aenean tempor eget quam et semper. Nam malesuada rhoncus euismod.
            Quisque vel urna feugiat, dictum risus sed, pulvinar nulla. Sed gravida, elit non
            iaculis blandit, ligula tortor posuere mauris, vitae cursus turpis nunc non arcu.
          </Modal.Body>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};

```

### Body Content Overflow

The Modal automatically handles overflowing content inside the `Modal.Body` element. If contents are
larger than the browser's height will allow, the content will overflow with a scrollbar. You may
need to restrict the height of your browser to observe the overflow.

```tsx
import React from 'react';

import {Modal} from '@workday/canvas-kit-react/modal';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';

export const BodyOverflow = () => {
  const handleAcknowledge = () => {
    console.log('License Acknowledged');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  return (
    <Modal>
      <Modal.Target as={PrimaryButton}>Open License</Modal.Target>
      <Modal.Overlay>
        <Modal.Card>
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>MIT License</Modal.Heading>
          <Modal.Body tabIndex={0}>
            <p style={{marginTop: 0}}>
              Permission is hereby granted, free of charge, to any person obtaining a copy of this
              software and associated documentation files (the "Software"), to deal in the Software
              without restriction, including without limitation the rights to use, copy, modify,
              merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
              permit persons to whom the Software is furnished to do so, subject to the following
              conditions:
            </p>
            <p>
              The above copyright notice and this permission notice shall be included in all copies
              or substantial portions of the Software.
            </p>
            <p>
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
              INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
              PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
              CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
              OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Amet massa vitae tortor condimentum
              lacinia quis. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Sed lectus
              vestibulum mattis ullamcorper velit sed. Rutrum tellus pellentesque eu tincidunt
              tortor aliquam nulla. Vitae turpis massa sed elementum tempus egestas sed sed risus.
              Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Id neque
              aliquam vestibulum morbi blandit cursus risus at. Vel eros donec ac odio tempor orci.
              Ac felis donec et odio pellentesque diam volutpat. Laoreet non curabitur gravida arcu
              ac tortor dignissim. Rhoncus urna neque viverra justo nec ultrices dui. Bibendum arcu
              vitae elementum curabitur vitae nunc sed velit dignissim. Sed risus pretium quam
              vulputate dignissim suspendisse in est. Curabitur gravida arcu ac tortor. Nam libero
              justo laoreet sit amet cursus sit amet. Arcu dui vivamus arcu felis bibendum ut
              tristique et egestas. Eros donec ac odio tempor orci dapibus ultrices. At erat
              pellentesque adipiscing commodo elit at. Dignissim cras tincidunt lobortis feugiat
              vivamus at augue.
            </p>
            <p>
              Amet commodo nulla facilisi nullam vehicula ipsum. Blandit libero volutpat sed cras.
              Quam lacus suspendisse faucibus interdum posuere. Aenean euismod elementum nisi quis
              eleifend. Orci nulla pellentesque dignissim enim sit amet venenatis. Diam vel quam
              elementum pulvinar etiam non quam lacus. Sit amet dictum sit amet justo donec enim
              diam vulputate. Tincidunt ornare massa eget egestas purus. Pulvinar neque laoreet
              suspendisse interdum consectetur libero id faucibus. Morbi tincidunt augue interdum
              velit. Nullam non nisi est sit amet.
            </p>
            <p style={{marginBottom: 0}}>
              Aliquet enim tortor at auctor urna nunc id cursus metus. Leo urna molestie at
              elementum eu facilisis. Consectetur purus ut faucibus pulvinar elementum integer.
              Volutpat est velit egestas dui id ornare arcu odio. At consectetur lorem donec massa
              sapien. Condimentum vitae sapien pellentesque habitant. Pellentesque habitant morbi
              tristique senectus. Et molestie ac feugiat sed lectus vestibulum. Arcu risus quis
              varius quam quisque. Turpis massa tincidunt dui ut ornare lectus sit amet. Magna eget
              est lorem ipsum dolor sit. Suspendisse faucibus interdum posuere lorem ipsum. Nisi
              vitae suscipit tellus mauris a diam maecenas sed. Ipsum dolor sit amet consectetur
              adipiscing. Ultricies integer quis auctor elit sed. Scelerisque varius morbi enim nunc
              faucibus a. Tortor consequat id porta nibh venenatis cras. Consectetur adipiscing elit
              ut aliquam purus sit.
            </p>
          </Modal.Body>
          <Flex gap="s" padding="xxs">
            <Modal.CloseButton as={PrimaryButton} onClick={handleAcknowledge}>
              Acknowledge
            </Modal.CloseButton>
            <Modal.CloseButton onClick={handleCancel}>Cancel</Modal.CloseButton>
          </Flex>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};

```

### Full overlay scrolling

If content is large, scrolling the entire overlay container is an option. Use the
`Modal.OverflowOverlay` component instead of the `Modal.Overlay` component. The `Modal.Card`'s
`maxHeight` and `height` will need to be reset to `inherit` to prevent any internal overflow.

This has the effect of scrolling the heading, close button, and any action buttons. If this type of
scrolling behavior is not desired, try the [Body Content Overflow](#body-content-overflow) method.

```tsx
import React from 'react';

import {Modal} from '@workday/canvas-kit-react/modal';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';

export const FullOverflow = () => {
  const handleAcknowledge = () => {
    console.log('License Acknowledged');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  return (
    <Modal>
      <Modal.Target as={PrimaryButton}>Open License</Modal.Target>
      <Modal.OverflowOverlay>
        <Modal.Card maxHeight="inherit" height="inherit">
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>MIT License</Modal.Heading>
          <Modal.Body tabIndex={0}>
            <p style={{marginTop: 0}}>
              Permission is hereby granted, free of charge, to any person obtaining a copy of this
              software and associated documentation files (the "Software"), to deal in the Software
              without restriction, including without limitation the rights to use, copy, modify,
              merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
              permit persons to whom the Software is furnished to do so, subject to the following
              conditions:
            </p>
            <p>
              The above copyright notice and this permission notice shall be included in all copies
              or substantial portions of the Software.
            </p>
            <p>
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
              INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
              PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
              CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
              OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Amet massa vitae tortor condimentum
              lacinia quis. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Sed lectus
              vestibulum mattis ullamcorper velit sed. Rutrum tellus pellentesque eu tincidunt
              tortor aliquam nulla. Vitae turpis massa sed elementum tempus egestas sed sed risus.
              Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Id neque
              aliquam vestibulum morbi blandit cursus risus at. Vel eros donec ac odio tempor orci.
              Ac felis donec et odio pellentesque diam volutpat. Laoreet non curabitur gravida arcu
              ac tortor dignissim. Rhoncus urna neque viverra justo nec ultrices dui. Bibendum arcu
              vitae elementum curabitur vitae nunc sed velit dignissim. Sed risus pretium quam
              vulputate dignissim suspendisse in est. Curabitur gravida arcu ac tortor. Nam libero
              justo laoreet sit amet cursus sit amet. Arcu dui vivamus arcu felis bibendum ut
              tristique et egestas. Eros donec ac odio tempor orci dapibus ultrices. At erat
              pellentesque adipiscing commodo elit at. Dignissim cras tincidunt lobortis feugiat
              vivamus at augue.
            </p>
            <p>
              Amet commodo nulla facilisi nullam vehicula ipsum. Blandit libero volutpat sed cras.
              Quam lacus suspendisse faucibus interdum posuere. Aenean euismod elementum nisi quis
              eleifend. Orci nulla pellentesque dignissim enim sit amet venenatis. Diam vel quam
              elementum pulvinar etiam non quam lacus. Sit amet dictum sit amet justo donec enim
              diam vulputate. Tincidunt ornare massa eget egestas purus. Pulvinar neque laoreet
              suspendisse interdum consectetur libero id faucibus. Morbi tincidunt augue interdum
              velit. Nullam non nisi est sit amet.
            </p>
            <p style={{marginBottom: 0}}>
              Aliquet enim tortor at auctor urna nunc id cursus metus. Leo urna molestie at
              elementum eu facilisis. Consectetur purus ut faucibus pulvinar elementum integer.
              Volutpat est velit egestas dui id ornare arcu odio. At consectetur lorem donec massa
              sapien. Condimentum vitae sapien pellentesque habitant. Pellentesque habitant morbi
              tristique senectus. Et molestie ac feugiat sed lectus vestibulum. Arcu risus quis
              varius quam quisque. Turpis massa tincidunt dui ut ornare lectus sit amet. Magna eget
              est lorem ipsum dolor sit. Suspendisse faucibus interdum posuere lorem ipsum. Nisi
              vitae suscipit tellus mauris a diam maecenas sed. Ipsum dolor sit amet consectetur
              adipiscing. Ultricies integer quis auctor elit sed. Scelerisque varius morbi enim nunc
              faucibus a. Tortor consequat id porta nibh venenatis cras. Consectetur adipiscing elit
              ut aliquam purus sit.
            </p>
          </Modal.Body>
          <Flex gap="s" padding="xxs">
            <Modal.CloseButton as={PrimaryButton} onClick={handleAcknowledge}>
              Acknowledge
            </Modal.CloseButton>
            <Modal.CloseButton onClick={handleCancel}>Cancel</Modal.CloseButton>
          </Flex>
        </Modal.Card>
      </Modal.OverflowOverlay>
    </Modal>
  );
};

```

### Form Modal

The `Modal.Card` can be turned into a `form` element to make a form modal. The `model` should be
hoisted to allow for form validation and allow you to control when the modal closes.

```tsx
import React from 'react';

import {Modal, useModalModel} from '@workday/canvas-kit-react/modal';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {plusIcon} from '@workday/canvas-system-icons-web';

export const FormModal = () => {
  const model = useModalModel();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // prevent a page reload

    // do form validation here

    console.log('form data', {
      first: (event.currentTarget.elements.namedItem('first') as HTMLInputElement).value,
      last: (event.currentTarget.elements.namedItem('last') as HTMLInputElement).value,
    });

    // if it looks good, submit to the server and close the modal
    model.events.hide();
  };

  return (
    <Modal model={model}>
      <Modal.Target icon={plusIcon}>Create New User</Modal.Target>
      <Modal.Overlay>
        <Modal.Card as="form" onSubmit={onSubmit}>
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>New User</Modal.Heading>
          <Modal.Body>
            <FormField>
              <FormField.Label>First Name</FormField.Label>
              <FormField.Input as={TextInput} name="first" />
            </FormField>
            <FormField>
              <FormField.Label>Last Name</FormField.Label>
              <FormField.Input as={TextInput} name="last" />
            </FormField>
          </Modal.Body>
          <Flex gap="s" padding="xxs">
            <Modal.CloseButton>Cancel</Modal.CloseButton>
            <PrimaryButton type="submit">Submit</PrimaryButton>
          </Flex>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};

```

## Component API

<!-- API Reference for Modal not found -->

## Specifications

### Specifications for Modal

<!-- Component specifications from Modal.spec.ts -->
