import React from 'react';
import {styled} from '@workday/canvas-kit-react-common';
import {type} from '@workday/canvas-kit-react-core';
import {TooltipContainer} from '@workday/canvas-kit-react-tooltip';
import {Popper} from '@workday/canvas-kit-react-popup';

import {useTruncateTooltip} from './hooks';
import {truncateStyles} from './styles';

export interface CurrentItemProps extends React.HTMLAttributes<HTMLLIElement> {
  /**
   * The max-width of the text
   */
  maxWidth?: number;
}

const ListItem = styled('li')(
  {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'left',
    ...type.body,
  },

  ({maxWidth}: CurrentItemProps) => ({
    ...truncateStyles(maxWidth),
  })
);

export const CurrentItem = ({children, maxWidth, ...elemProps}: CurrentItemProps) => {
  const ref = React.useRef<HTMLLIElement>(null);

  const {
    isTooltipOpen,
    openTooltip,
    closeTooltip,
    shouldShowTooltip,
    tooltipProps,
  } = useTruncateTooltip(ref);

  return (
    <>
      <ListItem
        ref={ref}
        maxWidth={maxWidth}
        onMouseEnter={openTooltip}
        onMouseLeave={closeTooltip}
        onFocus={openTooltip}
        onBlur={closeTooltip}
        {...(shouldShowTooltip && {tabIndex: 0})}
        {...elemProps}
      >
        {children}
      </ListItem>
      <Popper open={isTooltipOpen} anchorElement={ref} placement="top">
        <TooltipContainer {...tooltipProps}>{children}</TooltipContainer>
      </Popper>
    </>
  );
};
