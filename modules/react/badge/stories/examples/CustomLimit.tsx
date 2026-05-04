import * as React from 'react';

import {CountBadge} from '@workday/canvas-kit-react/badge';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const columnStyles = createStyles({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: system.gap.md,
});

const controls = createStyles({
  boxSizing: 'border-box',
  borderBottom: `solid 1px ${system.color.border.divider}`,
  display: 'flex',
  gap: system.gap.xs,
  padding: system.padding.xxs,
});

const defaultBackground = createStyles({
  boxSizing: 'border-box',
  backgroundColor: system.color.surface.alt.default,
  padding: system.padding.md,
});

const inverseBackground = createStyles({
  boxSizing: 'border-box',
  backgroundColor: system.color.brand.accent.primary,
  padding: system.padding.md,
});

const initialCount = 1;

export const CustomLimit = () => {
  const [count, setCount] = React.useState(initialCount);

  return (
    <div className={columnStyles}>
      <div className={controls}>
        <TertiaryButton size="small" onClick={() => setCount(count + 1)}>
          Increment
        </TertiaryButton>
        <TertiaryButton size="small" onClick={() => setCount(initialCount)}>
          Reset
        </TertiaryButton>
      </div>
      <div className={defaultBackground}>
        <CountBadge count={count} limit={10} />
      </div>
      <div className={inverseBackground}>
        <CountBadge count={count} limit={10} variant="inverse" />
      </div>
    </div>
  );
};
