import {useFormik} from 'formik';
import * as React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Select, useSelectModel} from '@workday/canvas-kit-react/select';
import {
  activityStreamIcon,
  avatarIcon,
  uploadCloudIcon,
  userIcon,
} from '@workday/canvas-system-icons-web';

export const customOptionsMain = [
  {
    label: 'Dessert Person by Claire Saffitz',
    serverId: 1,
    icon: activityStreamIcon,
  },
  {
    label: 'Elements of Pizza by Ken Forkish',
    serverId: 2,
    icon: avatarIcon,
  },
  {
    label: 'Flour Water Salt Yeast by Ken Forkish',
    serverId: 3,
    icon: uploadCloudIcon,
  },
  {label: 'Mastering Pasta by Marc Verti', serverId: 4, icon: userIcon},
];

export const SelectWithFormik = () => {
  const formik = useFormik({
    initialValues: {
      selectedBook: '',
    },
    onSubmit: values => {
      // Send data to server
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      }, 0);
    },
  });

  const selectModel = useSelectModel({
    items: customOptionsMain,
    getId: item => {
      return item.serverId;
    },
    getTextValue: item => item.label,
  });

  return (
    <form onSubmit={formik.handleSubmit} action=".">
      <Flex gap="xs" flexDirection="column" alignItems="flex-start">
        <FormField orientation="vertical" alignSelf="stretch" alignItems="normal">
          <Select model={selectModel}>
            <FormField.Label>Choose a book</FormField.Label>
            <FormField.Input
              as={Select.Input}
              name="selectedBook"
              onChange={event => formik.setFieldValue('selectedBook', event.currentTarget.value)}
              value={formik.values.selectedBook}
              grow
            />
            <Select.Popper>
              <Select.Card>
                <Select.List maxHeight={200}>
                  {item => {
                    return (
                      <Select.Item data-id={item.serverId} data-text={item.label}>
                        <Select.Item.Icon icon={item.icon} />
                        {item.label}
                      </Select.Item>
                    );
                  }}
                </Select.List>
              </Select.Card>
            </Select.Popper>
          </Select>
        </FormField>
        <PrimaryButton type="submit">Submit</PrimaryButton>
      </Flex>
    </form>
  );
};
