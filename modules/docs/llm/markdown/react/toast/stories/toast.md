---
source_file: react/toast/stories/toast.mdx
live_url: https://workday.github.io/canvas-kit/react/toast/stories/toast
---

<Meta of={ToastStories} />

# Canvas Kit Toast

`Toast` is a [compound component](/getting-started/for-developers/resources/compound-components/)
that contains updates or messages about the status of an application's process.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Basic Example

`Toast` includes a container `Toast` component and the following subcomponents: `Toast.Body`,
`Toast.CloseIcon`, `Toast.Icon`, `Toast.Message`, and `Toast.Link`.

`Toast` supports different modes through the `mode` prop: `status`, `alert`, and `dialog`. Each mode
conveys a different purpose of the message and assigns the necessary ARIA attributes to support that
purpose and provide an accessible experience.

By default, `mode` is set to `status`, which indicates the message contains advisory information
such as a successful action.

```tsx
import {Toast} from '@workday/canvas-kit-react/toast';
import {checkIcon} from '@workday/canvas-system-icons-web';

export const Basic = () => {
  return (
    <Toast>
      <Toast.Icon icon={checkIcon} color="greenApple400" />
      <Toast.Body>
        <Toast.Message>Your workbook was successfully processed.</Toast.Message>
      </Toast.Body>
    </Toast>
  );
};

```

A `status` `Toast` will wrap the message within a `polite` ARIA live region with a `role` of
`status`.

Here's a more complete example with a button which triggers a dismissable `Toast`. The `Toast` is
positioned using `Popper`.

```tsx
import React from 'react';

import {Toast} from '@workday/canvas-kit-react/toast';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react/tokens';
import {Popper} from '@workday/canvas-kit-react/popup';
import {SecondaryButton} from '@workday/canvas-kit-react/button';

export const WithPopper = () => {
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div ref={containerRef}>
      <SecondaryButton onClick={handleOpen}>Show Toast</SecondaryButton>
      <Popper placement="bottom-end" open={open} anchorElement={containerRef}>
        <Toast mode="dialog" aria-label="notification">
          <Toast.Icon icon={checkIcon} color="greenApple400" />
          <Toast.Body>
            <Toast.Message>Your workbook was successfully processed.</Toast.Message>
          </Toast.Body>
          <Toast.CloseIcon aria-label="Close notification" onClick={handleClose} />
        </Toast>
      </Popper>
    </div>
  );
};

```

### Alert

Set the `mode` prop to `alert` to convey urgent and important information such as an error.

```tsx
import {Toast} from '@workday/canvas-kit-react/toast';
import {exclamationCircleIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react/tokens';

export const ToastAlert = () => (
  <Toast mode="alert">
    <Toast.Icon icon={exclamationCircleIcon} color={colors.cinnamon500} />
    <Toast.Body>
      <Toast.Message>There was an error with your workbook.</Toast.Message>
    </Toast.Body>
  </Toast>
);

```

An `alert` `Toast` will wrap the message within an `assertive` ARIA live region with a `role` of
`alert`.

### Dialog

Set the `mode` prop to `dialog` to convey the presence of a follow-up action. If you use this
`mode`, you need to add an `aria-label`. This `aria-label` should be additional information for the
`Toast` such as `notification`. The `Toast` will also add an `aria-describedby` that links the
`Toast` to `Toast.Message` so that it is read out to screen readers. The `aria-label` should be
different that the contents of the `Toast` so there is no duplication being read out by screen
readers.

```tsx
import {Toast} from '@workday/canvas-kit-react/toast';
import {checkIcon} from '@workday/canvas-system-icons-web';

export const ToastDialog = () => (
  <Toast mode="dialog" aria-label="notification">
    <Toast.Icon icon={checkIcon} color="greenApple400" />
    <Toast.Body>
      <Toast.Message>Your workbook was successfully processed.</Toast.Message>
      <Toast.Link href="#hreflink">Custom Link</Toast.Link>
    </Toast.Body>
  </Toast>
);

```

Screen readers will read the `Toast` out in the following order: "Notification: Your workbook was
successfully processed."

> **Note**: You must use the `Toast.Message` subcomponent when the `mode` is `dialog` so that `id`
> is tied to the message for accessibility. You can also pass in a `model` with `useToastModel` to
> provide a specific `id` for the `Toast.Message`

```tsx
export const CustomIDToast = () => {
  const model = useToastModel({
    id: '12df5',
    mode: 'dialog',
  });
  return (
    <Toast model={model}>
      <Toast.Icon icon={checkIcon} color={colors.greenApple400} />
      <Toast.Body>
        <Toast.Message>Your workbook was successfully processed.</Toast.Message>
        <Toast.Link href="#href">View More Details</Toast.Link>
      </Toast.Body>
    </Toast>
  );
};
```

`Toast.CloseIcon` may be included within a `dialog` `Toast` to create a `Toast` with both an action
link and a close button.

```tsx
import React from 'react';

import {Toast} from '@workday/canvas-kit-react/toast';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react/tokens';

export const WithActionLinkAndCloseIcon = () => {
  const handleClose = () => console.log('close button clicked');

  return (
    <Toast mode="dialog" aria-label="notification">
      <Toast.Icon icon={checkIcon} color="greenApple400" />
      <Toast.Body>
        <Toast.Message>Your workbook was successfully</Toast.Message>
        <Toast.Link href="#hyperlink">Custom Link</Toast.Link>
      </Toast.Body>
      <Toast.CloseIcon aria-label="Close notification" onClick={handleClose} />
    </Toast>
  );
};

```

### Right-to-Left (RTL)

`Toast` supports right-to-left languages when specified in the `CanvasProvider` `theme`.

```tsx
import React from 'react';

import {Toast} from '@workday/canvas-kit-react/toast';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react/tokens';
import {CanvasProvider} from '@workday/canvas-kit-react/common';

export const RTL = () => {
  const handleClose = () => console.log('close button clicked');

  return (
    <CanvasProvider dir="rtl">
      <Toast>
        <Toast.Icon icon={checkIcon} color="greenApple400" />
        <Toast.Body>
          <Toast.Message>Your workbook was successfully processed.</Toast.Message>
        </Toast.Body>
        <Toast.CloseIcon aria-label="Close" onClick={handleClose} />
      </Toast>
    </CanvasProvider>
  );
};

```

## Component API

<!-- API Reference for Toast not found -->
