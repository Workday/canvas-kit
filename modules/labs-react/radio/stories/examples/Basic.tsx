import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {RadioGroup} from '@workday/canvas-kit-labs-react/radio';
import {Flex} from '@workday/canvas-kit-react/layout';

export const Basic = () => {
  const [value, setValue] = React.useState<string | number>('thin');

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };

  return (
    <Flex flexDirection="column">
      <FormField label="Choose Your Pizza Crust" useFieldset={true}>
        <RadioGroup name="pizza-crust" onChange={handleChange} initialValue={value} value={value}>
          <RadioGroup.Label>
            <RadioGroup.Label.Input value="deep-dish" />
            <RadioGroup.Label.Text>Deep Dish Poop</RadioGroup.Label.Text>
          </RadioGroup.Label>
          <RadioGroup.Label>
            <RadioGroup.Label.Input value="thin" />
            <RadioGroup.Label.Text>Thin</RadioGroup.Label.Text>
          </RadioGroup.Label>
          <RadioGroup.Label>
            <RadioGroup.Label.Input value="gluten-free" />
            <RadioGroup.Label.Text>Gluten Free</RadioGroup.Label.Text>
          </RadioGroup.Label>
          <RadioGroup.Label value="custom">
            <RadioGroup.Label.Input />
            <RadioGroup.Label.Text>
              My favorite pizza crust flavor is butter because it's the best thing to put on bread
            </RadioGroup.Label.Text>
          </RadioGroup.Label>
          <RadioGroup.Radio value="cauliflower">Cauliflower</RadioGroup.Radio>
        </RadioGroup>
      </FormField>
      Value selected: {value}
    </Flex>
  );
};
