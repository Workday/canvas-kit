import React from 'react';
import {Box} from '@workday/canvas-kit-react/layout';
import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {styled, StyledType} from '@workday/canvas-kit-react/common';
import {colors} from '@workday/canvas-kit-react/tokens';

const StyledFormField = styled(FormField)<StyledType>({
  legend: {
    color: colors.frenchVanilla100,
  },
});

export const Inverse = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };

  return (
    <Box backgroundColor="blueberry400" padding="s">
      <StyledFormField as="fieldset">
        <FormField.Label as="legend">Choose Your Pizza Crust</FormField.Label>
        <FormField.Input as={RadioGroup} name="crust-inverse" onChange={handleChange} value={value}>
          <RadioGroup.RadioButton variant="inverse" value="deep-dish">
            Deep dish
          </RadioGroup.RadioButton>
          <RadioGroup.RadioButton variant="inverse" value="thin">
            Thin
          </RadioGroup.RadioButton>
          <RadioGroup.RadioButton variant="inverse" value="gluten-free">
            Gluten free
          </RadioGroup.RadioButton>
          <RadioGroup.RadioButton variant="inverse" value="cauliflower">
            Cauliflower
          </RadioGroup.RadioButton>
        </FormField.Input>
      </StyledFormField>
    </Box>
  );
};
