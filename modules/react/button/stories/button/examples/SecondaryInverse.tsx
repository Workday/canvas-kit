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
  gap: system.gap.md,
  padding: system.padding.md,
  backgroundColor: system.color.bg.primary.default,
});

export const SecondaryInverse = () => (
  <Flex cs={parentContainerStyles}>
    <SecondaryButton variant="inverse">Secondary</SecondaryButton>
    <SecondaryButton icon={plusIcon} variant="inverse">
      Secondary
    </SecondaryButton>
    <SecondaryButton icon={caretDownIcon} variant="inverse" iconPosition="end">
      Secondary
    </SecondaryButton>
    <Tooltip title="Related Actions">
      <SecondaryButton icon={relatedActionsVerticalIcon} variant="inverse" />
    </Tooltip>
  </Flex>
);
