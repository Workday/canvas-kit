import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';

export const Basic = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  return (
    <FormField label="Choose Your Pizza Crust" useFieldset={true}>
      <RadioGroup name="crust" onChange={handleChange} value={value}>
        <Radio label="Deep dish" value="deep-dish" />
        <Radio
          label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          value="thin"
        />
        <Radio label="Gluten free" value="gluten-free" />
        <Radio label="Cauliflower" value="cauliflower" />
      </RadioGroup>
    </FormField>
  );
};
