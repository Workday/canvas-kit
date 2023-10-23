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

const customOptions = [
  {text: 'Activity Stream', id: 'activity-stream', icon: activityStreamIcon},
  {text: 'Avatar', id: 'avatar', icon: avatarIcon},
  {text: 'Upload Cloud', id: 'upload-cloud', icon: uploadCloudIcon},
  {text: 'User', id: 'user', icon: userIcon},
];

export const WithIcons = () => {
  const model = useSelectModel({
    items: customOptions,
  });
  const selectedItem = model.navigation.getItem(model.state.selectedIds[0], model);
  return (
    <Flex>
      <Select model={model}>
        <FormField label="Contact">
          <Select.Input width="300px" inputStartIcon={selectedItem.value.icon} />
          <Select.Popper>
            <Select.Card maxHeight="200px">
              {model.state.items.length > 0 && (
                <Select.List>
                  {item => (
                    <Select.Item data-id={item.id}>
                      <Select.Item.Icon icon={item.icon} />
                      {item.text}
                    </Select.Item>
                  )}
                </Select.List>
              )}
            </Select.Card>
          </Select.Popper>
        </FormField>
      </Select>
    </Flex>
  );
};
