import React from 'react';
import {FormField} from '@workday/canvas-kit-preview-react/form-field';
import {Select, useSelectModel} from '@workday/canvas-kit-react/select';
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  activityStreamIcon,
  avatarIcon,
  uploadCloudIcon,
  userIcon,
} from '@workday/canvas-system-icons-web';
import {SystemIcon} from '../../../icon';

export const customOptions = [
  {id: 'Activity Stream', icon: activityStreamIcon},
  {id: 'Avatar', icon: avatarIcon},
  {id: 'Upload Cloud', icon: uploadCloudIcon},
  {id: 'User', icon: userIcon},
];

export const WithIcons = () => {
  const model = useSelectModel({
    items: customOptions,
  });
  const currentItem = model.navigation.getItem(model.state.selectedIds[0], model);
  return (
    <Flex>
      <FormField orientation="vertical" hasError>
        <FormField.Label htmlFor="contact-select">Contact</FormField.Label>
        <Select model={model}>
          <Select.Input inputStartIcon={currentItem.value.icon} id="contact-select" />
          <Select.Popup>
            <Select.Card maxHeight="200px">
              {model.state.items.length > 0 && (
                <Select.List>
                  {item => {
                    return (
                      <Select.Item aria-disabled={item.disabled ? item.disabled : undefined}>
                        <Select.Item.Icon icon={item.icon} />
                        {item.id}
                      </Select.Item>
                    );
                  }}
                </Select.List>
              )}
            </Select.Card>
          </Select.Popup>
        </Select>
      </FormField>
    </Flex>
  );
};
