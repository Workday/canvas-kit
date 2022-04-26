import React from 'react';

import {Expandable} from '@workday/canvas-kit-labs-react/expandable';

export const EndChevron = () => (
  <Expandable>
    <Expandable.Target headingLevel="h2">
      Title
      <Expandable.EndChevron />
    </Expandable.Target>

    <Expandable.Content>Content</Expandable.Content>
  </Expandable>
);
