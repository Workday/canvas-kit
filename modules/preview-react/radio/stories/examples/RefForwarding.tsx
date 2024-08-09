import React from 'react';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {FormFieldGroup} from '@workday/canvas-kit-preview-react/form-field';
import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';

export const RefForwarding = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');
  const glutenFreeRef = React.useRef(null);

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };

  const handleClick = () => {
    glutenFreeRef.current.click();
  };

  return (
    <>
      <FormFieldGroup>
        <FormFieldGroup.Legend>Choose Your Pizza Crust</FormFieldGroup.Legend>
        <FormFieldGroup.List as={RadioGroup} name="crust-ref" onChange={handleChange} value={value}>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="deep-dish">
            Deep dish
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="thin">
            Thin
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="gluten-free" ref={glutenFreeRef}>
            Gluten free
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="cauliflower">
            Cauliflower
          </FormFieldGroup.Input>
        </FormFieldGroup.List>
      </FormFieldGroup>
      <PrimaryButton onClick={handleClick}>Select Gluten Free</PrimaryButton>
    </>
  );
};
