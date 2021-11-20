import React from 'react';
import {LoadingAnimation} from '@workday/canvas-kit-react/loading-animation';
import {CanvasProvider, ContentDirection} from '@workday/canvas-kit-react/common';

export const RTL = () => {
  const theme = {
    canvas: {
      direction: ContentDirection.RTL,
    },
  };
  return (
    <CanvasProvider theme={theme}>
      <LoadingAnimation />
    </CanvasProvider>
  );
};
