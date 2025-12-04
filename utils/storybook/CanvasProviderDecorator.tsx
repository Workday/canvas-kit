import {makeDecorator} from '@storybook/preview-api';
import * as React from 'react';

import {
  CanvasProvider,
  PartialEmotionCanvasTheme,
  defaultCanvasTheme,
} from '@workday/canvas-kit-react/common';

export default makeDecorator({
  name: 'canvasProviderDecorator',
  parameterName: 'canvasProviderDecorator',
  wrapper: (storyFn, context, {parameters = {}}) => {
    const theme: PartialEmotionCanvasTheme = {
      canvas: parameters.theme || defaultCanvasTheme,
    };
    return <CanvasProvider theme={theme}>{storyFn(context) as React.ReactNode}</CanvasProvider>;
  },
});
