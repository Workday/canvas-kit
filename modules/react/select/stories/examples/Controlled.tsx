import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-react/select';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles, cssVar} from '@workday/canvas-kit-styling';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {system} from '@workday/canvas-tokens-web';

const parentContainerStyles = createStyles({
  flexDirection: 'column',
});

const options = [
  {serverId: 'email', label: 'E-mail'},
  {serverId: 'phone', label: 'Phone'},
  {serverId: 'fax', label: 'Fax'},
  {serverId: 'mail', label: 'Mail'},
  {serverId: 'mobile', label: 'Mobile Phone'},
  {
    serverId: 'oasis',
    label: 'The Ontologically Anthropocentric Sensory Immersive Simulation',
  },
];

export const Controlled = () => {
  const [value, setValue] = React.useState('');
  const [label, setLabel] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
    setLabel(options.find(item => item.serverId === event.currentTarget.value)?.label || '');
  };

  return (
    <Flex cs={parentContainerStyles}>
      <FormField>
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select items={options} getId={item => item.serverId} getTextValue={item => item.label}>
            <FormField.Input
              as={Select.Input}
              onChange={handleChange}
              value={value}
              name="contact"
            />
            <Select.Popper>
              <Select.Card>
                <Select.List>{item => <Select.Item>{item.label}</Select.Item>}</Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField.Field>
      </FormField>
      <p>Id: {value}</p>
      <p>Label: {label}</p>
      <Flex cs={{gap: cssVar(system.space.x4)}}>
        <SecondaryButton
          onClick={e => {
            setValue('fax');
          }}
        >
          Set to "Fax"
        </SecondaryButton>
        <SecondaryButton
          onClick={e => {
            setValue('');
          }}
        >
          Clear
        </SecondaryButton>
      </Flex>
    </Flex>
  );
};
