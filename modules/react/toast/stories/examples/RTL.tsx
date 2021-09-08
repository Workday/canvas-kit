import * as React from 'react';
import {Toast} from '@workday/canvas-kit-react/toast';
import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react/common';

export const RTL = () => {
  const handleClose = () => {
    console.log('close button clicked');
  };
  return (
    <CanvasProvider theme={{canvas: {direction: ContentDirection.RTL}}}>
      <Toast onClose={handleClose}>Your workbook was successfully processed.</Toast>
    </CanvasProvider>
  );
};
