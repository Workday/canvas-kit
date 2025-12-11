---
source_file: preview-react/radio/stories/Radio.mdx
live_url: https://workday.github.io/canvas-kit/preview-react/radio/stories/Radio
---

<Meta of={RadioStories} />

# Canvas Kit Radio

Radio Buttons allow a user to select one value from a predefined list of 7 or fewer options.

[> Workday Design Reference](https://design.workday.com/components/inputs/radio-buttons)

## Installation

```sh
yarn add @workday/canvas-kit-preview-react
```

## Usage

### Basic Example

Our radio component includes a `RadioGroup` container and `RadioGroup.RadioButton`, which renders an
individual radio button. Nest related `RadioGroup.RadioButton` buttons within a `RadioGroup` and
provide a `name` prop to the `RadioGroup` to group the radio buttons together. Each
`RadioGroup.Radio` must have a unique `value`. This value is used in conjunction with the `value`
prop set on the `RadioGroup` to determine which radio button is selected. To tie it all together,
provide an `onChange` handler to the `RadioGroup` to track the selected value as it changes.

`RadioGroup` should be used in tandem with [Form Field](/components/inputs/form-field/) where the
`useFieldset` prop is set to `true` to meet accessibility standards. This ensures the `label` text
from `FormField` is attached to the `RadioGroup` and read out as a group for voiceover.

```tsx
import React from 'react';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';
import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';

const formfieldInputStyles = createStyles({
  width: px2rem(200),
});

export const Basic = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };

  return (
    <Flex flexDirection="column">
      <FormFieldGroup>
        <FormFieldGroup.Label>Choose Your Pizza Crust</FormFieldGroup.Label>
        <FormFieldGroup.Field>
          <FormFieldGroup.List
            cs={formfieldInputStyles}
            as={RadioGroup}
            name="pizza-crust"
            onChange={handleChange}
            value={value}
          >
            <FormFieldGroup.Input as={RadioGroup.RadioButton} value="deep-dish">
              Deep dish
            </FormFieldGroup.Input>
            <FormFieldGroup.Input as={RadioGroup.RadioButton} value="thin">
              Thin
            </FormFieldGroup.Input>
            <FormFieldGroup.Input as={RadioGroup.RadioButton} value="gluten-free">
              Gluten free
            </FormFieldGroup.Input>
            <FormFieldGroup.Input as={RadioGroup.RadioButton} value="cauliflower">
              Cauliflower
            </FormFieldGroup.Input>
            <FormFieldGroup.Input as={RadioGroup.RadioButton} value="custom">
              Butter - the best thing to put on bread
            </FormFieldGroup.Input>
          </FormFieldGroup.List>
        </FormFieldGroup.Field>
      </FormFieldGroup>
      Value selected: {value}
    </Flex>
  );
};

```

Our example uses [React state](<(https://react.dev/learn/state-a-components-memory)>) to track the
value of the `RadioGroup`.

`RadioGroup` and `RadioGroup.Radio` support keyboard navigation through the proper use of WAI-ARIA
[properties](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/radiogroup_role#associated_wai-aria_roles_states_and_properties).

### Inverse

Set the `variant` prop of `RadioGroup.RadioButton` to `inverse` to ensure proper contrast on dark
backgrounds.

```tsx
import React from 'react';
import {Box} from '@workday/canvas-kit-react/layout';
import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styleOverrides = {
  containerStyles: createStyles({
    backgroundColor: system.color.bg.primary.default,
    padding: system.space.x4,
  }),
  formFieldStyles: createStyles({
    legend: {
      color: system.color.text.inverse,
    },
  }),
};

export const Inverse = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };

  return (
    <Box cs={styleOverrides.containerStyles}>
      <RadioGroup name="crust-inverse" onChange={handleChange} value={value}>
        <RadioGroup.RadioButton variant="inverse" value="deep-dish">
          Deep dish
        </RadioGroup.RadioButton>
        <RadioGroup.RadioButton variant="inverse" value="thin">
          Thin
        </RadioGroup.RadioButton>
        <RadioGroup.RadioButton variant="inverse" value="gluten-free">
          Gluten free
        </RadioGroup.RadioButton>
        <RadioGroup.RadioButton variant="inverse" value="cauliflower">
          Cauliflower
        </RadioGroup.RadioButton>
      </RadioGroup>
    </Box>
  );
};

```

### Radio Group with No Value

Omit the `value` prop from `RadioGroup` to render the group with no selected
`RadioGroup.RadioButton`.

```tsx
import React from 'react';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';
import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';

export const NoValue = () => {
  const [value, setValue] = React.useState<string | number>(0);

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };
  return (
    <FormFieldGroup>
      <FormFieldGroup.Label as="legend">Choose Your Pizza Crust</FormFieldGroup.Label>
      <FormFieldGroup.List
        as={RadioGroup}
        name="crust-no-value"
        onChange={handleChange}
        value={value}
      >
        <FormFieldGroup.Input as={RadioGroup.RadioButton} value="deep-dish">
          Deep dish
        </FormFieldGroup.Input>
        <FormFieldGroup.Input as={RadioGroup.RadioButton} value="thin">
          Thin
        </FormFieldGroup.Input>
        <FormFieldGroup.Input as={RadioGroup.RadioButton} value="gluten-free">
          Gluten free
        </FormFieldGroup.Input>
        <FormFieldGroup.Input as={RadioGroup.RadioButton} value="cauliflower">
          Cauliflower
        </FormFieldGroup.Input>
      </FormFieldGroup.List>
    </FormFieldGroup>
  );
};

```

### Ref Forwarding

`RadioGroup.RadioButton` supports [ref forwarding](https://reactjs.org/docs/forwarding-refs.html).
It will forward `ref` to its underlying `<input type="radio">` element.

```tsx
import React from 'react';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';
import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';

export const RefForwarding = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');
  const glutenFreeRef = React.useRef(null);

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };

  const handleClick = () => {
    glutenFreeRef.current.click();
  };

  return (
    <>
      <FormFieldGroup>
        <FormFieldGroup.Label>Choose Your Pizza Crust</FormFieldGroup.Label>
        <FormFieldGroup.List as={RadioGroup} name="crust-ref" onChange={handleChange} value={value}>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="deep-dish">
            Deep dish
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="thin">
            Thin
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="gluten-free" ref={glutenFreeRef}>
            Gluten free
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="cauliflower">
            Cauliflower
          </FormFieldGroup.Input>
        </FormFieldGroup.List>
      </FormFieldGroup>
      <PrimaryButton onClick={handleClick}>Select Gluten Free</PrimaryButton>
    </>
  );
};

```

### Label Position

Set the `orientation` prop of the Form Field to designate the position of the label relative to the
input component. By default, the orientation will be set to `vertical`.

```tsx
import React from 'react';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';
import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';

export const LabelPosition = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };
  return (
    <FormFieldGroup orientation="horizontalStart">
      <FormFieldGroup.Label>Choose Your Pizza Crust</FormFieldGroup.Label>
      <FormFieldGroup.Field>
        <FormFieldGroup.List
          as={RadioGroup}
          name="crust-label"
          onChange={handleChange}
          value={value}
        >
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="deep-dish">
            Deep dish
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="thin">
            Thin
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="gluten-free">
            Gluten free
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="cauliflower">
            Cauliflower
          </FormFieldGroup.Input>
        </FormFieldGroup.List>
      </FormFieldGroup.Field>
    </FormFieldGroup>
  );
};

```

### Required

Set the `required` prop of the wrapping `FormField` to `true` to indicate that the field is
required. Labels for required fields are suffixed by a red asterisk.

```tsx
import React from 'react';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';
import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';

export const Required = () => {
  const [value, setValue] = React.useState<string | number>('');

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };
  return (
    <FormFieldGroup isRequired={true}>
      <FormFieldGroup.Label>Choose Your Pizza Crust</FormFieldGroup.Label>
      <FormFieldGroup.List
        as={RadioGroup}
        name="crust-required"
        onChange={handleChange}
        value={value}
        aria-describedby="choose-crust"
      >
        <FormFieldGroup.Input as={RadioGroup.RadioButton} value="deep-dish">
          Deep dish
        </FormFieldGroup.Input>
        <FormFieldGroup.Input as={RadioGroup.RadioButton} value="thin">
          Thin
        </FormFieldGroup.Input>
        <FormFieldGroup.Input as={RadioGroup.RadioButton} value="gluten-free">
          Gluten free
        </FormFieldGroup.Input>
        <FormFieldGroup.Input as={RadioGroup.RadioButton} value="cauliflower">
          Cauliflower
        </FormFieldGroup.Input>
      </FormFieldGroup.List>
      <FormFieldGroup.Hint>You must choose a crust</FormFieldGroup.Hint>
    </FormFieldGroup>
  );
};

```

### Disabled

Set the `disabled` prop of `RadioGroup.RadioButton` to prevent users from interacting with it. Be
careful not to disable a pre-selected radio button as this will block keyboard access to the entire
`RadioGroup`.

```tsx
import React from 'react';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';
import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';

export const Disabled = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };
  return (
    <FormFieldGroup>
      <FormFieldGroup.Label>Choose Your Pizza Crust</FormFieldGroup.Label>
      <FormFieldGroup.Field>
        <FormFieldGroup.List
          as={RadioGroup}
          name="crust-disabled"
          onChange={handleChange}
          value={value}
        >
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="deep-dish">
            Deep dish
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="thin">
            Thin
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} disabled value="gluten-free">
            Gluten free (sold out)
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="cauliflower">
            Cauliflower
          </FormFieldGroup.Input>
        </FormFieldGroup.List>
      </FormFieldGroup.Field>
    </FormFieldGroup>
  );
};

```

### Custom Radio Button

Use `RadioGroup.Label` instead of `RadioGroup.RadioButton` if you need direct access to the label
and the radio input. This will allow you to apply custom styling to the text and radio input.

```tsx
import React from 'react';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';
import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styleOverrides = {
  formfieldInputStyles: createStyles({
    width: px2rem(200),
  }),
  radioGroupLabelTextStyles: createStyles({
    color: system.color.fg.default,
  }),
};

export const Custom = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };

  return (
    <Flex flexDirection="column">
      <FormFieldGroup>
        <FormFieldGroup.Label>Choose Your Pizza Crust</FormFieldGroup.Label>
        <FormFieldGroup.Field>
          <FormFieldGroup.List
            as={RadioGroup}
            name="pizza-crust-custom"
            onChange={handleChange}
            cs={styleOverrides.formfieldInputStyles}
            value={value}
          >
            <RadioGroup.Label>
              <FormFieldGroup.Input as={RadioGroup.Label.Input} value="deep-dish" />
              <RadioGroup.Label.Text cs={styleOverrides.radioGroupLabelTextStyles}>
                Deep dish
              </RadioGroup.Label.Text>
            </RadioGroup.Label>
            <RadioGroup.Label>
              <FormFieldGroup.Input as={RadioGroup.Label.Input} value="gluten-free" />
              <RadioGroup.Label.Text cs={styleOverrides.radioGroupLabelTextStyles}>
                Gluten free
              </RadioGroup.Label.Text>
            </RadioGroup.Label>
            <RadioGroup.Label>
              <FormFieldGroup.Input as={RadioGroup.Label.Input} value="cauliflower" />
              <RadioGroup.Label.Text cs={styleOverrides.radioGroupLabelTextStyles}>
                Cauliflower
              </RadioGroup.Label.Text>
            </RadioGroup.Label>
          </FormFieldGroup.List>
        </FormFieldGroup.Field>
      </FormFieldGroup>
      Value selected: {value}
    </Flex>
  );
};

```

### Standalone Radio Button

Use `StyledRadioButton` when you want a styled radio button on its own without using `RadioGroup`.
You will need to handle behavior and accessibility.

```tsx
import React from 'react';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';
import {StyledRadioButton} from '@workday/canvas-kit-preview-react/radio';
import {Flex} from '@workday/canvas-kit-react/layout';

export const StandaloneRadio = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };

  return (
    <Flex flexDirection="column">
      <FormFieldGroup as="fieldset">
        <FormFieldGroup.Label as="legend">Choose Your Pizza Crust</FormFieldGroup.Label>
        <Flex gap="m">
          <Flex as="label" gap="xs">
            <FormFieldGroup.Input
              as={StyledRadioButton}
              onChange={handleChange}
              value="deep-dish"
              name="pizza-crust-standalone"
              checked={value === 'deep-dish'}
            />
            Deep dish
          </Flex>
          <Flex as="label" gap="xs">
            <FormFieldGroup.Input
              as={StyledRadioButton}
              onChange={handleChange}
              value="gluten-free"
              checked={value === 'gluten-free'}
              name="pizza-crust-standalone"
            />
            Gluten free
          </Flex>
        </Flex>
      </FormFieldGroup>
      Value selected: {value}
    </Flex>
  );
};

```

Use `RadioGroup.Label` when you want more control styling the text and radio input but still want
some behavior handled for you.

### Error States

Set the `error` prop of the wrapping `FormField` to `"caution"` or
`"error"` to set the `RadioGroup` to the alert or error state, respectively. You
will also need to set the `hintId` and `hintText` props on the `FormField` to meet accessibility
standards. You must set an `aria-describedby` attribute on the `RadioGroup` element that matches the
value of `hintId` set on the `FormField` element. These attributes ensure that the alert message is
associated to the `RadioGroup` and read out by voiceover.

#### Caution

Use the alert state when a selection is valid but there is additional information.

```tsx
import React from 'react';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';
import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';

export const Caution = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };

  return (
    <FormFieldGroup error="caution" id="hint-alert">
      <FormFieldGroup.Label>Choose Your Pizza Crust</FormFieldGroup.Label>
      <FormFieldGroup.Field>
        <FormFieldGroup.List
          as={RadioGroup}
          name="crust-alert"
          onChange={handleChange}
          value={value}
        >
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="deep-dish">
            Deep dish
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="thin">
            Thin
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="gluten-free">
            Gluten free
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="cauliflower">
            Cauliflower
          </FormFieldGroup.Input>
        </FormFieldGroup.List>
        <FormFieldGroup.Hint>Deep dish is an extra $2.99.</FormFieldGroup.Hint>
      </FormFieldGroup.Field>
    </FormFieldGroup>
  );
};

```

#### Error

Use the error state when the selection is no longer valid.

```tsx
import React from 'react';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';
import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';

export const Error = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };

  return (
    <FormFieldGroup error="error">
      <FormFieldGroup.Label>Choose Your Pizza Crust</FormFieldGroup.Label>
      <FormFieldGroup.Field>
        <FormFieldGroup.List
          as={RadioGroup}
          name="crust-error"
          onChange={handleChange}
          value={value}
        >
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="deep-dish">
            Deep dish
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="thin">
            Thin
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="gluten-free">
            Gluten free
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="cauliflower">
            Cauliflower
          </FormFieldGroup.Input>
        </FormFieldGroup.List>
        <FormFieldGroup.Hint>Deep dish is currently sold out.</FormFieldGroup.Hint>
      </FormFieldGroup.Field>
    </FormFieldGroup>
  );
};

```

### React Hook Form

Using a form library like [React Hook Form](https://www.react-hook-form.com/) is a common use case.
Reference this [CodeSandbox](https://codesandbox.io/s/radio-preview-with-react-hook-form-stn5vr) on
how to use `RadioGroup` with React Hook Form.

### Custom Styles

Radio and its subcomponents support custom styling via the `cs` prop. For more information, check
our
["How To Customize Styles"](https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs).

## Component API

<!-- API Reference for RadioGroup not found -->
