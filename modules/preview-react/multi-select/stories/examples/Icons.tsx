import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {
  mediaPauseIcon,
  mediaPlayIcon,
  mediaTopicsIcon,
  skipIcon,
  previousIcon,
} from '@workday/canvas-system-icons-web';

import {MultiSelect} from '@workday/canvas-kit-preview-react/multi-select';

const items = [
  {id: '1', text: 'Pause', icon: mediaPauseIcon},
  {id: '2', text: 'Play', icon: mediaPlayIcon},
  {id: '3', text: 'Skip', icon: skipIcon},
  {id: '4', text: 'Previous', icon: previousIcon},
];

export const Icons = () => {
  return (
    <MultiSelect items={items}>
      <FormField orientation="horizontalStart">
        <FormField.Label>Controls</FormField.Label>
        <FormField.Input
          as={MultiSelect.Input}
          placeholder="Select Multiple"
          removeLabel="Remove"
        />
        <MultiSelect.Popper>
          <MultiSelect.Card>
            <MultiSelect.List>
              {item => (
                <MultiSelect.Item data-id={item.id}>
                  <MultiSelect.Item.Icon icon={item.icon} />
                  <MultiSelect.Item.Text>{item.text}</MultiSelect.Item.Text>
                  <MultiSelect.Item.Icon icon={mediaTopicsIcon} />
                </MultiSelect.Item>
              )}
            </MultiSelect.List>
          </MultiSelect.Card>
        </MultiSelect.Popper>
      </FormField>
    </MultiSelect>
  );
};
