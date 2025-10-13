import {withSnapshotsEnabled} from '../../../../../utils/storybook';
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  DeleteButton,
} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export default withSnapshotsEnabled({
  title: 'Testing/Buttons/Button/Grow',
});

const flexStyles = createStyles({
  flexDirection: 'column',
  gap: system.space.x3,
});

export const ButtonGrow = () => (
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
