import React from 'react';
import {Avatar} from '@workday/canvas-kit-react/avatar';

export const NonSquareImage = () => (
  <div className="story">
    <h3>Original Rectangle Image</h3>
    <img alt="" src="https://placekitten.com/g/450/200" />
    <h3>Using Object Fit on a Rectangle Image</h3>
    <Avatar as="div" size={200} url="https://placekitten.com/g/450/200" objectFit="contain" />
    <h3>Original Square Image</h3>
    <img alt="" src="https://placekitten.com/g/450/450" />
    <h3>Using a Square Image</h3>
    <Avatar as="div" size={200} url="https://placekitten.com/g/450/450" />
  </div>
);
