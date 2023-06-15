import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {RadioGroup} from '@workday/canvas-kit-labs-react/radio';

export const Required = () => {
  const [value, setValue] = React.useState<string | number>('');

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };
  return (
    <FormField
      label="Choose Your Pizza Crust"
      required={true}
      useFieldset={true}
      hintText="You must choose a crust"
      hintId="choose-crust"
    >
      <RadioGroup
        name="crust"
        onChange={handleChange}
        value={value}
        aria-describedby="choose-crust"
      >
        <RadioGroup.Radio value="deep-dish">Deep Dish</RadioGroup.Radio>
        <RadioGroup.Radio value="thin">Thin</RadioGroup.Radio>
        <RadioGroup.Radio value="gluten-free">Gluten free</RadioGroup.Radio>
        <RadioGroup.Radio value="cauliflower">Cauliflower</RadioGroup.Radio>
      </RadioGroup>
    </FormField>
  );
};
