import React from 'react';
import {Pill} from '@workday/canvas-kit-preview-react/pill';

export const ClickablePillWithCount = () => (
  <Pill onClick={() => console.warn('clicked')} onDelete={() => console.warn('on delete')}>
    Shoes
    <Pill.Count>30</Pill.Count>
  </Pill>
);
