import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';
import styled from '@emotion/styled';

export const Basic = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  const StyledFormField = styled(FormField)({
    width: '161px',
  });

  return (
    <StyledFormField label="Choose Your Pizza Crust" useFieldset={true}>
      <RadioGroup name="crust" onChange={handleChange} value={value}>
        <Radio label="Deep dish" value="deep-dish" />
        <Radio label="Thin" value="thin" />
        <Radio label="Gluten free" value="gluten-free" />
        <Radio label="Cauliflower" value="cauliflower" />
        <Radio
          label="My favorite pizza crust flavor is butter because it's the best thing to put on bread"
          value="cauliflower"
        />
      </RadioGroup>
    </StyledFormField>
  );
};
