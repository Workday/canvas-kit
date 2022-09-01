import React from 'react';
import {styled, createComponent, ellipsisStyles} from '@workday/canvas-kit-react/common';
import {Hyperlink} from '@workday/canvas-kit-react/button';
import {OverflowTooltip, OverflowTooltipProps} from '@workday/canvas-kit-react/tooltip';
import {type} from '@workday/canvas-kit-react/tokens';

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
  tooltipProps?: OverflowTooltipProps | {};
}

type StyledLinkProps = Pick<BreadcrumbsLinkProps, 'maxWidth' | 'href'>;

const {color, ...subtextLargeStyles} = type.levels.subtext.large;

const StyledLink = styled(Hyperlink)(
  {
    ...subtextLargeStyles,
  },
  ({maxWidth}: StyledLinkProps) => ({
    maxWidth,
    ...ellipsisStyles,
  })
);

export const BreadcrumbsLink = createComponent('a')({
  displayName: 'Breadcrumbs.Link',
  Component: ({
    maxWidth = 350,
    onAction,
    onClick,
    href,
    tooltipProps = {},
    children,
    ...props
  }: BreadcrumbsLinkProps) => {
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
      <OverflowTooltip {...tooltipProps}>
        <StyledLink maxWidth={maxWidth} href={href} role="link" onClick={handleClick} {...props}>
          {children}
        </StyledLink>
      </OverflowTooltip>
    );
  },
});
