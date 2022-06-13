import React from 'react';

import {Expandable} from '@workday/canvas-kit-labs-react/expandable';
// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';

export const LongTitle = () => (
  <Expandable>
    <Expandable.Target headingLevel="h4">
      <Expandable.StartIcon />
      <Expandable.Avatar url={testAvatar} />
      <Expandable.Title>
        Our house special supreme pizza includes pepperoni, sausage, bell peppers, mushrooms,
        onions, and oregano.
      </Expandable.Title>
    </Expandable.Target>

    <Expandable.Content>Content</Expandable.Content>
  </Expandable>
);
