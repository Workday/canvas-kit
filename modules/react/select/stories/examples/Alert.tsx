import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select, useSelectModel} from '@workday/canvas-kit-react/select';
import {Flex} from '@workday/canvas-kit-react/layout';

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

export const Alert = () => {
  const model = useSelectModel({
    items: options,
    nonInteractiveIds: disabledItems,
  });

  return (
    <Flex>
      <Select model={model}>
        <FormField
          error={FormField.ErrorType.Alert}
          hintId="contact-select"
          hintText="Please choose a form of contact"
          label="Contact"
          inputId="contact-select"
        >
          <Select.Input id="contact-select" />
          <Select.Popup>
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
          </Select.Popup>
        </FormField>
      </Select>
    </Flex>
  );
};
