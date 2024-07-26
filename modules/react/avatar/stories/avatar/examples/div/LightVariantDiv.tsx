import React from 'react';
import {Avatar} from '@workday/canvas-kit-react/avatar';

export const LightVariantDiv = () => (
  <div className="story">
    <h3>Extra-Extra Large</h3>
    <Avatar as="div" size="extraExtraLarge" />
    <h3>Extra Large</h3>
    <Avatar as="div" size="extraLarge" />
    <h3>Large</h3>
    <Avatar as="div" size="large" />
    <h3>Medium</h3>
    <Avatar as="div" size="medium" />
    <h3>Small</h3>
    <Avatar as="div" size="small" />
    <h3>Extra Small</h3>
    <Avatar as="div" size="extraSmall" />
  </div>
);
