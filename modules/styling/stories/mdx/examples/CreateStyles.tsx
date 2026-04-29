import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const styles = createStyles({
  background: system.color.brand.accent.primary,
  color: system.color.fg.inverse,
});

export const CreateStyles = () => {
  return <button className={styles}>Click Me</button>;
};
