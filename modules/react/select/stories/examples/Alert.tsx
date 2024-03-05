import React from 'react';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {Select} from '@workday/canvas-kit-react/select';
import {Flex} from '@workday/canvas-kit-react/layout';

const options = [
  'E-mail',
  'Phone',
  'Fax',
  'Mail',
  'Mobile Phone',
  'The Ontologically Anthropocentric Sensory Immersive Simulation',
];

export const Alert = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Flex flexDirection="column">
      <Select items={options}>
        <FormField error="alert">
          <FormField.Label>Contact</FormField.Label>
          <FormField.Input as={Select.Input} onChange={e => handleChange(e)} id="alert-select" />
          <Select.Popper>
            <Select.Card>
              <Select.List>{item => <Select.Item>{item}</Select.Item>}</Select.List>
            </Select.Card>
          </Select.Popper>
          <FormField.Hint>Please choose a form of contact.</FormField.Hint>
        </FormField>
      </Select>
      Selected value: {value}
    </Flex>
  );
};
