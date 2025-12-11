---
source_file: react/status-indicator/stories/StatusIndicator.mdx
live_url: https://workday.github.io/canvas-kit/react/status-indicator/stories/StatusIndicator
---

<Meta of={StatusIndicatorStories} />

# Canvas Kit Status Indicator <StorybookStatusIndicator type="deprecated" />

<InformationHighlight className="sb-unstyled" variant="caution" cs={{p: {marginBlock: 0}}}>
  <InformationHighlight.Icon />
  <InformationHighlight.Body>
    `StatusIndicator` in Main has been deprecated and will be removed in a future major version.
    Please use [Status
    Indicator](https://workday.github.io/canvas-kit/?path=/docs/preview-status-indicator--docs) in
    Preview instead.
  </InformationHighlight.Body>
</InformationHighlight>

Status Indicators help the user quickly identify the status of a task, action, or page element.

[> Workday Design Reference](https://design.workday.com/components/indicators/status-indicators)

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Basic Example

```tsx
import React from 'react';
import styled from '@emotion/styled';
import {StatusIndicator} from '@workday/canvas-kit-react/status-indicator';
import {space} from '@workday/canvas-kit-react/tokens';

const StatusIndicators = styled('div')({
  '& > *': {
    margin: space.xxs,
  },
});

export const Basic = () => {
  return (
    <StatusIndicators>
      <StatusIndicator label="unpublished" type={StatusIndicator.Type.Gray} />
      <StatusIndicator label="submitted" type={StatusIndicator.Type.Orange} />
      <StatusIndicator label="in progress" type={StatusIndicator.Type.Blue} />
      <StatusIndicator label="published" type={StatusIndicator.Type.Green} />
      <StatusIndicator label="failed" type={StatusIndicator.Type.Red} />
      <StatusIndicator label="normal" type={StatusIndicator.Type.Transparent} />
    </StatusIndicators>
  );
};

```

Note that the `type` prop is required (there is no default value). `type` accepts the following
values:

| Type                               | Suggested Purpose                                                                              |
| ---------------------------------- | ---------------------------------------------------------------------------------------------- |
| `StatusIndicator.Type.Gray`        | Basic, general status. No action required.                                                     |
| `StatusIndicator.Type.Orange`      | Signifies alerts, that a user must take action, or that something requires attention.          |
| `StatusIndicator.Type.Blue`        | Signifies an item in progress, an update, or a current status.                                 |
| `StatusIndicator.Type.Green`       | Signifies success, completion, or celebration.                                                 |
| `StatusIndicator.Type.Red`         | Signifies an error or issue, or removal or destruction.                                        |
| `StatusIndicator.Type.Transparent` | General status and related information intended for use on top of imagery, video, or graphics. |

### Emphasis

Set the `emphasis` prop of the Status Indicator to convey varying levels of emphasis. `emphasis`
accepts the following values:

- `StatusIndicator.Emphasis.High` (Default)
- `StatusIndicator.Emphasis.Low`

```tsx
import React from 'react';
import styled from '@emotion/styled';
import {StatusIndicator} from '@workday/canvas-kit-react/status-indicator';
import {space} from '@workday/canvas-kit-react/tokens';

const StatusIndicators = styled('div')({
  '& > *': {
    margin: space.xxs,
  },
});

export const Emphasis = () => {
  return (
    <StatusIndicators>
      <StatusIndicator
        emphasis={StatusIndicator.Emphasis.Low}
        label="unpublished"
        type={StatusIndicator.Type.Gray}
      />
      <StatusIndicator
        emphasis={StatusIndicator.Emphasis.Low}
        label="submitted"
        type={StatusIndicator.Type.Orange}
      />
      <StatusIndicator
        emphasis={StatusIndicator.Emphasis.Low}
        label="in progress"
        type={StatusIndicator.Type.Blue}
      />
      <StatusIndicator
        emphasis={StatusIndicator.Emphasis.Low}
        label="published"
        type={StatusIndicator.Type.Green}
      />
      <StatusIndicator
        emphasis={StatusIndicator.Emphasis.Low}
        label="failed"
        type={StatusIndicator.Type.Red}
      />
      <StatusIndicator
        emphasis={StatusIndicator.Emphasis.Low}
        label="normal"
        type={StatusIndicator.Type.Transparent}
      />
    </StatusIndicators>
  );
};

```

Note that the `High` and `Low` emphasis levels are identical for `Transparent` Status Indicators.

### Icon

Set the `icon` prop of the Status Indicator to a Canvas System Icon to display that icon beside the
label.

```tsx
import React from 'react';
import {StatusIndicator} from '@workday/canvas-kit-react/status-indicator';
import {uploadCloudIcon} from '@workday/canvas-system-icons-web';

export const Icon = () => {
  return (
    <StatusIndicator icon={uploadCloudIcon} label="published" type={StatusIndicator.Type.Green} />
  );
};

```

### Max Width

By default, the maximum width of a Status Indicator is `200px`. When the text in the StatusIndicator
exceeds the max width, it will be truncated with an ellipsis. This maxWidth can be customized.

Avoid truncation wherever possible by using shorter text in Status Indicators. In the case where
truncation is necessary, you should use an `OverflowTooltip`. For the full text to be accessible
when you do this, you should make the tooltip focusable with `tabIndex`.

```tsx
import React from 'react';
import styled from '@emotion/styled';
import {StatusIndicator} from '@workday/canvas-kit-react/status-indicator';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
import {space} from '@workday/canvas-kit-react/tokens';

const StatusIndicators = styled('div')({
  '& > *': {
    margin: space.xxs,
  },
});

export const MaxWidth = () => {
  return (
    <StatusIndicators>
      <StatusIndicator
        label="Longer Than Normal Ellipsized Status"
        type={StatusIndicator.Type.Blue}
        maxWidth={250}
      />
      <OverflowTooltip>
        <StatusIndicator
          label="Overflow Tooltip On Hover/Focus Status"
          type={StatusIndicator.Type.Green}
          tabIndex={0}
        />
      </OverflowTooltip>
    </StatusIndicators>
  );
};

```

## Component API

<!-- API Reference for StatusIndicator not found -->
