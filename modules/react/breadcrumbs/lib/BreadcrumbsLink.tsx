import React from 'react';
import {CSSObject} from '@emotion/styled';
import {styled} from '@workday/canvas-kit-react/common';
import {Hyperlink} from '@workday/canvas-kit-react/button';
import {type} from '@workday/canvas-kit-react/tokens';
import {TooltipContainer} from '@workday/canvas-kit-react/tooltip';
import {Popper} from '@workday/canvas-kit-react/popup';

import {useTruncateTooltip} from './hooks/useTruncateTooltip';

export interface BreadcrumbsLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * The href url of the anchor tag
   */
  href: string;
  /**
   * The max-width of the link text
   *
   * @default 350px
   */
  maxWidth?: number;
  /**
   * A handler function for overriding hard-redirects with links
   */
  onAction?: (href: string) => void;
}

type StyledLinkProps = Pick<BreadcrumbsLinkProps, 'maxWidth' | 'href'>;

// default max-width for truncating text
const DEFAULT_MAX_WIDTH = 350;

export const truncateStyles = (maxWidth: number = DEFAULT_MAX_WIDTH): CSSObject => ({
  display: 'inline-block',
  maxWidth,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

const {color, ...subtextLargeStyles} = type.levels.subtext.large;

const StyledLink = styled(Hyperlink)(
  {
    ...subtextLargeStyles,
  },
  ({maxWidth}: StyledLinkProps) => ({
    ...truncateStyles(maxWidth),
  })
);

export const BreadcrumbsLink = ({
  maxWidth,
  onAction,
  onClick,
  href,
  children,
  ...props
}: BreadcrumbsLinkProps) => {
  const ref = React.useRef<HTMLAnchorElement>(null);
  const {isTooltipOpen, openTooltip, closeTooltip, tooltipProps} = useTruncateTooltip(ref);

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
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <React.Fragment>
      <StyledLink
        ref={ref}
        maxWidth={maxWidth}
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
      </StyledLink>
      <Popper open={isTooltipOpen} anchorElement={ref} placement="top">
        <TooltipContainer {...tooltipProps}>{children}</TooltipContainer>
      </Popper>
    </React.Fragment>
  );
};
