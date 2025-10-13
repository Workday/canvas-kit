import React from 'react';

import {Banner} from '@workday/canvas-kit-react/banner';
import {CanvasProvider, PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';
import {base} from '@workday/canvas-tokens-web';

export const ThemedAlert = () => {
  const theme: PartialEmotionCanvasTheme = {
    canvas: {
      palette: {
        alert: {
          main: base.orange600,
          dark: base.orange800,
        },
      },
    },
  };

  return (
    <CanvasProvider theme={theme}>
      <Banner>
        <Banner.Icon />
        <Banner.Label>3 Items</Banner.Label>
        <Banner.ActionText />
      </Banner>
    </CanvasProvider>
  );
};
