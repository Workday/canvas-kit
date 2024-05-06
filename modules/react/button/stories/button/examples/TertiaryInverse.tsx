import React from 'react';

import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  plusIcon,
  relatedActionsVerticalIcon,
  arrowRightIcon,
  caretDownIcon,
} from '@workday/canvas-system-icons-web';
import {createStyles} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const parentContainerStyles = createStyles({
  gap: system.space.x4,
  padding: system.space.x4,
  backgroundColor: base.blueberry400,
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
    <TertiaryButton icon={relatedActionsVerticalIcon} variant="inverse" />
  </Flex>
);
