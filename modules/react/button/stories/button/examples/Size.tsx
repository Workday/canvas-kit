import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {HStack} from '@workday/canvas-kit-labs-react/layout';

export const Size = () => (
  <HStack spacing="s">
    <SecondaryButton size="small">Click Me</SecondaryButton>
    <SecondaryButton size="medium">Click Me</SecondaryButton>
    <SecondaryButton size="large">Click Me</SecondaryButton>
  </HStack>
);
