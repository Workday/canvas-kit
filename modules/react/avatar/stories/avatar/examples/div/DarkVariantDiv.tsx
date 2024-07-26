import React from 'react';
import {Avatar} from '@workday/canvas-kit-react/avatar';

export const DarkVariantDiv = () => (
  <div className="story">
    <h3>Extra-Extra Large</h3>
    <Avatar as="div" size="extraExtraLarge" variant="dark" />
    <h3>Extra Large</h3>
    <Avatar as="div" size="extraLarge" variant="dark" />
    <h3>Large</h3>
    <Avatar as="div" size="large" variant="dark" />
    <h3>Medium</h3>
    <Avatar as="div" size="medium" variant="dark" />
    <h3>Small</h3>
    <Avatar as="div" size="small" variant="dark" />
    <h3>Extra Small</h3>
    <Avatar as="div" size="extraSmall" variant="dark" />
  </div>
);
