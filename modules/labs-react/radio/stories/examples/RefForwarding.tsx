import React from 'react';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {RadioGroup} from '@workday/canvas-kit-labs-react/radio';

export const RefForwarding = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');
  const glutenFreeRef = React.useRef(null);

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  const handleClick = () => {
    glutenFreeRef.current.click();
  };

  return (
    <>
      <FormField label="Choose Your Pizza Crust" useFieldset={true}>
        <RadioGroup>
          <RadioGroup.Button>
            <RadioGroup.Input value="deep-dish" />
            <RadioGroup.Label>Deep Dish</RadioGroup.Label>
          </RadioGroup.Button>
          <RadioGroup.Button>
            <RadioGroup.Input value="thin" />
            <RadioGroup.Label>Thin</RadioGroup.Label>
          </RadioGroup.Button>
          <RadioGroup.Button>
            <RadioGroup.Input value="gluten-free" ref={glutenFreeRef} />
            <RadioGroup.Label>Gluten free</RadioGroup.Label>
          </RadioGroup.Button>
          <RadioGroup.Button>
            <RadioGroup.Input value="cauliflower" />
            <RadioGroup.Label>Cauliflower</RadioGroup.Label>
          </RadioGroup.Button>
        </RadioGroup>
      </FormField>
      <PrimaryButton onClick={handleClick}>Select Gluten Free</PrimaryButton>
    </>
  );
};
