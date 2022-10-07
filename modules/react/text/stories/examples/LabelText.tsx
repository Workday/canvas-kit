import React from 'react';
import {LabelText} from '@workday/canvas-kit-react/text';

export const LabelTextExample = () => (
  <>
    <LabelText marginBottom="s">Label</LabelText>
    <LabelText cursor="pointer" marginBottom="s">
      Label with pointer
    </LabelText>
    <LabelText disabled marginBottom="s">
      Disabled Label
    </LabelText>
  </>
);
