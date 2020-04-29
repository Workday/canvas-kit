import * as React from 'react';
import {
  defaultCanvasTheme,
  CanvasProvider,
  PartialEmotionCanvasTheme,
} from '@workday/canvas-kit-react-common';
import {object} from '@storybook/addon-knobs';

const label = 'theme';

import {makeDecorator} from '@storybook/addons';

export default makeDecorator({
  name: 'canvasProviderDecorator',
  parameterName: 'canvasProviderDecorator',
  wrapper: (storyFn, context, {parameters = {}}) => {
    const theme: PartialEmotionCanvasTheme = {
      canvas: object(label, parameters.theme || defaultCanvasTheme),
    };
    return <CanvasProvider theme={theme}>{storyFn(context)}</CanvasProvider>;
  },
});
