import * as React from 'react';
import {
  defaultCanvasTheme,
  CanvasProvider,
  PartialEmotionCanvasTheme,
} from '@workday/canvas-kit-react/common';

import {makeDecorator, useArgs} from '@storybook/preview-api';

export default makeDecorator({
  name: 'canvasProviderDecorator',
  parameterName: 'canvasProviderDecorator',
  wrapper: (storyFn, context, {parameters = {}}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [args] = useArgs();
    const theme: PartialEmotionCanvasTheme = {
      canvas: parameters.theme || args.theme || defaultCanvasTheme,
    };
    return <CanvasProvider theme={theme}>{storyFn(context) as React.ReactNode}</CanvasProvider>;
  },
});
