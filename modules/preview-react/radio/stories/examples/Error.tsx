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
      hintText="Deep dish is currently sold out."
    >
      <RadioGroup name="crust-error" onChange={handleChange} value={value} aria-describedby="error">
        <RadioGroup.RadioButton value="deep-dish">Deep dish</RadioGroup.RadioButton>
        <RadioGroup.RadioButton value="thin">Thin</RadioGroup.RadioButton>
        <RadioGroup.RadioButton value="gluten-free">Gluten free</RadioGroup.RadioButton>
        <RadioGroup.RadioButton value="cauliflower">Cauliflower</RadioGroup.RadioButton>
      </RadioGroup>
    </FormField>
  );
};
