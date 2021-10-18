/// <reference path="../../../../typings.d.ts" />
import React from 'react';
import withReadme from 'storybook-readme/with-readme';

import {Toast, useToastModel} from '@workday/canvas-kit-labs-react/toast';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react/tokens';

import README from '../README.md';

export default {
  title: 'Labs/Toast/React',
  decorators: [withReadme(README)],
  component: Toast,
};

export const Default = () => {
  const model = useToastModel({
    onClose: () => console.log('on close...'),
  });

  const actionClick = () => console.log('action clicked...');

  return (
    <Toast model={model}>
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
