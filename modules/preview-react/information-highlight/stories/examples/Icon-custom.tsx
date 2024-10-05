import React from 'react';

import {InformationHighlight} from '@workday/canvas-kit-preview-react/information-highlight';
import {chartIcon} from '@workday/canvas-system-icons-web';
import {createStyles, cssVar} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

const containerStyles = createStyles({
  display: 'grid',
  gridTemplateColumns: 'min-content',
  columnGap: system.space.x4,
  rowGap: system.space.x2,
  padding: system.space.x4,
  border: `solid ${cssVar(system.shape.half)}`,
  borderColor: cssVar(base.greenApple500),
  backgroundColor: system.color.static.green.soft,
});

export const IconCustom = () => {
  return (
    <InformationHighlight cs={containerStyles}>
      <InformationHighlight.Icon
        variant={undefined}
        icon={chartIcon}
        color={cssVar(base.greenApple500)}
      />
      <InformationHighlight.Heading> Layouts </InformationHighlight.Heading>
      <InformationHighlight.Body>
        {' '}
        Layouts can be customized in a myriad of ways{' '}
      </InformationHighlight.Body>
    </InformationHighlight>
  );
};
