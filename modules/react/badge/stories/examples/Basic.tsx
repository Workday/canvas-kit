import * as React from 'react';
import {CountBadge} from '@workday/canvas-kit-react/badge';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {Text} from '@workday/canvas-kit-react/text';

const containerStyles = createStyles({
  display: 'flex',
  gap: system.space.x2,
  padding: system.space.x4,
});

export const Basic = () => {
  return (
    <>
      <div className={containerStyles}>
        <Text as="strong">High Emphasis</Text>
        <CountBadge count={427} />
      </div>
      <div className={containerStyles}>
        <Text as="strong">Low Emphasis</Text>
        <CountBadge count={427} emphasis="low" />
      </div>
    </>
  );
};
