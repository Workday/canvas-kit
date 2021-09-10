import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
import {space} from '@workday/canvas-kit-react/tokens';

const CustomContent = ({...elemProps}) => (
  <button
    style={{
      marginTop: space.xs,
      maxWidth: 200,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }}
    {...elemProps}
  >
    Super Mega Ultra Long Content With Max Width Custom
  </button>
);

export const Ellipsis = () => {
  return (
    <React.Fragment>
      <OverflowTooltip>
        <SecondaryButton>Short Content</SecondaryButton>
      </OverflowTooltip>{' '}
      <OverflowTooltip>
        <SecondaryButton style={{maxWidth: 200}}>
          Super Mega Ultra Long Content With Max Width On The Button
        </SecondaryButton>
      </OverflowTooltip>
      <OverflowTooltip>
        <button
          style={{
            marginTop: space.xs,
            maxWidth: 200,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          Super Mega Ultra Long Content With Max Width
        </button>
      </OverflowTooltip>
      <OverflowTooltip>
        <CustomContent />
      </OverflowTooltip>
    </React.Fragment>
  );
};
