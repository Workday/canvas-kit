---
source_file: react/color-picker/stories/color-input/ColorInput.mdx
live_url: https://workday.github.io/canvas-kit/react/color-picker/stories/color-input/ColorInput
---

<Meta of={ColorInputStories} />

# Canvas Kit Color Input

Color Input lets a user specify a color by entering a hexadecimal value into a text field.

[> Workday Design Reference](https://design.workday.com/components/inputs/color-input)

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Basic Example

Color Input should be used in tandem with [Form Field](/components/inputs/form-field/) to meet
accessibility standards.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {ColorInput} from '@workday/canvas-kit-react/color-picker';

export const Basic = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField>
      <FormField.Label>Background Color</FormField.Label>
      <FormField.Field>
        <FormField.Input as={ColorInput} onChange={handleChange} value={value} />
      </FormField.Field>
    </FormField>
  );
};

```

### Disabled

Set the `disabled` prop of the Color Input to prevent users from interacting with it.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {ColorInput} from '@workday/canvas-kit-react/color-picker';

export const Disabled = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField>
      <FormField.Label>Background Color</FormField.Label>
      <FormField.Field>
        <FormField.Input as={ColorInput} disabled onChange={handleChange} value={value} />
      </FormField.Field>
    </FormField>
  );
};

```

### Checked

Set the `showCheck` prop of the Color Input to display a check icon in the swatch.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {ColorInput} from '@workday/canvas-kit-react/color-picker';

export const Checked = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField>
      <FormField.Label>Background Color</FormField.Label>
      <FormField.Field>
        <FormField.Input as={ColorInput} onChange={handleChange} showCheck={true} value={value} />
      </FormField.Field>
    </FormField>
  );
};

```

### Ref Forwarding

Color Input supports [ref forwarding](https://reactjs.org/docs/forwarding-refs.html). It will
forward `ref` to its underlying `<input type="text">` element.

```tsx
import React from 'react';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {ColorInput} from '@workday/canvas-kit-react/color-picker';

export const RefForwarding = () => {
  const [value, setValue] = React.useState('');
  const ref = React.useRef(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    ref.current.focus();
  };

  return (
    <>
      <FormField>
        <FormField.Label>Background Color</FormField.Label>
        <FormField.Field>
          <FormField.Input as={ColorInput} onChange={handleChange} ref={ref} value={value} />
        </FormField.Field>
      </FormField>
      <PrimaryButton onClick={handleClick}>Focus Color Input</PrimaryButton>
    </>
  );
};

```

### Valid Color Change Callback

Set the `onValidColorChange` prop of the Color Input to set a callback for when a valid hex color is
provided.

The color passed to the callback will be prefixed with a hash and expanded if necessary. For
example, `03F` would be converted to `#0033FF`.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {ColorInput} from '@workday/canvas-kit-react/color-picker';
import {type} from '@workday/canvas-kit-react/tokens';

export const ValidColorChange = () => {
  const [value, setValue] = React.useState('');
  const [validColor, setValidColor] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleValidColorChange = (color: string) => {
    setValidColor(color);
  };

  return (
    <>
      <FormField>
        <FormField.Label>Background Color</FormField.Label>
        <FormField.Field>
          <FormField.Input
            as={ColorInput}
            onChange={handleChange}
            onValidColorChange={handleValidColorChange}
            value={value}
          />
        </FormField.Field>
      </FormField>
      <p style={type.levels.subtext.large}>Last valid color: {validColor}</p>
    </>
  );
};

```

### Grow

Set the `grow` prop of the wrapping Form Field to `true` to configure the Color Input to expand to
the width of its container.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {ColorInput} from '@workday/canvas-kit-react/color-picker';

export const Grow = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField cs={{width: '100%'}}>
      <FormField.Label>Background Color</FormField.Label>
      <FormField.Field>
        <FormField.Input
          cs={{width: '100%'}}
          as={ColorInput}
          onChange={handleChange}
          value={value}
        />
      </FormField.Field>
    </FormField>
  );
};

```

The `grow` prop may also be applied directly to the Color Input if Form Field is not being used.

### Label Position Horizontal

Set the `orientation` prop of the Form Field to designate the position of the label relative to the
input component. By default, the orientation will be set to `vertical`.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {ColorInput} from '@workday/canvas-kit-react/color-picker';

export const LabelPosition = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField orientation="horizontalStart">
      <FormField.Label>Background Color</FormField.Label>
      <FormField.Field>
        <FormField.Input as={ColorInput} onChange={handleChange} value={value} />
      </FormField.Field>
    </FormField>
  );
};

```

### Required

Set the `required` prop of the wrapping Form Field to `true` to indicate that the field is required.
Labels for required fields are suffixed by a red asterisk.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {ColorInput} from '@workday/canvas-kit-react/color-picker';

export const Required = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField isRequired={true}>
      <FormField.Label>Background Color</FormField.Label>
      <FormField.Field>
        <FormField.Input as={ColorInput} onChange={handleChange} value={value} />
      </FormField.Field>
    </FormField>
  );
};

```

### Error States

Set the `error` prop of the wrapping Form Field to `"caution"` or
`"error"` to set the Color Input to the Caution or Error state, respectively. You
will also need to set the `hintId` and `hintText` props on the Form Field to meet accessibility
standards.

#### Caution

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {ColorInput} from '@workday/canvas-kit-react/color-picker';

export const Caution = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField error="caution">
      <FormField.Label>Background Color</FormField.Label>
      <FormField.Field>
        <FormField.Input as={ColorInput} onChange={handleChange} value={value} />
        <FormField.Hint>Please select a background color.</FormField.Hint>
      </FormField.Field>
    </FormField>
  );
};

```

#### Error

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {ColorInput} from '@workday/canvas-kit-react/color-picker';

export const Error = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField error="error">
      <FormField.Label>Background Color</FormField.Label>
      <FormField.Field>
        <FormField.Input as={ColorInput} onChange={handleChange} value={value} />
        <FormField.Hint>Please select a background color.</FormField.Hint>
      </FormField.Field>
    </FormField>
  );
};

```

## Component API

<!-- API Reference for ColorInput not found -->

## Specifications

### Specifications for ColorInput

<!-- Component specifications from ColorPicker.spec.ts -->
