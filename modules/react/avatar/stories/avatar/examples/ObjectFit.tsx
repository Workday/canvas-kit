import React from 'react';
import {Avatar} from '@workday/canvas-kit-react/avatar';
import {px2rem} from '@workday/canvas-kit-styling';

export const ObjectFit = () => (
  <div className="story">
    <h3>Original Rectangle Image</h3>
    <img
      alt=""
      src="https://loremflickr.com/cache/resized/65535_53325191273_373deb18ee_n_320_200_nofilter.jpg?lock=1"
    />
    <h3>Object fit on a Rectangle Image</h3>
    <Avatar
      as="div"
      url="https://loremflickr.com/cache/resized/65535_53325191273_373deb18ee_n_320_200_nofilter.jpg?lock=1"
    />
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
