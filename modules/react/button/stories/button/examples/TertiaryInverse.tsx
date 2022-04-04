import React from 'react';

import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {HStack} from '@workday/canvas-kit-react/layout';
import {plusIcon} from '@workday/canvas-system-icons-web';

export const TertiaryInverse = () => (
  <HStack spacing="s" backgroundColor="blueberry400" padding="s">
    <TertiaryButton variant="inverse">Tertiary</TertiaryButton>
    <TertiaryButton icon={plusIcon} iconPosition="end" variant="inverse">
      Tertiary
    </TertiaryButton>
    <TertiaryButton icon={plusIcon} variant="inverse" />
  </HStack>
);
