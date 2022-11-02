import React from 'react';
import styled from '@emotion/styled';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Radio, RadioGroup} from '@workday/canvas-kit-react/radio';
import {space} from '@workday/canvas-kit-react/tokens';

export const Basic = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (value: string | number) => {
    setValue(value);
  };

  const StyledFormField = styled(FormField)({
    width: space.xl,
  });

  return (
    <StyledFormField label="Choose Your Pizza Crust" useFieldset={true}>
      <RadioGroup name="crust" onChange={handleChange} value={value}>
        <Radio label="Deep dish" value="deep-dish" />
        <Radio label="Thin" value="thin" />
        <Radio label="Gluten free" value="gluten-free" />
        <Radio label="Cauliflower" value="cauliflower" />
        <Radio label="Butter - the best thing to put on bread" value="butter" />
      </RadioGroup>
    </StyledFormField>
  );
};
