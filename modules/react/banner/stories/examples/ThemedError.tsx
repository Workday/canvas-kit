import React from 'react';

import {Banner} from '@workday/canvas-kit-react/banner';
import {CanvasProvider, PartialEmotionCanvasTheme} from '@workday/canvas-kit-react/common';
import {colors} from '@workday/canvas-kit-react/tokens';

export const ThemedError = () => {
  const theme: PartialEmotionCanvasTheme = {
    canvas: {
      palette: {
        error: {
          main: colors.islandPunch500,
          dark: colors.islandPunch600,
          contrast: colors.berrySmoothie100,
        },
      },
    },
  };

  return (
    <CanvasProvider theme={theme}>
      <Banner hasError={true}>
        <Banner.Icon />
        <Banner.Label>3 Items</Banner.Label>
        <Banner.Action />
      </Banner>
    </CanvasProvider>
  );
};
