/** @jsx jsx */
import React from 'react';
import {css, jsx} from '@emotion/core';
import {type} from '@workday/canvas-kit-react-core';
import {TooltipContainer} from '@workday/canvas-kit-react-tooltip';
import {Popper} from '@workday/canvas-kit-react-popup';

import {useTruncateTooltip} from './hooks';

export interface CurrentCrumbProps extends React.HTMLAttributes<HTMLLIElement> {
  maxWidth?: number | string;
}

export const CurrentCrumb = ({children, maxWidth, ...elemProps}: CurrentCrumbProps) => {
  const ref = React.useRef<HTMLSpanElement>(null);

  const {
    isTooltipOpen,
    openTooltip,
    closeTooltip,
    truncateStyles,
    tooltipProps,
  } = useTruncateTooltip(maxWidth);

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
        tabIndex={0}
        onMouseEnter={openTooltip}
        onMouseLeave={closeTooltip}
        onFocus={openTooltip}
        onBlur={closeTooltip}
      >
        {children}
      </span>
      <Popper open={isTooltipOpen} anchorElement={ref} placement="top">
        <TooltipContainer {...tooltipProps}>{children}</TooltipContainer>
      </Popper>
    </li>
  );
};
