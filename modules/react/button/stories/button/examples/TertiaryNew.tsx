import React from 'react';

import {TertiaryButtonNew} from '@workday/canvas-kit-react/button';
import {HStack} from '@workday/canvas-kit-react/layout';
import {plusIcon} from '@workday/canvas-system-icons-web';

export const TertiaryNew = () => (
  <HStack spacing="s" padding="s">
    <TertiaryButtonNew>Tertiary</TertiaryButtonNew>
    <TertiaryButtonNew icon={plusIcon} iconPosition="end">
      Tertiary
    </TertiaryButtonNew>
    <TertiaryButtonNew icon={plusIcon}></TertiaryButtonNew>
  </HStack>
);
