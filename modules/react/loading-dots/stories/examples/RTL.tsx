import React from 'react';
import {LoadingDots} from '@workday/canvas-kit-react/loading-dots';
import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react/common';

export const RTL = () => {
  const theme = {
    canvas: {
      direction: ContentDirection.RTL,
    },
  };
  return (
    <CanvasProvider theme={theme}>
      <LoadingDots />
    </CanvasProvider>
  );
};
