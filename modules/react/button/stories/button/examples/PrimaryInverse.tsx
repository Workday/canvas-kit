import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {HStack} from '@workday/canvas-kit-react/layout';
import {plusIcon} from '@workday/canvas-system-icons-web';

export const PrimaryInverse = () => (
  <HStack spacing="s" backgroundColor="blueberry400" padding="s">
    <PrimaryButton variant="inverse">Primary</PrimaryButton>
    <PrimaryButton icon={plusIcon} iconPosition="right" variant="inverse">
      Primary
    </PrimaryButton>
  </HStack>
);
