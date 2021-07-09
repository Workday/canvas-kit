import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';

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
      label="Choose your pizza crust"
      useFieldset={true}
    >
      <RadioGroup name="crust" onChange={handleChange} value={value}>
        <Radio disabled={true} label="Deep Dish (Sold Out)" value="deep-dish" />
        <Radio label="Thin" value="thin" />
        <Radio label="Gluten Free" value="gluten-free" />
        <Radio label="Cauliflower" value="cauliflower" />
      </RadioGroup>
    </FormField>
  );
};
