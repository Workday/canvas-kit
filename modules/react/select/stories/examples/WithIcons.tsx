import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select, useSelectModel} from '@workday/canvas-kit-react/select';
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  activityStreamIcon,
  avatarIcon,
  uploadCloudIcon,
  userIcon,
} from '@workday/canvas-system-icons-web';

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
      <Select model={model}>
        <FormField label="Contact" inputId="with-icons-select">
          <Select.Input inputStartIcon={currentItem.value.icon} id="with-icons-select" />
          <Select.Popper>
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
          </Select.Popper>
        </FormField>
      </Select>
    </Flex>
  );
};
