import React from 'react';

import {StyledRadioButton} from '@workday/canvas-kit-preview-react/radio';
import {FormFieldGroup} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';

export const StandaloneRadio = () => {
  const [value, setValue] = React.useState<string | number>('deep-dish');

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.currentTarget;
    if (target instanceof HTMLInputElement) {
      setValue(target.value);
    }
  };

  return (
    <Flex flexDirection="column">
      <FormFieldGroup as="fieldset">
        <FormFieldGroup.Label as="legend">Choose Your Pizza Crust</FormFieldGroup.Label>
        <Flex gap="m">
          <Flex as="label" gap="xs">
            <FormFieldGroup.Input
              as={StyledRadioButton}
              onChange={handleChange}
              value="deep-dish"
              name="pizza-crust-standalone"
              checked={value === 'deep-dish'}
            />
            Deep dish
          </Flex>
          <Flex as="label" gap="xs">
            <FormFieldGroup.Input
              as={StyledRadioButton}
              onChange={handleChange}
              value="gluten-free"
              checked={value === 'gluten-free'}
              name="pizza-crust-standalone"
            />
            Gluten free
          </Flex>
        </Flex>
      </FormFieldGroup>
      Value selected: {value}
    </Flex>
  );
};
