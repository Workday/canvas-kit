import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {HStack} from '@workday/canvas-kit-react/layout';
import {plusIcon, relatedActionsVerticalIcon} from '@workday/canvas-system-icons-web';

export const Secondary = () => (
  <HStack spacing="s" padding="s">
    <SecondaryButton>Secondary</SecondaryButton>
    <SecondaryButton icon={plusIcon} iconPosition="start">
      Secondary
    </SecondaryButton>
    <SecondaryButton icon={plusIcon} iconPosition="end">
      Secondary
    </SecondaryButton>
    <SecondaryButton icon={relatedActionsVerticalIcon} />
  </HStack>
);
