---
source_file: react/text-area/stories/TextArea.mdx
live_url: https://workday.github.io/canvas-kit/react/text-area/stories/TextArea
---

<Meta of={TextAreaStories} />

# Canvas Kit Text Area

Text Areas allow users to enter and edit multiple lines of text.

[> Workday Design Reference](https://design.workday.com/components/inputs/text-area)

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Basic Example

Text Area should be used in tandem with [Form Field](/components/inputs/form-field/) to meet
accessibility standards.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextArea} from '@workday/canvas-kit-react/text-area';

export const Basic = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField>
      <FormField.Label>Leave a Review</FormField.Label>
      <FormField.Field>
        <FormField.Input as={TextArea} onChange={handleChange} value={value} />
      </FormField.Field>
    </FormField>
  );
};

```

### Disabled

Set the `disabled` prop of the Text Area to prevent users from interacting with it.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextArea} from '@workday/canvas-kit-react/text-area';

export const Disabled = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField>
      <FormField.Label>Leave a Review</FormField.Label>
      <FormField.Field>
        <FormField.Input as={TextArea} disabled onChange={handleChange} value={value} />
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
import {TextArea} from '@workday/canvas-kit-react/text-area';

export const Placeholder = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField>
      <FormField.Label>Leave a Review</FormField.Label>
      <FormField.Field>
        <FormField.Input
          as={TextArea}
          onChange={handleChange}
          placeholder="Let us know how we did!"
          value={value}
        />
      </FormField.Field>
    </FormField>
  );
};

```

### Ref Forwarding

Text Area supports [ref forwarding](https://reactjs.org/docs/forwarding-refs.html). It will forward
`ref` to its underlying `<textarea>` element.

```tsx
import React from 'react';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextArea} from '@workday/canvas-kit-react/text-area';

export const RefForwarding = () => {
  const [value, setValue] = React.useState('');
  const ref = React.useRef(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    ref.current.focus();
  };

  return (
    <>
      <FormField>
        <FormField.Label>Leave a Review</FormField.Label>
        <FormField.Field>
          <FormField.Input as={TextArea} onChange={handleChange} ref={ref} value={value} />
        </FormField.Field>
      </FormField>
      <PrimaryButton onClick={handleClick}>Focus Text Area</PrimaryButton>
    </>
  );
};

```

### Resize Constraints

Set the `resize` prop of the Text Area to restrict resizing of it to certain dimensions. `resize`
accepts the following values:

- `TextArea.ResizeDirection.Both` (Default)
- `TextArea.ResizeDirection.Horizontal`
- `TextArea.ResizeDirection.None`
- `TextArea.ResizeDirection.Vertical`

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextArea} from '@workday/canvas-kit-react/text-area';

export const ResizeConstraints = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField>
      <FormField.Label>Leave a Review</FormField.Label>
      <FormField.Field>
        <FormField.Input
          as={TextArea}
          onChange={handleChange}
          resize={TextArea.ResizeDirection.Vertical}
          value={value}
        />
      </FormField.Field>
    </FormField>
  );
};

```

### Grow

Set the `grow` prop of the Text Area to `true` to configure the Text Area to expand to the width of
its container.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextArea} from '@workday/canvas-kit-react/text-area';

export const Grow = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField grow>
      <FormField.Label>Leave a Review foo</FormField.Label>
      <FormField.Field>
        <FormField.Input as={TextArea} onChange={handleChange} value={value} />
      </FormField.Field>
    </FormField>
  );
};

```

### Label Position Horizontal

Set the `orientation` prop of the Form Field to designate the position of the label relative to the
input component. By default, the orientation will be set to `vertical`.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextArea} from '@workday/canvas-kit-react/text-area';

export const LabelPosition = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField orientation="horizontalStart">
      <FormField.Label>Leave a Review</FormField.Label>
      <FormField.Field>
        <FormField.Input as={TextArea} onChange={handleChange} value={value} />
        <FormField.Hint>Message must be under 200 characters</FormField.Hint>
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
import {TextArea} from '@workday/canvas-kit-react/text-area';

export const Required = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField isRequired={true}>
      <FormField.Label>Leave a Review</FormField.Label>
      <FormField.Field>
        <FormField.Input as={TextArea} onChange={handleChange} value={value} />
      </FormField.Field>
    </FormField>
  );
};

```

### Error States

Set the `error` prop of the wrapping Form Field to `"caution"` or
`"error"` to set the Text Area to the Caution or Error state, respectively. You will
also need to set the `hintId` and `hintText` props on the Form Field to meet accessibility
standards.

The `error` prop may be applied directly to the Text Area with a value of `"TextArea.ErrorType.Caution"`
or `TextArea.ErrorType.Error` if Form Field is not being used.

#### Caution

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextArea} from '@workday/canvas-kit-react/text-area';

export const Caution = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField error="caution">
      <FormField.Label>Please enter your review.</FormField.Label>
      <FormField.Field>
        <FormField.Input as={TextArea} onChange={handleChange} value={value} />
        <FormField.Hint>Please enter your review.</FormField.Hint>
      </FormField.Field>
    </FormField>
  );
};

```

#### Error

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {TextArea} from '@workday/canvas-kit-react/text-area';

export const Error = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormField error="error">
      <FormField.Label>Leave a Review</FormField.Label>
      <FormField.Field>
        <FormField.Input as={TextArea} onChange={handleChange} value={value} />
        <FormField.Hint>Please enter your review.</FormField.Hint>
      </FormField.Field>
    </FormField>
  );
};

```

## Component API

<!-- API Reference for TextArea not found -->

## Specifications

### Specifications for Text Area

<!-- Component specifications from TextArea.spec.ts -->
