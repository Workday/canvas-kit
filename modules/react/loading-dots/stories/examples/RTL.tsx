import React from 'react';
import {LoadingDots} from '@workday/canvas-kit-react/loading-dots';
import {CanvasProvider} from '@workday/canvas-kit-react/common';

export const RTL = () => {
  return (
    <CanvasProvider dir="rtl">
      <LoadingDots />
    </CanvasProvider>
  );
};
