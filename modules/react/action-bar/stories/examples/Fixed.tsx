import React from 'react';

import {ActionBar} from '@workday/canvas-kit-react/action-bar';
import {PrimaryButton, SecondaryButton} from '@workday/canvas-kit-react/button';

export const Fixed = () => (
  <ActionBar fixed={true}>
    <PrimaryButton>Button</PrimaryButton>
    <SecondaryButton>Button</SecondaryButton>
  </ActionBar>
);
