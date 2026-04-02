import React from 'react';

import {Banner} from '@workday/canvas-kit-react/banner';
import {styled} from '@workday/canvas-kit-react/common';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';

export const IconBanner = () => {
  return (
    <Tooltip title="Warning">
      <Banner width="4em">
        <Banner.Icon />
      </Banner>
    </Tooltip>
  );
};
