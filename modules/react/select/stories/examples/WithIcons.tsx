import React from 'react';

import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Select, useSelectModel} from '@workday/canvas-kit-react/select';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {
  activityStreamIcon,
  avatarIcon,
  uploadCloudIcon,
  userIcon,
} from '@workday/canvas-system-icons-web';

const styleOverrides = {
  formfieldInputStyles: createStyles({
    width: px2rem(300),
  }),
  selectCardStyles: createStyles({
    maxHeight: px2rem(200),
  }),
};

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
      <FormField>
        <FormField.Label>Contact</FormField.Label>
        <FormField.Field>
          <Select model={model}>
            <FormField.Input
              as={Select.Input}
              cs={styleOverrides.formfieldInputStyles}
              inputStartIcon={selectedItem?.value.icon}
            />
            <Select.Popper>
              <Select.Card cs={styleOverrides.selectCardStyles}>
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
          </Select>
        </FormField.Field>
      </FormField>
    </Flex>
  );
};
