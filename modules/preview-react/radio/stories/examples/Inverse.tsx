import React from 'react';
import {Box} from '@workday/canvas-kit-react/layout';
import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
import {FormField, FormFieldGroup} from '@workday/canvas-kit-preview-react/form-field';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styleOverrides = {
  containerStyles: createStyles({
    backgroundColor: system.color.bg.primary.default,
    padding: system.space.x4,
  }),
  formFieldStyles: createStyles({
    legend: {
      color: system.color.text.inverse,
    },
  }),
};

export const Inverse = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };

  return (
    <Box cs={styleOverrides.containerStyles}>
      <FormFieldGroup cs={styleOverrides.formFieldStyles}>
        <FormFieldGroup.Legend>Choose Your Pizza Crust</FormFieldGroup.Legend>
        <FormFieldGroup.List
          as={RadioGroup}
          name="crust-inverse"
          onChange={handleChange}
          value={value}
        >
          <FormFieldGroup.Input as={RadioGroup.RadioButton} variant="inverse" value="deep-dish">
            Deep dish
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} variant="inverse" value="thin">
            Thin
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} variant="inverse" value="gluten-free">
            Gluten free
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} variant="inverse" value="cauliflower">
            Cauliflower
          </FormFieldGroup.Input>
        </FormFieldGroup.List>
      </FormFieldGroup>
    </Box>
  );
};
