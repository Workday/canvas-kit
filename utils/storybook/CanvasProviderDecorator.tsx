import * as React from 'react';
import {
  defaultCanvasTheme,
  CanvasProvider,
  PartialEmotionCanvasTheme,
} from '@workday/canvas-kit-react/common';

import {makeDecorator} from '@storybook/preview-api';

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
