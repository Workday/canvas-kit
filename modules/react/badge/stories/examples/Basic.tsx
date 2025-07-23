import * as React from 'react';
import {CountBadge} from '@workday/canvas-kit-react/badge';
import {createStyles} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
});

const defaultBackground = createStyles({
  boxSizing: 'border-box',
  backgroundColor: base.frenchVanilla100,
  padding: system.space.x4,
});

const inverseBackground = createStyles({
  boxSizing: 'border-box',
  backgroundColor: base.blueberry400,
  padding: system.space.x4,
});

export default () => (
  <div className={containerStyles}>
    <div className={defaultBackground}>
      <CountBadge count={427} />
    </div>
    <div className={inverseBackground}>
      <CountBadge count={427} variant="inverse" />
    </div>
  </div>
);
