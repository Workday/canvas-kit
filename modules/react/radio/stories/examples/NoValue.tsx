import React from 'react';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';
import {Subtext} from '@workday/canvas-kit-react/text';
import {useUniqueId} from '@workday/canvas-kit-react/common';

export const NoValue = () => {
  const [value, setValue] = React.useState<string | number>(0);

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  return (
    <>
      <FormField as="fieldset">
        <FormField.Label as="legend">Choose Your Pizza Crust</FormField.Label>
        <FormField.Input as={RadioGroup} name={useUniqueId()} onChange={handleChange} value={value}>
          <Radio label="Deep dish" />
          <Radio label="Thin" />
          <Radio label="Gluten free" />
          <Radio label="Cauliflower" />
        </FormField.Input>
      </FormField>
      <Subtext size="large">Value: {value}</Subtext>
    </>
  );
};
