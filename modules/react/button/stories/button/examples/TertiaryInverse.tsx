import React from 'react';

import {TertiaryButton} from '@workday/canvas-kit-react/button';
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
  backgroundColor: system.color.bg.primary.default,
});

export const TertiaryInverse = () => (
  <Flex cs={parentContainerStyles}>
    <TertiaryButton variant="inverse">Tertiary</TertiaryButton>
    <TertiaryButton icon={plusIcon} iconPosition="start" variant="inverse">
      Tertiary
    </TertiaryButton>
    <TertiaryButton icon={caretDownIcon} iconPosition="end" variant="inverse">
      Tertiary
    </TertiaryButton>
    <Tooltip title="Related Actions">
      <TertiaryButton icon={relatedActionsVerticalIcon} variant="inverse" />
    </Tooltip>
  </Flex>
);
