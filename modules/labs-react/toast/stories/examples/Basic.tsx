import React from 'react';

import {Toast, useToastModel} from '@workday/canvas-kit-labs-react/toast';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react/tokens';

export const Basic = () => {
  const model = useToastModel({
    id: '12df5',
    mode: 'dialog',
  });
  return (
    <Toast model={model}>
      <Toast.Icon icon={checkIcon} color={colors.greenApple400} />
      <Toast.Body>
        <Toast.Message>Your workbook was successfully processed.</Toast.Message>
      </Toast.Body>
    </Toast>
  );
};
