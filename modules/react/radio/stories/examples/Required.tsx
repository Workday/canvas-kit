import React from 'react';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';
import {useUniqueId} from '@workday/canvas-kit-react/common';

export const Required = () => {
  const [value, setValue] = React.useState<string | number>();

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  return (
    <FormField isRequired={true} as="fieldset">
      <FormField.Label as="legend">Choose Your Pizza Crust</FormField.Label>
      <FormField.Input as={RadioGroup} name={useUniqueId()} onChange={handleChange} value={value}>
        <Radio label="Deep dish" value="deep-dish" />
        <Radio label="Thin" value="thin" />
        <Radio label="Gluten free" value="gluten-free" />
        <Radio label="Cauliflower" value="cauliflower" />
      </FormField.Input>
    </FormField>
  );
};
