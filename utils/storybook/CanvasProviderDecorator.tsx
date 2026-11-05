import {makeDecorator} from '@storybook/preview-api';
import * as React from 'react';

import {CanvasProvider, PartialCanvasTheme} from '@workday/canvas-kit-react/common';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const storyStyles = createStyles({
  padding: system.padding.md,
});

export default makeDecorator({
  name: 'canvasProviderDecorator',
  parameterName: 'canvasProviderDecorator',
  wrapper: (storyFn, context, {parameters = {}}) => (
    <CanvasProvider
      {...(parameters.theme ? {theme: {canvas: parameters.theme as PartialCanvasTheme}} : {})}
      className={storyStyles}
    >
      {storyFn(context) as React.ReactNode}
    </CanvasProvider>
  ),
});
