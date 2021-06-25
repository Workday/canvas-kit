import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';

export const NoValue = () => {
  const [value, setValue] = React.useState<string | number>(0);

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  return (
    <>
      <FormField label="Choose your pizza crust" useFieldset={true}>
        <RadioGroup name="crust" onChange={handleChange} value={value}>
          <Radio label="Deep Dish" />
          <Radio label="Thin" />
          <Radio label="Gluten Free" />
          <Radio label="Cauliflower" />
        </RadioGroup>
      </FormField>
      <p>Value: {value}</p>
    </>
  );
};
