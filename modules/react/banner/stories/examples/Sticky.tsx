import React from 'react';
import {Banner} from '@workday/canvas-kit-react/banner';
import {Box} from '@workday/canvas-kit-labs-react/common';

export const Sticky = () => {
  return (
    <Box height={64}>
      <Banner
        error={Banner.ErrorType.Error}
        label="3 Errors"
        variant={Banner.Variant.Sticky}
        style={{position: 'absolute', right: 0}}
      />
    </Box>
  );
};
