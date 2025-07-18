import * as React from 'react';
import {CountBadge} from '@workday/canvas-kit-react/badge';
import {createStyles, cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {Text} from '@workday/canvas-kit-react/text';

const containerStyles = createStyles({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  div: {
    boxSizing: 'border-box',
    padding: system.space.x4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export function Inverse() {
  return (
    <>
      <div className={containerStyles}>
        <div style={{backgroundColor: cssVar(system.color.static.blue.default)}}>
          <CountBadge count={427} variant="inverse" />
        </div>
        <div style={{backgroundColor: cssVar(system.color.static.red.default)}}>
          <CountBadge count={427} variant="inverse" />
        </div>
        <div style={{backgroundColor: cssVar(system.color.static.green.default)}}>
          <CountBadge count={427} variant="inverse" />
        </div>
        <div style={{backgroundColor: cssVar(system.color.static.amber.default)}}>
          <CountBadge count={427} variant="inverse" />
        </div>
        <div style={{backgroundColor: cssVar(system.color.static.gray.default)}}>
          <CountBadge count={427} variant="inverse" />
        </div>
      </div>
      <br />
      <div className={containerStyles}>
        <div style={{backgroundColor: cssVar(system.color.static.blue.default)}}>
          <Text fontFamily="monospace" cs={{color: cssVar(system.color.static.white)}}>
            system.color.static.blue.default
          </Text>
          <CountBadge count={427} variant="inverse" emphasis="low" />
        </div>
        <div style={{backgroundColor: cssVar(system.color.static.blue.soft)}}>
          <Text fontFamily="monospace" cs={{color: cssVar(system.color.static.black)}}>
            system.color.static.blue.default
          </Text>
          <CountBadge count={427} variant="inverse" emphasis="low" />
        </div>
        <div style={{backgroundColor: cssVar(system.color.static.red.default)}}>
          <Text fontFamily="monospace" cs={{color: cssVar(system.color.static.red.softer)}}>
            system.color.static.red.default
          </Text>
          <CountBadge count={427} variant="inverse" emphasis="low" />
        </div>
        <div style={{backgroundColor: cssVar(system.color.static.green.default)}}>
          <Text fontFamily="monospace" cs={{color: cssVar(system.color.static.white)}}>
            system.color.static.green.default
          </Text>
          <CountBadge count={427} variant="inverse" emphasis="low" />
        </div>
        <div style={{backgroundColor: cssVar(system.color.static.amber.default)}}>
          <Text fontFamily="monospace" cs={{color: cssVar(system.color.static.black)}}>
            system.color.static.amber.default
          </Text>
          <CountBadge count={427} variant="inverse" emphasis="low" />
        </div>
        <div style={{backgroundColor: cssVar(system.color.static.gray.default)}}>
          <Text fontFamily="monospace" cs={{color: cssVar(system.color.static.gray.softer)}}>
            system.color.static.gray.default
          </Text>
          <CountBadge count={427} variant="inverse" emphasis="low" />
        </div>
        <div style={{backgroundColor: cssVar(system.color.static.gray.soft)}}>
          <Text fontFamily="monospace" cs={{color: cssVar(system.color.static.gray.stronger)}}>
            system.color.static.gray.soft
          </Text>
          <CountBadge count={427} variant="inverse" emphasis="low" />
        </div>
      </div>
    </>
  );
}
