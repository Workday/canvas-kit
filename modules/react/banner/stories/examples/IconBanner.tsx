import React from 'react';

import {Banner} from '@workday/canvas-kit-react/banner';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {styled} from '@workday/canvas-kit-react/common';

export const IconBanner = () => {
  const StyledBanner = styled(Banner)({width: '4em'});

  return (
    <Tooltip title="Warning">
      <StyledBanner>
        <Banner.Icon />
      </StyledBanner>
    </Tooltip>
  );
};
