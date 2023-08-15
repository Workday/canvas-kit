import React from 'react';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {SelectBase} from '@workday/canvas-kit-react/select';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {useComboboxModel} from '../../../combobox';

export interface Item<T> {
  index: number;
  id: string;
  value: T;
  /**
   * Used by components that allow jumping to an item based on typing
   */
  text?: string;
  disabled: boolean;
}

export const options = [
  {id: 'E-mail', disabled: false},
  {id: 'Phone', disabled: false},
  {id: 'Fax (disabled)', disabled: true},
  {id: 'Mail', disabled: false},
  {id: 'Mobile Phone', disabled: false},
  {
    id: 'The Ontologically Anthropocentric Sensory Immersive Simulation',
    disabled: false,
  },
];
const disabledItems = options.filter(item => item.disabled === true).map(item => item.id);

export const Basic = () => {
  const model = useComboboxModel({
    items: options,
    nonInteractiveIds: disabledItems,
  });

  return (
    <Flex>
      <FormField orientation="vertical" hasError>
        <FormField.Label htmlFor="contact-select">Contact</FormField.Label>
        <SelectBase model={model}>
          <SelectBase.Input
            id="contact-select"
            value={
              model.state.selectedIds.length > 0 ? model.state.selectedIds[0] : model.state.value
            }
          />
          <SelectBase.Popup>
            <SelectBase.Card maxHeight="200px">
              {model.state.items.length > 0 && (
                <SelectBase.List>
                  {(item: Item<T>) => {
                    return (
                      <SelectBase.Item
                        aria-disabled={item.disabled ? item.disabled : undefined}
                        data-id={item.id}
                      >
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
