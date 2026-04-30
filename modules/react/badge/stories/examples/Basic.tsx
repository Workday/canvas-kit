import {CountBadge} from '@workday/canvas-kit-react/badge';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  display: 'flex',
  gap: system.gap.sm,
  padding: system.padding.md,
});

export const Basic = () => {
  return (
    <div className={containerStyles}>
      <CountBadge count={427} />
    </div>
  );
};
