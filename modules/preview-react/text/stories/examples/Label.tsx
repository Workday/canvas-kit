import React from 'react';
import {Label as LabelText} from '@workday/canvas-kit-preview-react/text';

export const Label = () => (
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
