import React from 'react';

import {Popper} from '@workday/canvas-kit-react/popup';
import {xIcon} from '@workday/canvas-system-icons-web';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {TooltipContainer, useTooltip} from '@workday/canvas-kit-react/tooltip';

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
