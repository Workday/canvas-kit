import React from 'react';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select, useSelectModel} from '@workday/canvas-kit-react/select';
import {BodyText} from '@workday/canvas-kit-react/text';

const options = [
  {label: 'E-mail', id: 'email-1'},
  {label: 'Phone', id: 'phone-2'},
  {label: 'Fax', id: 'fax-3'},
  {label: 'Mail', id: 'mail-4'},
  {label: 'Mobile Phone', id: 'mobile-phone-5'},
];

export const HoistedModel = () => {
  const model = useSelectModel({
    items: options,
    getId: item => item.id,
    initialSelectedIds: ['fax-3'],
    getTextValue: item => item.label,
  });

  return (
    <>
      <Select model={model}>
        <FormField label="Contact">
          <Select.Input />
          <Select.Popper>
            <Select.Card>
              <Select.List>
                {item => <Select.Item data-id={item.id}>{item.label}</Select.Item>}
              </Select.List>
            </Select.Card>
          </Select.Popper>
        </FormField>
      </Select>
      <BodyText size="small">Selected Value: {model.state.selectedIds[0]}</BodyText>
      <SecondaryButton
        onClick={() => {
          model.events.select({id: 'phone-2'});
        }}
      >
        Select Phone Item
      </SecondaryButton>
    </>
  );
};
