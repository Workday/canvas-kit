import React from 'react';
import {Box} from '@workday/canvas-kit-labs-react/common';
import {Banner} from '@workday/canvas-kit-react/banner';
import styled from '../../../common/lib/theming/styled';

const StyledBanner = styled(Banner)({
  position: 'absolute',
  right: 0,
});

export const Sticky = () => {
  return (
    <Box height={64}>
      <StyledBanner hasError={true} isSticky={true}>
        <Banner.Icon />
        <Banner.Label>3 Errors</Banner.Label>
        <Banner.ActionText />
      </StyledBanner>
    </Box>
  );
};
