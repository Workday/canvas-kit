import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-react/select';
import {Flex} from '@workday/canvas-kit-react/layout';

const options = [
  {id: 'E-mail'},
  {id: 'Phone'},
  {id: 'Fax (disabled)', disabled: true},
  {id: 'Mail'},
  {id: 'Mobile Phone', disabled: true},
  {
    id: 'The Ontologically Anthropocentric Sensory Immersive Simulation',
  },
];

const disabledItems = options.filter(item => item.disabled === true).map(item => item.id);

export const DisabledOptions = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Flex flexDirection="column">
      <Select items={options} nonInteractiveIds={disabledItems}>
        <FormField label="Contact">
          <Select.Input onChange={e => handleChange(e)} />
          <Select.Popper>
            <Select.Card>
              <Select.List>
                {item => <Select.Item aria-disabled={item.disabled}>{item.id}</Select.Item>}
              </Select.List>
            </Select.Card>
          </Select.Popper>
        </FormField>
      </Select>
      Selected Value: {value}
    </Flex>
  );
};
