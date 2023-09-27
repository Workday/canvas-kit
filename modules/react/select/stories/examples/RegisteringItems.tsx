import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-react/select';
import {Flex} from '@workday/canvas-kit-react/layout';
import {useSelectModel} from '../../lib/hooks';

const options = [
  {id: 'E-mail'},
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

export const RegisteringItems = () => {
  const model = useSelectModel({
    items: options,
    nonInteractiveIds: disabledItems,
  });

  return (
    <Flex gap="s">
      <Flex flexDirection="column">
        <Select model={model}>
          <FormField label="Contact" inputId="dyamic-select-object">
            <Select.Input id="dyamic-select-object" />
            <Select.Popper>
              <Select.Card>
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
      <Flex flexDirection="column">
        <Select items={['Pizza', 'Chocolate', 'Cheeseburgers']}>
          <FormField label="Contact" inputId="dyamic-select-string">
            <Select.Input id="dyamic-select-string" />
            <Select.Popper>
              <Select.Card maxHeight="200px">
                <Select.List>
                  {item => {
                    return <Select.Item>{item}</Select.Item>;
                  }}
                </Select.List>
              </Select.Card>
            </Select.Popper>
          </FormField>
        </Select>
      </Flex>
    </Flex>
  );
};
