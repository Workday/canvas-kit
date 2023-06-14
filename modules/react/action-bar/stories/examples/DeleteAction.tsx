import React from 'react';

import {ActionBar} from '@workday/canvas-kit-react/action-bar';
import {DeleteButton} from '@workday/canvas-kit-react/button';

export const DeleteAction = () => {
  return (
    <ActionBar>
      <ActionBar.List position="relative" aria-label="actions">
        <ActionBar.Item as={DeleteButton}>Delete Action</ActionBar.Item>
        <ActionBar.Item>Second Action</ActionBar.Item>
      </ActionBar.List>
    </ActionBar>
  );
};
