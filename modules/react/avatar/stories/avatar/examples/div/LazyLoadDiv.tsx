import React from 'react';
import {Avatar} from '@workday/canvas-kit-react/avatar';
// @ts-ignore: Cannot find module error
import testAvatar from '../../../test-avatar.png';

export const LazyLoadDiv = () => (
  <div className="story">
    {Array.from({length: 5}, (v, index) => (
      <>
        <Avatar as="div" size="large" url={testAvatar + '?v=' + index} />
        <br />
      </>
    ))}
  </div>
);
