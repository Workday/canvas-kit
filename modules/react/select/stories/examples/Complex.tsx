import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-react/select';
import {Flex} from '@workday/canvas-kit-react/layout';

const options = [
  {id: 'email', text: 'E-mail'},
  {id: 'phone', text: 'Phone'},
  {id: 'fax', text: 'Fax'},
  {id: 'mail', text: 'Mail'},
  {id: 'mobile', text: 'Mobile Phone'},
  {
    id: 'oasis',
    text: 'The Ontologically Anthropocentric Sensory Immersive Simulation',
  },
];

export const Complex = () => {
  const [value, setValue] = React.useState('');
  const [id, setId] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSelect = ({id}: {id: string}) => {
    setId(id);
  };

  return (
    <Flex flexDirection="column">
      <Select items={options} onSelect={handleSelect}>
        <FormField label="Contact">
          <Select.Input onChange={e => handleChange(e)} />
          <Select.Popper>
            <Select.Card>
              <Select.List>
                {item => <Select.Item data-id={item.id}>{item.text}</Select.Item>}
              </Select.List>
            </Select.Card>
          </Select.Popper>
        </FormField>
      </Select>
      <p>Id: {id}</p>
      <p>Value: {value}</p>
    </Flex>
  );
};
