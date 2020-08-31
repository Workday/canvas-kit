/** @jsx jsx */
import React from 'react';
import {css, jsx} from '@emotion/core';
import {type} from '@workday/canvas-kit-react-core';
import {TooltipContainer} from '@workday/canvas-kit-react-tooltip';
import {Popper} from '@workday/canvas-kit-react-popup';

import {useTruncateTooltip} from './hooks';

// eslint-disable-next-line no-empty-function
const noop = () => {};
export interface LinkedCrumbProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  maxWidth?: number | string;
  onAction?: (href: string) => void;
}

export const LinkedCrumb = ({
  maxWidth,
  onAction,
  onClick = noop,
  href,
  children,
  ...props
}: LinkedCrumbProps) => {
  const ref = React.useRef<HTMLAnchorElement>(null);
  const {
    isTooltipOpen,
    openTooltip,
    closeTooltip,
    truncateStyles,
    tooltipProps,
  } = useTruncateTooltip(maxWidth, ref);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    // allow an override to the hard redirect
    if (onAction) {
      onAction(href);
    } else {
      // default to hard redirecting
      window.location.href = href;
    }
    // don't block the onClick event if it's provided
    onClick(event);
  };

  const linkStyles = css({
    ...truncateStyles,
    ...type.body,
    ...type.variant.link,
  });

  return (
    <React.Fragment>
      <a
        css={linkStyles}
        ref={ref}
        onMouseEnter={openTooltip}
        onMouseLeave={closeTooltip}
        onFocus={openTooltip}
        onBlur={closeTooltip}
        href={href}
        role="link"
        onClick={handleClick}
        {...props}
      >
        {children}
      </a>
      <Popper open={isTooltipOpen} anchorElement={ref} placement="top">
        <TooltipContainer {...tooltipProps}>{children}</TooltipContainer>
      </Popper>
    </React.Fragment>
  );
};
