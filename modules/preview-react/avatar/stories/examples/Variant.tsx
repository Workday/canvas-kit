import {Avatar} from '@workday/canvas-kit-preview-react/avatar';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  display: 'inline-flex',
  gap: system.space.x2,
});

export const Variant = () => {
  return (
    <div className={containerStyles}>
      <Avatar name="John Doe" variant="blue" />
      <Avatar name="Logan McNeil" variant="amber" />
      <Avatar name="Wonder Woman" variant="teal" />
      <Avatar name="Elektra" variant="purple" />
    </div>
  );
};
