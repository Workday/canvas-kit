---
source_file: react/text-input/stories/TextInput.mdx
live_url: https://workday.github.io/canvas-kit/react/text-input/stories/TextInput
---

<Meta of={TextInputStories} />

# Canvas Kit Text Input

Text Inputs allow users to enter words or characters without styling.

[> Workday Design Reference](https://design.workday.com/components/inputs/text-input)

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Basic Example

Text Input should be used in tandem with [Form Field](/components/inputs/form-field/) to meet
accessibility standards.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const Basic = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField>
      <FormField.Label>Email</FormField.Label>
      <FormField.Field>
        <FormField.Input as={TextInput} onChange={handleChange} value={value} />
      </FormField.Field>
    </FormField>
  );
};

```

### Disabled

Set the `disabled` prop of the Text Input to prevent users from interacting with it.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const Disabled = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField>
      <FormField.Label>Email</FormField.Label>
      <FormField.Field>
        <FormField.Input as={TextInput} disabled onChange={handleChange} value={value} />
      </FormField.Field>
    </FormField>
  );
};

```

### Placeholder

Set the `placeholder` prop of the Text Input to display a sample of its expected format or value
before a value has been provided.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const Placeholder = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField>
      <FormField.Label>Email</FormField.Label>
      <FormField.Field>
        <FormField.Input
          as={TextInput}
          onChange={handleChange}
          placeholder="user@email.com"
          value={value}
        />
      </FormField.Field>
    </FormField>
  );
};

```

### Ref Forwarding

Text Input supports [ref forwarding](https://reactjs.org/docs/forwarding-refs.html). It will forward
`ref` to its underlying `<input type="text">` element.

```tsx
import React from 'react';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';

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
        <FormField.Label>Email</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextInput} onChange={handleChange} ref={ref} value={value} />
        </FormField.Field>
      </FormField>
      <PrimaryButton onClick={handleClick}>Focus Text Input</PrimaryButton>
    </>
  );
};

```

### Grow

Set the `grow` prop of the wrapping Form Field to `true` to configure the Text Input to expand to
the width of its container.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const Grow = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField grow>
      <FormField.Label>Street Address</FormField.Label>
      <FormField.Field>
        <FormField.Input as={TextInput} onChange={handleChange} value={value} />
      </FormField.Field>
    </FormField>
  );
};

```

The `grow` prop may also be applied directly to the Text Input if Form Field is not being used.

### Label Position Horizontal

Set the `orientation` prop of the Form Field to designate the position of the label relative to the
input component. By default, the orientation will be set to `vertical`.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const LabelPosition = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField orientation="horizontalStart">
      <FormField.Label>Email</FormField.Label>
      <FormField.Field>
        <FormField.Input as={TextInput} onChange={handleChange} value={value} />
        <FormField.Hint>Add a valid email</FormField.Hint>
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
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const Required = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField isRequired={true}>
      <FormField.Label>Email</FormField.Label>
      <FormField.Field>
        <FormField.Input as={TextInput} onChange={handleChange} value={value} />
      </FormField.Field>
    </FormField>
  );
};

```

### Icons

`InputGroup` is available to add icons to the `TextInput`. Internally, a container `div` element is
used with relative position styling on the `div` and absolute position styling on the start and end
icons. `InputGroup.InnerStart` and `InputGroup.InnerEnd` are used to position elements at the start
and end of the input. "start" and "end" are used instead of "left" and "right" to match
[CSS Logical Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties)
and will be semantically correct in left-to-right and right-to-left languages.

`InputGroup.InnerStart` and `InputGroup.InnerEnd` subcomponents can handle any child elements, but
are built for icons. The default width is `40px`, which is perfect for icons. If you need to use
something else, be sure to set the `width` property of `InputGroup.InnerStart` or
`InputGroup.InnerEnd` to match the intended width of the element. Do not use the `cs` prop or any
method to change width. The `width` prop is used to correctly position other inner elements.

```tsx
import React from 'react';

import {mailIcon} from '@workday/canvas-system-icons-web';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {InputGroup} from '@workday/canvas-kit-react/text-input';
import {SystemIcon} from '@workday/canvas-kit-react/icon';

export const Icons = () => {
  return (
    <FormField>
      <FormField.Label>Email</FormField.Label>
      <FormField.Field>
        <InputGroupFormFieldForwarder />
      </FormField.Field>
    </FormField>
  );
};

// create a prop forwarding component for FormField to forward to
const InputGroupFormFieldForwarder = (props: {}) => {
  return (
    <FormField.Input as={InputGroup} width={280}>
      <InputGroup.InnerStart pointerEvents="none">
        <SystemIcon icon={mailIcon} size="small" />
      </InputGroup.InnerStart>
      <InputGroup.Input {...props} />
      <InputGroup.InnerEnd>
        <InputGroup.ClearButton />
      </InputGroup.InnerEnd>
    </FormField.Input>
  );
};

```

### Error States

Set the `error` prop of the wrapping Form Field to `"caution"` or
`"error"` to set the Text Input to the Caution or Error state, respectively. You
will also need to set the `hintId` and `hintText` props on the Form Field to meet accessibility
standards.

The `error` prop may be applied directly to the Text Input with a value of
`TextInput.ErrorType.Caution` or `TextInput.ErrorType.Error` if Form Field is not being used.

#### Caution

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const Caution = () => {
  const [value, setValue] = React.useState('invalid@email');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField error="caution">
      <FormField.Label>Email</FormField.Label>
      <FormField.Field>
        <FormField.Input as={TextInput} onChange={handleChange} value={value} />
        <FormField.Hint>Please enter a valid email.</FormField.Hint>
      </FormField.Field>
    </FormField>
  );
};

```

#### Error

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextInput} from '@workday/canvas-kit-react/text-input';

export const Error = () => {
  const [value, setValue] = React.useState('invalid@email');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField error="error">
      <FormField.Label>Email</FormField.Label>
      <FormField.Field>
        <FormField.Input as={TextInput} onChange={handleChange} value={value} />
        <FormField.Hint>Please enter a valid email.</FormField.Hint>
      </FormField.Field>
    </FormField>
  );
};

```

## Component API

<!-- API Reference for TextInput not found -->

<!-- API Reference for InputGroup not found -->

## Specifications

### Specifications for TextInput

<!-- Component specifications from TextInput.spec.ts -->
