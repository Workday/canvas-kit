import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
import {Flex} from '@workday/canvas-kit-react/layout';

export const Custom = () => {
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
        <RadioGroup name="pizza-crust-custom" onChange={handleChange} width="200px" value={value}>
          <RadioGroup.Label>
            <RadioGroup.Label.Input value="deep-dish" />
            <RadioGroup.Label.Text color="berrySmoothie400">Deep dish</RadioGroup.Label.Text>
          </RadioGroup.Label>
          <RadioGroup.Label>
            <RadioGroup.Label.Input value="gluten-free" />
            <RadioGroup.Label.Text color="berrySmoothie400">Gluten free</RadioGroup.Label.Text>
          </RadioGroup.Label>
          <RadioGroup.Label>
            <RadioGroup.Label.Input value="cauliflower" />
            <RadioGroup.Label.Text color="berrySmoothie400">Cauliflower</RadioGroup.Label.Text>
          </RadioGroup.Label>
        </RadioGroup>
      </FormField>
      Value selected: {value}
    </Flex>
  );
};
