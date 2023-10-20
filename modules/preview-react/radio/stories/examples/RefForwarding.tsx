import React from 'react';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
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
      <FormField label="Choose Your Pizza Crust" useFieldset={true}>
        <RadioGroup name="crust-ref" onChange={handleChange} value={value}>
          <RadioGroup.RadioButton value="deep-dish">Deep dish</RadioGroup.RadioButton>
          <RadioGroup.RadioButton value="thin">Thin</RadioGroup.RadioButton>
          <RadioGroup.RadioButton value="gluten-free" ref={glutenFreeRef}>
            Gluten free
          </RadioGroup.RadioButton>
          <RadioGroup.RadioButton value="cauliflower">Cauliflower</RadioGroup.RadioButton>
        </RadioGroup>
      </FormField>
      <PrimaryButton onClick={handleClick}>Select Gluten Free</PrimaryButton>
    </>
  );
};
