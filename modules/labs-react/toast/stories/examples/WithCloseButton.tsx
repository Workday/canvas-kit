import * as React from 'react';
import {Toast, useToastModel} from '@workday/canvas-kit-labs-react/toast';

export const WithCloseButton = () => {
  const model = useToastModel();

  return (
    <Toast model={model}>
      <Toast.Content>Your workbook was successfully processed.</Toast.Content>
    </Toast>
  );
};
