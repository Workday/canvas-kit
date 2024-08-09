import React from 'react';
import {FormFieldGroup} from '@workday/canvas-kit-preview-react/form-field';
import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';

const formfieldInputStyles = createStyles({
  width: px2rem(200),
});

export const Basic = () => {
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
        <FormFieldGroup.Legend>Choose Your Pizza Crust</FormFieldGroup.Legend>
        <FormFieldGroup.List
          cs={formfieldInputStyles}
          as={RadioGroup}
          name="pizza-crust"
          onChange={handleChange}
          value={value}
        >
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="deep-dish">
            Deep dish
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="thin">
            Thin
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="gluten-free">
            Gluten free
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="cauliflower">
            Cauliflower
          </FormFieldGroup.Input>
          <FormFieldGroup.Input as={RadioGroup.RadioButton} value="custom">
            Butter - the best thing to put on bread
          </FormFieldGroup.Input>
        </FormFieldGroup.List>
      </FormFieldGroup>
      Value selected: {value}
    </Flex>
  );
};
