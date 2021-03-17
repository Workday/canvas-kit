import * as React from 'react';
import Toast from '../../index';

export const WithCloseButton = () => {
  const handleClose = () => {
    console.log('close button clicked');
  };
  return <Toast onClose={handleClose}>Your workbook was successfully processed.</Toast>;
};
