import React from 'react';
import {ActionBar} from '@workday/canvas-kit-react/action-bar';
import {PrimaryButton} from '@workday/canvas-kit-react/button';

export const Basic = () => (
  <ActionBar>
    <ActionBar.List position="relative">
      <ActionBar.Item as={PrimaryButton} onClick={() => console.log('first action')}>
        First Action
      </ActionBar.Item>
      <ActionBar.Item>Second Action</ActionBar.Item>
    </ActionBar.List>
  </ActionBar>
);
