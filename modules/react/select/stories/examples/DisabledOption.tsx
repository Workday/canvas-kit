import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select, useSelectModel} from '@workday/canvas-kit-react/select';
import {Flex} from '@workday/canvas-kit-react/layout';

export const options = [
  {id: 'E-mail', data: {textValue: 'foo'}},
  {id: 'Phone'},
  {id: 'Fax (disabled)', disabled: true},
  {id: 'Mail'},
  {id: 'Mobile Phone', disabled: true},
  {
    id: 'The Ontologically Anthropocentric Sensory Immersive Simulation',
    disabled: false,
  },
];

const disabledItems = options.filter(item => item.disabled === true).map(item => item.id);

export const DisabledOption = () => {
  const model = useSelectModel({
    items: options,
    nonInteractiveIds: disabledItems,
  });

  return (
    <Flex>
      <Select model={model}>
        <FormField label="Contact" inputId="contact-select">
          <Select.Input id="contact-select" />
          <Select.Popper>
            <Select.Card maxHeight="200px">
              {model.state.items.length > 0 && (
                <Select.List>
                  {item => {
                    return (
                      <Select.Item aria-disabled={item.disabled ? item.disabled : undefined}>
                        {item.id}
                      </Select.Item>
                    );
                  }}
                </Select.List>
              )}
            </Select.Card>
          </Select.Popper>
        </FormField>
      </Select>
    </Flex>
  );
};
