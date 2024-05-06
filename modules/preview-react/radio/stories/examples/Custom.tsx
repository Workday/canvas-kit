import React from 'react';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {base} from '@workday/canvas-tokens-web';

const styleOverrides = {
  formfieldInputStyles: createStyles({
    width: '200px',
  }),
  radioGroupLabelTextStyles: createStyles({
    color: base.berrySmoothie400,
  }),
};

export const Custom = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };

  return (
    <Flex flexDirection="column">
      <FormField as="fieldset">
        <FormField.Label as="legend">Choose Your Pizza Crust</FormField.Label>
        <FormField.Input
          as={RadioGroup}
          name="pizza-crust-custom"
          onChange={handleChange}
          cs={styleOverrides.formfieldInputStyles}
          value={value}
        >
          <RadioGroup.Label>
            <RadioGroup.Label.Input value="deep-dish" />
            <RadioGroup.Label.Text cs={styleOverrides.radioGroupLabelTextStyles}>
              Deep dish
            </RadioGroup.Label.Text>
          </RadioGroup.Label>
          <RadioGroup.Label>
            <RadioGroup.Label.Input value="gluten-free" />
            <RadioGroup.Label.Text cs={styleOverrides.radioGroupLabelTextStyles}>
              Gluten free
            </RadioGroup.Label.Text>
          </RadioGroup.Label>
          <RadioGroup.Label>
            <RadioGroup.Label.Input value="cauliflower" />
            <RadioGroup.Label.Text cs={styleOverrides.radioGroupLabelTextStyles}>
              Cauliflower
            </RadioGroup.Label.Text>
          </RadioGroup.Label>
        </FormField.Input>
      </FormField>
      Value selected: {value}
    </Flex>
  );
};
