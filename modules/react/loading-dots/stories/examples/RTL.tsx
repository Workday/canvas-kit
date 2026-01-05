import React from 'react';

import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {LoadingDots} from '@workday/canvas-kit-react/loading-dots';

export const RTL = () => {
  return (
    <CanvasProvider dir="rtl">
      <LoadingDots />
    </CanvasProvider>
  );
};
