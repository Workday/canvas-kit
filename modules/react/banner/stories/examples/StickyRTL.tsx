/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from 'react';

import {CSSProperties} from '@workday/canvas-kit-react/tokens';
import {Box, useThemeRTL} from '@workday/canvas-kit-labs-react/common';
import {
  CanvasProvider,
  ContentDirection,
  PartialEmotionCanvasTheme,
} from '@workday/canvas-kit-react/common';
import {Banner} from '@workday/canvas-kit-react/banner';

const styles: CSSProperties = {
  position: 'absolute',
  left: 0,
};

const theme: PartialEmotionCanvasTheme = {
  canvas: {
    direction: ContentDirection.RTL,
  },
};

export const StickyRTL = () => {
  const {themeRTL} = useThemeRTL();
  return (
    <CanvasProvider theme={theme}>
      <Box height={64}>
        <Banner isSticky={true} css={styles}>
          <Banner.Icon />
          <Banner.Label>3 אזהרות</Banner.Label>
          <Banner.ActionText />
        </Banner>
      </Box>
    </CanvasProvider>
  );
};
