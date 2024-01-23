import React from 'react';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';

export const Required = () => {
  const [value, setValue] = React.useState<string | number>('');

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };
  return (
    <FormField isRequired={true} as="fieldset">
      <FormField.Label as="legend">Choose Your Pizza Crust</FormField.Label>
      <FormField.Input
        as={RadioGroup}
        name="crust-required"
        onChange={handleChange}
        value={value}
        aria-describedby="choose-crust"
      >
        <RadioGroup.RadioButton value="deep-dish">Deep dish</RadioGroup.RadioButton>
        <RadioGroup.RadioButton value="thin">Thin</RadioGroup.RadioButton>
        <RadioGroup.RadioButton value="gluten-free">Gluten free</RadioGroup.RadioButton>
        <RadioGroup.RadioButton value="cauliflower">Cauliflower</RadioGroup.RadioButton>
      </FormField.Input>
      <FormField.Hint>You must choose a crust</FormField.Hint>
    </FormField>
  );
};
