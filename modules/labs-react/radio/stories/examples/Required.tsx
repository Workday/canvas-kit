import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {RadioGroup} from '@workday/canvas-kit-labs-react/radio';

export const Required = () => {
  return (
    <FormField label="Choose Your Pizza Crust" required={true} useFieldset={true}>
      <RadioGroup name="crust">
        <RadioGroup.Radio value="deep-dish">Deep Dish</RadioGroup.Radio>
        <RadioGroup.Radio value="thin">Thin</RadioGroup.Radio>
        <RadioGroup.Radio value="gluten-free">Gluten free</RadioGroup.Radio>
        <RadioGroup.Radio value="cauliflower">Cauliflower</RadioGroup.Radio>
      </RadioGroup>
    </FormField>
  );
};
