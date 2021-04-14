import * as React from 'react';
import {Box} from '@workday/canvas-kit-labs-react/common';

const boxStyles = {
  display: 'inline-block',
  margin: '4px',
  padding: '12px',
};

export const Color = () => (
  <>
    <Box style={boxStyles} backgroundColor="blueberry400" color="frenchVanilla100">
      Blueberry400 & FrenchVanilla100
    </Box>
    <Box style={boxStyles} bgColor="sourLemon400" color="blackPepper400">
      SourLemon400 and BlackPepper400
    </Box>
  </>
);
