/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/core';
import React from 'react';

import {CSSProperties} from '@workday/canvas-kit-react/tokens';
import {Box, useThemeRTL} from '@workday/canvas-kit-labs-react/common';
import {Banner} from '@workday/canvas-kit-react/banner';

const styles: CSSProperties = {
  position: 'absolute',
  right: 0,
};

export const Sticky = () => {
  return (
    <Box height={64}>
      <Banner hasError={true} isSticky={true} css={styles}>
        <Banner.Icon />
        <Banner.Label>3 Errors</Banner.Label>
        <Banner.ActionText />
      </Banner>
    </Box>
  );
};
