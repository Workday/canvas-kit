import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-react/select';
import {Flex} from '@workday/canvas-kit-react/layout';
import {useSelectModel} from '../../lib/hooks';

const options = [
  {id: 'E-mail', data: {textValue: 'foo'}},
  {id: 'Phone'},
  {id: 'Fax (disabled)', disabled: true},
  {id: 'Mail'},
  {id: 'Mobile Phone'},
  {
    id: 'The Ontologically Anthropocentric Sensory Immersive Simulation',
    disabled: false,
  },
];

const disabledItems = options.filter(item => item.disabled === true).map(item => item.id);

export const ControlledVsUncontrolled = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const model = useSelectModel({
    items: options,
    nonInteractiveIds: disabledItems,
  });

  return (
    <Flex flexDirection="row" gap="m">
      <Select items={options} nonInteractiveIds={disabledItems}>
        <FormField label="Controlled" inputId="contact-select">
          <Select.Input
            width="200px"
            value={value}
            onChange={e => handleChange(e)}
            id="contact-select"
          />
          <Select.Popper>
            <Select.Card maxHeight="200px">
              <Select.List>
                {item => {
                  return (
                    <Select.Item aria-disabled={item.disabled ? item.disabled : undefined}>
                      {item.id}
                    </Select.Item>
                  );
                }}
              </Select.List>
            </Select.Card>
          </Select.Popper>
        </FormField>
      </Select>
      <Select model={model}>
        <FormField label="Uncontrolled" inputId="contact-select">
          <Select.Input width="200px" id="contact-select" />
          <Select.Popper>
            <Select.Card maxHeight="200px">
              <Select.List>
                {item => {
                  return (
                    <Select.Item aria-disabled={item.disabled ? item.disabled : undefined}>
                      {item.id}
                    </Select.Item>
                  );
                }}
              </Select.List>
            </Select.Card>
          </Select.Popper>
        </FormField>
      </Select>
    </Flex>
  );
};
