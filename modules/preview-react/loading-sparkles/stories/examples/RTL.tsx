import React from 'react';
import {LoadingSparkles} from '@workday/canvas-kit-preview-react/loading-sparkles';
import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react/common';

export const RTL = () => {
  const theme = {
    canvas: {
      direction: ContentDirection.RTL,
    },
  };
  return (
    <CanvasProvider theme={theme}>
      <LoadingSparkles />
    </CanvasProvider>
  );
};
