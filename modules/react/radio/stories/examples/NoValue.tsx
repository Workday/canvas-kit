import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';
import {TypeSubtextLevel} from '@workday/canvas-kit-preview-react/text';

export const NoValue = () => {
  const [value, setValue] = React.useState<string | number>(0);

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  return (
    <>
      <FormField label="Choose Your Pizza Crust" useFieldset={true}>
        <RadioGroup name="crust" onChange={handleChange} value={value}>
          <Radio label="Deep dish" />
          <Radio label="Thin" />
          <Radio label="Gluten free" />
          <Radio label="Cauliflower" />
        </RadioGroup>
      </FormField>
      <TypeSubtextLevel size="large">Value: {value}</TypeSubtextLevel>
    </>
  );
};
