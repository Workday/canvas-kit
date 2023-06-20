import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
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
    <FormField
      label="Choose Your Pizza Crust"
      useFieldset={true}
      error={FormField.ErrorType.Error}
      hintId="error"
      hintText="Deep Dish is currently sold out."
    >
      <RadioGroup
        name="crust-error"
        onChange={handleChange}
        initialValue={value}
        aria-describedby="error"
      >
        <RadioGroup.Radio value="deep-dish">Deep Dish (Sold Out)</RadioGroup.Radio>
        <RadioGroup.Radio value="thin">Thin</RadioGroup.Radio>
        <RadioGroup.Radio value="gluten-free">Gluten Free</RadioGroup.Radio>
        <RadioGroup.Radio value="cauliflower">Cauliflower</RadioGroup.Radio>
      </RadioGroup>
    </FormField>
  );
};
