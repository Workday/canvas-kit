import React from 'react';
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  DeleteButton,
} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';

export default {
  title: 'Testing/Buttons/Button/Grow',
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

export const ButtonGrow = () => (
  <Flex flexDirection="column" gap="xs">
    <PrimaryButton size="small" grow={true}>
      Primary
    </PrimaryButton>
    <SecondaryButton size="small" grow={true}>
      Secondary
    </SecondaryButton>
    <TertiaryButton size="small" grow={true}>
      Tertiary
    </TertiaryButton>
    <DeleteButton size="small" grow={true}>
      Delete
    </DeleteButton>
  </Flex>
);
