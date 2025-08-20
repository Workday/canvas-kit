import React from 'react';

import {Banner} from '@workday/canvas-kit-react/banner';
import {CanvasProvider, PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';
import {colors} from '@workday/canvas-kit-react/tokens';

export const ThemedAlert = () => {
  const theme: PartialEmotionCanvasTheme = {
    canvas: {
      palette: {
        alert: {
          main: colors.kiwi200,
          dark: colors.kiwi300,
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
