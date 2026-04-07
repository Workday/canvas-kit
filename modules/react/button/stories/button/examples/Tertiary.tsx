import React from 'react';

import {TertiaryButton} from '@workday/canvas-kit-react/button';
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

export const Tertiary = () => (
  <Flex cs={parentContainerStyles}>
    <TertiaryButton>Tertiary</TertiaryButton>
    <TertiaryButton icon={plusIcon} iconPosition="start">
      Tertiary
    </TertiaryButton>
    <TertiaryButton icon={caretDownIcon} iconPosition="end">
      Tertiary
    </TertiaryButton>
    <Tooltip title="Related Actions">
      <TertiaryButton icon={relatedActionsVerticalIcon} />
    </Tooltip>
  </Flex>
);
