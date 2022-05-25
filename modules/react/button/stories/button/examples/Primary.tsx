import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {HStack} from '@workday/canvas-kit-react/layout';
import {
  plusIcon,
  relatedActionsVerticalIcon,
  caretDownIcon,
} from '@workday/canvas-system-icons-web';

export const Primary = () => (
  <HStack spacing="s" padding="s">
    <PrimaryButton>Primary</PrimaryButton>
    <PrimaryButton>+</PrimaryButton>
    <PrimaryButton icon={plusIcon} iconPosition="start">
      Primary
    </PrimaryButton>
    <PrimaryButton icon={caretDownIcon} iconPosition="end">
      Primary
    </PrimaryButton>
    <PrimaryButton icon={relatedActionsVerticalIcon} />
  </HStack>
);
