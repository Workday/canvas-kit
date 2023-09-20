import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  plusIcon,
  relatedActionsVerticalIcon,
  caretDownIcon,
} from '@workday/canvas-system-icons-web';

export const Secondary = () => (
  <Flex gap="s" padding="s">
    <SecondaryButton>Secondary</SecondaryButton>
    <SecondaryButton icon={plusIcon} iconPosition="start">
      Secondary
    </SecondaryButton>
    <SecondaryButton icon={caretDownIcon} iconPosition="end">
      Secondary
    </SecondaryButton>
    <SecondaryButton icon={relatedActionsVerticalIcon} />
  </Flex>
);
