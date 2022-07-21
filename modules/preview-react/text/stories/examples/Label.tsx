import React from 'react';

import {Box} from '@workday/canvas-kit-react';
import {Label as LabelText} from '@workday/canvas-kit-preview-react/text';

export const Label = () => (
  <>
    <LabelText size="large" marginBottom="s">
      Label
    </LabelText>
    <LabelText hasPointerCursor marginBottom="s">
      Label with pointer
    </LabelText>
    <LabelText disabled marginBottom="s">
      Disabled Label
    </LabelText>
  </>
);
