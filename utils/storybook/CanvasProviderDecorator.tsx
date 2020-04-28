import * as React from 'react';
import {
  defaultCanvasTheme,
  createCanvasTheme,
  CanvasProvider,
} from '@workday/canvas-kit-react-common';
import {object} from '@storybook/addon-knobs';

const label = 'theme';

import {makeDecorator} from '@storybook/addons';

export default makeDecorator({
  name: 'canvasProviderDecorator',
  parameterName: 'canvasProviderDecorator',
  wrapper: (storyFn, context, {parameters = {}}) => {
    return (
      <CanvasProvider
        theme={createCanvasTheme(object(label, parameters.theme || defaultCanvasTheme))}
      >
        {storyFn(context)}
      </CanvasProvider>
    );
  },
});
