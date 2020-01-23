import * as React from 'react';
import {
  CanvasProvider,
  defaultCanvasTheme,
  createCanvasTheme,
  CanvasTheme,
} from '@workday/canvas-kit-labs-react-core';
import {object} from '@storybook/addon-knobs';

const label = 'theme';

export default (storyFn: () => React.ReactNode, customTheme?: CanvasTheme) => (
  <CanvasProvider
    theme={customTheme ? customTheme : createCanvasTheme(object(label, defaultCanvasTheme))}
  >
    {storyFn()}
  </CanvasProvider>
);
