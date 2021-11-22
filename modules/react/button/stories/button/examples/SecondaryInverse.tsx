import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {HStack} from '@workday/canvas-kit-labs-react/layout';
import {plusIcon} from '@workday/canvas-system-icons-web';

export const SecondaryInverse = () => (
  <HStack spacing="s" backgroundColor="blueberry400" padding="s">
    <SecondaryButton variant="inverse">Secondary</SecondaryButton>
    <SecondaryButton icon={plusIcon} iconPosition="right" variant="inverse">
      Secondary
    </SecondaryButton>
  </HStack>
);
