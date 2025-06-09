import React from 'react';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';
import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styleOverrides = {
  formfieldInputStyles: createStyles({
    width: px2rem(200),
  }),
  radioGroupLabelTextStyles: createStyles({
    color: system.color.fg.default,
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
      <FormFieldGroup>
        <FormFieldGroup.Label>Choose Your Pizza Crust</FormFieldGroup.Label>
        <FormFieldGroup.Field>
          <FormFieldGroup.List
            as={RadioGroup}
            name="pizza-crust-custom"
            onChange={handleChange}
            cs={styleOverrides.formfieldInputStyles}
            value={value}
          >
            <RadioGroup.Label>
              <FormFieldGroup.Input as={RadioGroup.Label.Input} value="deep-dish" />
              <RadioGroup.Label.Text cs={styleOverrides.radioGroupLabelTextStyles}>
                Deep dish
              </RadioGroup.Label.Text>
            </RadioGroup.Label>
            <RadioGroup.Label>
              <FormFieldGroup.Input as={RadioGroup.Label.Input} value="gluten-free" />
              <RadioGroup.Label.Text cs={styleOverrides.radioGroupLabelTextStyles}>
                Gluten free
              </RadioGroup.Label.Text>
            </RadioGroup.Label>
            <RadioGroup.Label>
              <FormFieldGroup.Input as={RadioGroup.Label.Input} value="cauliflower" />
              <RadioGroup.Label.Text cs={styleOverrides.radioGroupLabelTextStyles}>
                Cauliflower
              </RadioGroup.Label.Text>
            </RadioGroup.Label>
          </FormFieldGroup.List>
        </FormFieldGroup.Field>
      </FormFieldGroup>
      Value selected: {value}
    </Flex>
  );
};
