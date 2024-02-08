import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-react/select';
import {Flex} from '@workday/canvas-kit-react/layout';

const options = [
  'E-mail',
  'Phone',
  'Fax (disabled)',
  'Mail',
  'Mobile Phone',
  'The Ontologically Anthropocentric Sensory Immersive Simulation',
];

export const Error = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Flex flexDirection="column">
      <Select items={options} nonInteractiveIds={['Fax (disabled)']}>
        <FormField
          error={FormField.ErrorType.Error}
          hintText="Fax is disabled. Please choose a different option."
          label="Contact"
        >
          <Select.Input onChange={e => handleChange(e)} />
          <Select.Popper>
            <Select.Card>
              <Select.List>
                {item => (
                  <Select.Item aria-disabled={item === 'Fax (disabled)' ? true : undefined}>
                    {item}
                  </Select.Item>
                )}
              </Select.List>
            </Select.Card>
          </Select.Popper>
        </FormField>
      </Select>
      Selected Value: {value}
    </Flex>
  );
};
