/** @jsx jsx */
import React from 'react';
import {css, jsx} from '@emotion/core';
import {type} from '@workday/canvas-kit-react-core';
import {TooltipContainer} from '@workday/canvas-kit-react-tooltip';
import {Popper} from '@workday/canvas-kit-react-popup';

import {useTruncateTooltip} from './hooks';

export interface CurrentItemProps extends React.HTMLAttributes<HTMLLIElement> {
  maxWidth?: number;
}

export const CurrentItem = ({children, maxWidth, ...elemProps}: CurrentItemProps) => {
  const ref = React.useRef<HTMLSpanElement>(null);

  const {
    isTooltipOpen,
    openTooltip,
    closeTooltip,
    shouldShowTooltip,
    truncateStyles,
    tooltipProps,
  } = useTruncateTooltip(maxWidth, ref);

  const listStyles = css({
    display: 'flex',
    alignItems: 'center',
  });

  const crumbTextStyles = css({
    ...truncateStyles,
    ...type.body,
  });

  return (
    <li css={listStyles} {...elemProps}>
      <span
        ref={ref}
        css={crumbTextStyles}
        onMouseEnter={openTooltip}
        onMouseLeave={closeTooltip}
        onFocus={openTooltip}
        onBlur={closeTooltip}
        {...(shouldShowTooltip && {tabIndex: 0})}
      >
        {children}
      </span>
      <Popper open={isTooltipOpen} anchorElement={ref} placement="top">
        <TooltipContainer {...tooltipProps}>{children}</TooltipContainer>
      </Popper>
    </li>
  );
};
