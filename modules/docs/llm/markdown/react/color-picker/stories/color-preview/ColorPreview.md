---
source_file: react/color-picker/stories/color-preview/ColorPreview.mdx
live_url: https://workday.github.io/canvas-kit/react/color-picker/stories/color-preview/ColorPreview
---

<Meta of={ColorPreviewStories} />

# Canvas Kit Color Preview

Color Preview displays a color swatch.

[> Workday Design Reference](https://design.workday.com/components/inputs/color-input)

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Basic Example

```tsx
import {ColorPreview} from '@workday/canvas-kit-react/color-picker';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const Basic = () => {
  return (
    <FormField>
      <FormField.Label>Current Color</FormField.Label>
      <FormField.Field>
        <FormField.Input as={ColorPreview} value="#00ffcc" />
      </FormField.Field>
    </FormField>
  );
};

```

### Ref Forwarding

Color Preview supports [ref forwarding](https://reactjs.org/docs/forwarding-refs.html). It will
forward `ref` to its underlying `<input type="text">` element.

```tsx
import React from 'react';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {ColorPreview} from '@workday/canvas-kit-react/color-picker';
import {type} from '@workday/canvas-kit-react/tokens';

export const RefForwarding = () => {
  const [width, setWidth] = React.useState(null);
  const ref = React.useRef(null);

  const handleClick = () => {
    setWidth(ref.current.offsetWidth);
  };

  return (
    <>
      <FormField>
        <FormField.Label>Background Color</FormField.Label>
        <FormField.Field>
          <FormField.Input as={ColorPreview} ref={ref} value="#00ffcc" />
        </FormField.Field>
      </FormField>
      <p style={type.levels.subtext.large}>Width of Color Preview: {width}</p>
      <PrimaryButton onClick={handleClick}>Calculate Width of Color Preview</PrimaryButton>
    </>
  );
};

```

### Label Position Horizontal

Set the `orientation` prop of the Form Field to designate the position of the label relative to the
input component. By default, the orientation will be set to `vertical`.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {ColorPreview} from '@workday/canvas-kit-react/color-picker';

export const LabelPosition = () => {
  return (
    <FormField orientation="horizontalStart">
      <FormField.Label>Background Color</FormField.Label>
      <FormField.Field>
        <FormField.Input as={ColorPreview} value="#00ffcc" />
      </FormField.Field>
    </FormField>
  );
};

```

## Component API

<!-- API Reference for ColorPreview not found -->

## Specifications

### Specifications for ColorPreview

<!-- Component specifications from ColorPicker.spec.ts -->
