import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {HStack} from '@workday/canvas-kit-labs-react/layout';
import {plusIcon} from '@workday/canvas-system-icons-web';

export const Primary = () => (
  <HStack spacing="s" padding="s">
    <PrimaryButton>Primary</PrimaryButton>
    <PrimaryButton icon={plusIcon} iconPosition="right">
      Primary
    </PrimaryButton>
  </HStack>
);
