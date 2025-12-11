---
source_file: react/checkbox/stories/Checkbox.mdx
live_url: https://workday.github.io/canvas-kit/react/checkbox/stories/Checkbox
---

<Meta of={CheckboxStories} />

# Canvas Kit Checkbox

Checkboxes allow a user to select zero, one, or multiple values from a predefined list of 7 or less
options.

[> Workday Design Reference](https://design.workday.com/components/inputs/checkboxes)

## Installation

```sh
yarn add @workday/canvas-kit-react
```

## Usage

### Basic Example

Checkbox may be used on its own without [Form Field](/components/inputs/form-field/) since it
includes a `<label>` with a `for` attribute referencing the underlying `<input type="checkbox">`
element.

```tsx
import React from 'react';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const Basic = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormField>
      <FormField.Label>Confirm</FormField.Label>
      <FormField.Field>
        <FormField.Input
          as={Checkbox}
          checked={checked}
          label="I agree to the terms"
          onChange={handleChange}
        />
      </FormField.Field>
    </FormField>
  );
};

```

### Inverse

Checkbox with inverse variation

```tsx
import React from 'react';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styleOverrides = createStyles({
  backgroundColor: system.color.bg.primary.default,
  padding: system.space.x4,
});

export const Inverse = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Flex cs={styleOverrides}>
      <Checkbox
        variant="inverse"
        checked={checked}
        label="I agree to the terms"
        onChange={handleChange}
      />
    </Flex>
  );
};

```

### Disabled

Set the `disabled` prop of the Checkbox to prevent users from interacting with it.

```tsx
import React from 'react';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const Disabled = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormField>
      <FormField.Label>Confirm</FormField.Label>
      <FormField.Field>
        <FormField.Input
          as={Checkbox}
          checked={checked}
          disabled={true}
          label="I agree to the terms"
          onChange={handleChange}
        />
      </FormField.Field>
    </FormField>
  );
};

```

### Indeterminate

Set the `indeterminate` prop of the Checkbox to `true` to indicate the Checkbox is neither checked
nor unchecked.

A common use case for an indeterminate Checkbox is when the value of a parent Checkbox is dependent
on a number of child Checkboxes. The parent Checkbox is set to the indeterminate state if some (but
not all) of its children are checked.

```tsx
import React from 'react';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {Box} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styleOverrides = createStyles({
  marginInlineLeft: system.space.x8,
  marginTop: system.space.x2,
});

export const Indeterminate = () => {
  const [pizzaChecked, setPizzaChecked] = React.useState(false);
  const [pizzaIndeterminate, setPizzaIndeterminate] = React.useState(false);

  const [toppings, setToppings] = React.useState([
    {name: 'Pepperoni', checked: false},
    {name: 'Sausage', checked: false},
    {name: 'Bell Peppers', checked: false},
    {name: 'Olives', checked: false},
    {name: 'Onions', checked: false},
  ]);

  const handlePizzaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;

    if (checked || (!checked && pizzaIndeterminate)) {
      setPizzaChecked(true);
      setToppings(
        toppings.map(topping => ({
          ...topping,
          checked: true,
        }))
      );
    } else {
      setPizzaChecked(false);
      setToppings(
        toppings.map(topping => ({
          ...topping,
          checked: false,
        }))
      );
    }

    setPizzaIndeterminate(false);
  };

  const handleToppingChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newToppings = toppings.map(topping => ({...topping}));
    newToppings[index].checked = event.target.checked;
    setToppings(newToppings);

    const anyToppingChecked = newToppings.filter(topping => topping.checked).length > 0;
    const anyToppingUnchecked = newToppings.filter(topping => !topping.checked).length > 0;
    const allToppingChecked = !anyToppingUnchecked;
    setPizzaIndeterminate(anyToppingChecked && anyToppingUnchecked);
    setPizzaChecked(allToppingChecked);
  };

  return (
    <>
      <Checkbox
        checked={pizzaChecked}
        indeterminate={pizzaIndeterminate}
        label="Supreme Pizza Toppings"
        onChange={handlePizzaChange}
      />
      <Box cs={styleOverrides}>
        {toppings.map((topping, index) => (
          <Checkbox
            checked={topping.checked}
            key={topping.name}
            label={topping.name}
            onChange={event => handleToppingChange(event, index)}
          />
        ))}
      </Box>
    </>
  );
};

```

### Ref Forwarding

Checkbox supports [ref forwarding](https://reactjs.org/docs/forwarding-refs.html). It will forward
`ref` to its underlying `<input type="checkbox">` element.

```tsx
import React from 'react';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {Box} from '@workday/canvas-kit-react/layout';
import {system} from '@workday/canvas-tokens-web';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {FormField} from '@workday/canvas-kit-react/form-field';

const boxStyles = createStyles({
  display: 'flex',
  flexDirection: 'column',
});

export const RefForwarding = () => {
  const [checked, setChecked] = React.useState(false);
  const ref = React.useRef(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleClick = () => {
    ref.current.click();
  };

  return (
    <>
      <Box cs={boxStyles}>
        <FormField>
          <FormField.Label>Confirm</FormField.Label>
          <FormField.Field>
            <FormField.Input
              as={Checkbox}
              checked={checked}
              label="I agree to the terms"
              onChange={handleChange}
              ref={ref}
            />
          </FormField.Field>
        </FormField>
      </Box>
      <PrimaryButton onClick={handleClick}>Check Agreement to Terms</PrimaryButton>
    </>
  );
};

```

### Label Position Horizontal

Set the `orientation` prop of the Form Field to designate the position of the label relative to the
input component. By default, the orientation will be set to `vertical`.

```tsx
import React from 'react';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const LabelPosition = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormField orientation="horizontalStart">
      <FormField.Label>Confirm</FormField.Label>
      <FormField.Field>
        <FormField.Input
          as={Checkbox}
          checked={checked}
          label="I agree to the terms"
          onChange={handleChange}
        />
      </FormField.Field>
    </FormField>
  );
};

```

### Required

Set the `required` prop of a wrapping Form Field to `true` to indicate that the field is required.
Labels for required fields are suffixed by a red asterisk.

```tsx
import React from 'react';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const Required = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormField isRequired={true}>
      <FormField.Label>Confirm</FormField.Label>
      <FormField.Field>
        <FormField.Input
          as={Checkbox}
          checked={checked}
          label="I agree to the terms"
          onChange={handleChange}
        />
      </FormField.Field>
    </FormField>
  );
};

```

### Error States

Set the `error` prop of the wrapping Form Field to `"caution"` or
`"error"` to set the Checkbox to the Alert or Error state, respectively. You will
also need to set the `hintId` and `hintText` props on the Form Field to meet accessibility
standards. You may wish to omit the `label` prop on the Form Field given that Checkbox already
includes a label.

The `error` prop may be applied directly to the Checkbox with a value of `"caution"`
or `"error"` if Form Field is not being used.

#### Caution

```tsx
import React from 'react';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const Caution = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormField error="caution">
      <FormField.Label>Confirm</FormField.Label>
      <FormField.Field>
        <FormField.Input
          as={Checkbox}
          checked={checked}
          label="I agree to the terms"
          onChange={handleChange}
        />
        <FormField.Hint>You must agree to the terms before proceeding</FormField.Hint>
      </FormField.Field>
    </FormField>
  );
};

```

#### Error

```tsx
import React from 'react';
import {Checkbox} from '@workday/canvas-kit-react/checkbox';
import {FormField} from '@workday/canvas-kit-react/form-field';

export const Error = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormField error="error">
      <FormField.Label>Confirm</FormField.Label>
      <FormField.Field>
        <FormField.Input
          as={Checkbox}
          checked={checked}
          label="I agree to the terms"
          onChange={handleChange}
        />
        <FormField.Hint>You must agree to the terms before proceeding</FormField.Hint>
      </FormField.Field>
    </FormField>
  );
};

```

### Custom Styles

Checkbox supports custom styling via the `cs` prop. For more information, check our
["How To Customize Styles"](https://workday.github.io/canvas-kit/?path=/docs/styling-guides-customizing-styles--docs).

## Component API

<!-- API Reference for Checkbox not found -->

## Specifications

### Specifications for Checkbox

<!-- Component specifications from Checkbox.spec.ts -->
