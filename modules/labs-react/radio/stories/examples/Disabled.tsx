import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {RadioGroup} from '@workday/canvas-kit-labs-react/radio';

export const Disabled = () => {
  return (
    <FormField
      label="Choose Your Pizza Crust"
      useFieldset={true}
      error={FormField.ErrorType.Error}
      hintText="Deep Dish is currently sold out."
    >
      <RadioGroup name="crust" initialValue="deep-dish">
        <RadioGroup.Radio value="deep-dish">Deep Dish (Sold Out)</RadioGroup.Radio>
        <RadioGroup.Radio value="thin">Thin</RadioGroup.Radio>
        <RadioGroup.Radio value="gluten-free">Gluten Free</RadioGroup.Radio>
        <RadioGroup.Radio value="cauliflower">Cauliflower</RadioGroup.Radio>
      </RadioGroup>
    </FormField>
  );
};
