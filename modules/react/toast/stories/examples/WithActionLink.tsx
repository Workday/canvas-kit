import * as React from 'react';
import {Toast} from '@workday/canvas-kit-react/toast';

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
