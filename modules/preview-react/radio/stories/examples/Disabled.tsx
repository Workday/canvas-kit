import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
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
    <FormField label="Choose Your Pizza Crust" useFieldset={true}>
      <RadioGroup name="crust-disabled" onChange={handleChange} initialValue={value}>
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
