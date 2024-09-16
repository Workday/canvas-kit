import React from 'react';
import {FormFieldGroup} from '@workday/canvas-kit-preview-react/form-field';
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
    <FormFieldGroup>
      <FormFieldGroup.Label>Choose Your Pizza Crust</FormFieldGroup.Label>
      <FormFieldGroup.List
        as={RadioGroup}
        name="crust-disabled"
        onChange={handleChange}
        value={value}
      >
        <FormFieldGroup.Input as={RadioGroup.RadioButton} value="deep-dish">
          Deep dish
        </FormFieldGroup.Input>
        <FormFieldGroup.Input as={RadioGroup.RadioButton} value="thin">
          Thin
        </FormFieldGroup.Input>
        <FormFieldGroup.Input as={RadioGroup.RadioButton} disabled value="gluten-free">
          Gluten free (sold out)
        </FormFieldGroup.Input>
        <FormFieldGroup.Input as={RadioGroup.RadioButton} value="cauliflower">
          Cauliflower
        </FormFieldGroup.Input>
      </FormFieldGroup.List>
    </FormFieldGroup>
  );
};
