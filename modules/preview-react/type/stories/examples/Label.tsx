import React from 'react';

import {Box} from '@workday/canvas-kit-react';
import {Label as LabelText} from '@workday/canvas-kit-preview-react/type';

export const Label = () => (
  <>
    <Box marginBottom="s">
      <LabelText size="large">Label</LabelText>
    </Box>
    <Box marginBottom="s">
      <LabelText hasPointerCursor>Label with pointer</LabelText>
    </Box>
    <Box marginBottom="s">
      <LabelText disabled>Disabled Label</LabelText>
    </Box>
  </>
);
