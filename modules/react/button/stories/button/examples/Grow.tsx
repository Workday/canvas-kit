import React from 'react';

import {
  DeleteButton,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const flexStyles = createStyles({
  flexDirection: 'column',
  gap: system.space.x4,
  maxWidth: px2rem(300),
});

export const Grow = () => (
  <Flex cs={flexStyles}>
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
