import {Avatar} from '@workday/canvas-kit-preview-react/avatar';
import {createStyles} from '@workday/canvas-kit-styling';
import {base} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  backgroundColor: base.orange300,
  color: base.orange700,
});

export const CustomColor = () => {
  return <Avatar cs={containerStyles} name="John Doe" variant="blue" />;
};
