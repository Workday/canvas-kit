import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {StyledRadioButton} from '@workday/canvas-kit-preview-react/radio';
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
      <FormField label="Choose Your Pizza Crust" useFieldset={true}>
        <Flex gap="m">
          <Flex as="label" gap="xs">
            <StyledRadioButton
              onChange={handleChange}
              value="deep-dish"
              name="pizza-crust-standalone"
              checked={value === 'deep-dish'}
            />
            Deep dish
          </Flex>
          <Flex as="label" gap="xs">
            <StyledRadioButton
              onChange={handleChange}
              value="gluten-free"
              checked={value === 'gluten-free'}
              name="pizza-crust-standalone"
            />
            Gluten free
          </Flex>
        </Flex>
      </FormField>
      Value selected: {value}
    </Flex>
  );
};
