import React from 'react';

import {ActionBar} from '@workday/canvas-kit-react/action-bar';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
// import {relatedActionsIcon} from '@workday/canvas-system-icons-web';

export const Basic = () => (
  <ActionBar>
    <ActionBar.List>
      <ActionBar.Item isPrimary onClick={() => console.log('first action')}>
        First Action
      </ActionBar.Item>
      <ActionBar.Item>Second Action</ActionBar.Item>
    </ActionBar.List>
  </ActionBar>
);
