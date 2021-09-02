import * as React from 'react';
import {Toast} from '@workday/canvas-kit-react/toast';

export const WithCloseButton = () => {
  const handleClose = () => {
    console.log('close button clicked');
  };
  return <Toast onClose={handleClose}>Your workbook was successfully processed.</Toast>;
};
