import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';

export const Alert = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };

  return (
    <FormField
      error={FormField.ErrorType.Alert}
      hintId="hint-alert"
      hintText="Deep dish is an extra $2.99."
      label="Choose Your Pizza Crust"
      useFieldset={true}
    >
      <RadioGroup
        name="crust-alert"
        onChange={handleChange}
        value={value}
        aria-describedby="hint-alert"
      >
        <RadioGroup.RadioButton value="deep-dish">Deep dish</RadioGroup.RadioButton>
        <RadioGroup.RadioButton value="thin">Thin</RadioGroup.RadioButton>
        <RadioGroup.RadioButton value="gluten-free">Gluten free</RadioGroup.RadioButton>
        <RadioGroup.RadioButton value="cauliflower">Cauliflower</RadioGroup.RadioButton>
      </RadioGroup>
    </FormField>
  );
};
