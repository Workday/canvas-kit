import React from 'react';

import {SecondaryButtonNew} from '@workday/canvas-kit-react/button';
import {HStack} from '@workday/canvas-kit-react/layout';
import {plusIcon} from '@workday/canvas-system-icons-web';

export const SecondaryNewInverse = () => (
  <HStack spacing="s" backgroundColor="blueberry400" padding="s">
    <SecondaryButtonNew variant="inverse">Secondary</SecondaryButtonNew>
    <SecondaryButtonNew icon={plusIcon} variant="inverse">
      Secondary
    </SecondaryButtonNew>
    <SecondaryButtonNew icon={plusIcon} variant="inverse"></SecondaryButtonNew>
  </HStack>
);
