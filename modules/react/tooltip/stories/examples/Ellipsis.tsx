import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
import {px2rem} from '@workday/canvas-kit-styling';
import {resetIcon} from '@workday/canvas-system-icons-web';

const CustomContent = ({...elemProps}) => (
  <button
    style={{
      marginTop: px2rem(12),
      maxWidth: px2rem(200),
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
      </OverflowTooltip>
      <OverflowTooltip>
        <SecondaryButton cs={{maxWidth: px2rem(200)}}>
          Super Mega Ultra Long Content With Max Width On The Button
        </SecondaryButton>
      </OverflowTooltip>
      <OverflowTooltip>
        <SecondaryButton icon={resetIcon} cs={{maxWidth: px2rem(200)}}>
          Super Mega Ultra Long Content With Max Width On The Button with Icon
        </SecondaryButton>
      </OverflowTooltip>
      <OverflowTooltip>
        <button
          style={{
            marginTop: px2rem(12),
            maxWidth: px2rem(200),
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
