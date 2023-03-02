import React from 'react';

import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  plusIcon,
  relatedActionsVerticalIcon,
  arrowRightIcon,
  caretDownIcon,
} from '@workday/canvas-system-icons-web';

export const TertiaryInverse = () => (
  <Flex gap="s" backgroundColor="blueberry400" padding="s">
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
