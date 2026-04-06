import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-react/select';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';

const parentContainerStyles = createStyles({
  flexDirection: 'column',
});

const options = [
  'E-mail',
  'Phone',
  'Fax',
  'Mail',
  'Mobile Phone',
  'The Ontologically Anthropocentric Sensory Immersive Simulation',
];

export const Caution = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Flex cs={parentContainerStyles}>
      <FormField error="caution">
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select items={options}>
            <FormField.Input as={Select.Input} onChange={e => handleChange(e)} id="alert-select" />
            <Select.Popper>
              <Select.Card>
                <Select.List>{item => <Select.Item>{item}</Select.Item>}</Select.List>
              </Select.Card>
            </Select.Popper>
            <FormField.Hint>Please choose a form of contact.</FormField.Hint>
          </Select>
        </FormField.Field>
      </FormField>
      Selected value: {value}
    </Flex>
  );
};
