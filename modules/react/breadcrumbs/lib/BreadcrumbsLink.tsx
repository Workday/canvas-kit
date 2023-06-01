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
  tooltipProps?: OverflowTooltipProps | {};
}

type StyledLinkProps = Pick<BreadcrumbsLinkProps, 'maxWidth' | 'href'>;

const {color, ...subtextLargeStyles} = type.levels.subtext.large;

const StyledLink = styled(Hyperlink)(
  {
    ...subtextLargeStyles,
  },
  ({maxWidth}: StyledLinkProps) => ({
    ...ellipsisStyles,
    maxWidth,
  })
);

export const BreadcrumbsLink = createComponent('a')({
  displayName: 'Breadcrumbs.Link',
  Component: ({
    maxWidth = 350,
    href,
    tooltipProps = {},
    children,
    ...props
  }: BreadcrumbsLinkProps) => {
    return (
      <OverflowTooltip {...tooltipProps}>
        <StyledLink maxWidth={maxWidth} href={href} role="link" {...props}>
          {children}
        </StyledLink>
      </OverflowTooltip>
    );
  },
});
