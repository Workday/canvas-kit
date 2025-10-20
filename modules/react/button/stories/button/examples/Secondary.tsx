import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  plusIcon,
  relatedActionsVerticalIcon,
  caretDownIcon,
} from '@workday/canvas-system-icons-web';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';

const parentContainerStyles = createStyles({
  gap: system.space.x4,
  padding: system.space.x4,
});

export const Secondary = () => (
  <Flex cs={parentContainerStyles}>
    <SecondaryButton>Secondary</SecondaryButton>
    <SecondaryButton icon={plusIcon} iconPosition="start">
      Secondary
    </SecondaryButton>
    <SecondaryButton icon={caretDownIcon} iconPosition="end">
      Secondary
    </SecondaryButton>
    <Tooltip title="Related Actions">
      <SecondaryButton icon={relatedActionsVerticalIcon} />
    </Tooltip>
  </Flex>
);
