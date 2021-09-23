/// <reference path="../../../../typings.d.ts" />
import React from 'react';
import withReadme from 'storybook-readme/with-readme';

import {Toast} from '@workday/canvas-kit-labs-react/toast';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react/tokens';

import {action} from '@storybook/addon-actions';

import README from '../README.md';

export default {
  title: 'Labs/Toast/React',
  decorators: [withReadme(README)],
  component: Toast,
};

export const Default = () => {
  const onClose = () => action('on close clicked');
  const actionClick = () => action('action clicked');

  return (
    <Toast>
      <Toast.Close onClose={onClose} />
      <Toast.Content>
        <Toast.Icon icon={checkIcon} iconColor={colors.greenApple400} />
        <Toast.Message>
          Your workbook was successfully processed.
          <Toast.Action onActionClick={actionClick}>Custom Action</Toast.Action>
        </Toast.Message>
      </Toast.Content>
    </Toast>
  );
};
