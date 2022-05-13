import React from 'react';
import {Pill} from '@workday/canvas-kit-preview-react/pill';

export const ClickablePillWithCount = () => (
  <Pill onClick={() => console.warn('clicked')}>
    Shoes
    <Pill.Count>30</Pill.Count>
  </Pill>
);
