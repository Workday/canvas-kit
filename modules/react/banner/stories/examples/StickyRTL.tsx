import React from 'react';

import {Box, useThemeRTL} from '@workday/canvas-kit-labs-react/common';
import {
  CanvasProvider,
  ContentDirection,
  PartialEmotionCanvasTheme,
  styled,
} from '@workday/canvas-kit-react/common';
import {Banner} from '@workday/canvas-kit-react/banner';

const theme: PartialEmotionCanvasTheme = {
  canvas: {
    direction: ContentDirection.RTL,
  },
};

const StyledStickyBanner = styled(Banner)({
  position: 'absolute',
  left: 0,
});

export const StickyRTL = () => {
  const {themeRTL} = useThemeRTL();
  return (
    <CanvasProvider theme={theme}>
      <Box height={64}>
        <StyledStickyBanner isSticky={true}>
          <Banner.Icon />
          <Banner.Label>3 אזהרות</Banner.Label>
          <Banner.ActionText />
        </StyledStickyBanner>
      </Box>
    </CanvasProvider>
  );
};
