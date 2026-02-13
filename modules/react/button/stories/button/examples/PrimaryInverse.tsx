import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
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
  backgroundColor: system.color.bg.primary.default,
  padding: system.padding.md,
});

export const PrimaryInverse = () => (
  <Flex cs={parentContainerStyles}>
    <PrimaryButton variant="inverse">Primary</PrimaryButton>
    <PrimaryButton icon={plusIcon} iconPosition="start" variant="inverse">
      Primary
    </PrimaryButton>
    <PrimaryButton icon={caretDownIcon} iconPosition="end" variant="inverse">
      Primary
    </PrimaryButton>
    <Tooltip title="Related Actions">
      <PrimaryButton icon={relatedActionsVerticalIcon} variant="inverse" />
    </Tooltip>
  </Flex>
);
