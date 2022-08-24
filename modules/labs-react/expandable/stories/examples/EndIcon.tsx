import React from 'react';

import {Expandable} from '@workday/canvas-kit-labs-react/expandable';

export const EndIcon = () => (
  <Expandable>
    <Expandable.Target headingLevel="h4">
      <Expandable.Title>Title</Expandable.Title>
      <Expandable.Icon iconPosition="end" />
    </Expandable.Target>

    <Expandable.Content>Content</Expandable.Content>
  </Expandable>
);
