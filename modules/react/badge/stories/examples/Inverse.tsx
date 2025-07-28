import * as React from 'react';
import {CountBadge} from '@workday/canvas-kit-react/badge';
import {cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {Text} from '@workday/canvas-kit-react/text';

export function Inverse() {
  return (
    <>
      <div style={{backgroundColor: cssVar(system.color.static.blue.default)}}>
        <CountBadge count={427} variant="inverse" />
      </div>
      <br />
      <div style={{backgroundColor: cssVar(system.color.static.blue.default)}}>
        <Text fontFamily="monospace" cs={{color: cssVar(system.color.static.white)}}>
          system.color.static.blue.default
        </Text>
        <CountBadge count={427} variant="inverse" emphasis="low" />
      </div>
    </>
  );
}
