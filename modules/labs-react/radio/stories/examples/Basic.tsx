import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {RadioGroup} from '@workday/canvas-kit-labs-react/radio';
import {Flex} from '@workday/canvas-kit-react/layout';

export const Basic = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };

  return (
    <Flex flexDirection="column">
      <FormField label="Choose Your Pizza Crust" useFieldset={true}>
        <RadioGroup name="pizza-crust" onChange={handleChange} width="200px" initialValue={value}>
          <RadioGroup.Radio value="deep-dish">Deep Dish</RadioGroup.Radio>
          <RadioGroup.Radio value="gluten-free">Gluten Free</RadioGroup.Radio>
          <RadioGroup.Radio value="cauliflower">Cauliflower</RadioGroup.Radio>
          <RadioGroup.Radio value="custom">
            My favorite pizza crust flavor is butter because it's the best thing to put on bread
          </RadioGroup.Radio>
          <RadioGroup.Radio value="thin">Thin</RadioGroup.Radio>
        </RadioGroup>
      </FormField>
      Value selected: {value}
    </Flex>
  );
};
