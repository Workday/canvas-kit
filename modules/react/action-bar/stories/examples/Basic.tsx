import React from 'react';

import {ActionBar} from '@workday/canvas-kit-react/action-bar';
import {PrimaryButtonKing, SecondaryButtonNew} from '@workday/canvas-kit-react/button';
import {relatedActionsIcon} from '@workday/canvas-system-icons-web';

export const Basic = () => (
  <ActionBar position="relative">
    <PrimaryButtonKing>First Action</PrimaryButtonKing>
    <SecondaryButtonNew>Second Action</SecondaryButtonNew>
    <SecondaryButtonNew icon={relatedActionsIcon} />
  </ActionBar>
);
