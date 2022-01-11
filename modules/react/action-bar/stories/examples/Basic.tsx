import React from 'react';

import {ActionBar} from '@workday/canvas-kit-react/action-bar';
import {PrimaryButton, SecondaryButton} from '@workday/canvas-kit-react/button';

export const Basic = () => (
  <ActionBar position="relative">
    <PrimaryButton>First Action</PrimaryButton>
    <SecondaryButton>Second Action</SecondaryButton>
  </ActionBar>
);
