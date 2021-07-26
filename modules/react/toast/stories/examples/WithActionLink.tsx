import * as React from 'react';
import Toast from '../../index';

export const WithActionLink = () => {
  const handleActionClick = () => {
    console.log('action button clicked');
  };
  return (
    <Toast actionText="View more details" onActionClick={handleActionClick}>
      Your workbook was successfully processed.
    </Toast>
  );
};
