import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {HStack} from '@workday/canvas-kit-labs-react/layout';
import {plusIcon} from '@workday/canvas-system-icons-web';

export const Secondary = () => (
  <HStack spacing="s" padding="s">
    <SecondaryButton>Secondary</SecondaryButton>
    <SecondaryButton icon={plusIcon} iconPosition="right">
      Secondary
    </SecondaryButton>
  </HStack>
);
