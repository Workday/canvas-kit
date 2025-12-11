---
source_file: react/dialog/stories/Dialog.mdx
live_url: https://workday.github.io/canvas-kit/react/dialog/stories/Dialog
---

<Meta of={DialogStories} />

# Canvas Kit Dialog

A Dialog component is a non-modal type of dialog that will not render the rest of the page inert
while it is active. A Dialog should be used in situations where the task is not critical.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Basic Example

[Modal](/components/popups/modal/) and Dialog are very similar: most of the examples from Modal can
be adapted to Dialog by changing `Modal` to `Dialog` and replacing `Modal.Overlay` with
`Dialog.Popper`.

Unlike Modal, Dialog does _not_ render the rest of the page inert while it is active. Dialog should
be used in situations where the task does not require immediate attention such as in the example
below.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Dialog} from '@workday/canvas-kit-react/dialog';
import {PrimaryButton} from '@workday/canvas-kit-react/button';

export const Basic = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleEmail = () => {
    console.log('Email Submitted');
  };
  return (
    <Dialog>
      <Dialog.Target as={PrimaryButton}>Open for Offer</Dialog.Target>
      <Dialog.Popper>
        <Dialog.Card>
          <Dialog.CloseIcon aria-label="Close" />
          <Dialog.Heading paddingTop="m">Sign Up for 15% Off Your Next Order</Dialog.Heading>
          <Dialog.Body>
            <FormField>
              <FormField.Label>Email</FormField.Label>
              <FormField.Input as={TextInput} onChange={handleChange} value={value} />
            </FormField>
          </Dialog.Body>
          <Flex gap="s" padding="xxs" marginTop="xxs">
            <Dialog.CloseButton as={PrimaryButton} onClick={handleEmail}>
              Submit
            </Dialog.CloseButton>
            <Dialog.CloseButton>Cancel</Dialog.CloseButton>
          </Flex>
        </Dialog.Card>
      </Dialog.Popper>
    </Dialog>
  );
};

```

### Focus Redirect

Since Modal requires immediate attention, it will trap the keyboard focus inside the Modal until an
action is taken. Dialog manages focus differently, however, since it does not require immediate
attention.

The following example shows how Dialog manages focus in and out of the component.

```tsx
import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Dialog} from '@workday/canvas-kit-react/dialog';
import {PrimaryButton} from '@workday/canvas-kit-react/button';

export const Focus = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleEmail = () => {
    console.log('Email Submitted');
  };
  return (
    <Flex gap="m">
      <Dialog>
        <Dialog.Target as={PrimaryButton}>Open for Offer</Dialog.Target>
        <Dialog.Popper>
          <Dialog.Card>
            <Dialog.CloseIcon aria-label="Close" />
            <Dialog.Heading paddingTop="m">Sign Up for 15% Off Your Next Order</Dialog.Heading>
            <Dialog.Body>
              <FormField>
                <FormField.Label>Email</FormField.Label>
                <FormField.Input as={TextInput} onChange={handleChange} value={value} />
              </FormField>
            </Dialog.Body>
            <Flex gap="s" padding="xxs" marginTop="xxs">
              <Dialog.CloseButton as={PrimaryButton} onClick={handleEmail}>
                Submit
              </Dialog.CloseButton>
              <Dialog.CloseButton>Cancel</Dialog.CloseButton>
            </Flex>
          </Dialog.Card>
        </Dialog.Popper>
      </Dialog>
      <PrimaryButton>Focus #1</PrimaryButton>
      <PrimaryButton>Focus #2</PrimaryButton>
    </Flex>
  );
};

```

Instead of trapping focus within the Dialog, it is effectively treated as an inline element next to
its triggering `Dialog.Target` button. Tabbing out of the Dialog will close the popup and move focus
to the next button.

Dialog also adds an `aria-owns` to a `<div>` element which is rendered as a sibling of the
`Dialog.Target` button. The `aria-owns` references the `Dialog.Card` and allows screen readers which
[support aria-owns](/components/popups/popup/#focus-redirect) to navigate the Dialog as if it
weren't portalled to the bottom of the document body.

## Component API

<!-- API Reference for Dialog not found -->
