import React from 'react';

import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';

export const Required = () => {
  const [value, setValue] = React.useState<string | number>('');

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };
  return (
    <FormFieldGroup isRequired={true}>
      <FormFieldGroup.Label>Choose Your Pizza Crust</FormFieldGroup.Label>
      <FormFieldGroup.List
        as={RadioGroup}
        name="crust-required"
        onChange={handleChange}
        value={value}
        aria-describedby="choose-crust"
      >
        <FormFieldGroup.Input as={RadioGroup.RadioButton} value="deep-dish">
          Deep dish
        </FormFieldGroup.Input>
        <FormFieldGroup.Input as={RadioGroup.RadioButton} value="thin">
          Thin
        </FormFieldGroup.Input>
        <FormFieldGroup.Input as={RadioGroup.RadioButton} value="gluten-free">
          Gluten free
        </FormFieldGroup.Input>
        <FormFieldGroup.Input as={RadioGroup.RadioButton} value="cauliflower">
          Cauliflower
        </FormFieldGroup.Input>
      </FormFieldGroup.List>
      <FormFieldGroup.Hint>You must choose a crust</FormFieldGroup.Hint>
    </FormFieldGroup>
  );
};
