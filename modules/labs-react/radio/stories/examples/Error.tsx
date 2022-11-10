import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {RadioGroup} from '@workday/canvas-kit-labs-react/radio';

export const Error = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  return (
    <FormField
      error={FormField.ErrorType.Error}
      hintId="hint-error"
      hintText="Deep Dish is no longer available. Please select a different crust."
      label="Choose Your Pizza Crust"
      useFieldset={true}
    >
      <RadioGroup name="crust">
        <RadioGroup.Button disabled>
          <RadioGroup.Input value="deep-dish" />
          <RadioGroup.Label>Deep dish (sold out)</RadioGroup.Label>
        </RadioGroup.Button>
        <RadioGroup.Button>
          <RadioGroup.Input value="thin" />
          <RadioGroup.Label>Thin</RadioGroup.Label>
        </RadioGroup.Button>
        <RadioGroup.Button>
          <RadioGroup.Input value="gluten-free" />
          <RadioGroup.Label>Gluten Free</RadioGroup.Label>
        </RadioGroup.Button>
        <RadioGroup.Button>
          <RadioGroup.Input value="cauliflower" />
          <RadioGroup.Label>Cauliflower</RadioGroup.Label>
        </RadioGroup.Button>
      </RadioGroup>
    </FormField>
  );
};
