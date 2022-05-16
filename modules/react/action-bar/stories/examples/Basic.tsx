import React from 'react';
import {ActionBar} from '@workday/canvas-kit-react/action-bar';

export const Basic = () => (
  <ActionBar>
    <ActionBar.List position="relative">
      <ActionBar.Item isPrimaryButton onClick={() => console.log('first action')}>
        First Action
      </ActionBar.Item>
      <ActionBar.Item>Second Action</ActionBar.Item>
    </ActionBar.List>
  </ActionBar>
);
