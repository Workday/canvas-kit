import React from 'react';

import {useUniqueId} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';

export const Disabled = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  return (
    <FormField as="fieldset">
      <FormField.Label as="legend">Choose Your Pizza Crust</FormField.Label>
      <FormField.Input as={RadioGroup} name={useUniqueId()} onChange={handleChange} value={value}>
        <Radio label="Deep dish" value="deep-dish" />
        <Radio label="Thin" value="thin" />
        <Radio disabled={true} label="Gluten free (sold out)" value="gluten-free" />
        <Radio label="Cauliflower" value="cauliflower" />
      </FormField.Input>
    </FormField>
  );
};
