import React from 'react';

import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {Popper} from '@workday/canvas-kit-react/popup';
import {TooltipContainer, useTooltip} from '@workday/canvas-kit-react/tooltip';
import {xIcon} from '@workday/canvas-system-icons-web';

export const UseTooltip = () => {
  const {targetProps, popperProps, tooltipProps} = useTooltip();

  return (
    <>
      <TertiaryButton icon={xIcon} {...targetProps} aria-label="Close" />
      <Popper placement="top" {...popperProps}>
        <TooltipContainer {...tooltipProps}>Close</TooltipContainer>
      </Popper>
    </>
  );
};
