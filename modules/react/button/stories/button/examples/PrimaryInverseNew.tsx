import React from 'react';

import {PrimaryButtonKing} from '@workday/canvas-kit-react/button';
import {HStack} from '@workday/canvas-kit-react/layout';
import {plusIcon} from '@workday/canvas-system-icons-web';

export const PrimaryInverseNew = () => (
  <HStack spacing="s" backgroundColor="blueberry400" padding="s">
    <PrimaryButtonKing variant="inverse">Primary</PrimaryButtonKing>
    <PrimaryButtonKing icon={plusIcon} iconPosition="end" variant="inverse">
      Primary
    </PrimaryButtonKing>
    <PrimaryButtonKing icon={plusIcon} variant="inverse"></PrimaryButtonKing>
  </HStack>
);
