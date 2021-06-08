import React from 'react';
import {styled} from '@workday/canvas-kit-react/common';
import {Hyperlink} from '@workday/canvas-kit-react/button';
import {type} from '@workday/canvas-kit-react/tokens';
import {TooltipContainer} from '@workday/canvas-kit-react/tooltip';
import {Popper} from '@workday/canvas-kit-react/popup';

import {useTruncateTooltip} from './hooks';
import {truncateStyles} from './styles';

export interface BreadcrumbLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * The href url of the anchor tag
   */
  href: string;
  /**
   * The max-width of the link text
   */
  maxWidth?: number;
  /**
   * A handler function for overriding hard-redirects with links
   */
  onAction?: (href: string) => void;
}

type StyledLinkProps = Pick<BreadcrumbLinkProps, 'maxWidth' | 'href'>;

const StyledLink = styled(Hyperlink)(
  {
    ...type.levels.subtext.large,
  },
  ({maxWidth}: StyledLinkProps) => ({
    ...truncateStyles(maxWidth),
  })
);

export const BreadcrumbLink = ({
  maxWidth,
  onAction,
  onClick,
  href,
  children,
  ...props
}: BreadcrumbLinkProps) => {
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
