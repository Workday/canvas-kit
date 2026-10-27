import {Avatar} from '@workday/canvas-kit-react/avatar';
import {Text} from '@workday/canvas-kit-react/text';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  display: 'inline-flex',
  gap: system.gap.sm,
  alignItems: 'center',
});
export const DecorativeInitials = () => {
  return (
    <div className={containerStyles}>
      <Avatar name="Nicholas Smith" isDecorative size="small" />
      <Text>Nicholas Smith</Text>
    </div>
  );
};
