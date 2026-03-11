import {makeDecorator} from '@storybook/preview-api';
import * as React from 'react';

import {
  CanvasProvider,
  PartialEmotionCanvasTheme,
  defaultCanvasTheme,
} from '@workday/canvas-kit-react/common';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const storyStyles = createStyles({
  padding: system.padding.md,
});

export default makeDecorator({
  name: 'canvasProviderDecorator',
  parameterName: 'canvasProviderDecorator',
  wrapper: (storyFn, context, {parameters = {}}) => {
    const theme: PartialEmotionCanvasTheme = {
      canvas: parameters.theme || defaultCanvasTheme,
    };
    return (
      <CanvasProvider theme={theme} className={storyStyles}>
        {storyFn(context) as React.ReactNode}
      </CanvasProvider>
    );
  },
});
