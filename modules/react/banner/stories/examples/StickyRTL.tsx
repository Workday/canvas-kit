import React from 'react';

import {Banner} from '@workday/canvas-kit-react/banner';
import {CanvasProvider, styled} from '@workday/canvas-kit-react/common';
import {Box} from '@workday/canvas-kit-react/layout';

const StyledStickyBanner = styled(Banner)({
  position: 'absolute',
  right: 0,
});

export const StickyRTL = () => {
  return (
    <CanvasProvider dir="rtl">
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
