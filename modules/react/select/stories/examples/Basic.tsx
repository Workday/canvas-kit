import React from 'react';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {SelectBase, useSelectModel} from '@workday/canvas-kit-react/select';
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

export const options2 = ['Foo', 'Bar', 'Baz'];
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
        <SelectBase model={model}>
          <SelectBase.Input id="contact-select" />
          <SelectBase.Popup>
            <SelectBase.Card maxHeight="200px">
              {model.state.items.length > 0 && (
                <SelectBase.List>
                  {item => {
                    return (
                      <SelectBase.Item aria-disabled={item.disabled ? item.disabled : undefined}>
                        {item.id}
                      </SelectBase.Item>
                    );
                  }}
                </SelectBase.List>
              )}
            </SelectBase.Card>
          </SelectBase.Popup>
        </SelectBase>
      </FormField>
    </Flex>
  );
};
