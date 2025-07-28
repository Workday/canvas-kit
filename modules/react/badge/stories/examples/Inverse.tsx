import * as React from 'react';
import {CountBadge} from '@workday/canvas-kit-react/badge';
import {createStyles, cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {Text} from '@workday/canvas-kit-react/text';

const containerStyles = createStyles({
  display: 'flex',
  gap: system.space.x2,
  padding: system.space.x4,
  backgroundColor: cssVar(system.color.static.blue.default),
});

export function Inverse() {
  return (
    <>
      <div className={containerStyles}>
        <Text as="strong" variant="inverse">
          Notifications
        </Text>
        <CountBadge count={427} variant="inverse" />
      </div>
      <div className={containerStyles}>
        <Text as="strong" variant="inverse">
          Notifications
        </Text>
        <CountBadge count={427} variant="inverse" emphasis="low" />
      </div>
    </>
  );
}
