---
source_file: react/radio/stories/Radio.mdx
live_url: https://workday.github.io/canvas-kit/react/radio/stories/Radio
---

<Meta of={RadioStories} />

# Canvas Kit Radio <StorybookStatusIndicator type="deprecated" />

<InformationHighlight className="sb-unstyled" variant="caution" cs={{p: {marginBlock: 0}}}>
  <InformationHighlight.Icon />
  <InformationHighlight.Body>
    `Radio` in Main has been deprecated and will be removed in a future major version. Please use
    `Radio` in Preview instead.
  </InformationHighlight.Body>
  <InformationHighlight.Link href="https://workday.github.io/canvas-kit/?path=/docs/preview-inputs-radio--docs">
    Radio Docs
  </InformationHighlight.Link>
</InformationHighlight>

Radio Buttons allow a user to select one value from a predefined list of 7 or fewer options.

[> Workday Design Reference](https://design.workday.com/components/inputs/radio-buttons)

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Basic Example

Radio Buttons are intended to be grouped together using a Radio Group.

Radio Group should be used in tandem with [Form Field](/components/inputs/form-field/) where the
`useFieldset` prop is set to `true` to meet accessibility standards.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';
import {useUniqueId} from '@workday/canvas-kit-react/common';
import {space} from '@workday/canvas-kit-react/tokens';

export const Basic = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  return (
    <FormField as="fieldset" cs={{width: space.xl}}>
      <FormField.Label as="legend">Choose Your Pizza Crust</FormField.Label>
      <FormField.Input as={RadioGroup} name={useUniqueId()} onChange={handleChange} value={value}>
        <Radio label="Deep dish" value="deep-dish" />
        <Radio label="Thin" value="thin" />
        <Radio label="Gluten free" value="gluten-free" />
        <Radio label="Cauliflower" value="cauliflower" />
        <Radio label="Butter - the best thing to put on bread" value="butter" />
      </FormField.Input>
    </FormField>
  );
};

```

### Disabled

Set the `disabled` prop of the Radio Button to prevent users from interacting with it. Be careful
not to disable a pre-selected Radio Button, this will block keyboard access from the entire Radio
Group.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';
import {useUniqueId} from '@workday/canvas-kit-react/common';

export const Disabled = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  return (
    <FormField as="fieldset">
      <FormField.Label as="legend">Choose Your Pizza Crust</FormField.Label>
      <FormField.Input as={RadioGroup} name={useUniqueId()} onChange={handleChange} value={value}>
        <Radio label="Deep dish" value="deep-dish" />
        <Radio label="Thin" value="thin" />
        <Radio disabled={true} label="Gluten free (sold out)" value="gluten-free" />
        <Radio label="Cauliflower" value="cauliflower" />
      </FormField.Input>
    </FormField>
  );
};

```

### Inverse

Radio with inverse variant

```tsx
import React from 'react';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';
import {Box} from '@workday/canvas-kit-react/layout';
import {useUniqueId} from '@workday/canvas-kit-react/common';

export const Inverse = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  return (
    <Box backgroundColor="blueberry400" padding="s">
      <RadioGroup name={useUniqueId()} onChange={handleChange} value={value}>
        <Radio variant="inverse" label="Deep dish" value="deep-dish" />
        <Radio variant="inverse" label="Thin" value="thin" />
        <Radio variant="inverse" label="Gluten free" value="gluten-free" />
        <Radio variant="inverse" label="Cauliflower" value="cauliflower" />
      </RadioGroup>
    </Box>
  );
};

```

### Radio Buttons with No Values

The `value` prop may be omitted from Radio Buttons, in which case the `value` prop of the Radio
Group should be set using the zero-based index of the selected Radio Button.

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';
import {Subtext} from '@workday/canvas-kit-react/text';
import {useUniqueId} from '@workday/canvas-kit-react/common';

export const NoValue = () => {
  const [value, setValue] = React.useState<string | number>('');

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  return (
    <>
      <FormField as="fieldset">
        <FormField.Label as="legend">Choose Your Pizza Crust</FormField.Label>
        <FormField.Input as={RadioGroup} name={useUniqueId()} onChange={handleChange} value={value}>
          <Radio label="Deep dish" />
          <Radio label="Thin" />
          <Radio label="Gluten free" />
          <Radio label="Cauliflower" />
        </FormField.Input>
      </FormField>
      <Subtext size="large">Value: {value}</Subtext>
    </>
  );
};

```

### Ref Forwarding

Radio Button supports [ref forwarding](https://reactjs.org/docs/forwarding-refs.html). It will
forward `ref` to its underlying `<input type="radio">` element.

```tsx
import React from 'react';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';
import {useUniqueId} from '@workday/canvas-kit-react/common';

export const RefForwarding = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');
  const glutenFreeRef = React.useRef(null);

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  const handleClick = () => {
    glutenFreeRef.current.click();
  };

  return (
    <>
      <FormField as="fieldset">
        <FormField.Label as="legend">Choose Your Pizza Crust</FormField.Label>
        <FormField.Input as={RadioGroup} name={useUniqueId()} onChange={handleChange} value={value}>
          <Radio label="Deep dish" value="deep-dish" />
          <Radio label="Thin" value="thin" />
          <Radio label="Gluten free" ref={glutenFreeRef} value="gluten-free" />
          <Radio label="Cauliflower" value="cauliflower" />
        </FormField.Input>
      </FormField>
      <PrimaryButton onClick={handleClick}>Select Gluten Free</PrimaryButton>
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
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';
import {useUniqueId} from '@workday/canvas-kit-react/common';

export const LabelPosition = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  return (
    <FormField orientation="horizontalStart" as="fieldset">
      <FormField.Label as="legend">Choose Your Pizza Crust</FormField.Label>
      <FormField.Input as={RadioGroup} name={useUniqueId()} onChange={handleChange} value={value}>
        <Radio label="Deep dish" value="deep-dish" />
        <Radio label="Thin" value="thin" />
        <Radio label="Gluten free" value="gluten-free" />
        <Radio label="Cauliflower" value="cauliflower" />
      </FormField.Input>
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
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';
import {useUniqueId} from '@workday/canvas-kit-react/common';

export const Required = () => {
  const [value, setValue] = React.useState<string | number>();

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  return (
    <FormField isRequired={true} as="fieldset">
      <FormField.Label as="legend">Choose Your Pizza Crust</FormField.Label>
      <FormField.Input as={RadioGroup} name={useUniqueId()} onChange={handleChange} value={value}>
        <Radio label="Deep dish" value="deep-dish" />
        <Radio label="Thin" value="thin" />
        <Radio label="Gluten free" value="gluten-free" />
        <Radio label="Cauliflower" value="cauliflower" />
      </FormField.Input>
    </FormField>
  );
};

```

### Error States

Set the `error` prop of the wrapping Form Field to `"caution"` or
`"error"` to set the Radio Group to the Caution or Error state, respectively. You
will also need to set the `hintId` and `hintText` props on the Form Field to meet accessibility
standards.

#### Caution

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';
import {useUniqueId} from '@workday/canvas-kit-react/common';

export const Caution = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  return (
    <FormField error="caution" as="fieldset">
      <FormField.Label as="legend">Choose Your Pizza Crust</FormField.Label>
      <FormField.Input as={RadioGroup} name={useUniqueId()} onChange={handleChange} value={value}>
        <Radio label="Deep dish" value="deep-dish" />
        <Radio label="Thin" value="thin" />
        <Radio label="Gluten free" value="gluten-free" />
        <Radio label="Cauliflower" value="cauliflower" />
      </FormField.Input>
      <FormField.Hint>Deep dish is an extra $2.99</FormField.Hint>
    </FormField>
  );
};

```

#### Error

```tsx
import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';
import {useUniqueId} from '@workday/canvas-kit-react/common';

export const Error = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  return (
    <FormField error="error" as="fieldset">
      <FormField.Label as="legend">Choose Your Pizza Crust</FormField.Label>
      <FormField.Input as={RadioGroup} name={useUniqueId()} onChange={handleChange} value={value}>
        <Radio label="Deep dish" value="deep-dish" />
        <Radio label="Thin" value="thin" />
        <Radio label="Gluten free" value="gluten-free" />
        <Radio label="Cauliflower" value="cauliflower" />
      </FormField.Input>
      <FormField.Hint>Deep dish is currently sold out</FormField.Hint>
    </FormField>
  );
};

```

## Component API

<!-- API Reference for Radio not found -->

### RadioGroup

<!-- API Reference for RadioGroup not found -->

## Specifications

### Specifications for Radio

<!-- Component specifications from Radio.spec.ts -->
