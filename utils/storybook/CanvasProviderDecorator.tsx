import * as React from 'react';
import {
  defaultCanvasTheme,
  CanvasProvider,
  PartialEmotionCanvasTheme,
} from '@workday/canvas-kit-react/common';
import {useArgs} from '@storybook/client-api';

import {makeDecorator} from '@storybook/addons';

export default makeDecorator({
  name: 'canvasProviderDecorator',
  parameterName: 'canvasProviderDecorator',
  wrapper: (storyFn, context, {parameters = {}}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [args] = useArgs();
    const theme: PartialEmotionCanvasTheme = {
      canvas: parameters.theme || args.theme || defaultCanvasTheme,
    };
    return <CanvasProvider theme={theme}>{storyFn(context)}</CanvasProvider>;
  },
});
