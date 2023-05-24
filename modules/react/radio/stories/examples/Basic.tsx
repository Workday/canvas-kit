import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';
import {useUniqueId} from '@workday/canvas-kit-react/common';
import {space} from '@workday/canvas-kit-react/tokens';

export const Basic = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  return (
    <FormField label="Choose Your Pizza Crust" useFieldset={true} style={{width: space.xl}}>
      <RadioGroup name={useUniqueId()} onChange={handleChange} value={value}>
        <Radio label="Deep dish" value="deep-dish" />
        <Radio label="Thin" value="thin" />
        <Radio label="Gluten free" value="gluten-free" />
        <Radio label="Cauliflower" value="cauliflower" />
        <Radio style={{width: space.xl}} label="Butter - the best thing to put on bread" value="butter" />
      </RadioGroup>
    </FormField>
  );
};
