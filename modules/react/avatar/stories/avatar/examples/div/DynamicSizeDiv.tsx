import React from 'react';
import {Avatar} from '@workday/canvas-kit-react/avatar';
import {px2rem} from '@workday/canvas-kit-styling';

export const DynamicSizeDiv = () => (
  <div className="story">
    <h3>30px</h3>
    <Avatar as="div" size={px2rem(30)} />
    <h3>40px</h3>
    <Avatar as="div" size={px2rem(40)} />
    <h3>3rem</h3>
    <Avatar as="div" size="3rem" />
    <h3>4rem</h3>
    <Avatar as="div" size="4rem" />
  </div>
);
