import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';
import {useUniqueId} from '@workday/canvas-kit-react/common';

export const Disabled = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  return (
    <FormField label="Choose Your Pizza Crust" useFieldset={true}>
      <RadioGroup name={useUniqueId()} onChange={handleChange} value={value}>
        <Radio label="Deep dish" value="deep-dish" />
        <Radio label="Thin" value="thin" />
        <Radio disabled={true} label="Gluten free (sold out)" value="gluten-free" />
        <Radio label="Cauliflower" value="cauliflower" />
      </RadioGroup>
    </FormField>
  );
};
