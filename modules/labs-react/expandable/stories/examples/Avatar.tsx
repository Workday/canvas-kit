import React from 'react';

import {Expandable} from '@workday/canvas-kit-labs-react/expandable';
// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';

export const Avatar = () => (
  <>
    <Expandable>
      <Expandable.Target headingLevel="h4">
        <Expandable.Icon iconPosition="start" />
        <Expandable.Avatar url={testAvatar} />
        <Expandable.Title>Title</Expandable.Title>
      </Expandable.Target>

      <Expandable.Content>Content</Expandable.Content>
    </Expandable>
    <Expandable>
      <Expandable.Target headingLevel="h4">
        <Expandable.Avatar url={testAvatar} />
        <Expandable.Title>Title</Expandable.Title>
        <Expandable.Icon iconPosition="end" />
      </Expandable.Target>

      <Expandable.Content>Content</Expandable.Content>
    </Expandable>
  </>
);
