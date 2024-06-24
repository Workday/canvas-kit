import React from 'react';
import {withSnapshotsEnabled} from '../../../../../utils/storybook';
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  DeleteButton,
} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';

export default withSnapshotsEnabled({
  title: 'Testing/Buttons/Button/Grow',
});

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
