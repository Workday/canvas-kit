import * as React from 'react';
import {
  CanvasProvider,
  defaultCanvasTheme,
  createCanvasTheme,
} from '@workday/canvas-kit-labs-react-core';
import {object} from '@storybook/addon-knobs';
import {makeDecorator} from '@storybook/addons';

const label = 'theme';

export default makeDecorator({
  name: 'withCanvasProviderDecorator',
  parameterName: 'canvasProviderDecorator',
  wrapper: (storyFn, context, {parameters}) => {
    return (
      <CanvasProvider
        includeInputProvider={parameters ? parameters.disabled : undefined}
        theme={createCanvasTheme(object(label, defaultCanvasTheme))}
      >
        {storyFn(context)}
      </CanvasProvider>
    );
  },
});
