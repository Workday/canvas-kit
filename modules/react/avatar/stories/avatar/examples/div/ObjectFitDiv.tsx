import React from 'react';
import {Avatar} from '@workday/canvas-kit-react/avatar';
import {px2rem} from '@workday/canvas-kit-styling';

export const ObjectFitDiv = () => (
  <div className="story">
    <h3>Original Rectangle Image</h3>
    <img alt="" src="https://placehold.co/450x200/png" />
    <h3>Object fit on a Rectangle Image</h3>
    <Avatar as="div" url="https://placehold.co/450x200/png" objectFit="contain" />
    <h3>Object fit on a Rectangle Image using Dynamic Size</h3>
    <Avatar
      as="div"
      size={px2rem(200)}
      url="https://placehold.co/450x200/png"
      objectFit="contain"
    />
    <h3>Original Square Image</h3>
    <img alt="" src="https://placehold.co/450x450/png" />
    <h3>Object fit on a Square Image</h3>
    <Avatar as="div" url="https://placehold.co/450x450/png" />
    <h3>Object fit on a Square Image using Dynamic Size</h3>
    <Avatar as="div" size={px2rem(200)} url="https://placehold.co/450x450/png" />
  </div>
);
