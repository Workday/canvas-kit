import React from 'react';
import {LoadingSparkles} from '@workday/canvas-kit-preview-react/loading-sparkles';
import {CanvasProvider} from '@workday/canvas-kit-react/common';

export const RTL = () => {
  return (
    <CanvasProvider dir="rtl">
      <LoadingSparkles />
    </CanvasProvider>
  );
};
