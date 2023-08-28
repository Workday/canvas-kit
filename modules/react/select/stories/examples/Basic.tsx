import React from 'react';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {Select, useSelectModel} from '@workday/canvas-kit-react/select';
import {Flex} from '@workday/canvas-kit-react/layout';
import {multiSelectionManager} from '../../../collection';

export const options = [
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

export const Basic = () => {
  const model = useSelectModel({
    items: options,
    nonInteractiveIds: disabledItems,
  });

  return (
    <Flex>
      <FormField orientation="vertical" hasError>
        <FormField.Label htmlFor="contact-select">Contact</FormField.Label>
        <Select model={model}>
          <Select.Input id="contact-select" />
          <Select.Popper>
            <Select.Card maxHeight="200px">
              {model.state.items.length > 0 && (
                <Select.List>
                  {item => {
                    return (
                      <Select.Item
                        model={model}
                        aria-disabled={item.disabled ? item.disabled : undefined}
                      >
                        {item.id}
                      </Select.Item>
                    );
                  }}
                </Select.List>
              )}
            </Select.Card>
          </Select.Popper>
        </Select>
      </FormField>
    </Flex>
  );
};
