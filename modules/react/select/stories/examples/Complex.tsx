import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-react/select';
import {Flex} from '@workday/canvas-kit-react/layout';

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

export const Complex = () => {
  const [value, setValue] = React.useState('');
  const [id, setId] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
    setValue(options.find(item => item.serverId === event.target.value).label);
  };

  return (
    <Flex flexDirection="column">
      <Select items={options} getId={item => item.serverId} getTextValue={item => item.label}>
        <FormField label="Contact">
          <Select.Input onChange={e => handleChange(e)} />
          <Select.Popper>
            <Select.Card>
              <Select.List>{item => <Select.Item>{item.label}</Select.Item>}</Select.List>
            </Select.Card>
          </Select.Popper>
        </FormField>
      </Select>
      <p>Id: {id}</p>
      <p>Value: {value}</p>
    </Flex>
  );
};
