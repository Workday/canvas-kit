import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  plusIcon,
  relatedActionsVerticalIcon,
  caretDownIcon,
} from '@workday/canvas-system-icons-web';

export const PrimaryInverse = () => (
  <Flex gap="s" backgroundColor="blueberry400" padding="s">
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
