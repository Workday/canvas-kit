import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {RadioGroup} from '@workday/canvas-kit-labs-react/radio';

export const Disabled = () => {
  return (
    <FormField label="Choose Your Pizza Crust" useFieldset={true}>
      <RadioGroup name="crust" initialValue="deep-dish">
        <RadioGroup.Radio value="deep-dish">Deep Dish</RadioGroup.Radio>
        <RadioGroup.Radio value="thin">Thin</RadioGroup.Radio>
        <RadioGroup.Radio disabled value="gluten-free">
          Gluten Free (No longer Available)
        </RadioGroup.Radio>
        <RadioGroup.Radio value="cauliflower">Cauliflower</RadioGroup.Radio>
      </RadioGroup>
    </FormField>
  );
};
