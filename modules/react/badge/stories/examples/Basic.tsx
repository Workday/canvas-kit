import {CountBadge} from '@workday/canvas-kit-react/badge';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  display: 'flex',
  gap: system.space.x2,
  padding: system.space.x4,
});

export const Basic = () => {
  return (
    <div className={containerStyles}>
      <CountBadge count={427} />
    </div>
  );
};
