import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
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
        <RadioGroup name="pizza-crust" onChange={handleChange} width="200px" value={value}>
          <RadioGroup.RadioButton value="deep-dish">Deep dish</RadioGroup.RadioButton>
          <RadioGroup.RadioButton value="thin">Thin</RadioGroup.RadioButton>
          <RadioGroup.RadioButton value="gluten-free">Gluten free</RadioGroup.RadioButton>
          <RadioGroup.RadioButton value="cauliflower">Cauliflower</RadioGroup.RadioButton>
          <RadioGroup.RadioButton value="custom">
            Butter - the best thing to put on bread
          </RadioGroup.RadioButton>
        </RadioGroup>
      </FormField>
      Value selected: {value}
    </Flex>
  );
};
