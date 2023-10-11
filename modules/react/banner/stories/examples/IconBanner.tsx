import React from 'react';

import {Banner} from '@workday/canvas-kit-react/banner';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {styled} from '@workday/canvas-kit-react/common';

export const IconBanner = () => {
  return (
    <Tooltip title="Warning">
      <Banner width="4em">
        <Banner.Icon />
      </Banner>
    </Tooltip>
  );
};
