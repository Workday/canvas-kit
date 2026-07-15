import {Avatar} from '@workday/canvas-kit-react/avatar';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  display: 'inline-flex',
  gap: system.gap.sm,
});

export const Variant = () => {
  return (
    <div className={containerStyles}>
      <Avatar name="John Doe" variant="blue" />
      <Avatar name="Logan McNeil" variant="amber" />
      <Avatar name="Wonder Woman" variant="teal" />
      <Avatar name="Elektra" variant="purple" />
      <Avatar name="Mary Jane" variant="magenta" />
      <Avatar name="Green Arrow" variant="green" />
    </div>
  );
};
