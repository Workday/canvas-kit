import {
  DeleteButton,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {px2rem} from '@workday/canvas-kit-styling';

import {withSnapshotsEnabled} from '../../../../../utils/storybook';

export default withSnapshotsEnabled({
  title: 'Testing/Buttons/Button/Grow',
});

export const ButtonGrow = () => (
  <Flex cs={{flexDirection: 'column', gap: px2rem(12)}}>
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
