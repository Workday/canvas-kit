import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';

export const Required = () => {
  const [value, setValue] = React.useState(null);

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  return (
    <FormField label="Choose your pizza crust" required={true} useFieldset={true}>
      <RadioGroup name="crust" onChange={handleChange} value={value}>
        <Radio label="Deep Dish" value="deep-dish" />
        <Radio label="Thin" value="thin" />
        <Radio label="Gluten Free" value="gluten-free" />
        <Radio label="Cauliflower" value="cauliflower" />
      </RadioGroup>
    </FormField>
  );
};
