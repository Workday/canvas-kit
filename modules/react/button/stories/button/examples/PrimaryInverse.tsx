import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {
  caretDownIcon,
  globeIcon,
  plusIcon,
  relatedActionsVerticalIcon,
} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const parentContainerStyles = createStyles({
  gap: system.space.x4,
  backgroundColor: system.color.bg.primary.default,
  padding: system.space.x4,
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
    <PrimaryButton icon={relatedActionsVerticalIcon} variant="inverse" />
  </Flex>
);
