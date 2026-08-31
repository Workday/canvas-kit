import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {createStyles} from '@workday/canvas-kit-styling';
import {
  caretDownIcon,
  plusIcon,
  relatedActionsVerticalIcon,
} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const parentContainerStyles = createStyles({
  gap: system.gap.md,
  padding: system.padding.md,
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
