---
source_file: react/text/stories/LabelText.mdx
live_url: https://workday.github.io/canvas-kit/react/text/stories/LabelText
---

<Meta of={LabelTextStories} />

# Canvas Kit Label Text <StorybookStatusIndicator type="deprecated" />

<InformationHighlight className="sb-unstyled" variant="caution" cs={{p: {marginBlock: 0}}}>
  <InformationHighlight.Icon />
  <InformationHighlight.Body>
    `LabelText` has been deprecated and will be removed in a future major version. Please use
    `FormField.Label` instead.
  </InformationHighlight.Body>
  <InformationHighlight.Link href="https://workday.github.io/canvas-kit/?path=/story/components-inputs-form-field--docs">
    Form Field Docs
  </InformationHighlight.Link>
</InformationHighlight>

`LabelText` provides a simple way to render a label with built-in support for Canvas type tokens.

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Basic Example

`LabelText` renders a `<label>` element. This component is deprecated in favor of `FormField.Label`
since it should be used in tandem with form elements.

```tsx
import React from 'react';
import {LabelText} from '@workday/canvas-kit-react/text';

export const Basic = () => <LabelText>Label</LabelText>;

```

### Cursor

Set the `cursor` prop to render a particular cursor when the mouse pointer is hovering over the
label.

```tsx
import React from 'react';
import {LabelText} from '@workday/canvas-kit-react/text';

export const Cursor = () => <LabelText cursor="pointer">Label with Pointer</LabelText>;

```

### Disabled

Set the `disabled` prop to provide a visual cue that the label and its associated element are
disabled.

```tsx
import React from 'react';
import {LabelText} from '@workday/canvas-kit-react/text';

import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const inverseBackground = createStyles({
  backgroundColor: system.color.bg.primary.default,
  padding: system.space.x4,
  marginTop: system.space.x4,
});

export const Disabled = () => {
  return (
    <div>
      <LabelText disabled>Disabled Label</LabelText>
      <div className={inverseBackground}>
        <LabelText disabled variant="inverse">
          Disabled Inverse Label
        </LabelText>
      </div>
    </div>
  );
};

```

## Component API

<!-- API Reference for LabelText not found -->
