import React from 'react';

import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {HStack} from '@workday/canvas-kit-react/layout';
import {
  plusIcon,
  relatedActionsVerticalIcon,
  arrowLeftIcon,
  arrowRightIcon,
} from '@workday/canvas-system-icons-web';

export const Tertiary = () => (
  <HStack spacing="s" padding="s">
    <TertiaryButton>Tertiary</TertiaryButton>
    <TertiaryButton icon={arrowLeftIcon} iconPosition="start">
      Tertiary
    </TertiaryButton>
    <TertiaryButton icon={arrowRightIcon} iconPosition="end">
      Tertiary
    </TertiaryButton>
    <TertiaryButton icon={relatedActionsVerticalIcon} />
  </HStack>
);
