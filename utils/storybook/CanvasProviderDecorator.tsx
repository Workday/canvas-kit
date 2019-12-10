import * as React from 'react';
import {
  CanvasProvider,
  defaultCanvasTheme,
  createCanvasTheme,
} from '@workday/canvas-kit-labs-react-core';
import {object} from '@storybook/addon-knobs';

const label = 'theme';

export default (storyFn: () => React.ReactNode) => (
  <CanvasProvider theme={createCanvasTheme(object(label, defaultCanvasTheme))}>
    {storyFn()}
  </CanvasProvider>
);
