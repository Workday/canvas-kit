import React from 'react';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {RadioGroup} from '@workday/canvas-kit-labs-react/radio';

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
        <RadioGroup name="crust" onChange={handleChange} initialValue={value}>
          <RadioGroup.Radio value="deep-dish">Deep Dish</RadioGroup.Radio>
          <RadioGroup.Radio value="thin">Thin</RadioGroup.Radio>
          <RadioGroup.Radio value="gluten-free" ref={glutenFreeRef}>
            Gluten free
          </RadioGroup.Radio>
          <RadioGroup.Radio value="cauliflower">Cauliflower</RadioGroup.Radio>
        </RadioGroup>
      </FormField>
      <PrimaryButton onClick={handleClick}>Select Gluten Free</PrimaryButton>
    </>
  );
};
