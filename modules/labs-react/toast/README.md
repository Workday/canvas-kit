# Canvas Kit Toast

<a href="https://github.com/Workday/canvas-kit/tree/master/modules/labs-react/README.md">
  <img src="https://img.shields.io/badge/LABS-alpha-orange" alt="LABS: Alpha" />
</a>  This component is work in progress and currently in pre-release.

Compound component implementation of the existing Toast component. Canvas-styled React toast component. Allows for a brief message to be be shown about a process or
action occurring in the app.

## Installation

```sh
yarn add @workday/canvas-kit-labs-react
```

## Usage

```tsx
import * as React from 'react';
import {Toast} from '@workday/canvas-kit-labs-react/toast';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react/tokens';

export default () => {
  const handleClose = () => console.log('close button clicked');
  const handleActionClick = () => console.log('action button clicked');
  
  return (
    <Toast mode="interactive">
      <Toast.Content>
        <Toast.Icon icon={checkIcon} iconColor={colors.greenApple400} />
        <Toast.Message>
          Your workbook was successfully processed.
          <Toast.Action onClick={handleActionClick}>Custom Action</Toast.Action>
        </Toast.Message>
      </Toast.Content>
      <Toast.Close aria-label="Close" onClick={handleClose} />
    </Toast>
  );
};
```

---

## Table of Contents

- [Toast](#toast)
- [Toast.Close](#toastclose)
- [Toast.Content](#toastcontent)
- [Toast.Icon](#toasticon)
- [Toast.Message](#toastmessage)
- [Toast.Action](#toastaction)

---

## Toast

## Static Properties

> None

## Component Props

### Required

#### `children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[]`

> Toast cannot be empty

### Optional

> None

---

## Toast.Close

## Static Properties

> None

## Component Props

### Optional

> None

---

## Toast.Content

## Static Properties

> None

## Component Props

### Required

#### `children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[]`

> Toast.Content cannot be empty

### Optional

> None

---

## Toast.Icon

## Static Properties

> None

## Component Props

### Required

#### `icon: CanvasSystemIcon`

> Used for passing an icon defined in canvas-kit library
> (e.g. 'checkIcon', 'exclamationCircleIcon')

### Optional

#### `iconColor: CanvasColor | string`

> Used for changing the icon color
> (e.g. 'cinnamon500', 'hsla(4.1, 74.1%, 50%, 1)')

---

## Toast.Message

## Static Properties

> None

## Component Props

### Required

#### `children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[]`

> Toast.Message cannot be empty

### Optional

> None

---

## Toast.Action

## Static Properties

> None

## Component Props

### Required

#### `children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[]`

> Toast.Action cannot be empty

### Optional

> None

---

