# Canvas Kit Status Indicator

A component showing a status indicator of a given type, emphasis and label.

[> Workday Design Reference](https://design.workday.com/components/indicators/status-indicators)

## Installation

```sh
yarn add @workday/canvas-kit-react
```

or

```sh
yarn add @workday/canvas-kit-react-status-indicator
```

## Usage

```tsx
import * as React from 'react';
import {StatusIndicator} from '@workday/canvas-kit-react-status-indicator';

<StatusIndicator type={StatusIndicator.Type.Orange} label={'Status'} />;
```

## Static Properties

#### `Type: StatusType`

```tsx
<StatusIndicator type={StatusIndicator.Type.Red} label={'Status'} />
```

#### `Emphasis: StatusEmphasis`

```tsx
<StatusIndicator
  type={StatusIndicator.Type.Red}
  emphasis={StatusIndicator.Emphasis.Low}
  label={'Status'}
/>
```

## Component Props

### Required

#### `type: StatusType`

> Type of status indicator. The Canvas system has predefined types that are meant to indicate
> various kinds of statuses.

#### `label: string`

> Text of the status message.

### Optional

#### `emphasis: StatusEmphasis`

> Emphasis of status indicator. Currently supports High(default) and Low emphasis.

#### `icon: CanvasSystemIcon`

> Icon to be used with the label text.
