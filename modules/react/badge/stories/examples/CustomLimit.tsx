import * as React from 'react';
import {CountBadge} from '@workday/canvas-kit-react/badge';
import {TertiaryButton} from '@workday/canvas-kit-react/button';

import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const columnStyles = createStyles({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: system.space.x4,
});

const controls = createStyles({
  boxSizing: 'border-box',
  borderBottom: `solid 1px ${system.color.border.divider}`,
  display: 'flex',
  gap: system.space.x1,
  padding: system.space.x1,
});

const defaultBackground = createStyles({
  boxSizing: 'border-box',
  backgroundColor: system.color.bg.alt.soft,
  padding: system.space.x4,
});

const inverseBackground = createStyles({
  boxSizing: 'border-box',
  backgroundColor: system.color.bg.primary.default,
  padding: system.space.x4,
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
