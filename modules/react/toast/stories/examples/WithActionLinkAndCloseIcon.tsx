import * as React from 'react';
import Toast from '../../index';

export const WithActionLinkAndCloseIcon = () => {
  const handleActionClick = () => {
    console.log('action button clicked');
  };
  const handleClose = () => {
    console.log('close button clicked');
  };
  return (
    <Toast actionText="View more details" onActionClick={handleActionClick} onClose={handleClose}>
      Your workbook was successfully processed.
    </Toast>
  );
};
